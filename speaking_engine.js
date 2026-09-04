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
            // 1. Daily Routine & Habits
            {
                id: "morning_routine",
                category: "daily",
                title: "☀️ Моё идеальное утро (My Morning Routine)",
                prompt: "Describe your morning routine. What time do you wake up, what do you eat or drink, and what helps you start a good day?",
                questions: [
                    "What time do you usually wake up?",
                    "What is your favorite breakfast or morning drink?",
                    "How do you feel in the morning: energetic or sleepy?"
                ],
                hints: ["Usually, I wake up around...", "First of all, I have...", "What I really enjoy in the morning is..."]
            },
            {
                id: "lazy_sunday",
                category: "daily",
                title: "🛋️ Идеальное ленивое воскресенье (My Lazy Sunday)",
                prompt: "Tell how you like to spend a relaxing day off. Where do you go, what do you do, and who do you spend time with?",
                questions: [
                    "Do you stay at home or go outside?",
                    "What movies, music, or hobbies do you enjoy on weekends?",
                    "Why is this kind of rest important for you?"
                ],
                hints: ["On my day off, I prefer to...", "In the afternoon, I usually...", "To be honest, the best way to relax is..."]
            },
            {
                id: "working_day",
                category: "daily",
                title: "💼 Мой рабочий день (A Typical Working Day)",
                prompt: "Describe what a normal working or study day looks like for you. What tasks do you do, and how do you stay focused?",
                questions: [
                    "Where do you work: in an office or from home?",
                    "What is the most interesting or difficult part of your work?",
                    "When do you usually finish your workday?"
                ],
                hints: ["My workday usually begins with...", "The most important task for me is...", "After finishing work, I like to..."]
            },

            // 2. Travel & Places
            {
                id: "memorable_trip",
                category: "travel",
                title: "🌍 Незабываемое путешествие (A Memorable Vacation)",
                prompt: "Tell about a memorable trip, vacation, or weekend getaway. Where did you go, what did you see, and what was the atmosphere like?",
                questions: [
                    "Which city or country did you visit?",
                    "What was the most beautiful or surprising thing you saw?",
                    "Would you like to go back there again?"
                ],
                hints: ["A few months ago, I visited...", "The place was truly amazing because...", "What impressed me most was..."]
            },
            {
                id: "favorite_city",
                category: "travel",
                title: "🏙️ Мой любимый город (My Favorite City or Place)",
                prompt: "Describe your hometown or a city you love walking in. What places do you recommend visiting, and what makes it special?",
                questions: [
                    "What are the best walking spots in this city?",
                    "What is the weather and atmosphere like?",
                    "Why do you feel comfortable there?"
                ],
                hints: ["My favorite city has a unique vibe because...", "If you visit, you should definitely check out...", "I love walking along..."]
            },
            {
                id: "dream_destination",
                category: "travel",
                title: "✈️ Путешествие мечты (My Dream Trip)",
                prompt: "If you could fly anywhere in the world tomorrow, where would you go and what would you do there first?",
                questions: [
                    "Which country or island do you dream of visiting?",
                    "Who would you take with you on this journey?",
                    "What local food or sights would you try first?"
                ],
                hints: ["I have always dreamed of traveling to...", "The first thing I would do there is...", "I think it would be an unforgettable experience because..."]
            },

            // 3. Food & Cafes
            {
                id: "favorite_dish",
                category: "food",
                title: "🍝 Любимая еда и готовка (My Favorite Food)",
                prompt: "Talk about your favorite dish, cuisine, or a meal you love cooking. Why do you like it so much?",
                questions: [
                    "What is your all-time favorite meal?",
                    "Do you prefer cooking at home or eating out?",
                    "What ingredients make this food so delicious?"
                ],
                hints: ["When it comes to food, I really love...", "I often prepare it by...", "For me, the secret ingredient is..."]
            },
            {
                id: "cozy_cafe",
                category: "food",
                title: "☕ Уютное кафе или ресторан (A Cozy Place to Eat)",
                prompt: "Describe a cafe, bakery, or restaurant you really enjoy visiting. What is the interior, service, and dessert like?",
                questions: [
                    "What kind of drinks or desserts do you order there?",
                    "Is it a quiet spot for thinking, or a lively place with friends?",
                    "Why do you recommend this place?"
                ],
                hints: ["There is a lovely cafe near my place where...", "The atmosphere is very warm and cozy because...", "I always order their delicious..."]
            },

            // 4. Shopping & Lifestyle
            {
                id: "great_purchase",
                category: "shopping",
                title: "🛍️ Удачная покупка (A Great Purchase I Love)",
                prompt: "Tell about an item, gadget, or piece of clothing you bought recently that made your life better or happier.",
                questions: [
                    "What did you buy and where?",
                    "How often do you use it in everyday life?",
                    "Why was it definitely worth the money?"
                ],
                hints: ["Recently, I bought a new...", "It turned out to be very useful because...", "I am really satisfied with this purchase because..."]
            },
            {
                id: "ideal_home",
                category: "shopping",
                title: "🏡 Мой уютный дом (My Cozy Space)",
                prompt: "Describe your room or apartment. What makes your home comfortable, and what is your favorite corner?",
                questions: [
                    "What colors, plants, or furniture make your room cozy?",
                    "Where do you spend most of your evening time?",
                    "What is one thing you would like to add to your interior?"
                ],
                hints: ["My home is a place where I feel...", "In my living room, there is a comfortable...", "What makes it feel warm and welcoming is..."]
            },

            // 5. Leisure, Movies & Books
            {
                id: "great_movie",
                category: "leisure",
                title: "🎬 Фильм или сериал (A Movie or Show I Recommend)",
                prompt: "Talk about a movie, show, or book that caught your attention. What was the storyline and why was it interesting?",
                questions: [
                    "What is the title and genre of the show/book?",
                    "Who was your favorite character and why?",
                    "What main message or emotion did you get from it?"
                ],
                hints: ["Not so long ago, I watched...", "The story is about...", "What I liked most about the plot was..."]
            },
            {
                id: "stress_relief",
                category: "leisure",
                title: "🌿 Как я отдыхаю и заряжаюсь (How I Recharge)",
                prompt: "Explain how you handle stress after a busy week. What activities or small rituals give you peace and energy?",
                questions: [
                    "Do walks, music, baths, sports, or silence help you most?",
                    "Do you prefer being alone or talking with close friends?",
                    "How do you feel after taking time for yourself?"
                ],
                hints: ["Whenever I feel exhausted, I usually...", "Listening to calm music and taking a walk helps me...", "After an hour of rest, I feel much more..."]
            },

            // 6. Real Life Stories
            {
                id: "funny_story",
                category: "stories",
                title: "🎈 Забавная или курьёзная история (A Funny Story)",
                prompt: "Tell a short funny, awkward, or unexpected story that happened to you, your friends, or your pets.",
                questions: [
                    "When and where did this funny event happen?",
                    "What unexpected thing occurred?",
                    "How did you and the people around you react?"
                ],
                hints: ["One day, a funny thing happened when...", "Suddenly, without any warning...", "In the end, everyone started laughing because..."]
            },
            {
                id: "new_skill",
                category: "stories",
                title: "🎯 Новый навык или хобби (Something New I Learned)",
                prompt: "Describe a new skill, sport, language, or recipe you tried learning recently. How was the experience?",
                questions: [
                    "What inspired you to start learning this?",
                    "What was challenging at the beginning?",
                    "How do you feel about your current progress?"
                ],
                hints: ["I decided to learn something new because...", "At first, it seemed quite challenging, but...", "Now I feel much more confident in..."]
            }
        ];

        // Everyday Real-Life Blitz Questions Pool
        this.blitzPool = [
            { question: "What do you usually have for breakfast?", sample: "I usually have two eggs, some toast, and a cup of black coffee." },
            { question: "What is your favorite season of the year and why?", sample: "I love autumn because the air is fresh and the trees look golden." },
            { question: "Do you prefer tea or coffee in the morning?", sample: "I definitely prefer strong coffee because it gives me energy." },
            { question: "What was the last movie or TV show you watched?", sample: "I recently watched a thrilling detective series on Netflix." },
            { question: "Where did you go last weekend?", sample: "Last weekend I went for a long walk in the central park with my friend." },
            { question: "What is your favorite way to spend a Friday evening?", sample: "I like ordering delicious pizza and watching a good movie at home." },
            { question: "What is one country you would love to visit?", sample: "I would love to visit Italy for its history, art, and amazing pasta." },
            { question: "How do you usually get to work or study?", sample: "I usually take the subway because it is fast and avoids traffic jams." },
            { question: "What is your favorite dish to cook at home?", sample: "I love making homemade pasta with creamy mushroom sauce." },
            { question: "What makes you smile when you have a hard day?", sample: "A warm cup of tea and a funny video from a friend always make me smile." },
            { question: "Do you prefer dogs or cats, and why?", sample: "I prefer cats because they are independent, calm, and very soft." },
            { question: "What is your favorite book or author?", sample: "I enjoy reading psychological books that help me understand people better." },
            { question: "What time do you usually go to bed on weekdays?", sample: "On weekdays I try to go to bed around eleven o'clock at night." },
            { question: "What sport or physical activity do you enjoy?", sample: "I enjoy swimming and yoga because they help my back stay healthy." },
            { question: "What was the best gift you ever received?", sample: "The best gift was a trip to the seaside for my birthday." }
        ];
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
