/* Flashcards Engine with Authentic SM-2 SRS, 10-Card Daily Batches, & Daily Safety Limits (Max 100 New Words/Day + Empty Review Queue Gate) */
const GENERAL_DECKS = {
    "Detective & City (A1)": [
        { word: "Detective", phonetic: "/dɪˈtek.tɪv/", translation: "Детектив / Сыщик", definition: "A person who investigates crimes.", example: "Detective Leo works on a new case.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Police", phonetic: "/pəˈliːs/", translation: "Полиция", definition: "The official organization that protects citizens.", example: "Officer Harris is from the city police.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Officer", phonetic: "/ˈɒf.ɪ.sər/", translation: "Офицер / Полицейский", definition: "A member of the police force.", example: "The officer answered the telephone.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Crime", phonetic: "/kraɪm/", translation: "Преступление", definition: "An illegal act.", example: "The theft of the sapphire is a big crime.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Case", phonetic: "/keɪs/", translation: "Дело / Расследование", definition: "A specific crime investigation.", example: "We have an important case today.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Thief", phonetic: "/θiːf/", translation: "Вор", definition: "A person who steals something.", example: "The thief opened the safe at night.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Safe", phonetic: "/seɪf/", translation: "Сейф", definition: "A strong metal box for keeping valuables.", example: "The jewel was inside the safe.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Search", phonetic: "/sɜːtʃ/", translation: "Поиск / Искать", definition: "Looking carefully for something.", example: "The search for the blue stone begins now.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Missing", phonetic: "/ˈmɪs.ɪŋ/", translation: "Пропавший / Отсутствующий", definition: "Not in its normal place.", example: "The famous blue stone is missing.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Happen", phonetic: "/ˈhæp.ən/", translation: "Случаться / Происходить", definition: "To take place.", example: "What happened this morning?", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Job", phonetic: "/dʒɒb/", translation: "Работа / Задание", definition: "A paid position or regular task.", example: "We have a new detective job.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Office", phonetic: "/ˈɒf.ɪs/", translation: "Офис / Кабинет", definition: "A room where people do professional work.", example: "Leo and Mia work in the office on Elm Street.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Telephone", phonetic: "/ˈtel.ɪ.fəʊn/", translation: "Телефон", definition: "A device for voice communication.", example: "The black telephone rings loudly.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Laptop", phonetic: "/ˈlæp.tɒp/", translation: "Ноутбук", definition: "A portable personal computer.", example: "Mia opens her silver laptop.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Raincoat", phonetic: "/ˈreɪŋ.kəʊt/", translation: "Дождевик / Плащ", definition: "A waterproof coat worn in the rain.", example: "Toby wears a bright yellow raincoat.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Wet", phonetic: "/wet/", translation: "Мокрый / Влажный", definition: "Covered with water or rain.", example: "His boots are wet after the rain.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Wooden", phonetic: "/ˈwʊd.ən/", translation: "Деревянный", definition: "Made of wood.", example: "Leo sits at a big wooden desk.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Quickly", phonetic: "/ˈkwɪk.li/", translation: "Быстро", definition: "At a fast speed.", example: "The door opens quickly.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Famous", phonetic: "/ˈfeɪ.məs/", translation: "Знаменитый / Известный", definition: "Known by many people.", example: "The Midnight Sapphire is a famous stone.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Put", phonetic: "/pʊt/", translation: "Класть / Положить", definition: "To place something in a location.", example: "Leo puts down the phone.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Work", phonetic: "/wɜːk/", translation: "Работа / Работать", definition: "Activity involving mental or physical effort.", example: "We are ready for work today.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Clue", phonetic: "/kluː/", translation: "Зацепка / Улика", definition: "A piece of evidence or information.", example: "This muddy footprint is our first clue.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Secret", phonetic: "/ˈsiː.krət/", translation: "Секрет / Секретный", definition: "Known by only a few people.", example: "The thief knew the secret code.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Code", phonetic: "/kəʊd/", translation: "Код / Шифр", definition: "A system of secret numbers or symbols.", example: "Enter the code to open the safe.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Stairs", phonetic: "/steəz/", translation: "Лестница / Ступени", definition: "A set of steps leading from one floor to another.", example: "They walked up the stairs to the second floor.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Lock", phonetic: "/lɒk/", translation: "Замок / Запирать", definition: "A device used for securing a door.", example: "He turned the key in the lock.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false }
    ],
    "IT & Tech": [
        { word: "Refactor", phonetic: "/riːˈfæk.tər/", translation: "Рефакторинг", definition: "Restructuring existing computer code.", example: "We need to refactor this legacy module.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Deprecate", phonetic: "/ˈdep.rə.keɪt/", translation: "Объявить устаревшим", definition: "To mark a feature as outdated.", example: "This API endpoint is deprecated.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Idempotent", phonetic: "/ˌaɪ.dəmˈpəʊ.tənt/", translation: "Идемпотентный", definition: "Operation that produces the same result.", example: "HTTP PUT is idempotent.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false }
    ]
};

class FlashcardEngine {
    constructor() {
        this.batchSize = 10;
        this.batchIndex = 0;
        this.maxDailyNewWords = 100;
        this.decks = this.loadDecks();
        this.currentCategory = "Valerius's Pack (A0)";
        this.currentIndex = 0;
        this.autoAdvanceBatch();
    }

    getTodayKey() {
        const d = new Date();
        return `english_pulse_new_words_${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    }

    getDailyNewWordsCount() {
        const key = this.getTodayKey();
        return parseInt(localStorage.getItem(key) || "0");
    }

    incrementDailyNewWords() {
        const key = this.getTodayKey();
        const current = this.getDailyNewWordsCount();
        localStorage.setItem(key, current + 1);
    }

    getCardByWord(wordStr, heroId = null) {
        if (!wordStr || !this.decks) return null;
        const lower = wordStr.toLowerCase().trim();
        for (const cat of Object.keys(this.decks)) {
            if (cat === "🧠 Due for SRS Review") continue;
            const deck = this.decks[cat];
            if (Array.isArray(deck)) {
                const found = deck.find(c => c && c.word && c.word.toLowerCase().trim() === lower && (!heroId || !c.heroId || c.heroId === heroId));
                if (found) return found;
            }
        }
        return null;
    }

    getWordMemoryStats(wordStr, heroId = null) {
        const card = this.getCardByWord(wordStr, heroId);
        if (!card || !card.studied) {
            return {
                score: 0,
                studied: false,
                interval: 0,
                repetitions: 0,
                easeFactor: 2.5,
                inLongTermMemory: false,
                label: "Не изучено (0 дн)"
            };
        }

        const interval = typeof card.interval === 'number' ? card.interval : 1;
        const repetitions = typeof card.repetitions === 'number' ? card.repetitions : 0;
        const easeFactor = typeof card.easeFactor === 'number' ? card.easeFactor : 2.5;
        const inLongTermMemory = interval >= 21;
        const score = interval + (repetitions * 0.1) + Math.max(0, (easeFactor - 1.3) * 0.01);

        return {
            score,
            studied: true,
            interval,
            repetitions,
            easeFactor,
            inLongTermMemory,
            label: inLongTermMemory ? `Долгосрочная (${interval} дн)` : `Интервал: ${interval} дн`
        };
    }

    computeDueCards(targetDecks = null) {
        const sourceDecks = targetDecks || this.decks || {};
        const dueCards = [];
        const now = Date.now();
        Object.keys(sourceDecks).forEach(cat => {
            if (cat === "🧠 Due for SRS Review") return;
            (sourceDecks[cat] || []).forEach(card => {
                if (card.studied && card.nextReviewDate && card.nextReviewDate <= now) {
                    if (!card.heroId && typeof HEROES_DATA !== 'undefined') {
                        const hero = HEROES_DATA.find(h => cat.includes(h.name));
                        if (hero) card.heroId = hero.id;
                    }
                    dueCards.push(card);
                }
            });
        });
        return dueCards;
    }

    loadDecks() {
        const decks = { ...GENERAL_DECKS };
        let localHeroes = [];
        if (typeof rpgEngine !== 'undefined' && rpgEngine.heroes && rpgEngine.heroes.length > 0) {
            localHeroes = rpgEngine.heroes;
        } else if (typeof HEROES_DATA !== 'undefined' && Array.isArray(HEROES_DATA)) {
            localHeroes = HEROES_DATA;
            const savedRPG = localStorage.getItem("rpg_heroes_10_v9");
            if (savedRPG) {
                try { localHeroes = JSON.parse(savedRPG); } catch(e){}
            }
        }

        localHeroes.forEach(h => {
            if (!h) return;
            const cefrLabel = h.cefrLevel ? h.cefrLevel.split(' ')[0] : 'A0';
            const deckName = `${h.name}'s Pack (${cefrLabel})`;

            if (this.decks && this.decks[deckName]) {
                decks[deckName] = this.decks[deckName];
            } else {
                decks[deckName] = (h.words || []).map(w => {
                    let wWord = Array.isArray(w) ? w[0] : (w.word || "");
                    const wPhonetic = Array.isArray(w) ? w[1] : (w.phonetic || "");
                    let wTranslation = Array.isArray(w) ? w[2] : (w.translation || "");
                    const wExample = Array.isArray(w) ? w[3] : (w.example || "");

                    if (/^(adj|noun|verb|expression|prep|pron|adv)$/i.test(wWord.trim())) {
                        const match = wTranslation.match(/\(([a-zA-Z\s]+)\)/);
                        if (match && match[1]) {
                            wWord = match[1].trim();
                            wTranslation = wTranslation.replace(/\s*\([a-zA-Z\s]+\)/, '').trim();
                        }
                    }
                    return {
                        word: wWord,
                        phonetic: wPhonetic,
                        translation: wTranslation,
                        definition: `Hero Pack: ${h.name} (${h.cefrLevel || 'A0'})`,
                        example: wExample,
                        heroId: h.id,
                        rating: 0,
                        interval: 1,
                        easeFactor: 2.5,
                        repetitions: 0,
                        nextReviewDate: 0,
                        studied: false,
                        learningInSession: false
                    };
                }).filter(c => c.word && c.word.length > 0);
            }
        });

        const savedSrsRaw = localStorage.getItem("english_pulse_decks_srs_v10") || localStorage.getItem("english_rpg_flashcard_decks");
        if (savedSrsRaw) {
            try {
                const parsedSaved = JSON.parse(savedSrsRaw);
                Object.keys(parsedSaved).forEach(cat => {
                    if (decks[cat]) {
                        parsedSaved[cat].forEach((savedCard, idx) => {
                            if (decks[cat][idx]) {
                                decks[cat][idx].studied = savedCard.studied || false;
                                decks[cat][idx].repetitions = savedCard.repetitions || 0;
                                decks[cat][idx].interval = savedCard.interval || 1;
                                decks[cat][idx].easeFactor = savedCard.easeFactor || 2.5;
                                decks[cat][idx].nextReviewDate = savedCard.nextReviewDate || 0;
                                decks[cat][idx].learningInSession = savedCard.learningInSession || false;
                                if (savedCard.heroId) decks[cat][idx].heroId = savedCard.heroId;
                            }
                        });
                    } else if (Array.isArray(parsedSaved[cat]) && cat !== "🧠 Due for SRS Review") {
                        decks[cat] = parsedSaved[cat];
                    }
                });
            } catch(e) {}
        }

        if (this.currentCategory === "🧠 Due for SRS Review" && this.decks && Array.isArray(this.decks["🧠 Due for SRS Review"]) && this.decks["🧠 Due for SRS Review"].length > 0) {
            decks["🧠 Due for SRS Review"] = this.decks["🧠 Due for SRS Review"];
        } else {
            decks["🧠 Due for SRS Review"] = this.computeDueCards(decks);
        }
        return decks;
    }

    refreshDueCards() {
        if (!this.decks) return;
        this.decks["🧠 Due for SRS Review"] = this.computeDueCards(this.decks);
    }

    saveDecks() {
        const serialized = JSON.stringify(this.decks);
        localStorage.setItem("english_pulse_decks_srs_v10", serialized);
        localStorage.setItem("english_rpg_flashcard_decks", serialized);
    }

    // Due cards count: returns active SRS queue length if in SRS mode, otherwise computes remaining due cards
    getDueCardsCount() {
        if (this.currentCategory === "🧠 Due for SRS Review" && this.decks && Array.isArray(this.decks["🧠 Due for SRS Review"])) {
            return this.decks["🧠 Due for SRS Review"].length;
        }
        return this.computeDueCards(this.decks).length;
    }

    // Automatically find the first uncompleted batch for the current deck
    autoAdvanceBatch() {
        if (this.currentCategory === "🧠 Due for SRS Review") {
            this.batchIndex = 0;
            return;
        }

        const allCards = this.decks[this.currentCategory] || [];
        if (allCards.length === 0) {
            this.batchIndex = 0;
            return;
        }

        const now = Date.now();
        const totalBatches = Math.ceil(allCards.length / this.batchSize);

        for (let b = 0; b < totalBatches; b++) {
            const start = b * this.batchSize;
            const batchCards = allCards.slice(start, start + this.batchSize);
            const activeCards = batchCards.filter(c => !c.studied || c.learningInSession || (c.nextReviewDate && c.nextReviewDate <= now));
            
            if (activeCards.length > 0) {
                this.batchIndex = b;
                return;
            }
        }

        this.batchIndex = Math.max(0, totalBatches - 1);
    }

    // Filter cards in current batch that still need study today (unstudied, learningInSession, or due for review)
    getCategoryCards() {
        const allCards = this.decks[this.currentCategory] || Object.values(this.decks)[0] || [];
        if (this.currentCategory === "🧠 Due for SRS Review") return allCards;

        const now = Date.now();
        const start = this.batchIndex * this.batchSize;
        const batch = allCards.slice(start, start + this.batchSize);

        // Active batch cards: cards NOT yet studied, OR cards learningInSession, OR cards due <= now!
        const activeBatchCards = batch.filter(c => !c.studied || c.learningInSession || (c.nextReviewDate && c.nextReviewDate <= now));
        return activeBatchCards;
    }

    getCurrentCard() {
        const activeCards = this.getCategoryCards();
        if (activeCards.length === 0) return null;
        return activeCards[this.currentIndex % activeCards.length];
    }

    nextCard() {
        const activeCards = this.getCategoryCards();
        if (activeCards.length === 0) {
            this.currentIndex = 0;
            return;
        }
        this.currentIndex = (this.currentIndex + 1) % activeCards.length;
    }

    getTotalBatches() {
        if (this.currentCategory === "🧠 Due for SRS Review") return 1;
        const allCards = this.decks[this.currentCategory] || [];
        return Math.max(1, Math.ceil(allCards.length / this.batchSize));
    }

    setBatch(index) {
        const total = this.getTotalBatches();
        this.batchIndex = Math.max(0, Math.min(index, total - 1));
        this.currentIndex = 0;
    }

    prevBatch() {
        const total = this.getTotalBatches();
        this.batchIndex = (this.batchIndex - 1 + total) % total;
        this.currentIndex = 0;
    }

    nextBatch() {
        const total = this.getTotalBatches();
        this.batchIndex = (this.batchIndex + 1) % total;
        this.currentIndex = 0;
    }

    resetCurrentBatch() {
        if (this.currentCategory === "🧠 Due for SRS Review") return;
        const allCards = this.decks[this.currentCategory] || [];
        const start = this.batchIndex * this.batchSize;
        const batch = allCards.slice(start, start + this.batchSize);
        batch.forEach(c => {
            c.learningInSession = true;
        });
        this.currentIndex = 0;
    }

    rateCard(grade) {
        const card = this.getCurrentCard();
        if (!card) return { success: true };

        const isSrsMode = this.currentCategory === "🧠 Due for SRS Review";
        const isNewWord = !card.studied;

        // CHECK LIMIT 1: Must clear SRS review queue before rating new cards!
        if (isNewWord && !isSrsMode && this.getDueCardsCount() > 0) {
            return {
                success: false,
                reason: "review_required",
                message: `🔒 Clear Your Due Reviews First! You have ${this.getDueCardsCount()} word(s) waiting in 🧠 Due for SRS Review.`
            };
        }

        // CHECK LIMIT 2: Daily new words limit (100 words/day)!
        if (isNewWord && !isSrsMode && this.getDailyNewWordsCount() >= this.maxDailyNewWords) {
            return {
                success: false,
                reason: "daily_limit_reached",
                message: `🛑 Daily New Words Limit Reached (100 / 100)! Finish your SRS reviews today or return tomorrow for new words.`
            };
        }

        if (isNewWord) {
            card.studied = true;
            this.incrementDailyNewWords();
        }

        if (!card.easeFactor) card.easeFactor = 2.5;
        if (!card.interval) card.interval = 1;
        if (!card.repetitions) card.repetitions = 0;

        const oneDayMs = 24 * 60 * 60 * 1000;

        switch(grade) {
            case 'again':
                card.repetitions = 0;
                card.interval = 1;
                card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
                card.nextReviewDate = Date.now();
                card.learningInSession = true; // Mark as learning in session
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) {
                            dueList.splice(idx, 1);
                            dueList.push(card); // Re-queue failed card to end of SRS review queue!
                        }
                    }
                } else {
                    // In Hero Batch Mode: advance index so current card cycles to end of batch
                    this.nextCard();
                }
                break;
            case 'hard':
                card.repetitions = Math.max(1, card.repetitions);
                card.interval = Math.max(1, Math.round(card.interval * 1.2));
                card.easeFactor = Math.max(1.3, card.easeFactor - 0.15);
                card.learningInSession = false;
                card.nextReviewDate = Date.now() + (card.interval * oneDayMs);
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) dueList.splice(idx, 1);
                    }
                }
                break;
            case 'good':
                card.repetitions += 1;
                if (card.repetitions === 1) card.interval = 1;
                else if (card.repetitions === 2) card.interval = 6;
                else card.interval = Math.round(card.interval * card.easeFactor);
                card.easeFactor = Math.max(1.3, card.easeFactor);
                card.learningInSession = false;
                card.nextReviewDate = Date.now() + (card.interval * oneDayMs);
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) dueList.splice(idx, 1);
                    }
                }
                break;
            case 'easy':
                card.repetitions += 1;
                card.easeFactor += 0.15;
                if (card.repetitions === 1) card.interval = 4;
                else if (card.repetitions === 2) card.interval = 10;
                else {
                    const baseGood = Math.round(card.interval * card.easeFactor);
                    card.interval = Math.max(baseGood + 2, Math.round(card.interval * card.easeFactor * 1.3));
                }
                card.learningInSession = false;
                card.nextReviewDate = Date.now() + (card.interval * oneDayMs);
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) dueList.splice(idx, 1);
                    }
                }
                break;
        }

        this.saveDecks();
        if (!isSrsMode) {
            const activeCards = this.getCategoryCards();
            if (activeCards.length === 0) {
                this.currentIndex = 0;
            } else if (grade === 'again') {
                this.currentIndex = (this.currentIndex + 1) % activeCards.length;
            } else {
                this.currentIndex = this.currentIndex % activeCards.length;
            }
        } else {
            const dueList = this.decks["🧠 Due for SRS Review"] || [];
            if (dueList.length === 0) {
                this.currentIndex = 0;
            } else if (grade === 'again') {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex % dueList.length;
            }
        }
        return { success: true };
    }

    speak(text, onStart = null, onEnd = null, heroVoiceConfig = null) {
        if (window.voiceService) {
            window.voiceService.speak(text, onStart, onEnd, heroVoiceConfig);
            return;
        }
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            if (onStart) utterance.onstart = onStart;
            if (onEnd) {
                utterance.onend = onEnd;
                utterance.onerror = onEnd;
            }
            window.speechSynthesis.speak(utterance);
        }
    }

    getSRSForecast(daysHorizon = 14, targetCategory = "all") {
        const now = new Date();
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const oneDayMs = 24 * 60 * 60 * 1000;

        const forecastDays = [];
        for (let i = 0; i < daysHorizon; i++) {
            const dateObj = new Date(startOfToday + (i * oneDayMs));
            const isToday = i === 0;
            const isTomorrow = i === 1;
            const dayName = isToday ? "Сегодня" : (isTomorrow ? "Завтра" : dateObj.toLocaleDateString('ru-RU', { weekday: 'short' }));
            
            forecastDays.push({
                dayOffset: i,
                date: dateObj,
                dateKey: `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`,
                dayName: dayName,
                formattedDate: dateObj.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
                cards: [],
                count: 0
            });
        }

        let totalStudied = 0;
        let dueNowCount = 0;
        let futureCount = 0;
        let masteredCount = 0; // interval >= 21 days
        let dueNext7Days = 0;

        const sourceDecks = this.decks || {};
        const categories = (targetCategory === "all" || !targetCategory)
            ? Object.keys(sourceDecks).filter(cat => cat !== "🧠 Due for SRS Review")
            : [targetCategory];

        const processedCardKeys = new Set();

        categories.forEach(cat => {
            (sourceDecks[cat] || []).forEach(card => {
                if (!card.studied) return;
                
                const uniqueKey = `${card.heroId || cat}_${card.word}`;
                if (processedCardKeys.has(uniqueKey)) return;
                processedCardKeys.add(uniqueKey);

                totalStudied++;
                if ((card.interval || 1) >= 21) masteredCount++;

                const nextReview = card.nextReviewDate || 0;
                
                if (nextReview <= Date.now()) {
                    dueNowCount++;
                    forecastDays[0].cards.push({ ...card, deckName: cat, isOverdue: nextReview < startOfToday });
                    forecastDays[0].count++;
                    dueNext7Days++;
                } else {
                    const diffMs = nextReview - startOfToday;
                    const dayIdx = Math.floor(diffMs / oneDayMs);

                    if (dayIdx < 7) dueNext7Days++;

                    if (dayIdx >= 0 && dayIdx < daysHorizon) {
                        forecastDays[dayIdx].cards.push({ ...card, deckName: cat, isOverdue: false });
                        forecastDays[dayIdx].count++;
                        futureCount++;
                    } else if (dayIdx >= daysHorizon) {
                        futureCount++;
                    }
                }
            });
        });

        const maxCountInDay = Math.max(...forecastDays.map(d => d.count), 1);

        return {
            daysHorizon,
            targetCategory,
            startOfToday,
            totalStudied,
            dueNowCount,
            dueTomorrowCount: forecastDays[1] ? forecastDays[1].count : 0,
            dueNext7Days,
            futureCount,
            masteredCount,
            maxCountInDay,
            days: forecastDays
        };
    }
}
