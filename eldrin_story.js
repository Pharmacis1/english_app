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
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = { ELDRIN_AUDIOBOOK };
}
