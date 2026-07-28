/* AI Service Integration for LM Studio, Ollama, & Offline Fallback with Target Hero Vocabulary & Grammar Injection */
class AIService {
    constructor() {
        this.provider = localStorage.getItem("ai_provider") || "ollama"; // 'ollama', 'lmstudio', 'fallback'
        this.endpoint = localStorage.getItem("api_endpoint") || "http://localhost:11434";
        this.modelName = localStorage.getItem("model_name") || "llama3";
        this.systemPrompt = localStorage.getItem("system_prompt") || 
            "You are an expert English tutor and conversation partner. Respond concisely in English. If the user makes any grammar or vocabulary mistake, ALWAYS explain the error in Russian at the end in this format: [Correction: 💡 Объяснение ошибки на русском языке].";
    }

    saveSettings(provider, endpoint, modelName, systemPrompt) {
        this.provider = provider;
        this.endpoint = endpoint.replace(/\/$/, ''); // Trim trailing slash
        this.modelName = modelName;
        this.systemPrompt = systemPrompt;

        localStorage.setItem("ai_provider", provider);
        localStorage.setItem("api_endpoint", this.endpoint);
        localStorage.setItem("model_name", modelName);
        localStorage.setItem("system_prompt", systemPrompt);
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
            const strictGuide = `\n[MANDATORY EVALUATION & TRANSLATION DIRECTIVES:
At the very end of EVERY response, you MUST append TWO bracketed blocks in RUSSIAN:
1. Grammar Evaluation of user's input:
   - Check if user missed the verb 'to be' (am/is/are), misspelled words (e.g. "happi" -> "happy"), or made grammar errors.
   - If user's input is 100% correct: [Correction: ✅ Отлично! Предложение написано полностью правильно!]
   - If user's input has errors or typos: [Correction: 💡 В предложении "I so happi" опечатка/ошибка, должно быть "I am so happy".]
2. Direct Russian Translation of YOUR English message:
   - Translate your EXACT English response into natural Russian. DO NOT copy placeholder text.
   - Format: [Translation: (Напишите здесь точный перевод вашего ответа на русский язык)]]`;

            const systemMessage = { role: 'system', content: `${this.systemPrompt}\nContext/Scenario: ${scenario.systemPrompt}${strictGuide}${heroPrompt}` };
            const formattedMessages = [systemMessage, ...messagesHistory];

            const response = await fetch('/api/ai/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    provider: this.provider,
                    endpoint: this.endpoint,
                    model: this.modelName,
                    messages: formattedMessages
                })
            });

            if (!response.ok) throw new Error(`AI Proxy Error ${response.status}`);
            const data = await response.json();
            if (!data.success) throw new Error(data.error || "Proxy call failed");
            return this.parseAIOutput(data.content);
        } catch (err) {
            console.warn("Local AI call failed, using fallback:", err);
            const fallback = this.getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects);
            fallback.text = `[Notice: Switched to offline tutor due to connection issue: ${err.message}]\n\n` + fallback.text;
            return fallback;
        }
    }

    parseAIOutput(rawText) {
        let text = rawText;
        let correction = null;
        let translation = null;

        const correctionMatch = text.match(/\[Correction:\s*([\s\S]*?)\]/i);
        if (correctionMatch) {
            correction = correctionMatch[1].trim();
            text = text.replace(/\[Correction:\s*[\s\S]*?\]/gi, '').trim();
        }

        const translationMatch = text.match(/\[Translation:\s*([\s\S]*?)\]/i);
        if (translationMatch) {
            translation = translationMatch[1].trim();
            text = text.replace(/\[Translation:\s*[\s\S]*?\]/gi, '').trim();
        }

        return { text, correction, translation };
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
