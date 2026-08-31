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
            // =========================================================================
            // 1. PRESENT SIMPLE -> NEGATIVE (don't / doesn't + V1)
            // =========================================================================
            { original: "She works in the castle", modifier: "❌ Negative", target: "She doesn't work in the castle", distractors: ["She don't work in the castle", "She not works in the castle"] },
            { original: "He likes cold water", modifier: "❌ Negative", target: "He doesn't like cold water", distractors: ["He don't like cold water", "He doesn't likes cold water"] },
            { original: "I have a sharp sword", modifier: "❌ Negative", target: "I don't have a sharp sword", distractors: ["I not have a sharp sword", "I doesn't have a sharp sword"] },
            { original: "They live near the river", modifier: "❌ Negative", target: "They don't live near the river", distractors: ["They doesn't live near the river", "They not live near the river"] },
            { original: "We know the secret path", modifier: "❌ Negative", target: "We don't know the secret path", distractors: ["We doesn't know the secret path", "We not know the secret path"] },
            { original: "It helps our team", modifier: "❌ Negative", target: "It doesn't help our team", distractors: ["It don't help our team", "It doesn't helps our team"] },
            { original: "The guard sees the danger", modifier: "❌ Negative", target: "The guard doesn't see the danger", distractors: ["The guard don't see the danger", "The guard not sees the danger"] },
            { original: "Valerius trusts the stranger", modifier: "❌ Negative", target: "Valerius doesn't trust the stranger", distractors: ["Valerius don't trust the stranger", "Valerius not trusts the stranger"] },
            { original: "You need a healing potion", modifier: "❌ Negative", target: "You don't need a healing potion", distractors: ["You doesn't need a healing potion", "You not need a healing potion"] },
            { original: "The mage forgets his spell", modifier: "❌ Negative", target: "The mage doesn't forget his spell", distractors: ["The mage don't forget his spell", "The mage doesn't forgets his spell"] },

            // =========================================================================
            // 2. PRESENT SIMPLE -> QUESTION (Do / Does ... ?)
            // =========================================================================
            { original: "She plays the magic lute", modifier: "❓ Question", target: "Does she play the magic lute?", distractors: ["Do she play the magic lute?", "Does she plays the magic lute?"] },
            { original: "They speak ancient English", modifier: "❓ Question", target: "Do they speak ancient English?", distractors: ["Does they speak ancient English?", "Are they speak ancient English?"] },
            { original: "He needs more arrows", modifier: "❓ Question", target: "Does he need more arrows?", distractors: ["Do he need more arrows?", "Is he need more arrows?"] },
            { original: "You hear the battle horn", modifier: "❓ Question", target: "Do you hear the battle horn?", distractors: ["Does you hear the battle horn?", "Are you hear the battle horn?"] },
            { original: "The dragon sleeps in the cave", modifier: "❓ Question", target: "Does the dragon sleep in the cave?", distractors: ["Do the dragon sleep in the cave?", "Is the dragon sleep in the cave?"] },
            { original: "We have enough gold coins", modifier: "❓ Question", target: "Do we have enough gold coins?", distractors: ["Have we enough gold coins?", "Does we have enough gold coins?"] },
            { original: "She knows the alchemy recipe", modifier: "❓ Question", target: "Does she know the alchemy recipe?", distractors: ["Do she know the alchemy recipe?", "Does she knows the alchemy recipe?"] },
            { original: "The guards patrol the gate", modifier: "❓ Question", target: "Do the guards patrol the gate?", distractors: ["Does the guards patrol the gate?", "Are the guards patrol the gate?"] },

            // =========================================================================
            // 3. TO BE: PRESENT & PAST & NEGATIVES (am/is/are <-> was/were)
            // =========================================================================
            { original: "She is a brave warrior", modifier: "❓ Question", target: "Is she a brave warrior?", distractors: ["Does she is a brave warrior?", "Is she be a brave warrior?"] },
            { original: "They are ready for the quest", modifier: "❓ Question", target: "Are they ready for the quest?", distractors: ["Do they are ready for the quest?", "Are they be ready for the quest?"] },
            { original: "He is in the magic library", modifier: "❌ Negative", target: "He isn't in the magic library", distractors: ["He doesn't is in the magic library", "He not is in the magic library"] },
            { original: "We are tired after the march", modifier: "❌ Negative", target: "We aren't tired after the march", distractors: ["We don't are tired after the march", "We not are tired after the march"] },
            { original: "I am confident in victory", modifier: "⏳ Yesterday", target: "I was confident in victory", distractors: ["I were confident in victory", "I been confident in victory"] },
            { original: "She is at the tavern", modifier: "⏳ Yesterday", target: "She was at the tavern", distractors: ["She were at the tavern", "She been at the tavern"] },
            { original: "They are proud champions", modifier: "⏳ Yesterday", target: "They were proud champions", distractors: ["They was proud champions", "They been proud champions"] },
            { original: "The weather was stormy", modifier: "❓ Question", target: "Was the weather stormy?", distractors: ["Did the weather was stormy?", "Were the weather stormy?"] },
            { original: "The heroes were in danger", modifier: "❌ Negative", target: "The heroes weren't in danger", distractors: ["The heroes wasn't in danger", "The heroes didn't were in danger"] },

            // =========================================================================
            // 4. THERE IS / THERE ARE (Present, Past, Questions)
            // =========================================================================
            { original: "There is a secret chest here", modifier: "❓ Question", target: "Is there a secret chest here?", distractors: ["Does there is a secret chest here?", "Are there a secret chest here?"] },
            { original: "There are four guards at the gate", modifier: "❓ Question", target: "Are there four guards at the gate?", distractors: ["Do there are four guards at the gate?", "Is there four guards at the gate?"] },
            { original: "There is a dragon in the mountains", modifier: "❌ Negative", target: "There isn't a dragon in the mountains", distractors: ["There doesn't is a dragon in the mountains", "There not a dragon in the mountains"] },
            { original: "There are traps in this room", modifier: "❌ Negative", target: "There aren't traps in this room", distractors: ["There don't are traps in this room", "There isn't traps in this room"] },
            { original: "There is a feast tonight", modifier: "⏳ Yesterday", target: "There was a feast tonight", distractors: ["There were a feast tonight", "There been a feast tonight"] },
            { original: "There are many monsters", modifier: "⏳ Yesterday", target: "There were many monsters", distractors: ["There was many monsters", "There been many monsters"] },

            // =========================================================================
            // 5. PRESENT CONTINUOUS (Right now / Currently: be + -ing)
            // =========================================================================
            { original: "He drinks a healing potion", modifier: "⏳ Right now", target: "He is drinking a healing potion", distractors: ["He drinking a healing potion", "He does drinking a healing potion"] },
            { original: "She casts a lightning spell", modifier: "⏳ Right now", target: "She is casting a lightning spell", distractors: ["She casting a lightning spell", "She is cast a lightning spell"] },
            { original: "They defend the outer wall", modifier: "⏳ Right now", target: "They are defending the outer wall", distractors: ["They is defending the outer wall", "They defending the outer wall"] },
            { original: "I study the ancient runes", modifier: "⏳ Right now", target: "I am studying the ancient runes", distractors: ["I studying the ancient runes", "I am study the ancient runes"] },
            { original: "The blacksmith repairs the armor", modifier: "⏳ Right now", target: "The blacksmith is repairing the armor", distractors: ["The blacksmith repairing the armor", "The blacksmith are repairing the armor"] },
            { original: "We travel through the dark forest", modifier: "⏳ Right now", target: "We are traveling through the dark forest", distractors: ["We is traveling through the dark forest", "We traveling through the dark forest"] },

            // =========================================================================
            // 6. PAST SIMPLE: REGULAR & IRREGULAR VERBS (Affirmative)
            // =========================================================================
            { original: "I see a dark shadow", modifier: "⏳ Yesterday", target: "I saw a dark shadow", distractors: ["I seen a dark shadow", "I seed a dark shadow"] },
            { original: "He buys a heavy shield", modifier: "⏳ Yesterday", target: "He bought a heavy shield", distractors: ["He buyed a heavy shield", "He boughts a heavy shield"] },
            { original: "We go to the northern gate", modifier: "⏳ Yesterday", target: "We went to the northern gate", distractors: ["We goed to the northern gate", "We have went to the northern gate"] },
            { original: "She finds an old potion", modifier: "⏳ Yesterday", target: "She found an old potion", distractors: ["She finded an old potion", "She founded an old potion"] },
            { original: "They take the royal oath", modifier: "⏳ Yesterday", target: "They took the royal oath", distractors: ["They taked the royal oath", "They have took the royal oath"] },
            { original: "The mage writes a scroll", modifier: "⏳ Yesterday", target: "The mage wrote a scroll", distractors: ["The mage writed a scroll", "The mage written a scroll"] },
            { original: "I hear an eagle scream", modifier: "⏳ Yesterday", target: "I heard an eagle scream", distractors: ["I heared an eagle scream", "I hard an eagle scream"] },
            { original: "The knight breaks his lance", modifier: "⏳ Yesterday", target: "The knight broke his lance", distractors: ["The knight breaked his lance", "The knight broked his lance"] },
            { original: "She gives me a silver coin", modifier: "⏳ Yesterday", target: "She gave me a silver coin", distractors: ["She gived me a silver coin", "She given me a silver coin"] },
            { original: "They build a strong barricade", modifier: "⏳ Yesterday", target: "They built a strong barricade", distractors: ["They builded a strong barricade", "They buildt a strong barricade"] },
            { original: "He comes to the rescue", modifier: "⏳ Yesterday", target: "He came to the rescue", distractors: ["He comed to the rescue", "He had come to the rescue"] },
            { original: "We win the great tournament", modifier: "⏳ Yesterday", target: "We won the great tournament", distractors: ["We winned the great tournament", "We wan the great tournament"] },

            // =========================================================================
            // 7. PAST SIMPLE: NEGATIVES & QUESTIONS (didn't / Did you...?)
            // =========================================================================
            { original: "She opened the dungeon door", modifier: "❌ Negative", target: "She didn't open the dungeon door", distractors: ["She didn't opened the dungeon door", "She not opened the dungeon door"] },
            { original: "They found the artifact", modifier: "❌ Negative", target: "They didn't find the artifact", distractors: ["They didn't found the artifact", "They not found the artifact"] },
            { original: "He lost his golden dagger", modifier: "❌ Negative", target: "He didn't lose his golden dagger", distractors: ["He didn't lost his golden dagger", "He not lost his golden dagger"] },
            { original: "We saw the enemy scout", modifier: "❌ Negative", target: "We didn't see the enemy scout", distractors: ["We didn't saw the enemy scout", "We not saw the enemy scout"] },
            { original: "You heard the alarm bell", modifier: "❓ Question", target: "Did you hear the alarm bell?", distractors: ["Did you heard the alarm bell?", "Do you heard the alarm bell?"] },
            { original: "The paladin defeated the monster", modifier: "❓ Question", target: "Did the paladin defeat the monster?", distractors: ["Did the paladin defeated the monster?", "Does the paladin defeat the monster?"] },
            { original: "They escaped from the trap", modifier: "❓ Question", target: "Did they escape from the trap?", distractors: ["Did they escaped from the trap?", "Do they escaped from the trap?"] },
            { original: "She spoke with the king", modifier: "❓ Question", target: "Did she speak with the king?", distractors: ["Did she spoke with the king?", "Does she spoke with the king?"] },

            // =========================================================================
            // 8. MODAL VERBS: CAN, CANNOT, MUST, SHOULD
            // =========================================================================
            { original: "She unlocks the magic vault", modifier: "✨ Can", target: "She can unlock the magic vault", distractors: ["She can unlocks the magic vault", "She can to unlock the magic vault"] },
            { original: "They cross the stormy sea", modifier: "✨ Can", target: "They can cross the stormy sea", distractors: ["They can crosses the stormy sea", "They can to cross the stormy sea"] },
            { original: "He surrenders to the enemy", modifier: "❌ Cannot", target: "He cannot surrender to the enemy", distractors: ["He cannot surrenders to the enemy", "He cannot to surrender to the enemy"] },
            { original: "We enter the forbidden chamber", modifier: "❌ Cannot", target: "We cannot enter the forbidden chamber", distractors: ["We cannot enters the forbidden chamber", "We not can enter the forbidden chamber"] },
            { original: "You follow the holy oath", modifier: "⚡ Must", target: "You must follow the holy oath", distractors: ["You must follows the holy oath", "You must to follow the holy oath"] },
            { original: "The warrior rests before battle", modifier: "💡 Should", target: "The warrior should rest before battle", distractors: ["The warrior should rests before battle", "The warrior should to rest before battle"] },

            // =========================================================================
            // 9. FUTURE: WILL & BE GOING TO (Intentions & Predictions)
            // =========================================================================
            { original: "We defend the kingdom", modifier: "🔮 Tomorrow", target: "We will defend the kingdom", distractors: ["We will defends the kingdom", "We defend will the kingdom"] },
            { original: "She casts a light spell", modifier: "🔮 Tomorrow", target: "She will cast a light spell", distractors: ["She will casts a light spell", "She is cast a light spell"] },
            { original: "I open the heavy door", modifier: "🔮 Tomorrow", target: "I will open the heavy door", distractors: ["I open will the heavy door", "I will opens the heavy door"] },
            { original: "They bring new supplies", modifier: "🔮 Tomorrow", target: "They will bring new supplies", distractors: ["They will brings new supplies", "They are bring new supplies"] },
            { original: "I explore the lost ruins", modifier: "🎯 Going to", target: "I am going to explore the lost ruins", distractors: ["I going to explore the lost ruins", "I am going explore the lost ruins"] },
            { original: "She challenges the arena champion", modifier: "🎯 Going to", target: "She is going to challenge the arena champion", distractors: ["She going to challenge the arena champion", "She is going challenge the arena champion"] },
            { original: "They build a stone bridge", modifier: "🎯 Going to", target: "They are going to build a stone bridge", distractors: ["They is going to build a stone bridge", "They going to build a stone bridge"] },

            // =========================================================================
            // 10. SUBJECT SHIFTS (He/She <-> They/We & Pronouns)
            // =========================================================================
            { original: "I am ready for battle", modifier: "👥 They", target: "They are ready for battle", distractors: ["They is ready for battle", "They am ready for battle"] },
            { original: "She is a brave paladin", modifier: "👥 We", target: "We are brave paladins", distractors: ["We is brave paladins", "We are a brave paladin"] },
            { original: "He has a golden key", modifier: "👥 You", target: "You have a golden key", distractors: ["You has a golden key", "You haves a golden key"] },
            { original: "They have strong armor", modifier: "👤 He", target: "He has strong armor", distractors: ["He have strong armor", "He haves strong armor"] },
            { original: "I teach the young squire", modifier: "👤 She", target: "She teaches the young squire", distractors: ["She teach the young squire", "She teachs the young squire"] },
            { original: "He goes to the guild master", modifier: "👥 We", target: "We go to the guild master", distractors: ["We goes to the guild master", "We is go to the guild master"] },
            { original: "This is my magic staff", modifier: "👤 Her", target: "This is her magic staff", distractors: ["This is she magic staff", "This is hers magic staff"] },
            { original: "The commander trusts him", modifier: "👥 Them", target: "The commander trusts them", distractors: ["The commander trusts they", "The commander trusts their"] },

            // =========================================================================
            // 11. PLURAL NOUNS & IRREGULAR PLURALS
            // =========================================================================
            { original: "One wild wolf attacks", modifier: "🔢 Plural", target: "Two wild wolves attack", distractors: ["Two wild wolfs attack", "Two wild wolves attacks"] },
            { original: "A brave knight rides ahead", modifier: "🔢 Plural", target: "Brave knights ride ahead", distractors: ["Brave knightes ride ahead", "Brave knights rides ahead"] },
            { original: "One sharp knife lies in the chest", modifier: "🔢 Plural", target: "Two sharp knives lie in the chest", distractors: ["Two sharp knifes lie in the chest", "Two sharp knives lies in the chest"] },
            { original: "A mysterious hero arrives", modifier: "🔢 Plural", target: "Mysterious heroes arrive", distractors: ["Mysterious heros arrive", "Mysterious heroes arrives"] },
            { original: "One wise man speaks truth", modifier: "🔢 Plural", target: "Wise men speak truth", distractors: ["Wise mans speak truth", "Wise men speaks truth"] },
            { original: "A scared child runs away", modifier: "🔢 Plural", target: "Scared children run away", distractors: ["Scared childs run away", "Scared childrens run away"] },

            // =========================================================================
            // 12. COMPARATIVES & SUPERLATIVES
            // =========================================================================
            { original: "This iron shield is strong", modifier: "⚖️ Comparative", target: "This steel shield is stronger", distractors: ["This steel shield is more strong", "This steel shield is strongest"] },
            { original: "The shadow dragon is fast", modifier: "⚖️ Comparative", target: "The shadow dragon is faster", distractors: ["The shadow dragon is more fast", "The shadow dragon is fastest"] },
            { original: "The dark dungeon is dangerous", modifier: "⚖️ Comparative", target: "The dark dungeon is more dangerous", distractors: ["The dark dungeon is dangerouser", "The dark dungeon is most dangerous"] },
            { original: "This healing potion is good", modifier: "⚖️ Comparative", target: "This healing potion is better", distractors: ["This healing potion is gooder", "This healing potion is more good"] },
            { original: "The blizzard damage is bad", modifier: "⚖️ Comparative", target: "The blizzard damage is worse", distractors: ["The blizzard damage is badder", "The blizzard damage is more bad"] },

            // =========================================================================
            // 13. SHORT ANSWERS (Yes/No Automations)
            // =========================================================================
            { original: "Does she live in the capital?", modifier: "✅ Short Yes", target: "Yes, she does", distractors: ["Yes, she is", "Yes, she lives"] },
            { original: "Does he need help?", modifier: "❌ Short No", target: "No, he doesn't", distractors: ["No, he isn't", "No, he don't"] },
            { original: "Do they have the sacred key?", modifier: "✅ Short Yes", target: "Yes, they do", distractors: ["Yes, they have", "Yes, they are"] },
            { original: "Did you find the secret door?", modifier: "✅ Short Yes", target: "Yes, I did", distractors: ["Yes, I found", "Yes, I have"] },
            { original: "Did they lose the battle?", modifier: "❌ Short No", target: "No, they didn't", distractors: ["No, they don't", "No, they haven't"] },
            { original: "Are you ready for the expedition?", modifier: "✅ Short Yes", target: "Yes, I am", distractors: ["Yes, I do", "Yes, I be"] },
            { original: "Was the knight in the hall?", modifier: "❌ Short No", target: "No, he wasn't", distractors: ["No, he didn't", "No, he not"] },
            { original: "Can she cast a shield spell?", modifier: "✅ Short Yes", target: "Yes, she can", distractors: ["Yes, she does", "Yes, she is"] },

            // =========================================================================
            // 14. QUESTION TAGS (Comprehensive tag bank)
            // =========================================================================
            { original: "You are ready for the quest", modifier: "⚡ Tag Question", target: "You are ready for the quest, aren't you?", distractors: ["You are ready for the quest, isn't you?", "You are ready for the quest, don't you?"] },
            { original: "She can speak English", modifier: "⚡ Tag Question", target: "She can speak English, can't she?", distractors: ["She can speak English, doesn't she?", "She can speak English, isn't she?"] },
            { original: "They didn't lose the map", modifier: "⚡ Tag Question", target: "They didn't lose the map, did they?", distractors: ["They didn't lose the map, didn't they?", "They didn't lose the map, do they?"] },
            { original: "He likes adventures", modifier: "⚡ Tag Question", target: "He likes adventures, doesn't he?", distractors: ["He likes adventures, don't he?", "He likes adventures, isn't he?"] },
            { original: "It is cold in the dungeon", modifier: "⚡ Tag Question", target: "It is cold in the dungeon, isn't it?", distractors: ["It is cold in the dungeon, doesn't it?", "It is cold in the dungeon, aren't it?"] },
            { original: "We won the battle", modifier: "⚡ Tag Question", target: "We won the battle, didn't we?", distractors: ["We won the battle, don't we?", "We won the battle, haven't we?"] },
            { original: "You don't trust the goblin", modifier: "⚡ Tag Question", target: "You don't trust the goblin, do you?", distractors: ["You don't trust the goblin, don't you?", "You don't trust the goblin, are you?"] },
            { original: "She was at the guild meeting", modifier: "⚡ Tag Question", target: "She was at the guild meeting, wasn't she?", distractors: ["She was at the guild meeting, didn't she?", "She was at the guild meeting, isn't she?"] },
            { original: "They will help us tomorrow", modifier: "⚡ Tag Question", target: "They will help us tomorrow, won't they?", distractors: ["They will help us tomorrow, will they?", "They will help us tomorrow, don't they?"] }
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
