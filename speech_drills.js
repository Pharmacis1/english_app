/**
 * SPEECH DRILLS ENGINE (РЕЧЕВОЙ АВТОМАТ УРОВНЯ A1)
 * 25 Core Grammar Patterns • 165 Total Phrases • 5-Repetition Mastery System
 * High-Speed Speech Automation via Groq Whisper STT & Retrieval Practice
 */

class SpeechDrillsEngine {
    constructor() {
        this.TOTAL_ITEMS = 165;
        this.MAX_REPS_PER_ITEM = 5;
        this.TOTAL_MAX_POINTS = this.TOTAL_ITEMS * this.MAX_REPS_PER_ITEM; // 825
        this.MAX_LEVEL = 100;
        this.storageKey = 'english_pulse_speech_drills_mastery';
        this.lastLvlKey = 'english_pulse_speech_drills_lvl';

        this.masteryMap = {}; // itemId -> count (0..5)
        this.currentCombo = 0;
        this.maxCombo = 0;
        this.activeItem = null;
        this.timerSeconds = 7; // Default 7s

        this.initPatterns();
        this.loadState();
    }

    initPatterns() {
        // 25 Core Patterns with clean Russian full phrases and English targets
        this.patterns = [
            {
                id: "have_a",
                template: "I have a [ ... ]",
                category: "Владение и предметы",
                translation: "У меня есть...",
                prefix: "I have a ",
                suffix: ".",
                slots: [
                    { id: "have_a_laptop", word: "laptop", ru: "У меня есть ноутбук.", en: "I have a laptop." },
                    { id: "have_a_cat", word: "cat", ru: "У меня есть кошка.", en: "I have a cat." },
                    { id: "have_a_question", word: "question", ru: "У меня есть вопрос.", en: "I have a question." },
                    { id: "have_a_big_family", word: "big family", ru: "У меня большая семья.", en: "I have a big family." },
                    { id: "have_a_cup_of_coffee", word: "cup of coffee", ru: "У меня есть чашка кофе.", en: "I have a cup of coffee." },
                    { id: "have_a_new_phone", word: "new phone", ru: "У меня есть новый телефон.", en: "I have a new phone." },
                    { id: "have_a_car", word: "car", ru: "У меня есть машина.", en: "I have a car." },
                    { id: "have_a_good_idea", word: "good idea", ru: "У меня есть хорошая идея.", en: "I have a good idea." }
                ]
            },
            {
                id: "like_to",
                template: "I like to [ ... ]",
                category: "Интересы и предпочтения",
                translation: "Мне нравится...",
                prefix: "I like to ",
                suffix: ".",
                slots: [
                    { id: "like_to_drink_tea", word: "drink hot tea", ru: "Мне нравится пить горячий чай.", en: "I like to drink hot tea." },
                    { id: "like_to_read_books", word: "read books", ru: "Мне нравится читать книги.", en: "I like to read books." },
                    { id: "like_to_walk_park", word: "walk in the park", ru: "Мне нравится гулять в парке.", en: "I like to walk in the park." },
                    { id: "like_to_cook_dinner", word: "cook dinner", ru: "Мне нравится готовить ужин.", en: "I like to cook dinner." },
                    { id: "like_to_listen_music", word: "listen to music", ru: "Мне нравится слушать музыку.", en: "I like to listen to music." },
                    { id: "like_to_sleep_late", word: "sleep late", ru: "Мне нравится долго спать.", en: "I like to sleep late." },
                    { id: "like_to_learn_english", word: "learn English", ru: "Мне нравится учить английский.", en: "I like to learn English." },
                    { id: "like_to_watch_movies", word: "watch movies", ru: "Мне нравится смотреть фильмы.", en: "I like to watch movies." }
                ]
            },
            {
                id: "there_is",
                template: "There is a [ ... ]",
                category: "Локация и наличие (ед.ч.)",
                translation: "Здесь есть / находится...",
                prefix: "There is a ",
                suffix: ".",
                slots: [
                    { id: "there_is_cafe", word: "nice cafe nearby", ru: "Здесь рядом есть хорошее кафе.", en: "There is a nice cafe nearby." },
                    { id: "there_is_park", word: "big green park", ru: "Здесь есть большой зеленый парк.", en: "There is a big green park." },
                    { id: "there_is_subway", word: "subway station here", ru: "Здесь находится станция метро.", en: "There is a subway station here." },
                    { id: "there_is_supermarket", word: "good supermarket", ru: "Здесь есть хороший супермаркет.", en: "There is a good supermarket." },
                    { id: "there_is_table", word: "small table in my room", ru: "В моей комнате есть маленький столик.", en: "There is a small table in my room." },
                    { id: "there_is_pharmacy", word: "pharmacy on this street", ru: "На этой улице есть аптека.", en: "There is a pharmacy on this street." },
                    { id: "there_is_chair", word: "comfortable chair", ru: "Здесь есть удобное кресло.", en: "There is a comfortable chair." }
                ]
            },
            {
                id: "need_some",
                template: "I need some [ ... ]",
                category: "Потребности и желания",
                translation: "Мне нужно немного...",
                prefix: "I need some ",
                suffix: ".",
                slots: [
                    { id: "need_some_water", word: "cold water", ru: "Мне нужно немного холодной воды.", en: "I need some cold water." },
                    { id: "need_some_coffee", word: "hot coffee", ru: "Мне нужно немного горячего кофе.", en: "I need some hot coffee." },
                    { id: "need_some_bread", word: "fresh bread", ru: "Мне нужно немного свежего хлеба.", en: "I need some fresh bread." },
                    { id: "need_some_time", word: "free time", ru: "Мне нужно немного свободного времени.", en: "I need some free time." },
                    { id: "need_some_help", word: "help with this", ru: "Мне нужна помощь с этим.", en: "I need some help with this." },
                    { id: "need_some_rest", word: "rest today", ru: "Мне нужен отдых сегодня.", en: "I need some rest today." },
                    { id: "need_some_sleep", word: "sleep", ru: "Мне нужно поспать.", en: "I need some sleep." }
                ]
            },
            {
                id: "every_day",
                template: "Every day I [ ... ]",
                category: "Режим дня (Daily Routine)",
                translation: "Каждый день я...",
                prefix: "Every day I ",
                suffix: ".",
                slots: [
                    { id: "every_day_wake_up", word: "wake up early", ru: "Каждый день я просыпаюсь рано.", en: "Every day I wake up early." },
                    { id: "every_day_coffee", word: "drink coffee with milk", ru: "Каждый день я пью кофе с молоком.", en: "Every day I drink coffee with milk." },
                    { id: "every_day_computer", word: "work on my computer", ru: "Каждый день я работаю за компьютером.", en: "Every day I work on my computer." },
                    { id: "every_day_friends", word: "talk to my friends", ru: "Каждый день я общаюсь с друзьями.", en: "Every day I talk to my friends." },
                    { id: "every_day_walk", word: "take a morning walk", ru: "Каждый день я совершаю утреннюю прогулку.", en: "Every day I take a morning walk." },
                    { id: "every_day_food", word: "cook healthy food", ru: "Каждый день я готовлю здоровую еду.", en: "Every day I cook healthy food." },
                    { id: "every_day_words", word: "learn new words", ru: "Каждый день я учу новые слова.", en: "Every day I learn new words." }
                ]
            },
            {
                id: "want_to_buy",
                template: "I want to buy a [ ... ]",
                category: "Покупки (Shopping)",
                translation: "Я хочу купить...",
                prefix: "I want to buy a ",
                suffix: ".",
                slots: [
                    { id: "want_buy_jacket", word: "warm jacket", ru: "Я хочу купить теплую куртку.", en: "I want to buy a warm jacket." },
                    { id: "want_buy_laptop", word: "new laptop", ru: "Я хочу купить новый ноутбук.", en: "I want to buy a new laptop." },
                    { id: "want_buy_cappuccino", word: "cup of cappuccino", ru: "Я хочу купить чашку капучино.", en: "I want to buy a cup of cappuccino." },
                    { id: "want_buy_ticket", word: "ticket to London", ru: "Я хочу купить билет в Лондон.", en: "I want to buy a ticket to London." },
                    { id: "want_buy_gift", word: "beautiful gift", ru: "Я хочу купить красивый подарок.", en: "I want to buy a beautiful gift." },
                    { id: "want_buy_book", word: "book in English", ru: "Я хочу купить книгу на английском.", en: "I want to buy a book in English." },
                    { id: "want_buy_bag", word: "comfortable bag", ru: "Я хочу купить удобную сумку.", en: "I want to buy a comfortable bag." }
                ]
            },
            {
                id: "can_do",
                template: "I can [ ... ]",
                category: "Способности (Can)",
                translation: "Я могу / умею...",
                prefix: "I can ",
                suffix: ".",
                slots: [
                    { id: "can_speak_english", word: "speak English a little", ru: "Я умею немного говорить по-английски.", en: "I can speak English a little." },
                    { id: "can_cook_pasta", word: "cook delicious pasta", ru: "Я умею готовить вкусную пасту.", en: "I can cook delicious pasta." },
                    { id: "can_swim", word: "swim very well", ru: "Я умею очень хорошо плавать.", en: "I can swim very well." },
                    { id: "can_drive", word: "drive a car", ru: "Я умею водить машину.", en: "I can drive a car." },
                    { id: "can_play_guitar", word: "play the guitar", ru: "Я умею играть на гитаре.", en: "I can play the guitar." },
                    { id: "can_help", word: "help you today", ru: "Я могу помочь тебе сегодня.", en: "I can help you today." }
                ]
            },
            {
                id: "she_doesnt_like",
                template: "She doesn't like [ ... ]",
                category: "Отрицания (3-е лицо)",
                translation: "Она не любит...",
                prefix: "She doesn't like ",
                suffix: ".",
                slots: [
                    { id: "she_dislike_weather", word: "cold weather", ru: "Она не любит холодную погоду.", en: "She doesn't like cold weather." },
                    { id: "she_dislike_fastfood", word: "fast food", ru: "Она не любит фастфуд.", en: "She doesn't like fast food." },
                    { id: "she_dislike_black_coffee", word: "black coffee", ru: "Она не любит черный кофе.", en: "She doesn't like black coffee." },
                    { id: "she_dislike_early_wake", word: "waking up early", ru: "Она не любит рано просыпаться.", en: "She doesn't like waking up early." },
                    { id: "she_dislike_rain", word: "rainy days", ru: "Она не любит дождливые дни.", en: "She doesn't like rainy days." },
                    { id: "she_dislike_noisy", word: "noisy places", ru: "Она не любит шумные места.", en: "She doesn't like noisy places." }
                ]
            },
            {
                id: "do_you_have",
                template: "Do you have [ ... ] ?",
                category: "Вопросы (Do you have)",
                translation: "У вас есть...?",
                prefix: "Do you have ",
                suffix: "?",
                slots: [
                    { id: "have_you_pen", word: "a pen", ru: "У вас есть ручка?", en: "Do you have a pen?" },
                    { id: "have_you_free_time", word: "some free time", ru: "У вас есть немного свободного времени?", en: "Do you have some free time?" },
                    { id: "have_you_pet", word: "a pet at home", ru: "У вас есть домашний питомец дома?", en: "Do you have a pet at home?" },
                    { id: "have_you_wifi", word: "free Wi-Fi here", ru: "У вас есть бесплатный Wi-Fi здесь?", en: "Do you have free Wi-Fi here?" },
                    { id: "have_you_questions", word: "any questions", ru: "У вас есть какие-нибудь вопросы?", en: "Do you have any questions?" },
                    { id: "have_you_water", word: "a bottle of water", ru: "У вас есть бутылка воды?", en: "Do you have a bottle of water?" }
                ]
            },
            {
                id: "there_are_many",
                template: "There are many [ ... ]",
                category: "Множественное число (There are)",
                translation: "Здесь много...",
                prefix: "There are many ",
                suffix: ".",
                slots: [
                    { id: "there_are_cafes", word: "good cafes in my city", ru: "В моем городе много хороших кафе.", en: "There are many good cafes in my city." },
                    { id: "there_are_shops", word: "big shops nearby", ru: "Здесь рядом много больших магазинов.", en: "There are many big shops nearby." },
                    { id: "there_are_people", word: "friendly people here", ru: "Здесь много дружелюбных людей.", en: "There are many friendly people here." },
                    { id: "there_are_parks", word: "nice parks in the center", ru: "В центре много красивых парков.", en: "There are many nice parks in the center." },
                    { id: "there_are_books", word: "interesting books at home", ru: "Дома много интересных книг.", en: "There are many interesting books at home." },
                    { id: "there_are_cars", word: "cars on the street", ru: "На улице много машин.", en: "There are many cars on the street." },
                    { id: "there_are_students", word: "students in the room", ru: "В комнате много студентов.", en: "There are many students in the room." }
                ]
            },
            {
                id: "dont_have",
                template: "I don't have [ ... ]",
                category: "Отрицание (I don't have)",
                translation: "У меня нет...",
                prefix: "I don't have ",
                suffix: ".",
                slots: [
                    { id: "dont_have_car", word: "a car", ru: "У меня нет машины.", en: "I don't have a car." },
                    { id: "dont_have_cat", word: "a cat", ru: "У меня нет кошки.", en: "I don't have a cat." },
                    { id: "dont_have_laptop", word: "a laptop with me", ru: "У меня нет с собой ноутбука.", en: "I don't have a laptop with me." },
                    { id: "dont_have_time", word: "much free time today", ru: "У меня сегодня немного свободного времени.", en: "I don't have much free time today." },
                    { id: "dont_have_card", word: "a credit card", ru: "У меня нет кредитной карты.", en: "I don't have a credit card." },
                    { id: "dont_have_cash", word: "any cash", ru: "У меня нет наличных денег.", en: "I don't have any cash." },
                    { id: "dont_have_sibling", word: "a brother or sister", ru: "У меня нет брата или сестры.", en: "I don't have a brother or sister." }
                ]
            },
            {
                id: "would_like_cup",
                template: "I would like a cup of [ ... ], please",
                category: "Вежливые просьбы (Cafe / Dining)",
                translation: "Я бы хотел(а) чашку..., пожалуйста",
                prefix: "I would like a cup of ",
                suffix: ", please.",
                slots: [
                    { id: "like_cup_coffee", word: "hot coffee", ru: "Я бы хотел(а) чашку горячего кофе, пожалуйста.", en: "I would like a cup of hot coffee, please." },
                    { id: "like_cup_black_tea", word: "black tea", ru: "Я бы хотел(а) чашку черного чая, пожалуйста.", en: "I would like a cup of black tea, please." },
                    { id: "like_cup_green_tea", word: "green tea", ru: "Я бы хотел(а) чашку зеленого чая, пожалуйста.", en: "I would like a cup of green tea, please." },
                    { id: "like_cup_chocolate", word: "hot chocolate", ru: "Я бы хотел(а) чашку горячего шоколада, пожалуйста.", en: "I would like a cup of hot chocolate, please." },
                    { id: "like_cup_lemon_water", word: "warm water with lemon", ru: "Я бы хотел(а) чашку теплой воды с лимоном, пожалуйста.", en: "I would like a cup of warm water with lemon, please." },
                    { id: "like_cup_cappuccino", word: "cappuccino", ru: "Я бы хотел(а) чашку капучино, пожалуйста.", en: "I would like a cup of cappuccino, please." },
                    { id: "like_cup_sweet_tea", word: "sweet tea", ru: "Я бы хотел(а) чашку сладкого чая, пожалуйста.", en: "I would like a cup of sweet tea, please." }
                ]
            },
            {
                id: "can_i_have",
                template: "Can I have a [ ... ], please?",
                category: "Заказ и сервис (Can I have)",
                translation: "Можно мне..., пожалуйста?",
                prefix: "Can I have a ",
                suffix: ", please?",
                slots: [
                    { id: "can_have_water", word: "glass of water", ru: "Можно мне стакан воды, пожалуйста?", en: "Can I have a glass of water, please?" },
                    { id: "can_have_menu", word: "menu", ru: "Можно мне меню, пожалуйста?", en: "Can I have a menu, please?" },
                    { id: "can_have_coffee", word: "cup of coffee", ru: "Можно мне чашку кофе, пожалуйста?", en: "Can I have a cup of coffee, please?" },
                    { id: "can_have_sandwich", word: "sandwich", ru: "Можно мне сэндвич, пожалуйста?", en: "Can I have a sandwich, please?" },
                    { id: "can_have_receipt", word: "receipt", ru: "Можно мне чек, пожалуйста?", en: "Can I have a receipt, please?" },
                    { id: "can_have_napkin", word: "napkin", ru: "Можно мне салфетку, пожалуйста?", en: "Can I have a napkin, please?" },
                    { id: "can_have_juice", word: "bottle of juice", ru: "Можно мне бутылку сока, пожалуйста?", en: "Can I have a bottle of juice, please?" }
                ]
            },
            {
                id: "want_to_go",
                template: "I want to go to [ ... ]",
                category: "Направления и планы",
                translation: "Я хочу пойти / поехать в...",
                prefix: "I want to go to ",
                suffix: ".",
                slots: [
                    { id: "go_park", word: "the park", ru: "Я хочу пойти в парк.", en: "I want to go to the park." },
                    { id: "go_cafe", word: "the cafe", ru: "Я хочу пойти в кафе.", en: "I want to go to the cafe." },
                    { id: "go_cinema", word: "the cinema", ru: "Я хочу пойти в кинотеатр.", en: "I want to go to the cinema." },
                    { id: "go_italy", word: "Italy this summer", ru: "Я хочу поехать в Италию этим летом.", en: "I want to go to Italy this summer." },
                    { id: "go_bed", word: "bed early", ru: "Я хочу лечь спать пораньше.", en: "I want to go to bed early." },
                    { id: "go_supermarket", word: "the supermarket", ru: "Я хочу пойти в супермаркет.", en: "I want to go to the supermarket." },
                    { id: "go_beach", word: "the beach", ru: "Я хочу пойти на пляж.", en: "I want to go to the beach." }
                ]
            },
            {
                id: "my_favorite_is",
                template: "My favorite [ ... ] is...",
                category: "Любимые вещи (My favorite)",
                translation: "Мой любимый / Моя любимая...",
                prefix: "My favorite ",
                suffix: ".",
                slots: [
                    { id: "fav_drink", word: "drink is hot tea", ru: "Мой любимый напиток — горячий чай.", en: "My favorite drink is hot tea." },
                    { id: "fav_color", word: "color is blue", ru: "Мой любимый цвет — синий.", en: "My favorite color is blue." },
                    { id: "fav_city", word: "city is London", ru: "Мой любимый город — Лондон.", en: "My favorite city is London." },
                    { id: "fav_season", word: "season is summer", ru: "Мое любимое время года — лето.", en: "My favorite season is summer." },
                    { id: "fav_food", word: "food is Italian pizza", ru: "Моя любимая еда — итальянская пицца.", en: "My favorite food is Italian pizza." },
                    { id: "fav_pet", word: "pet is a small cat", ru: "Мой любимый питомец — маленькая кошка.", en: "My favorite pet is a small cat." },
                    { id: "fav_day", word: "day of the week is Saturday", ru: "Мой любимый день недели — суббота.", en: "My favorite day of the week is Saturday." }
                ]
            },
            {
                id: "think_it_is",
                template: "I think it is very [ ... ]",
                category: "Мнение и оценка (I think)",
                translation: "Я думаю, это очень...",
                prefix: "I think it is very ",
                suffix: ".",
                slots: [
                    { id: "think_beautiful", word: "beautiful", ru: "Я думаю, это очень красиво.", en: "I think it is very beautiful." },
                    { id: "think_interesting", word: "interesting", ru: "Я думаю, это очень интересно.", en: "I think it is very interesting." },
                    { id: "think_important", word: "important", ru: "Я думаю, это очень важно.", en: "I think it is very important." },
                    { id: "think_easy", word: "easy to do", ru: "Я думаю, это очень легко сделать.", en: "I think it is very easy to do." },
                    { id: "think_delicious", word: "delicious", ru: "Я думаю, это очень вкусно.", en: "I think it is very delicious." },
                    { id: "think_useful", word: "useful for me", ru: "Я думаю, это очень полезно для меня.", en: "I think it is very useful for me." },
                    { id: "think_comfortable", word: "comfortable", ru: "Я думаю, это очень удобно.", en: "I think it is very comfortable." }
                ]
            },
            {
                id: "in_the_morning_usually",
                template: "In the morning I usually [ ... ]",
                category: "Утренний распорядок",
                translation: "Утром я обычно...",
                prefix: "In the morning I usually ",
                suffix: ".",
                slots: [
                    { id: "morning_coffee", word: "drink black coffee", ru: "Утром я обычно пью черный кофе.", en: "In the morning I usually drink black coffee." },
                    { id: "morning_eggs", word: "eat two eggs", ru: "Утром я обычно ем два яйца.", en: "In the morning I usually eat two eggs." },
                    { id: "morning_shower", word: "take a warm shower", ru: "Утром я обычно принимаю теплый душ.", en: "In the morning I usually take a warm shower." },
                    { id: "morning_music", word: "listen to calm music", ru: "Утром я обычно слушаю спокойную музыку.", en: "In the morning I usually listen to calm music." },
                    { id: "morning_messages", word: "check my messages", ru: "Утром я обычно проверяю сообщения.", en: "In the morning I usually check my messages." },
                    { id: "morning_news", word: "read the news", ru: "Утром я обычно читаю новости.", en: "In the morning I usually read the news." },
                    { id: "morning_walk", word: "go for a short walk", ru: "Утром я обычно иду на короткую прогулку.", en: "In the morning I usually go for a short walk." }
                ]
            },
            {
                id: "after_work_like",
                template: "After work I like to [ ... ]",
                category: "Вечерний отдых",
                translation: "После работы мне нравится...",
                prefix: "After work I like to ",
                suffix: ".",
                slots: [
                    { id: "evening_relax", word: "relax at home", ru: "После работы мне нравится отдыхать дома.", en: "After work I like to relax at home." },
                    { id: "evening_park", word: "walk in the green park", ru: "После работы мне нравится гулять в зеленом парке.", en: "After work I like to walk in the green park." },
                    { id: "evening_cook", word: "cook dinner with music", ru: "После работы мне нравится готовить ужин под музыку.", en: "After work I like to cook dinner with music." },
                    { id: "evening_movie", word: "watch a good movie", ru: "После работы мне нравится смотреть хороший фильм.", en: "After work I like to watch a good movie." },
                    { id: "evening_family", word: "talk to my family", ru: "После работы мне нравится разговаривать с семьей.", en: "After work I like to talk to my family." },
                    { id: "evening_book", word: "read an interesting book", ru: "После работы мне нравится читать интересную книгу.", en: "After work I like to read an interesting book." }
                ]
            },
            {
                id: "on_weekends_often",
                template: "On weekends we often [ ... ]",
                category: "Выходные дни",
                translation: "По выходным мы часто...",
                prefix: "On weekends we often ",
                suffix: ".",
                slots: [
                    { id: "weekend_friends", word: "meet our good friends", ru: "По выходным мы часто встречаемся с хорошими друзьями.", en: "On weekends we often meet our good friends." },
                    { id: "weekend_cafe", word: "go to a nice cafe", ru: "По выходным мы часто ходим в приятное кафе.", en: "On weekends we often go to a nice cafe." },
                    { id: "weekend_sleep", word: "sleep late in the morning", ru: "По выходным мы часто долго спим утром.", en: "On weekends we often sleep late in the morning." },
                    { id: "weekend_clean", word: "clean the whole house", ru: "По выходным мы часто убираем весь дом.", en: "On weekends we often clean the whole house." },
                    { id: "weekend_movies", word: "watch funny movies together", ru: "По выходным мы часто вместе смотрим смешные фильмы.", en: "On weekends we often watch funny movies together." },
                    { id: "weekend_walk", word: "go for a long walk", ru: "По выходным мы часто отправляемся на долгую прогулку.", en: "On weekends we often go for a long walk." }
                ]
            },
            {
                id: "am_very_now",
                template: "I am very [ ... ] right now",
                category: "Состояния и эмоции (To be)",
                translation: "Сейчас я очень...",
                prefix: "I am very ",
                suffix: " right now.",
                slots: [
                    { id: "am_happy", word: "happy", ru: "Сейчас я очень счастлив(а).", en: "I am very happy right now." },
                    { id: "am_tired", word: "tired", ru: "Сейчас я очень устал(а).", en: "I am very tired right now." },
                    { id: "am_hungry", word: "hungry", ru: "Сейчас я очень голоден(на).", en: "I am very hungry right now." },
                    { id: "am_busy", word: "busy with work", ru: "Сейчас я очень занят(а) работой.", en: "I am very busy with work right now." },
                    { id: "am_calm", word: "calm and relaxed", ru: "Сейчас я очень спокоен(йна) и расслаблен(а).", en: "I am very calm and relaxed right now." },
                    { id: "am_ready", word: "ready to speak English", ru: "Сейчас я полностью готов(а) говорить по-английски.", en: "I am very ready to speak English right now." }
                ]
            },
            {
                id: "it_is_too",
                template: "It is too [ ... ] today",
                category: "Погода и обстановка",
                translation: "Сегодня слишком...",
                prefix: "It is too ",
                suffix: " today.",
                slots: [
                    { id: "too_cold", word: "cold outside", ru: "Сегодня слишком холодно на улице.", en: "It is too cold outside today." },
                    { id: "too_hot", word: "hot in the room", ru: "Сегодня слишком жарко в комнате.", en: "It is too hot in the room today." },
                    { id: "too_noisy", word: "noisy here", ru: "Сегодня здесь слишком шумно.", en: "It is too noisy here today." },
                    { id: "too_late", word: "late to go out", ru: "Сегодня слишком поздно выходить на улицу.", en: "It is too late to go out today." },
                    { id: "too_dark", word: "dark outside", ru: "Сегодня слишком темно на улице.", en: "It is too dark outside today." },
                    { id: "too_expensive", word: "expensive", ru: "Сегодня это слишком дорого.", en: "It is too expensive today." }
                ]
            },
            {
                id: "where_is_nearest",
                template: "Where is the nearest [ ... ] ?",
                category: "Город и навигация",
                translation: "Где находится ближайший(ая)...?",
                prefix: "Where is the nearest ",
                suffix: "?",
                slots: [
                    { id: "nearest_subway", word: "subway station", ru: "Где находится ближайшая станция метро?", en: "Where is the nearest subway station?" },
                    { id: "nearest_pharmacy", word: "pharmacy", ru: "Где находится ближайшая аптека?", en: "Where is the nearest pharmacy?" },
                    { id: "nearest_supermarket", word: "supermarket", ru: "Где находится ближайший супермаркет?", en: "Where is the nearest supermarket?" },
                    { id: "nearest_coffee_shop", word: "coffee shop", ru: "Где находится ближайшая кофейня?", en: "Where is the nearest coffee shop?" },
                    { id: "nearest_bus_stop", word: "bus stop", ru: "Где находится ближайшая автобусная остановка?", en: "Where is the nearest bus stop?" },
                    { id: "nearest_bank", word: "bank with ATM", ru: "Где находится ближайший банк с банкоматом?", en: "Where is the nearest bank with ATM?" }
                ]
            },
            {
                id: "how_much_is",
                template: "How much is this [ ... ] ?",
                category: "Цены и покупки (How much)",
                translation: "Сколько стоит этот(эта)...?",
                prefix: "How much is this ",
                suffix: "?",
                slots: [
                    { id: "cost_coffee", word: "cup of coffee", ru: "Сколько стоит эта чашка кофе?", en: "How much is this cup of coffee?" },
                    { id: "cost_tshirt", word: "white t-shirt", ru: "Сколько стоит эта белая футболка?", en: "How much is this white t-shirt?" },
                    { id: "cost_book", word: "English book", ru: "Сколько стоит эта книга на английском?", en: "How much is this English book?" },
                    { id: "cost_water", word: "bottle of water", ru: "Сколько стоит эта бутылка воды?", en: "How much is this bottle of water?" },
                    { id: "cost_ticket", word: "train ticket", ru: "Сколько стоит этот билет на поезд?", en: "How much is this train ticket?" },
                    { id: "cost_sandwich", word: "tasty sandwich", ru: "Сколько стоит этот вкусный сэндвич?", en: "How much is this tasty sandwich?" }
                ]
            },
            {
                id: "last_weekend_went",
                template: "Last weekend I went to [ ... ]",
                category: "Прошедшее время (Past Simple intro)",
                translation: "В прошлые выходные я ездил(а) / ходил(а) в...",
                prefix: "Last weekend I went to ",
                suffix: ".",
                slots: [
                    { id: "went_park", word: "the central park", ru: "В прошлые выходные я ходил(а) в центральный парк.", en: "Last weekend I went to the central park." },
                    { id: "went_cafe", word: "a lovely cafe", ru: "В прошлые выходные я ходил(а) в уютное кафе.", en: "Last weekend I went to a lovely cafe." },
                    { id: "went_cinema", word: "the cinema with my friends", ru: "В прошлые выходные я ходил(а) в кинотеатр с друзьями.", en: "Last weekend I went to the cinema with my friends." },
                    { id: "went_supermarket", word: "the big supermarket", ru: "В прошлые выходные я ездил(а) в большой супермаркет.", en: "Last weekend I went to the big supermarket." },
                    { id: "went_city", word: "another beautiful city", ru: "В прошлые выходные я ездил(а) в другой красивый город.", en: "Last weekend I went to another beautiful city." },
                    { id: "went_beach", word: "the sandy beach", ru: "В прошлые выходные я ездил(а) на песчаный пляж.", en: "Last weekend I went to the sandy beach." }
                ]
            },
            {
                id: "i_am_learning",
                template: "I am learning [ ... ]",
                category: "Процесс и обучение (Present Continuous)",
                translation: "Я учусь / изучаю...",
                prefix: "I am learning ",
                suffix: ".",
                slots: [
                    { id: "learn_english", word: "English every day", ru: "Я учу английский каждый день.", en: "I am learning English every day." },
                    { id: "learn_words", word: "new English words", ru: "Я учу новые английские слова.", en: "I am learning new English words." },
                    { id: "learn_drive", word: "how to drive a car", ru: "Я учусь как водить машину.", en: "I am learning how to drive a car." },
                    { id: "learn_pasta", word: "how to cook pasta", ru: "Я учусь готовить пасту.", en: "I am learning how to cook pasta." },
                    { id: "learn_fluently", word: "to speak fluently", ru: "Я учусь говорить свободно.", en: "I am learning to speak fluently." },
                    { id: "learn_piano", word: "to play the piano", ru: "Я учусь играть на пианино.", en: "I am learning to play the piano." }
                ]
            }
        ];

        // Flatten all items for quick indexing
        this.allItems = [];
        this.patterns.forEach(p => {
            p.slots.forEach(s => {
                this.allItems.push({
                    id: s.id,
                    patternId: p.id,
                    patternTemplate: p.template,
                    patternTranslation: p.translation,
                    patternCategory: p.category,
                    word: s.word,
                    ru: s.ru,
                    en: s.en
                });
            });
        });

        this.TOTAL_ITEMS = this.allItems.length;
        this.TOTAL_MAX_POINTS = this.TOTAL_ITEMS * this.MAX_REPS_PER_ITEM;
    }

