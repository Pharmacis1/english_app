/* AI Service Integration for LM Studio, Ollama, & Offline Fallback with Target Hero Vocabulary & Grammar Injection */
class AIService {
    constructor() {
        this.provider = localStorage.getItem("ai_provider") || "ollama"; // 'ollama', 'lmstudio', 'gemini', 'fallback'
        this.endpoint = localStorage.getItem("api_endpoint") || "http://localhost:11434";
        this.modelName = localStorage.getItem("model_name") || "llama3";
        this.geminiApiKey = localStorage.getItem("gemini_api_key") || "";
        this.systemPrompt = localStorage.getItem("system_prompt") || 
            "You are an expert English tutor and conversation partner. Respond concisely in English. If the user makes any grammar or vocabulary mistake, ALWAYS explain the error in Russian at the end in this format: [Correction: 💡 Объяснение ошибки на русском языке].";
    }

    saveSettings(provider, endpoint, modelName, systemPrompt, geminiApiKey = "") {
        this.provider = provider;
        this.endpoint = endpoint.replace(/\/$/, ''); // Trim trailing slash
        this.modelName = modelName;
        this.systemPrompt = systemPrompt;
        this.geminiApiKey = geminiApiKey;

        localStorage.setItem("ai_provider", provider);
        localStorage.setItem("api_endpoint", this.endpoint);
        localStorage.setItem("model_name", modelName);
        localStorage.setItem("system_prompt", systemPrompt);
        localStorage.setItem("gemini_api_key", geminiApiKey);
    }

    async fetchInstalledModels() {
        try {
            const res = await fetch(`/api/ai/models?provider=${this.provider}&endpoint=${encodeURIComponent(this.endpoint)}`);
            if (res.ok) {
                const data = await res.json();
                if (data.success && Array.isArray(data.models)) {
                    return data.models;
                }
            }
        } catch (e) {}
        return [];
    }

    async testConnection() {
        if (this.provider === 'fallback') {
            return { success: true, message: "Smart Fallback Simulator active (No server required)" };
        }

        try {
            const res = await fetch(`/api/ai/models?provider=${this.provider}&endpoint=${encodeURIComponent(this.endpoint)}`);
            if (res.ok) {
                const data = await res.json();
                if (data.success && data.models && data.models.length > 0) {
                    return { 
                        success: true, 
                        message: `Connected to ${this.provider.toUpperCase()}! Installed models: ${data.models.join(', ')}`,
                        models: data.models
                    };
                } else if (data.success) {
                    return { 
                        success: true, 
                        message: `Connected to ${this.provider.toUpperCase()}! Server running.`,
                        models: []
                    };
                }
            }
            return { success: false, message: `Could not reach ${this.provider} server at ${this.endpoint}` };
        } catch (err) {
            return { success: false, message: `Server error or offline at ${this.endpoint}: ${err.message}` };
        }
    }

    buildHeroPrompt(targetHeroObjects) {
        if (!targetHeroObjects || targetHeroObjects.length === 0) return "";
        const words = targetHeroObjects.flatMap(h => h.words.map(w => w.word)).slice(0, 40).join(", ");
        const rules = targetHeroObjects.flatMap(h => h.grammarRules).join("; ");

        return `\n\n[CEFR A0/A1 STRICT SIMPLICITY & LEADING QUESTION DIRECTIVE:
You are speaking to a complete beginner student (CEFR A0).
1. USE VERY SHORT, ULTRA-SIMPLE ENGLISH SENTENCES (4 to 6 words per sentence).
2. ONLY USE BASIC A0 WORDS (such as: ${words}). DO NOT use complex words like 'duty', 'protect', 'allies', 'by the way', 'consequently', 'furthermore', 'noble', 'proud'.
3. CRITICAL LEADING QUESTION RULE: You MUST end your response with a simple LEADING QUESTION designed to guide the user into using their cheatsheet words (${words}) and grammar rules (${rules}).
   Examples of leading questions to ask:
   - "Are you happy or brave today?" (User can answer: "I am happy")
   - "Do you have a brother or a sister?" (User can answer: "I have a brother")
   - "Who is in your family? Is your father a leader?" (User can answer: "My father is a leader")
   - "Do you have a sword or a shield?" (User can answer: "I have a shield")
Ask simple questions like these so the user can easily answer using their cheatsheet words!]`;
    }

    async generateResponse(messagesHistory, scenario, targetHeroObjects = null) {
        if (this.provider === 'fallback') {
            return this.getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects);
        }

