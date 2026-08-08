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
        const activeHero = targetHeroObjects[0];
        const heroName = activeHero.name;

        let focusWords = [];
        if (typeof window !== 'undefined' && typeof window.getHeroAntiRatingFocusWords === 'function') {
            const focusObjs = window.getHeroAntiRatingFocusWords(activeHero, 50);
            if (focusObjs && focusObjs.length > 0) {
                focusWords = focusObjs.map(w => typeof w === 'string' ? w : (Array.isArray(w) ? w[0] : (w.word || "")));
            }
        }
        if (!focusWords || focusWords.length === 0) {
            focusWords = activeHero.words ? activeHero.words.map(w => typeof w === 'string' ? w : (Array.isArray(w) ? w[0] : (w.word || ""))) : [];
        }

        // 1. Get Focus Words that have 0 usage TODAY
        const unUsedFocusWords = focusWords.filter(w => {
            if (typeof window !== 'undefined' && typeof window.getWordUsageCount === 'function') {
                return window.getWordUsageCount(activeHero.id, w) === 0;
            }
            return true;
        });

        let targetFiveWords = [];

        if (unUsedFocusWords.length >= 5) {
            // Case 1: Pick 5 random un-used words from today's 50 Focus Words
            const shuffledUnused = [...unUsedFocusWords].sort(() => 0.5 - Math.random());
            targetFiveWords = shuffledUnused.slice(0, 5);
        } else if (unUsedFocusWords.length > 0) {
            // Case 1b: Take all remaining un-used focus words, top up to 5 with other focus words
            const shuffledUnused = [...unUsedFocusWords].sort(() => 0.5 - Math.random());
            const usedFocusWords = focusWords.filter(w => !unUsedFocusWords.includes(w));
            const shuffledUsed = [...usedFocusWords].sort(() => 0.5 - Math.random());
            targetFiveWords = Array.from(new Set([...shuffledUnused, ...shuffledUsed])).slice(0, 5);
        } else {
            // Case 2: ALL 50 Focus Words of the day have ALREADY been used today!
            // Fallback: Pick 5 words from the overall anti-top (least used in lifetime history for this hero)
            let allWords = activeHero.words ? activeHero.words.map(w => typeof w === 'string' ? w : (Array.isArray(w) ? w[0] : (w.word || ""))) : [];
            allWords.sort((wA, wB) => {
                const countA = (typeof window !== 'undefined' && typeof window.getAllTimeWordUsageCount === 'function') ? window.getAllTimeWordUsageCount(activeHero.id, wA) : 0;
                const countB = (typeof window !== 'undefined' && typeof window.getAllTimeWordUsageCount === 'function') ? window.getAllTimeWordUsageCount(activeHero.id, wB) : 0;
                return countA - countB;
            });
            targetFiveWords = allWords.slice(0, 5);
        }

        const sampleWords = targetFiveWords.join(", ");
        const rules = activeHero.grammarRules ? activeHero.grammarRules.join("; ") : "";

        return `You are roleplaying ONLY as ${heroName} (${activeHero.title || 'Hero'}), an English tutor. Speak to the user as "friend".

RULES:
1. Answer the user's message directly using simple A0/A1 English words ONLY.
2. Reply in EXACTLY 2 short, natural English sentences (Sentence 1: Reaction/Answer. Sentence 2: One simple question).
3. PERFECT GRAMMAR MANDATE: Your sentences MUST be 100% grammatically correct! Never combine conflicting words (e.g. NEVER write "those a dress", "those a lamp", "a socks").
4. TARGET WORDS: Naturally use 1 target word from [${sampleWords}] in your response and ask a question that invites the user to practice it. Use the target word ONLY if it fits 100% naturally in fluent English. Grammatical correctness is your top priority!
5. Output ONLY your hero's 2-sentence English reply. Never output translations, corrections, brackets, or system notes.`;
    }

    async checkGrammarBeforeSending(userText, lastHeroMessageText = "") {
        if (!userText || !userText.trim()) {
            return { isValid: true, feedback: null };
        }

        // Instant local heuristic check
        if (typeof window !== 'undefined' && typeof window.evaluateUserGrammarClientSide === 'function') {
            const clientErr = window.evaluateUserGrammarClientSide(userText);
            if (clientErr) {
                return { isValid: false, feedback: clientErr };
            }
        }

        if (this.provider === 'fallback') {
            return { isValid: true, feedback: null };
        }

        try {
            const heroContextPrompt = lastHeroMessageText 
                ? `Hero asked: "${lastHeroMessageText}"` 
                : "New conversation.";

            const messages = [
                {
                    role: 'system',
                    content: `You are an English grammar evaluator for A0/A1 students learning English.
Hero question: "${heroContextPrompt}"
Student English text: "${userText}"

CRITICAL RULES:
1. The student MUST write in English. Natural English answers (e.g. "Yes, I do", "I have a group", "Yes, I am", "No", "Hi") are 100% CORRECT!
2. DO NOT suggest changes if the student ALREADY has the correct preposition or phrase in their text!
3. ONLY flag REAL English grammar errors (e.g. "I has", "I happy", "No, I not", Russian words mixed inside English).

OUTPUT INSTRUCTION:
- If English text is grammatically CORRECT: Output EXACTLY "VALID" (nothing else!).
- If REAL English grammar error: Output "ERROR: <Short Russian explanation showing the corrected ENGLISH sentence, e.g. Замените 'I has' на 'I have'>".`
                }
            ];

            const response = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    provider: this.provider,
                    endpoint: this.endpoint,
                    model: this.modelName,
                    apiKey: this.geminiApiKey,
                    messages: messages
                })
            });

            if (!response.ok) throw new Error("Grammar check call failed");
            const data = await response.json();
            if (data.success && data.content) {
                const raw = data.content.trim();
                
                // If response starts with VALID or does NOT explicitly specify ERROR:
                if (raw.toUpperCase().startsWith("VALID") || (!raw.startsWith("ERROR:") && !raw.includes("ошибк") && !raw.includes("Замените"))) {
                    return { isValid: true, feedback: null };
                }

                let cleanFeedback = raw.replace(/^ERROR:\s*/gi, '').replace(/^VALID/gi, '').replace(/^\[Correction:\s*/gi, '').replace(/\]$/g, '').trim();

                // SANITY FILTER 1: If model tells user to replace English with Russian text
                if (/на\s+["'«][а-яА-ЯёЁ\s,!.?]+["'»]/i.test(cleanFeedback) || /на\s+русск/i.test(cleanFeedback) || /перевод/i.test(cleanFeedback)) {
                    console.warn("Ignored false Russian translation hallucination from model:", cleanFeedback);
                    return { isValid: true, feedback: null };
                }

                // SANITY FILTER 2: If model suggested replacing "A" with "B", but user's text ALREADY contains "B":
                const replaceMatch = cleanFeedback.match(/замените\s+["'«]?([^"'»]+)["'»]?\s+на\s+["'«]?([^"'»]+)["'»]?/i);
                if (replaceMatch) {
                    const correctPart = replaceMatch[2].trim().toLowerCase();
                    if (correctPart && userText.toLowerCase().includes(correctPart)) {
                        console.warn("Ignored redundant suggestion because user text already contains:", correctPart);
                        return { isValid: true, feedback: null };
                    }
                }

                if (!cleanFeedback) cleanFeedback = "Пожалуйста, проверьте грамматику предложения.";
                return { isValid: false, feedback: cleanFeedback };
            }
        } catch (err) {
            console.warn("Pre-flight AI grammar check failed, proceeding:", err);
        }

        return { isValid: true, feedback: null };
    }

    async generateResponse(messagesHistory, scenario, targetHeroObjects = null) {
        if (this.provider === 'fallback') {
            return this.getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects);
        }

        let formattedMessages = [];
        try {
            let systemPromptContent = "";
            if (targetHeroObjects && targetHeroObjects.length > 0) {
                systemPromptContent = this.buildHeroPrompt(targetHeroObjects);
            } else {
                systemPromptContent = `${(scenario && scenario.systemPrompt) ? scenario.systemPrompt : this.systemPrompt}

RULES:
1. Respond in 2-3 concise, natural English sentences.
2. Output ONLY response text. Do not output notes or brackets.`;
            }

            const systemMessage = { role: 'system', content: systemPromptContent };
            const recentHistory = (messagesHistory || []).slice(-8); // Keep last 8 messages for sharp context!
            formattedMessages = [systemMessage, ...recentHistory];

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
            if (this.provider !== 'gemini' && this.geminiApiKey && formattedMessages.length > 0) {
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
                { role: 'system', content: "Ты — профессиональный переводчик. Твоя задача: переведи данный текст с английского на русский язык. Выведи ТОЛЬКО русский перевод без кавычек, вступлений, пояснений и английских слов." },
                { role: 'user', content: `Переведи на русский: "${englishText}"` }
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
                    .replace(/^Переведи на русский:\s*/gi, '')
                    .replace(/^["']|["']$/g, '')
                    .trim();

                // Clean out rogue standalone English words inserted in the middle of Russian text (e.g. "какой child А ты")
                cleaned = cleaned.replace(/([а-яА-ЯёЁ]+)\s+[a-zA-Z]{2,}\s+([а-яА-ЯёЁ]+)/g, '$1 $2');

                // Deduplicate repeated sentences/phrases if small LLM doubled them
                const parts = cleaned.split(/(?<=[.!?])\s+/);
                if (parts.length > 1) {
                    cleaned = Array.from(new Set(parts)).join(" ");
                }

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
            const firstWordObj = firstHero.words && firstHero.words[0];
            const sampleWord = firstWordObj ? (Array.isArray(firstWordObj) ? firstWordObj[0] : (firstWordObj.word || "friend")) : "friend";
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

        if (!text || typeof text !== 'string') return;
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
                    if (gender === 'female') {
                        voice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Zira') || v.name.includes('Hazel') || v.name.includes('Susan') || v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('Aria') || v.name.includes('Ana') || v.name.includes('Female') || v.name.includes('Google UK English Female')));
                        if (!voice) {
                            utterance.pitch = pitch ? pitch * 1.25 : 1.25;
                        }
                    } else if (gender === 'male') {
                        voice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('David') || v.name.includes('George') || v.name.includes('Mark') || v.name.includes('Guy') || v.name.includes('Stefan') || v.name.includes('Male') || v.name.includes('Google US English')));
                        if (!voice) {
                            utterance.pitch = pitch ? pitch * 0.85 : 0.85;
                        }
                    }
                    if (!voice) {
                        voice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('Guy')));
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

    stop() {
        this.stopSpeech();
        this.stopListening();
    }
}
