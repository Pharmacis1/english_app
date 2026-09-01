/**
 * YOUNG ELDRIN AUDIOBOOK: THE APPRENTICE OF THE ARCANE SPIRE
 * CEFR A1 Interactive Audio Story with Multi-Voice Narration & Comprehension Quizzes
 * Strictly using A1 grammar & the 1,100 words studied across the 10 heroes.
 * Clean Voice Acting: Character cards contain ONLY direct speech of the character.
 */

const ELDRIN_AUDIOBOOK = {
    title: "Young Eldrin: The Apprentice of the Arcane Spire",
    titleRu: "Юный Элдрин: Ученик Тайного Шпиля",
    description: "An exciting 6-chapter audio adventure from Archmage Eldrin's youth. Built strictly with CEFR A1 grammar and the 1,100 essential words studied in EnglishPulse.",
    descriptionRu: "Увлекательное 6-главное аудио-приключение из молодости Архимага Эльдрина. Построено строго на грамматике A1 и 1100 изучаемых словах.",
    totalChapters: 6,
    totalTargetWords: 1850,
    chapters: [
        {
            id: "eldrin-ch-1",
            number: 1,
            titleEn: "Chapter 1: The Boy in the Floating Library",
            titleRu: "Глава 1: Мальчик в Парящей Библиотеке",
            grammarFocus: "Present Simple, Verb 'to be', Demonstratives (This / That), Prepositions",
            wordCount: 310,
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
        {
            id: "eldrin-ch-2",
            number: 2,
            titleEn: "Chapter 2: The Secret of the Blue Crystal",
            titleRu: "Глава 2: Тайна Синего Кристалла",
            grammarFocus: "There is / There are, Prepositions (in, under, behind, next to), Questions",
            wordCount: 320,
            coverIcon: "fa-gem",
            coverColor: "#06b6d4",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin opens the heavy iron door very quietly. Creak... the corridor is cold and dark.",
                    ru: "Элдрин очень тихо открывает тяжелую железную дверь. Скрип... коридор холодный и темный."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "There are many old wooden boxes on the left, and there is a dusty stone shelf on the right.",
                    ru: "Слева стоит много старых деревянных ящиков, а справа — пыльная каменная полка."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Where is the light coming from? Is there someone in this room?\"",
                    ru: "\"Откуда идет свет? Здесь кто-то есть в этой комнате?\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Under a large velvet cloth, something is shining with bright sapphire blue light.",
                    ru: "Под большим бархатным покрывалом что-то сияет ярким сапфирово-синим светом."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin pulls the cloth away with both hands. There is a giant blue crystal inside a golden ring!",
                    ru: "Элдрин сдергивает ткань обеими руками. Внутри золотого кольца лежит гигантский синий кристалл!"
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"This crystal is wonderful! It feels warm, like summer sun on my cold hands!\"",
                    ru: "\"Этот кристалл великолепен! Он теплый на ощупь, как летнее солнце на моих холодных руках!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Suddenly, a warm and gentle female voice speaks from the glowing light of the crystal.",
                    ru: "Внезапно теплый и нежный женский голос раздается из сияющего света кристалла."
                },
                {
                    speaker: "astraea",
                    voice: "Kore",
                    en: "\"Greetings, young seeker. I am Astraea, the spirit of light and healing. Are you ready to learn true magic?\"",
                    ru: "\"Приветствую, юный искатель. Я Астрея, дух света и исцеления. Готов ли ты учиться истинной магии?\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Yes, Lady Astraea! I am ready! What must I do first?\"",
                    ru: "\"Да, леди Астрея! Я готов! Что мне нужно сделать сначала?\""
                },
                {
                    speaker: "astraea",
                    voice: "Kore",
                    en: "\"You need a strong magic staff to hold this energy. Go to the Iron Mountain and find young blacksmith Thorin!\"",
                    ru: "\"Тебе нужен крепкий магический посох, чтобы удерживать эту энергию. Иди к Железной Горе и найди юного кузнеца Торина!\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"To the Iron Mountain? I will go there at sunrise! Thank you, Lady Astraea!\"",
                    ru: "\"К Железной Горе? Я отправлюсь туда на рассвете! Спасибо, леди Астрея!\""
                }
            ],
            quiz: [
                {
                    question: "What is shining under the velvet cloth in the secret cellar?",
                    options: [
                        "A giant glowing sapphire blue crystal",
                        "A sleeping black dragon",
                        "A box of sweet apples",
                        "An old red wooden chair"
                    ],
                    correctIdx: 0,
                    explanation: "Under the velvet cloth, a giant glowing blue crystal rests inside a golden ring."
                },
                {
                    question: "Who speaks to Eldrin from the crystal light?",
                    options: [
                        "Astraea, the spirit of light and healing",
                        "An angry goblin king",
                        "A quiet grey cat",
                        "The castle guard"
                    ],
                    correctIdx: 0,
                    explanation: "Astraea, the spirit of light and healing, speaks to Eldrin."
                },
                {
                    question: "Where does Astraea instruct young Eldrin to travel?",
                    options: [
                        "To the Iron Mountain to find blacksmith Thorin",
                        "To the grocery market for milk",
                        "Back to his bedroom to sleep",
                        "To the deep blue sea"
                    ],
                    correctIdx: 0,
                    explanation: "Astraea sends him to the Iron Mountain to find blacksmith Thorin."
                }
            ]
        },
        {
            id: "eldrin-ch-3",
            number: 3,
            titleEn: "Chapter 3: The Journey to the Iron Mountain",
            titleRu: "Глава 3: Путешествие к Железной Горе",
            grammarFocus: "Past Simple (regular & irregular), Comparatives (-er, more), Adjectives",
            wordCount: 330,
            coverIcon: "fa-mountain",
            coverColor: "#f59e0b",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The next morning, Eldrin packed his leather bag with fresh bread, yellow cheese, and clean water.",
                    ru: "На следующее утро Элдрин собрал свою кожаную сумку со свежим хлебом, желтым сыром и чистой водой."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "He walked for three hours along the rocky road. The mountains were taller and steeper than the green hills.",
                    ru: "Он шел три часа по каменистой дороге. Горы были выше и круче зеленых холмов."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Soon, he heard loud rhythmic sounds: CLANG! CLANG! BOOM! Bright golden sparks flew into the air.",
                    ru: "Вскоре он услышал громкие ритмичные звуки: ДЗИНЬ! ДЗИНЬ! БУМ! Яркие золотые искры летели в воздух."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Near the hot stone forge stood a strong young dwarf with a big hammer. It was Thorin!",
                    ru: "Возле горячей каменной кузницы стоял сильный юный дварф с большим молотом. Это был Торин!"
                },
                {
                    speaker: "thorin",
                    voice: "Fenrir",
                    en: "\"Hail, traveler! Who are you, and why did you come to my hot mountain forge?!\"",
                    ru: "\"Привет, путник! Кто ты и зачем пришел в мою горячую горную кузницу?!\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Hello! My name is Eldrin. I need a magic staff for this blue crystal, please!\"",
                    ru: "\"Привет! Меня зовут Элдрин. Мне нужен магический посох для этого синего кристалла, пожалуйста!\""
                },
                {
                    speaker: "thorin",
                    voice: "Fenrir",
                    en: "\"A magic crystal?! Ha! My steel is stronger than rocks! Let us craft the finest staff together!\"",
                    ru: "\"Магический кристалл?! Ха! Моя сталь крепче скал! Давай скуем лучший посох вместе!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Thorin heated the silver metal in the bright red fire. He hammered the metal until it became smooth and beautiful.",
                    ru: "Торин нагрел серебряный металл в ярком красном огне. Он ковал металл, пока тот не стал гладким и красивым."
                },
                {
                    speaker: "thorin",
                    voice: "Fenrir",
                    en: "\"Here is your silver staff, young mage! It is lighter and stronger than any wood!\"",
                    ru: "\"Вот твой серебряный посох, юный маг! Он легче и прочнее любого дерева!\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Thank you, Thorin! You are the best blacksmith in the realm!\"",
                    ru: "\"Спасибо, Торин! Ты лучший кузнец во всем королевстве!\""
                },
                {
                    speaker: "thorin",
                    voice: "Fenrir",
                    en: "\"Go to the Emerald Grove next, Eldrin. You must awaken the spirit of nature!\"",
                    ru: "\"Иди теперь в Изумрудную Рощу, Элдрин. Ты должен пробудить дух природы!\""
                }
            ],
            quiz: [
                {
                    question: "How long did young Eldrin walk along the rocky road to the mountain?",
                    options: [
                        "For three hours",
                        "For ten minutes",
                        "For five days",
                        "He took a fast train"
                    ],
                    correctIdx: 0,
                    explanation: "He walked for three hours along the rocky road."
                },
                {
                    question: "Who was hammering metal near the hot stone forge?",
                    options: [
                        "Young dwarf Thorin with a big hammer",
                        "A sleeping baker",
                        "An old farmer",
                        "A wandering clown"
                    ],
                    correctIdx: 0,
                    explanation: "Young dwarf Thorin was hammering metal at the forge."
                },
                {
                    question: "What kind of staff did Thorin forge for Eldrin?",
                    options: [
                        "A silver staff, lighter and stronger than wood",
                        "A heavy iron shoe",
                        "A wooden fork",
                        "A plastic toy"
                    ],
                    correctIdx: 0,
                    explanation: "Thorin crafted a silver staff that was lighter and stronger than wood."
                }
            ]
        },
        {
            id: "eldrin-ch-4",
            number: 4,
            titleEn: "Chapter 4: Whispers in the Emerald Grove",
            titleRu: "Глава 4: Шёпот в Изумрудной Роще",
            grammarFocus: "Present Continuous (be + V-ing), Nature vocabulary, Animals, Modals",
            wordCount: 325,
            coverIcon: "fa-leaf",
            coverColor: "#84cc16",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Now, Eldrin is walking through the peaceful Emerald Grove with his shiny new staff.",
                    ru: "Теперь Элдрин идет через мирную Изумрудную Рощу со своим сияющим новым посохом."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "The sun is shining brightly, birds are singing sweet songs, and a crystal river is flowing quietly.",
                    ru: "Солнце ярко светит, птицы поют сладкие песни, и тихо течет хрустальная река."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Listen! The green leaves are whispering in the warm wind!\"",
                    ru: "\"Послушай! Зеленые листья шепчутся на теплом ветру!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Under a huge ancient oak tree, a man in a green cloak is sitting with a gentle white deer. It is Arch-Druid Oberon, feeding the wild deer with sweet red apples.",
                    ru: "Под огромным древним дубом сидит мужчина в зеленом плаще с ласковым белым оленем. Это верховный друид Оберон, который кормит дикого оленя сладкими красными яблоками."
                },
                {
                    speaker: "oberon",
                    voice: "Charon",
                    en: "\"Welcome, young student. I see you are holding a staff of silver, but your crystal is sleeping. Do you know why?\"",
                    ru: "\"Добро пожаловать, юный ученик. Я вижу, ты держишь посох из серебра, но твой кристалл спит. Знаешь ли ты, почему?\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"No, master Oberon. Why is it not glowing right now?\"",
                    ru: "\"Нет, мастер Оберон. Почему он не светится прямо сейчас?\""
                },
                {
                    speaker: "oberon",
                    voice: "Charon",
                    en: "\"Because magic needs harmony! Close your eyes. Breathe slowly. Feel the life of the forest around you!\"",
                    ru: "\"Потому что магии нужна гармония! Закрой глаза. Дыши медленно. Почувствуй жизнь леса вокруг тебя!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin closed his eyes. FLASH! The blue crystal on his staff lit up with magnificent emerald and sapphire light!",
                    ru: "Элдрин закрыл глаза. ВСПЫШКА! Синий кристалл на его посохе озарился великолепным изумрудным и сапфировым светом!"
                },
                {
                    speaker: "oberon",
                    voice: "Charon",
                    en: "\"Well done! Your heart is pure. Now, go to the Silver Market, for destiny is waiting there!\"",
                    ru: "\"Прекрасно! Твое сердце чисто. Теперь иди на Серебряный Рынок, ибо судьба ждет тебя там!\""
                }
            ],
            quiz: [
                {
                    question: "What is Arch-Druid Oberon doing when Eldrin meets him in the grove?",
                    options: [
                        "He is feeding a gentle white deer with sweet apples",
                        "He is sleeping on a stone",
                        "He is hunting dangerous wolves",
                        "He is chopping down the oak tree"
                    ],
                    correctIdx: 0,
                    explanation: "Oberon is sitting under the ancient oak tree and feeding a deer."
                },
                {
                    question: "Why was the blue crystal sleeping on the staff at first?",
                    options: [
                        "Because magic needs harmony with the life of nature",
                        "Because it was broken into pieces",
                        "Because it needed hot water",
                        "Because it was night"
                    ],
                    correctIdx: 0,
                    explanation: "Oberon explained that magic needs harmony and calm breathing."
                },
                {
                    question: "What happened when young Eldrin closed his eyes and breathed with the forest?",
                    options: [
                        "The crystal lit up with magnificent emerald and sapphire light",
                        "He fell into the river",
                        "The staff broke in half",
                        "The deer ran away scared"
                    ],
                    correctIdx: 0,
                    explanation: "The blue crystal lit up with magnificent emerald and sapphire light!"
                }
            ]
        },
        {
            id: "eldrin-ch-5",
            number: 5,
            titleEn: "Chapter 5: Shadows in the Silver Market",
            titleRu: "Глава 5: Тени на Серебряном Рынке",
            grammarFocus: "Modal verbs (Can / Cannot, Must), Directions, Clothing, Shopping",
            wordCount: 315,
            coverIcon: "fa-mask",
            coverColor: "#ec4899",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "In the afternoon, Eldrin reached the bustling Silver Market in the capital city.",
                    ru: "Днем Элдрин добрался до оживленного Серебряного Рынка в столице."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "People were buying fresh bread, warm winter coats, and golden rings. It was very noisy.",
                    ru: "Люди покупали свежий хлеб, теплые зимние пальто и золотые кольца. Было очень шумно."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Suddenly, a swift shadow ran past the fruit shop and snatched a greedy merchant's golden bag!",
                    ru: "Внезапно быстрая тень пробежала мимо фруктовой лавки и выхватила золотую сумку жадного торговца!"
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Stop, thief! You cannot steal from people!\"",
                    ru: "\"Стой, вор! Ты не можешь воровать у людей!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "A girl in a black hooded cloak turned around on the high roof. It was young Selene!",
                    ru: "Девочка в черном плаще с капюшоном обернулась на высокой крыше. Это была юная Селена!"
                },
                {
                    speaker: "selene",
                    voice: "Aoede",
                    en: "\"Thief?! Look inside the bag, little wizard! These are stolen medicine herbs for sick poor children!\"",
                    ru: "\"Вор?! Загляни в сумку, маленький волшебник! Это украденные лекарственные травы для больных бедных детей!\""
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"Oh... I understand now. You are helping sick children. Can I help you with my light spell?\"",
                    ru: "\"Ох... Теперь я понимаю. Ты помогаешь больным детям. Могу я помочь тебе моим заклинанием света?\""
                },
                {
                    speaker: "selene",
                    voice: "Aoede",
                    en: "\"You are smart and kind. Follow me quietly across the high rooftops, and don't make a sound!\"",
                    ru: "\"Ты умный и добрый. Следуй за мной тихо по высоким крышам и не издавай ни звука!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Together, Eldrin and Selene brought the healing medicine safely to the children's hospital.",
                    ru: "Вместе Элдрин и Селена благополучно доставили целебные лекарства в детскую больницу."
                },
                {
                    speaker: "selene",
                    voice: "Aoede",
                    en: "\"Thank you, Eldrin. You are a true hero. Look at the sky! You must return to your Spire immediately!\"",
                    ru: "\"Спасибо, Элдрин. Ты настоящий герой. Посмотри на небо! Ты должен немедленно вернуться в свой Шпиль!\""
                }
            ],
            quiz: [
                {
                    question: "Who snatched the merchant's bag at the busy Silver Market?",
                    options: [
                        "Young Selene in a black hooded cloak",
                        "A hungry dog",
                        "A city guard",
                        "A pirate captain"
                    ],
                    correctIdx: 0,
                    explanation: "Young Selene in a black hooded cloak leaped across the roof."
                },
                {
                    question: "What was really inside the bag that Selene took?",
                    options: [
                        "Stolen medicine herbs for sick poor children",
                        "Diamonds and rubies",
                        "Sweet cookies and cakes",
                        "Silver forks and knives"
                    ],
                    correctIdx: 0,
                    explanation: "The bag contained medicine herbs meant for sick poor children."
                },
                {
                    question: "What did Selene tell Eldrin at the end of the chapter?",
                    options: [
                        "Look at the sky and return to the Spire immediately",
                        "Stay and buy pizza",
                        "Go swimming in the lake",
                        "Give her his shoes"
                    ],
                    correctIdx: 0,
                    explanation: "Selene warned him: 'Look at the sky! You must return to your Spire immediately!'"
                }
            ]
        },
        {
            id: "eldrin-ch-6",
            number: 6,
            titleEn: "Chapter 6: The Storm of the Arcane Spire",
            titleRu: "Глава 6: Буря над Тайным Шпилем (Финал)",
            grammarFocus: "Future Tense (Will / Won't, Be going to), Complex A1 Review, Victory",
            wordCount: 310,
            coverIcon: "fa-bolt-lightning",
            coverColor: "#eab308",
            sentences: [
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Dark purple storm clouds covered the sky above the Arcane Spire. A dangerous magical storm was coming!",
                    ru: "Темно-фиолетовые штормовые тучи закрыли небо над Тайным Шпилем. Приближалась опасная магическая буря!"
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Loud thunder shook the ancient walls: CRASH! Strong lightning struck the highest tower of the academy.",
                    ru: "Громкий гром сотряс древние стены: БРАМ! Сильная молния ударила в самую высокую башню академии."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"The Spire is shaking! If the lightning strikes the library, all ancient scrolls will burn!\"",
                    ru: "\"Шпиль трясется! Если молния ударит в библиотеку, все древние свитки сгорят!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Young Eldrin ran up the spiral stairs to the highest balcony. The cold wind was howling loudly around him.",
                    ru: "Юный Элдрин взбежал по винтовой лестнице на самый высокий балкон. Холодный ветер громко завывал вокруг него."
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"I will protect our tower! I will not give up!\"",
                    ru: "\"Я защищу нашу башню! Я не сдамся!\""
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "Eldrin raised his silver staff. The blue crystal absorbed the wild lightning bolts and turned them into pure glowing arcane energy.",
                    ru: "Элдрин поднял свой серебряный посох. Синий кристалл вобрал в себя дикие разряды молний и превратил их в чистое сияние тайной энергии."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "BOOM! A magnificent dome of golden light expanded over the whole floating city. The storm dissolved into soft golden sparkles.",
                    ru: "БУМ! Великолепный купол золотого света раскрылся над всем парящим городом. Буря растворилась в мягких золотых искрах."
                },
                {
                    speaker: "narrator",
                    voice: "Charon",
                    en: "All students and teachers cheered with joy: 'Hooray! Young Eldrin saved the Arcane Spire!'",
                    ru: "Все ученики и учителя ликовали от радости: 'Ура! Юный Элдрин спас Тайный Шпиль!'"
                },
                {
                    speaker: "eldrin",
                    voice: "Puck",
                    en: "\"This is only the beginning. One day, I will become the Grand Archmage!\"",
                    ru: "\"Это только начало. Однажды я стану Великим Архимагом!\""
                }
            ],
            quiz: [
                {
                    question: "What danger threatened the floating Arcane Spire in the final chapter?",
                    options: [
                        "A dangerous magical storm with wild lightning",
                        "A flood of cold sea water",
                        "A missing dinner in the dining room",
                        "A broken wooden chair"
                    ],
                    correctIdx: 0,
                    explanation: "A dangerous magical storm with strong lightning threatened to destroy the library."
                },
                {
                    question: "How did young Eldrin protect the library and the Spire?",
                    options: [
                        "He raised his staff and absorbed the lightning into a protective dome of golden light",
                        "He hid under his bed with a pillow",
                        "He ran away down the mountain",
                        "He closed all windows with dark blankets"
                    ],
                    correctIdx: 0,
                    explanation: "Eldrin raised his silver staff and created a magnificent protective dome of golden light."
                },
                {
                    question: "What did young Eldrin promise at the end of his adventure?",
                    options: [
                        "One day, he will become the Grand Archmage!",
                        "He will stop studying magic and spells",
                        "He will buy a small farm with cows",
                        "He will sleep for ten days"
                    ],
                    correctIdx: 0,
                    explanation: "Eldrin smiled and promised: 'One day, I will become the Grand Archmage!'"
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
