/**
 * THE SPIRE CHRONICLES (A0 -> A1 GRADED SERIAL • 25,000 WORDS TOTAL)
 * 50 Full Episodes • ~500 words each • 75% Live Dialogues & Action Quests
 * Strictly CEFR A1 vocabulary & core verbs (be, have, look, find, want, go, take, see, give, say, ask, need, help).
 * Cast:
 *  - Narrator: en-US-Neural2-D (Calm, crisp storytelling)
 *  - Eldrin: en-US-Neural2-A (Young apprentice, lively & expressive)
 *  - Leo: en-US-Neural2-I (Friendly, calm roommate)
 *  - Master Corvinus: en-US-Neural2-J (Elder archivist, deep & wise)
 *  - Kira: en-US-Neural2-F (Energetic archer girl)
 */

const ELDRIN_AUDIOBOOK = {
    "title": "The Spire Chronicles: Eldrin's Quests",
    "titleRu": "Хроники Шпиля: Будни Элдрина",
    "description": "A 50-episode graded serial (25,000 words total) bridging A0 to A1. Pure conversational dialogues, practical micro-quests, and lively character voice acting.",
    "descriptionRu": "Сериал из 50 серий (суммарно 25 000 слов) для перехода с A0 на A1. Живые диалоги, бытовые квесты и эмоциональная озвучка персонажей.",
    "totalChapters": 50,
    "totalTargetWords": 25000,
    "acts": [
        {
            "number": 1,
            "titleEn": "Act I: Apprentice Routine & Library Quests",
            "titleRu": "Акт I: Будни в Академии и Библиотеке",
            "chaptersRange": [1, 10]
        },
        {
            "number": 2,
            "titleEn": "Act II: The Market & Town Below",
            "titleRu": "Акт II: Город и Торговые Ряды",
            "chaptersRange": [11, 20]
        },
        {
            "number": 3,
            "titleEn": "Act III: School Quests & Teamwork",
            "titleRu": "Акт III: Испытания и Командная Работа",
            "chaptersRange": [21, 30]
        },
        {
            "number": 4,
            "titleEn": "Act IV: Secrets of the Old Halls",
            "titleRu": "Акт IV: Тайны Старых Залов",
            "chaptersRange": [31, 40]
        },
        {
            "number": 5,
            "titleEn": "Act V: The Festival & Journey Ahead",
            "titleRu": "Акт V: Большой Праздник и Новые Горизонты",
            "chaptersRange": [41, 50]
        }
    ],
    "chapters": [
        // =========================================================================
        // EPISODE 1: A BUSY MORNING IN THE LIBRARY (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-1",
            "number": 1,
            "act": 1,
            "titleEn": "Episode 1: A Busy Morning in the Library",
            "titleRu": "Эпизод 1: Трудное утро в библиотеке",
            "grammarFocus": "Present Simple, Verb 'to be', Prepositions (on, under, near, behind, between), Can / Cannot, Questions",
            "wordCount": 475,
            "coverIcon": "fa-sun",
            "coverColor": "#f59e0b",
            "sentences": [
                // Scene 1: Waking Up & Finding the Bag
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is seven o'clock in the morning. <break time=\"300ms\"/> Eldrin opens his eyes. He is very sleepy.</prosody></speak>",
                    "en": "It is seven o'clock in the morning. Eldrin opens his eyes. He is very sleepy.",
                    "ru": "Семь часов утра. Элдрин открывает глаза. Он очень сонный."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2.5st\"><emphasis level=\"strong\">Oh no!</emphasis> <break time=\"200ms\"/> Is it seven o'clock already? <emphasis level=\"strong\">I am late!</emphasis></prosody></speak>",
                    "en": "— Oh no! Is it seven o'clock already? I am late!",
                    "ru": "— О нет! Неужели уже семь часов? Я опаздываю!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He jumps out of bed. <break time=\"200ms\"/> He puts on his boots. He washes his face with cold water. Now he needs his bag and his green notebook.</prosody></speak>",
                    "en": "He jumps out of bed. He puts on his boots. He washes his face with cold water. Now he needs his bag and his green notebook.",
                    "ru": "Он вскакивает с кровати. Надевает сапоги. Умывает лицо холодной водой. Теперь ему нужна его сумка и зеленый блокнот."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Where is my bag? <break time=\"250ms\"/> It is not on the table. It is not on the chair.</prosody></speak>",
                    "en": "— Where is my bag? It is not on the table. It is not on the chair.",
                    "ru": "— Где моя сумка? Ее нет на столе. Ее нет на стуле."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">His roommate, Leo, <break time=\"150ms\"/> walks into the room with two cups of hot tea.</prosody></speak>",
                    "en": "His roommate, Leo, walks into the room with two cups of hot tea.",
                    "ru": "Его сосед по комнате, Лео, входит в комнату с двумя чашками горячего чая."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Good morning, Eldrin. <break time=\"200ms\"/> Are you okay? You look very busy.</prosody></speak>",
                    "en": "— Good morning, Eldrin. Are you okay? You look very busy.",
                    "ru": "— Доброе утро, Элдрин. Ты в порядке? Ты выглядишь очень занятым."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Good morning, Leo! No, I am not okay. <break time=\"200ms\"/> I cannot find my bag. Where is it?</prosody></speak>",
                    "en": "— Good morning, Leo! No, I am not okay. I cannot find my bag. Where is it?",
                    "ru": "— Доброе утро, Лео! Нет, я не в порядке. Я не могу найти свою сумку. Где она?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">I do not know. <break time=\"200ms\"/> Is it under your bed?</prosody></speak>",
                    "en": "— I do not know. Is it under your bed?",
                    "ru": "— Я не знаю. Она под твоей кроватью?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Let me check... <break time=\"300ms\"/> No, it is not under the bed. There is only an old shoe here.</prosody></speak>",
                    "en": "— Let me check... No, it is not under the bed. There is only an old shoe here.",
                    "ru": "— Дай проверю... Нет, ее нет под кроватью. Тут только старый ботинок."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Look near the door. <break time=\"200ms\"/> Behind the wooden door.</prosody></speak>",
                    "en": "— Look near the door. Behind the wooden door.",
                    "ru": "— Посмотри возле двери. За деревянной дверью."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin runs to the door.</prosody></speak>",
                    "en": "Eldrin runs to the door.",
                    "ru": "Элдрин бежит к двери."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">Ah, yes! <emphasis level=\"strong\">Here it is!</emphasis> <break time=\"200ms\"/> Thank you, Leo. You are a good friend.</prosody></speak>",
                    "en": "— Ah, yes! Here it is! Thank you, Leo. You are a good friend.",
                    "ru": "— А, да! Вот она! Спасибо, Лео. Ты отличный друг."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Do you want some tea? <break time=\"200ms\"/> It is very hot and sweet.</prosody></speak>",
                    "en": "— Do you want some tea? It is very hot and sweet.",
                    "ru": "— Хочешь чаю? Он очень горячий и сладкий."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">I want tea, <break time=\"150ms\"/> but I have no time! Professor Corvinus starts the lesson at seven fifteen.</prosody></speak>",
                    "en": "— I want tea, but I have no time! Professor Corvinus starts the lesson at seven fifteen.",
                    "ru": "— Я хочу чаю, но у меня нет времени! Профессор Корвинус начинает урок в семь пятнадцать."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Take an apple, then. <break time=\"200ms\"/> You need to eat something.</prosody></speak>",
                    "en": "— Take an apple, then. You need to eat something.",
                    "ru": "— Возьми тогда яблоко. Тебе нужно что-то поесть."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2.5st\">Thank you! See you after the lesson!</prosody></speak>",
                    "en": "— Thank you! See you after the lesson!",
                    "ru": "— Спасибо! Увидимся после урока!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin takes the red apple, opens the door, <break time=\"200ms\"/> and runs down the stone corridor.</prosody></speak>",
                    "en": "Eldrin takes the red apple, opens the door, and runs down the stone corridor.",
                    "ru": "Элдрин берет красное яблоко, открывает дверь и бежит по каменному коридору."
                },

                // Scene 2: The Tall Bookshelf in the Library
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin enters the Great Library. <break time=\"250ms\"/> The room is enormous and very quiet. Professor Corvinus sits at his large desk.</prosody></speak>",
                    "en": "Eldrin enters the Great Library. The room is enormous and very quiet. Professor Corvinus sits at his large desk.",
                    "ru": "Элдрин входит в Великую Библиотеку. Зал огромный и очень тихий. Профессор Корвинус сидит за своим большим столом."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Good morning, Eldrin. <break time=\"300ms\"/> You are on time. That is good.</prosody></speak>",
                    "en": "— Good morning, Eldrin. You are on time. That is good.",
                    "ru": "— Доброе утро, Элдрин. Ты вовремя. Это хорошо."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Good morning, Professor Corvinus! What is my task today?</prosody></speak>",
                    "en": "— Good morning, Professor Corvinus! What is my task today?",
                    "ru": "— Доброе утро, профессор Корвинус! Какая у меня сегодня задача?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">I need an old blue book. <break time=\"250ms\"/> It is on the top shelf, <break time=\"150ms\"/> on the left wall.</prosody></speak>",
                    "en": "— I need an old blue book. It is on the top shelf, on the left wall.",
                    "ru": "— Мне нужна старая синяя книга. Она на верхней полке, на левой стене."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin walks to the tall wooden bookshelf. <break time=\"200ms\"/> He looks up. The shelf is very high.</prosody></speak>",
                    "en": "Eldrin walks to the tall wooden bookshelf. He looks up. The shelf is very high.",
                    "ru": "Элдрин идет к высокому деревянному книжному шкафу. Он смотрит вверх. Полка очень высоко."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">I am too short! <break time=\"200ms\"/> I cannot reach the top shelf with my hands.</prosody></speak>",
                    "en": "— I am too short! I cannot reach the top shelf with my hands.",
                    "ru": "— Я слишком низкий! Я не достаю до верхней полки руками."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He sees a wooden ladder in the corner. <break time=\"200ms\"/> He takes the heavy ladder and puts it near the shelf.</prosody></speak>",
                    "en": "He sees a wooden ladder in the corner. He takes the heavy ladder and puts it near the shelf.",
                    "ru": "Он видит деревянную лестницу в углу. Он берет тяжелую лестницу и ставит ее возле полки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira, the young archer girl, <break time=\"150ms\"/> walks into the library with a scroll in her hands.</prosody></speak>",
                    "en": "Kira, the young archer girl, walks into the library with a scroll in her hands.",
                    "ru": "Кира, юная лучница, заходит в библиотеку со свитком в руках."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Hey, Eldrin! <break time=\"200ms\"/> Be careful! That old ladder is shaky.</prosody></speak>",
                    "en": "— Hey, Eldrin! Be careful! That old ladder is shaky.",
                    "ru": "— Эй, Элдрин! Будь осторожен! Эта старая лестница шатается."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Kira, can you help me? <break time=\"200ms\"/> Please hold the ladder with your hands.</prosody></speak>",
                    "en": "— Kira, can you help me? Please hold the ladder with your hands.",
                    "ru": "— Кира, можешь мне помочь? Пожалуйста, подержи лестницу руками."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Sure, no problem! <break time=\"200ms\"/> I am holding it. Climb up slowly.</prosody></speak>",
                    "en": "— Sure, no problem! I am holding it. Climb up slowly.",
                    "ru": "— Конечно, без проблем! Я держу ее. Залезай медленно."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin climbs up the ladder. Step one, step two, step three. He reaches the top shelf.</prosody></speak>",
                    "en": "Eldrin climbs up the ladder. Step one, step two, step three. He reaches the top shelf.",
                    "ru": "Элдрин поднимается по лестнице. Шаг один, шаг два, шаг три. Он дотягивается до верхней полки."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">I see it! <break time=\"200ms\"/> The blue book is between two big black books.</prosody></speak>",
                    "en": "— I see it! The blue book is between two big black books.",
                    "ru": "— Я вижу ее! Синяя книга находится между двумя большими черными книгами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He takes the blue book and climbs down carefully.</prosody></speak>",
                    "en": "He takes the blue book and climbs down carefully.",
                    "ru": "Он берет синюю книгу и осторожно спускается вниз."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Here is your book, Professor Corvinus.</prosody></speak>",
                    "en": "— Here is your book, Professor Corvinus.",
                    "ru": "— Вот ваша книга, профессор Корвинус."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Thank you, Eldrin. <break time=\"250ms\"/> And thank you, Kira. Good teamwork.</prosody></speak>",
                    "en": "— Thank you, Eldrin. And thank you, Kira. Good teamwork.",
                    "ru": "— Спасибо, Элдрин. И спасибо, Кира. Хорошая командная работа."
                }
            ],
            "quiz": [
                {
                    "question": "Where does Eldrin find his bag?",
                    "options": ["On the table", "Under the bed", "Near the wooden door", "In the Great Library"],
                    "correctIdx": 2
                },
                {
                    "question": "What does Leo give to Eldrin for breakfast?",
                    "options": ["A hot cup of coffee", "A red apple", "Two slices of cheese", "Warm soup"],
                    "correctIdx": 1
                },
                {
                    "question": "Why does Eldrin need Kira's help in the library?",
                    "options": ["To read the blue book", "To hold the shaky ladder", "To clean the large desk", "To find the library key"],
                    "correctIdx": 1
                }
            ]
        },

        // =========================================================================
        // EPISODE 2: THE SPILLED INK & THE CLEAN DESK (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-2",
            "number": 2,
            "act": 1,
            "titleEn": "Episode 2: The Spilled Ink & The Clean Desk",
            "titleRu": "Эпизод 2: Пролитые чернила и чистый стол",
            "grammarFocus": "Past Simple & Present Simple, Action Verbs (spill, rush, bring, clean, wipe), Prepositions of Place",
            "wordCount": 480,
            "coverIcon": "fa-feather",
            "coverColor": "#3b82f6",
            "sentences": [
                // Scene 1: The Accident
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is afternoon in the library. <break time=\"250ms\"/> Professor Corvinus walks out of the room to meet another teacher.</prosody></speak>",
                    "en": "It is afternoon in the library. Professor Corvinus walks out of the room to meet another teacher.",
                    "ru": "В библиотеке день. Профессор Корвинус выходит из комнаты, чтобы встретиться с другим учителем."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin sits at the wooden table. <break time=\"200ms\"/> He copies an old text with black ink. Suddenly, his elbow hits the glass bottle of ink!</prosody></speak>",
                    "en": "Eldrin sits at the wooden table. He copies an old text with black ink. Suddenly, his elbow hits the glass bottle of ink!",
                    "ru": "Элдрин сидит за деревянным столом. Он переписывает старый текст черными чернилами. Внезапно его локоть задевает стеклянную бутылочку с чернилами!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\"><emphasis level=\"strong\">Oh no!</emphasis> <break time=\"200ms\"/> The ink is spilling all over the table!</prosody></speak>",
                    "en": "— Oh no! The ink is spilling all over the table!",
                    "ru": "— О нет! Чернила растекаются по всему столу!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Dark black ink runs across the smooth wood. <break time=\"200ms\"/> It touches a clean white sheet of paper.</prosody></speak>",
                    "en": "Dark black ink runs across the smooth wood. It touches a clean white sheet of paper.",
                    "ru": "Темные черные чернила текут по гладкому дереву. Они касаются чистого белого листа бумаги."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">I must clean this immediately! <break time=\"200ms\"/> Where is a dry cloth?</prosody></speak>",
                    "en": "— I must clean this immediately! Where is a dry cloth?",
                    "ru": "— Я должен убрать это немедленно! Где сухая тряпка?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He looks around the room. There are no cloths on the shelves. <break time=\"200ms\"/> He runs to the storage cupboard in the hallway.</prosody></speak>",
                    "en": "He looks around the room. There are no cloths on the shelves. He runs to the storage cupboard in the hallway.",
                    "ru": "Он оглядывает комнату. На полках нет тряпок. Он бежит к шкафу в коридоре."
                },
                // Scene 2: Teamwork with Kira
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the hallway, <break time=\"150ms\"/> he meets Kira. She carries a bucket of clean water.</prosody></speak>",
                    "en": "In the hallway, he meets Kira. She carries a bucket of clean water.",
                    "ru": "В коридоре он встречает Киру. Она несет ведро чистой воды."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Eldrin, why are you running? <break time=\"200ms\"/> Your hands are completely black with ink!</prosody></speak>",
                    "en": "— Eldrin, why are you running? Your hands are completely black with ink!",
                    "ru": "— Элдрин, почему ты бежишь? Твои руки совсем черные от чернил!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">I spilled the whole bottle of ink on the master's desk! <break time=\"200ms\"/> Can you help me?</prosody></speak>",
                    "en": "— I spilled the whole bottle of ink on the master's desk! Can you help me?",
                    "ru": "— Я пролил целую бутылочку чернил на стол мастера! Можешь мне помочь?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Do not worry. <break time=\"200ms\"/> Take these two soft cloths. I have warm water and soap.</prosody></speak>",
                    "en": "— Do not worry. Take these two soft cloths. I have warm water and soap.",
                    "ru": "— Не волнуйся. Возьми эти две мягкие тряпки. У меня есть теплая вода и мыло."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They hurry back into the library. <break time=\"200ms\"/> Kira puts the bucket on the floor. Eldrin wipes the dark ink with the wet cloth.</prosody></speak>",
                    "en": "They hurry back into the library. Kira puts the bucket on the floor. Eldrin wipes the dark ink with the wet cloth.",
                    "ru": "Они спешат обратно в библиотеку. Кира ставит ведро на пол. Элдрин вытирает темные чернила влажной тряпкой."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">The ink comes off! <break time=\"200ms\"/> Look, the wood is clean again.</prosody></speak>",
                    "en": "— The ink comes off! Look, the wood is clean again.",
                    "ru": "— Чернила оттираются! Смотри, дерево снова чистое."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Now use the dry towel. <break time=\"200ms\"/> Wipe the corners carefully.</prosody></speak>",
                    "en": "— Now use the dry towel. Wipe the corners carefully.",
                    "ru": "— Теперь используй сухое полотенце. Тщательно протри углы."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The wooden desk is clean and shiny. <break time=\"250ms\"/> The heavy door opens, and Professor Corvinus walks in.</prosody></speak>",
                    "en": "The wooden desk is clean and shiny. The heavy door opens, and Professor Corvinus walks in.",
                    "ru": "Деревянный стол чистый и блестящий. Тяжелая дверь открывается, и входит профессор Корвинус."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">What is this nice smell of lavender soap in my library?</prosody></speak>",
                    "en": "— What is this nice smell of lavender soap in my library?",
                    "ru": "— Что это за приятный запах лавандового мыла в моей библиотеке?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"+2st\">I am sorry, Professor. <break time=\"200ms\"/> I spilled the ink, but Kira and I washed the whole desk.</prosody></speak>",
                    "en": "— I am sorry, Professor. I spilled the ink, but Kira and I washed the whole desk.",
                    "ru": "— Простите, профессор. Я пролил чернила, но мы с Кирой вымыли весь стол."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Accidents happen, young man. <break time=\"250ms\"/> You fixed your mistake quickly and honestly. Here is a new ink bottle for you.</prosody></speak>",
                    "en": "— Accidents happen, young man. You fixed your mistake quickly and honestly. Here is a new ink bottle for you.",
                    "ru": "— Неприятности случаются, молодой человек. Ты исправил ошибку быстро и честно. Вот новая бутылочка чернил для тебя."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2.5st\">Thank you, Professor! <break time=\"200ms\"/> I will be very careful next time.</prosody></speak>",
                    "en": "— Thank you, Professor! I will be very careful next time.",
                    "ru": "— Спасибо, профессор! В следующий раз я буду очень осторожен."
                }
            ],
            "quiz": [
                {
                    "question": "What does Eldrin accidentally spill on the desk?",
                    "options": ["A cup of hot tea", "A bottle of black ink", "A bowl of water", "A pot of soup"],
                    "correctIdx": 1
                },
                {
                    "question": "Who helps Eldrin with water and soap?",
                    "options": ["Leo", "Professor Corvinus", "Kira", "The kitchen worker"],
                    "correctIdx": 2
                },
                {
                    "question": "What does Professor Corvinus give to Eldrin?",
                    "options": ["A new ink bottle", "A magic wand", "A red apple", "An old blue book"],
                    "correctIdx": 0
                }
            ]
        },

        // =========================================================================
        // EPISODE 3: BREAKFAST IN THE GREAT HALL (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-3",
            "number": 3,
            "act": 1,
            "titleEn": "Episode 3: Breakfast in the Great Hall",
            "titleRu": "Эпизод 3: Завтрак в Большом Зале",
            "grammarFocus": "Food Vocabulary, Questions (Do you like / Would you like), Countable & Uncountable (some bread, an apple)",
            "wordCount": 485,
            "coverIcon": "fa-utensils",
            "coverColor": "#10b981",
            "sentences": [
                // Scene 1: Entering the Dining Hall
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At eight o'clock, the great bronze bell rings. <break time=\"250ms\"/> It is breakfast time. Eldrin and Leo walk into the Great Dining Hall.</prosody></speak>",
                    "en": "At eight o'clock, the great bronze bell rings. It is breakfast time. Eldrin and Leo walk into the Great Dining Hall.",
                    "ru": "В восемь часов звенит большой бронзовый колокол. Время завтрака. Элдрин и Лео входят в Большую Столовую."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The hall is full of noise and warm light. <break time=\"200ms\"/> Dozens of young students sit at long wooden tables.</prosody></speak>",
                    "en": "The hall is full of noise and warm light. Dozens of young students sit at long wooden tables.",
                    "ru": "Зал полон шума и теплого света. Десятки юных учеников сидят за длинными деревянными столами."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">I am so hungry today! <break time=\"200ms\"/> Look at the kitchen counter. What do they have?</prosody></speak>",
                    "en": "— I am so hungry today! Look at the kitchen counter. What do they have?",
                    "ru": "— Я такой голодный сегодня! Посмотри на кухонную стойку. Что там есть?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">There is warm porridge, <break time=\"150ms\"/> fresh white bread, yellow cheese, and big red apples.</prosody></speak>",
                    "en": "— There is warm porridge, fresh white bread, yellow cheese, and big red apples.",
                    "ru": "— Там есть теплая каша, свежий белый хлеб, желтый сыр и большие красные яблоки."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">I want porridge with sweet honey. <break time=\"200ms\"/> What do you want, Eldrin?</prosody></speak>",
                    "en": "— I want porridge with sweet honey. What do you want, Eldrin?",
                    "ru": "— Я хочу кашу со сладким медом. А что хочешь ты, Элдрин?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">I want two slices of bread with cheese, <break time=\"150ms\"/> and a cup of warm herbal tea.</prosody></speak>",
                    "en": "— I want two slices of bread with cheese, and a cup of warm herbal tea.",
                    "ru": "— Я хочу два ломтика хлеба с сыром и чашку теплого травяного чая."
                },
                // Scene 2: The Dropped Tray & New Friend
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They take their wooden trays and walk to an empty bench. <break time=\"250ms\"/> Suddenly, a small boy in a blue tunic trips over a chair!</prosody></speak>",
                    "en": "They take their wooden trays and walk to an empty bench. Suddenly, a small boy in a blue tunic trips over a chair!",
                    "ru": "Они берут свои деревянные подносы и идут к свободной скамейке. Внезапно маленький мальчик в синей тунике спотыкается о стул!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\"><emphasis level=\"strong\">Crash!</emphasis> <break time=\"250ms\"/> His tray falls to the stone floor. Six green apples roll across the room.</prosody></speak>",
                    "en": "Crash! His tray falls to the stone floor. Six green apples roll across the room.",
                    "ru": "Бабах! Его поднос падает на каменный пол. Шесть зеленых яблок катятся по комнате."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Let us help him! <break time=\"200ms\"/> Quick, catch the apples before people step on them!</prosody></speak>",
                    "en": "— Let us help him! Quick, catch the apples before people step on them!",
                    "ru": "— Давай поможем ему! Быстро, лови яблоки, пока на них не наступили!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin catches three apples under a bench. <break time=\"200ms\"/> Leo picks up the wooden tray. Kira runs over with two more apples.</prosody></speak>",
                    "en": "Eldrin catches three apples under a bench. Leo picks up the wooden tray. Kira runs over with two more apples.",
                    "ru": "Элдрин ловит три яблока под скамейкой. Лео поднимает деревянный поднос. Кира подбегает с еще двумя яблоками."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Here is the last apple! <break time=\"200ms\"/> Are you hurt, little guy?</prosody></speak>",
                    "en": "— Here is the last apple! Are you hurt, little guy?",
                    "ru": "— Вот последнее яблоко! Ты не ушибся, малыш?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The small boy rubs his knee and smiles shyly. <break time=\"200ms\"/> His name is Toby.</prosody></speak>",
                    "en": "The small boy rubs his knee and smiles shyly. His name is Toby.",
                    "ru": "Маленький мальчик потирает коленку и застенчиво улыбается. Его зовут Тоби."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Sit with us, Toby. <break time=\"200ms\"/> We have plenty of bread and cheese.</prosody></speak>",
                    "en": "— Sit with us, Toby. We have plenty of bread and cheese.",
                    "ru": "— Садись с нами, Тоби. У нас много хлеба и сыра."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">Yes, join our table! <break time=\"200ms\"/> Breakfast is always better with good friends.</prosody></speak>",
                    "en": "— Yes, join our table! Breakfast is always better with good friends.",
                    "ru": "— Да, присоединяйся к нашему столу! Завтрак всегда вкуснее с хорошими друзьями."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Toby sits down happily. <break time=\"200ms\"/> The four friends eat their warm breakfast together and laugh.</prosody></speak>",
                    "en": "Toby sits down happily. The four friends eat their warm breakfast together and laugh.",
                    "ru": "Тоби радостно садится. Четверо друзей вместе едят теплый завтрак и смеются."
                }
            ],
            "quiz": [
                {
                    "question": "What does Leo want for breakfast?",
                    "options": ["Porridge with sweet honey", "Cold milk and meat", "Only tea and an apple", "Bread with cheese"],
                    "correctIdx": 0
                },
                {
                    "question": "What falls to the floor when Toby trips?",
                    "options": ["A glass of milk", "A tray with six green apples", "A heavy book", "A teapot"],
                    "correctIdx": 1
                },
                {
                    "question": "Where does Toby sit after the accident?",
                    "options": ["He goes back to his room", "He sits with Eldrin, Leo, and Kira", "He sits alone near the window", "He stands in the kitchen"],
                    "correctIdx": 1
                }
            ]
        },

        // =========================================================================
        // EPISODE 4: THE LOST LIBRARY KEY (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-4",
            "number": 4,
            "act": 1,
            "titleEn": "Episode 4: The Lost Library Key",
            "titleRu": "Эпизод 4: Потерянный ключ от архива",
            "grammarFocus": "Past Simple (was, went, lost, found), Questions (Where did you go?), Prepositions (by the fountain, under the bench)",
            "wordCount": 480,
            "coverIcon": "fa-key",
            "coverColor": "#eab308",
            "sentences": [
                // Scene 1: The Locked Door
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is two o'clock in the afternoon. <break time=\"250ms\"/> Eldrin stands in front of the heavy archive door on Level 82.</prosody></speak>",
                    "en": "It is two o'clock in the afternoon. Eldrin stands in front of the heavy archive door on Level 82.",
                    "ru": "Два часа дня. Элдрин стоит перед тяжелой дверью архива на 82-м уровне."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The door is locked. <break time=\"200ms\"/> Eldrin puts his hand into his right pocket. It is empty. He checks his left pocket. Empty too!</prosody></speak>",
                    "en": "The door is locked. Eldrin puts his hand into his right pocket. It is empty. He checks his left pocket. Empty too!",
                    "ru": "Дверь заперта. Элдрин засовывает руку в правый карман. Он пуст. Он проверяет левый карман. Тоже пуст!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">Where is the bronze key? <break time=\"200ms\"/> I had it in my pocket after lunch!</prosody></speak>",
                    "en": "— Where is the bronze key? I had it in my pocket after lunch!",
                    "ru": "— Где бронзовый ключ? Он был у меня в кармане после обеда!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira walks up the stone stairs with her wooden bow on her shoulder.</prosody></speak>",
                    "en": "Kira walks up the stone stairs with her wooden bow on her shoulder.",
                    "ru": "Кира поднимается по каменной лестнице с деревянным луком на плече."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Hello, Eldrin! Why are you waiting outside? <break time=\"200ms\"/> Can we go inside the library?</prosody></speak>",
                    "en": "— Hello, Eldrin! Why are you waiting outside? Can we go inside the library?",
                    "ru": "— Привет, Элдрин! Почему ты ждешь снаружи? Мы можем зайти в библиотеку?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">I lost the big bronze key. <break time=\"200ms\"/> Professor Corvinus will be very angry with me.</prosody></speak>",
                    "en": "— I lost the big bronze key. Professor Corvinus will be very angry with me.",
                    "ru": "— Я потерял большой бронзовый ключ. Профессор Корвинус будет очень зол на меня."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Do not panic. <break time=\"200ms\"/> Think carefully. Where did you go after lunch?</prosody></speak>",
                    "en": "— Do not panic. Think carefully. Where did you go after lunch?",
                    "ru": "— Не паникуй. Подумай хорошенько. Куда ты ходил после обеда?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"+2st\">First, I went to the dining hall. <break time=\"200ms\"/> Then, I walked in the garden near the water fountain.</prosody></speak>",
                    "en": "— First, I went to the dining hall. Then, I walked in the garden near the water fountain.",
                    "ru": "— Сначала я пошел в столовую. Потом гулял в саду возле питьевого фонтанчика."
                },
                // Scene 2: The Fountain & The Fluffy Cat
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Let us check the garden fountain right now! <break time=\"200ms\"/> Come on!</prosody></speak>",
                    "en": "— Let us check the garden fountain right now! Come on!",
                    "ru": "— Давай проверим фонтанчик в саду прямо сейчас! Пойдем!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They run down to the sunny courtyard garden. <break time=\"200ms\"/> Green bushes and purple flowers grow around the stone fountain.</prosody></speak>",
                    "en": "They run down to the sunny courtyard garden. Green bushes and purple flowers grow around the stone fountain.",
                    "ru": "Они бегут вниз в залитый солнцем сад во дворе. Зеленые кусты и фиолетовые цветы растут вокруг каменного фонтана."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">On the wooden bench near the water, <break time=\"150ms\"/> a fat ginger cat is lying in the warm sun.</prosody></speak>",
                    "en": "On the wooden bench near the water, a fat ginger cat is lying in the warm sun.",
                    "ru": "На деревянной скамейке возле воды на теплом солнце лежит толстый рыжий кот."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2.5st\">Look at the cat's paws! <break time=\"200ms\"/> What is he playing with?</prosody></speak>",
                    "en": "— Look at the cat's paws! What is he playing with?",
                    "ru": "— Посмотри на лапы кота! С чем он играет?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">It is the key! <break time=\"200ms\"/> The bronze key is under his fluffy paw!</prosody></speak>",
                    "en": "— It is the key! The bronze key is under his fluffy paw!",
                    "ru": "— Это ключ! Бронзовый ключ под его пушистой лапой!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin slowly approaches the cat. <break time=\"200ms\"/> He takes a small piece of cheese from his pocket and gives it to the cat.</prosody></speak>",
                    "en": "Eldrin slowly approaches the cat. He takes a small piece of cheese from his pocket and gives it to the cat.",
                    "ru": "Элдрин медленно подходит к коту. Он достает из кармана маленький кусочек сыра и дает его коту."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The cat purrs, eats the delicious cheese, <break time=\"150ms\"/> and leaves the shiny key on the bench.</prosody></speak>",
                    "en": "The cat purrs, eats the delicious cheese, and leaves the shiny key on the bench.",
                    "ru": "Кот мурлычет, ест вкусный сыр и оставляет блестящий ключ на скамейке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2.5st\">I got it! <break time=\"200ms\"/> Thank you, cat. And thank you, Kira!</prosody></speak>",
                    "en": "— I got it! Thank you, cat. And thank you, Kira!",
                    "ru": "— Я забрал его! Спасибо, котик. И спасибо, Кира!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Now put it on a strong string around your neck! <break time=\"200ms\"/> Let us open the library.</prosody></speak>",
                    "en": "— Now put it on a strong string around your neck! Let us open the library.",
                    "ru": "— А теперь надень его на крепкую веревочку на шею! Пойдем откроем библиотеку."
                }
            ],
            "quiz": [
                {
                    "question": "Why is Eldrin standing outside the archive door?",
                    "options": ["He is waiting for Leo", "The door is locked and he lost the key", "He is reading a book", "He is eating lunch"],
                    "correctIdx": 1
                },
                {
                    "question": "Where do Eldrin and Kira find the bronze key?",
                    "options": ["In the dining hall", "In the storage room", "Under a cat's paw near the fountain", "On the teacher's desk"],
                    "correctIdx": 2
                },
                {
                    "question": "What does Eldrin give to the cat to get the key?",
                    "options": ["A piece of cheese", "A cup of milk", "A fish", "A piece of bread"],
                    "correctIdx": 0
                }
            ]
        },

        // =========================================================================
        // EPISODE 5: A LETTER FOR MASTER CORVINUS (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-5",
            "number": 5,
            "act": 1,
            "titleEn": "Episode 5: A Letter for Master Corvinus",
            "titleRu": "Эпизод 5: Письмо для мастера Корвинуса",
            "grammarFocus": "Modals (can, cannot, must), Future Intentions (Tomorrow we will go), Everyday Objects (glasses, letter, drawer)",
            "wordCount": 485,
            "coverIcon": "fa-envelope",
            "coverColor": "#a855f7",
            "sentences": [
                // Scene 1: The Sealed Letter & Missing Glasses
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A tall postman in a grey coat knocks on the library door. <break time=\"250ms\"/> He hands a thick parchment envelope to Eldrin.</prosody></speak>",
                    "en": "A tall postman in a grey coat knocks on the library door. He hands a thick parchment envelope to Eldrin.",
                    "ru": "Высокий почтальон в сером пальто стучит в дверь библиотеки. Он передает толстый пергаментный конверт Элдрину."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The letter has a shiny red wax seal with an owl stamp. <break time=\"200ms\"/> Eldrin brings the letter to Master Corvinus.</prosody></speak>",
                    "en": "The letter has a shiny red wax seal with an owl stamp. Eldrin brings the letter to Master Corvinus.",
                    "ru": "На письме блестит красная сургучная печать со штампом совы. Элдрин приносит письмо мастеру Корвинусу."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Professor Corvinus, here is an important letter for you from the city below.</prosody></speak>",
                    "en": "— Professor Corvinus, here is an important letter for you from the city below.",
                    "ru": "— Профессор Корвинус, вот важное письмо для вас из нижнего города."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Thank you, Eldrin. <break time=\"250ms\"/> Let me see... Oh dear. Where are my reading glasses?</prosody></speak>",
                    "en": "— Thank you, Eldrin. Let me see... Oh dear. Where are my reading glasses?",
                    "ru": "— Спасибо, Элдрин. Дай-ка посмотреть... О боже. Где мои очки для чтения?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Are they inside the wooden drawer of your desk?</prosody></speak>",
                    "en": "— Are they inside the wooden drawer of your desk?",
                    "ru": "— Они внутри деревянного ящика вашего стола?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">No, there are only pens and old paper in the drawer. <break time=\"250ms\"/> I cannot read the small letters without my glasses.</prosody></speak>",
                    "en": "— No, there are only pens and old paper in the drawer. I cannot read the small letters without my glasses.",
                    "ru": "— Нет, в ящике только ручки и старая бумага. Я не могу прочесть мелкие буквы без очков."
                },
                // Scene 2: Finding the Glasses & Big News
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">Do not worry, Professor. <break time=\"200ms\"/> I will find them for you. Let me check the study room.</prosody></speak>",
                    "en": "— Do not worry, Professor. I will find them for you. Let me check the study room.",
                    "ru": "— Не волнуйтесь, профессор. Я найду их для вас. Позвольте мне проверить кабинет."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin checks the bookshelf. Not there. <break time=\"200ms\"/> He checks the round tea table. Not there.</prosody></speak>",
                    "en": "Eldrin checks the bookshelf. Not there. He checks the round tea table. Not there.",
                    "ru": "Элдрин проверяет книжную полку. Там нет. Он проверяет круглый чайный столик. Там нет."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Then he looks at the wide stone windowsill near the big window. <break time=\"200ms\"/> The silver glasses are resting right next to a small blue flowerpot!</prosody></speak>",
                    "en": "Then he looks at the wide stone windowsill near the big window. The silver glasses are resting right next to a small blue flowerpot!",
                    "ru": "Затем он смотрит на широкий каменный подоконник возле большого окна. Серебряные очки лежат прямо рядом с маленьким синим цветочным горшком!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">Here they are, Professor! <break time=\"200ms\"/> On the windowsill near the flowerpot.</prosody></speak>",
                    "en": "— Here they are, Professor! On the windowsill near the flowerpot.",
                    "ru": "— Вот же они, профессор! На подоконнике возле цветочного горшка."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Ah, wonderful eyes, Eldrin! <break time=\"250ms\"/> Thank you very much.</prosody></speak>",
                    "en": "— Ah, wonderful eyes, Eldrin! Thank you very much.",
                    "ru": "— Ах, прекрасные глаза, Элдрин! Большое спасибо."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-1st\">The old master puts on the silver glasses. <break time=\"200ms\"/> He breaks the red seal and reads the letter. A warm smile appears on his face.</prosody></speak>",
                    "en": "The old master puts on the silver glasses. He breaks the red seal and reads the letter. A warm smile appears on his face.",
                    "ru": "Старый мастер надевает серебряные очки. Он ломает красную печать и читает письмо. Теплая улыбка появляется на его лице."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Good news! <break time=\"250ms\"/> The Grand Market in the Lower Town opens tomorrow. We need new paper, books, and ink.</prosody></speak>",
                    "en": "— Good news! The Grand Market in the Lower Town opens tomorrow. We need new paper, books, and ink.",
                    "ru": "— Отличные новости! Завтра в Нижнем Городе открывается Большой Рынок. Нам нужна новая бумага, книги и чернила."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">Are we going to the city market together?</prosody></speak>",
                    "en": "— Are we going to the city market together?",
                    "ru": "— Мы пойдем на городской рынок вместе?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Yes, Eldrin. <break time=\"200ms\"/> You and Kira will help me choose the supplies. Get your shoes ready for tomorrow morning!</prosody></speak>",
                    "en": "— Yes, Eldrin. You and Kira will help me choose the supplies. Get your shoes ready for tomorrow morning!",
                    "ru": "— Да, Элдрин. Ты и Кира поможете мне выбрать припасы. Приготовь свои сапоги на завтрашнее утро!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">Hooray! <break time=\"200ms\"/> I cannot wait for tomorrow!</prosody></speak>",
                    "en": "— Hooray! I cannot wait for tomorrow!",
                    "ru": "— Ура! Не могу дождаться завтрашнего дня!"
                }
            ],
            "quiz": [
                {
                    "question": "What does the postman bring for Master Corvinus?",
                    "options": ["A box of apples", "A thick letter with a red seal", "A new book", "A magic key"],
                    "correctIdx": 1
                },
                {
                    "question": "Where does Eldrin find the professor's reading glasses?",
                    "options": ["Inside the table drawer", "Under the bed", "On the windowsill near a flowerpot", "In the garden"],
                    "correctIdx": 2
                },
                {
                    "question": "Where are Eldrin, Kira, and the professor going tomorrow?",
                    "options": ["To the Grand Market in the Lower Town", "To sleep all day", "To the dark cellar", "To clean the dining hall"],
                    "correctIdx": 0
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = { ELDRIN_AUDIOBOOK };
}
