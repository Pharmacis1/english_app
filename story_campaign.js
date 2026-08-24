/**
 * STORY CAMPAIGN: THE OATH OF SEVEN WINDS (A1 Full Campaign - 40 Chapters)
 * CEFR A1 Story Campaign for EnglishPulse RPG with Visual Scene Illustrations
 */

const STORY_ACTS = [
    {
        "id": 1,
        "title": "Act I: Sparks on the Border",
        "subtitle": "Искры на границе",
        "chaptersRange": "1–6",
        "reqLvl": "Lvl 20–30",
        "icon": "fa-fire-flame-curved",
        "color": "#f59e0b"
    },
    {
        "id": 2,
        "title": "Act II: Disputed Lands",
        "subtitle": "Спорные земли и заговор",
        "chaptersRange": "7–13",
        "reqLvl": "Lvl 30–45",
        "icon": "fa-map-location-dot",
        "color": "#3b82f6"
    },
    {
        "id": 3,
        "title": "Act III: The Ash Vanguard",
        "subtitle": "Падение застав и пепел",
        "chaptersRange": "14–20",
        "reqLvl": "Lvl 45–60",
        "icon": "fa-skull",
        "color": "#ef4444"
    },
    {
        "id": 4,
        "title": "Act IV: The Outcast Squad",
        "subtitle": "Рождение отряда изгоев",
        "chaptersRange": "21–27",
        "reqLvl": "Lvl 60–75",
        "icon": "fa-campground",
        "color": "#8b5cf6"
    },
    {
        "id": 5,
        "title": "Act V: Shadows of Betrayal",
        "subtitle": "Тени предательства",
        "chaptersRange": "28–34",
        "reqLvl": "Lvl 75–90",
        "icon": "fa-mask",
        "color": "#ec4899"
    },
    {
        "id": 6,
        "title": "Act VI: The Ash Sun Eclipse",
        "subtitle": "Битва за солнце (Финал A1)",
        "chaptersRange": "35–40",
        "reqLvl": "Lvl 90–100",
        "icon": "fa-sun",
        "color": "#eab308"
    }
];

