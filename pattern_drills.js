/**
 * PATTERN DRILLS ENGINE (ТРАНСФОРМАТОР ФРАЗ)
 * 1..100 Levels • 10,000 Total Cards • Speed Transformation Practice
 * Audio-Lingual & Pimsleur Pattern Automation for Grammar Muscle Memory
 */

class PatternDrillsEngine {
    constructor() {
        this.TOTAL_MAX_CARDS = 10000;
        this.MAX_LEVEL = 100;
        this.storageKey = 'english_pulse_drills_cards';
        this.lastLvlKey = 'english_pulse_last_drills_lvl';

        this.totalCards = 0;
        this.level = 1;
        this.currentCombo = 0;
        this.maxCombo = 0;
        this.activeCard = null;
        this.timerDuration = 5; // seconds
        this.timerRemaining = 5;
        this.timerInterval = null;
        this.isSessionActive = false;
        this.isVoiceRecording = false;

        this.thresholds = this.generateThresholds();
        this.loadState();
        this.initPatterns();
    }

    generateThresholds() {
        const thresholds = [0];
        for (let lvl = 2; lvl <= 100; lvl++) {
            const thresh = Math.round(this.TOTAL_MAX_CARDS * Math.pow((lvl - 1) / 99.0, 1.4));
            thresholds.push(thresh);
        }
        thresholds[99] = this.TOTAL_MAX_CARDS;
        return thresholds;
    }

    loadState() {
        this.totalCards = parseInt(localStorage.getItem(this.storageKey) || '0', 10);
        this.level = this.calculateLevel(this.totalCards);
    }

    saveState() {
        localStorage.setItem(this.storageKey, this.totalCards.toString());
    }

