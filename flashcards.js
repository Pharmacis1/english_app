/* Flashcards Engine with Authentic SM-2 SRS, 10-Card Daily Batches, & Daily Safety Limits (Max 100 New Words/Day + Empty Review Queue Gate) */
const GENERAL_DECKS = {
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

    computeDueCards(targetDecks = null) {
        const sourceDecks = targetDecks || this.decks || {};
        const dueCards = [];
        const now = Date.now();
        Object.keys(sourceDecks).forEach(cat => {
            if (cat === "🧠 Due for SRS Review") return;
            (sourceDecks[cat] || []).forEach(card => {
                if (card.studied && !card.learningInSession && card.nextReviewDate && card.nextReviewDate <= now) {
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
        if (typeof rpgEngine !== 'undefined' && rpgEngine.heroes) {
            localHeroes = rpgEngine.heroes;
        } else if (typeof HEROES_DATA !== 'undefined' && Array.isArray(HEROES_DATA)) {
            localHeroes = HEROES_DATA;
            const savedRPG = localStorage.getItem("rpg_heroes_10_v9");
            if (savedRPG) {
                try { localHeroes = JSON.parse(savedRPG); } catch(e){}
            }
        }

        localHeroes.filter(h => h && h.unlocked).forEach(h => {
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

        const savedSrs = localStorage.getItem("english_pulse_decks_srs_v10");
        if (savedSrs) {
            try {
                const parsedSaved = JSON.parse(savedSrs);
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
        localStorage.setItem("english_pulse_decks_srs_v10", JSON.stringify(this.decks));
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

    nextBatch() {
        const allCards = this.decks[this.currentCategory] || [];
        const maxBatches = Math.ceil(allCards.length / this.batchSize);
        this.batchIndex = (this.batchIndex + 1) % Math.max(1, maxBatches);
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
                if (isSrsMode) {
                    card.learningInSession = false; // Stay in SRS Due queue!
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) {
                            dueList.splice(idx, 1);
                            dueList.push(card); // Re-queue failed card to end of SRS review queue!
                        }
                    }
                } else {
                    card.learningInSession = true; // Repeat in Hero Batch!
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
            this.nextCard();
        } else {
            this.currentIndex = 0;
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
