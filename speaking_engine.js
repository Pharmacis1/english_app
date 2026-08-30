/**
 * SPEAKING & FLUENCY ENGINE (4/3/2 SPRINT & BLITZ Q&A)
 * 1..100 Levels • 300,000 Total Spoken Words • Continuous Speech Flow
 * Prof. Paul Nation's Fluency Methodology + Rapid Fire Q&A
 */

class SpeakingFluencyEngine {
    constructor() {
        this.TOTAL_MAX_WORDS = 300000;
        this.MAX_LEVEL = 100;
        this.storageKey = 'english_pulse_speaking_words';
        this.lastLvlKey = 'english_pulse_last_speaking_lvl';

        this.totalWords = 0;
        this.level = 1;
        this.thresholds = this.generateThresholds();

        // 4/3/2 Sprint State
        this.sprintRound = 1; // 1 (60s), 2 (45s), 3 (30s)
        this.sprintDurations = [60, 45, 30];
        this.sprintTimer = null;
        this.sprintSecondsLeft = 60;
        this.sprintWordsInRound = [0, 0, 0];
        this.sprintTranscripts = ["", "", ""];
        this.sprintWpm = [0, 0, 0];
        this.isSprintActive = false;
        this.activeTopic = null;

        // Blitz Q&A State
        this.blitzQuestions = [];
        this.blitzCurrentIdx = 0;
        this.blitzTimer = null;
        this.blitzSecondsLeft = 5;
        this.blitzWordsTotal = 0;
        this.isBlitzActive = false;

        this.loadState();
        this.initTopicsAndQuestions();
    }

    generateThresholds() {
        const thresholds = [0];
        for (let lvl = 2; lvl <= 100; lvl++) {
            const thresh = Math.round(this.TOTAL_MAX_WORDS * Math.pow((lvl - 1) / 99.0, 1.4));
            thresholds.push(thresh);
        }
        thresholds[99] = this.TOTAL_MAX_WORDS;
        return thresholds;
    }

    loadState() {
        this.totalWords = parseInt(localStorage.getItem(this.storageKey) || '0', 10);
        this.level = this.calculateLevel(this.totalWords);
    }

    saveState() {
        localStorage.setItem(this.storageKey, this.totalWords.toString());
    }

    calculateLevel(words) {
        if (words <= 0) return 1;
        if (words >= this.TOTAL_MAX_WORDS) return this.MAX_LEVEL;
        let lvl = 1;
        for (let i = 0; i < this.thresholds.length; i++) {
            if (words >= this.thresholds[i]) {
                lvl = i + 1;
            } else {
                break;
            }
        }
        return Math.min(this.MAX_LEVEL, Math.max(1, lvl));
    }

    getStats() {
        this.loadState();
        const currentLvl = this.level;
        const currentThresh = this.thresholds[currentLvl - 1] || 0;
        const nextThresh = currentLvl < 100 ? (this.thresholds[currentLvl] || this.TOTAL_MAX_WORDS) : this.TOTAL_MAX_WORDS;
        const inLevel = this.totalWords - currentThresh;
        const needed = Math.max(1, nextThresh - currentThresh);
        const percent = currentLvl >= 100 ? 100 : Math.min(100, Math.max(0, (inLevel / needed) * 100));

        return {
            totalWords: this.totalWords,
            level: currentLvl,
            currentThresh,
            nextThresh,
            inLevel,
            needed,
            percent: parseFloat(percent.toFixed(1))
        };
    }

    addWords(wordsCount) {
        if (wordsCount <= 0) return { leveledUp: false, newLevel: this.level };
        const prevStats = this.getStats();
        if (prevStats.level >= 100) return { leveledUp: false, newLevel: 100 };

        this.totalWords = Math.min(this.TOTAL_MAX_WORDS, this.totalWords + wordsCount);
        this.saveState();
        const newStats = this.getStats();

        let leveledUp = false;
        if (newStats.level > prevStats.level) {
            leveledUp = true;
            localStorage.setItem(this.lastLvlKey, newStats.level.toString());
        }

        return {
            leveledUp,
            newLevel: newStats.level,
            totalWords: this.totalWords,
            stats: newStats
        };
    }

    initTopicsAndQuestions() {
        this.topics = [
            {
                id: "battle_prep",
                title: "🛡️ Preparing for Battle",
                prompt: "Tell your squad how you prepare your armor, weapons, and magical spells before venturing into the dangerous wild.",
                hints: ["I check my sword...", "First, I put on my armor...", "We must be careful because..."]
            },
            {
                id: "daily_routine",
                title: "☀️ My Daily Routine in Camp",
                prompt: "Describe your morning in the heroes' camp. What do you eat, who do you talk to, and what training do you do?",
                hints: ["Every morning I wake up early...", "For breakfast, I usually have...", "Then I practice with..."]
            },
            {
                id: "favorite_city",
                title: "🏰 The Great Capital City",
                prompt: "Describe a grand medieval city or a fantasy town you visited. What buildings, merchants, and sights did you see?",
                hints: ["The city was huge and noisy...", "In the central square, there was...", "I liked the tall towers because..."]
            },
            {
                id: "mysterious_forest",
                title: "🌲 The Whispering Woods",
                prompt: "Tell the story of how you got lost in a dark enchanted forest. What strange sounds and creatures did you encounter?",
                hints: ["The trees were very tall...", "Suddenly, I heard a strange sound...", "I found my way out by..."]
            },
            {
                id: "legendary_artifact",
                title: "✨ Finding a Magic Artifact",
                prompt: "You discovered an ancient glowing artifact in a dungeon. Describe its appearance, magical powers, and why it is important.",
                hints: ["It was made of shining silver...", "When I touched it, I felt...", "This artifact can protect our kingdom from..."]
            }
        ];

        this.blitzPool = [
            { question: "What is your main weapon in combat?", sample: "My main weapon is a sharp iron sword." },
            { question: "Where do you prefer to rest after a hard quest?", sample: "I prefer to rest at the warm tavern by the fireplace." },
            { question: "What magical element do you trust the most: Fire, Light, or Ice?", sample: "I trust Light magic because it heals wounds and illuminates dark caves." },
            { question: "What did you do yesterday morning?", sample: "Yesterday morning I trained with the knights and sharpened my blade." },
            { question: "Why do we fight together as a squad?", sample: "We fight together because unity makes us strong against any dragon." },
            { question: "What will you buy with your reward gold?", sample: "I will buy a stronger shield and healing potions for our team." },
            { question: "How do you stay calm when danger approaches?", sample: "I take a deep breath and focus on my battle training." }
        ];
    }

    getRandomTopic() {
        return this.topics[Math.floor(Math.random() * this.topics.length)];
    }

    getBlitzSet(count = 5) {
        const shuffled = [...this.blitzPool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    countEnglishWords(text) {
        if (!text) return 0;
        const words = text.trim().split(/\s+/).filter(w => /[a-zA-Z]/.test(w));
        return words.length;
    }
}

if (typeof window !== 'undefined') {
    window.speakingEngine = new SpeakingFluencyEngine();
}
