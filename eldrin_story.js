/**
 * THE SPIRE CHRONICLES (A0 -> A1 GRADED SERIAL • 25,000 WORDS TOTAL)
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
            "chaptersRange": [
                1,
                10
            ]
        },
        {
            "number": 2,
            "titleEn": "Act II: The Market & Town Below",
            "titleRu": "Акт II: Город и Торговые Ряды",
            "chaptersRange": [
                11,
                20
            ]
        },
        {
            "number": 3,
            "titleEn": "Act III: School Quests & Teamwork",
            "titleRu": "Акт III: Испытания и Командная Работа",
            "chaptersRange": [
                21,
                30
            ]
        },
        {
            "number": 4,
            "titleEn": "Act IV: Secrets of the Ancient Archive",
            "titleRu": "Акт IV: Тайны Древнего Архива",
            "chaptersRange": [
                31,
                40
            ]
        },
        {
            "number": 5,
            "titleEn": "Act V: The Great Spire Mystery",
            "titleRu": "Акт V: Великая Тайна Шпиля",
            "chaptersRange": [
                41,
                50
            ]
        }
    ],
    "chapters": [
        {
            "id": "eldrin-ch-1",
            "number": 1,
            "act": 1,
            "titleEn": "Episode 1: A Busy Morning in the Library",
            "titleRu": "Эпизод 1: Трудное утро в библиотеке",
            "grammarFocus": "Present Simple, Verb 'to be', Prepositions (on, under, near, behind, between), Can / Cannot, Questions",
            "wordCount": 500,
            "coverIcon": "fa-sun",
            "coverColor": "#f59e0b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is seven o'clock in the morning. <break time=\"300ms\"/> Eldrin opens his eyes. He is very sleepy.</prosody></speak>",
                    "en": "It is seven o'clock in the morning. Eldrin opens his eyes. He is very sleepy.",
                    "ru": "Семь часов утра. Элдрин открывает глаза. Он очень сонный."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
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
                    "voice": "Charon",
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
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Good morning, Leo! No, I am not okay. <break time=\"200ms\"/> I cannot find my bag. Where is it?</prosody></speak>",
                    "en": "— Good morning, Leo! No, I am not okay. I cannot find my bag. Where is it?",
                    "ru": "— Доброе утро, Лео! Нет, я не в порядке. Я не могу найти свою сумку. Где она?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">I do not know. <break time=\"200ms\"/> Is it under your bed?</prosody></speak>",
                    "en": "— I do not know. Is it under your bed?",
                    "ru": "— Не знаю. Она под твоей кроватью?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin looks under the wooden bed. <break time=\"200ms\"/> There is only an old shoe and a ball of wool.</prosody></speak>",
                    "en": "Eldrin looks under the wooden bed. There is only an old shoe and a ball of wool.",
                    "ru": "Элдрин смотрит под деревянную кровать. Там только старый ботинок и клубок шерсти."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">No, it is not under the bed. <break time=\"200ms\"/> What about behind the big wooden wardrobe?</prosody></speak>",
                    "en": "— No, it is not under the bed. What about behind the big wooden wardrobe?",
                    "ru": "— Нет, под кроватью ее нет. А как насчет места за большим деревянным шкафом?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">Look near the heavy wooden door! <break time=\"200ms\"/> What is that on the floor?</prosody></speak>",
                    "en": "— Look near the heavy wooden door! What is that on the floor?",
                    "ru": "— Посмотри возле тяжелой деревянной двери! Что это на полу?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2.5st\"><emphasis level=\"strong\">Ah! Yes!</emphasis> <break time=\"200ms\"/> There is my brown leather bag, right near the door! Thank you, Leo!</prosody></speak>",
                    "en": "— Ah! Yes! There is my brown leather bag, right near the door! Thank you, Leo!",
                    "ru": "— А! Да! Вот моя коричневая кожаная сумка, прямо у двери! Спасибо, Лео!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">You are welcome. <break time=\"200ms\"/> Drink this hot tea and eat this red apple. You need energy for your first day.</prosody></speak>",
                    "en": "— You are welcome. Drink this hot tea and eat this red apple. You need energy for your first day.",
                    "ru": "— Пожалуйста. Выпей этот горячий чай и съешь это красное яблоко. Тебе нужны силы на первый день."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">Thank you! <break time=\"150ms\"/> The tea is warm and sweet. The apple is delicious.</prosody></speak>",
                    "en": "— Thank you! The tea is warm and sweet. The apple is delicious.",
                    "ru": "— Спасибо! Чай теплый и сладкий. Яблоко вкусное."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin grabs his bag, <break time=\"150ms\"/> puts his green notebook inside, and runs down the long stone stairs.</prosody></speak>",
                    "en": "Eldrin grabs his bag, puts his green notebook inside, and runs down the long stone stairs.",
                    "ru": "Элдрин хватает сумку, кладет внутрь зеленый блокнот и бежит вниз по длинной каменной лестнице."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He enters the Great Library. <break time=\"200ms\"/> The room is very large and quiet. Tall wooden bookshelves touch the ceiling.</prosody></speak>",
                    "en": "He enters the Great Library. The room is very large and quiet. Tall wooden shelves touch the ceiling.",
                    "ru": "Он входит в Великую Библиотеку. Зал очень большой и тихий. Высокие деревянные книжные полки касаются потолка."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">An old archivist, Master Corvinus, <break time=\"150ms\"/> stands by a wide wooden desk. He looks at Eldrin with a calm smile.</prosody></speak>",
                    "en": "An old archivist, Master Corvinus, stands by a wide wooden desk. He looks at Eldrin with a calm smile.",
                    "ru": "Старый архивариус, Мастер Корвинус, стоит у широкого деревянного стола. Он смотрит на Элдрина со спокойной улыбкой."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Good morning, Eldrin. <break time=\"250ms\"/> You are right on time. Are you ready for your first task?</prosody></speak>",
                    "en": "— Good morning, Eldrin. You are right on time. Are you ready for your first task?",
                    "ru": "— Доброе утро, Элдрин. Ты как раз вовремя. Ты готов к своему первому заданию?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Good morning, Master Corvinus! <break time=\"200ms\"/> Yes, I am ready. What can I do to help you?</prosody></speak>",
                    "en": "— Good morning, Master Corvinus! Yes, I am ready. What can I do to help you?",
                    "ru": "— Доброе утро, Мастер Корвинус! Да, я готов. Чем я могу вам помочь?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">I need a special book. <break time=\"200ms\"/> It is a large blue book with silver letters on the cover.</prosody></speak>",
                    "en": "— I need a special book. It is a large blue book with silver letters on the cover.",
                    "ru": "— Мне нужна особая книга. Это большая синяя книга с серебряными буквами на обложке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+2st\">Where is this blue book, Master?</prosody></speak>",
                    "en": "— Where is this blue book, Master?",
                    "ru": "— Где эта синяя книга, Мастер?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">It is on the top shelf, in Section Three, <break time=\"200ms\"/> between the red book and the yellow book.</prosody></speak>",
                    "en": "— It is on the top shelf, in Section Three, between the red book and the yellow book.",
                    "ru": "— Она на самой верхней полке, в третьей секции, между красной книгой и желтой книгой."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin walks to Section Three. He looks up. <break time=\"200ms\"/> The shelf is very high! He cannot reach it with his hands.</prosody></speak>",
                    "en": "Eldrin walks to Section Three. He looks up. The shelf is very high! He cannot reach it with his hands.",
                    "ru": "Элдрин идет к третьей секции. Он смотрит вверх. Полка очень высоко! Он не может достать ее руками."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">Oh, that is so high! <break time=\"200ms\"/> Where is the wooden ladder?</prosody></speak>",
                    "en": "— Oh, that is so high! Where is the wooden ladder?",
                    "ru": "— О, это так высоко! Где деревянная лестница?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A girl with a bright green cloak walks past. <break time=\"150ms\"/> Her name is Kira. She is fast and strong.</prosody></speak>",
                    "en": "A girl with a bright green cloak walks past. Her name is Kira. She is fast and strong.",
                    "ru": "Мимо проходит девочка в ярко-зеленом плаще. Ее зовут Кира. Она быстрая и сильная."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Hello there! <break time=\"150ms\"/> Do you need some help with that tall shelf?</prosody></speak>",
                    "en": "— Hello there! Do you need some help with that tall shelf?",
                    "ru": "— Привет! Тебе помочь с той высокой полкой?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2st\">Hello! Yes, please! <break time=\"200ms\"/> The blue book is on the top shelf, and the ladder is over there in the dark corner.</prosody></speak>",
                    "en": "— Hello! Yes, please! The blue book is on the top shelf, and the ladder is over there in the dark corner.",
                    "ru": "— Привет! Да, пожалуйста! Синяя книга на верхней полке, а лестница вон там в темном углу."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Let us carry it together. <break time=\"200ms\"/> One, two, three — lift!</prosody></speak>",
                    "en": "— Let us carry it together. One, two, three — lift!",
                    "ru": "— Давай донесем ее вместе. Раз, два, три — поднимаем!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Together, Eldrin and Kira carry the wooden ladder <break time=\"150ms\"/> and place it carefully against the tall bookshelf.</prosody></speak>",
                    "en": "Together, Eldrin and Kira carry the wooden ladder and place it carefully against the tall shelf.",
                    "ru": "Вместе Элдрин и Кира несут деревянную лестницу и аккуратно ставят ее к высокому книжному шкафу."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">Climb up slowly, Eldrin. <break time=\"200ms\"/> I will hold the ladder at the bottom so it does not shake.</prosody></speak>",
                    "en": "— Climb up slowly, Eldrin. I will hold the ladder at the bottom so it does not shake.",
                    "ru": "— Поднимайся медленно, Элдрин. Я подержу лестницу снизу, чтобы она не качалась."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"1.0\" pitch=\"+2.5st\">Thank you, Kira! <break time=\"150ms\"/> I am climbing now. One step, two steps, three steps... <break time=\"200ms\"/> <emphasis level=\"strong\">Here is the blue book!</emphasis></prosody></speak>",
                    "en": "— Thank you, Kira! I am climbing now. One step, two steps, three steps... Here is the blue book!",
                    "ru": "— Спасибо, Кира! Я поднимаюсь. Одна ступенька, две, три... Вот и синяя книга!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin takes the heavy blue book. <break time=\"150ms\"/> He climbs down safely and hands the book to Master Corvinus.</prosody></speak>",
                    "en": "Eldrin takes the heavy blue book. He climbs down safely and hands the book to Master Corvinus.",
                    "ru": "Элдрин берет тяжелую синюю книгу. Он благополучно спускается и протягивает книгу Мастеру Корвинусу."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">Excellent teamwork, young apprentices! <break time=\"200ms\"/> You work very well together. Take five minutes of rest.</prosody></speak>",
                    "en": "— Excellent teamwork, young apprentices! You work very well together. Take five minutes of rest.",
                    "ru": "— Отличная командная работа, юные ученики! Вы прекрасно работаете вместе. Отдохните пять минут."
                }
            ],
            "quiz": [
                {
                    "question": "Where does Eldrin find his bag?",
                    "options": [
                        "On the table",
                        "Under the bed",
                        "Near the wooden door",
                        "In the Great Library"
                    ],
                    "correctIdx": 2
                },
                {
                    "question": "What does Leo give to Eldrin for breakfast?",
                    "options": [
                        "A hot cup of coffee",
                        "A red apple",
                        "Two slices of cheese",
                        "Warm soup"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why does Eldrin need Kira's help in the library?",
                    "options": [
                        "To read the blue book",
                        "To hold the shaky ladder",
                        "To clean the large desk",
                        "To find the library key"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-2",
            "number": 2,
            "act": 1,
            "titleEn": "Episode 2: The Spilled Ink & The Clean Desk",
            "titleRu": "Эпизод 2: Пролитые чернила и чистый стол",
            "grammarFocus": "Past Simple & Present Simple, Action Verbs (spill, rush, clean, wipe), Prepositions",
            "wordCount": 514,
            "coverIcon": "fa-feather",
            "coverColor": "#3b82f6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is two o'clock in the afternoon in the library. Professor Corvinus walks out to meet another teacher.</prosody></speak>",
                    "en": "It is two o'clock in the afternoon in the library. Teacher Corvinus walks out to meet another teacher.",
                    "ru": "В библиотеке два часа дня. Профессор Корвинус выходит, чтобы встретиться с другим учителем."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin sits alone at the wide oak desk. He copies an old text with a pen and black ink.</prosody></speak>",
                    "en": "Eldrin sits alone at the wide big tree desk. He copies an old text with a pen and black ink.",
                    "ru": "Элдрин сидит один за широким дубовым столом. Он переписывает старый текст пером и черными чернилами."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— This old story is very interesting. I must write every word carefully.</prosody></speak>",
                    "en": "— This old story is very interesting. I must write every word carefully.",
                    "ru": "— Эта старая история очень интересная. Я должен писать каждое слово аккуратно."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Suddenly, his right elbow hits the glass bottle of ink! The bottle rolls and falls on its side.</prosody></speak>",
                    "en": "Suddenly, his right elbow hits the glass bottle of ink! The bottle rolls and falls on its side.",
                    "ru": "Внезапно его правый локоть задевает стеклянную бутылочку с чернилами! Бутылочка катится и падает на бок."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Oh no! Look at the ink! It is spilling all over the master's desk!</prosody></speak>",
                    "en": "— Oh no! Look at the ink! It is spilling all over the master's desk!",
                    "ru": "— О нет! Посмотри на чернила! Они растекаются по всему столу мастера!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Dark black ink runs across the smooth wood. It reaches the edge of three clean white papers.</prosody></speak>",
                    "en": "Dark black ink runs across the smooth wood. It reaches the edge of three clean white papers.",
                    "ru": "Темные черные чернила текут по гладкому дереву. Они доходят до края трех чистых белых листов бумаги."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I must save the clean papers first! One, two, three papers... okay, the papers are safe!</prosody></speak>",
                    "en": "— I must save the clean papers first! One, two, three papers... okay, the papers are safe!",
                    "ru": "— Сначала я должен спасти чистые листы! Один, два, три листа... хорошо, бумаги в безопасности!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Now a big black puddle covers the middle of the desk. Eldrin needs dry cloths immediately.</prosody></speak>",
                    "en": "Now a big black puddle covers the middle of the desk. Eldrin needs dry cloths immediately.",
                    "ru": "Теперь большая черная лужа покрывает середину стола. Элдрину срочно нужны сухие тряпки."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Where are the cleaning cloths? Are they in the drawer? No, only extra quills and rulers.</prosody></speak>",
                    "en": "— Where are the cleaning cloths? Are they in the drawer? No, only extra pens and rulers.",
                    "ru": "— Где тряпки для уборки? Они в ящике? Нет, только запасные перья и линейки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin runs out into the quiet stone hallway. He sees his friend Leo near the water basin.</prosody></speak>",
                    "en": "Eldrin runs out into the quiet stone hallway. He sees his friend Leo near the water bowl.",
                    "ru": "Элдрин выбегает в тихий каменный коридор. Он видит своего друга Лео возле умывальника."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Leo! Leo! Please help me! I had an accident in the library!</prosody></speak>",
                    "en": "— Leo! Leo! Please help me! I had an accident in the library!",
                    "ru": "— Лео! Лео! Пожалуйста, помоги мне! У меня случилась авария в библиотеке!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— What happened, Eldrin? Why are your fingers completely black?</prosody></speak>",
                    "en": "— What happened, Eldrin? Why are your fingers completely black?",
                    "ru": "— Что случилось, Элдрин? Почему твои пальцы совсем черные?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I knocked over the whole bottle of black ink on Master Corvinus's desk!</prosody></speak>",
                    "en": "— I knocked over the whole bottle of black ink on Master Corvinus's desk!",
                    "ru": "— Я опрокинул целую бутылку черных чернил на стол мастера Корвинуса!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Do not panic, Eldrin. Stay calm. We can clean it together before the master returns.</prosody></speak>",
                    "en": "— Do not panic, Eldrin. Stay calm. We can clean it together before the master returns.",
                    "ru": "— Не паникуй, Элдрин. Сохраняй спокойствие. Мы сможем все убрать вместе до возвращения мастера."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Look inside this brown wooden cupboard. Here are three soft yellow cloths and a bar of lavender soap.</prosody></speak>",
                    "en": "— Look inside this brown wooden cupboard. Here are three soft yellow cloths and a bar of purple flower soap.",
                    "ru": "— Загляни в этот коричневый деревянный шкаф. Вот три мягкие желтые тряпки и брусок лавандового мыла."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you, Leo! Take two cloths, and I will take one. But what about water?</prosody></speak>",
                    "en": "— Thank you, Leo! Take two cloths, and I will take one. But what about water?",
                    "ru": "— Спасибо, Лео! Возьми две тряпки, а я возьму одну. Но как насчет воды?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Just then, Kira walks down the hallway carrying a wooden bucket filled with warm water.</prosody></speak>",
                    "en": "Just then, Kira walks down the hallway carrying a wooden bucket filled with warm water.",
                    "ru": "Как раз в этот момент по коридору идет Кира с деревянным ведром, наполненным теплой водой."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Hey boys! Why do you look so worried? What is that black smudge on your nose, Eldrin?</prosody></speak>",
                    "en": "— Hey boys! Why do you look so worried? What is that black smudge on your nose, Eldrin?",
                    "ru": "— Эй, ребята! Почему вы такие взволнованные? Что это за черное пятно у тебя на носу, Элдрин?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I spilled ink on the desk! Can we use your bucket of warm water, Kira?</prosody></speak>",
                    "en": "— I spilled ink on the desk! Can we use your bucket of warm water, Kira?",
                    "ru": "— Я пролил чернила на стол! Можем мы взять твое ведро с теплой водой, Кира?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Of course! Let us hurry inside. Follow me!</prosody></speak>",
                    "en": "— Of course! Let us hurry inside. Follow me!",
                    "ru": "— Конечно! Давайте скорее зайдем внутрь. За мной!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The three friends run into the library. Kira places the bucket on the stone floor near the table.</prosody></speak>",
                    "en": "The three friends run into the library. Kira places the bucket on the stone floor near the table.",
                    "ru": "Трое друзей вбегают в библиотеку. Кира ставит ведро на каменный пол возле стола."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— First, press the dry cloth on the ink puddle. Do not rub! Just press gently.</prosody></speak>",
                    "en": "— First, press the dry cloth on the ink puddle. Do not rub! Just press gently.",
                    "ru": "— Сначала прижмите сухую тряпку к чернильной луже. Не трите! Просто аккуратно прижимайте."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— The cloth is soaking up the black liquid. Look, most of the wet ink is gone!</prosody></speak>",
                    "en": "— The cloth is soaking up the black liquid. Look, most of the wet ink is gone!",
                    "ru": "— Тряпка впитывает черную жидкость. Смотрите, большая часть мокрых чернил ушла!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Now dip the second cloth into warm soapy water. We must wipe every wooden corner.</prosody></speak>",
                    "en": "— Now dip the second cloth into warm soapy water. We must wipe every wooden corner.",
                    "ru": "— Теперь опусти вторую тряпку в теплую мыльную воду. Мы должны протереть каждый деревянный уголок."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They scrub the table top together. The fresh pleasant smell of lavender fills the library air.</prosody></speak>",
                    "en": "They scrub the table top together. The fresh pleasant smell of purple flower fills the library air.",
                    "ru": "Они вместе моют поверхность стола. Свежий приятный запах лаванды наполняет воздух библиотеки."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Use the third clean towel to dry the surface. Make sure the wood is completely dry.</prosody></speak>",
                    "en": "— Use the third clean towel to dry the surface. Make sure the wood is completely dry.",
                    "ru": "— Используй третье чистое полотенце, чтобы высушить поверхность. Убедись, что дерево полностью сухое."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at the oak wood now! It is so shiny and clean! There is not a single black spot left!</prosody></speak>",
                    "en": "— Look at the big tree wood now! It is so shiny and clean! There is not a single black spot left!",
                    "ru": "— Посмотрите на дубовый стол теперь! Он такой блестящий и чистый! Не осталось ни единого черного пятнышка!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Click! The library door opens. Professor Corvinus steps into the room.</prosody></speak>",
                    "en": "Click! The library door opens. Teacher Corvinus steps into the room.",
                    "ru": "Щелк! Дверь библиотеки открывается. Профессор Корвинус входит в комнату."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Hello, young friends. What is that lovely smell of lavender in my library?</prosody></speak>",
                    "en": "— Hello, young friends. What is that lovely smell of purple flower in my library?",
                    "ru": "— Здравствуйте, юные друзья. Что это за прекрасный запах лаванды в моей библиотеке?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I am very sorry, Professor. I accidentally spilled my ink bottle. But we cleaned the entire desk!</prosody></speak>",
                    "en": "— I am very sorry, Teacher. I accidentally spilled my ink bottle. But we cleaned the entire desk!",
                    "ru": "— Мне очень жаль, профессор. Я случайно пролил чернильницу. Но мы вымыли весь стол!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Accidents happen to every student, Eldrin. But you did not run away. You solved the problem.</prosody></speak>",
                    "en": "— Accidents happen to every student, Eldrin. But you did not run away. You solved the problem.",
                    "ru": "— Случайности бывают у каждого ученика, Элдрин. Но ты не убежал. Ты решил проблему."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The desk looks cleaner than yesterday! Thank you, Eldrin, Leo, and Kira. Excellent job!</prosody></speak>",
                    "en": "— The desk looks cleaner than yesterday! Thank you, Eldrin, Leo, and Kira. Excellent job!",
                    "ru": "— Стол выглядит чище, чем вчера! Спасибо, Элдрин, Лео и Кира. Отличная работа!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you, Master! Next time, I will keep the ink bottle on the far left side of the table.</prosody></speak>",
                    "en": "— Thank you, Master! Next time, I will keep the ink bottle on the far left side of the table.",
                    "ru": "— Спасибо, мастер! В следующий раз я буду ставить бутылочку с чернилами на дальний левый край стола."
                }
            ],
            "quiz": [
                {
                    "question": "What did Eldrin accidentally knock over with his elbow?",
                    "options": [
                        "A glass of milk",
                        "A glass bottle of black ink",
                        "A bowl of hot soup",
                        "A heavy flowerpot"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What did Kira bring into the library to help clean the table?",
                    "options": [
                        "A broom",
                        "A bucket of warm water",
                        "A big book",
                        "New pens"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why did Professor Corvinus praise the three friends?",
                    "options": [
                        "Because they bought a new table",
                        "Because they stayed calm and cleaned the desk together",
                        "Because they were sleeping",
                        "Because they ate apples"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-3",
            "number": 3,
            "act": 1,
            "titleEn": "Episode 3: Breakfast in the Great Hall",
            "titleRu": "Эпизод 3: Завтрак в Большом Зале",
            "grammarFocus": "Polite Requests (Can I have...?, Please, Thank you), Food & Breakfast Vocabulary, Helping Others",
            "wordCount": 464,
            "coverIcon": "fa-utensils",
            "coverColor": "#ec4899",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At eight o'clock, the great bronze bell rings across the high courtyards of the Spire.</prosody></speak>",
                    "en": "At eight o'clock, the great metal bell rings across the high courtyards of the Spire.",
                    "ru": "В восемь часов большой бронзовый колокол звонит над высокими дворами Шпиля."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Leo walk down the stone staircase toward the ground floor.</prosody></speak>",
                    "en": "Eldrin and Leo walk down the stone staircase toward the ground floor.",
                    "ru": "Элдрин и Лео спускаются по каменной лестнице к первому этажу."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Listen to my stomach, Eldrin! It is making funny noises because I am so hungry today.</prosody></speak>",
                    "en": "— Listen to my stomach, Eldrin! It is making funny noises because I am so hungry today.",
                    "ru": "— Послушай мой живот, Элдрин! Он забавно урчит, потому что я сегодня очень голоден."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Me too! The morning air is cold, and I want warm food and hot tea.</prosody></speak>",
                    "en": "— Me too! The morning air is cold, and I want warm food and hot tea.",
                    "ru": "— Я тоже! Утренний воздух холодный, и я хочу теплой еды и горячего чая."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They push open the heavy double doors of the Great Dining Hall. The room is full of morning light and happy chatter.</prosody></speak>",
                    "en": "They push open the heavy double doors of the Great Dining Hall. The room is full of morning light and happy chatter.",
                    "ru": "Они толкают тяжелые двойные двери Большого Обеденного Зала. Зал полон утреннего света и веселого гомона."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Dozens of students sit on long wooden benches. Steam rises from large soup pots in the kitchen.</prosody></speak>",
                    "en": "Dozens of students sit on long wooden benches. Steam rises from large soup pots in the kitchen.",
                    "ru": "Десятки учеников сидят на длинных деревянных скамьях. Пар поднимается от больших кастрюль на кухне."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at the food counter over there! What is on the menu this morning?</prosody></speak>",
                    "en": "— Look at the food counter over there! What is on the menu this morning?",
                    "ru": "— Посмотри на раздачу еды вон там! Что сегодня в утреннем меню?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— There is hot oatmeal porridge, fresh bread loaves, yellow butter, sweet strawberry jam, and cold milk.</prosody></speak>",
                    "en": "— There is hot oatmeal porridge, fresh bread loaves, yellow butter, sweet strawberry jam, and cold milk.",
                    "ru": "— Есть горячая овсяная каша, свежие буханки хлеба, желтое масло, сладкое клубничное варенье и холодное молоко."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They take two wooden trays and join the line of hungry young apprentices.</prosody></speak>",
                    "en": "They take two wooden trays and join the line of hungry young apprentices.",
                    "ru": "Они берут два деревянных подноса и встают в очередь голодных юных учеников."
                },
                {
                    "speaker": "cook",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"+1st\">— Good morning, boys! <break time=\"300ms\"/> What would you like on your breakfast tray today?</prosody></speak>",
                    "en": "— Good morning, boys! What would you like on your breakfast tray today?",
                    "ru": "— Доброе утро, мальчики! Что бы вы хотели на свой поднос для завтрака сегодня?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Good morning! Can I please have a big bowl of warm oatmeal porridge with sweet honey?</prosody></speak>",
                    "en": "— Good morning! Can I please have a big bowl of warm oatmeal porridge with sweet honey?",
                    "ru": "— Доброе утро! Можно мне, пожалуйста, большую тарелку теплой овсяной каши со сладким медом?"
                },
                {
                    "speaker": "cook",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"+1st\">— Here is your steaming porridge, young man! <break time=\"300ms\"/> And a cup of fresh milk for you.</prosody></speak>",
                    "en": "— Here is your steaming porridge, young man! And a cup of fresh milk for you.",
                    "ru": "— Вот твоя дымящаяся каша, юноша! И чашка свежего молока для тебя."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And can I please have two thick slices of white bread, yellow cheese, and strawberry jam?</prosody></speak>",
                    "en": "— And can I please have two thick slices of white bread, yellow cheese, and strawberry jam?",
                    "ru": "— А мне, пожалуйста, можно два толстых ломтика белого хлеба, желтый сыр и клубничное варенье?"
                },
                {
                    "speaker": "cook",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"+1st\">— Of course! <break time=\"300ms\"/> Here are two fresh slices and a big spoon of sweet red jam. <break time=\"300ms\"/> Enjoy your meal!</prosody></speak>",
                    "en": "— Of course! Here are two fresh slices and a big spoon of sweet red jam. Enjoy your meal!",
                    "ru": "— Конечно! Вот два свежих ломтика и большая ложка сладкого красного варенья. Приятного аппетита!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you very much! It looks and smells wonderful.</prosody></speak>",
                    "en": "— Thank you very much! It looks and smells wonderful.",
                    "ru": "— Большое спасибо! Выглядит и пахнет чудесно."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Leo carefully carry their full trays toward an empty table near the window.</prosody></speak>",
                    "en": "Eldrin and Leo carefully carry their full trays toward an empty table near the window.",
                    "ru": "Элдрин и Лео аккуратно несут свои полные подносы к свободному столику у окна."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In front of them, a small first-year student named Toby carries a tray with six red apples.</prosody></speak>",
                    "en": "In front of them, a small first-year student named Toby carries a tray with six red apples.",
                    "ru": "Перед ними маленький первокурсник по имени Тоби несет поднос с шестью красными яблоками."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Suddenly, Toby trips on an uneven stone tile! CRASH! His tray hits the floor!</prosody></speak>",
                    "en": "Suddenly, Toby trips on an uneven stone tile! CRASH! His tray hits the floor!",
                    "ru": "Внезапно Тоби спотыкается о неровную каменную плитку! БАМ! Его поднос падает на пол!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Six round red apples bounce and roll in all directions across the smooth floor.</prosody></speak>",
                    "en": "Six round red apples bounce and roll in all directions across the smooth floor.",
                    "ru": "Шесть круглых красных яблок подскакивают и катятся во все стороны по гладкому полу."
                },
                {
                    "speaker": "toby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+3.5st\">— Oh no! <break time=\"300ms\"/> My breakfast! <break time=\"300ms\"/> My apples are rolling away under the benches!</prosody></speak>",
                    "en": "— Oh no! My breakfast! My apples are rolling away under the benches!",
                    "ru": "— О нет! Мой завтрак! Мои яблоки раскатились под скамейки!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Do not cry, Toby! Put your tray down, Leo. Let us catch all the apples together!</prosody></speak>",
                    "en": "— Do not cry, Toby! Put your tray down, Leo. Let us catch all the apples together!",
                    "ru": "— Не плачь, Тоби! Поставь свой поднос, Лео. Давайте поймаем все яблоки вместе!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin crawls under a wooden table and catches three shiny red apples.</prosody></speak>",
                    "en": "Eldrin crawls under a wooden table and catches three shiny red apples.",
                    "ru": "Элдрин заглядывает под деревянный стол и ловит три блестящих красных яблока."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— I have two apples here near the stone fireplace! They are clean and whole!</prosody></speak>",
                    "en": "— I have two apples here near the stone fireplace! They are clean and whole!",
                    "ru": "— У меня тут два яблока возле каменного камина! Они чистые и целые!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— And here is the sixth apple right by my foot! Catch, Toby!</prosody></speak>",
                    "en": "— And here is the sixth apple right by my foot! Catch, Toby!",
                    "ru": "— А вот и шестое яблоко прямо у моей ноги! Держи, Тоби!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Toby wipes a tear from his eye and smiles happily as he holds all six apples.</prosody></speak>",
                    "en": "Toby wipes a tear from his eye and smiles happily as he holds all six apples.",
                    "ru": "Тоби вытирает слезинку и радостно улыбается, держа все шесть яблок."
                },
                {
                    "speaker": "toby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+3.5st\">— Thank you so much, Eldrin! <break time=\"300ms\"/> Thank you, Leo and Kira! <break time=\"300ms\"/> You are so kind.</prosody></speak>",
                    "en": "— Thank you so much, Eldrin! Thank you, Leo and Kira! You are so kind.",
                    "ru": "— Спасибо вам огромное, Элдрин! Спасибо, Лео и Кира! Вы такие добрые."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Come sit at our table, Toby. We have plenty of space on this sunny bench.</prosody></speak>",
                    "en": "— Come sit at our table, Toby. We have plenty of space on this sunny bench.",
                    "ru": "— Пойдем сядем за наш столик, Тоби. У нас много места на этой солнечной скамье."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes, join us! Sharing breakfast with good friends is the best way to start the morning.</prosody></speak>",
                    "en": "— Yes, join us! Sharing breakfast with good friends is the best way to start the morning.",
                    "ru": "— Да, присоединяйся! Завтракать с хорошими друзьями — лучший способ начать утро."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The four friends sit together by the wide window. The morning sun warms their faces.</prosody></speak>",
                    "en": "The four friends sit together by the wide window. The morning sun warms their faces.",
                    "ru": "Четверо друзей сидят вместе у широкого окна. Утреннее солнце согревает их лица."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Here, Toby, take a piece of my warm buttered toast.</prosody></speak>",
                    "en": "— Here, Toby, take a piece of my warm buttered toast.",
                    "ru": "— Держи, Тоби, возьми кусочек моего теплого тоста с маслом."
                },
                {
                    "speaker": "toby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+3.5st\">— Mmm! <break time=\"300ms\"/> This is the most delicious breakfast in the world! <break time=\"300ms\"/> Thank you, friends!</prosody></speak>",
                    "en": "— Mmm! This is the most delicious breakfast in the world! Thank you, friends!",
                    "ru": "— Ммм! Это самый вкусный завтрак в мире! Спасибо вам, друзья!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They eat happily, laugh together, and prepare for their morning classes.</prosody></speak>",
                    "en": "They eat happily, laugh together, and prepare for their morning classes.",
                    "ru": "Они с аппетитом едят, смеются вместе и готовятся к утренним урокам."
                }
            ],
            "quiz": [
                {
                    "question": "What did Leo order for breakfast at the food counter?",
                    "options": [
                        "A plate of cold fish",
                        "Warm oatmeal porridge with honey and fresh milk",
                        "Only three lemons",
                        "A cup of coffee"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "How many red apples rolled across the floor when Toby dropped his tray?",
                    "options": [
                        "Two apples",
                        "Six apples",
                        "Twenty apples",
                        "A hundred apples"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Where did the four friends sit to eat their breakfast together?",
                    "options": [
                        "Outside in the rain",
                        "At a sunny table near the wide window",
                        "In the dark cellar",
                        "On the cold roof"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-4",
            "number": 4,
            "act": 1,
            "titleEn": "Episode 4: The Lost Library Key",
            "titleRu": "Эпизод 4: Потерянный ключ от библиотеки",
            "grammarFocus": "Questions (Where did you go?), Past Simple (went, looked, saw), Retracing Steps",
            "wordCount": 519,
            "coverIcon": "fa-key",
            "coverColor": "#eab308",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is two o'clock in the afternoon. Eldrin walks briskly up the stone steps to the archive room.</prosody></speak>",
                    "en": "It is two o'clock in the afternoon. Eldrin walks briskly up the stone steps to the archive room.",
                    "ru": "Два часа дня. Элдрин быстрым шагом поднимается по каменным ступеням к архиву."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He reaches the heavy wooden door with black iron hinges. The door is locked tight.</prosody></speak>",
                    "en": "He reaches the heavy wooden door with black iron hinges. The door is locked tight.",
                    "ru": "Он подходит к тяжелой деревянной двери с черными железными петлями. Дверь заперта наглухо."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin puts his right hand into his jacket pocket. He feels nothing except a dry apple seed.</prosody></speak>",
                    "en": "Eldrin puts his right hand into his jacket pocket. He feels nothing except a dry apple seed.",
                    "ru": "Элдрин опускает правую руку в карман куртки. Он не нащупывает ничего, кроме сухого яблочного зернышка."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Oh no! Where is the big bronze key? I had it in my hand after lunch!</prosody></speak>",
                    "en": "— Oh no! Where is the big metal key? I had it in my hand after lunch!",
                    "ru": "— О нет! Где большой бронзовый ключ? Он был у меня в руке после обеда!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He checks his left pocket. Empty. He checks his brown leather bag. Empty. He looks on the floor near his boots.</prosody></speak>",
                    "en": "He checks his left pocket. Empty. He checks his brown leather bag. Empty. He looks on the floor near his boots.",
                    "ru": "Он проверяет левый карман. Пусто. Проверяет коричневую кожаную сумку. Пусто. Смотрит на пол возле сапог."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— It is completely gone! Master Corvinus asked me to lock the rare books section before three o'clock!</prosody></speak>",
                    "en": "— It is completely gone! Master Corvinus asked me to lock the rare books section before three o'clock!",
                    "ru": "— Он совсем пропал! Мастер Корвинус просил меня запереть секцию редких книг до трех часов!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira walks up the stairs carrying a bundle of wooden practice arrows.</prosody></speak>",
                    "en": "Kira walks up the stairs carrying a bundle of wooden practice arrows.",
                    "ru": "Кира поднимается по лестнице с охапкой деревянных тренировочных стрел."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Hello, Eldrin! Why are you standing in front of the door with your hands on your head?</prosody></speak>",
                    "en": "— Hello, Eldrin! Why are you standing in front of the door with your hands on your head?",
                    "ru": "— Привет, Элдрин! Почему ты стоишь перед дверью, обхватив голову руками?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Hello, Kira. I lost the heavy bronze key to the archive. I cannot open the door!</prosody></speak>",
                    "en": "— Hello, Kira. I lost the heavy metal key to the archive. I cannot open the door!",
                    "ru": "— Привет, Кира. Я потерял тяжелый бронзовый ключ от архива. Я не могу открыть дверь!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Do not panic. Let us think like detectives. Where did you walk after lunchtime?</prosody></speak>",
                    "en": "— Do not panic. Let us think like detectives. Where did you walk after lunchtime?",
                    "ru": "— Без паники. Давай подумаем как детективы. Куда ты ходил после обеда?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— First, I left the dining hall. Then I walked across the sunny courtyard to wash my hands.</prosody></speak>",
                    "en": "— First, I left the dining hall. Then I walked across the sunny courtyard to wash my hands.",
                    "ru": "— Сначала я вышел из столовой. Потом пошел через солнечный двор, чтобы помыть руки."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Did you stop at the stone fountain in the garden to drink water?</prosody></speak>",
                    "en": "— Did you stop at the stone fountain in the garden to drink water?",
                    "ru": "— Ты останавливался у каменного фонтана в саду, чтобы попить воды?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes! I sat on the wooden bench by the rose bushes for five minutes to eat an apple!</prosody></speak>",
                    "en": "— Yes! I sat on the wooden bench by the rose bushes for five minutes to eat an apple!",
                    "ru": "— Да! Я сидел на деревянной скамейке возле кустов роз пять минут, чтобы съесть яблоко!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Excellent! That is our first clue! Let us run to the garden right now!</prosody></speak>",
                    "en": "— Excellent! That is our first clue! Let us run to the garden right now!",
                    "ru": "— Отлично! Это наша первая зацепка! Побежали в сад прямо сейчас!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They run down the spiral stairs and out into the bright green courtyard garden.</prosody></speak>",
                    "en": "They run down the spiral stairs and out into the bright green courtyard garden.",
                    "ru": "Они сбегают по винтовой лестнице и выбегают в ярко-зеленый сад во внутреннем дворе."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The garden is warm and quiet. Red roses bloom near the stone fountain.</prosody></speak>",
                    "en": "The garden is warm and quiet. Red roses bloom near the stone fountain.",
                    "ru": "В саду тепло и тихо. Красные розы цветут возле каменного фонтана."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look over there, under the wooden bench near the water pump! Do you see that?</prosody></speak>",
                    "en": "— Look over there, under the wooden bench near the water pump! Do you see that?",
                    "ru": "— Посмотри вон туда, под деревянную скамью возле водяной колонки! Ты видишь это?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A fat ginger cat named Barnaby lies comfortably in the warm afternoon sunshine.</prosody></speak>",
                    "en": "A fat ginger cat named Barnaby lies nicely in the warm afternoon sunshine.",
                    "ru": "Толстый рыжий кот по имени Барнаби уютно лежит на теплом полуденном солнышке."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Under his soft white front paws, something metallic shines in the bright sunlight.</prosody></speak>",
                    "en": "Under his soft white front paws, something metal shines in the bright sunlight.",
                    "ru": "Под его мягкими белыми передними лапами что-то металлическое блестит на ярком солнце."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at the cat's paws! That is the bronze key! The cat is playing with the shiny key ring!</prosody></speak>",
                    "en": "— Look at the cat's paws! That is the metal key! The cat is playing with the shiny key ring!",
                    "ru": "— Посмотри на кошачьи лапы! Это же бронзовый ключ! Кот играет с блестящим колечком!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Shh! Be very quiet. If we run fast, he will grab the key and jump over the high garden wall!</prosody></speak>",
                    "en": "— Shh! Be very quiet. If we run fast, he will grab the key and jump over the high garden wall!",
                    "ru": "— Тсс! Будь очень тихим. Если мы побежим быстро, он схватит ключ и перепрыгнет через высокую стену сада!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— You are right. Cats love tasty food. Do you have any snack in your pocket?</prosody></speak>",
                    "en": "— You are right. Cats love tasty food. Do you have any snack in your pocket?",
                    "ru": "— Ты права. Коты обожают вкусную еду. У тебя есть какой-нибудь перекус в кармане?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I have a small piece of yellow cheese wrapped in paper from my lunch tray.</prosody></speak>",
                    "en": "— I have a small piece of yellow cheese wrapped in paper from my lunch tray.",
                    "ru": "— У меня есть маленький кусочек желтого сыра, завернутый в бумагу с обеденного подноса."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin takes the delicious piece of cheese. He slowly kneels on the green grass.</prosody></speak>",
                    "en": "Eldrin takes the delicious piece of cheese. He slowly kneels on the green grass.",
                    "ru": "Элдрин берет вкусный кусочек сыра. Он медленно опускается на колени на зеленую траву."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here, kitty, kitty... Come here, sweet boy. Look at this fresh yummy cheese.</prosody></speak>",
                    "en": "— Here, kitty, kitty... Come here, sweet boy. Look at this fresh yummy cheese.",
                    "ru": "— Кис-кис-кис... Иди сюда, хороший мальчик. Посмотри на этот свежий вкусный сыр."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The ginger cat opens one green eye. He wiggles his whiskers, smells the cheese, and purrs loudly.</prosody></speak>",
                    "en": "The ginger cat opens one green eye. He wiggles his whiskers, smells the cheese, and purrs loudly.",
                    "ru": "Рыжий кот открывает один зеленый глаз. Он шевелит усами, чувствует запах сыра и громко мурлычет."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He steps away from the key and happily eats the tasty treat from Eldrin's hand.</prosody></speak>",
                    "en": "He steps away from the key and happily eats the tasty treat from Eldrin's hand.",
                    "ru": "Он отходит от ключа и с удовольствием ест вкусное угощение из руки Элдрина."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Grab the key now, Eldrin! Quick!</prosody></speak>",
                    "en": "— Grab the key now, Eldrin! Quick!",
                    "ru": "— Хватай ключ сейчас, Элдрин! Быстрее!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I got it! The heavy bronze key is in my hand! Thank you, little cat!</prosody></speak>",
                    "en": "— I got it! The heavy metal key is in my hand! Thank you, little cat!",
                    "ru": "— Я взял его! Тяжелый бронзовый ключ у меня в руке! Спасибо, котик!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Take this strong blue cord from my arrow quiver. Thread the key through the cord.</prosody></speak>",
                    "en": "— Take this strong blue cord from my arrow quiver. Thread the key through the cord.",
                    "ru": "— Возьми этот прочный синий шнурок из моего колчана для стрел. Продень ключ в шнурок."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira ties the blue cord securely around Eldrin's neck.</prosody></speak>",
                    "en": "Kira ties the blue cord safely around Eldrin's neck.",
                    "ru": "Кира надежно завязывает синий шнурок на шее Элдрина."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Now you will never drop the master's key again. It is safe right on your chest!</prosody></speak>",
                    "en": "— Now you will never drop the master's key again. It is safe right on your chest!",
                    "ru": "— Теперь ты больше никогда не уронишь ключ мастера. Он в безопасности прямо у тебя на груди!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is a brilliant idea, Kira! Now let us run upstairs and lock the archive before three o'clock!</prosody></speak>",
                    "en": "— That is a brilliant idea, Kira! Now let us run upstairs and lock the archive before three o'clock!",
                    "ru": "— Это блестящая идея, Кира! А теперь побежали наверх и запрем архив до трех часов!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Laughing happily, the two friends race back up the stone stairs together.</prosody></speak>",
                    "en": "Laughing happily, the two friends race back up the stone stairs together.",
                    "ru": "Весело смеясь, двое друзей вместе бегут обратно вверх по каменной лестнице."
                }
            ],
            "quiz": [
                {
                    "question": "Where did Eldrin sit after lunch to eat an apple?",
                    "options": [
                        "On the library roof",
                        "On a wooden bench in the garden by the rose bushes",
                        "In the dark cellar",
                        "On a horse"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Who was playing with the shiny bronze key in the garden?",
                    "options": [
                        "A fat ginger cat",
                        "A little dog",
                        "A black crow",
                        "Master Corvinus"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "What did Kira give to Eldrin so he would not lose the key again?",
                    "options": [
                        "A big wooden box",
                        "A strong blue cord to wear around his neck",
                        "A metal cage",
                        "A bag of coins"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-5",
            "number": 5,
            "act": 1,
            "titleEn": "Episode 5: A Letter for Master Corvinus",
            "titleRu": "Эпизод 5: Письмо для Мастера Корвинуса",
            "grammarFocus": "Reading & Writing Vocabulary (letter, envelope, seal, glasses), Future Plans (We will go)",
            "wordCount": 417,
            "coverIcon": "fa-envelope-open-text",
            "coverColor": "#6366f1",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is four o'clock in the afternoon. <break time=\"300ms\"/> A man knocks on the big tree door.</prosody></speak>",
                    "en": "It is four o'clock in the afternoon. A man knocks on the big tree door.",
                    "ru": "Четыре часа дня. Мужчина стучит в большую деревянную дверь."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin opens the door. <break time=\"300ms\"/> A tall worker in a grey coat stands outside.</prosody></speak>",
                    "en": "Eldrin opens the door. A tall worker in a grey coat stands outside.",
                    "ru": "Элдрин открывает дверь. Снаружи стоит высокий рабочий в сером пальто."
                },
                {
                    "speaker": "postman",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+0.5st\">— Good afternoon, student! <break time=\"300ms\"/> Is Master Corvinus in his room?</prosody></speak>",
                    "en": "— Good afternoon, student! Is Master Corvinus in his room?",
                    "ru": "— Добрый день, ученик! Мастер Корвинус у себя в комнате?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good afternoon, sir! <break time=\"300ms\"/> Yes, the master is in his room. <break time=\"300ms\"/> He reads an old book.</prosody></speak>",
                    "en": "— Good afternoon, sir! Yes, the master is in his room. He reads an old book.",
                    "ru": "— Добрый день, сэр! Да, мастер в своей комнате. Он читает старую книгу."
                },
                {
                    "speaker": "postman",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+0.5st\">— Here is an important letter from the town. <break time=\"300ms\"/> Please give it to him.</prosody></speak>",
                    "en": "— Here is an important letter from the town. Please give it to him.",
                    "ru": "— Вот важное письмо из города. Пожалуйста, передайте ему."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The worker gives a thick cream envelope. <break time=\"300ms\"/> It has a red owl seal.</prosody></speak>",
                    "en": "The worker gives a thick cream envelope. It has a red owl seal.",
                    "ru": "Рабочий передает плотный кремовый конверт. На нем красная печать с совой."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you, sir! <break time=\"300ms\"/> I take it to him right now. <break time=\"300ms\"/> Have a good journey!</prosody></speak>",
                    "en": "— Thank you, sir! I take it to him right now. Have a good journey!",
                    "ru": "— Спасибо, сэр! Я отнесу его прямо сейчас. Доброго пути!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin runs up the stone tower stairs. <break time=\"300ms\"/> He knocks on the wooden door.</prosody></speak>",
                    "en": "Eldrin runs up the stone tower stairs. He knocks on the wooden door.",
                    "ru": "Элдрин бежит вверх по каменной лестнице башни. Он стучит в деревянную дверь."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Come in, Eldrin. <break time=\"300ms\"/> What is the matter this afternoon?</prosody></speak>",
                    "en": "— Come in, Eldrin. What is the matter this afternoon?",
                    "ru": "— Войди, Элдрин. Что случилось сегодня днем?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Master Corvinus, the town worker brought an important letter! <break time=\"300ms\"/> It has a red owl on it!</prosody></speak>",
                    "en": "— Master Corvinus, the town worker brought an important letter! It has a red owl on it!",
                    "ru": "— Мастер Корвинус, городской рабочий принес важное письмо! На нем красная сова!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Ah, a message from the city! <break time=\"300ms\"/> Thank you, my boy. <break time=\"300ms\"/> Let me read it now.</prosody></speak>",
                    "en": "— Ah, a message from the city! Thank you, my boy. Let me read it now.",
                    "ru": "— Ах, весточка из города! Спасибо, мой мальчик. Дай-ка я его прочту."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The old master checks his clothes. <break time=\"300ms\"/> He looks at his big desk. <break time=\"300ms\"/> Many books and maps are on the desk.</prosody></speak>",
                    "en": "The old master checks his clothes. He looks at his big desk. Many books and maps are on the desk.",
                    "ru": "Старый мастер проверяет одежду. Он смотрит на свой большой стол. На столе лежит много книг и карт."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Oh dear! <break time=\"300ms\"/> Where are my glasses? <break time=\"300ms\"/> I cannot read the small words without them.</prosody></speak>",
                    "en": "— Oh dear! Where are my glasses? I cannot read the small words without them.",
                    "ru": "— О боже! Где мои очки? Без них я не могу прочесть мелкие слова."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Do not worry, Teacher. <break time=\"300ms\"/> Sit in your big chair. <break time=\"300ms\"/> I will find them for you!</prosody></speak>",
                    "en": "— Do not worry, Teacher. Sit in your big chair. I will find them for you!",
                    "ru": "— Не волнуйтесь, Учитель. Садитесь в свое большое кресло. Я найду их для вас!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin looks around the warm room.</prosody></speak>",
                    "en": "Eldrin looks around the warm room.",
                    "ru": "Элдрин оглядывает теплую комнату."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Are they inside the top desk box?</prosody></speak>",
                    "en": "— Are they inside the top desk box?",
                    "ru": "— Они в верхнем ящике стола?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin opens the desk box. <break time=\"300ms\"/> Inside are black pens and clean paper.</prosody></speak>",
                    "en": "Eldrin opens the desk box. Inside are black pens and clean paper.",
                    "ru": "Элдрин открывает ящик стола. Внутри черные ручки и чистая бумага."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Not in the box. <break time=\"300ms\"/> Are they on the tall shelf?</prosody></speak>",
                    "en": "— Not in the box. Are they on the tall shelf?",
                    "ru": "— В ящике нет. Они на высокой полке?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He looks at the shelf. <break time=\"300ms\"/> Only old books are there.</prosody></speak>",
                    "en": "He looks at the shelf. Only old books are there.",
                    "ru": "Он смотрит на полку. Там только старые книги."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Not on the shelf. <break time=\"300ms\"/> Let me look near the big window.</prosody></speak>",
                    "en": "— Not on the shelf. Let me look near the big window.",
                    "ru": "— На полке нет. Посмотрю-ка я возле большого окна."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Near the window sits a purple flower in a pot. <break time=\"300ms\"/> Two silver glasses shine in the sun.</prosody></speak>",
                    "en": "Near the window sits a purple flower in a pot. Two silver glasses shine in the sun.",
                    "ru": "Возле окна в горшке стоит фиолетовый цветок. Серебряные очки блестят на солнце."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here they are, Master! <break time=\"300ms\"/> Your silver glasses are near the sunny window!</prosody></speak>",
                    "en": "— Here they are, Master! Your silver glasses are near the sunny window!",
                    "ru": "— Вот же они, Мастер! Ваши серебряные очки возле солнечного окна!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good eyes, Eldrin! <break time=\"300ms\"/> Thank you very much. <break time=\"300ms\"/> I put them down when I gave water to the flowers.</prosody></speak>",
                    "en": "— Good eyes, Eldrin! Thank you very much. I put them down when I gave water to the flowers.",
                    "ru": "— Зоркий глаз, Элдрин! Большое спасибо. Я положил их, когда поливал цветы."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus puts on the glasses. <break time=\"300ms\"/> He opens the letter with a knife.</prosody></speak>",
                    "en": "Master Corvinus puts on the glasses. He opens the letter with a knife.",
                    "ru": "Мастер Корвинус надевает очки. Он вскрывает письмо ножом."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Let us read the news... <break time=\"300ms\"/> Ah! <break time=\"300ms\"/> Very good news! <break time=\"300ms\"/> Truly great news!</prosody></speak>",
                    "en": "— Let us read the news... Ah! Very good news! Truly great news!",
                    "ru": "— Давайте прочтем новости... Ах! Очень хорошие вести! Поистине отличные вести!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— What does the letter say, Teacher?</prosody></speak>",
                    "en": "— What does the letter say, Teacher?",
                    "ru": "— Что написано в письме, Учитель?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Tomorrow is the Grand Autumn Market in the town square!</prosody></speak>",
                    "en": "— Tomorrow is the Grand Autumn Market in the town square!",
                    "ru": "— Завтра на городской площади состоится Большая Осенняя Ярмарка!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The Academy needs food, plants, paper, and lamp oil!</prosody></speak>",
                    "en": "— The Academy needs food, plants, paper, and lamp oil!",
                    "ru": "— Академии нужны еда, растения, бумага и масло для ламп!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Are we going to the town market together in the morning?</prosody></speak>",
                    "en": "— Are we going to the town market together in the morning?",
                    "ru": "— Мы отправимся на городской рынок вместе утром?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Yes! <break time=\"300ms\"/> You and Kira are going to travel with me in the horse cart. <break time=\"300ms\"/> We will choose the things.</prosody></speak>",
                    "en": "— Yes! You and Kira are going to travel with me in the horse cart. We will choose the things.",
                    "ru": "— Да! Ты и Кира поедете со мной на повозке. Мы будем выбирать припасы."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Hooray! <break time=\"300ms\"/> That is my first trip to the market! <break time=\"300ms\"/> I am ready now! <break time=\"300ms\"/> My boots and bag are ready!</prosody></speak>",
                    "en": "— Hooray! That is my first trip to the market! I am ready now! My boots and bag are ready!",
                    "ru": "— Ура! Это моя первая поездка на рынок! Я уже готов! Мои сапоги и сумка готовы!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Sleep well, Eldrin. <break time=\"300ms\"/> We leave early tomorrow!</prosody></speak>",
                    "en": "— Sleep well, Eldrin. We leave early tomorrow!",
                    "ru": "— Спокойной ночи, Элдрин. Мы выезжаем завтра рано!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin smiles and runs to his bedroom to tell the news to Leo.</prosody></speak>",
                    "en": "Eldrin smiles and runs to his bedroom to tell the news to Leo.",
                    "ru": "Элдрин улыбается и бежит в спальню, чтобы рассказать новости Лео."
                }
            ],
            "quiz": [
                {
                    "question": "What image was on the red seal of the letter?",
                    "options": [
                        "A fierce dragon",
                        "A red owl",
                        "A fast horse",
                        "A sleeping cat"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Where did Eldrin find Master Corvinus's silver glasses?",
                    "options": [
                        "Inside the top desk box",
                        "On the tall shelf with old books",
                        "Near the sunny window next to a purple flower in a pot",
                        "Under the big chair"
                    ],
                    "correctIdx": 2
                },
                {
                    "question": "What exciting event is happening in the town square tomorrow?",
                    "options": [
                        "A sword tournament",
                        "The Grand Autumn Market",
                        "A magic show",
                        "A heavy storm"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-6",
            "number": 6,
            "act": 1,
            "titleEn": "Episode 6: Rain at the Window & Warm Herbal Tea",
            "titleRu": "Эпизод 6: Дождь за окном и горячий чай",
            "grammarFocus": "Weather & Senses (rain, cold, warm, wet, smell), Kitchen Vocabulary, Polite Requests",
            "wordCount": 432,
            "coverIcon": "fa-cloud-showers-heavy",
            "coverColor": "#0ea5e9",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the late afternoon, dark clouds cover the sky. <break time=\"300ms\"/> The day becomes grey and dark.</prosody></speak>",
                    "en": "In the late afternoon, dark clouds cover the sky. The day becomes grey and dark.",
                    "ru": "В конце дня темные тучи закрывают небо. День становится серым и темным."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Cold wind blows around the tall stone tower. <break time=\"300ms\"/> Cold rain falls on the glass windows.</prosody></speak>",
                    "en": "Cold wind blows around the tall stone tower. Cold rain falls on the glass windows.",
                    "ru": "Холодный ветер дует вокруг высокой каменной башни. Холодный дождь падает на стеклянные окна."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin climbs to the attic to close the top roof windows.</prosody></speak>",
                    "en": "Eldrin climbs to the attic to close the top roof windows.",
                    "ru": "Элдрин поднимается на чердак, чтобы закрыть верхние окна на крыше."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— The wind is icy up here! <break time=\"300ms\"/> I must close all five wood windows before the rain gets inside.</prosody></speak>",
                    "en": "— The wind is icy up here! I must close all five wood windows before the rain gets inside.",
                    "ru": "— Ветер здесь ледяной! Я должен закрыть все пять деревянных окон, пока дождь не попал внутрь."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He closes the five wood windows. <break time=\"300ms\"/> Now all five windows are shut.</prosody></speak>",
                    "en": "He closes the five wood windows. Now all five windows are shut.",
                    "ru": "Он закрывает пять деревянных окон. Теперь все пять окон закрыты."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good! <break time=\"300ms\"/> But my hair is wet, and my warm jacket is cold now.</prosody></speak>",
                    "en": "— Good! But my hair is wet, and my warm jacket is cold now.",
                    "ru": "— Отлично! Но мои волосы промокли, и моя теплая куртка теперь холодная."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin walks down to the warm academy kitchen on the first floor.</prosody></speak>",
                    "en": "Eldrin walks down to the warm academy kitchen on the first floor.",
                    "ru": "Элдрин спускается в теплую кухню академии на первом этаже."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Inside the kitchen, bright fire is in the large stone fireplace.</prosody></speak>",
                    "en": "Inside the kitchen, bright fire is in the large stone fireplace.",
                    "ru": "На кухне в большом каменном камине горит яркий огонь."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Leo stands near the fireplace. <break time=\"300ms\"/> He has a large pot of hot water.</prosody></speak>",
                    "en": "Leo stands near the fireplace. He has a large pot of hot water.",
                    "ru": "Лео стоит возле камина. У него большой котелок с горячей водой."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Welcome back, Eldrin! <break time=\"300ms\"/> Come near the warm fire. <break time=\"300ms\"/> You look cold!</prosody></speak>",
                    "en": "— Welcome back, Eldrin! Come near the warm fire. You look cold!",
                    "ru": "— С возвращением, Элдрин! Подойди к теплому огню. Ты выглядишь замерзшим!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— The rain is strong outside! <break time=\"300ms\"/> Ah, this fireplace is warm on my cold hands!</prosody></speak>",
                    "en": "— The rain is strong outside! Ah, this fireplace is warm on my cold hands!",
                    "ru": "— На улице сильный дождь! Ах, этот камин так приятно греет мои холодные руки!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Put your wet jacket on this wood shelf. <break time=\"300ms\"/> It can dry here in twenty minutes.</prosody></speak>",
                    "en": "— Put your wet jacket on this wood shelf. It can dry here in twenty minutes.",
                    "ru": "— Положи свою мокрую куртку на эту деревянную полку. Она высохнет здесь за двадцать минут."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you, Leo. <break time=\"300ms\"/> Do you make hot tea for us?</prosody></speak>",
                    "en": "— Thank you, Leo. Do you make hot tea for us?",
                    "ru": "— Спасибо, Лео. Ты завариваешь для нас горячий чай?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Yes! <break time=\"300ms\"/> What tea do you want today? <break time=\"300ms\"/> We have mint tea and fruit tea.</prosody></speak>",
                    "en": "— Yes! What tea do you want today? We have mint tea and fruit tea.",
                    "ru": "— Да! Какой чай ты хочешь сегодня? У нас есть мятный чай и фруктовый чай."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I love sweet mint tea on a rainy afternoon! <break time=\"300ms\"/> Where is the green clay pot?</prosody></speak>",
                    "en": "— I love sweet mint tea on a rainy afternoon! Where is the green clay pot?",
                    "ru": "— Я люблю сладкий мятный чай дождливым днем! Где зеленый глиняный горшочек?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— It is on the top wood shelf above the bread box. <break time=\"300ms\"/> Can you take it?</prosody></speak>",
                    "en": "— It is on the top wood shelf above the bread box. Can you take it?",
                    "ru": "— Он на верхней деревянной полке над коробкой с хлебом. Ты можешь достать его?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin stands tall. <break time=\"300ms\"/> He takes the green clay pot from the shelf and opens the wood top.</prosody></speak>",
                    "en": "Eldrin stands tall. He takes the green clay pot from the shelf and opens the wood top.",
                    "ru": "Элдрин тянется вверх. Он берет зеленый глиняный горшочек с полки и открывает деревянную крышку."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here it is! <break time=\"300ms\"/> Smell the fresh green leaves! <break time=\"300ms\"/> They smell so sweet and nice.</prosody></speak>",
                    "en": "— Here it is! Smell the fresh green leaves! They smell so sweet and nice.",
                    "ru": "— Вот он! Понюхай свежие зеленые листья! Они пахнут так сладко и приятно."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Put two big spoons of leaves into the white teapot.</prosody></speak>",
                    "en": "— Put two big spoons of leaves into the white teapot.",
                    "ru": "— Положи две большие ложки листьев в белый заварочный чайник."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin puts the green leaves into the pot. <break time=\"300ms\"/> Leo pours hot water on them.</prosody></speak>",
                    "en": "Eldrin puts the green leaves into the pot. Leo pours hot water on them.",
                    "ru": "Элдрин кладет зеленые листья в чайник. Лео наливает на них горячую воду."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Now we must wait five minutes. <break time=\"300ms\"/> Then our hot tea is ready.</prosody></speak>",
                    "en": "— Now we must wait five minutes. Then our hot tea is ready.",
                    "ru": "— Теперь мы должны подождать пять минут. Тогда наш горячий чай будет готов."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The kitchen door opens. <break time=\"300ms\"/> Master Corvinus comes into the room. <break time=\"300ms\"/> He takes off his wet cloak.</prosody></speak>",
                    "en": "The kitchen door opens. Master Corvinus comes into the room. He takes off his wet cloak.",
                    "ru": "Дверь кухни открывается. Мастер Корвинус входит в комнату. Он снимает свой мокрый плащ."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good evening, boys. <break time=\"300ms\"/> The storm outside is bad, but this kitchen smells nice.</prosody></speak>",
                    "en": "— Good evening, boys. The storm outside is bad, but this kitchen smells nice.",
                    "ru": "— Добрый вечер, мальчики. Буря на улице сильная, но на этой кухне приятно пахнет."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good evening, Master Corvinus! <break time=\"300ms\"/> Come sit by the warm fire! <break time=\"300ms\"/> Our hot mint tea is ready.</prosody></speak>",
                    "en": "— Good evening, Master Corvinus! Come sit by the warm fire! Our hot mint tea is ready.",
                    "ru": "— Добрый вечер, Мастер Корвинус! Присаживайтесь к теплому огню! Наш горячий мятный чай готов."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Here is a clean cup for you, Teacher. <break time=\"300ms\"/> Do you want sweet sugar with your tea?</prosody></speak>",
                    "en": "— Here is a clean cup for you, Teacher. Do you want sweet sugar with your tea?",
                    "ru": "— Вот чистая чашка для вас, Учитель. Хотите сладкого сахара к чаю?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— One small spoon of sugar, please. <break time=\"300ms\"/> Thank you, Leo.</prosody></speak>",
                    "en": "— One small spoon of sugar, please. Thank you, Leo.",
                    "ru": "— Одну маленькую ложку сахара, пожалуйста. Спасибо, Лео."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Leo puts the hot tea into three clean cups. <break time=\"300ms\"/> The room smells very sweet.</prosody></speak>",
                    "en": "Leo puts the hot tea into three clean cups. The room smells very sweet.",
                    "ru": "Лео наливает горячий чай в три чистые чашки. В комнате пахнет очень сладко."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Master, will the rain stop before tomorrow morning? <break time=\"300ms\"/> We have our trip to the market.</prosody></speak>",
                    "en": "— Master, will the rain stop before tomorrow morning? We have our trip to the market.",
                    "ru": "— Мастер, дождь прекратится до завтрашнего утра? У нас ведь поездка на рынок."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Yes, Eldrin. <break time=\"300ms\"/> The cold north wind takes the rain away tonight.</prosody></speak>",
                    "en": "— Yes, Eldrin. The cold north wind takes the rain away tonight.",
                    "ru": "— Да, Элдрин. Холодный северный ветер унесет дождь этой ночью."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Tomorrow morning will be clear and sunny. <break time=\"300ms\"/> The roads will be clean and fresh.</prosody></speak>",
                    "en": "— Tomorrow morning will be clear and sunny. The roads will be clean and fresh.",
                    "ru": "— Завтрашнее утро будет ясным и солнечным. Дороги будут чистыми и свежими."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is good news! <break time=\"300ms\"/> This hot tea is so nice and warm.</prosody></speak>",
                    "en": "— That is good news! This hot tea is so nice and warm.",
                    "ru": "— Это отличные новости! Этот горячий чай такой приятный и теплый."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The three friends sit by the fire. <break time=\"300ms\"/> They drink their warm tea together in peace.</prosody></speak>",
                    "en": "The three friends sit by the fire. They drink their warm tea together in peace.",
                    "ru": "Трое друзей сидят у огня. Они спокойно пьют свой теплый чай вместе."
                }
            ],
            "quiz": [
                {
                    "question": "Where did Eldrin go to close the roof windows from the cold rain?",
                    "options": [
                        "To the kitchen",
                        "To the attic",
                        "To the library",
                        "To the town square"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What kind of tea did Eldrin and Leo make in the kitchen?",
                    "options": [
                        "Black coffee",
                        "Sweet mint tea",
                        "Cold lemon water",
                        "Apple juice"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "According to Master Corvinus, what will the weather be like tomorrow morning?",
                    "options": [
                        "A heavy snow storm",
                        "Clear and sunny",
                        "Dark and rainy",
                        "Very foggy and cold"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-7",
            "number": 7,
            "act": 1,
            "titleEn": "Episode 7: The Herb Garden on the Balcony",
            "titleRu": "Эпизод 7: Сад трав на балконе",
            "grammarFocus": "Numbers (one to twenty), Colors (green, yellow, purple), Gardening Verbs (water, trim, grow, pick)",
            "wordCount": 361,
            "coverIcon": "fa-seedling",
            "coverColor": "#10b981",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The bright sun is over the green mountain. <break time=\"300ms\"/> The morning air is sweet and fresh after the rain.</prosody></speak>",
                    "en": "The bright sun is over the green mountain. The morning air is sweet and fresh after the rain.",
                    "ru": "Яркое солнце встает над зеленой горой. Утренний воздух сладкий и свежий после дождя."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin walks out the glass door. <break time=\"300ms\"/> He is on the big stone balcony.</prosody></speak>",
                    "en": "Eldrin walks out the glass door. He is on the big stone balcony.",
                    "ru": "Элдрин выходит через стеклянную дверь. Он на большом каменном балконе."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The balcony is above the green valley. <break time=\"300ms\"/> Long rows of brown clay pots stand on the stone.</prosody></speak>",
                    "en": "The balcony is above the green valley. Long rows of brown clay pots stand on the stone.",
                    "ru": "Балкон находится над зеленой долиной. Длинные ряды коричневых глиняных горшков стоят на камне."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Good morning, Eldrin! <break time=\"300ms\"/> Look, the plants are very happy after the night rain!</prosody></speak>",
                    "en": "— Good morning, Eldrin! Look, the plants are very happy after the night rain!",
                    "ru": "— Доброе утро, Элдрин! Посмотри, растения очень рады ночному дождю!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good morning, Kira! <break time=\"300ms\"/> The garden is green and nice today. <break time=\"300ms\"/> How many pots do we have here?</prosody></speak>",
                    "en": "— Good morning, Kira! The garden is green and nice today. How many pots do we have here?",
                    "ru": "— Доброе утро, Кира! Сад сегодня такой зеленый и красивый. Сколько горшков у нас здесь?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— We have ten pots on the left and ten on the right!</prosody></speak>",
                    "en": "— We have ten pots on the left and ten on the right!",
                    "ru": "— У нас десять горшков слева и десять справа!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— How can I help with the garden this morning?</prosody></speak>",
                    "en": "— How can I help with the garden this morning?",
                    "ru": "— Чем я могу помочь в саду этим утром?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Take that big green water can. <break time=\"300ms\"/> Fill it with water.</prosody></speak>",
                    "en": "— Take that big green water can. Fill it with water.",
                    "ru": "— Возьми ту большую зеленую лейку. Наполни ее водой."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin takes the cold mountain water. <break time=\"300ms\"/> The green can is full.</prosody></speak>",
                    "en": "Eldrin takes the cold mountain water. The green can is full.",
                    "ru": "Элдрин набирает холодную горную воду. Зеленая лейка полна."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— How much water does each plant need, Kira?</prosody></speak>",
                    "en": "— How much water does each plant need, Kira?",
                    "ru": "— Сколько воды нужно каждому растению, Кира?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— The small green plant needs a little cup of water.</prosody></speak>",
                    "en": "— The small green plant needs a little cup of water.",
                    "ru": "— Маленькому зеленому растению нужна небольшая чашка воды."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— But the big plant in the corner needs half of the can. <break time=\"300ms\"/> Its roots are deep.</prosody></speak>",
                    "en": "— But the big plant in the corner needs half of the can. Its roots are deep.",
                    "ru": "— Но большому растению в углу нужна половина лейки. Его корни глубокие."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin walks and gives clean water to the dark soil of each pot.</prosody></speak>",
                    "en": "Eldrin walks and gives clean water to the dark soil of each pot.",
                    "ru": "Элдрин идет и поливает чистой водой темную почву в каждом горшке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— One, two, three, four... <break time=\"300ms\"/> ten pots have water!</prosody></speak>",
                    "en": "— One, two, three, four... ten pots have water!",
                    "ru": "— Один, два, три, четыре... десять горшков политы!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira looks at a pot with bright yellow flowers.</prosody></speak>",
                    "en": "Kira looks at a pot with bright yellow flowers.",
                    "ru": "Кира смотрит на горшок с ярко-желтыми цветами."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at those yellow flowers! <break time=\"300ms\"/> Are they for perfume or soup?</prosody></speak>",
                    "en": "— Look at those yellow flowers! Are they for perfume or soup?",
                    "ru": "— Посмотри на те желтые цветы! Они для духов или для супа?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— They are healing flowers. <break time=\"300ms\"/> Master Corvinus makes nice cream from them.</prosody></speak>",
                    "en": "— They are healing flowers. Master Corvinus makes nice cream from them.",
                    "ru": "— Это целебные цветы. Мастер Корвинус делает из них хорошую мазь."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is good. <break time=\"300ms\"/> Look, there are dry brown leaves under the plant.</prosody></speak>",
                    "en": "— That is good. Look, there are dry brown leaves under the plant.",
                    "ru": "— Это хорошо. Смотри, под растением сухие коричневые листья."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— We must cut the brown leaves. <break time=\"300ms\"/> Then new green leaves will grow strong.</prosody></speak>",
                    "en": "— We must cut the brown leaves. Then new green leaves will grow strong.",
                    "ru": "— Мы должны срезать коричневые листья. Тогда новые зеленые листья вырастут крепкими."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Take this small tool. <break time=\"300ms\"/> Hold the plant with two fingers.</prosody></speak>",
                    "en": "— Take this small tool. Hold the plant with two fingers.",
                    "ru": "— Возьми этот маленький инструмент. Держи растение двумя пальцами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin cuts the brown leaves.</prosody></speak>",
                    "en": "Eldrin cuts the brown leaves.",
                    "ru": "Элдрин срезает коричневые листья."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I put the leaves in this basket. <break time=\"300ms\"/> The plant looks good now!</prosody></speak>",
                    "en": "— I put the leaves in this basket. The plant looks good now!",
                    "ru": "— Я складываю листья в эту корзину. Теперь растение выглядит хорошо!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— You have gentle hands, Eldrin. <break time=\"300ms\"/> You are a good worker!</prosody></speak>",
                    "en": "— You have gentle hands, Eldrin. You are a good worker!",
                    "ru": "— У тебя аккуратные руки, Элдрин. Ты хороший работник!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus comes out with a round wood bowl.</prosody></speak>",
                    "en": "Master Corvinus comes out with a round wood bowl.",
                    "ru": "Мастер Корвинус выходит с круглой деревянной чашей."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning, children! <break time=\"300ms\"/> How is our balcony?</prosody></speak>",
                    "en": "— Good morning, children! How is our balcony?",
                    "ru": "— Доброе утро, дети! Как поживает наш балкон?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— All twenty pots are clean and have water, Master Corvinus!</prosody></speak>",
                    "en": "— All twenty pots are clean and have water, Master Corvinus!",
                    "ru": "— Все двадцать горшков чистые и политы, Мастер Корвинус!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Great work! <break time=\"300ms\"/> Please bring five purple flowers for our trip.</prosody></speak>",
                    "en": "— Great work! Please bring five purple flowers for our trip.",
                    "ru": "— Отличная работа! Пожалуйста, принесите пять фиолетовых цветов для нашей поездки."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— One, two, three, four, five purple flowers! <break time=\"300ms\"/> They are in your bowl, Master.</prosody></speak>",
                    "en": "— One, two, three, four, five purple flowers! They are in your bowl, Master.",
                    "ru": "— Один, два, три, четыре, пять фиолетовых цветов! Они в вашей чаше, Мастер."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Thank you, Eldrin. <break time=\"300ms\"/> This flower gives peace during travel.</prosody></speak>",
                    "en": "— Thank you, Eldrin. This flower gives peace during travel.",
                    "ru": "— Спасибо, Элдрин. Этот цветок дарит спокойствие во время путешествия."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira wash their hands with cool water.</prosody></speak>",
                    "en": "Eldrin and Kira wash their hands with cool water.",
                    "ru": "Элдрин и Кира моют руки прохладной водой."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— It feels good to work in the sun! <break time=\"300ms\"/> I am ready for our next plan!</prosody></speak>",
                    "en": "— It feels good to work in the sun! I am ready for our next plan!",
                    "ru": "— Приятно работать на солнышке! Я готов к нашему следующему плану!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Come inside, children. <break time=\"300ms\"/> We must finish our bags before we go.</prosody></speak>",
                    "en": "— Come inside, children. We must finish our bags before we go.",
                    "ru": "— Заходите внутрь, дети. Мы должны собрать сумки перед выходом."
                }
            ],
            "quiz": [
                {
                    "question": "How many clay pots are on the stone balcony in total?",
                    "options": [
                        "Five pots",
                        "Twenty pots (ten on each side)",
                        "Fifty pots",
                        "Only two big pots"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What are the bright yellow flowers used for?",
                    "options": [
                        "To make vegetable soup",
                        "To make healing cream",
                        "To make yellow paint",
                        "To feed the birds"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why did Master Corvinus ask for five purple flowers for the journey?",
                    "options": [
                        "To feed the horses",
                        "Because they give peace during travel",
                        "To sell them at the gate",
                        "To make purple ink"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-8",
            "number": 8,
            "act": 1,
            "titleEn": "Episode 8: The Heavy Chest in the Cellar",
            "titleRu": "Эпизод 8: Тяжелый сундук в подвале",
            "grammarFocus": "Action Verbs (carry, lift, pull, open, climb), Adjectives (heavy, light, dark, bright, cold)",
            "wordCount": 382,
            "coverIcon": "fa-dungeon",
            "coverColor": "#64748b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus sits in his big chair in the library. <break time=\"300ms\"/> He looks at a long paper.</prosody></speak>",
                    "en": "Master Corvinus sits in his big chair in the library. He looks at a long paper.",
                    "ru": "Мастер Корвинус сидит в своем большом кресле в библиотеке. Он смотрит на длинную бумагу."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Eldrin and Leo, please come here. <break time=\"300ms\"/> I need your strong young arms. <break time=\"300ms\"/> I have a heavy task.</prosody></speak>",
                    "en": "— Eldrin and Leo, please come here. I need your strong young arms. I have a heavy task.",
                    "ru": "— Элдрин и Лео, подойдите сюда, пожалуйста. Мне нужны ваши сильные молодые руки. У меня тяжелое задание."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes, Master Corvinus! <break time=\"300ms\"/> What can we carry?</prosody></speak>",
                    "en": "— Yes, Master Corvinus! What can we carry?",
                    "ru": "— Да, Мастер Корвинус! Что нам нужно отнести?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— We need three metal lamps for tomorrow morning.</prosody></speak>",
                    "en": "— We need three metal lamps for tomorrow morning.",
                    "ru": "— Нам нужны три металлические лампы на завтрашнее утро."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— They are in the old big tree box in the basement under the north tower.</prosody></speak>",
                    "en": "— They are in the old big tree box in the basement under the north tower.",
                    "ru": "— Они в старом деревянном сундуке в подвале под северной башней."
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— We go now, Master! <break time=\"300ms\"/> We bring all three lamps to the hall.</prosody></speak>",
                    "en": "— We go now, Master! We bring all three lamps to the hall.",
                    "ru": "— Мы идем прямо сейчас, Мастер! Мы принесем все три лампы в зал."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Leo takes a yellow metal lamp from the shelf.</prosody></speak>",
                    "en": "Leo takes a yellow metal lamp from the shelf.",
                    "ru": "Лео берет желтую металлическую лампу с полки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Leo walk to the end of the stone hall. <break time=\"300ms\"/> They open the thick iron door.</prosody></speak>",
                    "en": "Eldrin and Leo walk to the end of the stone hall. They open the thick iron door.",
                    "ru": "Элдрин и Лео идут в конец каменного зала. Они открывают толстую железную дверь."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Cold air comes from the dark steps below. <break time=\"300ms\"/> The boys smell old wood and cold stone.</prosody></speak>",
                    "en": "Cold air comes from the dark steps below. The boys smell old wood and cold stone.",
                    "ru": "Холодный воздух веет от темных ступеней внизу. Мальчики чувствуют запах старого дерева и холодного камня."
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Walk carefully, Eldrin. <break time=\"300ms\"/> The stone steps are cold.</prosody></speak>",
                    "en": "— Walk carefully, Eldrin. The stone steps are cold.",
                    "ru": "— Ступай осторожно, Элдрин. Каменные ступени холодные."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I walk slowly behind you, Leo. <break time=\"300ms\"/> Let us count the steps.</prosody></speak>",
                    "en": "— I walk slowly behind you, Leo. Let us count the steps.",
                    "ru": "— Я иду медленно за тобой, Лео. Давай считать ступени."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They walk down step by step into the quiet room.</prosody></speak>",
                    "en": "They walk down step by step into the quiet room.",
                    "ru": "Они спускаются шаг за шагом в тихую комнату."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— One, two, three, four, five... <break time=\"300ms\"/> ten, eleven, twelve! <break time=\"300ms\"/> Twelve steps down. <break time=\"300ms\"/> We are on the basement floor.</prosody></speak>",
                    "en": "— One, two, three, four, five... ten, eleven, twelve! Twelve steps down. We are on the basement floor.",
                    "ru": "— Один, два, три, четыре, пять... десять, одиннадцать, двенадцать! Двенадцать ступеней вниз. Мы в подвале."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The yellow light makes long shadows on the stone wall.</prosody></speak>",
                    "en": "The yellow light makes long shadows on the stone wall.",
                    "ru": "Желтый свет отбрасывает длинные тени на каменную стену."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Big tree barrels of apples, bags of potatoes, and wood are near the walls.</prosody></speak>",
                    "en": "Big tree barrels of apples, bags of potatoes, and wood are near the walls.",
                    "ru": "Деревянные бочки с яблоками, мешки с картошкой и дрова стоят у стен."
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Look to the right corner! <break time=\"300ms\"/> There is the big tree box!</prosody></speak>",
                    "en": "— Look to the right corner! There is the big tree box!",
                    "ru": "— Посмотри в правый угол! Вон тот деревянный сундук!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They walk to the big tree box. <break time=\"300ms\"/> Thick black iron is on the sides.</prosody></speak>",
                    "en": "They walk to the big tree box. Thick black iron is on the sides.",
                    "ru": "Они подходят к деревянному сундуку. Толстое черное железо оковано по бокам."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— This box is very big! <break time=\"300ms\"/> Let me open the front iron lock.</prosody></speak>",
                    "en": "— This box is very big! Let me open the front iron lock.",
                    "ru": "— Этот сундук очень большой! Дай я открою передний железный замок."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin pulls with both hands. <break time=\"300ms\"/> The iron lock does not open.</prosody></speak>",
                    "en": "Eldrin pulls with both hands. The iron lock does not open.",
                    "ru": "Элдрин тянет обеими руками. Железный замок не открывается."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— The lock is hard! <break time=\"300ms\"/> It is cold here.</prosody></speak>",
                    "en": "— The lock is hard! It is cold here.",
                    "ru": "— Замок тугой! Здесь холодно."
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— We pull together! <break time=\"300ms\"/> Put your left hand here, and I put my right hand there.</prosody></speak>",
                    "en": "— We pull together! Put your left hand here, and I put my right hand there.",
                    "ru": "— Давай тянуть вместе! Положи левую руку сюда, а я положу правую руку туда."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I am ready, Leo! <break time=\"300ms\"/> Count to three!</prosody></speak>",
                    "en": "— I am ready, Leo! Count to three!",
                    "ru": "— Я готов, Лео! Считай до трех!"
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— One... <break time=\"300ms\"/> two... <break time=\"300ms\"/> three... <break time=\"300ms\"/> pull!</prosody></speak>",
                    "en": "— One... two... three... pull!",
                    "ru": "— Раз... два... три... тянем!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The heavy iron lock opens!</prosody></speak>",
                    "en": "The heavy iron lock opens!",
                    "ru": "Тяжелый железный замок открывается!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Leo lift the heavy tree top. <break time=\"300ms\"/> It rests by the stone wall.</prosody></speak>",
                    "en": "Eldrin and Leo lift the heavy tree top. It rests by the stone wall.",
                    "ru": "Элдрин и Лео поднимают тяжелую деревянную крышку. Она упирается в каменную стену."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look inside! <break time=\"300ms\"/> What is under that grey warm blanket?</prosody></speak>",
                    "en": "— Look inside! What is under that grey warm blanket?",
                    "ru": "— Загляни внутрь! Что там под этим серым теплым одеялом?"
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Look! <break time=\"300ms\"/> Three shiny metal lamps!</prosody></speak>",
                    "en": "— Look! Three shiny metal lamps!",
                    "ru": "— Смотри! Три блестящие металлические лампы!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The lamps have clean glass and metal parts.</prosody></speak>",
                    "en": "The lamps have clean glass and metal parts.",
                    "ru": "У ламп чистые стекла и металлические детали."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— They are in good condition! <break time=\"300ms\"/> The glass is fine!</prosody></speak>",
                    "en": "— They are in good condition! The glass is fine!",
                    "ru": "— Они в хорошем состоянии! Стекло целое!"
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— I carry two lamps. <break time=\"300ms\"/> Can you carry the third lamp?</prosody></speak>",
                    "en": "— I carry two lamps. Can you carry the third lamp?",
                    "ru": "— Я понесу две лампы. Сможешь понести третью лампу?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes! <break time=\"300ms\"/> I walk in front with the light.</prosody></speak>",
                    "en": "— Yes! I walk in front with the light.",
                    "ru": "— Да! Я пойду впереди со светом."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They walk up the twelve stone steps carefully. <break time=\"300ms\"/> They step into the warm, bright hall.</prosody></speak>",
                    "en": "They walk up the twelve stone steps carefully. They step into the warm, bright hall.",
                    "ru": "Они осторожно поднимаются по двенадцати каменным ступеням. Они входят в теплый, светлый зал."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good work, boys! <break time=\"300ms\"/> Three fine lamps are ready for our journey. <break time=\"300ms\"/> Put them near the front door.</prosody></speak>",
                    "en": "— Good work, boys! Three fine lamps are ready for our journey. Put them near the front door.",
                    "ru": "— Отличная работа, мальчики! Три прекрасные лампы готовы к нашему путешествию. Поставьте их возле входной двери."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— The work is finished, Master! <break time=\"300ms\"/> Now we have bright light on the road!</prosody></speak>",
                    "en": "— The work is finished, Master! Now we have bright light on the road!",
                    "ru": "— Работа закончена, Мастер! Теперь у нас будет яркий свет в дороге!"
                }
            ],
            "quiz": [
                {
                    "question": "How many stone steps did the boys count going down into the basement?",
                    "options": [
                        "Five steps",
                        "Twelve steps",
                        "Twenty steps",
                        "Fifty steps"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "How did Eldrin and Leo open the heavy iron lock on the box?",
                    "options": [
                        "With a golden key",
                        "They pulled together on the count of three",
                        "Master Corvinus opened it for them",
                        "With a hammer"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What was inside the big box under the grey blanket?",
                    "options": [
                        "Three shiny metal lamps",
                        "Old magical books",
                        "Bags of potatoes and apples",
                        "Dry firewood"
                    ],
                    "correctIdx": 0
                }
            ]
        },
        {
            "id": "eldrin-ch-9",
            "number": 9,
            "act": 1,
            "titleEn": "Episode 9: A Broken Quill & The Art of Sharpening",
            "titleRu": "Эпизод 9: Сломанное перо и искусство заточки",
            "grammarFocus": "Adverbs of Manner (carefully, slowly, smoothly), Crafting Verbs (cut, slice, sharpen, write)",
            "wordCount": 359,
            "coverIcon": "fa-pen-nib",
            "coverColor": "#8b5cf6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin is in the quiet room in the afternoon. <break time=\"300ms\"/> Sunlight comes through the high window.</prosody></speak>",
                    "en": "Eldrin is in the quiet room in the afternoon. Sunlight comes through the high window.",
                    "ru": "Элдрин находится в тихой комнате днем. Солнечный свет проникает через высокое окно."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin sits at the small wood desk. <break time=\"300ms\"/> He writes on clean paper.</prosody></speak>",
                    "en": "Eldrin sits at the small wood desk. He writes on clean paper.",
                    "ru": "Элдрин сидит за маленьким деревянным столом. Он пишет на чистой бумаге."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— \"Number three: five clean sheets of paper...\" I write so carefully today.</prosody></speak>",
                    "en": "— \"Number three: five clean sheets of paper...\" I write so carefully today.",
                    "ru": "— «Номер три: пять чистых листов бумаги...» Я пишу так аккуратно сегодня."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin presses hard on the paper. <break time=\"300ms\"/> The white pen breaks!</prosody></speak>",
                    "en": "Eldrin presses hard on the paper. The white pen breaks!",
                    "ru": "Элдрин сильно нажимает на бумагу. Белое перо ломается!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Black color falls from the broken pen. <break time=\"300ms\"/> It makes a dirty mark on the bottom corner of the paper.</prosody></speak>",
                    "en": "Black color falls from the broken pen. It makes a dirty mark on the bottom corner of the paper.",
                    "ru": "Черная краска капает со сломанного пера. Она оставляет грязное пятно в нижнем углу бумаги."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Oh no! <break time=\"300ms\"/> My white pen is broken! <break time=\"300ms\"/> It is dirty and bad now.</prosody></speak>",
                    "en": "— Oh no! My white pen is broken! It is dirty and bad now.",
                    "ru": "— О нет! Мое белое перо сломано! Теперь оно испорчено и испачкано."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin checks his wood box. <break time=\"300ms\"/> He has no other pens inside.</prosody></speak>",
                    "en": "Eldrin checks his wood box. He has no other pens inside.",
                    "ru": "Элдрин проверяет свою деревянную коробочку. Внутри нет других перьев."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I do not have another pen.</prosody></speak>",
                    "en": "— I do not have another pen.",
                    "ru": "— У меня нет другого пера."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus walks from the shelf. <break time=\"300ms\"/> He sits on the wood chair next to Eldrin.</prosody></speak>",
                    "en": "Master Corvinus walks from the shelf. He sits on the wood chair next to Eldrin.",
                    "ru": "Мастер Корвинус подходит от полки. Он садится на деревянный стул рядом с Элдрином."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— A true student knows his tools. <break time=\"300ms\"/> You can fix and sharpen your pen.</prosody></speak>",
                    "en": "— A true student knows his tools. You can fix and sharpen your pen.",
                    "ru": "— Настоящий ученик знает свои инструменты. Ты можешь починить и заточить свое перо."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Can we fix this broken pen, Master?</prosody></speak>",
                    "en": "— Can we fix this broken pen, Master?",
                    "ru": "— Мы можем починить это сломанное перо, Мастер?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Yes! <break time=\"300ms\"/> Watch and learn. <break time=\"300ms\"/> I will teach you the art of cutting a pen.</prosody></speak>",
                    "en": "— Yes! Watch and learn. I will teach you the art of cutting a pen.",
                    "ru": "— Да! Смотри и учись. Я научу тебя искусству затачивать перо."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The master takes a small knife from his pocket. <break time=\"300ms\"/> It is a silver knife.</prosody></speak>",
                    "en": "The master takes a small knife from his pocket. It is a silver knife.",
                    "ru": "Мастер достает из кармана маленький ножик. Это серебряный ножик."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— This knife is steel. <break time=\"300ms\"/> It is very sharp.</prosody></speak>",
                    "en": "— This knife is steel. It is very sharp.",
                    "ru": "— Этот нож стальной. Он очень острый."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step one: Hold the pen in your left hand.</prosody></speak>",
                    "en": "— Step one: Hold the pen in your left hand.",
                    "ru": "— Шаг первый: держи перо в левой руке."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step two: Put the sharp knife on the pen.</prosody></speak>",
                    "en": "— Step two: Put the sharp knife on the pen.",
                    "ru": "— Шаг второй: приложи острый нож к перу."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The master cuts the bad part of the pen.</prosody></speak>",
                    "en": "The master cuts the bad part of the pen.",
                    "ru": "Мастер срезает поврежденную часть пера."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step three: Make a small cut in the center.</prosody></speak>",
                    "en": "— Step three: Make a small cut in the center.",
                    "ru": "— Шаг третий: сделай небольшой надрез по центру."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Why do we make a cut in the center, Master?</prosody></speak>",
                    "en": "— Why do we make a cut in the center, Master?",
                    "ru": "— Почему мы делаем надрез по центру, Мастер?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The cut carries the black color smoothly to the paper.</prosody></speak>",
                    "en": "— The cut carries the black color smoothly to the paper.",
                    "ru": "— Этот надрез плавно проводит чернила на бумагу."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step four: Cut the left side and the right side. <break time=\"300ms\"/> Make the point thin and sharp.</prosody></speak>",
                    "en": "— Step four: Cut the left side and the right side. Make the point thin and sharp.",
                    "ru": "— Шаг четвертый: подрежь левую и правую стороны. Сделай кончик тонким и острым."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus gives the pen and the silver knife to Eldrin.</prosody></speak>",
                    "en": "Master Corvinus gives the pen and the silver knife to Eldrin.",
                    "ru": "Мастер Корвинус отдает перо и серебряный ножик Элдрину."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Now it is your turn. <break time=\"300ms\"/> Test your pen on this scrap piece of paper.</prosody></speak>",
                    "en": "— Now it is your turn. Test your pen on this scrap piece of paper.",
                    "ru": "— Теперь твоя очередь. Проверь перо на этом черновом клочке бумаги."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin puts the new pen tip into the black ink.</prosody></speak>",
                    "en": "Eldrin puts the new pen tip into the black ink.",
                    "ru": "Элдрин макает новый кончик пера в черные чернила."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He writes three words on the paper: \"Knowledge is Light.\"</prosody></speak>",
                    "en": "He writes three words on the paper: \"Knowledge is Light.\"",
                    "ru": "Он пишет три слова на бумаге: «Знание — это Свет»."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— It writes so well! <break time=\"300ms\"/> The lines are thin and beautiful.</prosody></speak>",
                    "en": "— It writes so well! The lines are thin and beautiful.",
                    "ru": "— Оно пишет так хорошо! Линии тонкие и красивые."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Great! <break time=\"300ms\"/> You have a steady hand, Eldrin.</prosody></speak>",
                    "en": "— Great! You have a steady hand, Eldrin.",
                    "ru": "— Отлично! У тебя твердая рука, Элдрин."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Keep this silver knife in your bag. <break time=\"300ms\"/> A good student is always ready.</prosody></speak>",
                    "en": "— Keep this silver knife in your bag. A good student is always ready.",
                    "ru": "— Храни этот серебряный ножик в своей сумке. Хороший ученик всегда готов."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Is this knife a gift for me? <break time=\"300ms\"/> Thank you, Master Corvinus!</prosody></speak>",
                    "en": "— Is this knife a gift for me? Thank you, Master Corvinus!",
                    "ru": "— Этот ножик — подарок для меня? Спасибо, Мастер Корвинус!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin puts the pen and the silver knife in his bag.</prosody></speak>",
                    "en": "Eldrin puts the pen and the silver knife in his bag.",
                    "ru": "Элдрин кладет перо и серебряный ножик в свою сумку."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Now I will finish the master's list with my new pen!</prosody></speak>",
                    "en": "— Now I will finish the master's list with my new pen!",
                    "ru": "— Теперь я закончу список мастера своим новым пером!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He writes with a happy smile on his face.</prosody></speak>",
                    "en": "He writes with a happy smile on his face.",
                    "ru": "Он пишет со счастливой улыбкой на лице."
                }
            ],
            "quiz": [
                {
                    "question": "What happened when Eldrin pressed hard on the paper?",
                    "options": [
                        "The wooden desk broke",
                        "The white pen broke",
                        "The ink bottle spilled",
                        "The chair fell over"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why did Master Corvinus say they make a cut in the center of the pen?",
                    "options": [
                        "To make the pen shorter",
                        "To carry the ink smoothly to the paper",
                        "To make the pen fit into the pocket",
                        "To clean the old wood"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What words did Eldrin write on the paper to test his new pen tip?",
                    "options": [
                        "\"Knowledge is Light.\"",
                        "\"Good morning, Master.\"",
                        "\"Five sheets of paper.\"",
                        "\"The Spire is tall.\""
                    ],
                    "correctIdx": 0
                }
            ]
        },
        {
            "id": "eldrin-ch-10",
            "number": 10,
            "act": 1,
            "titleEn": "Episode 10: Packing the Bags for Tomorrow's Journey",
            "titleRu": "Эпизод 10: Сборы в дорогу на завтра",
            "grammarFocus": "Checklist Vocabulary (backpack, coins, canteen, map), Modal Verbs (must, should, can), Future Plans",
            "wordCount": 310,
            "coverIcon": "fa-suitcase-rolling",
            "coverColor": "#f59e0b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is seven o'clock in the evening at the academy. <break time=\"300ms\"/> The sky outside is blue.</prosody></speak>",
                    "en": "It is seven o'clock in the evening at the academy. The sky outside is blue.",
                    "ru": "Семь часов вечера в академии. Небо снаружи синее."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Inside the bedroom, three lamps give bright light on the big wood table.</prosody></speak>",
                    "en": "Inside the bedroom, three lamps give bright light on the big wood table.",
                    "ru": "Внутри спальни три лампы ярко освещают большой деревянный стол."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin, Leo, and Kira sit on chairs at the table with three bags.</prosody></speak>",
                    "en": "Eldrin, Leo, and Kira sit on chairs at the table with three bags.",
                    "ru": "Элдрин, Лео и Кира сидят на стульях за столом с тремя сумками."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Tomorrow is an important day! <break time=\"300ms\"/> Let us check our plan!</prosody></speak>",
                    "en": "— Tomorrow is an important day! Let us check our plan!",
                    "ru": "— Завтра важный день! Давайте проверим наш план!"
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Yes! <break time=\"300ms\"/> We cannot forget anything important when we go to the town.</prosody></speak>",
                    "en": "— Yes! We cannot forget anything important when we go to the town.",
                    "ru": "— Да! Мы не должны забыть ничего важного, когда отправимся в город."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I have the shopping list from the master. <break time=\"300ms\"/> Let us check each thing!</prosody></speak>",
                    "en": "— I have the shopping list from the master. Let us check each thing!",
                    "ru": "— У меня список покупок от мастера. Давайте проверим каждую вещь!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— In my brown bag, I have money. <break time=\"300ms\"/> I have twenty coins.</prosody></speak>",
                    "en": "— In my brown bag, I have money. I have twenty coins.",
                    "ru": "— В моей коричневой сумке деньги. У меня двадцать монет."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Good! <break time=\"300ms\"/> Do you have your notebook and your pen?</prosody></speak>",
                    "en": "— Good! Do you have your notebook and your pen?",
                    "ru": "— Хорошо! А блокнот и перо у тебя с собой?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes! <break time=\"300ms\"/> My green notebook, the pen, and a black bottle are in the bag.</prosody></speak>",
                    "en": "— Yes! My green notebook, the pen, and a black bottle are in the bag.",
                    "ru": "— Да! Мой зеленый блокнот, перо и черная бутылочка лежат в сумке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And I also have the small silver knife in the side pocket.</prosody></speak>",
                    "en": "— And I also have the small silver knife in the side pocket.",
                    "ru": "— И еще у меня маленький серебряный ножик в боковом кармане."
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Great! <break time=\"300ms\"/> Your bag is ready.</prosody></speak>",
                    "en": "— Great! Your bag is ready.",
                    "ru": "— Отлично! Твоя сумка готова."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— What about our food, Leo? <break time=\"300ms\"/> What is in your green bag?</prosody></speak>",
                    "en": "— What about our food, Leo? What is in your green bag?",
                    "ru": "— А как насчет еды, Лео? Что в твоей зеленой сумке?"
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— I have four fresh red apples, fresh bread, and yellow cheese.</prosody></speak>",
                    "en": "— I have four fresh red apples, fresh bread, and yellow cheese.",
                    "ru": "— У меня четыре свежих красных яблока, свежий хлеб и желтый сыр."
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— And I have cold fresh water in a large bottle.</prosody></speak>",
                    "en": "— And I have cold fresh water in a large bottle.",
                    "ru": "— И у меня холодная свежая вода в большой бутылке."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Wonderful! <break time=\"300ms\"/> We are not hungry or thirsty on the long road.</prosody></speak>",
                    "en": "— Wonderful! We are not hungry or thirsty on the long road.",
                    "ru": "— Замечательно! Мы не будем голодными или испытывать жажду в дальней дороге."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And what do you have in your grey bag, Kira?</prosody></speak>",
                    "en": "— And what do you have in your grey bag, Kira?",
                    "ru": "— А что у тебя в серой сумке, Кира?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I have a map of the town.</prosody></speak>",
                    "en": "— I have a map of the town.",
                    "ru": "— У меня карта города."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I also have long rope for the cart.</prosody></speak>",
                    "en": "— I also have long rope for the cart.",
                    "ru": "— Также у меня длинная веревка для повозки."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— And I have my warm cloak for the cold wind in the mountains.</prosody></speak>",
                    "en": "— And I have my warm cloak for the cold wind in the mountains.",
                    "ru": "— И у меня мой теплый плащ от холодного ветра в горах."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The three bags are ready by the door.</prosody></speak>",
                    "en": "The three bags are ready by the door.",
                    "ru": "Три сумки готовы возле двери."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— When does the man come with the horse?</prosody></speak>",
                    "en": "— When does the man come with the horse?",
                    "ru": "— Когда приедет человек с лошадью?"
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— At six o'clock in the morning!</prosody></speak>",
                    "en": "— At six o'clock in the morning!",
                    "ru": "— В шесть часов утра!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— We must wake up early, wash our face, and put on our boots before the sun comes!</prosody></speak>",
                    "en": "— We must wake up early, wash our face, and put on our boots before the sun comes!",
                    "ru": "— Мы должны проснуться рано, умыться и надеть сапоги до восхода солнца!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I am happy about this trip! <break time=\"300ms\"/> I want to see the town and the books!</prosody></speak>",
                    "en": "— I am happy about this trip! I want to see the town and the books!",
                    "ru": "— Я так рад этой поездке! Хочу увидеть город и книги!"
                },
                {
                    "speaker": "leo",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— We all do! <break time=\"300ms\"/> But now we must sleep!</prosody></speak>",
                    "en": "— We all do! But now we must sleep!",
                    "ru": "— Мы все тоже! Но сейчас нам нужно спать!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Good night, Eldrin! <break time=\"300ms\"/> Good night, Leo! <break time=\"300ms\"/> See you in the morning!</prosody></speak>",
                    "en": "— Good night, Eldrin! Good night, Leo! See you in the morning!",
                    "ru": "— Спокойной ночи, Элдрин! Спокойной ночи, Лео! Увидимся утром!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good night, Kira! <break time=\"300ms\"/> Sleep well!</prosody></speak>",
                    "en": "— Good night, Kira! Sleep well!",
                    "ru": "— Спокойной ночи, Кира! Приятных снов!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira goes to her room. <break time=\"300ms\"/> Eldrin and Leo close the lights.</prosody></speak>",
                    "en": "Kira goes to her room. Eldrin and Leo close the lights.",
                    "ru": "Кира идет в свою комнату. Элдрин и Лео гасят свет."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The bedroom is dark and quiet. <break time=\"300ms\"/> Tomorrow is a big adventure!</prosody></speak>",
                    "en": "The bedroom is dark and quiet. Tomorrow is a big adventure!",
                    "ru": "В спальне темно и тихо. Завтра — большое приключение!"
                }
            ],
            "quiz": [
                {
                    "question": "What food and drinks did Leo pack in his green bag?",
                    "options": [
                        "Meat, milk, and tea",
                        "Four fresh red apples, fresh bread, yellow cheese, and water",
                        "Strawberry jam and warm soup",
                        "Potatoes and sugar"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What useful items did Kira pack in her grey bag?",
                    "options": [
                        "A town map, long rope for the cart, and a warm cloak",
                        "A silver knife and three metal lamps",
                        "Ten clay flower pots",
                        "Old heavy books"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "At what time does the man with the horse arrive tomorrow morning?",
                    "options": [
                        "At four o'clock in the afternoon",
                        "At six o'clock in the morning",
                        "At nine o'clock in the evening",
                        "At midnight"
                    ],
                    "correctIdx": 1
                }
            ]
        },
        {
            "id": "eldrin-ch-11",
            "number": 11,
            "act": 2,
            "titleEn": "Episode 11: The Morning Cart Ride Down the Mountain",
            "titleRu": "Эпизод 11: Утренняя поездка на повозке с горы",
            "grammarFocus": "Present Continuous & Motion Verbs (ride, roll, turn, look, slow down), Travel Vocabulary",
            "wordCount": 390,
            "coverIcon": "fa-horse-head",
            "coverColor": "#10b981",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is half past five in the morning. <break time=\"300ms\"/> The sun is shining on the stone walls of the Spire.</prosody></speak>",
                    "en": "It is half past five in the morning. The sun is shining on the stone walls of the Spire.",
                    "ru": "Половина шестого утра. Солнце светит на каменные стены Шпиля."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira stand near a big door. <break time=\"300ms\"/> They have bags on their shoulders.</prosody></speak>",
                    "en": "Eldrin and Kira stand near a big door. They have bags on their shoulders.",
                    "ru": "Элдрин и Кира стоят возле большой двери. У них сумки на плечах."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus walks to them. <break time=\"300ms\"/> He has a staff in his hand.</prosody></speak>",
                    "en": "Master Corvinus walks to them. He has a staff in his hand.",
                    "ru": "Мастер Корвинус идет к ним. У него в руке посох."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning! <break time=\"300ms\"/> You are ready. <break time=\"300ms\"/> You are punctual. <break time=\"300ms\"/> Look! <break time=\"300ms\"/> Our ride is here!</prosody></speak>",
                    "en": "— Good morning! You are ready. You are punctual. Look! Our ride is here!",
                    "ru": "— Доброе утро! Вы готовы. Вы пунктуальны. Смотрите! Наш транспорт здесь!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The big door opens. <break time=\"300ms\"/> A vehicle comes to the yard.</prosody></speak>",
                    "en": "The big door opens. A vehicle comes to the yard.",
                    "ru": "Большая дверь открывается. Во двор въезжает повозка."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Barnaby is a driver. <break time=\"300ms\"/> He sits on the vehicle. <break time=\"300ms\"/> He wears a brown coat and a hat.</prosody></speak>",
                    "en": "Barnaby is a driver. He sits on the vehicle. He wears a brown coat and a hat.",
                    "ru": "Барнаби — возница. Он сидит на повозке. На нем коричневое пальто и шляпа."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Good morning, students! <break time=\"300ms\"/> Meet my two brown horses. <break time=\"300ms\"/> Their names are White flower and Small green plant!</prosody></speak>",
                    "en": "— Good morning, students! Meet my two brown horses. Their names are White flower and Small green plant!",
                    "ru": "— Доброе утро, ученики! Познакомьтесь с моими двумя гнедыми лошадьми. Их зовут Белый Цветок и Маленький Зеленый Росток!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good morning, Barnaby! <break time=\"300ms\"/> The horses have brown hair and brown eyes.</prosody></speak>",
                    "en": "— Good morning, Barnaby! The horses have brown hair and brown eyes.",
                    "ru": "— Доброе утро, Барнаби! У лошадей коричневая шерсть и карие глаза."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Barnaby, can I touch White flower's nose before we go in the vehicle?</prosody></speak>",
                    "en": "— Barnaby, can I touch White flower's nose before we go in the vehicle?",
                    "ru": "— Барнаби, можно мне потрогать нос Белого Цветка, прежде чем мы сядем в повозку?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Yes, young lady! <break time=\"300ms\"/> White flower likes soft hands. <break time=\"300ms\"/> Give her this piece of sweet apple.</prosody></speak>",
                    "en": "— Yes, young lady! White flower likes soft hands. Give her this piece of sweet apple.",
                    "ru": "— Да, барышня! Белый Цветок любит нежные руки. Дай ей этот кусочек сладкого яблока."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">White flower eats the apple from Kira's hand. <break time=\"300ms\"/> White flower is happy.</prosody></speak>",
                    "en": "White flower eats the apple from Kira's hand. White flower is happy.",
                    "ru": "Белый Цветок ест яблоко из руки Киры. Белый Цветок счастлива."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Children, climb into the vehicle. <break time=\"300ms\"/> Sit down. <break time=\"300ms\"/> It is clean.</prosody></speak>",
                    "en": "— Children, climb into the vehicle. Sit down. It is clean.",
                    "ru": "— Дети, залезайте в повозку. Садитесь. Здесь чисто."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira climb into the vehicle. <break time=\"300ms\"/> The seat is soft.</prosody></speak>",
                    "en": "Eldrin and Kira climb into the vehicle. The seat is soft.",
                    "ru": "Элдрин и Кира забираются в повозку. Сиденье мягкое."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Everyone, sit down! <break time=\"300ms\"/> Go, White flower! <break time=\"300ms\"/> Go, Small green plant!</prosody></speak>",
                    "en": "— Everyone, sit down! Go, White flower! Go, Small green plant!",
                    "ru": "— Все садитесь! Вперед, Белый Цветок! Вперед, Маленький Зеленый Росток!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Clip-clop, clip-clop! <break time=\"300ms\"/> The horses have iron shoes. <break time=\"300ms\"/> They walk on the stone road.</prosody></speak>",
                    "en": "Clip-clop, clip-clop! The horses have iron shoes. They walk on the stone road.",
                    "ru": "Цок-цок, цок-цок! У лошадей железные подковы. Они идут по каменной дороге."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The vehicle goes down the mountain slowly.</prosody></speak>",
                    "en": "The vehicle goes down the mountain slowly.",
                    "ru": "Повозка медленно едет вниз по горе."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look, Eldrin! <break time=\"300ms\"/> Look at the big green valley below us!</prosody></speak>",
                    "en": "— Look, Eldrin! Look at the big green valley below us!",
                    "ru": "— Посмотри, Элдрин! Посмотри на большую зеленую долину под нами!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Wow! <break time=\"300ms\"/> White fog is over the river, like a blanket!</prosody></speak>",
                    "en": "— Wow! White fog is over the river, like a blanket!",
                    "ru": "— Вау! Белый туман над рекой, словно одеяло!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The morning air is fresh and cool. <break time=\"300ms\"/> This air is healthy, children.</prosody></speak>",
                    "en": "— The morning air is fresh and cool. This air is healthy, children.",
                    "ru": "— Утренний воздух свежий и прохладный. Этот воздух полезен для здоровья, дети."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Barnaby, how many minutes to the valley?</prosody></speak>",
                    "en": "— Barnaby, how many minutes to the valley?",
                    "ru": "— Барнаби, сколько минут ехать до долины?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— About thirty minutes down the mountain, my boy! <break time=\"300ms\"/> The road is good.</prosody></speak>",
                    "en": "— About thirty minutes down the mountain, my boy! The road is good.",
                    "ru": "— Около тридцати минут вниз с горы, мой мальчик! Дорога хорошая."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Tall green trees stand on both sides of the road, like guards.</prosody></speak>",
                    "en": "Tall green trees stand on both sides of the road, like guards.",
                    "ru": "Высокие зеленые деревья стоят по обе стороны дороги, словно стражи."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They ride down. <break time=\"300ms\"/> The bright sun warms the valley. <break time=\"300ms\"/> The white fog goes away.</prosody></speak>",
                    "en": "They ride down. The bright sun warms the valley. The white fog goes away.",
                    "ru": "Они едут вниз. Яркое солнце согревает долину. Белый туман рассеивается."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Listen! <break time=\"300ms\"/> I can hear a sound from the town!</prosody></speak>",
                    "en": "— Listen! I can hear a sound from the town!",
                    "ru": "— Послушай! Я слышу звук из города!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look! <break time=\"300ms\"/> I can see red clay roofs and stone chimneys between the trees!</prosody></speak>",
                    "en": "— Look! I can see red clay roofs and stone chimneys between the trees!",
                    "ru": "— Посмотри! Я вижу крыши из красной глины и каменные дымоходы между деревьями!"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— That is the town! <break time=\"300ms\"/> On market days, merchants come from far away.</prosody></speak>",
                    "en": "— That is the town! On market days, merchants come from far away.",
                    "ru": "— Это город! В базарные дни торговцы приезжают издалека."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Children, get ready. <break time=\"300ms\"/> We are near the big walls.</prosody></speak>",
                    "en": "— Children, get ready. We are near the big walls.",
                    "ru": "— Дети, приготовьтесь. Мы уже возле больших стен."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The road is straight now. <break time=\"300ms\"/> They reach the valley. <break time=\"300ms\"/> Big grey stone walls are there.</prosody></speak>",
                    "en": "The road is straight now. They reach the valley. Big grey stone walls are there.",
                    "ru": "Дорога теперь прямая. Они добираются до долины. Там стоят большие серые каменные стены."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at the big doors with iron! <break time=\"300ms\"/> The town looks like a big castle!</prosody></speak>",
                    "en": "— Look at the big doors with iron! The town looks like a big castle!",
                    "ru": "— Посмотри на большие ворота с железом! Город выглядит как большой замок!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I am happy! <break time=\"300ms\"/> Our market day is beginning!</prosody></speak>",
                    "en": "— I am happy! Our market day is beginning!",
                    "ru": "— Я счастлива! Наш базарный день начинается!"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Whoa, White flower! <break time=\"300ms\"/> Whoa, Small green plant! <break time=\"300ms\"/> Go slow near the door!</prosody></speak>",
                    "en": "— Whoa, White flower! Whoa, Small green plant! Go slow near the door!",
                    "ru": "— Тпру, Белый Цветок! Тпру, Маленький Зеленый Росток! Потише возле ворот!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The horses slow down. <break time=\"300ms\"/> They walk. <break time=\"300ms\"/> They stop before the big stone door.</prosody></speak>",
                    "en": "The horses slow down. They walk. They stop before the big stone door.",
                    "ru": "Лошади замедляют шаг. Они идут шагом. Они останавливаются перед большой каменной дверью."
                }
            ],
            "quiz": [
                {
                    "question": "What are the names of Farmer Barnaby's two brown horses?",
                    "options": [
                        "Sun and Moon",
                        "White flower and Small green plant",
                        "Red Apple and Green Leaf",
                        "River and Stone"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "How long does Farmer Barnaby say it takes to drive down to the valley?",
                    "options": [
                        "About five minutes",
                        "About thirty minutes",
                        "Two hours",
                        "All day long"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What did Eldrin see between the trees as they approached the town?",
                    "options": [
                        "Red clay roofs and stone chimneys",
                        "Tall mountain guards",
                        "A burning fireplace",
                        "Big wooden boxes"
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
            "grammarFocus": "Formal Inquiries (May I see...?), City Rules & Warnings, Modal Verbs",
            "wordCount": 316,
            "coverIcon": "fa-shield-halved",
            "coverColor": "#3b82f6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The vehicle stops before the big stone door. <break time=\"300ms\"/> This is the North Gate.</prosody></speak>",
                    "en": "The vehicle stops before the big stone door. This is the North Gate.",
                    "ru": "Повозка останавливается перед большой каменной дверью. Это Северные Ворота."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Two tall guards stand there. <break time=\"300ms\"/> They wear iron clothes and iron hats.</prosody></speak>",
                    "en": "Two tall guards stand there. They wear iron clothes and iron hats.",
                    "ru": "Там стоят два высоких стражника. На них железная броня и железные шлемы."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They hold long spears in their hands.</prosody></speak>",
                    "en": "They hold long spears in their hands.",
                    "ru": "Они держат в руках длинные копья."
                },
                {
                    "speaker": "guard",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— Stop, friends! <break time=\"300ms\"/> Welcome to the town. <break time=\"300ms\"/> What is your name? <break time=\"300ms\"/> What is your business?</prosody></speak>",
                    "en": "— Stop, friends! Welcome to the town. What is your name? What is your business?",
                    "ru": "— Стойте, друзья! Добро пожаловать в город. Как вас зовут? С какой вы целью?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Good morning! <break time=\"300ms\"/> I have Master Corvinus and two students from the Academy.</prosody></speak>",
                    "en": "— Good morning! I have Master Corvinus and two students from the Academy.",
                    "ru": "— Доброе утро! Со мной Мастер Корвинус и двое учеников из Академии."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning. <break time=\"300ms\"/> We want to buy things at the market.</prosody></speak>",
                    "en": "— Good morning. We want to buy things at the market.",
                    "ru": "— Доброе утро. Мы хотим купить кое-какие вещи на рынке."
                },
                {
                    "speaker": "guard",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— Ah, Master Corvinus! <break time=\"300ms\"/> Nice to see you. <break time=\"300ms\"/> Can I see your paper, please?</prosody></speak>",
                    "en": "— Ah, Master Corvinus! Nice to see you. Can I see your paper, please?",
                    "ru": "— А, Мастер Корвинус! Рад вас видеть. Могу я взглянуть на ваш документ, пожалуйста?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Eldrin, my boy, you have the paper in your bag.</prosody></speak>",
                    "en": "— Eldrin, my boy, you have the paper in your bag.",
                    "ru": "— Элдрин, мой мальчик, документ у тебя в сумке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes, Master! <break time=\"300ms\"/> Here it is!</prosody></speak>",
                    "en": "— Yes, Master! Here it is!",
                    "ru": "— Да, Мастер! Вот он!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin opens his bag. <break time=\"300ms\"/> He takes out the paper.</prosody></speak>",
                    "en": "Eldrin opens his bag. He takes out the paper.",
                    "ru": "Элдрин открывает сумку. Он достает документ."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here is our paper, guard. <break time=\"300ms\"/> It has a red owl mark.</prosody></speak>",
                    "en": "— Here is our paper, guard. It has a red owl mark.",
                    "ru": "— Вот наш документ, стражник. На нем знак красной совы."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The guard takes the paper. <break time=\"300ms\"/> He looks at the red mark.</prosody></speak>",
                    "en": "The guard takes the paper. He looks at the red mark.",
                    "ru": "Стражник берет документ. Он смотрит на красный знак."
                },
                {
                    "speaker": "guard",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— The mark is good. <break time=\"300ms\"/> I will stamp your paper for today.</prosody></speak>",
                    "en": "— The mark is good. I will stamp your paper for today.",
                    "ru": "— Знак подлинный. Я поставлю штамп на ваш документ на сегодня."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The guard walks to the table. <break time=\"300ms\"/> He puts a metal stamp into purple ink.</prosody></speak>",
                    "en": "The guard walks to the table. He puts a metal stamp into purple ink.",
                    "ru": "Стражник идет к столу. Он макает металлический штамп в фиолетовые чернила."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Thump! <break time=\"300ms\"/> He puts the stamp on the paper.</prosody></speak>",
                    "en": "Thump! He puts the stamp on the paper.",
                    "ru": "Бум! Он ставит штамп на бумагу."
                },
                {
                    "speaker": "guard",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— Here is your paper, Eldrin. <break time=\"300ms\"/> Keep it in your pocket until evening.</prosody></speak>",
                    "en": "— Here is your paper, Eldrin. Keep it in your pocket until evening.",
                    "ru": "— Вот твой документ, Элдрин. Держи его в кармане до вечера."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you very much! <break time=\"300ms\"/> I will keep it in my pocket.</prosody></speak>",
                    "en": "— Thank you very much! I will keep it in my pocket.",
                    "ru": "— Большое спасибо! Я буду держать его в кармане."
                },
                {
                    "speaker": "guard",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— Listen, students: The market is very busy today.</prosody></speak>",
                    "en": "— Listen, students: The market is very busy today.",
                    "ru": "— Послушайте, ученики: рынок сегодня очень оживленный."
                },
                {
                    "speaker": "guard",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— Watch the carts. <break time=\"300ms\"/> Keep your money close. <break time=\"300ms\"/> Stay together.</prosody></speak>",
                    "en": "— Watch the carts. Keep your money close. Stay together.",
                    "ru": "— Берегитесь повозок. Держите деньги ближе к себе. Держитесь вместе."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Thank you, guard! <break time=\"300ms\"/> We will stay near Master Corvinus.</prosody></speak>",
                    "en": "— Thank you, guard! We will stay near Master Corvinus.",
                    "ru": "— Спасибо, стражник! Мы будем держаться рядом с Мастером Корвинусом."
                },
                {
                    "speaker": "guard",
                    "voice": "Fenrir",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— Open the door for the Academy vehicle! <break time=\"300ms\"/> Let them go!</prosody></speak>",
                    "en": "— Open the door for the Academy vehicle! Let them go!",
                    "ru": "— Откройте ворота для повозки Академии! Пропустите их!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Clank! <break time=\"300ms\"/> Rattle! <break time=\"300ms\"/> Two guards turn big iron wheels on the wall.</prosody></speak>",
                    "en": "Clank! Rattle! Two guards turn big iron wheels on the wall.",
                    "ru": "Лязг! Грохот! Двое стражников крутят большие железные колеса на стене."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Iron chains pull the big door up.</prosody></speak>",
                    "en": "Iron chains pull the big door up.",
                    "ru": "Железные цепи тянут большую дверь вверх."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Go, White flower! <break time=\"300ms\"/> Go, Small green plant! <break time=\"300ms\"/> We go through the door!</prosody></speak>",
                    "en": "— Go, White flower! Go, Small green plant! We go through the door!",
                    "ru": "— Вперед, Белый Цветок! Вперед, Маленький Зеленый Росток! Проезжаем через ворота!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The vehicle goes over the bridge and under the stone gate.</prosody></speak>",
                    "en": "The vehicle goes over the bridge and under the stone gate.",
                    "ru": "Повозка проезжает по мосту и под каменными воротами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Now they can see and hear the town!</prosody></speak>",
                    "en": "Now they can see and hear the town!",
                    "ru": "Теперь они могут видеть и слышать город!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at the colorful signs, the tall stone houses, and the stone streets!</prosody></speak>",
                    "en": "— Look at the colorful signs, the tall stone houses, and the stone streets!",
                    "ru": "— Посмотри на красочные вывески, высокие каменные дома и мощеные улицы!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Smell the air! <break time=\"300ms\"/> It smells like nuts, bread, and sweet honey!</prosody></speak>",
                    "en": "— Smell the air! It smells like nuts, bread, and sweet honey!",
                    "ru": "— Вдохни этот воздух! Пахнет орехами, хлебом и сладким медом!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Welcome to the town, my young friends! <break time=\"300ms\"/> Let's start our market day!</prosody></speak>",
                    "en": "— Welcome to the town, my young friends! Let's start our market day!",
                    "ru": "— Добро пожаловать в город, мои юные друзья! Начнем наш базарный день!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Barnaby drives the horses down the street to the town square.</prosody></speak>",
                    "en": "Barnaby drives the horses down the street to the town square.",
                    "ru": "Барнаби правит лошадьми вниз по улице к городской площади."
                }
            ],
            "quiz": [
                {
                    "question": "What mark was on Eldrin's Academy paper?",
                    "options": [
                        "A gold crown mark",
                        "A red owl mark",
                        "A green leaf mark",
                        "A silver star mark"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What advice did the city guard give to the students?",
                    "options": [
                        "To run quickly to the library",
                        "To watch the carts, keep money close, and stay together",
                        "To buy three green hats",
                        "To wait outside until evening"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What delicious smells did Kira notice when they entered the town?",
                    "options": [
                        "Nuts, bread, and sweet honey",
                        "Bitter tea and medicine",
                        "Hot stone and cold water",
                        "Apples and green grass"
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
            "grammarFocus": "Shopping & Buying Phrases (How much is...?, Here are four coins), Numbers & Prices, Food Vocabulary",
            "wordCount": 338,
            "coverIcon": "fa-bread-slice",
            "coverColor": "#f59e0b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The vehicle stops near the market.</prosody></speak>",
                    "en": "The vehicle stops near the market.",
                    "ru": "Повозка останавливается возле рынка."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira jump down onto the stone street.</prosody></speak>",
                    "en": "Eldrin and Kira jump down onto the stone street.",
                    "ru": "Элдрин и Кира спрыгивают на каменную улицу."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A good smell fills the street. <break time=\"300ms\"/> It smells like bread.</prosody></speak>",
                    "en": "A good smell fills the street. It smells like bread.",
                    "ru": "Приятный аромат наполняет улицу. Пахнет хлебом."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Mmm! <break time=\"300ms\"/> That smell is amazing! <break time=\"300ms\"/> My nose wants to go this way!</prosody></speak>",
                    "en": "— Mmm! That smell is amazing! My nose wants to go this way!",
                    "ru": "— Ммм! Этот запах потрясающий! Мой нос прямо тянется в эту сторону!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look at that shop! <break time=\"300ms\"/> It has a red and white cloth!</prosody></speak>",
                    "en": "— Look at that shop! It has a red and white cloth!",
                    "ru": "— Посмотри на ту лавку! У нее красно-белый навес!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">There is a picture of bread on the sign above the shop.</prosody></speak>",
                    "en": "There is a picture of bread on the sign above the shop.",
                    "ru": "На вывеске над лавкой нарисован хлеб."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A baker, Hans, stands behind the table. <break time=\"300ms\"/> He wears white clothes.</prosody></speak>",
                    "en": "A baker, Hans, stands behind the table. He wears white clothes.",
                    "ru": "Пекарь Ганс стоит за столом. На нем белая одежда."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He takes bread from the fire with a tool.</prosody></speak>",
                    "en": "He takes bread from the fire with a tool.",
                    "ru": "Он достает хлеб из печи с помощью лопатки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The bread is brown and hot. <break time=\"300ms\"/> It has salt on top.</prosody></speak>",
                    "en": "The bread is brown and hot. It has salt on top.",
                    "ru": "Хлеб румяный и горячий. Сверху он посыпан солью."
                },
                {
                    "speaker": "baker",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">— Good morning, young friends! <break time=\"300ms\"/> Fresh bread from the fire, five minutes ago!</prosody></speak>",
                    "en": "— Good morning, young friends! Fresh bread from the fire, five minutes ago!",
                    "ru": "— Доброе утро, юные друзья! Свежий хлеб прямо из печи, всего пять минут назад!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning, Master Hans. <break time=\"300ms\"/> Your shop always smells the best in this country.</prosody></speak>",
                    "en": "— Good morning, Master Hans. Your shop always smells the best in this country.",
                    "ru": "— Доброе утро, мастер Ганс. В вашей лавке всегда самые лучшие запахи в этой округе."
                },
                {
                    "speaker": "baker",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">— Ah, Master Corvinus! <break time=\"300ms\"/> Nice to see you! <break time=\"300ms\"/> What can I give your students today?</prosody></speak>",
                    "en": "— Ah, Master Corvinus! Nice to see you! What can I give your students today?",
                    "ru": "— А, Мастер Корвинус! Рад вас видеть! Чем я могу угостить ваших учеников сегодня?"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— How much is the big bread with salt, please?</prosody></speak>",
                    "en": "— How much is the big bread with salt, please?",
                    "ru": "— Сколько стоит большой хлеб с солью, подскажите?"
                },
                {
                    "speaker": "baker",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">— Two copper coins for one bread, or three big breads for five copper coins!</prosody></speak>",
                    "en": "— Two copper coins for one bread, or three big breads for five copper coins!",
                    "ru": "— Две медные монеты за один хлеб, или три больших хлеба за пять медных монет!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is a good price! <break time=\"300ms\"/> We are three people: Kira, me, and Master Corvinus.</prosody></speak>",
                    "en": "— That is a good price! We are three people: Kira, me, and Master Corvinus.",
                    "ru": "— Это хорошая цена! Нас трое: Кира, я и Мастер Корвинус."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin takes out his brown coin purse.</prosody></speak>",
                    "en": "Eldrin takes out his brown coin purse.",
                    "ru": "Элдрин достает свой коричневый кошелек для монет."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— One, two, three, four, five copper coins.</prosody></speak>",
                    "en": "— One, two, three, four, five copper coins.",
                    "ru": "— Одна, две, три, четыре, пять медных монет."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin puts five copper coins on the table.</prosody></speak>",
                    "en": "Eldrin puts five copper coins on the table.",
                    "ru": "Элдрин кладет пять медных монет на стол."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here are five copper coins, Master Hans. <break time=\"300ms\"/> Three breads with salt, please!</prosody></speak>",
                    "en": "— Here are five copper coins, Master Hans. Three breads with salt, please!",
                    "ru": "— Вот пять медных монет, мастер Ганс. Три хлеба с солью, пожалуйста!"
                },
                {
                    "speaker": "baker",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">— Good! <break time=\"300ms\"/> Thank you very much!</prosody></speak>",
                    "en": "— Good! Thank you very much!",
                    "ru": "— Отлично! Большое спасибо!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Baker Hans takes three hot breads with his tool. <break time=\"300ms\"/> He puts each one in brown paper.</prosody></speak>",
                    "en": "Baker Hans takes three hot breads with his tool. He puts each one in brown paper.",
                    "ru": "Пекарь Ганс берет три горячих хлеба лопаткой. Он заворачивает каждый в коричневую бумагу."
                },
                {
                    "speaker": "baker",
                    "voice": "Kore",
                    "ssml": "<speak><prosody rate=\"0.94\" pitch=\"-0.5st\">— Here you go! <break time=\"300ms\"/> Be careful, they are hot. <break time=\"300ms\"/> Enjoy, young students!</prosody></speak>",
                    "en": "— Here you go! Be careful, they are hot. Enjoy, young students!",
                    "ru": "— Вот, пожалуйста! Осторожно, они горячие. Приятного аппетита, юные ученики!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Thank you so much, Master Hans! <break time=\"300ms\"/> Have a good market day!</prosody></speak>",
                    "en": "— Thank you so much, Master Hans! Have a good market day!",
                    "ru": "— Большое спасибо, мастер Ганс! Удачного базарного дня!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They sit on a bench near the shop. <break time=\"300ms\"/> The paper is warm in their hands.</prosody></speak>",
                    "en": "They sit on a bench near the shop. The paper is warm in their hands.",
                    "ru": "Они садятся на скамейку возле лавки. Бумага теплая в их руках."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Listen! <break time=\"300ms\"/> The outside is hard, and the inside is soft!</prosody></speak>",
                    "en": "— Listen! The outside is hard, and the inside is soft!",
                    "ru": "— Послушай! Снаружи корочка твердая, а внутри мягкий мякиш!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And the salt gives it a very good flavor!</prosody></speak>",
                    "en": "— And the salt gives it a very good flavor!",
                    "ru": "— А соль придает ему очень приятный вкус!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— There is nothing better than fresh bread after a morning ride.</prosody></speak>",
                    "en": "— There is nothing better than fresh bread after a morning ride.",
                    "ru": "— Нет ничего лучше свежего хлеба после утренней поездки."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I have energy now! <break time=\"300ms\"/> What is next on the list, Master Corvinus?</prosody></speak>",
                    "en": "— I have energy now! What is next on the list, Master Corvinus?",
                    "ru": "— Теперь у меня есть силы! Что следующее в списке, Мастер Корвинус?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Next is the shop in the center of the market. <break time=\"300ms\"/> We must see merchant Selma.</prosody></speak>",
                    "en": "— Next is the shop in the center of the market. We must see merchant Selma.",
                    "ru": "— Дальше лавка в центре рынка. Мы должны навестить торговку Сельму."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Let's finish our bread and go to the market!</prosody></speak>",
                    "en": "— Let's finish our bread and go to the market!",
                    "ru": "— Давайте доедим наш хлеб и пойдем на рынок!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The three friends finish their bread. <break time=\"300ms\"/> They walk to the colorful shops.</prosody></speak>",
                    "en": "The three friends finish their bread. They walk to the colorful shops.",
                    "ru": "Трое друзей доедают свой хлеб. Они идут к красочным лавкам."
                }
            ],
            "quiz": [
                {
                    "question": "How much did Eldrin pay for the three fresh breads?",
                    "options": [
                        "Two copper coins",
                        "Five copper coins",
                        "Ten silver coins",
                        "One gold coin"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "How did Kira describe the fresh bread when they ate it?",
                    "options": [
                        "It was cold and sweet",
                        "The outside was hard, and the inside was soft",
                        "It was bitter and dark",
                        "It was too dry"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Who does Master Corvinus say they must visit next at the market?",
                    "options": [
                        "Farmer Barnaby",
                        "Merchant Selma",
                        "Blacksmith Bruno",
                        "City Guard Vance"
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
            "grammarFocus": "Weights & Quantities (grams, ounces, scales, sacks), Describing Colors and Scents",
            "wordCount": 497,
            "coverIcon": "fa-mortar-pestle",
            "coverColor": "#ec4899",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin, Kira, and Master Corvinus walk into the grand spice pavilion in the center of the market square.</prosody></speak>",
                    "en": "Eldrin, Kira, and Master Corvinus walk into the grand spice big tent in the center of the market square.",
                    "ru": "Элдрин, Кира и Мастер Корвинус входят в большой павильон пряностей в центре рыночной площади."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Dozens of silk banners in purple, crimson, and gold hang from the wooden rafters above.</prosody></speak>",
                    "en": "Dozens of silk banners in purple, dark red, and gold hang from the wooden ceiling beams above.",
                    "ru": "Десятки шелковых флагов фиолетового, малинового и золотого цветов свисают с деревянных стропил наверху."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Tall pyramids of colorful powders fill open wooden boxes: yellow ginger, red pepper, and blue flower root.</prosody></speak>",
                    "en": "Tall pyramids of colorful powders fill open wooden boxes: yellow ginger, red pepper, and blue flower root.",
                    "ru": "Высокие пирамидки разноцветных порошков наполняют открытые кедровые ящики: желтый имбирь, красная паприка и синий корень ириса."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at all these incredible colors! It looks like a painter's rainbow spread across the tables!</prosody></speak>",
                    "en": "— Look at all these incredible colors! It looks like a painter's rainbow spread across the tables!",
                    "ru": "— Посмотри на все эти невероятные цвета! Это похоже на радугу художника, рассыпанную по столам!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— And the rich scents! Cinnamon, dried mountain sage, and crushed clove buds!</prosody></speak>",
                    "en": "— And the rich scents! Cinnamon, dried mountain green herb, and crushed small spice small pieces!",
                    "ru": "— А какие богатые запахи! Корица, сушеный горный шалфей и молотые бутоны гвоздики!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Behind a long mahogany counter stands merchant Selma, wearing a green silk dress and gold earrings.</prosody></speak>",
                    "en": "Behind a long dark wood counter stands merchant Selma, wearing a green silk dress and gold ear rings.",
                    "ru": "За длинным прилавком из красного дерева стоит купчиха Сельма в зеленом шелковом платье и золотых сережках."
                },
                {
                    "speaker": "selma",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1.5st\">— Ah, Teacher Corvinus! <break time=\"300ms\"/> Peace and good wishes to you! <break time=\"300ms\"/> Welcome back to my simple spice tent!</prosody></speak>",
                    "en": "— Ah, Teacher Corvinus! Peace and good wishes to you! Welcome back to my simple spice tent!",
                    "ru": "— А, профессор Корвинус! Мир и благословение вам! Добро пожаловать снова в мою скромную палатку пряностей!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning, Selma. It is always a true delight to visit your fragrant shop.</prosody></speak>",
                    "en": "— Good morning, Selma. It is always a true delight to visit your nice smelling shop.",
                    "ru": "— Доброе утро, Сельма. Всегда истинное удовольствие зайти в вашу благоухающую лавку."
                },
                {
                    "speaker": "selma",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1.5st\">— And who are these two bright young students with wide, curious eyes?</prosody></speak>",
                    "en": "— And who are these two bright young students with wide, curious eyes?",
                    "ru": "— А кто эти двое смышленых юных ученых с широко распахнутыми любознательными глазами?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Meet my top apprentices, Eldrin and Kira. They are helping me manage the Academy's autumn shopping today.</prosody></speak>",
                    "en": "— Meet my top apprentices, Eldrin and Kira. They are helping me manage the Academy's autumn shopping today.",
                    "ru": "— Познакомьтесь с моими лучшими учениками, Элдрином и Кирой. Они помогают мне с осенними закупками Академии сегодня."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good morning, Lady Selma! Your shop is the most colorful place in the entire market!</prosody></speak>",
                    "en": "— Good morning, Lady Selma! Your shop is the most colorful place in the entire market!",
                    "ru": "— Доброе утро, госпожа Сельма! Ваша лавка — самое красочное место на всем рынке!"
                },
                {
                    "speaker": "selma",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1.5st\">— Thank you, young master! <break time=\"300ms\"/> How may I assist the Spire Academy this morning?</prosody></speak>",
                    "en": "— Thank you, young master! How may I assist the Spire Academy this morning?",
                    "ru": "— Спасибо, юный мастер! Чем я могу помочь Академии Шпиля этим утром?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— We need two large linen sacks of dried mountain thyme and one jar of crushed blue iris root.</prosody></speak>",
                    "en": "— We need two large cloth sacks of dried mountain small herb and one jar of crushed blue flower root.",
                    "ru": "— Нам нужно два больших льняных мешка сушеного горного тимьяна и одна банка измельченного корня синего ириса."
                },
                {
                    "speaker": "selma",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1.5st\">— I have the finest mountain small herb harvested from the most sunny southern peaks last week.</prosody></speak>",
                    "en": "— I have the finest mountain small herb harvested from the most sunny southern peaks last week.",
                    "ru": "— У меня лучший горный тимьян, собранный с самых солнечных южных вершин на прошлой неделе."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Selma takes a pair of polished brass balance scales with two suspended copper pans.</prosody></speak>",
                    "en": "Selma takes a pair of polished yellow metal balance scales with two suspended copper pans.",
                    "ru": "Сельма берет полированные латунные весы с двумя подвесными медными чашами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">She places a round bronze weight of five hundred grams onto the left copper pan.</prosody></speak>",
                    "en": "She places a round metal weight of five hundred grams onto the left copper pan.",
                    "ru": "Она кладет круглую бронзовую гирьку в пятьсот граммов на левую медную чашу."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Then she scoops fragrant green thyme with a wooden shovel into the right pan.</prosody></speak>",
                    "en": "Then she scoops nice smelling green small herb with a wooden shovel into the right pan.",
                    "ru": "Затем деревянным совком насыпает ароматный зеленый тимьян в правую чашу."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look, Kira! The balance beam is slowly moving! The right side is rising...</prosody></speak>",
                    "en": "— Look, Kira! The balance beam is slowly moving! The right side is rising...",
                    "ru": "— Смотри, Кира! Коромысло весов медленно движется! Правая сторона поднимается..."
                },
                {
                    "speaker": "selma",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1.5st\">— Just three more dried leaves... <break time=\"300ms\"/> and CLICK! <break time=\"300ms\"/> The golden needle points straight to the center mark!</prosody></speak>",
                    "en": "— Just three more dried leaves... and CLICK! The golden needle points straight to the center mark!",
                    "ru": "— Еще всего три сухих листочка... и ЩЕЛК! Золотая стрелка указывает ровно на центральную метку!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— That is five hundred grams of pure mountain thyme! The scale is perfectly balanced!</prosody></speak>",
                    "en": "— That is five hundred grams of pure mountain small herb! The scale is perfectly balanced!",
                    "ru": "— Это пятьсот граммов чистого горного тимьяна! Весы идеально уравновешены!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Selma pours the weighed thyme into two clean linen bags and ties them with brown string.</prosody></speak>",
                    "en": "Selma pours the weighed small herb into two clean cloth bags and ties them with brown string.",
                    "ru": "Сельма пересыпает взвешенный тимьян в два чистых льняных мешка и завязывает их коричневой бечевкой."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Then she takes a small glass jar filled with soft, pale-blue iris root powder.</prosody></speak>",
                    "en": "Then she takes a small glass jar filled with soft, pale-blue flower root powder.",
                    "ru": "Затем она берет маленькую стеклянную баночку, наполненную мягким нежно-голубым порошком корня ириса."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Why is the blue iris powder so important for our library, Master Corvinus?</prosody></speak>",
                    "en": "— Why is the blue flower powder so important for our library, Master Corvinus?",
                    "ru": "— А почему порошок синего ириса так важен для нашей библиотеки, Мастер Корвинус?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Blue iris powder absorbs moisture from the air and protects ancient parchment from tiny book insects.</prosody></speak>",
                    "en": "— blue flower powder takes in water from the air and keeps safe ancient paper from tiny book insects.",
                    "ru": "— Порошок синего ириса впитывает влагу из воздуха и защищает старинный пергамент от мелких книжных насекомых."
                },
                {
                    "speaker": "selma",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1.5st\">— And it has a wonderful scent of fresh mountain rain and wild violets!</prosody></speak>",
                    "en": "— And it has a wonderful scent of fresh mountain rain and wild violets!",
                    "ru": "— И у него чудесный аромат свежего горного дождя и диких фиалок!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Let me pack the glass jar into Eldrin's backpack, wrapped inside this soft woollen cloth.</prosody></speak>",
                    "en": "— Let me pack the glass jar into Eldrin's bag, wrapped inside this soft warm wool cloth.",
                    "ru": "— Давай я упакую стеклянную баночку в рюкзак Элдрина, завернув ее в эту мягкую шерстяную ткань."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira secures the jar and the two thyme sacks safely in the center of Eldrin's leather pack.</prosody></speak>",
                    "en": "Kira makes safe the jar and the two small herb sacks safely in the center of Eldrin's leather pack.",
                    "ru": "Кира надежно укладывает баночку и два мешочка с тимьяном в центр кожаного рюкзака Элдрина."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Thank you, Selma. Here are twelve silver coins for the herbs and the iris root.</prosody></speak>",
                    "en": "— Thank you, Selma. Here are twelve silver coins for the herbs and the blue flower root.",
                    "ru": "— Спасибо, Сельма. Вот двенадцать серебряных монет за травы и корень ириса."
                },
                {
                    "speaker": "selma",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.95\" pitch=\"+1.5st\">— Thank you, Teacher! <break time=\"300ms\"/> May your studies at the Spire shine with bright light this season!</prosody></speak>",
                    "en": "— Thank you, Teacher! May your studies at the Spire shine with bright light this season!",
                    "ru": "— Спасибо, профессор! Пусть ваши ученые труды в Шпиле сияют ярко в этом сезоне!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Goodbye, Lady Selma! Thank you for showing us how your beautiful scales work!</prosody></speak>",
                    "en": "— Goodbye, Lady Selma! Thank you for showing us how your beautiful scales work!",
                    "ru": "— До свидания, госпожа Сельма! Спасибо, что показали нам, как работают ваши красивые весы!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They wave goodbye and step out of the fragrant pavilion into the sunny marketplace.</prosody></speak>",
                    "en": "They wave goodbye and step out of the nice smelling big tent into the sunny marketplace.",
                    "ru": "Они машут на прощание и выходят из благоухающего павильона на солнечную рыночную площадь."
                }
            ],
            "quiz": [
                {
                    "question": "What metal were merchant Selma's balanced scales made of?",
                    "options": [
                        "Polished brass and copper pans",
                        "Wooden sticks",
                        "Clay",
                        "Silver wire"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "Why is blue iris root powder essential for the Great Library?",
                    "options": [
                        "To make blue soup",
                        "To absorb moisture and protect ancient parchment from book insects",
                        "To paint the walls",
                        "To feed the birds"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "How did Kira pack the glass jar of iris powder to keep it safe?",
                    "options": [
                        "She threw it in the cart",
                        "She wrapped it inside a soft woollen cloth in Eldrin's backpack",
                        "She carried it in her shoe",
                        "She gave it to the horse"
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
            "grammarFocus": "Metalworking Verbs (strike, hammer, glow, heat, cool, hiss), Senses (loud, hot, fiery)",
            "wordCount": 546,
            "coverIcon": "fa-fire",
            "coverColor": "#ef4444",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin, Kira, and Master Corvinus walk back to the wagon parking area.</prosody></speak>",
                    "en": "Eldrin, Kira, and Master Corvinus walk back to the wagon parking area.",
                    "ru": "Элдрин, Кира и Мастер Корвинус возвращаются на стоянку повозок."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Farmer Barnaby kneels by the back right wheel of the wooden cart, shaking his head.</prosody></speak>",
                    "en": "Farmer Barnaby kneels by the back right wheel of the wooden cart, shaking his head.",
                    "ru": "Фермер Барнаби сидит на корточках возле заднего правого колеса деревянной повозки, качая головой."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Farmer Barnaby, is everything alright with our cart?</prosody></speak>",
                    "en": "— Farmer Barnaby, is everything alright with our cart?",
                    "ru": "— Фермер Барнаби, все в порядке с нашей повозкой?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Look closely at this rear big tree wheel, Eldrin. <break time=\"300ms\"/> The thick iron edge around the wood is loose and shakes.</prosody></speak>",
                    "en": "— Look closely at this rear big tree wheel, Eldrin. The thick iron edge around the wood is loose and shakes.",
                    "ru": "— Посмотри внимательно на это заднее дубовое колесо, Элдрин. Толстый железный обод вокруг дерева разболтался и шатается."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Oh no! Can we still drive up the steep mountain road with a loose wheel rim?</prosody></speak>",
                    "en": "— Oh no! Can we still drive up the steep mountain road with a loose wheel edge?",
                    "ru": "— О нет! А мы сможем ехать вверх по крутой горной дороге с расшатанным ободом колеса?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Absolutely not! <break time=\"300ms\"/> On the rocky mountain sharp turns, the wheel would break in five minutes.</prosody></speak>",
                    "en": "— Absolutely not! On the rocky mountain sharp turns, the wheel would break in five minutes.",
                    "ru": "— Ни в коем случае! На каменистых горных серпантинах колесо сломается за пять минут."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Do not worry, Barnaby. Listen! Do you hear that rhythmic CLANG, CLANG, CLANG down the street?</prosody></speak>",
                    "en": "— Do not worry, Barnaby. Listen! Do you hear that steady CLANG, CLANG, CLANG down the street?",
                    "ru": "— Не волнуйся, Барнаби. Послушай! Слышишь этот ритмичный ДЗЫНЬ, ДЗЫНЬ, ДЗЫНЬ вниз по улице?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is Blacksmith Bruno's forge! Let us roll the cart over to his workshop immediately!</prosody></speak>",
                    "en": "— That is Blacksmith Bruno's forge! Let us roll the cart over to his workshop immediately!",
                    "ru": "— Это же кузница кузнеца Бруно! Давайте подкатим повозку к его мастерской немедленно!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They push the cart around the corner into the blacksmith's spacious stone yard.</prosody></speak>",
                    "en": "They push the cart around the corner into the blacksmith's very big stone yard.",
                    "ru": "Они катят повозку за угол в просторный каменный двор кузнеца."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Inside the stone forge, a massive coal furnace burns with roaring orange and yellow flames.</prosody></speak>",
                    "en": "Inside the stone forge, a massive coal big fire burns with very loud orange and yellow flames.",
                    "ru": "В каменной кузнице массивная угольная печь пылает ревущим оранжево-желтым пламенем."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Blacksmith Bruno stands by a huge steel anvil. He is tall and broad-shouldered with a thick black beard and leather apron.</prosody></speak>",
                    "en": "Blacksmith Bruno stands by a huge steel heavy metal block. He is tall and wide-with big shoulders with a thick black beard and leather apron.",
                    "ru": "Кузнец Бруно стоит у огромной стальной наковальни. Он высокий и широкоплечий, с густой черной бородой и в кожаном фартуке."
                },
                {
                    "speaker": "smith",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">— Ho-ho! <break time=\"300ms\"/> Hello, Teacher Corvinus! <break time=\"300ms\"/> What brings the Academy cart to my very hot workshop?</prosody></speak>",
                    "en": "— Ho-ho! Hello, Teacher Corvinus! What brings the Academy cart to my very hot workshop?",
                    "ru": "— Хо-хо! Приветствую, профессор Корвинус! Что привело повозку Академии в мою огненную мастерскую?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Master Bruno! <break time=\"300ms\"/> The iron tire on our back wheel is loose. <break time=\"300ms\"/> We need your hammer and heat!</prosody></speak>",
                    "en": "— Master Bruno! The iron tire on our back wheel is loose. We need your hammer and heat!",
                    "ru": "— Мастер Бруно! Железная шина на нашем заднем колесе разболталась. Нам нужны твой молот и жар!"
                },
                {
                    "speaker": "smith",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">— A simple fix for an honest cart! <break time=\"300ms\"/> Step back to a safe distance, young students! <break time=\"300ms\"/> Watch the bright tiny fires fly!</prosody></speak>",
                    "en": "— A simple fix for an honest cart! Step back to a safe distance, young students! Watch the bright tiny fires fly!",
                    "ru": "— Простая работа для честной повозки! Отойдите на безопасное расстояние, юные ученые! Смотрите, как летят яркие искры!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Bruno uses heavy iron pry bars to slip the wobbly iron hoop off the wooden wheel.</prosody></speak>",
                    "en": "Bruno uses heavy iron pull off bars to slip the not steady iron metal ring off the wooden wheel.",
                    "ru": "Бруно использует тяжелые железные монтировки, чтобы снять расшатанный железный обруч с деревянного колеса."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He grabs the iron hoop with long blacksmith tongs and places it directly into the glowing coal fire.</prosody></speak>",
                    "en": "He grabs the iron metal ring with long blacksmith metal tool and places it directly into the glowing coal fire.",
                    "ru": "Он берет железный обруч длинными кузнечными клещами и кладет его прямо в раскаленный угольный огонь."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He pulls the leather bellows handle up and down. WHOOSH, WHOOSH! The fire glows bright orange and white!</prosody></speak>",
                    "en": "He pulls the leather air pump handle up and down. WHOOSH, WHOOSH! The fire glows bright orange and white!",
                    "ru": "Он качает ручку кожаных мехов вверх и вниз. ВЖУХ, ВЖУХ! Огонь разгорается до ярко-оранжевого и белого свечения!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at the intense heat! The black iron is turning glowing bright red like a burning sunset!</prosody></speak>",
                    "en": "— Look at the very strong heat! The black iron is turning glowing bright red like a burning sunset!",
                    "ru": "— Посмотри на этот сильный жар! Черное железо становится светящимся ярко-красным, как пылающий закат!"
                },
                {
                    "speaker": "smith",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">— Heat gets bigger the metal, young man! <break time=\"300ms\"/> Now it will fit over the big tree wheel easily!</prosody></speak>",
                    "en": "— Heat gets bigger the metal, young man! Now it will fit over the big tree wheel easily!",
                    "ru": "— Жар расширяет металл, юноша! Теперь он легко налезет на дубовое колесо!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Bruno pulls the glowing red iron ring from the fire with his long tongs.</prosody></speak>",
                    "en": "Bruno pulls the glowing red iron ring from the fire with his long metal tool.",
                    "ru": "Бруно достает светящееся красное железное кольцо из огня своими длинными клещами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He places the hot ring over the wooden wheel. CLANG! CLANG! CLANG! He strikes it with his heavy steel hammer!</prosody></speak>",
                    "en": "He places the hot ring over the wooden wheel. CLANG! CLANG! CLANG! He strikes it with his heavy steel hammer!",
                    "ru": "Он надевает горячее кольцо на деревянное колесо. БАМ! БАМ! БАМ! Он бьет по нему своим тяжелым стальным молотом!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look at the golden sparks flying like fireflies across the stone floor!</prosody></speak>",
                    "en": "— Look at the golden tiny fires flying like fireflies across the stone floor!",
                    "ru": "— Посмотри на золотые искры, летящие как светлячки по каменному полу!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The glowing iron hoop sits perfectly aligned around the oak wheel spokes.</prosody></speak>",
                    "en": "The glowing iron metal ring sits perfectly aligned around the big tree wheel thin parts.",
                    "ru": "Раскаленный железный обруч идеально встает вокруг дубовых спиц колеса."
                },
                {
                    "speaker": "smith",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">— Now for the magic of cold well water! <break time=\"300ms\"/> Watch closely!</prosody></speak>",
                    "en": "— Now for the magic of cold well water! Watch closely!",
                    "ru": "— А теперь магия холодной колодезной воды! Смотрите внимательно!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Bruno lifts a large wooden bucket filled to the brim with icy well water.</prosody></speak>",
                    "en": "Bruno lifts a large wooden bucket filled to the brim with icy well water.",
                    "ru": "Бруно поднимает большое деревянное ведро, наполненное до краев ледяной колодезной водой."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He pours the cold water all over the red-hot iron rim. <emphasis level=\"strong\">HISSSSSSS!</emphasis></prosody></speak>",
                    "en": "He pours the cold water all over the red-hot iron edge. <strong voice level=\"strong\">HISSSSSSS!</emphasis>",
                    "ru": "Он выливает холодную воду на раскаленный железный обод. Ш-Ш-Ш-Ш-Ш-Ш!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A giant cloud of pure white steam shoots up into the air with a loud roar!</prosody></speak>",
                    "en": "A giant cloud of pure white steam shoots up into the air with a loud roar!",
                    "ru": "Гигантское облако чистейшего белого пара взмывает в воздух с громким шипением!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Wow! Look at all that white steam! That was incredible!</prosody></speak>",
                    "en": "— Wow! Look at all that white steam! That was incredible!",
                    "ru": "— Ого! Посмотри на этот белый пар! Это было невероятно!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look, the iron cooled down instantly! It shrank and locked super tight around the oak wood!</prosody></speak>",
                    "en": "— Look, the iron cooled down instantly! It got smaller and locked super tight around the big tree wood!",
                    "ru": "— Смотри, железо мгновенно остыло! Оно сжалось и намертво охватило дубовое дерево!"
                },
                {
                    "speaker": "smith",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">— That wheel is now stronger than new! <break time=\"300ms\"/> It will carry your cart safely for ten full years!</prosody></speak>",
                    "en": "— That wheel is now stronger than new! It will carry your cart safely for ten full years!",
                    "ru": "— Это колесо теперь крепче нового! Оно будет надежно возить вашу повозку целых десять лет!"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Thank you with all my heart, Master Bruno! <break time=\"300ms\"/> You saved our journey home!</prosody></speak>",
                    "en": "— Thank you with all my heart, Master Bruno! You saved our journey home!",
                    "ru": "— Спасибо от всего сердца, мастер Бруно! Ты спас нашу дорогу домой!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Craftsmanship at its finest. Here are five silver coins for your masterwork, Bruno.</prosody></speak>",
                    "en": "— Good work at its finest. Here are five silver coins for your best work, Bruno.",
                    "ru": "— Мастерство высшей пробы. Вот пять серебряных монет за твою великолепную работу, Бруно."
                },
                {
                    "speaker": "smith",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.88\" pitch=\"-4.5st\">— A pleasure serving the Spire Academy! <break time=\"300ms\"/> Safe travels up the mountain trails, young friends!</prosody></speak>",
                    "en": "— A pleasure serving the Spire Academy! Safe travels up the mountain trails, young friends!",
                    "ru": "— Рад служить Академии Шпиля! Безопасного пути по горным тропам, юные друзья!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Barnaby rolls the cart back into place, and the wheel spins smoothly without a single wobble.</prosody></speak>",
                    "en": "Barnaby rolls the cart back into place, and the wheel spins smoothly without a single shake.",
                    "ru": "Барнаби ставит повозку на место, и колесо крутится плавно, без единого колебания."
                }
            ],
            "quiz": [
                {
                    "question": "What problem did Farmer Barnaby discover on the cart's back right wheel?",
                    "options": [
                        "A flat rubber tire",
                        "The thick iron rim was loose and wobbly",
                        "The wheel was completely missing",
                        "A mouse was inside it"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why did Blacksmith Bruno heat the iron hoop in the glowing coal furnace?",
                    "options": [
                        "To melt it into water",
                        "Because heat expands metal so it fits over the wood easily",
                        "To paint it red",
                        "To cook food"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What happened when Bruno poured cold well water onto the hot iron rim?",
                    "options": [
                        "The wheel caught on fire",
                        "It hissed loudly and shot a giant cloud of white steam as the metal shrank tight",
                        "The wheel broke into two pieces",
                        "Nothing happened"
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
            "grammarFocus": "Prepositions of Place (under, behind, between), Gentle Animal Commands, Animal Senses",
            "wordCount": 498,
            "coverIcon": "fa-cat",
            "coverColor": "#f97316",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin, Kira, and Master Corvinus stroll through the lively farmer's vegetable market.</prosody></speak>",
                    "en": "Eldrin, Kira, and Master Corvinus walk through the busy farmer's vegetable market.",
                    "ru": "Элдрин, Кира и Мастер Корвинус прогуливаются по оживленному фермерскому овощному рынку."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Stalls overflow with bright orange carrots, fresh round green cabbages, and bundles of purple onions.</prosody></speak>",
                    "en": "Stalls too many with bright orange carrots, fresh round green cabbages, and bundles of purple onions.",
                    "ru": "Прилавки ломятся от ярко-оранжевой моркови, свежей круглой зеленой капусты и связок фиолетового лука."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Suddenly, Kira stops walking and raises her hand. She tilts her head and listens intently.</prosody></speak>",
                    "en": "Suddenly, Kira stops walking and raises her hand. She tilts her head and listens carefully.",
                    "ru": "Внезапно Кира останавливается и поднимает руку. Она наклоняет голову и внимательно прислушивается."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Shh! Listen carefully, Eldrin. Do you hear that tiny, high-pitched crying sound?</prosody></speak>",
                    "en": "— Shh! Listen carefully, Eldrin. Do you hear that tiny, high-pitched crying sound?",
                    "ru": "— Тсс! Послушай внимательно, Элдрин. Ты слышишь этот тоненький жалобный писк?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">From behind a tall wooden stack of vegetable crates comes a faint sound: 'Mew... mew... mew...'</prosody></speak>",
                    "en": "From behind a tall wooden stack of vegetable crates comes a faint sound: 'Mew... mew... mew...'",
                    "ru": "Из-за высокой деревянной стопки ящиков с овощами доносится слабый звук: «Мяу... мяу... мяу...»"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes! I hear it! It sounds like a frightened little kitten crying for help!</prosody></speak>",
                    "en": "— Yes! I hear it! It sounds like a frightened little kitten crying for help!",
                    "ru": "— Да! Я слышу! Похоже, испуганный маленький котенок плачет и зовет на помощь!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— It is coming from underneath that big stack of green cabbage crates in the corner!</prosody></speak>",
                    "en": "— It is coming from underneath that big stack of green cabbage crates in the corner!",
                    "ru": "— Звук идет из-под той большой стопки ящиков с зеленой капустой в углу!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira walk over and kneel down on the cool stone cobblestones.</prosody></speak>",
                    "en": "Eldrin and Kira walk over and kneel down on the cool stone stones.",
                    "ru": "Элдрин и Кира подходят и опускаются на колени на прохладную каменную брусчатку."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin peers into the dark narrow gap between the wooden slats of the bottom crates.</prosody></speak>",
                    "en": "Eldrin peers into the dark narrow gap between the wooden thin boards of the bottom crates.",
                    "ru": "Элдрин заглядывает в темную узкую щель между деревянными рейками нижних ящиков."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look, Kira! Two tiny, bright green eyes are shining in the shadows!</prosody></speak>",
                    "en": "— Look, Kira! Two tiny, bright green eyes are shining in the shadows!",
                    "ru": "— Посмотри, Кира! Два крошечных ярко-зеленых глаза светятся в тени!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— It is a tiny grey kitten with white paws! His little body is shivering from fear.</prosody></speak>",
                    "en": "— It is a tiny grey kitten with white paws! His little body is shivering from fear.",
                    "ru": "— Это крошечный серый котенок с белыми лапками! Его маленькое тельце дрожит от страха."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— His back leg is gently caught between two rough wooden planks. He cannot pull himself out!</prosody></speak>",
                    "en": "— His back leg is gently caught between two rough wooden wood boards. He cannot pull himself out!",
                    "ru": "— Его задняя лапка слегка застряла между двумя неотесанными деревянными досками. Он не может выбраться!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— If we reach in too fast, he might panic and scratch our hands.</prosody></speak>",
                    "en": "— If we reach in too fast, he might panic and scratch our hands.",
                    "ru": "— Если мы полезем слишком быстро, он может испугаться и оцарапать наши руки."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— We must speak very softly and offer him something delicious to eat.</prosody></speak>",
                    "en": "— We must speak very softly and offer him something delicious to eat.",
                    "ru": "— Мы должны говорить очень мягко и предложить ему что-нибудь вкусненькое поесть."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin reaches into his coat pocket. He pulls out a small crust from his fresh morning pretzel.</prosody></speak>",
                    "en": "Eldrin reaches into his coat pocket. He pulls out a small crust from his fresh morning twisted bread.",
                    "ru": "Элдрин лезет в карман куртки. Он достает маленький кусочек корочки от своего утреннего брецеля."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Hello, little friend. Do not be afraid. We are here to help you get out.</prosody></speak>",
                    "en": "— Hello, little friend. Do not be afraid. We are here to help you get out.",
                    "ru": "— Привет, маленький друг. Не бойся. Мы здесь, чтобы помочь тебе выбраться."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin extends his open hand very slowly into the gap, holding the warm bread crust.</prosody></speak>",
                    "en": "Eldrin extends his open hand very slowly into the gap, holding the warm bread crust.",
                    "ru": "Элдрин очень медленно протягивает открытую ладонь в щель, держа теплую хлебную корочку."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The grey kitten twitches his tiny pink nose. He sniffs the bread cautiously.</prosody></speak>",
                    "en": "The grey kitten twitches his tiny pink nose. He sniffs the bread slowly.",
                    "ru": "Серый котенок шевелит крошечным розовым носиком. Он осторожно нюхает хлеб."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is it, little one. It is good and warm. Come forward just two inches.</prosody></speak>",
                    "en": "— That is it, little one. It is good and warm. Come forward just two inches.",
                    "ru": "— Вот так, малыш. Он вкусный и теплый. Подвинься вперед всего на пару сантиметров."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The kitten nibbles the bread crust. He starts purring with a soft, gentle rumble.</prosody></speak>",
                    "en": "The kitten eats slowly the bread crust. He starts purring with a soft, gentle rumble.",
                    "ru": "Котенок откусывает кусочек хлеба. Он начинает тихо и ласково мурлыкать."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I will gently lift the top wooden plank with two hands. One, two, lift!</prosody></speak>",
                    "en": "— I will gently lift the top wooden wood board with two hands. One, two, lift!",
                    "ru": "— Я аккуратно приподниму верхнюю деревянную планку двумя руками. Раз, два, подъем!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira lifts the loose board by two inches. The kitten's little leg is completely free!</prosody></speak>",
                    "en": "Kira lifts the loose board by two inches. The kitten's little leg is completely free!",
                    "ru": "Кира приподнимает свободную доску на пару сантиметров. Маленькая лапка котенка полностью свободна!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Come here into my warm hands, sweetheart. You are safe now!</prosody></speak>",
                    "en": "— Come here into my warm hands, sweetheart. You are safe now!",
                    "ru": "— Иди сюда в мои теплые руки, милый. Ты в безопасности теперь!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin gently scoops the soft grey kitten into his arms and stands up.</prosody></speak>",
                    "en": "Eldrin gently scoops the soft grey kitten into his arms and stands up.",
                    "ru": "Элдрин бережно берет мягкого серого котенка на руки и поднимается на ноги."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The kitten snuggles against Eldrin's woollen vest and purrs like a tiny engine.</prosody></speak>",
                    "en": "The kitten holds close against Eldrin's warm wool vest and purrs like a tiny engine.",
                    "ru": "Котенок прижимается к шерстяному жилету Элдрина и мурлычет, как маленький моторчик."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A flower vendor named Rosa rushes over from her nearby tulip stall with tears of joy in her eyes.</prosody></speak>",
                    "en": "A flower seller named Rosa rushes over from her nearby flower stall with tears of joy in her eyes.",
                    "ru": "Продавщица цветов по имени Роза подбегает от своего соседнего тюльпанового лотка со слезами радости на глазах."
                },
                {
                    "speaker": "vendor",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+3st\">— Oh, my goodness! <break time=\"300ms\"/> Smokey! <break time=\"300ms\"/> You found my sweet little lost kitten!</prosody></speak>",
                    "en": "— Oh, my goodness! Smokey! You found my sweet little lost kitten!",
                    "ru": "— О, боже мой! Дымок! Вы нашли моего милого сбежавшего котенка!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— He was stuck under the cabbage crates, ma'am! But he is completely unharmed.</prosody></speak>",
                    "en": "— He was stuck under the cabbage crates, ma'am! But he is completely not hurt.",
                    "ru": "— Он застрял под ящиками с капустой, мэм! Но он совершенно цел и невредим."
                },
                {
                    "speaker": "vendor",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+3st\">— I was searching for him all morning! <break time=\"300ms\"/> Thank you with all my heart, kind young students!</prosody></speak>",
                    "en": "— I was searching for him all morning! Thank you with all my heart, kind young students!",
                    "ru": "— Я искала его все утро! Спасибо вам от всего сердца, добрые юные ученые!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Rosa takes Smokey and hugs him softly. <break time=\"300ms\"/> She hands Kira a bunch of flowers of yellow flowers.</prosody></speak>",
                    "en": "Rosa takes Smokey and hugs him softly. She hands Kira a bunch of flowers of yellow flowers.",
                    "ru": "Роза берет Дымка и нежно обнимает его. Она протягивает Кире букет желтых нарциссов."
                },
                {
                    "speaker": "vendor",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+3st\">— Please take these fresh yellow flowers as a token of my deep thanks!</prosody></speak>",
                    "en": "— Please take these fresh yellow flowers as a token of my deep thanks!",
                    "ru": "— Пожалуйста, возьмите эти свежие желтые нарциссы в знак моей глубокой благодарности!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Thank you so much, Rosa! They are so beautiful and bright!</prosody></speak>",
                    "en": "— Thank you so much, Rosa! They are so beautiful and bright!",
                    "ru": "— Огромное спасибо, Роза! Они такие красивые и яркие!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Kindness to small creatures is the mark of a true scholar. Well done, Eldrin and Kira.</prosody></speak>",
                    "en": "— Kindness to small creatures is the mark of a true student. Well done, Eldrin and Kira.",
                    "ru": "— Доброта к малым созданиям — признак истинного ученого. Молодцы, Элдрин и Кира."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Saving Smokey made my heart feel so warm! Now let us visit the bookstall!</prosody></speak>",
                    "en": "— Saving Smokey made my heart feel so warm! Now let us visit the book shop!",
                    "ru": "— Спасение Дымка так согрело мне сердце! А теперь давайте навестим книжную лавку!"
                }
            ],
            "quiz": [
                {
                    "question": "Where was the little grey kitten named Smokey trapped?",
                    "options": [
                        "High up in a tree",
                        "Under a wooden stack of cabbage crates",
                        "Inside a water bucket",
                        "In the blacksmith furnace"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What food did Eldrin offer to gain the frightened kitten's trust?",
                    "options": [
                        "A piece of warm pretzel crust",
                        "A whole fish",
                        "A piece of cheese",
                        "A lemon"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "What gift did the flower vendor Rosa give to Kira in gratitude?",
                    "options": [
                        "A gold ring",
                        "A bouquet of fresh yellow daffodils",
                        "A bag of coins",
                        "A box of apples"
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
            "grammarFocus": "Book & Paper Vocabulary (leather, binding, stars, map, quill), Descriptive Adjectives (ancient, silver, rare)",
            "wordCount": 502,
            "coverIcon": "fa-book-open-reader",
            "coverColor": "#8b5cf6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the northern corner of the town square stands the ancient stone clocktower.</prosody></speak>",
                    "en": "In the northern corner of the town square stands the ancient stone clock tower.",
                    "ru": "В северном углу городской площади стоит старинная каменная часовая башня."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The great bronze clock face ticks steadily with deep, soothing mechanical clicks.</prosody></speak>",
                    "en": "The great metal clock face ticks slowly and carefully with deep, calm and nice machine clicks.",
                    "ru": "Огромный бронзовый циферблат часов мерно тикает глубокими успокаивающими механическими щелчками."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Beneath the arch of the tower lies a wonderful open-air secondhand bookshop.</prosody></speak>",
                    "en": "Under the arch of the tower lies a wonderful open-air old bookshop.",
                    "ru": "Под аркой башни расположился чудесный букинистический книжный магазинчик под открытым небом."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A dark green canvas awning protects dozens of mahogany bookshelves from the sun.</prosody></speak>",
                    "en": "A dark green cloth roof cover keeps safe dozens of dark wood shelves from the sun.",
                    "ru": "Темно-зеленый брезентовый навес защищает десятки книжных полок из красного дерева от солнца."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at all the shelves of leather-bound books, old maps, and rolled scrolls! This is paradise!</prosody></speak>",
                    "en": "— Look at all the shelves of leather-tied books, old maps, and rolled scrolls! This is wonderful place!",
                    "ru": "— Посмотри на все эти полки книг в кожаных переплетах, старых карт и свернутых свитков! Это рай!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— It smells like ancient nice wood, dried purple flower, and old paper!</prosody></speak>",
                    "en": "— It smells like ancient nice wood, dried purple flower, and old paper!",
                    "ru": "— Здесь пахнет старинным кедром, сушеной лавандой и старой бумагой пергамента!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">An elderly gentleman named Master Otho sits in a carved wooden rocking chair reading a large book.</prosody></speak>",
                    "en": "An old man named Master Otho sits in a carved wooden rocking chair reading a large book.",
                    "ru": "Пожилой джентльмен по имени мастер Ото сидит в резном деревянном кресле-качалке и читает большую книгу."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He wears a long midnight-blue robe and round gold spectacles perched on his nose.</prosody></speak>",
                    "en": "He wears a long midnight-blue robe and round gold glasses sitting on his nose.",
                    "ru": "На нем длинная мантия цвета ночного неба и круглые золотые очки на кончике носа."
                },
                {
                    "speaker": "otho",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-2.5st\">— Ah, Teacher Corvinus! <break time=\"300ms\"/> My dear old friend! <break time=\"300ms\"/> Welcome to my treasure house of forgotten knowledge!</prosody></speak>",
                    "en": "— Ah, Teacher Corvinus! My dear old friend! Welcome to my treasure house of forgotten knowledge!",
                    "ru": "— А, профессор Корвинус! Мой дорогой старый друг! Добро пожаловать в мою сокровищницу забытых знаний!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Greetings, Master Otho! I brought my two most eager young scholars to explore your collection today.</prosody></speak>",
                    "en": "— Hello, Master Otho! I brought my two most very happy young students to explore your many things today.",
                    "ru": "— Приветствую, мастер Ото! Я привел двух моих самых пытливых юных ученых изучить вашу коллекцию сегодня."
                },
                {
                    "speaker": "otho",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-2.5st\">— Step inside, young friends! <break time=\"300ms\"/> Run your fingers along the shelves. <break time=\"300ms\"/> Every book has a story to tell.</prosody></speak>",
                    "en": "— Step inside, young friends! Run your fingers along the shelves. Every book has a story to tell.",
                    "ru": "— Проходите, юные друзья! Проведите пальцами по полкам. У каждой книги есть своя история."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin walks slowly down the narrow aisle, inspecting the embossed titles on the leather spines.</prosody></speak>",
                    "en": "Eldrin walks slowly down the narrow row, looking at the decorated titles on the leather spines.",
                    "ru": "Элдрин медленно идет по узкому ряду, изучая тисненые названия на кожаных корешках."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">On the third shelf, between a heavy history volume and an herbal encyclopedia, something catches his eye.</prosody></speak>",
                    "en": "On the third shelf, between a heavy history volume and an herbal big book, something catches his eye.",
                    "ru": "На третьей полке, между тяжелым томом истории и травяной энциклопедией, кое-что привлекает его внимание."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is a small, neat book tied in deep navy blue leather with stamped silver thin metal star pictures.</prosody></speak>",
                    "en": "It is a small, neat book tied in deep navy blue leather with stamped silver thin metal star pictures.",
                    "ru": "Это маленькая карманная книжка в переплете из темно-синей кожи с серебряными созвездиями из фольги."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Master Corvinus! Kira! Look at this small blue book! Look at the silver cover!</prosody></speak>",
                    "en": "— Master Corvinus! Kira! Look at this small blue book! Look at the silver cover!",
                    "ru": "— Мастер Корвинус! Кира! Посмотрите на эту маленькую синюю книжку! Посмотрите на серебряную обложку!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin gently opens the front cover. The thick cream pages are in pristine condition.</prosody></speak>",
                    "en": "Eldrin gently opens the front cover. The thick cream pages are in very clean condition.",
                    "ru": "Элдрин аккуратно открывает обложку. Плотные кремовые страницы в безупречном состоянии."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— It is a hand-drawn star atlas of the Northern Sky! Every constellation is mapped with golden ink!</prosody></speak>",
                    "en": "— It is a hand-drawn star atlas of the Northern Sky! Every star picture is mapped with golden ink!",
                    "ru": "— Это нарисованный от руки звездный атлас Северного Неба! Каждое созвездие нанесено золотыми чернилами!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look at the drawings of the Great Bear and the Silver Swan! They are so delicate and detailed!</prosody></speak>",
                    "en": "— Look at the drawings of the Great Bear and the Silver Swan! They are so very soft and detailed!",
                    "ru": "— Посмотри на рисунки Большой Медведицы и Серебряного Лебедя! Они такие тонкие и подробные!"
                },
                {
                    "speaker": "otho",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-2.5st\">— That star atlas was crafted fifty years ago by a master star teacher on the coast.</prosody></speak>",
                    "en": "— That star atlas was crafted fifty years ago by a master star teacher on the coast.",
                    "ru": "— Этот звездный атлас был создан пятьдесят лет назад мастером-астрономом на побережье."
                },
                {
                    "speaker": "otho",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-2.5st\">— It has very correct charts of all twelve star seasons and planet paths.</prosody></speak>",
                    "en": "— It has very correct charts of all twelve star seasons and planet paths.",
                    "ru": "— В нем точные карты всех двенадцати небесных сезонов и путей планет."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Eldrin has shown remarkable diligence, care, and teamwork during his first weeks at the Spire.</prosody></speak>",
                    "en": "— Eldrin has shown very good hard work, care, and teamwork during his first weeks at the Spire.",
                    "ru": "— Элдрин проявил замечательное усердие, заботу и командный дух в свои первые недели в Шпиле."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Master Otho, how much for this exquisite celestial pocketbook?</prosody></speak>",
                    "en": "— Master Otho, how much for this very nice star small book?",
                    "ru": "— Мастер Ото, сколько стоит этот изысканный небесный карманный атлас?"
                },
                {
                    "speaker": "otho",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-2.5st\">— For a true, hard working student from the Spire Academy, just three silver coins.</prosody></speak>",
                    "en": "— For a true, hard working student from the Spire Academy, just three silver coins.",
                    "ru": "— Для истинного, преданного науке ученика из Академии Шпиля — всего три серебряные монеты."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus takes three gleaming silver coins from his purse and hands them to Master Otho.</prosody></speak>",
                    "en": "Master Corvinus takes three shining silver coins from his purse and hands them to Master Otho.",
                    "ru": "Мастер Корвинус достает три сверкающие серебряные монеты из кошелька и передает их мастеру Ото."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Take this star atlas, Eldrin. It is a gift from the Academy for your outstanding work.</prosody></speak>",
                    "en": "— Take this star atlas, Eldrin. It is a gift from the Academy for your very good work.",
                    "ru": "— Возьми этот звездный атлас, Элдрин. Это подарок от Академии за твои выдающиеся труды."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Professor! I do not know what to say! Thank you from the bottom of my heart!</prosody></speak>",
                    "en": "— Teacher! I do not know what to say! Thank you from the bottom of my heart!",
                    "ru": "— Профессор! Я даже не знаю, что сказать! Спасибо вам от всего сердца!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin holds the navy blue book close to his chest. His eyes sparkle with joy.</prosody></speak>",
                    "en": "Eldrin holds the navy blue book close to his chest. His eyes shine with joy.",
                    "ru": "Элдрин прижимает темно-синюю книгу к груди. Его глаза сияют от радости."
                },
                {
                    "speaker": "otho",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-2.5st\">— May the silver stars guide your path to great wisdom, young apprentice!</prosody></speak>",
                    "en": "— May the silver stars guide your path to great wisdom, young apprentice!",
                    "ru": "— Пусть серебряные звезды укажут тебе путь к великой мудрости, юный ученик!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— That is the most wonderful present ever, Eldrin! You truly earned it!</prosody></speak>",
                    "en": "— That is the most wonderful present ever, Eldrin! You truly earned it!",
                    "ru": "— Это самый прекрасный подарок на свете, Элдрин! Ты действительно заслужил его!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Now, the midday bells are about to chime. Who is ready for a relaxing lunch by the fountain?</prosody></speak>",
                    "en": "— Now, the midday bells are about to bell sound. Who is ready for a relaxing lunch by the fountain?",
                    "ru": "— А теперь полуденные колокола вот-вот зазвонят. Кто готов к приятному обеду у фонтана?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I am! Let us head to the sunny town square fountain!</prosody></speak>",
                    "en": "— I am! Let us head to the sunny town square fountain!",
                    "ru": "— Я готов! Пойдемте к солнечному городскому фонтану!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin slides his new star book into the safest pocket of his backpack and steps out into the sunshine.</prosody></speak>",
                    "en": "Eldrin slides his new star book into the safest pocket of his bag and steps out into the sunshine.",
                    "ru": "Элдрин убирает свою новую звездную книгу в самый надежный карман рюкзака и выходит на солнце."
                }
            ],
            "quiz": [
                {
                    "question": "What is the name of the old bookseller beneath the clocktower?",
                    "options": [
                        "Master Bruno",
                        "Master Otho",
                        "Captain Vance",
                        "Farmer Barnaby"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What kind of book did Eldrin discover on the mahogany shelves?",
                    "options": [
                        "A cookbook of apple pies",
                        "A navy-blue leather pocketbook of hand-drawn star constellations",
                        "A scary story about trolls",
                        "An empty notebook"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why did Master Corvinus buy the star atlas for Eldrin?",
                    "options": [
                        "As a reward for his diligence, care, and teamwork",
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
            "grammarFocus": "Sharing & Politeness (Take a piece, Would you like...?), Food & Picnic Vocabulary, Senses",
            "wordCount": 478,
            "coverIcon": "fa-water",
            "coverColor": "#06b6d4",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At twelve o'clock noon, all the church bells of the Lower Town chime twelve deep, musical notes.</prosody></speak>",
                    "en": "At twelve o'clock noon, all the church bells of the Lower Town bell sound twelve deep, musical notes.",
                    "ru": "В полдень все церковные колокола Нижнего Города отбивают двенадцать глубоких музыкальных ударов."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The warm midday sun sits high in the clear blue sky, warming the cobblestones of the central square.</prosody></speak>",
                    "en": "The warm midday sun sits high in the clear blue sky, warming the stones of the central square.",
                    "ru": "Теплое полуденное солнце стоит высоко в ясном синем небе, согревая мостовую центральной площади."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the very middle of the square stands a majestic fountain carved from white marble.</prosody></speak>",
                    "en": "In the very middle of the square stands a very big fountain carved from white marble.",
                    "ru": "В самом центре площади стоит величественный фонтан, высеченный из белого мрамора."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A magnificent carved stone lion spouts sparkling, crystal-clear water from its mouth into a wide circular basin.</prosody></speak>",
                    "en": "A very beautiful carved stone lion water pipes shining, crystal-clear water from its mouth into a wide circular bowl.",
                    "ru": "Великолепный резной каменный лев извергает сверкающую кристально чистую воду из пасти в широкий круглый бассейн."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look at this lovely shaded stone bench under the spreading green big green tree near the fountain!</prosody></speak>",
                    "en": "— Look at this lovely shaded stone bench under the spreading green big green tree near the fountain!",
                    "ru": "— Посмотри на эту прекрасную тенистую каменную скамью под раскидистым зеленым дубом возле фонтана!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— My legs feel so tired from walking through all the market aisles! Sitting down feels heavenly.</prosody></speak>",
                    "en": "— My legs feel so tired from walking through all the market rows! Sitting down feels very good.",
                    "ru": "— Мои ноги так устали от ходьбы по всем рядам рынка! Присесть — это просто блаженство."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Let us unpack Leo's provision bag and enjoy a well-deserved picnic lunch, children.</prosody></speak>",
                    "en": "— Let us unpack Leo's food bag and enjoy a well-deserved picnic lunch, children.",
                    "ru": "— Давайте распакуем мешок с провизией от Лео и насладимся заслуженным пикником, дети."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin unbuckles the green cloth bag and spreads a clean white cloth across the stone bench.</prosody></speak>",
                    "en": "Eldrin unbuckles the green cloth bag and spreads a clean white cloth across the stone bench.",
                    "ru": "Элдрин расстегивает зеленый холщовый мешок и расстилает чистое белое льняное полотно по каменной скамье."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look what Leo packed for us this morning: four large crisp red apples!</prosody></speak>",
                    "en": "— Look what Leo packed for us this morning: four large crisp red apples!",
                    "ru": "— Посмотрите, что Лео упаковал для нас этим утром: четыре больших хрустящих красных яблока!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— And half a loaf of crusty sourdough bread and a fresh round wheel of white goat cheese!</prosody></speak>",
                    "en": "— And half a loaf of hard fresh bread and a fresh round wheel of white goat cheese!",
                    "ru": "— И полбуханки хрустящего хлеба на закваске и круглый свежий кругляк белого козьего сыра!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Leo is a truly thoughtful young man. He never forgets proper nourishment for travel.</prosody></speak>",
                    "en": "— Leo is a truly thoughtful young man. He never forgets proper food for travel.",
                    "ru": "— Лео поистине заботливый юноша. Он никогда не забывает о хорошем питании для дороги."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus takes out his silver small knife and cleanly slices the fresh bread.</prosody></speak>",
                    "en": "Master Corvinus takes out his silver small knife and cleanly slices the fresh bread.",
                    "ru": "Мастер Корвинус достает свой серебряный карманный ножик и чисто нарезает свежий хлеб на закваске."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He cuts thick slices of creamy goat cheese and places them over the warm bread.</prosody></speak>",
                    "en": "He cuts thick slices of soft goat cheese and places them over the warm bread.",
                    "ru": "Он отрезает толстые ломтики нежного козьего сыра и кладет их на теплый хлеб."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Here is a cheese sandwich for you, Kira, and one for you, Eldrin.</prosody></speak>",
                    "en": "— Here is a cheese sandwich for you, Kira, and one for you, Eldrin.",
                    "ru": "— Вот бутерброд с сыром для тебя, Кира, и один для тебя, Элдрин."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you, Master Corvinus! CRUNCH! The cheese is creamy, mild, and delicious!</prosody></speak>",
                    "en": "— Thank you, Master Corvinus! CRUNCH! The cheese is soft, mild, and delicious!",
                    "ru": "— Спасибо, Мастер Корвинус! ХРУСЬ! Сыр нежный, сливочный и очень вкусный!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The master then quarters the red apples with crisp, satisfying snaps. Slice, slice, slice!</prosody></speak>",
                    "en": "The master then quarters the red apples with crisp, very good snaps. Slice, slice, slice!",
                    "ru": "Затем мастер делит красные яблоки на четвертинки с хрустящим, приятным звуком. Щелк, щелк, щелк!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— The apples are so sweet and juicy! Cold spring water from the canteen washes it down perfectly.</prosody></speak>",
                    "en": "— The apples are so sweet and juicy! Cold spring water from the water bottle washes it down perfectly.",
                    "ru": "— Яблоки такие сладкие и сочные! Холодная родниковая вода из фляги идеально утоляет жажду."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Honest work and good friends make any meal taste like a royal feast!</prosody></speak>",
                    "en": "— Honest work and good friends make any meal taste like a royal big meal!",
                    "ru": "— Честный труд и хорошие друзья делают любую еду похожей на королевский пир!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">As they eat, a flock of about a dozen plump grey pigeons flutter down from the clocktower roof.</prosody></speak>",
                    "en": "As they eat, a group of about a dozen round grey pigeons fly fast down from the clock tower roof.",
                    "ru": "Пока они едят, стайка из десятка упитанных серых голубей слетает с крыши часовой башни."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They land softly on the sunlit stone flags around the marble fountain basin.</prosody></speak>",
                    "en": "They land softly on the sunny stone flags around the marble fountain bowl.",
                    "ru": "Они мягко опускаются на залитые солнцем каменные плиты вокруг мраморного бассейна фонтана."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look at their shiny purple and green neck feathers! They are looking at our bread crumbs with big eyes.</prosody></speak>",
                    "en": "— Look at their shiny purple and green neck feathers! They are looking at our bread crumbs with big eyes.",
                    "ru": "— Посмотри на их переливающиеся фиолетово-зеленые перышки на шее! Они смотрят на наши хлебные крошки большими глазами."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here you go, little birds! Enjoy a lunchtime treat!</prosody></speak>",
                    "en": "— Here you go, little birds! Enjoy a lunchtime treat!",
                    "ru": "— Вот, держите, птички! Угощайтесь обедом!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin crumbles a small piece of bread crust and scatters the crumbs across the stone floor.</prosody></speak>",
                    "en": "Eldrin crumbles a small piece of bread crust and scatters the crumbs across the stone floor.",
                    "ru": "Элдрин крошит маленький кусочек хлебной корочки и рассыпает крошки по каменному полу."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The pigeons coo cheerfully and peck up the tasty crumbs with rapid little head bobs. Peck, peck, peck!</prosody></speak>",
                    "en": "The pigeons sing softly cheerfully and peck up the tasty crumbs with fast little head moves. Peck, peck, peck!",
                    "ru": "Голуби весело курлычут и склевывают вкусные крошки быстрыми кивками головок. Клюв, клюв, клюв!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look how brave that little white-winged pigeon is! He took a crumb right near my boot!</prosody></speak>",
                    "en": "— Look how brave that little white-with wings pigeon is! He took a crumb right near my boot!",
                    "ru": "— Посмотри, какой смелый тот голубь с белыми крылышками! Он взял крошку прямо у моего сапога!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The fountain square is the peaceful heart of the town. A moment of rest restores the spirit.</prosody></speak>",
                    "en": "— The fountain square is the peaceful heart of the town. A moment of rest restores the spirit.",
                    "ru": "— Площадь с фонтаном — мирное сердце города. Минута отдыха восстанавливает силы духа."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— What remains on our shopping checklist before we return to the cart, Professor?</prosody></speak>",
                    "en": "— What remains on our shopping list before we return to the cart, Teacher?",
                    "ru": "— Что осталось в нашем списке покупок перед возвращением к повозке, профессор?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Only five heavy reams of writing parchment from the paper merchant by the river.</prosody></speak>",
                    "en": "— Only five big bundles of writing paper from the paper merchant by the river.",
                    "ru": "— Только пять тяжелых стопок пергамента для записей от торговца бумагой у реки."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Then let us finish packing our lunch cloth and pick up the paper crates!</prosody></speak>",
                    "en": "— Then let us finish packing our lunch cloth and pick up the paper crates!",
                    "ru": "— Тогда давайте сложим нашу салфетку от обеда и заберем ящики с бумагой!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They tidy up the picnic cloth, drink a final refreshing sip of water, and stand up refreshed.</prosody></speak>",
                    "en": "They tidy up the picnic cloth, drink a final cool and nice sip of water, and stand up feeling good.",
                    "ru": "Они аккуратно убирают скатерть, делают последний освежающий глоток воды и бодро поднимаются на ноги."
                }
            ],
            "quiz": [
                {
                    "question": "What animal is carved in white marble on the central town fountain?",
                    "options": [
                        "A roaring lion spouting clear water",
                        "A swimming fish",
                        "A sleeping cat",
                        "A giant eagle"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "What delicious food did the friends eat for lunch near the fountain?",
                    "options": [
                        "Spicy soup",
                        "Crusty sourdough bread with goat cheese and crisp red apples",
                        "Only sweet candy",
                        "Cold potatoes"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What did Eldrin scatter on the stone ground for the friendly pigeons?",
                    "options": [
                        "Small breadcrumbs",
                        "Shiny silver coins",
                        "Black pepper",
                        "Paper slips"
                    ],
                    "correctIdx": 0
                }
            ]
        },
        {
            "id": "eldrin-ch-19",
            "number": 19,
            "act": 2,
            "titleEn": "Episode 19: Packing the Wooden Cart with Supplies",
            "titleRu": "Эпизод 19: Погрузка припасов в деревянную повозку",
            "grammarFocus": "Cargo & Packing Terms (reams, crates, knots, hemp rope), Prepositions (onto, across, under), Teamwork",
            "wordCount": 457,
            "coverIcon": "fa-boxes-stacked",
            "coverColor": "#eab308",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At three o'clock in the afternoon, the team returns to the wagon yard by Blacksmith Bruno's forge.</prosody></speak>",
                    "en": "At three o'clock in the afternoon, the team returns to the wagon yard by Blacksmith Bruno's forge.",
                    "ru": "В три часа дня команда возвращается во двор повозок возле кузницы мастера Бруно."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Farmer Barnaby is brushing Daisy and Clover's glossy brown coats with a soft wooden currycomb.</prosody></speak>",
                    "en": "Farmer Barnaby is brushing White flower and Small green plant's shiny brown coats with a soft wooden horse brush.",
                    "ru": "Фермер Барнаби чистит лоснящуюся коричневую шерсть Дейзи и Клевера мягкой деревянной скребницей."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Welcome back, students! <break time=\"300ms\"/> The horses are well-fed, and the repaired back wheel is sturdy as a mountain!</prosody></speak>",
                    "en": "— Welcome back, students! The horses are well-fed, and the repaired back wheel is sturdy as a mountain!",
                    "ru": "— С возвращением, ученые! Лошади накормлены, а починенное заднее колесо крепкое как скала!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Splendid! Now let us load all our acquired Academy cargo into the cart bed methodically.</prosody></speak>",
                    "en": "— Very good! Now let us load all our got Academy things into the cart bed carefully.",
                    "ru": "— Замечательно! Теперь давайте методично погрузим весь наш закупленный груз для Академии в кузов повозки."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I have Master Corvinus's official checklist right here in my green notebook. Let us verify each item!</prosody></speak>",
                    "en": "— I have Master Corvinus's official list right here in my green notebook. Let us check each item!",
                    "ru": "— У меня прямо тут в зеленом блокноте официальный список покупок Мастера Корвинуса. Давайте проверим каждый пункт!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Item one: Two large linen sacks of fresh mountain thyme from Selma.</prosody></speak>",
                    "en": "— Item one: Two large cloth sacks of fresh mountain small herb from Selma.",
                    "ru": "— Пункт первый: два больших льняных мешка свежего горного тимьяна от Сельмы."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Placed in the dry front corner under the driver's bench! Checked!</prosody></speak>",
                    "en": "— Placed in the dry front corner under the driver's bench! Checked!",
                    "ru": "— Уложены в сухом переднем углу под козлами! Проверено!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Item two: One glass jar of blue iris root powder.</prosody></speak>",
                    "en": "— Item two: One glass jar of blue flower root powder.",
                    "ru": "— Пункт второй: одна стеклянная баночка порошка корня синего ириса."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Safely packed in soft wool inside Eldrin's leather backpack! Checked!</prosody></speak>",
                    "en": "— Safely packed in soft wool inside Eldrin's leather bag! Checked!",
                    "ru": "— Надежно упакована в мягкую шерсть внутри кожаного рюкзака Элдрина! Проверено!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Item three: Three bronze travel lanterns from the cellar.</prosody></speak>",
                    "en": "— Item three: Three metal travel lanterns from the cellar.",
                    "ru": "— Пункт третий: три бронзовых дорожных фонаря из подвала."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Two lanterns put up on the front cart rails, and the third resting safely in the tool box! <break time=\"300ms\"/> Checked!</prosody></speak>",
                    "en": "— Two lanterns put up on the front cart rails, and the third resting safely in the tool box! Checked!",
                    "ru": "— Два фонаря закреплены на передних поручнях повозки, а третий надежно лежит в ящике для инструментов! Проверено!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Item four: Five heavy wooden crates containing clean writing parchment reams from the paper mill.</prosody></speak>",
                    "en": "— Item four: Five heavy wooden crates containing clean writing paper from the paper mill.",
                    "ru": "— Пункт четвертый: пять тяжелых деревянных ящиков со стопками чистого пергамента для записей с бумажной фабрики."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Leo lift the first heavy wooden crate of parchment. One, two, lift!</prosody></speak>",
                    "en": "Eldrin and Leo lift the first heavy wooden crate of paper. One, two, lift!",
                    "ru": "Элдрин и Лео поднимают первый тяжелый деревянный ящик с пергаментом. Раз, два, подъем!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They slide the wooden crates onto the bed of the cart, lining them up evenly against the sideboards.</prosody></speak>",
                    "en": "They slide the wooden crates onto the bed of the cart, lining them up evenly against the sides.",
                    "ru": "Они задвигают деревянные ящики в кузов повозки, ровно выстраивая их вдоль бортов."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is five crates of paper! The cart bed is full and neatly organized.</prosody></speak>",
                    "en": "— That is five crates of paper! The cart bed is full and carefully organized.",
                    "ru": "— Это пять ящиков бумаги! Кузов повозки полон и аккуратно уложен."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Now comes the most critical step: securing the cargo so nothing slides or falls on the steep mountain climb.</prosody></speak>",
                    "en": "— Now comes the most critical step: making safe the things so nothing slides or falls on the steep mountain climb.",
                    "ru": "— А теперь самый важный шаг: закрепить груз, чтобы ничего не съехало и не упало на крутом подъеме в гору."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— That is my specialty! Hand me that twenty-meter coil of strong hemp rope from my backpack!</prosody></speak>",
                    "en": "— That is my special thing! Hand me that twenty-meter roll of strong thick rope from my bag!",
                    "ru": "— Это моя специальность! Передай мне тот двадцатиметровый моток крепкой пеньковой веревки из моего рюкзака!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira threads the thick hemp rope through the heavy iron rings on the cart's wooden sideboards.</prosody></speak>",
                    "en": "Kira threads the thick rope through the heavy iron rings on the cart's wooden sides.",
                    "ru": "Кира продевает толстую пеньковую веревку через тяжелые железные кольца на бортах повозки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">She weaves the rope criss-cross over the wooden crates like a strong spiderweb.</prosody></speak>",
                    "en": "She weaves the rope criss-cross over the wooden crates like a strong spider web.",
                    "ru": "Она переплетает веревку крест-накрест поверх деревянных ящиков, как прочную паутину."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Eldrin, grab the end of the rope and pull down hard with me on three!</prosody></speak>",
                    "en": "— Eldrin, grab the end of the rope and pull down hard with me on three!",
                    "ru": "— Элдрин, перехвати конец веревки и потяни вниз со всей силы вместе со мной на счет три!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Ready! One, two, three — PULL!</prosody></speak>",
                    "en": "— Ready! One, two, three — PULL!",
                    "ru": "— Готов! Раз, два, три — ТЯНИ!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They pull together with all their strength. Kira loops the rope and ties a double sailor's hitch knot.</prosody></speak>",
                    "en": "They pull together with all their strength. Kira loops the rope and ties a double boat man's tie knot.",
                    "ru": "Они тянут вместе изо всех сил. Кира делает петлю и завязывает двойной морской узел."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Snap! The knot locks tight. Eldrin shakes the top crate with both hands.</prosody></speak>",
                    "en": "Snap! The knot locks tight. Eldrin shakes the top crate with both hands.",
                    "ru": "Щелк! Узел намертво затягивается. Элдрин трясет верхний ящик обеими руками."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— It does not move a single millimeter! It is solid as a stone wall!</prosody></speak>",
                    "en": "— It does not move a single tiny bit! It is solid as a stone wall!",
                    "ru": "— Он не сдвинулся ни на миллиметр! Держится крепко, как каменная стена!"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— That is a master-level tie knot, young lady! <break time=\"300ms\"/> Very good teamwork!</prosody></speak>",
                    "en": "— That is a master-level tie knot, young lady! Very good teamwork!",
                    "ru": "— Это узел мастерского уровня, юная леди! Выдающаяся командная работа!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Every single item on our list is verified, loaded, and secured. We are ready to depart.</prosody></speak>",
                    "en": "— Every single item on our list is checked, loaded, and safe now. We are ready to leave.",
                    "ru": "— Каждый пункт из нашего списка проверен, погружен и закреплен. Мы готовы к отъезду."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Climb into the back, Eldrin! Find your soft hay seat!</prosody></speak>",
                    "en": "— Climb into the back, Eldrin! Find your soft hay seat!",
                    "ru": "— Залезай назад, Элдрин! Занимай свое мягкое место на сене!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira climb into the cart bed. Master Corvinus sits comfortably beside Barnaby on the bench.</prosody></speak>",
                    "en": "Eldrin and Kira climb into the cart bed. Master Corvinus sits nicely beside Barnaby on the bench.",
                    "ru": "Элдрин и Кира забираются в кузов. Мастер Корвинус удобно садится рядом с Барнаби на козлы."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Giddy-up, White flower! <break time=\"300ms\"/> Giddy-up, Small green plant! <break time=\"300ms\"/> Take us home to the Spire!</prosody></speak>",
                    "en": "— Giddy-up, White flower! Giddy-up, Small green plant! Take us home to the Spire!",
                    "ru": "— Но, Дейзи! Но, Клевер! Везите нас домой в Шпиль!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The horses lean into their leather harnesses, and the heavy cart rolls smoothly out of the town square.</prosody></speak>",
                    "en": "The horses lean into their leather ropes, and the heavy cart rolls smoothly out of the town square.",
                    "ru": "Лошади натягивают кожаную упряжь, и груженая повозка плавно выезжает с городской площади."
                }
            ],
            "quiz": [
                {
                    "question": "How many crates of clean writing parchment were loaded onto the cart bed?",
                    "options": [
                        "One crate",
                        "Five heavy wooden crates",
                        "Fifty crates",
                        "None"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What type of knot did Kira tie to secure the hemp rope across the cargo?",
                    "options": [
                        "A loose bow",
                        "A double sailor's hitch knot",
                        "A shoe knot",
                        "A simple loop"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "How did Eldrin test that the crates were properly secured?",
                    "options": [
                        "He kicked them",
                        "He shook the top crate with both hands to ensure it didn't move",
                        "He sat on them",
                        "He asked the horse"
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
            "grammarFocus": "Sunset & Dusk Vocabulary, Past Simple Reflections, Act II Grand Finale",
            "wordCount": 468,
            "coverIcon": "fa-mountain-sun",
            "coverColor": "#f43f5e",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The wooden cart rolls through the massive archway of the North Gate.</prosody></speak>",
                    "en": "The wooden cart rolls through the massive big doorway of the North Gate.",
                    "ru": "Деревянная повозка проезжает через массивную арку Северных Ворот."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Captain Vance waves his steel-clad hand from the guardhouse watchtower.</prosody></speak>",
                    "en": "Captain Vance waves his steel-covered hand from the guard room tall tower.",
                    "ru": "Капитан Вэнс машет рукой в латной перчатке со сторожевой башни караулки."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-3.5st\">— Safe journey up the mountain pass, Teacher Corvinus! <break time=\"300ms\"/> See you next season!</prosody></speak>",
                    "en": "— Safe journey up the mountain pass, Teacher Corvinus! See you next season!",
                    "ru": "— Счастливого пути через горный перевал, профессор Корвинус! До встречи в следующем сезоне!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Goodbye, Captain Vance! Thank you for watching over the city gates!</prosody></speak>",
                    "en": "— Goodbye, Captain Vance! Thank you for watching over the city gates!",
                    "ru": "— До свидания, капитан Вэнс! Спасибо, что охраняете городские ворота!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The heavy cart crosses the wooden bridge and begins its steady climb up the turning mountain road.</prosody></speak>",
                    "en": "The heavy cart crosses the wooden bridge and begins its steady climb up the turning mountain road.",
                    "ru": "Тяжелая повозка переезжает деревянный подъемный мост и начинает размеренный подъем по извилистой горной дороге."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The late afternoon sun sinks low behind the rugged western mountain peaks.</prosody></speak>",
                    "en": "The late afternoon sun sinks low behind the rough western mountain peaks.",
                    "ru": "Предвечернее солнце опускается за скалистые западные горные вершины."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Brilliant bands of fiery gold, blazing orange, deep crimson, and royal purple stretch across the sky.</prosody></speak>",
                    "en": "Brilliant bands of very hot gold, very bright orange, deep dark red, and royal purple stretch across the sky.",
                    "ru": "Яркие полосы огненного золота, пылающего оранжевого, глубокого малинового и царственного пурпура простираются по небу."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look at that breathtaking sunset, Eldrin! The mountain clouds look like they are on fire!</prosody></speak>",
                    "en": "— Look at that very beautiful sunset, Eldrin! The mountain clouds look like they are on fire!",
                    "ru": "— Посмотри на этот захватывающий дух закат, Элдрин! Облака над горами словно объяты пламенем!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— It is the most magnificent sky I have ever seen in my whole life.</prosody></speak>",
                    "en": "— It is the most very beautiful sky I have ever seen in my whole life.",
                    "ru": "— Это самое великолепное небо, которое я когда-либо видел в своей жизни."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Dusk settles over the valley. The air turns cool, crisp, and fragrant with evergreen pine needles.</prosody></speak>",
                    "en": "Evening settles over the valley. The air turns cool, crisp, and nice smelling with green tall tree needles.",
                    "ru": "Сумерки опускаются на долину. Воздух становится прохладным, бодрящим и напоенным ароматом сосновой хвои."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.90\" pitch=\"-2.5st\">— Time to light our path, friends! <break time=\"300ms\"/> Darkness falls fast in the high mountains.</prosody></speak>",
                    "en": "— Time to light our path, friends! Darkness falls fast in the high mountains.",
                    "ru": "— Пора осветить наш путь, путники! Темнота в высоких горах опускается быстро."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Barnaby strikes a match. He lights the twin bronze travel lanterns mounted on the cart's front rail.</prosody></speak>",
                    "en": "Barnaby strikes a match. He lights the twin metal travel lanterns put up on the cart's front rail.",
                    "ru": "Барнаби чиркает спичкой. Он зажигает парные бронзовые дорожные фонари на переднем поручне повозки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Two warm pools of golden light lights up the gravel road ahead of White flower and Small green plant's steady hooves.</prosody></speak>",
                    "en": "Two warm pools of golden light lights up the gravel road ahead of White flower and Small green plant's steady hooves.",
                    "ru": "Два теплых круга золотого света освещают гравийную дорогу перед мерно шагающими копытами Дейзи и Клевера."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look down at the valley below through the pine branches!</prosody></speak>",
                    "en": "— Look down at the valley below through the tall tree branches!",
                    "ru": "— Посмотри вниз на долину сквозь сосновые ветви!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Wow! Hundreds of little yellow lanterns are turning on across the Lower Town.</prosody></speak>",
                    "en": "— Wow! Hundreds of little yellow lanterns are turning on across the Lower Town.",
                    "ru": "— Ого! Сотни маленьких желтых фонариков зажигаются по всему Нижнему Городу."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— They twinkle in the dusk like a cluster of fallen stars resting on the dark green grass.</prosody></speak>",
                    "en": "— They twinkle in the evening like a cluster of fallen stars resting on the dark green grass.",
                    "ru": "— Они мерцают в сумерках, как россыпь упавших звезд на темно-зеленой траве."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin pulls out his new navy-blue star book from his backpack.</prosody></speak>",
                    "en": "Eldrin pulls out his new navy-blue star book from his bag.",
                    "ru": "Элдрин достает свою новую темно-синюю звездную книгу из рюкзака."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the soft amber glow of the cart lantern, he opens the pages and traces the silver constellation lines.</prosody></speak>",
                    "en": "In the soft amber glow of the cart lantern, he opens the pages and traces the silver star picture lines.",
                    "ru": "В мягком янтарном свете фонаря повозки он открывает страницы и проводит пальцем по серебряным линиям созвездий."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— We accomplished so much today, Eldrin! We bought delicious pretzels, weighed spices, fixed the wheel, and saved little Smokey!</prosody></speak>",
                    "en": "— We finished so much today, Eldrin! We bought delicious twisted breads, weighed spices, fixed the wheel, and saved little Smokey!",
                    "ru": "— Мы столько всего успели сегодня, Элдрин! Мы купили вкусные брецели, взвесили пряности, починили колесо и спасли маленького Дымка!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And you tied the most wonderful rope knots, Kira! Everything arrived completely safe and sound.</prosody></speak>",
                    "en": "— And you tied the most wonderful rope knots, Kira! Everything arrived completely safe and sound.",
                    "ru": "— А ты завязала самые чудесные узлы, Кира! Все доехало в целости и сохранности."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— You both demonstrated extraordinary teamwork, kindness, diligence, and responsibility today.</prosody></speak>",
                    "en": "— You both showed very special teamwork, kindness, hard work, and important job today.",
                    "ru": "— Вы оба продемонстрировали сегодня выдающуюся командную работу, доброту, прилежание и ответственность."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— A scholar's true education happens not only inside books, but in how he treats the world around him.</prosody></speak>",
                    "en": "— A student's true education happens not only inside books, but in how he treats the world around him.",
                    "ru": "— Истинное образование ученого происходит не только в книгах, но и в том, как он относится к окружающему миру."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— I am deeply proud of both of you. You are true apprentice scholars of the Spire.</prosody></speak>",
                    "en": "— I am deeply proud of both of you. You are true apprentice students of the Spire.",
                    "ru": "— Я глубоко горжусь вами обоими. Вы настоящие ученики Академии Шпиля."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Ahead on the highest mountain peak, the majestic stone towers of the Spire rise into the starry twilight.</prosody></speak>",
                    "en": "Ahead on the highest mountain peak, the very big stone towers of the Spire rise into the full of stars evening light.",
                    "ru": "Впереди на высочайшей горной вершине величественные каменные башни Шпиля устремляются в звездные сумерки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Warm amber light shines from dozens of high arched windows, welcoming the travelers home.</prosody></speak>",
                    "en": "Warm amber light shines from dozens of high arched windows, welcoming the friends home.",
                    "ru": "Теплый янтарный свет льется из десятков высоких арочных окон, приветствуя путешественников дома."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The great wooden gates swing open smoothly. Leo stands in the illuminated courtyard waving both hands.</prosody></speak>",
                    "en": "The great wooden gates swing open smoothly. Leo stands in the bright courtyard waving both hands.",
                    "ru": "Огромные деревянные ворота плавно распахиваются. Лео стоит в освещенном дворе, маша обеими руками."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Welcome home, travelers! The fireplace is roaring, and hot herbal soup is waiting on the table!</prosody></speak>",
                    "en": "— Welcome home, friends! The fireplace is very loud, and hot herbal soup is waiting on the table!",
                    "ru": "— С возвращением домой, путники! Камин пылает, а горячий травяной суп уже ждет на столе!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Leo! We brought five crates of paper, aromatic herbs, and the most incredible stories to tell you!</prosody></speak>",
                    "en": "— Leo! We brought five crates of paper, nice smelling herbs, and the most incredible stories to tell you!",
                    "ru": "— Лео! Мы привезли пять ящиков бумаги, ароматные травы и самые невероятные истории, чтобы рассказать тебе!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They hop down into the warm, safe courtyard. Act Two comes to a triumphant and peaceful close as the stars shine bright above.</prosody></speak>",
                    "en": "They hop down into the warm, safe courtyard. Act Two comes to a very happy and peaceful close as the stars shine bright above.",
                    "ru": "Они спрыгивают в теплый, безопасный двор. Второй Акт победоносно и мирно завершается, пока яркие звезды сияют в вышине."
                }
            ],
            "quiz": [
                {
                    "question": "What colors painted the sky as the cart climbed the mountain at sunset?",
                    "options": [
                        "Fiery gold, blazing orange, crimson, and royal purple",
                        "Pure pitch black only",
                        "Grey and brown",
                        "Dark green"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "What did Farmer Barnaby light on the cart to illuminate the dark road?",
                    "options": [
                        "A giant bonfire",
                        "Twin bronze travel lanterns with warm golden light",
                        "Electric flashlights",
                        "Wax matches only"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Who welcomed the travelers back into the Spire's warm illuminated courtyard?",
                    "options": [
                        "Leo with a roaring fireplace and hot soup",
                        "A stranger",
                        "Nobody, it was empty",
                        "A scary guard"
                    ],
                    "correctIdx": 0
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = { ELDRIN_AUDIOBOOK };
}