    loadState() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            this.masteryMap = raw ? JSON.parse(raw) : {};
        } catch (e) {
            this.masteryMap = {};
        }
    }

    saveState() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.masteryMap));
        } catch (e) {}
    }

    getReps(itemId) {
        return Math.min(this.MAX_REPS_PER_ITEM, Math.max(0, parseInt(this.masteryMap[itemId] || 0, 10)));
    }

    isMastered(itemId) {
        return this.getReps(itemId) >= this.MAX_REPS_PER_ITEM;
    }

    getStats() {
        let masteredCount = 0;
        let totalPoints = 0;

        this.allItems.forEach(item => {
            const reps = this.getReps(item.id);
            totalPoints += reps;
            if (reps >= this.MAX_REPS_PER_ITEM) {
                masteredCount++;
            }
        });

        const percent = this.TOTAL_ITEMS > 0 ? ((masteredCount / this.TOTAL_ITEMS) * 100).toFixed(1) : 0;
        const level = Math.min(this.MAX_LEVEL, Math.max(1, Math.floor(1 + (masteredCount / this.TOTAL_ITEMS) * 99)));

        return {
            masteredCount,
            totalItems: this.TOTAL_ITEMS,
            totalPoints,
            maxPoints: this.TOTAL_MAX_POINTS,
            percent: parseFloat(percent),
            level,
            isAllMastered: masteredCount >= this.TOTAL_ITEMS
        };
    }

    getRandomItem(excludeId = null) {
        // Pick only from unmastered items (reps < 5)
        let unmastered = this.allItems.filter(i => !this.isMastered(i.id));

        if (unmastered.length === 0) {
            // All items mastered! Return any random item for ongoing review
            unmastered = this.allItems;
        }

        let pool = (excludeId && unmastered.length > 1)
            ? unmastered.filter(i => i.id !== excludeId)
            : unmastered;

        const picked = pool[Math.floor(Math.random() * pool.length)];
        this.activeItem = picked;
        return picked;
    }

    recordSuccess(itemId) {
        if (!itemId) return { reps: 0, wasMastered: false, nowMastered: false };
        const currentReps = this.getReps(itemId);
        const wasMastered = currentReps >= this.MAX_REPS_PER_ITEM;
        const newReps = Math.min(this.MAX_REPS_PER_ITEM, currentReps + 1);

        this.masteryMap[itemId] = newReps;
        this.saveState();

        const nowMastered = newReps >= this.MAX_REPS_PER_ITEM;
        this.currentCombo++;
        if (this.currentCombo > this.maxCombo) {
            this.maxCombo = this.currentCombo;
        }

        if (typeof window !== 'undefined' && window.syncPlayerStateToServer) {
            window.syncPlayerStateToServer();
        }

        return {
            reps: newReps,
            wasMastered,
            nowMastered,
            combo: this.currentCombo,
            stats: this.getStats()
        };
    }

    recordFailure(itemId) {
        this.currentCombo = 0;
        return {
            reps: this.getReps(itemId),
            combo: 0,
            stats: this.getStats()
        };
    }

    resetAllProgress() {
        this.masteryMap = {};
        this.saveState();
        this.currentCombo = 0;
        return this.getStats();
    }

    /**
     * Smart phonetic & contraction normalization
     * Expands contractions and removes all punctuation
     */
    normalizeSpeech(text) {
        if (!text) return "";
        let clean = text.toLowerCase().trim();

        // Expand common contractions and speech variations
        clean = clean
            .replace(/\bcan\'t\b/g, "cannot")
            .replace(/\bcan not\b/g, "cannot")
            .replace(/\bwon\'t\b/g, "will not")
            .replace(/\bdon\'t\b/g, "do not")
            .replace(/\bdoesn\'t\b/g, "does not")
            .replace(/\bdidn\'t\b/g, "did not")
            .replace(/\bi\'m\b/g, "i am")
            .replace(/\byou\'re\b/g, "you are")
            .replace(/\bwe\'re\b/g, "we are")
            .replace(/\bthey\'re\b/g, "they are")
            .replace(/\bhe\'s\b/g, "he is")
            .replace(/\bshe\'s\b/g, "she is")
            .replace(/\bit\'s\b/g, "it is")
            .replace(/\bthere\'s\b/g, "there is")
            .replace(/\bthat\'s\b/g, "that is")
            .replace(/\bi\'ve\b/g, "i have")
            .replace(/\bi\'d\b/g, "i would")
            .replace(/\blet\'s\b/g, "let us")
            .replace(/\bwanna\b/g, "want to")
            .replace(/\bgonna\b/g, "going to")
            .replace(/\beveryday\b/g, "every day")
            .replace(/\bwi[\s-]?fi\b/g, "wifi");

        // Remove all punctuation and excess whitespace
        clean = clean.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
        return clean;
    }

    /**
     * Validate user spoken text against target phrase
     * Returns { isCorrect: boolean, similarity: number, cleanSpoken: string, cleanTarget: string }
     */
    validateSpeech(spokenText, targetText) {
        const cleanSpoken = this.normalizeSpeech(spokenText);
        const cleanTarget = this.normalizeSpeech(targetText);

        if (!cleanSpoken || !cleanTarget) {
            return { isCorrect: false, similarity: 0, cleanSpoken, cleanTarget };
        }

        // Direct exact match
        if (cleanSpoken === cleanTarget) {
            return { isCorrect: true, similarity: 1.0, cleanSpoken, cleanTarget };
        }

        // Word overlap & Levenshtein similarity
        const spokenWords = cleanSpoken.split(" ");
        const targetWords = cleanTarget.split(" ");

        let matchCount = 0;
        targetWords.forEach(w => {
            if (spokenWords.includes(w)) matchCount++;
        });

        const wordRatio = matchCount / Math.max(targetWords.length, spokenWords.length);
        const levSim = this.calculateLevenshteinSimilarity(cleanSpoken, cleanTarget);
        const combinedScore = Math.max(wordRatio, levSim);

        // Tolerant threshold: >= 80% similarity or all key words present
        const isCorrect = combinedScore >= 0.80 || (matchCount === targetWords.length && Math.abs(spokenWords.length - targetWords.length) <= 1);

        return {
            isCorrect,
            similarity: Math.round(combinedScore * 100),
            cleanSpoken,
            cleanTarget
        };
    }

    calculateLevenshteinSimilarity(s1, s2) {
        const longer = s1.length >= s2.length ? s1 : s2;
        const shorter = s1.length < s2.length ? s1 : s2;
        const longerLength = longer.length;
        if (longerLength === 0) return 1.0;

        const costs = [];
        for (let i = 0; i <= longer.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= shorter.length; j++) {
                if (i === 0) {
                    costs[j] = j;
                } else {
                    if (j > 0) {
                        let newValue = costs[j - 1];
                        if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
                            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                        }
                        costs[j - 1] = lastValue;
                        lastValue = newValue;
                    }
                }
            }
            if (i > 0) costs[shorter.length] = lastValue;
        }
        return (longerLength - costs[shorter.length]) / parseFloat(longerLength);
    }
}

if (typeof window !== 'undefined') {
    window.speechDrillsEngine = new SpeechDrillsEngine();
}