        try {
            const heroPrompt = this.buildHeroPrompt(targetHeroObjects);
            const strictGuide = `\n[MANDATORY GRAMMAR & SPELLING EVALUATION DIRECTIVE:
At the very end of EVERY response, you MUST append a bracketed evaluation block in RUSSIAN for the user's input:
- Check for Russian words inserted into English (e.g. "умер" -> "dead" / "passed away").
- Check for incorrect short answers (e.g. "Not" -> "No" or "No, I am not").
- Check for missing articles or missing verbs (e.g. "I have sister" -> "I have a sister", "I happy" -> "I am happy").
- Check for typos (e.g. "happi" -> "happy").
- If user's input has ANY error: [Correction: 💡 В сообщении есть ошибка: ...]
- ONLY if user's input is 100% perfect without any errors: [Correction: ✅ Отлично! Предложение написано полностью правильно!]
DO NOT output any translation or extra brackets in the English text.]`;

            const systemMessage = { role: 'system', content: `${this.systemPrompt}\nContext/Scenario: ${scenario.systemPrompt}${strictGuide}${heroPrompt}` };
            const formattedMessages = [systemMessage, ...messagesHistory];

            const response = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    provider: this.provider,
                    endpoint: this.endpoint,
                    model: this.modelName,
                    apiKey: this.geminiApiKey,
                    messages: formattedMessages
                })
            });

            if (!response.ok) throw new Error(`AI Proxy Error ${response.status}`);
            const data = await response.json();
            if (!data.success) throw new Error(data.error || "Proxy call failed");
            return this.parseAIOutput(data.content);
        } catch (err) {
            console.warn("Primary AI call failed:", err);
            
            // If local AI (Ollama/LM Studio) failed, but Gemini API Key is available, automatically route to Gemini Cloud API!
            if (this.provider !== 'gemini' && this.geminiApiKey) {
                try {
                    console.log("Auto-switching fallback to Google Gemini Cloud API...");
                    const resp = await fetch('/api/ai/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            provider: 'gemini',
                            model: 'gemini-3.5-flash-lite',
                            apiKey: this.geminiApiKey,
                            messages: formattedMessages
                        })
                    });
                    if (resp.ok) {
                        const data = await resp.json();
                        if (data.success && data.content) {
                            return this.parseAIOutput(data.content);
                        }
                    }
                } catch (geminiErr) {
                    console.warn("Gemini Cloud fallback also failed:", geminiErr);
                }
            }

            const fallback = this.getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects);
            fallback.text = `[Notice: Switched to offline tutor due to connection issue: ${err.message}]\n\n` + fallback.text;
            return fallback;
        }
    }

    async translateText(englishText) {
        if (!englishText) return "";
        if (this.provider === 'fallback') {
            return translateA0TextToRussian(englishText);
        }
        try {
            const formattedMessages = [
                { role: 'system', content: "You are a strict, direct English-to-Russian translator. Translate the given text into natural Russian ONLY. Do NOT output Chinese, Japanese, or any extra commentary or conversational questions." },
                { role: 'user', content: `Translate this text to Russian: "${englishText}"` }
            ];

            const response = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    provider: this.provider,
                    endpoint: this.endpoint,
                    model: this.modelName,
                    apiKey: this.geminiApiKey,
                    messages: formattedMessages
                })
            });

            if (!response.ok) throw new Error("Translation proxy error");
            const data = await response.json();
            if (data.success && data.content) {
                let cleaned = data.content
                    .replace(/[\u4e00-\u9fff\u3400-\u4dbf\u3000-\u303f\uff00-\uffef]+/g, '') // Remove any CJK Chinese/Asian characters
                    .replace(/^Translation:\s*/gi, '')
                    .replace(/^Перевод:\s*/gi, '')
                    .replace(/^["']|["']$/g, '')
                    .trim();

                if (cleaned.length > 0) return cleaned;
            }
        } catch (e) {
            console.warn("Dedicated AI translation failed, using fallback:", e);
        }
        return translateA0TextToRussian(englishText);
    }

    parseAIOutput(rawText) {
        let text = rawText;
        let correction = null;

        const correctionMatch = text.match(/\[Correction:\s*([\s\S]*?)\]/i);
        if (correctionMatch) {
            correction = correctionMatch[1].trim();
            text = text.replace(/\[Correction:\s*[\s\S]*?\]/gi, '').trim();
        }

        // Clean CJK characters & leftover 'Translation:' text that small models might leak
        text = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf\u3000-\u303f\uff00-\uffef]+/g, '');
        text = text.replace(/Translation:\s*.*$/gi, '').trim();

        return { text, correction };
    }

    getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects = null) {
        const lastUserMsg = messagesHistory[messagesHistory.length - 1]?.content.toLowerCase() || '';
        let replyText = "";
        let correction = null;

        // Basic grammar checker heuristic in fallback mode
        if (lastUserMsg.includes("i has")) {
            correction = "💡 Grammar Tip: Замените 'I has' на 'I have'. Местоимение 'I' сочетается с глаголом 'have'.";
        } else if (lastUserMsg.includes("yesterday i have")) {
            correction = "💡 Grammar Tip: Со словом 'yesterday' используется Past Simple ('yesterday I did / fixed'), а не Present Perfect.";
        }

        let heroPrefix = "";
        if (targetHeroObjects && targetHeroObjects.length > 0) {
            const firstHero = targetHeroObjects[0];
            const sampleWord = firstHero.words[0] ? firstHero.words[0].word : "friend";
            heroPrefix = `[Using ${firstHero.name}'s word "${sampleWord}"] `;
        }

        if (scenario.id === 'tech-interview') {
            if (lastUserMsg.includes("react") || lastUserMsg.includes("javascript") || lastUserMsg.includes("frontend") || lastUserMsg.includes("developer")) {
                replyText = `${heroPrefix}That sounds impressive! Could you describe a challenging project where you had to optimize performance or tackle complex state management?`;
            } else if (lastUserMsg.includes("year") || lastUserMsg.includes("experience")) {
                replyText = `${heroPrefix}Great experience background! How do you usually handle disagreement with team members during technical decisions?`;
            } else {
                replyText = `${heroPrefix}Thank you for sharing that. Could you tell me more about your daily workflow and how you prioritize your technical tasks?`;
            }
        } else if (scenario.id === 'code-review') {
            replyText = `${heroPrefix}That's a very valid point. If we switch to Promise.all, we should also make sure we handle individual rejections gracefully using Promise.allSettled. What do you think?`;
        } else if (scenario.id === 'coffee-shop') {
            replyText = `${heroPrefix}Got it! Would you like that with oat milk or whole milk? And would you like any blueberry muffins with that today?`;
        } else {
            replyText = `${heroPrefix}That makes total sense! Tell me more about your thoughts on this topic.`;
        }

        return { text: replyText, correction };
    }
}

