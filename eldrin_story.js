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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Good morning, boys! What would you like on your breakfast tray today?</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Here is your steaming porridge, young man! And a cup of fresh milk for you.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Of course! Here are two fresh slices and a big spoon of sweet red jam. Enjoy your meal!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Oh no! My breakfast! My apples are rolling away under the benches!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Thank you so much, Eldrin! Thank you, Leo and Kira! You are so kind.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Mmm! This is the most delicious breakfast in the world! Thank you, friends!</prosody></speak>",
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
            "wordCount": 507,
            "coverIcon": "fa-envelope-open-text",
            "coverColor": "#6366f1",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">It is four o'clock in the afternoon. A loud knock echoes on the thick oak front door.</prosody></speak>",
                    "en": "It is four o'clock in the afternoon. A loud knock echoes on the thick big tree front door.",
                    "ru": "Четыре часа дня. Громкий стук разносится по толстой дубовой входной двери."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin opens the door. A tall postman in a long grey wool coat stands on the porch.</prosody></speak>",
                    "en": "Eldrin opens the door. A tall postman in a long grey wool coat stands on the porch.",
                    "ru": "Элдрин открывает дверь. Высокий почтальон в длинном сером шерстяном пальто стоит на крыльце."
                },
                {
                    "speaker": "postman",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Good afternoon, young apprentice. Is Master Corvinus in his study room upstairs?</prosody></speak>",
                    "en": "— Good afternoon, young apprentice. Is Master Corvinus in his study room upstairs?",
                    "ru": "— Добрый день, юный ученик. Мастер Корвинус у себя в кабинете наверху?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good afternoon, sir! Yes, the master is reading an ancient manuscript in his study.</prosody></speak>",
                    "en": "— Good afternoon, sir! Yes, the master is reading an ancient manuscript in his study.",
                    "ru": "— Добрый день, сэр! Да, мастер читает древнюю рукопись в своем кабинете."
                },
                {
                    "speaker": "postman",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Here is an urgent letter from the Mayor of the Lower Town. Please deliver it safely into his hands.</prosody></speak>",
                    "en": "— Here is an urgent letter from the Mayor of the Lower Town. Please deliver it safely into his hands.",
                    "ru": "— Вот срочное письмо от мэра Нижнего Города. Пожалуйста, передайте его лично ему в руки."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The postman hands over a thick cream envelope with a shiny red wax seal shaped like a wise owl.</prosody></speak>",
                    "en": "The postman hands over a thick cream envelope with a shiny red wax seal shaped like a wise owl.",
                    "ru": "Почтальон передает плотный кремовый конверт с блестящей красной сургучной печатью в виде мудрой совы."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you, sir! I will take it to him right this second. Have a safe journey back!</prosody></speak>",
                    "en": "— Thank you, sir! I will take it to him right this second. Have a safe journey back!",
                    "ru": "— Спасибо, сэр! Я отнесу его сию же секунду. Счастливого пути обратно!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin runs up the stone tower stairs. He knocks gently on the master's wooden door.</prosody></speak>",
                    "en": "Eldrin runs up the stone tower stairs. He knocks gently on the master's wooden door.",
                    "ru": "Элдрин бежит вверх по каменной лестнице башни. Он тихонько стучит в деревянную дверь мастера."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Come in, Eldrin. What brings you to my study this afternoon?</prosody></speak>",
                    "en": "— Come in, Eldrin. What brings you to my study this afternoon?",
                    "ru": "— Войди, Элдрин. Что привело тебя в мой кабинет сегодня днем?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Master Corvinus, the town postman just brought an important letter with a red owl seal!</prosody></speak>",
                    "en": "— Master Corvinus, the town postman just brought an important letter with a red owl seal!",
                    "ru": "— Мастер Корвинус, городской почтальон только что принес важное письмо с печатью в виде красной совы!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Ah, the official message from the city! Thank you, my boy. Let me read it immediately.</prosody></speak>",
                    "en": "— Ah, the official message from the city! Thank you, my boy. Let me read it immediately.",
                    "ru": "— А, официальное послание из города! Спасибо, мой мальчик. Дай я немедленно прочту его."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The old master pats his pockets. He looks on his wide desk covered with books and maps.</prosody></speak>",
                    "en": "The old master pats his pockets. He looks on his wide desk covered with books and maps.",
                    "ru": "Старый мастер похлопывает по карманам. Он осматривает свой широкий стол, заваленный книгами и картами."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Oh dear me. Where did I leave my silver reading glasses? I cannot read the small letters without them.</prosody></speak>",
                    "en": "— Oh dear me. Where did I leave my silver reading glasses? I cannot read the small letters without them.",
                    "ru": "— О боже мой. Где же я оставил свои серебряные очки для чтения? Я не могу разобрать мелкие буквы без них."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Do not worry, Professor. Sit comfortably in your armchair. I will find them for you!</prosody></speak>",
                    "en": "— Do not worry, Teacher. Sit nicely in your big chair. I will find them for you!",
                    "ru": "— Не переживайте, профессор. Устраивайтесь поудобнее в кресле. Я найду их для вас!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin begins searching the cozy, circular tower room methodically.</prosody></speak>",
                    "en": "Eldrin begins searching the cozy, circular tower room carefully.",
                    "ru": "Элдрин начинает методично обыскивать уютную круглую комнату башни."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Are they inside the top wooden drawer of your writing desk?</prosody></speak>",
                    "en": "— Are they inside the top wooden drawer of your writing desk?",
                    "ru": "— Они в верхнем деревянном ящике вашего письменного стола?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin opens the desk drawer. Inside are only black quills, a small brass bell, and clean paper.</prosody></speak>",
                    "en": "Eldrin opens the desk drawer. Inside are only black pens, a small yellow metal bell, and clean paper.",
                    "ru": "Элдрин открывает ящик стола. Внутри только черные перья, маленький латунный колокольчик и чистая бумага."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Not in the drawer. What about the tall bookshelf near the globe?</prosody></speak>",
                    "en": "— Not in the drawer. What about the tall shelf near the globe?",
                    "ru": "— В ящике нет. А как насчет высокой книжной полки возле глобуса?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He checks the second shelf and the third shelf. Only dusty leather books rest there.</prosody></speak>",
                    "en": "He checks the second shelf and the third shelf. Only dusty leather books rest there.",
                    "ru": "Он проверяет вторую и третью полки. Там стоят только пыльные кожаные книги."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Not on the bookshelf. Let me look near the large arched window with the sunshine.</prosody></speak>",
                    "en": "— Not on the shelf. Let me look near the large arched window with the sunshine.",
                    "ru": "— На полке нет. Посмотрю-ка я возле большого арочного окна с солнечным светом."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">On the wide stone windowsill, next to a blooming purple flowerpot, two silver glass rims glisten in the sun.</prosody></speak>",
                    "en": "On the wide stone window edge, next to a blooming purple flowerpot, two silver glass rims glisten in the sun.",
                    "ru": "На широком каменном подоконнике, рядом с цветущим фиолетовым горшком, на солнце блестят две серебряные оправы."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here they are, Master! Your silver glasses are resting on the sunny windowsill!</prosody></speak>",
                    "en": "— Here they are, Master! Your silver glasses are resting on the sunny window edge!",
                    "ru": "— Вот же они, Мастер! Ваши серебряные очки лежат на солнечном подоконнике!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Wonderful eyes, Eldrin! Thank you very much. I put them down when I watered the flowers.</prosody></speak>",
                    "en": "— Wonderful eyes, Eldrin! Thank you very much. I put them down when I watered the flowers.",
                    "ru": "— Прекрасное зрение, Элдрин! Большое спасибо. Я положил их туда, когда поливал цветы."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus puts on the silver glasses and carefully breaks the red wax seal with a letter knife.</prosody></speak>",
                    "en": "Master Corvinus puts on the silver glasses and carefully breaks the red wax seal with a letter knife.",
                    "ru": "Мастер Корвинус надевает серебряные очки и аккуратно вскрывает красную печать ножом для писем."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Let us see what the Mayor writes... Ah! Splendid news! Truly wonderful news!</prosody></speak>",
                    "en": "— Let us see what the Mayor writes... Ah! Very good news! Truly wonderful news!",
                    "ru": "— Посмотрим, что пишет мэр... А! Великолепные новости! Поистине чудесные новости!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— What does the letter say, Professor? Is it a secret?</prosody></speak>",
                    "en": "— What does the letter say, Teacher? Is it a secret?",
                    "ru": "— Что написано в письме, профессор? Это секрет?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— No secret at all! Tomorrow is the Grand Autumn Market in the Lower Town square!</prosody></speak>",
                    "en": "— No secret at all! Tomorrow is the Grand Autumn Market in the Lower Town square!",
                    "ru": "— Вовсе не секрет! Завтра на площади Нижнего Города проходит Большой Осенний Рынок!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The Academy needs fresh supplies: mountain herbs, writing parchment, and new lantern oil.</prosody></speak>",
                    "en": "— The Academy needs fresh supplies: mountain herbs, writing paper, and new lantern oil.",
                    "ru": "— Академии нужны свежие припасы: горные травы, бумага для писем и новое ламповое масло."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Are we going down to the town market together in the morning?</prosody></speak>",
                    "en": "— Are we going down to the town market together in the morning?",
                    "ru": "— Мы поедем на городской рынок вместе завтра утром?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Yes! You and Kira will accompany me in the morning horse cart to help choose the supplies.</prosody></speak>",
                    "en": "— Yes! You and Kira will accompany me in the morning horse cart to help choose the supplies.",
                    "ru": "— Да! Ты и Кира поедете со мной на утренней повозке, чтобы помочь выбрать припасы."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Hooray! That will be my first trip to the market! I will get my boots and bag ready right now!</prosody></speak>",
                    "en": "— Hooray! That will be my first trip to the market! I will get my boots and bag ready right now!",
                    "ru": "— Ура! Это будет моя первая поездка на рынок! Я прямо сейчас приготовлю сапоги и сумку!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Get a good night of sleep, Eldrin. The horse cart leaves at sunrise tomorrow!</prosody></speak>",
                    "en": "— Get a good night of sleep, Eldrin. The horse cart leaves at sunrise tomorrow!",
                    "ru": "— Выспись как следует, Элдрин. Повозка отправляется завтра на рассвете!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin smiles with excitement as he runs back to his dormitory to share the news with Leo.</prosody></speak>",
                    "en": "Eldrin smiles with excitement as he runs back to his bedroom to share the news with Leo.",
                    "ru": "Элдрин взволнованно улыбается и бежит обратно в общежитие, чтобы поделиться новостью с Лео."
                }
            ],
            "quiz": [
                {
                    "question": "What kind of animal was stamped on the red wax seal of the letter?",
                    "options": [
                        "A fierce dragon",
                        "A wise owl",
                        "A fast horse",
                        "A sleeping cat"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Where did Eldrin find Professor Corvinus's reading glasses?",
                    "options": [
                        "Inside the table drawer",
                        "Under the bed",
                        "On the sunny windowsill next to a purple flowerpot",
                        "In the kitchen"
                    ],
                    "correctIdx": 2
                },
                {
                    "question": "What exciting event is happening in the Lower Town tomorrow?",
                    "options": [
                        "A big sword fight",
                        "The Grand Autumn Market",
                        "A heavy winter storm",
                        "A horse race"
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
            "wordCount": 495,
            "coverIcon": "fa-cloud-showers-heavy",
            "coverColor": "#0ea5e9",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the late afternoon, heavy dark clouds cover the sky over the Spire. The daylight turns grey and dim.</prosody></speak>",
                    "en": "In the late afternoon, heavy dark clouds cover the sky over the Spire. The daylight turns grey and dim.",
                    "ru": "Ближе к вечеру тяжелые темные тучи затягивают небо над Шпилем. Дневной свет становится серым и тусклым."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Cold wind blows strongly around the high stone towers. Loud raindrops tap like drums against the glass windows.</prosody></speak>",
                    "en": "Cold wind blows strongly around the high stone towers. Loud rain drops tap like drums against the glass windows.",
                    "ru": "Холодный ветер с силой дует вокруг высоких каменных башен. Громкие капли дождя стучат, как барабаны, в стеклянные окна."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin climbs up the wooden ladder to the attic to close the top roof windows.</prosody></speak>",
                    "en": "Eldrin climbs up the wooden ladder to the attic to close the top roof windows.",
                    "ru": "Элдрин поднимается по деревянной лестнице на чердак, чтобы закрыть верхние окна на крыше."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Brrr! The wind is freezing up here! I must close all five wooden shutters before the rain gets inside.</prosody></speak>",
                    "en": "— Brrr! The wind is freezing up here! I must close all five wooden window covers before the rain gets inside.",
                    "ru": "— Брр! Ветер тут наверху ледяной! Я должен закрыть все пять деревянных ставен, пока дождь не попал внутрь."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He pulls the heavy wooden shutters shut one by one. Click, clack, thud! All five shutters are securely latched.</prosody></speak>",
                    "en": "He pulls the heavy wooden window covers shut one by one. Click, clack, thud! All five window covers are safely latched.",
                    "ru": "Он захлопывает тяжелые деревянные ставни одну за другой. Щелк, стук, бам! Все пять ставен надежно заперты."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Done! But my hair is completely wet, and my woollen jacket feels icy cold.</prosody></speak>",
                    "en": "— Done! But my hair is completely wet, and my warm wool jacket feels icy cold.",
                    "ru": "— Готово! Но мои волосы совсем мокрые, а шерстяная куртка ледяная на ощупь."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin hurries down the stairs to the warm academy kitchen on the first floor.</prosody></speak>",
                    "en": "Eldrin hurries down the stairs to the warm academy kitchen on the first floor.",
                    "ru": "Элдрин спешит вниз по лестнице на теплую кухню академии на первом этаже."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Inside the kitchen, orange flames dance cheerfully in the wide stone fireplace.</prosody></speak>",
                    "en": "Inside the kitchen, orange flames dance cheerfully in the wide stone fireplace.",
                    "ru": "На кухне оранжевые языки пламени весело пляшут в широком каменном камине."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Leo stands near the hearth, stirring a large copper kettle of boiling water.</prosody></speak>",
                    "en": "Leo stands near the fireplace, stirring a large copper kettle of boiling water.",
                    "ru": "Лео стоит возле очага, помешивая большой медный чайник с закипающей водой."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Welcome back, Eldrin! Come stand close to the fire. You look like a wet puppy!</prosody></speak>",
                    "en": "— Welcome back, Eldrin! Come stand close to the fire. You look like a wet puppy!",
                    "ru": "— С возвращением, Элдрин! Подойди ближе к огню. Ты похож на мокрого щенка!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— The rain is pouring so hard outside! Ah, the fireplace feels wonderfully warm on my cold hands.</prosody></speak>",
                    "en": "— The rain is pouring so hard outside! Ah, the fireplace feels wonderfully warm on my cold hands.",
                    "ru": "— Дождь на улице льет как из ведра! Ах, камин так чудесно греет мои озябшие руки."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Hang your wet jacket on this wooden peg by the hearth. It will be dry in twenty minutes.</prosody></speak>",
                    "en": "— Hang your wet jacket on this wooden peg by the fireplace. It will be dry in twenty minutes.",
                    "ru": "— Повесь свою мокрую куртку на этот деревянный крючок у очага. Она высохнет за двадцать минут."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you, Leo. Are you making hot tea for us?</prosody></speak>",
                    "en": "— Thank you, Leo. Are you making hot tea for us?",
                    "ru": "— Спасибо, Лео. Ты завариваешь горячий чай для нас?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Yes! What kind of herbal tea do you want today? We have mint, chamomile, and dried berries.</prosody></speak>",
                    "en": "— Yes! What kind of herbal tea do you want today? We have mint, chamomile, and dried berries.",
                    "ru": "— Да! Какой травяной чай ты хочешь сегодня? У нас есть мята, ромашка и сушеные ягоды."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I love sweet mint tea on a rainy afternoon! Where is the green ceramic jar?</prosody></speak>",
                    "en": "— I love sweet mint tea on a rainy afternoon! Where is the green clay jar?",
                    "ru": "— Я обожаю сладкий мятный чай в дождливый день! Где зеленая керамическая банка?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— It is on the top wooden shelf above the bread box. Can you reach it?</prosody></speak>",
                    "en": "— It is on the top wooden shelf above the bread box. Can you reach it?",
                    "ru": "— Она на верхней деревянной полке над хлебницей. Ты достанешь ее?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin stands on his tiptoes. He gently takes down the green jar and opens the wooden lid.</prosody></speak>",
                    "en": "Eldrin stands on his tiptoes. He gently takes down the green jar and opens the wooden lid.",
                    "ru": "Элдрин встает на цыпочки. Он аккуратно снимает зеленую банку и открывает деревянную крышку."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here it is! Mmm, smell the dried green leaves! They smell so fresh and sweet.</prosody></speak>",
                    "en": "— Here it is! Mmm, smell the dried green leaves! They smell so fresh and sweet.",
                    "ru": "— Вот она! Ммм, понюхай сушеные зеленые листья! Они пахнут так свежо и сладко."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Put two large spoonfuls of mint leaves into the white ceramic teapot.</prosody></speak>",
                    "en": "— Put two large spoonfuls of mint leaves into the white clay teapot.",
                    "ru": "— Положи две большие ложки листьев мяты в белый керамический заварочный чайник."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin spoons the fragrant green leaves into the pot. Leo pours steaming hot water over them.</prosody></speak>",
                    "en": "Eldrin spoons the nice smelling green leaves into the pot. Leo pours steaming hot water over them.",
                    "ru": "Элдрин насыпает ароматные зеленые листья в чайник. Лео заливает их кипящей горячей водой."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Now we must wait five minutes so the tea becomes rich and golden.</prosody></speak>",
                    "en": "— Now we must wait five minutes so the tea becomes rich and golden.",
                    "ru": "— Теперь мы должны подождать пять минут, чтобы чай настоялся и стал насыщенным."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The kitchen door creaks open. Master Corvinus enters, wiping raindrops from his woollen cloak.</prosody></speak>",
                    "en": "The kitchen door creaks open. Master Corvinus enters, wiping rain drops from his warm wool cloak.",
                    "ru": "Кухонная дверь со скрипом открывается. Мастер Корвинус входит, стряхивая капли дождя со своего шерстяного плаща."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good evening, boys. The storm is fierce tonight, but this kitchen smells like heaven.</prosody></speak>",
                    "en": "— Good evening, boys. The storm is fierce tonight, but this kitchen smells like heaven.",
                    "ru": "— Добрый вечер, мальчики. Буря сегодня свирепая, но на этой кухне пахнет просто райски."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good evening, Master Corvinus! Sit with us by the fire! Our hot mint tea is ready.</prosody></speak>",
                    "en": "— Good evening, Master Corvinus! Sit with us by the fire! Our hot mint tea is ready.",
                    "ru": "— Добрый вечер, Мастер Корвинус! Садитесь с нами у огня! Наш горячий мятный чай готов."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Here is a clean clay mug for you, Professor. Would you like some wild flower honey with your tea?</prosody></speak>",
                    "en": "— Here is a clean clay mug for you, Teacher. Would you like some wild flower honey with your tea?",
                    "ru": "— Вот чистая глиняная кружка для вас, профессор. Хотите полевого меда к чаю?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Just one small wooden spoon of honey, please. Thank you, Leo.</prosody></speak>",
                    "en": "— Just one small wooden spoon of honey, please. Thank you, Leo.",
                    "ru": "— Всего одну маленькую деревянную ложечку меда, пожалуйста. Спасибо, Лео."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Leo pours the steaming amber tea into three clay mugs. A sweet herbal cloud rises into the room.</prosody></speak>",
                    "en": "Leo pours the steaming amber tea into three clay mugs. A sweet herbal cloud rises into the room.",
                    "ru": "Лео разливает дымящийся янтарный чай по трем глиняным кружкам. Сладкое травяное облако поднимается в комнате."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Master, will the heavy rain stop before tomorrow morning's market trip?</prosody></speak>",
                    "en": "— Master, will the heavy rain stop before tomorrow morning's market trip?",
                    "ru": "— Мастер, а сильный дождь прекратится до завтрашней утренней поездки на рынок?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Yes, Eldrin. The north wind will blow the rain clouds away before dawn.</prosody></speak>",
                    "en": "— Yes, Eldrin. The north wind will blow the rain clouds away before dawn.",
                    "ru": "— Да, Элдрин. Северный ветер унесет дождевые тучи еще до рассвета."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Tomorrow morning will be crisp, clear, and sunny. The roads will be clean and fresh.</prosody></speak>",
                    "en": "— Tomorrow morning will be crisp, clear, and sunny. The roads will be clean and fresh.",
                    "ru": "— Завтрашнее утро будет бодрящим, ясным и солнечным. Дороги будут чистыми и свежими."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is wonderful news! This hot tea is so soothing and warm.</prosody></speak>",
                    "en": "— That is wonderful news! This hot tea is so calm and nice and warm.",
                    "ru": "— Это чудесные новости! Этот горячий чай такой успокаивающий и теплый."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The three companions sit peacefully by the crackling fire, drinking warm tea while rain drums against the window.</prosody></speak>",
                    "en": "The three friends sit peacefully by the crackling fire, drinking warm tea while rain drums against the window.",
                    "ru": "Трое спутников мирно сидят у потрескивающего огня, попивая теплый чай, пока дождь барабанит в окно."
                }
            ],
            "quiz": [
                {
                    "question": "What did Eldrin close in the attic to keep the storm out?",
                    "options": [
                        "Five wooden shutters",
                        "A big iron safe",
                        "The library door",
                        "A bird cage"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "What kind of tea did Leo and Eldrin prepare in the white ceramic teapot?",
                    "options": [
                        "Black coffee",
                        "Hot mint tea with honey",
                        "Cold apple juice",
                        "Salty soup"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What did Professor Corvinus say about tomorrow morning's weather?",
                    "options": [
                        "It will snow heavily",
                        "The wind will clear the clouds and it will be sunny",
                        "It will rain all day",
                        "A dark fog will cover the school"
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
            "wordCount": 487,
            "coverIcon": "fa-seedling",
            "coverColor": "#10b981",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The sun rises brightly over the distant green mountains. The morning air smells sweet and clean after the rain.</prosody></speak>",
                    "en": "The sun rises with bright light over the distant green mountains. The morning air smells sweet and clean after the rain.",
                    "ru": "Солнце ярко встает над далекими зелеными горами. Утренний воздух пахнет свежестью и чистотой после дождя."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin steps out through the arched glass door onto the wide stone balcony.</prosody></speak>",
                    "en": "Eldrin steps out through the arched glass door onto the wide stone balcony.",
                    "ru": "Элдрин выходит через арочную стеклянную дверь на широкую каменную террасу балкона."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The balcony overlooks the entire green valley below. Long rows of brown clay pots line the stone railing.</prosody></speak>",
                    "en": "The balcony overlooks the entire green valley below. Long rows of brown clay pots line the stone railing.",
                    "ru": "С балкона открывается вид на всю зеленую долину внизу. Длинные ряды коричневых глиняных горшков стоят вдоль каменных перил."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Good morning, Eldrin! Look how happy all the plants are after last night's rainfall!</prosody></speak>",
                    "en": "— Good morning, Eldrin! Look how happy all the plants are after last night's rainfall!",
                    "ru": "— Доброе утро, Элдрин! Посмотри, как радуются все растения после ночного дождя!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good morning, Kira! The garden looks so green and colorful today. How many pots do we have here?</prosody></speak>",
                    "en": "— Good morning, Kira! The garden looks so green and colorful today. How many pots do we have here?",
                    "ru": "— Доброе утро, Кира! Сад выглядит таким зеленым и красочным сегодня. Сколько горшков у нас тут?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Exactly twenty brown clay pots! Ten on the left side, and ten on the right side.</prosody></speak>",
                    "en": "— Exactly twenty brown clay pots! Ten on the left side, and ten on the right side.",
                    "ru": "— Ровно двадцать коричневых глиняных горшков! Десять с левой стороны и десять с правой."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— What can I do to help you care for the garden this morning?</prosody></speak>",
                    "en": "— What can I do to help you care for the garden this morning?",
                    "ru": "— Чем я могу помочь тебе по уходу за садом этим утром?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Take that big green watering can over by the brass water pump. Fill it to the top.</prosody></speak>",
                    "en": "— Take that big green watering can over by the yellow metal water pump. Fill it to the top.",
                    "ru": "— Возьми ту большую зеленую лейку возле латунной водяной колонки. Наполни ее доверху."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin pumps the handle. Clear, cold mountain water gushes into the green can.</prosody></speak>",
                    "en": "Eldrin pumps the handle. Clear, cold mountain water gushes into the green can.",
                    "ru": "Элдрин качает ручку. Чистая, холодная горная вода струится в зеленую лейку."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— The can is full! How much water does each plant need, Kira?</prosody></speak>",
                    "en": "— The can is full! How much water does each plant need, Kira?",
                    "ru": "— Лейка полная! Сколько воды нужно каждому растению, Кира?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— The young green thyme in the small pots needs just a little cup of water.</prosody></speak>",
                    "en": "— The young green small herb in the small pots needs just a little cup of water.",
                    "ru": "— Молодому зеленому тимьяну в маленьких горшках нужна всего одна маленькая чашечка воды."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— But the big rosemary bush in the corner needs half a can because its roots are very deep.</prosody></speak>",
                    "en": "— But the big rosemary bush in the corner needs half a can because its roots are very deep.",
                    "ru": "— А вот большому кусту розмарина в углу нужно пол-лейки, потому что его корни очень глубокие."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin carefully walks along the terrace, pouring water gently over the rich dark soil of each pot.</prosody></speak>",
                    "en": "Eldrin carefully walks along the balcony, pouring water gently over the rich dark soil of each pot.",
                    "ru": "Элдрин аккуратно идет вдоль террасы, бережно поливая плодородную темную землю в каждом горшке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— One, two, three, four... ten pots watered! The soil is drinking the water greedily.</prosody></speak>",
                    "en": "— One, two, three, four... ten pots watered! The soil is drinking the water greedily.",
                    "ru": "— Один, два, три, четыре... десять горшков полито! Земля жадно пьет воду."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira bends over a pot with bright yellow flowers shaped like little golden suns.</prosody></speak>",
                    "en": "Kira bends over a pot with bright yellow flowers shaped like little golden suns.",
                    "ru": "Кира склоняется над горшком с ярко-желтыми цветами, похожими на маленькие золотые солнышки."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at those beautiful yellow flowers! Are they for making perfume or cooking soup?</prosody></speak>",
                    "en": "— Look at those beautiful yellow flowers! Are they for making perfume or cooking soup?",
                    "ru": "— Посмотри на эти красивые желтые цветы! Они для изготовления духов или для супа?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— They are calendula blossoms. Master Corvinus uses their petals to make soothing healing creams.</prosody></speak>",
                    "en": "— They are calendula blossoms. Master Corvinus uses their petals to make calm and nice healing creams.",
                    "ru": "— Это цветы календулы. Мастер Корвинус использует их лепестки для создания заживляющих кремов."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is very useful. Look, there are some dry brown leaves at the base of the stems.</prosody></speak>",
                    "en": "— That is very useful. Look, there are some dry brown leaves at the base of the stems.",
                    "ru": "— Это очень полезно. Смотри, у основания стеблей есть сухие коричневые листья."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Good eyes! We must trim those dry leaves away so the fresh green leaves can grow strong.</prosody></speak>",
                    "en": "— Good eyes! We must trim those dry leaves away so the fresh green leaves can grow strong.",
                    "ru": "— Глаз-алмаз! Мы должны срезать эти сухие листья, чтобы свежие зеленые листочки росли крепкими."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Take these small silver gardening shears. Hold the stem gently with two fingers.</prosody></speak>",
                    "en": "— Take these small silver gardening big scissors. Hold the stem gently with two fingers.",
                    "ru": "— Возьми эти маленькие серебряные садовые ножницы. Придерживай стебель аккуратно двумя пальцами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin takes the sharp silver shears. Snip, snip, snip! He cuts away the dry brown leaves cleanly.</prosody></speak>",
                    "en": "Eldrin takes the sharp silver big scissors. Snip, snip, snip! He cuts away the dry brown leaves cleanly.",
                    "ru": "Элдрин берет острые серебряные ножницы. Чик, чик, чик! Он чисто срезает сухие коричневые листья."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I placed all the trimmed leaves into this woven basket. Look how neat the plant looks now!</prosody></speak>",
                    "en": "— I placed all the trimmed leaves into this woven basket. Look how neat the plant looks now!",
                    "ru": "— Я сложил все срезанные листья в эту плетеную корзинку. Посмотри, как опрятно теперь выглядит растение!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— You have very gentle hands, Eldrin. You are a natural gardener!</prosody></speak>",
                    "en": "— You have very gentle hands, Eldrin. You are a natural gardener!",
                    "ru": "— У тебя очень чуткие руки, Элдрин. Ты прирожденный садовник!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus steps onto the balcony carrying a round wooden bowl.</prosody></speak>",
                    "en": "Master Corvinus steps onto the balcony carrying a round wooden bowl.",
                    "ru": "Мастер Корвинус выходит на балкон с круглой деревянной чашей в руках."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning, my diligent young gardeners! <break time=\"300ms\"/> How is our balcony looking today?</prosody></speak>",
                    "en": "— Good morning, my diligent young gardeners! How is our balcony looking today?",
                    "ru": "— Доброе утро, мои прилежные юные садовники! Как выглядит наша балконная терраса сегодня?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— All twenty pots are watered, weeded, and trimmed, Master Corvinus!</prosody></speak>",
                    "en": "— All twenty pots are watered, weeded, and trimmed, Master Corvinus!",
                    "ru": "— Все двадцать горшков политы, прополоты и подрезаны, Мастер Корвинус!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Wonderful work! <break time=\"300ms\"/> Please pick five fresh sprigs of purple flower for our cart journey.</prosody></speak>",
                    "en": "— Wonderful work! Please pick five fresh sprigs of purple flower for our cart journey.",
                    "ru": "— Прекрасная работа! Пожалуйста, сорвите пять свежих веточек фиолетовой лаванды для нашей поездки на повозке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— One, two, three, four, five sprigs of lavender! Here they are in your bowl, Master.</prosody></speak>",
                    "en": "— One, two, three, four, five sprigs of purple flower! Here they are in your bowl, Master.",
                    "ru": "— Одна, две, три, четыре, пять веточек лаванды! Вот они в вашей чаше, Мастер."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Thank you, Eldrin. Lavender keeps the mind clear and calm during long travel.</prosody></speak>",
                    "en": "— Thank you, Eldrin. Purple flower keeps the mind clear and calm during long travel.",
                    "ru": "— Спасибо, Элдрин. Лаванда сохраняет ум ясным и спокойным во время долгой дороги."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira wash their hands in the cool pump water, admiring the neat green terrace.</prosody></speak>",
                    "en": "Eldrin and Kira wash their hands in the cool pump water, admiring the neat green balcony.",
                    "ru": "Элдрин и Кира моют руки в прохладной воде из колонки, любуясь аккуратной зеленой террасой."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Working outside in the morning sun feels amazing! I am ready for our next task!</prosody></speak>",
                    "en": "— Working outside in the morning sun feels amazing! I am ready for our next task!",
                    "ru": "— Работать на свежем воздухе под утренним солнцем потрясающе! Я готов к следующему заданию!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Come inside, children. We have one more errand in the cellar before we pack our bags.</prosody></speak>",
                    "en": "— Come inside, children. We have one more errand in the cellar before we pack our bags.",
                    "ru": "— Пойдемте внутрь, дети. У нас есть еще одно дело в подвале, прежде чем мы соберем сумки."
                }
            ],
            "quiz": [
                {
                    "question": "How many clay pots are lined along the balcony terrace?",
                    "options": [
                        "Five pots",
                        "Twenty pots",
                        "Fifty pots",
                        "Only two big pots"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What did Eldrin use to trim away the dry brown leaves?",
                    "options": [
                        "A big sword",
                        "Small silver gardening shears",
                        "A wooden stick",
                        "His teeth"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why did Master Corvinus ask for five sprigs of purple lavender?",
                    "options": [
                        "To feed the horses",
                        "To keep the mind clear and calm during travel",
                        "To make blue ink",
                        "To paint a picture"
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
            "wordCount": 488,
            "coverIcon": "fa-dungeon",
            "coverColor": "#64748b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus sits in his armchair in the library. He reviews a long parchment list.</prosody></speak>",
                    "en": "Master Corvinus sits in his big chair in the library. He reviews a long paper list.",
                    "ru": "Мастер Корвинус сидит в своем кресле в библиотеке. Он просматривает длинный список на пергаменте."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Eldrin and Leo, please come here. I need your strong young arms for a heavy task.</prosody></speak>",
                    "en": "— Eldrin and Leo, please come here. I need your strong young arms for a heavy task.",
                    "ru": "— Элдрин и Лео, подойдите сюда, пожалуйста. Мне нужны ваши крепкие молодые руки для тяжелой задачи."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes, Master Corvinus! What do you need us to carry?</prosody></speak>",
                    "en": "— Yes, Master Corvinus! What do you need us to carry?",
                    "ru": "— Да, Мастер Корвинус! Что нам нужно перенести?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— We need three bronze travel lanterns for our horse cart tomorrow morning.</prosody></speak>",
                    "en": "— We need three metal travel lanterns for our horse cart tomorrow morning.",
                    "ru": "— Нам нужны три бронзовых дорожных фонаря для нашей повозки на завтрашнее утро."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— They are stored inside the old oak chest in the cellar beneath the north tower.</prosody></speak>",
                    "en": "— They are stored inside the old big tree chest in the cellar under the north tower.",
                    "ru": "— Они хранятся в старом дубовом сундуке в подвале под северной башней."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— We will go right away, Master! We will bring all three lanterns up to the hallway.</prosody></speak>",
                    "en": "— We will go right away, Master! We will bring all three lanterns up to the hallway.",
                    "ru": "— Мы пойдем прямо сейчас, Мастер! Мы принесем все три фонаря наверх в коридор."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Leo takes a brass candlestick with a thick white wax candle from the shelf and lights it.</prosody></speak>",
                    "en": "Leo takes a yellow metal candlestick with a thick white wax candle from the shelf and lights it.",
                    "ru": "Лео берет с полки латунный подсвечник с толстой белой восковой свечой и зажигает ее."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Leo walk to the end of the stone corridor. They open the thick iron-bound cellar door.</prosody></speak>",
                    "en": "Eldrin and Leo walk to the end of the stone corridor. They open the thick iron-tied cellar door.",
                    "ru": "Элдрин и Лео идут в конец каменного коридора. Они открывают толстую обитую железом дверь подвала."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A cool, damp breeze rises from the dark stairway below. The smell of aged wood and cold stone fills the air.</prosody></speak>",
                    "en": "A cool, damp breeze rises from the dark stairway below. The smell of aged wood and cold stone fills the air.",
                    "ru": "Прохладный, влажный ветерок веет с темной лестницы внизу. Запах старого дерева и холодного камня наполняет воздух."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Hold the handrail tightly, Eldrin. The stone steps are cold and steep.</prosody></speak>",
                    "en": "— Hold the handrail tightly, Eldrin. The stone steps are cold and steep.",
                    "ru": "— Держись крепче за перила, Элдрин. Каменные ступени холодные и крутые."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I am walking slowly behind you, Leo. Let us count the steps together.</prosody></speak>",
                    "en": "— I am walking slowly behind you, Leo. Let us count the steps together.",
                    "ru": "— Я иду медленно за тобой, Лео. Давай посчитаем ступени вместе."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They descend step by step into the quiet underground room.</prosody></speak>",
                    "en": "They descend step by step into the quiet underground room.",
                    "ru": "Они спускаются шаг за шагом в тихую подземную комнату."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— One, two, three, four, five... ten, eleven, twelve! Twelve steps down. We are on the cellar floor.</prosody></speak>",
                    "en": "— One, two, three, four, five... ten, eleven, twelve! Twelve steps down. We are on the cellar floor.",
                    "ru": "— Один, два, три, четыре, пять... десять, одиннадцать, двенадцать! Двенадцать ступеней вниз. Мы на полу подвала."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The flickering yellow candle light casts long shadows across the stone arches.</prosody></speak>",
                    "en": "The flickering yellow candle light casts long shadows across the stone arches.",
                    "ru": "Мерцающий желтый свет свечи отбрасывает длинные тени по каменным сводам."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Tall wooden barrels of apples, sacks of potatoes, and neat stacks of firewood line the walls.</prosody></speak>",
                    "en": "Tall wooden barrels of apples, sacks of potatoes, and neat stacks of firewood line the walls.",
                    "ru": "Высокие деревянные бочки с яблоками, мешки с картошкой и аккуратные штабеля дров стоят вдоль стен."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Look in the far right corner, under the arched stone alcove. There is the oak chest!</prosody></speak>",
                    "en": "— Look in the far right corner, under the arched stone alcove. There is the big tree chest!",
                    "ru": "— Посмотри в дальний правый угол, под арочную каменную нишу. Вон тот дубовый сундук!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They walk over to the massive oak chest. Thick black iron straps reinforce the corners.</prosody></speak>",
                    "en": "They walk over to the massive big tree chest. Thick black iron straps reinforce the corners.",
                    "ru": "Они подходят к массивному дубовому сундуку. Толстые черные железные полосы укрепляют его углы."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Wow, this chest is huge! Let me lift the front iron latch.</prosody></speak>",
                    "en": "— Wow, this chest is huge! Let me lift the front iron lock.",
                    "ru": "— Ого, какой этот сундук огромный! Дай-ка я подниму переднюю железную защелку."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin pulls the heavy iron ring with both hands. The latch does not budge at all.</prosody></speak>",
                    "en": "Eldrin pulls the heavy iron ring with both hands. The lock does not budge at all.",
                    "ru": "Элдрин тянет за тяжелое железное кольцо обеими руками. Защелка не двигается ни на миллиметр."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Ugh! It is completely stuck! The iron is stiff from the cold cellar air.</prosody></speak>",
                    "en": "— Ugh! It is completely stuck! The iron is stiff from the cold cellar air.",
                    "ru": "— Уф! Она намертво застряла! Железо затвердело от холодного подвального воздуха."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Let us pull it together! Put your left hand here, and I will put my right hand there.</prosody></speak>",
                    "en": "— Let us pull it together! Put your left hand here, and I will put my right hand there.",
                    "ru": "— Давай потянем вместе! Положи левую руку сюда, а я положу правую руку туда."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Ready when you are, Leo! Count to three!</prosody></speak>",
                    "en": "— Ready when you are, Leo! Count to three!",
                    "ru": "— Готов, когда ты скажешь, Лео! Считай до трех!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— One... two... three... PULL WITH ALL YOUR MIGHT!</prosody></speak>",
                    "en": "— One... two... three... PULL WITH ALL YOUR MIGHT!",
                    "ru": "— Раз... два... три... ТЯНИ изо всех сил!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">CREEEAK! With a loud metallic groan, the heavy iron latch flips open!</prosody></speak>",
                    "en": "CREEEAK! With a loud metal groan, the heavy iron lock flips open!",
                    "ru": "СКРИ-И-ИП! С громким металлическим стоном тяжелая защелка распахивается!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Together, Eldrin and Leo lift the heavy oak lid. It rests securely against the stone wall.</prosody></speak>",
                    "en": "Together, Eldrin and Leo lift the heavy big tree lid. It rests safely against the stone wall.",
                    "ru": "Вместе Элдрин и Лео поднимают тяжелую дубовую крышку. Она надежно упирается в каменную стену."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look inside! What is wrapped in that thick grey woollen blanket?</prosody></speak>",
                    "en": "— Look inside! What is wrapped in that thick grey warm wool blanket?",
                    "ru": "— Загляни внутрь! Что это завернуто в то толстое серое шерстяное одеяло?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Let us unwrap the blanket carefully. Look! Three shiny bronze travel lanterns!</prosody></speak>",
                    "en": "— Let us unwrap the blanket carefully. Look! Three shiny metal travel lanterns!",
                    "ru": "— Давай развернем одеяло аккуратно. Смотри! Три блестящих бронзовых дорожных фонаря!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The lanterns have clean glass windows, shiny bronze handles, and fresh cotton wicks inside.</prosody></speak>",
                    "en": "The lanterns have clean glass windows, shiny metal handles, and fresh cotton wicks inside.",
                    "ru": "У фонарей чистые стеклянные окошки, блестящие бронзовые ручки и свежие хлопковые фитили внутри."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— They are in perfect condition! Not a single crack in the glass!</prosody></speak>",
                    "en": "— They are in perfect condition! Not a single crack in the glass!",
                    "ru": "— Они в идеальном состоянии! Ни единой трещинки на стекле!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— I will carry two lanterns by their bronze handles. Can you carry the third lantern and the candle?</prosody></speak>",
                    "en": "— I will carry two lanterns by their metal handles. Can you carry the third lantern and the candle?",
                    "ru": "— Я понесу два фонаря за их бронзовые ручки. Сможешь понести третий фонарь и свечу?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes, absolutely! I will light the way ahead of us.</prosody></speak>",
                    "en": "— Yes, absolutely! I will light the way ahead of us.",
                    "ru": "— Да, конечно! Я буду освещать дорогу впереди нас."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They climb up the twelve stone stairs steadily and step into the warm, illuminated hallway.</prosody></speak>",
                    "en": "They climb up the twelve stone stairs slowly and carefully and step into the warm, bright hallway.",
                    "ru": "Они уверенно поднимаются по двенадцати каменным ступеням и выходят в теплый, освещенный коридор."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Excellent work, boys! Three fine lanterns ready for our journey. Place them by the front door.</prosody></speak>",
                    "en": "— Excellent work, boys! Three fine lanterns ready for our journey. Place them by the front door.",
                    "ru": "— Отличная работа, мальчики! Три прекрасных фонаря готовы к нашему путешествию. Поставьте их у входной двери."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Mission accomplished, Master! Now our cart will have plenty of bright light on the road!</prosody></speak>",
                    "en": "— Mission finished, Master! Now our cart will have plenty of bright light on the road!",
                    "ru": "— Задание выполнено, Мастер! Теперь у нашей повозки будет много яркого света в пути!"
                }
            ],
            "quiz": [
                {
                    "question": "How many bronze travel lanterns were inside the oak chest in the cellar?",
                    "options": [
                        "One lantern",
                        "Three bronze lanterns",
                        "Ten lanterns",
                        "None"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What was the latch on the heavy oak chest like?",
                    "options": [
                        "It opened easily with one finger",
                        "It was stuck and required both boys to pull together",
                        "It had a gold key in it",
                        "It was broken in pieces"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Where did Master Corvinus ask the boys to place the retrieved lanterns?",
                    "options": [
                        "Under the bed",
                        "By the front entrance door",
                        "In the garden fountain",
                        "On the roof"
                    ],
                    "correctIdx": 1
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
            "wordCount": 486,
            "coverIcon": "fa-pen-nib",
            "coverColor": "#8b5cf6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">In the quiet archive room, afternoon sunlight streams through the high stained glass windows.</prosody></speak>",
                    "en": "In the quiet archive room, afternoon sunlight streams through the high stained glass windows.",
                    "ru": "В тихом архивном зале дневной солнечный свет льется сквозь высокие витражные окна."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin sits at a small polished wooden desk, writing out the master's supply list on fresh parchment.</prosody></speak>",
                    "en": "Eldrin sits at a small polished wooden desk, writing out the master's supply list on fresh paper.",
                    "ru": "Элдрин сидит за маленьким полированным деревянным столом, выписывая список припасов мастера на свежем пергаменте."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— 'Item three: five reams of clean writing parchment...' I am writing so neatly today.</prosody></speak>",
                    "en": "— 'Item three: five sheets of clean writing paper...' I am writing so carefully today.",
                    "ru": "— «Пункт третий: пять стопок чистого пергамента для записей...» Я пишу так аккуратно сегодня."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">CRACK! Eldrin presses slightly too hard on the paper. The sharp white tip of his goose feather snaps!</prosody></speak>",
                    "en": "CRACK! Eldrin presses slightly too hard on the paper. The sharp white tip of his goose feather snaps!",
                    "ru": "ХРУСЬ! Элдрин нажимает на бумагу чуть сильнее, чем нужно. Острый белый кончик его гусиного пера ломается!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A round black blot of ink drips from the broken nib and spreads on the bottom corner of the page.</prosody></speak>",
                    "en": "A round black blot of ink drips from the broken pen tip and spreads on the bottom corner of the page.",
                    "ru": "Круглая черная клякса чернил капает со сломанного кончика и расплывается в нижнем углу страницы."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Oh, no! My white goose quill is broken! Now it only makes thick ugly smudges.</prosody></speak>",
                    "en": "— Oh, no! My white goose pen is broken! Now it only makes thick ugly smudges.",
                    "ru": "— О нет! Мое белое гусиное перо сломалось! Теперь оно оставляет только толстые уродливые разводы."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin checks his wooden pencil case. There are no other quills inside.</prosody></speak>",
                    "en": "Eldrin checks his wooden pencil case. There are no other pens inside.",
                    "ru": "Элдрин проверяет свой деревянный пенал. Внутри больше нет других перьев."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I do not have a spare pen. Should I throw this broken feather into the trash bin?</prosody></speak>",
                    "en": "— I do not have a spare pen. Should I throw this broken feather into the trash bin?",
                    "ru": "— У меня нет запасного пера. Мне выбросить это сломанное перо в корзину для мусора?"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus walks over from the bookshelf and sits quietly on the wooden stool beside Eldrin.</prosody></speak>",
                    "en": "Master Corvinus walks over from the shelf and sits quietly on the wooden stool beside Eldrin.",
                    "ru": "Мастер Корвинус подходит от книжной полки и тихо садится на деревянный табурет рядом с Элдрином."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Never throw away a good feather, Eldrin. A true scholar knows how to craft and sharpen his own tools.</prosody></speak>",
                    "en": "— Never throw away a good feather, Eldrin. A true student knows how to craft and sharpen his own tools.",
                    "ru": "— Никогда не выбрасывай хорошее перо, Элдрин. Истинный ученый умеет сам создавать и точить свои инструменты."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Can a broken quill really be repaired, Master?</prosody></speak>",
                    "en": "— Can a broken pen really be repaired, Master?",
                    "ru": "— А сломанное перо правда можно починить, Мастер?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Of course! <break time=\"300ms\"/> Watch closely. <break time=\"300ms\"/> I will teach you the ancient art of cutting a pen tip.</prosody></speak>",
                    "en": "— Of course! Watch closely. I will teach you the ancient art of cutting a pen tip.",
                    "ru": "— Конечно! Смотри внимательно. Я научу тебя древнему искусству вырезания кончика пера."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The master reaches into his leather vest pocket. He takes out a small, beautiful pocketknife with a carved silver handle.</prosody></speak>",
                    "en": "The master reaches into his leather vest pocket. He takes out a small, beautiful small knife with a carved silver handle.",
                    "ru": "Мастер лезет в карман своего кожаного жилета. Он достает маленький красивый карманный ножик с резной серебряной рукоятью."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The blade of this knife is made of folded steel. It is sharper than a razor.</prosody></speak>",
                    "en": "— The blade of this knife is made of folded steel. It is sharper than a razor.",
                    "ru": "— Лезвие этого ножа сделано из кованой стали. Оно острее бритвы."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step one: Hold the quill firmly in your left hand, like this.</prosody></speak>",
                    "en": "— Step one: Hold the pen firmly in your left hand, like this.",
                    "ru": "— Шаг первый: держи перо крепко в левой руке, вот так."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step two: Place the sharp blade at a smooth angle across the hollow stem.</prosody></speak>",
                    "en": "— Step two: Place the sharp blade at a smooth angle across the hollow stem.",
                    "ru": "— Шаг второй: приложи острое лезвие под плавным углом к полому стеблю."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">With one clean, decisive slice, the master cuts away the damaged tip of the feather. Slice!</prosody></speak>",
                    "en": "With one clean, decisive slice, the master cuts away the damaged tip of the feather. Slice!",
                    "ru": "Одним чистым, уверенным срезом мастер отсекает поврежденный кончик пера. Вжик!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step three: Make a tiny delicate slit in the exact center of the tip.</prosody></speak>",
                    "en": "— Step three: Make a tiny very soft slit in the exact center of the tip.",
                    "ru": "— Шаг третий: сделай крошечный аккуратный расщеп точно по центру кончика."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Why do we need a slit in the middle, Master Corvinus?</prosody></speak>",
                    "en": "— Why do we need a slit in the middle, Master Corvinus?",
                    "ru": "— А зачем нужен расщеп посередине, Мастер Корвинус?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The slit holds the black ink and lets it flow onto the parchment smoothly and evenly.</prosody></speak>",
                    "en": "— The slit holds the black ink and lets it flow onto the paper smoothly and evenly.",
                    "ru": "— Расщеп удерживает черные чернила и позволяет им плавно и равномерно стекать на пергамент."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Step four: Shave the left edge and the right edge until the nib is thin and pointed.</prosody></speak>",
                    "en": "— Step four: Shave the left edge and the right edge until the pen tip is thin and pointed.",
                    "ru": "— Шаг четвертый: подрежь левый и правый край, пока кончик не станет тонким и заостренным."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus hands the newly shaped quill and the silver pocketknife to Eldrin.</prosody></speak>",
                    "en": "Master Corvinus hands the newly shaped pen and the silver small knife to Eldrin.",
                    "ru": "Мастер Корвинус передает заново вырезанное перо и серебряный ножик Элдрину."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Now it is your turn to test your new nib on this scrap piece of paper.</prosody></speak>",
                    "en": "— Now it is your turn to test your new pen tip on this scrap piece of paper.",
                    "ru": "— Теперь твоя очередь испытать новый кончик на этом черновом листке бумаги."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin gently dips the sharp new nib into the black inkwell.</prosody></speak>",
                    "en": "Eldrin gently dips the sharp new pen tip into the black inkwell.",
                    "ru": "Элдрин аккуратно макает острый новый кончик в чернильницу."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He presses the pen to the paper and writes three words in elegant, thin lines: 'Knowledge is Light'.</prosody></speak>",
                    "en": "He presses the pen to the paper and writes three words in elegant, thin lines: 'Knowledge is Light'.",
                    "ru": "Он прижимает перо к бумаге и пишет три слова изящными тонкими линиями: «Знание — это Свет»."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Wow! It writes so smoothly! The lines are crisp, thin, and beautiful!</prosody></speak>",
                    "en": "— Wow! It writes so smoothly! The lines are crisp, thin, and beautiful!",
                    "ru": "— Ого! Оно пишет так гладко! Линии четкие, тонкие и красивые!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Excellent! You have the steady hand of a true master scribe, Eldrin.</prosody></speak>",
                    "en": "— Excellent! You have the steady hand of a true master scribe, Eldrin.",
                    "ru": "— Великолепно! У тебя твердая рука настоящего мастера-писца, Элдрин."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Keep this small silver pocketknife in your bag. A prepared scholar is never helpless.</prosody></speak>",
                    "en": "— Keep this small silver small knife in your bag. A prepared student is never helpless.",
                    "ru": "— Сохрани этот маленький серебряный ножик в своей сумке. Подготовленный ученый никогда не бывает беспомощным."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Is this knife a gift for me? Thank you so much, Master Corvinus! I will treasure it!</prosody></speak>",
                    "en": "— Is this knife a gift for me? Thank you so much, Master Corvinus! I will treasure it!",
                    "ru": "— Этот ножик — подарок мне? Спасибо вам огромное, Мастер Корвинус! Я буду беречь его!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin places the sharpened quill and the silver knife carefully inside his leather pouch.</prosody></speak>",
                    "en": "Eldrin places the sharpened pen and the silver knife carefully inside his leather pouch.",
                    "ru": "Элдрин бережно кладет заточенное перо и серебряный ножик в свой кожаный кисет."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Now I will finish copying the master's checklist with my wonderful new pen!</prosody></speak>",
                    "en": "— Now I will finish copying the master's list with my wonderful new pen!",
                    "ru": "— А теперь я закончу переписывать список покупок мастера моим замечательным новым пером!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He continues writing with a bright smile of pride on his face.</prosody></speak>",
                    "en": "He continues writing with a bright smile of pride on his face.",
                    "ru": "Он продолжает писать с яркой улыбкой гордости на лице."
                }
            ],
            "quiz": [
                {
                    "question": "What happened to Eldrin's white quill while he was writing?",
                    "options": [
                        "It fell in the tea",
                        "The sharp tip snapped because he pressed too hard",
                        "The cat took it",
                        "It turned blue"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Why did Master Corvinus make a tiny slit in the center of the quill nib?",
                    "options": [
                        "To make it whistle",
                        "To hold the ink so it flows smoothly onto the paper",
                        "To make it lighter",
                        "To cut the paper"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What words did Eldrin write on scrap paper to test his newly sharpened pen?",
                    "options": [
                        "'Knowledge is Light'",
                        "'Good morning, world'",
                        "'I want hot soup'",
                        "'The dog is running'"
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
            "wordCount": 447,
            "coverIcon": "fa-suitcase-rolling",
            "coverColor": "#f59e0b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The evening bell chimes seven times across the academy dormitories. The sky outside is deep navy blue.</prosody></speak>",
                    "en": "The evening bell chimes seven times across the academy dormitories. The sky outside is deep navy blue.",
                    "ru": "Вечерний колокол звонит семь раз над общежитиями академии. Небо за окном темно-синее."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Inside Eldrin and Leo's dormitory room, three candles burn brightly on the heavy oak table.</prosody></speak>",
                    "en": "Inside Eldrin and Leo's bedroom room, three candles burn with bright light on the heavy big tree table.",
                    "ru": "В комнате общежития Элдрина и Лео три свечи ярко горят на тяжелом дубовом столе."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin, Leo, and Kira sit on wooden stools around the table with three sturdy canvas backpacks.</prosody></speak>",
                    "en": "Eldrin, Leo, and Kira sit on wooden stools around the table with three sturdy cloth bags.",
                    "ru": "Элдрин, Лео и Кира сидят на деревянных табуретах вокруг стола с тремя прочными холщовыми рюкзаками."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Tomorrow is the big day! Let us review our packing checklist very carefully.</prosody></speak>",
                    "en": "— Tomorrow is the big day! Let us review our packing list very carefully.",
                    "ru": "— Завтра великий день! Давайте проверим наш упаковочный список очень внимательно."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Yes! We cannot afford to forget anything important when we go down to the Lower Town.</prosody></speak>",
                    "en": "— Yes! We cannot afford to forget anything important when we go down to the Lower Town.",
                    "ru": "— Да! Нам никак нельзя забыть что-то важное, когда мы поедем вниз в Нижний Город."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I have Master Corvinus's official shopping list right here on my desk. Let us check item by item!</prosody></speak>",
                    "en": "— I have Master Corvinus's official shopping list right here on my desk. Let us check item by item!",
                    "ru": "— У меня прямо тут на столе официальный список покупок Мастера Корвинуса. Давайте проверять пункт за пунктом!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— In my brown leather backpack, I have twenty shiny copper coins inside a secure pouch.</prosody></speak>",
                    "en": "— In my brown leather bag, I have twenty shiny copper coins inside a secure pouch.",
                    "ru": "— В моем коричневом кожаном рюкзаке двадцать блестящих медных монет в надежном кошельке."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Good! Do you have your blank notebook and your sharpened quill with the inkpot?</prosody></speak>",
                    "en": "— Good! Do you have your blank notebook and your sharpened pen with the inkpot?",
                    "ru": "— Хорошо! А чистый блокнот и заточенное перо с чернильницей у тебя есть?"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes! My green notebook, the sharpened quill, and a tightly sealed wooden bottle of black ink are packed.</prosody></speak>",
                    "en": "— Yes! My green notebook, the sharpened pen, and a tightly sealed wooden bottle of black ink are packed.",
                    "ru": "— Да! Мой зеленый блокнот, заточенное перо и плотно закрытая деревянная бутылочка чернил упакованы."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And I also have Master Corvinus's silver pocketknife in the small side pocket.</prosody></speak>",
                    "en": "— And I also have Master Corvinus's silver small knife in the small side pocket.",
                    "ru": "— И еще у меня есть серебряный карманный ножик Мастера Корвинуса в маленьком боковом кармашке."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Excellent, Eldrin! Your bag is completely prepared.</prosody></speak>",
                    "en": "— Excellent, Eldrin! Your bag is completely prepared.",
                    "ru": "— Отлично, Элдрин! Твоя сумка полностью готова."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— What about our food and provisions, Leo? What did you pack in your green canvas bag?</prosody></speak>",
                    "en": "— What about our food and food, Leo? What did you pack in your green cloth bag?",
                    "ru": "— А как насчет нашей еды и провизии, Лео? Что ты упаковал в свой зеленый холщовый мешок?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— I packed four fresh red apples, half a loaf of crusty sourdough bread, and two wedges of hard yellow cheese.</prosody></speak>",
                    "en": "— I packed four fresh red apples, half a loaf of hard fresh bread, and two wedges of hard yellow cheese.",
                    "ru": "— Я упаковал четыре свежих красных яблока, полбуханки хрустящего хлеба на закваске и два куска твердого желтого сыра."
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— And I filled our large leather canteen with cold fresh spring water from the kitchen well.</prosody></speak>",
                    "en": "— And I filled our large leather water bottle with cold fresh spring water from the kitchen well.",
                    "ru": "— И я наполнил нашу большую кожаную флягу холодной свежей родниковой водой из кухонного колодца."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Wonderful! We will not be hungry or thirsty on the long road.</prosody></speak>",
                    "en": "— Wonderful! We will not be hungry or thirsty on the long road.",
                    "ru": "— Замечательно! Мы не будем голодными или испытывать жажду в дальней дороге."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And what do you have in your grey backpack, Kira?</prosody></speak>",
                    "en": "— And what do you have in your grey bag, Kira?",
                    "ru": "— А что у тебя в сером рюкзаке, Кира?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I have a detailed street map of the Lower Town market square.</prosody></speak>",
                    "en": "— I have a detailed street map of the Lower Town market square.",
                    "ru": "— У меня подробная карта улиц рыночной площади Нижнего Города."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I also have a strong coil of hemp rope, twenty meters long, in case we need to tie boxes on the cart.</prosody></speak>",
                    "en": "— I also have a strong roll of thick rope, twenty meters long, in case we need to tie boxes on the cart.",
                    "ru": "— Еще у меня крепкий моток пеньковой веревки длиной двадцать метров, на случай если нужно будет привязать ящики на повозке."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— And my warm wool travelling cloak, in case a cold wind blows through the mountain pass.</prosody></speak>",
                    "en": "— And my warm wool travelling cloak, in case a cold wind blows through the mountain pass.",
                    "ru": "— И мой теплый шерстяной дорожный плащ, на случай если холодный ветер подует в горном ущелье."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They zip and buckle all three backpacks. Everything is neat, organized, and ready by the door.</prosody></speak>",
                    "en": "They zip and buckle all three bags. Everything is neat, organized, and ready by the door.",
                    "ru": "Они застегивают все три рюкзака. Все аккуратно, организованно и готово у двери."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— What exact time does Farmer Barnaby arrive with the horse cart tomorrow morning?</prosody></speak>",
                    "en": "— What exact time does Farmer Barnaby arrive with the horse cart tomorrow morning?",
                    "ru": "— В какое именно время фермер Барнаби приезжает с повозкой завтра утром?"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— At six o'clock sharp at the academy's main wooden gate!</prosody></speak>",
                    "en": "— At six o'clock sharp at the academy's main wooden gate!",
                    "ru": "— Ровно в шесть часов у главных деревянных ворот академии!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— That means we must wake up at five thirty, wash our faces, and put on our walking boots before sunrise.</prosody></speak>",
                    "en": "— That means we must wake up at five thirty, wash our faces, and put on our walking boots before sunrise.",
                    "ru": "— Это значит, что мы должны проснуться в полшестого, умыться и надеть походные сапоги до восхода солнца."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I am so excited for this trip! I want to see the blacksmith's forge, the book stalls, and the town fountain!</prosody></speak>",
                    "en": "— I am so excited for this trip! I want to see the blacksmith's forge, the book stalls, and the town fountain!",
                    "ru": "— Я так взволнован этой поездкой! Я хочу увидеть кузницу, книжные ряды и городской фонтан!"
                },
                {
                    "speaker": "leo",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— We all are! But now we must blow out the candles and get seven hours of deep sleep.</prosody></speak>",
                    "en": "— We all are! But now we must blow out the candles and get seven hours of deep sleep.",
                    "ru": "— Мы все тоже! Но сейчас мы должны задуть свечи и крепко поспать семь часов."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Good night, Eldrin! Good night, Leo! See you at dawn by the gate!</prosody></speak>",
                    "en": "— Good night, Eldrin! Good night, Leo! See you at dawn by the gate!",
                    "ru": "— Спокойной ночи, Элдрин! Спокойной ночи, Лео! Увидимся на рассвете у ворот!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good night, Kira! Sleep well!</prosody></speak>",
                    "en": "— Good night, Kira! Sleep well!",
                    "ru": "— Спокойной ночи, Кира! Сладких снов!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Kira slips out to her room. Eldrin and Leo blow out the flickering candles.</prosody></speak>",
                    "en": "Kira slips out to her room. Eldrin and Leo blow out the flickering candles.",
                    "ru": "Кира уходит в свою комнату. Элдрин и Лео задувают мерцающие свечи."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The dormitory falls into peaceful darkness. Act One is successfully completed, and an incredible adventure awaits at sunrise.</prosody></speak>",
                    "en": "The bedroom falls into peaceful darkness. Act One is successfully completed, and an incredible adventure awaits at sunrise.",
                    "ru": "Общежитие погружается в мирную темноту. Первый Акт успешно завершен, и на восходе солнца их ждет невероятное приключение."
                }
            ],
            "quiz": [
                {
                    "question": "What time does Farmer Barnaby's horse cart leave the Spire in the morning?",
                    "options": [
                        "At ten o'clock",
                        "At six o'clock sharp at the main gate",
                        "At noon",
                        "At midnight"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What food did Leo pack in his green canvas backpack?",
                    "options": [
                        "Four red apples, sourdough bread, yellow cheese, and fresh spring water",
                        "Fish and lemons",
                        "Only candy",
                        "Hot soup"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "What tool did Kira pack to secure boxes onto the wooden cart?",
                    "options": [
                        "A roll of tape",
                        "A strong twenty-meter coil of hemp rope",
                        "Iron nails",
                        "Heavy stones"
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
            "wordCount": 493,
            "coverIcon": "fa-horse-head",
            "coverColor": "#10b981",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">At five thirty in the morning, the golden rays of the sunrise paint the stone walls of the Spire.</prosody></speak>",
                    "en": "At five thirty in the morning, the golden rays of the sunrise paint the stone walls of the Spire.",
                    "ru": "В полшестого утра золотые лучи восхода окрашивают каменные стены Шпиля."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira stand by the giant wooden gate with their backpacks strapped over their shoulders.</prosody></speak>",
                    "en": "Eldrin and Kira stand by the giant wooden gate with their bags strapped over their shoulders.",
                    "ru": "Элдрин и Кира стоят у гигантских деревянных ворот с рюкзаками за плечами."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Master Corvinus walks over, leaning on a polished wooden walking staff.</prosody></speak>",
                    "en": "Master Corvinus walks over, leaning on a polished wooden walking staff.",
                    "ru": "Мастер Корвинус подходит, опираясь на полированный деревянный посох."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning, early birds! You are both ready and punctual. Here comes our ride!</prosody></speak>",
                    "en": "— Good morning, early birds! You are both ready and punctual. Here comes our ride!",
                    "ru": "— Доброе утро, ранние пташки! Вы оба готовы и пунктуальны. А вот и наша повозка!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The great wooden gate opens wide with a slow creak. A large wooden cart rolls up to the courtyard.</prosody></speak>",
                    "en": "The great wooden gate opens wide with a slow creak. A large wooden cart rolls up to the courtyard.",
                    "ru": "Огромные деревянные ворота с медленным скрипом распахиваются. Большой деревянный воз въезжает во двор."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Farmer Barnaby sits on the driver's bench in a thick brown vest and a round straw hat.</prosody></speak>",
                    "en": "Farmer Barnaby sits on the driver's bench in a thick brown vest and a round straw hat.",
                    "ru": "Фермер Барнаби сидит на козлах в толстом коричневом жилете и круглой соломенной шляпе."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Good morning, scholars of the Spire! Meet my two wonderful brown horses, Daisy and Clover!</prosody></speak>",
                    "en": "— Good morning, students of the Spire! Meet my two wonderful brown horses, White flower and Small green plant!",
                    "ru": "— Доброе утро, ученые Шпиля! Познакомьтесь с моими двумя чудесными гнедыми лошадьми, Дейзи и Клевером!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Good morning, Barnaby! The horses have such shiny brown coats and gentle brown eyes.</prosody></speak>",
                    "en": "— Good morning, Barnaby! The horses have such shiny brown coats and gentle brown eyes.",
                    "ru": "— Доброе утро, Барнаби! У лошадей такая лоснящаяся коричневая шерсть и добрые карие глаза."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— May I pat Daisy's soft nose before we climb in, Barnaby?</prosody></speak>",
                    "en": "— May I pat White flower's soft nose before we climb in, Barnaby?",
                    "ru": "— Можно мне погладить Дейзи по мягкому носу, прежде чем мы сядем, Барнаби?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Of course, young lady! Daisy loves gentle hands. Give her this little piece of sweet apple.</prosody></speak>",
                    "en": "— Of course, young lady! White flower loves gentle hands. Give her this little piece of sweet apple.",
                    "ru": "— Конечно, барышня! Дейзи любит ласку. Дай ей этот маленький кусочек сладкого яблока."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Daisy eats the apple from Kira's palm and neighs softly with pleasure.</prosody></speak>",
                    "en": "White flower eats the apple from Kira's palm and neighs softly with pleasure.",
                    "ru": "Дейзи съедает яблоко с ладони Киры и тихонько довольно ржет."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Climb into the back cart bed, children. Sit down on these clean bundles of sweet dry hay.</prosody></speak>",
                    "en": "— Climb into the back cart bed, children. Sit down on these clean bundles of sweet dry hay.",
                    "ru": "— Залезайте в кузов, дети. Садитесь на эти чистые вязанки сухого душистого сена."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira climb over the wooden sideboards. The hay makes a soft and comfortable seat.</prosody></speak>",
                    "en": "Eldrin and Kira climb over the wooden sides. The hay makes a soft and comfortable seat.",
                    "ru": "Элдрин и Кира перелезают через деревянные борта. Сено образует мягкое и удобное сиденье."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Hold on to the side rails, everyone! Giddy-up, Daisy! Giddy-up, Clover!</prosody></speak>",
                    "en": "— Hold on to the side rails, everyone! Giddy-up, White flower! Giddy-up, Small green plant!",
                    "ru": "— Держитесь за поручни, все! Но, Дейзи! Но, Клевер!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Clip-clop, clip-clop! The iron horseshoes click rhythmically against the stone gravel road.</prosody></speak>",
                    "en": "Clip-clop, clip-clop! The iron horseshoes click rhythmically against the stone gravel road.",
                    "ru": "Цок-цок, цок-цок! Железные подковы ритмично стучат по каменистой гравийной дороге."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The wooden cart rolls steadily down the winding mountain switchbacks.</prosody></speak>",
                    "en": "The wooden cart rolls slowly and carefully down the turning mountain sharp turns.",
                    "ru": "Деревянная повозка плавно катится вниз по извилистым горным серпантинам."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look over the edge, Eldrin! Look at the vast green valley spreading out below us!</prosody></speak>",
                    "en": "— Look over the edge, Eldrin! Look at the vast green valley spreading out below us!",
                    "ru": "— Посмотри за край, Элдрин! Посмотри на бескрайнюю зеленую долину, расстилающуюся под нами!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Wow! A thick blanket of pure white morning fog covers the winding river like cotton!</prosody></speak>",
                    "en": "— Wow! A thick blanket of pure white morning fog covers the turning river like cotton!",
                    "ru": "— Ого! Густое покрывало чистого белого утреннего тумана укрывает извилистую реку, словно вата!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— The morning breeze is fresh and cool. Breathe deeply, children. Pine air is very healthy for the lungs.</prosody></speak>",
                    "en": "— The morning breeze is fresh and cool. Breathe deeply, children. Tall tree air is very healthy for the lungs.",
                    "ru": "— Утренний ветерок свежий и прохладный. Дышите глубже, дети. Сосновый воздух очень полезен для легких."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— How many minutes does it take to reach the valley floor, Farmer Barnaby?</prosody></speak>",
                    "en": "— How many minutes does it take to reach the valley floor, Farmer Barnaby?",
                    "ru": "— Сколько минут нужно, чтобы доехать до подножия долины, фермер Барнаби?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— About thirty minutes down this gentle mountain slope, my boy! The road is wide and safe.</prosody></speak>",
                    "en": "— About thirty minutes down this gentle mountain slope, my boy! The road is wide and safe.",
                    "ru": "— Около тридцати минут по этому пологому горному склону, мой мальчик! Дорога широкая и безопасная."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Tall evergreen pine trees stand along both sides of the gravel road like green guards.</prosody></speak>",
                    "en": "Tall green tall trees stand along both sides of the gravel road like green guards.",
                    "ru": "Высокие вечнозеленые сосны стоят по обеим сторонам гравийной дороги, как зеленые стражи."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">As they ride further down, the bright morning sun warms the valley and burns away the white fog.</prosody></speak>",
                    "en": "As they ride further down, the bright morning sun warms the valley and burns away the white fog.",
                    "ru": "По мере спуска яркое утреннее солнце согревает долину и рассеивает белый туман."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Listen! Ding-dong, ding-dong! I can hear the tall church bells chiming in the town!</prosody></speak>",
                    "en": "— Listen! Ding-dong, ding-dong! I can hear the tall church bells chiming in the town!",
                    "ru": "— Послушайте! Дин-дон, дин-дон! Я слышу, как в городе звонят высокие церковные колокола!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look ahead through the trees! I can see hundreds of red clay tile roofs and stone chimneys!</prosody></speak>",
                    "en": "— Look ahead through the trees! I can see hundreds of red clay tile roofs and stone chimneys!",
                    "ru": "— Посмотри вперед сквозь деревья! Я вижу сотни красных черепичных крыш и каменных труб!"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— That is the Lower Town! On market days, farmers and merchants come from fifty miles away.</prosody></speak>",
                    "en": "— That is the Lower Town! On market days, farmers and merchants come from fifty miles away.",
                    "ru": "— Это и есть Нижний Город! В базарные дни фермеры и купцы съезжаются за пятьдесят миль."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Prepare your passes and shopping lists, children. We are approaching the outer defensive walls.</prosody></speak>",
                    "en": "— Prepare your passes and shopping lists, children. We are approaching the outer defensive walls.",
                    "ru": "— Приготовьте ваши пропуска и списки покупок, дети. Мы приближаемся к внешним оборонительным стенам."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The road straightens out as they reach the valley floor. Massive grey stone walls rise ahead.</prosody></speak>",
                    "en": "The road straightens out as they reach the valley floor. Massive grey stone walls rise ahead.",
                    "ru": "Дорога выравнивается, когда они достигают дна долины. Массивные серые каменные стены вырастают впереди."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at those huge wooden gates with iron spikes! The town looks like a giant fortress!</prosody></speak>",
                    "en": "— Look at those huge wooden gates with iron spikes! The town looks like a giant fortress!",
                    "ru": "— Посмотри на те огромные деревянные ворота с железными шипами! Город похож на гигантскую крепость!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— I am so excited! Our market adventure is officially beginning!</prosody></speak>",
                    "en": "— I am so excited! Our market adventure is officially beginning!",
                    "ru": "— Я в таком предвкушении! Наше рыночное приключение официально начинается!"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Whoa, Daisy! Whoa, Clover! Slow down near the gatehouse!</prosody></speak>",
                    "en": "— Whoa, White flower! Whoa, Small green plant! Slow down near the gatehouse!",
                    "ru": "— Тпру, Дейзи! Тпру, Клевер! Притормозите возле караулки!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The horses slow to a gentle walk as they halt before the arched stone entrance.</prosody></speak>",
                    "en": "The horses slow to a gentle walk as they stop before the arched stone entrance.",
                    "ru": "Лошади переходят на неспешный шаг и останавливаются перед арочным каменным въездом."
                }
            ],
            "quiz": [
                {
                    "question": "What are the names of Farmer Barnaby's two horses?",
                    "options": [
                        "Thunder and Lightning",
                        "Daisy and Clover",
                        "Leo and Eldrin",
                        "Max and Ruby"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What did Kira feed Daisy before climbing into the cart?",
                    "options": [
                        "A piece of sweet apple",
                        "A slice of cheese",
                        "A cup of hot tea",
                        "A flower"
                    ],
                    "correctIdx": 0
                },
                {
                    "question": "What sound did Kira hear in the distance as they approached the town?",
                    "options": [
                        "A roaring lion",
                        "Church bells chiming ding-dong",
                        "Thunder in the sky",
                        "A barking dog"
                    ],
                    "correctIdx": 1
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
            "wordCount": 442,
            "coverIcon": "fa-shield-halved",
            "coverColor": "#3b82f6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The wooden cart comes to a complete halt before the massive stone archway of the North Gate.</prosody></speak>",
                    "en": "The wooden cart comes to a complete stop before the massive stone big doorway of the North Gate.",
                    "ru": "Деревянная повозка полностью останавливается перед массивной каменной аркой Северных Ворот."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Two tall city guards stand on watch, wearing polished iron chestplates and shiny iron helmets.</prosody></speak>",
                    "en": "Two tall city guards stand on watch, wearing polished iron chestplates and shiny iron helmets.",
                    "ru": "Двое высоких городских стражников стоят на часах в полированных железных кирасах и блестящих шлемах."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They hold long wooden spears with sharp steel tips upright in their hands.</prosody></speak>",
                    "en": "They hold long wooden spears with sharp steel tips upright in their hands.",
                    "ru": "Они держат в руках длинные деревянные копья с острыми стальными наконечниками."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Halt, travelers! Welcome to the Lower Town. State your name and business for the registry.</prosody></speak>",
                    "en": "— Stop, friends! Welcome to the Lower Town. State your name and business for the registry.",
                    "ru": "— Стойте, путники! Добро пожаловать в Нижний Город. Назовите ваши имена и цель визита для реестра."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Good morning, Captain Vance! I have Professor Corvinus and two students from the Spire Academy.</prosody></speak>",
                    "en": "— Good morning, Captain Vance! I have Teacher Corvinus and two students from the Spire Academy.",
                    "ru": "— Доброе утро, капитан Вэнс! Со мной профессор Корвинус и двое учеников из Академии Шпиля."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning, Captain. We are here to purchase essential autumn supplies at the market.</prosody></speak>",
                    "en": "— Good morning, Captain. We are here to purchase essential autumn supplies at the market.",
                    "ru": "— Доброе утро, капитан. Мы прибыли, чтобы закупить необходимые осенние припасы на рынке."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Ah, Professor Corvinus! Always an honor to see you. May I examine your official entry pass, please?</prosody></speak>",
                    "en": "— Ah, Teacher Corvinus! Always an honor to see you. May I examine your official entry pass, please?",
                    "ru": "— А, профессор Корвинус! Всегда честь видеть вас. Могу я взглянуть на ваш официальный пропуск?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Eldrin, my boy, you are holding the official travel parchment in your leather pouch.</prosody></speak>",
                    "en": "— Eldrin, my boy, you are holding the official travel paper in your leather pouch.",
                    "ru": "— Элдрин, мой мальчик, официальный пергамент у тебя в кожаной сумке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Yes, Professor! Here it is!</prosody></speak>",
                    "en": "— Yes, Teacher! Here it is!",
                    "ru": "— Да, профессор! Вот он!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin carefully unbuttons his leather pouch and retrieves the thick cream-colored parchment.</prosody></speak>",
                    "en": "Eldrin carefully unbuttons his leather pouch and retrieves the thick cream-colored paper.",
                    "ru": "Элдрин аккуратно расстегивает кожаную сумку и достает плотный пергамент кремового цвета."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here is our entry pass, Captain Vance. It has the official red owl wax seal of the Spire.</prosody></speak>",
                    "en": "— Here is our entry pass, Captain Vance. It has the official red owl wax seal of the Spire.",
                    "ru": "— Вот наш пропуск, капитан Вэнс. На нем официальная печать Шпиля в виде красной совы."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Captain Vance takes the parchment in his gauntleted hand and inspects the red wax seal closely.</prosody></speak>",
                    "en": "Captain Vance takes the paper in his gauntleted hand and inspects the red wax seal closely.",
                    "ru": "Капитан Вэнс берет пергамент рукой в латной перчатке и внимательно осматривает красную печать."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— The seal is unbroken and completely authentic. Let me stamp your parchment for today's market day.</prosody></speak>",
                    "en": "— The seal is unbroken and completely authentic. Let me stamp your paper for today's market day.",
                    "ru": "— Печать цела и подлинна. Позвольте мне поставить штамп на ваш пергамент на сегодняшний базарный день."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The captain walks to the guard table. He dips a heavy round bronze stamp into purple ink.</prosody></speak>",
                    "en": "The captain walks to the guard table. He dips a heavy round metal stamp into purple ink.",
                    "ru": "Капитан подходит к караульному столу. Он макает тяжелый круглый бронзовый штамп в фиолетовые чернила."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">THUMP! He presses the stamp firmly onto the bottom corner of the parchment.</prosody></speak>",
                    "en": "THUMP! He presses the stamp firmly onto the bottom corner of the paper.",
                    "ru": "БАМ! Он с силой прижимает штамп к нижнему углу пергамента."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Here is your stamped pass, Eldrin. Keep it safe in your pocket until you leave this evening.</prosody></speak>",
                    "en": "— Here is your stamped pass, Eldrin. Keep it safe in your pocket until you leave this evening.",
                    "ru": "— Вот твой проштампованный пропуск, Элдрин. Храни его в надежном месте до вечернего выезда."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Thank you very much, Captain Vance! I will keep it right inside my buttoned pocket.</prosody></speak>",
                    "en": "— Thank you very much, Captain Vance! I will keep it right inside my buttoned pocket.",
                    "ru": "— Большое спасибо, капитан Вэнс! Я положу его прямо в карман на пуговице."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— A word of advice for you young scholars: The central market square is extremely crowded today.</prosody></speak>",
                    "en": "— A word of advice for you young students: The central market square is extremely crowded today.",
                    "ru": "— Совет для вас, юные ученые: Центральная рыночная площадь сегодня чрезвычайно многолюдна."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Watch out for heavy merchant carts, keep your coin purses close, and stay together at all times.</prosody></speak>",
                    "en": "— Watch out for heavy merchant carts, keep your coin purses close, and stay together at all times.",
                    "ru": "— Остерегайтесь тяжелых купеческих телег, держите кошельки при себе и всегда держитесь вместе."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Thank you for the wise warning, Captain! We will stay right beside Professor Corvinus.</prosody></speak>",
                    "en": "— Thank you for the wise warning, Captain! We will stay right beside Teacher Corvinus.",
                    "ru": "— Спасибо за мудрое предостережение, капитан! Мы будем идти рядом с профессором Корвинусом."
                },
                {
                    "speaker": "guard",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Open the main portcullis for the Academy cart! Let them pass!</prosody></speak>",
                    "en": "— Open the main portcullis for the Academy cart! Let them pass!",
                    "ru": "— Поднять главную решетку для повозки Академии! Пропустить!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">CLANK! RATTLE! Two guards turn large iron wheels on the wall.</prosody></speak>",
                    "en": "CLANK! RATTLE! Two guards turn large iron wheels on the wall.",
                    "ru": "ЛЯЗГ! ГРОХОТ! Двое стражников крутят большие железные колеса на стене."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Heavy iron chains pull the massive iron-spiked wooden gate upward into the stone arch.</prosody></speak>",
                    "en": "Heavy iron chains pull the massive iron-spiked wooden gate upward into the stone arch.",
                    "ru": "Тяжелые железные цепи поднимают массивную обитую железом деревянную решетку вверх в каменную арку."
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Giddy-up, Daisy! Giddy-up, Clover! Through the gates we go!</prosody></speak>",
                    "en": "— Giddy-up, White flower! Giddy-up, Small green plant! Through the gates we go!",
                    "ru": "— Но, Дейзи! Но, Клевер! Въезжаем в ворота!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The cart rolls across the wooden drawbridge and passes beneath the shadowy stone gatehouse.</prosody></speak>",
                    "en": "The cart rolls across the wooden bridge and passes under the shadowy stone gatehouse.",
                    "ru": "Повозка катится по деревянному подъемному мосту и проезжает под тенистой каменной надвратной башней."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">As they emerge on the other side, the full sound and color of the Lower Town bursts into view!</prosody></speak>",
                    "en": "As they emerge on the other side, the full sound and color of the Lower Town bursts into view!",
                    "ru": "Когда они выезжают на другую сторону, вся палитра звуков и красок Нижнего Города предстает перед ними!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Look at all the colourful wooden signs, the tall stone houses, and the cobblestone streets!</prosody></speak>",
                    "en": "— Look at all the colourful wooden signs, the tall stone houses, and the stone streets!",
                    "ru": "— Посмотри на все эти разноцветные деревянные вывески, высокие каменные дома и мощеные улицы!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— And smell the air! It smells like roasted nuts, fresh baked bread, and sweet flower honey!</prosody></speak>",
                    "en": "— And smell the air! It smells like roasted nuts, fresh baked bread, and sweet flower honey!",
                    "ru": "— А какой воздух! Пахнет жареными орехами, свежеиспеченным хлебом и сладким цветочным медом!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Welcome to the Lower Town, my young friends! Let us begin our market quest!</prosody></speak>",
                    "en": "— Welcome to the Lower Town, my young friends! Let us begin our market quest!",
                    "ru": "— Добро пожаловать в Нижний Город, мои юные друзья! Начнем наш рыночный квест!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Barnaby steers the horses down the main street toward the bustling central town square.</prosody></speak>",
                    "en": "Barnaby steers the horses down the main street toward the bustling central town square.",
                    "ru": "Барнаби направляет лошадей по главной улице к шумной центральной городской площади."
                }
            ],
            "quiz": [
                {
                    "question": "What kind of ink did Captain Vance use to stamp the entry pass?",
                    "options": [
                        "Green ink",
                        "Purple ink",
                        "Golden paint",
                        "Water"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What warning did the gatekeeper give to the young scholars?",
                    "options": [
                        "Do not eat any bread",
                        "Watch out for carts, keep purses close, and stay together",
                        "Run as fast as you can",
                        "Close your eyes"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "How was the massive wooden gate opened?",
                    "options": [
                        "Guards turned large iron wheels with heavy chains",
                        "With a tiny brass key",
                        "By pushing with shoulders",
                        "By magic spell"
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
            "wordCount": 476,
            "coverIcon": "fa-bread-slice",
            "coverColor": "#f59e0b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The horse cart parks in the designated wagon area near the edge of the market square.</prosody></speak>",
                    "en": "The horse cart parks in the designated wagon area near the edge of the market square.",
                    "ru": "Повозка паркуется на специальной стоянке для телег у края рыночной площади."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin and Kira hop down from the hay bed onto the smooth, grey cobblestone pavement.</prosody></speak>",
                    "en": "Eldrin and Kira hop down from the hay bed onto the smooth, grey stone pavement.",
                    "ru": "Элдрин и Кира спрыгивают с сена на гладкую серую каменную мостовую."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A wonderful, sweet aroma of melted butter, fresh yeast dough, and warm cinnamon fills the alley.</prosody></speak>",
                    "en": "A wonderful, sweet aroma of melted butter, fresh yeast dough, and warm cinnamon fills the alley.",
                    "ru": "Чудесный сладкий аромат топленого масла, свежего дрожжевого теста и теплой корицы наполняет переулок."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Mmm! That smells so incredible! My nose is leading me straight down this cobblestone path!</prosody></speak>",
                    "en": "— Mmm! That smells so incredible! My nose is leading me straight down this stone path!",
                    "ru": "— Ммм! Пахнет так невероятно! Мой нос ведет меня прямо по этой мощеной дорожке!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Look at that cheerful wooden stall with the red-and-white striped cloth canopy over there!</prosody></speak>",
                    "en": "— Look at that cheerful wooden stall with the red-and-white striped cloth canopy over there!",
                    "ru": "— Посмотри на ту веселую деревянную лавку с красно-белым полосатым тканевым навесом вон там!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Golden-brown pretzel shapes and braided bread rolls are painted on the wooden signboard above the stall.</prosody></speak>",
                    "en": "Golden-brown twisted bread shapes and braided bread rolls are painted on the wooden signboard above the stall.",
                    "ru": "Золотисто-коричневые брецели и плетеные булочки нарисованы на деревянной вывеске над лавкой."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">A jolly baker named Hans stands behind the wooden counter in a white apron dusted with flour.</prosody></speak>",
                    "en": "A jolly baker named Hans stands behind the wooden counter in a white apron dusted with flour.",
                    "ru": "Веселый пекарь по имени Ганс стоит за деревянным прилавком в белом переднике, присыпанном мукой."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">He pulls a long flat wooden shovel out of a glowing brick oven behind the counter.</prosody></speak>",
                    "en": "He pulls a long flat wooden shovel out of a glowing brick oven behind the counter.",
                    "ru": "Он достает длинную плоскую деревянную лопату из пышущей жаром кирпичной печи за прилавком."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Dozens of golden-brown, twisted salted pretzels steam gently in the cool morning air.</prosody></speak>",
                    "en": "Dozens of golden-brown, twisted with salt twisted breads steam gently in the cool morning air.",
                    "ru": "Десятки золотисто-коричневых витых соленых брецелей слегка дымятся на прохладном утреннем воздухе."
                },
                {
                    "speaker": "baker",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Good morning, young travelers! Fresh pretzels straight from the oakwood fire five minutes ago!</prosody></speak>",
                    "en": "— Good morning, young friends! Fresh twisted breads straight from the oakwood fire five minutes ago!",
                    "ru": "— Доброе утро, юные путники! Свежие брецели прямо из дубового огня пять минут назад!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Good morning, Master Hans. Your bakery always smells the best in the entire kingdom.</prosody></speak>",
                    "en": "— Good morning, Master Hans. Your bakery always smells the best in the entire kingdom.",
                    "ru": "— Доброе утро, мастер Ганс. В вашей пекарне всегда пахнет лучше всех во всем королевстве."
                },
                {
                    "speaker": "baker",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Ah, Professor Corvinus! What a treat to see you! What can I wrap up for your hungry students today?</prosody></speak>",
                    "en": "— Ah, Teacher Corvinus! What a treat to see you! What can I wrap up for your hungry students today?",
                    "ru": "— А, профессор Корвинус! Какая радость видеть вас! Что завернуть для ваших голодных учеников сегодня?"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— How much are the large warm salted pretzels, please?</prosody></speak>",
                    "en": "— How much are the large warm with salt twisted breads, please?",
                    "ru": "— Сколько стоят большие теплые соленые брецели, скажите пожалуйста?"
                },
                {
                    "speaker": "baker",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Two copper coins for one pretzel, or three large pretzels for five copper coins!</prosody></speak>",
                    "en": "— Two copper coins for one twisted bread, or three large twisted breads for five copper coins!",
                    "ru": "— Две медные монеты за один брецель или три больших брецеля за пять медных монет!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— That is a great bargain! We have three people: one for Kira, one for me, and one for Professor Corvinus.</prosody></speak>",
                    "en": "— That is a great bargain! We have three people: one for Kira, one for me, and one for Teacher Corvinus.",
                    "ru": "— Это отличная сделка! Нас как раз трое: один для Киры, один для меня и один для профессора Корвинуса."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin takes out his brown leather coin purse and unties the green leather string.</prosody></speak>",
                    "en": "Eldrin takes out his brown leather coin purse and unties the green leather string.",
                    "ru": "Элдрин достает свой коричневый кожаный кошелек и развязывает зеленую кожаную веревочку."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Let me count the copper coins: one, two, three, four, five shiny copper coins.</prosody></speak>",
                    "en": "— Let me count the copper coins: one, two, three, four, five shiny copper coins.",
                    "ru": "— Давайте я посчитаю медные монеты: одна, две, три, четыре, пять блестящих медных монет."
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Eldrin places the five copper coins neatly onto the wooden counter.</prosody></speak>",
                    "en": "Eldrin places the five copper coins carefully onto the wooden counter.",
                    "ru": "Элдрин аккуратно выкладывает пять медных монет на деревянный прилавок."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— Here are five copper coins, Master Hans. Three warm salted pretzels, please!</prosody></speak>",
                    "en": "— Here are five copper coins, Master Hans. Three warm with salt twisted breads, please!",
                    "ru": "— Вот пять медных монет, мастер Ганс. Три теплых соленых брецеля, пожалуйста!"
                },
                {
                    "speaker": "baker",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Perfect payment, young man! Thank you very much!</prosody></speak>",
                    "en": "— Perfect payment, young man! Thank you very much!",
                    "ru": "— Идеальная оплата, молодой человек! Большое спасибо!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">Baker Hans takes three steaming pretzels with iron tongs. He wraps each one in clean brown paper.</prosody></speak>",
                    "en": "Baker Hans takes three steaming twisted breads with iron metal tool. He wraps each one in clean brown paper.",
                    "ru": "Пекарь Ганс берет три дымящихся брецеля железными щипцами. Он заворачивает каждый в чистую коричневую бумагу."
                },
                {
                    "speaker": "baker",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Here you go! Be careful, they are still very warm. Enjoy every bite, young scholars!</prosody></speak>",
                    "en": "— Here you go! Be careful, they are still very warm. Enjoy every bite, young students!",
                    "ru": "— Вот, держите! Осторожно, они еще очень горячие. Наслаждайтесь каждым кусочком, юные ученые!"
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Thank you so much, Master Hans! Have a wonderful market day!</prosody></speak>",
                    "en": "— Thank you so much, Master Hans! Have a wonderful market day!",
                    "ru": "— Огромное спасибо, мастер Ганс! Прекрасного базарного дня вам!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">They step aside onto a wooden bench near the stall. The brown paper feels delightfully warm in their hands.</prosody></speak>",
                    "en": "They step aside onto a wooden bench near the stall. The brown paper feels delightfully warm in their hands.",
                    "ru": "Они отходят к деревянной скамье возле лавки. Коричневая бумага приятно греет руки."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— CRUNCH! Oh, listen to that crust! The outside is so crunchy, and the inside is soft like a cloud!</prosody></speak>",
                    "en": "— CRUNCH! Oh, listen to that crust! The outside is so crunchy, and the inside is soft like a cloud!",
                    "ru": "— ХРУСЬ! Ой, послушай эту корочку! Снаружи она такая хрустящая, а внутри мягкая, как облачко!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— And the big white salt crystals on top give it such a delicious savory flavor!</prosody></speak>",
                    "en": "— And the big white salt crystals on top give it such a delicious savory flavor!",
                    "ru": "— А крупные белые кристаллики соли сверху придают такой восхитительный пикантный вкус!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— There is nothing better than a fresh baked pretzel after an early morning cart ride.</prosody></speak>",
                    "en": "— There is nothing better than a fresh baked twisted bread after an early morning cart ride.",
                    "ru": "— Нет ничего лучше свежеиспеченного брецеля после ранней утренней поездки на повозке."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.96\" pitch=\"+2.5st\">— I have plenty of energy now! What is our next stop on the shopping list, Professor?</prosody></speak>",
                    "en": "— I have plenty of energy now! What is our next stop on the shopping list, Teacher?",
                    "ru": "— У меня теперь куча энергии! Какая наша следующая остановка по списку покупок, профессор?"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.86\" pitch=\"-4st\">— Next is the spice pavilion in the center of the square. We must visit merchant Selma.</prosody></speak>",
                    "en": "— Next is the spice big tent in the center of the square. We must visit merchant Selma.",
                    "ru": "— Следующий — павильон пряностей в центре площади. Мы должны навестить купчиху Сельму."
                },
                {
                    "speaker": "kira",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.98\" pitch=\"+2st\">— Let us finish our warm pretzels and head straight to the spice market!</prosody></speak>",
                    "en": "— Let us finish our warm twisted breads and head straight to the spice market!",
                    "ru": "— Давайте доедим наши теплые брецели и сразу пойдем к рядам с пряностями!"
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">The three companions finish their snack happily and walk toward the colorful merchant tents.</prosody></speak>",
                    "en": "The three friends finish their snack happily and walk toward the colorful merchant tents.",
                    "ru": "Трое спутников с удовольствием доедают угощение и идут к разноцветным купеческим палаткам."
                }
            ],
            "quiz": [
                {
                    "question": "How much did three warm salted pretzels cost at the bakery?",
                    "options": [
                        "One gold coin",
                        "Five copper coins",
                        "Twenty silver coins",
                        "They were free"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "What kind of oven did Baker Hans use to bake the fresh pretzels?",
                    "options": [
                        "An electric stove",
                        "A glowing brick oven with oakwood fire",
                        "A microwave",
                        "A campfire on the ground"
                    ],
                    "correctIdx": 1
                },
                {
                    "question": "Where is the team heading next after finishing their pretzel snack?",
                    "options": [
                        "Back home to sleep",
                        "To the spice pavilion to visit merchant Selma",
                        "To the deep river",
                        "To the horse stables"
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Ah, Professor Corvinus! Peace and blessings to you! Welcome back to my humble spice tent!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— And who are these two bright young scholars with wide, curious eyes?</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Thank you, young master! How may I assist the Spire Academy this morning?</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— I have the finest mountain thyme harvested from the sunniest southern peaks last week.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Just three more dried leaves... and CLICK! The golden needle points straight to the center mark!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— And it has a wonderful scent of fresh mountain rain and wild violets!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Thank you, Professor! May your studies at the Spire shine brightly this season!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Look closely at this rear oak wheel, Eldrin. The thick iron rim around the wood is loose and wobbles.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Absolutely not! On the rocky mountain switchbacks, the wheel would break in five minutes.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Ho-ho! Greetings, Professor Corvinus! What brings the Academy cart to my fiery workshop?</prosody></speak>",
                    "en": "— Ho-ho! Hello, Teacher Corvinus! What brings the Academy cart to my very hot workshop?",
                    "ru": "— Хо-хо! Приветствую, профессор Корвинус! Что привело повозку Академии в мою огненную мастерскую?"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Master Bruno! The iron tire on our back wheel is loose. We need your hammer and heat!</prosody></speak>",
                    "en": "— Master Bruno! The iron tire on our back wheel is loose. We need your hammer and heat!",
                    "ru": "— Мастер Бруно! Железная шина на нашем заднем колесе разболталась. Нам нужны твой молот и жар!"
                },
                {
                    "speaker": "smith",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— A simple fix for an honest cart! Step back to a safe distance, young scholars! Watch the bright sparks fly!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Heat expands the metal, young man! Now it will fit over the oak wheel easily!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Now for the magic of cold well water! Watch closely!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— That wheel is now stronger than new! It will carry your cart safely for ten full years!</prosody></speak>",
                    "en": "— That wheel is now stronger than new! It will carry your cart safely for ten full years!",
                    "ru": "— Это колесо теперь крепче нового! Оно будет надежно возить вашу повозку целых десять лет!"
                },
                {
                    "speaker": "barnaby",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Thank you with all my heart, Master Bruno! You saved our journey home!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— A pleasure serving the Spire Academy! Safe travels up the mountain trails, young friends!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Oh, my goodness! Smokey! You found my sweet little runaway kitten!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— I was searching for him all morning! Thank you with all my heart, kind young scholars!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Please take these fresh yellow flowers as a token of my deep thanks!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Ah, Professor Corvinus! My dearest old friend! Welcome to my treasure house of forgotten knowledge!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Step inside, young friends! Run your fingers along the shelves. Every book has a story to tell.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— That star atlas was crafted fifty years ago by a master astronomer on the coast.</prosody></speak>",
                    "en": "— That star atlas was crafted fifty years ago by a master star teacher on the coast.",
                    "ru": "— Этот звездный атлас был создан пятьдесят лет назад мастером-астрономом на побережье."
                },
                {
                    "speaker": "otho",
                    "voice": "Charon",
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— It has accurate charts of all twelve celestial seasons and planetary paths.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— For a true, dedicated scholar from the Spire Academy, just three silver coins.</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— May the silver stars guide your path to great wisdom, young apprentice!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Welcome back, scholars! The horses are well-fed, and the repaired back wheel is sturdy as a mountain!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Two lanterns mounted on the front cart rails, and the third resting safely in the tool box! Checked!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— That is a master-level hitch knot, young lady! Outstanding teamwork!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Giddy-up, Daisy! Giddy-up, Clover! Take us home to the Spire!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Safe journey up the mountain pass, Professor Corvinus! See you next season!</prosody></speak>",
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
                    "ssml": "<speak><prosody rate=\"0.92\" pitch=\"-1st\">— Time to light our path, travelers! Darkness falls fast in the high mountains.</prosody></speak>",
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