    calculateLevel(cards) {
        if (cards <= 0) return 1;
        if (cards >= this.TOTAL_MAX_CARDS) return this.MAX_LEVEL;
        let lvl = 1;
        for (let i = 0; i < this.thresholds.length; i++) {
            if (cards >= this.thresholds[i]) {
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
        const nextThresh = currentLvl < 100 ? (this.thresholds[currentLvl] || this.TOTAL_MAX_CARDS) : this.TOTAL_MAX_CARDS;
        const inLevel = this.totalCards - currentThresh;
        const needed = Math.max(1, nextThresh - currentThresh);
        const percent = currentLvl >= 100 ? 100 : Math.min(100, Math.max(0, (inLevel / needed) * 100));

        return {
            totalCards: this.totalCards,
            level: currentLvl,
            currentThresh,
            nextThresh,
            inLevel,
            needed,
            percent: parseFloat(percent.toFixed(1))
        };
    }

    addCard() {
        const prevStats = this.getStats();
        if (prevStats.level >= 100) return { leveledUp: false, newLevel: 100 };

        this.totalCards = Math.min(this.TOTAL_MAX_CARDS, this.totalCards + 1);
        this.saveState();
        const newStats = this.getStats();

        if (typeof window !== 'undefined' && window.syncPlayerStateToServer) {
            window.syncPlayerStateToServer();
        }

        let leveledUp = false;
        if (newStats.level > prevStats.level) {
            leveledUp = true;
            localStorage.setItem(this.lastLvlKey, newStats.level.toString());
        }

        return {
            leveledUp,
            newLevel: newStats.level,
            totalCards: this.totalCards,
            stats: newStats
        };
    }

    initPatterns() {
        this.rawPatterns = [
            // PRESENT -> NEGATIVE
            { original: "She works in the castle", modifier: "❌ Negative", target: "She doesn't work in the castle", distractors: ["She don't work in the castle", "She not works in the castle"] },
            { original: "He likes cold water", modifier: "❌ Negative", target: "He doesn't like cold water", distractors: ["He don't like cold water", "He doesn't likes cold water"] },
            { original: "I have a sharp sword", modifier: "❌ Negative", target: "I don't have a sharp sword", distractors: ["I not have a sharp sword", "I doesn't have a sharp sword"] },
            { original: "They live near the river", modifier: "❌ Negative", target: "They don't live near the river", distractors: ["They doesn't live near the river", "They not live near the river"] },
            { original: "We know the secret path", modifier: "❌ Negative", target: "We don't know the secret path", distractors: ["We doesn't know the secret path", "We not know the secret path"] },
            { original: "It helps our team", modifier: "❌ Negative", target: "It doesn't help our team", distractors: ["It don't help our team", "It doesn't helps our team"] },
            { original: "The guard sees the danger", modifier: "❌ Negative", target: "The guard doesn't see the danger", distractors: ["The guard don't see the danger", "The guard not sees the danger"] },

            // PRESENT -> QUESTION
            { original: "She plays the magic lute", modifier: "❓ Question", target: "Does she play the magic lute?", distractors: ["Do she play the magic lute?", "Does she plays the magic lute?"] },
            { original: "They speak ancient English", modifier: "❓ Question", target: "Do they speak ancient English?", distractors: ["Does they speak ancient English?", "Are they speak ancient English?"] },
            { original: "He needs more arrows", modifier: "❓ Question", target: "Does he need more arrows?", distractors: ["Do he need more arrows?", "Is he need more arrows?"] },
            { original: "You hear the battle horn", modifier: "❓ Question", target: "Do you hear the battle horn?", distractors: ["Does you hear the battle horn?", "Are you hear the battle horn?"] },
            { original: "The dragon sleeps in the cave", modifier: "❓ Question", target: "Does the dragon sleep in the cave?", distractors: ["Do the dragon sleep in the cave?", "Is the dragon sleep in the cave?"] },

            // PRESENT -> PAST SIMPLE
            { original: "I see a dark shadow", modifier: "⏳ Yesterday", target: "I saw a dark shadow", distractors: ["I seen a dark shadow", "I seed a dark shadow"] },
            { original: "He buys a heavy shield", modifier: "⏳ Yesterday", target: "He bought a heavy shield", distractors: ["He buyed a heavy shield", "He boughts a heavy shield"] },
            { original: "We go to the northern gate", modifier: "⏳ Yesterday", target: "We went to the northern gate", distractors: ["We goed to the northern gate", "We have went to the northern gate"] },
            { original: "She finds an old potion", modifier: "⏳ Yesterday", target: "She found an old potion", distractors: ["She finded an old potion", "She founded an old potion"] },
            { original: "They take the royal oath", modifier: "⏳ Yesterday", target: "They took the royal oath", distractors: ["They taked the royal oath", "They have took the royal oath"] },
            { original: "The mage writes a scroll", modifier: "⏳ Yesterday", target: "The mage wrote a scroll", distractors: ["The mage writed a scroll", "The mage written a scroll"] },

            // PRESENT -> FUTURE (WILL)
            { original: "We defend the kingdom", modifier: "🔮 Tomorrow", target: "We will defend the kingdom", distractors: ["We will defends the kingdom", "We defend will the kingdom"] },
            { original: "She casts a light spell", modifier: "🔮 Tomorrow", target: "She will cast a light spell", distractors: ["She will casts a light spell", "She is cast a light spell"] },
            { original: "I open the heavy door", modifier: "🔮 Tomorrow", target: "I will open the heavy door", distractors: ["I open will the heavy door", "I will opens the heavy door"] },
            { original: "They bring new supplies", modifier: "🔮 Tomorrow", target: "They will bring new supplies", distractors: ["They will brings new supplies", "They are bring new supplies"] },

            // SUBJECT SHIFTS (He/She <-> They/We)
            { original: "I am ready for battle", modifier: "👥 They", target: "They are ready for battle", distractors: ["They is ready for battle", "They am ready for battle"] },
            { original: "She is a brave paladin", modifier: "👥 We", target: "We are brave paladins", distractors: ["We is brave paladins", "We are a brave paladin"] },
            { original: "He has a golden key", modifier: "👥 You", target: "You have a golden key", distractors: ["You has a golden key", "You haves a golden key"] },
            { original: "They have strong armor", modifier: "👤 He", target: "He has strong armor", distractors: ["He have strong armor", "He haves strong armor"] },

            // QUESTION TAGS
            { original: "You are ready for the quest", modifier: "⚡ Tag Question", target: "You are ready for the quest, aren't you?", distractors: ["You are ready for the quest, isn't you?", "You are ready for the quest, don't you?"] },
            { original: "She can speak English", modifier: "⚡ Tag Question", target: "She can speak English, can't she?", distractors: ["She can speak English, doesn't she?", "She can speak English, isn't she?"] },
            { original: "They didn't lose the map", modifier: "⚡ Tag Question", target: "They didn't lose the map, did they?", distractors: ["They didn't lose the map, didn't they?", "They didn't lose the map, do they?"] },
            { original: "He likes adventures", modifier: "⚡ Tag Question", target: "He likes adventures, doesn't he?", distractors: ["He likes adventures, don't he?", "He likes adventures, isn't he?"] }
        ];
    }

    getRandomCard() {
        const item = this.rawPatterns[Math.floor(Math.random() * this.rawPatterns.length)];
        const allOptions = [item.target, ...item.distractors];
        for (let i = allOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
        }

        return {
            original: item.original,
            modifier: item.modifier,
            target: item.target,
            options: allOptions,
            correctIdx: allOptions.indexOf(item.target)
        };
    }

    normalizeSentence(str) {
        return (str || '')
            .toLowerCase()
            .replace(/[^a-z0-9\s']/gi, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    checkSpokenAnswer(spokenText, targetText) {
        if (!spokenText || !targetText) return false;
        const normSpoken = this.normalizeSentence(spokenText);
        const normTarget = this.normalizeSentence(targetText);
        if (normSpoken === normTarget) return true;

        const cleanSpoken = normSpoken.replace(/'/g, '');
        const cleanTarget = normTarget.replace(/'/g, '');
        if (cleanSpoken === cleanTarget) return true;

        const spokenWords = normSpoken.split(' ');
        const targetWords = normTarget.split(' ');
        let matches = 0;
        targetWords.forEach(w => {
            if (spokenWords.includes(w)) matches++;
        });
        const ratio = matches / targetWords.length;
        return ratio >= 0.85;
    }
}

if (typeof window !== 'undefined') {
    window.patternDrills = new PatternDrillsEngine();
}
