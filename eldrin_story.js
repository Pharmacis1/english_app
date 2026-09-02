/**
 * YOUNG ELDRIN AUDIOBOOK: THE SECRETS OF THE ARCANE SPIRE
 * CEFR A1 Mystery Novel with Multi-Voice Narration & Comprehension Quizzes
 * Strictly using A1 grammar & the 1,100 words studied across the 10 heroes.
 * Cast: Young Eldrin (Puck), Kira (Aoede), Master Corvinus (Charon), Commander Vane (Fenrir), Narrator (Charon).
 */

const ELDRIN_AUDIOBOOK = {
    title: "Young Eldrin and the Iron Below",
    titleRu: "Юный Элдрин и Железные Глубины",
    description: "An exciting 25-chapter mystery novel set in the vertical world of the Arcane Spire. Built strictly with CEFR A1 grammar and the 1,100 essential words studied in EnglishPulse.",
    descriptionRu: "Увлекательный роман-тайна из 25 глав в вертикальном мире Тайного Шпиля. Построен строго на грамматике A1 и 1100 изучаемых словах.",
    totalChapters: 25,
    totalTargetWords: 25000,
    acts: [
        {
            number: 1,
            titleEn: "Act I: The Dusty Scroll",
            titleRu: "Акт I: Пыльный Свиток",
            chaptersRange: [1, 5]
        },
        {
            number: 2,
            titleEn: "Act II: Steps Into The Dark",
            titleRu: "Акт II: Шаги во Тьму",
            chaptersRange: [6, 10]
        },
        {
            number: 3,
            titleEn: "Act III: The Poisoned History",
            titleRu: "Акт III: Отравленная История",
            chaptersRange: [11, 15]
        },
        {
            number: 4,
            titleEn: "Act IV: Hunted on the Stairs",
            titleRu: "Акт IV: Погоня на Лестницах",
            chaptersRange: [16, 20]
        },
        {
            number: 5,
            titleEn: "Act V: The Heart of the Spire",
            titleRu: "Акт V: Сердце Шпиля",
            chaptersRange: [21, 25]
        }
    ],
    chapters: [
        // =========================================================================
        // ===== CHAPTER 1: THE BOY IN LEVEL 82 =====
        // =========================================================================
        {
            id: "eldrin-ch-1",
            number: 1,
            act: 1,
            titleEn: "Chapter 1: The Boy in Level 82",
            titleRu: "Глава 1: Мальчик на 82-м Уровне",
            grammarFocus: "Present Simple, Verb 'to be', Demonstratives (This / That), Prepositions",
            wordCount: 1000,
            coverIcon: "fa-book-bookmark",
            coverColor: "#a855f7",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "High above the white clouds, there is a magical floating tower called the Arcane Spire.",
                    ru: "Высоко над белыми облаками находится волшебная парящая башня под названием Тайный Шпиль."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Inside the big quiet library, a young boy sits near the tall round window.",
                    ru: "Внутри большой тихой библиотеки сидит молодой мальчик возле высокого круглого окна."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "His name is Eldrin. He is twelve years old, and he opens a dusty magical scroll with big, happy eyes.",
                    ru: "Его зовут Элдрин. Ему двенадцать лет, и он открывает пыльный магический свиток с большими счастливыми глазами."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Look at this ancient scroll! Magic is not only power. Magic is a language, isn't it?\"",
                    ru: "\"Посмотри на этот древний свиток! Магия — это не только сила. Магия — это язык, не так ли?\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "On the heavy wooden desk, there is a strange purple feather and a small glass bottle of blue ink.",
                    ru: "На тяжелом деревянном столе лежат странное фиолетовое перо и маленькая стеклянная бутылочка синих чернил."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Suddenly, the purple feather moves! It floats into the air and writes a glowing word on the paper.",
                    ru: "Внезапно фиолетовое перо шевелится! Оно взлетает в воздух и пишет светящееся слово на бумаге."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Wait, what?! Are you alive, little feather?!\"",
                    ru: "\"Подожди, что?! Ты живое, маленькое перышко?!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The magical word on the scroll shines with golden light: 'SEEK THE LIGHT'.",
                    ru: "Магическое слово на свитке сияет золотым светом: 'ИЩИ СВЕТ'."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Seek the light? Where is the light in this dark library?\"",
                    ru: "\"Ищи свет? Где же свет в этой темной библиотеке?\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The feather floats across the high room and points to the heavy iron door at the end of the dark corridor.",
                    ru: "Перо летит через высокую комнату и указывает на тяжелую железную дверь в конце темного коридора."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"A secret door? Nobody goes there! But I am not afraid! I must find what is behind it! My first real adventure begins today!\"",
                    ru: "\"Секретная дверь? Туда никто не ходит! Но я не боюсь! Я должен узнать, что за ней! Мое первое настоящее приключение начинается сегодня!\""
                }
            ],
            quiz: [
                {
                    question: "Where does young Eldrin live and study?",
                    options: [
                        "In the floating Arcane Spire above the clouds",
                        "In a dark cave underground",
                        "In a small fishing boat on the lake",
                        "In a noisy city market"
                    ],
                    correctIdx: 0,
                    explanation: "Young Eldrin studies in the magical floating tower called the Arcane Spire."
                },
                {
                    question: "What does the floating purple feather write on the ancient paper?",
                    options: [
                        "'SEEK THE LIGHT'",
                        "'GO TO BED'",
                        "'EAT SOME APPLES'",
                        "'BUY A NEW HAT'"
                    ],
                    correctIdx: 0,
                    explanation: "The feather writes the golden glowing words 'SEEK THE LIGHT'."
                },
                {
                    question: "What does the magical feather point to at the end of the corridor?",
                    options: [
                        "A heavy iron secret door",
                        "A bowl of hot soup",
                        "A round glass mirror",
                        "A sleeping cat on the chair"
                    ],
                    correctIdx: 0,
                    explanation: "The feather points to the heavy iron secret door at the end of the corridor."
                }
            ]
        },

        // =========================================================================
        // ===== CHAPTER 2: THE MISSING REGISTER =====
        // =========================================================================
        {
            id: "eldrin-ch-2",
            number: 2,
            act: 1,
            titleEn: "Chapter 2: The Missing Register",
            titleRu: "Глава 2: Пропавший Реестр",
            grammarFocus: "Past Simple (saw, opened, found, was/were), Questions, Negations (did not)",
            wordCount: 1000,
            coverIcon: "fa-book-skull",
            coverColor: "#6366f1",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin walked softly across the stone floor of the archive. The room was cold and smelled of old paper.",
                    ru: "Элдрин мягко ступал по каменному полу архива. В комнате было холодно и пахло старой бумагой."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "There were hundreds of black books on the tall wooden shelves. Every book had an iron number on its spine.",
                    ru: "На высоких деревянных полках стояли сотни черных книг. У каждой книги на корешке был железный номер."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Where is the register of the lowest levels? I want to see the map of our tower.\"",
                    ru: "\"Где же реестр самых нижних уровней? Я хочу увидеть карту нашей башни.\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "He climbed a tall wooden ladder and looked at shelf number eighty. There it was: The Great Register of Levels.",
                    ru: "Он поднялся по высокой деревянной лестнице и посмотрел на полку номер восемьдесят. Вот она: Великий Реестр Уровней."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "It was a massive book bound in dark brown leather. Eldrin carried it carefully to the reading desk.",
                    ru: "Это была массивная книга в темно-коричневом кожаном переплете. Элдрин осторожно отнес её к столу для чтения."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "He turned the yellow pages slowly. Page one hundred: The High Sanctorum. Page fifty: The Water Terraces. Page twenty: The Iron Foundry.",
                    ru: "Он медленно перелистывал желтые страницы. Страница сто: Высокое Святилище. Страница пятьдесят: Водные Террасы. Страница двадцать: Железный Литейный цех."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Wait! What happened to page four hundred? Why is the paper torn here?\"",
                    ru: "\"Подожди! Что случилось со страницей четыреста? Почему бумага здесь вырвана?\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Someone cut the last page out with a very sharp knife! Only one line of black ink remained at the bottom edge.",
                    ru: "Кто-то вырезал последнюю страницу очень острым ножом! На нижнем краю осталась только одна строчка черных чернил."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Level Zero: Strictly Forbidden. Do Not Record. But why? What is hidden on Level Zero?\"",
                    ru: "\"Уровень Ноль: Строго Запрещено. Не Записывать. Но почему? Что скрыто на Нулевом Уровне?\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "TAP! TAP! TAP! The heavy sound of a wooden cane echoed down the corridor. An old shadow appeared at the door.",
                    ru: "СТУК! СТУК! СТУК! Тяжелый стук деревянной трости раздался по коридору. В дверях появилась старая тень."
                },
                {
                    speaker: "corvinus",
                    voice: "Charon",
                    en: "\"Put that book back on the shelf, boy! Some questions have dangerous answers in the Arcane Spire!\"",
                    ru: "\"Поставь эту книгу обратно на полку, мальчик! Некоторые вопросы таят опасные ответы в Тайном Шпиле!\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Master Corvinus! I... I was only dusting the top shelf! I am sorry, sir!\"",
                    ru: "\"Мастер Корвинус! Я... Я просто вытирал пыль с верхней полки! Простите меня, сэр!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The old archivist looked at Eldrin with sharp grey eyes. He did not shout, but his old hands trembled slightly on his cane.",
                    ru: "Старый архивариус посмотрел на Элдрина острыми серыми глазами. Он не кричал, но его старые руки слегка дрожали на трости."
                },
                {
                    speaker: "corvinus",
                    voice: "Charon",
                    en: "\"Your father asked too many questions, Eldrin. Do not make his mistake. Go to your room now.\"",
                    ru: "\"Твой отец задавал слишком много вопросов, Элдрин. Не повторяй его ошибки. Иди в свою комнату сейчас же.\""
                }
            ],
            quiz: [
                {
                    question: "What was missing from the Great Register of Levels?",
                    options: [
                        "Page four hundred was cut out with a knife",
                        "The golden front cover was stolen",
                        "All pictures of dragons were erased",
                        "The title page had no author name"
                    ],
                    correctIdx: 0,
                    explanation: "Page four hundred was cut out with a sharp knife."
                },
                {
                    question: "What mysterious line was written at the bottom edge of the cut page?",
                    options: [
                        "'Level Zero: Strictly Forbidden. Do Not Record.'",
                        "'Welcome to the library party!'",
                        "'Today is a sunny day in the garden.'",
                        "'Please close all windows before night.'"
                    ],
                    correctIdx: 0,
                    explanation: "The ink read: 'Level Zero: Strictly Forbidden. Do Not Record.'"
                },
                {
                    question: "Who caught Eldrin reading the forbidden register?",
                    options: [
                        "Master Corvinus with his wooden cane",
                        "A noisy garden monkey",
                        "An angry city merchant",
                        "A little girl with bread"
                    ],
                    correctIdx: 0,
                    explanation: "Chief Archivist Master Corvinus caught Eldrin at the desk."
                }
            ]
        },

        // =========================================================================
        // ===== CHAPTER 3: THE BRONZE KEY =====
        // =========================================================================
        {
            id: "eldrin-ch-3",
            number: 3,
            act: 1,
            titleEn: "Chapter 3: The Bronze Key",
            titleRu: "Глава 3: Бронзовый Ключ",
            grammarFocus: "Prepositions of Place (inside, under, between), Past Simple, Possessives (my father's)",
            wordCount: 1000,
            coverIcon: "fa-key",
            coverColor: "#f59e0b",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "That night, Eldrin could not sleep in his small apprentice dormitory on Level 82.",
                    ru: "В ту ночь Элдрин не мог уснуть в своей маленькой спальне для учеников на 82-м уровне."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The wind whistled outside the circular stone wall. Far below, the great cloud sea was dark as ink.",
                    ru: "Ветер свистел за круглой каменной стеной. Далеко внизу огромное море облаков было темным, как чернила."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Master Corvinus said: 'Your father asked too many questions.' What did he mean?\"",
                    ru: "\"Мастер Корвинус сказал: 'Твой отец задавал слишком много вопросов'. Что он имел в виду?\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin remembered his father. His father was an engineer on the lower levels. Five years ago, guards took him away into the deep fog.",
                    ru: "Элдрин вспомнил своего отца. Его отец был инженером на нижних уровнях. Пять лет назад стражники увели его в глубокий туман."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "His father left only one object: a very thick astronomy book with a dark green leather cover.",
                    ru: "Его отец оставил только один предмет: очень толстую книгу по астрономии в темно-зеленом кожаном переплете."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Let me look at this old green book again. Is there a hidden secret inside it?\"",
                    ru: "\"Дай-ка я снова взгляну на эту старую зеленую книгу. Есть ли внутри неё скрытый секрет?\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "He took the green book from beneath his pillow. It was strangely heavy for its size.",
                    ru: "Он достал зеленую книгу из-под подушки. Она была странно тяжелой для своего размера."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin pressed the middle of the heavy back cover. CLICK! A small secret door in the binding popped open!",
                    ru: "Элдрин нажал на середину тяжелой задней обложки. ЩЁЛК! Маленькая потайная дверца в переплете распахнулась!"
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"A secret pocket! Father made a hollow compartment inside the book!\"",
                    ru: "\"Потайной карман! Отец сделал полое отделение внутри книги!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Inside the hollow space lay a heavy bronze key with three strange numbers engraved on its handle: '12 - 5 - 0'.",
                    ru: "Внутри полого пространства лежал тяжелый бронзовый ключ с тремя странными выбитыми цифрами на ручке: '12 - 5 - 0'."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Twelve, five, zero... Are these level numbers? Does this key open a door down in the foundry?!\"",
                    ru: "\"Двенадцать, пять, ноль... Это номера уровней? Открывает ли этот ключ дверь внизу в литейном цехе?!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Under the key, there was also a folded note with his father's handwriting: 'The engines do not sleep, but they are dying. Find Bram on Level 12.'",
                    ru: "Под ключом также лежала сложенная записка с почерком отца: 'Двигатели не спят, но они умирают. Найди Брама на 12-м уровне.'"
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Level 12! I must go down to the lower levels! But how can an apprentice pass the Sentinel checkpoints?\"",
                    ru: "\"12-й уровень! Я должен спуститься на нижние уровни! Но как ученик может пройти через посты стражи?\""
                }
            ],
            quiz: [
                {
                    question: "What object did Eldrin's father leave behind for him?",
                    options: [
                        "A thick astronomy book with a dark green leather cover",
                        "A golden sword with ruby gems",
                        "A wooden toy boat",
                        "A bag of silver coins"
                    ],
                    correctIdx: 0,
                    explanation: "His father left a thick green astronomy book."
                },
                {
                    question: "What was hidden inside the hollow binding of the book?",
                    options: [
                        "A bronze key engraved with '12 - 5 - 0' and a note",
                        "A bottle of hot tea",
                        "A pair of warm socks",
                        "A bag of sweet sugar"
                    ],
                    correctIdx: 0,
                    explanation: "A bronze key with numbers '12 - 5 - 0' and a folded note were hidden inside."
                },
                {
                    question: "Who did the father's note instruct Eldrin to find on Level 12?",
                    options: [
                        "Find Bram on Level 12",
                        "Find the King in the palace",
                        "Find a green horse",
                        "Find a new doctor"
                    ],
                    correctIdx: 0,
                    explanation: "The note said: 'Find Bram on Level 12.'"
                }
            ]
        },

        // =========================================================================
        // ===== CHAPTER 4: THE GIRL WITH IRON BOOTS =====
        // =========================================================================
        {
            id: "eldrin-ch-4",
            number: 4,
            act: 1,
            titleEn: "Chapter 4: The Girl with Iron Boots",
            titleRu: "Глава 4: Девочка в Железных Сапогах",
            grammarFocus: "Present Continuous (running, carrying, shouting), Adjectives (fast, heavy, dark), Modals (can / must)",
            wordCount: 1000,
            coverIcon: "fa-person-running",
            coverColor: "#ec4899",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Early next morning, loud steam hissed near the service lifts of Level 82. The iron chains groaned with heavy weight.",
                    ru: "Рано на следующее утро громкий пар зашипел возле служебных лифтов 82-го уровня. Железные цепи стонали под тяжелым весом."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Apprentices from the Lower Levels were carrying barrels of black lamp oil and fresh vegetables from the cargo lift.",
                    ru: "Ученики с Нижних Уровней таскали бочки с черным ламповым маслом и свежие овощи из грузового лифта."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "One runner moved faster than anyone else. She wore dark leather clothes, thick gloves, and heavy iron-soled boots.",
                    ru: "Одна бегунья двигалась быстрее всех остальных. На ней была темная кожаная одежда, толстые перчатки и тяжелые сапоги на железной подошве."
                },
                {
                    speaker: "kira",
                    voice: "Aoede",
                    en: "\"Move your feet, slow library boys! The oil is hot, and the lift must go down in three minutes!\"",
                    ru: "\"Шевелите ногами, медлительные библиотечные мальчишки! Масло горячее, и лифт должен уйти вниз через три минуты!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Suddenly, two tall Iron Sentinels in gleaming steel breastplates marched around the corner with long shock-staves.",
                    ru: "Внезапно двое высоких Железных Стражей в блестящих стальных кирасах вышли из-за угла с длинными шоковыми посохами."
                },
                {
                    speaker: "vane",
                    voice: "Fenrir",
                    en: "\"Halt! Cargo inspection! Open every box from the lower foundry immediately!\"",
                    ru: "\"Стой! Осмотр груза! Немедленно откройте каждый ящик из нижнего литейного цеха!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The girl stumbled against a wooden crate. A small round dark object fell from her leather belt and rolled across the floor towards Eldrin!",
                    ru: "Девочка споткнулась о деревянный ящик. Маленький круглый темный предмет выпал из её кожаного пояса и покатился по полу к Элдрину!"
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin reacted swiftly. He stepped forward and placed his boot over the object before the guards saw it.",
                    ru: "Элдрин среагировал молниеносно. Он шагнул вперед и накрыл предмет своим сапогом, прежде чем стражники его увидели."
                },
                {
                    speaker: "vane",
                    voice: "Fenrir",
                    en: "\"You, archive boy! What are you doing here near the freight lift?!\"",
                    ru: "\"Ты, мальчик из архива! Что ты делаешь здесь возле грузового лифта?!\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"I am collecting the lamp oil for Master Corvinus, commander. The study lamps need fresh oil today.\"",
                    ru: "\"Я забираю ламповое масло для мастера Корвинуса, командор. Лампам для занятий сегодня нужно свежее масло.\""
                },
                {
                    speaker: "vane",
                    voice: "Fenrir",
                    en: "\"Good. Take your oil and leave. Lower level runners, finish unloading now!\"",
                    ru: "\"Хорошо. Бери масло и уходи. Бегуны с нижних уровней, заканчивайте разгрузку сейчас же!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "When the Sentinels walked away, the girl pulled Eldrin behind a stack of wooden crates into the shadows.",
                    ru: "Когда стражи ушли, девочка затянула Элдрина за стопку деревянных ящиков в тень."
                },
                {
                    speaker: "kira",
                    voice: "Aoede",
                    en: "\"Give it back to me! That is my most precious possession!\"",
                    ru: "\"Отдай это мне! Это моя самая драгоценная вещь!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin opened his hand. It was a heavy brass cylinder with a thick glass lens inside — a miniature telescope.",
                    ru: "Элдрин разжал ладонь. Это был тяжелый латунный цилиндр с толстой стеклянной линзой внутри — миниатюрная подзорная труба."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"What is this glass lens? My name is Eldrin. Who are you?\"",
                    ru: "\"Что это за стеклянная линза? Меня зовут Элдрин. А кто ты?\""
                },
                {
                    speaker: "kira",
                    voice: "Aoede",
                    en: "\"I am Kira, a runner from Level 12. And this lens is the only thing that sees through the great white mist!\"",
                    ru: "\"Я Кира, бегунья с 12-го уровня. И эта линза — единственная вещь, которая видит сквозь великий белый туман!\""
                }
            ],
            quiz: [
                {
                    question: "Who was Kira and where did she come from?",
                    options: [
                        "An agile runner girl from Level 12 wearing iron-soled boots",
                        "A princess from the High Sanctorum",
                        "A teacher of French grammar",
                        "A cook from the palace kitchen"
                    ],
                    correctIdx: 0,
                    explanation: "Kira was a fast apprentice runner from Level 12."
                },
                {
                    question: "What dropped from Kira's belt during the guard inspection?",
                    options: [
                        "A miniature brass telescope with a thick glass lens",
                        "A piece of chocolate cake",
                        "A golden ring with diamonds",
                        "An iron spoon"
                    ],
                    correctIdx: 0,
                    explanation: "A small brass telescope with a glass lens dropped onto the floor."
                },
                {
                    question: "What special power does Kira's glass lens possess?",
                    options: [
                        "It can see through the great white mist",
                        "It can make hot water cold",
                        "It can sing songs",
                        "It can unlock any door"
                    ],
                    correctIdx: 0,
                    explanation: "Kira said: 'This lens is the only thing that sees through the great white mist!'"
                }
            ]
        },

        // =========================================================================
        // ===== CHAPTER 5: WHISPERS IN THE DARK =====
        // =========================================================================
        {
            id: "eldrin-ch-5",
            number: 5,
            act: 1,
            titleEn: "Chapter 5: Whispers in the Dark",
            titleRu: "Глава 5: Шёпот в Темноте",
            grammarFocus: "Future with Will (I will help, we will go), Comparisons, Prepositions of Movement (down, through)",
            wordCount: 1000,
            coverIcon: "fa-ear-listen",
            coverColor: "#8b5cf6",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Night fell over Level 82. The big bronze bell chimed ten times. Curfew began.",
                    ru: "Ночь опустилась на 82-й уровень. Большой бронзовый колокол пробил десять раз. Начался комендантский час."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin crept down the dark hallway of the archive. A narrow beam of yellow candlelight shone from Master Corvinus's private study.",
                    ru: "Элдрин прокрался по темному коридору архива. Узкий луч желтого свечного света падал из личного кабинета мастера Корвинуса."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin stopped near the wooden door and listened closely. Two men were speaking in low, tense voices.",
                    ru: "Элдрин остановился возле деревянной двери и внимательно прислушался. Двое мужчин говорили низкими, напряженными голосами."
                },
                {
                    speaker: "vane",
                    voice: "Fenrir",
                    en: "\"The Council will lock the iron gates between Level 30 and Level 29 tomorrow morning, archivist.\"",
                    ru: "\"Совет закроет железные ворота между 30-м и 29-м уровнями завтра утром, архивариус.\""
                },
                {
                    speaker: "corvinus",
                    voice: "Charon",
                    en: "\"Lock the gates?! But thousands of workers live down in the Foundry! If you cut off their water, they will starve!\"",
                    ru: "\"Закроете ворота?! Но тысячи рабочих живут внизу в Литейном цехе! Если вы перекроете им воду, они будут голодать!\""
                },
                {
                    speaker: "vane",
                    voice: "Fenrir",
                    en: "\"It is Arch-Prelate Malakor's order! The altitude thrusters are shaking. The Spire is losing height every week! We must conserve all power for the Upper City!\"",
                    ru: "\"Это приказ верховного прелата Малакора! Высотные двигатели трясутся. Шпиль теряет высоту каждую неделю! Мы должны сохранить всю энергию для Верхнего Города!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin gasped in horror. The Spire was losing height! The floating city was slowly falling!",
                    ru: "Элдрин ахнул от ужаса. Шпиль терял высоту! Парящий город медленно падал!"
                },
                {
                    speaker: "vane",
                    voice: "Fenrir",
                    en: "\"Ensure no student or apprentice goes near the spiral stairs. Anyone found on the stairs will be sent to the Mist.\"",
                    ru: "\"Убедитесь, что ни один студент или ученик не приближается к винтовым лестницам. Любой, кого найдут на лестнице, будет отправлен в Туман.\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Heavy armored boots clanked away down the marble stairs. Eldrin held his breath until Commander Vane was gone.",
                    ru: "Тяжелые бронированные сапоги загремели вниз по мраморной лестнице. Элдрин затаил дыхание, пока командор Вейн не ушел."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The door opened slowly. Master Corvinus stood in the doorway, holding a copper lantern. His eyes were sad but resolute.",
                    ru: "Дверь медленно открылась. Мастер Корвинус стоял в дверном проеме, держа медный фонарь. Его глаза были печальными, но решительными."
                },
                {
                    speaker: "corvinus",
                    voice: "Charon",
                    en: "\"I know you are standing there, Eldrin. You have your father's ears and his brave, foolish heart.\"",
                    ru: "\"Я знаю, что ты стоишь там, Элдрин. У тебя уши твоего отца и его храброе, глупое сердце.\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Master Corvinus! Is it true?! Is the Spire falling into the clouds?! What can we do?!\"",
                    ru: "\"Мастер Корвинус! Это правда?! Шпиль падает в облака?! Что мы можем сделать?!\""
                },
                {
                    speaker: "corvinus",
                    voice: "Charon",
                    en: "\"Take this copper lantern and this map of the ventilation shafts. Tomorrow will be too late. Find your father's friend Bram on Level 12.\"",
                    ru: "\"Возьми этот медный фонарь и эту карту вентиляционных шахт. Завтра будет слишком поздно. Найди друга твоего отца, Брама, на 12-м уровне.\""
                },
                {
                    speaker: "corvinus",
                    voice: "Charon",
                    en: "\"If the Council catches me, remember: the truth is not in the sky. The truth is deep below.\"",
                    ru: "\"Если Совет схватит меня, помни: истина не в небе. Истина глубоко внизу.\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Kira was already waiting near the service pipe with her iron boots laced tight. Act One came to an end as the great descent began!",
                    ru: "Кира уже ждала возле служебной трубы в туго зашнурованных железных сапогах. Первый Акт подошел к концу, когда начался великий спуск!"
                }
            ],
            quiz: [
                {
                    question: "What terrible secret did Commander Vane reveal to Master Corvinus?",
                    options: [
                        "The Spire is losing height and slowly falling every week",
                        "The library had no more tea",
                        "The birds stopped singing songs",
                        "The roof needed yellow paint"
                    ],
                    correctIdx: 0,
                    explanation: "Commander Vane said: 'The Spire is losing height every week!'"
                },
                {
                    question: "What did the Council plan to do tomorrow morning?",
                    options: [
                        "Lock the iron gates between Level 30 and Level 29 and cut off the lower city",
                        "Give free apples to all children",
                        "Build a giant swimming pool",
                        "Fly to the moon"
                    ],
                    correctIdx: 0,
                    explanation: "The Council planned to lock the gates and seal off the Lower Foundry."
                },
                {
                    question: "What did Master Corvinus give to Eldrin to help him descend?",
                    options: [
                        "A copper lantern and a map of the ventilation shafts",
                        "A golden cup with soup",
                        "A heavy winter blanket",
                        "A red silk umbrella"
                    ],
                    correctIdx: 0,
                    explanation: "Master Corvinus gave him a copper lantern and a secret ventilation map."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.ELDRIN_AUDIOBOOK = ELDRIN_AUDIOBOOK;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ELDRIN_AUDIOBOOK };
}
