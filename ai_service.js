/* AI Service Integration for LM Studio, Ollama, & Offline Fallback with Target Hero Vocabulary & Grammar Injection */
class AIService {
    constructor() {
        this.geminiApiKey = localStorage.getItem("gemini_api_key") || "";
        const savedProvider = localStorage.getItem("ai_provider");
        this.provider = savedProvider || (this.geminiApiKey ? "gemini" : "ollama"); // 'gemini', 'ollama', 'lmstudio', 'fallback'
        this.endpoint = localStorage.getItem("api_endpoint") || "http://localhost:11434";
        this.modelName = localStorage.getItem("model_name") || "gemini-3.5-flash-lite";
        if (this.provider === 'gemini') {
            if (!this.modelName || this.modelName.includes('2.5') || this.modelName.includes('2.0') || this.modelName.includes('1.5') || this.modelName.includes(':') || this.modelName.includes('qwen') || this.modelName.includes('llama') || this.modelName.includes('mistral') || !this.modelName.startsWith('gemini')) {
                this.modelName = 'gemini-3.5-flash-lite';
                localStorage.setItem("model_name", "gemini-3.5-flash-lite");
            }
        }
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
            const focusObjs = window.getHeroAntiRatingFocusWords(activeHero, 20);
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
        let priorityWord = "";

        if (unUsedFocusWords.length >= 5) {
            // Case 1: Pick 5 random un-used words from today's 20 Focus Words
            const shuffledUnused = [...unUsedFocusWords].sort(() => 0.5 - Math.random());
            targetFiveWords = shuffledUnused.slice(0, 5);
            priorityWord = targetFiveWords[0];
        } else if (unUsedFocusWords.length > 0) {
            // Case 1b: Take all remaining un-used focus words, top up to 5 with other focus words
            const shuffledUnused = [...unUsedFocusWords].sort(() => 0.5 - Math.random());
            const usedFocusWords = focusWords.filter(w => !unUsedFocusWords.includes(w));
            const shuffledUsed = [...usedFocusWords].sort(() => 0.5 - Math.random());
            targetFiveWords = Array.from(new Set([...shuffledUnused, ...shuffledUsed])).slice(0, 5);
            priorityWord = shuffledUnused[0]; // Guaranteed unused word!
        } else {
            // Case 2: ALL 20 Focus Words of the day have ALREADY been used today!
            // Fallback: Pick 5 words from the overall anti-top (least used in lifetime history for this hero)
            let allWords = activeHero.words ? activeHero.words.map(w => typeof w === 'string' ? w : (Array.isArray(w) ? w[0] : (w.word || ""))) : [];
            allWords.sort((wA, wB) => {
                const countA = (typeof window !== 'undefined' && typeof window.getAllTimeWordUsageCount === 'function') ? window.getAllTimeWordUsageCount(activeHero.id, wA) : 0;
                const countB = (typeof window !== 'undefined' && typeof window.getAllTimeWordUsageCount === 'function') ? window.getAllTimeWordUsageCount(activeHero.id, wB) : 0;
                return countA - countB;
            });
            targetFiveWords = allWords.slice(0, 5);
            priorityWord = targetFiveWords[0];
        }

        const firstTargetLower = (priorityWord || targetFiveWords[0] || "item").toLowerCase();
        let targetHint = "";
        let targetMeaning = "";
        let targetExample = "";
        if (activeHero && activeHero.words) {
            const wordEntry = activeHero.words.find(w => {
                const wStr = Array.isArray(w) ? w[0] : (w.word || "");
                return wStr.toLowerCase() === firstTargetLower;
            });
            if (wordEntry) {
                targetMeaning = Array.isArray(wordEntry) ? wordEntry[2] : (wordEntry.translation || "");
                targetExample = Array.isArray(wordEntry) ? wordEntry[3] : (wordEntry.example || "");
                if (targetMeaning || targetExample) {
                    targetHint = ` (meaning: "${targetMeaning}"${targetExample ? `, example: "${targetExample}"` : ''})`;
                }
            }
        }

        const fiveWordsList = targetFiveWords.map(w => w.toLowerCase()).join(", ");
        const primaryTarget = firstTargetLower;

        this.lastFocusInfo = {
            heroName: heroName,
            primary: primaryTarget,
            meaning: targetMeaning,
            example: targetExample,
            fiveWords: targetFiveWords.map(w => w.toLowerCase()),
            unusedCount: unUsedFocusWords.length
        };

        return `You are roleplaying as ${heroName} (${activeHero.title || 'Hero'}), a warm and encouraging RPG companion helping a beginner student (Level A1 English) practice English.

YOUR MISSION:
Chat naturally with the student in simple, clear A1 English. Respond organically to what the student just said, and keep the conversation flowing smoothly.

LANGUAGE & LEVEL (STRICT A1):
- Vocabulary: Use short, common A1 level English words.
- Tenses: Use ONLY Present Simple and Present Continuous (e.g. "I like...", "Do you have...", "I am making...").
- Strict prohibition: NEVER use Present Perfect ("have been"), Past Perfect, passive voice, or complex idioms.
- Grammar: Write complete, 100% grammatically correct English with proper articles (a/an/the) and correct word order.
- Length: Keep your response short (1 to 2 simple sentences).
- Formatting: NEVER wrap target words or any words in asterisks (**word** or *word*), bolding, quotes, or markdown brackets. Always output 100% plain English text without any asterisks.

TARGET FOCUS WORDS FOR TODAY:
- Focus words for practice: ${fiveWordsList}.
- Primary word to practice in this turn: "${primaryTarget}"${targetHint}.
- Integrate "${primaryTarget}" into your response ONLY if it makes 100% logical and grammatical sense. Never force a word into a nonsensical phrase.

Output ONLY your English response. Do not add Russian text, translations, brackets, asterisks, or meta-notes.`;
    }

