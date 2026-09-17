/**
 * SPEAKING & FLUENCY ENGINE (4/3/2 SPRINT & BLITZ Q&A) - Version 2.0
 * 1..100 Levels • 300,000 Total Spoken Words • Continuous Speech Flow
 * Prof. Paul Nation's Fluency Methodology + Real-Life Practical Topics
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
        this.sprintRoundWords = [0, 0, 0];
        this.sprintTranscripts = ["", "", ""];
        this.sprintWpm = [0, 0, 0];
        this.sprintAudioBlobs = [null, null, null];
        this.sprintAudioUrls = ["", "", ""];
        this.sprintAiFeedback = [null, null, null];
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

        if (typeof window !== 'undefined' && window.syncPlayerStateToServer) {
            window.syncPlayerStateToServer();
        }

        let leveledUp = false;
        if (newStats.level > prevStats.level) {
            leveledUp = true;
            localStorage.setItem(this.lastLvlKey, newStats.level.toString());
        }

        if (typeof window !== 'undefined' && typeof window.recordSpeakingStreakActivity === 'function') {
            window.recordSpeakingStreakActivity(wordsCount);
        }

        return {
            leveledUp,
            newLevel: newStats.level,
            totalWords: this.totalWords,
            stats: newStats
        };
    }

    initTopicsAndQuestions() {
        this.categories = [
            { id: "all", name: "✨ Все темы (Случайно)" },
            { id: "daily", name: "☕ Мой день и привычки" },
            { id: "travel", name: "✈️ Путешествия и места" },
            { id: "food", name: "🍕 Еда и рестораны" },
            { id: "shopping", name: "🛍️ Покупки и быт" },
            { id: "leisure", name: "🎬 Досуг, фильмы и отдых" },
            { id: "stories", name: "🎈 Истории из жизни" }
        ];

        this.topics = [
            // 1. Daily Routine & Habits (A1)
            {
                id: "morning_routine",
                category: "daily",
                title: "☀️ Моё утро (My Morning Routine)",
                prompt: "Расскажите о своем обычном утре. Во сколько вы просыпаетесь, что едите на завтрак и что пьете? (Describe your morning routine).",
                questions: [
                    "What time do you usually wake up?",
                    "What do you eat and drink for breakfast?",
                    "Do you feel happy and energetic in the morning?"
                ],
                hints: ["Every morning, I usually wake up at...", "For breakfast, I like to eat...", "Also, I always drink a cup of..."]
            },
            {
                id: "lazy_sunday",
                category: "daily",
                title: "🛋️ Мой выходной (My Day Off)",
                prompt: "Как вы проводите выходной день? Чем любите заниматься дома или на улице? (How do you spend your day off?).",
                questions: [
                    "Do you stay at home or go for a walk?",
                    "Who do you spend your day with?",
                    "What is your favorite hobby on weekends?"
                ],
                hints: ["On my day off, I like to sleep and...", "In the afternoon, I often go for a walk with...", "Also, I enjoy listening to music and..."]
            },
            {
                id: "working_day",
                category: "daily",
                title: "💼 Моя работа или учеба (My Work or Study)",
                prompt: "Расскажите о своей работе или учебе. Где вы работаете и что делаете каждый день? (Tell about your job or study).",
                questions: [
                    "Where do you work: in an office or at home?",
                    "What do you do at work every day?",
                    "Do you like your work and why?"
                ],
                hints: ["I work in an office / from home as a...", "Every day, I work with a computer and...", "I like my job because it is..."]
            },

            // 2. Travel & Places (A1)
            {
                id: "memorable_trip",
                category: "travel",
                title: "🌍 Моя поездка (A Trip I Remember)",
                prompt: "Расскажите о поездке в другой город или на природу. Куда вы ездили и какая была погода? (Tell about a trip).",
                questions: [
                    "What city or place did you visit?",
                    "Who did you go with (family or friends)?",
                    "What was the weather like?"
                ],
                hints: ["Last year, I visited a very nice place named...", "I went there with my...", "The weather was warm and sunny, and I saw..."]
            },
            {
                id: "favorite_city",
                category: "travel",
                title: "🏙️ Мой город (My Favorite City or Town)",
                prompt: "Опишите ваш город. Какие красивые места в нем есть и куда можно сходить? (Describe your city).",
                questions: [
                    "Is your city big or small?",
                    "What is your favorite place in the city?",
                    "What can you see and do there?"
                ],
                hints: ["I live in a beautiful city named...", "There is a big green park and nice cafes...", "I often walk here with my friends because..."]
            },
            {
                id: "dream_destination",
                category: "travel",
                title: "✈️ Место мечты (A Place I Want to Visit)",
                prompt: "В какую страну или город вы мечтаете поехать и что хотите там увидеть? (Where do you want to travel?).",
                questions: [
                    "What country do you want to visit?",
                    "Who do you want to take with you?",
                    "What do you want to see: sea, mountains, or museums?"
                ],
                hints: ["I really want to travel to...", "I want to go there with my...", "I want to see the sea and try local..."]
            },

            // 3. Food & Cafes (A1)
            {
                id: "favorite_dish",
                category: "food",
                title: "🍝 Моя любимая еда (My Favorite Food)",
                prompt: "Какую еду вы любите? Что вы готовите дома или любите есть на ужин? (Tell about your favorite food).",
                questions: [
                    "What is your favorite food or meal?",
                    "Do you like cooking at home?",
                    "What drinks do you like: tea, coffee, or juice?"
                ],
                hints: ["My favorite food is... because it is delicious.", "I often cook... at home for dinner.", "Also, I really like to drink..."]
            },
            {
                id: "cozy_cafe",
                category: "food",
                title: "☕ Моё любимое кафе (A Cozy Cafe)",
                prompt: "Расскажите про уютное кафе или ресторан, куда вы любите приходить. (Describe a cafe you like).",
                questions: [
                    "Where is this cafe located?",
                    "What do you usually order to eat and drink?",
                    "Why do you like this place?"
                ],
                hints: ["There is a lovely cafe near my house...", "I usually order coffee and a delicious cake...", "I like this place because it is quiet and..."]
            },

            // 4. Shopping & Lifestyle (A1)
            {
                id: "great_purchase",
                category: "shopping",
                title: "🛍️ Моя любимая вещь (A Thing I Like)",
                prompt: "Расскажите о вещи, одежде или телефоне, который вы любите использовать. (Tell about something you bought).",
                questions: [
                    "What is this item (phone, shoes, bag)?",
                    "What color is it and do you use it every day?",
                    "Why do you like it?"
                ],
                hints: ["I have a very nice...", "I use it every day because it is convenient...", "I really like it because it is..."]
            },
            {
                id: "ideal_home",
                category: "shopping",
                title: "🏡 Мой уютный дом (My Cozy Room)",
                prompt: "Опишите вашу комнату или квартиру. Какая мебель там есть и что делает ее уютной? (Describe your room).",
                questions: [
                    "What rooms are there in your flat?",
                    "What furniture is in your favorite room?",
                    "What do you like to do in your room?"
                ],
                hints: ["I live in a comfortable flat with...", "In my room, there is a big bed, a desk, and...", "I like spending time here because it is warm and..."]
            },

            // 5. Leisure & Hobbies (A1)
            {
                id: "great_movie",
                category: "leisure",
                title: "🎬 Мой любимый фильм (A Movie I Like)",
                prompt: "Расскажите о фильме, мультике или сериале, который вам нравится. (Tell about a movie you like).",
                questions: [
                    "What is the title of the movie or show?",
                    "Is it a comedy, a drama, or a cartoon?",
                    "Who is your favorite character in it?"
                ],
                hints: ["I really like the movie called...", "It is a very funny and interesting story about...", "I like the main hero because..."]
            },
            {
                id: "pets_and_animals",
                category: "leisure",
                title: "🐱 Мой питомец или животные (My Pet or Favorite Animal)",
                prompt: "Расскажите о своем питомце (кошке, собаке) или любимом животном. (Tell about your pet or animal).",
                questions: [
                    "Do you have a cat, dog, or other pet?",
                    "What is its name and what color is it?",
                    "What does it like to do every day?"
                ],
                hints: ["I have a lovely pet named...", "It is very friendly, cute, and...", "Every day, it likes to play and eat..."]
            }
        ];

        // Everyday Real-Life Blitz Questions Pool (A1 Level)
        this.blitzPool = [
            { question: "What do you usually have for breakfast?", sample: "I usually have two eggs, some bread, and a cup of hot tea." },
            { question: "What is your favorite color and why?", sample: "My favorite color is blue because it is calm and beautiful." },
            { question: "Do you prefer tea or coffee in the morning?", sample: "I prefer coffee with milk because it helps me wake up." },
            { question: "What is the weather like today?", sample: "Today the weather is sunny, warm, and very pleasant." },
            { question: "Where do you like to go on weekends?", sample: "On weekends, I like to go to the park with my friends." },
            { question: "What is your favorite fruit?", sample: "My favorite fruits are red apples and sweet bananas." },
            { question: "What time do you usually go to bed?", sample: "I usually go to bed around eleven o'clock at night." },
            { question: "Do you prefer cats or dogs?", sample: "I prefer cats because they are quiet, cute, and soft." },
            { question: "What is your favorite dish for dinner?", sample: "For dinner, I really love chicken with potatoes and salad." },
            { question: "What country would you love to visit?", sample: "I would love to visit Italy to see beautiful cities and eat pizza." },
            { question: "How do you usually travel around the city?", sample: "I usually take the bus or walk on foot." },
            { question: "What do you like to do in the evening?", sample: "In the evening, I like to watch a good movie and drink tea." },
            { question: "What is your favorite season: summer or winter?", sample: "I love summer because it is warm and I can wear light clothes." },
            { question: "Do you like listening to music?", sample: "Yes, I listen to calm pop music every day on my phone." },
            { question: "What makes you smile when you have a hard day?", sample: "Talking with my family and a sweet dessert always make me smile." }
        ];

        // 10 Key Substitution Warm-up Patterns (Level A1 Automation)
        this.warmupPatterns = [
            {
                id: "have_a",
                template: "I have a [ ... ]",
                prefix: "I have a ",
                suffix: ".",
                translation: "У меня есть...",
                slots: [
                    { word: "laptop", translation: "ноутбук", full: "I have a laptop." },
                    { word: "cat", translation: "кошка", full: "I have a cat." },
                    { word: "question", translation: "вопрос", full: "I have a question." },
                    { word: "big family", translation: "большая семья", full: "I have a big family." },
                    { word: "cup of coffee", translation: "чашка кофе", full: "I have a cup of coffee." },
                    { word: "new phone", translation: "новый телефон", full: "I have a new phone." },
                    { word: "car", translation: "машина", full: "I have a car." },
                    { word: "good idea", translation: "хорошая идея", full: "I have a good idea." }
                ]
            },
            {
                id: "like_to",
                template: "I like to [ ... ]",
                prefix: "I like to ",
                suffix: ".",
                translation: "Мне нравится...",
                slots: [
                    { word: "drink hot tea", translation: "пить горячий чай", full: "I like to drink hot tea." },
                    { word: "read books", translation: "читать книги", full: "I like to read books." },
                    { word: "walk in the park", translation: "гулять в парке", full: "I like to walk in the park." },
                    { word: "cook dinner", translation: "готовить ужин", full: "I like to cook dinner." },
                    { word: "listen to music", translation: "слушать музыку", full: "I like to listen to music." },
                    { word: "sleep late", translation: "долго спать", full: "I like to sleep late." },
                    { word: "learn English", translation: "учить английский", full: "I like to learn English." },
                    { word: "watch movies", translation: "смотреть фильмы", full: "I like to watch movies." }
                ]
            },
            {
                id: "there_is",
                template: "There is a [ ... ]",
                prefix: "There is a ",
                suffix: ".",
                translation: "Здесь находится / есть...",
                slots: [
                    { word: "nice cafe nearby", translation: "хорошее кафе рядом", full: "There is a nice cafe nearby." },
                    { word: "big green park", translation: "большой зеленый парк", full: "There is a big green park." },
                    { word: "subway station here", translation: "станция метро здесь", full: "There is a subway station here." },
                    { word: "good supermarket", translation: "хороший супермаркет", full: "There is a good supermarket." },
                    { word: "small table in my room", translation: "маленький столик в моей комнате", full: "There is a small table in my room." },
                    { word: "pharmacy on this street", translation: "аптека на этой улице", full: "There is a pharmacy on this street." },
                    { word: "comfortable chair", translation: "удобное кресло", full: "There is a comfortable chair." }
                ]
            },
            {
                id: "need_some",
                template: "I need some [ ... ]",
                prefix: "I need some ",
                suffix: ".",
                translation: "Мне нужно немного...",
                slots: [
                    { word: "cold water", translation: "холодной воды", full: "I need some cold water." },
                    { word: "hot coffee", translation: "горячего кофе", full: "I need some hot coffee." },
                    { word: "fresh bread", translation: "свежего хлеба", full: "I need some fresh bread." },
                    { word: "free time", translation: "свободного времени", full: "I need some free time." },
                    { word: "help with this", translation: "помощи с этим", full: "I need some help with this." },
                    { word: "rest today", translation: "отдыха сегодня", full: "I need some rest today." },
                    { word: "sleep", translation: "сна", full: "I need some sleep." }
                ]
            },
            {
                id: "every_day",
                template: "Every day I [ ... ]",
                prefix: "Every day I ",
                suffix: ".",
                translation: "Каждый день я...",
                slots: [
                    { word: "wake up early", translation: "просыпаюсь рано", full: "Every day I wake up early." },
                    { word: "drink coffee with milk", translation: "пью кофе с молоком", full: "Every day I drink coffee with milk." },
                    { word: "work on my computer", translation: "работаю за компьютером", full: "Every day I work on my computer." },
                    { word: "talk to my friends", translation: "общаюсь с друзьями", full: "Every day I talk to my friends." },
                    { word: "take a morning walk", translation: "совершаю утреннюю прогулку", full: "Every day I take a morning walk." },
                    { word: "cook healthy food", translation: "готовлю здоровую еду", full: "Every day I cook healthy food." },
                    { word: "learn new words", translation: "учу новые слова", full: "Every day I learn new words." }
                ]
            },
            {
                id: "want_to_buy",
                template: "I want to buy a [ ... ]",
                prefix: "I want to buy a ",
                suffix: ".",
                translation: "Я хочу купить...",
                slots: [
                    { word: "warm jacket", translation: "теплую куртку", full: "I want to buy a warm jacket." },
                    { word: "new laptop", translation: "новый ноутбук", full: "I want to buy a new laptop." },
                    { word: "cup of cappuccino", translation: "чашку капучино", full: "I want to buy a cup of cappuccino." },
                    { word: "ticket to London", translation: "билет в Лондон", full: "I want to buy a ticket to London." },
                    { word: "beautiful gift", translation: "красивый подарок", full: "I want to buy a beautiful gift." },
                    { word: "book in English", translation: "книгу на английском", full: "I want to buy a book in English." },
                    { word: "comfortable bag", translation: "удобную сумку", full: "I want to buy a comfortable bag." }
                ]
            },
            {
                id: "can_do",
                template: "I can [ ... ]",
                prefix: "I can ",
                suffix: ".",
                translation: "Я могу / умею...",
                slots: [
                    { word: "speak English a little", translation: "немного говорить по-английски", full: "I can speak English a little." },
                    { word: "cook delicious pasta", translation: "готовить вкусную пасту", full: "I can cook delicious pasta." },
                    { word: "swim very well", translation: "очень хорошо плавать", full: "I can swim very well." },
                    { word: "drive a car", translation: "водить машину", full: "I can drive a car." },
                    { word: "play the guitar", translation: "играть на гитаре", full: "I can play the guitar." },
                    { word: "help you today", translation: "помочь тебе сегодня", full: "I can help you today." }
                ]
            },
            {
                id: "she_doesnt_like",
                template: "She doesn't like [ ... ]",
                prefix: "She doesn't like ",
                suffix: ".",
                translation: "Она не любит...",
                slots: [
                    { word: "cold weather", translation: "холодную погоду", full: "She doesn't like cold weather." },
                    { word: "fast food", translation: "фастфуд", full: "She doesn't like fast food." },
                    { word: "black coffee", translation: "черный кофе", full: "She doesn't like black coffee." },
                    { word: "waking up early", translation: "рано просыпаться", full: "She doesn't like waking up early." },
                    { word: "rainy days", translation: "дождливые дни", full: "She doesn't like rainy days." },
                    { word: "noisy places", translation: "шумные места", full: "She doesn't like noisy places." }
                ]
            },
            {
                id: "do_you_have",
                template: "Do you have [ ... ] ?",
                prefix: "Do you have ",
                suffix: "?",
                translation: "У вас есть...?",
                slots: [
                    { word: "a pen", translation: "ручка", full: "Do you have a pen?" },
                    { word: "some free time", translation: "немного свободного времени", full: "Do you have some free time?" },
                    { word: "a pet at home", translation: "домашний питомец дома", full: "Do you have a pet at home?" },
                    { word: "free Wi-Fi here", translation: "бесплатный Wi-Fi здесь", full: "Do you have free Wi-Fi here?" },
                    { word: "any questions", translation: "какие-нибудь вопросы", full: "Do you have any questions?" },
                    { word: "a bottle of water", translation: "бутылка воды", full: "Do you have a bottle of water?" }
                ]
            },
            {
                id: "there_are_many",
                template: "There are many [ ... ]",
                prefix: "There are many ",
                suffix: ".",
                translation: "Здесь много...",
                slots: [
                    { word: "good cafes in my city", translation: "хороших кафе в моем городе", full: "There are many good cafes in my city." },
                    { word: "big shops nearby", translation: "больших магазинов рядом", full: "There are many big shops nearby." },
                    { word: "friendly people here", translation: "дружелюбных людей здесь", full: "There are many friendly people here." },
                    { word: "nice parks in the center", translation: "красивых парков в центре", full: "There are many nice parks in the center." },
                    { word: "interesting books at home", translation: "интересных книг дома", full: "There are many interesting books at home." },
                    { word: "cars on the street", translation: "машин на улице", full: "There are many cars on the street." },
                    { word: "students in the room", translation: "студентов в комнате", full: "There are many students in the room." }
                ]
            },
            {
                id: "dont_have",
                template: "I don't have [ ... ]",
                prefix: "I don't have ",
                suffix: ".",
                translation: "У меня нет...",
                slots: [
                    { word: "a car", translation: "машины", full: "I don't have a car." },
                    { word: "a cat", translation: "кошки", full: "I don't have a cat." },
                    { word: "a laptop with me", translation: "ноутбука с собой", full: "I don't have a laptop with me." },
                    { word: "much free time today", translation: "много свободного времени сегодня", full: "I don't have much free time today." },
                    { word: "a credit card", translation: "кредитной карты", full: "I don't have a credit card." },
                    { word: "any cash", translation: "наличных денег", full: "I don't have any cash." },
                    { word: "a brother or sister", translation: "брата или сестры", full: "I don't have a brother or sister." }
                ]
            },
            {
                id: "would_like_cup",
                template: "I would like a cup of [ ... ], please",
                prefix: "I would like a cup of ",
                suffix: ", please.",
                translation: "Я бы хотел(а) чашку..., пожалуйста",
                slots: [
                    { word: "hot coffee", translation: "горячего кофе", full: "I would like a cup of hot coffee, please." },
                    { word: "black tea", translation: "черного чая", full: "I would like a cup of black tea, please." },
                    { word: "green tea", translation: "зеленого чая", full: "I would like a cup of green tea, please." },
                    { word: "hot chocolate", translation: "горячего шоколада", full: "I would like a cup of hot chocolate, please." },
                    { word: "warm water with lemon", translation: "теплой воды с лимоном", full: "I would like a cup of warm water with lemon, please." },
                    { word: "cappuccino", translation: "капучино", full: "I would like a cup of cappuccino, please." },
                    { word: "sweet tea", translation: "сладкого чая", full: "I would like a cup of sweet tea, please." }
                ]
            },
            {
                id: "can_i_have",
                template: "Can I have a [ ... ], please?",
                prefix: "Can I have a ",
                suffix: ", please?",
                translation: "Можно мне..., пожалуйста?",
                slots: [
                    { word: "glass of water", translation: "стакан воды", full: "Can I have a glass of water, please?" },
                    { word: "menu", translation: "меню", full: "Can I have a menu, please?" },
                    { word: "cup of coffee", translation: "чашку кофе", full: "Can I have a cup of coffee, please?" },
                    { word: "sandwich", translation: "сэндвич", full: "Can I have a sandwich, please?" },
                    { word: "receipt", translation: "чек", full: "Can I have a receipt, please?" },
                    { word: "napkin", translation: "салфетку", full: "Can I have a napkin, please?" },
                    { word: "bottle of juice", translation: "бутылку сока", full: "Can I have a bottle of juice, please?" }
                ]
            },
            {
                id: "want_to_go",
                template: "I want to go to [ ... ]",
                prefix: "I want to go to ",
                suffix: ".",
                translation: "Я хочу пойти / поехать в...",
                slots: [
                    { word: "the park", translation: "парк", full: "I want to go to the park." },
                    { word: "the cafe", translation: "кафе", full: "I want to go to the cafe." },
                    { word: "the cinema", translation: "кинотеатр", full: "I want to go to the cinema." },
                    { word: "Italy this summer", translation: "Италию этим летом", full: "I want to go to Italy this summer." },
                    { word: "bed early", translation: "спать пораньше", full: "I want to go to bed early." },
                    { word: "the supermarket", translation: "супермаркет", full: "I want to go to the supermarket." },
                    { word: "the beach", translation: "пляж", full: "I want to go to the beach." }
                ]
            },
            {
                id: "my_favorite_is",
                template: "My favorite [ ... ] is...",
                prefix: "My favorite ",
                suffix: ".",
                translation: "Мой любимый / Моя любимая...",
                slots: [
                    { word: "drink is hot tea", translation: "напиток — горячий чай", full: "My favorite drink is hot tea." },
                    { word: "color is blue", translation: "цвет — синий", full: "My favorite color is blue." },
                    { word: "city is London", translation: "город — Лондон", full: "My favorite city is London." },
                    { word: "season is summer", translation: "время года — лето", full: "My favorite season is summer." },
                    { word: "food is Italian pizza", translation: "еда — итальянская пицца", full: "My favorite food is Italian pizza." },
                    { word: "pet is a small cat", translation: "питомец — маленькая кошка", full: "My favorite pet is a small cat." },
                    { word: "day of the week is Saturday", translation: "день недели — суббота", full: "My favorite day of the week is Saturday." }
                ]
            },
            {
                id: "think_it_is",
                template: "I think it is very [ ... ]",
                prefix: "I think it is very ",
                suffix: ".",
                translation: "Я думаю, это очень...",
                slots: [
                    { word: "beautiful", translation: "красиво", full: "I think it is very beautiful." },
                    { word: "interesting", translation: "интересно", full: "I think it is very interesting." },
                    { word: "important", translation: "важно", full: "I think it is very important." },
                    { word: "easy to do", translation: "легко сделать", full: "I think it is very easy to do." },
                    { word: "delicious", translation: "вкусно", full: "I think it is very delicious." },
                    { word: "useful for me", translation: "полезно для меня", full: "I think it is very useful for me." },
                    { word: "comfortable", translation: "удобно / комфортно", full: "I think it is very comfortable." }
                ]
            },
            {
                id: "in_the_morning_usually",
                template: "In the morning I usually [ ... ]",
                prefix: "In the morning I usually ",
                suffix: ".",
                translation: "Утром я обычно...",
                slots: [
                    { word: "drink black coffee", translation: "пью черный кофе", full: "In the morning I usually drink black coffee." },
                    { word: "eat two eggs", translation: "ем два яйца", full: "In the morning I usually eat two eggs." },
                    { word: "take a warm shower", translation: "принимаю теплый душ", full: "In the morning I usually take a warm shower." },
                    { word: "listen to calm music", translation: "слушаю спокойную музыку", full: "In the morning I usually listen to calm music." },
                    { word: "check my messages", translation: "проверяю сообщения", full: "In the morning I usually check my messages." },
                    { word: "read the news", translation: "читаю новости", full: "In the morning I usually read the news." },
                    { word: "go for a short walk", translation: "иду на короткую прогулку", full: "In the morning I usually go for a short walk." }
                ]
            },
            {
                id: "after_work_like",
                template: "After work I like to [ ... ]",
                prefix: "After work I like to ",
                suffix: ".",
                translation: "После работы мне нравится...",
                slots: [
                    { word: "relax at home", translation: "отдыхать дома", full: "After work I like to relax at home." },
                    { word: "walk in the green park", translation: "гулять в зеленом парке", full: "After work I like to walk in the green park." },
                    { word: "cook dinner with music", translation: "готовить ужин под музыку", full: "After work I like to cook dinner with music." },
                    { word: "watch a good movie", translation: "смотреть хороший фильм", full: "After work I like to watch a good movie." },
                    { word: "talk to my family", translation: "разговаривать с семьей", full: "After work I like to talk to my family." },
                    { word: "read an interesting book", translation: "читать интересную книгу", full: "After work I like to read an interesting book." }
                ]
            },
            {
                id: "on_weekends_often",
                template: "On weekends we often [ ... ]",
                prefix: "On weekends we often ",
                suffix: ".",
                translation: "По выходным мы часто...",
                slots: [
                    { word: "meet our good friends", translation: "встречаемся с хорошими друзьями", full: "On weekends we often meet our good friends." },
                    { word: "go to a nice cafe", translation: "ходим в приятное кафе", full: "On weekends we often go to a nice cafe." },
                    { word: "sleep late in the morning", translation: "долго спим утром", full: "On weekends we often sleep late in the morning." },
                    { word: "clean the whole house", translation: "убираем весь дом", full: "On weekends we often clean the whole house." },
                    { word: "watch funny movies together", translation: "вместе смотрим смешные фильмы", full: "On weekends we often watch funny movies together." },
                    { word: "go for a long walk", translation: "отправляемся на долгую прогулку", full: "On weekends we often go for a long walk." }
                ]
            },
            {
                id: "am_very_now",
                template: "I am very [ ... ] right now",
                prefix: "I am very ",
                suffix: " right now.",
                translation: "Сейчас я очень...",
                slots: [
                    { word: "happy", translation: "счастлив(а)", full: "I am very happy right now." },
                    { word: "tired", translation: "устал(а)", full: "I am very tired right now." },
                    { word: "hungry", translation: "голоден / голодна", full: "I am very hungry right now." },
                    { word: "busy with work", translation: "занят(а) работой", full: "I am very busy with work right now." },
                    { word: "calm and relaxed", translation: "спокоен(йна) и расслаблен(а)", full: "I am very calm and relaxed right now." },
                    { word: "ready to speak English", translation: "готов(а) говорить по-английски", full: "I am very ready to speak English right now." }
                ]
            },
            {
                id: "it_is_too",
                template: "It is too [ ... ] today",
                prefix: "It is too ",
                suffix: " today.",
                translation: "Сегодня слишком...",
                slots: [
                    { word: "cold outside", translation: "холодно на улице", full: "It is too cold outside today." },
                    { word: "hot in the room", translation: "жарко в комнате", full: "It is too hot in the room today." },
                    { word: "noisy here", translation: "шумно здесь", full: "It is too noisy here today." },
                    { word: "late to go out", translation: "поздно выходить на улицу", full: "It is too late to go out today." },
                    { word: "dark outside", translation: "темно на улице", full: "It is too dark outside today." },
                    { word: "expensive", translation: "дорого", full: "It is too expensive today." }
                ]
            },
            {
                id: "where_is_nearest",
                template: "Where is the nearest [ ... ] ?",
                prefix: "Where is the nearest ",
                suffix: "?",
                translation: "Где находится ближайший(ая)...?",
                slots: [
                    { word: "subway station", translation: "станция метро", full: "Where is the nearest subway station?" },
                    { word: "pharmacy", translation: "аптека", full: "Where is the nearest pharmacy?" },
                    { word: "supermarket", translation: "супермаркет", full: "Where is the nearest supermarket?" },
                    { word: "coffee shop", translation: "кофейня", full: "Where is the nearest coffee shop?" },
                    { word: "bus stop", translation: "автобусная остановка", full: "Where is the nearest bus stop?" },
                    { word: "bank with ATM", translation: "банк с банкоматом", full: "Where is the nearest bank with ATM?" }
                ]
            },
            {
                id: "how_much_is",
                template: "How much is this [ ... ] ?",
                prefix: "How much is this ",
                suffix: "?",
                translation: "Сколько стоит этот(эта)...?",
                slots: [
                    { word: "cup of coffee", translation: "чашка кофе", full: "How much is this cup of coffee?" },
                    { word: "white t-shirt", translation: "белая футболка", full: "How much is this white t-shirt?" },
                    { word: "English book", translation: "книга на английском", full: "How much is this English book?" },
                    { word: "bottle of water", translation: "бутылка воды", full: "How much is this bottle of water?" },
                    { word: "train ticket", translation: "билет на поезд", full: "How much is this train ticket?" },
                    { word: "tasty sandwich", translation: "вкусный сэндвич", full: "How much is this tasty sandwich?" }
                ]
            },
            {
                id: "last_weekend_went",
                template: "Last weekend I went to [ ... ]",
                prefix: "Last weekend I went to ",
                suffix: ".",
                translation: "В прошлые выходные я ездил(а) / ходил(а) в...",
                slots: [
                    { word: "the central park", translation: "центральный парк", full: "Last weekend I went to the central park." },
                    { word: "a lovely cafe", translation: "уютное кафе", full: "Last weekend I went to a lovely cafe." },
                    { word: "the cinema with my friends", translation: "кинотеатр с друзьями", full: "Last weekend I went to the cinema with my friends." },
                    { word: "the big supermarket", translation: "большой супермаркет", full: "Last weekend I went to the big supermarket." },
                    { word: "another beautiful city", translation: "другой красивый город", full: "Last weekend I went to another beautiful city." },
                    { word: "the sandy beach", translation: "песчаный пляж", full: "Last weekend I went to the sandy beach." }
                ]
            },
            {
                id: "i_am_learning",
                template: "I am learning [ ... ]",
                prefix: "I am learning ",
                suffix: ".",
                translation: "Я учусь / изучаю...",
                slots: [
                    { word: "English every day", translation: "английский каждый день", full: "I am learning English every day." },
                    { word: "new English words", translation: "новые английские слова", full: "I am learning new English words." },
                    { word: "how to drive a car", translation: "как водить машину", full: "I am learning how to drive a car." },
                    { word: "how to cook pasta", translation: "как готовить пасту", full: "I am learning how to cook pasta." },
                    { word: "to speak fluently", translation: "говорить свободно", full: "I am learning to speak fluently." },
                    { word: "to play the piano", translation: "играть на пианино", full: "I am learning to play the piano." }
                ]
            }
        ];
    }

    getRandomWarmupPattern(excludeId = null) {
        const pool = excludeId ? this.warmupPatterns.filter(p => p.id !== excludeId) : this.warmupPatterns;
        const list = pool.length > 0 ? pool : this.warmupPatterns;
        return list[Math.floor(Math.random() * list.length)];
    }

    getRandomTopic(categoryId = "all") {
        const filtered = (categoryId === "all" || !categoryId)
            ? this.topics
            : this.topics.filter(t => t.category === categoryId);
        const pool = filtered.length > 0 ? filtered : this.topics;
        return pool[Math.floor(Math.random() * pool.length)];
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