class VoiceService {
    constructor() {
        this.synth = window.speechSynthesis;
        this.recognition = null;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;

        this.ttsEngine = localStorage.getItem("tts_engine") || "kokoro"; // 'kokoro', 'native'
        this.ttsEndpoint = localStorage.getItem("tts_endpoint") || "http://127.0.0.1:8880";
        this.sttEngine = localStorage.getItem("stt_engine") || "whisper"; // 'whisper', 'native'
        this.sttEndpoint = localStorage.getItem("stt_endpoint") || "http://127.0.0.1:8000";

        this.initRecognition();
    }

    initRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = 'en-US';
        }
    }

    saveVoiceSettings(ttsEngine, ttsEndpoint, sttEngine, sttEndpoint) {
        this.ttsEngine = ttsEngine;
        this.ttsEndpoint = ttsEndpoint;
        this.sttEngine = sttEngine;
        this.sttEndpoint = sttEndpoint;

        localStorage.setItem("tts_engine", ttsEngine);
        localStorage.setItem("tts_endpoint", ttsEndpoint);
        localStorage.setItem("stt_engine", sttEngine);
        localStorage.setItem("stt_endpoint", sttEndpoint);
    }

    async speak(text, onStart = null, onEnd = null, heroVoiceConfig = null) {
        this.stopSpeech();

        const cleanText = text.replace(/[*_#`]/g, '').trim();
        if (!cleanText) return;

        const kokoroVoice = heroVoiceConfig?.kokoroVoice || 'am_adam';
        const pitch = heroVoiceConfig?.pitch || 1.0;
        const rate = heroVoiceConfig?.rate || 0.95;
        const gender = heroVoiceConfig?.gender || null;

        if (this.ttsEngine === 'kokoro') {
            try {
                const res = await fetch('/api/ai/tts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        text: cleanText,
                        voice: kokoroVoice,
                        endpoint: this.ttsEndpoint
                    })
                });

                const contentType = res.headers.get('Content-Type') || '';
                if (res.ok && contentType.includes('audio')) {
                    if (onStart) onStart();
                    const blob = await res.blob();
                    const audioUrl = URL.createObjectURL(blob);
                    this.currentAudio = new Audio(audioUrl);
                    this.currentAudio.onended = () => {
                        URL.revokeObjectURL(audioUrl);
                        if (onEnd) onEnd();
                    };
                    this.currentAudio.onerror = () => {
                        URL.revokeObjectURL(audioUrl);
                        this.speakNative(cleanText, onStart, onEnd, pitch, rate, gender);
                    };
                    await this.currentAudio.play();
                    return;
                } else {
                    console.warn("Kokoro TTS endpoint returned non-200. Falling back seamlessly to Browser Native Speech Synthesis.");
                }
            } catch (e) {
                console.warn("Kokoro TTS endpoint failed, falling back to Native Speech Synthesis:", e);
            }
        }

        this.speakNative(cleanText, onStart, onEnd, pitch, rate, gender);
    }

    speakNative(cleanText, onStart = null, onEnd = null, pitch = 1.0, rate = 0.95, gender = null) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'en-US';
            utterance.rate = rate;
            utterance.pitch = pitch;

            const playUtterance = () => {
                const voices = window.speechSynthesis.getVoices();
                if (voices.length > 0) {
                    let voice = null;
                    if (gender === 'female') {
                        voice = voices.find(v => v.lang.includes('en') && (v.name.includes('Zira') || v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('Female') || v.name.includes('Google US')));
                    } else if (gender === 'male') {
                        voice = voices.find(v => v.lang.includes('en') && (v.name.includes('David') || v.name.includes('Guy') || v.name.includes('George') || v.name.includes('Male')));
                    }
                    if (!voice) {
                        voice = voices.find(v => v.lang.includes('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('Guy')));
                    }
                    if (!voice) {
                        voice = voices.find(v => v.lang.startsWith('en'));
                    }
                    if (voice) utterance.voice = voice;
                }

                if (onStart) utterance.onstart = onStart;
                if (onEnd) {
                    utterance.onend = onEnd;
                    utterance.onerror = onEnd;
                }

                window.speechSynthesis.speak(utterance);
            };

            if (window.speechSynthesis.getVoices().length === 0) {
                window.speechSynthesis.onvoiceschanged = () => {
                    window.speechSynthesis.onvoiceschanged = null;
                    playUtterance();
                };
            } else {
                playUtterance();
            }
        }
    }

    stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }
    }

    async startListening(onResult, onStatusChange, onError) {
        if (this.isRecording) {
            this.stopListening();
            return;
        }

        // If Whisper STT engine is selected
        if (this.sttEngine === 'whisper') {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.audioChunks = [];
                this.mediaRecorder = new MediaRecorder(stream);

                this.mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) this.audioChunks.push(e.data);
                };

                this.mediaRecorder.onstart = () => {
                    this.isRecording = true;
                    if (onStatusChange) onStatusChange(true, "🎙️ [Whisper AI] Recording... Click mic button when done!");
                };

                this.mediaRecorder.onstop = async () => {
                    this.isRecording = false;
                    stream.getTracks().forEach(track => track.stop());

                    if (onStatusChange) onStatusChange(true, "⏳ [Whisper AI] Transcribing audio with neural network...");

                    const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
                    const reader = new FileReader();
                    reader.readAsDataURL(audioBlob);
                    reader.onloadend = async () => {
                        const base64Data = reader.result;
                        try {
                            const res = await fetch('/api/ai/stt', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    audioBase64: base64Data,
                                    endpoint: this.sttEndpoint
                                })
                            });

                            const data = await res.json();
                            if (res.ok && data.success && data.text) {
                                if (onStatusChange) onStatusChange(false, "");
                                if (onResult) onResult(data.text);
                            } else {
                                console.warn("Whisper STT failed, falling back to Browser Recognition:", data.error);
                                if (onStatusChange) onStatusChange(false, "Whisper STT fallback to Browser Speech");
                                this.startListeningNative(onResult, onStatusChange, onError);
                            }
                        } catch (err) {
                            console.warn("Whisper STT network error:", err);
                            this.startListeningNative(onResult, onStatusChange, onError);
                        }
                    };
                };

                this.mediaRecorder.start();
                return;
            } catch (err) {
                console.warn("Microphone access error for Whisper STT:", err);
                // Fallback to Native
            }
        }

        this.startListeningNative(onResult, onStatusChange, onError);
    }

    startListeningNative(onResult, onStatusChange, onError) {
        if (!this.recognition) {
            if (onError) onError("Browser Speech Recognition is not supported.");
            return;
        }

        this.recognition.onstart = () => {
            this.isRecording = true;
            if (onStatusChange) onStatusChange(true, "🎙️ [Browser Native] Listening...");
        };

        this.recognition.onresult = (event) => {
            let transcript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            if (onResult) onResult(transcript);
        };

        this.recognition.onerror = (event) => {
            this.isRecording = false;
            if (onStatusChange) onStatusChange(false, "Microphone error: " + event.error);
            if (onError) onError(event.error);
        };

        this.recognition.onend = () => {
            this.isRecording = false;
            if (onStatusChange) onStatusChange(false, "");
        };

        try {
            this.recognition.start();
        } catch (e) {
            this.stopListening();
        }
    }

    stopListening() {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
            this.isRecording = false;
            return;
        }
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
            this.isRecording = false;
        }
    }
}