    getLastFocusInfo() {
        return this.lastFocusInfo;
    }

    async checkGrammarBeforeSending(userText, lastHeroMessageText = "") {
        if (!userText || !userText.trim()) {
            return { isValid: true, feedback: null };
        }

        // Instant local client-side heuristic check (0 API tokens used)
        if (typeof window !== 'undefined' && typeof window.evaluateUserGrammarClientSide === 'function') {
            const clientErr = window.evaluateUserGrammarClientSide(userText);
            if (clientErr) {
                return { isValid: false, feedback: clientErr };
            }
        }

        return { isValid: true, feedback: null };
    }

    async translateText(englishText) {
        if (!englishText) return "";

        // If provider is gemini or fallback, use instant offline translation to save 100% of tokens
        if (this.provider === 'fallback' || this.provider === 'gemini') {
            if (typeof window !== 'undefined' && typeof window.translateA0TextToRussian === 'function') {
                return window.translateA0TextToRussian(englishText);
            }
            return englishText;
        }

        // If local AI (ollama / lmstudio) is selected, send request to local AI server
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
                    .replace(/[\u4e00-\u9fff\u3400-\u4dbf\u3000-\u303f\uff00-\uffef]+/g, '')
                    .replace(/\s*\([^\)]*(?:примечание|note|перевед|китайск|оригинал|язык)[^\)]*\)/gi, '')
                    .replace(/\s*\[[^\]]*(?:примечание|note|перевед|китайск|оригинал|язык)[^\]]*\]/gi, '')
                    .replace(/^Translation:\s*/gi, '')
                    .replace(/^Перевод:\s*/gi, '')
                    .replace(/^Переведи на русский:\s*/gi, '')
                    .replace(/^["']|["']$/g, '')
                    .trim();

                cleaned = cleaned.replace(/([а-яА-ЯёЁ]+)\s+[a-zA-Z]{2,}\s+([а-яА-ЯёЁ]+)/g, '$1 $2');
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

    async generateResponse(messagesHistory, scenario, targetHeroObjects = null) {
        if (this.provider === 'fallback') {
            console.log(`🤖 [AI Response Source] Provider: "SMART OFFLINE FALLBACK" | Model: "Local Offline Simulator"`);
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

            let requestModel = this.modelName;
            if (this.provider === 'gemini') {
                if (!requestModel || requestModel.includes(':') || requestModel.includes('qwen') || requestModel.includes('llama') || requestModel.includes('mistral') || !requestModel.startsWith('gemini') || requestModel.includes('1.5')) {
                    requestModel = 'gemini-3.5-flash-lite';
                }
            }

            const response = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    provider: this.provider,
                    endpoint: this.endpoint,
                    model: requestModel,
                    apiKey: this.geminiApiKey,
                    messages: formattedMessages
                })
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                const detailedErr = errData.error || `AI Proxy Error ${response.status}`;
                console.error(`❌ [AI Proxy Error Detail]:`, detailedErr);
                throw new Error(detailedErr);
            }
            const data = await response.json();
            if (!data.success) throw new Error(data.error || "Proxy call failed");

            let sourceModelInfo = this.modelName;
            if (this.provider === 'gemini') {
                sourceModelInfo = `Google Gemini Cloud API (${data.activeModel || 'gemini-2.5-flash-lite'})`;
            } else if (this.provider === 'ollama') {
                sourceModelInfo = `${this.modelName || 'local'} (Local Ollama Server at ${this.endpoint})`;
            } else if (this.provider === 'lmstudio') {
                sourceModelInfo = `${this.modelName || 'local'} (Local LM Studio Server at ${this.endpoint})`;
            }
            console.log(`🤖 [AI Response Source] Provider: "${this.provider.toUpperCase()}" | Model: "${sourceModelInfo}"`);

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
                            model: 'gemini-2.5-flash-lite',
                            apiKey: this.geminiApiKey,
                            messages: formattedMessages
                        })
                    });
                    if (resp.ok) {
                        const data = await resp.json();
                        if (data.success && data.content) {
                            console.log(`🤖 [AI Response Source] Provider: "GEMINI (Auto-Fallback)" | Model: "Google Gemini Cloud API (${data.activeModel || 'gemini-2.5-flash-lite'})"`);
                            return this.parseAIOutput(data.content);
                        }
                    }
                } catch (geminiErr) {
                    console.warn("Gemini Cloud fallback also failed:", geminiErr);
                }
            }

            console.log(`🤖 [AI Response Source] Provider: "SMART OFFLINE FALLBACK (Error Fallback)" | Model: "Local Offline Simulator"`);
            const fallback = this.getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects);
            return fallback;
        }
    }

    async translateText(englishText) {
        if (!englishText) return "";
        if (this.provider === 'fallback' || this.provider === 'gemini') {
            if (typeof window !== 'undefined' && typeof window.translateA0TextToRussian === 'function') {
                return window.translateA0TextToRussian(englishText);
            }
            return englishText;
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
                    .replace(/[\u4e00-\u9fff\u3400-\u4dbf\u3000-\u303f\uff00-\uffef]+/g, '')
                    .replace(/\s*\([^\)]*(?:примечание|note|перевед|китайск|оригинал|язык)[^\)]*\)/gi, '')
                    .replace(/\s*\[[^\]]*(?:примечание|note|перевед|китайск|оригинал|язык)[^\]]*\]/gi, '')
                    .replace(/^Translation:\s*/gi, '')
                    .replace(/^Перевод:\s*/gi, '')
                    .replace(/^Переведи на русский:\s*/gi, '')
                    .replace(/^["']|["']$/g, '')
                    .trim();

                cleaned = cleaned.replace(/([а-яА-ЯёЁ]+)\s+[a-zA-Z]{2,}\s+([а-яА-ЯёЁ]+)/g, '$1 $2');
                const parts = cleaned.split(/(?<=[.!?])\s+/);
                if (parts.length > 1) {
                    cleaned = Array.from(new Set(parts)).join(" ");
                }

                if (cleaned.length > 0) return cleaned;
            }
        } catch (e) {
            console.warn("Dedicated AI translation failed, using fallback:", e);
        }
        if (typeof window !== 'undefined' && typeof window.translateA0TextToRussian === 'function') {
            return window.translateA0TextToRussian(englishText);
        }
        return englishText;
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

        // Clean markdown bold / italic / asterisks artifacts around target words (e.g. "**grey**" -> "grey", "*purple*" -> "purple")
        text = text.replace(/\*\*+([^*]+?)\*\*+/g, '$1');
        text = text.replace(/\*+([^*]+?)\*+/g, '$1');
        text = text.replace(/__+([^_]+?)__+/g, '$1');
        text = text.replace(/_+([^_]+?)_+/g, '$1');
        text = text.replace(/[*_`#]/g, '');

        // Clean unnatural article + preposition/question word artifacts like "a next to", "a where", "a behind", etc.
        text = text.replace(/\ba\s+(next to|under|in|on|at|behind|near|where|when|why|how)\b/gi, '$1').trim();

        // Clean mid-sentence random capitalization like "Are you Thirsty for..." -> "Are you thirsty for..."
        text = text.replace(/([a-z,;:\s])\s+([A-Z][a-z]+)\b/g, (match, p1, p2) => {
            const properNouns = ["I", "English", "Astraea", "Ignis", "Valerius", "Frostina", "Zephyr", "Thorin", "Selene", "Aria", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            if (properNouns.includes(p2)) return match;
            return p1 + " " + p2.toLowerCase();
        });

        // Clean semantic hallucinations like "thirsty for pizza" -> "hungry for pizza" or "thirsty for water"
        text = text.replace(/\bthirsty\s+for\s+(some\s+)?(pizza|food|bread|cake|cheese|sandwich|meat|burger|apple)\b/gi, 'hungry for $1$2');

        // Clean nonsense LLM template hallucinations: "when you are <noun/food>" -> "with <noun>" (e.g. "when you are pepper" -> "with pepper")
        text = text.replace(/\bwhen\s+you\s+are\s+(pepper|pizza|food|bread|cheese|table|chair|shirt|coat|shoe|hat|hammer|car|dog|cat|house|money)\b/gi, 'with $1');

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

        this.ttsEngine = localStorage.getItem("tts_engine") || "gemini"; // 'gemini', 'kokoro', 'native'
        this.ttsEndpoint = localStorage.getItem("tts_endpoint") || "http://127.0.0.1:8880";
        this.sttEngine = localStorage.getItem("stt_engine") || "groq"; // 'groq', 'whisper', 'native'
        this.sttEndpoint = localStorage.getItem("stt_endpoint") || "http://127.0.0.1:8000";
        this.groqApiKey = localStorage.getItem("groq_api_key") || "";

        this.speechSpeed = parseFloat(localStorage.getItem("hero_chat_voice_speed")) || 1.0;
        this.audioCache = new Map(); // In-memory cache for audio blobs: key -> Blob

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

    setSpeechSpeed(speed) {
        this.speechSpeed = parseFloat(speed) || 1.0;
        localStorage.setItem("hero_chat_voice_speed", this.speechSpeed);
        if (this.currentAudio) {
            try {
                this.currentAudio.playbackRate = this.speechSpeed;
                this.currentAudio.defaultPlaybackRate = this.speechSpeed;
            } catch (e) {}
        }
    }

    getSpeechSpeed() {
        return this.speechSpeed || 1.0;
    }

    clearAudioCache() {
        this.audioCache.clear();
    }

    saveVoiceSettings(ttsEngine, ttsEndpoint, sttEngine, sttEndpoint, groqApiKey = null) {
        this.ttsEngine = ttsEngine;
        this.ttsEndpoint = ttsEndpoint;
        this.sttEngine = sttEngine;
        this.sttEndpoint = sttEndpoint;
        if (groqApiKey) this.groqApiKey = groqApiKey;

        localStorage.setItem("tts_engine", ttsEngine);
        localStorage.setItem("tts_endpoint", ttsEndpoint);
        localStorage.setItem("stt_engine", sttEngine);
        localStorage.setItem("stt_endpoint", sttEndpoint);
        if (groqApiKey) localStorage.setItem("groq_api_key", groqApiKey);
    }

    setSpeechSpeed(speed) {
        this.speechSpeed = parseFloat(speed) || 1.0;
        localStorage.setItem("hero_chat_voice_speed", this.speechSpeed);
        if (this.currentAudio) {
            try {
                this.currentAudio.playbackRate = this.speechSpeed;
                this.currentAudio.defaultPlaybackRate = this.speechSpeed;
            } catch (e) {}
        }
    }

    async speak(text, onStart = null, onEnd = null, heroVoiceConfig = null, customSpeed = null) {
        this.stopSpeech();

        if (!text || typeof text !== 'string') return;
        const cleanText = text.replace(/[*_#`]/g, '').trim();
        if (!cleanText) return;

        const effectiveSpeed = (customSpeed !== null && customSpeed !== undefined) ? parseFloat(customSpeed) : (this.speechSpeed || 1.0);
        const geminiVoice = heroVoiceConfig?.geminiVoice || 'Fenrir';
        const kokoroVoice = heroVoiceConfig?.kokoroVoice || 'am_adam';
        const pitch = heroVoiceConfig?.pitch || 1.0;
        const baseRate = heroVoiceConfig?.rate || 0.95;
        const rate = Math.max(0.1, Math.min(10, baseRate * effectiveSpeed));
        const gender = heroVoiceConfig?.gender || null;

        // 0. Pre-recorded Offline Vocabulary Audio Check (Zero tokens, instant 0.0s latency)
        const wordCount = cleanText.split(/\s+/).length;
        if (wordCount <= 3) {
            const cleanKey = cleanText.toLowerCase().replace(/[^a-z0-9]/g, '_');
            const localWordUrl = `/audio/words/${cleanKey}.wav`;
            try {
                const checkRes = await fetch(localWordUrl, { method: 'HEAD' });
                if (checkRes.ok && checkRes.status === 200) {
                    if (onStart) onStart();
                    const audio = new Audio(localWordUrl);
                    audio.defaultPlaybackRate = effectiveSpeed;
                    audio.playbackRate = effectiveSpeed;
                    audio.preservesPitch = true;
                    this.currentAudio = audio;
                    audio.onended = () => {
                        this.currentAudio = null;
                        if (onEnd) onEnd();
                    };
                    audio.onerror = () => {
                        this.currentAudio = null;
                        this.speakNative(cleanText, onStart, onEnd, pitch, rate, gender);
                    };
                    audio.play().catch(() => audio.onerror());
                    return;
                }
            } catch (e) {
                // Proceed to online pipeline if file check fails
            }
        }

        // 1. Google Gemini Live Audio (Rich Emotional Intonations)
        const geminiKey = localStorage.getItem("gemini_api_key") || "";
        const preferGemini = this.ttsEngine === 'gemini' || (this.ttsEngine !== 'native' && geminiKey);

        if (preferGemini) {
            try {
                const geminiCacheKey = `gemini_${geminiVoice}_${cleanText}`;
                let blob = this.audioCache.get(geminiCacheKey);

                if (!blob) {
                    let res = null;
                    try {
                        res = await fetch('/api/ai/gemini-tts', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                text: cleanText,
                                voiceName: geminiVoice,
                                apiKey: geminiKey
                            })
                        });
                    } catch(fetchErr) {
                        // Retry once after brief pause in case of server reload or transient glitch
                        await new Promise(r => setTimeout(r, 600));
                        res = await fetch('/api/ai/gemini-tts', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                text: cleanText,
                                voiceName: geminiVoice,
                                apiKey: geminiKey
                            })
                        }).catch(() => null);
                    }

                    if (res) {
                        const contentType = res.headers.get('Content-Type') || '';
                        if (res.ok && contentType.includes('audio')) {
                            blob = await res.blob();
                            this.audioCache.set(geminiCacheKey, blob);
                        } else {
                            const errData = await res.json().catch(() => ({}));
                            console.warn(`[Gemini TTS Endpoint ${res.status}]`, errData.error || "Falling back to Kokoro/Native");
                        }
                    }
                }

                if (blob) {
                    console.log(`🔊 [Voice Output] ✨ Engine: "GEMINI LIVE AUDIO" | Voice: "${geminiVoice}" | Hero: "${heroVoiceConfig?.heroName || heroVoiceConfig?.heroId || 'Hero'}" | Speed: ${effectiveSpeed}x | Text: "${cleanText}"`);
                    if (onStart) onStart();
                    const audioUrl = URL.createObjectURL(blob);
                    const audio = new Audio(audioUrl);
                    audio.defaultPlaybackRate = effectiveSpeed;
                    audio.playbackRate = effectiveSpeed;
                    audio.preservesPitch = true;

                    const applyRate = () => {
                        try {
                            audio.playbackRate = effectiveSpeed;
                            audio.defaultPlaybackRate = effectiveSpeed;
                        } catch (e) {}
                    };

                    audio.addEventListener('loadedmetadata', applyRate);
                    audio.addEventListener('play', applyRate);
                    audio.addEventListener('playing', applyRate);

                    audio.onended = () => {
                        URL.revokeObjectURL(audioUrl);
                        if (onEnd) onEnd();
                    };
                    audio.onerror = () => {
                        URL.revokeObjectURL(audioUrl);
                        this.speakNative(cleanText, onStart, onEnd, pitch, rate, gender);
                    };

                    this.currentAudio = audio;
                    await audio.play();
                    applyRate();
                    return;
                }
            } catch (e) {
                console.warn("Gemini TTS failed, trying Kokoro/Native fallback:", e);
            }
        }

        // 2. Local Kokoro Studio TTS
        if (this.ttsEngine === 'kokoro' || this.ttsEngine === 'gemini') {
            const cacheKey = `${kokoroVoice}_${cleanText}`;
            try {
                let blob = this.audioCache.get(cacheKey);

                if (!blob) {
                    const res = await fetch('/api/ai/tts', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            text: cleanText,
                            voice: kokoroVoice,
                            speed: 1.0,
                            endpoint: this.ttsEndpoint
                        })
                    });

                    const contentType = res.headers.get('Content-Type') || '';
                    if (res.ok && contentType.includes('audio')) {
                        blob = await res.blob();
                        this.audioCache.set(cacheKey, blob);
                    } else {
                        console.warn("Kokoro TTS endpoint returned non-200. Falling back to Browser Native Speech Synthesis.");
                    }
                }

                if (blob) {
                    if (onStart) onStart();
                    const audioUrl = URL.createObjectURL(blob);
                    const audio = new Audio(audioUrl);
                    audio.defaultPlaybackRate = effectiveSpeed;
                    audio.playbackRate = effectiveSpeed;
                    audio.preservesPitch = true;

                    const applyRate = () => {
                        try {
                            audio.playbackRate = effectiveSpeed;
                            audio.defaultPlaybackRate = effectiveSpeed;
                        } catch (e) {}
                    };

                    audio.addEventListener('loadedmetadata', applyRate);
                    audio.addEventListener('play', applyRate);
                    audio.addEventListener('playing', applyRate);

                    audio.onended = () => {
                        URL.revokeObjectURL(audioUrl);
                        if (onEnd) onEnd();
                    };
                    audio.onerror = () => {
                        URL.revokeObjectURL(audioUrl);
                        this.speakNative(cleanText, onStart, onEnd, pitch, rate, gender);
                    };

                    this.currentAudio = audio;
                    await audio.play();
                    applyRate();
                    return;
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
                let voice = null;
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

        // 1. Groq Cloud Whisper Large v3 (Ultra-Fast 0.2s, 100% Accurate)
        if (this.sttEngine === 'groq') {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.audioChunks = [];
                this.mediaRecorder = new MediaRecorder(stream);

                this.mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) this.audioChunks.push(e.data);
                };

                this.mediaRecorder.onstart = () => {
                    this.isRecording = true;
                    if (onStatusChange) onStatusChange(true, "🎙️ [Groq Whisper v3] Recording... Click mic when done!");
                };

                this.mediaRecorder.onstop = async () => {
                    this.isRecording = false;
                    stream.getTracks().forEach(track => track.stop());

                    if (onStatusChange) onStatusChange(true, "⚡ [Groq Whisper v3] Transcribing in 0.2s...");

                    const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
                    const reader = new FileReader();
                    reader.readAsDataURL(audioBlob);
                    reader.onloadend = async () => {
                        const base64Data = reader.result;
                        try {
                            const res = await fetch('/api/ai/stt-groq', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    audioBase64: base64Data,
                                    apiKey: this.groqApiKey,
                                    prompt: 'Fantasy RPG dialogue: paladin, knight, rogue, guild, stealth, warrior, spell, potion, castle, sword, armor, oath, shield, quest.'
                                })
                            });

                            const data = await res.json();
                            if (res.ok && data.success && data.text) {
                                if (onStatusChange) onStatusChange(false, "");
                                if (onResult) onResult(data.text);
                            } else {
                                console.warn("Groq Whisper failed, falling back to Browser Recognition:", data.error);
                                if (onStatusChange) onStatusChange(false, "Groq fallback to Browser Speech");
                                this.startListeningNative(onResult, onStatusChange, onError);
                            }
                        } catch (err) {
                            console.warn("Groq Whisper network error:", err);
                            this.startListeningNative(onResult, onStatusChange, onError);
                        }
                    };
                };

                this.mediaRecorder.start();
                return;
            } catch (err) {
                console.warn("Microphone access error for Groq STT:", err);
                // Fallback to Native
            }
        }

        // 2. Local Whisper STT Server (if selected)
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
                    if (onStatusChange) onStatusChange(true, "🎙️ [Local Whisper] Recording... Click mic when done!");
                };

                this.mediaRecorder.onstop = async () => {
                    this.isRecording = false;
                    stream.getTracks().forEach(track => track.stop());

                    if (onStatusChange) onStatusChange(true, "⏳ [Local Whisper] Transcribing...");

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
                                console.warn("Local Whisper STT failed, falling back to Browser Recognition:", data.error);
                                if (onStatusChange) onStatusChange(false, "Local Whisper fallback to Browser Speech");
                                this.startListeningNative(onResult, onStatusChange, onError);
                            }
                        } catch (err) {
                            console.warn("Local Whisper STT network error:", err);
                            this.startListeningNative(onResult, onStatusChange, onError);
                        }
                    };
                };

                this.mediaRecorder.start();
                return;
            } catch (err) {
                console.warn("Microphone access error for Local Whisper STT:", err);
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

        let accumulatedTranscript = "";
        let silenceDebounceTimer = null;

        this.recognition.onstart = () => {
            this.isRecording = true;
            accumulatedTranscript = "";
            if (onStatusChange) onStatusChange(true, "🎙️ [Browser Native] Listening... Speak clearly.");
        };

        this.recognition.onresult = (event) => {
            let fullText = "";
            for (let i = 0; i < event.results.length; i++) {
                fullText += event.results[i][0].transcript + " ";
            }
            accumulatedTranscript = fullText.trim();

            if (onStatusChange) {
                onStatusChange(true, `🎙️ Слушаю: "${accumulatedTranscript}" (можно сделать паузу перед хвостиком)`);
            }

            // Wait 1.8 seconds of silence before finalizing, allowing natural pauses for tag questions
            if (silenceDebounceTimer) clearTimeout(silenceDebounceTimer);
            silenceDebounceTimer = setTimeout(() => {
                if (this.isRecording && accumulatedTranscript) {
                    this.stopListening();
                    if (onResult) onResult(accumulatedTranscript);
                }
            }, 1800);
        };

        this.recognition.onerror = (event) => {
            if (silenceDebounceTimer) clearTimeout(silenceDebounceTimer);
            this.isRecording = false;
            if (onStatusChange) onStatusChange(false, "Microphone error: " + event.error);
            if (onError) onError(event.error);
        };

        this.recognition.onend = () => {
            if (silenceDebounceTimer) clearTimeout(silenceDebounceTimer);
            this.isRecording = false;
            if (onStatusChange) onStatusChange(false, "");
            if (accumulatedTranscript && onResult) {
                onResult(accumulatedTranscript);
                accumulatedTranscript = "";
            }
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
