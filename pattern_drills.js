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
        this.recentQueue = [];
        this.weakSpotQueue = [];

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
            // 1. PRESENT SIMPLE -> NEGATIVE (don't / doesn't + V1: Daily Life)
            // =========================================================================
            { original: "She works in an office", modifier: "❌ Negative", target: "She doesn't work in an office", distractors: ["She don't work in an office", "She not works in an office"] },
            { original: "He drinks black coffee", modifier: "❌ Negative", target: "He doesn't drink black coffee", distractors: ["He don't drink black coffee", "He doesn't drinks black coffee"] },
            { original: "I live in the city center", modifier: "❌ Negative", target: "I don't live in the city center", distractors: ["I not live in the city center", "I doesn't live in the city center"] },
            { original: "They eat meat and fish", modifier: "❌ Negative", target: "They don't eat meat and fish", distractors: ["They doesn't eat meat and fish", "They not eat meat and fish"] },
            { original: "We have a car", modifier: "❌ Negative", target: "We don't have a car", distractors: ["We doesn't have a car", "We not have a car"] },
            { original: "He speaks Spanish at home", modifier: "❌ Negative", target: "He doesn't speak Spanish at home", distractors: ["He don't speak Spanish at home", "He doesn't speaks Spanish at home"] },
            { original: "You need a bus ticket", modifier: "❌ Negative", target: "You don't need a bus ticket", distractors: ["You doesn't need a bus ticket", "You not need a bus ticket"] },
            { original: "She likes fast food", modifier: "❌ Negative", target: "She doesn't like fast food", distractors: ["She don't like fast food", "She not likes fast food"] },
            { original: "The supermarket opens on Sunday", modifier: "❌ Negative", target: "The supermarket doesn't open on Sunday", distractors: ["The supermarket don't open on Sunday", "The supermarket not opens on Sunday"] },
            { original: "I remember his phone number", modifier: "❌ Negative", target: "I don't remember his phone number", distractors: ["I doesn't remember his phone number", "I not remember his phone number"] },

            // =========================================================================
            // 2. PRESENT SIMPLE -> QUESTION (Do / Does ... ?: Everyday Questions)
            // =========================================================================
            { original: "She plays the acoustic guitar", modifier: "❓ Question", target: "Does she play the acoustic guitar?", distractors: ["Do she play the acoustic guitar?", "Does she plays the acoustic guitar?"] },
            { original: "They speak English fluently", modifier: "❓ Question", target: "Do they speak English fluently?", distractors: ["Does they speak English fluently?", "Are they speak English fluently?"] },
            { original: "He lives near the subway station", modifier: "❓ Question", target: "Does he live near the subway station?", distractors: ["Do he live near the subway station?", "Is he live near the subway station?"] },
            { original: "You drink green tea every morning", modifier: "❓ Question", target: "Do you drink green tea every morning?", distractors: ["Does you drink green tea every morning?", "Are you drink green tea every morning?"] },
            { original: "The train arrives on time", modifier: "❓ Question", target: "Does the train arrive on time?", distractors: ["Do the train arrive on time?", "Is the train arrive on time?"] },
            { original: "We have enough time for lunch", modifier: "❓ Question", target: "Do we have enough time for lunch?", distractors: ["Have we enough time for lunch?", "Does we have enough time for lunch?"] },
            { original: "She knows the way to the airport", modifier: "❓ Question", target: "Does she know the way to the airport?", distractors: ["Do she know the way to the airport?", "Does she knows the way to the airport?"] },
            { original: "They accept credit cards here", modifier: "❓ Question", target: "Do they accept credit cards here?", distractors: ["Does they accept credit cards here?", "Are they accept credit cards here?"] },

            // =========================================================================
            // 3. TO BE: PRESENT & PAST & NEGATIVES (am/is/are <-> was/were)
            // =========================================================================
            { original: "She is a doctor at the hospital", modifier: "❓ Question", target: "Is she a doctor at the hospital?", distractors: ["Does she is a doctor at the hospital?", "Is she be a doctor at the hospital?"] },
            { original: "They are at home right now", modifier: "❓ Question", target: "Are they at home right now?", distractors: ["Do they are at home right now?", "Are they be at home right now?"] },
            { original: "He is at the business meeting", modifier: "❌ Negative", target: "He isn't at the business meeting", distractors: ["He doesn't is at the business meeting", "He not is at the business meeting"] },
            { original: "We are ready to order dinner", modifier: "❌ Negative", target: "We aren't ready to order dinner", distractors: ["We don't are ready to order dinner", "We not are ready to order dinner"] },
            { original: "I am very tired today", modifier: "⏳ Yesterday", target: "I was very tired yesterday", distractors: ["I were very tired yesterday", "I been very tired yesterday"] },
            { original: "She is at the shopping mall", modifier: "⏳ Yesterday", target: "She was at the shopping mall", distractors: ["She were at the shopping mall", "She been at the shopping mall"] },
            { original: "They are in London this week", modifier: "⏳ Yesterday", target: "They were in London this week", distractors: ["They was in London this week", "They been in London this week"] },
            { original: "The hotel room was expensive", modifier: "❓ Question", target: "Was the hotel room expensive?", distractors: ["Did the hotel room was expensive?", "Were the hotel room expensive?"] },
            { original: "The shops were open yesterday", modifier: "❌ Negative", target: "The shops weren't open yesterday", distractors: ["The shops wasn't open yesterday", "The shops didn't were open yesterday"] },

            // =========================================================================
            // 4. THERE IS / THERE ARE (Cafes, hotels, apartments, cities)
            // =========================================================================
            { original: "There is a good Italian cafe nearby", modifier: "❓ Question", target: "Is there a good Italian cafe nearby?", distractors: ["Does there is a good Italian cafe nearby?", "Are there a good Italian cafe nearby?"] },
            { original: "There are three supermarkets on this street", modifier: "❓ Question", target: "Are there three supermarkets on this street?", distractors: ["Do there are three supermarkets on this street?", "Is there three supermarkets on this street?"] },
            { original: "There is free Wi-Fi in the hotel room", modifier: "❌ Negative", target: "There isn't free Wi-Fi in the hotel room", distractors: ["There doesn't is free Wi-Fi in the hotel room", "There not free Wi-Fi in the hotel room"] },
            { original: "There are available seats on the bus", modifier: "❌ Negative", target: "There aren't available seats on the bus", distractors: ["There don't are available seats on the bus", "There isn't available seats on the bus"] },
            { original: "There is an important meeting today", modifier: "⏳ Yesterday", target: "There was an important meeting today", distractors: ["There were an important meeting today", "There been an important meeting today"] },
            { original: "There are many tourists at the museum", modifier: "⏳ Yesterday", target: "There were many tourists at the museum", distractors: ["There was many tourists at the museum", "There been many tourists at the museum"] },

            // =========================================================================
            // 5. PRESENT CONTINUOUS (Right now in everyday life: be + -ing)
            // =========================================================================
            { original: "He drinks hot coffee", modifier: "⏳ Right now", target: "He is drinking hot coffee", distractors: ["He drinking hot coffee", "He does drinking hot coffee"] },
            { original: "She prepares breakfast in the kitchen", modifier: "⏳ Right now", target: "She is preparing breakfast in the kitchen", distractors: ["She preparing breakfast in the kitchen", "She is prepare breakfast in the kitchen"] },
            { original: "They wait for the yellow taxi", modifier: "⏳ Right now", target: "They are waiting for the yellow taxi", distractors: ["They is waiting for the yellow taxi", "They waiting for the yellow taxi"] },
            { original: "I write an urgent email to the boss", modifier: "⏳ Right now", target: "I am writing an urgent email to the boss", distractors: ["I writing an urgent email to the boss", "I am write an urgent email to the boss"] },
            { original: "The manager talks on the phone", modifier: "⏳ Right now", target: "The manager is talking on the phone", distractors: ["The manager talking on the phone", "The manager are talking on the phone"] },
            { original: "We look for the central train station", modifier: "⏳ Right now", target: "We are looking for the central train station", distractors: ["We is looking for the central train station", "We looking for the central train station"] },

            // =========================================================================
            // 6. PAST SIMPLE: EVERYDAY ACTIONS (Regular & Irregular Verbs)
            // =========================================================================
            { original: "I see my best friend", modifier: "⏳ Yesterday", target: "I saw my best friend", distractors: ["I seen my best friend", "I seed my best friend"] },
            { original: "He buys fresh groceries at the market", modifier: "⏳ Yesterday", target: "He bought fresh groceries at the market", distractors: ["He buyed fresh groceries at the market", "He boughts fresh groceries at the market"] },
            { original: "We go to the new Italian restaurant", modifier: "⏳ Yesterday", target: "We went to the new Italian restaurant", distractors: ["We goed to the new Italian restaurant", "We have went to the new Italian restaurant"] },
            { original: "She finds her lost house keys", modifier: "⏳ Yesterday", target: "She found her lost house keys", distractors: ["She finded her lost house keys", "She founded her lost house keys"] },
            { original: "They take the morning flight to Paris", modifier: "⏳ Yesterday", target: "They took the morning flight to Paris", distractors: ["They taked the morning flight to Paris", "They have took the morning flight to Paris"] },
            { original: "The doctor writes a prescription", modifier: "⏳ Yesterday", target: "The doctor wrote a prescription", distractors: ["The doctor writed a prescription", "The doctor written a prescription"] },
            { original: "I hear the morning alarm", modifier: "⏳ Yesterday", target: "I heard the morning alarm", distractors: ["I heared the morning alarm", "I hard the morning alarm"] },
            { original: "He breaks his favorite coffee cup", modifier: "⏳ Yesterday", target: "He broke his favorite coffee cup", distractors: ["He breaked his favorite coffee cup", "He broked his favorite coffee cup"] },
            { original: "She gives me her business card", modifier: "⏳ Yesterday", target: "She gave me her business card", distractors: ["She gived me her business card", "She given me her business card"] },
            { original: "He pays the restaurant bill with cash", modifier: "⏳ Yesterday", target: "He paid the restaurant bill with cash", distractors: ["He payed the restaurant bill with cash", "He paided the restaurant bill with cash"] },
            { original: "She comes home very late", modifier: "⏳ Yesterday", target: "She came home very late", distractors: ["She comed home very late", "She had come home very late"] },
            { original: "We arrive at the airport on time", modifier: "⏳ Yesterday", target: "We arrived at the airport on time", distractors: ["We did arrive at the airport on time", "We was arrive at the airport on time"] },

            // =========================================================================
            // 7. PAST SIMPLE: NEGATIVES & QUESTIONS (didn't / Did you...?)
            // =========================================================================
            { original: "She called the taxi yesterday", modifier: "❌ Negative", target: "She didn't call the taxi yesterday", distractors: ["She didn't called the taxi yesterday", "She not called the taxi yesterday"] },
            { original: "They booked the hotel room online", modifier: "❌ Negative", target: "They didn't book the hotel room online", distractors: ["They didn't booked the hotel room online", "They not booked the hotel room online"] },
            { original: "He lost his international passport", modifier: "❌ Negative", target: "He didn't lose his international passport", distractors: ["He didn't lost his international passport", "He not lost his international passport"] },
            { original: "We received the delivery package", modifier: "❌ Negative", target: "We didn't receive the delivery package", distractors: ["We didn't received the delivery package", "We not received the delivery package"] },
            { original: "You heard the flight announcement", modifier: "❓ Question", target: "Did you hear the flight announcement?", distractors: ["Did you heard the flight announcement?", "Do you heard the flight announcement?"] },
            { original: "The doctor answered your phone call", modifier: "❓ Question", target: "Did the doctor answer your phone call?", distractors: ["Did the doctor answered your phone call?", "Does the doctor answer your phone call?"] },
            { original: "They finished the work project on Friday", modifier: "❓ Question", target: "Did they finish the work project on Friday?", distractors: ["Did they finished the work project on Friday?", "Do they finished the work project on Friday?"] },
            { original: "She spoke with the landlord about rent", modifier: "❓ Question", target: "Did she speak with the landlord about rent?", distractors: ["Did she spoke with the landlord about rent?", "Does she spoke with the landlord about rent?"] },

            // =========================================================================
            // 8. MODAL VERBS: CAN, CANNOT, MUST, SHOULD (Practical Real Life)
            // =========================================================================
            { original: "She speaks English and German", modifier: "✨ Can", target: "She can speak English and German", distractors: ["She can speaks English and German", "She can to speak English and German"] },
            { original: "They pay with Apple Pay or credit card", modifier: "✨ Can", target: "They can pay with Apple Pay or credit card", distractors: ["They can pays with Apple Pay or credit card", "They can to pay with Apple Pay or credit card"] },
            { original: "He smokes inside the airport terminal", modifier: "❌ Cannot", target: "He cannot smoke inside the airport terminal", distractors: ["He cannot smokes inside the airport terminal", "He cannot to smoke inside the airport terminal"] },
            { original: "We park our car in this private zone", modifier: "❌ Cannot", target: "We cannot park our car in this private zone", distractors: ["We cannot parks our car in this private zone", "We not can park our car in this private zone"] },
            { original: "You wear a seatbelt in the car", modifier: "⚡ Must", target: "You must wear a seatbelt in the car", distractors: ["You must wears a seatbelt in the car", "You must to wear a seatbelt in the car"] },
            { original: "You drink more clean water every day", modifier: "💡 Should", target: "You should drink more clean water every day", distractors: ["You should drinks more clean water every day", "You should to drink more clean water every day"] },

            // =========================================================================
            // 9. FUTURE: WILL & BE GOING TO (Everyday Plans & Offers)
            // =========================================================================
            { original: "I help you with the heavy luggage", modifier: "🔮 Tomorrow", target: "I will help you with the heavy luggage", distractors: ["I will helps you with the heavy luggage", "I help will you with the heavy luggage"] },
            { original: "She calls you back this afternoon", modifier: "🔮 Tomorrow", target: "She will call you back this afternoon", distractors: ["She will calls you back this afternoon", "She is call you back this afternoon"] },
            { original: "I order a large pepperoni pizza", modifier: "🔮 Tomorrow", target: "I will order a large pepperoni pizza", distractors: ["I order will a large pepperoni pizza", "I will orders a large pepperoni pizza"] },
            { original: "They send the work contract by email", modifier: "🔮 Tomorrow", target: "They will send the work contract by email", distractors: ["They will sends the work contract by email", "They are send the work contract by email"] },
            { original: "I buy a new laptop this weekend", modifier: "🎯 Going to", target: "I am going to buy a new laptop this weekend", distractors: ["I going to buy a new laptop this weekend", "I am going buy a new laptop this weekend"] },
            { original: "She travels to Spain next month", modifier: "🎯 Going to", target: "She is going to travel to Spain next month", distractors: ["She going to travel to Spain next month", "She is going travel to Spain next month"] },
            { original: "They rent a cozy apartment downtown", modifier: "🎯 Going to", target: "They are going to rent a cozy apartment downtown", distractors: ["They is going to rent a cozy apartment downtown", "They going to rent a cozy apartment downtown"] },

            // =========================================================================
            // 10. SUBJECT SHIFTS & PRONOUNS (Everyday Roles & Possessives)
            // =========================================================================
            { original: "I am ready for the interview", modifier: "👥 They", target: "They are ready for the interview", distractors: ["They is ready for the interview", "They am ready for the interview"] },
            { original: "She is an experienced manager", modifier: "👥 We", target: "We are experienced managers", distractors: ["We is experienced managers", "We are a experienced manager"] },
            { original: "He has a valid driver's license", modifier: "👥 You", target: "You have a valid driver's license", distractors: ["You has a valid driver's license", "You haves a valid driver's license"] },
            { original: "They have two small children", modifier: "👤 He", target: "He has two small children", distractors: ["He have two small children", "He haves two small children"] },
            { original: "I teach the new employee", modifier: "👤 She", target: "She teaches the new employee", distractors: ["She teach the new employee", "She teachs the new employee"] },
            { original: "He goes to the office by bike", modifier: "👥 We", target: "We go to the office by bike", distractors: ["We goes to the office by bike", "We is go to the office by bike"] },
            { original: "This is my black suitcase", modifier: "👤 Her", target: "This is her black suitcase", distractors: ["This is she black suitcase", "This is hers black suitcase"] },
            { original: "The director invited him to lunch", modifier: "👥 Them", target: "The director invited them to lunch", distractors: ["The director invited they to lunch", "The director invited their to lunch"] },

            // =========================================================================
            // 11. PLURAL NOUNS & IRREGULARS (Real World People, Items & Objects)
            // =========================================================================
            { original: "One woman waits in line at the bank", modifier: "🔢 Plural", target: "Two women wait in line at the bank", distractors: ["Two womans wait in line at the bank", "Two women waits in line at the bank"] },
            { original: "A polite customer enters the store", modifier: "🔢 Plural", target: "Polite customers enter the store", distractors: ["Polite customeres enter the store", "Polite customers enters the store"] },
            { original: "One sharp knife is on the kitchen counter", modifier: "🔢 Plural", target: "Two sharp knives are on the kitchen counter", distractors: ["Two sharp knifes are on the kitchen counter", "Two sharp knives is on the kitchen counter"] },
            { original: "A friendly person gives us directions", modifier: "🔢 Plural", target: "Friendly people give us directions", distractors: ["Friendly persons gives us directions", "Friendly peoples give us directions"] },
            { original: "One businessman attends the conference", modifier: "🔢 Plural", target: "Two businessmen attend the conference", distractors: ["Two businessmans attend the conference", "Two businessmen attends the conference"] },
            { original: "A happy child plays in the playground", modifier: "🔢 Plural", target: "Happy children play in the playground", distractors: ["Happy childs play in the playground", "Happy childrens play in the playground"] },

            // =========================================================================
            // 12. COMPARATIVES (Everyday Prices, Devices, Transport & Comfort)
            // =========================================================================
            { original: "This old laptop is slow", modifier: "⚖️ Comparative", target: "This new laptop is faster", distractors: ["This new laptop is more fast", "This new laptop is fastest"] },
            { original: "The city center is noisy", modifier: "⚖️ Comparative", target: "The city center is noisier", distractors: ["The city center is more noisy", "The city center is noisiest"] },
            { original: "This downtown restaurant is expensive", modifier: "⚖️ Comparative", target: "This downtown restaurant is more expensive", distractors: ["This downtown restaurant is expensiver", "This downtown restaurant is most expensive"] },
            { original: "This hotel room service is good", modifier: "⚖️ Comparative", target: "This hotel room service is better", distractors: ["This hotel room service is gooder", "This hotel room service is more good"] },
            { original: "The evening traffic today is bad", modifier: "⚖️ Comparative", target: "The evening traffic today is worse", distractors: ["The evening traffic today is badder", "The evening traffic today is more bad"] },

            // =========================================================================
            // 13. SHORT ANSWERS (Everyday Dialogues & Questions)
            // =========================================================================
            { original: "Do you work remotely from home?", modifier: "✅ Short Yes", target: "Yes, I do", distractors: ["Yes, I work", "Yes, I am"] },
            { original: "Does he drink coffee in the evening?", modifier: "❌ Short No", target: "No, he doesn't", distractors: ["No, he isn't", "No, he don't"] },
            { original: "Do they accept cash payments here?", modifier: "✅ Short Yes", target: "Yes, they do", distractors: ["Yes, they have", "Yes, they are"] },
            { original: "Did you send the confirmation email?", modifier: "✅ Short Yes", target: "Yes, I did", distractors: ["Yes, I sent", "Yes, I have"] },
            { original: "Did they cancel our flight?", modifier: "❌ Short No", target: "No, they didn't", distractors: ["No, they don't", "No, they haven't"] },
            { original: "Are you free this Saturday evening?", modifier: "✅ Short Yes", target: "Yes, I am", distractors: ["Yes, I do", "Yes, I be"] },
            { original: "Was the restaurant food delicious?", modifier: "✅ Short Yes", target: "Yes, it was", distractors: ["Yes, it did", "Yes, it were"] },
            { original: "Can you hear me clearly on the call?", modifier: "✅ Short Yes", target: "Yes, I can", distractors: ["Yes, I do", "Yes, I am"] },

            // =========================================================================
            // 14. QUESTION TAGS (Everyday Small Talk & Confirmations)
            // =========================================================================
            { original: "You live near the subway station", modifier: "⚡ Tag Question", target: "You live near the subway station, don't you?", distractors: ["You live near the subway station, isn't you?", "You live near the subway station, aren't you?"] },
            { original: "She is a graphic designer", modifier: "⚡ Tag Question", target: "She is a graphic designer, isn't she?", distractors: ["She is a graphic designer, doesn't she?", "She is a graphic designer, aren't she?"] },
            { original: "They didn't receive our message", modifier: "⚡ Tag Question", target: "They didn't receive our message, did they?", distractors: ["They didn't receive our message, didn't they?", "They didn't receive our message, do they?"] },
            { original: "He drinks green tea every day", modifier: "⚡ Tag Question", target: "He drinks green tea every day, doesn't he?", distractors: ["He drinks green tea every day, don't he?", "He drinks green tea every day, isn't he?"] },
            { original: "It is warm and sunny outside", modifier: "⚡ Tag Question", target: "It is warm and sunny outside, isn't it?", distractors: ["It is warm and sunny outside, doesn't it?", "It is warm and sunny outside, aren't it?"] },
            { original: "We paid the restaurant bill already", modifier: "⚡ Tag Question", target: "We paid the restaurant bill already, didn't we?", distractors: ["We paid the restaurant bill already, don't we?", "We paid the restaurant bill already, haven't we?"] },
            { original: "You don't eat spicy food", modifier: "⚡ Tag Question", target: "You don't eat spicy food, do you?", distractors: ["You don't eat spicy food, don't you?", "You don't eat spicy food, are you?"] },
            { original: "She was at the office yesterday", modifier: "⚡ Tag Question", target: "She was at the office yesterday, wasn't she?", distractors: ["She was at the office yesterday, didn't she?", "She was at the office yesterday, isn't she?"] },
            { original: "They will call us back soon", modifier: "⚡ Tag Question", target: "They will call us back soon, won't they?", distractors: ["They will call us back soon, will they?", "They will call us back soon, don't they?"] }
        ];
    }

    recordMistake(card) {
        if (!card) return;
        const orig = typeof card === 'string' ? card : (card.original || '');
        if (!orig) return;

        // Find the full item with distractors in rawPatterns
        const rawItem = this.rawPatterns.find(p => p.original === orig);
        if (!rawItem) return;

        // Avoid duplicate queuing
        const exists = this.weakSpotQueue.some(w => w.card.original === rawItem.original);
        if (!exists) {
            // Schedule this weak spot card to return after 2 other cards (delay = 3)
            this.weakSpotQueue.push({ card: rawItem, delay: 3 });
        }
    }

    getNextCard() {
        return this.getRandomCard();
    }

    getRandomCard() {
        // 1. Decrement delays in weak spot retry queue
        for (let i = 0; i < this.weakSpotQueue.length; i++) {
            this.weakSpotQueue[i].delay--;
        }

        // 2. Check if any weak spot card is ready to repeat (delay <= 0)
        const readyWeakIdx = this.weakSpotQueue.findIndex(w => w.delay <= 0);
        let selectedItem = null;
        let isRetry = false;

        if (readyWeakIdx !== -1) {
            selectedItem = this.weakSpotQueue.splice(readyWeakIdx, 1)[0].card;
            isRetry = true;
        } else {
            // Pick a fresh card avoiding the last 15 seen cards to prevent immediate repetition
            const available = this.rawPatterns.filter(p => !this.recentQueue.includes(p.original));
            const pool = available.length > 0 ? available : this.rawPatterns;
            selectedItem = pool[Math.floor(Math.random() * pool.length)];
        }

        // Track in recent history (last 15)
        this.recentQueue.push(selectedItem.original);
        if (this.recentQueue.length > 15) this.recentQueue.shift();

        // Safely extract distractors
        let distractors = selectedItem.distractors;
        if (!Array.isArray(distractors)) {
            if (Array.isArray(selectedItem.options)) {
                distractors = selectedItem.options.filter(o => o !== selectedItem.target);
            } else {
                distractors = [];
            }
        }

        const allOptions = [selectedItem.target, ...distractors];
        for (let i = allOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
        }

        return {
            original: selectedItem.original,
            modifier: selectedItem.modifier,
            target: selectedItem.target,
            options: allOptions,
            correctIdx: allOptions.indexOf(selectedItem.target),
            isRetry
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