const STORY_CHAPTERS = [
    {
        "id": "ch-1",
        "actId": 1,
        "number": 1,
        "titleEn": "Sparks on the Border",
        "titleRu": "Искры на границе",
        "reqHeroLevels": {
            "valerius": 20,
            "astraea": 20,
            "zephyr": 20,
            "ignis": 20
        },
        "involvedHeroes": [
            "valerius",
            "astraea",
            "zephyr",
            "ignis"
        ],
        "paragraphs": [
            {
                "en": "Cold wind moved through the tall green grass. The Silver River was fast and loud. On the wide plains, Valerius walked near the water. His silver armor was bright in the morning sun.",
                "ru": "Холодный ветер гулял по высокой зеленой траве. Серебряная река была быстрой и шумной. По широким равнинам Валериус шел возле воды. Его серебряные доспехи сияли на утреннем солнце."
            },
            {
                "en": "Behind him, Astraea walked with soft steps. She carried a basket with healing herbs, fresh bread, and cold water. Her emerald light was warm and quiet.",
                "ru": "Позади него тихими шагами шла Астрея. Она несла корзину с целебными травами, свежим хлебом и холодной водой. Ее изумрудный свет был теплым и спокойным."
            },
            {
                "en": "\"The border is not safe,\" Valerius said. \"The forest cats are restless, and the miners dig too close to our river.\" Suddenly, a twig snapped in the dark trees.",
                "ru": "\"На границе небезопасно,\" — сказал Валериус. \"Лесные коты беспокойны, а шахтеры копают слишком близко к нашей реке.\" Внезапно в темных деревьях хрустнула ветка."
            },
            {
                "en": "Zephyr jumped from a high branch. He held his long wooden bow. \"Peace, knight,\" Zephyr smiled. \"The wind has no master, and the river belongs to the Wild Circle!\"",
                "ru": "Зефир спрыгнул с высокой ветки. Он держал свой длинный деревянный лук. \"Мир тебе, рыцарь,\" — улыбнулся Зефир. \"У ветра нет хозяина, а река принадлежит Дикому Кругу!\""
            },
            {
                "en": "Before Valerius could answer, a bright red spark flew from the high rocks. Ignis stepped onto a high stone with his burning staff! \"Everything burns for the forge!\" Ignis yelled.",
                "ru": "Прежде чем Валериус успел ответить, с высоких скал прилетела яркая красная искра. Игнис встал на высокий камень со своим пылающим посохом! \"Все горит для кузницы!\" — закричал Игнис."
            },
            {
                "en": "Then, the world went cold. Black dust—warm ash—fell from the sky. Astraea looked up with fear: \"The Ash Sun... The prophecy has begun.\"",
                "ru": "Затем мир похолодел. Черная пыль — теплый пепел — посыпалась с неба. Астрея в страхе посмотрела наверх: \"Пепельное Солнце... Пророчество началось.\""
            }
        ],
        "quiz": {
            "question": "What fell from the sky at the end of the meeting?",
            "options": [
                "Cold white snow",
                "Warm black ash",
                "Heavy green rain"
            ],
            "correctIndex": 1,
            "rewardXp": 100
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "The Silver River Border",
        "locationRu": "Граница Серебряной Реки",
        "sceneIllustrationImg": "images/story/ch1_scene.jpg"
    },
    {
        "id": "ch-2",
        "actId": 1,
        "number": 2,
        "titleEn": "The Cold Patrol",
        "titleRu": "Холодный патруль",
        "reqHeroLevels": {
            "frostina": 22,
            "zephyr": 22
        },
        "involvedHeroes": [
            "frostina",
            "zephyr"
        ],
        "paragraphs": [
            {
                "en": "Zephyr ran through the deep snow of the Whispering Woods. The trees were tall, white, and silent. He reached the Frozen Sanctuary where Frostina stood.",
                "ru": "Зефир бежал по глубокому снегу Шепчущего Леса. Деревья были высокими, белыми и безмолвными. Он добрался до Замерзшего Святилища, где стояла Фростина."
            },
            {
                "en": "Frostina did not smile. Her blue eyes were cold as winter ice. \"You crossed the Silver River again, Zephyr,\" she said calmly. \"The Wild Circle does not speak with knights or miners.\"",
                "ru": "Фростина не улыбалась. Ее голубые глаза были холодны, как зимний лед. \"Ты снова переходил Серебряную реку, Зефир,\" — спокойно сказала она. \"Дикий Круг не разговаривает с рыцарями и рудокопами.\""
            },
            {
                "en": "\"Look at my hands, priestess!\" Zephyr opened his gloves. In his palms lay three small forest birds. Their soft feathers were covered with black greasy dust.",
                "ru": "\"Посмотри на мои руки, жрица!\" Зефир раскрыл перчатки. На его ладонях лежали три маленькие лесные птицы. Их мягкие перья были покрыты черной жирной пылью."
            },
            {
                "en": "Frostina touched the birds. A tear froze on her cheek. \"This is not coal from the mines,\" she whispered. \"This is corrupted ash from the ancient Rift. The balance is broken.\"",
                "ru": "Фростина коснулась птиц. Слезинка замерзла на ее щеке. \"Это не уголь из шахт,\" — прошептала она. \"Это оскверненный пепел из древнего Разлома. Баланс нарушен.\""
            }
        ],
        "quiz": {
            "question": "Why was Frostina worried about the birds?",
            "options": [
                "They were hungry",
                "They were covered in dark ash",
                "They flew to the plains"
            ],
            "correctIndex": 1,
            "rewardXp": 110
        },
        "backgroundImg": "images/backgrounds/bg_white_forest.jpg",
        "locationEn": "Whispering Woods Sanctuary",
        "locationRu": "Святилище Шепчущего Леса",
        "sceneIllustrationImg": "images/story/ch2_scene.jpg"
    },
    {
        "id": "ch-3",
        "actId": 1,
        "number": 3,
        "titleEn": "Whispers in the Deep",
        "titleRu": "Шепот в глубинах",
        "reqHeroLevels": {
            "thorin": 24,
            "selena": 24,
            "ignis": 24
        },
        "involvedHeroes": [
            "thorin",
            "selena",
            "ignis"
        ],
        "paragraphs": [
            {
                "en": "Deep under the mountains, heavy hammers hit glowing iron. Thorin wiped sweat from his bearded face. \"Why are the magic crystals turning grey?\" he growled.",
                "ru": "Глубоко под горами тяжелые молоты били по раскаленному железу. Торин вытер пот с бородатого лица. \"Почему магические кристаллы сереют?\" — прорычал он."
            },
            {
                "en": "Ignis swung his red staff. \"The wood witches are using ice spells on our tunnels! Let me burn their roots!\"",
                "ru": "Игнис взмахнул красным посохом. \"Лесные ведьмы используют ледяные заклинания на наших туннелях! Дай мне сжечь их корни!\""
            },
            {
                "en": "A dark shadow detached from the stone wall. Selena stepped into the light, holding two obsidian daggers. \"You are blind, both of you,\" she whispered coldly.",
                "ru": "Темная тень отделилась от каменной стены. Селена шагнула на свет, держа два обсидиановых кинжала. \"Вы слепы, оба,\" — холодно прошептала она."
            },
            {
                "en": "\"I explored the lowest abyss,\" Selena continued. \"There are no druids there. Strange monsters with purple eyes are crawling from the cracks in the bedrock.\"",
                "ru": "\"Я исследовала самую глубокую бездну,\" — продолжила Селена. \"Там нет никаких друидов. Странные чудовища с фиолетовыми глазами лезут из трещин в скальной породе.\""
            }
        ],
        "quiz": {
            "question": "Where did Selena find strange monsters?",
            "options": [
                "In the lowest underground abyss",
                "In the royal palace",
                "On the river boat"
            ],
            "correctIndex": 0,
            "rewardXp": 120
        },
        "backgroundImg": "images/backgrounds/bg_crystal_caverns.jpg",
        "locationEn": "Deep Iron Mines",
        "locationRu": "Глубинные Шахты Горна",
        "sceneIllustrationImg": "images/story/ch3_scene.jpg"
    },
    {
        "id": "ch-4",
        "actId": 1,
        "number": 4,
        "titleEn": "The Valkyrie's Warning",
        "titleRu": "Предостережение Валькирии",
        "reqHeroLevels": {
            "freya": 26,
            "valerius": 26
        },
        "involvedHeroes": [
            "freya",
            "valerius"
        ],
        "paragraphs": [
            {
                "en": "Thunder rumbled over the white towers of the Silver Bastion. Freya landed on the castle wall, her winged spear crackling with blue lightning.",
                "ru": "Гром рокотал над белыми башнями Серебряного Бастиона. Фрейя приземлилась на стену замка, ее крылатое копье потрескивало синими молниями."
            },
            {
                "en": "Valerius saluted her with his heavy shield. \"Hail, Shieldmaiden! What news from the northern watch?\"",
                "ru": "Валериус поприветствовал ее тяжелым щитом. \"Приветствую, Дева Щита! Какие вести с северного дозора?\""
            },
            {
                "en": "\"Black smoke rises above the Dead Peaks,\" Freya said with a stern face. \"The scouts say our lords want to lock the gates and ignore the other clans. That is cowardice!\"",
                "ru": "\"Черный дым поднимается над Мертвыми Пиками,\" — сказала Фрейя со строгим лицом. \"Разведчики говорят, что наши лорды хотят запереть ворота и игнорировать другие кланы. Это трусость!\""
            },
            {
                "en": "\"We must obey our oaths,\" Valerius replied firmly. But his hand trembled on his sword hilt. He knew the castle walls could not stop the falling ash.",
                "ru": "\"Мы должны подчиняться нашим клятвам,\" — твердо ответил Валериус. Но его рука дрогнула на рукояти меча. Он знал, что стены замка не остановят падающий пепел."
            }
        ],
        "quiz": {
            "question": "What did the lords of the Shield Clan want to do?",
            "options": [
                "Lock the gates and ignore others",
                "Attack the forest immediately",
                "Send food to the miners"
            ],
            "correctIndex": 0,
            "rewardXp": 130
        },
        "backgroundImg": "images/backgrounds/bg_castle.jpg",
        "locationEn": "Silver Bastion Ramparts",
        "locationRu": "Стены Серебряного Бастиона",
        "sceneIllustrationImg": "images/story/ch4_scene.jpg"
    },
    {
        "id": "ch-5",
        "actId": 1,
        "number": 5,
        "titleEn": "The Wounded Treant",
        "titleRu": "Раненый энт",
        "reqHeroLevels": {
            "oberon": 28,
            "astraea": 28
        },
        "involvedHeroes": [
            "oberon",
            "astraea"
        ],
        "paragraphs": [
            {
                "en": "At the border of the forest, an enormous living tree fell to its knees. Dark poison dripped from its thick wooden bark.",
                "ru": "На границе леса огромное живое дерево упало на колени. Темный яд капал с его толстой деревянной коры."
            },
            {
                "en": "Oberon channeled green nature magic, but his hands shook with fatigue. \"The roots are dying... The land is sick,\" the old druid groaned.",
                "ru": "Оберон направлял зеленую магию природы, но его руки дрожали от усталости. \"Корни умирают... Земля больна,\" — застонал старый друид."
            },
            {
                "en": "Astraea knelt beside him quietly. She placed her glowing hands onto the tree trunk. Golden light flowed into the wood, washing away the black rot.",
                "ru": "Астрея тихо опустилась рядом на колени. Она положила свои светящиеся руки на ствол дерева. Золотой свет потек в древесину, смывая черную гниль."
            },
            {
                "en": "\"You are a priestess of the Shield,\" Oberon said with wonder. \"Why do you heal our woods?\" — \"Because life has no clan borders,\" Astraea answered softly.",
                "ru": "\"Ты жрица Щита,\" — с удивлением сказал Оберон. \"Почему ты лечишь наш лес?\" — \"Потому что у жизни нет клановых границ,\" — тихо ответила Астрея."
            }
        ],
        "quiz": {
            "question": "Why did Astraea help the ancient treant?",
            "options": [
                "She wanted to sell the wood",
                "She believes life has no borders",
                "Valerius ordered her to do so"
            ],
            "correctIndex": 1,
            "rewardXp": 140
        },
        "backgroundImg": "images/backgrounds/bg_enchanted_grove.jpg",
        "locationEn": "The Wounded Ancient Grove",
        "locationRu": "Раненая Священная Роща",
        "sceneIllustrationImg": "images/story/ch5_scene.jpg"
    },
    {
        "id": "ch-6",
        "actId": 1,
        "number": 6,
        "titleEn": "The Council of Fire",
        "titleRu": "Совет огня",
        "reqHeroLevels": {
            "thorin": 30,
            "ignis": 30,
            "selena": 30
        },
        "involvedHeroes": [
            "thorin",
            "ignis",
            "selena"
        ],
        "paragraphs": [
            {
                "en": "In the Great Forge, the magma river boiled. Clan elders shouted in anger, holding iron warhammers high in the smoky air.",
                "ru": "В Великой Кузнице кипела река магмы. Старейшины клана кричали в гневе, поднимая железные боевые молоты высоко в задымленный воздух."
            },
            {
                "en": "\"The surface dwellers close our trade routes!\" the High Chieftain roared. \"Ignis, prepare our fire artillery! Thorin, sharpen the axes!\"",
                "ru": "\"Жители поверхности перекрывают наши торговые пути!\" — взревел Верховный Вождь. \"Игнис, готовь огненную артиллерию! Торин, точи топоры!\""
            },
            {
                "en": "Thorin stepped forward and slammed his shield down. \"Wait! The monsters attacking our lower gates are not knights. If we march up, we leave our families defenseless!\"",
                "ru": "Торин шагнул вперед и с грохотом опустил щит. \"Стойте! Чудовища, атакующие наши нижние врата — не рыцари. Если мы пойдем наверх, мы оставим семьи без защиты!\""
            },
            {
                "en": "Selena whispered into Thorin's ear from the darkness: \"The elders will not listen. We must find the truth ourselves before the war starts.\"",
                "ru": "Селена прошептала Торину на ухо из темноты: \"Старейшины не станут слушать. Мы должны сами найти правду, пока не началась война.\""
            }
        ],
        "quiz": {
            "question": "What did Thorin warn the chieftain about?",
            "options": [
                "The weather is too hot",
                "Lower gates are under attack by monsters",
                "The food is stolen"
            ],
            "correctIndex": 1,
            "rewardXp": 150
        },
        "backgroundImg": "images/backgrounds/bg_crystal_caverns.jpg",
        "locationEn": "The Great Subterranean Forge",
        "locationRu": "Великая Подземная Кузница"
    },
    {
        "id": "ch-7",
        "actId": 2,
        "number": 7,
        "titleEn": "Stolen Ore",
        "titleRu": "Украденная руда",
        "reqHeroLevels": {
            "thorin": 32,
            "valerius": 32
        },
        "involvedHeroes": [
            "thorin",
            "valerius"
        ],
        "paragraphs": [
            {
                "en": "On the dusty canyon road, an overturned iron wagon was burning. Sacks of glowing blue ore were scattered everywhere.",
                "ru": "На пыльной дороге в каньоне горела перевернутая железная повозка. Мешки со светящейся синей рудой были разбросаны повсюду."
            },
            {
                "en": "Thorin arrived first, his heavy axe raised. \"Valerius! Your silver knights attacked our supply cart! This means war!\"",
                "ru": "Торин прибыл первым, подняв свой тяжелый топор. \"Валериус! Твои серебряные рыцари напали на наш обоз с припасами! Это война!\""
            },
            {
                "en": "Valerius knelt by the cart. He picked up a broken black arrow with purple venom on its tip. \"Look closely, dwarf. Our archers do not use curved fangs for arrows.\"",
                "ru": "Валериус опустился на колено у повозки. Он поднял сломанную черную стрелу с фиолетовым ядом на наконечнике. \"Посмотри внимательнее, дворф. Наши лучники не используют изогнутые клыки вместо стрел.\""
            },
            {
                "en": "Thorin looked at the black venom. \"Ash beasts... Someone wanted us to fight each other.\" The two warriors stood in silence, looking into the dark mountains.",
                "ru": "Торин посмотрел на черный яд. \"Пепельные твари... Кто-то хотел стравить нас друг с другом.\" Двое воинов стояли в тишине, глядя на темные горы."
            }
        ],
        "quiz": {
            "question": "What did Valerius find on the broken arrow?",
            "options": [
                "Golden ribbons",
                "Purple venom and a curved fang",
                "Silver paint"
            ],
            "correctIndex": 1,
            "rewardXp": 160
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "The Canyon Supply Road",
        "locationRu": "Дорога Снабжения в Каньоне"
    },
    {
        "id": "ch-8",
        "actId": 2,
        "number": 8,
        "titleEn": "Eyes in the Mist",
        "titleRu": "Глаза в тумане",
        "reqHeroLevels": {
            "selene": 34,
            "zephyr": 34
        },
        "involvedHeroes": [
            "selene",
            "zephyr"
        ],
        "paragraphs": [
            {
                "en": "Thick grey fog covered the Misty Hills. Zephyr sat on a tall pine tree, holding his bow ready. He heard quiet breathing below.",
                "ru": "Густой серый туман покрывал Туманные Холмы. Зефир сидел на высокой сосне, держа лук наготове. Внизу он услышал тихое дыхание."
            },
            {
                "en": "\"Do not shoot, wind walker,\" Selena's voice came from the empty air behind his back. A cold dagger touched his shoulder.",
                "ru": "\"Не стреляй, шагающий по ветру,\" — раздался голос Селены из пустого воздуха за его спиной. Холодный кинжал коснулся его плеча."
            },
            {
                "en": "\"You are good, shadow stalker,\" Zephyr chuckled softly. \"Did you come to assassinate me?\" — \"No. Look down into the valley.\"",
                "ru": "\"А ты хороша, теневая охотница,\" — тихо усмехнулся Зефир. \"Ты пришла меня убить?\" — \"Нет. Посмотри вниз, в долину.\""
            },
            {
                "en": "Through the fog, dozens of red glowing eyes appeared. A pack of Ash Hounds was stalking a group of peaceful travelers.",
                "ru": "Сквозь туман проступили десятки красных светящихся глаз. Стая Пепельных Гончих выслеживала группу мирных путников."
            },
            {
                "en": "\"Together?\" Zephyr notched two arrows. Selena grinned in the dark: \"Back to back. Let us show them no mercy.\"",
                "ru": "\"Вместе?\" — Зефир наложил две стрелы. Селена усмехнулась во тьме: \"Спина к спине. Не проявим к ним пощады.\""
            }
        ],
        "quiz": {
            "question": "What did Selena and Zephyr see in the valley?",
            "options": [
                "A royal carriage",
                "A pack of Ash Hounds with glowing eyes",
                "A magic waterfall"
            ],
            "correctIndex": 1,
            "rewardXp": 170
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "Misty Hills Foothills",
        "locationRu": "Предгорья Туманных Холмов"
    },
    {
        "id": "ch-9",
        "actId": 2,
        "number": 9,
        "titleEn": "Fire and Frost",
        "titleRu": "Огонь и Мороз",
        "reqHeroLevels": {
            "ignis": 36,
            "frostina": 36
        },
        "involvedHeroes": [
            "ignis",
            "frostina"
        ],
        "paragraphs": [
            {
                "en": "At the high mountain pass, a massive black crystal blocked the ancient trade tunnel. It was covered in cursed ice that burned like acid.",
                "ru": "На высоком горном перевале огромный черный кристалл заблокировал древний торговый туннель. Он был покрыт проклятым льдом, который жегся словно кислота."
            },
            {
                "en": "Ignis threw a huge fireball: \"Burn to dust, ugly stone!\" But the fire only made the black ice smoke and grow thicker.",
                "ru": "Игнис швырнул огромный огненный шар: \"Сгори в прах, уродливый камень!\" Но огонь лишь заставил черный лед дымиться и разрастаться."
            },
            {
                "en": "Frostina arrived on a pillar of frost. \"Stop, reckless fool! Pure fire strengthens this curse. You must balance the temperature!\"",
                "ru": "Фростина прибыла на столбе мороза. \"Стой, безрассудный дурак! Чистый огонь лишь усиливает это проклятие. Нужно сбалансировать температуру!\""
            },
            {
                "en": "She cast a ring of pure blizzard, while Ignis focused his heat into a narrow red beam. Steam erupted, and the dark barrier shattered into harmless glass.",
                "ru": "Она сотворила кольцо чистой метели, в то время как Игнис сфокусировал жар в узкий красный луч. Пар вырвался наружу, и темный барьер разлетелся на безвредные осколки."
            }
        ],
        "quiz": {
            "question": "How did Ignis and Frostina break the dark barrier?",
            "options": [
                "With an iron hammer",
                "By combining frost magic and focused heat",
                "By asking for help"
            ],
            "correctIndex": 1,
            "rewardXp": 180
        },
        "backgroundImg": "images/backgrounds/bg_white_forest.jpg",
        "locationEn": "The Frozen Mountain Pass",
        "locationRu": "Замерзший Горный Перевал"
    },
    {
        "id": "ch-10",
        "actId": 2,
        "number": 10,
        "titleEn": "Secret Bread",
        "titleRu": "Тайный хлеб",
        "reqHeroLevels": {
            "astraea": 38,
            "thorin": 38
        },
        "involvedHeroes": [
            "astraea",
            "thorin"
        ],
        "paragraphs": [
            {
                "en": "In the lower mining town, children were hungry and workers were sick. Food wagons from the plains had stopped coming.",
                "ru": "В нижнем шахтерском городке дети голодали, а рабочие болели. Повозки с едой с равнин перестали приходить."
            },
            {
                "en": "A woman in a white hood walked into the sickhouse. Astraea unpacked warm loaves of honey bread and bottles of restorative potion.",
                "ru": "Женщина в белом капюшоне вошла в лазарет. Астрея распаковала теплые буханки медового хлеба и склянки с восстанавливающим зельем."
            },
            {
                "en": "Thorin blocked her exit with his broad shoulders. \"The lords of the Shield forbade trade with us. Why are you risking your life?\"",
                "ru": "Торин перекрыл ей выход широкими плечами. \"Лорды Щита запретили торговлю с нами. Почему ты рискуешь жизнью?\""
            },
            {
                "en": "\"A hungry child is neither dwarf nor human,\" Astraea smiled gently. \"Will you arrest me, Master Thorin?\" Thorin lowered his gaze in shame: \"No. Eat in peace.\"",
                "ru": "\"Голодный ребенок — не дворф и не человек,\" — мягко улыбнулась Астрея. \"Ты арестуешь меня, мастер Торин?\" Торин стыдливо опустил взгляд: \"Нет. Ешьте спокойно.\""
            }
        ],
        "quiz": {
            "question": "What did Astraea bring to the underground town?",
            "options": [
                "Weapons and shields",
                "Warm bread and healing potions",
                "Gold coins"
            ],
            "correctIndex": 1,
            "rewardXp": 190
        },
        "backgroundImg": "images/backgrounds/bg_crystal_caverns.jpg",
        "locationEn": "Lower Mining Town Infirmary",
        "locationRu": "Лазарет Нижнего Городка"
    },
    {
        "id": "ch-11",
        "actId": 2,
        "number": 11,
        "titleEn": "The Broken Bridge",
        "titleRu": "Сломанный мост",
        "reqHeroLevels": {
            "freya": 40,
            "zephyr": 40
        },
        "involvedHeroes": [
            "freya",
            "zephyr"
        ],
        "paragraphs": [
            {
                "en": "The ancient Great Stone Bridge crossed a bottomless gorge. In the center, dark winged demons were tearing down the pillars.",
                "ru": "Древний Великий Каменный Мост пересекал бездонное ущелье. В центре темные крылатые демоны крушили колонны."
            },
            {
                "en": "A refugee wagon was trapped in the middle. Children cried as stone blocks fell into the abyss.",
                "ru": "Повозка с беженцами оказалась в ловушке посередине. Дети плакали, пока каменные глыбы падали в бездну."
            },
            {
                "en": "Freya plunged from the storm clouds like a falling star, shielding the cart with her thunder aura. \"Hold on! Valhalla does not take you today!\"",
                "ru": "Фрейя рухнула из грозовых туч, как падающая звезда, закрывая повозку своей аурой грома. \"Держитесь! Валгалла сегодня вас не заберет!\""
            },
            {
                "en": "Zephyr fired gale-force arrows from the cliff, pinning the flying monsters to the rock wall. Together, they pulled the wagon safely to the solid ground.",
                "ru": "Зефир выпускал стрелы ураганной силы с утеса, пришпиливая летающих монстров к каменной стене. Вместе они вытащили повозку в безопасность на твердую землю."
            }
        ],
        "quiz": {
            "question": "Who did Freya and Zephyr save on the bridge?",
            "options": [
                "The king",
                "A refugee family with children",
                "An evil sorcerer"
            ],
            "correctIndex": 1,
            "rewardXp": 200
        },
        "backgroundImg": "images/backgrounds/bg_sky_terrace.jpg",
        "locationEn": "The Great Stone Bridge",
        "locationRu": "Великий Каменный Мост"
    },
    {
        "id": "ch-12",
        "actId": 2,
        "number": 12,
        "titleEn": "Echoes of the Earth",
        "titleRu": "Эхо земли",
        "reqHeroLevels": {
            "oberon": 42,
            "thorin": 42
        },
        "involvedHeroes": [
            "oberon",
            "thorin"
        ],
        "paragraphs": [
            {
                "en": "A massive earthquake shook the border mountains. Boulders rolled down the hills, and giant roots cracked open.",
                "ru": "Мощное землетрясение потрясло пограничные горы. Валуны покатились с холмов, а гигантские корни лопнули."
            },
            {
                "en": "Oberon and Thorin met at the mouth of a newly opened fissure. Green steam and black sulfur poured out together.",
                "ru": "Оберон и Торин встретились у жерла свежей расщелины. Зеленый пар и черная сера вырывались наружу."
            },
            {
                "en": "\"Listen to the stone,\" Thorin whispered, putting his ear to the basalt rock. \"Something huge is waking up deep beneath the Rift.\"",
                "ru": "\"Послушай камень,\" — прошептал Торин, приложив ухо к базальтовой скале. \"Что-то огромное просыпается глубоко под Разломом.\""
            },
            {
                "en": "\"The heartbeat of the earth is fast and full of pain,\" Oberon agreed. \"Our petty clan quarrels will bury us all if we do not unite.\"",
                "ru": "\"Сердцебиение земли частое и полное боли,\" — согласился Оберон. \"Наши мелкие клановые ссоры похоронят нас всех, если мы не объединимся.\""
            }
        ],
        "quiz": {
            "question": "What did Thorin and Oberon hear inside the earth fissure?",
            "options": [
                "A singing bird",
                "The heartbeat of a waking beast",
                "Running water"
            ],
            "correctIndex": 1,
            "rewardXp": 210
        },
        "backgroundImg": "images/backgrounds/bg_enchanted_grove.jpg",
        "locationEn": "The Bedrock Fissure",
        "locationRu": "Расщелина в Скальной Породе"
    },
    {
        "id": "ch-13",
        "actId": 2,
        "number": 13,
        "titleEn": "The Hermit's Falcon",
        "titleRu": "Сокол Отшельника",
        "reqHeroLevels": {
            "eldrin": 45,
            "valerius": 45,
            "oberon": 45
        },
        "involvedHeroes": [
            "eldrin",
            "valerius",
            "oberon"
        ],
        "paragraphs": [
            {
                "en": "A magical falcon made of starlight glided through the stormy night. It carried an ancient golden scroll sealed with the sign of Seven Winds.",
                "ru": "Магический сокол из звездного света парил сквозь штормовую ночь. Он нес древний золотой свиток, запечатанный знаком Семи Ветров."
            },
            {
                "en": "The bird landed before Valerius and Oberon at the border river. The scroll unrolled in the air, glowing with Eldrin's voice.",
                "ru": "Птица приземлилась перед Валериусом и Обероном у пограничной реки. Свиток развернулся в воздухе, сияя голосом Эльдрина."
            },
            {
                "en": "\"Warriors of the valley,\" the message echoed. \"The Ash Eclipse will begin in forty days. Ten chosen shadows must leave their banners and climb the Astral Peak.\"",
                "ru": "\"Воины долины,\" — раздалось эхо послания. \"Пепельное Затмение начнется через сорок дней. Десять избранных теней должны бросить свои знамена и подняться на Астральный Пик.\""
            },
            {
                "en": "Valerius gripped his sword. \"If I abandon my post, my clan will call me a traitor.\" — \"And if you stay, there will be no clan left to serve,\" Oberon said.",
                "ru": "Валериус сжал меч. \"Если я покину пост, мой клан назовет меня предателем.\" — \"А если останешься, служить будет некому,\" — сказал Оберон."
            }
        ],
        "quiz": {
            "question": "Who sent the golden message to Valerius and Oberon?",
            "options": [
                "Grand Archmage Eldrin",
                "The Goblin King",
                "The Iron Chieftain"
            ],
            "correctIndex": 0,
            "rewardXp": 220
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "The Neutral Riverbank",
        "locationRu": "Нейтральный Берег Реки"
    },
    {
        "id": "ch-14",
        "actId": 3,
        "number": 14,
        "titleEn": "The Black Rain",
        "titleRu": "Черный дождь",
        "reqHeroLevels": {
            "valerius": 47,
            "thorin": 47,
            "ignis": 47
        },
        "involvedHeroes": [
            "valerius",
            "thorin",
            "ignis"
        ],
        "paragraphs": [
            {
                "en": "The sky turned dark as obsidian. Heavy black rain began to pour, hissing as it touched the grass and stones.",
                "ru": "Небо стало темным, как обсидиан. Полил тяжелый черный дождь, шипя при падении на траву и камни."
            },
            {
                "en": "Hundreds of Ash Stalkers rushed out of the burning ravine. Valerius slammed his great silver shield into the mud, forming a wall of light.",
                "ru": "Сотни Пепельных Ловцов вырвались из горящего оврага. Валериус вонзил свой огромный серебряный щит в грязь, образовав стену света."
            },
            {
                "en": "Thorin roared, swinging his battleaxe left and right, crushing dark helmets. \"Stay behind me, pyromancer! Cast your biggest spell!\"",
                "ru": "Торин взревел, размахивая секирой налево и направо, сокрушая темные шлемы. \"Стой за мной, пиромант! Кастуй свое сильнейшее заклинание!\""
            },
            {
                "en": "Ignis chanted with burning eyes. A colossal wall of flame swept across the plains, turning the vanguard of the horde into pure dust.",
                "ru": "Игнис напевал заклинание с горящими глазами. Колоссальная стена пламени пронеслась по равнинам, обращая авангард орды в чистый пепел."
            }
        ],
        "quiz": {
            "question": "How did the three heroes stop the monster attack?",
            "options": [
                "They ran away",
                "Valerius held the line, Thorin attacked, and Ignis unleashed flame",
                "They climbed trees"
            ],
            "correctIndex": 1,
            "rewardXp": 230
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "The River Watch Outpost",
        "locationRu": "Речная Дозорная Застава"
    },
    {
        "id": "ch-15",
        "actId": 3,
        "number": 15,
        "titleEn": "Silent Mercy",
        "titleRu": "Тихое милосердие",
        "reqHeroLevels": {
            "astraea": 50,
            "selene": 50
        },
        "involvedHeroes": [
            "astraea",
            "selene"
        ],
        "paragraphs": [
            {
                "en": "Selena leaned against a ruined pillar in the old church. Her black armor was torn, and dark venom was burning her blood.",
                "ru": "Селена прислонилась к разрушенной колонне в старой церкви. Ее черная броня была разорвана, а темный яд сжигал ее кровь."
            },
            {
                "en": "She raised her dagger as footsteps approached. Astraea knelt gently before her and pushed the blade away with a warm hand.",
                "ru": "Она подняла кинжал, услышав шаги. Астрея мягко опустилась перед ней на колени и отвела лезвие теплой рукой."
            },
            {
                "en": "\"Be still, shadow daughter,\" Astraea whispered. A sphere of celestial light enveloped Selena's wounds, burning the poison away.",
                "ru": "\"Не двигайся, дитя теней,\" — прошептала Астрея. Сфера небесного света окутала раны Селены, выжигая яд."
            },
            {
                "en": "Selena opened her eyes in disbelief. \"Your elders say my clan are murderers. Why save a killer?\" — \"Because I choose hope, not history,\" Astraea answered.",
                "ru": "Селена с недоверием открыла глаза. \"Твои старейшины говорят, что мой клан — убийцы. Зачем спасать душегуба?\" — \"Потому что я выбираю надежду, а не прошлые обиды,\" — ответила Астрея."
            }
        ],
        "quiz": {
            "question": "Why was Selena surprised by Astraea's help?",
            "options": [
                "Astraea was a stranger",
                "Their clans were enemies, yet Astraea healed her",
                "The light was too bright"
            ],
            "correctIndex": 1,
            "rewardXp": 240
        },
        "backgroundImg": "images/backgrounds/bg_castle.jpg",
        "locationEn": "The Ruined Chapel of Light",
        "locationRu": "Разрушенная Часовня Света"
    },
    {
        "id": "ch-16",
        "actId": 3,
        "number": 16,
        "titleEn": "Arrow in the Sky",
        "titleRu": "Стрела в небесах",
        "reqHeroLevels": {
            "zephyr": 52,
            "frostina": 52,
            "freya": 52
        },
        "involvedHeroes": [
            "zephyr",
            "frostina",
            "freya"
        ],
        "paragraphs": [
            {
                "en": "A swarm of Ash Harpies descended upon the mountain villages, screeching with shrill voices and dropping burning coal onto thatched roofs.",
                "ru": "Рой Пепельных Гарпий спикировал на горные деревни, пронзительно визжа и сбрасывая горящие угли на соломенные крыши."
            },
            {
                "en": "Frostina raised her icy staff, creating a massive dome of frost over the village homes. The fire coals cooled instantly.",
                "ru": "Фростина подняла ледяной посох, воздвигнув огромный купол мороза над домами деревни. Угли мгновенно остыли."
            },
            {
                "en": "Freya rode the thunder wind, cutting the Harpy Matron in half with her lightning spear.",
                "ru": "Фрейя оседлала грозовой ветер, разрубив Матрону Гарпий пополам своим копьем-молнией."
            },
            {
                "en": "Zephyr fired three whirlwind arrows at once, blowing the remaining monsters off the cliffs into the deep ravines.",
                "ru": "Зефир выпустил три стрелы-вихря разом, сдувая оставшихся монстров с утесов в глубокие ущелья."
            }
        ],
        "quiz": {
            "question": "How did Frostina protect the village houses?",
            "options": [
                "She dug trenches",
                "She created a frost dome that cooled the fire coals",
                "She hid under a rock"
            ],
            "correctIndex": 1,
            "rewardXp": 250
        },
        "backgroundImg": "images/backgrounds/bg_sky_terrace.jpg",
        "locationEn": "High Cliff Mountain Villages",
        "locationRu": "Горные Деревни на Скалах"
    },
    {
        "id": "ch-17",
        "actId": 3,
        "number": 17,
        "titleEn": "Burning Roots",
        "titleRu": "Горящие корни",
        "reqHeroLevels": {
            "oberon": 54,
            "ignis": 54
        },
        "involvedHeroes": [
            "oberon",
            "ignis"
        ],
        "paragraphs": [
            {
                "en": "Cursed black flames were eating through the heart of the Sacred Grove. Ancient oak trees screamed in green spiritual agony.",
                "ru": "Проклятое черное пламя пожирало сердце Священной Рощи. Древние дубы кричали в зеленой духовной агонии."
            },
            {
                "en": "Oberon fell to his knees, his nature spells failing against the dark corruption. \"Fire is evil... It consumes everything!\"",
                "ru": "Оберон упал на колени, его заклинания природы были бессильны против темной порчи. \"Огонь — это зло... Он пожирает все!\""
            },
            {
                "en": "Ignis dashed into the inferno. He did not cast fire—he inhaled it! He drew the black cursed flames into his ruby crystal staff.",
                "ru": "Игнис ворвался в пекло. Он не бросал огонь — он втягивал его! Он втянул черное проклятое пламя в свой посох с рубиновым кристаллом."
            },
            {
                "en": "\"Fire is not evil, old tree man,\" Ignis panted, smoke rising from his robe. \"Fire is a hunger. It depends on who feeds it.\" Oberon looked at him with new respect.",
                "ru": "\"Огонь — не зло, старый древесный человек,\" — тяжело дыша произнес Игнис, пока от его мантии шел дым. \"Огонь — это голод. Все зависит от того, кто его кормит.\" Оберон посмотрел на него с новым уважением."
            }
        ],
        "quiz": {
            "question": "What did Ignis do with the cursed black fire in the grove?",
            "options": [
                "He ran away from it",
                "He absorbed it into his ruby staff",
                "He blew water on it"
            ],
            "correctIndex": 1,
            "rewardXp": 260
        },
        "backgroundImg": "images/backgrounds/bg_enchanted_grove.jpg",
        "locationEn": "The Heart of the Sacred Grove",
        "locationRu": "Сердце Священной Рощи"
    },
    {
        "id": "ch-18",
        "actId": 3,
        "number": 18,
        "titleEn": "Iron Walls Crack",
        "titleRu": "Трещины в железных стенах",
        "reqHeroLevels": {
            "thorin": 56,
            "selene": 56,
            "freya": 56
        },
        "involvedHeroes": [
            "thorin",
            "selene",
            "freya"
        ],
        "paragraphs": [
            {
                "en": "The Subterranean Iron Fortress shook. A gigantic Ash Behemoth was smashing its armored head against the main steel gate.",
                "ru": "Подземная Железная Крепость содрогалась. Гигантский Пепельный Бегемот бил своей бронированной головой в главные стальные ворота."
            },
            {
                "en": "Thorin held the inner gate beam with his bare hands, his muscles screaming. \"I cannot hold it alone!\"",
                "ru": "Торин держал внутренний засов ворот голыми руками, его мышцы стонали от напряжения. \"Я не удержу один!\""
            },
            {
                "en": "Freya descended like thunder from a ventilation shaft, bracing her spear against the gate to lock the lock. \"You are not alone, dwarven warrior!\"",
                "ru": "Фрейя спустилась подобно грому из вентиляционной шахты, уперев свое копье в ворота, чтобы заклинить замок. \"Ты не один, воитель дворфов!\""
            },
            {
                "en": "Selena slipped through the iron bars into the dark. Ten seconds later, the monster outside shrieked and collapsed as Selena severed its spine from behind.",
                "ru": "Селена проскользнула сквозь железные прутья во тьму. Спустя десять секунд чудовище снаружи взвизгнуло и рухнуло, когда Селена перерезала ему позвоночник со спины."
            }
        ],
        "quiz": {
            "question": "Who struck the finishing blow on the Ash Behemoth?",
            "options": [
                "Thorin with his hammer",
                "Selena from behind in the shadows",
                "Freya from the air"
            ],
            "correctIndex": 1,
            "rewardXp": 270
        },
        "backgroundImg": "images/backgrounds/bg_crystal_caverns.jpg",
        "locationEn": "Subterranean Iron Fortress",
        "locationRu": "Подземная Железная Крепость"
    },
    {
        "id": "ch-19",
        "actId": 3,
        "number": 19,
        "titleEn": "The Traitor's Mark",
        "titleRu": "Метка предателя",
        "reqHeroLevels": {
            "valerius": 58,
            "frostina": 58
        },
        "involvedHeroes": [
            "valerius",
            "frostina"
        ],
        "paragraphs": [
            {
                "en": "At the fallen outpost of the Silver Shield, blood and broken shields covered the ground. The gates had been opened from the inside.",
                "ru": "На павшем аванпосте Серебряного Щита земля была покрыта кровью и сломанными щитами. Ворота были открыты изнутри."
            },
            {
                "en": "Valerius picked up an officer's signet ring from the ashes. It bore the crest of his own Supreme Commander.",
                "ru": "Валериус поднял из пепла офицерский перстень-печатку. На нем был герб его собственного Верховного Главнокомандующего."
            },
            {
                "en": "Frostina stepped through the snow. \"Our leaders have made deals with the dark to preserve their thrones, Valerius. The corruption is in our own high halls.\"",
                "ru": "Фростина шагнула по снегу. \"Наши лидеры заключили сделки с тьмой, чтобы сохранить свои троны, Валериус. Скверна проникла в наши собственные высокие залы.\""
            },
            {
                "en": "Valerius stripped the golden eagle crest from his armor. \"Then my oath to the lords is dead. From this day, I serve only the light and the innocent.\"",
                "ru": "Валериус сорвал герб золотого орла со своих доспехов. \"Тогда моя клятва лордам мертва. С этого дня я служу лишь свету и невинным.\""
            }
        ],
        "quiz": {
            "question": "What did Valerius do after finding the commander's ring in the ashes?",
            "options": [
                "He gave up fighting",
                "He stripped his lord's crest and renounced false masters",
                "He returned to the palace"
            ],
            "correctIndex": 1,
            "rewardXp": 280
        },
        "backgroundImg": "images/backgrounds/bg_castle.jpg",
        "locationEn": "The Fallen Silver Outpost",
        "locationRu": "Павший Серебряный Аванпост"
    },
    {
        "id": "ch-20",
        "actId": 3,
        "number": 20,
        "titleEn": "Outcasts of the Three Lands",
        "titleRu": "Изгои трех земель",
        "reqHeroLevels": {
            "valerius": 60,
            "thorin": 60,
            "oberon": 60
        },
        "involvedHeroes": [
            "valerius",
            "thorin",
            "oberon"
        ],
        "paragraphs": [
            {
                "en": "Three royal messengers stood on the border stones, reading royal proclamations simultaneously under the pouring ash rain.",
                "ru": "Трое королевских вестников стояли на межевых камнях, одновременно зачитывая королевские указы под проливным пепельным дождем."
            },
            {
                "en": "\"Valerius and Astraea are declared traitors of the Shield! Thorin, Ignis, and Selena are exiled from the Forge! Oberon, Frostina, and Zephyr are banished from the Circle!\"",
                "ru": "\"Валериус и Астрея объявлены предателями Щита! Торин, Игнис и Селена изгнаны из Горна! Оберон, Фростина и Зефир изгнаны из Круга!\""
            },
            {
                "en": "The warriors looked at each other across the river. They were stripped of titles, homes, and clan honors.",
                "ru": "Воины посмотрели друг на друга через реку. Они были лишены титулов, домов и клановых почестей."
            },
            {
                "en": "\"We have no kingdoms now,\" Thorin laughed fiercely, wiping rain from his face. \"Good! Now we can finally save the world.\"",
                "ru": "\"У нас больше нет королевств,\" — яростно рассмеялся Торин, смахивая дождь с лица. \"Отлично! Теперь мы наконец-то можем спасти мир.\""
            }
        ],
        "quiz": {
            "question": "Why were the heroes exiled by their leaders?",
            "options": [
                "They stole gold",
                "They united and helped other clans instead of fighting them",
                "They were too weak"
            ],
            "correctIndex": 1,
            "rewardXp": 300
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "The Three Clan Border Stone",
        "locationRu": "Межевой Камень Трех Кланов"
    },
    {
        "id": "ch-21",
        "actId": 4,
        "number": 21,
        "titleEn": "The Path to the Astral Peak",
        "titleRu": "Путь к Астральному Пику",
        "reqHeroLevels": {
            "eldrin": 62,
            "zephyr": 62,
            "selene": 62
        },
        "involvedHeroes": [
            "eldrin",
            "zephyr",
            "selene"
        ],
        "paragraphs": [
            {
                "en": "A merciless blizzard screamed around the razor-sharp rocks of the Astral Peak. Zephyr jumped across frozen chasms, scouting the route.",
                "ru": "Беспощадная метель выла вокруг острых как бритва скал Астрального Пика. Зефир перепрыгивал замерзшие пропасти, разведывая маршрут."
            },
            {
                "en": "Selena walked quietly through the snowdrifts, leaving no footprints behind. Together, they guided the exhausted outcasts upward.",
                "ru": "Селена бесшумно шла по сугробам, не оставляя следов. Вместе они вели измотанных изгоев наверх."
            },
            {
                "en": "At the summit stood a tower of blue glowing glass. The massive crystal doors swung open automatically.",
                "ru": "На вершине высилась башня из синего светящегося стекла. Массивные хрустальные двери распахнулись сами собой."
            },
            {
                "en": "\"Welcome, Ten Shadows,\" Eldrin's voice echoed warmly from within. \"I have waited fifty winters for this moment.\"",
                "ru": "\"Добро пожаловать, Десять Теней,\" — тепло раздался голос Эльдрина изнутри. \"Я ждал этого момента пятьдесят зим.\""
            }
        ],
        "quiz": {
            "question": "Who opened the doors of the Astral Tower for the heroes?",
            "options": [
                "Grand Archmage Eldrin",
                "A mountain troll",
                "A goblin guard"
            ],
            "correctIndex": 0,
            "rewardXp": 310
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "The Razor Crest of Astral Peak",
        "locationRu": "Ледяной Гребень Астрального Пика"
    },
    {
        "id": "ch-22",
        "actId": 4,
        "number": 22,
        "titleEn": "The Sanctuary of Old Runes",
        "titleRu": "Святилище древних рун",
        "reqHeroLevels": {
            "eldrin": 64,
            "astraea": 64,
            "ignis": 64
        },
        "involvedHeroes": [
            "eldrin",
            "astraea",
            "ignis"
        ],
        "paragraphs": [
            {
                "en": "Inside Eldrin's library, thousands of glowing books floated silently in the air, spinning like gentle stars.",
                "ru": "Внутри библиотеки Эльдрина тысячи светящихся книг бесшумно парили в воздухе, вращаясь словно тихие звезды."
            },
            {
                "en": "Eldrin unrolled a giant map of the world made of starlight. \"Look at the center of the valley. The Rift was not created by nature.\"",
                "ru": "Эльдрин развернул гигантскую карту мира, сотворенную из звездного света. \"Взгляните на центр долины. Разлом возник не от природы.\""
            },
            {
                "en": "Ignis touched a red rune. \"It is a cage! A prison built by the ancient kings thousand years ago.\"",
                "ru": "Игнис коснулся красной руны. \"Это клетка! Тюрьма, построенная древними королями тысячу лет назад.\""
            },
            {
                "en": "\"Yes,\" Astraea gasped softly. \"And our ancestors locked the Titan inside, but forgot that cages rust and break over time.\"",
                "ru": "\"Да,\" — тихо выдохнула Астрея. \"И наши предки заперли Титана внутри, но забыли, что клетки со временем ржавеют и ломаются.\""
            }
        ],
        "quiz": {
            "question": "What was the true origin of the Ash Rift?",
            "options": [
                "An old coal mine",
                "An ancient magical prison built for a Titan",
                "A fallen star"
            ],
            "correctIndex": 1,
            "rewardXp": 320
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "Eldrin’s Floating Library",
        "locationRu": "Парящая Библиотека Эльдрина"
    },
    {
        "id": "ch-23",
        "actId": 4,
        "number": 23,
        "titleEn": "Campfire of Foes",
        "titleRu": "Костер бывших врагов",
        "reqHeroLevels": {
            "valerius": 66,
            "thorin": 66,
            "oberon": 66,
            "selene": 66
        },
        "involvedHeroes": [
            "valerius",
            "thorin",
            "oberon",
            "selene"
        ],
        "paragraphs": [
            {
                "en": "In the center of the tower hall, a warm fire crackled. All ten heroes sat together in a wide circle.",
                "ru": "В центре башенного зала потрескивал теплый костер. Все десять героев сидели вместе широким кругом."
            },
            {
                "en": "Thorin roasted meat on a dagger and silently handed a piece to Valerius. The paladin accepted it with a slight nod.",
                "ru": "Торин поджарил мясо на кинжале и молча протянул кусок Валериусу. Паладин принял его с легким кивком."
            },
            {
                "en": "\"Three days ago, I wanted to put an arrow through your chest, dwarf,\" Zephyr smiled across the fire.",
                "ru": "\"Три дня назад я хотел вогнать стрелу тебе в грудь, дворф,\" — улыбнулся Зефир через костер."
            },
            {
                "en": "\"And I would have used your wooden bow for kindling,\" Thorin laughed heartily. The ice between the three clans was finally melting.",
                "ru": "\"А я бы пустил твой деревянный лук на растопку,\" — от души рассмеялся Торин. Лед между тремя кланами наконец таял."
            }
        ],
        "quiz": {
            "question": "What happened around the campfire in the tower?",
            "options": [
                "They started another fight",
                "The heroes shared food and began to understand each other",
                "They went to sleep"
            ],
            "correctIndex": 1,
            "rewardXp": 330
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "The Tower Hearth Hall",
        "locationRu": "Зал Костра в Башне"
    },
    {
        "id": "ch-24",
        "actId": 4,
        "number": 24,
        "titleEn": "Shield and Hammer",
        "titleRu": "Щит и Молот",
        "reqHeroLevels": {
            "valerius": 68,
            "thorin": 68
        },
        "involvedHeroes": [
            "valerius",
            "thorin"
        ],
        "paragraphs": [
            {
                "en": "On the high balcony overlooking the dark valley, Valerius and Thorin watched the distant fires of the Ash Horde.",
                "ru": "На высоком балконе с видом на темную долину Валериус и Торин наблюдали за далекими огнями Пепельной Орды."
            },
            {
                "en": "\"My shield is heavy, friend,\" Valerius said quietly. \"For ten years, I fought only for the orders of corrupt lords. I forgot what honor meant.\"",
                "ru": "\"Мой щит тяжел, друг,\" — тихо сказал Валериус. \"Десять лет я сражался лишь по приказам продажных лордов. Я забыл, что значит честь.\""
            },
            {
                "en": "Thorin struck the paladin's shoulder with his iron fist. \"Honor is not a title written on parchment, knight. Honor is standing between the monster and the weak.\"",
                "ru": "Торин ударил паладина по плечу железным кулаком. \"Честь — это не титул на пергаменте, рыцарь. Честь — это стоять между чудовищем и слабыми.\""
            },
            {
                "en": "Valerius smiled in the darkness. \"When the time comes, Thorin: you break their skulls, and I will take the hits.\"",
                "ru": "Валериус улыбнулся во тьме. \"Когда придет время, Торин: ты сокрушаешь их черепа, а я принимаю удары.\""
            }
        ],
        "quiz": {
            "question": "What is Thorin's definition of honor?",
            "options": [
                "Having a lot of gold",
                "Standing between the monster and the weak",
                "Obeying all kings"
            ],
            "correctIndex": 1,
            "rewardXp": 340
        },
        "backgroundImg": "images/backgrounds/bg_sky_terrace.jpg",
        "locationEn": "Astral Peak High Balcony",
        "locationRu": "Высокий Балкон Астрального Пика"
    },
    {
        "id": "ch-25",
        "actId": 4,
        "number": 25,
        "titleEn": "Cold Truth",
        "titleRu": "Холодная правда",
        "reqHeroLevels": {
            "frostina": 70,
            "selene": 70
        },
        "involvedHeroes": [
            "frostina",
            "selene"
        ],
        "paragraphs": [
            {
                "en": "Frostina sat on the tower terrace, sculpting delicate frost flowers in the night breeze. Selena appeared silently beside her.",
                "ru": "Фростина сидела на террасе башни, создавая изящные морозные цветы в ночном бризе. Селена бесшумно возникла рядом."
            },
            {
                "en": "\"Why are you always in the shadows, Selena?\" Frostina asked without turning around. \"Do you not trust our warmth?\"",
                "ru": "\"Почему ты всегда в тени, Селена?\" — спросила Фростина, не оборачиваясь. \"Ты не доверяешь нашему теплу?\""
            },
            {
                "en": "\"When my ancient clan was betrayed fifty years ago, warmth died for me,\" Selena said softly. \"In the dark, no one can stab you in the back.\"",
                "ru": "\"Когда мой древний клан был предан пятьдесят лет назад, тепло умерло для меня,\" — тихо сказала Селена. \"В темноте никто не ударит тебя в спину.\""
            },
            {
                "en": "Frostina placed a glowing ice flower into Selena's palm. \"The dark is safe, but flowers only bloom in the light. We are your new family now.\"",
                "ru": "Фростина вложила светящийся ледяной цветок в ладонь Селены. \"Тьма безопасна, но цветы распускаются только на свету. Теперь мы твоя новая семья.\""
            }
        ],
        "quiz": {
            "question": "What did Frostina give to Selena on the terrace?",
            "options": [
                "A bag of silver",
                "A glowing ice flower",
                "A poison dagger"
            ],
            "correctIndex": 1,
            "rewardXp": 350
        },
        "backgroundImg": "images/backgrounds/bg_white_forest.jpg",
        "locationEn": "The Frost Terrace",
        "locationRu": "Морозная Терраса"
    },
    {
        "id": "ch-26",
        "actId": 4,
        "number": 26,
        "titleEn": "The Storm Hunt",
        "titleRu": "Штормовая охота",
        "reqHeroLevels": {
            "freya": 72,
            "zephyr": 72,
            "oberon": 72
        },
        "involvedHeroes": [
            "freya",
            "zephyr",
            "oberon"
        ],
        "paragraphs": [
            {
                "en": "The heroes needed provisions and weapons before entering the Desolation. Freya, Zephyr, and Oberon descended into the stormy foothills.",
                "ru": "Героям требовались припасы и оружие перед походом в Пустоши. Фрейя, Зефир и Оберон спустились в штормовые предгорья."
            },
            {
                "en": "An army of corrupted stone drakes was guarding an abandoned royal armory.",
                "ru": "Армия оскверненных каменных дрейков охраняла заброшенный королевский арсенал."
            },
            {
                "en": "Oberon summoned thorny vines to tangle the drakes' wings. Zephyr blinded their eyes with precision wind arrows.",
                "ru": "Оберон призвал шипастые лозы, чтобы спутать крылья дрейков. Зефир ослепил их глаза меткими стрелами ветра."
            },
            {
                "en": "Freya swept down with her thunder spear, opening the steel doors of the vault. The squad now had enchanted armor and rations for the journey.",
                "ru": "Фрейя обрушилась со своим копьем грома, распахнув стальные двери хранилища. Теперь у отряда были зачарованная броня и пайки для похода."
            }
        ],
        "quiz": {
            "question": "What did the trio retrieve from the old armory?",
            "options": [
                "Enchanted armor and supplies",
                "Dragon eggs",
                "A magic mirror"
            ],
            "correctIndex": 0,
            "rewardXp": 360
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "The Stormy Armory Vault",
        "locationRu": "Штормовой Арсенал"
    },
    {
        "id": "ch-27",
        "actId": 4,
        "number": 27,
        "titleEn": "The First Line of Prophecy",
        "titleRu": "Первая строка пророчества",
        "reqHeroLevels": {
            "eldrin": 75,
            "valerius": 75,
            "astraea": 75
        },
        "involvedHeroes": [
            "eldrin",
            "valerius",
            "astraea"
        ],
        "paragraphs": [
            {
                "en": "Eldrin stood in the center of the Astral Circle. He held the ancient stone tablet of the Seven Winds.",
                "ru": "Эльдрин стоял в центре Астрального Круга. Он держал древнюю каменную скрижаль Семи Ветров."
            },
            {
                "en": "\"Hear the words written in blood,\" Eldrin announced. \"'Ten shadows shall gather at the Rift. One will betray the pack, one will hold the sky, and only the nameless flame will burn the dark.'\"",
                "ru": "\"Услышьте слова, начертанные кровью,\" — возвестил Эльдрин. \"'Десять теней соберутся у Разлома. Один предаст стаю, один удержит небеса, и только безымянное пламя сожжет тьму.'\""
            },
            {
                "en": "A cold silence fell over the room. The heroes looked at each other. \"One will betray the pack?\" Valerius repeated in a low voice.",
                "ru": "Холодная тишина воцарилась в зале. Герои переглянулись. \"Один предаст стаю?\" — глухим голосом повторил Валериус."
            },
            {
                "en": "\"Do not let fear divide you,\" Astraea said, holding her glowing cross high. \"A prophecy is a warning, not a destiny. We choose our own path.\"",
                "ru": "\"Не позволяйте страху разобщить вас,\" — сказала Астрея, высоко подняв светящийся крест. \"Пророчество — это предупреждение, а не приговор. Мы сами выбираем свой путь.\""
            }
        ],
        "quiz": {
            "question": "What did Astraea say about the ancient prophecy?",
            "options": [
                "It is impossible to change",
                "It is a warning, not a fixed destiny",
                "It is fake"
            ],
            "correctIndex": 1,
            "rewardXp": 380
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "The Astral Circle of Winds",
        "locationRu": "Астральный Круг Семи Ветров"
    },
    {
        "id": "ch-28",
        "actId": 5,
        "number": 28,
        "titleEn": "March into the Desolation",
        "titleRu": "Марш в Пустоши",
        "reqHeroLevels": {
            "valerius": 77,
            "thorin": 77,
            "oberon": 77,
            "ignis": 77
        },
        "involvedHeroes": [
            "valerius",
            "thorin",
            "oberon",
            "ignis"
        ],
        "paragraphs": [
            {
                "en": "The ten outcasts marched into the Dead Desolation. The ground was black glass, and the air smelled of sulfur and dead magic.",
                "ru": "Десять изгоев вступили в Мертвые Пустоши. Земля была черным стеклом, а воздух пах серой и мертвой магией."
            },
            {
                "en": "No water flowed, and no green grass grew here. Every step required willpower and courage.",
                "ru": "Здесь не текла вода и не росла зеленая трава. Каждый шаг требовал силы воли и мужества."
            },
            {
                "en": "Oberon used his druid staff to purify tiny puddles of mud, while Ignis kept the team warm during the freezing nights.",
                "ru": "Оберон использовал свой друидский посох, чтобы очищать крошечные лужицы грязи, а Игнис согревал команду морозными ночами."
            },
            {
                "en": "In the distance, the crimson maw of the Rift opened wide, pulsing like an evil burning heart.",
                "ru": "Вдалеке зияло багровое жерло Разлома, пульсируя словно злое пылающее сердце."
            }
        ],
        "quiz": {
            "question": "How did the heroes survive the freezing nights in the Desolation?",
            "options": [
                "Ignis used his fire magic to keep them warm",
                "They slept in a castle",
                "They flew away"
            ],
            "correctIndex": 0,
            "rewardXp": 390
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Dead Desolation",
        "locationRu": "Мертвые Пустоши"
    },
    {
        "id": "ch-29",
        "actId": 5,
        "number": 29,
        "titleEn": "The Stolen Amulet",
        "titleRu": "Украденный амулет",
        "reqHeroLevels": {
            "selene": 80,
            "valerius": 80,
            "eldrin": 80
        },
        "involvedHeroes": [
            "selene",
            "valerius",
            "eldrin"
        ],
        "paragraphs": [
            {
                "en": "In the middle of the night, the protective ward around their camp suddenly failed. A swarm of Ash Shades attacked the sleeping heroes.",
                "ru": "Посреди ночи защитный барьер вокруг лагеря внезапно рухнул. Рой Пепельных Теней атаковал спящих героев."
            },
            {
                "en": "After driving the shades back, Eldrin discovered that his primary Star Amulet had been taken from his pouch.",
                "ru": "Отогнав теней назад, Эльдрин обнаружил, что его главный Звездный Амулет исчез из сумки."
            },
            {
                "en": "Valerius found the amulet in Selena's traveling backpack. \"The prophecy!\" Valerius shouted, drawing his silver sword. \"You are the traitor!\"",
                "ru": "Валериус нашел амулет в дорожном рюкзаке Селены. \"Пророчество!\" — крикнул Валериус, обнажая серебряный меч. \"Ты предатель!\""
            },
            {
                "en": "Selena stepped back, her eyes wide with shock. \"Someone planted it in my bag while I was on watch! I did not take it!\"",
                "ru": "Селена отступила, ее глаза расширились от шока. \"Кто-то подбросил его в мою сумку, пока я была в дозоре! Я не брала его!\""
            }
        ],
        "quiz": {
            "question": "Why did Valerius suspect Selena?",
            "options": [
                "The stolen amulet was found in her backpack",
                "She admitted it",
                "She attacked Eldrin"
            ],
            "correctIndex": 0,
            "rewardXp": 400
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Ashen Camp Perimeter",
        "locationRu": "Периметр Пепельного Лагеря"
    },
    {
        "id": "ch-30",
        "actId": 5,
        "number": 30,
        "titleEn": "Whispers of the Ash Queen",
        "titleRu": "Шепот Пепельной Королевы",
        "reqHeroLevels": {
            "frostina": 82,
            "ignis": 82
        },
        "involvedHeroes": [
            "frostina",
            "ignis"
        ],
        "paragraphs": [
            {
                "en": "As tension threatened to tear the squad apart, a dark phantom woman appeared on a nearby cliff: The Ash Queen's illusion.",
                "ru": "Когда напряжение едва не разорвало отряд на части, темный фантом женщины возник на соседнем утесе: иллюзия Пепельной Королевы."
            },
            {
                "en": "\"Look how easily you turn on each other,\" the Queen laughed mockingly. \"I slipped the amulet into her bag with a simple shadow imp!\"",
                "ru": "\"Посмотрите, как легко вы бросаетесь друг на друга,\" — насмешливо рассмеялась Королева. \"Я подбросила амулет в ее сумку обычным теневым бесом!\""
            },
            {
                "en": "Ignis launched a colossal comet of fire, while Frostina froze the cliff with glacial spears, banishing the phantom.",
                "ru": "Игнис запустил колоссальную огненную комету, а Фростина заморозила утес ледяными копьями, рассеивая фантом."
            },
            {
                "en": "Valerius sheathed his sword and bowed to Selena: \"I was wrong. Forgive me, sister of shadow.\" Selena nodded quietly.",
                "ru": "Валериус убрал меч в ножны и поклонился Селене: \"Я был неправ. Прости меня, сестра теней.\" Селена тихо кивнула."
            }
        ],
        "quiz": {
            "question": "Who truly planted the amulet in Selena's bag?",
            "options": [
                "The Ash Queen using a shadow imp to cause distrust",
                "Thorin as a joke",
                "Zephyr by mistake"
            ],
            "correctIndex": 0,
            "rewardXp": 410
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Shadow Cliffs",
        "locationRu": "Теневые Утесы"
    },
    {
        "id": "ch-31",
        "actId": 5,
        "number": 31,
        "titleEn": "The Bridge of Bones",
        "titleRu": "Мост из костей",
        "reqHeroLevels": {
            "thorin": 85,
            "freya": 85,
            "oberon": 85
        },
        "involvedHeroes": [
            "thorin",
            "freya",
            "oberon"
        ],
        "paragraphs": [
            {
                "en": "To reach the inner gate of the Rift, the squad had to cross a narrow bridge made of giant fossilized dragon bones over a boiling lake of magma.",
                "ru": "Чтобы добраться до внутренних врат Разлома, отряду нужно было пересечь узкий мост из гигантских окаменелых костей дракона над кипящим озером магмы."
            },
            {
                "en": "A massive four-armed Magma Titan climbed onto the bridge, smashing the bone arch with a molten club.",
                "ru": "Огромный четырехрукий Магматический Титан взобрался на мост, круша костяную арку раскаленной дубиной."
            },
            {
                "en": "Thorin and Freya charged forward together. Thorin locked the monster's legs with his warhammer, while Freya drove her lightning spear through its fiery eye.",
                "ru": "Торин и Фрейя бросились вперед вместе. Торин заблокировал ноги монстра боевым молотом, пока Фрейя вонзила копье молнии в его огненный глаз."
            },
            {
                "en": "Oberon instantly grew vine bridges to replace the shattered bone plates, allowing all ten heroes to cross safely to the other side.",
                "ru": "Оберон мгновенно вырастил лозовые мосты взамен разбитых костяных плит, позволив всем десяти героям благополучно перебраться на другую сторону."
            }
        ],
        "quiz": {
            "question": "How did Oberon save the bridge when the Titan smashed it?",
            "options": [
                "He grew magical vine bridges over the gaps",
                "He used a flying ship",
                "He cast a freeze spell"
            ],
            "correctIndex": 0,
            "rewardXp": 420
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Dragon Bone Bridge",
        "locationRu": "Мост из Костей Дракона"
    },
    {
        "id": "ch-32",
        "actId": 5,
        "number": 32,
        "titleEn": "Light in the Abyss",
        "titleRu": "Свет в бездне",
        "reqHeroLevels": {
            "astraea": 87,
            "zephyr": 87
        },
        "involvedHeroes": [
            "astraea",
            "zephyr"
        ],
        "paragraphs": [
            {
                "en": "A sudden blast of dark kinetic energy threw Zephyr over the edge of the obsidian cliff into the poisonous black mist.",
                "ru": "Внезапный взрыв темной кинетической энергии сбросил Зефира с края обсидианового утеса в ядовитый черный туман."
            },
            {
                "en": "Without hesitation, Astraea jumped into the abyss after him, opening her glowing angel wings of pure celestial light.",
                "ru": "Без колебаний Астрея прыгнула в бездну вслед за ним, распахнув светящиеся ангельские крылья из чистого небесного света."
            },
            {
                "en": "She caught Zephyr's hand and cast a golden protective sphere around them, neutralizing the acid fumes.",
                "ru": "Она перехватила руку Зефира и сотворила вокруг них золотую сферу защиты, нейтрализуя кислотные испарения."
            },
            {
                "en": "Zephyr fired a gale rope arrow upward, and together they ascended back to the ledge. \"You are crazy, priestess,\" Zephyr laughed through tears.",
                "ru": "Зефир выстрелил стрелой со штормовой веревкой вверх, и вместе они поднялись обратно на карниз. \"Ты сумасшедшая, жрица,\" — сквозь слезы рассмеялся Зефир."
            }
        ],
        "quiz": {
            "question": "What did Astraea do to save Zephyr when he fell?",
            "options": [
                "She jumped after him and created a protective light sphere",
                "She called for help",
                "She threw a rope"
            ],
            "correctIndex": 0,
            "rewardXp": 430
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Obsidian Chasm",
        "locationRu": "Обсидиановая Бездна"
    },
    {
        "id": "ch-33",
        "actId": 5,
        "number": 33,
        "titleEn": "The Traitor Revealed",
        "titleRu": "Тень предательства",
        "reqHeroLevels": {
            "valerius": 90,
            "selene": 90,
            "thorin": 90
        },
        "involvedHeroes": [
            "valerius",
            "selene",
            "thorin"
        ],
        "paragraphs": [
            {
                "en": "At the Inner Gate of the Rift stood the Grand Inquisitor of the Shield Clan—the man who had ordered the exile of Valerius.",
                "ru": "У Внутренних Врат Разлома стоял Великий Инквизитор Клана Щита — человек, отдавший приказ об изгнании Валериуса."
            },
            {
                "en": "He held the dark key to the Titan's cage. \"You are too late, outcasts! The dark lords offered me eternal life and supreme dominion over all three clans!\"",
                "ru": "Он держал темный ключ от клетки Титана. \"Вы опоздали, изгои! Темные владыки предложили мне вечную жизнь и верховную власть над всеми тремя кланами!\""
            },
            {
                "en": "\"So you were the traitor in the prophecy,\" Valerius said with deep sorrow. \"Not one of our squad, but the corruption of our old leaders!\"",
                "ru": "\"Значит, ты был тем предателем из пророчества,\" — с глубокой скорбью сказал Валериус. \"Не кто-то из нашего отряда, а гниль наших старых правителей!\""
            },
            {
                "en": "The squad stood united. Ten weapons gleamed with ten different colors of power. The Inquisitor's false confidence vanished.",
                "ru": "Отряд стоял плечом к плечу. Десять видов оружия сияли десятью разными цветами силы. Ложная уверенность Инквизитора испарилась."
            }
        ],
        "quiz": {
            "question": "Who was the real traitor mentioned in the ancient prophecy?",
            "options": [
                "The corrupt Grand Inquisitor who made a deal with darkness",
                "Selena",
                "Thorin"
            ],
            "correctIndex": 0,
            "rewardXp": 450
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Threshold of the Rift",
        "locationRu": "Порог Пепельного Разлома"
    },
    {
        "id": "ch-34",
        "actId": 5,
        "number": 34,
        "titleEn": "Forgiveness in Blood",
        "titleRu": "Прощение кровью",
        "reqHeroLevels": {
            "valerius": 90,
            "selene": 90,
            "thorin": 90,
            "frostina": 90
        },
        "involvedHeroes": [
            "valerius",
            "selene",
            "thorin",
            "frostina"
        ],
        "paragraphs": [
            {
                "en": "The Inquisitor unleashed his dark mutated guards. A fierce battle erupted on the threshold of the abyss.",
                "ru": "Инквизитор спустил своих темных мутировавших стражей. Яростная битва вспыхнула на пороге бездны."
            },
            {
                "en": "Valerius took a poison blade strike meant for Thorin, blocking the lethal blow with his body armor.",
                "ru": "Валериус принял удар отравленного клинка, предназначавшийся Торину, заблокировав смертельный выпад своими доспехами."
            },
            {
                "en": "Thorin roared in fury, shattering the Inquisitor's dark staff with one mighty overhead strike. Selena disarmed the villain in a blink.",
                "ru": "Торин взревел в ярости, расколов темный посох Инквизитора одним мощным ударом сверху. Селена в мгновение ока обезоружила злодея."
            },
            {
                "en": "As Astraea healed Valerius, Thorin knelt beside him: \"No clan blood matters now. You are my brother for all eternity.\"",
                "ru": "Пока Астрея исцеляла Валериуса, Торин опустился рядом с ним на колено: \"Кровь кланов больше не имеет значения. Ты мой брат на веки вечные.\""
            }
        ],
        "quiz": {
            "question": "What did Valerius do during the fight with the Inquisitor?",
            "options": [
                "He blocked a lethal strike meant for Thorin",
                "He ran away",
                "He joined the enemy"
            ],
            "correctIndex": 0,
            "rewardXp": 460
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Gates of the Abyss",
        "locationRu": "Врата Бездны"
    },
    {
        "id": "ch-35",
        "actId": 6,
        "number": 35,
        "titleEn": "The Gates of the Rift",
        "titleRu": "Врата Разлома",
        "reqHeroLevels": {
            "valerius": 92,
            "thorin": 92,
            "freya": 92,
            "selene": 92
        },
        "involvedHeroes": [
            "valerius",
            "thorin",
            "freya",
            "selene"
        ],
        "paragraphs": [
            {
                "en": "The sky turned pitch black as the Ash Sun reached total solar eclipse. A red ring of evil light blazed in the heavens.",
                "ru": "Небо стало смоляно-черным, когда Пепельное Солнце достигло полного солнечного затмения. Красное кольцо зловещего света пылало в небесах."
            },
            {
                "en": "The colossal iron gates of the Rift began to shatter. Thousands of demon wings roared from the bottomless crater.",
                "ru": "Колоссальные железные врата Разлома начали трескаться. Тысячи демонических крыльев взревели из бездонного кратера."
            },
            {
                "en": "\"Line up!\" Valerius ordered. Valerius, Thorin, and Freya formed an unbreakable front wall with their shields and spears.",
                "ru": "\"В строй!\" — скомандовал Валериус. Валериус, Торин и Фрейя сформировали несокрушимую переднюю стену своими щитами и копьями."
            },
            {
                "en": "\"Let them come,\" Selena whispered, sharpening her obsidian blades. \"Today, we write our own destiny.\"",
                "ru": "\"Пусть идут,\" — прошептала Селена, точа обсидиановые клинки. \"Сегодня мы сами пишем свою судьбу.\""
            }
        ],
        "quiz": {
            "question": "What formed in the sky during the opening of the Rift?",
            "options": [
                "A rainbow",
                "A total solar eclipse with a burning red ring",
                "A cloud of white snow"
            ],
            "correctIndex": 1,
            "rewardXp": 480
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Shattered Rift Gate",
        "locationRu": "Расколотые Врата Разлома"
    },
    {
        "id": "ch-36",
        "actId": 6,
        "number": 36,
        "titleEn": "Clash of Three Elements",
        "titleRu": "Битва трех стихий",
        "reqHeroLevels": {
            "ignis": 94,
            "frostina": 94,
            "oberon": 94
        },
        "involvedHeroes": [
            "ignis",
            "frostina",
            "oberon"
        ],
        "paragraphs": [
            {
                "en": "A massive army of Ash Ghouls climbed over the crater rim. The three masters of elemental magic stepped into the center.",
                "ru": "Огромная армия Пепельных Гулей перевалила через край кратера. Три мастера стихийной магии вышли в центр."
            },
            {
                "en": "Ignis summoned the eternal fire of the core. Frostina brought the absolute zero blizzard of the northern peaks. Oberon summoned the ancient roots of the world tree.",
                "ru": "Игнис призвал вечный огонь ядра. Фростина обрушила буран абсолютного нуля северных пиков. Оберон вызвал древние корни древа мира."
            },
            {
                "en": "They fused their three spells into a magnificent tri-elemental vortex: fire, ice, and life swirling in perfect harmony.",
                "ru": "Они слили свои три заклинания в великолепный трехстихийный вихрь: огонь, лед и жизнь закружились в идеальной гармонии."
            },
            {
                "en": "The storm swept the horde away like dead leaves, cleansing the poisoned ground into fertile emerald soil.",
                "ru": "Шторм смел орду прочь, словно сухие листья, очистив отравленную землю в плодородную изумрудную почву."
            }
        ],
        "quiz": {
            "question": "How did Ignis, Frostina, and Oberon defeat the army of ghouls?",
            "options": [
                "They fused Fire, Ice, and Nature magic into a single vortex",
                "They used arrows",
                "They negotiated peace"
            ],
            "correctIndex": 0,
            "rewardXp": 500
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Tri-Elemental Battlefield",
        "locationRu": "Поле Трех Стихий"
    },
    {
        "id": "ch-37",
        "actId": 6,
        "number": 37,
        "titleEn": "The Valkyrie's Sky",
        "titleRu": "Небеса Валькирии",
        "reqHeroLevels": {
            "freya": 96,
            "zephyr": 96,
            "astraea": 96
        },
        "involvedHeroes": [
            "freya",
            "zephyr",
            "astraea"
        ],
        "paragraphs": [
            {
                "en": "From the center of the eclipse, the Ash Dragon King soared down, breathing streams of corrupted black lightning.",
                "ru": "Из центра затмения спикировал Король Пепельных Драконов, изрыгая потоки оскверненной черной молнии."
            },
            {
                "en": "Astraea cast a colossal dome of holy dawnlight to shield the spellcasters below from the dragon's breath.",
                "ru": "Астрея сотворила колоссальный купол святого рассветного света, чтобы защитить заклинателей внизу от дыхания дракона."
            },
            {
                "en": "Zephyr rode a whirlwind draft high above the dragon, shooting tempest arrows into its wing joints to force it lower.",
                "ru": "Зефир оседлал вихревой поток высоко над драконом, выпуская штормовые стрелы в суставы его крыльев, чтобы прижать его к земле."
            },
            {
                "en": "Freya ignited her divine wings, plunging straight down like a falling comet, piercing the dragon's dark heart with her winged spear.",
                "ru": "Фрейя воспламенила свои божественные крылья, устремившись прямо вниз словно падающая комета, и пронзила темное сердце дракона своим крылатым копьем."
            }
        ],
        "quiz": {
            "question": "How did Freya defeat the Ash Dragon King?",
            "options": [
                "She pierced its dark heart with a comet plunge of her thunder spear",
                "She threw a stone",
                "She trapped it in a cave"
            ],
            "correctIndex": 0,
            "rewardXp": 520
        },
        "backgroundImg": "images/backgrounds/bg_sky_terrace.jpg",
        "locationEn": "The Tempest Skies of Eclipse",
        "locationRu": "Штормовые Небеса Затмения"
    },
    {
        "id": "ch-38",
        "actId": 6,
        "number": 38,
        "titleEn": "The Nameless Flame",
        "titleRu": "Безымянное Пламя",
        "reqHeroLevels": {
            "eldrin": 98,
            "thorin": 98,
            "valerius": 98
        },
        "involvedHeroes": [
            "eldrin",
            "thorin",
            "valerius"
        ],
        "paragraphs": [
            {
                "en": "The ground broke apart completely. The ancient Ash Titan emerged from the deepest bedrock—a colossal giant of cursed magma and dark stone.",
                "ru": "Земля раскололась окончательно. Древний Пепельный Титан поднялся из глубочайшей породы — колоссальный гигант из проклятой магмы и темного камня."
            },
            {
                "en": "\"Only the nameless flame will burn the dark!\" Eldrin recited the last line of the prophecy. \"What is the nameless flame, old master?!\" Valerius yelled.",
                "ru": "\"Только безымянное пламя сожжет тьму!\" — процитировал Эльдрин последнюю строку пророчества. \"Что такое безымянное пламя, старый учитель?!\" — крикнул Валериус."
            },
            {
                "en": "\"It is not fire in the hearth, and it is not a spell in a book!\" Eldrin smiled through the storm. \"It is the flame of unity! Ten hearts beating without clan names!\"",
                "ru": "\"Это не огонь в очаге и не заклинание в книге!\" — улыбнулся Эльдрин сквозь бурю. \"Это пламя единства! Десять сердец, бьющихся без клановых имен!\""
            },
            {
                "en": "The weapons of all ten heroes flared with brilliant white radiance. The true Nameless Flame was born in their united spirits.",
                "ru": "Оружие всех десяти героев вспыхнуло ослепительным белым сиянием. Истинное Безымянное Пламя родилось в их едином духе."
            }
        ],
        "quiz": {
            "question": "What is the true meaning of the Nameless Flame?",
            "options": [
                "A special potion",
                "The flame of unity and friendship of ten heroes across clans",
                "A volcano eruption"
            ],
            "correctIndex": 1,
            "rewardXp": 550
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Bedrock Core of the World",
        "locationRu": "Коренная Порода Мира"
    },
    {
        "id": "ch-39",
        "actId": 6,
        "number": 39,
        "titleEn": "The Titan of the Eclipse",
        "titleRu": "Титан Затмения",
        "reqHeroLevels": {
            "valerius": 100,
            "astraea": 100,
            "ignis": 100,
            "frostina": 100,
            "zephyr": 100,
            "thorin": 100,
            "selene": 100,
            "oberon": 100,
            "freya": 100,
            "eldrin": 100
        },
        "involvedHeroes": [
            "valerius",
            "astraea",
            "ignis",
            "frostina",
            "zephyr",
            "thorin",
            "selene",
            "oberon",
            "freya",
            "eldrin"
        ],
        "paragraphs": [
            {
                "en": "All ten heroes unleashed their ultimate powers simultaneously against the Titan of the Eclipse.",
                "ru": "Все десять героев одновременно высвободили свои абсолютные силы против Титана Затмения."
            },
            {
                "en": "Valerius and Thorin held the giant's feet. Frostina froze the joints, while Oberon's roots bound its arms.",
                "ru": "Валериус и Торин удерживали ступни гиганта. Фростина заморозила суставы, пока корни Оберона сковали его руки."
            },
            {
                "en": "Selena and Zephyr struck the critical energy channels. Ignis and Freya shattered the chest armor with storm and flame.",
                "ru": "Селена и Зефир нанесли удары по критическим каналам энергии. Игнис и Фрейя разбили нагрудную броню бурей и пламенем."
            },
            {
                "en": "Astraea and Eldrin focused the pure light of the Seven Winds into the Titan's core. With an earth-shattering roar, the Titan dissolved into golden stardust.",
                "ru": "Астрея и Эльдрин сфокусировали чистый свет Семи Ветров в ядро Титана. С оглушительным ревом Титан растворился в золотой звездной пыли."
            }
        ],
        "quiz": {
            "question": "How did the ten heroes defeat the giant Titan?",
            "options": [
                "By attacking together with all 10 powers combined",
                "By hiding in the tower",
                "By running away"
            ],
            "correctIndex": 0,
            "rewardXp": 600
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Edge of the Ashen Maw",
        "locationRu": "Край Пепельного Жерла"
    },
    {
        "id": "ch-40",
        "actId": 6,
        "number": 40,
        "titleEn": "The Dawn of Ten Shadows",
        "titleRu": "Рассвет Десяти Теней (Выпускной A1)",
        "reqHeroLevels": {
            "valerius": 100,
            "astraea": 100,
            "ignis": 100,
            "frostina": 100,
            "zephyr": 100,
            "thorin": 100,
            "selene": 100,
            "oberon": 100,
            "freya": 100,
            "eldrin": 100
        },
        "involvedHeroes": [
            "valerius",
            "astraea",
            "ignis",
            "frostina",
            "zephyr",
            "thorin",
            "selene",
            "oberon",
            "freya",
            "eldrin"
        ],
        "paragraphs": [
            {
                "en": "The black eclipse vanished. A warm, golden morning sun rose over the mountains, filling the valley with bright life and singing birds.",
                "ru": "Черное затмение рассеялось. Теплое золотое утреннее солнце взошло над горами, наполняя долину яркой жизнью и пением птиц."
            },
            {
                "en": "The borders were no longer walls of hatred. People of all three clans came together at the Silver River, celebrating peace and rebuilding the world.",
                "ru": "Границы больше не были стенами ненависти. Люди всех трех кланов собрались вместе у Серебряной реки, празднуя мир и отстраивая мир заново."
            },
            {
                "en": "Ten heroes stood on the high cliff of the Astral Peak, looking into the golden horizon. They were no longer outcasts. They were the Guardians of the Seven Winds.",
                "ru": "Десять героев стояли на высоком утесе Астрального Пика, глядя в золотой горизонт. Они больше не были изгоями. Они были Хранителями Семи Ветров."
            },
            {
                "en": "\"You have mastered the language of courage, heroes,\" Eldrin spoke with a proud smile. \"Your A1 journey is complete. Beyond these mountains, the great lands of A2 await!\"",
                "ru": "\"Вы овладели языком мужества, герои,\" — с гордой улыбкой произнес Эльдрин. \"Ваш путь A1 завершен. За этими горами вас ждут великие земли A2!\""
            }
        ],
        "quiz": {
            "question": "What did the ten heroes become after saving the world?",
            "options": [
                "The legendary Guardians of the Seven Winds",
                "Simple farmers",
                "Rivals again"
            ],
            "correctIndex": 0,
            "rewardXp": 1000
        },
        "backgroundImg": "images/backgrounds/bg_panorama.jpg",
        "locationEn": "The Summit of the Seven Winds",
        "locationRu": "Вершина Семи Ветров"
    }
];

const HERO_ORIGINAL_PORTRAITS = {
    valerius: 'images/characters_orig/valerius_orig.jpg',
    astraea: 'images/characters_orig/astraea_orig.jpg',
    zephyr: 'images/characters_orig/zephyr_orig.png',
    ignis: 'images/characters_orig/ignis_orig.jpg',
    frostina: 'images/characters_orig/frostina_orig.jpg',
    thorin: 'images/characters_orig/thorin_orig.png',
    selene: 'images/characters_orig/selene_orig.png',
    oberon: 'images/characters_orig/oberon_orig.jpg',
    freya: 'images/characters_orig/freya_orig.jpg',
    eldrin: 'images/characters_orig/eldrin_orig.jpg'
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STORY_ACTS, STORY_CHAPTERS, HERO_ORIGINAL_PORTRAITS };
}
