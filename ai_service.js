/* AI Service Integration for LM Studio, Ollama, & Offline Fallback with Target Hero Vocabulary & Grammar Injection */
class AIService {
    constructor() {
        this.provider = localStorage.getItem("ai_provider") || "ollama"; // 'ollama', 'lmstudio', 'fallback'
        this.endpoint = localStorage.getItem("api_endpoint") || "http://localhost:11434";
        this.modelName = localStorage.getItem("model_name") || "llama3";
        this.systemPrompt = localStorage.getItem("system_prompt") || 
            "You are an expert English tutor and tech conversation partner. Respond concisely in English. Briefly highlight any grammar mistakes.";
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

    async testConnection() {
        if (this.provider === 'fallback') {
            return { success: true, message: "Smart Fallback Simulator active (No server required)" };
        }

        try {
            if (this.provider === 'ollama') {
                const res = await fetch(`${this.endpoint}/api/tags`, { method: 'GET', signal: AbortSignal.timeout(3000) });
                if (res.ok) {
                    const data = await res.json();
                    const models = data.models ? data.models.map(m => m.name).join(', ') : 'Ready';
                    return { success: true, message: `Connected to Ollama! Available models: ${models}` };
                }
            } else if (this.provider === 'lmstudio') {
                const res = await fetch(`${this.endpoint}/v1/models`, { method: 'GET', signal: AbortSignal.timeout(3000) });
                if (res.ok) {
                    const data = await res.json();
                    return { success: true, message: `Connected to LM Studio!` };
                }
            }
            return { success: false, message: `Could not reach ${this.provider} server at ${this.endpoint}` };
        } catch (err) {
            return { success: false, message: `Server offline or CORS blocked at ${this.endpoint}: ${err.message}` };
        }
    }

    buildHeroPrompt(targetHeroObjects) {
        if (!targetHeroObjects || targetHeroObjects.length === 0) return "";
        const names = targetHeroObjects.map(h => h.name).join(", ");
        const words = targetHeroObjects.flatMap(h => h.words.slice(0, 8).map(w => w.word)).slice(0, 15).join(", ");
        const rules = targetHeroObjects.flatMap(h => h.grammarRules).join("; ");

        return `\n\n[TARGET HERO CURRICULUM INJECTION: Focus Heroes = ${names}. Actively use their vocabulary words: (${words}) and reinforce grammar: (${rules}).]`;
    }

    async generateResponse(messagesHistory, scenario, targetHeroObjects = null) {
        if (this.provider === 'fallback') {
            return this.getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects);
        }

        try {
            if (this.provider === 'ollama') {
                return await this.callOllama(messagesHistory, scenario, targetHeroObjects);
            } else if (this.provider === 'lmstudio') {
                return await this.callLMStudio(messagesHistory, scenario, targetHeroObjects);
            }
        } catch (err) {
            console.warn("Local AI call failed, using fallback:", err);
            const fallback = this.getSmartFallbackResponse(messagesHistory, scenario, targetHeroObjects);
            fallback.text = `[Notice: Switched to offline tutor due to connection issue: ${err.message}]\n\n` + fallback.text;
            return fallback;
        }
    }

    async callOllama(messagesHistory, scenario, targetHeroObjects = null) {
        const heroPrompt = this.buildHeroPrompt(targetHeroObjects);
        const systemMessage = { role: 'system', content: `${this.systemPrompt}\nContext/Scenario: ${scenario.systemPrompt}${heroPrompt}` };
        const formattedMessages = [systemMessage, ...messagesHistory];

        const response = await fetch(`${this.endpoint}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: this.modelName,
                messages: formattedMessages,
                stream: false
            })
        });

        if (!response.ok) throw new Error(`Ollama HTTP Error: ${response.statusText}`);
        const data = await response.json();
        return this.parseAIOutput(data.message.content);
    }

    async callLMStudio(messagesHistory, scenario, targetHeroObjects = null) {
        const heroPrompt = this.buildHeroPrompt(targetHeroObjects);
        const systemMessage = { role: 'system', content: `${this.systemPrompt}\nContext/Scenario: ${scenario.systemPrompt}${heroPrompt}` };
        const formattedMessages = [systemMessage, ...messagesHistory];

        const response = await fetch(`${this.endpoint}/v1/chat/completions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: this.modelName,
                messages: formattedMessages,
                temperature: 0.7,
                max_tokens: 300
            })
        });

        if (!response.ok) throw new Error(`LM Studio HTTP Error: ${response.statusText}`);
        const data = await response.json();
        return this.parseAIOutput(data.choices[0].message.content);
    }

    parseAIOutput(rawText) {
        let text = rawText;
        let correction = null;

        const correctionMatch = rawText.match(/\[Correction:\s*(.*?)\]/i);
        if (correctionMatch) {
            correction = correctionMatch[1];
            text = rawText.replace(/\[Correction:\s*.*?\]/gi, '').trim();
        }

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
