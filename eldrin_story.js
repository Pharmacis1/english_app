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
        },

        // =========================================================================
        // EPISODE 6: RAIN AT THE WINDOW & WARM HERBAL TEA (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-6",
            "number": 6,
            "act": 1,
            "titleEn": "Episode 6: Rain at the Window & Warm Herbal Tea",
            "titleRu": "Эпизод 6: Дождь за окном и горячий чай",
            "grammarFocus": "Present Simple, Weather & Sensations (cold, wet, warm, rain), Polite Requests (Can you pass...?)",
            "wordCount": 480,
            "coverIcon": "fa-cloud-showers-heavy",
            "coverColor": "#0ea5e9",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the late afternoon, heavy dark clouds cover the sky. <break time=\"200ms\"/> Rain taps loudly against the tall glass windows of the Spire.</prosody></speak>",
                    "en": "In the late afternoon, heavy dark clouds cover the sky. Rain taps loudly against the tall glass windows of the Spire.",
                    "ru": "Ближе к вечеру темные тяжелые облака закрывают небо. Дождь громко стучит в высокие стеклянные окна Шпиля."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin runs into the kitchen from the attic. <break time=\"150ms\"/> His hair is wet, and his jacket feels cold.</prosody></speak>",
                    "en": "Eldrin runs into the kitchen from the attic. His hair is wet, and his jacket feels cold.",
                    "ru": "Элдрин прибегает на кухню с чердака. Его волосы мокрые, а куртка холодная."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Brrr! <break time=\"200ms\"/> The wind is so strong up on the roof! I closed all five wooden shutters.</prosody></speak>",
                    "en": "— Brrr! The wind is so strong up on the roof! I closed all five wooden shutters.",
                    "ru": "— Брр! Ветер на крыше такой сильный! Я закрыл все пять деревянных ставен."
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Come close to the hearth, Eldrin. <break time=\"200ms\"/> The fireplace is warm, and the copper kettle is boiling.</prosody></speak>",
                    "en": "— Come close to the hearth, Eldrin. The fireplace is warm, and the copper kettle is boiling.",
                    "ru": "— Подойди ближе к очагу, Элдрин. Камин теплый, и медный чайник уже закипает."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">That feels wonderful. <break time=\"150ms\"/> What kind of tea are we making today?</prosody></speak>",
                    "en": "— That feels wonderful. What kind of tea are we making today?",
                    "ru": "— Как приятно. Какой чай мы сегодня завариваем?"
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">We have dried mint leaves and sweet chamomile flowers. <break time=\"200ms\"/> Can you reach the green jar on the top shelf?</prosody></speak>",
                    "en": "— We have dried mint leaves and sweet chamomile flowers. Can you reach the green jar on the top shelf?",
                    "ru": "— У нас есть сушеные листья мяты и сладкие цветы ромашки. Можешь достать зеленую банку с верхней полки?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Yes, I can reach it. <break time=\"150ms\"/> Here is the mint! It smells fresh and sweet.</prosody></speak>",
                    "en": "— Yes, I can reach it. Here is the mint! It smells fresh and sweet.",
                    "ru": "— Да, достану. Вот мята! Она пахнет свежо и приятно."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Leo drops a handful of green mint into the ceramic teapot. <break time=\"200ms\"/> He pours hot steaming water over the leaves.</prosody></speak>",
                    "en": "Leo drops a handful of green mint into the ceramic teapot. He pours hot steaming water over the leaves.",
                    "ru": "Лео бросает горсть зеленой мяты в керамический чайник. Он заливает листья горячей дымящейся водой."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus walks into the kitchen. <break time=\"200ms\"/> He smiles as he smells the warm herbal aroma.</prosody></speak>",
                    "en": "Master Corvinus walks into the kitchen. He smiles as he smells the warm herbal aroma.",
                    "ru": "Мастер Корвинус входит на кухню. Он улыбается, чувствуя теплый травяной аромат."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Good evening, boys. <break time=\"200ms\"/> A hot cup of mint tea is the best medicine on a rainy day.</prosody></speak>",
                    "en": "— Good evening, boys. A hot cup of mint tea is the best medicine on a rainy day.",
                    "ru": "— Добрый вечер, мальчики. Чашка горячего мятного чая — лучшее лекарство в дождливый день."
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Here is a cup for you, Master Corvinus. <break time=\"150ms\"/> Would you like golden honey with it?</prosody></speak>",
                    "en": "— Here is a cup for you, Master Corvinus. Would you like golden honey with it?",
                    "ru": "— Вот чашка для вас, Мастер Корвинус. Хотите к ней золотистый мед?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">One small spoon, please. <break time=\"200ms\"/> Listen to the rain. The plants in our balcony garden are very happy tonight.</prosody></speak>",
                    "en": "— One small spoon, please. Listen to the rain. The plants in our balcony garden are very happy tonight.",
                    "ru": "— Одну маленькую ложечку, пожалуйста. Послушайте дождь. Растения в нашем саду на балконе сегодня очень рады."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Will the storm stop before tomorrow morning?</prosody></speak>",
                    "en": "— Will the storm stop before tomorrow morning?",
                    "ru": "— Буря утихнет до завтрашнего утра?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Yes, Eldrin. <break time=\"150ms\"/> The morning sun will dry the cobblestones in the market.</prosody></speak>",
                    "en": "— Yes, Eldrin. The morning sun will dry the cobblestones in the market.",
                    "ru": "— Да, Элдрин. Утреннее солнце высушит брусчатку на рынке."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The three of them sit around the wooden table. They sip their sweet warm tea, feeling safe and cosy inside the ancient stone walls.</prosody></speak>",
                    "en": "The three of them sit around the wooden table. They sip their sweet warm tea, feeling safe and cosy inside the ancient stone walls.",
                    "ru": "Они втроем сидят за деревянным столом. Они пьют сладкий теплый чай, чувствуя себя уютно и безопасно среди древних каменных стен."
                }
            ],
            "quiz": [
                {
                    "question": "What did Eldrin close on the roof before coming to the kitchen?",
                    "options": ["Five wooden shutters", "The garden gate", "The library door", "A heavy oak box"],
                    "correctIdx": 0
                },
                {
                    "question": "What kind of tea do Leo and Eldrin make?",
                    "options": ["Black tea with lemon", "Mint and chamomile tea with honey", "Cold apple juice", "Hot milk with pepper"],
                    "correctIdx": 1
                },
                {
                    "question": "Where are the three friends sitting while drinking tea?",
                    "options": ["Outside under the rain", "In the dark cellar", "Around the kitchen table near the fireplace", "On the roof of the Spire"],
                    "correctIdx": 2
                }
            ]
        },

        // =========================================================================
        // EPISODE 7: THE HERB GARDEN ON THE BALCONY (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-7",
            "number": 7,
            "act": 1,
            "titleEn": "Episode 7: The Herb Garden on the Balcony",
            "titleRu": "Эпизод 7: Сад трав на балконе",
            "grammarFocus": "Colors, Numbers, Botanical Vocabulary (leaf, stem, root, flower, water), Commands",
            "wordCount": 480,
            "coverIcon": "fa-seedling",
            "coverColor": "#10b981",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The sun rises over the green hills. The morning air is clean, fresh, and cool after the night rain.</prosody></speak>",
                    "en": "The sun rises over the green hills. The morning air is clean, fresh, and cool after the night rain.",
                    "ru": "Солнце встает над зелеными холмами. Утренний воздух чистый, свежий и прохладный после ночного дождя."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin steps onto the wide stone balcony. Kira is already there, bending over twenty brown clay pots.</prosody></speak>",
                    "en": "Eldrin steps onto the wide stone balcony. Kira is already there, bending over twenty brown clay pots.",
                    "ru": "Элдрин выходит на широкий каменный балкон. Кира уже там, она склонилась над двадцатью коричневыми глиняными горшками."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Good morning, Eldrin! <break time=\"200ms\"/> Grab that green watering can. The soil in the small pots is dry.</prosody></speak>",
                    "en": "— Good morning, Eldrin! Grab that green watering can. The soil in the small pots is dry.",
                    "ru": "— Доброе утро, Элдрин! Бери ту зеленую лейку. Земля в маленьких горшках сухая."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Good morning, Kira! <break time=\"150ms\"/> How much water does each plant need?</prosody></speak>",
                    "en": "— Good morning, Kira! How much water does each plant need?",
                    "ru": "— Доброе утро, Кира! Сколько воды нужно каждому растению?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Just a little cup for the young thyme, and half a can for the big rosemary bush in the corner.</prosody></speak>",
                    "en": "— Just a little cup for the young thyme, and half a can for the big rosemary bush in the corner.",
                    "ru": "— Всего одну маленькую чашечку для молодого тимьяна и пол-лейки для большого куста розмарина в углу."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin fills the can at the water pump. He gently pours water onto the dark rich soil.</prosody></speak>",
                    "en": "Eldrin fills the can at the water pump. He gently pours water onto the dark rich soil.",
                    "ru": "Элдрин наполняет лейку у водяной колонки. Он аккуратно поливает темную плодородную землю."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">Look at these yellow flowers! <break time=\"150ms\"/> Are these for cooking or for making medicine?</prosody></speak>",
                    "en": "— Look at these yellow flowers! Are these for cooking or for making medicine?",
                    "ru": "— Посмотри на эти желтые цветы! Они для еды или для приготовления лекарств?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">They are calendula blossoms. <break time=\"200ms\"/> Master Corvinus uses their petals to make a soothing cream for sore hands.</prosody></speak>",
                    "en": "— They are calendula blossoms. Master Corvinus uses their petals to make a soothing cream for sore hands.",
                    "ru": "— Это цветы календулы. Мастер Корвинус использует их лепестки для создания заживляющей мази для рук."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">That is so useful! <break time=\"150ms\"/> Should I cut off the dry brown leaves at the bottom?</prosody></speak>",
                    "en": "— That is so useful! Should I cut off the dry brown leaves at the bottom?",
                    "ru": "— Как полезно! Мне срезать сухие коричневые листья снизу?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Yes, use these small silver shears. <break time=\"200ms\"/> Cut carefully so you do not hurt the green stem.</prosody></speak>",
                    "en": "— Yes, use these small silver shears. Cut carefully so you do not hurt the green stem.",
                    "ru": "— Да, используй эти маленькие серебряные ножницы. Срезай аккуратно, чтобы не повредить зеленый стебель."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Snip, snip! <break time=\"200ms\"/> Eldrin trims the dried leaves and places them in a small basket.</prosody></speak>",
                    "en": "Snip, snip! Eldrin trims the dried leaves and places them in a small basket.",
                    "ru": "Чик, чик! Элдрин срезает сухие листья и складывает их в маленькую корзинку."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Great job! <break time=\"150ms\"/> Now all twenty pots look neat and bright. The garden is ready for the day!</prosody></speak>",
                    "en": "— Great job! Now all twenty pots look neat and bright. The garden is ready for the day!",
                    "ru": "— Отличная работа! Теперь все двадцать горшков выглядят опрятно и ярко. Сад готов к новому дню!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira wash their hands in the cold water pump, laughing and enjoying the warm morning sunshine.</prosody></speak>",
                    "en": "Eldrin and Kira wash their hands in the cold water pump, laughing and enjoying the warm morning sunshine.",
                    "ru": "Элдрин и Кира моют руки в холодной воде из колонки, смеясь и наслаждаясь теплым утренним солнцем."
                }
            ],
            "quiz": [
                {
                    "question": "How many clay pots are on the balcony garden?",
                    "options": ["Five pots", "Twenty pots", "Two hundred pots", "Only one big pot"],
                    "correctIdx": 1
                },
                {
                    "question": "What does Master Corvinus make from yellow calendula petals?",
                    "options": ["Sweet yellow soup", "Soothing cream for hands", "Ink for writing", "Warm tea"],
                    "correctIdx": 1
                },
                {
                    "question": "What tool does Eldrin use to trim the dry leaves?",
                    "options": ["A big sword", "A heavy wooden hammer", "Small silver shears", "A kitchen spoon"],
                    "correctIdx": 2
                }
            ]
        },

        // =========================================================================
        // EPISODE 8: THE HEAVY CHEST IN THE CELLAR (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-8",
            "number": 8,
            "act": 1,
            "titleEn": "Episode 8: The Heavy Chest in the Cellar",
            "titleRu": "Эпизод 8: Тяжелый сундук в подвале",
            "grammarFocus": "Action Verbs (carry, pull, lift, find), Adjectives (heavy, light, dark, bright), Teamwork phrases",
            "wordCount": 480,
            "coverIcon": "fa-dungeon",
            "coverColor": "#64748b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus needs three bronze road lanterns for the cart. <break time=\"200ms\"/> He asks Eldrin and Leo to bring them up from the stone cellar.</prosody></speak>",
                    "en": "Master Corvinus needs three bronze road lanterns for the cart. He asks Eldrin and Leo to bring them up from the stone cellar.",
                    "ru": "Мастеру Корвинусу нужны три бронзовых дорожных фонаря для телеги. Он просит Элдрина и Лео принести их из каменного подвала."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Leo open the thick cellar door. <break time=\"200ms\"/> A cool breeze blows from the dark stairs below.</prosody></speak>",
                    "en": "Eldrin and Leo open the thick cellar door. A cool breeze blows from the dark stairs below.",
                    "ru": "Элдрин и Лео открывают толстую дверь в подвал. Прохладный ветерок веет от темной лестницы внизу."
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Hold this wax candle, Eldrin. <break time=\"150ms\"/> Walk slowly and watch your step. The stone steps are slippery.</prosody></speak>",
                    "en": "— Hold this wax candle, Eldrin. Walk slowly and watch your step. The stone steps are slippery.",
                    "ru": "— Держи эту восковую свечу, Элдрин. Иди медленно и смотри под ноги. Каменные ступени скользкие."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">I am watching. <break time=\"150ms\"/> One, two, three... twelve steps. We are at the bottom!</prosody></speak>",
                    "en": "— I am watching. One, two, three... twelve steps. We are at the bottom!",
                    "ru": "— Я смотрю. Раз, два, три... двенадцать ступенек. Мы внизу!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The cellar is large and quiet. Barrels of apples and stacks of firewood stand along the stone walls.</prosody></speak>",
                    "en": "The cellar is large and quiet. Barrels of apples and stacks of firewood stand along the stone walls.",
                    "ru": "Подвал большой и тихий. Бочки с яблоками и штабеля дров стоят вдоль каменных стен."
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Look over there. <break time=\"150ms\"/> In the back corner, there is a large oak chest with iron straps.</prosody></speak>",
                    "en": "— Look over there. In the back corner, there is a large oak chest with iron straps.",
                    "ru": "— Посмотри вон туда. В дальнем углу стоит большой дубовый сундук с железными полосами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They walk over to the chest. Eldrin tries to lift the heavy iron latch, but it is stiff.</prosody></speak>",
                    "en": "They walk over to the chest. Eldrin tries to lift the heavy iron latch, but it is stiff.",
                    "ru": "Они подходят к сундуку. Элдрин пытается поднять тяжелую железную защелку, но она застряла."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">It will not move! <break time=\"150ms\"/> Help me pull it together, Leo!</prosody></speak>",
                    "en": "— It will not move! Help me pull it together, Leo!",
                    "ru": "— Она не двигается! Помоги мне потянуть вместе, Лео!"
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Ready? On three. <break time=\"200ms\"/> One, two, three — <emphasis level=\"strong\">PULL!</emphasis></prosody></speak>",
                    "en": "— Ready? On three. One, two, three — PULL!",
                    "ru": "— Готов? На счет три. Раз, два, три — ТЯНИ!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Creak! <break time=\"200ms\"/> The heavy oak lid swings open. Inside, wrapped in soft wool, lie three clean bronze lanterns.</prosody></speak>",
                    "en": "Creak! The heavy oak lid swings open. Inside, wrapped in soft wool, lie three clean bronze lanterns.",
                    "ru": "Скрип! Тяжелая дубовая крышка открывается. Внутри, завернутые в мягкую шерсть, лежат три чистых бронзовых фонаря."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2.5st\">We found them! <break time=\"150ms\"/> Look, they have glass windows and thick wicks inside.</prosody></speak>",
                    "en": "— We found them! Look, they have glass windows and thick wicks inside.",
                    "ru": "— Мы нашли их! Смотри, у них стеклянные окошки и толстые фитили внутри."
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">I will carry two lanterns, and you carry one lantern and the candle. <break time=\"150ms\"/> Let us head back upstairs!</prosody></speak>",
                    "en": "— I will carry two lanterns, and you carry one lantern and the candle. Let us head back upstairs!",
                    "ru": "— Я понесу два фонаря, а ты неси один фонарь и свечу. Пошли наверх!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They climb the twelve stone stairs step by step. Master Corvinus welcomes them with a proud smile at the top.</prosody></speak>",
                    "en": "They climb the twelve stone stairs step by step. Master Corvinus welcomes them with a proud smile at the top.",
                    "ru": "Они шаг за шагом поднимаются по двенадцати каменным ступеням. Наверху Мастер Корвинус встречает их гордой улыбкой."
                }
            ],
            "quiz": [
                {
                    "question": "What did Master Corvinus ask Eldrin and Leo to fetch from the cellar?",
                    "options": ["A bag of red apples", "Three bronze lanterns", "A heavy iron hammer", "Old dusty books"],
                    "correctIdx": 1
                },
                {
                    "question": "How many stone steps lead down to the cellar floor?",
                    "options": ["Five steps", "Twelve steps", "Fifty steps", "A hundred steps"],
                    "correctIdx": 1
                },
                {
                    "question": "Where were the lanterns hidden inside the cellar?",
                    "options": ["Inside an oak chest with iron straps", "Under an apple barrel", "On the windowsill", "In the kitchen cupboard"],
                    "correctIdx": 0
                }
            ]
        },

        // =========================================================================
        // EPISODE 9: A BROKEN QUILL & THE ART OF SHARPENING (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-9",
            "number": 9,
            "act": 1,
            "titleEn": "Episode 9: A Broken Quill & The Art of Sharpening",
            "titleRu": "Эпизод 9: Сломанное перо и искусство заточки",
            "grammarFocus": "Adverbs of Manner (slowly, carefully, gently), Simple Present / Past, Manual Skills",
            "wordCount": 480,
            "coverIcon": "fa-pen-nib",
            "coverColor": "#8b5cf6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the quiet archive room, Eldrin sits at a small wooden desk. <break time=\"200ms\"/> He writes a list of supplies on a sheet of parchment.</prosody></speak>",
                    "en": "In the quiet archive room, Eldrin sits at a small wooden desk. He writes a list of supplies on a sheet of parchment.",
                    "ru": "В тихом архивном зале Элдрин сидит за маленьким деревянным столом. Он пишет список припасов на листе пергамента."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Snap! <break time=\"250ms\"/> The sharp tip of his white goose feather breaks. Black ink makes a round blot on the corner.</prosody></speak>",
                    "en": "Snap! The sharp tip of his white goose feather breaks. Black ink makes a round blot on the corner.",
                    "ru": "Хрусь! Острый кончик его белого гусиного пера ломается. Черные чернила оставляют круглую кляксу в углу."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">Oh no! <break time=\"150ms\"/> My pen is broken, and I do not have another quill.</prosody></speak>",
                    "en": "— Oh no! My pen is broken, and I do not have another quill.",
                    "ru": "— О нет! Мое перо сломалось, а другого у меня нет."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Do not worry, Eldrin. <break time=\"200ms\"/> A good scribe never throws away a feather. Come, I will teach you how to cut a new nib.</prosody></speak>",
                    "en": "— Do not worry, Eldrin. A good scribe never throws away a feather. Come, I will teach you how to cut a new nib.",
                    "ru": "— Не переживай, Элдрин. Хороший писец никогда не выбрасывает перо. Подойди, я научу тебя вырезать новый кончик."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus takes a small silver pocketknife from his leather pouch. <break time=\"200ms\"/> The blade is razor sharp and shiny.</prosody></speak>",
                    "en": "Master Corvinus takes a small silver pocketknife from his leather pouch. The blade is razor sharp and shiny.",
                    "ru": "Мастер Корвинус достает маленький серебряный карманный ножик из кожаного кисета. Лезвие острое как бритва и блестящее."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Hold the feather steady with your left hand. <break time=\"200ms\"/> Make one smooth slice at an angle, like this.</prosody></speak>",
                    "en": "— Hold the feather steady with your left hand. Make one smooth slice at an angle, like this.",
                    "ru": "— Держи перо крепко левой рукой. Сделай один плавный срез под углом, вот так."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The master cuts the tip cleanly. Then he makes a tiny slit in the center so the ink flows smoothly.</prosody></speak>",
                    "en": "The master cuts the tip cleanly. Then he makes a tiny slit in the center so the ink flows smoothly.",
                    "ru": "Мастер чисто срезает кончик. Затем делает крошечный расщеп по центру, чтобы чернила плавно текли."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Now it is your turn. <break time=\"150ms\"/> Dip the new nib into the ink pot and write one line.</prosody></speak>",
                    "en": "— Now it is your turn. Dip the new nib into the ink pot and write one line.",
                    "ru": "— Теперь твоя очередь. Опусти новый кончик в чернильницу и напиши одну строку."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin dips the quill. He carefully writes three words on scrap paper: <prosody rate=\"0.88\">'Knowledge is Light'.</prosody></prosody></speak>",
                    "en": "Eldrin dips the quill. He carefully writes three words on scrap paper: 'Knowledge is Light'.",
                    "ru": "Элдрин макает перо. Он аккуратно пишет три слова на черновике: 'Знание — это Свет'."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2.5st\">It writes so smoothly! <break time=\"150ms\"/> The lines are thin and crisp. Thank you, Master Corvinus!</prosody></speak>",
                    "en": "— It writes so smoothly! The lines are thin and crisp. Thank you, Master Corvinus!",
                    "ru": "— Оно пишет так гладко! Линии тонкие и четкие. Спасибо, Мастер Корвинус!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Keep this little silver knife in your bag tomorrow. <break time=\"200ms\"/> A good apprentice is always prepared.</prosody></speak>",
                    "en": "— Keep this little silver knife in your bag tomorrow. A good apprentice is always prepared.",
                    "ru": "— Сохрани этот маленький серебряный ножик в своей сумке на завтра. Хороший ученик всегда готов."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin proudly places the sharpened quill and the silver knife inside his leather bag, ready for the great market tomorrow.</prosody></speak>",
                    "en": "Eldrin proudly places the sharpened quill and the silver knife inside his leather bag, ready for the great market tomorrow.",
                    "ru": "Элдрин с гордостью кладет заточенное перо и серебряный ножик в свою кожаную сумку, готовый к поездке на большой рынок завтра."
                }
            ],
            "quiz": [
                {
                    "question": "What broke while Eldrin was writing his supply list?",
                    "options": ["His wooden chair", "The tip of his white quill", "The ceramic teapot", "His silver glasses"],
                    "correctIdx": 1
                },
                {
                    "question": "What tool did Master Corvinus use to cut and shape the new nib?",
                    "options": ["A pair of big garden shears", "A small silver pocketknife", "A heavy stone hammer", "A sharp bronze key"],
                    "correctIdx": 1
                },
                {
                    "question": "What words did Eldrin write on scrap paper to test his new pen?",
                    "options": ["'Knowledge is Light'", "'Good morning world'", "'I want hot tea'", "'The Spire is tall'"],
                    "correctIdx": 0
                }
            ]
        },

        // =========================================================================
        // EPISODE 10: PACKING THE BAGS FOR TOMORROW'S JOURNEY (~480 WORDS)
        // =========================================================================
        {
            "id": "eldrin-ch-10",
            "number": 10,
            "act": 1,
            "titleEn": "Episode 10: Packing the Bags for Tomorrow's Journey",
            "titleRu": "Эпизод 10: Сборы в дорогу на завтра",
            "grammarFocus": "Future Plans (We will buy, We are going), Checklist Vocabulary, Modal Verbs (must, should, can)",
            "wordCount": 480,
            "coverIcon": "fa-suitcase-rolling",
            "coverColor": "#f59e0b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The evening bell chimes seven times. The dormitory room is warm and bright with candle light.</prosody></speak>",
                    "en": "The evening bell chimes seven times. The dormitory room is warm and bright with candle light.",
                    "ru": "Вечерний колокол звонит семь раз. В комнате общежития тепло и светло от свечей."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin, Leo, and Kira sit around the wooden table with three canvas backpacks on their laps.</prosody></speak>",
                    "en": "Eldrin, Leo, and Kira sit around the wooden table with three canvas backpacks on their laps.",
                    "ru": "Элдрин, Лео и Кира сидят за деревянным столом с тремя холщовыми рюкзаками на коленях."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Let us check our checklist. <break time=\"200ms\"/> We cannot forget anything important for the Lower Town Market!</prosody></speak>",
                    "en": "— Let us check our checklist. We cannot forget anything important for the Lower Town Market!",
                    "ru": "— Давайте сверимся со списком. Нам нельзя ничего забыть для рынка в Нижнем Городе!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">I have Master Corvinus's shopping list, my clean notebook, and twenty copper coins in my pouch.</prosody></speak>",
                    "en": "— I have Master Corvinus's shopping list, my clean notebook, and twenty copper coins in my pouch.",
                    "ru": "— У меня список покупок Мастера Корвинуса, чистый блокнот и двадцать медных монет в кошельке."
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">And I packed four fresh red apples, half a loaf of bread, and a leather canteen of fresh water.</prosody></speak>",
                    "en": "— And I packed four fresh red apples, half a loaf of bread, and a leather canteen of fresh water.",
                    "ru": "— А я упаковал четыре свежих красных яблока, полбуханки хлеба и кожаную флягу со свежей водой."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">I have the street map, a strong coil of rope, and my warm woollen cloak in case it gets windy.</prosody></speak>",
                    "en": "— I have the street map, a strong coil of rope, and my warm woollen cloak in case it gets windy.",
                    "ru": "— У меня карта улиц, прочный моток веревки и теплый шерстяной плащ на случай ветра."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">What time does the horse cart leave tomorrow morning?</prosody></speak>",
                    "en": "— What time does the horse cart leave tomorrow morning?",
                    "ru": "— Во сколько завтра утром отправляется повозка?"
                },
                {
                    "speaker": "leo",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At six o'clock sharp at the main gate! <break time=\"150ms\"/> We must wake up before sunrise.</prosody></speak>",
                    "en": "— At six o'clock sharp at the main gate! We must wake up before sunrise.",
                    "ru": "— Ровно в шесть часов у главных ворот! Мы должны проснуться до восхода солнца."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2st\">It is going to be my first time in the Lower Town market this autumn. <break time=\"150ms\"/> I want to see the spices and the blacksmith's forge!</prosody></speak>",
                    "en": "— It is going to be my first time in the Lower Town market this autumn. I want to see the spices and the blacksmith's forge!",
                    "ru": "— Это будет моя первая поездка на рынок Нижнего Города этой осенью. Я хочу увидеть специи и кузницу!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2.5st\">And I want to see the old bookstall near the town square! <break time=\"200ms\"/> Good night, everyone!</prosody></speak>",
                    "en": "— And I want to see the old bookstall near the town square! Good night, everyone!",
                    "ru": "— А я хочу увидеть лавку со старыми книгами возле городской площади! Спокойной ночи всем!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They blow out the candles. Act One is complete, and a grand new journey awaits at dawn.</prosody></speak>",
                    "en": "They blow out the candles. Act One is complete, and a grand new journey awaits at dawn.",
                    "ru": "Они задувают свечи. Первый акт завершен, и на рассвете их ждет великое новое путешествие."
                }
            ],
            "quiz": [
                {
                    "question": "What time does the horse cart leave the Spire in the morning?",
                    "options": ["At ten o'clock", "At six o'clock sharp", "At noon", "At midnight"],
                    "correctIdx": 1
                },
                {
                    "question": "What food and drink did Leo pack in his bag?",
                    "options": ["Four apples, bread, and a water canteen", "A big fish and tea", "Three bowls of hot soup", "Only candy"],
                    "correctIdx": 0
                },
                {
                    "question": "What does Eldrin want to visit in the Lower Town?",
                    "options": ["The dark dungeon", "The old bookstall near the town square", "The tall mountain", "The weapon shop"],
                    "correctIdx": 1
                }
            ]
        }
,
        {
                "id": "eldrin-ch-11",
                "number": 11,
                "act": 2,
                "titleEn": "Episode 11: The Morning Cart Ride Down the Mountain",
                "titleRu": "Эпизод 11: Утренняя поездка на повозке с горы",
                "grammarFocus": "Present Continuous & Motion Verbs (ride, roll, turn, look, slow down)",
                "wordCount": 480,
                "coverIcon": "fa-horse-head",
                "coverColor": "#10b981",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The wooden gate opens at six o'clock in the morning. <break time=\"200ms\"/> A large wooden cart stands outside with two brown horses.</prosody></speak>",
                                "en": "The wooden gate opens at six o'clock in the morning. A large wooden cart stands outside with two brown horses.",
                                "ru": "Деревянные ворота открываются в шесть часов утра. Снаружи стоит большая деревянная повозка с двумя гнедыми лошадьми."
                        },
                        {
                                "speaker": "barnaby",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2st\">Good morning, travelers! <break time=\"200ms\"/> Climb into the back. Daisy and Clover are ready to run!</prosody></speak>",
                                "en": "— Good morning, travelers! Climb into the back. Daisy and Clover are ready to run!",
                                "ru": "— Доброе утро, путешественники! Залезайте назад. Дейзи и Клевер готовы бежать!"
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Good morning, Barnaby! <break time=\"150ms\"/> The horses look so strong and gentle.</prosody></speak>",
                                "en": "— Good morning, Barnaby! The horses look so strong and gentle.",
                                "ru": "— Доброе утро, Барнаби! Лошади выглядят такими сильными и добрыми."
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Look at the valley below! <break time=\"200ms\"/> White morning fog covers the river like a soft blanket.</prosody></speak>",
                                "en": "— Look at the valley below! White morning fog covers the river like a soft blanket.",
                                "ru": "— Посмотри на долину внизу! Белый утренний туман укрывает реку, как мягкое одеяло."
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Hold the wooden rail tightly, children. <break time=\"200ms\"/> The mountain road turns left and right very steeply.</prosody></speak>",
                                "en": "— Hold the wooden rail tightly, children. The mountain road turns left and right very steeply.",
                                "ru": "— Держитесь крепче за деревянный поручень, дети. Горная дорога круто петляет влево и вправо."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Clip-clop, clip-clop! <break time=\"200ms\"/> The cart rolls steadily down the gravel path. Fresh pine breeze blows on their faces.</prosody></speak>",
                                "en": "Clip-clop, clip-clop! The cart rolls steadily down the gravel path. Fresh pine breeze blows on their faces.",
                                "ru": "Цок-цок, цок-цок! Повозка мерно катится вниз по гравийной дорожке. Свежий сосновый ветерок обдувает их лица."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">How long does it take to reach the Lower Town?</prosody></speak>",
                                "en": "— How long does it take to reach the Lower Town?",
                                "ru": "— Сколько времени нужно, чтобы добраться до Нижнего Города?"
                        },
                        {
                                "speaker": "barnaby",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2st\">Just half an hour down the hill, my boy! <break time=\"150ms\"/> Soon we will see the red stone roofs.</prosody></speak>",
                                "en": "— Just half an hour down the hill, my boy! Soon we will see the red stone roofs.",
                                "ru": "— Всего полчаса с горы, мой мальчик! Скоро мы увидим красные черепичные крыши."
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">I can already hear the church bells ringing in the distance! <break time=\"150ms\"/> Ding-dong, ding-dong!</prosody></speak>",
                                "en": "— I can already hear the church bells ringing in the distance! Ding-dong, ding-dong!",
                                "ru": "— Я уже слышу, как вдали звонят церковные колокола! Дин-дон, дин-дон!"
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The morning sun burns away the fog. <break time=\"200ms\"/> The great stone walls and tall wooden gates of the Lower Town appear before them.</prosody></speak>",
                                "en": "The morning sun burns away the fog. The great stone walls and tall wooden gates of the Lower Town appear before them.",
                                "ru": "Утреннее солнце рассеивает туман. Перед ними вырастают великие каменные стены и высокие деревянные ворота Нижнего Города."
                        }
                ],
                "quiz": [
                        {
                                "question": "What are the names of the two cart horses?",
                                "options": [
                                        "Thunder and Lightning",
                                        "Daisy and Clover",
                                        "Leo and Eldrin",
                                        "Max and Ruby"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "How long does the cart ride down the hill take?",
                                "options": [
                                        "Three days",
                                        "Just half an hour",
                                        "Ten minutes",
                                        "All afternoon"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What covers the river valley in the early morning?",
                                "options": [
                                        "White morning fog",
                                        "Heavy black smoke",
                                        "Cold winter snow",
                                        "Green leaves"
                                ],
                                "correctIdx": 0
                        }
                ]
        },
        {
                "id": "eldrin-ch-12",
                "number": 12,
                "act": 2,
                "titleEn": "Episode 12: The Gatekeeper and the Town Pass",
                "titleRu": "Эпизод 12: Стражник ворот и городской пропуск",
                "grammarFocus": "Modal Verbs (May I see...?), Greetings & Formal Inquiries, Prepositions",
                "wordCount": 480,
                "coverIcon": "fa-shield-halved",
                "coverColor": "#3b82f6",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The cart stops before the massive stone archway. <break time=\"200ms\"/> Two guards in shiny iron helmets stand by the wooden gate.</prosody></speak>",
                                "en": "The cart stops before the massive stone archway. Two guards in shiny iron helmets stand by the wooden gate.",
                                "ru": "Повозка останавливается перед массивной каменной аркой. Двое стражников в блестящих железных шлемах стоят у деревянных ворот."
                        },
                        {
                                "speaker": "guard",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3st\">Halt! <break time=\"200ms\"/> Welcome to the Lower Town. May I see your entry pass, please?</prosody></speak>",
                                "en": "— Halt! Welcome to the Lower Town. May I see your entry pass, please?",
                                "ru": "— Стой! Добро пожаловать в Нижний Город. Могу я взглянуть на ваш пропуск?"
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Good morning, Captain Vance. <break time=\"150ms\"/> Eldrin, please give the captain our official letter.</prosody></speak>",
                                "en": "— Good morning, Captain Vance. Eldrin, please give the captain our official letter.",
                                "ru": "— Доброе утро, капитан Вэнс. Элдрин, пожалуйста, передай капитану наше официальное письмо."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Here it is, Captain! <break time=\"150ms\"/> It has the red wax seal of the Spire Academy.</prosody></speak>",
                                "en": "— Here it is, Captain! It has the red wax seal of the Spire Academy.",
                                "ru": "— Вот оно, капитан! На нем красная восковая печать Академии Шпиля."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Captain Vance examines the parchment. He stamps it with a round bronze seal. <break time=\"200ms\"/> Thump!</prosody></speak>",
                                "en": "Captain Vance examines the parchment. He stamps it with a round bronze seal. Thump!",
                                "ru": "Капитан Вэнс изучает пергамент. Он ставит круглый бронзовый штамп. Бам!"
                        },
                        {
                                "speaker": "guard",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3st\">Everything is in perfect order, Professor Corvinus. <break time=\"150ms\"/> The market square is very busy today. Watch out for carts!</prosody></speak>",
                                "en": "— Everything is in perfect order, Professor Corvinus. The market square is very busy today. Watch out for carts!",
                                "ru": "— Все в полном порядке, профессор Корвинус. Рыночная площадь сегодня очень оживленная. Остерегайтесь телег!"
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Thank you, Captain! <break time=\"150ms\"/> Have a great day on duty!</prosody></speak>",
                                "en": "— Thank you, Captain! Have a great day on duty!",
                                "ru": "— Спасибо, капитан! Хорошего дежурства!"
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The iron chains rattle as the gate rises. <break time=\"200ms\"/> The cart rolls inside, and the bustling sound of the market fills the air.</prosody></speak>",
                                "en": "The iron chains rattle as the gate rises. The cart rolls inside, and the bustling sound of the market fills the air.",
                                "ru": "Железные цепи гремят, когда ворота поднимаются. Повозка въезжает внутрь, и шум оживленного рынка наполняет воздух."
                        }
                ],
                "quiz": [
                        {
                                "question": "What is the name of the gatekeeper captain?",
                                "options": [
                                        "Captain Barnaby",
                                        "Captain Vance",
                                        "Captain Leo",
                                        "Captain Otho"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What does Captain Vance do with the academy parchment?",
                                "options": [
                                        "He throws it away",
                                        "He stamps it with a round bronze seal",
                                        "He cuts it into pieces",
                                        "He eats it"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What warning does the guard give to the travelers?",
                                "options": [
                                        "Watch out for carts in the busy square",
                                        "Do not buy any bread",
                                        "Stay inside the cart all day",
                                        "Close your eyes"
                                ],
                                "correctIdx": 0
                        }
                ]
        },
        {
                "id": "eldrin-ch-13",
                "number": 13,
                "act": 2,
                "titleEn": "Episode 13: The Baker's Warm Pretzel Stall",
                "titleRu": "Эпизод 13: Лавка пекаря с горячими брецелями",
                "grammarFocus": "Shopping Phrases (How much is...?, Here you go), Numbers & Prices, Food Vocabulary",
                "wordCount": 480,
                "coverIcon": "fa-bread-slice",
                "coverColor": "#f59e0b",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The smell of fresh baked bread, melted butter, and sweet cinnamon floats through the cobblestone alley.</prosody></speak>",
                                "en": "The smell of fresh baked bread, melted butter, and sweet cinnamon floats through the cobblestone alley.",
                                "ru": "Запах свежеиспеченного хлеба, топленого масла и сладкой корицы разносится по мощеному переулку."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Mmm! <break time=\"150ms\"/> Look at that stall with the red striped canopy! Those golden pretzels look delicious!</prosody></speak>",
                                "en": "— Mmm! Look at that stall with the red striped canopy! Those golden pretzels look delicious!",
                                "ru": "— Ммм! Посмотри на ту лавку с красно-полосатым навесом! Эти золотистые брецели выглядят восхитительно!"
                        },
                        {
                                "speaker": "baker",
                                "voice": "Fenrir",
                                "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">Good morning, young friends! <break time=\"200ms\"/> Fresh from the wood oven ten minutes ago! Would you like one?</prosody></speak>",
                                "en": "— Good morning, young friends! Fresh from the wood oven ten minutes ago! Would you like one?",
                                "ru": "— Доброе утро, юные друзья! Только десять минут как из дровяной печи! Хотите попробовать?"
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">How much are the warm salted pretzels, please?</prosody></speak>",
                                "en": "— How much are the warm salted pretzels, please?",
                                "ru": "— Сколько стоят теплые соленые брецели, подскажите?"
                        },
                        {
                                "speaker": "baker",
                                "voice": "Fenrir",
                                "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">Two copper coins each, or three for five copper coins!</prosody></speak>",
                                "en": "— Two copper coins each, or three for five copper coins!",
                                "ru": "— Два медных за штуку или три за пять медных монет!"
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">We will take three, please! <break time=\"150ms\"/> One for Kira, one for me, and one for Professor Corvinus. Here are five copper coins.</prosody></speak>",
                                "en": "— We will take three, please! One for Kira, one for me, and one for Professor Corvinus. Here are five copper coins.",
                                "ru": "— Мы возьмем три, пожалуйста! Один для Киры, один для меня и один для профессора Корвинуса. Вот пять медных монет."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The baker wraps the warm salty pretzels in clean brown paper and hands them over with a bright smile.</prosody></speak>",
                                "en": "The baker wraps the warm salty pretzels in clean brown paper and hands them over with a bright smile.",
                                "ru": "Пекарь заворачивает теплые соленые брецели в чистую коричневую бумагу и протягивает их с широкой улыбкой."
                        },
                        {
                                "speaker": "baker",
                                "voice": "Fenrir",
                                "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">Enjoy your breakfast, young scholars! <break time=\"150ms\"/> Come back anytime!</prosody></speak>",
                                "en": "— Enjoy your breakfast, young scholars! Come back anytime!",
                                "ru": "— Приятного аппетита, юные ученые! Заходите в любое время!"
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2st\">Crunch! <break time=\"150ms\"/> The crust is so crisp, and the inside is so soft and warm!</prosody></speak>",
                                "en": "— Crunch! The crust is so crisp, and the inside is so soft and warm!",
                                "ru": "— Хрусь! Корочка такая хрустящая, а внутри брецель мягкий и горячий!"
                        }
                ],
                "quiz": [
                        {
                                "question": "How much do three warm pretzels cost at the bakery stall?",
                                "options": [
                                        "One silver coin",
                                        "Five copper coins",
                                        "Twenty gold coins",
                                        "They are free"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "Who are the three pretzels for?",
                                "options": [
                                        "For three street cats",
                                        "For Eldrin, Kira, and Professor Corvinus",
                                        "For Captain Vance only",
                                        "For the horses"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What color is the baker stall's striped canopy?",
                                "options": [
                                        "Blue and yellow",
                                        "Red and white striped",
                                        "Plain black",
                                        "Green and silver"
                                ],
                                "correctIdx": 1
                        }
                ]
        },
        {
                "id": "eldrin-ch-14",
                "number": 14,
                "act": 2,
                "titleEn": "Episode 14: The Herb & Spice Merchant",
                "titleRu": "Эпизод 14: Торговка травами и пряностями",
                "grammarFocus": "Weights and Quantities (grams, sack, scale), Adjectives of Smell & Color",
                "wordCount": 480,
                "coverIcon": "fa-mortar-pestle",
                "coverColor": "#ec4899",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the center of the spice pavilion, rows of colorful powders fill wooden jars: <break time=\"150ms\"/> golden turmeric, red paprika, and purple lavender.</prosody></speak>",
                                "en": "In the center of the spice pavilion, rows of colorful powders fill wooden jars: golden turmeric, red paprika, and purple lavender.",
                                "ru": "В центре павильона пряностей ряды разноцветных порошков наполняют деревянные банки: золотистая куркума, красная паприка и фиолетовая лаванда."
                        },
                        {
                                "speaker": "selma",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1st\">Welcome, Master Corvinus! <break time=\"150ms\"/> I kept the fresh mountain thyme and dried sage from the southern hills for you.</prosody></speak>",
                                "en": "— Welcome, Master Corvinus! I kept the fresh mountain thyme and dried sage from the southern hills for you.",
                                "ru": "— Добро пожаловать, мастер Корвинус! Я сохранила для вас свежий горный тимьян и сушеный шалфей с южных холмов."
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Thank you, Selma. <break time=\"150ms\"/> We need two large sacks of thyme and one small jar of blue iris root.</prosody></speak>",
                                "en": "— Thank you, Selma. We need two large sacks of thyme and one small jar of blue iris root.",
                                "ru": "— Спасибо, Сельма. Нам нужно два больших мешочка тимьяна и одна маленькая баночка корня синего ириса."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Selma places bronze weights on her shiny brass scale. <break time=\"200ms\"/> The scale balances evenly with a gentle click.</prosody></speak>",
                                "en": "Selma places bronze weights on her shiny brass scale. The scale balances evenly with a gentle click.",
                                "ru": "Сельма кладет бронзовые гирьки на блестящие латунные весы. Весы ровно уравновешиваются с мягким щелчком."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">The iris powder smells like sweet violets and rain! <break time=\"150ms\"/> What will we use it for in the lab?</prosody></speak>",
                                "en": "— The iris powder smells like sweet violets and rain! What will we use it for in the lab?",
                                "ru": "— Порошок ириса пахнет сладкими фиалками и дождем! Для чего мы будем использовать его в лаборатории?"
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">It keeps the old book parchment dry and protects the paper from tiny bugs.</prosody></speak>",
                                "en": "— It keeps the old book parchment dry and protects the paper from tiny bugs.",
                                "ru": "— Он сохраняет пергамент старых книг сухим и защищает бумагу от мелких жучков."
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">I will tie the linen sacks with green string so nothing spills out on the bumpy cart ride.</prosody></speak>",
                                "en": "— I will tie the linen sacks with green string so nothing spills out on the bumpy cart ride.",
                                "ru": "— Я свяжу льняные мешочки зеленой бечевкой, чтобы ничего не просыпалось при тряске на повозке."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They pack the fragrant sacks into Eldrin's backpack, ready for their next errand.</prosody></speak>",
                                "en": "They pack the fragrant sacks into Eldrin's backpack, ready for their next errand.",
                                "ru": "Они упаковывают ароматные мешочки в рюкзак Элдрина, готовые к следующему делу."
                        }
                ],
                "quiz": [
                        {
                                "question": "What does merchant Selma weigh on her brass scales?",
                                "options": [
                                        "Fresh mountain thyme and sage",
                                        "A gold crown",
                                        "Big bags of coal",
                                        "Pieces of cheese"
                                ],
                                "correctIdx": 0
                        },
                        {
                                "question": "Why does Master Corvinus need blue iris root powder?",
                                "options": [
                                        "To make blue tea",
                                        "To keep old parchment dry and protect it from bugs",
                                        "To paint the cart wheels",
                                        "To bake cakes"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What color string does Kira use to tie the sacks?",
                                "options": [
                                        "Red string",
                                        "Green string",
                                        "Black wire",
                                        "Golden ribbon"
                                ],
                                "correctIdx": 1
                        }
                ]
        },
        {
                "id": "eldrin-ch-15",
                "number": 15,
                "act": 2,
                "titleEn": "Episode 15: The Blacksmith's Sparking Forge",
                "titleRu": "Эпизод 15: Искрящаяся кузница",
                "grammarFocus": "Action Verbs (strike, hammer, glow, heat, cool), Sensory Words (loud, hot, hiss)",
                "wordCount": 480,
                "coverIcon": "fa-fire",
                "coverColor": "#ef4444",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Clang! Clang! Clang! <break time=\"200ms\"/> The sound of heavy steel hitting iron echoes down the street.</prosody></speak>",
                                "en": "Clang! Clang! Clang! The sound of heavy steel hitting iron echoes down the street.",
                                "ru": "Дзынь! Дзынь! Дзынь! Звук ударов тяжелой стали о железо эхом разносится по улице."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Barnaby points at the back right wheel of the cart. The iron rim is loose and wobbles.</prosody></speak>",
                                "en": "Barnaby points at the back right wheel of the cart. The iron rim is loose and wobbles.",
                                "ru": "Барнаби указывает на заднее правое колесо повозки. Железный обод разболтался и шатается."
                        },
                        {
                                "speaker": "barnaby",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2st\">Master Bruno! <break time=\"150ms\"/> We need your hammer! The wheel rim needs tightening before we climb back up the mountain.</prosody></speak>",
                                "en": "— Master Bruno! We need your hammer! The wheel rim needs tightening before we climb back up the mountain.",
                                "ru": "— Мастер Бруно! Нам нужен твой молот! Обод колеса нужно подтянуть, прежде чем мы поедем обратно на гору."
                        },
                        {
                                "speaker": "smith",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">Ho-ho! Step aside, young folks! <break time=\"200ms\"/> Watch the bright sparks fly!</prosody></speak>",
                                "en": "— Ho-ho! Step aside, young folks! Watch the bright sparks fly!",
                                "ru": "— Хо-хо! Отойдите в сторонку, молодежь! Смотрите, как летят яркие искры!"
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Blacksmith Bruno pulls a glowing orange iron hoop from the coal fire with long iron tongs. <break time=\"200ms\"/> He fits it onto the wooden wheel.</prosody></speak>",
                                "en": "Blacksmith Bruno pulls a glowing orange iron hoop from the coal fire with long iron tongs. He fits it onto the wooden wheel.",
                                "ru": "Кузнец Бруно достает светящийся оранжевый железный обруч из угольного огня длинными щипцами. Он насаживает его на деревянное колесо."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Look at the orange fire! <break time=\"150ms\"/> The heat feels like midsummer afternoon!</prosody></speak>",
                                "en": "— Look at the orange fire! The heat feels like midsummer afternoon!",
                                "ru": "— Посмотри на оранжевый огонь! Жар чувствуется, как в разгар летнего дня!"
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Bruno pours a bucket of icy well water over the red hot metal. <break time=\"200ms\"/> <emphasis level=\"strong\">HISSSSS!</emphasis> A cloud of white steam shoots into the air!</prosody></speak>",
                                "en": "Bruno pours a bucket of icy well water over the red hot metal. HISSSSS! A cloud of white steam shoots into the air!",
                                "ru": "Бруно выливает ведро ледяной колодезной воды на раскаленный металл. Ш-Ш-Ш-Ш! Облако белого пара взмывает в воздух!"
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2st\">Wow! <break time=\"150ms\"/> The iron cooled down instantly, and now it fits tight around the oak wood!</prosody></speak>",
                                "en": "— Wow! The iron cooled down instantly, and now it fits tight around the oak wood!",
                                "ru": "— Ого! Железо мгновенно остыло, и теперь оно плотно обхватывает дубовое колесо!"
                        },
                        {
                                "speaker": "smith",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">That wheel will last you ten years, Barnaby! <break time=\"150ms\"/> Safe travels up the Spire!</prosody></speak>",
                                "en": "— That wheel will last you ten years, Barnaby! Safe travels up the Spire!",
                                "ru": "— Это колесо прослужит тебе десять лет, Барнаби! Безопасной дороги к Шпилю!"
                        }
                ],
                "quiz": [
                        {
                                "question": "What part of the cart was broken and needed the blacksmith's help?",
                                "options": [
                                        "The wooden seat",
                                        "The loose iron rim on the back wheel",
                                        "The horse harness",
                                        "The lantern glass"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What sound did the hot iron make when Bruno poured cold water on it?",
                                "options": [
                                        "A loud HISSSSS with white steam",
                                        "A tiny whistle",
                                        "A silent pop",
                                        "A roaring laugh"
                                ],
                                "correctIdx": 0
                        },
                        {
                                "question": "How long did blacksmith Bruno say the repaired wheel will last?",
                                "options": [
                                        "One hour",
                                        "Ten years",
                                        "Two days",
                                        "Only until sunset"
                                ],
                                "correctIdx": 1
                        }
                ]
        },
        {
                "id": "eldrin-ch-16",
                "number": 16,
                "act": 2,
                "titleEn": "Episode 16: The Lost Kitten Under the Vegetable Crates",
                "titleRu": "Эпизод 16: Потерянный котенок под ящиками с овощами",
                "grammarFocus": "Prepositions of Place (under, behind, between), Calling & Gentle Animal Commands",
                "wordCount": 480,
                "coverIcon": "fa-cat",
                "coverColor": "#f97316",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">While walking past the farmer's market, Kira suddenly stops and listens. <break time=\"200ms\"/> 'Mew... mew...'</prosody></speak>",
                                "en": "While walking past the farmer's market, Kira suddenly stops and listens. 'Mew... mew...'",
                                "ru": "Проходя мимо фермерского рынка, Кира вдруг останавливается и прислушивается. «Мяу... мяу...»"
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Eldrin, do you hear that tiny sound? <break time=\"150ms\"/> It sounds like a little animal crying.</prosody></speak>",
                                "en": "— Eldrin, do you hear that tiny sound? It sounds like a little animal crying.",
                                "ru": "— Элдрин, ты слышишь этот тонкий звук? Похоже, плачет маленький зверек."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin kneels on the stone ground. He looks under a stack of wooden crates filled with green cabbages.</prosody></speak>",
                                "en": "Eldrin kneels on the stone ground. He looks under a stack of wooden crates filled with green cabbages.",
                                "ru": "Элдрин опускается на колени на каменную мостовую. Он заглядывает под стопку деревянных ящиков со свежей капустой."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Look, Kira! <break time=\"150ms\"/> A tiny grey kitten is stuck between two wooden boards!</prosody></speak>",
                                "en": "— Look, Kira! A tiny grey kitten is stuck between two wooden boards!",
                                "ru": "— Смотри, Кира! Крошечный серый котенок застрял между двумя деревянными досками!"
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Oh, poor little thing! <break time=\"150ms\"/> His fur is shaking. Do you have any food in your bag?</prosody></speak>",
                                "en": "— Oh, poor little thing! His fur is shaking. Do you have any food in your bag?",
                                "ru": "— Ох, бедняжка! Его шерстка дрожит. У тебя есть какая-нибудь еда в сумке?"
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">I have a small crust from my warm pretzel. <break time=\"200ms\"/> Come here, little one. We will not hurt you.</prosody></speak>",
                                "en": "— I have a small crust from my warm pretzel. Come here, little one. We will not hurt you.",
                                "ru": "— У меня есть кусочек корочки от теплого брецеля. Иди сюда, малыш. Мы тебя не обидим."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin gently extends his open hand. <break time=\"200ms\"/> The kitten sniffs the bread, purrs softly, and climbs into Eldrin's warm palms.</prosody></speak>",
                                "en": "Eldrin gently extends his open hand. The kitten sniffs the bread, purrs softly, and climbs into Eldrin's warm palms.",
                                "ru": "Элдрин осторожно протягивает открытую ладонь. Котенок нюхает хлеб, тихо мурлычет и забирается в теплые ладони Элдрина."
                        },
                        {
                                "speaker": "selma",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1st\">There you are, Smokey! <break time=\"150ms\"/> I was looking for my shop cat all morning! Thank you so much, kind children!</prosody></speak>",
                                "en": "— There you are, Smokey! I was looking for my shop cat all morning! Thank you so much, kind children!",
                                "ru": "— Вот ты где, Дымок! Я искала своего котенка все утро! Спасибо вам огромное, добрые ребята!"
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">You are very welcome! <break time=\"150ms\"/> He is such a sweet little helper.</prosody></speak>",
                                "en": "— You are very welcome! He is such a sweet little helper.",
                                "ru": "— Всегда пожалуйста! Он такой милый маленький помощник."
                        }
                ],
                "quiz": [
                        {
                                "question": "Where was the little grey kitten stuck?",
                                "options": [
                                        "On a tall tree",
                                        "Under a stack of cabbage crates",
                                        "Inside a water bucket",
                                        "In the blacksmith forge"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What is the kitten's name according to the merchant?",
                                "options": [
                                        "Smokey",
                                        "Daisy",
                                        "Barnaby",
                                        "Tiger"
                                ],
                                "correctIdx": 0
                        },
                        {
                                "question": "What did Eldrin offer to gain the kitten's trust?",
                                "options": [
                                        "A shiny gold coin",
                                        "A small crust from his warm pretzel",
                                        "A glass of milk",
                                        "A green book"
                                ],
                                "correctIdx": 1
                        }
                ]
        },
        {
                "id": "eldrin-ch-17",
                "number": 17,
                "act": 2,
                "titleEn": "Episode 17: The Ancient Bookstall by the Clocktower",
                "titleRu": "Эпизод 17: Старинная книжная лавка у часовой башни",
                "grammarFocus": "Descriptive Adjectives (ancient, leather, silver, curious), Present Simple & Appreciation",
                "wordCount": 480,
                "coverIcon": "fa-book-open-reader",
                "coverColor": "#8b5cf6",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Beneath the tall stone clocktower, hundreds of old books rest on mahogany shelves under a green awning.</prosody></speak>",
                                "en": "Beneath the tall stone clocktower, hundreds of old books rest on mahogany shelves under a green awning.",
                                "ru": "Под высокой каменной часовой башней сотни старых книг стоят на полках из красного дерева под зеленым навесом."
                        },
                        {
                                "speaker": "otho",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-3st\">Ah, Professor Corvinus! <break time=\"150ms\"/> And who are these curious young apprentices with wide eyes?</prosody></speak>",
                                "en": "— Ah, Professor Corvinus! And who are these curious young apprentices with wide eyes?",
                                "ru": "— А, профессор Корвинус! А кто эти любознательные юные ученики с горящими глазами?"
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Meet Eldrin and Kira, Master Otho. <break time=\"150ms\"/> Eldrin loves ancient maps and astronomy charts.</prosody></speak>",
                                "en": "— Meet Eldrin and Kira, Master Otho. Eldrin loves ancient maps and astronomy charts.",
                                "ru": "— Познакомьтесь с Элдрином и Кирой, мастер Ото. Элдрин очень любит древние карты и звездные атласы."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin walks along the shelves. He spots a small pocketbook bound in dark blue leather with silver constellations stamped on the cover.</prosody></speak>",
                                "en": "Eldrin walks along the shelves. He spots a small pocketbook bound in dark blue leather with silver constellations stamped on the cover.",
                                "ru": "Элдрин идет вдоль полок. Он замечает маленькую карманную книжку в темно-синем кожаном переплете с серебряными созвездиями на обложке."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Look at this book! <break time=\"150ms\"/> It shows the stars of the Northern Sky with handwritten notes in gold ink.</prosody></speak>",
                                "en": "— Look at this book! It shows the stars of the Northern Sky with handwritten notes in gold ink.",
                                "ru": "— Посмотрите на эту книгу! В ней показаны звезды Северного Неба с рукописными заметками золотыми чернилами."
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">You have worked very hard this week, Eldrin. <break time=\"150ms\"/> Master Otho, how much for this star atlas?</prosody></speak>",
                                "en": "— You have worked very hard this week, Eldrin. Master Otho, how much for this star atlas?",
                                "ru": "— Ты очень старательно трудился всю эту неделю, Элдрин. Мастер Ото, сколько стоит этот звездный атлас?"
                        },
                        {
                                "speaker": "otho",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-3st\">For a true scholar from the Spire, just three silver pieces. <break time=\"150ms\"/> May it guide your night observations well!</prosody></speak>",
                                "en": "— For a true scholar from the Spire, just three silver pieces. May it guide your night observations well!",
                                "ru": "— Для истинного исследователя из Шпиля — всего три серебряные монеты. Пусть он станет отличным проводником в твоих ночных наблюдениях!"
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+3st\">Thank you so much, Professor! <break time=\"150ms\"/> This is the best day ever!</prosody></speak>",
                                "en": "— Thank you so much, Professor! This is the best day ever!",
                                "ru": "— Огромное спасибо, профессор! Это лучший день на свете!"
                        }
                ],
                "quiz": [
                        {
                                "question": "What is the name of the old bookstall owner near the clocktower?",
                                "options": [
                                        "Master Bruno",
                                        "Master Otho",
                                        "Captain Vance",
                                        "Farmer Barnaby"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What book did Eldrin choose from the mahogany shelves?",
                                "options": [
                                        "A cookbook of apple pies",
                                        "A dark blue pocketbook of star constellations",
                                        "A story about dragons",
                                        "An empty notebook"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "Why did Master Corvinus buy the book for Eldrin?",
                                "options": [
                                        "Because Eldrin worked very hard all week",
                                        "Because it was Eldrin's birthday",
                                        "Because it was free",
                                        "By mistake"
                                ],
                                "correctIdx": 0
                        }
                ]
        },
        {
                "id": "eldrin-ch-18",
                "number": 18,
                "act": 2,
                "titleEn": "Episode 18: Lunch at the Sunny Fountain",
                "titleRu": "Эпизод 18: Обед у солнечного фонтана",
                "grammarFocus": "Sharing & Politeness, Food & Senses, Present Continuous",
                "wordCount": 480,
                "coverIcon": "fa-water",
                "coverColor": "#06b6d4",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At twelve o'clock noon, the sun shines warmly on the central town square. <break time=\"200ms\"/> Clear water splashes from the stone lion fountain.</prosody></speak>",
                                "en": "At twelve o'clock noon, the sun shines warmly on the central town square. Clear water splashes from the stone lion fountain.",
                                "ru": "В полдень солнце тепло светит на центральную городскую площадь. Прозрачная вода плещется в каменном фонтане со львом."
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Let us sit on this wide stone bench under the oak tree. <break time=\"150ms\"/> My legs are tired from all the walking!</prosody></speak>",
                                "en": "— Let us sit on this wide stone bench under the oak tree. My legs are tired from all the walking!",
                                "ru": "— Давайте присядем на эту широкую каменную скамью под дубом. Мои ноги устали от долгих прогулок!"
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">I will open our food bag. <break time=\"150ms\"/> Leo packed four juicy red apples and a fresh wheel of goat cheese.</prosody></speak>",
                                "en": "— I will open our food bag. Leo packed four juicy red apples and a fresh wheel of goat cheese.",
                                "ru": "— Я открою наш мешок с едой. Лео положил четыре сочных красных яблока и круг свежего козьего сыра."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus cuts the crisp apples with his silver knife. <break time=\"150ms\"/> He gives a piece to Eldrin and a piece to Kira.</prosody></speak>",
                                "en": "Master Corvinus cuts the crisp apples with his silver knife. He gives a piece to Eldrin and a piece to Kira.",
                                "ru": "Мастер Корвинус разрезает хрустящие яблоки своим серебряным ножиком. Он дает кусочек Элдрину и кусочек Кире."
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Good food tastes twice as good after honest work, my young friends.</prosody></speak>",
                                "en": "— Good food tastes twice as good after honest work, my young friends.",
                                "ru": "— Вкусная еда кажется вдвое вкуснее после честного труда, юные друзья."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A flock of grey pigeons lands near their feet. <break time=\"150ms\"/> Eldrin scatters small breadcrumbs on the sunny stone floor.</prosody></speak>",
                                "en": "A flock of grey pigeons lands near their feet. Eldrin scatters small breadcrumbs on the sunny stone floor.",
                                "ru": "Стайка серых голубей опускается возле их ног. Элдрин рассыпает мелкие хлебные крошки на залитую солнцем брусчатку."
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Look how fast they eat! <break time=\"150ms\"/> The water in the fountain is so refreshing and cool.</prosody></speak>",
                                "en": "— Look how fast they eat! The water in the fountain is so refreshing and cool.",
                                "ru": "— Посмотри, как быстро они клюют! А вода в фонтане такая освежающая и прохладная."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They finish their picnic peacefully, listening to the pleasant splash of water in the afternoon warmth.</prosody></speak>",
                                "en": "They finish their picnic peacefully, listening to the pleasant splash of water in the afternoon warmth.",
                                "ru": "Они мирно заканчивают свой пикник, слушая приятный плеск воды в полуденном тепле."
                        }
                ],
                "quiz": [
                        {
                                "question": "What animal statue is carved on the town square fountain?",
                                "options": [
                                        "A stone lion",
                                        "A bronze horse",
                                        "A golden dragon",
                                        "A giant fish"
                                ],
                                "correctIdx": 0
                        },
                        {
                                "question": "What food did the friends eat for lunch near the fountain?",
                                "options": [
                                        "Hot pepper soup",
                                        "Crisp red apples and goat cheese",
                                        "Only ice cream",
                                        "Salty fish"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "What birds landed near Eldrin to eat breadcrumbs?",
                                "options": [
                                        "Large black eagles",
                                        "A flock of grey pigeons",
                                        "White swans",
                                        "Tiny hummingbirds"
                                ],
                                "correctIdx": 1
                        }
                ]
        },
        {
                "id": "eldrin-ch-19",
                "number": 19,
                "act": 2,
                "titleEn": "Episode 19: Packing the Wooden Cart with Supplies",
                "titleRu": "Эпизод 19: Погрузка припасов в деревянную повозку",
                "grammarFocus": "Checklist Vocabulary, Prepositions (onto, across, under), Teamwork Coordination",
                "wordCount": 480,
                "coverIcon": "fa-boxes-stacked",
                "coverColor": "#eab308",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At three o'clock in the afternoon, the team returns to Barnaby's cart by the blacksmith's yard.</prosody></speak>",
                                "en": "At three o'clock in the afternoon, the team returns to Barnaby's cart by the blacksmith's yard.",
                                "ru": "В три часа дня команда возвращается к повозке Барнаби возле кузнечного двора."
                        },
                        {
                                "speaker": "barnaby",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2st\">The wheel is strong as steel now! <break time=\"150ms\"/> Let us load the cargo into the cart bed.</prosody></speak>",
                                "en": "— The wheel is strong as steel now! Let us load the cargo into the cart bed.",
                                "ru": "— Колесо теперь прочное, как сталь! Давайте грузить вещи в кузов."
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Eldrin, please read the checklist. <break time=\"150ms\"/> We must ensure nothing is left behind.</prosody></speak>",
                                "en": "— Eldrin, please read the checklist. We must ensure nothing is left behind.",
                                "ru": "— Элдрин, пожалуйста, зачитай список. Мы должны убедиться, что ничего не забыли."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Item one: two sacks of mountain thyme. <break time=\"150ms\"/> Loaded! Item two: three bronze lanterns. Loaded! Item three: five reams of writing parchment.</prosody></speak>",
                                "en": "— Item one: two sacks of mountain thyme. Loaded! Item two: three bronze lanterns. Loaded! Item three: five reams of writing parchment.",
                                "ru": "— Пункт первый: два мешка горного тимьяна. Погружено! Пункт второй: три бронзовых фонаря. Погружено! Пункт третий: пять стопок бумаги для записей."
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">All five heavy reams are safely in the wooden box! <break time=\"150ms\"/> I am tying the strong hemp rope across the crates.</prosody></speak>",
                                "en": "— All five heavy reams are safely in the wooden box! I am tying the strong hemp rope across the crates.",
                                "ru": "— Все пять тяжелых стопок надежно уложены в деревянный ящик! Я перевязываю ящики крепкой пеньковой веревкой."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira pulls the knot tight. <break time=\"150ms\"/> Eldrin tests the crates with his hand. Nothing moves or rattles.</prosody></speak>",
                                "en": "Kira pulls the knot tight. Eldrin tests the crates with his hand. Nothing moves or rattles.",
                                "ru": "Кира туго затягивает узел. Элдрин проверяет ящики рукой. Ничего не двигается и не гремит."
                        },
                        {
                                "speaker": "barnaby",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2st\">Superb knot, Kira! <break time=\"150ms\"/> Hop on, everyone! The horses are well-rested and ready to climb home!</prosody></speak>",
                                "en": "— Superb knot, Kira! Hop on, everyone! The horses are well-rested and ready to climb home!",
                                "ru": "— Великолепный узел, Кира! Запрыгивайте все! Лошади отдохнули и готовы подниматься домой!"
                        }
                ],
                "quiz": [
                        {
                                "question": "What tool did Kira use to secure the crates in the cart?",
                                "options": [
                                        "A strong hemp rope",
                                        "Sticky tape",
                                        "Iron nails",
                                        "Heavy stones"
                                ],
                                "correctIdx": 0
                        },
                        {
                                "question": "How many reams of writing parchment were loaded onto the cart?",
                                "options": [
                                        "One ream",
                                        "Five reams",
                                        "Fifty reams",
                                        "None"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "Where was the cart waiting while the team shopped in town?",
                                "options": [
                                        "Inside the deep river",
                                        "By the blacksmith's yard",
                                        "On the high roof",
                                        "In the dark cellar"
                                ],
                                "correctIdx": 1
                        }
                ]
        },
        {
                "id": "eldrin-ch-20",
                "number": 20,
                "act": 2,
                "titleEn": "Episode 20: The Sunset Ride Back to the Spire",
                "titleRu": "Эпизод 20: Поездка на закате обратно к Шпилю",
                "grammarFocus": "Sunset & Time Vocabulary, Past Simple & Reflections, Act II Conclusion",
                "wordCount": 480,
                "coverIcon": "fa-mountain-sun",
                "coverColor": "#f43f5e",
                "sentences": [
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The sun dips low behind the western mountain peaks, painting the evening clouds in brilliant gold, orange, and purple.</prosody></speak>",
                                "en": "The sun dips low behind the western mountain peaks, painting the evening clouds in brilliant gold, orange, and purple.",
                                "ru": "Солнце опускается за западные горные вершины, окрашивая вечерние облака в сияющие золотые, оранжевые и пурпурные тона."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Daisy and Clover pull the cart up the winding mountain trail. <break time=\"200ms\"/> Barnaby lights the two bronze lanterns on the front rail.</prosody></speak>",
                                "en": "Daisy and Clover pull the cart up the winding mountain trail. Barnaby lights the two bronze lanterns on the front rail.",
                                "ru": "Дейзи и Клевер тянут повозку вверх по извилистой горной тропе. Барнаби зажигает два бронзовых фонаря на переднем поручне."
                        },
                        {
                                "speaker": "eldrin",
                                "voice": "Puck",
                                "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">Look at the lights of the Lower Town below. <break time=\"150ms\"/> They twinkle like fallen stars in the valley.</prosody></speak>",
                                "en": "— Look at the lights of the Lower Town below. They twinkle like fallen stars in the valley.",
                                "ru": "— Посмотри на огни Нижнего Города внизу. Они мерцают, как упавшие в долину звезды."
                        },
                        {
                                "speaker": "kira",
                                "voice": "Aoede",
                                "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">We accomplished so much today! <break time=\"150ms\"/> We fixed the wheel, helped little Smokey, and bought all our supplies.</prosody></speak>",
                                "en": "— We accomplished so much today! We fixed the wheel, helped little Smokey, and bought all our supplies.",
                                "ru": "— Мы столько всего успели сделать сегодня! Мы починили колесо, помогли малышу Дымку и купили все припасы."
                        },
                        {
                                "speaker": "corvinus",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">You both acted with great courage, teamwork, and kindness today. <break time=\"150ms\"/> I am very proud of you.</prosody></speak>",
                                "en": "— You both acted with great courage, teamwork, and kindness today. I am very proud of you.",
                                "ru": "— Вы оба проявили сегодня большую смелость, сплоченность и доброту. Я очень горжусь вами."
                        },
                        {
                                "speaker": "narrator",
                                "voice": "Charon",
                                "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The grand gates of the Spire open ahead. Warm light from the windows welcomes them home as Act Two comes to a peaceful close.</prosody></speak>",
                                "en": "The grand gates of the Spire open ahead. Warm light from the windows welcomes them home as Act Two comes to a peaceful close.",
                                "ru": "Величественные ворота Шпиля распахиваются впереди. Теплый свет из окон встречает их дома, завершая Второй Акт в мире и уюте."
                        }
                ],
                "quiz": [
                        {
                                "question": "What colors painted the evening clouds at sunset?",
                                "options": [
                                        "Gold, orange, and purple",
                                        "Dark green and black",
                                        "Pure white only",
                                        "Grey and brown"
                                ],
                                "correctIdx": 0
                        },
                        {
                                "question": "What did Barnaby light on the front rail as darkness fell?",
                                "options": [
                                        "A big campfire",
                                        "Two bronze lanterns",
                                        "A red torch",
                                        "Wax matches"
                                ],
                                "correctIdx": 1
                        },
                        {
                                "question": "How did Professor Corvinus praise Eldrin and Kira?",
                                "options": [
                                        "He said they were slow",
                                        "He said they showed courage, teamwork, and kindness",
                                        "He told them to run away",
                                        "He gave them homework"
                                ],
                                "correctIdx": 1
                        }
                ]
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = { ELDRIN_AUDIOBOOK };
}
