/**
 * STORY CAMPAIGNS & CHAPTERS (CEFR A1 Full Interactive Content)
 * Campaign 1: The Oath of Seven Winds (40 Chapters, Fantasy RPG)
 * Campaign 2: The New Haven Mysteries (Modern Detective Series)
 */

const STORY_CAMPAIGNS = [
    {
        "id": "fantasy",
        "title": "The Oath of Seven Winds",
        "titleRu": "Клятва Семи Ветров",
        "subtitle": "40 Глав • Сюжетная кампания с 20 по 100 уровень героев",
        "badge": "Fantasy RPG • A1",
        "icon": "fa-scroll",
        "color": "var(--warning)",
        "defaultActId": 1
    },
    {
        "id": "detective",
        "title": "The New Haven Mysteries",
        "titleRu": "Тайны Нью-Хейвена",
        "subtitle": "Детективные расследования в современном городе",
        "badge": "Modern Detective • A1",
        "icon": "fa-magnifying-glass",
        "color": "#38bdf8",
        "defaultActId": 101
    }
];

const STORY_ACTS = [
    {
        "id": 1,
        "title": "Act I: Sparks on the Border",
        "subtitle": "Искры на границе",
        "chaptersRange": "1–6",
        "reqLvl": "Lvl 20–30",
        "icon": "fa-fire-flame-curved",
        "color": "#f59e0b",
        "campaignId": "fantasy"
    },
    {
        "id": 2,
        "title": "Act II: Disputed Lands",
        "subtitle": "Спорные земли и заговор",
        "chaptersRange": "7–13",
        "reqLvl": "Lvl 30–45",
        "icon": "fa-map-location-dot",
        "color": "#3b82f6",
        "campaignId": "fantasy"
    },
    {
        "id": 3,
        "title": "Act III: The Ash Vanguard",
        "subtitle": "Падение застав и пепел",
        "chaptersRange": "14–20",
        "reqLvl": "Lvl 45–60",
        "icon": "fa-skull",
        "color": "#ef4444",
        "campaignId": "fantasy"
    },
    {
        "id": 4,
        "title": "Act IV: The Outcast Squad",
        "subtitle": "Рождение отряда изгоев",
        "chaptersRange": "21–27",
        "reqLvl": "Lvl 60–75",
        "icon": "fa-campground",
        "color": "#8b5cf6",
        "campaignId": "fantasy"
    },
    {
        "id": 5,
        "title": "Act V: Shadows of Betrayal",
        "subtitle": "Тени предательства",
        "chaptersRange": "28–34",
        "reqLvl": "Lvl 75–90",
        "icon": "fa-mask",
        "color": "#ec4899",
        "campaignId": "fantasy"
    },
    {
        "id": 6,
        "title": "Act VI: The Ash Sun Eclipse",
        "subtitle": "Битва за солнце (Финал A1)",
        "chaptersRange": "35–40",
        "reqLvl": "Lvl 90–100",
        "icon": "fa-sun",
        "color": "#eab308",
        "campaignId": "fantasy"
    },
    {
        "id": 101,
        "campaignId": "detective",
        "title": "Case I: The Stolen Music Box",
        "subtitle": "Дело I: Украденная музыкальная шкатулка",
        "chaptersRange": "1–6",
        "reqLvl": "A1 Level",
        "icon": "fa-magnifying-glass",
        "color": "#38bdf8"
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
        "sceneIllustrationImg": "images/story/ch1_scene.jpg",
        "campaignId": "fantasy"
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
        "sceneIllustrationImg": "images/story/ch2_scene.jpg",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-3",
        "actId": 1,
        "number": 3,
        "titleEn": "Whispers in the Deep",
        "titleRu": "Шепот в глубинах",
        "reqHeroLevels": {
            "thorin": 24,
            "selene": 24,
            "ignis": 24
        },
        "involvedHeroes": [
            "thorin",
            "selene",
            "ignis"
        ],
        "paragraphs": [
            {
                "speaker": "thorin",
                "en": "Under the big mountain, the world is dark and hot. Thorin stands at his iron anvil. He is a strong warrior. He has gloves and bronze armor. His hammer is glowing. He crafts red hot steel. CLANG! CLANG! CLANG! Gold sparks fly every time.",
                "ru": "Под большой горой мир темный и горячий. Торин стоит у своей железной наковальни. Он сильный воин. У него есть перчатки и бронзовые доспехи. Его молот светится. Он кует раскаленную сталь. БУМ! БУМ! БУМ! Золотые искры летят каждый раз.",
                "chunkedEn": "[pt: Under the big mountain,] [s: the world] [v: is dark and hot.]\n[s: Thorin] [v: stands] [pt: at his iron anvil.]\n[s: He] [v: is] [o: a strong warrior.]\n[s: He] [v: has] [o: gloves and bronze armor.]\n[s: His hammer] [v: is glowing.]\n[s: He] [v: crafts] [o: red hot steel.]\n[o: CLANG! CLANG! CLANG!]\n[s: Gold sparks] [v: fly] [pt: every time.]"
            },
            {
                "speaker": "selene",
                "en": "Now Selena comes in the dark shadow. She is an assassin. She has silver hair and purple eyes. She has black boots. Her boots are quiet on the hard rock. She has two daggers at her belt.",
                "ru": "Теперь в темной тени появляется Селена. Она ассасин. У нее серебряные волосы и фиолетовые глаза. На ней черные сапоги. Ее сапоги ступают тихо по твердой скале. У нее два кинжала на поясе.",
                "chunkedEn": "[adv: Now] [s: Selena] [v: comes] [pt: in the dark shadow.]\n[s: She] [v: is] [o: an assassin.]\n[s: She] [v: has] [o: silver hair and purple eyes.]\n[s: She] [v: has] [o: black boots.]\n[s: Her boots] [v: are quiet] [pt: on the hard rock.]\n[s: She] [v: has] [o: two daggers] [pt: at her belt.]"
            },
            {
                "speaker": "selene",
                "en": "\"The mountain can hear your hammer, Smith,\" Selena says. She smiles a little. \"The old kings in the stone rooms can hear you.\"",
                "ru": "\"Гора слышит твой молот, Кузнец,\" — говорит Селена. Она слегка улыбается. \"Старые короли в каменных залах слышат тебя.\"",
                "chunkedEn": "[s: \"The mountain] [v: can hear] [o: your hammer, Smith,\"] [s: Selena] [v: says.]\n[s: She] [v: smiles a little.]\n[s: \"The old kings in the stone rooms] [v: can hear] [o: you.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin stops his hammer. He smiles at Selena. \"Steel is not soft,\" he says. \"Good swords need fire and iron. But why do you visit my hot forge today? You like the cold castle and the quiet city.\"",
                "ru": "Торин останавливает свой молот. Он улыбается Селене. \"Сталь не мягкая,\" — говорит он. \"Хорошим мечам нужны огонь и железо. Но почему ты навещаешь мою горячую кузницу сегодня? Ты любишь холодный замок и тихий город.\"",
                "chunkedEn": "[s: Thorin] [v: stops] [o: his hammer.]\n[s: He] [v: smiles] [pt: at Selena.]\n[s: \"Steel] [v: is not soft,\"] [s: he] [v: says.]\n[s: \"Good swords] [v: need] [o: fire and iron.]\n[c: But] [w: why] [v: do] [s: you] [v: visit] [o: my hot forge] [pt: today?]\n[s: You] [v: like] [o: the cold castle and the quiet city.\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena walks to the wood table. She opens a small bag. Inside are pieces of purple crystal. The crystal is cold. \"I found these crystals in a cave,\" Selena says. \"It is under the old mine. Workers go there. They hear dark voices in the stone walls. Five workers went there yesterday. They do not come back.\"",
                "ru": "Селена идет к деревянному столу. Она открывает маленький мешочек. Внутри лежат кусочки фиолетового кристалла. Кристалл холодный. \"Я нашла эти кристаллы в пещере,\" — говорит Селена. \"Она находится под старой шахтой. Рабочие ходят туда. Они слышат темные голоса в каменных стенах. Пятеро рабочих пошли туда вчера. Они не вернулись.\"",
                "chunkedEn": "[s: Selena] [v: walks] [pt: to the wood table.]\n[s: She] [v: opens] [o: a small bag.]\n[pt: Inside] [v: are] [s: pieces of purple crystal.]\n[s: The crystal] [v: is cold.]\n[s: \"I] [v: found] [o: these crystals] [pt: in a cave,\"] [s: Selena] [v: says.]\n[s: \"It] [v: is] [pt: under the old mine.]\n[s: Workers] [v: go] [pt: there.]\n[s: They] [v: hear] [o: dark voices] [pt: in the stone walls.]\n[s: Five workers] [v: went] [pt: there] [pt: yesterday.]\n[s: They] [v: do not come back.\"]"
            },
            {
                "speaker": "ignis",
                "en": "The door opens. Hot air comes in. Ignis comes in. He has his staff. His eyes are bright and red. \"This is a bad magic stone!\" Ignis says. \"It is from an old war. This stone can become a bad shadow. If iron breaks this stone, it is very dangerous!\"",
                "ru": "Дверь открывается. Горячий воздух входит внутрь. Входит Игнис. У него его посох. Его глаза яркие и красные. \"Это камень темной магии!\" — говорит Игнис. \"Он из старой войны. Этот камень может стать злой тенью. Если железо разобьет этот камень, это очень опасно!\"",
                "chunkedEn": "[s: The door] [v: opens.]\n[s: Hot air] [v: comes in.]\n[s: Ignis] [v: comes in.]\n[s: He] [v: has] [o: his staff.]\n[s: His eyes] [v: are bright and red.]\n[s: \"This] [v: is] [o: a bad magic stone!\"] [s: Ignis] [v: says.]\n[s: \"It] [v: is] [pt: from an old war.]\n[s: This stone] [v: can become] [o: a bad shadow.]\n[b: If] [s: iron] [v: breaks] [o: this stone,] [s: it] [v: is very dangerous!\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin takes a crystal piece. He looks at it near the fire. \"This is not our mountain stone,\" he says. \"Someone made this stone by bad magic. We need good steel to fix this. I have temple silver. But I need Astraea's blessing too. She can help me craft a strong sword.\"",
                "ru": "Торин берет кусочек кристалла. Он смотрит на него возле огня. \"Это не наш горный камень,\" — говорит он. \"Кто-то создал этот камень с помощью темной магии. Нам нужна хорошая сталь, чтобы исправить это. У меня есть храмовое серебро. Но мне также нужно благословение Астреи. Она может помочь мне выковать крепкий меч.\"",
                "chunkedEn": "[s: Thorin] [v: takes] [o: a crystal piece.]\n[s: He] [v: looks] [pt: at it] [pt: near the fire.]\n[s: \"This] [v: is not] [o: our mountain stone,\"] [s: he] [v: says.]\n[s: \"Someone] [v: made] [o: this stone] [pt: by bad magic.]\n[s: We] [v: need] [o: good steel] [v: to fix] [o: this.]\n[s: I] [v: have] [o: temple silver.]\n[c: But] [s: I] [v: need] [o: Astraea's blessing] [adv: too.]\n[s: She] [v: can help me craft] [o: a strong sword.\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena hides her daggers in her cloak. She looks at the door. \"We need to find Valerius and Astraea. They are near the river,\" she says. \"This bad magic is dangerous for our world.\"",
                "ru": "Селена прячет кинжалы в плащ. Она смотрит на дверь. \"Нам нужно найти Валериуса и Астрею. Они возле реки,\" — говорит она. \"Эта темная магия опасна для нашего мира.\"",
                "chunkedEn": "[s: Selena] [v: hides] [o: her daggers] [pt: in her cloak.]\n[s: She] [v: looks] [pt: at the door.]\n[s: \"We] [v: need to find] [o: Valerius and Astraea.]\n[s: They] [v: are] [pt: near the river,\"] [s: she] [v: says.]\n[s: \"This bad magic] [v: is dangerous] [pt: for our world.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin takes his hammer. Ignis smiles. He is ready. The three heroes leave the forge. They go to find the knights.",
                "ru": "Торин берет свой молот. Игнис улыбается. Он готов. Трое героев покидают кузницу. Они идут искать рыцарей.",
                "chunkedEn": "[s: Thorin] [v: takes] [o: his hammer.]\n[s: Ignis] [v: smiles.]\n[s: He] [v: is ready.]\n[s: The three heroes] [v: leave] [o: the forge.]\n[s: They] [v: go to find] [o: the knights.]"
            }
        ],
        "quiz": {
            "question": "What did Selena find in the cave under the old mine?",
            "options": [
                "Pieces of cold purple crystal with dark magic",
                "A golden treasure chest from the old kings",
                "A basket of fresh red apples and sweet bread"
            ],
            "correctIndex": 0,
            "rewardXp": 356
        },
        "backgroundImg": "images/backgrounds/bg_dungeon.jpg",
        "locationEn": "Deep Iron Mines",
        "locationRu": "Глубинные Шахты Горна",
        "sceneIllustrationImg": "images/story/ch3_scene.jpg",
        "campaignId": "fantasy"
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
                "speaker": "freya",
                "en": "High in the sky is a Golden Citadel. It is on white clouds. The sun is bright. White birds fly near the windows. Freya stands on a balcony. She is a Valkyrie. She has gold wings. She has a silver breastplate. She has long blonde hair. She has a spear of light.",
                "ru": "Высоко в небе находится Золотая Цитадель. Она стоит на белых облаках. Солнце яркое. Белые птицы летают возле окон. Фрейя стоит на балконе. Она валькирия. У нее золотые крылья. У нее серебряный нагрудник. У нее длинные светлые волосы. У нее копье света.",
                "chunkedEn": "[pt: High in the sky] [v: is] [s: a Golden Citadel.]\n[s: It] [v: is] [pt: on white clouds.]\n[s: The sun] [v: is bright.]\n[s: White birds] [v: fly] [pt: near the windows.]\n[s: Freya] [v: stands] [pt: on a balcony.]\n[s: She] [v: is] [o: a Valkyrie.]\n[s: She] [v: has] [o: gold wings.]\n[s: She] [v: has] [o: a silver breastplate.]\n[s: She] [v: has] [o: long blonde hair.]\n[s: She] [v: has] [o: a spear of light.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius walks up the stairs. His armor is silver. He is quiet and respectful. \"Lady Freya,\" Valerius says. \"The land below has a problem. Black ash falls from the sky. Shadow animals attack our people. The King sends me. I need your blessing.\"",
                "ru": "Валериус поднимается по лестнице. Его доспехи серебряные. Он спокоен и полон уважения. \"Госпожа Фрейя,\" — говорит Валериус. \"На земле внизу возникла беда. Черный пепел падает с неба. Теневые звери нападают на наш народ. Король послал меня. Мне нужно ваше благословение.\"",
                "chunkedEn": "[s: Valerius] [v: walks up] [o: the stairs.]\n[s: His armor] [v: is silver.]\n[s: He] [v: is quiet and respectful.]\n[o: \"Lady Freya,\"] [s: Valerius] [v: says.]\n[s: \"The land below] [v: has] [o: a problem.]\n[s: Black ash] [v: falls] [pt: from the sky.]\n[s: Shadow animals] [v: attack] [o: our people.]\n[s: The King] [v: sends] [o: me.]\n[s: I] [v: need] [o: your blessing.\"]"
            },
            {
                "speaker": "freya",
                "en": "Freya looks at Valerius. Her eyes are blue. Her face is serious. \"The King sees the earth. But I see the stars, Valerius,\" she says. \"This is not a normal storm. An old door in the dark world is open. The Shadow King takes dark energy from old stars. The sky doors cannot protect people if the heroes on earth do not work together.\"",
                "ru": "Фрейя смотрит на Валериуса. Ее глаза синие. Ее лицо серьезное. \"Король видит землю. Но я вижу звезды, Валериус,\" — говорит она. \"Это не обычная буря. Старая дверь в темный мир открыта. Теневой Король берет темную энергию из старых звезд. Небесные врата не смогут защитить людей, если герои на земле не будут действовать вместе.\"",
                "chunkedEn": "[s: Freya] [v: looks] [pt: at Valerius.]\n[s: Her eyes] [v: are blue.]\n[s: Her face] [v: is serious.]\n[s: \"The King] [v: sees] [o: the earth.]\n[c: But] [s: I] [v: see] [o: the stars, Valerius,\"] [s: she] [v: says.]\n[s: \"This] [v: is not] [o: a normal storm.]\n[s: An old door in the dark world] [v: is open.]\n[s: The Shadow King] [v: takes] [o: dark energy] [pt: from old stars.]\n[s: The sky doors] [v: cannot protect] [o: people] [b: if] [s: the heroes on earth] [v: do not work together.\"]"
            },
            {
                "speaker": "freya",
                "en": "She lifts her spear to the sky. Light goes up. Five old stars shine in the day sky. \"You need five old things. The first is the Heart of the Forest. Oberon protects it in the forest. The second is the Fire Stone. It is in Thorin's forge. You need to unite your kingdom with Zephyr's people and the north sorcerers.\"",
                "ru": "Она поднимает копье к небу. Свет устремляется вверх. Пять старых звезд сияют на дневном небе. \"Тебе нужны пять древних вещей. Первая — Сердце Леса. Оберон охраняет его в лесу. Вторая — Камень Огня. Он находится в кузнице Торина. Тебе нужно объединить твое королевство с народом Зефира и северными магами.\"",
                "chunkedEn": "[s: She] [v: lifts] [o: her spear] [pt: to the sky.]\n[s: Light] [v: goes up.]\n[s: Five old stars] [v: shine] [pt: in the day sky.]\n[s: \"You] [v: need] [o: five old things.]\n[s: The first] [v: is] [o: the Heart of the Forest.]\n[s: Oberon] [v: protects] [o: it] [pt: in the forest.]\n[s: The second] [v: is] [o: the Fire Stone.]\n[s: It] [v: is] [pt: in Thorin's forge.]\n[s: You] [v: need to unite] [o: your kingdom] [pt: with Zephyr's people and the north sorcerers.\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius puts his hand on his heart. He makes a promise. \"I will find the heroes, Lady Freya. I will protect people. I will hold my shield against the shadow army.\"",
                "ru": "Валериус кладет руку на сердце. Он дает обещание. \"Я найду героев, госпожа Фрейя. Я защищу людей. Я удержу свой щит против теневой армии.\"",
                "chunkedEn": "[s: Valerius] [v: puts] [o: his hand] [pt: on his heart.]\n[s: He] [v: makes] [o: a promise.]\n[s: \"I] [v: will find] [o: the heroes, Lady Freya.]\n[s: I] [v: will protect] [o: people.]\n[s: I] [v: will hold] [o: my shield] [pt: against the shadow army.\"]"
            },
            {
                "speaker": "freya",
                "en": "Freya smiles. She touches his shoulder with her spear. A gold light appears on his armor. It protects him. \"Go now, knight,\" Freya says. \"The forest needs your help. The old trees are sad.\"",
                "ru": "Фрейя улыбается. Она касается его плеча своим копьем. Золотой свет появляется на его доспехах. Он защищает его. \"Иди же, рыцарь,\" — говорит Фрейя. \"Лесу нужна твоя помощь. Старые деревья печалятся.\"",
                "chunkedEn": "[s: Freya] [v: smiles.]\n[s: She] [v: touches] [o: his shoulder] [pt: with her spear.]\n[s: A gold light] [v: appears] [pt: on his armor.]\n[s: It] [v: protects] [o: him.]\n[v: \"Go] [adv: now,] [o: knight,\"] [s: Freya] [v: says.]\n[s: \"The forest] [v: needs] [o: your help.]\n[s: The old trees] [v: are sad.\"]"
            }
        ],
        "quiz": {
            "question": "What does Freya tell Valerius he needs to find to save the world?",
            "options": [
                "Five old things, including the Heart of the Forest and the Fire Stone",
                "A box of gold coins hidden in the mountain caves",
                "A white bird from the highest cloud palace"
            ],
            "correctIndex": 0,
            "rewardXp": 285
        },
        "backgroundImg": "images/backgrounds/bg_temple.jpg",
        "locationEn": "Silver Bastion Ramparts",
        "locationRu": "Стены Серебряного Бастиона",
        "sceneIllustrationImg": "images/story/ch4_scene.jpg",
        "campaignId": "fantasy"
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
                "speaker": "astraea",
                "en": "In the old forest, big trees grow close. Green leaves make a roof. Soft green moss is on the ground. Big mushrooms give blue light. Clean water flows near the tree roots. Astraea walks on the path. She has her staff. The forest is very quiet. No birds sing. The air smells sweet and also bad.",
                "ru": "В старом лесу большие деревья растут близко друг к другу. Зеленые листья образуют крышу. Мягкий зеленый мох лежит на земле. Большие грибы дают синий свет. Чистая вода течет возле корней деревьев. Астрея идет по тропинке. У нее ее посох. Лес очень тихий. Птицы не поют. Воздух пахнет сладко и в то же время дурно.",
                "chunkedEn": "[pt: In the old forest,] [s: big trees] [v: grow close.]\n[s: Green leaves] [v: make] [o: a roof.]\n[s: Soft green moss] [v: is] [pt: on the ground.]\n[s: Big mushrooms] [v: give] [o: blue light.]\n[s: Clean water] [v: flows] [pt: near the tree roots.]\n[s: Astraea] [v: walks] [pt: on the path.]\n[s: She] [v: has] [o: her staff.]\n[s: The forest] [v: is very quiet.]\n[s: No birds] [v: sing.]\n[s: The air] [v: smells sweet and also bad.]"
            },
            {
                "speaker": "oberon",
                "en": "In the middle of the forest sits Oberon. He is an old tree. He has a face on his trunk. His arms are branches with flowers. But today he is weak. He has pain. A black mark is on his chest. Purple bad magic is in him. His green leaves become grey.",
                "ru": "Посреди леса сидит Оберон. Он старое дерево. У него есть лицо на стволе. Его руки — это ветви с цветами. Но сегодня он слаб. Он испытывает боль. Черная метка находится на его груди. Фиолетовая темная магия внутри него. Его зеленые листья становятся серыми.",
                "chunkedEn": "[pt: In the middle of the forest] [v: sits] [s: Oberon.]\n[s: He] [v: is] [o: an old tree.]\n[s: He] [v: has] [o: a face] [pt: on his trunk.]\n[s: His arms] [v: are] [o: branches with flowers.]\n[c: But] [pt: today] [s: he] [v: is weak.]\n[s: He] [v: has] [o: pain.]\n[s: A black mark] [v: is] [pt: on his chest.]\n[s: Purple bad magic] [v: is] [pt: in him.]\n[s: His green leaves] [v: become grey.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon opens his gold eyes. He looks at Astraea. He is sad. \"Child of the stars,\" Oberon says slowly. \"Dark roots are in my heart. A bad shadow animal drinks my life. If I fall, the magic wall around the forest breaks. Then shadow animals go to every village.\" Gold tears fall from his eyes.",
                "ru": "Оберон открывает свои золотые глаза. Он смотрит на Астрею. Он печален. \"Дитя звезд,\" — медленно говорит Оберон. \"Темные корни проникли в мое сердце. Злой теневой зверь пьет мою жизнь. Если я паду, магическая стена вокруг леса рухнет. Тогда теневые звери пойдут в каждую деревню.\" Золотые слезы падают из его глаз.",
                "chunkedEn": "[s: Oberon] [v: opens] [o: his gold eyes.]\n[s: He] [v: looks] [pt: at Astraea.]\n[s: He] [v: is sad.]\n[o: \"Child of the stars,\"] [s: Oberon] [v: says slowly.]\n[s: \"Dark roots] [v: are] [pt: in my heart.]\n[s: A bad shadow animal] [v: drinks] [o: my life.]\n[b: If] [s: I] [v: fall,] [s: the magic wall around the forest] [v: breaks.]\n[adv: Then] [s: shadow animals] [v: go] [pt: to every village.\"]\n[s: Gold tears] [v: fall] [pt: from his eyes.]"
            },
            {
                "speaker": "astraea",
                "en": "Astraea kneels near the big roots. She is not afraid. She puts her hands on the dark wound. She closes her eyes. She sings an old song. Green light flows from her hands into the wood. The warm magic fights the cold bad magic. The purple mist goes away. New green plants and white flowers grow fast. Oberon's leaves become green again.",
                "ru": "Астрея опускается на колени возле больших корней. Она не боится. Она кладет руки на темную рану. Она закрывает глаза. Она поет древнюю песню. Зеленый свет течет из ее рук в древесину. Теплая магия борется с холодной темной магией. Фиолетовый туман рассеивается. Новые зеленые растения и белые цветы быстро растут. Листья Оберона снова становятся зелеными.",
                "chunkedEn": "[s: Astraea] [v: kneels] [pt: near the big roots.]\n[s: She] [v: is not afraid.]\n[s: She] [v: puts] [o: her hands] [pt: on the dark wound.]\n[s: She] [v: closes] [o: her eyes.]\n[s: She] [v: sings] [o: an old song.]\n[s: Green light] [v: flows] [pt: from her hands] [pt: into the wood.]\n[s: The warm magic] [v: fights] [o: the cold bad magic.]\n[s: The purple mist] [v: goes away.]\n[s: New green plants and white flowers] [v: grow fast.]\n[s: Oberon's leaves] [v: become green] [adv: again.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon stands up tall. His big branches go up to the sun. From his chest, he takes a green stone. It is the size of an apple. It has a heartbeat, like the forest. \"You save my life, healer,\" Oberon says. \"Take the Heart of the Forest. Give it to Valerius and the heroes. With this stone, you can break any dark wall in the world.\" Astraea takes the stone. She is thankful. She is ready to bring it to the heroes.",
                "ru": "Оберон поднимается во весь рост. Его большие ветви тянутся к солнцу. Из своей груди он достает зеленый камень. Он размером с яблоко. У него есть биение сердца, как у леса. \"Ты спасла мою жизнь, целительница,\" — говорит Оберон. \"Возьми Сердце Леса. Отдай его Валериусу и героям. С этим камнем вы сможете разрушить любую темную стену в мире.\" Астрея берет камень. Она благодарна. Она готова отнести его героям.",
                "chunkedEn": "[s: Oberon] [v: stands up tall.]\n[s: His big branches] [v: go up] [pt: to the sun.]\n[pt: From his chest,] [s: he] [v: takes] [o: a green stone.]\n[s: It] [v: is] [o: the size of an apple.]\n[s: It] [v: has] [o: a heartbeat,] [pt: like the forest.]\n[s: \"You] [v: save] [o: my life, healer,\"] [s: Oberon] [v: says.]\n[v: \"Take] [o: the Heart of the Forest.]\n[v: Give] [o: it] [pt: to Valerius and the heroes.]\n[pt: With this stone,] [s: you] [v: can break] [o: any dark wall] [pt: in the world.\"]\n[s: Astraea] [v: takes] [o: the stone.]\n[s: She] [v: is thankful.]\n[s: She] [v: is ready to bring] [o: it] [pt: to the heroes.]"
            }
        ],
        "quiz": {
            "question": "What does Oberon give to Astraea after she heals his dark wound?",
            "options": [
                "The Heart of the Forest, a green stone with a heartbeat",
                "A golden crown with flowers from the mountain",
                "A magic wooden bow with sharp green arrows"
            ],
            "correctIndex": 0,
            "rewardXp": 307
        },
        "backgroundImg": "images/backgrounds/bg_enchanted_grove.jpg",
        "locationEn": "The Wounded Ancient Grove",
        "locationRu": "Раненая Священная Роща",
        "sceneIllustrationImg": "images/story/ch5_scene.jpg",
        "campaignId": "fantasy"
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
            "selene": 30
        },
        "involvedHeroes": [
            "thorin",
            "ignis",
            "selene",
            "valerius",
            "astraea",
            "zephyr"
        ],
        "paragraphs": [
            {
                "speaker": "valerius",
                "en": "The Silver Citadel has a big room. It has warm light from fire. Silver banners are on the walls. In the middle is a big round table made of wood. Six heroes come together: Valerius the knight, Astraea the priestess, Zephyr the ranger with his bow, Thorin the dwarf with his hammer, Selena the assassin, and Ignis the fire mage.",
                "ru": "В Серебряной Цитадели есть большая комната. В ней теплый свет от огня. Серебряные знамена висят на стенах. Посередине стоит большой круглый стол из дерева. Шесть героев собираются вместе: Валериус — рыцарь, Астрея — жрица, Зефир — следопыт со своим луком, Торин — дворф со своим молотом, Селена — ассасин и Игнис — маг огня.",
                "chunkedEn": "[s: The Silver Citadel] [v: has] [o: a big room.]\n[s: It] [v: has] [o: warm light] [pt: from fire.]\n[s: Silver banners] [v: are] [pt: on the walls.]\n[pt: In the middle] [v: is] [s: a big round table made of wood.]\n[s: Six heroes] [v: come together:] [o: Valerius the knight, Astraea the priestess, Zephyr the ranger with his bow, Thorin the dwarf with his hammer, Selena the assassin, and Ignis the fire mage.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius stands. He puts his hand on the table. \"Friends,\" Valerius says. \"The Ash Sun is above our world. Shadow animals attack our villages. A dark door opens under the Iron Mountains. We cannot win this war alone. We must fight together.\"",
                "ru": "Валериус встает. Он кладет руку на стол. \"Друзья,\" — говорит Валериус. \"Пепельное Солнце висит над нашим миром. Теневые звери атакуют наши деревни. Темная дверь открывается под Железными Горами. Мы не сможем выиграть эту войну в одиночку. Мы должны сражаться вместе.\"",
                "chunkedEn": "[s: Valerius] [v: stands.]\n[s: He] [v: puts] [o: his hand] [pt: on the table.]\n[o: \"Friends,\"] [s: Valerius] [v: says.]\n[s: \"The Ash Sun] [v: is] [pt: above our world.]\n[s: Shadow animals] [v: attack] [o: our villages.]\n[s: A dark door] [v: opens] [pt: under the Iron Mountains.]\n[s: We] [v: cannot win] [o: this war] [adv: alone.]\n[s: We] [v: must fight together.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Astraea puts the green Heart of the Forest on the table. Its light shines on every face. Thorin looks with respect. He puts his silver metal next to the green stone. \"My forge is ready,\" Thorin says. \"With this silver and this green light, I will make weapons. They can cut through shadow armor easily!\"",
                "ru": "Астрея кладет зеленое Сердце Леса на стол. Его свет озаряет каждое лицо. Торин смотрит с уважением. Он кладет свой серебряный металл рядом с зеленым камнем. \"Моя кузница готова,\" — говорит Торин. \"С этим серебром и этим зеленым светом я сделаю оружие. Оно сможет легко прорезать теневую броню!\"",
                "chunkedEn": "[s: Astraea] [v: puts] [o: the green Heart of the Forest] [pt: on the table.]\n[s: Its light] [v: shines] [pt: on every face.]\n[s: Thorin] [v: looks] [pt: with respect.]\n[s: He] [v: puts] [o: his silver metal] [pt: next to the green stone.]\n[s: \"My forge] [v: is ready,\"] [s: Thorin] [v: says.]\n[pt: \"With this silver and this green light,] [s: I] [v: will make] [o: weapons.]\n[s: They] [v: can cut through] [o: shadow armor] [adv: easily!\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena opens a map on the table. Her finger draws a red line through the mountain paths. \"My spies find the door to the Shadow Citadel. It is in the Black Caves. The path is narrow. Shadow guards protect it. But Zephyr and I can lead the group through the secret paths before the full moon.\"",
                "ru": "Селена открывает карту на столе. Ее палец проводит красную линию через горные тропы. \"Мои шпионы нашли дверь в Теневую Цитадель. Она находится в Черных Пещерах. Путь узок. Теневые стражи охраняют его. Но мы с Зефиром сможем провести отряд тайными тропами до полнолуния.\"",
                "chunkedEn": "[s: Selena] [v: opens] [o: a map] [pt: on the table.]\n[s: Her finger] [v: draws] [o: a red line] [pt: through the mountain paths.]\n[s: \"My spies] [v: find] [o: the door to the Shadow Citadel.]\n[s: It] [v: is] [pt: in the Black Caves.]\n[s: The path] [v: is narrow.]\n[s: Shadow guards] [v: protect] [o: it.]\n[c: But] [s: Zephyr and I] [v: can lead] [o: the group] [pt: through the secret paths] [pt: before the full moon.\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis lifts his staff high. Orange fire goes up to the ceiling. It does not burn the stone. \"Then let's start!\" Ignis says happily. \"We will burn the shadow animals. We will bring back the true sun to the sky!\" All six heroes lift their weapons together. They make a promise. They are united and brave. Part One is finished. The heroes are together now. The big fight against the shadows begins.",
                "ru": "Игнис поднимает свой посох высоко вверх. Оранжевый огонь поднимается к потолку. Он не обжигает камень. \"Тогда начнем!\" — радостно говорит Игнис. \"Мы сожжем теневых зверей. Мы вернем истинное солнце на небо!\" Все шесть героев вместе поднимают оружие. Они дают обещание. Они едины и отважны. Первая часть завершена. Теперь герои вместе. Начинается великая битва против теней.",
                "chunkedEn": "[s: Ignis] [v: lifts] [o: his staff] [adv: high.]\n[s: Orange fire] [v: goes up] [pt: to the ceiling.]\n[s: It] [v: does not burn] [o: the stone.]\n[adv: \"Then] [v: let's start!\"] [s: Ignis] [v: says happily.]\n[s: \"We] [v: will burn] [o: the shadow animals.]\n[s: We] [v: will bring back] [o: the true sun] [pt: to the sky!\"]\n[s: All six heroes] [v: lift] [o: their weapons together.]\n[s: They] [v: make] [o: a promise.]\n[s: They] [v: are united and brave.]\n[s: Part One] [v: is finished.]\n[s: The heroes] [v: are together] [adv: now.]\n[s: The big fight against the shadows] [v: begins.]"
            }
        ],
        "quiz": {
            "question": "What do the six heroes decide to do at the round table?",
            "options": [
                "Unite their forces and fight the shadow army together",
                "Return to their separate lands and lock the gates",
                "Build a big wooden ship to cross the ocean"
            ],
            "correctIndex": 0,
            "rewardXp": 282
        },
        "backgroundImg": "images/backgrounds/bg_crystal_caverns.jpg",
        "locationEn": "The Great Subterranean Forge",
        "locationRu": "Великая Подземная Кузница",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-7",
        "actId": 2,
        "number": 7,
        "titleEn": "Stolen Ore",
        "titleRu": "Украденная руда",
        "reqHeroLevels": {
            "thorin": 32,
            "valerius": 32,
            "ignis": 32
        },
        "involvedHeroes": [
            "thorin",
            "valerius",
            "ignis"
        ],
        "paragraphs": [
            {
                "speaker": "valerius",
                "en": "The sun is hot. It is in the sky above the mountain road. The road is between tall red rocks. On the ground, there is a big iron box. It is on its side. There is a fire near the box. Bags of blue crystal ore are on the sand. The blue ore is glowing.",
                "ru": "Солнце жаркое. Оно в небе над горной дорогой. Дорога проходит между высокими красными скалами. На земле лежит большой железный ящик. Он лежит на боку. Возле ящика горит огонь. Мешки с синей кристаллической рудой лежат на песке. Синяя руда светится.",
                "chunkedEn": "[s: The sun] [v: is hot.]\n[s: It] [v: is] [pt: in the sky] [pt: above the mountain road.]\n[s: The road] [v: is] [pt: between tall red rocks.]\n[pt: On the ground,] [v: there is] [s: a big iron box.]\n[s: It] [v: is] [pt: on its side.]\n[v: There is] [s: a fire] [pt: near the box.]\n[s: Bags of blue crystal ore] [v: are] [pt: on the sand.]\n[s: The blue ore] [v: is glowing.]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin runs to the fire. He is angry. His face is red. He has his iron hammer in his hand. Sparks come from the stone under his boots. He looks at the fire and says: \"This is our ore! This is our trade! Who breaks our iron box on this quiet road?\"",
                "ru": "Торин бежит к огню. Он зол. Его лицо красное. В руке у него железный молот. Искры летят от камня под его сапогами. Он смотрит на огонь и говорит: \"Это наша руда! Это наша торговля! Кто сломал наш железный ящик на этой тихой дороге?\"",
                "chunkedEn": "[s: Thorin] [v: runs] [pt: to the fire.]\n[s: He] [v: is angry.]\n[s: His face] [v: is red.]\n[s: He] [v: has] [o: his iron hammer] [pt: in his hand.]\n[s: Sparks] [v: come] [pt: from the stone] [pt: under his boots.]\n[s: He] [v: looks] [pt: at the fire] [c: and] [v: says:]\n[s: \"This] [v: is] [o: our ore!]\n[s: This] [v: is] [o: our trade!]\n[s: Who] [v: breaks] [o: our iron box] [pt: on this quiet road?\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius walks slowly to Thorin. He has his big shield in his left hand. His armor is clean and bright. His eyes are blue. He looks at Thorin. He shows his right hand. \"Thorin, do not be angry,\" Valerius says. \"We see fire from our border tower. We come to help. We do not come to fight.\"",
                "ru": "Валериус медленно подходит к Торину. В левой руке у него большой щит. Его доспехи чистые и яркие. Его глаза синие. Он смотрит на Торина. Он показывает правую руку. \"Торин, не сердись,\" — говорит Валериус. \"Мы увидели огонь с нашей пограничной башни. Мы пришли помочь. Мы не пришли сражаться.\"",
                "chunkedEn": "[s: Valerius] [v: walks slowly] [pt: to Thorin.]\n[s: He] [v: has] [o: his big shield] [pt: in his left hand.]\n[s: His armor] [v: is clean and bright.]\n[s: His eyes] [v: are blue.]\n[s: He] [v: looks] [pt: at Thorin.]\n[s: He] [v: shows] [o: his right hand.]\n[o: \"Thorin,] [v: do not be angry,\"] [s: Valerius] [v: says.]\n[s: \"We] [v: see] [o: fire] [pt: from our border tower.]\n[s: We] [v: come] [v: to help.]\n[s: We] [v: do not come] [v: to fight.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin says: \"Help? Your Realm wants our blue crystals! Your king wants magic power for his big castle! My people are in dark caves for three months. We find this blue ore. Now my box is broken. My three horses are not here. And your silver guards stand next to the road! Do not tell me tales, knight!\"",
                "ru": "Торин говорит: \"Помочь? Ваше Королевство хочет наши синие кристаллы! Ваш король хочет магическую силу для своего большого замка! Мой народ был в темных пещерах три месяца. Мы нашли эту синюю руду. Теперь мой ящик сломан. Трех моих лошадей здесь нет. А твои серебряные стражи стоят рядом с дорогой! Не рассказывай мне сказок, рыцарь!\"",
                "chunkedEn": "[s: Thorin] [v: says:]\n[o: \"Help?]\n[s: Your Realm] [v: wants] [o: our blue crystals!]\n[s: Your king] [v: wants] [o: magic power] [pt: for his big castle!]\n[s: My people] [v: are] [pt: in dark caves] [pt: for three months.]\n[s: We] [v: find] [o: this blue ore.]\n[adv: Now] [s: my box] [v: is broken.]\n[s: My three horses] [v: are not] [adv: here.]\n[c: And] [s: your silver guards] [v: stand] [pt: next to the road!]\n[v: Do not tell] [o: me] [o: tales,] [o: knight!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius does not take his sword. He looks at the ground near the fire. He takes a long black object from the sand. It is a black arrow. The arrow is from bone. The end of the arrow is purple. It smells bad, like old leaves. Valerius has the black arrow in his hand. He shows it to Thorin.",
                "ru": "Валериус не достает меч. Он смотрит на землю возле огня. Он берет из песка длинный черный предмет. Это черная стрела. Стрела сделана из кости. Наконечник стрелы фиолетовый. Он плохо пахнет, как старые листья. Валериус держит черную стрелу в руке. Он показывает ее Торину.",
                "chunkedEn": "[s: Valerius] [v: does not take] [o: his sword.]\n[s: He] [v: looks] [pt: at the ground] [pt: near the fire.]\n[s: He] [v: takes] [o: a long black object] [pt: from the sand.]\n[s: It] [v: is] [o: a black arrow.]\n[s: The arrow] [v: is] [pt: from bone.]\n[s: The end of the arrow] [v: is purple.]\n[s: It] [v: smells bad,] [pt: like old leaves.]\n[s: Valerius] [v: has] [o: the black arrow] [pt: in his hand.]\n[s: He] [v: shows] [o: it] [pt: to Thorin.]"
            },
            {
                "speaker": "valerius",
                "en": "\"Look with your eyes, Thorin,\" Valerius says quietly. \"Our guards use white arrows from wood. We do not use black bones. We never have this bad purple thing on our swords. This bad thing comes from dark animals in the East desert. Someone breaks your box. Someone leaves this arrow here. Someone wants our two groups to fight in a war.\"",
                "ru": "\"Посмотри своими глазами, Торин,\" — тихо говорит Валериус. \"Наши стражи используют белые деревянные стрелы. Мы не используем черные кости. Мы никогда не наносим эту дурную фиолетовую дрянь на наши мечи. Эта дурная вещь происходит от темных тварей в Восточной пустыне. Кто-то сломал твой ящик. Кто-то оставил эту стрелу здесь. Кто-то хочет, чтобы наши два народа сражались в войне.\"",
                "chunkedEn": "[v: \"Look] [pt: with your eyes,] [o: Thorin,\"] [s: Valerius] [v: says quietly.]\n[s: \"Our guards] [v: use] [o: white arrows from wood.]\n[s: We] [v: do not use] [o: black bones.]\n[s: We] [adv: never] [v: have] [o: this bad purple thing] [pt: on our swords.]\n[s: This bad thing] [v: comes] [pt: from dark animals in the East desert.]\n[s: Someone] [v: breaks] [o: your box.]\n[s: Someone] [v: leaves] [o: this arrow] [adv: here.]\n[s: Someone] [v: wants] [o: our two groups] [v: to fight] [pt: in a war.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin looks at the black bone arrow. He touches the purple thing with his hammer. The metal becomes black. Thorin's hammer is now on the ground. His face is not happy. \"The old legend again... You speak true words, knight. A true warrior does not use this bad thing. But where are my blue ore bags? Ten big bags are not here!\"",
                "ru": "Торин смотрит на стрелу из черной кости. Он касается фиолетовой жижи своим молотом. Металл становится черным. Молот Торина теперь лежит на земле. Его лицо невеселое. \"Снова старая легенда... Ты говоришь правдивые слова, рыцарь. Настоящий воин не использует эту гадость. Но где же мои мешки с синей рудой? Десяти больших мешков здесь нет!\"",
                "chunkedEn": "[s: Thorin] [v: looks] [pt: at the black bone arrow.]\n[s: He] [v: touches] [o: the purple thing] [pt: with his hammer.]\n[s: The metal] [v: becomes black.]\n[s: Thorin's hammer] [v: is] [adv: now] [pt: on the ground.]\n[s: His face] [v: is not happy.]\n[o: \"The old legend] [adv: again...]\n[s: You] [v: speak] [o: true words,] [o: knight.]\n[s: A true warrior] [v: does not use] [o: this bad thing.]\n[c: But] [w: where] [v: are] [s: my blue ore bags?]\n[s: Ten big bags] [v: are not] [adv: here!\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis comes from behind a big red rock. A small red fire ball dances on his wood staff. \"I see new marks in the red sand!\" Ignis says with a smile. \"The bags go to the dark caves in the North. If we follow the marks now, we find the bad people before night comes!\"",
                "ru": "Игнис выходит из-за большой красной скалы. Маленький красный огненный шар пляшет на его деревянном посохе. \"Я вижу свежие следы на красном песке!\" — с улыбкой говорит Игнис. \"Мешки унесли в темные пещеры на Севере. Если мы пойдем по следам прямо сейчас, мы найдем злодеев до наступления ночи!\"",
                "chunkedEn": "[s: Ignis] [v: comes] [pt: from behind a big red rock.]\n[s: A small red fire ball] [v: dances] [pt: on his wood staff.]\n[s: \"I] [v: see] [o: new marks] [pt: in the red sand!\"] [s: Ignis] [v: says] [pt: with a smile.]\n[s: \"The bags] [v: go] [pt: to the dark caves in the North.]\n[b: If] [s: we] [v: follow] [o: the marks] [adv: now,] [s: we] [v: find] [o: the bad people] [b: before] [s: night] [v: comes!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius smiles. He has his silver shield. \"We go now. The Realm and the Forge stand today. We find our ore. We protect our border!\"",
                "ru": "Валериус улыбается. У него его серебряный щит. \"Мы идем сейчас же. Королевство и Кузница стоят плечом к плечу сегодня. Мы найдем нашу руду. Мы защитим нашу границу!\"",
                "chunkedEn": "[s: Valerius] [v: smiles.]\n[s: He] [v: has] [o: his silver shield.]\n[s: \"We] [v: go] [adv: now.]\n[s: The Realm and the Forge] [v: stand] [pt: today.]\n[s: We] [v: find] [o: our ore.]\n[s: We] [v: protect] [o: our border!\"]"
            }
        ],
        "quiz": {
            "question": "What kind of arrow did Valerius find near the burning box?",
            "options": [
                "A black bone arrow with purple poison",
                "A white wooden arrow from the castle guards",
                "A golden arrow from the sky citadel"
            ],
            "correctIndex": 0,
            "rewardXp": 478
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "The Canyon Supply Road",
        "locationRu": "Дорога Снабжения в Каньоне",
        "campaignId": "fantasy"
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
                "speaker": "zephyr",
                "en": "The forest is quiet. Grey fog is on the hill. The trees are green and tall. The wind is cold. Zephyr is on a branch. He has a bow and an arrow. His cloak is green. He looks at the valley. He listens.",
                "ru": "Лес тихий. Серый туман лежит на холме. Деревья зеленые и высокие. Ветер холодный. Зефир сидит на ветке. У него есть лук и стрела. Его плащ зеленый. Он смотрит на долину. Он слушает.",
                "chunkedEn": "[s: The forest] [v: is quiet.]\n[s: Grey fog] [v: is] [pt: on the hill.]\n[s: The trees] [v: are green and tall.]\n[s: The wind] [v: is cold.]\n[s: Zephyr] [v: is] [pt: on a branch.]\n[s: He] [v: has] [o: a bow and an arrow.]\n[s: His cloak] [v: is green.]\n[s: He] [v: looks] [pt: at the valley.]\n[s: He] [v: listens.]"
            },
            {
                "speaker": "selene",
                "en": "Selene comes near him. She walks very quietly. She sits on the branch too. Her hair is black. Her eyes are purple. She has two daggers. She smiles. Selene says, \"Hello, Zephyr.\" Zephyr says, \"Hello, Selene. Look at the valley.\"",
                "ru": "Селена подходит к нему. Она идет очень тихо. Она тоже садится на ветку. Ее волосы черные. Ее глаза фиолетовые. У нее два кинжала. Она улыбается. Селена говорит: \"Привет, Зефир.\" Зефир говорит: \"Привет, Селена. Посмотри на долину.\"",
                "chunkedEn": "[s: Selene] [v: comes] [pt: near him.]\n[s: She] [v: walks] [adv: very quietly.]\n[s: She] [v: sits] [pt: on the branch] [adv: too.]\n[s: Her hair] [v: is black.]\n[s: Her eyes] [v: are purple.]\n[s: She] [v: has] [o: two daggers.]\n[s: She] [v: smiles.]\n[s: Selene] [v: says,] [o: \"Hello, Zephyr.\"]\n[s: Zephyr] [v: says,] [o: \"Hello, Selene.] [v: Look] [pt: at the valley.\"]"
            },
            {
                "speaker": "zephyr",
                "en": "They look down. Zephyr sees people near a bridge. They are merchants. They go to the market at the border. The merchants walk slowly. They talk. One merchant stops. He drinks water from a bottle. Another merchant carries a big bag.",
                "ru": "Они смотрят вниз. Зефир видит людей возле моста. Это торговцы. Они идут на рынок на границе. Торговцы идут медленно. Они разговаривают. Один торговец останавливается. Он пьет воду из бутылки. Другой торговец несет большую сумку.",
                "chunkedEn": "[s: They] [v: look down.]\n[s: Zephyr] [v: sees] [o: people] [pt: near a bridge.]\n[s: They] [v: are] [o: merchants.]\n[s: They] [v: go] [pt: to the market] [pt: at the border.]\n[s: The merchants] [v: walk slowly.]\n[s: They] [v: talk.]\n[s: One merchant] [v: stops.]\n[s: He] [v: drinks] [o: water] [pt: from a bottle.]\n[s: Another merchant] [v: carries] [o: a big bag.]"
            },
            {
                "speaker": "selene",
                "en": "Zephyr looks again. He sees wolves near the road. The wolves walk in the bushes. They wait near the merchants. Selene says, \"The wolves want to fight the merchants. This is bad.\"",
                "ru": "Зефир смотрит снова. Он видит волков возле дороги. Волки ходят в кустах. Они ждут возле торговцев. Селена говорит: \"Волки хотят напасть на торговцев. Это плохо.\"",
                "chunkedEn": "[s: Zephyr] [v: looks] [adv: again.]\n[s: He] [v: sees] [o: wolves] [pt: near the road.]\n[s: The wolves] [v: walk] [pt: in the bushes.]\n[s: They] [v: wait] [pt: near the merchants.]\n[s: Selene] [v: says,] [o: \"The wolves] [v: want to fight] [o: the merchants.]\n[s: This] [v: is bad.\"]"
            },
            {
                "speaker": "zephyr",
                "en": "Zephyr stands up. He takes his bow. He takes an arrow. Selene stands up too. She takes her daggers in her hands. Zephyr says, \"I am a warrior. I protect people in the forest. Are you ready to help me?\" Selene says, \"Yes. I am ready.\"",
                "ru": "Зефир встает. Он берет свой лук. Он берет стрелу. Селена тоже встает. Она берет свои кинжалы в руки. Зефир говорит: \"Я воин. Я защищаю людей в лесу. Ты готова помочь мне?\" Селена говорит: \"Да. Я готова.\"",
                "chunkedEn": "[s: Zephyr] [v: stands up.]\n[s: He] [v: takes] [o: his bow.]\n[s: He] [v: takes] [o: an arrow.]\n[s: Selene] [v: stands up] [adv: too.]\n[s: She] [v: takes] [o: her daggers] [pt: in her hands.]\n[s: Zephyr] [v: says,] [o: \"I] [v: am] [o: a warrior.]\n[s: I] [v: protect] [o: people] [pt: in the forest.]\n[v: Are] [s: you] [v: ready to help] [o: me?\"]\n[s: Selene] [v: says,] [o: \"Yes.] [s: I] [v: am ready.\"]"
            },
            {
                "speaker": "selene",
                "en": "Zephyr looks at Selene. Selene looks at Zephyr. They smile. Selene says, \"We are a good team.\" Zephyr and Selene walk down the hill. They go to the valley. They want to help the merchants. Zephyr holds his bow. Selene holds her daggers. They are brave. They do not stop. They do not wait. They come near the road. The merchants see them. The merchants stop. The wolves see them too. Zephyr and Selene stand together. They are ready to fight.",
                "ru": "Зефир смотрит на Селену. Селена смотрит на Зефира. Они улыбаются. Селена говорит: \"Мы хорошая команда.\" Зефир и Селена спускаются с холма. Они идут в долину. Они хотят помочь торговцам. Зефир держит свой лук. Селена держит свои кинжалы. Они храбрые. Они не останавливаются. Они не ждут. Они подходят к дороге. Торговцы видят их. Торговцы останавливаются. Волки тоже видят их. Зефир и Селена стоят вместе. Они готовы к бою.",
                "chunkedEn": "[s: Zephyr] [v: looks] [pt: at Selene.]\n[s: Selene] [v: looks] [pt: at Zephyr.]\n[s: They] [v: smile.]\n[s: Selene] [v: says,] [o: \"We] [v: are] [o: a good team.\"]\n[s: Zephyr and Selene] [v: walk down] [o: the hill.]\n[s: They] [v: go] [pt: to the valley.]\n[s: They] [v: want to help] [o: the merchants.]\n[s: Zephyr] [v: holds] [o: his bow.]\n[s: Selene] [v: holds] [o: her daggers.]\n[s: They] [v: are brave.]\n[s: They] [v: do not stop.]\n[s: They] [v: do not wait.]\n[s: They] [v: come] [pt: near the road.]\n[s: The merchants] [v: see] [o: them.]\n[s: The merchants] [v: stop.]\n[s: The wolves] [v: see] [o: them] [adv: too.]\n[s: Zephyr and Selene] [v: stand together.]\n[s: They] [v: are ready to fight.]"
            }
        ],
        "quiz": {
            "question": "Why do Zephyr and Selene walk down the hill to the road?",
            "options": [
                "To protect the merchants from the wolves",
                "To buy water and bags at the market",
                "To hunt birds in the foggy forest"
            ],
            "correctIndex": 0,
            "rewardXp": 299
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "The Misty Hills & Pine Forest Valley",
        "locationRu": "Туманные Холмы и Долина Соснового Леса",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-9",
        "actId": 2,
        "number": 9,
        "titleEn": "Poisoned Water",
        "titleRu": "Отравленная вода",
        "reqHeroLevels": {
            "astraea": 36,
            "oberon": 36
        },
        "involvedHeroes": [
            "astraea",
            "oberon"
        ],
        "paragraphs": [
            {
                "speaker": "oberon",
                "en": "In a big forest, there was an old river. Long ago, fresh water came from the mountain. The water was clean and good. Green trees grew near the river. Blue and pink flowers grew in the grass. Every day, animals came to drink water. Deer, birds, and foxes were happy near the river. But today, the river was sick.",
                "ru": "В большом лесу была старая река. Давным-давно свежая вода текла с горы. Вода была чистой и хорошей. Зеленые деревья росли возле реки. Синие и розовые цветы росли в траве. Каждый день животные приходили пить воду. Олени, птицы и лисы были счастливы возле реки. Но сегодня река была больна.",
                "chunkedEn": "[pt: In a big forest,] [v: there was] [s: an old river.]\n[pt: Long ago,] [s: fresh water] [v: came] [pt: from the mountain.]\n[s: The water] [v: was clean and good.]\n[s: Green trees] [v: grew] [pt: near the river.]\n[s: Blue and pink flowers] [v: grew] [pt: in the grass.]\n[pt: Every day,] [s: animals] [v: came to drink] [o: water.]\n[s: Deer, birds, and foxes] [v: were happy] [pt: near the river.]\n[c: But] [pt: today,] [s: the river] [v: was sick.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon was an old Arch-Druid. He had long grey hair. He had a green coat with leaves. He had a big staff. He stood near the river. He was not happy, because the river was sick. The water was not blue now. The water was black and grey. The water had a bad smell. \"This is bad,\" Oberon said. \"Dark coal comes from the mountain in the water. If this bad water goes in the big river, all the plants will die. The trees will lose their leaves before autumn comes.\"",
                "ru": "Оберон был старым Верховным Друидом. У него были длинные седые волосы. У него было зеленое пальто с листьями. У него был большой посох. Он стоял возле реки. Он не был счастлив, потому что река была больна. Вода теперь не была синей. Вода была черной и серой. У воды был дурной запах. \"Это плохо,\" — сказал Оберон. \"Темный уголь попадает с горы в воду. Если эта плохая вода попадет в большую реку, все растения погибнут. Деревья потеряют листья до прихода осени.\"",
                "chunkedEn": "[s: Oberon] [v: was] [o: an old Arch-Druid.]\n[s: He] [v: had] [o: long grey hair.]\n[s: He] [v: had] [o: a green coat with leaves.]\n[s: He] [v: had] [o: a big staff.]\n[s: He] [v: stood] [pt: near the river.]\n[s: He] [v: was not happy,] [b: because] [s: the river] [v: was sick.]\n[s: The water] [v: was not blue] [adv: now.]\n[s: The water] [v: was black and grey.]\n[s: The water] [v: had] [o: a bad smell.]\n[s: \"This] [v: is bad,\"] [s: Oberon] [v: said.]\n[s: \"Dark coal] [v: comes] [pt: from the mountain] [pt: in the water.]\n[b: If] [s: this bad water] [v: goes] [pt: in the big river,] [s: all the plants] [v: will die.]\n[s: The trees] [v: will lose] [o: their leaves] [b: before] [s: autumn] [v: comes.\"]"
            },
            {
                "speaker": "astraea",
                "en": "Then, a woman came to the forest. Her name was Astraea. She had a white dress. She had a small silver bowl with bright light in it. She walked to Oberon. She stood near the black water. She had her hands above the water. \"Do not be afraid, Oberon,\" Astraea said. \"I have light. You have nature. We can help this river now.\"",
                "ru": "Затем в лес пришла женщина. Ее звали Астрея. На ней было белое платье. У нее была маленькая серебряная чаша с ярким светом внутри. Она подошла к Оберону. Она встала возле черной воды. Она держала руки над водой. \"Не бойся, Оберон,\" — сказала Астрея. \"У меня есть свет. У тебя есть природа. Мы можем помочь этой реке прямо сейчас.\"",
                "chunkedEn": "[adv: Then,] [s: a woman] [v: came] [pt: to the forest.]\n[s: Her name] [v: was] [o: Astraea.]\n[s: She] [v: had] [o: a white dress.]\n[s: She] [v: had] [o: a small silver bowl with bright light in it.]\n[s: She] [v: walked] [pt: to Oberon.]\n[s: She] [v: stood] [pt: near the black water.]\n[s: She] [v: had] [o: her hands] [pt: above the water.]\n[v: \"Do not be afraid,] [o: Oberon,\"] [s: Astraea] [v: said.]\n[s: \"I] [v: have] [o: light.]\n[s: You] [v: have] [o: nature.]\n[s: We] [v: can help] [o: this river] [adv: now.\"]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon's staff had green roots. The roots grew in the black water. Green light came from the roots. At the same time, Astraea used the light from her bowl. She wanted to heal the river. Yellow and green light came from the sky to the water.",
                "ru": "У посоха Оберона были зеленые корни. Корни росли в черной воде. Зеленый свет исходил от корней. В то же время Астрея использовала свет из своей чаши. Она хотела исцелить реку. Желтый и зеленый свет спустился с неба в воду.",
                "chunkedEn": "[s: Oberon's staff] [v: had] [o: green roots.]\n[s: The roots] [v: grew] [pt: in the black water.]\n[s: Green light] [v: came] [pt: from the roots.]\n[pt: At the same time,] [s: Astraea] [v: used] [o: the light from her bowl.]\n[s: She] [v: wanted to heal] [o: the river.]\n[s: Yellow and green light] [v: came] [pt: from the sky] [pt: to the water.]"
            },
            {
                "speaker": "astraea",
                "en": "Slowly, the black water became clean again. The water was blue! The flowers near the river opened again. A small white bird came and drank the clean water. It sang a happy song. A brown deer came too, and drank water near the bird. A fish began to swim in the clean water again.",
                "ru": "Медленно черная вода снова стала чистой. Вода стала синей! Цветы возле реки снова раскрылись. Маленькая белая птица прилетела и попила чистой воды. Она спела счастливую песню. Коричневый олень тоже пришел и попил воды рядом с птицей. Рыба снова начала плавать в чистой воде.",
                "chunkedEn": "[adv: Slowly,] [s: the black water] [v: became clean] [adv: again.]\n[s: The water] [v: was blue!]\n[s: The flowers near the river] [v: opened] [adv: again.]\n[s: A small white bird] [v: came] [c: and] [v: drank] [o: the clean water.]\n[s: It] [v: sang] [o: a happy song.]\n[s: A brown deer] [v: came] [adv: too,] [c: and] [v: drank] [o: water] [pt: near the bird.]\n[s: A fish] [v: began to swim] [pt: in the clean water] [adv: again.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon smiled. He said, \"Thank you, Astraea. You have a good heart. People from the town and people from the forest need to help each other. A big storm will come soon. But we are strong. We can protect our forest and our world.\"",
                "ru": "Оберон улыбнулся. Он сказал: \"Спасибо, Астрея. У тебя доброе сердце. Людям из города и людям из леса нужно помогать друг другу. Скоро придет большая буря. Но мы сильны. Мы сможем защитить наш лес и наш мир.\"",
                "chunkedEn": "[s: Oberon] [v: smiled.]\n[s: He] [v: said,] [o: \"Thank you, Astraea.]\n[s: You] [v: have] [o: a good heart.]\n[s: People from the town and people from the forest] [v: need to help] [o: each other.]\n[s: A big storm] [v: will come] [adv: soon.]\n[c: But] [s: we] [v: are strong.]\n[s: We] [v: can protect] [o: our forest and our world.\"]"
            },
            {
                "speaker": "astraea",
                "en": "Astraea smiled too. \"Yes,\" she said. \"Nature and light are friends. Every animal, every tree, and every person can live in peace.\" The sun came out. The forest was bright and warm again. Fish, deer, birds, and rabbits came back to the river. Birds began to fly and sing in the trees. Two small rabbits began to run and play in the grass. The river was fine again, today.",
                "ru": "Астрея тоже улыбнулась. \"Да,\" — сказала она. \"Природа и свет — друзья. Каждое животное, каждое дерево и каждый человек могут жить в мире.\" Выглянуло солнце. Лес снова стал светлым и теплым. Рыбы, олени, птицы и кролики вернулись к реке. Птицы начали летать и петь на деревьях. Два маленьких кролика начали бегать и играть в траве. Сегодня с рекой снова все было хорошо.",
                "chunkedEn": "[s: Astraea] [v: smiled] [adv: too.]\n[o: \"Yes,\"] [s: she] [v: said.]\n[s: \"Nature and light] [v: are] [o: friends.]\n[s: Every animal, every tree, and every person] [v: can live] [pt: in peace.\"]\n[s: The sun] [v: came out.]\n[s: The forest] [v: was bright and warm] [adv: again.]\n[s: Fish, deer, birds, and rabbits] [v: came back] [pt: to the river.]\n[s: Birds] [v: began to fly and sing] [pt: in the trees.]\n[s: Two small rabbits] [v: began to run and play] [pt: in the grass.]\n[s: The river] [v: was fine] [adv: again,] [pt: today.]"
            }
        ],
        "quiz": {
            "question": "How did Astraea and Oberon heal the sick river?",
            "options": [
                "By combining forest roots and healing light",
                "By building a big stone dam across the river",
                "By calling the rain cloud with a thunder horn"
            ],
            "correctIndex": 0,
            "rewardXp": 439
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "The Emerald Spring & Ancient Oak Grove",
        "locationRu": "Изумрудный Источник и Древняя Дубовая Роща",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-10",
        "actId": 2,
        "number": 10,
        "titleEn": "The Frozen Bridge",
        "titleRu": "Замерзший мост",
        "reqHeroLevels": {
            "frostina": 38,
            "freya": 38
        },
        "involvedHeroes": [
            "frostina",
            "freya"
        ],
        "paragraphs": [
            {
                "speaker": "freya",
                "en": "It is cold in the mountains. The wind is strong. There is snow everywhere. There is a big valley between two peaks. Black rocks are far below. An old stone bridge is above the valley. It is the road to the north. But today big rocks fall on the bridge. Now there is no bridge in the center. The two peaks have no road.",
                "ru": "В горах холодно. Ветер сильный. Везде снег. Между двумя пиками лежит большая долина. Черные скалы находятся далеко внизу. Старый каменный мост проходит над долиной. Это дорога на север. Но сегодня большие камни упали на мост. Теперь посередине нет моста. У двух пиков нет дороги.",
                "chunkedEn": "[s: It] [v: is cold] [pt: in the mountains.]\n[s: The wind] [v: is strong.]\n[v: There is] [s: snow] [adv: everywhere.]\n[v: There is] [s: a big valley] [pt: between two peaks.]\n[s: Black rocks] [v: are] [adv: far below.]\n[s: An old stone bridge] [v: is] [pt: above the valley.]\n[s: It] [v: is] [o: the road] [pt: to the north.]\n[c: But] [pt: today] [s: big rocks] [v: fall] [pt: on the bridge.]\n[adv: Now] [v: there is] [s: no bridge] [pt: in the center.]\n[s: The two peaks] [v: have] [o: no road.]"
            },
            {
                "speaker": "freya",
                "en": "Freya is on the south peak. She is a Valkyrie. She has steel armor and gold wings. She has a long spear in her hand. The spear has blue sparks. Her hair is blonde and long. She looks at the valley. The wind is cold, but Freya is strong. Behind her, a crowd of people stands near a rock wall. They are from the villages near the border. They are cold and afraid. A mother has a baby. A boy has a small cat. A girl has a bag. The children are near their parents. A woman gives a coat to the boy.",
                "ru": "Фрейя находится на южном пике. Она Валькирия. У нее стальные доспехи и золотые крылья. В руке у нее длинное копье. У копья синие искры. Ее волосы светлые и длинные. Она смотрит на долину. Ветер холодный, но Фрейя сильна. Позади нее толпа людей стоит возле каменной стены. Они из деревень возле границы. Им холодно и страшно. У матери есть младенец. У мальчика есть маленькая кошка. У девочки есть сумка. Дети рядом со своими родителями. Женщина дает пальто мальчику.",
                "chunkedEn": "[s: Freya] [v: is] [pt: on the south peak.]\n[s: She] [v: is] [o: a Valkyrie.]\n[s: She] [v: has] [o: steel armor and gold wings.]\n[s: She] [v: has] [o: a long spear] [pt: in her hand.]\n[s: The spear] [v: has] [o: blue sparks.]\n[s: Her hair] [v: is blonde and long.]\n[s: She] [v: looks] [pt: at the valley.]\n[s: The wind] [v: is cold,] [c: but] [s: Freya] [v: is strong.]\n[pt: Behind her,] [s: a crowd of people] [v: stands] [pt: near a rock wall.]\n[s: They] [v: are] [pt: from the villages near the border.]\n[s: They] [v: are cold and afraid.]\n[s: A mother] [v: has] [o: a baby.]\n[s: A boy] [v: has] [o: a small cat.]\n[s: A girl] [v: has] [o: a bag.]\n[s: The children] [v: are] [pt: near their parents.]\n[s: A woman] [v: gives] [o: a coat] [pt: to the boy.]"
            },
            {
                "speaker": "freya",
                "en": "Freya listens. She hears the wolves. \"We can't wait here!\" Freya says. \"The dark warriors come to the mountain. They have swords and big wolves. We need to cross the valley now. But there is no bridge! Frostina, please help!\"",
                "ru": "Фрейя прислушивается. Она слышит волков. \"Мы не можем ждать здесь!\" — говорит Фрейя. \"Темные воины идут к горе. У них мечи и большие волки. Нам нужно перейти долину прямо сейчас. Но моста нет! Фростина, пожалуйста, помоги!\"",
                "chunkedEn": "[s: Freya] [v: listens.]\n[s: She] [v: hears] [o: the wolves.]\n[s: \"We] [v: can't wait] [adv: here!\"] [s: Freya] [v: says.]\n[s: \"The dark warriors] [v: come] [pt: to the mountain.]\n[s: They] [v: have] [o: swords and big wolves.]\n[s: We] [v: need to cross] [o: the valley] [adv: now.]\n[c: But] [v: there is] [s: no bridge!]\n[o: Frostina,] [adv: please] [v: help!\"]"
            },
            {
                "speaker": "frostina",
                "en": "Frostina is next to Freya. She is quiet. She has ice magic. She has a white cloak and a blue dress. Her hair is dark. She goes to the end of the bridge. She looks at the empty center. The way is long. For her, the cold is nothing. \"Freya, please go back,\" Frostina says. \"Your spear can't make a bridge. But my ice is strong. It is hard like iron. I make a path of ice. Please guard the people.\" Freya says, \"Yes! I am here.\" She stands near the people with her spear.",
                "ru": "Фростина рядом с Фрейей. Она спокойна. У нее магия льда. На ней белый плащ и синее платье. Ее волосы темные. Она подходит к краю моста. Она смотрит на пустой центр. Путь длинный. Для нее холод — ничто. \"Фрейя, пожалуйста, отойди назад,\" — говорит Фростина. \"Твое копье не может сделать мост. Но мой лед силен. Он тверд, как железо. Я сделаю путь изо льда. Пожалуйста, охраняй людей.\" Фрейя говорит: \"Да! Я здесь.\" Она стоит возле людей со своим копьем.",
                "chunkedEn": "[s: Frostina] [v: is] [pt: next to Freya.]\n[s: She] [v: is quiet.]\n[s: She] [v: has] [o: ice magic.]\n[s: She] [v: has] [o: a white cloak and a blue dress.]\n[s: Her hair] [v: is dark.]\n[s: She] [v: goes] [pt: to the end of the bridge.]\n[s: She] [v: looks] [pt: at the empty center.]\n[s: The way] [v: is long.]\n[pt: For her,] [s: the cold] [v: is nothing.]\n[o: \"Freya,] [adv: please] [v: go back,\"] [s: Frostina] [v: says.]\n[s: \"Your spear] [v: can't make] [o: a bridge.]\n[c: But] [s: my ice] [v: is strong.]\n[s: It] [v: is hard] [pt: like iron.]\n[s: I] [v: make] [o: a path of ice.]\n[adv: Please] [v: guard] [o: the people.\"]\n[s: Freya] [v: says,] [o: \"Yes!]\n[s: I] [v: am] [adv: here.\"]\n[s: She] [v: stands] [pt: near the people] [pt: with her spear.]"
            },
            {
                "speaker": "frostina",
                "en": "Frostina closes her eyes. She waits. The wind is strong, but she is quiet. Then she opens her hands. White frost comes from her fingers. Cold blue air goes across the valley. The air becomes ice. The ice grows from one peak to the other. Now there is a new bridge. It is bright and shining like a diamond.",
                "ru": "Фростина закрывает глаза. Она ждет. Ветер сильный, но она спокойна. Затем она раскрывает ладони. Белый мороз исходит из ее пальцев. Холодный синий воздух летит через долину. Воздух становится льдом. Лед растет от одного пика к другому. Теперь есть новый мост. Он яркий и сияет, как алмаз.",
                "chunkedEn": "[s: Frostina] [v: closes] [o: her eyes.]\n[s: She] [v: waits.]\n[s: The wind] [v: is strong,] [c: but] [s: she] [v: is quiet.]\n[adv: Then] [s: she] [v: opens] [o: her hands.]\n[s: White frost] [v: comes] [pt: from her fingers.]\n[s: Cold blue air] [v: goes] [pt: across the valley.]\n[s: The air] [v: becomes] [o: ice.]\n[s: The ice] [v: grows] [pt: from one peak to the other.]\n[adv: Now] [v: there is] [s: a new bridge.]\n[s: It] [v: is bright and shining] [pt: like a diamond.]"
            },
            {
                "speaker": "freya",
                "en": "Freya touches the bridge with her spear. The ice is hard. It is strong like iron. Freya smiles. \"Great magic, Frostina! Amazing!\" she says. \"Everyone, cross the bridge now! Walk fast! Look at me!\" The people run to the bridge. The children go first. The mother walks with her baby. The boy walks with his cat. The girl walks with her bag. One by one, they cross the ice bridge. They go to the north peak. The north temple is there.",
                "ru": "Фрейя касается моста копьем. Лед твердый. Он крепкий, как железо. Фрейя улыбается. \"Отличная магия, Фростина! Потрясающе!\" — говорит она. \"Все, переходите мост прямо сейчас! Идите быстро! Смотрите на меня!\" Люди бегут к мосту. Дети идут первыми. Мать идет со своим ребенком. Мальчик идет со своей кошкой. Девочка идет со своей сумкой. Один за другим они переходят ледяной мост. Они идут к северному пику. Там находится северный храм.",
                "chunkedEn": "[s: Freya] [v: touches] [o: the bridge] [pt: with her spear.]\n[s: The ice] [v: is hard.]\n[s: It] [v: is strong] [pt: like iron.]\n[s: Freya] [v: smiles.]\n[o: \"Great magic,] [o: Frostina!]\n[o: Amazing!\"] [s: she] [v: says.]\n[o: \"Everyone,] [v: cross] [o: the bridge] [adv: now!]\n[v: Walk fast!]\n[v: Look] [pt: at me!\"]\n[s: The people] [v: run] [pt: to the bridge.]\n[s: The children] [v: go] [adv: first.]\n[s: The mother] [v: walks] [pt: with her baby.]\n[s: The boy] [v: walks] [pt: with his cat.]\n[s: The girl] [v: walks] [pt: with her bag.]\n[adv: One by one,] [s: they] [v: cross] [o: the ice bridge.]\n[s: They] [v: go] [pt: to the north peak.]\n[s: The north temple] [v: is] [adv: there.]"
            },
            {
                "speaker": "frostina",
                "en": "The last child is on the north peak. Now the dark warriors come. They are on the south road. They are angry. The wolves run fast. Freya calls the blue thunder. It comes from the sky. Frostina breaks the ice bridge. The ice falls to the rocks below. The dark warriors stop. They look across the valley. They can't cross. There is no road. Freya and Frostina smile. The people say, \"Thank you!\" They are happy.",
                "ru": "Последний ребенок уже на северном пике. Теперь приходят темные воины. Они на южной дороге. Они в ярости. Волки бегут быстро. Фрейя призывает синий гром. Он нисходит с неба. Фростина разрушает ледяной мост. Лед падает на скалы внизу. Темные воины останавливаются. Они смотрят через долину. Они не могут перейти. Дороги нет. Фрейя и Фростина улыбаются. Люди говорят: \"Спасибо!\" Они счастливы.",
                "chunkedEn": "[s: The last child] [v: is] [pt: on the north peak.]\n[adv: Now] [s: the dark warriors] [v: come.]\n[s: They] [v: are] [pt: on the south road.]\n[s: They] [v: are angry.]\n[s: The wolves] [v: run fast.]\n[s: Freya] [v: calls] [o: the blue thunder.]\n[s: It] [v: comes] [pt: from the sky.]\n[s: Frostina] [v: breaks] [o: the ice bridge.]\n[s: The ice] [v: falls] [pt: to the rocks below.]\n[s: The dark warriors] [v: stop.]\n[s: They] [v: look] [pt: across the valley.]\n[s: They] [v: can't cross.]\n[v: There is] [s: no road.]\n[s: Freya and Frostina] [v: smile.]\n[s: The people] [v: say,] [o: \"Thank you!\"]\n[s: They] [v: are happy.]"
            }
        ],
        "quiz": {
            "question": "How did the villagers safely cross to the north peak?",
            "options": [
                "Frostina created a strong shining bridge of ice",
                "Freya flew every villager across on her golden wings",
                "Thorin built an iron tunnel under the mountain"
            ],
            "correctIndex": 0,
            "rewardXp": 518
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "The Northern Ice Gorge & Chasm Bridge",
        "locationRu": "Северное Ледяное Ущелье и Мост над Бездной",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-11",
        "actId": 2,
        "number": 11,
        "titleEn": "The Secret Quarry",
        "titleRu": "Тайный карьер",
        "involvedHeroes": [
            "thorin",
            "selene"
        ],
        "paragraphs": [
            {
                "speaker": "thorin",
                "en": "Far in the south, near the hills, there is an old stone mine. Big grey stones are everywhere. Old iron tools are near the tall walls. Nobody lives here now. Nobody comes here. But in the night, bright yellow lamps are in the mine. Men are there!",
                "ru": "Далеко на юге, возле холмов, есть старая каменная шахта. Большие серые камни лежат повсюду. Старые железные инструменты лежат возле высоких стен. Никто не живет здесь сейчас. Никто не приходит сюда. Но ночью яркие желтые лампы горят в шахте. Там люди!",
                "chunkedEn": "[adv: Far in the south,] [pt: near the hills,] [v: there is] [s: an old stone mine.]\n[s: Big grey stones] [v: are] [adv: everywhere.]\n[s: Old iron tools] [v: are] [pt: near the tall walls.]\n[s: Nobody] [v: lives] [adv: here] [adv: now.]\n[s: Nobody] [v: comes] [adv: here.]\n[c: But] [pt: in the night,] [s: bright yellow lamps] [v: are] [pt: in the mine.]\n[s: Men] [v: are] [adv: there!]"
            },
            {
                "speaker": "selene",
                "en": "Thorin and Selene are at the top of the mine. They hide behind a big stone. Thorin has his hammer in his hand. He is strong and he is angry. Selene is quiet like a black cat. She looks at the men under them. Her eyes are cold. Thorin looks and listens. Selene looks and listens too. \"Look, Thorin,\" Selene says in a quiet voice. \"These men are bad. Their armor is black and their shields are red. They are the men of the dark guild. Look at the bags in their hands. The bags are blue.\"",
                "ru": "Торин и Селена на вершине шахты. Они прячутся за большим камнем. В руке у Торина молот. Он силен и зол. Селена тихая, как черная кошка. Она смотрит на людей под ними. Ее глаза холодны. Торин смотрит и слушает. Селена тоже смотрит и слушает. \"Посмотри, Торин,\" — говорит Селена тихим голосом. \"Эти люди злые. Их доспехи черные, а щиты красные. Они люди из темной гильдии. Посмотри на мешки в их руках. Мешки синие.\"",
                "chunkedEn": "[s: Thorin and Selene] [v: are] [pt: at the top of the mine.]\n[s: They] [v: hide] [pt: behind a big stone.]\n[s: Thorin] [v: has] [o: his hammer] [pt: in his hand.]\n[s: He] [v: is strong] [c: and] [s: he] [v: is angry.]\n[s: Selene] [v: is quiet] [pt: like a black cat.]\n[s: She] [v: looks] [pt: at the men under them.]\n[s: Her eyes] [v: are cold.]\n[s: Thorin] [v: looks and listens.]\n[s: Selene] [v: looks and listens] [adv: too.]\n[o: \"Look, Thorin,\"] [s: Selene] [v: says] [pt: in a quiet voice.]\n[s: \"These men] [v: are bad.]\n[s: Their armor] [v: is black] [c: and] [s: their shields] [v: are red.]\n[s: They] [v: are] [o: the men of the dark guild.]\n[v: Look] [pt: at the bags in their hands.]\n[s: The bags] [v: are blue.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin looks. His eyes are big. \"By the forge!\" he says. \"Those are my blue crystals! They take them from my people! Now they write black spells on my crystals! They want the blue magic. They want to make war on our city!\"",
                "ru": "Торин смотрит. Его глаза велики. \"Клянусь кузницей!\" — говорит он. \"Это мои синие кристаллы! Они забрали их у моего народа! Теперь они пишут черные заклинания на моих кристаллах! Они хотят синюю магию. Они хотят пойти войной на наш город!\"",
                "chunkedEn": "[s: Thorin] [v: looks.]\n[s: His eyes] [v: are big.]\n[o: \"By the forge!\"] [s: he] [v: says.]\n[s: \"Those] [v: are] [o: my blue crystals!]\n[s: They] [v: take] [o: them] [pt: from my people!]\n[adv: Now] [s: they] [v: write] [o: black spells] [pt: on my crystals!]\n[s: They] [v: want] [o: the blue magic.]\n[s: They] [v: want to make war] [pt: on our city!\"]"
            },
            {
                "speaker": "selene",
                "en": "\"Be quiet, smith,\" Selene says. \"Never be angry now. Ten men are there. A big dark man with a bow is also there. He has black arrows. Never run to them! They see you and you cannot win. You are strong, but they are ten.\"",
                "ru": "\"Потише, кузнец,\" — говорит Селена. \"Не сердись сейчас. Там десять человек. Большой темный человек с луком тоже там. У него черные стрелы. Не беги к ним! Они увидят тебя, и ты не сможешь победить. Ты силен, но их десять.\"",
                "chunkedEn": "[v: \"Be quiet,] [o: smith,\"] [s: Selene] [v: says.]\n[adv: \"Never] [v: be angry] [adv: now.]\n[s: Ten men] [v: are] [adv: there.]\n[s: A big dark man with a bow] [v: is] [adv: also there.]\n[s: He] [v: has] [o: black arrows.]\n[adv: Never] [v: run] [pt: to them!]\n[s: They] [v: see] [o: you] [c: and] [s: you] [v: cannot win.]\n[s: You] [v: are strong,] [c: but] [s: they] [v: are ten.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin is silent. He thinks. Now he smiles a little. \"Fine, shadow stalker,\" he says. \"What is your plan? I break things. You go in the dark. Tell me where to go.\"",
                "ru": "Торин молчит. Он думает. Теперь он слегка улыбается. \"Ладно, теневая охотница,\" — говорит он. \"Каков твой план? Я ломаю вещи. Ты ходишь во тьме. Скажи мне, куда идти.\"",
                "chunkedEn": "[s: Thorin] [v: is silent.]\n[s: He] [v: thinks.]\n[adv: Now] [s: he] [v: smiles a little.]\n[o: \"Fine, shadow stalker,\"] [s: he] [v: says.]\n[w: \"What] [v: is] [s: your plan?]\n[s: I] [v: break] [o: things.]\n[s: You] [v: go] [pt: in the dark.]\n[v: Tell] [o: me] [w: where] [v: to go.\"]"
            },
            {
                "speaker": "selene",
                "en": "Selene takes her dagger. \"Look at the lamp tower,\" she says. \"I go behind the men. I break the lamps. It is dark and the men are afraid. Now you use your hammer and break the big iron tower. Big stones come and close the door of the mine. The men cannot leave.\" \"Yes,\" Thorin says. \"I am ready.\" Selene looks at Thorin. \"Wait here,\" she says. \"Wait for the dark.\"",
                "ru": "Селена берет свой кинжал. \"Посмотри на башню с лампами,\" — говорит она. \"Я зайду за спины людей. Я разобью лампы. Станет темно, и люди испугаются. Тогда ты используешь свой молот и разобьешь большую железную башню. Большие камни упадут и закроют дверь шахты. Люди не смогут уйти.\" \"Да,\" — говорит Торин. \"Я готов.\" Селена смотрит на Торина. \"Жди здесь,\" — говорит она. \"Жди темноты.\"",
                "chunkedEn": "[s: Selene] [v: takes] [o: her dagger.]\n[v: \"Look] [pt: at the lamp tower,\"] [s: she] [v: says.]\n[s: \"I] [v: go] [pt: behind the men.]\n[s: I] [v: break] [o: the lamps.]\n[s: It] [v: is dark] [c: and] [s: the men] [v: are afraid.]\n[adv: Now] [s: you] [v: use] [o: your hammer] [c: and] [v: break] [o: the big iron tower.]\n[s: Big stones] [v: come] [c: and] [v: close] [o: the door of the mine.]\n[s: The men] [v: cannot leave.\"]\n[o: \"Yes,\"] [s: Thorin] [v: says.]\n[s: \"I] [v: am ready.\"]\n[s: Selene] [v: looks] [pt: at Thorin.]\n[v: \"Wait] [adv: here,\"] [s: she] [v: says.]\n[v: \"Wait] [pt: for the dark.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Selene goes. She is fast and silent. She goes behind the men. Thorin waits. He says, \"One, two, three.\" Now it is dark! \"What is it?\" the men say. \"Where is the light?\" They talk and run here and there. Thorin jumps. \"For my people!\" he says with a big voice. He uses his hammer and breaks the iron tower. Big stones come and close the door of the mine. The men cannot leave!",
                "ru": "Селена уходит. Она быстра и бесшумна. Она заходит за спины людей. Торин ждет. Он говорит: \"Один, два, три.\" Теперь темно! \"Что это?\" — говорят люди. \"Где свет?\" Они кричат и бегают туда-сюда. Торин прыгает. \"За мой народ!\" — кричит он громким голосом. Он пускает в ход свой молот и разбивает железную башню. Большие камни падают и закрывают дверь шахты. Люди не могут уйти!",
                "chunkedEn": "[s: Selene] [v: goes.]\n[s: She] [v: is fast and silent.]\n[s: She] [v: goes] [pt: behind the men.]\n[s: Thorin] [v: waits.]\n[s: He] [v: says,] [o: \"One, two, three.\"]\n[adv: Now] [s: it] [v: is dark!]\n[w: \"What] [v: is] [s: it?\"] [s: the men] [v: say.]\n[w: \"Where] [v: is] [s: the light?\"]\n[s: They] [v: talk and run] [adv: here and there.]\n[s: Thorin] [v: jumps.]\n[o: \"For my people!\"] [s: he] [v: says] [pt: with a big voice.]\n[s: He] [v: uses] [o: his hammer] [c: and] [v: breaks] [o: the iron tower.]\n[s: Big stones] [v: come] [c: and] [v: close] [o: the door of the mine.]\n[s: The men] [v: cannot leave!]"
            },
            {
                "speaker": "selene",
                "en": "Thorin and Selene fight the men. Thorin is strong. Selene is fast. The men are afraid and weak in the dark. They lose. The big dark man with the bow also loses. Thorin and Selene win! Now Thorin takes all the blue bags. He looks in each bag. All the crystals are there. He looks at his blue crystals and he smiles. \"Thank you, my friend,\" he says. \"You are a great shadow stalker.\" Selene smiles too. \"And you are a great smith,\" she says. \"Now we go home.\"",
                "ru": "Торин и Селена сражаются с людьми. Торин силен. Селена быстра. Люди испуганы и слабы в темноте. Они проигрывают. Большой темный человек с луком тоже проигрывает. Торин и Селена побеждают! Теперь Торин забирает все синие мешки. Он заглядывает в каждый мешок. Все кристаллы на месте. Он смотрит на свои синие кристаллы и улыбается. \"Спасибо, мой друг,\" — говорит он. \"Ты отличная теневая охотница.\" Селена тоже улыбается. \"А ты отличный кузнец,\" — говорит она. \"Теперь идем домой.\"",
                "chunkedEn": "[s: Thorin and Selene] [v: fight] [o: the men.]\n[s: Thorin] [v: is strong.]\n[s: Selene] [v: is fast.]\n[s: The men] [v: are afraid and weak] [pt: in the dark.]\n[s: They] [v: lose.]\n[s: The big dark man with the bow] [adv: also] [v: loses.]\n[s: Thorin and Selene] [v: win!]\n[adv: Now] [s: Thorin] [v: takes] [o: all the blue bags.]\n[s: He] [v: looks] [pt: in each bag.]\n[s: All the crystals] [v: are] [adv: there.]\n[s: He] [v: looks] [pt: at his blue crystals] [c: and] [s: he] [v: smiles.]\n[o: \"Thank you, my friend,\"] [s: he] [v: says.]\n[s: \"You] [v: are] [o: a great shadow stalker.\"]\n[s: Selene] [v: smiles] [adv: too.]\n[s: \"And you] [v: are] [o: a great smith,\"] [s: she] [v: says.]\n[adv: \"Now] [s: we] [v: go] [adv: home.\"]"
            }
        ],
        "quiz": {
            "question": "How did Thorin and Selene trap the dark guild men in the mine?",
            "options": [
                "Selene broke the lamps and Thorin smashed the iron tower with his hammer",
                "They froze the entrance with ice magic",
                "They called the golden dragon from the mountain"
            ],
            "correctIndex": 0,
            "rewardXp": 513
        },
        "backgroundImg": "images/backgrounds/bg_dungeon.jpg",
        "locationEn": "The Sunken Granite Quarry & Abandoned Outpost",
        "locationRu": "Затопленный Гранитный Карьер и Заброшенный Аванпост",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-12",
        "actId": 2,
        "number": 12,
        "titleEn": "Shadows in the Court",
        "titleRu": "Тени при дворе",
        "involvedHeroes": [
            "valerius",
            "freya"
        ],
        "paragraphs": [
            {
                "speaker": "valerius",
                "en": "The Silver Citadel was always a bright home. It had truth and honor. The hall was big and tall. It had gold and blue curtains and tall windows. But today the hall was cold and dark. The old noble was at the long gold table. Five nobles were also there. Their faces were angry. They were quiet.",
                "ru": "Серебряная Цитадель всегда была светлым домом. В ней были правда и честь. Зал был большим и высоким. В нем были золотые и синие шторы и высокие окна. Но сегодня зал был холодным и темным. Старый дворянин сидел за длинным золотым столом. Пять дворян также были там. Их лица были сердитыми. Они молчали.",
                "chunkedEn": "[s: The Silver Citadel] [v: was] [adv: always] [o: a bright home.]\n[s: It] [v: had] [o: truth and honor.]\n[s: The hall] [v: was big and tall.]\n[s: It] [v: had] [o: gold and blue curtains and tall windows.]\n[c: But] [pt: today] [s: the hall] [v: was cold and dark.]\n[s: The old noble] [v: was] [pt: at the long gold table.]\n[s: Five nobles] [v: were] [adv: also there.]\n[s: Their faces] [v: were angry.]\n[s: They] [v: were quiet.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius and Freya stood in front of the group. They had bright armor. Valerius took an iron box. He came near the table. He opened the box. Inside the box were black bone arrows and Shadow Guild papers. Valerius and Freya found these things in an old mine. The nobles looked at the box. They looked at the arrows. The old noble took a black arrow. He looked at it.",
                "ru": "Валериус и Фрейя стояли перед собранием. На них были сияющие доспехи. Валериус взял железный ящик. Он подошел к столу. Он открыл ящик. Внутри ящика были стрелы из черной кости и бумаги Гильдии Теней. Валериус и Фрейя нашли эти вещи в старой шахте. Дворяне посмотрели на ящик. Они посмотрели на стрелы. Старый дворянин взял черную стрелу. Он посмотрел на нее.",
                "chunkedEn": "[s: Valerius and Freya] [v: stood] [pt: in front of the group.]\n[s: They] [v: had] [o: bright armor.]\n[s: Valerius] [v: took] [o: an iron box.]\n[s: He] [v: came] [pt: near the table.]\n[s: He] [v: opened] [o: the box.]\n[pt: Inside the box] [v: were] [s: black bone arrows and Shadow Guild papers.]\n[s: Valerius and Freya] [v: found] [o: these things] [pt: in an old mine.]\n[s: The nobles] [v: looked] [pt: at the box.]\n[s: They] [v: looked] [pt: at the arrows.]\n[s: The old noble] [v: took] [o: a black arrow.]\n[s: He] [v: looked] [pt: at it.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius said, \"Sirs, look at these things! The mountain smiths and the forest scouts never made these fights on the border roads. This is the truth! A bad man is in our citadel. He gave gold. The Shadow Guild took the gold. He wants a war between our three countries!\"",
                "ru": "Валериус сказал: \"Господа, посмотрите на эти вещи! Горные кузнецы и лесные следопыты никогда не устраивали этих стычек на пограничных дорогах. Это правда! В нашей цитадели есть дурной человек. Он дал золото. Гильдия Теней взяла золото. Он хочет войны между тремя нашими странами!\"",
                "chunkedEn": "[s: Valerius] [v: said,] [o: \"Sirs,] [v: look] [pt: at these things!] [s: The mountain smiths and the forest scouts] [adv: never] [v: made] [o: these fights] [pt: on the border roads.]\n[s: This] [v: is] [o: the truth!]\n[s: A bad man] [v: is] [pt: in our citadel.]\n[s: He] [v: gave] [o: gold.]\n[s: The Shadow Guild] [v: took] [o: the gold.]\n[s: He] [v: wants] [o: a war] [pt: between our three countries!\"]"
            },
            {
                "speaker": "valerius",
                "en": "The old noble was angry. He said, \"No, Valerius! You know nothing! You drink and talk. Your friends are wild scouts and dirty smiths! The King wants peace. We need five big squads. Silver knights are going to go in the mines. They are going to make fire in the wild forests. Our country is going to be strong!\"",
                "ru": "Старый дворянин рассердился. Он сказал: \"Нет, Валериус! Ты ничего не знаешь! Ты пьешь и болтаешь. Твои друзья — дикие следопыты и грязные кузнецы! Король хочет мира. Нам нужны пять больших отрядов. Серебряные рыцари пойдут в шахты. Они устроят пожары в диких лесах. Наша страна будет сильной!\"",
                "chunkedEn": "[s: The old noble] [v: was angry.]\n[s: He] [v: said,] [o: \"No, Valerius!]\n[s: You] [v: know] [o: nothing!]\n[s: You] [v: drink and talk.]\n[s: Your friends] [v: are] [o: wild scouts and dirty smiths!]\n[s: The King] [v: wants] [o: peace.]\n[s: We] [v: need] [o: five big squads.]\n[s: Silver knights] [v: are going to go] [pt: in the mines.]\n[s: They] [v: are going to make] [o: fire] [pt: in the wild forests.]\n[s: Our country] [v: is going to be strong!\"]"
            },
            {
                "speaker": "freya",
                "en": "Freya was angry. She came near the table. She took her spear. The spear was on the stone floor. BOOM! Blue sparks flew. The nobles jumped. They were afraid. Freya said in a strong voice, \"Be quiet, you old man! You are afraid, and you are weak! You are going to send good men. They are going to die!\"",
                "ru": "Фрейя рассердилась. Она подошла к столу. Она взяла свое копье. Копье ударило в каменный пол. БУМ! Синие искры полетели во все стороны. Дворяне подскочили. Они испугались. Фрейя сказала сильным голосом: \"Помолчи, старик! Ты напуган, и ты слаб! Ты собираешься отправить хороших людей. Они погибнут!\"",
                "chunkedEn": "[s: Freya] [v: was angry.]\n[s: She] [v: came] [pt: near the table.]\n[s: She] [v: took] [o: her spear.]\n[s: The spear] [v: was] [pt: on the stone floor.]\n[o: BOOM!]\n[s: Blue sparks] [v: flew.]\n[s: The nobles] [v: jumped.]\n[s: They] [v: were afraid.]\n[s: Freya] [v: said] [pt: in a strong voice,]\n[v: \"Be quiet,] [o: you old man!]\n[s: You] [v: are afraid,] [c: and] [s: you] [v: are weak!]\n[s: You] [v: are going to send] [o: good men.]\n[s: They] [v: are going to die!\"]"
            },
            {
                "speaker": "freya",
                "en": "Freya took a paper. She showed the paper. \"Look at this name!\" she said. \"It is Malakor's name. Malakor is our Guard Master. Where is he today? He went far away. He is now in the east mountains. The Dark Sun is his friend!\" The nobles looked at the paper. They looked at each other. The old noble's face was white. He took the paper. He read the name. He was silent. One noble asked, \"Is it true?\" \"Yes, it is true,\" Freya said.",
                "ru": "Фрейя взяла бумагу. Она показала бумагу. \"Посмотрите на это имя!\" — сказала она. \"Это имя Малакора. Малакор — наш начальник стражи. Где он сегодня? Он ушел далеко. Сейчас он в восточных горах. Темное Солнце — его друг!\" Дворяне посмотрели на бумагу. Они переглянулись. Лицо старого дворянина побелело. Он взял бумагу. Он прочитал имя. Он молчал. Один дворянин спросил: \"Это правда?\" \"Да, это правда,\" — сказала Фрейя.",
                "chunkedEn": "[s: Freya] [v: took] [o: a paper.]\n[s: She] [v: showed] [o: the paper.]\n[v: \"Look] [pt: at this name!\"] [s: she] [v: said.]\n[s: \"It] [v: is] [o: Malakor's name.]\n[s: Malakor] [v: is] [o: our Guard Master.]\n[w: Where] [v: is] [s: he] [pt: today?]\n[s: He] [v: went] [adv: far away.]\n[s: He] [v: is] [adv: now] [pt: in the east mountains.]\n[s: The Dark Sun] [v: is] [o: his friend!\"]\n[s: The nobles] [v: looked] [pt: at the paper.]\n[s: They] [v: looked] [pt: at each other.]\n[s: The old noble's face] [v: was white.]\n[s: He] [v: took] [o: the paper.]\n[s: He] [v: read] [o: the name.]\n[s: He] [v: was silent.]\n[s: One noble] [v: asked,] [w: \"Is] [s: it] [o: true?\"]\n[o: \"Yes,] [s: it] [v: is true,\"] [s: Freya] [v: said.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius looked at the nobles. He said in a quiet voice, \"Stop the bad games now. We need the Ten Heroes. Call the Ten Heroes! Our cities need one team. When our three countries fight, the Dark Sun is going to win. It is going to bring fire. Everyone is going to die.\"",
                "ru": "Валериус посмотрел на дворян. Он сказал спокойным голосом: \"Прекратите дурные игры сейчас же. Нам нужны Десять Героев. Призовите Десять Героев! Нашим городам нужна единая команда. Когда три наши страны сражаются друг с другом, Темное Солнце победит. Оно принесет огонь. Все погибнут.\"",
                "chunkedEn": "[s: Valerius] [v: looked] [pt: at the nobles.]\n[s: He] [v: said] [pt: in a quiet voice,]\n[v: \"Stop] [o: the bad games] [adv: now.]\n[s: We] [v: need] [o: the Ten Heroes.]\n[v: Call] [o: the Ten Heroes!]\n[s: Our cities] [v: need] [o: one team.]\n[b: When] [s: our three countries] [v: fight,] [s: the Dark Sun] [v: is going to win.]\n[s: It] [v: is going to bring] [o: fire.]\n[s: Everyone] [v: is going to die.\"]"
            },
            {
                "speaker": "freya",
                "en": "Freya looked at the old noble. \"Now you know the truth,\" she said. \"Say yes! We are ready!\" Nobody said a word. The hall was quiet. The old noble looked at the box again. He looked at the door. Valerius was ready. Freya was ready. They waited.",
                "ru": "Фрейя посмотрела на старого дворянина. \"Теперь вы знаете правду,\" — сказала она. \"Скажите да! Мы готовы!\" Никто не произнес ни слова. В зале было тихо. Старый дворянин снова посмотрел на ящик. Он посмотрел на дверь. Валериус был готов. Фрейя была готова. Они ждали.",
                "chunkedEn": "[s: Freya] [v: looked] [pt: at the old noble.]\n[adv: \"Now] [s: you] [v: know] [o: the truth,\"] [s: she] [v: said.]\n[v: \"Say yes!]\n[s: We] [v: are ready!\"]\n[s: Nobody] [v: said] [o: a word.]\n[s: The hall] [v: was quiet.]\n[s: The old noble] [v: looked] [pt: at the box] [adv: again.]\n[s: He] [v: looked] [pt: at the door.]\n[s: Valerius] [v: was ready.]\n[s: Freya] [v: was ready.]\n[s: They] [v: waited.]"
            }
        ],
        "quiz": {
            "question": "Whose name was on the traitorous Shadow Guild document shown to the nobles?",
            "options": [
                "Lord Malakor, the Guard Master",
                "Thorin, the mountain blacksmith",
                "Zephyr, the forest scout"
            ],
            "correctIndex": 0,
            "rewardXp": 479
        },
        "backgroundImg": "images/valerius_castle.png",
        "locationEn": "The Royal Citadel Council Room",
        "locationRu": "Зал Совета Королевской Цитадели",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-13",
        "actId": 2,
        "number": 13,
        "titleEn": "The Night Attack",
        "titleRu": "Ночное нападение",
        "involvedHeroes": [
            "valerius",
            "thorin",
            "astraea",
            "ignis",
            "frostina",
            "zephyr",
            "freya",
            "selene",
            "oberon"
        ],
        "paragraphs": [
            {
                "speaker": "valerius",
                "en": "It is midnight. Black clouds are in the sky. There is no moon and there are no stars. A cold wind comes around the stone walls of the Border Citadel. Now fire comes from the dark forest. Big stones with red fire fly to the door. The stones break the wood door. It is like thunder! Red flames are on the towers.",
                "ru": "Полночь. Черные тучи на небе. Нет ни луны, ни звезд. Холодный ветер веет вокруг каменных стен Пограничной Цитадели. Вдруг огонь вырывается из темного леса. Большие камни с красным огнем летят в ворота. Камни ломают деревянные ворота. Это как гром! Красное пламя охватывает башни.",
                "chunkedEn": "[s: It] [v: is] [o: midnight.]\n[s: Black clouds] [v: are] [pt: in the sky.]\n[v: There is] [s: no moon] [c: and] [v: there are] [s: no stars.]\n[s: A cold wind] [v: comes] [pt: around the stone walls of the Border Citadel.]\n[adv: Now] [s: fire] [v: comes] [pt: from the dark forest.]\n[s: Big stones with red fire] [v: fly] [pt: to the door.]\n[s: The stones] [v: break] [o: the wood door.]\n[s: It] [v: is] [pt: like thunder!]\n[s: Red flames] [v: are] [pt: on the towers.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius is on the wall. His silver armor is bright in the red light. Valerius calls with a big voice: \"To the walls! Protect the door! The dark warriors are here!\" Hundreds of dark warriors come from the forest. They have red eyes. They run to the walls. The knights stand and look. They are afraid, but they are brave.",
                "ru": "Валериус на стене. Его серебряные доспехи сияют в красном свете. Валериус кричит громким голосом: \"К стенам! Защищайте ворота! Темные воины здесь!\" Сотни темных воинов выходят из леса. У них красные глаза. Они бегут к стенам. Рыцари стоят и смотрят. Они боятся, но они храбры.",
                "chunkedEn": "[s: Valerius] [v: is] [pt: on the wall.]\n[s: His silver armor] [v: is bright] [pt: in the red light.]\n[s: Valerius] [v: calls] [pt: with a big voice:]\n[pt: \"To the walls!]\n[v: Protect] [o: the door!]\n[s: The dark warriors] [v: are] [adv: here!\"]\n[s: Hundreds of dark warriors] [v: come] [pt: from the forest.]\n[s: They] [v: have] [o: red eyes.]\n[s: They] [v: run] [pt: to the walls.]\n[s: The knights] [v: stand and look.]\n[s: They] [v: are afraid,] [c: but] [s: they] [v: are brave.]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin stands next to Valerius. He is a small and strong warrior. He has a heavy stone hammer. He moves the hammer around and around. Two dark warriors go back. Two other dark warriors go back again. Thorin calls: \"I am here! You cannot cross this door!\" Ignis stands above, on the wall. He makes a big red fire. The fire is hot. The iron of the dark warriors becomes hot and soft.",
                "ru": "Торин стоит рядом с Валериусом. Он невысокий и сильный воин. У него тяжелый каменный молот. Он вращает молот кругом и кругом. Два темных воина отступают назад. Еще два темных воина снова отступают. Торин кричит: \"Я здесь! Вы не пройдете через эту дверь!\" Игнис стоит наверху, на стене. Он создает большой красный огонь. Огонь горячий. Железо темных воинов становится горячим и мягким.",
                "chunkedEn": "[s: Thorin] [v: stands] [pt: next to Valerius.]\n[s: He] [v: is] [o: a small and strong warrior.]\n[s: He] [v: has] [o: a heavy stone hammer.]\n[s: He] [v: moves] [o: the hammer] [adv: around and around.]\n[s: Two dark warriors] [v: go back.]\n[s: Two other dark warriors] [v: go back] [adv: again.]\n[s: Thorin] [v: calls:] [s: \"I] [v: am] [adv: here!]\n[s: You] [v: cannot cross] [o: this door!\"]\n[s: Ignis] [v: stands] [adv: above,] [pt: on the wall.]\n[s: He] [v: makes] [o: a big red fire.]\n[s: The fire] [v: is hot.]\n[s: The iron of the dark warriors] [v: becomes] [o: hot and soft.]"
            },
            {
                "speaker": "astraea",
                "en": "In the square, Astraea and Oberon help the knights. Oberon makes big roots come from the ground. The roots stop the dark warriors. Astraea makes a soft light from the stars. The light heals the knights. The knights have energy and courage again. They smile and stand up.",
                "ru": "На площади Астрея и Оберон помогают рыцарям. Оберон заставляет большие корни подниматься из земли. Корни останавливают темных воинов. Астрея создает мягкий свет звезд. Свет исцеляет рыцарей. У рыцарей снова появляются силы и мужество. Они улыбаются и поднимаются.",
                "chunkedEn": "[pt: In the square,] [s: Astraea and Oberon] [v: help] [o: the knights.]\n[s: Oberon] [v: makes] [s: big roots] [v: come] [pt: from the ground.]\n[s: The roots] [v: stop] [o: the dark warriors.]\n[s: Astraea] [v: makes] [o: a soft light] [pt: from the stars.]\n[s: The light] [v: heals] [o: the knights.]\n[s: The knights] [v: have] [o: energy and courage] [adv: again.]\n[s: They] [v: smile and stand up.]"
            },
            {
                "speaker": "frostina",
                "en": "On the tower, Zephyr and Frostina are ready. Zephyr has a bow. He sends three green arrows at the same time. The arrows are swift. They find the big dark warriors in the fog. Frostina looks at the ground. She freezes it. The ground is icy. The dark warriors fall down. They cannot get up.",
                "ru": "На башне Зефир и Фростина готовы. У Зефира лук. Он выпускает три зеленые стрелы одновременно. Стрелы стремительны. Они находят больших темных воинов в тумане. Фростина смотрит на землю. Она замораживает ее. Земля ледяная. Темные воины падают. Они не могут подняться.",
                "chunkedEn": "[pt: On the tower,] [s: Zephyr and Frostina] [v: are ready.]\n[s: Zephyr] [v: has] [o: a bow.]\n[s: He] [v: sends] [o: three green arrows] [pt: at the same time.]\n[s: The arrows] [v: are swift.]\n[s: They] [v: find] [o: the big dark warriors] [pt: in the fog.]\n[s: Frostina] [v: looks] [pt: at the ground.]\n[s: She] [v: freezes] [o: it.]\n[s: The ground] [v: is icy.]\n[s: The dark warriors] [v: fall down.]\n[s: They] [v: cannot get up.]"
            },
            {
                "speaker": "freya",
                "en": "Selene comes from the shadows behind the dark warriors. She is silent. She has two daggers. She goes to the fire stones and stops them. She is swift, and nobody sees her. Freya flies down like a gold eagle. She has a spear. The spear is like a storm. Freya finds the big dark warrior. He is the head of the dark warriors. The spear goes into him. He falls down.",
                "ru": "Селена появляется из теней за спинами темных воинов. Она бесшумна. У нее два кинжала. Она направляется к огненным камням и останавливает их. Она стремительна, и никто ее не видит. Фрейя летит вниз, как золотой орел. У нее копье. Копье подобно буре. Фрейя находит большого темного воина. Он предводитель темных воинов. Копье вонзается в него. Он падает наземь.",
                "chunkedEn": "[s: Selene] [v: comes] [pt: from the shadows] [pt: behind the dark warriors.]\n[s: She] [v: is silent.]\n[s: She] [v: has] [o: two daggers.]\n[s: She] [v: goes] [pt: to the fire stones] [c: and] [v: stops] [o: them.]\n[s: She] [v: is swift,] [c: and] [s: nobody] [v: sees] [o: her.]\n[s: Freya] [v: flies down] [pt: like a gold eagle.]\n[s: She] [v: has] [o: a spear.]\n[s: The spear] [v: is] [pt: like a storm.]\n[s: Freya] [v: finds] [o: the big dark warrior.]\n[s: He] [v: is] [o: the head of the dark warriors.]\n[s: The spear] [v: goes] [pt: into him.]\n[s: He] [v: falls down.]"
            },
            {
                "speaker": "valerius",
                "en": "Now the head of the dark warriors is down. The dark warriors are afraid. They run away to the hills in the east. The nine heroes stand at the door. The morning sun is in the sky. For the first time in history, knights, warriors, and guards of the forest fight as one team. They look at each other and smile.",
                "ru": "Теперь предводитель темных воинов повержен. Темные воины напуганы. Они бегут прочь к холмам на востоке. Девять героев стоят у ворот. Утреннее солнце на небе. Впервые в истории рыцари, воины и стражи леса сражаются как одна команда. Они смотрят друг на друга и улыбаются.",
                "chunkedEn": "[adv: Now] [s: the head of the dark warriors] [v: is down.]\n[s: The dark warriors] [v: are afraid.]\n[s: They] [v: run away] [pt: to the hills] [pt: in the east.]\n[s: The nine heroes] [v: stand] [pt: at the door.]\n[s: The morning sun] [v: is] [pt: in the sky.]\n[pt: For the first time in history,] [s: knights, warriors, and guards of the forest] [v: fight] [pt: as one team.]\n[s: They] [v: look] [pt: at each other] [c: and] [v: smile.]"
            },
            {
                "speaker": "valerius",
                "en": "The knights drink water and eat bread. They are hungry. Valerius cleans his armor. He looks at his friends. He is happy. He says: \"We finish Chapter Two. We know the truth, and we protect the border. But the big battle is in the dark valley. We need to find Archmage Eldrin. He is going to join our squad. Now we rest, and after that we go!\"",
                "ru": "Рыцари пьют воду и едят хлеб. Они голодны. Валериус чистит свои доспехи. Он смотрит на своих друзей. Он счастлив. Он говорит: \"Мы завершаем Главу Вторую. Мы знаем правду, и мы защитили границу. Но великая битва ждет нас в темной долине. Нам нужно найти Архимага Эльдрина. Он присоединится к нашему отряду. Сейчас мы отдыхаем, а после этого отправляемся в путь!\"",
                "chunkedEn": "[s: The knights] [v: drink] [o: water] [c: and] [v: eat] [o: bread.]\n[s: They] [v: are hungry.]\n[s: Valerius] [v: cleans] [o: his armor.]\n[s: He] [v: looks] [pt: at his friends.]\n[s: He] [v: is happy.]\n[s: He] [v: says:] [s: \"We] [v: finish] [o: Chapter Two.]\n[s: We] [v: know] [o: the truth,] [c: and] [s: we] [v: protect] [o: the border.]\n[c: But] [s: the big battle] [v: is] [pt: in the dark valley.]\n[s: We] [v: need to find] [o: Archmage Eldrin.]\n[s: He] [v: is going to join] [o: our squad.]\n[adv: Now] [s: we] [v: rest,] [c: and] [pt: after that] [s: we] [v: go!\"]"
            }
        ],
        "quiz": {
            "question": "What historic event happened at the end of the battle at the Border Citadel?",
            "options": [
                "Knights, warriors, and forest guards fought together as one team",
                "The citadel walls were completely destroyed",
                "The heroes decided to go their separate ways"
            ],
            "correctIndex": 0,
            "rewardXp": 497
        },
        "backgroundImg": "images/valerius_castle.png",
        "locationEn": "The Border Citadel & The Great Gate",
        "locationRu": "Пограничная Цитадель и Великие Врата",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-14",
        "actId": 3,
        "number": 14,
        "titleEn": "The Black Rain",
        "titleRu": "Черный дождь",
        "involvedHeroes": [
            "valerius",
            "thorin",
            "ignis"
        ],
        "paragraphs": [
            {
                "speaker": "valerius",
                "en": "The three heroes walk into the dark valley. The sky above them is black. A cold wind comes through the trees. After a minute, black rain falls from the clouds. It falls on the grass, on the rocks, and on their bags. The three heroes stop and look up. \"Look out!\" Valerius says. His silver cloak is on his shoulders. \"This rain is bad! It is a storm of the Black Sun! It is like fire on wood and clothes. We need a room now!\"",
                "ru": "Трое героев идут в темную долину. Небо над ними черное. Холодный ветер веет сквозь деревья. Через минуту черный дождь начинает падать из облаков. Он падает на траву, на камни и на их мешки. Трое героев останавливаются и смотрят вверх. \"Берегитесь!\" — говорит Валериус. Его серебряный плащ на его плечах. \"Этот дождь дурной! Это буря Черного Солнца! Он словно огонь на дереве и одежде. Нам нужно укрытие прямо сейчас!\"",
                "chunkedEn": "[s: The three heroes] [v: walk] [pt: into the dark valley.]\n[s: The sky above them] [v: is black.]\n[s: A cold wind] [v: comes] [pt: through the trees.]\n[pt: After a minute,] [s: black rain] [v: falls] [pt: from the clouds.]\n[s: It] [v: falls] [pt: on the grass,] [pt: on the rocks,] [c: and] [pt: on their bags.]\n[s: The three heroes] [v: stop and look up.]\n[v: \"Look out!\"] [s: Valerius] [v: says.]\n[s: His silver cloak] [v: is] [pt: on his shoulders.]\n[s: \"This rain] [v: is bad!]\n[s: It] [v: is] [o: a storm of the Black Sun!]\n[s: It] [v: is] [pt: like fire] [pt: on wood and clothes.]\n[s: We] [v: need] [o: a room] [adv: now!\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin cleans the black rain from his bronze armor. \"Look there!\" the short hero says. He shows the tower with his iron hammer. \"There is an old tower on the other side of the valley! But the road is narrow and dangerous.\" Before they can run, a crowd of Stalkers comes out of the fog. They have red eyes, black armor, and long daggers. A big Stalker jumps toward their boxes of food and water.",
                "ru": "Торин счищает черный дождь со своей бронзовой брони. \"Посмотрите туда!\" — говорит невысокий герой. Он указывает на башню своим железным молотом. \"На другой стороне долины есть старая башня! Но дорога узкая и опасная.\" Прежде чем они успевают побежать, толпа Ловцов выходит из тумана. У них красные глаза, черная броня и длинные кинжалы. Большой Ловец прыгает к их ящикам с едой и водой.",
                "chunkedEn": "[s: Thorin] [v: cleans] [o: the black rain] [pt: from his bronze armor.]\n[v: \"Look] [adv: there!\"] [s: the short hero] [v: says.]\n[s: He] [v: shows] [o: the tower] [pt: with his iron hammer.]\n[v: \"There is] [s: an old tower] [pt: on the other side of the valley!]\n[c: But] [s: the road] [v: is narrow and dangerous.\"]\n[b: Before] [s: they] [v: can run,] [s: a crowd of Stalkers] [v: comes out] [pt: of the fog.]\n[s: They] [v: have] [o: red eyes, black armor, and long daggers.]\n[s: A big Stalker] [v: jumps] [pt: toward their boxes of food and water.]"
            },
            {
                "speaker": "valerius",
                "en": "\"Guard the food!\" Valerius says. He runs to the boxes and stands with his big silver shield on the ground. A bright gold light comes from the shield. It stops the rain and the first Stalkers. \"Stand strong!\" he says. \"We need our food and our water!\"",
                "ru": "\"Охраняйте еду!\" — говорит Валериус. Он бежит к ящикам и ставит свой большой серебряный щит на землю. Яркий золотой свет исходит от щита. Он останавливает дождь и первых Ловцов. \"Держитесь крепко!\" — говорит он. \"Нам нужны наша еда и наша вода!\"",
                "chunkedEn": "[v: \"Guard] [o: the food!\"] [s: Valerius] [v: says.]\n[s: He] [v: runs] [pt: to the boxes] [c: and] [v: stands] [pt: with his big silver shield on the ground.]\n[s: A bright gold light] [v: comes] [pt: from the shield.]\n[s: It] [v: stops] [o: the rain and the first Stalkers.]\n[v: \"Stand strong!\"] [s: he] [v: says.]\n[s: \"We] [v: need] [o: our food and our water!\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin is angry. He takes his heavy hammer and breaks the armor of two Stalkers. \"Stand behind me, Ignis!\" he calls. \"My hammer is strong, but the crowd is big! We need your fire!\"",
                "ru": "Торин в ярости. Он берет свой тяжелый молот и разбивает броню двух Ловцов. \"Стой за мной, Игнис!\" — кричит он. \"Мой молот силен, но толпа велика! Нам нужен твой огонь!\"",
                "chunkedEn": "[s: Thorin] [v: is angry.]\n[s: He] [v: takes] [o: his heavy hammer] [c: and] [v: breaks] [o: the armor of two Stalkers.]\n[v: \"Stand] [pt: behind me,] [o: Ignis!\"] [s: he] [v: calls.]\n[s: \"My hammer] [v: is strong,] [c: but] [s: the crowd] [v: is big!]\n[s: We] [v: need] [o: your fire!\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis stands behind the silver shield. He is afraid. \"The rain is heavy!\" the wizard says. \"Every time I call my fire, the rain stops it! My sparks are weak!\" \"Think, Ignis!\" Valerius says. He stands against three Stalkers with his shield. \"You are the master of the Flame Peak! Your fire is stronger than their dark magic!\"",
                "ru": "Игнис стоит за серебряным щитом. Он напуган. \"Дождь сильный!\" — говорит маг. \"Каждый раз, когда я призываю свой огонь, дождь гасит его! Мои искры слабы!\" \"Соберись, Игнис!\" — говорит Валериус. Он стоит против трех Ловцов со своим щитом. \"Ты мастер Огненного Пика! Твой огонь сильнее их темной магии!\"",
                "chunkedEn": "[s: Ignis] [v: stands] [pt: behind the silver shield.]\n[s: He] [v: is afraid.]\n[s: \"The rain] [v: is heavy!\"] [s: the wizard] [v: says.]\n[pt: \"Every time] [s: I] [v: call] [o: my fire,] [s: the rain] [v: stops] [o: it!]\n[s: My sparks] [v: are weak!\"]\n[v: \"Think,] [o: Ignis!\"] [s: Valerius] [v: says.]\n[s: He] [v: stands] [pt: against three Stalkers] [pt: with his shield.]\n[s: \"You] [v: are] [o: the master of the Flame Peak!]\n[s: Your fire] [v: is stronger] [pt: than their dark magic!\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis closes his eyes. He takes his staff in both hands. Inside his heart, a red spark comes. His hair and his eyes become gold. \"Fire of the old sun, hear me!\" Ignis says. A big wall of red fire goes across the ground. It is so hot that the rain in the sky goes away. The Stalkers are afraid. They run away into the caves.",
                "ru": "Игнис закрывает глаза. Он берет свой посох в обе руки. Внутри его сердца рождается красная искра. Его волосы и глаза становятся золотыми. \"Огонь древнего солнца, услышь меня!\" — говорит Игнис. Большая стена красного огня идет по земле. Она настолько горяча, что дождь в небе исчезает. Ловцы напуганы. Они убегают в пещеры.",
                "chunkedEn": "[s: Ignis] [v: closes] [o: his eyes.]\n[s: He] [v: takes] [o: his staff] [pt: in both hands.]\n[pt: Inside his heart,] [s: a red spark] [v: comes.]\n[s: His hair and his eyes] [v: become] [o: gold.]\n[o: \"Fire of the old sun,] [v: hear] [o: me!\"] [s: Ignis] [v: says.]\n[s: A big wall of red fire] [v: goes] [pt: across the ground.]\n[s: It] [v: is so hot] [b: that] [s: the rain in the sky] [v: goes away.]\n[s: The Stalkers] [v: are afraid.]\n[s: They] [v: run away] [pt: into the caves.]"
            },
            {
                "speaker": "valerius",
                "en": "\"Now! Run to the tower!\" Valerius says. Thorin and Valerius take the boxes and move them over the old stone bridge. After a minute, the bridge breaks and falls down. They come to the big door of the tower. Thorin closes the door and locks it. Outside, the black rain falls on the stone walls. Inside, it is warm.",
                "ru": "\"Сейчас! Бегите к башне!\" — говорит Валериус. Торин и Валериус берут ящики и переносят их через старый каменный мост. Через минуту мост ломается и падает вниз. Они подходят к большой двери башни. Торин закрывает дверь и запирает ее. Снаружи черный дождь падает на каменные стены. Внутри тепло.",
                "chunkedEn": "[adv: \"Now!] [v: Run] [pt: to the tower!\"] [s: Valerius] [v: says.]\n[s: Thorin and Valerius] [v: take] [o: the boxes] [c: and] [v: move] [o: them] [pt: over the old stone bridge.]\n[pt: After a minute,] [s: the bridge] [v: breaks and falls down.]\n[s: They] [v: come] [pt: to the big door of the tower.]\n[s: Thorin] [v: closes] [o: the door] [c: and] [v: locks] [o: it.]\n[adv: Outside,] [s: the black rain] [v: falls] [pt: on the stone walls.]\n[adv: Inside,] [s: it] [v: is warm.]"
            },
            {
                "speaker": "thorin",
                "en": "Ignis falls down on his knee. He is weak. Thorin gives him water. Ignis drinks it. Thorin smiles and says, \"That was a great fire, wizard! You cooked the Stalkers like potatoes!\" Valerius stands near Ignis and smiles. He touches Ignis's shoulder. \"You are great, my friends! We protect our food and our water. Now rest near the fire.\" They open the boxes. They eat bread and cheese and drink tea. Ignis smiles. The fire is warm and the tower is quiet. \"Tomorrow, we climb the mountain,\" Valerius says. \"We find Archmage Eldrin.\"",
                "ru": "Игнис опускается на колено. Он слаб. Торин дает ему воды. Игнис пьет ее. Торин улыбается и говорит: \"Это был отличный огонь, волшебник! Ты поджарил Ловцов, как картошку!\" Валериус стоит рядом с Игнисом и улыбается. Он касается плеча Игниса: \"Вы великолепны, друзья мои! Мы защитили нашу еду и воду. Теперь отдохните у огня.\" Они открывают ящики. Они едят хлеб и сыр и пьют чай. Игнис улыбается. Огонь теплый, и в башне тихо. \"Завтра мы поднимемся на гору,\" — говорит Валериус. \"Мы найдем Архимага Эльдрина.\"",
                "chunkedEn": "[s: Ignis] [v: falls down] [pt: on his knee.]\n[s: He] [v: is weak.]\n[s: Thorin] [v: gives] [o: him water.]\n[s: Ignis] [v: drinks] [o: it.]\n[s: Thorin] [v: smiles] [c: and] [v: says,]\n[s: \"That] [v: was] [o: a great fire, wizard!]\n[s: You] [v: cooked] [o: the Stalkers] [pt: like potatoes!\"]\n[s: Valerius] [v: stands] [pt: near Ignis] [c: and] [v: smiles.]\n[s: He] [v: touches] [o: Ignis's shoulder.]\n[s: \"You] [v: are great,] [o: my friends!]\n[s: We] [v: protect] [o: our food and our water.]\n[adv: Now] [v: rest] [pt: near the fire.\"]\n[s: They] [v: open] [o: the boxes.]\n[s: They] [v: eat] [o: bread and cheese] [c: and] [v: drink] [o: tea.]\n[s: Ignis] [v: smiles.]\n[s: The fire] [v: is warm] [c: and] [s: the tower] [v: is quiet.]\n[pt: \"Tomorrow,] [s: we] [v: climb] [o: the mountain,\"] [s: Valerius] [v: says.]\n[s: \"We] [v: find] [o: Archmage Eldrin.\"]"
            }
        ],
        "quiz": {
            "question": "How did Ignis stop the Stalkers and the black rain?",
            "options": [
                "He created a great wall of fire that vaporized the rain and scared the Stalkers away",
                "He froze the ground with an ice spell",
                "He shot three whirlwind arrows from the tower"
            ],
            "correctIndex": 0,
            "rewardXp": 517
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "The River Watch Outpost",
        "locationRu": "Речная Дозорная Застава",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-15",
        "actId": 3,
        "number": 15,
        "titleEn": "Silent Mercy",
        "titleRu": "Тихое милосердие",
        "involvedHeroes": [
            "astraea",
            "selene"
        ],
        "paragraphs": [
            {
                "speaker": "selene",
                "en": "Cold grey fog is in the valley. Selena walks and walks. She goes to an old temple. The stone door is broken. Selena goes in through the door. Her black armor is old and dirty. Her blood is dark purple. The blood is on her shoulder. A dangerous dark animal fights her in the hills. Now she has a big pain in her body. The pain is like fire in her blood.",
                "ru": "Холодный серый туман стелется в долине. Селена идет и идет. Она подходит к старому храму. Каменная дверь сломана. Селена входит через дверь. Ее черная броня старая и грязная. Ее кровь темно-фиолетовая. Кровь на ее плече. Опасный темный зверь сражался с ней на холмах. Теперь у нее сильная боль в теле. Боль словно огонь в ее крови.",
                "chunkedEn": "[s: Cold grey fog] [v: is] [pt: in the valley.]\n[s: Selena] [v: walks and walks.]\n[s: She] [v: goes] [pt: to an old temple.]\n[s: The stone door] [v: is broken.]\n[s: Selena] [v: goes in] [pt: through the door.]\n[s: Her black armor] [v: is old and dirty.]\n[s: Her blood] [v: is] [o: dark purple.]\n[s: The blood] [v: is] [pt: on her shoulder.]\n[s: A dangerous dark animal] [v: fights] [o: her] [pt: in the hills.]\n[adv: Now] [s: she] [v: has] [o: a big pain] [pt: in her body.]\n[s: The pain] [v: is] [pt: like fire] [pt: in her blood.]"
            },
            {
                "speaker": "selene",
                "en": "Selena falls on her knees near a big stone. She is weak. She cannot see. Her eyes are dark. She has a pain in her chest. \"Not here,\" she says. \"I do not want this. I do not want to die.\"",
                "ru": "Селена падает на колени возле большого камня. Она слаба. Она не видит. В ее глазах темно. У нее боль в груди. \"Не здесь,\" — говорит она. \"Я не хочу этого. Я не хочу умирать.\"",
                "chunkedEn": "[s: Selena] [v: falls] [pt: on her knees] [pt: near a big stone.]\n[s: She] [v: is weak.]\n[s: She] [v: cannot see.]\n[s: Her eyes] [v: are dark.]\n[s: She] [v: has] [o: a pain] [pt: in her chest.]\n[o: \"Not here,\"] [s: she] [v: says.]\n[s: \"I] [v: do not want] [o: this.]\n[s: I] [v: do not want to die.\"]"
            },
            {
                "speaker": "selene",
                "en": "Now Selena hears something. Someone comes near. Selena takes her silver dagger. Her hand is weak, but she is ready to fight. She looks into the fog with her purple eyes.",
                "ru": "Вдруг Селена слышит что-то. Кто-то приближается. Селена берет свой серебряный кинжал. Ее рука слаба, но она готова сражаться. Она смотрит в туман своими фиолетовыми глазами.",
                "chunkedEn": "[adv: Now] [s: Selena] [v: hears] [o: something.]\n[s: Someone] [v: comes] [adv: near.]\n[s: Selena] [v: takes] [o: her silver dagger.]\n[s: Her hand] [v: is weak,] [c: but] [s: she] [v: is ready to fight.]\n[s: She] [v: looks] [pt: into the fog] [pt: with her purple eyes.]"
            },
            {
                "speaker": "astraea",
                "en": "A woman in a white dress comes out of the fog. She is Astraea, a woman of the stars. She has a small silver bowl in her hand. In the bowl there is a warm light. Astraea goes to Selena. She has no sword. She has no dagger. Her warm hand moves the dagger away. \"Be quiet, my friend,\" Astraea says. \"Do not be afraid. I am here to help you. Give me your hand.\" Selena looks at her. Astraea smiles.",
                "ru": "Женщина в белом платье выходит из тумана. Это Астрея, женщина звезд. В руке у нее маленькая серебряная чаша. В чаше горит теплый свет. Астрея подходит к Селене. У нее нет меча. У нее нет кинжала. Ее теплая рука отводит кинжал в сторону. \"Успокойся, мой друг,\" — говорит Астрея. \"Не бойся. Я здесь, чтобы помочь тебе. Дай мне свою руку.\" Селена смотрит на нее. Астрея улыбается.",
                "chunkedEn": "[s: A woman in a white dress] [v: comes out] [pt: of the fog.]\n[s: She] [v: is] [o: Astraea, a woman of the stars.]\n[s: She] [v: has] [o: a small silver bowl] [pt: in her hand.]\n[pt: In the bowl] [v: there is] [s: a warm light.]\n[s: Astraea] [v: goes] [pt: to Selena.]\n[s: She] [v: has] [o: no sword.]\n[s: She] [v: has] [o: no dagger.]\n[s: Her warm hand] [v: moves] [o: the dagger] [adv: away.]\n[v: \"Be quiet,] [o: my friend,\"] [s: Astraea] [v: says.]\n[v: \"Do not be afraid.]\n[s: I] [v: am] [adv: here] [v: to help] [o: you.]\n[v: Give] [o: me] [o: your hand.\"]\n[s: Selena] [v: looks] [pt: at her.]\n[s: Astraea] [v: smiles.]"
            },
            {
                "speaker": "astraea",
                "en": "Astraea closes her eyes. She sings an old song. A big warm light comes to Selena's body. The light is like the sun. The bad blood goes out of her body. The pain goes away. Selena opens her eyes. She looks at her shoulder. The blood is not there. Selena is strong again.",
                "ru": "Астрея закрывает глаза. Она поет старинную песню. Большой теплый свет окутывает тело Селены. Свет подобен солнцу. Дурная кровь покидает ее тело. Боль уходит. Селена открывает глаза. Она смотрит на свое плечо. Крови больше нет. Селена снова полна сил.",
                "chunkedEn": "[s: Astraea] [v: closes] [o: her eyes.]\n[s: She] [v: sings] [o: an old song.]\n[s: A big warm light] [v: comes] [pt: to Selena's body.]\n[s: The light] [v: is] [pt: like the sun.]\n[s: The bad blood] [v: goes out] [pt: of her body.]\n[s: The pain] [v: goes away.]\n[s: Selena] [v: opens] [o: her eyes.]\n[s: She] [v: looks] [pt: at her shoulder.]\n[s: The blood] [v: is not] [adv: there.]\n[s: Selena] [v: is strong] [adv: again.]"
            },
            {
                "speaker": "selene",
                "en": "Now Selena hears something on the roof. Two dark animals jump through the window! They are big and black. They are behind Astraea. They want to fight her. Astraea does not see them. \"Astraea, behind you!\" Selena says. Selena is fast now. She is like the wind. Astraea has the bowl in her hand. She makes a big bright light. The animals cannot see. Selena jumps up with her two daggers. She cuts the first animal. She cuts the second animal. Both animals fall on the floor. They die.",
                "ru": "Вдруг Селена слышит шум на крыше. Два темных зверя прыгают через окно! Они большие и черные. Они позади Астреи. Они хотят напасть на нее. Астрея не видит их. \"Астрея, сзади!\" — кричит Селена. Селена теперь быстра. Она подобна ветру. У Астреи чаша в руке. Она создает яркий свет. Звери ничего не видят. Селена подпрыгивает со своими двумя кинжалами. Она разит первого зверя. Она разит второго зверя. Оба зверя падают на пол. Они погибают.",
                "chunkedEn": "[adv: Now] [s: Selena] [v: hears] [o: something] [pt: on the roof.]\n[s: Two dark animals] [v: jump] [pt: through the window!]\n[s: They] [v: are big and black.]\n[s: They] [v: are] [pt: behind Astraea.]\n[s: They] [v: want to fight] [o: her.]\n[s: Astraea] [v: does not see] [o: them.]\n[o: \"Astraea,] [pt: behind you!\"] [s: Selena] [v: says.]\n[s: Selena] [v: is fast] [adv: now.]\n[s: She] [v: is] [pt: like the wind.]\n[s: Astraea] [v: has] [o: the bowl] [pt: in her hand.]\n[s: She] [v: makes] [o: a big bright light.]\n[s: The animals] [v: cannot see.]\n[s: Selena] [v: jumps up] [pt: with her two daggers.]\n[s: She] [v: cuts] [o: the first animal.]\n[s: She] [v: cuts] [o: the second animal.]\n[s: Both animals] [v: fall] [pt: on the floor.]\n[s: They] [v: die.]"
            },
            {
                "speaker": "astraea",
                "en": "Selena stands near the old stone table. She cleans her daggers. Her daggers are at her belt. She looks at Astraea. She does not understand. \"In your temple, people say: my guild is bad,\" Selena says. \"They say we have no honor. Why do you help me?\" Astraea looks into Selena's eyes. She smiles. \"Our world has a big problem,\" she says. \"The bad sun wants war. It wants us to fight each other. Old war is not good for our people. I choose peace. I see a hero in you. You are not a bad woman.\"",
                "ru": "Селена стоит возле старого каменного стола. Она очищает свои кинжалы. Кинжалы у нее на поясе. Она смотрит на Астрею. Она не понимает. \"В твоем храме люди говорят: моя гильдия дурная,\" — говорит Селена. \"Они говорят, что у нас нет чести. Почему ты помогаешь мне?\" Астрея смотрит в глаза Селене. Она улыбается. \"У нашего мира большая беда,\" — говорит она. \"Дурное солнце хочет войны. Оно хочет, чтобы мы воевали друг с другом. Старая вражда не нужна нашему народу. Я выбираю мир. Я вижу в тебе героя. Ты не плохой человек.\"",
                "chunkedEn": "[s: Selena] [v: stands] [pt: near the old stone table.]\n[s: She] [v: cleans] [o: her daggers.]\n[s: Her daggers] [v: are] [pt: at her belt.]\n[s: She] [v: looks] [pt: at Astraea.]\n[s: She] [v: does not understand.]\n[pt: \"In your temple,] [s: people] [v: say:] [s: my guild] [v: is bad,\"] [s: Selena] [v: says.]\n[s: \"They] [v: say] [s: we] [v: have] [o: no honor.]\n[w: Why] [v: do] [s: you] [v: help] [o: me?\"]\n[s: Astraea] [v: looks] [pt: into Selena's eyes.]\n[s: She] [v: smiles.]\n[s: \"Our world] [v: has] [o: a big problem,\"] [s: she] [v: says.]\n[s: \"The bad sun] [v: wants] [o: war.]\n[s: It] [v: wants] [o: us] [v: to fight] [o: each other.]\n[s: Old war] [v: is not good] [pt: for our people.]\n[s: I] [v: choose] [o: peace.]\n[s: I] [v: see] [o: a hero] [pt: in you.]\n[s: You] [v: are not] [o: a bad woman.\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena is quiet for a moment. She bows her head. Her hand is on her heart. \"Thank you,\" she says. \"My daggers and my life are for you. I protect your light.\" The woman of the stars and the woman of the shadows go out of the temple. The morning sun is bright in the sky. The light is on the road to the Star Peak.",
                "ru": "Селена молчит мгновение. Она склоняет голову. Ее рука на ее сердце. \"Спасибо,\" — говорит она. \"Мои кинжалы и моя жизнь для тебя. Я защищу твой свет.\" Женщина звезд и женщина теней выходят из храма. Утреннее солнце ярко светит на небе. Свет озаряет дорогу к Звездному Пику.",
                "chunkedEn": "[s: Selena] [v: is quiet] [pt: for a moment.]\n[s: She] [v: bows] [o: her head.]\n[s: Her hand] [v: is] [pt: on her heart.]\n[o: \"Thank you,\"] [s: she] [v: says.]\n[s: \"My daggers and my life] [v: are] [pt: for you.]\n[s: I] [v: protect] [o: your light.\"]\n[s: The woman of the stars and the woman of the shadows] [v: go out] [pt: of the temple.]\n[s: The morning sun] [v: is bright] [pt: in the sky.]\n[s: The light] [v: is] [pt: on the road to the Star Peak.]"
            }
        ],
        "quiz": {
            "question": "Why did Astraea choose to heal Selena in the old temple?",
            "options": [
                "Because Astraea chose peace and saw a hero in Selena",
                "Because Selena paid her with gold",
                "Because Astraea was afraid of Selena's daggers"
            ],
            "correctIndex": 0,
            "rewardXp": 530
        },
        "backgroundImg": "images/backgrounds/bg_castle.jpg",
        "locationEn": "The Ruined Chapel of Light",
        "locationRu": "Разрушенная Часовня Света",
        "campaignId": "fantasy"
    },
    {
        "id": "ch-16",
        "actId": 3,
        "number": 16,
        "titleEn": "Arrow in the Sky",
        "titleRu": "Стрела в небесах",
        "involvedHeroes": [
            "zephyr",
            "frostina",
            "freya"
        ],
        "paragraphs": [
            {
                "speaker": "zephyr",
                "en": "Zephyr, Freya, and Frostina were in a small mountain village. It was a cold autumn morning. The wind was strong. The village was near the top of the peak. It was a peaceful day. The people cut wood and made food for the winter. Children played in the snow. The heroes drank tea and ate apples and cheese.",
                "ru": "Зефир, Фрейя и Фростина были в маленькой горной деревне. Было холодное осеннее утро. Ветер был сильным. Деревня находилась возле вершины пика. Это был мирный день. Люди рубили дрова и готовили еду на зиму. Дети играли в снегу. Герои пили чай и ели яблоки и сыр.",
                "chunkedEn": "[s: Zephyr, Freya, and Frostina] [v: were] [pt: in a small mountain village.]\n[s: It] [v: was] [o: a cold autumn morning.]\n[s: The wind] [v: was strong.]\n[s: The village] [v: was] [pt: near the top of the peak.]\n[s: It] [v: was] [o: a peaceful day.]\n[s: The people] [v: cut] [o: wood] [c: and] [v: made] [o: food] [pt: for the winter.]\n[s: Children] [v: played] [pt: in the snow.]\n[s: The heroes] [v: drank] [o: tea] [c: and] [v: ate] [o: apples and cheese.]"
            },
            {
                "speaker": "zephyr",
                "en": "Zephyr stood near the tower with his bow. He looked at the sky. At this moment, he saw a black cloud. It came fast toward the village. \"Look at the sky!\" Zephyr said. \"It is no storm cloud! Those are birds! Hundreds of big black birds!\" The birds had iron wings and red eyes. They had hot coal in their feet. They flew over the village. The coal fell on the roofs of the houses. Fire was everywhere.",
                "ru": "Зефир стоял возле башни со своим луком. Он смотрел на небо. В этот момент он увидел черную тучу. Она быстро приближалась к деревне. \"Посмотрите на небо!\" — сказал Зефир. \"Это не грозовая туча! Это птицы! Сотни больших черных птиц!\" У птиц были железные крылья и красные глаза. У них были горячие угли в лапах. Они летели над деревней. Угли падали на крыши домов. Огонь был повсюду.",
                "chunkedEn": "[s: Zephyr] [v: stood] [pt: near the tower] [pt: with his bow.]\n[s: He] [v: looked] [pt: at the sky.]\n[pt: At this moment,] [s: he] [v: saw] [o: a black cloud.]\n[s: It] [v: came fast] [pt: toward the village.]\n[v: \"Look] [pt: at the sky!\"] [s: Zephyr] [v: said.]\n[s: \"It] [v: is] [o: no storm cloud!]\n[s: Those] [v: are] [o: birds!]\n[o: Hundreds of big black birds!\"]\n[s: The birds] [v: had] [o: iron wings and red eyes.]\n[s: They] [v: had] [o: hot coal] [pt: in their feet.]\n[s: They] [v: flew] [pt: over the village.]\n[s: The coal] [v: fell] [pt: on the roofs of the houses.]\n[s: Fire] [v: was] [adv: everywhere.]"
            },
            {
                "speaker": "frostina",
                "en": "The mothers took their children. They ran to the basement. They were afraid. \"The birds want to end our village!\" Frostina said. Frostina was an ice wizard. She ran to the center of the square. She had a crystal staff. She took it and looked at the red sky. \"Cold of the north, protect this home!\" she said.",
                "ru": "Матери взяли своих детей. Они побежали в подвал. Они боялись. \"Птицы хотят уничтожить нашу деревню!\" — сказала Фростина. Фростина была ледяным магом. Она побежала в центр площади. У нее был хрустальный посох. Она взяла его и посмотрела на красное небо. \"Холод севера, защити этот дом!\" — сказала она.",
                "chunkedEn": "[s: The mothers] [v: took] [o: their children.]\n[s: They] [v: ran] [pt: to the basement.]\n[s: They] [v: were afraid.]\n[s: \"The birds] [v: want to end] [o: our village!\"] [s: Frostina] [v: said.]\n[s: Frostina] [v: was] [o: an ice wizard.]\n[s: She] [v: ran] [pt: to the center of the square.]\n[s: She] [v: had] [o: a crystal staff.]\n[s: She] [v: took] [o: it] [c: and] [v: looked] [pt: at the red sky.]\n[o: \"Cold of the north,] [v: protect] [o: this home!\"] [s: she] [v: said.]"
            },
            {
                "speaker": "frostina",
                "en": "Blue ice and white snow came from her staff. In a moment, a big wall of ice was over the village. The hot coal fell on the ice. It became grey stones. The people under the ice were fine. They looked at the wall and smiled.",
                "ru": "Синий лед и белый снег вырвались из ее посоха. В один миг большая ледяная стена накрыла деревню. Горячие угли падали на лед. Они превращались в серые камни. С людьми под льдом все было хорошо. Они смотрели на стену и улыбались.",
                "chunkedEn": "[s: Blue ice and white snow] [v: came] [pt: from her staff.]\n[pt: In a moment,] [s: a big wall of ice] [v: was] [pt: over the village.]\n[s: The hot coal] [v: fell] [pt: on the ice.]\n[s: It] [v: became] [o: grey stones.]\n[s: The people under the ice] [v: were fine.]\n[s: They] [v: looked] [pt: at the wall] [c: and] [v: smiled.]"
            },
            {
                "speaker": "freya",
                "en": "Above the ice, the sky was red. The mother of the birds came. She was big and black. She had a big stone in her feet. She came down fast toward Frostina. She wanted to break the ice. \"Stop!\" a strong voice said from the clouds. It was Freya, the Valkyrie. She had gold wings and a spear. The spear had blue light and thunder. She flew fast in the wind. She came down like a star.",
                "ru": "Над льдом небо было красным. Прилетела мать птиц. Она была большой и черной. В ее лапах был огромный камень. Она быстро спускалась к Фростине. Она хотела сломать лед. \"Стой!\" — раздался сильный голос из облаков. Это была Фрейя, Валькирия. У нее были золотые крылья и копье. У копья был синий свет и гром. Она быстро летела в ветре. Она спустилась, словно звезда.",
                "chunkedEn": "[pt: Above the ice,] [s: the sky] [v: was red.]\n[s: The mother of the birds] [v: came.]\n[s: She] [v: was big and black.]\n[s: She] [v: had] [o: a big stone] [pt: in her feet.]\n[s: She] [v: came down fast] [pt: toward Frostina.]\n[s: She] [v: wanted to break] [o: the ice.]\n[o: \"Stop!\"] [s: a strong voice] [v: said] [pt: from the clouds.]\n[s: It] [v: was] [o: Freya, the Valkyrie.]\n[s: She] [v: had] [o: gold wings and a spear.]\n[s: The spear] [v: had] [o: blue light and thunder.]\n[s: She] [v: flew fast] [pt: in the wind.]\n[s: She] [v: came down] [pt: like a star.]"
            },
            {
                "speaker": "freya",
                "en": "The mother bird sent the stone at Freya. But Freya was fast. She went away from the stone. After that, she came to the mother bird. Her spear went into the mother bird. There was a big light in the sky. The mother bird fell down into the valley. The other birds were afraid and angry. They came around Freya. They wanted to fight her.",
                "ru": "Мать птиц метнула камень во Фрейю. Но Фрейя была быстра. Она уклонилась от камня. После этого она подлетела к матери птиц. Ее копье вонзилось в мать птиц. В небе вспыхнул яркий свет. Мать птиц упала в долину. Другие птицы были испуганы и злы. Они окружили Фрейю. Они хотели напасть на нее.",
                "chunkedEn": "[s: The mother bird] [v: sent] [o: the stone] [pt: at Freya.]\n[c: But] [s: Freya] [v: was fast.]\n[s: She] [v: went away] [pt: from the stone.]\n[pt: After that,] [s: she] [v: came] [pt: to the mother bird.]\n[s: Her spear] [v: went] [pt: into the mother bird.]\n[v: There was] [s: a big light] [pt: in the sky.]\n[s: The mother bird] [v: fell down] [pt: into the valley.]\n[s: The other birds] [v: were afraid and angry.]\n[s: They] [v: came] [pt: around Freya.]\n[s: They] [v: wanted to fight] [o: her.]"
            },
            {
                "speaker": "zephyr",
                "en": "\"I am with you, Lady Freya!\" Zephyr said from the tower. He stood in the wind. He took his silver bow and three green arrows. \"Wind, clean the sky!\" he said. The arrows flew in the air. A big storm came. The wind took all the black birds. It took them away from the mountain and into the valley.",
                "ru": "\"Я с вами, леди Фрейя!\" — крикнул Зефир с башни. Он стоял на ветру. Он взял свой серебряный лук и три зеленые стрелы. \"Ветер, очисти небо!\" — сказал он. Стрелы полетели в воздух. Налетела большая буря. Ветер подхватил всех черных птиц. Он унес их прочь от горы и сбросил в долину.",
                "chunkedEn": "[o: \"I] [v: am] [pt: with you,] [o: Lady Freya!\"] [s: Zephyr] [v: said] [pt: from the tower.]\n[s: He] [v: stood] [pt: in the wind.]\n[s: He] [v: took] [o: his silver bow and three green arrows.]\n[o: \"Wind,] [v: clean] [o: the sky!\"] [s: he] [v: said.]\n[s: The arrows] [v: flew] [pt: in the air.]\n[s: A big storm] [v: came.]\n[s: The wind] [v: took] [o: all the black birds.]\n[s: It] [v: took] [o: them] [adv: away] [pt: from the mountain] [c: and] [pt: into the valley.]"
            },
            {
                "speaker": "freya",
                "en": "The sky became blue again. The morning sun was warm. The ice wall became water. The people came out. They were happy. They gave flowers to the heroes. Freya came down to the square. She had a smile. Zephyr took his bow on his back. Frostina had her staff in her hand. \"This is a great team,\" Zephyr said. \"Ice for the wall, thunder for the fight, and wind for the sky.\" Freya looked at the path to the top. \"The sky is clean now, friends. The path to the Star Peak is open. We are going to climb and find Archmage Eldrin!\"",
                "ru": "Небо снова стало синим. Утреннее солнце было теплым. Ледяная стена растаяла в воду. Люди вышли наружу. Они были счастливы. Они дарили цветы героям. Фрейя спустилась на площадь. Она улыбалась. Зефир убрал лук за спину. Фростина держала посох в руке. \"Это отличная команда,\" — сказал Зефир. \"Лед для защиты, гром для битвы и ветер для неба.\" Фрейя посмотрела на тропу к вершине. \"Небо чисто теперь, друзья. Путь к Звездному Пику открыт. Мы поднимемся и найдем Архимага Эльдрина!\"",
                "chunkedEn": "[s: The sky] [v: became] [o: blue] [adv: again.]\n[s: The morning sun] [v: was warm.]\n[s: The ice wall] [v: became] [o: water.]\n[s: The people] [v: came out.]\n[s: They] [v: were happy.]\n[s: They] [v: gave] [o: flowers] [pt: to the heroes.]\n[s: Freya] [v: came down] [pt: to the square.]\n[s: She] [v: had] [o: a smile.]\n[s: Zephyr] [v: took] [o: his bow] [pt: on his back.]\n[s: Frostina] [v: had] [o: her staff] [pt: in her hand.]\n[s: \"This] [v: is] [o: a great team,\"] [s: Zephyr] [v: said.]\n[s: \"Ice] [pt: for the wall,] [s: thunder] [pt: for the fight,] [c: and] [s: wind] [pt: for the sky.\"]\n[s: Freya] [v: looked] [pt: at the path to the top.]\n[s: \"The sky] [v: is clean] [adv: now,] [o: friends.]\n[s: The path to the Star Peak] [v: is open.]\n[s: We] [v: are going to climb] [c: and] [v: find] [o: Archmage Eldrin!\"]"
            }
        ],
        "quiz": {
            "question": "How did Zephyr, Frostina, and Freya protect the mountain village?",
            "options": [
                "Frostina made an ice dome, Freya defeated the mother bird, and Zephyr blew the swarm away with wind arrows",
                "They hid inside the cellar until the birds left",
                "They used dark spells to control the birds"
            ],
            "correctIndex": 0,
            "rewardXp": 544
        },
        "backgroundImg": "images/backgrounds/bg_sky_terrace.jpg",
        "locationEn": "High Cliff Mountain Villages",
        "locationRu": "Горные Деревни на Скалах",
        "campaignId": "fantasy"
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
                "speaker": "oberon",
                "en": "The Sacred Grove was quiet. It was evening. Old trees stood in the grove. They were big and tall. Green leaves were on the branches. Birds and animals lived in the trees. Oberon walked in the Sacred Grove. He was a guard of the forest. He had a big staff of wood. Ignis walked next to him. Ignis was young. He had a red cloak. He had a staff with a ruby crystal. Ignis was a fire wizard. \"It is a good evening, my friend,\" Oberon said. \"Yes,\" Ignis said. \"The forest is peaceful.\" They smiled. They were happy.",
                "ru": "Священная Роща была тихой. Был вечер. Старые деревья стояли в роще. Они были большими и высокими. Зеленые листья были на ветвях. Птицы и животные жили на деревьях. Оберон гулял по Священной Роще. Он был стражем леса. У него был большой деревянный посох. Игнис шел рядом с ним. Игнис был молод. На нем был красный плащ. У него был посох с рубиновым кристаллом. Игнис был магом огня. \"Это хороший вечер, мой друг,\" — сказал Оберон. \"Да,\" — сказал Игнис. \"Лес спокоен.\" Они улыбнулись. Они были счастливы.",
                "chunkedEn": "[s: The Sacred Grove] [v: was quiet.]\n[s: It] [v: was] [o: evening.]\n[s: Old trees] [v: stood] [pt: in the grove.]\n[s: They] [v: were big and tall.]\n[s: Green leaves] [v: were] [pt: on the branches.]\n[s: Birds and animals] [v: lived] [pt: in the trees.]\n[s: Oberon] [v: walked] [pt: in the Sacred Grove.]\n[s: He] [v: was] [o: a guard of the forest.]\n[s: He] [v: had] [o: a big staff of wood.]\n[s: Ignis] [v: walked] [pt: next to him.]\n[s: Ignis] [v: was young.]\n[s: He] [v: had] [o: a red cloak.]\n[s: He] [v: had] [o: a staff] [pt: with a ruby crystal.]\n[s: Ignis] [v: was] [o: a fire wizard.]\n[o: \"It] [v: is] [o: a good evening,] [o: my friend,\"] [s: Oberon] [v: said.]\n[o: \"Yes,\"] [s: Ignis] [v: said.]\n[s: \"The forest] [v: is peaceful.\"]\n[s: They] [v: smiled.]\n[s: They] [v: were happy.]"
            },
            {
                "speaker": "oberon",
                "en": "Now the forest was not quiet. They heard something. The ground began to move. Oberon looked at the ground. Ignis also looked at the ground. Fire came out of the ground. It was purple and black. It was a bad fire. It was the fire of the Shadow Cult. The black fire came to the trees. It ate the roots. It ate the old wood. The green leaves became black. The birds and animals ran away.",
                "ru": "Теперь лес не был тихим. Они что-то услышали. Земля начала двигаться. Оберон посмотрел на землю. Игнис тоже посмотрел на землю. Огонь вырвался из-под земли. Он был фиолетовым и черным. Это был злой огонь. Это был огонь Культа Теней. Черный огонь подступил к деревьям. Он пожирал корни. Он пожирал древнюю древесину. Зеленые листья становились черными. Птицы и животные убегали.",
                "chunkedEn": "[adv: Now] [s: the forest] [v: was not quiet.]\n[s: They] [v: heard] [o: something.]\n[s: The ground] [v: began to move.]\n[s: Oberon] [v: looked] [pt: at the ground.]\n[s: Ignis] [adv: also] [v: looked] [pt: at the ground.]\n[s: Fire] [v: came out] [pt: of the ground.]\n[s: It] [v: was purple and black.]\n[s: It] [v: was] [o: a bad fire.]\n[s: It] [v: was] [o: the fire of the Shadow Cult.]\n[s: The black fire] [v: came] [pt: to the trees.]\n[s: It] [v: ate] [o: the roots.]\n[s: It] [v: ate] [o: the old wood.]\n[s: The green leaves] [v: became] [o: black.]\n[s: The birds and animals] [v: ran away.]"
            },
            {
                "speaker": "oberon",
                "en": "\"Our forest is sick!\" Oberon said. \"The heart of our forest is sick!\" He was angry and afraid. His eyes were green. Oberon took his staff. He called water from the earth. The water ran to the fire. Green branches ran to the fire. But the fire did not stop. It ate the branches. It came to the Elder Tree.",
                "ru": "\"Наш лес болен!\" — сказал Оберон. \"Сердце нашего леса больно!\" Он был зол и испуган. Его глаза были зелеными. Оберон взял свой посох. Он призвал воду из земли. Вода устремилась к огню. Зеленые ветви устремились к огню. Но огонь не останавливался. Он пожирал ветви. Он подбирался к Древу Старейшин.",
                "chunkedEn": "[s: \"Our forest] [v: is sick!\"] [s: Oberon] [v: said.]\n[s: \"The heart of our forest] [v: is sick!\"]\n[s: He] [v: was angry and afraid.]\n[s: His eyes] [v: were green.]\n[s: Oberon] [v: took] [o: his staff.]\n[s: He] [v: called] [o: water] [pt: from the earth.]\n[s: The water] [v: ran] [pt: to the fire.]\n[s: Green branches] [v: ran] [pt: to the fire.]\n[c: But] [s: the fire] [v: did not stop.]\n[s: It] [v: ate] [o: the branches.]\n[s: It] [v: came] [pt: to the Elder Tree.]"
            },
            {
                "speaker": "ignis",
                "en": "Oberon was on his knees on the hot ground. \"My magic cannot help,\" he said. \"Fire is bad. Fire takes life!\" Ignis looked at the Elder Tree. It was hot. But he did not go away. \"Fire is not bad,\" Ignis said. \"Fire is energy. Bad hands give it bad food. Look at me!\"",
                "ru": "Оберон стоял на коленях на горячей земле. \"Моя магия не может помочь,\" — сказал он. \"Огонь — это зло. Огонь отнимает жизнь!\" Игнис посмотрел на Древо Старейшин. Было жарко. Но он не ушел. \"Огонь — не зло,\" — сказал Игнис. \"Огонь — это энергия. Злые руки дают ему плохую пищу. Посмотри на меня!\"",
                "chunkedEn": "[s: Oberon] [v: was] [pt: on his knees] [pt: on the hot ground.]\n[s: \"My magic] [v: cannot help,\"] [s: he] [v: said.]\n[s: \"Fire] [v: is bad.]\n[s: Fire] [v: takes] [o: life!\"]\n[s: Ignis] [v: looked] [pt: at the Elder Tree.]\n[s: It] [v: was hot.]\n[c: But] [s: he] [v: did not go away.]\n[s: \"Fire] [v: is not bad,\"] [s: Ignis] [v: said.]\n[s: \"Fire] [v: is] [o: energy.]\n[s: Bad hands] [v: give] [o: it] [o: bad food.]\n[v: Look] [pt: at me!\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis ran to the black fire. He did not use his fire on the trees. He stood on the ground. He had his staff in his hands. He said an old spell. His red crystal was bright. The black fire came to Ignis's staff. It left the roots. It went into the crystal. Ignis was hot. Sparks were around his face. His hands had pain. \"I will not lose this grove!\" he said.",
                "ru": "Игнис побежал к черному огню. Он не стал направлять свой огонь на деревья. Он встал на землю. Он держал свой посох в руках. Он произнес древнее заклинание. Его красный кристалл ярко засиял. Черный огонь устремился к посоху Игниса. Он покинул корни. Он вошел в кристалл. Игнису было жарко. Искры летали вокруг его лица. В руках была боль. \"Я не потеряю эту рощу!\" — сказал он.",
                "chunkedEn": "[s: Ignis] [v: ran] [pt: to the black fire.]\n[s: He] [v: did not use] [o: his fire] [pt: on the trees.]\n[s: He] [v: stood] [pt: on the ground.]\n[s: He] [v: had] [o: his staff] [pt: in his hands.]\n[s: He] [v: said] [o: an old spell.]\n[s: His red crystal] [v: was bright.]\n[s: The black fire] [v: came] [pt: to Ignis's staff.]\n[s: It] [v: left] [o: the roots.]\n[s: It] [v: went] [pt: into the crystal.]\n[s: Ignis] [v: was hot.]\n[s: Sparks] [v: were] [pt: around his face.]\n[s: His hands] [v: had] [o: pain.]\n[s: \"I] [v: will not lose] [o: this grove!\"] [s: he] [v: said.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon looked at Ignis. He saw a brave boy. Oberon got up fast. \"I will help you, boy!\" he said. He took his staff. Green leaves and cool water came to Ignis's legs and shoulders. They protected him from the fire.",
                "ru": "Оберон посмотрел на Игниса. Он увидел храброго юношу. Оберон быстро поднялся. \"Я помогу тебе, парень!\" — сказал он. Он взял свой посох. Зеленые листья и прохладная вода укутали ноги и плечи Игниса. Они защищали его от огня.",
                "chunkedEn": "[s: Oberon] [v: looked] [pt: at Ignis.]\n[s: He] [v: saw] [o: a brave boy.]\n[s: Oberon] [v: got up fast.]\n[s: \"I] [v: will help] [o: you,] [o: boy!\"] [s: he] [v: said.]\n[s: He] [v: took] [o: his staff.]\n[s: Green leaves and cool water] [v: came] [pt: to Ignis's legs and shoulders.]\n[s: They] [v: protected] [o: him] [pt: from the fire.]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis took the last black fire into his crystal. The crystal was white and bright. It locked the dark fire. The air was cool and fresh again. Ignis was on one knee. He was weak. Oberon came to him. He took Ignis's shoulder with his hand. A green light healed Ignis's hands.",
                "ru": "Игнис вобрал последний черный огонь в свой кристалл. Кристалл стал белым и ярким. Он запер темный огонь. Воздух снова стал прохладным и свежим. Игнис стоял на одном колене. Он был слаб. Оберон подошел к нему. Он положил руку на плечо Игниса. Зеленый свет исцелил руки Игниса.",
                "chunkedEn": "[s: Ignis] [v: took] [o: the last black fire] [pt: into his crystal.]\n[s: The crystal] [v: was white and bright.]\n[s: It] [v: locked] [o: the dark fire.]\n[s: The air] [v: was cool and fresh] [adv: again.]\n[s: Ignis] [v: was] [pt: on one knee.]\n[s: He] [v: was weak.]\n[s: Oberon] [v: came] [pt: to him.]\n[s: He] [v: took] [o: Ignis's shoulder] [pt: with his hand.]\n[s: A green light] [v: healed] [o: Ignis's hands.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon smiled. \"Please, my friend,\" he said. \"I did not know your fire. Your fire is good. Today your fire helped my people and my home.\" Ignis also smiled. \"We did it,\" he said. \"We are a team. Now we go and find our friends.\"",
                "ru": "Оберон улыбнулся. \"Прости, мой друг,\" — сказал он. \"Я не знал твоего огня. Твой огонь добрый. Сегодня твой огонь помог моему народу и моему дому.\" Игнис тоже улыбнулся. \"Мы сделали это,\" — сказал он. \"Мы команда. Теперь мы пойдем и найдем наших друзей.\"",
                "chunkedEn": "[s: Oberon] [v: smiled.]\n[o: \"Please,] [o: my friend,\"] [s: he] [v: said.]\n[s: \"I] [v: did not know] [o: your fire.]\n[s: Your fire] [v: is good.]\n[pt: Today] [s: your fire] [v: helped] [o: my people and my home.\"]\n[s: Ignis] [adv: also] [v: smiled.]\n[s: \"We] [v: did] [o: it,\"] [s: he] [v: said.]\n[s: \"We] [v: are] [o: a team.]\n[adv: Now] [s: we] [v: go] [c: and] [v: find] [o: our friends.\"]"
            }
        ],
        "quiz": {
            "question": "How did Ignis save the Sacred Grove from the cursed black fire?",
            "options": [
                "By absorbing the dark flames into his ruby crystal staff",
                "By cutting down the ancient Elder Tree with an axe",
                "By running away to the mountain fortress"
            ],
            "correctIndex": 0,
            "rewardXp": 500
        },
        "backgroundImg": "images/backgrounds/bg_enchanted_grove.jpg",
        "locationEn": "The Heart of the Sacred Grove",
        "locationRu": "Сердце Священной Рощи",
        "campaignId": "fantasy"
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
                "speaker": "thorin",
                "en": "Under the great mountain, the Iron Fortress was full of Fire and Metal. Old Smiths made things day and night. They made swords, shields and armor. Thorin walked through the Hall. He had his heavy War hammer and his bronze armor. Red Fire gave bright Light to the tall Stone walls. Thorin looked at the workers and smiled. He liked the Iron Fortress. It was his Home. He wanted to protect it.",
                "ru": "Под великой горой Железная Крепость была полна Огня и Металла. Старые Кузнецы создавали вещи день и ночь. Они ковали мечи, щиты и броню. Торин шел по Залу. У него был тяжелый Боевой молот и бронзовые доспехи. Красный Огонь давал яркий Свет высоким Каменным стенам. Торин смотрел на рабочих и улыбался. Ему нравилась Железная Крепость. Это был его Дом. Он хотел защитить его.",
                "chunkedEn": "[pt: Under the great mountain,] [s: the Iron Fortress] [v: was full] [pt: of Fire and Metal.]\n[s: Old Smiths] [v: made] [o: things] [adv: day and night.]\n[s: They] [v: made] [o: swords, shields and armor.]\n[s: Thorin] [v: walked] [pt: through the Hall.]\n[s: He] [v: had] [o: his heavy War hammer and his bronze armor.]\n[s: Red Fire] [v: gave] [o: bright Light] [pt: to the tall Stone walls.]\n[s: Thorin] [v: looked] [pt: at the workers] [c: and] [v: smiled.]\n[s: He] [v: liked] [o: the Iron Fortress.]\n[s: It] [v: was] [o: his Home.]\n[s: He] [v: wanted to protect] [o: it.]"
            },
            {
                "speaker": "thorin",
                "en": "After that, a big thing moved the Iron Fortress. Stones came down from the roof. The workers were afraid. They ran and left their tools on the floor. Thorin looked outside. He saw a big animal. It was the Ash Behemoth! It had heavy stone armor. It was Red and Black. The Ash Behemoth ran at the big steel door again and again. Every time, the Metal broke a little.",
                "ru": "После этого нечто огромное сотрясло Железную Крепость. Камни падали с крыши. Рабочие были напуганы. Они бежали и бросали свои инструменты на пол. Торин выглянул наружу. Он увидел огромное чудовище. Это был Пепельный Бегемот! У него была тяжелая каменная броня. Он был Красно-Черным. Пепельный Бегемот снова и снова таранил большую стальную дверь. Каждый раз металл немного ломался.",
                "chunkedEn": "[pt: After that,] [s: a big thing] [v: moved] [o: the Iron Fortress.]\n[s: Stones] [v: came down] [pt: from the roof.]\n[s: The workers] [v: were afraid.]\n[s: They] [v: ran] [c: and] [v: left] [o: their tools] [pt: on the floor.]\n[s: Thorin] [v: looked] [adv: outside.]\n[s: He] [v: saw] [o: a big animal.]\n[s: It] [v: was] [o: the Ash Behemoth!]\n[s: It] [v: had] [o: heavy stone armor.]\n[s: It] [v: was Red and Black.]\n[s: The Ash Behemoth] [v: ran] [pt: at the big steel door] [adv: again and again.]\n[adv: Every time,] [s: the Metal] [v: broke] [adv: a little.]"
            },
            {
                "speaker": "thorin",
                "en": "\"The door is breaking!\" a Smith called. \"If the Ash Behemoth comes in, we all die!\" Thorin ran to the door. He left his hammer on the floor. He took the big iron bar with his hands. He stood there and used all his Power. His face was red. His boots moved on the Stone floor. \"I can't protect the door alone!\" Thorin said. \"The Ash Behemoth is strong and I am weak now! Help me!\"",
                "ru": "\"Дверь ломается!\" — крикнул Кузнец. \"Если Пепельный Бегемот войдет, мы все погибнем!\" Торин побежал к двери. Он оставил свой молот на полу. Он схватил большую железную балку руками. Он стоял там и использовал всю свою Силу. Его лицо было красным. Его сапоги скользили по Каменному полу. \"Я не могу защитить дверь один!\" — сказал Торин. \"Пепельный Бегемот силен, а я сейчас слаб! Помогите мне!\"",
                "chunkedEn": "[s: \"The door] [v: is breaking!\"] [s: a Smith] [v: called.]\n[c: \"If] [s: the Ash Behemoth] [v: comes in,] [s: we all] [v: die!\"]\n[s: Thorin] [v: ran] [pt: to the door.]\n[s: He] [v: left] [o: his hammer] [pt: on the floor.]\n[s: He] [v: took] [o: the big iron bar] [pt: with his hands.]\n[s: He] [v: stood] [adv: there] [c: and] [v: used] [o: all his Power.]\n[s: His face] [v: was red.]\n[s: His boots] [v: moved] [pt: on the Stone floor.]\n[s: \"I] [v: can't protect] [o: the door] [adv: alone!\"] [s: Thorin] [v: said.]\n[s: \"The Ash Behemoth] [v: is strong] [c: and] [s: I] [v: am weak] [adv: now!]\n[v: Help] [o: me!\"]"
            },
            {
                "speaker": "freya",
                "en": "Soon, a bright Light came from the top window. It was Freya, the Valkyrie! She had steel armor and bright wings. She flew down fast and came next to Thorin. She took her spear and made the door strong. Blue Sparks came from her hands to the iron bar. \"Stand strong, Thorin!\" Freya said. The Ash Behemoth came at the door again, but the door stood.",
                "ru": "Вскоре яркий Свет засиял из верхнего окна. Это была Фрейя, Валькирия! У нее были стальные доспехи и сияющие крылья. Она быстро спустилась и встала рядом с Торином. Она взяла свое копье и укрепила дверь. Синие Искры полетели из ее рук в железную балку. \"Держись крепко, Торин!\" — сказала Фрейя. Пепельный Бегемот снова ударил в дверь, но дверь выстояла.",
                "chunkedEn": "[adv: Soon,] [s: a bright Light] [v: came] [pt: from the top window.]\n[s: It] [v: was] [o: Freya, the Valkyrie!]\n[s: She] [v: had] [o: steel armor and bright wings.]\n[s: She] [v: flew down fast] [c: and] [v: came] [pt: next to Thorin.]\n[s: She] [v: took] [o: her spear] [c: and] [v: made] [o: the door] [o: strong.]\n[s: Blue Sparks] [v: came] [pt: from her hands] [pt: to the iron bar.]\n[o: \"Stand strong,] [o: Thorin!\"] [s: Freya] [v: said.]\n[s: The Ash Behemoth] [v: came] [pt: at the door] [adv: again,] [c: but] [s: the door] [v: stood.]"
            },
            {
                "speaker": "selene",
                "en": "\"We can't do this from inside!\" Freya said. \"Someone needs to cut the Ash Behemoth from behind!\" Selena came out of the dark Shadow behind the Forge. Her purple eyes were cold and quiet. She had two daggers in her hands. \"Stand at the door,\" Selena said. \"The Ash Behemoth needs to look at you. I am going to go behind it.\" Thorin and Freya looked at Selena. \"Yes! Go!\" they said.",
                "ru": "\"Мы не справимся изнутри!\" — сказала Фрейя. \"Кто-то должен сразить Пепельного Бегемота со спины!\" Селена вышла из темной Тени позади Кузницы. Ее фиолетовые глаза были холодными и спокойными. В ее руках было два кинжала. \"Стойте у двери,\" — сказала Селена. \"Пепельный Бегемот должен смотреть на вас. Я обойду его сзади.\" Торин и Фрейя посмотрели на Селену. \"Да! Иди!\" — сказали они.",
                "chunkedEn": "[s: \"We] [v: can't do] [o: this] [pt: from inside!\"] [s: Freya] [v: said.]\n[s: \"Someone] [v: needs to cut] [o: the Ash Behemoth] [pt: from behind!\"]\n[s: Selena] [v: came out] [pt: of the dark Shadow] [pt: behind the Forge.]\n[s: Her purple eyes] [v: were cold and quiet.]\n[s: She] [v: had] [o: two daggers] [pt: in her hands.]\n[v: \"Stand] [pt: at the door,\"] [s: Selena] [v: said.]\n[s: \"The Ash Behemoth] [v: needs to look] [pt: at you.]\n[s: I] [v: am going to go] [pt: behind it.\"]\n[s: Thorin and Freya] [v: looked] [pt: at Selena.]\n[o: \"Yes! Go!\"] [s: they] [v: said.]"
            },
            {
                "speaker": "selene",
                "en": "Selena became like a Shadow. She went quickly through the small iron window of the Iron Fortress. Outside, the Ash Behemoth was ready to run again. Selena walked silently on the dark Cave wall. She jumped on the back of the Ash Behemoth. It never saw her. She was quick. She took her two daggers and cut its neck.",
                "ru": "Селена стала словно Тень. Она быстро проскользнула через маленькое железное окно Железной Крепости. Снаружи Пепельный Бегемот снова готовился к атаке. Селена бесшумно ступала по стене темной Пещеры. Она прыгнула на спину Пепельного Бегемота. Он совсем не заметил ее. Она была быстрой. Она взяла два кинжала и перерезала ему шею.",
                "chunkedEn": "[s: Selena] [v: became] [pt: like a Shadow.]\n[s: She] [v: went quickly] [pt: through the small iron window of the Iron Fortress.]\n[adv: Outside,] [s: the Ash Behemoth] [v: was ready to run] [adv: again.]\n[s: Selena] [v: walked silently] [pt: on the dark Cave wall.]\n[s: She] [v: jumped] [pt: on the back of the Ash Behemoth.]\n[s: It] [adv: never] [v: saw] [o: her.]\n[s: She] [v: was quick.]\n[s: She] [v: took] [o: her two daggers] [c: and] [v: cut] [o: its neck.]"
            },
            {
                "speaker": "thorin",
                "en": "The Ash Behemoth was in pain. It called out. After that, it came down on the ground. It never moved again. After a minute, Selena came back through the window. Thorin and Freya left the iron bar. They rested. Thorin took his hammer and smiled. \"By the Forge! You are great, Shadow girl!\" he said.",
                "ru": "Пепельный Бегемот взвыл от боли. Он закричал. После этого он рухнул на землю. Он больше никогда не двигался. Через минуту Селена вернулась через окно. Торин и Фрейя отпустили железную балку. Они перевели дух. Торин взял свой молот и улыбнулся. \"Клянусь Кузницей! Ты великолепна, девочка-Тень!\" — сказал он.",
                "chunkedEn": "[s: The Ash Behemoth] [v: was] [pt: in pain.]\n[s: It] [v: called out.]\n[pt: After that,] [s: it] [v: came down] [pt: on the ground.]\n[s: It] [adv: never] [v: moved] [adv: again.]\n[pt: After a minute,] [s: Selena] [v: came back] [pt: through the window.]\n[s: Thorin and Freya] [v: left] [o: the iron bar.]\n[s: They] [v: rested.]\n[s: Thorin] [v: took] [o: his hammer] [c: and] [v: smiled.]\n[o: \"By the Forge!] [s: You] [v: are] [o: great,] [o: Shadow girl!\"] [s: he] [v: said.]"
            },
            {
                "speaker": "freya",
                "en": "Freya smiled and gave her hand to Thorin and Selena. \"We are a team,\" Freya said. \"We are strong. No animal can break our walls. Now we are ready for another battle.\" The workers came back. They looked at the door. \"Thank you!\" said the Smiths. Then they all went to the Hall. They drank water and ate bread.",
                "ru": "Фрейя улыбнулась и протянула руку Торину и Селене. \"Мы команда,\" — сказала Фрейя. \"Мы сильны. Никакое чудовище не сможет сломать наши стены. Теперь мы готовы к следующей битве.\" Рабочие вернулись. Они посмотрели на дверь. \"Спасибо!\" — сказали Кузнецы. Затем все пошли в Зал. Они пили воду и ели хлеб.",
                "chunkedEn": "[s: Freya] [v: smiled] [c: and] [v: gave] [o: her hand] [pt: to Thorin and Selena.]\n[s: \"We] [v: are] [o: a team,\"] [s: Freya] [v: said.]\n[s: \"We] [v: are strong.]\n[s: No animal] [v: can break] [o: our walls.]\n[adv: Now] [s: we] [v: are ready] [pt: for another battle.\"]\n[s: The workers] [v: came back.]\n[s: They] [v: looked] [pt: at the door.]\n[o: \"Thank you!\"] [v: said] [s: the Smiths.]\n[adv: Then] [s: they all] [v: went] [pt: to the Hall.]\n[s: They] [v: drank] [o: water] [c: and] [v: ate] [o: bread.]"
            }
        ],
        "quiz": {
            "question": "How did Selena defeat the Ash Behemoth outside the Iron Fortress?",
            "options": [
                "She jumped on its back from the shadows and cut its neck with her daggers",
                "She shot it with giant ice arrows from the high window",
                "She smashed it with Thorin's heavy iron hammer"
            ],
            "correctIndex": 0,
            "rewardXp": 529
        },
        "backgroundImg": "images/backgrounds/bg_crystal_caverns.jpg",
        "locationEn": "Subterranean Iron Fortress",
        "locationRu": "Подземная Железная Крепость",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "Cold snow fell on the outpost of the Silver Shield. The mountain road was empty. It was quiet. Valerius and Frostina walked in the big square. Broken shields and broken spears were on the ground. Coal was also on the ground. The ground was cold and dirty. Nobody was there.",
                "ru": "Холодный снег падал на аванпост Серебряного Щита. Горная дорога была пуста. Было тихо. Валериус и Фростина шли по большой площади. Сломанные щиты и сломанные копья лежали на земле. Угли также были на земле. Земля была холодной и грязной. Там никого не было.",
                "chunkedEn": "[s: Cold snow] [v: fell] [pt: on the outpost of the Silver Shield.]\n[s: The mountain road] [v: was empty.]\n[s: It] [v: was quiet.]\n[s: Valerius and Frostina] [v: walked] [pt: in the big square.]\n[s: Broken shields and broken spears] [v: were] [pt: on the ground.]\n[s: Coal] [v: was] [adv: also] [pt: on the ground.]\n[s: The ground] [v: was cold and dirty.]\n[s: Nobody] [v: was] [adv: there.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius looked at the great iron door. His silver armor was bright in the grey winter light. He took a lock in his hand and looked at it. \"Look at the locks, Frostina,\" he said in a quiet voice. \"The war did not break this door. Someone opened it from the inside.\"",
                "ru": "Валериус посмотрел на огромную железную дверь. Его серебряные доспехи ярко сияли в сером зимнем свете. Он взял замок в руку и посмотрел на него. \"Посмотри на замки, Фростина,\" — сказал он тихим голосом. \"Война не ломала эту дверь. Кто-то открыл ее изнутри.\"",
                "chunkedEn": "[s: Valerius] [v: looked] [pt: at the great iron door.]\n[s: His silver armor] [v: was bright] [pt: in the grey winter light.]\n[s: He] [v: took] [o: a lock] [pt: in his hand] [c: and] [v: looked] [pt: at it.]\n[v: \"Look] [pt: at the locks,] [o: Frostina,\"] [s: he] [v: said] [pt: in a quiet voice.]\n[s: \"The war] [v: did not break] [o: this door.]\n[s: Someone] [v: opened] [o: it] [pt: from the inside.\"]"
            },
            {
                "speaker": "frostina",
                "en": "Frostina walked in the snow. Her white cloak moved in the cold wind. She had her ice staff in her hand. She looked at the empty rooms. \"The tales are true,\" she said. \"The warriors here did not lose a good fight. Their own master sold them.\"",
                "ru": "Фростина шла по снегу. Ее белый плащ развевался на холодном ветру. В руке у нее был ледяной посох. Она посмотрела на пустые комнаты. \"Сказания правдивы,\" — сказала она. \"Воины здесь не проиграли честный бой. Их собственный господин предал их.\"",
                "chunkedEn": "[s: Frostina] [v: walked] [pt: in the snow.]\n[s: Her white cloak] [v: moved] [pt: in the cold wind.]\n[s: She] [v: had] [o: her ice staff] [pt: in her hand.]\n[s: She] [v: looked] [pt: at the empty rooms.]\n[s: \"The tales] [v: are true,\"] [s: she] [v: said.]\n[s: \"The warriors here] [v: did not lose] [o: a good fight.]\n[s: Their own master] [v: sold] [o: them.\"]"
            },
            {
                "speaker": "valerius",
                "en": "They went into the big room. Maps were on the floor. An iron box was open and empty. Frostina took a map and looked at it. Valerius went to the stone fireplace. He looked at the coal. His finger touched a small piece of metal. He took it and cleaned the dark coal from it. It was a heavy gold ring.",
                "ru": "Они вошли в большую комнату. Карты лежали на полу. Железный ящик был открыт и пуст. Фростина взяла карту и посмотрела на нее. Валериус подошел к каменному камину. Он посмотрел на угли. Его палец коснулся маленького кусочка металла. Он взял его и счистил с него темную сажу. Это было тяжелое золотое кольцо.",
                "chunkedEn": "[s: They] [v: went] [pt: into the big room.]\n[s: Maps] [v: were] [pt: on the floor.]\n[s: An iron box] [v: was open and empty.]\n[s: Frostina] [v: took] [o: a map] [c: and] [v: looked] [pt: at it.]\n[s: Valerius] [v: went] [pt: to the stone fireplace.]\n[s: He] [v: looked] [pt: at the coal.]\n[s: His finger] [v: touched] [o: a small piece of metal.]\n[s: He] [v: took] [o: it] [c: and] [v: cleaned] [o: the dark coal] [pt: from it.]\n[s: It] [v: was] [o: a heavy gold ring.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius was afraid. His eyes were big. \"By the Light...\" he said in a quiet voice. \"This is the mark of the Grand Master of our Citadel! The Grand Master of the Silver Shield told the men to leave the border.\"",
                "ru": "Валериус был потрясен. Его глаза были широко раскрыты. \"Клянусь Светом...\" — сказал он тихим голосом. \"Это знак Великого Магистра нашей Цитадели! Великий Магистр Серебряного Щита приказал людям оставить границу.\"",
                "chunkedEn": "[s: Valerius] [v: was afraid.]\n[s: His eyes] [v: were big.]\n[o: \"By the Light...\"] [s: he] [v: said] [pt: in a quiet voice.]\n[s: \"This] [v: is] [o: the mark of the Grand Master of our Citadel!]\n[s: The Grand Master of the Silver Shield] [v: told] [o: the men to leave the border.\"]"
            },
            {
                "speaker": "frostina",
                "en": "Frostina took his arm. Her hand was soft on his shoulder. \"Our masters sold this place to the Shadow Cult,\" she said in a quiet voice. \"They wanted power and gold. They did not care if fire came to the villages. The bad people are not far away. They are inside the halls of our city, Valerius.\"",
                "ru": "Фростина взяла его за руку. Ее рука мягко легла на его плечо. \"Наши владыки продали это место Культу Теней,\" — сказала она тихим голосом. \"Они хотели власти и золота. Им было все равно, что огонь придет в деревни. Предатели не где-то далеко. Они внутри залов нашего города, Валериус.\"",
                "chunkedEn": "[s: Frostina] [v: took] [o: his arm.]\n[s: Her hand] [v: was soft] [pt: on his shoulder.]\n[s: \"Our masters] [v: sold] [o: this place] [pt: to the Shadow Cult,\"] [s: she] [v: said] [pt: in a quiet voice.]\n[s: \"They] [v: wanted] [o: power and gold.]\n[s: They] [v: did not care] [c: if] [s: fire] [v: came] [pt: to the villages.]\n[s: The bad people] [v: are not] [adv: far away.]\n[s: They] [v: are] [pt: inside the halls of our city,] [o: Valerius.\"]"
            },
            {
                "speaker": "frostina",
                "en": "Now three shadow stalkers jumped from the tower! Their daggers were black. \"Knights die and tell no tales!\" one assassin said. He ran to Valerius. \"Not today!\" Frostina called. She took her crystal staff. A blizzard came from the ground! It froze the three warriors. They were pieces of blue ice before they could fight.",
                "ru": "Вдруг три теневых преследователя спрыгнули с башни! Их кинжалы были черными. \"Рыцари умирают и не рассказывают историй!\" — сказал один убийца. Он побежал к Валериусу. \"Не сегодня!\" — крикнула Фростина. Она взяла свой хрустальный посох. Метель поднялась от земли! Она заморозила трех воинов. Они превратились в глыбы синего льда, прежде чем успели вступить в бой.",
                "chunkedEn": "[adv: Now] [s: three shadow stalkers] [v: jumped] [pt: from the tower!]\n[s: Their daggers] [v: were black.]\n[s: \"Knights] [v: die] [c: and] [v: tell] [o: no tales!\"] [s: one assassin] [v: said.]\n[s: He] [v: ran] [pt: to Valerius.]\n[o: \"Not today!\"] [s: Frostina] [v: called.]\n[s: She] [v: took] [o: her crystal staff.]\n[s: A blizzard] [v: came] [pt: from the ground!]\n[s: It] [v: froze] [o: the three warriors.]\n[s: They] [v: were] [o: pieces of blue ice] [c: before] [s: they] [v: could fight.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius stood up. He looked at the gold ring. He looked at the Eagle on his silver armor. He took the Eagle from his armor. He left it in the snow. \"My Honor is not for bad masters,\" he said. \"Now I see the truth. From this day, I help no king who sells his people to the Dark. I fight for good people and for the Light.\" Frostina smiled. \"Now we go and find Archmage Eldrin and our friends, Valerius,\" she said. \"We are going to bring the truth to the Light. We are going to end this war.\" Valerius took the gold ring. They walked from the outpost.",
                "ru": "Валериус поднялся. Он посмотрел на золотое кольцо. Он посмотрел на Орла на своих серебряных доспехах. Он сорвал Орла со своей брони. Он оставил его в снегу. \"Моя Честь не для дурных господ,\" — сказал он. \"Теперь я вижу правду. С этого дня я не служу ни одному королю, который предает свой народ Тьме. Я сражаюсь за добрых людей и за Свет.\" Фростина улыбнулась. \"Теперь мы пойдем и найдем Архимага Эльдрина и наших друзей, Валериус,\" — сказала она. \"Мы явим правду Свету. Мы положим конец этой войне.\" Валериус взял золотое кольцо. Они покинули аванпост.",
                "chunkedEn": "[s: Valerius] [v: stood up.]\n[s: He] [v: looked] [pt: at the gold ring.]\n[s: He] [v: looked] [pt: at the Eagle] [pt: on his silver armor.]\n[s: He] [v: took] [o: the Eagle] [pt: from his armor.]\n[s: He] [v: left] [o: it] [pt: in the snow.]\n[s: \"My Honor] [v: is not] [pt: for bad masters,\"] [s: he] [v: said.]\n[adv: \"Now] [s: I] [v: see] [o: the truth.]\n[pt: From this day,] [s: I] [v: help] [o: no king] [s: who] [v: sells] [o: his people] [pt: to the Dark.]\n[s: I] [v: fight] [pt: for good people] [c: and] [pt: for the Light.\"]\n[s: Frostina] [v: smiled.]\n[adv: \"Now] [s: we] [v: go] [c: and] [v: find] [o: Archmage Eldrin and our friends, Valerius,\"] [s: she] [v: said.]\n[s: \"We] [v: are going to bring] [o: the truth] [pt: to the Light.]\n[s: We] [v: are going to end] [o: this war.\"]\n[s: Valerius] [v: took] [o: the gold ring.]\n[s: They] [v: walked] [pt: from the outpost.]"
            }
        ],
        "quiz": {
            "question": "What did Valerius do after finding the Grand Master's gold ring in the fireplace?",
            "options": [
                "He tore the Eagle crest from his armor and renounced his oath to corrupt rulers",
                "He joined the Shadow Cult and gave them his silver sword",
                "He hid the ring and returned to the Citadel to become a lord"
            ],
            "correctIndex": 0,
            "rewardXp": 473
        },
        "backgroundImg": "images/backgrounds/bg_castle.jpg",
        "locationEn": "The Fallen Silver Outpost",
        "locationRu": "Павший Серебряный Аванпост",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "It is a cold, grey day. The rain falls on the border river. Black rocks stand between three countries: the Silver Citadel, the Mountain Forge, and the Emerald Forest. In the center of the valley stands the Border Stone. Three men stand on the rocks. They have gold paper in their hands. The wind is strong. The men speak with big voices.",
                "ru": "Это холодный, серый день. Дождь падает на пограничную реку. Черные скалы высятся между тремя странами: Серебряной Цитаделью, Горным Горном и Изумрудным Лесом. В центре долины стоит Межевой Камень. Трое мужчин стоят на скалах. В их руках золотые свитки. Ветер силен. Мужчины говорят громкими голосами.",
                "chunkedEn": "[s: It] [v: is] [o: a cold, grey day.]\n[s: The rain] [v: falls] [pt: on the border river.]\n[s: Black rocks] [v: stand] [pt: between three countries: the Silver Citadel, the Mountain Forge, and the Emerald Forest.]\n[pt: In the center of the valley] [v: stands] [s: the Border Stone.]\n[s: Three men] [v: stand] [pt: on the rocks.]\n[s: They] [v: have] [o: gold paper] [pt: in their hands.]\n[s: The wind] [v: is strong.]\n[s: The men] [v: speak] [pt: with big voices.]"
            },
            {
                "speaker": "valerius",
                "en": "\"Hear us! Valerius and Astraea can't live with the Silver Shield now. Thorin, Ignis, and Selena can't live in the Mountain Forge now. Oberon, Frostina, and Zephyr can't live in the Emerald Forest now. Go away forever!\" The three men leave the valley. It is quiet. Now eight people come to the river from three paths. They are heroes.",
                "ru": "\"Услышьте нас! Валериус и Астрея не могут больше жить с Серебряным Щитом. Торин, Игнис и Селена не могут больше жить в Горном Горне. Оберон, Фростина и Зефир не могут больше жить в Изумрудном Лесу. Уходите навсегда!\" Трое мужчин покидают долину. Тихо. Теперь восемь человек подходят к реке с трех троп. Они — герои.",
                "chunkedEn": "[o: \"Hear us!]\n[s: Valerius and Astraea] [v: can't live] [pt: with the Silver Shield] [adv: now.]\n[s: Thorin, Ignis, and Selena] [v: can't live] [pt: in the Mountain Forge] [adv: now.]\n[s: Oberon, Frostina, and Zephyr] [v: can't live] [pt: in the Emerald Forest] [adv: now.]\n[v: Go away] [adv: forever!\"]\n[s: The three men] [v: leave] [o: the valley.]\n[s: It] [v: is quiet.]\n[adv: Now] [s: eight people] [v: come] [pt: to the river] [pt: from three paths.]\n[s: They] [v: are] [o: heroes.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius and Astraea come from the north. They have silver armor and star light. Thorin, Ignis, and Selena come from the mountain. They have big hammers and fire staffs. Oberon, Frostina, and Zephyr come from the forest. They have wood bows and ice magic. The heroes meet at the Border Stone. They look at each other. Nobody speaks. They have no home. They have no money. They have no realm. Their kings say, \"Go away!\" because the heroes don't want a war.",
                "ru": "Валериус и Астрея идут с севера. У них серебряные доспехи и звездный свет. Торин, Игнис и Селена идут с горы. У них большие молоты и огненные посохи. Оберон, Фростина и Зефир идут из леса. У них деревянные луки и магия льда. Герои встречаются у Межевого Камня. Они смотрят друг на друга. Никто не говорит. У них нет дома. У них нет денег. У них нет королевства. Их короли говорят: \"Уходите!\", потому что герои не хотят войны.",
                "chunkedEn": "[s: Valerius and Astraea] [v: come] [pt: from the north.]\n[s: They] [v: have] [o: silver armor and star light.]\n[s: Thorin, Ignis, and Selena] [v: come] [pt: from the mountain.]\n[s: They] [v: have] [o: big hammers and fire staffs.]\n[s: Oberon, Frostina, and Zephyr] [v: come] [pt: from the forest.]\n[s: They] [v: have] [o: wood bows and ice magic.]\n[s: The heroes] [v: meet] [pt: at the Border Stone.]\n[s: They] [v: look] [pt: at each other.]\n[s: Nobody] [v: speaks.]\n[s: They] [v: have] [o: no home.]\n[s: They] [v: have] [o: no money.]\n[s: They] [v: have] [o: no realm.]\n[s: Their kings] [v: say,] [o: \"Go away!\"] [c: because] [s: the heroes] [v: don't want] [o: a war.]"
            },
            {
                "speaker": "oberon",
                "en": "Astraea looks at the sky. The rain is cold. She takes a blanket from her bag and gives the blanket to Frostina. \"Thank you,\" Frostina says. Selena takes a coat from her bag. She gives the coat to Zephyr. \"Thank you!\" Zephyr says. Oberon touches the old stone with his hand. \"We have no home today,\" the forest guard says. \"Our people say we are bad. But we choose peace and love.\"",
                "ru": "Астрея смотрит на небо. Дождь холодный. Она достает одеяло из сумки и дает одеяло Фростине. \"Спасибо,\" — говорит Фростина. Селена достает плащ из сумки. Она дает плащ Зефиру. \"Спасибо!\" — говорит Зефир. Оберон касается старого камня рукой. \"У нас нет дома сегодня,\" — говорит страж леса. \"Наш народ говорит, что мы плохие. Но мы выбираем мир и любовь.\"",
                "chunkedEn": "[s: Astraea] [v: looks] [pt: at the sky.]\n[s: The rain] [v: is cold.]\n[s: She] [v: takes] [o: a blanket] [pt: from her bag] [c: and] [v: gives] [o: the blanket] [pt: to Frostina.]\n[o: \"Thank you,\"] [s: Frostina] [v: says.]\n[s: Selena] [v: takes] [o: a coat] [pt: from her bag.]\n[s: She] [v: gives] [o: the coat] [pt: to Zephyr.]\n[o: \"Thank you!\"] [s: Zephyr] [v: says.]\n[s: Oberon] [v: touches] [o: the old stone] [pt: with his hand.]\n[s: \"We] [v: have] [o: no home] [pt: today,\"] [s: the forest guard] [v: says.]\n[s: \"Our people] [v: say] [s: we] [v: are bad.]\n[c: But] [s: we] [v: choose] [o: peace and love.\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius stands tall. \"A name from bad kings is nothing,\" the knight says. \"They sell our outposts to the dark. They want us to fight each other. The Shadow Cult grows. The kings don't say the truth. Today we have freedom.\" Thorin smiles. He is happy. Everyone looks at him. \"Why are you happy, Thorin?\" Selena asks. She smiles too.",
                "ru": "Валериус стоит прямо. \"Имя от дурных королей ничего не значит,\" — говорит рыцарь. \"Они продают наши аванпосты тьме. Они хотят, чтобы мы сражались друг с другом. Культ Теней растет. Короли не говорят правды. Сегодня у нас есть свобода.\" Торин улыбается. Он счастлив. Все смотрят на него. \"Почему ты рад, Торин?\" — спрашивает Селена. Она тоже улыбается.",
                "chunkedEn": "[s: Valerius] [v: stands] [adv: tall.]\n[s: \"A name from bad kings] [v: is] [o: nothing,\"] [s: the knight] [v: says.]\n[s: \"They] [v: sell] [o: our outposts] [pt: to the dark.]\n[s: They] [v: want] [o: us to fight each other.]\n[s: The Shadow Cult] [v: grows.]\n[s: The kings] [v: don't say] [o: the truth.]\n[pt: Today] [s: we] [v: have] [o: freedom.\"]\n[s: Thorin] [v: smiles.]\n[s: He] [v: is happy.]\n[s: Everyone] [v: looks] [pt: at him.]\n[o: \"Why] [v: are] [s: you] [o: happy, Thorin?\"] [s: Selena] [v: asks.]\n[s: She] [v: smiles] [adv: too.]"
            },
            {
                "speaker": "thorin",
                "en": "\"Because we have no masters now!\" Thorin says. \"No king says, 'Go and fight!' We are the strongest warriors and wizards in the realm. We stand next to each other. Good! Now we can protect the world.\" Ignis has a red flame in his hand. \"Thorin is right,\" he says. \"We aren't three teams now. We are one team.\" Then Ignis takes wood from the ground and makes a small fire. \"Come here,\" he says. \"The fire is warm.\" The heroes come near the fire. Frostina looks at the flame and smiles. \"It is hot,\" she says.",
                "ru": "\"Потому что теперь у нас нет господ!\" — говорит Торин. \"Ни один король не говорит: 'Иди и сражайся!' Мы — сильнейшие воины и маги в королевстве. Мы стоим плечом к плечу. Отлично! Теперь мы можем защитить мир.\" У Игниса в руке красное пламя. \"Торин прав,\" — говорит он. \"Мы больше не три команды. Мы — одна команда.\" Затем Игнис берет ветки с земли и разводит небольшой костер. \"Идите сюда,\" — говорит он. \"Огонь теплый.\" Герои подходят к костру. Фростина смотрит на пламя и улыбается. \"Он горячий,\" — говорит она.",
                "chunkedEn": "[c: \"Because] [s: we] [v: have] [o: no masters] [adv: now!\"] [s: Thorin] [v: says.]\n[s: \"No king] [v: says,] [o: 'Go and fight!']\n[s: We] [v: are] [o: the strongest warriors and wizards] [pt: in the realm.]\n[s: We] [v: stand] [pt: next to each other.]\n[o: Good!]\n[adv: Now] [s: we] [v: can protect] [o: the world.\"]\n[s: Ignis] [v: has] [o: a red flame] [pt: in his hand.]\n[s: \"Thorin] [v: is right,\"] [s: he] [v: says.]\n[s: \"We] [v: aren't] [o: three teams] [adv: now.]\n[s: We] [v: are] [o: one team.\"]\n[adv: Then] [s: Ignis] [v: takes] [o: wood] [pt: from the ground] [c: and] [v: makes] [o: a small fire.]\n[v: \"Come] [adv: here,\"] [s: he] [v: says.]\n[s: \"The fire] [v: is warm.\"]\n[s: The heroes] [v: come] [pt: near the fire.]\n[s: Frostina] [v: looks] [pt: at the flame] [c: and] [v: smiles.]\n[s: \"It] [v: is hot,\"] [s: she] [v: says.]"
            },
            {
                "speaker": "oberon",
                "en": "Frostina takes bread from her bag. She gives the bread to all the heroes. Thorin cuts the bread with his knife. They eat the bread and drink water from the river. \"Good bread!\" Thorin says. Astraea washes her hands in the river. Valerius cleans his shield with a coat. Valerius asks, \"Do we have a map?\" \"Yes, I have a map,\" Oberon answers. He takes the map from his bag. The heroes look at the map with him. Oberon shows the path with his finger. \"We go north, and then we go to the mountain,\" he says.",
                "ru": "Фростина достает хлеб из сумки. Она дает хлеб всем героям. Торин режет хлеб своим ножом. Они едят хлеб и пьют воду из реки. \"Хороший хлеб!\" — говорит Торин. Астрея моет руки в реке. Валериус чистит свой щит плащом. Валериус спрашивает: \"У нас есть карта?\" \"Да, у меня есть карта,\" — отвечает Оберон. Он достает карту из сумки. Герои смотрят на карту вместе с ним. Оберон показывает путь пальцем. \"Мы идем на север, а затем поднимаемся на гору,\" — говорит он.",
                "chunkedEn": "[s: Frostina] [v: takes] [o: bread] [pt: from her bag.]\n[s: She] [v: gives] [o: the bread] [pt: to all the heroes.]\n[s: Thorin] [v: cuts] [o: the bread] [pt: with his knife.]\n[s: They] [v: eat] [o: the bread] [c: and] [v: drink] [o: water] [pt: from the river.]\n[o: \"Good bread!\"] [s: Thorin] [v: says.]\n[s: Astraea] [v: washes] [o: her hands] [pt: in the river.]\n[s: Valerius] [v: cleans] [o: his shield] [pt: with a coat.]\n[s: Valerius] [v: asks,] [o: \"Do we have a map?\"]\n[o: \"Yes,] [s: I] [v: have] [o: a map,\"] [s: Oberon] [v: answers.]\n[s: He] [v: takes] [o: the map] [pt: from his bag.]\n[s: The heroes] [v: look] [pt: at the map] [pt: with him.]\n[s: Oberon] [v: shows] [o: the path] [pt: with his finger.]\n[s: \"We] [v: go] [adv: north,] [c: and] [adv: then] [s: we] [v: go] [pt: to the mountain,\"] [s: he] [v: says.]"
            },
            {
                "speaker": "thorin",
                "en": "Zephyr takes an arrow and smiles. \"Astral Peak is far, but we can go there. Archmage Eldrin waits for us in the Spire.\" The heroes rest near the fire for one hour. Selena checks her staff. Thorin looks at his hammer. Zephyr counts the arrows and closes his bag. Astraea takes her silver bowl. The bowl has warm star light. The light is on all eight heroes. \"We go to the light,\" she says. \"We are one.\" Ignis stops the fire. The heroes take their bags and close them. They look at the tall mountains. Then all eight start to walk.",
                "ru": "Зефир берет стрелу и улыбается. \"Астральный Пик далеко, но мы сможем дойти туда. Архимаг Эльдрин ждет нас в Шпиле.\" Герои отдыхают у костра один час. Селена проверяет свой посох. Торин осматривает свой молот. Зефир пересчитывает стрелы и закрывает сумку. Астрея берет свою серебряную чашу. В чаше теплый звездный свет. Свет озаряет всех восьмерых героев. \"Мы идем к свету,\" — говорит она. \"Мы едины.\" Игнис тушит костер. Герои берут свои сумки и закрывают их. Они смотрят на высокие горы. Затем все восемь начинают свой путь.",
                "chunkedEn": "[s: Zephyr] [v: takes] [o: an arrow] [c: and] [v: smiles.]\n[s: \"Astral Peak] [v: is] [adv: far,] [c: but] [s: we] [v: can go] [adv: there.]\n[s: Archmage Eldrin] [v: waits] [pt: for us] [pt: in the Spire.\"]\n[s: The heroes] [v: rest] [pt: near the fire] [pt: for one hour.]\n[s: Selena] [v: checks] [o: her staff.]\n[s: Thorin] [v: looks] [pt: at his hammer.]\n[s: Zephyr] [v: counts] [o: the arrows] [c: and] [v: closes] [o: his bag.]\n[s: Astraea] [v: takes] [o: her silver bowl.]\n[s: The bowl] [v: has] [o: warm star light.]\n[s: The light] [v: is] [pt: on all eight heroes.]\n[s: \"We] [v: go] [pt: to the light,\"] [s: she] [v: says.]\n[s: \"We] [v: are] [o: one.\"]\n[s: Ignis] [v: stops] [o: the fire.]\n[s: The heroes] [v: take] [o: their bags] [c: and] [v: close] [o: them.]\n[s: They] [v: look] [pt: at the tall mountains.]\n[adv: Then] [s: all eight] [v: start to walk.]"
            }
        ],
        "quiz": {
            "question": "Why did the heroes decide to unite at the Border Stone?",
            "options": [
                "Because they were exiled by corrupt kings and chose to save the world together as one team",
                "Because they wanted to steal gold from the Mountain Forge",
                "Because they surrendered to the Shadow Cult"
            ],
            "correctIndex": 0,
            "rewardXp": 630
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "The Three Clan Border Stone",
        "locationRu": "Межевой Камень Трех Кланов",
        "campaignId": "fantasy"
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
                "speaker": "zephyr",
                "en": "The mountains were tall and cold. The wind was strong. White snow was on the path. Valerius, Thorin, Oberon and their friends climbed to the sky. They walked and walked. Before them was the great Astral Peak. It was near the grey clouds.",
                "ru": "Горы были высокими и холодными. Ветер был сильным. Белый снег лежал на тропе. Валериус, Торин, Оберон и их друзья поднимались к небу. Они шли и шли. Перед ними высился великий Астральный Пик. Он касался серых облаков.",
                "chunkedEn": "[s: The mountains] [v: were] [o: tall and cold.]\n[s: The wind] [v: was strong.]\n[s: White snow] [v: was] [pt: on the path.]\n[s: Valerius, Thorin, Oberon and their friends] [v: climbed] [pt: to the sky.]\n[s: They] [v: walked and walked.]\n[pt: Before them] [v: was] [s: the great Astral Peak.]\n[s: It] [v: was] [pt: near the grey clouds.]"
            },
            {
                "speaker": "zephyr",
                "en": "Valerius looked at the map. \"The road is long,\" he said. Thorin took a drink of water. Oberon ate bread. They rested, and now they walked again. Oberon looked at the peak. \"It is far,\" he said. Thorin said, \"I am cold.\" Oberon said, \"I am also cold.\"",
                "ru": "Валериус посмотрел на карту. \"Дорога длинная,\" — сказал он. Торин выпил воды. Оберон съел хлеба. Они отдохнули, и теперь снова пошли. Оберон посмотрел на пик. \"Он далеко,\" — сказал он. Торин сказал: \"Мне холодно.\" Оберон сказал: \"Мне тоже холодно.\"",
                "chunkedEn": "[s: Valerius] [v: looked] [pt: at the map.]\n[s: \"The road] [v: is long,\"] [s: he] [v: said.]\n[s: Thorin] [v: took] [o: a drink of water.]\n[s: Oberon] [v: ate] [o: bread.]\n[s: They] [v: rested,] [c: and] [adv: now] [s: they] [v: walked] [adv: again.]\n[s: Oberon] [v: looked] [pt: at the peak.]\n[s: \"It] [v: is far,\"] [s: he] [v: said.]\n[s: Thorin] [v: said,] [o: \"I] [v: am cold.\"]\n[s: Oberon] [v: said,] [o: \"I] [v: am] [adv: also] [o: cold.\"]"
            },
            {
                "speaker": "zephyr",
                "en": "Zephyr ran before the group. He was a young scout. He jumped across the ice. His green cloak was in the wind. The wind was not bad for him. It was his friend. He had a silver bow. He looked for a path. The path was narrow and icy. \"Friends, stand here!\" Zephyr called. \"The ice is weak. It is dangerous below! Follow me!\" Zephyr smiled. \"We follow you,\" Oberon said.",
                "ru": "Зефир бежал впереди группы. Он был молодым разведчиком. Он перепрыгивал через лед. Его зеленый плащ развевался на ветру. Ветер не был для него помехой. Он был его другом. У него был серебряный лук. Он искал тропу. Тропа была узкой и ледяной. \"Друзья, стойте здесь!\" — крикнул Зефир. \"Лед слаб. Внизу опасно! Следуйте за мной!\" Зефир улыбнулся. \"Мы идем за тобой,\" — сказал Оберон.",
                "chunkedEn": "[s: Zephyr] [v: ran] [pt: before the group.]\n[s: He] [v: was] [o: a young scout.]\n[s: He] [v: jumped] [pt: across the ice.]\n[s: His green cloak] [v: was] [pt: in the wind.]\n[s: The wind] [v: was not bad] [pt: for him.]\n[s: It] [v: was] [o: his friend.]\n[s: He] [v: had] [o: a silver bow.]\n[s: He] [v: looked] [pt: for a path.]\n[s: The path] [v: was narrow and icy.]\n[o: \"Friends,] [v: stand] [adv: here!\"] [s: Zephyr] [v: called.]\n[s: \"The ice] [v: is weak.]\n[s: It] [v: is dangerous] [adv: below!]\n[v: Follow] [o: me!\"]\n[s: Zephyr] [v: smiled.]\n[s: \"We] [v: follow] [o: you,\"] [s: Oberon] [v: said.]"
            },
            {
                "speaker": "selene",
                "en": "Selena was quiet. She walked on the snow like a shadow. The cold wind was not a problem for her. She helped Thorin and Oberon. She gave them her hand. The mountain was hard, but they climbed. Selena looked into the fog. \"The wind is strong,\" she said. \"Something is looking at us. It is above us.\"",
                "ru": "Селена была тихой. Она ступала по снегу, словно тень. Холодный ветер не был для нее проблемой. Она помогала Торину и Оберону. Она подавала им руку. Гора была крутой, но они поднимались. Селена посмотрела в туман. \"Ветер сильный,\" — сказала она. \"Что-то смотрит на нас. Оно над нами.\"",
                "chunkedEn": "[s: Selena] [v: was quiet.]\n[s: She] [v: walked] [pt: on the snow] [pt: like a shadow.]\n[s: The cold wind] [v: was not] [o: a problem] [pt: for her.]\n[s: She] [v: helped] [o: Thorin and Oberon.]\n[s: She] [v: gave] [o: them] [o: her hand.]\n[s: The mountain] [v: was hard,] [c: but] [s: they] [v: climbed.]\n[s: Selena] [v: looked] [pt: into the fog.]\n[s: \"The wind] [v: is strong,\"] [s: she] [v: said.]\n[s: \"Something] [v: is looking] [pt: at us.]\n[s: It] [v: is] [pt: above us.\"]"
            },
            {
                "speaker": "zephyr",
                "en": "At this moment, three Ice Specters came from the rocks! They were ice and dark. They had cold voices. They sent ice at the heroes. The heroes were afraid. \"Protect the friends!\" Zephyr said. He took his bow. He made three arrows fly. Two Ice Specters died.",
                "ru": "В этот миг три Ледяных Призрака появились из скал! Они были из льда и тьмы. У них были холодные голоса. Они метали лед в героев. Герои испугались. \"Защищайте друзей!\" — крикнул Зефир. Он взял свой лук. Он выпустил три стрелы. Два Ледяных Призрака погибли.",
                "chunkedEn": "[pt: At this moment,] [s: three Ice Specters] [v: came] [pt: from the rocks!]\n[s: They] [v: were] [o: ice and dark.]\n[s: They] [v: had] [o: cold voices.]\n[s: They] [v: sent] [o: ice] [pt: at the heroes.]\n[s: The heroes] [v: were afraid.]\n[v: \"Protect] [o: the friends!\"] [s: Zephyr] [v: said.]\n[s: He] [v: took] [o: his bow.]\n[s: He] [v: made] [o: three arrows fly.]\n[s: Two Ice Specters] [v: died.]"
            },
            {
                "speaker": "selene",
                "en": "At the same moment, Selena went into the shadow. Now she was behind the last Ice Specter. She had her daggers. She cut it. The last Ice Specter died. Now there were no Ice Specters. Valerius said, \"Thank you, Zephyr and Selena. We are a good team.\" Thorin and Oberon smiled. The heroes were happy.",
                "ru": "В тот же миг Селена шагнула в тень. Теперь она была позади последнего Ледяного Призрака. У нее были кинжалы. Она поразила его. Последний Ледяной Призрак погиб. Теперь Ледяных Призраков не осталось. Валериус сказал: \"Спасибо, Зефир и Селена. Мы отличная команда.\" Торин и Оберон улыбнулись. Герои были счастливы.",
                "chunkedEn": "[pt: At the same moment,] [s: Selena] [v: went] [pt: into the shadow.]\n[adv: Now] [s: she] [v: was] [pt: behind the last Ice Specter.]\n[s: She] [v: had] [o: her daggers.]\n[s: She] [v: cut] [o: it.]\n[s: The last Ice Specter] [v: died.]\n[adv: Now] [v: there were] [s: no Ice Specters.]\n[s: Valerius] [v: said,] [o: \"Thank you,] [o: Zephyr and Selena.]\n[s: We] [v: are] [o: a good team.\"]\n[s: Thorin and Oberon] [v: smiled.]\n[s: The heroes] [v: were happy.]"
            },
            {
                "speaker": "eldrin",
                "en": "The heroes climbed to the last peak. The wind stopped. The clouds went away. Warm gold sunlight shone on the peak. At the top of the mountain was a big tower. It was blue and shining. The walls were crystal. They looked like a big diamond. Now the heroes came near. The big doors opened. It was magic.",
                "ru": "Герои поднялись на последнюю вершину. Ветер стих. Облака рассеялись. Теплый золотой солнечный свет озарил пик. На вершине горы стояла большая башня. Она была синей и сияющей. Стены были хрустальными. Они выглядели как огромный алмаз. Теперь герои подошли близко. Большие двери распахнулись. Это была магия.",
                "chunkedEn": "[s: The heroes] [v: climbed] [pt: to the last peak.]\n[s: The wind] [v: stopped.]\n[s: The clouds] [v: went away.]\n[s: Warm gold sunlight] [v: shone] [pt: on the peak.]\n[pt: At the top of the mountain] [v: was] [s: a big tower.]\n[s: It] [v: was blue and shining.]\n[s: The walls] [v: were] [o: crystal.]\n[s: They] [v: looked] [pt: like a big diamond.]\n[adv: Now] [s: the heroes] [v: came] [adv: near.]\n[s: The big doors] [v: opened.]\n[s: It] [v: was] [o: magic.]"
            },
            {
                "speaker": "eldrin",
                "en": "An old wizard came out. He had long white hair and a long blue coat. He had a tall staff and a big star crystal. His eyes were bright and warm. He was Grand Archmage Eldrin. \"Welcome to the Astral Spire, brave heroes,\" Eldrin said. \"You lost your homes, but you found true friends. I waited for this day for a long time. Come inside. Our world needs you now.\" Valerius looked at his friends. \"Thank you, Eldrin. We are ready,\" he said. The heroes went inside.",
                "ru": "Старый волшебник вышел наружу. У него были длинные белые волосы и длинная синяя мантия. У него был высокий посох и большой звездный кристалл. Его глаза были яркими и теплыми. Он был Великим Архимагом Эльдрином. \"Добро пожаловать в Астральный Шпиль, храбрые герои,\" — сказал Эльдрин. \"Вы потеряли свои дома, но обрели верных друзей. Я ждал этого дня очень долго. Входите. Наш мир нуждается в вас.\" Валериус посмотрел на друзей. \"Спасибо, Эльдрин. Мы готовы,\" — сказал он. Герои вошли внутрь.",
                "chunkedEn": "[s: An old wizard] [v: came out.]\n[s: He] [v: had] [o: long white hair and a long blue coat.]\n[s: He] [v: had] [o: a tall staff and a big star crystal.]\n[s: His eyes] [v: were bright and warm.]\n[s: He] [v: was] [o: Grand Archmage Eldrin.]\n[o: \"Welcome] [pt: to the Astral Spire,] [o: brave heroes,\"] [s: Eldrin] [v: said.]\n[s: \"You] [v: lost] [o: your homes,] [c: but] [s: you] [v: found] [o: true friends.]\n[s: I] [v: waited] [pt: for this day] [pt: for a long time.]\n[v: Come] [adv: inside.]\n[s: Our world] [v: needs] [o: you] [adv: now.\"]\n[s: Valerius] [v: looked] [pt: at his friends.]\n[o: \"Thank you, Eldrin.]\n[s: We] [v: are ready,\"] [s: he] [v: said.]\n[s: The heroes] [v: went] [adv: inside.]"
            }
        ],
        "quiz": {
            "question": "Who welcomed the eight heroes at the top of the Astral Peak?",
            "options": [
                "Grand Archmage Eldrin at the Astral Spire",
                "The king of the Silver Citadel",
                "An Ice Specter from the mountain"
            ],
            "correctIndex": 0,
            "rewardXp": 466
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "The Razor Crest of Astral Peak",
        "locationRu": "Ледяной Гребень Астрального Пика",
        "campaignId": "fantasy"
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
                "speaker": "eldrin",
                "en": "The heavy crystal doors closed behind the heroes. They were inside the Astral Spire. The air was warm. It smelled old, like old books. Eldrin walked into a big hall. The heroes came after him. Thousands of books were flying in the air. They were like bright stars in the night sky. The heroes looked at the books. Astraea smiled. Ignis said, \"This hall is amazing!\"",
                "ru": "Тяжелые хрустальные двери закрылись за героями. Они были внутри Астрального Шпиля. Воздух был теплым. Он пах стариной, словно старые книги. Эльдрин вошел в большой зал. Герои последовали за ним. Тысячи книг парили в воздухе. Они были подобны ярким звездам на ночном небе. Герои смотрели на книги. Астрея улыбнулась. Игнис сказал: \"Этот зал великолепен!\"",
                "chunkedEn": "[s: The heavy crystal doors] [v: closed] [pt: behind the heroes.]\n[s: They] [v: were] [pt: inside the Astral Spire.]\n[s: The air] [v: was warm.]\n[s: It] [v: smelled] [o: old, like old books.]\n[s: Eldrin] [v: walked] [pt: into a big hall.]\n[s: The heroes] [v: came] [pt: after him.]\n[s: Thousands of books] [v: were flying] [pt: in the air.]\n[s: They] [v: were] [pt: like bright stars in the night sky.]\n[s: The heroes] [v: looked] [pt: at the books.]\n[s: Astraea] [v: smiled.]\n[s: Ignis] [v: said,] [o: \"This hall is amazing!\"]"
            },
            {
                "speaker": "eldrin",
                "en": "\"Welcome to the Sanctuary of Old Runes,\" Eldrin said. He had his staff in his hand. \"Here you can see the history of our three realms. People forgot it.\" Eldrin touched the stone floor with his staff. A big map came from the staff. It was gold and blue. It was made of stars and light. The map showed the Silver Citadel, the Mountain Forge, and the Emerald Forest. In the center of the valley, it showed the dark Ash Rift.",
                "ru": "\"Добро пожаловать в Святилище Древних Рун,\" — сказал Эльдрин. В руке у него был посох. \"Здесь вы можете увидеть историю наших трех королевств. Люди забыли ее.\" Эльдрин коснулся каменного пола посохом. Большая карта появилась из посоха. Она была золотой и синей. Она была соткана из звезд и света. Карта показывала Серебряную Цитадель, Горный Горн и Изумрудный Лес. В центре долины она показывала темный Пепельный Разлом.",
                "chunkedEn": "[o: \"Welcome] [pt: to the Sanctuary of Old Runes,\"] [s: Eldrin] [v: said.]\n[s: He] [v: had] [o: his staff] [pt: in his hand.]\n[o: \"Here] [s: you] [v: can see] [o: the history of our three realms.]\n[s: People] [v: forgot] [o: it.\"]\n[s: Eldrin] [v: touched] [o: the stone floor] [pt: with his staff.]\n[s: A big map] [v: came] [pt: from the staff.]\n[s: It] [v: was gold and blue.]\n[s: It] [v: was made] [pt: of stars and light.]\n[s: The map] [v: showed] [o: the Silver Citadel, the Mountain Forge, and the Emerald Forest.]\n[pt: In the center of the valley,] [s: it] [v: showed] [o: the dark Ash Rift.]"
            },
            {
                "speaker": "eldrin",
                "en": "\"Look at the valley,\" Eldrin said in a quiet voice. \"People think the Ash Rift came from the earth. But that is not the truth.\" Astraea came near the map. Her silver bowl began to sing. She looked at the paths of light. The paths went from the three realms to the Ash Rift. \"This is a magic lock!\" Astraea said. \"The Ash Rift is an old lock!\"",
                "ru": "\"Посмотрите на долину,\" — сказал Эльдрин тихим голосом. \"Люди думают, что Пепельный Разлом возник из земли. Но это неправда.\" Астрея подошла к карте. Ее серебряная чаша запела. Она посмотрела на пути света. Пути шли от трех королевств к Пепельному Разлому. \"Это магический замок!\" — сказала Астрея. \"Пепельный Разлом — это древний замок!\"",
                "chunkedEn": "[v: \"Look] [pt: at the valley,\"] [s: Eldrin] [v: said] [pt: in a quiet voice.]\n[s: \"People] [v: think] [s: the Ash Rift] [v: came] [pt: from the earth.]\n[c: But] [s: that] [v: is not] [o: the truth.\"]\n[s: Astraea] [v: came] [pt: near the map.]\n[s: Her silver bowl] [v: began to sing.]\n[s: She] [v: looked] [pt: at the paths of light.]\n[s: The paths] [v: went] [pt: from the three realms] [pt: to the Ash Rift.]\n[s: \"This] [v: is] [o: a magic lock!\"] [s: Astraea] [v: said.]\n[s: \"The Ash Rift] [v: is] [o: an old lock!\"]"
            },
            {
                "speaker": "eldrin",
                "en": "\"Yes,\" Eldrin said. \"A thousand years ago, the first kings of the three realms were a team. They fought the Ash Titan. The Ash Titan was big and strong. They could not win. So they made a big lock under the ground in the center of the valley.\"",
                "ru": "\"Да,\" — сказал Эльдрин. \"Тысячу лет назад первые короли трех королевств были командой. Они сражались с Пепельным Титаном. Пепельный Титан был огромным и сильным. Они не могли победить. Поэтому они создали великий замок под землей в центре долины.\"",
                "chunkedEn": "[o: \"Yes,\"] [s: Eldrin] [v: said.]\n[pt: \"A thousand years ago,] [s: the first kings of the three realms] [v: were] [o: a team.]\n[s: They] [v: fought] [o: the Ash Titan.]\n[s: The Ash Titan] [v: was big and strong.]\n[s: They] [v: could not win.]\n[c: So] [s: they] [v: made] [o: a big lock] [pt: under the ground] [pt: in the center of the valley.\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis walked around the map. He touched a red magic word. Fire came from his fingers. He read the old words. \"The magic words are breaking,\" Ignis said. He was angry. \"The lock is breaking from inside. Bad people in our cities hid the truth. But the Ash Titan is waking up!\"",
                "ru": "Игнис обошел карту. Он коснулся красного магического слова. Огонь сорвался с его пальцев. Он прочитал древние слова. \"Магические слова разрушаются,\" — сказал Игнис. Он был зол. \"Замок ломается изнутри. Предатели в наших городах скрывали правду. Но Пепельный Титан просыпается!\"",
                "chunkedEn": "[s: Ignis] [v: walked] [pt: around the map.]\n[s: He] [v: touched] [o: a red magic word.]\n[s: Fire] [v: came] [pt: from his fingers.]\n[s: He] [v: read] [o: the old words.]\n[s: \"The magic words] [v: are breaking,\"] [s: Ignis] [v: said.]\n[s: He] [v: was angry.]\n[s: \"The lock] [v: is breaking] [pt: from inside.]\n[s: Bad people in our cities] [v: hid] [o: the truth.]\n[c: But] [s: the Ash Titan] [v: is waking up!\"]"
            },
            {
                "speaker": "astraea",
                "en": "\"Yes,\" Eldrin said. \"Those bad people were afraid. They took help from dark people. They thought the Ash Titan can sleep for a long time. But a lock cannot be strong forever without new magic.\" Astraea touched the broken map. Soft light came from her hands. \"How do we stop the Ash Titan, Master Eldrin?\" she asked. \"Can we fix the lock?\"",
                "ru": "\"Да,\" — сказал Эльдрин. \"Эти дурные люди боялись. Они обратились за помощью к темным силам. Они думали, что Пепельный Титан может спать очень долго. Но замок не может оставаться прочным вечно без новой магии.\" Астрея коснулась сломанной карты. Мягкий свет исходил от ее рук. \"Как нам остановить Пепельного Титана, Магистр Эльдрин?\" — спросила она. \"Можем ли мы починить замок?\"",
                "chunkedEn": "[o: \"Yes,\"] [s: Eldrin] [v: said.]\n[s: \"Those bad people] [v: were afraid.]\n[s: They] [v: took] [o: help] [pt: from dark people.]\n[s: They] [v: thought] [s: the Ash Titan] [v: can sleep] [pt: for a long time.]\n[c: But] [s: a lock] [v: cannot be] [o: strong] [adv: forever] [pt: without new magic.\"]\n[s: Astraea] [v: touched] [o: the broken map.]\n[s: Soft light] [v: came] [pt: from her hands.]\n[o: \"How] [v: do] [s: we] [v: stop] [o: the Ash Titan, Master Eldrin?\"] [s: she] [v: asked.]\n[v: \"Can] [s: we] [v: fix] [o: the lock?\"]"
            },
            {
                "speaker": "eldrin",
                "en": "Eldrin smiled. \"Yes, we can. The old kings did one bad thing. They built walls between their people. They were not a team. To make a new lock, we need a real team. We need the Silver Light, the Mountain Forge, and the Emerald Grove. We need them as one.\"",
                "ru": "Эльдрин улыбнулся. \"Да, мы можем. Древние короли совершили одну ошибку. Они возвели стены между своими народами. Они не были командой. Чтобы создать новый замок, нам нужна настоящая команда. Нам нужны Серебряный Свет, Горный Горн и Изумрудная Роща. Они нужны нам как единое целое.\"",
                "chunkedEn": "[s: Eldrin] [v: smiled.]\n[o: \"Yes,] [s: we] [v: can.]\n[s: The old kings] [v: did] [o: one bad thing.]\n[s: They] [v: built] [o: walls] [pt: between their people.]\n[s: They] [v: were not] [o: a team.]\n[pt: To make a new lock,] [s: we] [v: need] [o: a real team.]\n[s: We] [v: need] [o: the Silver Light, the Mountain Forge, and the Emerald Grove.]\n[s: We] [v: need] [o: them] [pt: as one.\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis took his ruby staff. \"We are a team now, Archmage. Tell us where we go.\" Eldrin looked at the heroes. He was happy. \"First, we need to find three magic stones in the realm,\" he said. \"Now rest. Tomorrow, our big journey starts.\" Eldrin gave bread and water to the heroes. They ate and drank. Astraea said, \"Thank you, Eldrin.\" The heroes went to bed. The night was quiet.",
                "ru": "Игнис взял свой рубиновый посох. \"Теперь мы команда, Архимаг. Скажи нам, куда идти.\" Эльдрин посмотрел на героев. Он был счастлив. \"Сначала нам нужно найти три магических камня в королевстве,\" — сказал он. \"А теперь отдыхайте. Завтра начнется наше великое путешествие.\" Эльдрин дал хлеб и воду героям. Они поели и попили. Астрея сказала: \"Спасибо, Эльдрин.\" Герои пошли спать. Ночь была тихой.",
                "chunkedEn": "[s: Ignis] [v: took] [o: his ruby staff.]\n[s: \"We] [v: are] [o: a team] [adv: now,] [o: Archmage.]\n[v: Tell] [o: us] [adv: where] [s: we] [v: go.\"]\n[s: Eldrin] [v: looked] [pt: at the heroes.]\n[s: He] [v: was happy.]\n[adv: \"First,] [s: we] [v: need to find] [o: three magic stones] [pt: in the realm,\"] [s: he] [v: said.]\n[adv: \"Now] [v: rest.]\n[adv: Tomorrow,] [s: our big journey] [v: starts.\"]\n[s: Eldrin] [v: gave] [o: bread and water] [pt: to the heroes.]\n[s: They] [v: ate and drank.]\n[s: Astraea] [v: said,] [o: \"Thank you, Eldrin.\"]\n[s: The heroes] [v: went] [pt: to bed.]\n[s: The night] [v: was quiet.]"
            }
        ],
        "quiz": {
            "question": "What did Eldrin reveal about the true origin of the Ash Rift?",
            "options": [
                "It is an ancient underground lock built a thousand years ago to cage the Ash Titan",
                "It is an old coal mine abandoned by dwarven workers",
                "It is an ordinary river canyon made by rain"
            ],
            "correctIndex": 0,
            "rewardXp": 497
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "Eldrin’s Floating Library",
        "locationRu": "Парящая Библиотека Эльдрина",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "A big fire is in the center of the Hearth Hall. The flames are bright and warm. Sparks fly in the air. Outside, the wind is cold. It is night. But inside the hall, it is warm. The heroes are around the fire on the carpets. They rest. Warriors from the Silver Citadel, the Mountain Forge, and the Emerald Forest are in one room. This is the first time in centuries.",
                "ru": "Большой костер горит в центре Зала Очага. Пламя яркое и теплое. Искры летают в воздухе. Снаружи дует холодный ветер. Ночь. Но внутри зала тепло. Герои сидят вокруг костра на коврах. Они отдыхают. Воины из Серебряной Цитадели, Горного Горна и Изумрудного Леса собрались в одной комнате. Это происходит впервые за столетия.",
                "chunkedEn": "[s: A big fire] [v: is] [pt: in the center of the Hearth Hall.]\n[s: The flames] [v: are bright and warm.]\n[s: Sparks] [v: fly] [pt: in the air.]\n[adv: Outside,] [s: the wind] [v: is cold.]\n[s: It] [v: is] [o: night.]\n[c: But] [pt: inside the hall,] [s: it] [v: is warm.]\n[s: The heroes] [v: are] [pt: around the fire] [pt: on the carpets.]\n[s: They] [v: rest.]\n[s: Warriors from the Silver Citadel, the Mountain Forge, and the Emerald Forest] [v: are] [pt: in one room.]\n[s: This] [v: is] [o: the first time] [pt: in centuries.]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin cooks meat on his iron dagger. The coals are hot. The meat smells good. Thorin cuts a big piece. He gives it to Valerius. \"Here, knight,\" says Thorin. He smiles. \"You are small. You need food. Eat this good mountain meat!\"",
                "ru": "Торин жарит мясо на своем железном кинжале. Угли горячие. Мясо пахнет вкусно. Торин отрезает большой кусок. Он дает его Валериусу. \"Держи, рыцарь,\" — говорит Торин. Он улыбается. \"Ты худой. Тебе нужна еда. Ешь это хорошее горное мясо!\"",
                "chunkedEn": "[s: Thorin] [v: cooks] [o: meat] [pt: on his iron dagger.]\n[s: The coals] [v: are hot.]\n[s: The meat] [v: smells] [o: good.]\n[s: Thorin] [v: cuts] [o: a big piece.]\n[s: He] [v: gives] [o: it] [pt: to Valerius.]\n[o: \"Here, knight,\"] [v: says] [s: Thorin.]\n[s: He] [v: smiles.]\n[s: \"You] [v: are small.]\n[s: You] [v: need] [o: food.]\n[v: Eat] [o: this good mountain meat!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius takes the meat. He smiles and says, \"Thank you, Thorin.\" He eats. \"It is tasty,\" he says. \"My knights told me: people from the Mountain Forge love gold and iron. Now I see the truth. Your heart is big, like your hammer.\" Valerius drinks water.",
                "ru": "Валериус берет мясо. Он улыбается и говорит: \"Спасибо, Торин.\" Он ест. \"Это вкусно,\" — говорит он. \"Мои рыцари говорили мне: люди из Горного Горна любят только золото и железо. Теперь я вижу правду. Твое сердце большое, как твой молот.\" Валериус пьет воду.",
                "chunkedEn": "[s: Valerius] [v: takes] [o: the meat.]\n[s: He] [v: smiles] [c: and] [v: says,] [o: \"Thank you, Thorin.\"]\n[s: He] [v: eats.]\n[s: \"It] [v: is tasty,\"] [s: he] [v: says.]\n[s: \"My knights] [v: told] [o: me:] [s: people from the Mountain Forge] [v: love] [o: gold and iron.]\n[adv: Now] [s: I] [v: see] [o: the truth.]\n[s: Your heart] [v: is big,] [pt: like your hammer.\"]\n[s: Valerius] [v: drinks] [o: water.]"
            },
            {
                "speaker": "thorin",
                "en": "Zephyr is near the wall. He stands there and cleans his green bow. He smiles. \"Three days ago, I saw you at the border river, Thorin,\" he says. \"I had my bow and my arrow. I wanted to fight you!\" Thorin smiles. His voice is big in the hall. \"If you fight me, Zephyr, I take your bow! Your wood is good for my fire!\"",
                "ru": "Зефир стоит у стены. Он стоит там и чистит свой зеленый лук. Он улыбается. \"Три дня назад я видел тебя у пограничной реки, Торин,\" — говорит он. \"У меня были лук и стрела. Я хотел сразиться с тобой!\" Торин улыбается. Его голос звучит громко в зале. \"Если бы ты напал на меня, Зефир, я бы забрал твой лук! Твое дерево отлично подошло бы для моего костра!\"",
                "chunkedEn": "[s: Zephyr] [v: is] [pt: near the wall.]\n[s: He] [v: stands] [adv: there] [c: and] [v: cleans] [o: his green bow.]\n[s: He] [v: smiles.]\n[pt: \"Three days ago,] [s: I] [v: saw] [o: you] [pt: at the border river, Thorin,\"] [s: he] [v: says.]\n[s: \"I] [v: had] [o: my bow and my arrow.]\n[s: I] [v: wanted to fight] [o: you!\"]\n[s: Thorin] [v: smiles.]\n[s: His voice] [v: is big] [pt: in the hall.]\n[c: \"If] [s: you] [v: fight] [o: me, Zephyr,] [s: I] [v: take] [o: your bow!]\n[s: Your wood] [v: is good] [pt: for my fire!\"]"
            },
            {
                "speaker": "thorin",
                "en": "Everyone is happy. The old war is now small. It is like the snow in Spring, and the Sun is warm. Zephyr eats a piece of bread. He gives a piece to Thorin. Thorin takes it and eats.",
                "ru": "Все счастливы. Старая вражда теперь кажется незначительной. Она как снег весной, а солнце греет. Зефир ест кусок хлеба. Он дает кусок Торину. Торин берет его и ест.",
                "chunkedEn": "[s: Everyone] [v: is happy.]\n[s: The old war] [v: is] [adv: now] [o: small.]\n[s: It] [v: is] [pt: like the snow in Spring,] [c: and] [s: the Sun] [v: is warm.]\n[s: Zephyr] [v: eats] [o: a piece of bread.]\n[s: He] [v: gives] [o: a piece] [pt: to Thorin.]\n[s: Thorin] [v: takes] [o: it] [c: and] [v: eats.]"
            },
            {
                "speaker": "selene",
                "en": "Selena is in the corner near the shadows. She is quiet. She looks at the fire. Her cloak is black. Astraea comes with a silver cup of hot tea. She is next to Selena. \"You are quiet this night, Selena,\" says Astraea. She gives her the cup. Selena takes the cup. Her eyes are purple. She drinks the tea. It is hot and sweet. \"All my life, the Shadow Guild told me: friends are weak. Friends are dangerous,\" she says quietly. \"But today you fought for me. I fought for you. I am happy. I have a real home now.\"",
                "ru": "Селена сидит в углу возле теней. Она молчалива. Она смотрит на огонь. Ее плащ черный. Астрея подходит с серебряной чашкой горячего чая. Она садится рядом с Селеной. \"Ты тихая этой ночью, Селена,\" — говорит Астрея. Она протягивает ей чашку. Селена берет чашку. Ее глаза фиолетовые. Она пьет чай. Он горячий и сладкий. \"Всю жизнь Гильдия Теней внушала мне: друзья — это слабость. Друзья опасны,\" — тихо говорит она. \"Но сегодня вы сражались за меня. Я сражалась за вас. Я счастлива. Теперь у меня есть настоящий дом.\"",
                "chunkedEn": "[s: Selena] [v: is] [pt: in the corner] [pt: near the shadows.]\n[s: She] [v: is quiet.]\n[s: She] [v: looks] [pt: at the fire.]\n[s: Her cloak] [v: is black.]\n[s: Astraea] [v: comes] [pt: with a silver cup of hot tea.]\n[s: She] [v: is] [pt: next to Selena.]\n[s: \"You] [v: are quiet] [pt: this night, Selena,\"] [v: says] [s: Astraea.]\n[s: She] [v: gives] [o: her the cup.]\n[s: Selena] [v: takes] [o: the cup.]\n[s: Her eyes] [v: are purple.]\n[s: She] [v: drinks] [o: the tea.]\n[s: It] [v: is hot and sweet.]\n[pt: \"All my life,] [s: the Shadow Guild] [v: told] [o: me:] [s: friends] [v: are weak.]\n[s: Friends] [v: are dangerous,\"] [s: she] [v: says] [adv: quietly.]\n[c: \"But] [pt: today] [s: you] [v: fought] [pt: for me.]\n[s: I] [v: fought] [pt: for you.]\n[s: I] [v: am happy.]\n[s: I] [v: have] [o: a real home] [adv: now.\"]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon touches the ground with his heavy wooden hand. Green grass grows near the fire. \"In the forest, the trees are different above the ground,\" says Oberon. \"But under the ground, their roots touch. They give water to each other. They help each other in the storm. This night, we are the roots.\" Selena looks at Oberon. She smiles. Astraea also smiles.",
                "ru": "Оберон касается земли своей тяжелой деревянной рукой. Зеленая трава вырастает возле костра. \"В лесу деревья выглядят по-разному над землей,\" — говорит Оберон. \"Но под землей их корни соприкасаются. Они делятся водой друг с другом. Они помогают друг другу в бурю. Этой ночью мы — те самые корни.\" Селена смотрит на Оберона. Она улыбается. Астрея тоже улыбается.",
                "chunkedEn": "[s: Oberon] [v: touches] [o: the ground] [pt: with his heavy wooden hand.]\n[s: Green grass] [v: grows] [pt: near the fire.]\n[pt: \"In the forest,] [s: the trees] [v: are different] [pt: above the ground,\"] [v: says] [s: Oberon.]\n[c: \"But] [pt: under the ground,] [s: their roots] [v: touch.]\n[s: They] [v: give] [o: water] [pt: to each other.]\n[s: They] [v: help] [o: each other] [pt: in the storm.]\n[pt: This night,] [s: we] [v: are] [o: the roots.\"]\n[s: Selena] [v: looks] [pt: at Oberon.]\n[s: She] [v: smiles.]\n[s: Astraea] [adv: also] [v: smiles.]"
            },
            {
                "speaker": "valerius",
                "en": "Archmage Eldrin looks at the young heroes. He stands near the door and smiles. He is peaceful. \"Magic is not first,\" he says. \"To protect the world, we need to understand. This night, the three realms are new. They are around this fire.\" The heroes look at the fire. Everyone is quiet and happy. The night is long.",
                "ru": "Архимаг Эльдрин смотрит на юных героев. Он стоит у двери и улыбается. Он спокоен. \"Магия — не главное,\" — говорит он. \"Чтобы защитить мир, нам нужно понимание. Этой ночью три королевства рождаются заново. Они объединились вокруг этого костра.\" Герои смотрят на огонь. Все спокойны и счастливы. Ночь долгая.",
                "chunkedEn": "[s: Archmage Eldrin] [v: looks] [pt: at the young heroes.]\n[s: He] [v: stands] [pt: near the door] [c: and] [v: smiles.]\n[s: He] [v: is peaceful.]\n[s: \"Magic] [v: is not] [adv: first,\"] [s: he] [v: says.]\n[pt: \"To protect the world,] [s: we] [v: need to understand.]\n[pt: This night,] [s: the three realms] [v: are new.]\n[s: They] [v: are] [pt: around this fire.\"]\n[s: The heroes] [v: look] [pt: at the fire.]\n[s: Everyone] [v: is quiet and happy.]\n[s: The night] [v: is long.]"
            }
        ],
        "quiz": {
            "question": "What happened around the campfire in the Hearth Hall?",
            "options": [
                "The heroes shared food, put away past hatred, and united like the roots of trees",
                "They had a fight over who gets the most gold",
                "They extinguished the fire and slept in the snow"
            ],
            "correctIndex": 0,
            "rewardXp": 482
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "The Tower Hearth Hall",
        "locationRu": "Зал Костра в Башне",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "The night is cold. Valerius and Thorin stand on the top of the Astral Spire. They are near the stone wall. The wind is strong. Below them, the valley is dark. Valerius takes a cup of tea. He drinks it, and it is hot. Thorin eats bread and cheese. \"Do you want bread?\" Thorin asks. \"No, thank you,\" Valerius says. \"I am not hungry.\"",
                "ru": "Ночь холодная. Валериус и Торин стоят на вершине Астрального Шпиля. Они возле каменной стены. Ветер сильный. Внизу под ними долина темна. Валериус берет чашку чая. Он пьет его, и он горячий. Торин ест хлеб и сыр. \"Хочешь хлеба?\" — спрашивает Торин. \"Нет, спасибо,\" — говорит Валериус. \"Я не голоден.\"",
                "chunkedEn": "[s: The night] [v: is cold.]\n[s: Valerius and Thorin] [v: stand] [pt: on the top of the Astral Spire.]\n[s: They] [v: are] [pt: near the stone wall.]\n[s: The wind] [v: is strong.]\n[pt: Below them,] [s: the valley] [v: is dark.]\n[s: Valerius] [v: takes] [o: a cup of tea.]\n[s: He] [v: drinks] [o: it,] [c: and] [s: it] [v: is hot.]\n[s: Thorin] [v: eats] [o: bread and cheese.]\n[o: \"Do you want bread?\"] [s: Thorin] [v: asks.]\n[o: \"No, thank you,\"] [s: Valerius] [v: says.]\n[s: \"I] [v: am not] [o: hungry.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Far away, they see red fires in the hills. The Ash Horde comes. It has a thousand animals with fire and iron. Thorin looks at the fires. He is quiet. Valerius looks at his silver shield. The shield is old, and it has marks. He touches the cold steel with his hand.",
                "ru": "Вдали они видят красные огни на холмах. Пепельная Орда приближается. У нее тысяча зверей с огнем и железом. Торин смотрит на огни. Он молчит. Валериус смотрит на свой серебряный щит. Щит старый, и на нем следы битв. Он касается холодной стали рукой.",
                "chunkedEn": "[adv: Far away,] [s: they] [v: see] [o: red fires] [pt: in the hills.]\n[s: The Ash Horde] [v: comes.]\n[s: It] [v: has] [o: a thousand animals] [pt: with fire and iron.]\n[s: Thorin] [v: looks] [pt: at the fires.]\n[s: He] [v: is quiet.]\n[s: Valerius] [v: looks] [pt: at his silver shield.]\n[s: The shield] [v: is old,] [c: and] [s: it] [v: has] [o: marks.]\n[s: He] [v: touches] [o: the cold steel] [pt: with his hand.]"
            },
            {
                "speaker": "valerius",
                "en": "\"My shield is heavy this night, Thorin,\" Valerius says in a quiet voice. \"For ten years, I fought for bad kings in the Silver Citadel. I believed their words. I protected their gold. I forgot the truth about honor.\"",
                "ru": "\"Мой щит тяжел этой ночью, Торин,\" — говорит Валериус тихим голосом. \"Десять лет я сражался за дурных королей в Серебряной Цитадели. Я верил их словам. Я защищал их золото. Я забыл правду о чести.\"",
                "chunkedEn": "[s: \"My shield] [v: is heavy] [pt: this night, Thorin,\"] [s: Valerius] [v: says] [pt: in a quiet voice.]\n[pt: \"For ten years,] [s: I] [v: fought] [pt: for bad kings] [pt: in the Silver Citadel.]\n[s: I] [v: believed] [o: their words.]\n[s: I] [v: protected] [o: their gold.]\n[s: I] [v: forgot] [o: the truth] [pt: about honor.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin looks at the knight. His bronze armor is shining in the light of the stars. Thorin smiles and touches Valerius on the shoulder. \"Be happy, my friend!\" Thorin says. \"Honor is not gold. Honor is not paper. Honor is easy: you stand between the bad animals and the people. You protect people who have no sword.\"",
                "ru": "Торин смотрит на рыцаря. Его бронзовая броня сияет в свете звезд. Торин улыбается и касается плеча Валериуса. \"Будь счастлив, мой друг!\" — говорит Торин. \"Честь — это не золото. Честь — это не бумага. Честь проста: ты стоишь между дурными зверями и народом. Ты защищаешь людей, у которых нет меча.\"",
                "chunkedEn": "[s: Thorin] [v: looks] [pt: at the knight.]\n[s: His bronze armor] [v: is shining] [pt: in the light of the stars.]\n[s: Thorin] [v: smiles] [c: and] [v: touches] [o: Valerius] [pt: on the shoulder.]\n[v: \"Be happy,] [o: my friend!\"] [s: Thorin] [v: says.]\n[s: \"Honor] [v: is not] [o: gold.]\n[s: Honor] [v: is not] [o: paper.]\n[s: Honor] [v: is easy:] [s: you] [v: stand] [pt: between the bad animals and the people.]\n[s: You] [v: protect] [o: people] [s: who] [v: have] [o: no sword.\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius looks at Thorin. He smiles. \"You have great wisdom, Thorin,\" Valerius says. \"In the Citadel, they said: smiths like stone and metal. They do not have a heart. But you have a big heart.\" Thorin smiles and drinks water. \"Thank you, knight,\" he says.",
                "ru": "Валериус смотрит на Торина. Он улыбается. \"У тебя великая мудрость, Торин,\" — говорит Валериус. \"В Цитадели говорили: кузнецы любят камень и металл. У них нет сердца. Но у тебя большое сердце.\" Торин улыбается и пьет воду. \"Спасибо, рыцарь,\" — говорит он.",
                "chunkedEn": "[s: Valerius] [v: looks] [pt: at Thorin.]\n[s: He] [v: smiles.]\n[s: \"You] [v: have] [o: great wisdom, Thorin,\"] [s: Valerius] [v: says.]\n[pt: \"In the Citadel,] [s: they] [v: said:] [s: smiths] [v: like] [o: stone and metal.]\n[s: They] [v: do not have] [o: a heart.]\n[c: But] [s: you] [v: have] [o: a big heart.\"]\n[s: Thorin] [v: smiles] [c: and] [v: drinks] [o: water.]\n[o: \"Thank you, knight,\"] [s: he] [v: says.]"
            },
            {
                "speaker": "thorin",
                "en": "Now two big black birds fly from the dark clouds above the Astral Spire. They have long feet and red eyes. Their mouths are iron. They come fast toward Thorin and Valerius! \"Look above!\" Thorin says. He takes his war hammer from his back. The hammer is bright with fire. \"Come, birds!\" he says. \"My hammer is hungry!\"",
                "ru": "Вдруг две большие черные птицы вылетают из темных облаков над Астральным Шпилем. У них длинные лапы и красные глаза. Их клювы железные. Они стремительно приближаются к Торину и Валериусу! \"Смотри наверх!\" — кричит Торин. Он снимает боевой молот со спины. Молот пылает огнем. \"Летите сюда, птицы!\" — говорит он. \"Мой молот проголодался!\"",
                "chunkedEn": "[adv: Now] [s: two big black birds] [v: fly] [pt: from the dark clouds] [pt: above the Astral Spire.]\n[s: They] [v: have] [o: long feet and red eyes.]\n[s: Their mouths] [v: are] [o: iron.]\n[s: They] [v: come] [adv: fast] [pt: toward Thorin and Valerius!]\n[v: \"Look] [adv: above!\"] [s: Thorin] [v: says.]\n[s: He] [v: takes] [o: his war hammer] [pt: from his back.]\n[s: The hammer] [v: is bright] [pt: with fire.]\n[v: \"Come,] [o: birds!\"] [s: he] [v: says.]\n[s: \"My hammer] [v: is hungry!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius runs forward. He takes his big silver shield. A white light comes from the shield. The first bird comes to the shield, but the light is bright, and the bird cannot see. It falls on the stone floor. \"Now, Thorin! Fight!\" Valerius says. Thorin jumps forward with a big voice. He breaks the first bird with his heavy hammer. Fire is everywhere! The second bird comes to Thorin's back. Valerius moves his shield, and the bird falls. Thorin also breaks the second bird.",
                "ru": "Валериус бежит вперед. Он берет свой большой серебряный щит. Белый свет исходит от щита. Первая птица летит на щит, но свет яркий, и птица ничего не видит. Она падает на каменный пол. \"Сейчас, Торин! Бей!\" — кричит Валериус. Торин прыгает вперед с громким кличем. Он разбивает первую птицу своим тяжелым молотом. Огонь повсюду! Вторая птица нападает со спины Торина. Валериус двигает щит, и птица падает. Торин также разбивает вторую птицу.",
                "chunkedEn": "[s: Valerius] [v: runs] [adv: forward.]\n[s: He] [v: takes] [o: his big silver shield.]\n[s: A white light] [v: comes] [pt: from the shield.]\n[s: The first bird] [v: comes] [pt: to the shield,] [c: but] [s: the light] [v: is bright,] [c: and] [s: the bird] [v: cannot see.]\n[s: It] [v: falls] [pt: on the stone floor.]\n[adv: \"Now,] [o: Thorin!] [v: Fight!\"] [s: Valerius] [v: says.]\n[s: Thorin] [v: jumps forward] [pt: with a big voice.]\n[s: He] [v: breaks] [o: the first bird] [pt: with his heavy hammer.]\n[s: Fire] [v: is] [adv: everywhere!]\n[s: The second bird] [v: comes] [pt: to Thorin's back.]\n[s: Valerius] [v: moves] [o: his shield,] [c: and] [s: the bird] [v: falls.]\n[s: Thorin] [adv: also] [v: breaks] [o: the second bird.]"
            },
            {
                "speaker": "thorin",
                "en": "Now it is quiet again. The wind is cold. Thorin smiles and rests his hammer on the floor. Valerius cleans his shield. They look at the valley. The red fires are far away. They wait for the morning. \"We are a good team, master Thorin,\" Valerius says. \"When the Ash Horde comes, you break their armor, and I protect you with my shield.\" Thorin takes his hand. \"Yes, knight!\" Thorin says. \"Shield and hammer! Nothing can break us!\"",
                "ru": "Теперь снова тихо. Ветер холодный. Торин улыбается и опускает молот на пол. Валериус чистит свой щит. Они смотрят на долину. Красные огни далеко. Они ждут утра. \"Мы хорошая команда, мастер Торин,\" — говорит Валериус. \"Когда придет Пепельная Орда, ты разобьешь их броню, а я защищу тебя своим щитом.\" Торин пожимает его руку. \"Да, рыцарь!\" — говорит Торин. \"Щит и молот! Ничто не сломит нас!\"",
                "chunkedEn": "[adv: Now] [s: it] [v: is quiet] [adv: again.]\n[s: The wind] [v: is cold.]\n[s: Thorin] [v: smiles] [c: and] [v: rests] [o: his hammer] [pt: on the floor.]\n[s: Valerius] [v: cleans] [o: his shield.]\n[s: They] [v: look] [pt: at the valley.]\n[s: The red fires] [v: are] [adv: far away.]\n[s: They] [v: wait] [pt: for the morning.]\n[s: \"We] [v: are] [o: a good team, master Thorin,\"] [s: Valerius] [v: says.]\n[c: \"When] [s: the Ash Horde] [v: comes,] [s: you] [v: break] [o: their armor,] [c: and] [s: I] [v: protect] [o: you] [pt: with my shield.\"]\n[s: Thorin] [v: takes] [o: his hand.]\n[o: \"Yes, knight!\"] [s: Thorin] [v: says.]\n[o: \"Shield and hammer!] [s: Nothing] [v: can break] [o: us!\"]"
            }
        ],
        "quiz": {
            "question": "What is Thorin's definition of honor?",
            "options": [
                "Standing between the bad animals and the people who have no sword",
                "Having a lot of gold and paper",
                "Sitting quietly in the Citadel"
            ],
            "correctIndex": 0,
            "rewardXp": 477
        },
        "backgroundImg": "images/backgrounds/bg_sky_terrace.jpg",
        "locationEn": "Astral Peak High Balcony",
        "locationRu": "Высокий Балкон Астрального Пика",
        "campaignId": "fantasy"
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
                "speaker": "frostina",
                "en": "It is night. Frostina is in the garden on the top of the Astral Spire. There is snow on the stone floor. Frostina is in a stone chair. The wind is cold. It moves her light blue hair. She moves her hands slowly. Flowers of crystal ice grow from her fingers. The flowers glow. Their light is soft and blue. Frostina looks at the flowers and smiles.",
                "ru": "Ночь. Фростина в саду на вершине Астрального Шпиля. На каменном полу лежит снег. Фростина сидит в каменном кресле. Ветер холодный. Он колышет ее светло-голубые волосы. Она медленно двигает руками. Цветы из хрустального льда вырастают из ее пальцев. Цветы светятся. Их свет мягкий и голубой. Фростина смотрит на цветы и улыбается.",
                "chunkedEn": "[s: It] [v: is] [pt: night.]\n[s: Frostina] [v: is] [pt: in the garden] [pt: on the top of the Astral Spire.]\n[v: There is] [s: snow] [pt: on the stone floor.]\n[s: Frostina] [v: is] [pt: in a stone chair.]\n[s: The wind] [v: is cold.]\n[s: It] [v: moves] [o: her light blue hair.]\n[s: She] [v: moves] [o: her hands] [adv: slowly.]\n[s: Flowers of crystal ice] [v: grow] [pt: from her fingers.]\n[s: The flowers] [v: glow.]\n[s: Their light] [v: is] [o: soft and blue.]\n[s: Frostina] [v: looks] [pt: at the flowers] [c: and] [v: smiles.]"
            },
            {
                "speaker": "selene",
                "en": "Selena comes from the dark. She walks like a shadow. She is quiet. Her cloak is black and her eyes are purple. She stands behind the stone chair. She looks at the garden. The garden is white and quiet. Frostina does not look at Selena. She smiles.",
                "ru": "Селена выходит из темноты. Она идет словно тень. Она бесшумна. Ее плащ черный, а глаза фиолетовые. Она стоит позади каменного кресла. Она смотрит на сад. Сад белый и тихий. Фростина не смотрит на Селену. Она улыбается.",
                "chunkedEn": "[s: Selena] [v: comes] [pt: from the dark.]\n[s: She] [v: walks] [pt: like a shadow.]\n[s: She] [v: is quiet.]\n[s: Her cloak] [v: is black] [c: and] [s: her eyes] [v: are purple.]\n[s: She] [v: stands] [pt: behind the stone chair.]\n[s: She] [v: looks] [pt: at the garden.]\n[s: The garden] [v: is white and quiet.]\n[s: Frostina] [v: does not look] [pt: at Selena.]\n[s: She] [v: smiles.]"
            },
            {
                "speaker": "frostina",
                "en": "\"Why do you always walk in the dark, Selena?\" Frostina asks. \"The fire in the hall is warm. Our friends are happy there. Do you not like it?\"",
                "ru": "\"Почему ты всегда ходишь в темноте, Селена?\" — спрашивает Фростина. \"Огонь в зале теплый. Наши друзья счастливы там. Тебе это не нравится?\"",
                "chunkedEn": "[w: \"Why] [v: do] [s: you] [adv: always] [v: walk] [pt: in the dark, Selena?\"] [s: Frostina] [v: asks.]\n[s: \"The fire in the hall] [v: is warm.]\n[s: Our friends] [v: are happy] [adv: there.]\n[v: Do] [s: you] [v: not like] [o: it?\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena looks at her silver daggers. Her eyes are not happy. \"A long time ago, I lived in a peaceful town in the mountain,\" Selena says. \"My people lived there. We had a good life. One night, bad men came. They came with smiles. They said, 'We are your friends.' But they were not friends. They made fire in our town. They took our home. That night, my heart died. Now I live in the dark. In the shadow, no bad man comes behind me.\"",
                "ru": "Селена смотрит на свои серебряные кинжалы. Ее глаза печальны. \"Давным-давно я жила в мирном городке в горах,\" — говорит Селена. \"Мой народ жил там. У нас была хорошая жизнь. Однажды ночью пришли дурные люди. Они пришли с улыбками. Они сказали: 'Мы ваши друзья.' Но они не были друзьями. Они устроили пожар в нашем городе. Они отняли наш дом. Той ночью мое сердце умерло. Теперь я живу во тьме. В тени ни один дурной человек не нападет на меня сзади.\"",
                "chunkedEn": "[s: Selena] [v: looks] [pt: at her silver daggers.]\n[s: Her eyes] [v: are not] [o: happy.]\n[pt: \"A long time ago,] [s: I] [v: lived] [pt: in a peaceful town] [pt: in the mountain,\"] [s: Selena] [v: says.]\n[s: \"My people] [v: lived] [adv: there.]\n[s: We] [v: had] [o: a good life.]\n[pt: One night,] [s: bad men] [v: came.]\n[s: They] [v: came] [pt: with smiles.]\n[s: They] [v: said,] [s: 'We] [v: are] [o: your friends.']\n[c: But] [s: they] [v: were not] [o: friends.]\n[s: They] [v: made] [o: fire] [pt: in our town.]\n[s: They] [v: took] [o: our home.]\n[pt: That night,] [s: my heart] [v: died.]\n[adv: Now] [s: I] [v: live] [pt: in the dark.]\n[pt: In the shadow,] [s: no bad man] [v: comes] [pt: behind me.\"]"
            },
            {
                "speaker": "frostina",
                "en": "Frostina looks at Selena. She takes a crystal flower. She gives the flower to Selena. Selena has it in her hand. The flower is cold, but there is no pain. It has a soft blue light. \"Ice is cold and hard, Selena,\" Frostina says. \"Ice protects itself with walls. But look at this flower. When light touches the frost, the flower opens. This is true life. This is real and beautiful. The shadow can hide you, but it cannot give you a home. Now we are your family. You do not need to hide.\"",
                "ru": "Фростина смотрит на Селену. Она берет хрустальный цветок. Она дарит цветок Селене. Селена держит его в руке. Цветок холодный, но боли нет. Он излучает мягкий голубой свет. \"Лед холодный и твердый, Селена,\" — говорит Фростина. \"Лед защищает себя стенами. Но посмотри на этот цветок. Когда свет касается мороза, цветок раскрывается. Это настоящая жизнь. Это подлинно и красиво. Тень может спрятать тебя, но она не может дать тебе дом. Теперь мы твоя семья. Тебе не нужно прятаться.\"",
                "chunkedEn": "[s: Frostina] [v: looks] [pt: at Selena.]\n[s: She] [v: takes] [o: a crystal flower.]\n[s: She] [v: gives] [o: the flower] [pt: to Selena.]\n[s: Selena] [v: has] [o: it] [pt: in her hand.]\n[s: The flower] [v: is cold,] [c: but] [v: there is] [s: no pain.]\n[s: It] [v: has] [o: a soft blue light.]\n[s: \"Ice] [v: is cold and hard, Selena,\"] [s: Frostina] [v: says.]\n[s: \"Ice] [v: protects] [o: itself] [pt: with walls.]\n[c: But] [v: look] [pt: at this flower.]\n[c: When] [s: light] [v: touches] [o: the frost,] [s: the flower] [v: opens.]\n[s: This] [v: is] [o: true life.]\n[s: This] [v: is real and beautiful.]\n[s: The shadow] [v: can hide] [o: you,] [c: but] [s: it] [v: cannot give] [o: you] [o: a home.]\n[adv: Now] [s: we] [v: are] [o: your family.]\n[s: You] [v: do not need to hide.\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena looks at the flower in her hand. For the first time in a long time, she smiles. Her face is soft. \"A new family,\" Selena says. \"I like it.\" Now Selena hears something. It is in the towers. Big black birds come down from the roof! Their eyes are red. They fly to Frostina! \"Frostina, look!\" Selena says.",
                "ru": "Селена смотрит на цветок в своей руке. Впервые за долгое время она улыбается. Ее лицо становится мягким. \"Новая семья,\" — говорит Селена. \"Мне это нравится.\" Вдруг Селена слышит шум. Это в башнях. Большие черные птицы спускаются с крыши! Их глаза красные. Они летят к Фростине! \"Фростина, смотри!\" — кричит Селена.",
                "chunkedEn": "[s: Selena] [v: looks] [pt: at the flower] [pt: in her hand.]\n[pt: For the first time] [pt: in a long time,] [s: she] [v: smiles.]\n[s: Her face] [v: is soft.]\n[o: \"A new family,\"] [s: Selena] [v: says.]\n[s: \"I] [v: like] [o: it.\"]\n[adv: Now] [s: Selena] [v: hears] [o: something.]\n[s: It] [v: is] [pt: in the towers.]\n[s: Big black birds] [v: come down] [pt: from the roof!]\n[s: Their eyes] [v: are red.]\n[s: They] [v: fly] [pt: to Frostina!]\n[o: \"Frostina,] [v: look!\"] [s: Selena] [v: says.]"
            },
            {
                "speaker": "selene",
                "en": "Selena is fast. She jumps over the stone chair. She has two silver daggers. She cuts two birds. Frostina has her crystal staff in her hand. A great ring of frost comes from the staff. The frost freezes the birds. The birds fall on the stone floor. They are ice now.",
                "ru": "Селена стремительна. Она перепрыгивает через каменное кресло. У нее два серебряных кинжала. Она разит двух птиц. У Фростины хрустальный посох в руке. Великое кольцо мороза исходит из посоха. Мороз замораживает птиц. Птицы падают на каменный пол. Теперь они ледяные.",
                "chunkedEn": "[s: Selena] [v: is fast.]\n[s: She] [v: jumps] [pt: over the stone chair.]\n[s: She] [v: has] [o: two silver daggers.]\n[s: She] [v: cuts] [o: two birds.]\n[s: Frostina] [v: has] [o: her crystal staff] [pt: in her hand.]\n[s: A great ring of frost] [v: comes] [pt: from the staff.]\n[s: The frost] [v: freezes] [o: the birds.]\n[s: The birds] [v: fall] [pt: on the stone floor.]\n[s: They] [v: are] [o: ice] [adv: now.]"
            },
            {
                "speaker": "frostina",
                "en": "The garden is quiet again. Selena has her daggers on her belt. She has the ice flower in her left hand. Frostina smiles. \"Frost and shadow protect the light. We are a team.\" Selena looks at Frostina. \"Thank you, Frostina,\" Selena says. \"I do not want to hide in the dark now. Tomorrow, we fight for our home.\" They look at the sky. The moon and the stars are in the sky. They go to the hall.",
                "ru": "В саду снова тихо. Кинжалы Селены на ее поясе. Ледяной цветок у нее в левой руке. Фростина улыбается. \"Мороз и тень защищают свет. Мы — команда.\" Селена смотрит на Фростину. \"Спасибо, Фростина,\" — говорит Селена. \"Я больше не хочу прятаться в темноте. Завтра мы сразимся за наш дом.\" Они смотрят на небо. Луна и звезды на небе. Они идут в зал.",
                "chunkedEn": "[s: The garden] [v: is quiet] [adv: again.]\n[s: Selena] [v: has] [o: her daggers] [pt: on her belt.]\n[s: She] [v: has] [o: the ice flower] [pt: in her left hand.]\n[s: Frostina] [v: smiles.]\n[s: \"Frost and shadow] [v: protect] [o: the light.]\n[s: We] [v: are] [o: a team.\"]\n[s: Selena] [v: looks] [pt: at Frostina.]\n[o: \"Thank you, Frostina,\"] [s: Selena] [v: says.]\n[s: \"I] [v: do not want to hide] [pt: in the dark] [adv: now.]\n[adv: Tomorrow,] [s: we] [v: fight] [pt: for our home.\"]\n[s: They] [v: look] [pt: at the sky.]\n[s: The moon and the stars] [v: are] [pt: in the sky.]\n[s: They] [v: go] [pt: to the hall.]"
            }
        ],
        "quiz": {
            "question": "What did Frostina give to Selena on the terrace?",
            "options": [
                "A glowing crystal ice flower",
                "A bag of gold",
                "A dark poisoned dagger"
            ],
            "correctIndex": 0,
            "rewardXp": 508
        },
        "backgroundImg": "images/backgrounds/bg_white_forest.jpg",
        "locationEn": "The Frost Terrace",
        "locationRu": "Морозная Терраса",
        "campaignId": "fantasy"
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
                "speaker": "zephyr",
                "en": "Early in the morning, dark grey clouds are over the mountain peaks. A cold storm wind is in the rocks. The heroes are in the Astral Spire. They need food, magic armor, swords, and bows. Their big battle in Ash Valley is near. The heroes eat bread and drink tea in the hall. Archmage Eldrin comes to them. \"Friends, I know an old hall of the kings,\" he says. \"It is down in the hills. You can find armor, shields, and bows there.\"",
                "ru": "Рано утром темно-серые тучи нависли над горными вершинами. Холодный штормовой ветер гуляет среди скал. Герои в Астральном Шпиле. Им нужны еда, волшебная броня, мечи и луки. Их великая битва в Пепельной Долине близка. Герои едят хлеб и пьют чай в зале. Архимаг Эльдрин подходит к ним. \"Друзья, я знаю старый зал королей,\" — говорит он. \"Он внизу на холмах. Там вы найдете броню, щиты и луки.\"",
                "chunkedEn": "[pt: Early in the morning,] [s: dark grey clouds] [v: are] [pt: over the mountain peaks.]\n[s: A cold storm wind] [v: is] [pt: in the rocks.]\n[s: The heroes] [v: are] [pt: in the Astral Spire.]\n[s: They] [v: need] [o: food, magic armor, swords, and bows.]\n[s: Their big battle in Ash Valley] [v: is] [adv: near.]\n[s: The heroes] [v: eat] [o: bread] [c: and] [v: drink] [o: tea] [pt: in the hall.]\n[s: Archmage Eldrin] [v: comes] [pt: to them.]\n[o: \"Friends,] [s: I] [v: know] [o: an old hall of the kings,\"] [s: he] [v: says.]\n[s: \"It] [v: is] [adv: down] [pt: in the hills.]\n[s: You] [v: can find] [o: armor, shields, and bows] [adv: there.\"]"
            },
            {
                "speaker": "zephyr",
                "en": "Freya, Zephyr, and Oberon take their things. They say goodbye to Eldrin and climb down the mountain path. The wind is strong, but the three scouts are fast. A bird flies over their heads. Zephyr looks at it and smiles. \"The wind is angry today, friends!\" Zephyr says. He has his green bow in his hand. He can see far. \"I can smell old iron. The hall of the kings is near!\"",
                "ru": "Фрейя, Зефир и Оберон берут свои вещи. Они прощаются с Эльдрином и спускаются по горной тропе. Ветер сильный, но трое разведчиков быстры. Птица летит над их головами. Зефир смотрит на нее и улыбается. \"Ветер сердит сегодня, друзья!\" — говорит Зефир. У него в руке зеленый лук. Он видит далеко. \"Я чую старое железо. Зал королей близко!\"",
                "chunkedEn": "[s: Freya, Zephyr, and Oberon] [v: take] [o: their things.]\n[s: They] [v: say goodbye] [pt: to Eldrin] [c: and] [v: climb down] [o: the mountain path.]\n[s: The wind] [v: is strong,] [c: but] [s: the three scouts] [v: are fast.]\n[s: A bird] [v: flies] [pt: over their heads.]\n[s: Zephyr] [v: looks] [pt: at it] [c: and] [v: smiles.]\n[s: \"The wind] [v: is angry] [pt: today, friends!\"] [s: Zephyr] [v: says.]\n[s: He] [v: has] [o: his green bow] [pt: in his hand.]\n[s: He] [v: can see] [adv: far.]\n[s: \"I] [v: can smell] [o: old iron.]\n[s: The hall of the kings] [v: is] [adv: near!\"]"
            },
            {
                "speaker": "freya",
                "en": "Freya walks next to him. Her silver armor shines with blue sparks. She has her heavy thunder spear in her right hand. \"The old kings have magic shields and bows in that hall,\" Freya says. \"If the Ash Horde takes them, our battle is going to be difficult. We need to take them first!\"",
                "ru": "Фрейя идет рядом с ним. Ее серебряная броня сияет синими искрами. В правой руке у нее тяжелое копье грома. \"У древних королей в том зале хранятся волшебные щиты и луки,\" — говорит Фрейя. \"Если Пепельная Орда заберет их, наша битва будет тяжелой. Нам нужно забрать их первыми!\"",
                "chunkedEn": "[s: Freya] [v: walks] [pt: next to him.]\n[s: Her silver armor] [v: shines] [pt: with blue sparks.]\n[s: She] [v: has] [o: her heavy thunder spear] [pt: in her right hand.]\n[s: \"The old kings] [v: have] [o: magic shields and bows] [pt: in that hall,\"] [s: Freya] [v: says.]\n[c: \"If] [s: the Ash Horde] [v: takes] [o: them,] [s: our battle] [v: is going to be] [o: difficult.]\n[s: We] [v: need to take] [o: them] [adv: first!\"]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon walks behind them. He is the old guard of the forest. He has his tall wood staff. He is slow, but he is strong. \"Wait, young warriors,\" Oberon says in a quiet voice. \"Look down at the valley. Someone is there. Dark stone animals guard the steel doors.\" They stop near a small river. Freya drinks water. Zephyr eats an apple. Oberon looks at the sky and at the clouds. After that, they go down to the valley.",
                "ru": "Оберон идет позади них. Он старый страж леса. У него высокий деревянный посох. Он медлителен, но силен. \"Подождите, юные воины,\" — говорит Оберон тихим голосом. \"Посмотрите вниз на долину. Там кто-то есть. Темные каменные звери охраняют стальные двери.\" Они останавливаются возле небольшой речки. Фрейя пьет воду. Зефир ест яблоко. Оберон смотрит на небо и облака. После этого они спускаются в долину.",
                "chunkedEn": "[s: Oberon] [v: walks] [pt: behind them.]\n[s: He] [v: is] [o: the old guard of the forest.]\n[s: He] [v: has] [o: his tall wood staff.]\n[s: He] [v: is slow,] [c: but] [s: he] [v: is strong.]\n[v: \"Wait,] [o: young warriors,\"] [s: Oberon] [v: says] [pt: in a quiet voice.]\n[v: \"Look down] [pt: at the valley.]\n[s: Someone] [v: is] [adv: there.]\n[s: Dark stone animals] [v: guard] [o: the steel doors.\"]\n[s: They] [v: stop] [pt: near a small river.]\n[s: Freya] [v: drinks] [o: water.]\n[s: Zephyr] [v: eats] [o: an apple.]\n[s: Oberon] [v: looks] [pt: at the sky] [c: and] [pt: at the clouds.]\n[pt: After that,] [s: they] [v: go down] [pt: to the valley.]"
            },
            {
                "speaker": "freya",
                "en": "Five big stone animals are near the steel doors of the hall. Their skin is grey rock. They have wings, and purple fire is in their mouths. \"Five stone animals,\" Zephyr says in a quiet voice from behind a rock. \"Their skin is hard. My arrows can't cut it.\" \"We fight as one team!\" Freya says with a smile. \"Oberon can stop them. Zephyr can take their sight. My thunder can break their stone!\"",
                "ru": "Пять больших каменных зверей стоят возле стальных дверей зала. Их кожа — серый камень. У них крылья, а в пастях фиолетовый огонь. \"Пять каменных зверей,\" — тихо говорит Зефир из-за скалы. \"Их кожа твердая. Мои стрелы не пробьют ее.\" \"Мы сражаемся как одна команда!\" — говорит Фрейя с улыбкой. \"Оберон остановит их. Зефир ослепит их. Мой гром сокрушит их камень!\"",
                "chunkedEn": "[s: Five big stone animals] [v: are] [pt: near the steel doors of the hall.]\n[s: Their skin] [v: is] [o: grey rock.]\n[s: They] [v: have] [o: wings,] [c: and] [s: purple fire] [v: is] [pt: in their mouths.]\n[o: \"Five stone animals,\"] [s: Zephyr] [v: says] [pt: in a quiet voice] [pt: from behind a rock.]\n[s: \"Their skin] [v: is hard.]\n[s: My arrows] [v: can't cut] [o: it.\"]\n[s: \"We] [v: fight] [pt: as one team!\"] [s: Freya] [v: says] [pt: with a smile.]\n[s: \"Oberon] [v: can stop] [o: them.]\n[s: Zephyr] [v: can take] [o: their sight.]\n[s: My thunder] [v: can break] [o: their stone!\"]"
            },
            {
                "speaker": "oberon",
                "en": "The battle begins! Oberon uses his wood staff on the ground. \"Roots of the earth, wake up!\" he says. Green roots come out of the ground. The roots go around the legs and wings of the animals. The animals can't move. They try to use their fire, but they can't.",
                "ru": "Битва начинается! Оберон ударяет деревянным посохом о землю. \"Корни земли, пробудитесь!\" — говорит он. Зеленые корни вырываются из земли. Корни обвивают лапы и крылья зверей. Звери не могут двигаться. Они пытаются применить свой огонь, но не могут.",
                "chunkedEn": "[s: The battle] [v: begins!]\n[s: Oberon] [v: uses] [o: his wood staff] [pt: on the ground.]\n[s: \"Roots of the earth,] [v: wake up!\"] [s: he] [v: says.]\n[s: Green roots] [v: come out] [pt: of the ground.]\n[s: The roots] [v: go around] [o: the legs and wings of the animals.]\n[s: The animals] [v: can't move.]\n[s: They] [v: try to use] [o: their fire,] [c: but] [s: they] [v: can't.]"
            },
            {
                "speaker": "freya",
                "en": "Zephyr jumps on a big rock. He has three arrows in his hand. The arrows fly fast to the animals. Sand is in their eyes. The animals can't see. \"Now, Freya! Break the doors!\" Zephyr calls. Freya jumps up in the air like a silver bird. Blue thunder is on her spear. She comes down in the center of the animals. A big thunder is in the valley! The stone animals break and are sand now. The steel doors of the hall are open!",
                "ru": "Зефир запрыгивает на большой камень. В руке у него три стрелы. Стрелы стремительно летят в зверей. Песок попадает им в глаза. Звери ничего не видят. \"Сейчас, Фрейя! Вскрывай двери!\" — кричит Зефир. Фрейя взмывает в воздух словно серебряная птица. Синий гром на ее копье. Она обрушивается в самый центр зверей. Великий гром разносится по долине! Каменные звери рассыпаются и превращаются в песок. Стальные двери зала распахнуты!",
                "chunkedEn": "[s: Zephyr] [v: jumps] [pt: on a big rock.]\n[s: He] [v: has] [o: three arrows] [pt: in his hand.]\n[s: The arrows] [v: fly] [adv: fast] [pt: to the animals.]\n[s: Sand] [v: is] [pt: in their eyes.]\n[s: The animals] [v: can't see.]\n[adv: \"Now,] [o: Freya!] [v: Break] [o: the doors!\"] [s: Zephyr] [v: calls.]\n[s: Freya] [v: jumps up] [pt: in the air] [pt: like a silver bird.]\n[s: Blue thunder] [v: is] [pt: on her spear.]\n[s: She] [v: comes down] [pt: in the center of the animals.]\n[s: A big thunder] [v: is] [pt: in the valley!]\n[s: The stone animals] [v: break] [c: and] [v: are] [o: sand] [adv: now.]\n[s: The steel doors of the hall] [v: are open!]"
            },
            {
                "speaker": "freya",
                "en": "Inside the hall, the heroes find boxes with magic arrows, armor, and food for the trip. Freya cleans the sand from her face. \"A great fight, team!\" she says. She smiles. Oberon smiles too. \"With wind, wood, and storm, our friends have everything they need.\"",
                "ru": "Внутри зала герои находят сундуки с волшебными стрелами, броней и едой для похода. Фрейя стирает песок со своего лица. \"Отличный бой, команда!\" — говорит она. Она улыбается. Оберон тоже улыбается. \"Благодаря ветру, лесу и буре у наших друзей есть все необходимое.\"",
                "chunkedEn": "[pt: Inside the hall,] [s: the heroes] [v: find] [o: boxes] [pt: with magic arrows, armor, and food for the trip.]\n[s: Freya] [v: cleans] [o: the sand] [pt: from her face.]\n[o: \"A great fight, team!\"] [s: she] [v: says.]\n[s: She] [v: smiles.]\n[s: Oberon] [v: smiles] [adv: too.]\n[pt: \"With wind, wood, and storm,] [s: our friends] [v: have] [o: everything] [s: they] [v: need.\"]"
            }
        ],
        "quiz": {
            "question": "What did the trio retrieve from the old hall of the kings?",
            "options": [
                "Boxes with magic arrows, armor, and food for the trip",
                "Dragon eggs and dark crystals",
                "A broken golden crown"
            ],
            "correctIndex": 0,
            "rewardXp": 541
        },
        "backgroundImg": "images/backgrounds/bg_mountains.jpg",
        "locationEn": "The Stormy Armory Vault",
        "locationRu": "Штормовой Арсенал",
        "campaignId": "fantasy"
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
                "speaker": "eldrin",
                "en": "Night is at the Astral Spire. In the Astral Circle of Winds, blue and gold lights are on the stone floor. Ten heroes stand in a group in the hall. Archmage Eldrin is in the center. He has an old grey stone in his hands. Red words are on the stone. They are bright and glowing. The hall is quiet. The heroes hear the cold wind outside the tall crystal windows. Eldrin has his staff. He looks at each hero. The heroes look at Eldrin.",
                "ru": "Ночь в Астральном Шпиле. В Астральном Круге Ветров синие и золотые огни горят на каменном полу. Десять героев стоят группой в зале. Архимаг Эльдрин находится в центре. В руках у него старый серый камень. Красные слова начертаны на камне. Они яркие и светящиеся. В зале тихо. Герои слышат холодный ветер за высокими хрустальными окнами. У Эльдрина в руке посох. Он смотрит на каждого героя. Герои смотрят на Эльдрина.",
                "chunkedEn": "[s: Night] [v: is] [pt: at the Astral Spire.]\n[pt: In the Astral Circle of Winds,] [s: blue and gold lights] [v: are] [pt: on the stone floor.]\n[s: Ten heroes] [v: stand] [pt: in a group] [pt: in the hall.]\n[s: Archmage Eldrin] [v: is] [pt: in the center.]\n[s: He] [v: has] [o: an old grey stone] [pt: in his hands.]\n[s: Red words] [v: are] [pt: on the stone.]\n[s: They] [v: are] [o: bright and glowing.]\n[s: The hall] [v: is quiet.]\n[s: The heroes] [v: hear] [o: the cold wind] [pt: outside the tall crystal windows.]\n[s: Eldrin] [v: has] [o: his staff.]\n[s: He] [v: looks] [pt: at each hero.]\n[s: The heroes] [v: look] [pt: at Eldrin.]"
            },
            {
                "speaker": "eldrin",
                "en": "\"My brave friends,\" Eldrin says. \"Tomorrow we go to the Ash Valley. Now you need to hear the old truth. This stone is a thousand years old. It is from the First Star War. It speaks about this night and about our ten companions.\" Eldrin touches the stone with his glowing fingers. The red words are bright like fire. \"Hear the words,\" he says. \"They are from the stars.\"",
                "ru": "\"Мои храбрые друзья,\" — говорит Эльдрин. \"Завтра мы идем в Пепельную Долину. Сейчас вам нужно услышать древнюю правду. Этому камню тысяча лет. Он времен Первой Звездной Войны. Он говорит об этой ночи и о наших десяти соратниках.\" Эльдрин касается камня своими светящимися пальцами. Красные слова горят ярко, как огонь. \"Услышьте эти слова,\" — говорит он. \"Они от звезд.\"",
                "chunkedEn": "[o: \"My brave friends,\"] [s: Eldrin] [v: says.]\n[adv: \"Tomorrow] [s: we] [v: go] [pt: to the Ash Valley.]\n[adv: Now] [s: you] [v: need to hear] [o: the old truth.]\n[s: This stone] [v: is] [o: a thousand years old.]\n[s: It] [v: is] [pt: from the First Star War.]\n[s: It] [v: speaks] [pt: about this night] [c: and] [pt: about our ten companions.\"]\n[s: Eldrin] [v: touches] [o: the stone] [pt: with his glowing fingers.]\n[s: The red words] [v: are bright] [pt: like fire.]\n[v: \"Hear] [o: the words,\"] [s: he] [v: says.]\n[s: \"They] [v: are] [pt: from the stars.\"]"
            },
            {
                "speaker": "eldrin",
                "en": "\"Ten shadows are going to come to the dark Rift. One is not going to be true to the group. One is going to stand under the falling sky. The flame with no name is going to bring light to the dark forever.\"",
                "ru": "\"Десять теней придут к темному Разлому. Один не сохранит верность группе. Один встанет под падающим небом. Пламя без имени навсегда принесет свет во тьму.\"",
                "chunkedEn": "[s: \"Ten shadows] [v: are going to come] [pt: to the dark Rift.]\n[s: One] [v: is not going to be] [o: true] [pt: to the group.]\n[s: One] [v: is going to stand] [pt: under the falling sky.]\n[s: The flame with no name] [v: is going to bring] [o: light] [pt: to the dark] [adv: forever.\"]"
            },
            {
                "speaker": "valerius",
                "en": "The hall is cold and quiet. The heroes look at each other. They are afraid. Their eyes are big. Valerius goes to the front. His hand is on his sword. \"One is going to be a bad friend?\" Valerius asks. \"We fought in the same battles. We ate bread by the fire. We helped each other with the wild animals. Who among us is going to break our duty?\"",
                "ru": "В зале холодно и тихо. Герои смотрят друг на друга. Они напуганы. Их глаза расширены. Валериус выходит вперед. Его рука на мече. \"Один станет предателем?\" — спрашивает Валериус. \"Мы сражались в одних битвах. Мы делили хлеб у костра. Мы выручали друг друга в схватках с дикими зверями. Кто из нас нарушит наш долг?\"",
                "chunkedEn": "[s: The hall] [v: is cold and quiet.]\n[s: The heroes] [v: look] [pt: at each other.]\n[s: They] [v: are afraid.]\n[s: Their eyes] [v: are big.]\n[s: Valerius] [v: goes] [pt: to the front.]\n[s: His hand] [v: is] [pt: on his sword.]\n[s: \"One] [v: is going to be] [o: a bad friend?\"] [s: Valerius] [v: asks.]\n[s: \"We] [v: fought] [pt: in the same battles.]\n[s: We] [v: ate] [o: bread] [pt: by the fire.]\n[s: We] [v: helped] [o: each other] [pt: with the wild animals.]\n[w: Who] [pt: among us] [v: is going to break] [o: our duty?\"]"
            },
            {
                "speaker": "valerius",
                "en": "Thorin has his hammer in his hand. Ignis looks at his hot hands. He does not know. Selena goes back to the wall. Her purple eyes look at the floor. Every hero is afraid now.",
                "ru": "У Торина в руке молот. Игнис смотрит на свои пылающие руки. Он в замешательстве. Селена отступает к стене. Ее фиолетовые глаза смотрят в пол. Теперь каждый герой испытывает страх.",
                "chunkedEn": "[s: Thorin] [v: has] [o: his hammer] [pt: in his hand.]\n[s: Ignis] [v: looks] [pt: at his hot hands.]\n[s: He] [v: does not know.]\n[s: Selena] [v: goes back] [pt: to the wall.]\n[s: Her purple eyes] [v: look] [pt: at the floor.]\n[s: Every hero] [v: is afraid] [adv: now.]"
            },
            {
                "speaker": "astraea",
                "en": "At this moment, Astraea goes to the center of the hall. Her white clothes are warm and bright. She has her silver star bowl in her hand. She shows the bowl to the heroes. Gold light comes from the bowl. The light is in every corner of the hall. The heroes are not cold now.",
                "ru": "В этот миг Астрея выходит в центр зала. Ее белые одежды теплые и сияющие. В руке у нее серебряная чаша звезд. Она показывает чашу героям. Золотой свет исходит из чаши. Свет заполняет каждый уголок зала. Героям больше не холодно.",
                "chunkedEn": "[pt: At this moment,] [s: Astraea] [v: goes] [pt: to the center of the hall.]\n[s: Her white clothes] [v: are warm and bright.]\n[s: She] [v: has] [o: her silver star bowl] [pt: in her hand.]\n[s: She] [v: shows] [o: the bowl] [pt: to the heroes.]\n[s: Gold light] [v: comes] [pt: from the bowl.]\n[s: The light] [v: is] [pt: in every corner of the hall.]\n[s: The heroes] [v: are not] [o: cold] [adv: now.]"
            },
            {
                "speaker": "astraea",
                "en": "\"Do not be afraid, my friends!\" Astraea says. \"The Shadow God is happy when we are afraid. These words show a possible future. They are not our life. We are not in the stone. We choose our path every day. We choose it with our actions and our love.\" Valerius looks at Astraea's light. He is quiet. Now he smiles a little. \"Astraea speaks the truth,\" he says. \"We are friends. We are true to each other.\"",
                "ru": "\"Не бойтесь, друзья мои!\" — говорит Астрея. \"Бог Теней радуется, когда мы боимся. Эти слова показывают лишь возможное будущее. Они не определяют нашу жизнь. Мы не высечены в камне. Мы выбираем свой путь каждый день. Мы выбираем его своими поступками и нашей любовью.\" Валериус смотрит на свет Астреи. Он молчит. Теперь он слегка улыбается. \"Астрея говорит правду,\" — говорит он. \"Мы друзья. Мы верны друг другу.\"",
                "chunkedEn": "[v: \"Do not be afraid,] [o: my friends!\"] [s: Astraea] [v: says.]\n[s: \"The Shadow God] [v: is happy] [c: when] [s: we] [v: are afraid.]\n[s: These words] [v: show] [o: a possible future.]\n[s: They] [v: are not] [o: our life.]\n[s: We] [v: are not] [pt: in the stone.]\n[s: We] [v: choose] [o: our path] [pt: every day.]\n[s: We] [v: choose] [o: it] [pt: with our actions and our love.\"]\n[s: Valerius] [v: looks] [pt: at Astraea's light.]\n[s: He] [v: is quiet.]\n[adv: Now] [s: he] [v: smiles] [adv: a little.]\n[s: \"Astraea] [v: speaks] [o: the truth,\"] [s: he] [v: says.]\n[s: \"We] [v: are] [o: friends.]\n[s: We] [v: are true] [pt: to each other.\"]"
            },
            {
                "speaker": "eldrin",
                "en": "Thorin has his iron hand in the air. \"We stand as one!\" he says. \"Tomorrow we all go to the Ash Rift!\" The heroes also say, \"Yes!\" Archmage Eldrin smiles. He closes the stone. \"Rest now, guards of light,\" he says. \"Tomorrow the last war begins.\" The heroes go to bed. Night is quiet at the Astral Spire.",
                "ru": "Торин поднимает свой железный кулак в воздух. \"Мы едины!\" — говорит он. \"Завтра мы все идем к Пепельному Разлому!\" Герои тоже говорят: \"Да!\" Архимаг Эльдрин улыбается. Он закрывает скрижаль. \"Отдыхайте сейчас, стражи света,\" — говорит он. \"Завтра начнется последняя война.\" Герои идут спать. Ночь спокойна в Астральном Шпиле.",
                "chunkedEn": "[s: Thorin] [v: has] [o: his iron hand] [pt: in the air.]\n[s: \"We] [v: stand] [pt: as one!\"] [s: he] [v: says.]\n[adv: \"Tomorrow] [s: we all] [v: go] [pt: to the Ash Rift!\"]\n[s: The heroes] [adv: also] [v: say,] [o: \"Yes!\"]\n[s: Archmage Eldrin] [v: smiles.]\n[s: He] [v: closes] [o: the stone.]\n[v: \"Rest] [adv: now,] [o: guards of light,\"] [s: he] [v: says.]\n[adv: \"Tomorrow] [s: the last war] [v: begins.\"]\n[s: The heroes] [v: go] [pt: to bed.]\n[s: Night] [v: is quiet] [pt: at the Astral Spire.]"
            }
        ],
        "quiz": {
            "question": "What did Astraea say about the prophecy words on the stone?",
            "options": [
                "They show a possible future, and we choose our path with actions and love",
                "They are an impossible curse that nobody can escape",
                "They mean the heroes must fight each other right now"
            ],
            "correctIndex": 0,
            "rewardXp": 491
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "The Astral Circle of Winds",
        "locationRu": "Астральный Круг Семи Ветров",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "It is morning. The sun is behind black clouds. Ten heroes leave the Astral Spire. The Astral Spire is a peaceful home. Now the heroes go down to the Dead Desolation. There are no green trees here. The ground is black and grey. The air smells bad. There are no rivers, and there is no grass. The heroes look at the dark sky. They are brave, but the road is difficult.",
                "ru": "Утро. Солнце скрыто за черными тучами. Десять героев покидают Астральный Шпиль. Астральный Шпиль — мирный дом. Теперь герои спускаются в Мертвые Пустоши. Здесь нет зеленых деревьев. Земля черная и серая. Воздух дурно пахнет. Здесь нет рек и нет травы. Герои смотрят на темное небо. Они храбры, но дорога трудна.",
                "chunkedEn": "[s: It] [v: is] [pt: morning.]\n[s: The sun] [v: is] [pt: behind black clouds.]\n[s: Ten heroes] [v: leave] [o: the Astral Spire.]\n[s: The Astral Spire] [v: is] [o: a peaceful home.]\n[adv: Now] [s: the heroes] [v: go down] [pt: to the Dead Desolation.]\n[v: There are] [s: no green trees] [adv: here.]\n[s: The ground] [v: is] [o: black and grey.]\n[s: The air] [v: smells] [o: bad.]\n[v: There are] [s: no rivers,] [c: and] [v: there is] [s: no grass.]\n[s: The heroes] [v: look] [pt: at the dark sky.]\n[s: They] [v: are brave,] [c: but] [s: the road] [v: is difficult.]"
            },
            {
                "speaker": "valerius",
                "en": "The stones are hard and big. The boots of the heroes are old. The wind is cold. Every walk is hard. The heroes need courage. Zephyr and Selena walk behind the heroes. They look at the sky. Valerius stands in front. His armor is silver, but it is grey now. His eyes shine. Valerius looks at the map. \"Go, friends!\" Valerius says. \"Never stop in the valley! The air is bad!\"",
                "ru": "Камни твердые и большие. Сапоги героев старые. Ветер холодный. Каждый шаг дается тяжело. Героям нужно мужество. Зефир и Селена идут позади героев. Они смотрят на небо. Валериус стоит во главе. Его броня серебряная, но теперь она серая от пыли. Его глаза сияют. Валериус смотрит на карту. \"Вперед, друзья!\" — говорит Валериус. \"Никогда не останавливайтесь в долине! Воздух ядовит!\"",
                "chunkedEn": "[s: The stones] [v: are] [o: hard and big.]\n[s: The boots of the heroes] [v: are old.]\n[s: The wind] [v: is cold.]\n[s: Every walk] [v: is hard.]\n[s: The heroes] [v: need] [o: courage.]\n[s: Zephyr and Selena] [v: walk] [pt: behind the heroes.]\n[s: They] [v: look] [pt: at the sky.]\n[s: Valerius] [v: stands] [pt: in front.]\n[s: His armor] [v: is silver,] [c: but] [s: it] [v: is] [o: grey] [adv: now.]\n[s: His eyes] [v: shine.]\n[s: Valerius] [v: looks] [pt: at the map.]\n[v: \"Go,] [o: friends!\"] [s: Valerius] [v: says.]\n[adv: \"Never] [v: stop] [pt: in the valley!]\n[s: The air] [v: is bad!\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin walks next to Valerius. He has a big heavy bag on his shoulders. Thorin smiles. \"This valley is bad!\" Thorin says. \"The stones are hard, and the ground wants my boots! But my legs are strong like stone. We can walk in this valley!\"",
                "ru": "Торин идет рядом с Валериусом. У него на плечах большая тяжелая сумка. Торин улыбается. \"Эта долина ужасна!\" — говорит Торин. \"Камни твердые, и земля так и норовит содрать мои сапоги! Но мои ноги крепкие, как камень. Мы сможем пройти по этой долине!\"",
                "chunkedEn": "[s: Thorin] [v: walks] [pt: next to Valerius.]\n[s: He] [v: has] [o: a big heavy bag] [pt: on his shoulders.]\n[s: Thorin] [v: smiles.]\n[s: \"This valley] [v: is bad!\"] [s: Thorin] [v: says.]\n[s: \"The stones] [v: are hard,] [c: and] [s: the ground] [v: wants] [o: my boots!]\n[c: But] [s: my legs] [v: are strong] [pt: like stone.]\n[s: We] [v: can walk] [pt: in this valley!\"]"
            },
            {
                "speaker": "oberon",
                "en": "It is noon. The heroes stop near an old stone wall. The bottles are empty. They have no water. They are hungry and thirsty. Selena looks at the bottles. Zephyr looks at the bottles. Thorin looks between the rocks. He sees a small pond. The water in the pond is black and dirty. It is bad water.",
                "ru": "Полдень. Герои останавливаются возле старой каменной стены. Фляги пусты. У них нет воды. Они голодны и хотят пить. Селена смотрит на фляги. Зефир смотрит на фляги. Торин смотрит между скал. Он видит небольшой пруд. Вода в пруду черная и грязная. Это плохая вода.",
                "chunkedEn": "[s: It] [v: is] [pt: noon.]\n[s: The heroes] [v: stop] [pt: near an old stone wall.]\n[s: The bottles] [v: are empty.]\n[s: They] [v: have] [o: no water.]\n[s: They] [v: are] [o: hungry and thirsty.]\n[s: Selena] [v: looks] [pt: at the bottles.]\n[s: Zephyr] [v: looks] [pt: at the bottles.]\n[s: Thorin] [v: looks] [pt: between the rocks.]\n[s: He] [v: sees] [o: a small pond.]\n[s: The water in the pond] [v: is] [o: black and dirty.]\n[s: It] [v: is] [o: bad water.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon comes to the pond. He is old and kind. He has a wooden staff. Oberon touches the water with his staff. A soft green light comes from the staff. The heroes look at Oberon. \"Magic of the earth, make this water clean,\" Oberon says. The black water is gone! The water is clean and cold!",
                "ru": "Оберон подходит к пруду. Он стар и добр. У него деревянный посох. Оберон касается воды своим посохом. Мягкий зеленый свет исходит от посоха. Герои смотрят на Оберона. \"Магия земли, сделай эту воду чистой,\" — говорит Оберон. Черная вода исчезла! Вода чистая и холодная!",
                "chunkedEn": "[s: Oberon] [v: comes] [pt: to the pond.]\n[s: He] [v: is] [o: old and kind.]\n[s: He] [v: has] [o: a wooden staff.]\n[s: Oberon] [v: touches] [o: the water] [pt: with his staff.]\n[s: A soft green light] [v: comes] [pt: from the staff.]\n[s: The heroes] [v: look] [pt: at Oberon.]\n[s: \"Magic of the earth,] [v: make] [o: this water clean,\"] [s: Oberon] [v: says.]\n[s: The black water] [v: is gone!]\n[s: The water] [v: is] [o: clean and cold!]"
            },
            {
                "speaker": "oberon",
                "en": "\"Drink, my friends,\" Oberon says with a smile. \"The earth remembers life.\" The heroes drink the water. Thorin eats bread. Valerius drinks water. Oberon smiles. They rest. Selena and Zephyr stand on the big rocks. They look for scouts. They see no scouts.",
                "ru": "\"Пейте, друзья мои,\" — говорит Оберон с улыбкой. \"Земля помнит жизнь.\" Герои пьют воду. Торин ест хлеб. Валериус пьет воду. Оберон улыбается. Они отдыхают. Селена и Зефир стоят на больших скалах. Они высматривают разведчиков врага. Они не видят разведчиков.",
                "chunkedEn": "[v: \"Drink,] [o: my friends,\"] [s: Oberon] [v: says] [pt: with a smile.]\n[s: \"The earth] [v: remembers] [o: life.\"]\n[s: The heroes] [v: drink] [o: the water.]\n[s: Thorin] [v: eats] [o: bread.]\n[s: Valerius] [v: drinks] [o: water.]\n[s: Oberon] [v: smiles.]\n[s: They] [v: rest.]\n[s: Selena and Zephyr] [v: stand] [pt: on the big rocks.]\n[s: They] [v: look] [pt: for scouts.]\n[s: They] [v: see] [o: no scouts.]"
            },
            {
                "speaker": "ignis",
                "en": "Night falls. The wind is cold, and the temperature is below zero. The heroes go into a black cave. Selena takes a blanket. Thorin takes a blanket. Ignis stands in the center. Ignis is young. He has fire in his hands. The fire is red and warm. The heroes stand near Ignis. The heroes eat food near the fire. Now they are warm, and bad things are far away.",
                "ru": "Наступает ночь. Ветер холодный, а температура ниже нуля. Герои укрываются в черной пещере. Селена берет одеяло. Торин берет одеяло. Игнис стоит в центре. Игнис молод. У него огонь в руках. Огонь красный и теплый. Герои стоят рядом с Игнисом. Герои едят пищу возле огня. Теперь они согреты, и беды далеко.",
                "chunkedEn": "[s: Night] [v: falls.]\n[s: The wind] [v: is cold,] [c: and] [s: the temperature] [v: is] [pt: below zero.]\n[s: The heroes] [v: go] [pt: into a black cave.]\n[s: Selena] [v: takes] [o: a blanket.]\n[s: Thorin] [v: takes] [o: a blanket.]\n[s: Ignis] [v: stands] [pt: in the center.]\n[s: Ignis] [v: is young.]\n[s: He] [v: has] [o: fire] [pt: in his hands.]\n[s: The fire] [v: is] [o: red and warm.]\n[s: The heroes] [v: stand] [pt: near Ignis.]\n[s: The heroes] [v: eat] [o: food] [pt: near the fire.]\n[adv: Now] [s: they] [v: are warm,] [c: and] [s: bad things] [v: are] [adv: far away.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius stands at the mouth of the cave. He looks far across the valley. The sky is red. He sees the Ash Rift. The Ash Rift is big, like a fire in the earth. Purple thunder dances above the Ash Rift. \"The Ash Rift is near,\" Valerius says. Valerius asks, \"Are you ready?\" The heroes say, \"Yes!\" Thorin takes his war hammer. \"Tomorrow, we finish this war,\" Thorin says. Ignis smiles. Selena looks at the sky. The heroes sleep near the fire.",
                "ru": "Валериус стоит у входа в пещеру. Он смотрит далеко через долину. Небо красное. Он видит Пепельный Разлом. Пепельный Разлом огромен, как огонь в недрах земли. Фиолетовый гром пляшет над Пепельным Разломом. \"Пепельный Разлом близко,\" — говорит Валериус. Валериус спрашивает: \"Вы готовы?\" Герои отвечают: \"Да!\" Торин берет свой боевой молот. \"Завтра мы закончим эту войну,\" — говорит Торин. Игнис улыбается. Селена смотрит на небо. Герои спят возле костра.",
                "chunkedEn": "[s: Valerius] [v: stands] [pt: at the mouth of the cave.]\n[s: He] [v: looks] [adv: far] [pt: across the valley.]\n[s: The sky] [v: is red.]\n[s: He] [v: sees] [o: the Ash Rift.]\n[s: The Ash Rift] [v: is big,] [pt: like a fire] [pt: in the earth.]\n[s: Purple thunder] [v: dances] [pt: above the Ash Rift.]\n[s: \"The Ash Rift] [v: is] [adv: near,\"] [s: Valerius] [v: says.]\n[s: Valerius] [v: asks,] [o: \"Are you ready?\"]\n[s: The heroes] [v: say,] [o: \"Yes!\"]\n[s: Thorin] [v: takes] [o: his war hammer.]\n[adv: \"Tomorrow,] [s: we] [v: finish] [o: this war,\"] [s: Thorin] [v: says.]\n[s: Ignis] [v: smiles.]\n[s: Selena] [v: looks] [pt: at the sky.]\n[s: The heroes] [v: sleep] [pt: near the fire.]"
            }
        ],
        "quiz": {
            "question": "How did the heroes survive the freezing night in the cave?",
            "options": [
                "Ignis used his warm red fire to keep the heroes warm",
                "They stayed in a warm stone castle with beds",
                "They drank cold water from the black pond"
            ],
            "correctIndex": 0,
            "rewardXp": 494
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Dead Desolation",
        "locationRu": "Мертвые Пустоши",
        "campaignId": "fantasy"
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
                "speaker": "eldrin",
                "en": "It is night. A black fog is over the Ashen Camp. It is a quiet night. The ten heroes sleep near the rock wall in the cave. Outside, Archmage Eldrin makes a blue magic light. The light protects the heroes from bad animals. Eldrin stands near the light and looks at the sky. Now the blue magic light breaks! A big group of Ash Shades comes into the Ashen Camp. The Ash Shades have red eyes and long black hands. They are fast and dangerous. The heroes wake up. Frostina takes her shield and stands near the cave wall.",
                "ru": "Ночь. Черный туман стелется над Пепельным Лагерем. Это тихая ночь. Десять героев спят возле каменной стены в пещере. Снаружи архимаг Эльдрин создает синий магический свет. Свет защищает героев от опасных зверей. Эльдрин стоит возле света и смотрит на небо. Вдруг синий магический свет рушится! Большая группа Пепельных Теней врывается в Пепельный Лагерь. У Пепельных Теней красные глаза и длинные черные руки. Они быстры и опасны. Герои просыпаются. Фростина берет свой щит и встает у стены пещеры.",
                "chunkedEn": "[s: It] [v: is] [pt: night.]\n[s: A black fog] [v: is] [pt: over the Ashen Camp.]\n[s: It] [v: is] [o: a quiet night.]\n[s: The ten heroes] [v: sleep] [pt: near the rock wall] [pt: in the cave.]\n[adv: Outside,] [s: Archmage Eldrin] [v: makes] [o: a blue magic light.]\n[s: The light] [v: protects] [o: the heroes] [pt: from bad animals.]\n[s: Eldrin] [v: stands] [pt: near the light] [c: and] [v: looks] [pt: at the sky.]\n[adv: Now] [s: the blue magic light] [v: breaks!]\n[s: A big group of Ash Shades] [v: comes] [pt: into the Ashen Camp.]\n[s: The Ash Shades] [v: have] [o: red eyes and long black hands.]\n[s: They] [v: are] [o: fast and dangerous.]\n[s: The heroes] [v: wake up.]\n[s: Frostina] [v: takes] [o: her shield] [c: and] [v: stands] [pt: near the cave wall.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius gets up with his silver sword. \"Fight!\" he says. \"Protect the Ashen Camp!\" Thorin runs to the Ash Shades with his big hammer. He breaks three Ash Shades. Ignis makes bright fire in the dark cave. Astraea shows a bright light, and the Ash Shades cannot see. Selena cuts the Ash Shades with her two daggers. Frostina fights with her shield. The team wins!",
                "ru": "Валериус поднимается со своим серебряным мечом. \"К бою!\" — говорит он. \"Защищайте Пепельный Лагерь!\" Торин бежит на Пепельных Теней со своим большим молотом. Он сокрушает трех Пепельных Теней. Игнис зажигает яркий огонь в темной пещере. Астрея излучает яркий свет, и Пепельные Тени ничего не видят. Селена разит Пепельных Теней своими двумя кинжалами. Фростина сражается щитом. Команда побеждает!",
                "chunkedEn": "[s: Valerius] [v: gets up] [pt: with his silver sword.]\n[v: \"Fight!\"] [s: he] [v: says.]\n[v: \"Protect] [o: the Ashen Camp!\"]\n[s: Thorin] [v: runs] [pt: to the Ash Shades] [pt: with his big hammer.]\n[s: He] [v: breaks] [o: three Ash Shades.]\n[s: Ignis] [v: makes] [o: bright fire] [pt: in the dark cave.]\n[s: Astraea] [v: shows] [o: a bright light,] [c: and] [s: the Ash Shades] [v: cannot see.]\n[s: Selena] [v: cuts] [o: the Ash Shades] [pt: with her two daggers.]\n[s: Frostina] [v: fights] [pt: with her shield.]\n[s: The team] [v: wins!]"
            },
            {
                "speaker": "eldrin",
                "en": "Now the ten heroes are hot and weak. They drink water and rest. Thorin cleans his hammer. Ignis wants bread and eats it. Astraea helps Eldrin. Selena washes her daggers. Frostina looks at the fog. Archmage Eldrin stands with his wood staff. His face is white. He looks at the pocket on his belt. It is open! His hands are cold. \"My friends,\" he says. \"Someone took my Star Amulet in the fight!\"",
                "ru": "Теперь десять героев разгорячены и обессилены. Они пьют воду и отдыхают. Торин чистит свой молот. Игнис хочет хлеба и ест его. Астрея помогает Эльдрину. Селена омывает свои кинжалы. Фростина смотрит на туман. Архимаг Эльдрин стоит со своим деревянным посохом. Его лицо бледно. Он смотрит на сумку на своем поясе. Она открыта! Его руки холодны. \"Друзья мои,\" — говорит он. \"Кто-то забрал мой Звездный Амулет во время боя!\"",
                "chunkedEn": "[adv: Now] [s: the ten heroes] [v: are] [o: hot and weak.]\n[s: They] [v: drink] [o: water] [c: and] [v: rest.]\n[s: Thorin] [v: cleans] [o: his hammer.]\n[s: Ignis] [v: wants] [o: bread] [c: and] [v: eats] [o: it.]\n[s: Astraea] [v: helps] [o: Eldrin.]\n[s: Selena] [v: washes] [o: her daggers.]\n[s: Frostina] [v: looks] [pt: at the fog.]\n[s: Archmage Eldrin] [v: stands] [pt: with his wood staff.]\n[s: His face] [v: is white.]\n[s: He] [v: looks] [pt: at the pocket] [pt: on his belt.]\n[s: It] [v: is open!]\n[s: His hands] [v: are cold.]\n[o: \"My friends,\"] [s: he] [v: says.]\n[s: \"Someone] [v: took] [o: my Star Amulet] [pt: in the fight!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Without the Star Amulet, the heroes cannot open the Ash Rift. Everyone is afraid. Nobody speaks. Valerius looks around the cave. \"Who took it?\" he asks. \"A bad man is with us!\" He looks in the bags near the cave wall. He walks to Selena's bag under the black blanket. He opens it. A bright light comes from the bag! Valerius takes the glowing Star Amulet from the bag.",
                "ru": "Без Звездного Амулета герои не смогут открыть Пепельный Разлом. Все напуганы. Никто не говорит. Валериус осматривает пещеру. \"Кто взял его?\" — спрашивает он. \"Среди нас предатель!\" Он проверяет сумки возле стены пещеры. Он подходит к сумке Селены под черным одеялом. Он открывает ее. Яркий свет исходит из сумки! Валериус достает из сумки сияющий Звездный Амулет.",
                "chunkedEn": "[pt: Without the Star Amulet,] [s: the heroes] [v: cannot open] [o: the Ash Rift.]\n[s: Everyone] [v: is afraid.]\n[s: Nobody] [v: speaks.]\n[s: Valerius] [v: looks] [pt: around the cave.]\n[w: \"Who] [v: took] [o: it?\"] [s: he] [v: asks.]\n[s: \"A bad man] [v: is] [pt: with us!\"]\n[s: He] [v: looks] [pt: in the bags] [pt: near the cave wall.]\n[s: He] [v: walks] [pt: to Selena's bag] [pt: under the black blanket.]\n[s: He] [v: opens] [o: it.]\n[s: A bright light] [v: comes] [pt: from the bag!]\n[s: Valerius] [v: takes] [o: the glowing Star Amulet] [pt: from the bag.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius takes his sword and shows it to Selena. He is angry. \"The stone in the tower said the truth!\" he says. \"One of us is bad! You took the Star Amulet, Selena! You are not our friend!\"",
                "ru": "Валериус обнажает меч и направляет его на Селену. Он в ярости. \"Камень в башне сказал правду!\" — говорит он. \"Один из нас предатель! Ты взяла Звездный Амулет, Селена! Ты нам не друг!\"",
                "chunkedEn": "[s: Valerius] [v: takes] [o: his sword] [c: and] [v: shows] [o: it] [pt: to Selena.]\n[s: He] [v: is angry.]\n[s: \"The stone in the tower] [v: said] [o: the truth!\"] [s: he] [v: says.]\n[s: \"One of us] [v: is bad!]\n[s: You] [v: took] [o: the Star Amulet, Selena!]\n[s: You] [v: are not] [o: our friend!\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena goes back to the wall. Her purple eyes are big. \"No, Valerius! It is not true!\" she says. \"I was on guard on the tall rocks all night. I did not touch Eldrin's pocket! Someone wants a fight between us!\" \"You were in the Shadow Guild for ten years,\" Valerius says. \"You can take things and nobody hears you.\"",
                "ru": "Селена отступает к стене. Ее фиолетовые глаза широко раскрыты. \"Нет, Валериус! Это неправда!\" — говорит она. \"Я стояла на страже на высоких скалах всю ночь. Я не касалась сумки Эльдрина! Кто-то хочет стравить нас!\" \"Ты была в Гильдии Теней десять лет,\" — говорит Валериус. \"Ты можешь брать вещи так, что никто не услышит.\"",
                "chunkedEn": "[s: Selena] [v: goes back] [pt: to the wall.]\n[s: Her purple eyes] [v: are big.]\n[o: \"No, Valerius!] [s: It] [v: is not] [o: true!\"] [s: she] [v: says.]\n[s: \"I] [v: was] [pt: on guard] [pt: on the tall rocks] [pt: all night.]\n[s: I] [v: did not touch] [o: Eldrin's pocket!]\n[s: Someone] [v: wants] [o: a fight] [pt: between us!\"]\n[s: \"You] [v: were] [pt: in the Shadow Guild] [pt: for ten years,\"] [s: Valerius] [v: says.]\n[s: \"You] [v: can take] [o: things] [c: and] [s: nobody] [v: hears] [o: you.\"]"
            },
            {
                "speaker": "astraea",
                "en": "Frostina and Astraea go between Valerius and Selena. \"Stop, Valerius!\" Astraea says. \"Do not fight Selena! The Shadow God wants a fight between us! We are a team. Tomorrow we find the truth.\"",
                "ru": "Фростина и Астрея встают между Валериусом и Селеной. \"Остановись, Валериус!\" — говорит Астрея. \"Не нападай на Селену! Бог Теней хочет посеять вражду между нами! Мы — команда. Завтра мы узнаем правду.\"",
                "chunkedEn": "[s: Frostina and Astraea] [v: go] [pt: between Valerius and Selena.]\n[v: \"Stop,] [o: Valerius!\"] [s: Astraea] [v: says.]\n[v: \"Do not fight] [o: Selena!]\n[s: The Shadow God] [v: wants] [o: a fight] [pt: between us!]\n[s: We] [v: are] [o: a team.]\n[adv: Tomorrow] [s: we] [v: find] [o: the truth.\"]"
            },
            {
                "speaker": "selene",
                "en": "Valerius looks at Astraea. He does not speak. Selena looks at Valerius. She is not happy. Selena stands near the wall. Thorin looks at the floor. Ignis looks at his hands. Eldrin looks at the fog. Nobody sleeps. Now the heroes are not a team. The last battle is near.",
                "ru": "Валериус смотрит на Астрею. Он молчит. Селена смотрит на Валериуса. Она глубоко опечалена. Селена стоит у стены. Торин смотрит в пол. Игнис смотрит на свои руки. Эльдрин смотрит на туман. Никто не спит. Теперь герои разобщены. Последняя битва близка.",
                "chunkedEn": "[s: Valerius] [v: looks] [pt: at Astraea.]\n[s: He] [v: does not speak.]\n[s: Selena] [v: looks] [pt: at Valerius.]\n[s: She] [v: is not happy.]\n[s: Selena] [v: stands] [pt: near the wall.]\n[s: Thorin] [v: looks] [pt: at the floor.]\n[s: Ignis] [v: looks] [pt: at his hands.]\n[s: Eldrin] [v: looks] [pt: at the fog.]\n[s: Nobody] [v: sleeps.]\n[adv: Now] [s: the heroes] [v: are not] [o: a team.]\n[s: The last battle] [v: is] [adv: near.]"
            }
        ],
        "quiz": {
            "question": "Why did Valerius point his sword at Selena?",
            "options": [
                "Because the glowing Star Amulet was found in her bag",
                "Because she ran away to the Ash Rift",
                "Because she refused to fight the Ash Shades"
            ],
            "correctIndex": 0,
            "rewardXp": 487
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Ashen Camp Perimeter",
        "locationRu": "Периметр Пепельного Лагеря",
        "campaignId": "fantasy"
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
                "speaker": "frostina",
                "en": "The night in the Ashen Camp is dark and quiet. The wind is cold. It goes across the black stones. Nobody can sleep. Selena is in a dark corner of the cave. She has her silver daggers in her hands. She looks at the daggers. She is afraid. Valerius stands near the door of the cave. His head is down. His hand is on his sword. He looks at the ground.",
                "ru": "Ночь в Пепельном Лагере темная и тихая. Ветер холодный. Он гуляет среди черных камней. Никто не может уснуть. Селена сидит в темном углу пещеры. У нее в руках серебряные кинжалы. Она смотрит на кинжалы. Она подавлена. Валериус стоит у входа в пещеру. Его голова опущена. Его рука на мече. Он смотрит в землю.",
                "chunkedEn": "[s: The night in the Ashen Camp] [v: is] [o: dark and quiet.]\n[s: The wind] [v: is cold.]\n[s: It] [v: goes] [pt: across the black stones.]\n[s: Nobody] [v: can sleep.]\n[s: Selena] [v: is] [pt: in a dark corner of the cave.]\n[s: She] [v: has] [o: her silver daggers] [pt: in her hands.]\n[s: She] [v: looks] [pt: at the daggers.]\n[s: She] [v: is afraid.]\n[s: Valerius] [v: stands] [pt: near the door of the cave.]\n[s: His head] [v: is] [adv: down.]\n[s: His hand] [v: is] [pt: on his sword.]\n[s: He] [v: looks] [pt: at the ground.]"
            },
            {
                "speaker": "frostina",
                "en": "Now a big voice comes from the hill above the cave. The black rocks have purple fire on them. A woman is on the mountain. Her eyes are red. They are glowing with bad magic. It is the Ash Queen! It is magic. She is not a real woman! \"Look at the strong heroes of light!\" the Ash Queen says. Her voice is cold. \"You are weak! Now you have swords in your hands and you fight each other! A small shadow took the magic ring. It made the ring go into the backpack of that girl!\"",
                "ru": "Вдруг громкий голос раздается с холма над пещерой. Черные скалы объяты фиолетовым огнем. Женщина стоит на горе. Ее глаза красные. Они светятся зловещей магией. Это Пепельная Королева! Это морок. Она не настоящая женщина! \"Посмотрите на могучих героев света!\" — говорит Пепельная Королева. Ее голос холоден. \"Вы слабы! Теперь у вас мечи в руках, и вы воюете друг с другом! Маленькая тень украла реликвию. Она подбросила ее в рюкзак той девчонки!\"",
                "chunkedEn": "[adv: Now] [s: a big voice] [v: comes] [pt: from the hill] [pt: above the cave.]\n[s: The black rocks] [v: have] [o: purple fire] [pt: on them.]\n[s: A woman] [v: is] [pt: on the mountain.]\n[s: Her eyes] [v: are red.]\n[s: They] [v: are glowing] [pt: with bad magic.]\n[s: It] [v: is] [o: the Ash Queen!]\n[s: It] [v: is] [o: magic.]\n[s: She] [v: is not] [o: a real woman!]\n[v: \"Look] [pt: at the strong heroes of light!\"] [s: the Ash Queen] [v: says.]\n[s: Her voice] [v: is cold.]\n[s: \"You] [v: are weak!]\n[adv: Now] [s: you] [v: have] [o: swords] [pt: in your hands] [c: and] [s: you] [v: fight] [o: each other!]\n[s: A small shadow] [v: took] [o: the magic ring.]\n[s: It] [v: made] [o: the ring] [v: go] [pt: into the backpack of that girl!\"]"
            },
            {
                "speaker": "ignis",
                "en": "The heroes run out of the cave. Valerius looks at the woman with big eyes. His face is red. He is afraid. Selena looks at the ground. \"It is easy to make you fight!\" the Queen says. \"You will break your family. My master Morgath will have this realm!\"",
                "ru": "Герои выбегают из пещеры. Валериус смотрит на женщину расширенными глазами. Его лицо покраснело. Он потрясен. Селена смотрит в землю. \"Как легко заставить вас драться!\" — говорит Королева. \"Вы сами разрушите вашу семью. Мой повелитель Моргат завладеет этим миром!\"",
                "chunkedEn": "[s: The heroes] [v: run out] [pt: of the cave.]\n[s: Valerius] [v: looks] [pt: at the woman] [pt: with big eyes.]\n[s: His face] [v: is red.]\n[s: He] [v: is afraid.]\n[s: Selena] [v: looks] [pt: at the ground.]\n[s: \"It] [v: is easy to make] [o: you] [v: fight!\"] [s: the Queen] [v: says.]\n[s: \"You] [v: will break] [o: your family.]\n[s: My master Morgath] [v: will have] [o: this realm!\"]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis goes to the front. His eyes have orange fire. He is angry. \"You cannot break our family, bad queen!\" says the young wizard. Ignis shows his hands to the sky. A big red ball of fire comes from his hands. It flies to the mountain!",
                "ru": "Игнис выходит вперед. В его глазах горит оранжевый огонь. Он в гневе. \"Тебе не разрушить нашу семью, злая королева!\" — говорит юный маг. Игнис вздымает руки к небу. Огромный огненный шар вырывается из его рук. Он летит к горе!",
                "chunkedEn": "[s: Ignis] [v: goes] [pt: to the front.]\n[s: His eyes] [v: have] [o: orange fire.]\n[s: He] [v: is angry.]\n[s: \"You] [v: cannot break] [o: our family, bad queen!\"] [v: says] [s: the young wizard.]\n[s: Ignis] [v: shows] [o: his hands] [pt: to the sky.]\n[s: A big red ball of fire] [v: comes] [pt: from his hands.]\n[s: It] [v: flies] [pt: to the mountain!]"
            },
            {
                "speaker": "frostina",
                "en": "At the same time, Frostina takes her crystal staff. \"Cold of the old stars, break the dark!\" she says. Big blue spears of ice go to the sky with the fire. Fire and ice go to the woman at the same time. The magic breaks! The mountain breaks into small stones. The bad voice of the Queen goes away in the night wind.",
                "ru": "В тот же миг Фростина берет свой хрустальный посох. \"Мороз древних звезд, сокруши тьму!\" — говорит она. Огромные синие копья льда устремляются в небо вместе с огнем. Огонь и лед поражают женщину одновременно. Магия рассеивается! Гора раскалывается на мелкие камни. Зловещий голос Королевы уносится прочь в ночном ветре.",
                "chunkedEn": "[pt: At the same time,] [s: Frostina] [v: takes] [o: her crystal staff.]\n[s: \"Cold of the old stars,] [v: break] [o: the dark!\"] [s: she] [v: says.]\n[s: Big blue spears of ice] [v: go] [pt: to the sky] [pt: with the fire.]\n[s: Fire and ice] [v: go] [pt: to the woman] [pt: at the same time.]\n[s: The magic] [v: breaks!]\n[s: The mountain] [v: breaks] [pt: into small stones.]\n[s: The bad voice of the Queen] [v: goes away] [pt: in the night wind.]"
            },
            {
                "speaker": "valerius",
                "en": "It is quiet again on the black hills. The ten heroes stand on the sand. They are a team. Nobody says a word. Thorin looks at Valerius. Frostina looks at Selena. Ignis looks at the ground. Valerius goes to Selena. He is on one knee on the cold ground. His head is down. \"Selena... please,\" Valerius says in a quiet voice. \"I was afraid. The old legend was in my heart. You fought for us. You gave blood for us. I was bad to you. You are my sister.\"",
                "ru": "На черных холмах снова тихо. Десять героев стоят на песке. Они — команда. Никто не произносит ни слова. Торин смотрит на Валериуса. Фростина смотрит на Селену. Игнис смотрит в землю. Валериус подходит к Селене. Он опускается на одно колено на холодную землю. Его голова опущена. \"Селена... пожалуйста, прости,\" — тихо говорит Валериус. \"Я поддался страху. Древняя легенда ослепила мое сердце. Ты сражалась за нас. Ты проливала за нас кровь. Я поступил дурно с тобой. Ты моя сестра.\"",
                "chunkedEn": "[s: It] [v: is quiet] [adv: again] [pt: on the black hills.]\n[s: The ten heroes] [v: stand] [pt: on the sand.]\n[s: They] [v: are] [o: a team.]\n[s: Nobody] [v: says] [o: a word.]\n[s: Thorin] [v: looks] [pt: at Valerius.]\n[s: Frostina] [v: looks] [pt: at Selena.]\n[s: Ignis] [v: looks] [pt: at the ground.]\n[s: Valerius] [v: goes] [pt: to Selena.]\n[s: He] [v: is] [pt: on one knee] [pt: on the cold ground.]\n[s: His head] [v: is] [adv: down.]\n[o: \"Selena... please,\"] [s: Valerius] [v: says] [pt: in a quiet voice.]\n[s: \"I] [v: was afraid.]\n[s: The old legend] [v: was] [pt: in my heart.]\n[s: You] [v: fought] [pt: for us.]\n[s: You] [v: gave] [o: blood] [pt: for us.]\n[s: I] [v: was bad] [pt: to you.]\n[s: You] [v: are] [o: my sister.\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena goes to Valerius. She gives him her hand. She helps the knight get up. Her purple eyes are soft and warm. \"Get up, Valerius,\" Selena says in a soft voice. \"The shadow wanted us to fight. But love is stronger than dark magic. We are family.\"",
                "ru": "Селена подходит к Валериусу. Она подает ему руку. Она помогает рыцарю подняться. Ее фиолетовые глаза мягкие и теплые. \"Встань, Валериус,\" — говорит Селена мягким голосом. \"Тьма хотела, чтобы мы враждовали. Но любовь сильнее темной магии. Мы — семья.\"",
                "chunkedEn": "[s: Selena] [v: goes] [pt: to Valerius.]\n[s: She] [v: gives] [o: him] [o: her hand.]\n[s: She] [v: helps] [o: the knight] [v: get up.]\n[s: Her purple eyes] [v: are] [o: soft and warm.]\n[v: \"Get up,] [o: Valerius,\"] [s: Selena] [v: says] [pt: in a soft voice.]\n[s: \"The shadow] [v: wanted] [o: us] [v: to fight.]\n[c: But] [s: love] [v: is stronger] [pt: than dark magic.]\n[s: We] [v: are] [o: family.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Valerius smiles. Selena smiles also. Ignis and Frostina come to them. Thorin touches Valerius and Selena on the shoulder. He has a big smile. \"Now we are ten warriors with one heart!\" he says. \"The Ash Rift is waiting for us!\"",
                "ru": "Валериус улыбается. Селена тоже улыбается. Игнис и Фростина подходят к ним. Торин хлопает Валериуса и Селену по плечам. На его лице широкая улыбка. \"Теперь мы — десять воинов с единым сердцем!\" — говорит он. \"Пепельный Разлом ждет нас!\"",
                "chunkedEn": "[s: Valerius] [v: smiles.]\n[s: Selena] [v: smiles] [adv: also.]\n[s: Ignis and Frostina] [v: come] [pt: to them.]\n[s: Thorin] [v: touches] [o: Valerius and Selena] [pt: on the shoulder.]\n[s: He] [v: has] [o: a big smile.]\n[adv: \"Now] [s: we] [v: are] [o: ten warriors] [pt: with one heart!\"] [s: he] [v: says.]\n[s: \"The Ash Rift] [v: is waiting] [pt: for us!\"]"
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
            "rewardXp": 503
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Shadow Cliffs",
        "locationRu": "Теневые Утесы",
        "campaignId": "fantasy"
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
                "speaker": "thorin",
                "en": "The ten heroes arrive at the Ash Rift. They stand and look. Below them is a big red lake. The lake is hot. It is a lake of fire. Sparks go up to the dark sky. The air is hot and it smells of stone. Freya says, \"I am hot. I want water.\" Astraea gives her water. Freya drinks it. Zephyr has bread. He gives bread to Thorin and Valerius. They eat.",
                "ru": "Десять героев прибывают к Пепельному Разлому. Они стоят и смотрят. Внизу под ними большое красное озеро. Озеро раскаленное. Это озеро огня. Искры взлетают в темное небо. Воздух горяч и пахнет камнем. Фрейя говорит: \"Мне жарко. Я хочу воды.\" Астрея дает ей воды. Фрейя пьет ее. У Зефира есть хлеб. Он дает хлеб Торину и Валериусу. Они едят.",
                "chunkedEn": "[s: The ten heroes] [v: arrive] [pt: at the Ash Rift.]\n[s: They] [v: stand and look.]\n[pt: Below them] [v: is] [s: a big red lake.]\n[s: The lake] [v: is hot.]\n[s: It] [v: is] [o: a lake of fire.]\n[s: Sparks] [v: go up] [pt: to the dark sky.]\n[s: The air] [v: is hot] [c: and] [s: it] [v: smells] [pt: of stone.]\n[s: Freya] [v: says,] [s: \"I] [v: am hot.]\n[s: I] [v: want] [o: water.\"]\n[s: Astraea] [v: gives] [o: her] [o: water.]\n[s: Freya] [v: drinks] [o: it.]\n[s: Zephyr] [v: has] [o: bread.]\n[s: He] [v: gives] [o: bread] [pt: to Thorin and Valerius.]\n[s: They] [v: eat.]"
            },
            {
                "speaker": "thorin",
                "en": "Valerius takes a map. He looks at it. \"The Inner Gates are on the other side,\" he says. \"There is one road. It is a bridge.\" The heroes look at the bridge. It is old and narrow. It is made of white bones. Thorin looks at his heavy armor. \"This bridge is old, friends,\" he says. \"The bones are strong. But the fire below is dangerous. You can die in it. Go slow and walk with me.\"",
                "ru": "Валериус достает карту. Он смотрит на нее. \"Внутренние Врата на другой стороне,\" — говорит он. \"Есть одна дорога. Это мост.\" Герои смотрят на мост. Он старый и узкий. Он сделан из белых костей. Торин смотрит на свою тяжелую броню. \"Этот мост старый, друзья,\" — говорит он. \"Кости прочные. Но огонь внизу опасен. В нем можно погибнуть. Идите медленно и ступайте за мной.\"",
                "chunkedEn": "[s: Valerius] [v: takes] [o: a map.]\n[s: He] [v: looks] [pt: at it.]\n[s: \"The Inner Gates] [v: are] [pt: on the other side,\"] [s: he] [v: says.]\n[v: \"There is] [s: one road.]\n[s: It] [v: is] [o: a bridge.\"]\n[s: The heroes] [v: look] [pt: at the bridge.]\n[s: It] [v: is old and narrow.]\n[s: It] [v: is made] [pt: of white bones.]\n[s: Thorin] [v: looks] [pt: at his heavy armor.]\n[s: \"This bridge] [v: is old, friends,\"] [s: he] [v: says.]\n[s: \"The bones] [v: are strong.]\n[c: But] [s: the fire below] [v: is dangerous.]\n[s: You] [v: can die] [pt: in it.]\n[v: Go] [adv: slow] [c: and] [v: walk] [pt: with me.\"]"
            },
            {
                "speaker": "freya",
                "en": "The squad goes on the bridge. They go one by one. Valerius and Freya go first. Thorin goes behind Freya. Oberon and Astraea go last. The bridge is long. Zephyr looks at the sky. Astraea looks at the fire. Nobody says a word.",
                "ru": "Отряд ступает на мост. Они идут друг за другом. Валериус и Фрейя идут первыми. Торин идет позади Фрейи. Оберон и Астрея замыкают строй. Мост длинный. Зефир смотрит на небо. Астрея смотрит на огонь. Никто не произносит ни слова.",
                "chunkedEn": "[s: The squad] [v: goes] [pt: on the bridge.]\n[s: They] [v: go] [adv: one by one.]\n[s: Valerius and Freya] [v: go] [adv: first.]\n[s: Thorin] [v: goes] [pt: behind Freya.]\n[s: Oberon and Astraea] [v: go] [adv: last.]\n[s: The bridge] [v: is long.]\n[s: Zephyr] [v: looks] [pt: at the sky.]\n[s: Astraea] [v: looks] [pt: at the fire.]\n[s: Nobody] [v: says] [o: a word.]"
            },
            {
                "speaker": "freya",
                "en": "Now fire comes up from the lake! A big Magma Titan comes up on the bridge. It is tall. It is bigger than a tower. Its body is made of hot stone. Its eye is red and glowing. It has four arms. It has two big clubs. The Titan takes a club. It breaks the center of the bridge! The old bones break into pieces! \"It wants us in the fire!\" Freya says. She takes her thunder spear. \"Thorin, come with me!\"",
                "ru": "Вдруг огонь взмывает из озера! Огромный Магматический Титан поднимается на мост. Он высокий. Он больше башни. Его тело сделано из раскаленного камня. Его глаз красный и пылающий. У него четыре руки. У него две большие дубины. Титан берет дубину. Он разбивает середину моста! Старые кости разлетаются на куски! \"Он хочет сбросить нас в огонь!\" — кричит Фрейя. Она берет свое копье грома. \"Торин, за мной!\"",
                "chunkedEn": "[adv: Now] [s: fire] [v: comes up] [pt: from the lake!]\n[s: A big Magma Titan] [v: comes up] [pt: on the bridge.]\n[s: It] [v: is tall.]\n[s: It] [v: is bigger] [pt: than a tower.]\n[s: Its body] [v: is made] [pt: of hot stone.]\n[s: Its eye] [v: is red and glowing.]\n[s: It] [v: has] [o: four arms.]\n[s: It] [v: has] [o: two big clubs.]\n[s: The Titan] [v: takes] [o: a club.]\n[s: It] [v: breaks] [o: the center of the bridge!]\n[s: The old bones] [v: break] [pt: into pieces!]\n[s: \"It] [v: wants] [o: us] [pt: in the fire!\"] [s: Freya] [v: says.]\n[s: She] [v: takes] [o: her thunder spear.]\n[o: \"Thorin,] [v: come] [pt: with me!\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin and Freya run to the Titan. The bridge moves under them. The Titan has four big hands. It fights with them. Thorin takes his bronze hammer. He goes to the Titan's knee. With all his power, he breaks it! The stone leg breaks. The Titan goes down on one knee.",
                "ru": "Торин и Фрейя бегут к Титану. Мост шатается под ними. У Титана четыре огромные руки. Он сражается ими. Торин берет свой бронзовый молот. Он устремляется к колену Титана. Со всей силой он наносит удар! Каменная нога ломается. Титан опускается на одно колено.",
                "chunkedEn": "[s: Thorin and Freya] [v: run] [pt: to the Titan.]\n[s: The bridge] [v: moves] [pt: under them.]\n[s: The Titan] [v: has] [o: four big hands.]\n[s: It] [v: fights] [pt: with them.]\n[s: Thorin] [v: takes] [o: his bronze hammer.]\n[s: He] [v: goes] [pt: to the Titan's knee.]\n[pt: With all his power,] [s: he] [v: breaks] [o: it!]\n[s: The stone leg] [v: breaks.]\n[s: The Titan] [v: goes down] [pt: on one knee.]"
            },
            {
                "speaker": "freya",
                "en": "\"Now, Freya! Go for the eye!\" Thorin says. He stands at the leg with his hammer. Freya jumps up. Blue storm dances on her silver armor and on her spear. She calls with a strong voice. With courage, she cuts the glowing eye with her spear! There is big thunder and big fire! The Titan falls back into the lake. The lake takes it.",
                "ru": "\"Сейчас, Фрейя! Бей в глаз!\" — кричит Торин. Он стоит у ноги гиганта с молотом. Фрейя взмывает вверх. Синяя буря пляшет на ее серебряной броне и на ее копье. Она кричит громким голосом. С мужеством она разит светящийся глаз своим копьем! Великий гром и великий огонь озаряют бездну! Титан падает назад в озеро. Озеро поглощает его.",
                "chunkedEn": "[adv: \"Now,] [o: Freya!] [v: Go] [pt: for the eye!\"] [s: Thorin] [v: says.]\n[s: He] [v: stands] [pt: at the leg] [pt: with his hammer.]\n[s: Freya] [v: jumps up.]\n[s: Blue storm] [v: dances] [pt: on her silver armor] [c: and] [pt: on her spear.]\n[s: She] [v: calls] [pt: with a strong voice.]\n[pt: With courage,] [s: she] [v: cuts] [o: the glowing eye] [pt: with her spear!]\n[v: There is] [s: big thunder and big fire!]\n[s: The Titan] [v: falls back] [pt: into the lake.]\n[s: The lake] [v: takes] [o: it.]"
            },
            {
                "speaker": "oberon",
                "en": "But the center of the bridge is gone. The other side is far. Between the heroes and the other side is air. \"We can't jump,\" Zephyr says. \"Look at the fire below!\" Oberon goes to the end of the bridge. He has a wood staff. He touches the white bones with it. He says in a strong voice, \"Roots of the old grove, make a bridge over the fire!\"",
                "ru": "Но центр моста уничтожен. Другая сторона далеко. Между героями и другой стороной лишь пустота. \"Мы не сможем перепрыгнуть,\" — говорит Зефир. \"Посмотрите на огонь внизу!\" Оберон подходит к краю моста. У него деревянный посох. Он касается им белых костей. Он произносит громким голосом: \"Корни древней рощи, сотворите мост над огнем!\"",
                "chunkedEn": "[c: But] [s: the center of the bridge] [v: is gone.]\n[s: The other side] [v: is far.]\n[pt: Between the heroes and the other side] [v: is] [s: air.]\n[s: \"We] [v: can't jump,\"] [s: Zephyr] [v: says.]\n[v: \"Look] [pt: at the fire below!\"]\n[s: Oberon] [v: goes] [pt: to the end of the bridge.]\n[s: He] [v: has] [o: a wood staff.]\n[s: He] [v: touches] [o: the white bones] [pt: with it.]\n[s: He] [v: says] [pt: in a strong voice,] [s: \"Roots of the old grove,] [v: make] [o: a bridge] [pt: over the fire!\"]"
            },
            {
                "speaker": "oberon",
                "en": "Big green roots come out of the staff. They go around the white bones. They make a new bridge of wood and bone across the fire! \"Go fast, friends!\" Oberon says. The ten heroes run on the new bridge. They come to the black stone on the other side. Astraea looks back at the fire. Thorin smiles. \"Good!\" he says. Freya takes her spear. Behind them, the Inner Gates of the Ash Rift begin to open slowly.",
                "ru": "Огромные зеленые корни вырываются из посоха. Они оплетают белые кости. Они создают новый мост из дерева и костей над огнем! \"Бегите быстрее, друзья!\" — говорит Оберон. Десять героев бегут по новому мосту. Они ступают на черный камень на другой стороне. Астрея оглядывается на огонь. Торин улыбается. \"Отлично!\" — говорит он. Фрейя поднимает копье. Позади них Внутренние Врата Пепельного Разлома начинают медленно открываться.",
                "chunkedEn": "[s: Big green roots] [v: come out] [pt: of the staff.]\n[s: They] [v: go around] [o: the white bones.]\n[s: They] [v: make] [o: a new bridge of wood and bone] [pt: across the fire!]\n[v: \"Go] [adv: fast,] [o: friends!\"] [s: Oberon] [v: says.]\n[s: The ten heroes] [v: run] [pt: on the new bridge.]\n[s: They] [v: come] [pt: to the black stone] [pt: on the other side.]\n[s: Astraea] [v: looks back] [pt: at the fire.]\n[s: Thorin] [v: smiles.]\n[o: \"Good!\"] [s: he] [v: says.]\n[s: Freya] [v: takes] [o: her spear.]\n[pt: Behind them,] [s: the Inner Gates of the Ash Rift] [v: begin to open] [adv: slowly.]"
            }
        ],
        "quiz": {
            "question": "How did Oberon repair the bridge when the Magma Titan broke it?",
            "options": [
                "He made a bridge of living green roots and bone across the fire",
                "He called a giant flying bird",
                "He froze the entire lake of fire into ice"
            ],
            "correctIndex": 0,
            "rewardXp": 535
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Dragon Bone Bridge",
        "locationRu": "Мост из Костей Дракона",
        "campaignId": "fantasy"
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
                "speaker": "zephyr",
                "en": "The ten heroes cross the bridge of roots. They come to the dark Obsidian Chasm. The walls of the Obsidian Chasm are tall and black. The walls are like glass. Below the heroes, there is a bad fog. The fog is dangerous. The air is cold. The heroes walk on a narrow stone path. They walk with care. They look at the walls. They look at the fog.",
                "ru": "Десять героев переходят мост из корней. Они подходят к темной Обсидиановой Бездне. Стены Обсидиановой Бездны высокие и черные. Стены словно из стекла. Под героями клубится зловещий туман. Туман опасен. Воздух холоден. Герои идут по узкой каменной тропе. Они идут с осторожностью. Они смотрят на стены. Они смотрят на туман.",
                "chunkedEn": "[s: The ten heroes] [v: cross] [o: the bridge of roots.]\n[s: They] [v: come] [pt: to the dark Obsidian Chasm.]\n[s: The walls of the Obsidian Chasm] [v: are tall and black.]\n[s: The walls] [v: are] [pt: like glass.]\n[pt: Below the heroes,] [s: there] [v: is] [o: a bad fog.]\n[s: The fog] [v: is dangerous.]\n[s: The air] [v: is cold.]\n[s: The heroes] [v: walk] [pt: on a narrow stone path.]\n[s: They] [v: walk] [pt: with care.]\n[s: They] [v: look] [pt: at the walls.]\n[s: They] [v: look] [pt: at the fog.]"
            },
            {
                "speaker": "zephyr",
                "en": "Zephyr walks in front. He has a green bow. He looks at the dark. He listens. \"Friends, walk with care,\" Zephyr says. \"The path is hard and cold. Below us is the fog. The air in the fog is bad. If you fall, you die.\" Astraea walks behind him. She has a glowing crystal staff. \"Do not be afraid, Zephyr,\" Astraea says. \"My star light is with us. It helps every one of us.\"",
                "ru": "Зефир идет впереди. У него зеленый лук. Он вглядывается в темноту. Он прислушивается. \"Друзья, идите осторожно,\" — говорит Зефир. \"Тропа твердая и холодная. Под нами туман. Воздух в тумане ядовит. Если вы упадете, вы погибнете.\" Астрея идет за ним. У нее светящийся хрустальный посох. \"Не бойся, Зефир,\" — говорит Астрея. \"Свет моих звезд с нами. Он помогает каждому из нас.\"",
                "chunkedEn": "[s: Zephyr] [v: walks] [pt: in front.]\n[s: He] [v: has] [o: a green bow.]\n[s: He] [v: looks] [pt: at the dark.]\n[s: He] [v: listens.]\n[o: \"Friends,] [v: walk] [pt: with care,\"] [s: Zephyr] [v: says.]\n[s: \"The path] [v: is hard and cold.]\n[pt: Below us] [v: is] [s: the fog.]\n[s: The air in the fog] [v: is bad.]\n[c: If] [s: you] [v: fall,] [s: you] [v: die.\"]\n[s: Astraea] [v: walks] [pt: behind him.]\n[s: She] [v: has] [o: a glowing crystal staff.]\n[v: \"Do not be] [o: afraid, Zephyr,\"] [s: Astraea] [v: says.]\n[s: \"My star light] [v: is] [pt: with us.]\n[s: It] [v: helps] [o: every one of us.\"]"
            },
            {
                "speaker": "zephyr",
                "en": "Now a big dark power comes from above. It breaks the wall. Black rocks fall like rain. The power is strong. It comes to Zephyr, and he falls back. His boots are on the stone. The stone is hard like glass. Zephyr falls from the path. He falls into the fog! \"Zephyr!\" Valerius says. He is afraid. His armor is heavy and he is slow. The green scout is not there. The fog is big and dark.",
                "ru": "Внезапно великая темная сила обрушивается сверху. Она разбивает стену. Черные камни падают словно дождь. Сила могущественна. Она ударяет Зефира, и он падает назад. Его сапоги скользят по камню. Камень твердый, как стекло. Зефир срывается с тропы. Он падает в туман! \"Зефир!\" — кричит Валериус. Он напуган. Его доспехи тяжелы, и он медлителен. Зеленого разведчика больше нет на тропе. Туман огромный и темный.",
                "chunkedEn": "[adv: Now] [s: a big dark power] [v: comes] [pt: from above.]\n[s: It] [v: breaks] [o: the wall.]\n[s: Black rocks] [v: fall] [pt: like rain.]\n[s: The power] [v: is strong.]\n[s: It] [v: comes] [pt: to Zephyr,] [c: and] [s: he] [v: falls back.]\n[s: His boots] [v: are] [pt: on the stone.]\n[s: The stone] [v: is hard] [pt: like glass.]\n[s: Zephyr] [v: falls] [pt: from the path.]\n[s: He] [v: falls] [pt: into the fog!]\n[o: \"Zephyr!\"] [s: Valerius] [v: says.]\n[s: He] [v: is afraid.]\n[s: His armor] [v: is heavy] [c: and] [s: he] [v: is slow.]\n[s: The green scout] [v: is not] [pt: there.]\n[s: The fog] [v: is big and dark.]"
            },
            {
                "speaker": "astraea",
                "en": "The heroes stand on the path. They do not move. But Astraea does not wait. She does not stop. She leaves her staff on the path. She runs to the end of the path. She jumps into the Obsidian Chasm after Zephyr!",
                "ru": "Герои стоят на тропе. Они не двигаются. Но Астрея не ждет. Она не колеблется. Она оставляет свой посох на тропе. Она бежит к краю тропы. Она прыгает в Обсидиановую Бездну вслед за Зефиром!",
                "chunkedEn": "[s: The heroes] [v: stand] [pt: on the path.]\n[s: They] [v: do not move.]\n[c: But] [s: Astraea] [v: does not wait.]\n[s: She] [v: does not stop.]\n[s: She] [v: leaves] [o: her staff] [pt: on the path.]\n[s: She] [v: runs] [pt: to the end of the path.]\n[s: She] [v: jumps] [pt: into the Obsidian Chasm] [pt: after Zephyr!]"
            },
            {
                "speaker": "astraea",
                "en": "Astraea falls in the dark. She closes her eyes. She speaks to the stars. Bright gold wings come from her back! She flies fast through the bad fog. She is like a star in the sky. She sees Zephyr in the dark air. He is far below. Astraea flies down fast. She takes his hand. She takes him to her chest.",
                "ru": "Астрея падает в темноте. Она закрывает глаза. Она обращается к звездам. Яркие золотые крылья вырастают за ее спиной! Она стремительно летит сквозь ядовитый туман. Она словно звезда на небе. Она видит Зефира в темном воздухе. Он далеко внизу. Астрея быстро пикирует вниз. Она хватает его за руку. Она прижимает его к груди.",
                "chunkedEn": "[s: Astraea] [v: falls] [pt: in the dark.]\n[s: She] [v: closes] [o: her eyes.]\n[s: She] [v: speaks] [pt: to the stars.]\n[s: Bright gold wings] [v: come] [pt: from her back!]\n[s: She] [v: flies] [adv: fast] [pt: through the bad fog.]\n[s: She] [v: is] [pt: like a star in the sky.]\n[s: She] [v: sees] [o: Zephyr] [pt: in the dark air.]\n[s: He] [v: is] [pt: far below.]\n[s: Astraea] [v: flies down] [adv: fast.]\n[s: She] [v: takes] [o: his hand.]\n[s: She] [v: takes] [o: him] [pt: to her chest.]"
            },
            {
                "speaker": "zephyr",
                "en": "With her other hand, Astraea makes star magic. A big ball of gold light comes around them. The ball stops the bad air. It stops their fall. Inside the ball, the air is clean, warm, and sweet. Zephyr smiles. He is happy. He looks at Astraea. \"You are brave!\" Zephyr says. \"You are amazing! No one jumps into the Obsidian Chasm like this!\"",
                "ru": "Другой рукой Астрея творит магию звезд. Большой шар золотого света окружает их. Шар не пропускает ядовитый воздух. Он останавливает их падение. Внутри шара воздух чистый, теплый и сладкий. Зефир улыбается. Он счастлив. Он смотрит на Астрею. \"Ты храбрая!\" — говорит Зефир. \"Ты потрясающая! Никто не прыгает в Обсидиановую Бездну вот так!\"",
                "chunkedEn": "[pt: With her other hand,] [s: Astraea] [v: makes] [o: star magic.]\n[s: A big ball of gold light] [v: comes] [pt: around them.]\n[s: The ball] [v: stops] [o: the bad air.]\n[s: It] [v: stops] [o: their fall.]\n[pt: Inside the ball,] [s: the air] [v: is clean, warm, and sweet.]\n[s: Zephyr] [v: smiles.]\n[s: He] [v: is happy.]\n[s: He] [v: looks] [pt: at Astraea.]\n[o: \"You] [v: are brave!\"] [s: Zephyr] [v: says.]\n[o: \"You] [v: are amazing!] [s: No one] [v: jumps] [pt: into the Obsidian Chasm] [pt: like this!\"]"
            },
            {
                "speaker": "zephyr",
                "en": "\"We never leave a friend, Zephyr,\" Astraea smiles. \"Now we go back to our friends!\" Zephyr takes his bow. He takes a storm arrow. He looks up at the rock above them. \"Come close to me, Astraea!\" he says. He uses the bow. The magic arrow goes up into the rock. It is strong. It makes a way up.",
                "ru": "\"Мы никогда не бросаем друзей, Зефир,\" — улыбается Астрея. \"А теперь мы возвращаемся к нашим друзьям!\" Зефир берет свой лук. Он берет штормовую стрелу. Он смотрит вверх на скалу над ними. \"Держись ближе ко мне, Астрея!\" — говорит он. Он натягивает лук. Магическая стрела вонзается высоко в скалу. Она прочна. Она открывает путь наверх.",
                "chunkedEn": "[s: \"We] [adv: never] [v: leave] [o: a friend, Zephyr,\"] [s: Astraea] [v: smiles.]\n[adv: \"Now] [s: we] [v: go back] [pt: to our friends!\"]\n[s: Zephyr] [v: takes] [o: his bow.]\n[s: He] [v: takes] [o: a storm arrow.]\n[s: He] [v: looks up] [pt: at the rock above them.]\n[v: \"Come] [pt: close to me, Astraea!\"] [s: he] [v: says.]\n[s: He] [v: uses] [o: the bow.]\n[s: The magic arrow] [v: goes up] [pt: into the rock.]\n[s: It] [v: is strong.]\n[s: It] [v: makes] [o: a way up.]"
            },
            {
                "speaker": "astraea",
                "en": "Astraea flies with her gold wings. Zephyr goes with her. They go up through the fog like an arrow of light. They come back to the path. The squad is there. The heroes are happy. Thorin smiles at Zephyr. Valerius is happy. Astraea takes her staff. Zephyr says, \"Thank you, Astraea.\" They drink water. They rest. Now the ten heroes stand as a team. They are ready to go to the Inner Gate.",
                "ru": "Астрея взмахивает золотыми крыльями. Зефир поднимается вместе с ней. Они взмывают сквозь туман, подобно стреле света. Они возвращаются на тропу. Отряд ждет там. Герои счастливы. Торин улыбается Зефиру. Валериус рад. Астрея берет свой посох. Зефир говорит: \"Спасибо тебе, Астрея.\" Они пьют воду. Они отдыхают. Теперь десять героев стоят как единая команда. Они готовы идти к Внутренним Вратам.",
                "chunkedEn": "[s: Astraea] [v: flies] [pt: with her gold wings.]\n[s: Zephyr] [v: goes] [pt: with her.]\n[s: They] [v: go up] [pt: through the fog] [pt: like an arrow of light.]\n[s: They] [v: come back] [pt: to the path.]\n[s: The squad] [v: is] [pt: there.]\n[s: The heroes] [v: are happy.]\n[s: Thorin] [v: smiles] [pt: at Zephyr.]\n[s: Valerius] [v: is happy.]\n[s: Astraea] [v: takes] [o: her staff.]\n[s: Zephyr] [v: says,] [o: \"Thank you, Astraea.\"]\n[s: They] [v: drink] [o: water.]\n[s: They] [v: rest.]\n[adv: Now] [s: the ten heroes] [v: stand] [pt: as a team.]\n[s: They] [v: are ready] [pt: to go to the Inner Gate.]"
            }
        ],
        "quiz": {
            "question": "What did Astraea do to save Zephyr when he fell into the abyss?",
            "options": [
                "She jumped after him and created a protective gold light sphere",
                "She threw a rope from the stone path",
                "She asked Valerius to jump into the fog"
            ],
            "correctIndex": 0,
            "rewardXp": 517
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Obsidian Chasm",
        "locationRu": "Обсидиановая Бездна",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "The ten heroes walk on the black road. They walk and walk. Now they come to the Inner Gate of the Ash Rift. The big doors are made of black stone and red iron. Dark lights glow on the stone. They are red like blood. The ten heroes stop. In front of the doors, a tall man stands on a stone platform. He is in silver and black clothes. In his hand he has a key. The key glows. It can open the door of the Ash Titan.",
                "ru": "Десять героев идут по черной дороге. Они идут и идут. Теперь они подходят к Внутренним Вратам Пепельного Разлома. Большие двери сделаны из черного камня и красного железа. Темные огни светятся на камне. Они красные, как кровь. Десять героев останавливаются. Перед дверями на каменной платформе стоит высокий человек. Он в серебряных и черных одеждах. В руке у него ключ. Ключ светится. Он может открыть дверь Пепельного Титана.",
                "chunkedEn": "[s: The ten heroes] [v: walk] [pt: on the black road.]\n[s: They] [v: walk and walk.]\n[adv: Now] [s: they] [v: come] [pt: to the Inner Gate of the Ash Rift.]\n[s: The big doors] [v: are made] [pt: of black stone and red iron.]\n[s: Dark lights] [v: glow] [pt: on the stone.]\n[s: They] [v: are red] [pt: like blood.]\n[s: The ten heroes] [v: stop.]\n[pt: In front of the doors,] [s: a tall man] [v: stands] [pt: on a stone platform.]\n[s: He] [v: is] [pt: in silver and black clothes.]\n[pt: In his hand] [s: he] [v: has] [o: a key.]\n[s: The key] [v: glows.]\n[s: It] [v: can open] [o: the door of the Ash Titan.]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius looks at the man. He is afraid and angry. He takes his silver sword. \"Malakor!\" Valerius says. \"You are the Grand Master of the Silver Citadel! You told the King that I was a bad man! You sent me far away. It was cold there!\"",
                "ru": "Валериус смотрит на человека. Он напуган и разгневан. Он достает свой серебряный меч. \"Малакор!\" — говорит Валериус. \"Ты Великий Магистр Серебряной Цитадели! Ты сказал Королю, что я предатель! Ты изгнал меня далеко. Там было холодно!\"",
                "chunkedEn": "[s: Valerius] [v: looks] [pt: at the man.]\n[s: He] [v: is afraid and angry.]\n[s: He] [v: takes] [o: his silver sword.]\n[o: \"Malakor!\"] [s: Valerius] [v: says.]\n[o: \"You] [v: are] [o: the Grand Master of the Silver Citadel!]\n[s: You] [v: told] [o: the King] [c: that] [s: I] [v: was] [o: a bad man!]\n[s: You] [v: sent] [o: me] [adv: far away.]\n[s: It] [v: was cold] [pt: there!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Malakor smiles. His eyes are like purple fire. \"Weak knight!\" Malakor says. \"You always cared for honor and duty, but honor is weak! The dark kings of the Ash Rift gave me a long life and power over all three realms. With this key I can open the door and wake up the Ash Titan. All kings are going to bow to me!\"",
                "ru": "Малакор усмехается. Его глаза подобны фиолетовому огню. \"Слабый рыцарь!\" — говорит Малакор. \"Ты всегда заботился о чести и долге, но честь слаба! Темные короли Пепельного Разлома даровали мне долгую жизнь и власть над всеми тремя королевствами. Этим ключом я открою дверь и разбужу Пепельного Титана. Все короли склонятся передо мной!\"",
                "chunkedEn": "[s: Malakor] [v: smiles.]\n[s: His eyes] [v: are] [pt: like purple fire.]\n[o: \"Weak knight!\"] [s: Malakor] [v: says.]\n[s: \"You] [adv: always] [v: cared] [pt: for honor and duty,]\n[c: but] [s: honor] [v: is weak!]\n[s: The dark kings of the Ash Rift] [v: gave] [o: me a long life and power] [pt: over all three realms.]\n[pt: With this key] [s: I] [v: can open] [o: the door] [c: and] [v: wake up] [o: the Ash Titan.]\n[s: All kings] [v: are going to bow] [pt: to me!\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena looks at Malakor. She comes from the shadows. Her purple daggers shine with power. \"So it was you,\" Selena says in a cold voice. \"You took the plans of the realms. You sent the shadow animals to make us angry with each other. You wanted our people to fight, and you wanted to open the door of the Ash Titan!\"",
                "ru": "Селена смотрит на Малакора. Она выходит из теней. Ее фиолетовые кинжалы сияют силой. \"Так это был ты,\" — говорит Селена холодным голосом. \"Ты украл планы королевств. Ты послал теневых тварей, чтобы стравить нас друг с другом. Ты хотел, чтобы наши народы воевали, пока ты откроешь дверь Пепельного Титана!\"",
                "chunkedEn": "[s: Selena] [v: looks] [pt: at Malakor.]\n[s: She] [v: comes] [pt: from the shadows.]\n[s: Her purple daggers] [v: shine] [pt: with power.]\n[o: \"So it was you,\"] [s: Selena] [v: says] [pt: in a cold voice.]\n[s: \"You] [v: took] [o: the plans of the realms.]\n[s: You] [v: sent] [o: the shadow animals] [pt: to make us angry with each other.]\n[s: You] [v: wanted] [o: our people to fight,] [c: and] [s: you] [v: wanted to open] [o: the door of the Ash Titan!\"]"
            },
            {
                "speaker": "selene",
                "en": "Malakor smiles again. \"Yes, little Selena!\" he says. \"And your squad believed the old legend! You thought: 'One of my friends is bad!' You did not know who was good. But the bad thing came from your Silver Citadel!\"",
                "ru": "Малакор снова улыбается. \"Да, маленькая Селена!\" — говорит он. \"И ваш отряд поверил в древнюю легенду! Вы думали: 'Один из моих друзей — предатель!' Вы не знали, кто на самом деле добр. Но зло пришло из вашей собственной Серебряной Цитадели!\"",
                "chunkedEn": "[s: Malakor] [v: smiles] [adv: again.]\n[o: \"Yes, little Selena!\"] [s: he] [v: says.]\n[c: \"And] [s: your squad] [v: believed] [o: the old legend!]\n[s: You] [v: thought:] [o: 'One of my friends is bad!']\n[s: You] [v: did not know] [o: who was good.]\n[c: But] [s: the bad thing] [v: came] [pt: from your Silver Citadel!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius looks at his friends. He sees Thorin. Thorin has his big bronze hammer. He sees Selena, Freya, Frostina, Zephyr, Astraea, Ignis, Oberon, and Eldrin. They stand next to him. Valerius has peace and courage in his heart. \"The legend did not speak of our squad,\" Valerius says in a strong voice. \"It spoke of bad people in our old Citadel. But now we are one team!\"",
                "ru": "Валериус смотрит на своих друзей. Он видит Торина. У Торина его большой бронзовый молот. Он видит Селену, Фрейю, Фростину, Зефира, Астрею, Игниса, Оберона и Эльдрина. Они стоят рядом с ним. В сердце Валериуса воцаряются мир и мужество. \"Легенда говорила не о нашем отряде,\" — твердым голосом произносит Валериус. \"Она говорила о порочных правителях нашей старой Цитадели. Но теперь мы — одна команда!\"",
                "chunkedEn": "[s: Valerius] [v: looks] [pt: at his friends.]\n[s: He] [v: sees] [o: Thorin.]\n[s: Thorin] [v: has] [o: his big bronze hammer.]\n[s: He] [v: sees] [o: Selena, Freya, Frostina, Zephyr, Astraea, Ignis, Oberon, and Eldrin.]\n[s: They] [v: stand] [pt: next to him.]\n[s: Valerius] [v: has] [o: peace and courage] [pt: in his heart.]\n[s: \"The legend] [v: did not speak] [pt: of our squad,\"] [s: Valerius] [v: says] [pt: in a strong voice.]\n[s: \"It] [v: spoke] [pt: of bad people in our old Citadel.]\n[c: But] [adv: now] [s: we] [v: are] [o: one team!\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin looks at Valerius and smiles. He takes his heavy hammer and his bronze shield. \"Good, knight!\" Thorin says in a big voice. \"We made a real team in the fire of battle! Your dark king is nothing. We are ten hearts, old bad man!\"",
                "ru": "Торин смотрит на Валериуса и улыбается. Он берет свой тяжелый молот и бронзовый щит. \"Отлично сказано, рыцарь!\" — громогласно говорит Торин. \"Мы сковали настоящую команду в огне битвы! Твой темный владыка ничто. Мы — десять сердец, старый злодей!\"",
                "chunkedEn": "[s: Thorin] [v: looks] [pt: at Valerius] [c: and] [v: smiles.]\n[s: He] [v: takes] [o: his heavy hammer and his bronze shield.]\n[o: \"Good, knight!\"] [s: Thorin] [v: says] [pt: in a big voice.]\n[s: \"We] [v: made] [o: a real team] [pt: in the fire of battle!]\n[s: Your dark king] [v: is] [o: nothing.]\n[s: We] [v: are] [o: ten hearts, old bad man!\"]"
            },
            {
                "speaker": "valerius",
                "en": "One by one, the ten heroes stand. Each hero takes a sword, a spear, a staff, or a hammer. Ten bright lights come. They are silver, gold, red, green, blue, and purple. The lights make the Ash Rift bright. The bright light is stronger than the purple dark. Malakor goes back to the iron door. He does not smile now. He is afraid. The battle for the three realms begins.",
                "ru": "Один за другим встают десять героев. Каждый герой берет меч, копье, посох или молот. Десять ярких огней загораются в руках. Они серебряные, золотые, красные, зеленые, синие и фиолетовые. Огни озаряют Пепельный Разлом. Яркий свет сильнее фиолетовой тьмы. Малакор пятится к железной двери. Он больше не улыбается. Он напуган. Битва за три королевства начинается.",
                "chunkedEn": "[adv: One by one,] [s: the ten heroes] [v: stand.]\n[s: Each hero] [v: takes] [o: a sword, a spear, a staff, or a hammer.]\n[s: Ten bright lights] [v: come.]\n[s: They] [v: are] [o: silver, gold, red, green, blue, and purple.]\n[s: The lights] [v: make] [o: the Ash Rift bright.]\n[s: The bright light] [v: is stronger] [pt: than the purple dark.]\n[s: Malakor] [v: goes back] [pt: to the iron door.]\n[s: He] [v: does not smile] [adv: now.]\n[s: He] [v: is afraid.]\n[s: The battle for the three realms] [v: begins.]"
            }
        ],
        "quiz": {
            "question": "Who was the real traitor mentioned in the ancient prophecy?",
            "options": [
                "Grand Master Malakor from the Silver Citadel who made a deal with darkness",
                "Selena the shadow scout",
                "Thorin the mountain smith"
            ],
            "correctIndex": 0,
            "rewardXp": 479
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Threshold of the Rift",
        "locationRu": "Порог Пепельного Разлома",
        "campaignId": "fantasy"
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
                "speaker": "frostina",
                "en": "Malakor is angry. He takes his dark staff in his hand. He calls a bad spell with a big voice. The black ground moves. Dark fog comes from the ground. Ten Guards run to the front! They have red armor. Their eyes are red like fire. They have long dark daggers. \"Fight!\" Malakor calls. \"Protect the key!\"",
                "ru": "Малакор в ярости. Он берет свой темный посох в руку. Он громким голосом выкрикивает зловещее заклинание. Черная земля содрогается. Темный туман поднимается из земли. Десять Стражей бегут вперед! На них красные доспехи. Их глаза горят красным, как огонь. У них длинные темные кинжалы. \"В бой!\" — кричит Малакор. \"Защитите ключ!\"",
                "chunkedEn": "[s: Malakor] [v: is angry.]\n[s: He] [v: takes] [o: his dark staff] [pt: in his hand.]\n[s: He] [v: calls] [o: a bad spell] [pt: with a big voice.]\n[s: The black ground] [v: moves.]\n[s: Dark fog] [v: comes] [pt: from the ground.]\n[s: Ten Guards] [v: run] [pt: to the front!]\n[s: They] [v: have] [o: red armor.]\n[s: Their eyes] [v: are red] [pt: like fire.]\n[s: They] [v: have] [o: long dark daggers.]\n[o: \"Fight!\"] [s: Malakor] [v: calls.]\n[v: \"Protect] [o: the key!\"]"
            },
            {
                "speaker": "frostina",
                "en": "A big fight begins at the Abyss. Freya takes her thunder spear and runs to the front. Blue sparks fly from the spear. Ignis makes fire. He sends bright balls of fire to the Guards. The fire moves the Guards back. Frostina opens her shield of frost. She makes a big wall of blue ice. The wall protects her friends. Freya looks at Frostina and smiles. \"Good!\" Freya says.",
                "ru": "Великая битва начинается у Бездны. Фрейя берет свое громовое копье и бежит вперед. Синие искры летят от копья. Игнис призывает огонь. Он посылает яркие огненные шары в Стражей. Огонь отбрасывает Стражей назад. Фростина поднимает свой морозный щит. Она возводит огромную стену из синего льда. Стена защищает ее друзей. Фрейя смотрит на Фростину и улыбается. \"Отлично!\" — говорит Фрейя.",
                "chunkedEn": "[s: A big fight] [v: begins] [pt: at the Abyss.]\n[s: Freya] [v: takes] [o: her thunder spear] [c: and] [v: runs] [pt: to the front.]\n[s: Blue sparks] [v: fly] [pt: from the spear.]\n[s: Ignis] [v: makes] [o: fire.]\n[s: He] [v: sends] [o: bright balls of fire] [pt: to the Guards.]\n[s: The fire] [v: moves] [o: the Guards] [adv: back.]\n[s: Frostina] [v: opens] [o: her shield of frost.]\n[s: She] [v: makes] [o: a big wall of blue ice.]\n[s: The wall] [v: protects] [o: her friends.]\n[s: Freya] [v: looks] [pt: at Frostina] [c: and] [v: smiles.]\n[o: \"Good!\"] [s: Freya] [v: says.]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin fights with great power. He has a heavy bronze hammer. His hammer breaks the shields of the Guards. Thorin looks at his friends. He is strong and brave. But two dark assassins come from behind the wall of ice! One assassin takes a dark dagger. The dagger is bad. It makes people sick. The assassin runs to Thorin's back!",
                "ru": "Торин сражается с великой силой. У него тяжелый бронзовый молот. Его молот крушит щиты Стражей. Торин смотрит на своих друзей. Он силен и отважен. Но двое темных убийц выходят из-за ледяной стены! Один убийца берет темный кинжал. Кинжал отравлен. От него люди заболевают. Убийца бежит Торину за спину!",
                "chunkedEn": "[s: Thorin] [v: fights] [pt: with great power.]\n[s: He] [v: has] [o: a heavy bronze hammer.]\n[s: His hammer] [v: breaks] [o: the shields of the Guards.]\n[s: Thorin] [v: looks] [pt: at his friends.]\n[s: He] [v: is strong and brave.]\n[c: But] [s: two dark assassins] [v: come] [pt: from behind the wall of ice!]\n[s: One assassin] [v: takes] [o: a dark dagger.]\n[s: The dagger] [v: is bad.]\n[s: It] [v: makes] [o: people sick.]\n[s: The assassin] [v: runs] [pt: to Thorin's back!]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius sees it. Thorin cannot see the assassin. Valerius runs across the stone floor. He does not think. He jumps between Thorin and the assassin! The dagger goes through his silver armor into his shoulder. Valerius is on his knees on the cold stone. Thorin looks back and sees his friend. Blood is on the silver armor. Thorin is so angry!",
                "ru": "Валериус видит это. Торин не видит убийцу вовремя. Валериус бежит по каменному полу. Он не думает о себе. Он бросается между Торином и убийцей! Кинжал пробивает его серебряные доспехи и ранит в плечо. Валериус падает на колени на холодный камень. Торин оборачивается и видит своего друга. Кровь на серебряных доспехах. Торин в ярости!",
                "chunkedEn": "[s: Valerius] [v: sees] [o: it.]\n[s: Thorin] [v: cannot see] [o: the assassin.]\n[s: Valerius] [v: runs] [pt: across the stone floor.]\n[s: He] [v: does not think.]\n[s: He] [v: jumps] [pt: between Thorin and the assassin!]\n[s: The dagger] [v: goes] [pt: through his silver armor] [pt: into his shoulder.]\n[s: Valerius] [v: is] [pt: on his knees] [pt: on the cold stone.]\n[s: Thorin] [v: looks back] [c: and] [v: sees] [o: his friend.]\n[s: Blood] [v: is] [pt: on the silver armor.]\n[s: Thorin] [v: is so angry!]"
            },
            {
                "speaker": "thorin",
                "en": "\"Valerius!\" Thorin calls with a voice like a mountain storm. He takes his hammer with all his power. The hammer moves the assassin into the stone wall. After that, Thorin breaks Malakor's dark staff into pieces!",
                "ru": "\"Валериус!\" — кричит Торин голосом, подобным горной буре. Он сжимает свой молот изо всех сил. Молот впечатывает убийцу в каменную стену. После этого Торин разбивает темный посох Малакора на куски!",
                "chunkedEn": "[o: \"Valerius!\"] [s: Thorin] [v: calls] [pt: with a voice like a mountain storm.]\n[s: He] [v: takes] [o: his hammer] [pt: with all his power.]\n[s: The hammer] [v: moves] [o: the assassin] [pt: into the stone wall.]\n[pt: After that,] [s: Thorin] [v: breaks] [o: Malakor's dark staff] [pt: into pieces!]"
            },
            {
                "speaker": "selene",
                "en": "Selena comes from the shadow. She is quick like a black storm. She cuts with her two daggers. The Guards lose their swords. Selena takes the key from Malakor's hand. The key flies in the air. Zephyr takes it. Zephyr looks at the key and smiles. Malakor loses the fight. He is weak. He is on the floor by the iron door.",
                "ru": "Селена появляется из тени. Она стремительна, как черная буря. Она наносит удары двумя кинжалами. Стражи роняют свои мечи. Селена выбивает ключ из руки Малакора. Ключ взлетает в воздух. Зефир ловит его. Зефир смотрит на ключ и улыбается. Малакор проигрывает бой. Он слаб. Он лежит на полу возле железной двери.",
                "chunkedEn": "[s: Selena] [v: comes] [pt: from the shadow.]\n[s: She] [v: is quick] [pt: like a black storm.]\n[s: She] [v: cuts] [pt: with her two daggers.]\n[s: The Guards] [v: lose] [o: their swords.]\n[s: Selena] [v: takes] [o: the key] [pt: from Malakor's hand.]\n[s: The key] [v: flies] [pt: in the air.]\n[s: Zephyr] [v: takes] [o: it.]\n[s: Zephyr] [v: looks] [pt: at the key] [c: and] [v: smiles.]\n[s: Malakor] [v: loses] [o: the fight.]\n[s: He] [v: is weak.]\n[s: He] [v: is] [pt: on the floor] [pt: by the iron door.]"
            },
            {
                "speaker": "frostina",
                "en": "Astraea and Frostina run to Valerius. Astraea's glowing hands are on his shoulder. The warm light heals him. It takes the bad pain away. Frostina gives him ice crystals. He is not hot now. Ignis and Freya come. They look at Valerius and stand by him. Valerius opens his eyes. He is weak, but he smiles at his friends.",
                "ru": "Астрея и Фростина спешат к Валериусу. Светящиеся руки Астреи ложатся на его плечо. Теплый свет исцеляет его. Он снимает жгучую боль. Фростина прикладывает ледяные кристаллы. Жар отступает. Подходят Игнис и Фрейя. Они смотрят на Валериуса и стоят рядом с ним. Валериус открывает глаза. Он слаб, но улыбается друзьям.",
                "chunkedEn": "[s: Astraea and Frostina] [v: run] [pt: to Valerius.]\n[s: Astraea's glowing hands] [v: are] [pt: on his shoulder.]\n[s: The warm light] [v: heals] [o: him.]\n[s: It] [v: takes] [o: the bad pain] [adv: away.]\n[s: Frostina] [v: gives] [o: him ice crystals.]\n[s: He] [v: is not hot] [adv: now.]\n[s: Ignis and Freya] [v: come.]\n[s: They] [v: look] [pt: at Valerius] [c: and] [v: stand] [pt: by him.]\n[s: Valerius] [v: opens] [o: his eyes.]\n[s: He] [v: is weak,] [c: but] [s: he] [v: smiles] [pt: at his friends.]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin is on one knee by the silver knight. He takes Valerius's hand. His eyes are bright. \"For ten years, our families are not friends,\" Thorin says with a quiet voice. \"We said bad words about old things and family blood. But you gave your blood to protect my life. Family blood is not important now. You are my true brother forever.\" Valerius takes Thorin's hand. \"We are one people now, Thorin. I am with you until the end.\" The friends stand in a group. Zephyr shows the key to all his friends.",
                "ru": "Торин опускается на одно колено рядом с серебряным рыцарем. Он сжимает руку Валериуса. Его глаза блестят. \"Десять лет наши семьи враждовали,\" — говорит Торин тихим голосом. \"Мы говорили дурные слова о старых обидах и крови кланов. Но ты пролил свою кровь, чтобы спасти мою жизнь. Кровь кланов больше не имеет значения. Ты мой истинный брат навсегда.\" Валериус пожимает руку Торина. \"Мы теперь один народ, Торин. Я с тобой до самого конца.\" Друзья встают плечом к плечу. Зефир показывает ключ всем своим друзьям.",
                "chunkedEn": "[s: Thorin] [v: is] [pt: on one knee] [pt: by the silver knight.]\n[s: He] [v: takes] [o: Valerius's hand.]\n[s: His eyes] [v: are bright.]\n[pt: \"For ten years,] [s: our families] [v: are not] [o: friends,\"] [s: Thorin] [v: says] [pt: with a quiet voice.]\n[s: \"We] [v: said] [o: bad words] [pt: about old things and family blood.]\n[c: But] [s: you] [v: gave] [o: your blood] [pt: to protect my life.]\n[s: Family blood] [v: is not] [o: important] [adv: now.]\n[s: You] [v: are] [o: my true brother] [adv: forever.\"]\n[s: Valerius] [v: takes] [o: Thorin's hand.]\n[s: \"We] [v: are] [o: one people] [adv: now, Thorin.]\n[s: I] [v: am] [pt: with you] [pt: until the end.\"]\n[s: The friends] [v: stand] [pt: in a group.]\n[s: Zephyr] [v: shows] [o: the key] [pt: to all his friends.]"
            }
        ],
        "quiz": {
            "question": "What did Valerius do during the fight with Malakor?",
            "options": [
                "He jumped between Thorin and an assassin with a dark dagger",
                "He ran away from the fight",
                "He opened the iron door alone"
            ],
            "correctIndex": 0,
            "rewardXp": 497
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Gates of the Abyss",
        "locationRu": "Врата Бездны",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "The sky above the Ash Valley becomes black. The moon goes in front of the sun. A ring of red fire glows in the dark sky. It is like an angry red eye. The ground under the heroes moves. A big, dangerous voice comes from the Rift. The mountains move. The final hour of the old realm is here.",
                "ru": "Небо над Пепельной Долиной становится черным. Луна заслоняет солнце. Кольцо красного огня пылает в темном небе. Оно словно яростный красный глаз. Земля под ногами героев содрогается. Могучий, опасный голос доносится из Разлома. Горы дрожат. Последний час древнего королевства настал.",
                "chunkedEn": "[s: The sky above the Ash Valley] [v: becomes] [o: black.]\n[s: The moon] [v: goes] [pt: in front of the sun.]\n[s: A ring of red fire] [v: glows] [pt: in the dark sky.]\n[s: It] [v: is] [pt: like an angry red eye.]\n[s: The ground under the heroes] [v: moves.]\n[s: A big, dangerous voice] [v: comes] [pt: from the Rift.]\n[s: The mountains] [v: move.]\n[s: The final hour of the old realm] [v: is] [pt: here.]"
            },
            {
                "speaker": "valerius",
                "en": "The big iron doors of the Rift begin to break. Fire and sparks come from the metal doors. Sparks come from every door. Thousands of shadow animals and flying animals with wings come from the dark. The air is full of their voices. The heroes look at the doors. They wait.",
                "ru": "Огромные железные двери Разлома начинают ломаться. Огонь и искры вырываются из металлических дверей. Искры летят от каждой двери. Тысячи теневых тварей и крылатых летучих созданий выходят из тьмы. Воздух наполнен их криками. Герои смотрят на двери. Они ждут.",
                "chunkedEn": "[s: The big iron doors of the Rift] [v: begin to break.]\n[s: Fire and sparks] [v: come] [pt: from the metal doors.]\n[s: Sparks] [v: come] [pt: from every door.]\n[s: Thousands of shadow animals and flying animals with wings] [v: come] [pt: from the dark.]\n[s: The air] [v: is full] [pt: of their voices.]\n[s: The heroes] [v: look] [pt: at the doors.]\n[s: They] [v: wait.]"
            },
            {
                "speaker": "valerius",
                "en": "Archmage Eldrin has his glowing staff above his head. \"The lock is breaking from inside!\" Eldrin says. \"The dark key stopped Malakor, but the Ash Titan is waking up under the ground! We need to stand at these doors until the stars are ready!\"",
                "ru": "Архимаг Эльдрин держит сияющий посох над головой. \"Замок разрушается изнутри!\" — говорит Эльдрин. \"Темный ключ остановил Малакора, но Пепельный Титан просыпается под землей! Мы должны держать оборону у этих дверей, пока звезды не будут готовы!\"",
                "chunkedEn": "[s: Archmage Eldrin] [v: has] [o: his glowing staff] [pt: above his head.]\n[s: \"The lock] [v: is breaking] [pt: from inside!\"] [s: Eldrin] [v: says.]\n[s: \"The dark key] [v: stopped] [o: Malakor,]\n[c: but] [s: the Ash Titan] [v: is waking up] [pt: under the ground!]\n[s: We] [v: need to stand] [pt: at these doors] [c: until] [s: the stars] [v: are ready!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius goes to the front of the squad. His silver armor shines in the dark. His shoulder is healed and strong. He takes his heavy silver shield and his bright sword. He looks at the heroes. \"Heroes, stand next to me!\" Valerius says in a strong voice. \"Stand shoulder to shoulder! Nothing can cross these doors!\" Valerius looks at Thorin and Freya.",
                "ru": "Валериус выходит вперед отряда. Его серебряные доспехи сияют во тьме. Его плечо исцелено и полно сил. Он берет тяжелый серебряный щит и сияющий меч. Он смотрит на героев. \"Герои, встаньте рядом со мной!\" — твердым голосом командует Валериус. \"Стойте плечом к плечу! Никто не пройдет через эти двери!\" Валериус смотрит на Торина и Фрейю.",
                "chunkedEn": "[s: Valerius] [v: goes] [pt: to the front of the squad.]\n[s: His silver armor] [v: shines] [pt: in the dark.]\n[s: His shoulder] [v: is healed and strong.]\n[s: He] [v: takes] [o: his heavy silver shield and his bright sword.]\n[s: He] [v: looks] [pt: at the heroes.]\n[o: \"Heroes,] [v: stand] [pt: next to me!\"] [s: Valerius] [v: says] [pt: in a strong voice.]\n[v: \"Stand] [pt: shoulder to shoulder!]\n[s: Nothing] [v: can cross] [o: these doors!\"]\n[s: Valerius] [v: looks] [pt: at Thorin and Freya.]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin walks to Valerius and stands next to him. He has a big bronze hammer. He looks at Valerius and smiles. \"I am next to you, brother!\" Thorin says with a big smile. \"My shield is bronze, your shield is silver, and we are a strong mountain wall!\"",
                "ru": "Торин подходит к Валериусу и встает рядом с ним. У него большой бронзовый молот. Он смотрит на Валериуса и улыбается. \"Я рядом с тобой, брат!\" — говорит Торин с широкой улыбкой. \"Мой щит бронзовый, твой щит серебряный, и вместе мы — несокрушимая горная стена!\"",
                "chunkedEn": "[s: Thorin] [v: walks] [pt: to Valerius] [c: and] [v: stands] [pt: next to him.]\n[s: He] [v: has] [o: a big bronze hammer.]\n[s: He] [v: looks] [pt: at Valerius] [c: and] [v: smiles.]\n[s: \"I] [v: am] [pt: next to you, brother!\"] [s: Thorin] [v: says] [pt: with a big smile.]\n[s: \"My shield] [v: is] [o: bronze,] [s: your shield] [v: is] [o: silver,]\n[c: and] [s: we] [v: are] [o: a strong mountain wall!\"]"
            },
            {
                "speaker": "freya",
                "en": "Freya jumps next to Valerius. She is on his other side. Her spear is heavy. It has thunder and bright blue light. She plants her feet on the black rock. \"My spear can cut any animal that wants to cross these doors!\" Freya says. Her eyes are bright. She is a warrior. Freya looks at the sky and smiles.",
                "ru": "Фрейя встает рядом с Валериусом. Она с другой стороны от него. Ее копье тяжело. В нем гремит гром и искрится яркий синий свет. Она твердо упирается ногами в черный камень. \"Мое копье сразит любую тварь, которая посмеет пройти через эти двери!\" — говорит Фрейя. Ее глаза горят. Она воин. Фрейя смотрит на небо и улыбается.",
                "chunkedEn": "[s: Freya] [v: jumps] [pt: next to Valerius.]\n[s: She] [v: is] [pt: on his other side.]\n[s: Her spear] [v: is heavy.]\n[s: It] [v: has] [o: thunder and bright blue light.]\n[s: She] [v: plants] [o: her feet] [pt: on the black rock.]\n[s: \"My spear] [v: can cut] [o: any animal] [pt: that wants to cross these doors!\"] [s: Freya] [v: says.]\n[s: Her eyes] [v: are bright.]\n[s: She] [v: is] [o: a warrior.]\n[s: Freya] [v: looks] [pt: at the sky] [c: and] [v: smiles.]"
            },
            {
                "speaker": "selene",
                "en": "Selena and Zephyr stand on the rocks above the heroes. Selena has two black daggers. She cleans them and smiles. Her smile is quiet and dangerous. \"They can come,\" Selena says in a quiet voice. \"Today, we write our life with steel and shadow.\" The wind is cold. Selena looks at Zephyr. Zephyr looks at Selena and smiles. Zephyr has a green bow. He takes three arrows of wind. His eyes are like eagle eyes. He looks at the iron doors. The doors are breaking.",
                "ru": "Селена и Зефир стоят на скалах над героями. У Селены два черных кинжала. Она чистит их и улыбается. Ее улыбка тихая и опасная. \"Пусть идут,\" — негромко говорит Селена. \"Сегодня мы пишем нашу жизнь сталью и тенью.\" Ветер холоден. Селена смотрит на Зефира. Зефир смотрит на Селену и улыбается. У Зефира зеленый лук. Он берет три стрелы ветра. Его глаза подобны глазам орла. Он смотрит на железные двери. Двери ломаются.",
                "chunkedEn": "[s: Selena and Zephyr] [v: stand] [pt: on the rocks] [pt: above the heroes.]\n[s: Selena] [v: has] [o: two black daggers.]\n[s: She] [v: cleans] [o: them] [c: and] [v: smiles.]\n[s: Her smile] [v: is quiet and dangerous.]\n[s: \"They] [v: can come,\"] [s: Selena] [v: says] [pt: in a quiet voice.]\n[adv: \"Today,] [s: we] [v: write] [o: our life] [pt: with steel and shadow.\"]\n[s: The wind] [v: is cold.]\n[s: Selena] [v: looks] [pt: at Zephyr.]\n[s: Zephyr] [v: looks] [pt: at Selena] [c: and] [v: smiles.]\n[s: Zephyr] [v: has] [o: a green bow.]\n[s: He] [v: takes] [o: three arrows of wind.]\n[s: His eyes] [v: are] [pt: like eagle eyes.]\n[s: He] [v: looks] [pt: at the iron doors.]\n[s: The doors] [v: are breaking.]"
            },
            {
                "speaker": "valerius",
                "en": "Ignis, Frostina, Astraea and Oberon are behind the heroes. They all make magic. Ignis makes rings of red fire. Frostina makes rings of crystal frost. Astraea makes rings of golden light from the stars. Oberon makes rings of green roots. The rings go to the sky. Ignis and Frostina look at the doors. Astraea looks at the stars. Oberon looks at the ground. The heroes are not afraid. They stand and wait. Ten heroes stand at the dark doors. They are ready to protect the world.",
                "ru": "Игнис, Фростина, Астрея и Оберон стоят позади героев. Все они творят магию. Игнис создает кольца красного огня. Фростина создает кольца морозных кристаллов. Астрея создает кольца золотого света звезд. Оберон создает кольца зеленых корней. Кольца устремляются в небо. Игнис и Фростина смотрят на двери. Астрея смотрит на звезды. Оберон смотрит на землю. Герои не боятся. Они стоят и ждут. Десять героев стоят у темных дверей. Они готовы защитить мир.",
                "chunkedEn": "[s: Ignis, Frostina, Astraea and Oberon] [v: are] [pt: behind the heroes.]\n[s: They all] [v: make] [o: magic.]\n[s: Ignis] [v: makes] [o: rings of red fire.]\n[s: Frostina] [v: makes] [o: rings of crystal frost.]\n[s: Astraea] [v: makes] [o: rings of golden light] [pt: from the stars.]\n[s: Oberon] [v: makes] [o: rings of green roots.]\n[s: The rings] [v: go] [pt: to the sky.]\n[s: Ignis and Frostina] [v: look] [pt: at the doors.]\n[s: Astraea] [v: looks] [pt: at the stars.]\n[s: Oberon] [v: looks] [pt: at the ground.]\n[s: The heroes] [v: are not afraid.]\n[s: They] [v: stand and wait.]\n[s: Ten heroes] [v: stand] [pt: at the dark doors.]\n[s: They] [v: are ready] [pt: to protect the world.]"
            }
        ],
        "quiz": {
            "question": "What appeared in the sky above the Ash Valley during the eclipse?",
            "options": [
                "A ring of red fire glowing in the dark sky like an angry red eye",
                "A bright rainbow of light",
                "A white cloud of snow"
            ],
            "correctIndex": 0,
            "rewardXp": 494
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Shattered Rift Gate",
        "locationRu": "Разрушенные Врата Разлома",
        "campaignId": "fantasy"
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
                "speaker": "ignis",
                "en": "A big crowd of five thousand Ash Ghouls comes over the black hill. They climb the black rocks. Their eyes are red. They are angry and hungry. Valerius, Thorin and Freya stand in front. Valerius takes his sword. Thorin takes his big shield. Freya takes her spear. The Ash Ghouls come and come.",
                "ru": "Огромная толпа из пяти тысяч Пепельных Гулей переваливает через черный холм. Они карабкаются по черным скалам. Их глаза горят красным. Они свирепы и голодны. Валериус, Торин и Фрейя стоят впереди. Валериус обнажает меч. Торин берет свой большой щит. Фрейя поднимает копье. Пепельные Гули наступают и наступают.",
                "chunkedEn": "[s: A big crowd of five thousand Ash Ghouls] [v: comes] [pt: over the black hill.]\n[s: They] [v: climb] [o: the black rocks.]\n[s: Their eyes] [v: are red.]\n[s: They] [v: are angry and hungry.]\n[s: Valerius, Thorin and Freya] [v: stand] [pt: in front.]\n[s: Valerius] [v: takes] [o: his sword.]\n[s: Thorin] [v: takes] [o: his big shield.]\n[s: Freya] [v: takes] [o: her spear.]\n[s: The Ash Ghouls] [v: come and come.]"
            },
            {
                "speaker": "frostina",
                "en": "Freya looks at the crowd. \"There are five thousand of them!\" she says. \"It is a big crowd! We can't fight them with shields and spears!\" Freya calls thunder from the sky. The thunder comes down on two Ash Ghouls. They die. But the crowd is still big. Thorin looks at Valerius. Valerius looks at Freya. They are afraid, but they are brave. They stand and wait.",
                "ru": "Фрейя смотрит на толпу. \"Их тут пять тысяч!\" — говорит она. \"Это слишком большая орда! Мы не сможем одолеть их одними щитами и копьями!\" Фрейя призывает гром с небес. Молния поражает двоих Пепельных Гулей. Они погибают. Но толпа по-прежнему огромна. Торин смотрит на Валериуса. Валериус смотрит на Фрейю. Им страшно, но они храбры. Они стоят и ждут.",
                "chunkedEn": "[s: Freya] [v: looks] [pt: at the crowd.]\n[o: \"There] [v: are] [s: five thousand of them!\"] [s: she] [v: says.]\n[s: \"It] [v: is] [o: a big crowd!]\n[s: We] [v: can't fight] [o: them] [pt: with shields and spears!\"]\n[s: Freya] [v: calls] [o: thunder] [pt: from the sky.]\n[s: The thunder] [v: comes down] [pt: on two Ash Ghouls.]\n[s: They] [v: die.]\n[c: But] [s: the crowd] [v: is] [adv: still] [o: big.]\n[s: Thorin] [v: looks] [pt: at Valerius.]\n[s: Valerius] [v: looks] [pt: at Freya.]\n[s: They] [v: are afraid,] [c: but] [s: they] [v: are brave.]\n[s: They] [v: stand and wait.]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis, Frostina and Oberon walk to the center. They are the three masters of magic. They stand side by side. \"Stand back, brave warriors!\" Ignis calls. He has a big smile. \"Look at the power of the three realms!\" Valerius, Thorin and Freya walk back. Thorin has a bottle of water. He gives the water to Frostina. \"Thank you,\" Frostina says. She drinks the water and gives the bottle to Thorin.",
                "ru": "Игнис, Фростина и Оберон выходят в центр. Они — три мастера магии. Они встают бок о бок. \"Отойдите назад, храбрые воины!\" — восклицает Игнис. На его лице широкая улыбка. \"Взгляните на мощь трех королевств!\" Валериус, Торин и Фрейя отступают назад. У Торина с собой фляга с водой. Он протягивает воду Фростине. \"Спасибо,\" — говорит Фростина. Она пьет воду и возвращает флягу Торину.",
                "chunkedEn": "[s: Ignis, Frostina and Oberon] [v: walk] [pt: to the center.]\n[s: They] [v: are] [o: the three masters of magic.]\n[s: They] [v: stand] [pt: side by side.]\n[v: \"Stand] [adv: back,] [o: brave warriors!\"] [s: Ignis] [v: calls.]\n[s: He] [v: has] [o: a big smile.]\n[v: \"Look] [pt: at the power of the three realms!\"]\n[s: Valerius, Thorin and Freya] [v: walk] [adv: back.]\n[s: Thorin] [v: has] [o: a bottle of water.]\n[s: He] [v: gives] [o: the water] [pt: to Frostina.]\n[o: \"Thank you,\"] [s: Frostina] [v: says.]\n[s: She] [v: drinks] [o: the water] [c: and] [v: gives] [o: the bottle] [pt: to Thorin.]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis's hands are in the black soil. Red and orange fire comes from the earth. It goes around his arms. \"Fire, fight the shadow!\" Ignis says. His hair is red, and flames are in his hair. The fire is hot and bright.",
                "ru": "Руки Игниса погружаются в черную землю. Красный и оранжевый огонь вырывается из земли. Пламя обвивает его руки. \"Огонь, сразись с тенью!\" — говорит Игнис. Его волосы ярко-красные, и в них танцуют языки пламени. Огонь пылает жарко и ослепительно.",
                "chunkedEn": "[s: Ignis's hands] [v: are] [pt: in the black soil.]\n[s: Red and orange fire] [v: comes] [pt: from the earth.]\n[s: It] [v: goes] [pt: around his arms.]\n[o: \"Fire,] [v: fight] [o: the shadow!\"] [s: Ignis] [v: says.]\n[s: His hair] [v: is red,] [c: and] [s: flames] [v: are] [pt: in his hair.]\n[s: The fire] [v: is hot and bright.]"
            },
            {
                "speaker": "frostina",
                "en": "Frostina looks at the dark sky. Her hands go to the sky. A cold blizzard comes from the mountains. Blue ice and white snow go around her. The wind is cold and strong. \"Freeze the shadow! Make it quiet!\" Frostina says. Her voice is strong.",
                "ru": "Фростина смотрит на темное небо. Ее руки устремляются ввысь. Ледяная метель спускается с гор. Синий лед и белый снег закручиваются вокруг нее. Ветер холоден и могуч. \"Заморозь тень! Заставь ее умолкнуть!\" — произносит Фростина. Ее голос звучит властно.",
                "chunkedEn": "[s: Frostina] [v: looks] [pt: at the dark sky.]\n[s: Her hands] [v: go] [pt: to the sky.]\n[s: A cold blizzard] [v: comes] [pt: from the mountains.]\n[s: Blue ice and white snow] [v: go] [pt: around her.]\n[s: The wind] [v: is cold and strong.]\n[v: \"Freeze] [o: the shadow!] [v: Make] [o: it quiet!\"] [s: Frostina] [v: says.]\n[s: Her voice] [v: is strong.]"
            },
            {
                "speaker": "oberon",
                "en": "Oberon has his old wood staff. His staff is in the stone. Green light comes from the ground. Big roots come from the rock. The roots have green leaves and emerald flowers. Oberon speaks to the earth. \"Wake up, old life of the Emerald Forest!\" he calls.",
                "ru": "У Оберона в руках его древний деревянный посох. Его посох упирается в камень. Зеленый свет струится из земли. Огромные корни пробиваются сквозь скалу. На корнях распускаются зеленые листья и изумрудные цветы. Оберон взывает к земле. \"Пробудись, древняя жизнь Изумрудного Леса!\" — призывает он.",
                "chunkedEn": "[s: Oberon] [v: has] [o: his old wood staff.]\n[s: His staff] [v: is] [pt: in the stone.]\n[s: Green light] [v: comes] [pt: from the ground.]\n[s: Big roots] [v: come] [pt: from the rock.]\n[s: The roots] [v: have] [o: green leaves and emerald flowers.]\n[s: Oberon] [v: speaks] [pt: to the earth.]\n[v: \"Wake up,] [o: old life of the Emerald Forest!\"] [s: he] [v: calls.]"
            },
            {
                "speaker": "ignis",
                "en": "The three masters look at each other. They smile and say, \"Now!\" They join hands. They give all their power to one point. Fire, ice and nature do not fight. They are friends. They make one big storm! The storm is orange, blue and green. Fire, snow and roots go around the hill. The storm goes over the Ash Ghouls. The Ash Ghouls cannot run. They die in the bright light.",
                "ru": "Три мастера смотрят друг на друга. Они улыбаются и говорят: \"Сейчас!\" Они соединяют руки. Они направляют всю свою силу в одну точку. Огонь, лед и природа не враждуют. Они союзники. Они порождают одну великую бурю! Буря пылает оранжевым, синим и зеленым. Огонь, снег и корни охватывают холм. Буря обрушивается на Пепельных Гулей. Пепельные Гули не могут убежать. Они гибнут в ярком сиянии.",
                "chunkedEn": "[s: The three masters] [v: look] [pt: at each other.]\n[s: They] [v: smile] [c: and] [v: say,] [o: \"Now!\"]\n[s: They] [v: join] [o: hands.]\n[s: They] [v: give] [o: all their power] [pt: to one point.]\n[s: Fire, ice and nature] [v: do not fight.]\n[s: They] [v: are] [o: friends.]\n[s: They] [v: make] [o: one big storm!]\n[s: The storm] [v: is] [o: orange, blue and green.]\n[s: Fire, snow and roots] [v: go] [pt: around the hill.]\n[s: The storm] [v: goes] [pt: over the Ash Ghouls.]\n[s: The Ash Ghouls] [v: cannot run.]\n[s: They] [v: die] [pt: in the bright light.]"
            },
            {
                "speaker": "oberon",
                "en": "Where the storm goes, the ground is clean. The soil is not black. Green grass grows. Flowers come from the earth. Valerius, Thorin and Freya smile. They are happy. \"We win!\" Freya says. Thorin and Valerius call, \"Victory!\" Ignis, Frostina and Oberon look at the clean ground. They rest. Now the way is ready for the final battle.",
                "ru": "Там, где проходит буря, земля очищается. Почва больше не черная. Зеленая трава растет. Цветы поднимаются из земли. Валериус, Торин и Фрейя улыбаются. Они счастливы. \"Мы победили!\" — говорит Фрейя. Торин и Валериус кричат: \"Победа!\" Игнис, Фростина и Оберон смотрят на чистую землю. Они отдыхают. Теперь путь готов к решающей битве.",
                "chunkedEn": "[pt: Where the storm goes,] [s: the ground] [v: is clean.]\n[s: The soil] [v: is not] [o: black.]\n[s: Green grass] [v: grows.]\n[s: Flowers] [v: come] [pt: from the earth.]\n[s: Valerius, Thorin and Freya] [v: smile.]\n[s: They] [v: are happy.]\n[o: \"We] [v: win!\"] [s: Freya] [v: says.]\n[s: Thorin and Valerius] [v: call,] [o: \"Victory!\"]\n[s: Ignis, Frostina and Oberon] [v: look] [pt: at the clean ground.]\n[s: They] [v: rest.]\n[adv: Now] [s: the way] [v: is ready] [pt: for the final battle.]"
            }
        ],
        "quiz": {
            "question": "How did Ignis, Frostina, and Oberon defeat the army of Ash Ghouls?",
            "options": [
                "They joined hands and fused fire, ice, and nature into one big storm",
                "They used bows and arrows from behind the wall",
                "They ran back to the bridge"
            ],
            "correctIndex": 0,
            "rewardXp": 454
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Tri-Elemental Battlefield",
        "locationRu": "Поле Трех Стихий",
        "campaignId": "fantasy"
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
                "speaker": "freya",
                "en": "The Sun is black. In the center of the Sun, there is a red fire. The dark sky opens, and big thunder comes from it. The Ash Dragon King comes down from the black clouds! His armor is black like stone. His wings are large like a mountain. Black thunder comes from his mouth. The King flies down to the heroes. He wants to fight the wizards below. Ignis, Frostina, and Oberon look at the sky. They are afraid. \"Look at the sky, companions!\" Freya calls. She has her heavy thunder spear. \"The King of the dark sky is here! He wants to fight our wizards!\"",
                "ru": "Солнце черное. В центре Солнца горит красный огонь. Темное небо разверзается, и оттуда доносится страшный гром. Король Пепельных Драконов спускается из черных туч! Его броня черная, как камень. Его крылья огромны, словно гора. Черная молния вырывается из его пасти. Король летит вниз к героям. Он хочет напасть на магов внизу. Игнис, Фростина и Оберон смотрят в небо. Они испуганы. \"Смотрите в небо, соратники!\" — кричит Фрейя. У нее в руке тяжелое громовое копье. \"Король темного неба здесь! Он хочет напасть на наших магов!\"",
                "chunkedEn": "[s: The Sun] [v: is] [o: black.]\n[pt: In the center of the Sun,] [s: there] [v: is] [o: a red fire.]\n[s: The dark sky] [v: opens,] [c: and] [s: big thunder] [v: comes] [pt: from it.]\n[s: The Ash Dragon King] [v: comes down] [pt: from the black clouds!]\n[s: His armor] [v: is black] [pt: like stone.]\n[s: His wings] [v: are large] [pt: like a mountain.]\n[s: Black thunder] [v: comes] [pt: from his mouth.]\n[s: The King] [v: flies down] [pt: to the heroes.]\n[s: He] [v: wants to fight] [o: the wizards] [pt: below.]\n[s: Ignis, Frostina, and Oberon] [v: look] [pt: at the sky.]\n[s: They] [v: are afraid.]\n[v: \"Look] [pt: at the sky, companions!\"] [s: Freya] [v: calls.]\n[s: She] [v: has] [o: her heavy thunder spear.]\n[s: \"The King of the dark sky] [v: is] [pt: here!]\n[s: He] [v: wants to fight] [o: our wizards!\"]"
            },
            {
                "speaker": "astraea",
                "en": "The Ash Dragon King opens his big mouth. A river of black thunder comes from it. It goes straight to Ignis, Frostina, and Oberon. Astraea never waits. She runs to the front. She has her glowing star staff above her head. \"Light of the stars, protect my friends!\" Astraea says. A big shield of gold light comes from her staff. The shield protects all the squad. The black thunder comes to the shield with big fire and sparks. But the light is strong! It never breaks!",
                "ru": "Король Пепельных Драконов раскрывает огромную пасть. Река черной молнии извергается из нее. Она устремляется прямо к Игнису, Фростине и Оберону. Астрея не медлит ни секунды. Она выбегает вперед. Она поднимает сияющий звездный посох над головой. \"Свет звезд, защити моих друзей!\" — говорит Астрея. Великий щит золотого света исходит от ее посоха. Щит защищает весь отряд. Черная молния ударяет в щит с пламенем и искрами. Но свет несокрушим! Он не ломается!",
                "chunkedEn": "[s: The Ash Dragon King] [v: opens] [o: his big mouth.]\n[s: A river of black thunder] [v: comes] [pt: from it.]\n[s: It] [v: goes] [adv: straight] [pt: to Ignis, Frostina, and Oberon.]\n[s: Astraea] [adv: never] [v: waits.]\n[s: She] [v: runs] [pt: to the front.]\n[s: She] [v: has] [o: her glowing star staff] [pt: above her head.]\n[o: \"Light of the stars,] [v: protect] [o: my friends!\"] [s: Astraea] [v: says.]\n[s: A big shield of gold light] [v: comes] [pt: from her staff.]\n[s: The shield] [v: protects] [o: all the squad.]\n[s: The black thunder] [v: comes] [pt: to the shield] [pt: with big fire and sparks.]\n[c: But] [s: the light] [v: is strong!]\n[s: It] [adv: never] [v: breaks!]"
            },
            {
                "speaker": "astraea",
                "en": "Ignis, Frostina, and Oberon stand behind Astraea. They look at the gold light above them. \"Astraea, are you fine?\" Oberon asks. \"Yes, I am fine! The King can't break my light!\" Astraea says. \"Thank you, Astraea!\" Frostina says. \"Stand strong, Astraea!\" Zephyr calls in the wind. \"I am going to bring the flying King down to the ground!\"",
                "ru": "Игнис, Фростина и Оберон стоят позади Астреи. Они смотрят на золотой свет над ними. \"Астрея, ты в порядке?\" — спрашивает Оберон. \"Да, я в порядке! Король не сможет пробить мой свет!\" — отвечает Астрея. \"Спасибо тебе, Астрея!\" — говорит Фростина. \"Держись крепко, Астрея!\" — кричит Зефир на ветру. \"Я спущу этого летающего Короля на землю!\"",
                "chunkedEn": "[s: Ignis, Frostina, and Oberon] [v: stand] [pt: behind Astraea.]\n[s: They] [v: look] [pt: at the gold light] [pt: above them.]\n[o: \"Astraea,] [v: are] [s: you] [o: fine?\"] [s: Oberon] [v: asks.]\n[o: \"Yes,] [s: I] [v: am] [o: fine!]\n[s: The King] [v: can't break] [o: my light!\"] [s: Astraea] [v: says.]\n[o: \"Thank you, Astraea!\"] [s: Frostina] [v: says.]\n[v: \"Stand] [o: strong, Astraea!\"] [s: Zephyr] [v: calls] [pt: in the wind.]\n[s: \"I] [v: am going to bring] [o: the flying King] [adv: down] [pt: to the ground!\"]"
            },
            {
                "speaker": "zephyr",
                "en": "Zephyr looks at the King. He has an idea. He jumps up into the air. A strong wind comes under his feet. He rides the wind and goes above the King. Zephyr takes his bow and three storm arrows. His target is the wings of the King.",
                "ru": "Зефир смотрит на Короля. У него появляется идея. Он взмывает в воздух. Могучий вихрь подхватывает его ноги. Он оседлает ветер и поднимается выше Короля. Зефир достает лук и три штормовые стрелы. Его цель — крылья Короля.",
                "chunkedEn": "[s: Zephyr] [v: looks] [pt: at the King.]\n[s: He] [v: has] [o: an idea.]\n[s: He] [v: jumps up] [pt: into the air.]\n[s: A strong wind] [v: comes] [pt: under his feet.]\n[s: He] [v: rides] [o: the wind] [c: and] [v: goes] [pt: above the King.]\n[s: Zephyr] [v: takes] [o: his bow and three storm arrows.]\n[s: His target] [v: is] [o: the wings of the King.]"
            },
            {
                "speaker": "zephyr",
                "en": "One! Two! Three! The arrows cut the left wing. The Ash Dragon King calls in pain. He can't fly now. He falls down to the valley. He is angry. \"Great, Zephyr!\" Astraea says. \"Now, Freya! Come from above!\" Zephyr calls in the storm.",
                "ru": "Раз! Два! Три! Стрелы рассекают левое крыло. Король Пепельных Драконов вскрикивает от боли. Он больше не может лететь. Он падает вниз в долину. Он в ярости. \"Отлично, Зефир!\" — говорит Астрея. \"Теперь ты, Фрейя! Ударь сверху!\" — кричит Зефир в буре.",
                "chunkedEn": "[o: One! Two! Three!]\n[s: The arrows] [v: cut] [o: the left wing.]\n[s: The Ash Dragon King] [v: calls] [pt: in pain.]\n[s: He] [v: can't fly] [adv: now.]\n[s: He] [v: falls down] [pt: to the valley.]\n[s: He] [v: is angry.]\n[o: \"Great, Zephyr!\"] [s: Astraea] [v: says.]\n[adv: \"Now,] [o: Freya!] [v: Come] [pt: from above!\"] [s: Zephyr] [v: calls] [pt: in the storm.]"
            },
            {
                "speaker": "freya",
                "en": "Freya hears Zephyr. She smiles. She is a brave warrior. She calls the old blessing of the Silver Citadel. Blue thunder wings come from her shoulders! They are bright. \"Go, Freya!\" Oberon says. \"I am ready!\" Freya says.",
                "ru": "Фрейя слышит Зефира. Она улыбается. Она отважный воин. Она призывает древнее благословение Серебряной Цитадели. Крылья из синей громовой молнии вырастают за ее плечами! Они ослепительно яркие. \"Вперед, Фрейя!\" — говорит Оберон. \"Я готова!\" — отвечает Фрейя.",
                "chunkedEn": "[s: Freya] [v: hears] [o: Zephyr.]\n[s: She] [v: smiles.]\n[s: She] [v: is] [o: a brave warrior.]\n[s: She] [v: calls] [o: the old blessing of the Silver Citadel.]\n[s: Blue thunder wings] [v: come] [pt: from her shoulders!]\n[s: They] [v: are bright.]\n[v: \"Go,] [o: Freya!\"] [s: Oberon] [v: says.]\n[s: \"I] [v: am] [o: ready!\"] [s: Freya] [v: says.]"
            },
            {
                "speaker": "freya",
                "en": "Freya flies up into the dark clouds. She goes above the falling King. At the peak of her flight, she takes her heavy spear with both hands. She gives it all her thunder power. \"For the three realms!\" Freya calls. She goes down like a star of silver fire. She is fast. She goes through the dark sky. Freya cuts the dark crystal in the King's chest with her thunder spear! It is a strong cut! A large sea of blue thunder breaks the crystal. The King becomes grey sand in the air.",
                "ru": "Фрейя взмывает в темные тучи. Она поднимается над падающим Королем. На вершине полета она сжимает тяжелое копье обеими руками. Она наполняет его всей своей силой грома. \"За три королевства!\" — восклицает Фрейя. Она устремляется вниз, словно звезда серебряного огня. Она стремительна. Она пронзает темное небо. Фрейя раскалывает темный кристалл в груди Короля своим громовым копьем! Это сокрушительный удар! Могучее море синей молнии разбивает кристалл вдребезги. Король обращается в серый песок прямо в воздухе.",
                "chunkedEn": "[s: Freya] [v: flies up] [pt: into the dark clouds.]\n[s: She] [v: goes] [pt: above the falling King.]\n[pt: At the peak of her flight,] [s: she] [v: takes] [o: her heavy spear] [pt: with both hands.]\n[s: She] [v: gives] [o: it all her thunder power.]\n[pt: \"For the three realms!\"] [s: Freya] [v: calls.]\n[s: She] [v: goes down] [pt: like a star of silver fire.]\n[s: She] [v: is fast.]\n[s: She] [v: goes] [pt: through the dark sky.]\n[s: Freya] [v: cuts] [o: the dark crystal in the King's chest] [pt: with her thunder spear!]\n[s: It] [v: is] [o: a strong cut!]\n[s: A large sea of blue thunder] [v: breaks] [o: the crystal.]\n[s: The King] [v: becomes] [o: grey sand] [pt: in the air.]"
            },
            {
                "speaker": "astraea",
                "en": "Freya goes down slowly on her glowing wings. She arrives next to Astraea and Zephyr. Ignis, Frostina, and Oberon smile. The squad is happy. \"Victory!\" they say. Astraea looks at her friends. \"We are a great team!\" she says. \"Yes!\" Zephyr says. Freya smiles. The sky above the Rift begins to be bright.",
                "ru": "Фрейя плавно опускается на сияющих крыльях. Она приземляется рядом с Астреей и Зефиром. Игнис, Фростина и Оберон улыбаются. Отряд ликует. \"Победа!\" — говорят они. Астрея смотрит на друзей. \"Мы отличная команда!\" — говорит она. \"Да!\" — подтверждает Зефир. Фрейя улыбается. Небо над Разломом начинает светлеть.",
                "chunkedEn": "[s: Freya] [v: goes down] [adv: slowly] [pt: on her glowing wings.]\n[s: She] [v: arrives] [pt: next to Astraea and Zephyr.]\n[s: Ignis, Frostina, and Oberon] [v: smile.]\n[s: The squad] [v: is happy.]\n[o: \"Victory!\"] [s: they] [v: say.]\n[s: Astraea] [v: looks] [pt: at her friends.]\n[s: \"We] [v: are] [o: a great team!\"] [s: she] [v: says.]\n[o: \"Yes!\"] [s: Zephyr] [v: says.]\n[s: Freya] [v: smiles.]\n[s: The sky above the Rift] [v: begins to be] [o: bright.]"
            }
        ],
        "quiz": {
            "question": "How did Freya defeat the Ash Dragon King?",
            "options": [
                "She flew with lightning wings and pierced the dark chest crystal with her thunder spear",
                "She threw a stone from the ground",
                "She trapped it in an ice cave"
            ],
            "correctIndex": 0,
            "rewardXp": 524
        },
        "backgroundImg": "images/backgrounds/bg_sky_terrace.jpg",
        "locationEn": "The Tempest Skies of Eclipse",
        "locationRu": "Штормовые Небеса Затмения",
        "campaignId": "fantasy"
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
                "speaker": "eldrin",
                "en": "The ground of the Rift breaks. It opens. Red fire comes up from the ground. It is hot and red like a sea. Now a big shadow comes up into the sky. It is the old Ash Titan! His body is made of fire, stone and iron. His eyes are red. He is angry. He walks, and the mountain moves. The mountain moves under his big feet. The sky is dark.",
                "ru": "Земля Разлома раскалывается. Она разверзается. Красный огонь поднимается из глубин. Он горячий и красный, словно море. И вот огромная тень вздымается в небо. Это древний Пепельный Титан! Его тело соткано из огня, камня и железа. Его глаза горят красным. Он в ярости. Он ступает, и гора содрогается. Гора ходит ходуном под его гигантскими ногами. Небо погрузилось во тьму.",
                "chunkedEn": "[s: The ground of the Rift] [v: breaks.]\n[s: It] [v: opens.]\n[s: Red fire] [v: comes up] [pt: from the ground.]\n[s: It] [v: is] [o: hot and red] [pt: like a sea.]\n[adv: Now] [s: a big shadow] [v: comes up] [pt: into the sky.]\n[s: It] [v: is] [o: the old Ash Titan!]\n[s: His body] [v: is made] [pt: of fire, stone and iron.]\n[s: His eyes] [v: are red.]\n[s: He] [v: is angry.]\n[s: He] [v: walks,] [c: and] [s: the mountain] [v: moves.]\n[s: The mountain] [v: moves] [pt: under his big feet.]\n[s: The sky] [v: is dark.]"
            },
            {
                "speaker": "valerius",
                "en": "The ten heroes stand in front of the Titan. The Titan is big and tall. The fire on his body is hot. The heroes look at him. They are not afraid. They never go back. Valerius and Thorin take their shields. They stand on the ground, and the ground moves. Selena, Freya and Frostina stand next to them. Zephyr, Astraea, Ignis and Oberon also stand there.",
                "ru": "Десять героев стоят перед Титаном. Титан огромен и высок. Огонь на его теле пышет жаром. Герои смотрят на него. Они не боятся. Они ни за что не отступят. Валериус и Торин поднимают свои щиты. Они стоят на земле, и земля дрожит. Селена, Фрейя и Фростина стоят рядом с ними. Зефир, Астрея, Игнис и Оберон также стоят плечом к плечу.",
                "chunkedEn": "[s: The ten heroes] [v: stand] [pt: in front of the Titan.]\n[s: The Titan] [v: is big and tall.]\n[s: The fire on his body] [v: is hot.]\n[s: The heroes] [v: look] [pt: at him.]\n[s: They] [v: are not afraid.]\n[s: They] [adv: never] [v: go back.]\n[s: Valerius and Thorin] [v: take] [o: their shields.]\n[s: They] [v: stand] [pt: on the ground,] [c: and] [s: the ground] [v: moves.]\n[s: Selena, Freya and Frostina] [v: stand] [pt: next to them.]\n[s: Zephyr, Astraea, Ignis and Oberon] [adv: also] [v: stand] [pt: there.]"
            },
            {
                "speaker": "eldrin",
                "en": "\"The time is now!\" Archmage Eldrin calls. His blue cloak is in the hot wind. \"The last words on the old star stone come now! The flame with no name is going to bring light to the dark forever!\"",
                "ru": "\"Время пришло!\" — восклицает Архимаг Эльдрин. Его синий плащ развевается на горячем ветру. \"Последние слова на древней звездной скрижали сбываются прямо сейчас! Пламя без имени принесет свет во тьму навеки!\"",
                "chunkedEn": "[s: \"The time] [v: is] [adv: now!\"] [s: Archmage Eldrin] [v: calls.]\n[s: His blue cloak] [v: is] [pt: in the hot wind.]\n[s: \"The last words on the old star stone] [v: come] [adv: now!]\n[s: The flame with no name] [v: is going to bring] [o: light] [pt: to the dark] [adv: forever!\"]"
            },
            {
                "speaker": "valerius",
                "en": "The heroes listen. Valerius looks up at the Titan. He calls, \"Master Eldrin! What is the Nameless Flame? Is it a spell in your books? Is it the old magic of the Silver Citadel?\"",
                "ru": "Герои слушают. Валериус смотрит вверх на Титана. Он кричит: \"Магистр Эльдрин! Что такое Безымянное Пламя? Это заклинание в твоих книгах? Это древняя магия Серебряной Цитадели?\"",
                "chunkedEn": "[s: The heroes] [v: listen.]\n[s: Valerius] [v: looks up] [pt: at the Titan.]\n[s: He] [v: calls,] [o: \"Master Eldrin!]\n[o: What] [v: is] [s: the Nameless Flame?]\n[v: Is] [s: it] [o: a spell] [pt: in your books?]\n[v: Is] [s: it] [o: the old magic of the Silver Citadel?\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin takes his big hammer. He calls, \"Or is it the fire from the forge of the mountain kings? Tell us, old wizard! How do we make this flame?\"",
                "ru": "Торин сжимает свой большой молот. Он кричит: \"Или это огонь из горна горных королей? Скажи нам, старый маг! Как нам зажечь это пламя?\"",
                "chunkedEn": "[s: Thorin] [v: takes] [o: his big hammer.]\n[s: He] [v: calls,] [c: \"Or] [v: is] [s: it] [o: the fire] [pt: from the forge of the mountain kings?]\n[v: Tell] [o: us, old wizard!]\n[o: How] [v: do] [s: we] [v: make] [o: this flame?\"]"
            },
            {
                "speaker": "eldrin",
                "en": "Eldrin smiles. He looks at Thorin and Valerius. He touches the crystal on his staff. The crystal is bright. \"It is not fire in a stone fireplace, Thorin,\" Eldrin says. \"And it is not a spell from old books, Valerius. The Nameless Flame has no name, because it is not for one group or one realm!\"",
                "ru": "Эльдрин улыбается. Он смотрит на Торина и Валериуса. Он касается кристалла на своем посохе. Кристалл сияет. \"Это не огонь в каменном очаге, Торин,\" — говорит Эльдрин. \"И это не заклинание из древних книг, Валериус. Безымянное Пламя не имеет имени, потому что оно не принадлежит какому-то одному клану или королевству!\"",
                "chunkedEn": "[s: Eldrin] [v: smiles.]\n[s: He] [v: looks] [pt: at Thorin and Valerius.]\n[s: He] [v: touches] [o: the crystal] [pt: on his staff.]\n[s: The crystal] [v: is bright.]\n[s: \"It] [v: is not] [o: fire] [pt: in a stone fireplace, Thorin,\"] [s: Eldrin] [v: says.]\n[c: \"And] [s: it] [v: is not] [o: a spell] [pt: from old books, Valerius.]\n[s: The Nameless Flame] [v: has] [o: no name,]\n[c: because] [s: it] [v: is not] [pt: for one group or one realm!\"]"
            },
            {
                "speaker": "eldrin",
                "en": "Eldrin points to the ten friends. They stand next to each other. \"Look at us, my friends!\" Eldrin calls. \"It is peace between the knight and the smith! It is the courage of the scout. It is the care of the one who heals. It is the spark of the fire wizard, and the roots of the forest! Ten hearts, and all are friends. This is the true Nameless Flame!\"",
                "ru": "Эльдрин указывает на десять друзей. Они стоят плечом к плечу. \"Посмотрите на нас, друзья мои!\" — восклицает Эльдрин. \"Это мир между рыцарем и кузнецом! Это отвага разведчика. Это забота целительницы. Это искра огненного мага и корни леса! Десять сердец, и все они — друзья. Вот оно, истинное Безымянное Пламя!\"",
                "chunkedEn": "[s: Eldrin] [v: points] [pt: to the ten friends.]\n[s: They] [v: stand] [pt: next to each other.]\n[v: \"Look] [pt: at us, my friends!\"] [s: Eldrin] [v: calls.]\n[s: \"It] [v: is] [o: peace] [pt: between the knight and the smith!]\n[s: It] [v: is] [o: the courage of the scout.]\n[s: It] [v: is] [o: the care of the one who heals.]\n[s: It] [v: is] [o: the spark of the fire wizard, and the roots of the forest!]\n[s: Ten hearts,] [c: and] [s: all] [v: are] [o: friends.]\n[s: This] [v: is] [o: the true Nameless Flame!\"]"
            },
            {
                "speaker": "valerius",
                "en": "Valerius looks at his friends. Selena smiles. Freya takes the hand of Frostina. Thorin looks at Valerius. Ignis and Oberon look at Eldrin. Zephyr and Astraea look at the sky. The Titan calls with a big voice. The ground moves. Now a white light comes from the chest of Valerius. The light is bright. It goes from heart to heart. It touches Thorin, Selena, Freya, Frostina, Zephyr, Astraea, Ignis, Oberon and Eldrin. All their swords, shields, bows and staffs are glowing white. The white light is bright, and the dark of the Ash Titan goes away. The heroes run to the Titan. It is the last battle for the world!",
                "ru": "Валериус смотрит на своих друзей. Селена улыбается. Фрейя берет за руку Фростину. Торин смотрит на Валериуса. Игнис и Оберон смотрят на Эльдрина. Зефир и Астрея смотрят в небо. Титан ревет громовым голосом. Земля ходит ходуном. Внезапно белый свет исходит из груди Валериуса. Свет ослепительно ярок. Он перетекает от сердца к сердцу. Он касается Торина, Селены, Фрейи, Фростины, Зефира, Астреи, Игниса, Оберона и Эльдрина. Все их мечи, щиты, луки и посохи сияют белым. Белый свет сияет, и тьма Пепельного Титана отступает. Герои бросаются на Титана. Это последняя битва за судьбу мира!",
                "chunkedEn": "[s: Valerius] [v: looks] [pt: at his friends.]\n[s: Selena] [v: smiles.]\n[s: Freya] [v: takes] [o: the hand of Frostina.]\n[s: Thorin] [v: looks] [pt: at Valerius.]\n[s: Ignis and Oberon] [v: look] [pt: at Eldrin.]\n[s: Zephyr and Astraea] [v: look] [pt: at the sky.]\n[s: The Titan] [v: calls] [pt: with a big voice.]\n[s: The ground] [v: moves.]\n[adv: Now] [s: a white light] [v: comes] [pt: from the chest of Valerius.]\n[s: The light] [v: is bright.]\n[s: It] [v: goes] [pt: from heart to heart.]\n[s: It] [v: touches] [o: Thorin, Selena, Freya, Frostina, Zephyr, Astraea, Ignis, Oberon and Eldrin.]\n[s: All their swords, shields, bows and staffs] [v: are glowing] [o: white.]\n[s: The white light] [v: is bright,] [c: and] [s: the dark of the Ash Titan] [v: goes away.]\n[s: The heroes] [v: run] [pt: to the Titan.]\n[s: It] [v: is] [o: the last battle for the world!]"
            }
        ],
        "quiz": {
            "question": "What is the true meaning of the Nameless Flame?",
            "options": [
                "The flame of unity, friendship, and peace among the ten heroes across all realms",
                "A special magic fire spell from an old book",
                "Fire from the stone fireplace of the mountain forge"
            ],
            "correctIndex": 0,
            "rewardXp": 475
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Bedrock Core of the World",
        "locationRu": "Коренная Порода Мира",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "The Ash Titan calls with a big, angry voice. He has a big hand of hot stone. He brings his hand down on the heroes. The ground breaks. Hot stones fly in the air. But the ten heroes are brave. They are never afraid. They have the bright white light of the Nameless Flame. They fight as a team. They look at the Ash Titan. They are ready.",
                "ru": "Пепельный Титан ревет громким, яростным голосом. У него огромная рука из раскаленного камня. Он обрушивает руку на героев. Земля раскалывается. Горящие камни летят в воздухе. Но десять героев отважны. Они не ведают страха. С ними яркий белый свет Безымянного Пламени. Они сражаются как единая команда. Они смотрят на Пепельного Титана. Они готовы к бою.",
                "chunkedEn": "[s: The Ash Titan] [v: calls] [pt: with a big, angry voice.]\n[s: He] [v: has] [o: a big hand of hot stone.]\n[s: He] [v: brings] [o: his hand] [adv: down] [pt: on the heroes.]\n[s: The ground] [v: breaks.]\n[s: Hot stones] [v: fly] [pt: in the air.]\n[c: But] [s: the ten heroes] [v: are brave.]\n[s: They] [v: are] [adv: never] [o: afraid.]\n[s: They] [v: have] [o: the bright white light of the Nameless Flame.]\n[s: They] [v: fight] [pt: as a team.]\n[s: They] [v: look] [pt: at the Ash Titan.]\n[s: They] [v: are ready.]"
            },
            {
                "speaker": "thorin",
                "en": "\"Stop his legs!\" Valerius calls. He has a big, bright silver shield. He looks at Thorin. \"Come, Thorin!\" Valerius and Thorin run to the feet of the Titan. Thorin has a thunder hammer. He comes to the left foot. He brings his hammer down hard on the foot. A hot stone falls from the sky. Valerius takes the stone on his shield. The Titan can't move his legs. Thorin looks at Valerius and smiles.",
                "ru": "\"Держите его ноги!\" — командует Валериус. У него большой, сияющий серебряный щит. Он смотрит на Торина. \"Вперед, Торин!\" Валериус и Торин бегут к ногам Титана. У Торина громовой молот. Он подходит к левой ноге. Он с силой обрушивает молот на ступню. Раскаленный камень падает с неба. Валериус принимает удар камня на свой щит. Титан не может сдвинуть ноги. Торин смотрит на Валериуса и улыбается.",
                "chunkedEn": "[v: \"Stop] [o: his legs!\"] [s: Valerius] [v: calls.]\n[s: He] [v: has] [o: a big, bright silver shield.]\n[s: He] [v: looks] [pt: at Thorin.]\n[v: \"Come,] [o: Thorin!\"]\n[s: Valerius and Thorin] [v: run] [pt: to the feet of the Titan.]\n[s: Thorin] [v: has] [o: a thunder hammer.]\n[s: He] [v: comes] [pt: to the left foot.]\n[s: He] [v: brings] [o: his hammer] [adv: down hard] [pt: on the foot.]\n[s: A hot stone] [v: falls] [pt: from the sky.]\n[s: Valerius] [v: takes] [o: the stone] [pt: on his shield.]\n[s: The Titan] [v: can't move] [o: his legs.]\n[s: Thorin] [v: looks] [pt: at Valerius] [c: and] [v: smiles.]"
            },
            {
                "speaker": "frostina",
                "en": "\"Frostina, freeze his legs!\" Oberon calls. Oberon stands on the ground with his old staff. Green roots come from the ground. The roots go around the arms of the Titan and also around his stomach. Frostina makes a big blizzard. The blizzard is cold. The hot rock around the knees of the Titan becomes crystal ice! Oberon looks at Frostina and smiles.",
                "ru": "\"Фростина, заморозь его ноги!\" — призывает Оберон. Оберон стоит на земле со своим древним посохом. Зеленые корни пробиваются из земли. Корни оплетают руки Титана, а также его торс. Фростина обрушивает великую метель. Метель леденит. Раскаленный камень вокруг колен Титана превращается в кристальный лед! Оберон смотрит на Фростину и улыбается.",
                "chunkedEn": "[o: \"Frostina,] [v: freeze] [o: his legs!\"] [s: Oberon] [v: calls.]\n[s: Oberon] [v: stands] [pt: on the ground] [pt: with his old staff.]\n[s: Green roots] [v: come] [pt: from the ground.]\n[s: The roots] [v: go] [pt: around the arms of the Titan] [c: and] [adv: also] [pt: around his stomach.]\n[s: Frostina] [v: makes] [o: a big blizzard.]\n[s: The blizzard] [v: is cold.]\n[s: The hot rock around the knees of the Titan] [v: becomes] [o: crystal ice!]\n[s: Oberon] [v: looks] [pt: at Frostina] [c: and] [v: smiles.]"
            },
            {
                "speaker": "selene",
                "en": "The Titan is angry. He can't move his legs. He can't move his arms. \"Now! Cut his energy!\" Zephyr calls from the sky. Zephyr has a bow and three arrows. Selena runs behind the Titan. She jumps on his back. She is like a dark shadow. She has two magic daggers. She cuts the dark energy on his back. Zephyr fires his three storm arrows into the eyes of the Titan. Now the Titan can't see!",
                "ru": "Титан в ярости. Он не может пошевелить ногами. Он не может взмахнуть руками. \"Сейчас! Перережьте его энергетические каналы!\" — кричит Зефир с неба. У Зефира лук и три стрелы. Селена заходит за спину Титана. Она взбирается на его спину. Она подобна темной тени. У нее два магических кинжала. Она рассекает темную энергию на его спине. Зефир выпускает три штормовые стрелы точно в глаза Титана. Теперь Титан ослеплен!",
                "chunkedEn": "[s: The Titan] [v: is angry.]\n[s: He] [v: can't move] [o: his legs.]\n[s: He] [v: can't move] [o: his arms.]\n[adv: \"Now!] [v: Cut] [o: his energy!\"] [s: Zephyr] [v: calls] [pt: from the sky.]\n[s: Zephyr] [v: has] [o: a bow and three arrows.]\n[s: Selena] [v: runs] [pt: behind the Titan.]\n[s: She] [v: jumps] [pt: on his back.]\n[s: She] [v: is] [pt: like a dark shadow.]\n[s: She] [v: has] [o: two magic daggers.]\n[s: She] [v: cuts] [o: the dark energy] [pt: on his back.]\n[s: Zephyr] [v: fires] [o: his three storm arrows] [pt: into the eyes of the Titan.]\n[adv: Now] [s: the Titan] [v: can't see!]"
            },
            {
                "speaker": "freya",
                "en": "\"Freya, break his armor!\" Ignis calls. He smiles. Ignis makes a big red fire. The fire goes to the chest of the Titan. The armor has a bright, glowing break. Freya is in the clouds. She flies down like a silver star. She has a thunder spear. She takes her spear straight into the break in the armor!",
                "ru": "\"Фрейя, разбей его броню!\" — кричит Игнис. Он улыбается. Игнис извергает великий красный огонь. Пламя обрушивается на грудь Титана. На броне появляется яркая, светящаяся трещина. Фрейя парит в облаках. Она пикирует вниз, словно серебряная звезда. У нее громовое копье. Она вонзает свое копье прямо в трещину в броне!",
                "chunkedEn": "[o: \"Freya,] [v: break] [o: his armor!\"] [s: Ignis] [v: calls.]\n[s: He] [v: smiles.]\n[s: Ignis] [v: makes] [o: a big red fire.]\n[s: The fire] [v: goes] [pt: to the chest of the Titan.]\n[s: The armor] [v: has] [o: a bright, glowing break.]\n[s: Freya] [v: is] [pt: in the clouds.]\n[s: She] [v: flies down] [pt: like a silver star.]\n[s: She] [v: has] [o: a thunder spear.]\n[s: She] [v: takes] [o: her spear] [adv: straight] [pt: into the break in the armor!]"
            },
            {
                "speaker": "ignis",
                "en": "The black armor of the Titan breaks into a thousand pieces! Now you can see the dark heart of the Ash Titan. The Titan is weak. He has pain. Thorin is happy. \"Astraea, Master Eldrin, finish it!\" Thorin calls.",
                "ru": "Черная броня Титана раскалывается на тысячу осколков! Теперь видно темное сердце Пепельного Титана. Титан ослаб. Он стонет от боли. Торин ликует. \"Астрея, Магистр Эльдрин, добейте его!\" — кричит Торин.",
                "chunkedEn": "[s: The black armor of the Titan] [v: breaks] [pt: into a thousand pieces!]\n[adv: Now] [s: you] [v: can see] [o: the dark heart of the Ash Titan.]\n[s: The Titan] [v: is weak.]\n[s: He] [v: has] [o: pain.]\n[s: Thorin] [v: is happy.]\n[o: \"Astraea, Master Eldrin,] [v: finish] [o: it!\"] [s: Thorin] [v: calls.]"
            },
            {
                "speaker": "astraea",
                "en": "Astraea and Eldrin come to the front. Astraea has a crystal staff. Eldrin has a silver star bowl. They look at their friends. All ten heroes are one team, and their hearts are one. A big light of gold star light and white Nameless Flame comes from the hands of Astraea and Eldrin. The light goes straight into the heart of the Titan.",
                "ru": "Астрея и Эльдрин выходят вперед. У Астреи хрустальный посох. У Эльдрина серебряная звездная чаша. Они смотрят на своих друзей. Все десять героев — одна команда, и их сердца бьются как одно. Великий свет золотого сияния звезд и белого Безымянного Пламени исходит из рук Астреи и Эльдрина. Луч света устремляется прямо в сердце Титана.",
                "chunkedEn": "[s: Astraea and Eldrin] [v: come] [pt: to the front.]\n[s: Astraea] [v: has] [o: a crystal staff.]\n[s: Eldrin] [v: has] [o: a silver star bowl.]\n[s: They] [v: look] [pt: at their friends.]\n[s: All ten heroes] [v: are] [o: one team,] [c: and] [s: their hearts] [v: are] [o: one.]\n[s: A big light of gold star light and white Nameless Flame] [v: comes] [pt: from the hands of Astraea and Eldrin.]\n[s: The light] [v: goes] [adv: straight] [pt: into the heart of the Titan.]"
            },
            {
                "speaker": "eldrin",
                "en": "The light goes into the Ash Titan. The dark purple sun in the sky breaks. The Ash Titan calls one last time with a big voice. After that, he becomes a thousand bright gold sparks. The sparks come down like soft rain over the valley. They are like warm summer stars. The dark is gone forever. The ten heroes stand in the valley. They look at the sparks. They smile. \"We win!\" Valerius says. \"Yes! We are a team!\" Thorin says. Freya, Ignis, Zephyr and Selena come to their friends. All ten heroes are happy.",
                "ru": "Свет проникает внутрь Пепельного Титана. Темно-фиолетовое солнце в небе раскалывается. Пепельный Титан в последний раз издает оглушительный рев. После этого он обращается в тысячи ярких золотых искр. Искры падают, словно теплый дождь, на всю долину. Они подобны теплым летним звездам. Тьма рассеялась навсегда. Десять героев стоят в долине. Они смотрят на искры. Они улыбаются. \"Мы победили!\" — говорит Валериус. \"Да! Мы — команда!\" — восклицает Торин. Фрейя, Игнис, Зефир и Селена подходят к друзьям. Все десять героев счастливы.",
                "chunkedEn": "[s: The light] [v: goes] [pt: into the Ash Titan.]\n[s: The dark purple sun in the sky] [v: breaks.]\n[s: The Ash Titan] [v: calls] [pt: one last time] [pt: with a big voice.]\n[pt: After that,] [s: he] [v: becomes] [o: a thousand bright gold sparks.]\n[s: The sparks] [v: come down] [pt: like soft rain] [pt: over the valley.]\n[s: They] [v: are] [pt: like warm summer stars.]\n[s: The dark] [v: is gone] [adv: forever.]\n[s: The ten heroes] [v: stand] [pt: in the valley.]\n[s: They] [v: look] [pt: at the sparks.]\n[s: They] [v: smile.]\n[o: \"We] [v: win!\"] [s: Valerius] [v: says.]\n[o: \"Yes! We] [v: are] [o: a team!\"] [s: Thorin] [v: says.]\n[s: Freya, Ignis, Zephyr and Selena] [v: come] [pt: to their friends.]\n[s: All ten heroes] [v: are happy.]"
            }
        ],
        "quiz": {
            "question": "How did the ten heroes defeat the giant Ash Titan?",
            "options": [
                "By fighting together as one team with the bright white light of the Nameless Flame",
                "By hiding behind the mountain wall",
                "By running away to the Silver Citadel"
            ],
            "correctIndex": 0,
            "rewardXp": 535
        },
        "backgroundImg": "images/backgrounds/bg_dragon_volcano.jpg",
        "locationEn": "The Edge of the Ashen Maw",
        "locationRu": "Край Пепельного Жерла",
        "campaignId": "fantasy"
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
                "speaker": "valerius",
                "en": "The dark sun goes away. Now the sky is blue and the air is clean. A warm, gold sun comes up over the mountain peaks. The bright light is on all the realm. In the valley below, the black air goes away. The grass is green. The flowers are red, yellow, pink, and blue. The rivers are cold and fresh, and they shine in the new morning. The birds fly in the wind and sing happy songs.",
                "ru": "Темное солнце уходит. Теперь небо синее, а воздух чист. Теплое золотое солнце поднимается над горными вершинами. Яркий свет озаряет все королевство. В долине внизу рассеивается черная гарь. Трава зеленеет. Цветы распускаются красными, желтыми, розовыми и синими. Реки прохладны и свежи, и они блестят в лучах нового утра. Птицы парят на ветру и поют радостные песни.",
                "chunkedEn": "[s: The dark sun] [v: goes away.]\n[adv: Now] [s: the sky] [v: is] [o: blue] [c: and] [s: the air] [v: is] [o: clean.]\n[s: A warm, gold sun] [v: comes up] [pt: over the mountain peaks.]\n[s: The bright light] [v: is] [pt: on all the realm.]\n[pt: In the valley below,] [s: the black air] [v: goes away.]\n[s: The grass] [v: is] [o: green.]\n[s: The flowers] [v: are] [o: red, yellow, pink, and blue.]\n[s: The rivers] [v: are] [o: cold and fresh,] [c: and] [s: they] [v: shine] [pt: in the new morning.]\n[s: The birds] [v: fly] [pt: in the wind] [c: and] [v: sing] [o: happy songs.]"
            },
            {
                "speaker": "astraea",
                "en": "At the Silver River, a big thing is here. Thousands of people come to the river. They come from the Silver Citadel, the Mountain Forge, and the Emerald Forest. There are no swords. There are no heavy shields. There are no bad words. Knights give bread to smiths. Scouts dance with students. Women sing songs and children run in the grass. Men eat food and drink water. The old borders of war are gone. Now they are all friends, and they are always friends.",
                "ru": "У Серебряной реки происходит великое событие. Тысячи людей приходят к реке. Они идут из Серебряной Цитадели, Горного Горна и Изумрудного Леса. Здесь нет мечей. Здесь нет тяжелых щитов. Здесь нет злых слов. Рыцари делят хлеб с кузнецами. Разведчики танцуют с учениками. Женщины поют песни, а дети бегают по траве. Мужчины пробуют угощения и пьют воду. Древние границы войны стерты. Теперь все они друзья, и они останутся друзьями навсегда.",
                "chunkedEn": "[pt: At the Silver River,] [s: a big thing] [v: is] [pt: here.]\n[s: Thousands of people] [v: come] [pt: to the river.]\n[s: They] [v: come] [pt: from the Silver Citadel, the Mountain Forge, and the Emerald Forest.]\n[s: There] [v: are] [o: no swords.]\n[s: There] [v: are] [o: no heavy shields.]\n[s: There] [v: are] [o: no bad words.]\n[s: Knights] [v: give] [o: bread] [pt: to smiths.]\n[s: Scouts] [v: dance] [pt: with students.]\n[s: Women] [v: sing] [o: songs] [c: and] [s: children] [v: run] [pt: in the grass.]\n[s: Men] [v: eat] [o: food] [c: and] [v: drink] [o: water.]\n[s: The old borders of war] [v: are gone.]\n[adv: Now] [s: they] [v: are] [o: all friends,] [c: and] [s: they] [v: are] [adv: always] [o: friends.]"
            },
            {
                "speaker": "valerius",
                "en": "On the top of the Astral Spire, the ten companions stand next to each other on the old stone. Valerius has his shining silver cloak. He looks at the big valley and he smiles. He is so happy. \"Ten days ago, I was a stranger,\" Valerius says. \"I had no friends. Now I have nine true brothers and sisters.\"",
                "ru": "На вершине Астрального Шпиля десять соратников стоят плечом к плечу на древнем камне. На Валериусе сияет серебряный плащ. Он смотрит на бескрайнюю долину и улыбается. Он невероятно счастлив. \"Десять дней назад я был одиноким изгнанником,\" — говорит Валериус. \"У меня не было друзей. Теперь у меня есть девять истинных братьев и сестер.\"",
                "chunkedEn": "[pt: On the top of the Astral Spire,] [s: the ten companions] [v: stand] [pt: next to each other] [pt: on the old stone.]\n[s: Valerius] [v: has] [o: his shining silver cloak.]\n[s: He] [v: looks] [pt: at the big valley] [c: and] [s: he] [v: smiles.]\n[s: He] [v: is so happy.]\n[pt: \"Ten days ago,] [s: I] [v: was] [o: a stranger,\"] [s: Valerius] [v: says.]\n[s: \"I] [v: had] [o: no friends.]\n[adv: Now] [s: I] [v: have] [o: nine true brothers and sisters.\"]"
            },
            {
                "speaker": "thorin",
                "en": "Thorin has his big hand on the shoulder of Valerius. He smiles. \"We stop the war of ten centuries, brother!\" Thorin says. \"Now our hammers and shields build houses and bridges, not walls.\"",
                "ru": "Торин кладет свою широкую ладонь на плечо Валериуса. Он улыбается. \"Мы остановили войну десяти веков, брат!\" — говорит Торин. \"Теперь наши молоты и щиты будут строить дома и мосты, а не стены.\"",
                "chunkedEn": "[s: Thorin] [v: has] [o: his big hand] [pt: on the shoulder of Valerius.]\n[s: He] [v: smiles.]\n[s: \"We] [v: stop] [o: the war of ten centuries, brother!\"] [s: Thorin] [v: says.]\n[adv: \"Now] [s: our hammers and shields] [v: build] [o: houses and bridges, not walls.\"]"
            },
            {
                "speaker": "selene",
                "en": "Selena and Zephyr stand at the side of the top. The wind plays with their cloaks. Selena has her daggers, and she smiles. \"Now we do not hide,\" Selena says. \"The shadow is cool and quiet in a bright world.\" Zephyr has his green bow. He points the bow to the far sky. \"A new wind comes over the world, friends,\" Zephyr says.",
                "ru": "Селена и Зефир стоят на краю площадки. Ветер играет с их плащами. Селена убирает кинжалы и улыбается. \"Теперь нам незачем прятаться,\" — говорит Селена. \"Тень теперь лишь прохлада и покой в сияющем мире.\" У Зефира в руках зеленый лук. Он указывает луком в далекое небо. \"Новый ветер веет над миром, друзья,\" — говорит Зефир.",
                "chunkedEn": "[s: Selena and Zephyr] [v: stand] [pt: at the side of the top.]\n[s: The wind] [v: plays] [pt: with their cloaks.]\n[s: Selena] [v: has] [o: her daggers,] [c: and] [s: she] [v: smiles.]\n[adv: \"Now] [s: we] [v: do not hide,\"] [s: Selena] [v: says.]\n[s: \"The shadow] [v: is] [o: cool and quiet] [pt: in a bright world.\"]\n[s: Zephyr] [v: has] [o: his green bow.]\n[s: He] [v: points] [o: the bow] [pt: to the far sky.]\n[s: \"A new wind] [v: comes] [pt: over the world, friends,\"] [s: Zephyr] [v: says.]"
            },
            {
                "speaker": "ignis",
                "en": "Ignis, Frostina, Freya, and Oberon stand around the flowers and the sparks. They dance and they sing. \"Fire, ice, thunder, and earth!\" Ignis says. \"We are stronger as a team than one hero!\" Astraea has her hands up to the warm sun. She says, \"Thank you,\" to the gold sky.",
                "ru": "Игнис, Фростина, Фрейя и Оберон стоят среди цветов и кружащихся искр. Они танцуют и поют. \"Огонь, лед, гром и земля!\" — восклицает Игнис. \"Вместе, как команда, мы сильнее любого героя-одиночки!\" Астрея воздевает руки к теплому солнцу. Она шепчет: \"Спасибо,\" — золотому небу.",
                "chunkedEn": "[s: Ignis, Frostina, Freya, and Oberon] [v: stand] [pt: around the flowers and the sparks.]\n[s: They] [v: dance] [c: and] [s: they] [v: sing.]\n[o: \"Fire, ice, thunder, and earth!\"] [s: Ignis] [v: says.]\n[s: \"We] [v: are] [o: stronger] [pt: as a team] [pt: than one hero!\"]\n[s: Astraea] [v: has] [o: her hands] [pt: up to the warm sun.]\n[s: She] [v: says,] [o: \"Thank you,\"] [pt: to the gold sky.]"
            },
            {
                "speaker": "eldrin",
                "en": "Grand Archmage Eldrin goes to the center of the top. He looks at each hero. He loves all the heroes. He is happy. \"You go through fire, ice, and dark,\" Eldrin says in a big voice. \"You learn the true words of courage and honor. Your A1 journey is complete! Now you are not strangers. You are the Guards of the Seven Winds!\"",
                "ru": "Великий Архимаг Эльдрин выходит в центр террасы. Он смотрит на каждого героя. Он гордится всеми героями. Он счастлив. \"Вы прошли сквозь огонь, лед и тьму,\" — торжественно произносит Эльдрин. \"Вы выучили истинные слова мужества и чести. Ваше путешествие уровня A1 завершено! Теперь вы не изгнанники. Вы — Хранители Семи Ветров!\"",
                "chunkedEn": "[s: Grand Archmage Eldrin] [v: goes] [pt: to the center of the top.]\n[s: He] [v: looks] [pt: at each hero.]\n[s: He] [v: loves] [o: all the heroes.]\n[s: He] [v: is happy.]\n[s: \"You] [v: go] [pt: through fire, ice, and dark,\"] [s: Eldrin] [v: says] [pt: in a big voice.]\n[s: \"You] [v: learn] [o: the true words of courage and honor.]\n[s: Your A1 journey] [v: is complete!]\n[adv: Now] [s: you] [v: are not] [o: strangers.]\n[s: You] [v: are] [o: the Guards of the Seven Winds!\"]"
            },
            {
                "speaker": "eldrin",
                "en": "Eldrin points his staff to the big peaks over the valley. \"Over the mountains, there are big new countries of A2! Are you ready for a new journey?\" The ten heroes have their glowing swords, bows, and staffs up to the morning sky. They say, \"Yes!\" with a big, happy voice. The voice goes across the sun and the mountains.",
                "ru": "Эльдрин указывает посохом на величественные вершины за долиной. \"За этими горами простираются новые великие земли уровня A2! Готовы ли вы к новому путешествию?\" Десять героев поднимают сияющие мечи, луки и посохи навстречу утреннему небу. Они дружно кричат: \"Да!\" ликующим хором. Их голоса эхом разносятся над солнцем и горами.",
                "chunkedEn": "[s: Eldrin] [v: points] [o: his staff] [pt: to the big peaks] [pt: over the valley.]\n[pt: \"Over the mountains,] [s: there] [v: are] [o: big new countries of A2!]\n[v: Are] [s: you] [o: ready] [pt: for a new journey?\"]\n[s: The ten heroes] [v: have] [o: their glowing swords, bows, and staffs] [pt: up to the morning sky.]\n[s: They] [v: say,] [o: \"Yes!\"] [pt: with a big, happy voice.]\n[s: The voice] [v: goes] [pt: across the sun and the mountains.]"
            }
        ],
        "quiz": {
            "question": "What title did the ten heroes earn after saving the world and completing their A1 journey?",
            "options": [
                "The Guards of the Seven Winds",
                "Simple castle farmers",
                "Bitter rivals of the three realms"
            ],
            "correctIndex": 0,
            "rewardXp": 1000
        },
        "backgroundImg": "images/backgrounds/bg_panorama.jpg",
        "locationEn": "The Summit of the Seven Winds",
        "locationRu": "Вершина Семи Ветров",
        "campaignId": "fantasy"
    },
    {
        "id": "det-ch-1",
        "campaignId": "detective",
        "number": 1,
        "actId": 101,
        "titleEn": "Rain in New Haven",
        "titleRu": "Дождь в Нью-Хейвене",
        "rewardXp": 496,
        "audioDir": "det_ch_1",
        "involvedHeroes": [
            "leo",
            "arthur",
            "mia",
            "toby"
        ],
        "paragraphs": [
            {
                "speaker": "leo",
                "en": "It is a cold and rainy morning in the city of New Haven. Rain is on the street. Rain is also on the windows. Detective Leo is in a room on the second floor. He is at his desk. He has a warm brown jacket. He drinks hot black coffee from a cup. His friend Mia is near the window. She is also a detective. She has a computer. She looks at the newspaper. She drinks tea.",
                "ru": "Холодное и дождливое утро в городе Нью-Хейвен. Дождь идет на улице. Дождь также барабанит по окнам. Детектив Лео находится в комнате на втором этаже. Он сидит за своим рабочим столом. На нем теплая коричневая куртка. Он пьет горячий черный кофе из чашки. Его подруга Миа стоит у окна. Она тоже детектив. У нее есть компьютер. Она просматривает газету. Она пьет чай.",
                "chunkedEn": "[s: It] [v: is] [o: a cold and rainy morning] [pt: in the city of New Haven.]\n[s: Rain] [v: is] [pt: on the street.]\n[s: Rain] [v: is] [adv: also] [pt: on the windows.]\n[s: Detective Leo] [v: is] [pt: in a room on the second floor.]\n[s: He] [v: is] [pt: at his desk.]\n[s: He] [v: has] [o: a warm brown jacket.]\n[s: He] [v: drinks] [o: hot black coffee] [pt: from a cup.]\n[s: His friend Mia] [v: is] [pt: near the window.]\n[s: She] [v: is] [adv: also] [o: a detective.]\n[s: She] [v: has] [o: a computer.]\n[s: She] [v: looks] [pt: at the newspaper.]\n[s: She] [v: drinks] [o: tea.]"
            },
            {
                "speaker": "arthur",
                "en": "Soon the door opens. An old man comes in. He has a grey coat. It is Grandfather Arthur. Arthur is the owner of the antique shop downstairs. He is Leo's friend. His hands are cold. He is afraid. Mia sees Arthur. She stands. \"Leo! Mia! Please help me!\" Arthur says. \"A thief came to my shop last night!\"",
                "ru": "Вскоре дверь открывается. Входит пожилой мужчина. На нем серое пальто. Это дедушка Артур. Артур — владелец антикварной лавки внизу. Он друг Лео. Его руки холодные. Он напуган. Миа видит Артура. Она встает. \"Лео! Миа! Пожалуйста, помогите мне!\" — говорит Артур. \"В мою лавку прошлой ночью проник вор!\"",
                "chunkedEn": "[adv: Soon] [s: the door] [v: opens.]\n[s: An old man] [v: comes in.]\n[s: He] [v: has] [o: a grey coat.]\n[s: It] [v: is] [o: Grandfather Arthur.]\n[s: Arthur] [v: is] [o: the owner of the antique shop] [pt: downstairs.]\n[s: He] [v: is] [o: Leo's friend.]\n[s: His hands] [v: are] [pt: cold.]\n[s: He] [v: is] [pt: afraid.]\n[s: Mia] [v: sees] [o: Arthur.]\n[s: She] [v: stands.]\n[o: \"Leo! Mia! Please] [v: help] [o: me!\"] [s: Arthur] [v: says.]\n[s: \"A thief] [v: came] [pt: to my shop last night!\"]"
            },
            {
                "speaker": "leo",
                "en": "Leo stands. He looks at Arthur. Leo gives a chair to Arthur. Arthur is on the chair. \"Arthur, please, drink water,\" Leo says with a smile. \"I want to help you. Tell me about the crime.\" Mia takes a cup of water for Arthur. Arthur drinks the water. He also eats a cookie.",
                "ru": "Лео поднимается. Он смотрит на Артура. Лео пододвигает стул Артуру. Артур садится на стул. \"Артур, пожалуйста, выпей воды,\" — с улыбкой говорит Лео. \"Я хочу тебе помочь. Расскажи мне о преступлении.\" Миа приносит стакан воды для Артура. Артур выпивает воду. Он также съедает печенье.",
                "chunkedEn": "[s: Leo] [v: stands.]\n[s: He] [v: looks] [pt: at Arthur.]\n[s: Leo] [v: gives] [o: a chair] [pt: to Arthur.]\n[s: Arthur] [v: is] [pt: on the chair.]\n[o: \"Arthur, please,] [v: drink] [o: water,\"] [s: Leo] [v: says] [pt: with a smile.]\n[s: \"I] [v: want to help] [o: you.]\n[v: Tell] [o: me] [pt: about the crime.\"]\n[s: Mia] [v: takes] [o: a cup of water] [pt: for Arthur.]\n[s: Arthur] [v: drinks] [o: the water.]\n[s: He] [adv: also] [v: eats] [o: a cookie.]"
            },
            {
                "speaker": "arthur",
                "en": "Arthur says, \"Last night, the storm was big. At midnight, a thief came to my shop. The thief broke the window. He did not take money. He did not take the gold pocket watch. He took one special thing. He took the ancient music box! It is a brown wood box with a silver bird on top. My grandfather gave this music box to me. Inside the box, there was a secret note. There was also a key.\"",
                "ru": "Артур говорит: \"Прошлой ночью была сильная буря. В полночь в мою лавку проник вор. Вор разбил окно. Он не взял деньги. Он не взял золотые карманные часы. Он забрал одну особенную вещь. Он похитил старинную музыкальную шкатулку! Это деревянная коричневая шкатулка с серебряной птицей наверху. Мой дедушка подарил мне эту музыкальную шкатулку. Внутри шкатулки была секретная записка. Там также лежал ключ.\"",
                "chunkedEn": "[s: Arthur] [v: says,] [pt: \"Last night,] [s: the storm] [v: was] [pt: big.]\n[pt: At midnight,] [s: a thief] [v: came] [pt: to my shop.]\n[s: The thief] [v: broke] [o: the window.]\n[s: He] [v: did not take] [o: money.]\n[s: He] [v: did not take] [o: the gold pocket watch.]\n[s: He] [v: took] [o: one special thing.]\n[s: He] [v: took] [o: the ancient music box!]\n[s: It] [v: is] [o: a brown wood box] [pt: with a silver bird on top.]\n[s: My grandfather] [v: gave] [o: this music box] [pt: to me.]\n[pt: Inside the box,] [w: there] [v: was] [o: a secret note.]\n[w: There] [v: was] [adv: also] [o: a key.\"]"
            },
            {
                "speaker": "mia",
                "en": "Mia opens her notebook. She looks at Arthur. She writes in her notebook with a pen. \"Do you know this thief?\" Mia asks. \"Do you have an enemy?\" Arthur says, \"No. I do not know. I am an old watchmaker. I have no enemies. But two days ago, a strange man came to the shop. He had a dark raincoat. He looked at the music box for twenty minutes. He did not say a word. Then he left.\"",
                "ru": "Миа открывает свой блокнот. Она смотрит на Артура. Она пишет ручкой в блокноте. \"Вы знаете этого вора?\" — спрашивает Миа. \"У вас есть враги?\" Артур отвечает: \"Нет. Я не знаю. Я старый часовщик. У меня нет врагов. Но два дня назад в лавку приходил странный мужчина. На нем был темный плащ. Он рассматривал музыкальную шкатулку двадцать минут. Он не произнес ни слова. Затем он ушел.\"",
                "chunkedEn": "[s: Mia] [v: opens] [o: her notebook.]\n[s: She] [v: looks] [pt: at Arthur.]\n[s: She] [v: writes] [pt: in her notebook with a pen.]\n[v: \"Do] [s: you] [v: know] [o: this thief?\"] [s: Mia] [v: asks.]\n[v: \"Do] [s: you] [v: have] [o: an enemy?\"]\n[s: Arthur] [v: says,] [o: \"No.]\n[s: I] [v: do not know.]\n[s: I] [v: am] [o: an old watchmaker.]\n[s: I] [v: have] [o: no enemies.]\n[c: But] [pt: two days ago,] [s: a strange man] [v: came] [pt: to the shop.]\n[s: He] [v: had] [o: a dark raincoat.]\n[s: He] [v: looked] [pt: at the music box for twenty minutes.]\n[s: He] [v: did not say] [o: a word.]\n[adv: Then] [s: he] [v: left.\"]"
            },
            {
                "speaker": "toby",
                "en": "Now Toby runs into the room. Toby is a kid. He is ten. He has a yellow raincoat. He lives next to the bakery. Toby is happy. He wants to help. Barnaby is with him. Barnaby is a happy brown dog. Barnaby runs around the room. \"Uncle Leo! Grandfather Arthur!\" Toby says. \"Barnaby and I were in the park this morning. Barnaby found a key! It was near a tree. It is a bright silver key!\"",
                "ru": "В эту минуту в комнату вбегает Тоби. Тоби — мальчик. Ему десять лет. На нем желтый дождевик. Он живет по соседству с пекарней. Тоби радостный. Он хочет помочь. С ним Барнаби. Барнаби — веселый коричневый пес. Барнаби бегает по комнате. \"Дядя Лео! Дедушка Артур!\" — говорит Тоби. \"Мы с Барнаби были в парке этим утром. Барнаби нашел ключ! Он лежал возле дерева. Это блестящий серебряный ключ!\"",
                "chunkedEn": "[adv: Now] [s: Toby] [v: runs] [pt: into the room.]\n[s: Toby] [v: is] [o: a kid.]\n[s: He] [v: is] [o: ten.]\n[s: He] [v: has] [o: a yellow raincoat.]\n[s: He] [v: lives] [pt: next to the bakery.]\n[s: Toby] [v: is happy.]\n[s: He] [v: wants to help.]\n[s: Barnaby] [v: is] [pt: with him.]\n[s: Barnaby] [v: is] [o: a happy brown dog.]\n[s: Barnaby] [v: runs] [pt: around the room.]\n[o: \"Uncle Leo! Grandfather Arthur!\"] [s: Toby] [v: says.]\n[s: \"Barnaby and I] [v: were] [pt: in the park this morning.]\n[s: Barnaby] [v: found] [o: a key!]\n[s: It] [v: was] [pt: near a tree.]\n[s: It] [v: is] [o: a bright silver key!\"]"
            },
            {
                "speaker": "leo",
                "en": "Toby gives the key to Leo. Leo looks at the small silver key in his hand. Now he looks at Mia. \"A broken window, a music box, a big footprint, a blue paper, and a key,\" Leo says. \"Toby is good!\" Toby smiles. Arthur smiles.",
                "ru": "Тоби протягивает ключ Лео. Лео смотрит на маленький серебряный ключ в своей руке. Затем он переводит взгляд на Мию. \"Разбитое окно, музыкальная шкатулка, большой след ноги, синяя бумага и ключ,\" — говорит Лео. \"Тоби молодец!\" Тоби улыбается. Артур улыбается.",
                "chunkedEn": "[s: Toby] [v: gives] [o: the key] [pt: to Leo.]\n[s: Leo] [v: looks] [pt: at the small silver key in his hand.]\n[adv: Now] [s: he] [v: looks] [pt: at Mia.]\n[s: \"A broken window, a music box, a big footprint, a blue paper, and a key,\"] [s: Leo] [v: says.]\n[s: \"Toby] [v: is] [o: good!\"]\n[s: Toby] [v: smiles.]\n[s: Arthur] [v: smiles.]"
            },
            {
                "speaker": "mia",
                "en": "Leo takes his flashlight. \"Mia, take your camera and your smartphone. Everyone, take your raincoat. We go downstairs. We investigate the crime!\" Mia takes her camera. Leo takes his raincoat. Arthur takes his coat. Arthur, Toby, and Barnaby go with them. They go downstairs to the antique shop.",
                "ru": "Лео берет фонарик. \"Миа, возьми камеру и смартфон. Все надевайте дождевики. Мы спускаемся вниз. Мы расследуем это преступление!\" Миа берет камеру. Лео надевает свой плащ. Артур берет пальто. Артур, Тоби и Барнаби идут с ними. Они спускаются вниз в антикварную лавку.",
                "chunkedEn": "[s: Leo] [v: takes] [o: his flashlight.]\n[o: \"Mia,] [v: take] [o: your camera and your smartphone.]\n[s: Everyone,] [v: take] [o: your raincoat.]\n[s: We] [v: go] [pt: downstairs.]\n[s: We] [v: investigate] [o: the crime!\"]\n[s: Mia] [v: takes] [o: her camera.]\n[s: Leo] [v: takes] [o: his raincoat.]\n[s: Arthur] [v: takes] [o: his coat.]\n[s: Arthur, Toby, and Barnaby] [v: go] [pt: with them.]\n[s: They] [v: go downstairs] [pt: to the antique shop.]"
            }
        ],
        "quiz": {
            "question": "What was stolen from Grandfather Arthur's antique shop?",
            "options": [
                "An ancient music box with a note and a key",
                "Gold coins and silver clocks",
                "A red bicycle"
            ],
            "correctIndex": 0,
            "rewardXp": 496
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "Detective Leo's Office",
        "locationRu": "Кабинет Детектива Лео"
    },
    {
        "id": "det-ch-2",
        "campaignId": "detective",
        "number": 2,
        "actId": 101,
        "titleEn": "The Broken Glass",
        "titleRu": "Разбитое стекло",
        "rewardXp": 538,
        "audioDir": "det_ch_2",
        "involvedHeroes": [
            "leo",
            "arthur",
            "mia",
            "toby",
            "harris",
            "martha"
        ],
        "paragraphs": [
            {
                "speaker": "leo",
                "en": "Leo, Mia, Arthur, Toby, and the dog Barnaby go downstairs. They go to the first floor. They open the door of the antique shop. The shop is quiet, but it is very interesting. There are many old clocks on the walls. There are wood tables, books, paintings, and stone statues of lions. The air has a smell of old paper and rain.",
                "ru": "Лео, Миа, Артур, Тоби и пёс Барнаби спускаются вниз. Они идут на первый этаж. Они открывают дверь антикварной лавки. В лавке тихо, но очень интересно. На стенах висит много старинных часов. Здесь есть деревянные столы, книги, картины и каменные статуи львов. В воздухе пахнет старой бумагой и дождём.",
                "chunkedEn": "[s: Leo, Mia, Arthur, Toby, and the dog Barnaby] [v: go] [pt: downstairs.]\n[s: They] [v: go] [pt: to the first floor.]\n[s: They] [v: open] [o: the door of the antique shop.]\n[s: The shop] [v: is] [pt: quiet,] [c: but] [s: it] [v: is] [adv: very] [pt: interesting.]\n[w: There] [v: are] [o: many old clocks] [pt: on the walls.]\n[w: There] [v: are] [o: wood tables, books, paintings, and stone statues of lions.]\n[s: The air] [v: has] [o: a smell of old paper and rain.]"
            },
            {
                "speaker": "arthur",
                "en": "\"Look at the floor,\" Leo says in a quiet voice. Leo takes his flashlight. He uses the flashlight. In the back of the shop, there is a broken window. Many small pieces of glass are on the floor. Cold wind and rain come in through the hole. Arthur looks at the window. Arthur is not happy. \"The thief came in through this window,\" Arthur says. Arthur closes the window.",
                "ru": "«Посмотрите на пол», — говорит Лео тихим голосом. Лео берёт свой фонарик. Он использует фонарик. В глубине лавки — разбитое окно. На полу лежит много мелких осколков стекла. Холодный ветер и дождь проникают внутрь через дыру. Артур смотрит на окно. Артур расстроен. «Вор проник внутрь через это окно», — говорит Артур. Артур закрывает окно.",
                "chunkedEn": "[v: \"Look] [pt: at the floor,\"] [s: Leo] [v: says] [pt: in a quiet voice.]\n[s: Leo] [v: takes] [o: his flashlight.]\n[s: He] [v: uses] [o: the flashlight.]\n[pt: In the back of the shop,] [w: there] [v: is] [o: a broken window.]\n[s: Many small pieces of glass] [v: are] [pt: on the floor.]\n[s: Cold wind and rain] [v: come in] [pt: through the hole.]\n[s: Arthur] [v: looks] [pt: at the window.]\n[s: Arthur] [v: is not] [pt: happy.]\n[s: \"The thief] [v: came in] [pt: through this window,\"] [s: Arthur] [v: says.]\n[s: Arthur] [v: closes] [o: the window.]"
            },
            {
                "speaker": "mia",
                "en": "Mia takes her smartphone. She takes photographs of the window and the glass. \"Be careful, everyone. Do not touch the glass. There can be fingerprints on it,\" Mia explains. Mia puts her smartphone in her pocket. She looks down at the floor. Near the wood table, she sees something. \"Leo, look here! A footprint!\" Leo walks to the table. He uses his light. It is a big, wet boot footprint.",
                "ru": "Миа достаёт свой смартфон. Она делает фотографии окна и стекла. «Осторожнее, все. Не трогайте стекло. На нём могут быть отпечатки пальцев», — объясняет Миа. Миа кладёт смартфон в карман. Она смотрит вниз на пол. Возле деревянного стола она кое-что видит. «Лео, посмотри сюда! След ноги!» Лео подходит к столу. Он светит фонарём. Это большой, мокрый след от сапога.",
                "chunkedEn": "[s: Mia] [v: takes] [o: her smartphone.]\n[s: She] [v: takes] [o: photographs of the window and the glass.]\n[v: \"Be] [pt: careful,] [s: everyone.]\n[v: Do not touch] [o: the glass.]\n[w: There] [v: can be] [o: fingerprints] [pt: on it,\"] [s: Mia] [v: explains.]\n[s: Mia] [v: puts] [o: her smartphone] [pt: in her pocket.]\n[s: She] [v: looks down] [pt: at the floor.]\n[pt: Near the wood table,] [s: she] [v: sees] [o: something.]\n[o: \"Leo,] [v: look] [pt: here!] [s: A footprint!\"]\n[s: Leo] [v: walks] [pt: to the table.]\n[s: He] [v: uses] [o: his light.]\n[s: It] [v: is] [o: a big, wet boot footprint.]"
            },
            {
                "speaker": "toby",
                "en": "Barnaby the dog runs to the shelf. He stops and looks at the floor. Toby runs to his dog. \"Good boy, Barnaby! What is it?\" Toby asks. Toby sits near Barnaby. He is happy. Leo looks near the feet of the dog. Under the shelf, there is a small piece of blue paper. Leo puts on white gloves. He takes the paper. There is a different number on the blue note: 7-4-2. \"This note is important evidence,\" Leo says. \"We must have it.\" Leo puts the blue note in his pocket.",
                "ru": "Пёс Барнаби бежит к полке. Он останавливается и смотрит на пол. Тоби бежит к своей собаке. «Хороший мальчик, Барнаби! Что там?» — спрашивает Тоби. Тоби садится рядом с Барнаби. Он счастлив. Лео смотрит возле лап собаки. Под полкой лежит маленький обрывок синей бумаги. Лео надевает белые перчатки. Он берёт бумагу. На синей записке другой номер: 7-4-2. «Эта записка — важная улика», — говорит Лео. «Она должна быть у нас». Лео кладёт синюю записку в карман.",
                "chunkedEn": "[s: Barnaby the dog] [v: runs] [pt: to the shelf.]\n[s: He] [v: stops and looks] [pt: at the floor.]\n[s: Toby] [v: runs] [pt: to his dog.]\n[o: \"Good boy, Barnaby!] [o: What] [v: is] [s: it?\"] [s: Toby] [v: asks.]\n[s: Toby] [v: sits] [pt: near Barnaby.]\n[s: He] [v: is] [pt: happy.]\n[s: Leo] [v: looks] [pt: near the feet of the dog.]\n[pt: Under the shelf,] [w: there] [v: is] [o: a small piece of blue paper.]\n[s: Leo] [v: puts on] [o: white gloves.]\n[s: He] [v: takes] [o: the paper.]\n[w: There] [v: is] [o: a different number] [pt: on the blue note: 7-4-2.]\n[s: \"This note] [v: is] [o: important evidence,\"] [s: Leo] [v: says.]\n[s: \"We] [v: must have] [o: it.\"]\n[s: Leo] [v: puts] [o: the blue note] [pt: in his pocket.]"
            },
            {
                "speaker": "harris",
                "en": "Suddenly, the front door opens. A policeman in a blue uniform and a dark raincoat comes in. It is Policeman Harris. He is a tall, strong man with a notebook. \"Good morning, Arthur. Good morning, detectives,\" Policeman Harris says with a nice smile. \"I am here to investigate the crime. I must write the police report. Did you find evidence?\" Leo shows the photographs, the wet footprint, and the blue note to Policeman Harris. Harris writes every detail in his big notebook. Policeman Harris takes his camera. He takes a photo of the footprint too.",
                "ru": "Внезапно входная дверь открывается. Входит полицейский в синей форме и тёмном дождевике. Это полицейский Харрис. Он высокий, сильный мужчина с блокнотом. «Доброе утро, Артур. Доброе утро, детективы», — говорит полицейский Харрис с приятной улыбкой. «Я здесь, чтобы расследовать преступление. Я должен составить полицейский отчёт. Вы нашли улики?» Лео показывает полицейскому Харрису фотографии, мокрый след и синюю записку. Харрис записывает каждую деталь в свой большой блокнот. Полицейский Харрис достаёт камеру. Он также фотографирует след ноги.",
                "chunkedEn": "[adv: Suddenly,] [s: the front door] [v: opens.]\n[s: A policeman in a blue uniform and a dark raincoat] [v: comes in.]\n[s: It] [v: is] [o: Policeman Harris.]\n[s: He] [v: is] [o: a tall, strong man] [pt: with a notebook.]\n[o: \"Good morning, Arthur. Good morning, detectives,\"] [s: Policeman Harris] [v: says] [pt: with a nice smile.]\n[s: \"I] [v: am] [pt: here to investigate the crime.]\n[s: I] [v: must write] [o: the police report.]\n[v: Did] [s: you] [v: find] [o: evidence?\"]\n[s: Leo] [v: shows] [o: the photographs, the wet footprint, and the blue note] [pt: to Policeman Harris.]\n[s: Harris] [v: writes] [o: every detail] [pt: in his big notebook.]\n[s: Policeman Harris] [v: takes] [o: his camera.]\n[s: He] [v: takes] [o: a photo of the footprint] [adv: too.]"
            },
            {
                "speaker": "martha",
                "en": "Then, a sweet smell of warm bread and cookies comes into the room. Grandma Martha, the owner of the bakery across the street, walks into the antique shop. She has a warm scarf, glasses, and a bag of hot bread. \"Hello, my dear neighbours!\" Grandma Martha says. Arthur takes a chair for Grandma Martha. She sits near the table.",
                "ru": "Затем сладкий аромат тёплого хлеба и печенья проникает в комнату. Бабушка Марта, владелица пекарни через дорогу, заходит в антикварную лавку. У неё тёплый шарф, очки и сумка с горячим хлебом. «Здравствуйте, мои дорогие соседи!» — говорит бабушка Марта. Артур берёт стул для бабушки Марты. Она садится возле стола.",
                "chunkedEn": "[adv: Then,] [s: a sweet smell of warm bread and cookies] [v: comes] [pt: into the room.]\n[s: Grandma Martha, the owner of the bakery across the street,] [v: walks] [pt: into the antique shop.]\n[s: She] [v: has] [o: a warm scarf, glasses, and a bag of hot bread.]\n[o: \"Hello, my dear neighbours!\"] [s: Grandma Martha] [v: says.]\n[s: Arthur] [v: takes] [o: a chair] [pt: for Grandma Martha.]\n[s: She] [v: sits] [pt: near the table.]"
            },
            {
                "speaker": "mia",
                "en": "\"I heard something at midnight!\" Grandma Martha says. \"I looked out of my bakery window. A tall person in a dark raincoat ran into the park!\" Mia writes Martha's words in her notebook. \"That is very helpful information, Martha,\" Mia says. \"Now we have a witness and a direction!\"",
                "ru": "«Я кое-что слышала в полночь!» — говорит бабушка Марта. «Я выглянула из окна своей пекарни. Высокий человек в тёмном дождевике побежал в парк!» Миа записывает слова Марты в свой блокнот. «Это очень полезная информация, Марта», — говорит Миа. «Теперь у нас есть свидетель и направление!»",
                "chunkedEn": "[s: \"I] [v: heard] [o: something] [pt: at midnight!\"] [s: Grandma Martha] [v: says.]\n[s: \"I] [v: looked out] [pt: of my bakery window.]\n[s: A tall person in a dark raincoat] [v: ran] [pt: into the park!\"]\n[s: Mia] [v: writes] [o: Martha's words] [pt: in her notebook.]\n[s: \"That] [v: is] [o: very helpful information, Martha,\"] [s: Mia] [v: says.]\n[adv: \"Now] [s: we] [v: have] [o: a witness and a direction!\"]"
            },
            {
                "speaker": "leo",
                "en": "Grandma Martha gives bread to Toby and Mia. She gives a small piece of bread to Barnaby. Barnaby eats the bread. He is happy. Everyone says thank you to Martha. Leo looks at the map on his phone. Now Leo has a plan.",
                "ru": "Бабушка Марта даёт хлеб Тоби и Мие. Она даёт небольшой кусочек хлеба Барнаби. Барнаби ест хлеб. Он счастлив. Все говорят спасибо Марте. Лео смотрит на карту в телефоне. Теперь у Лео есть план.",
                "chunkedEn": "[s: Grandma Martha] [v: gives] [o: bread] [pt: to Toby and Mia.]\n[s: She] [v: gives] [o: a small piece of bread] [pt: to Barnaby.]\n[s: Barnaby] [v: eats] [o: the bread.]\n[s: He] [v: is] [pt: happy.]\n[s: Everyone] [v: says] [o: thank you] [pt: to Martha.]\n[s: Leo] [v: looks] [pt: at the map] [pt: on his phone.]\n[adv: Now] [s: Leo] [v: has] [o: a plan.]"
            }
        ],
        "quiz": {
            "question": "What did Grandma Martha see at midnight?",
            "options": [
                "A tall person in a dark raincoat running into the park",
                "A thief stealing a bicycle near the shop",
                "A policeman writing a report in the bakery"
            ],
            "correctIndex": 0,
            "rewardXp": 538
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "Arthur's Antique Shop",
        "locationRu": "Антикварная лавка Артура"
    },
    {
        "id": "det-ch-3",
        "campaignId": "detective",
        "number": 3,
        "actId": 101,
        "titleEn": "The Footprints in the Park",
        "titleRu": "Следы в парке",
        "rewardXp": 494,
        "audioDir": "det_ch_3",
        "involvedHeroes": [
            "leo",
            "toby",
            "mia",
            "sam"
        ],
        "paragraphs": [
            {
                "speaker": "leo",
                "en": "Leo, Mia, Toby, and the dog Barnaby leave the antique shop. They go out to Elm Street. The heavy rain finishes, but the street is still grey and has water on it. The sky is grey. Small clouds move fast. Cold wind moves the leaves on the tall trees. Across the street, there is a big green park with stone paths, wooden chairs, and old trees.",
                "ru": "Лео, Миа, Тоби и пёс Барнаби выходят из антикварной лавки. Они выходят на Элм-стрит. Сильный дождь прекращается, но улица всё ещё серая и на ней вода. Небо серое. Маленькие облака быстро плывут. Холодный ветер колышет листья на высоких деревьях. Через дорогу находится большой зелёный парк с каменными дорожками, деревянными стульями и старыми деревьями.",
                "chunkedEn": "[s: Leo, Mia, Toby, and the dog Barnaby] [v: leave] [o: the antique shop.]\n[s: They] [v: go out] [pt: to Elm Street.]\n[s: The heavy rain] [v: finishes,] [c: but] [s: the street] [v: is still] [pt: grey and has water on it.]\n[s: The sky] [v: is] [pt: grey.]\n[s: Small clouds] [v: move] [adv: fast.]\n[s: Cold wind] [v: moves] [o: the leaves on the tall trees.]\n[pt: Across the street,] [w: there] [v: is] [o: a big green park] [pt: with stone paths, wooden chairs, and old trees.]"
            },
            {
                "speaker": "toby",
                "en": "\"Barnaby, come here, good boy!\" Leo says. Leo shows the blue paper note and the silver key to the dog. Barnaby smells the silver key with his nose. Barnaby is happy. He runs fast! He has the smell. The good dog runs across the street and goes into the park. Toby rides his red bicycle behind Barnaby. Leo and Mia walk fast on the stone path.",
                "ru": "«Барнаби, иди сюда, хороший мальчик!» — говорит Лео. Лео показывает собаке синюю бумажную записку и серебряный ключ. Барнаби нюхает серебряный ключ своим носом. Барнаби счастлив. Он быстро бежит! Он взял след. Славный пёс перебегает через улицу и направляется в парк. Тоби едет на своём красном велосипеде за Барнаби. Лео и Миа быстро идут по каменной дорожке.",
                "chunkedEn": "[o: \"Barnaby, come here, good boy!\"] [s: Leo] [v: says.]\n[s: Leo] [v: shows] [o: the blue paper note and the silver key] [pt: to the dog.]\n[s: Barnaby] [v: smells] [o: the silver key] [pt: with his nose.]\n[s: Barnaby] [v: is] [pt: happy.]\n[s: He] [v: runs] [adv: fast!]\n[s: He] [v: has] [o: the smell.]\n[s: The good dog] [v: runs] [pt: across the street] [c: and] [v: goes] [pt: into the park.]\n[s: Toby] [v: rides] [o: his red bicycle] [pt: behind Barnaby.]\n[s: Leo and Mia] [v: walk fast] [pt: on the stone path.]"
            },
            {
                "speaker": "toby",
                "en": "The park is quiet in the morning. Yellow and orange leaves are on the green grass. Birds sing in the trees. Barnaby is a good dog. He helps Leo every day. Barnaby runs near the tall tree where Toby found the silver key. The dog waits. He smells the ground. \"Look, Leo!\" Toby calls from his bicycle. \"There are more footprints on the ground near the tree!\"",
                "ru": "В парке тихо утром. Жёлтые и оранжевые листья лежат на зелёной траве. Птицы поют на деревьях. Барнаби — хорошая собака. Он помогает Лео каждый день. Барнаби бежит возле высокого дерева, где Тоби нашёл серебряный ключ. Пёс ждёт. Он нюхает землю. «Смотри, Лео!» — кричит Тоби со своего велосипеда. «На земле возле дерева есть ещё следы!»",
                "chunkedEn": "[s: The park] [v: is] [pt: quiet in the morning.]\n[s: Yellow and orange leaves] [v: are] [pt: on the green grass.]\n[s: Birds] [v: sing] [pt: in the trees.]\n[s: Barnaby] [v: is] [o: a good dog.]\n[s: He] [v: helps] [o: Leo] [adv: every day.]\n[s: Barnaby] [v: runs] [pt: near the tall tree where Toby found the silver key.]\n[s: The dog] [v: waits.]\n[s: He] [v: smells] [o: the ground.]\n[o: \"Look, Leo!\"] [s: Toby] [v: calls] [pt: from his bicycle.]\n[w: \"There] [v: are] [o: more footprints] [pt: on the ground near the tree!\"]"
            },
            {
                "speaker": "leo",
                "en": "Leo and Mia come to the tree. Leo looks at the footprint. \"It is big. It is the same big footprint from Arthur's shop,\" Leo explains. Mia takes a photograph with her smartphone. Next to the footprints, Mia finds more evidence. \"A bicycle or a small motorcycle was here too,\" Mia says.",
                "ru": "Лео и Миа подходят к дереву. Лео смотрит на след. «Он большой. Это тот самый большой след из лавки Артура», — объясняет Лео. Миа делает фотографию на свой смартфон. Рядом со следами ног Миа находит ещё одну улику. «Велосипед или маленький мотоцикл тоже был здесь», — говорит Миа.",
                "chunkedEn": "[s: Leo and Mia] [v: come] [pt: to the tree.]\n[s: Leo] [v: looks] [pt: at the footprint.]\n[s: \"It] [v: is] [pt: big.]\n[s: It] [v: is] [o: the same big footprint] [pt: from Arthur's shop,\"] [s: Leo] [v: explains.]\n[s: Mia] [v: takes] [o: a photograph] [pt: with her smartphone.]\n[pt: Next to the footprints,] [s: Mia] [v: finds] [o: more evidence.]\n[s: \"A bicycle or a small motorcycle] [v: was] [pt: here] [adv: too,\"] [s: Mia] [v: says.]"
            },
            {
                "speaker": "sam",
                "en": "Barnaby runs on the path to the old stone statue in the center of the park. Near the statue, there is a small cafe. It has red tables and white chairs. The cafe smells nice. A young man in a white uniform is cleaning the tables. It is Sam, the waiter at the cafe. Sam sees the detectives and smiles. \"Good morning! Can I help you?\" Sam asks in a nice voice.",
                "ru": "Барнаби бежит по дорожке к старой каменной статуе в центре парка. Возле статуи находится небольшое кафе. В нём красные столы и белые стулья. В кафе приятно пахнет. Молодой человек в белой форме убирает столы. Это Сэм, официант в кафе. Сэм видит детективов и улыбается. «Доброе утро! Могу я вам помочь?» — спрашивает Сэм приятным голосом.",
                "chunkedEn": "[s: Barnaby] [v: runs] [pt: on the path to the old stone statue in the center of the park.]\n[pt: Near the statue,] [w: there] [v: is] [o: a small cafe.]\n[s: It] [v: has] [o: red tables and white chairs.]\n[s: The cafe] [v: smells] [pt: nice.]\n[s: A young man in a white uniform] [v: is cleaning] [o: the tables.]\n[s: It] [v: is] [o: Sam, the waiter at the cafe.]\n[s: Sam] [v: sees] [o: the detectives] [c: and] [v: smiles.]\n[o: \"Good morning! Can I help you?\"] [s: Sam] [v: asks] [pt: in a nice voice.]"
            },
            {
                "speaker": "sam",
                "en": "\"Good morning, Sam,\" Leo says. Leo shows his detective card. \"We are investigating a crime from last night. Did you see a tall person in a dark raincoat in the park?\" Sam thinks for a moment. He takes his white cup of coffee. \"Yes, I did! Early this morning, at six o'clock, a tall person in a dark raincoat was near the statue. He had a heavy black bag in his hands. He drank black tea here. After, he left a small card under that chair.\" Leo writes notes in his notebook.",
                "ru": "«Доброе утро, Сэм», — говорит Лео. Лео показывает своё удостоверение детектива. «Мы расследуем вчерашнее ночное преступление. Вы видели в парке высокого человека в тёмном дождевике?» Сэм задумывается на секунду. Он берёт свою белую чашку с кофе. «Да, видел! Рано утром, в шесть часов, высокий человек в тёмном дождевике был возле статуи. В руках у него была тяжёлая чёрная сумка. Он пил здесь чёрный чай. После этого он оставил маленькую карточку под тем стулом». Лео делает записи в своём блокноте.",
                "chunkedEn": "[o: \"Good morning, Sam,\"] [s: Leo] [v: says.]\n[s: Leo] [v: shows] [o: his detective card.]\n[s: \"We] [v: are investigating] [o: a crime] [pt: from last night.]\n[v: Did] [s: you] [v: see] [o: a tall person in a dark raincoat] [pt: in the park?\"]\n[s: Sam] [v: thinks] [pt: for a moment.]\n[s: He] [v: takes] [o: his white cup of coffee.]\n[s: \"Yes, I] [v: did!]\n[adv: Early this morning,] [pt: at six o'clock,] [s: a tall person in a dark raincoat] [v: was] [pt: near the statue.]\n[s: He] [v: had] [o: a heavy black bag] [pt: in his hands.]\n[s: He] [v: drank] [o: black tea] [pt: here.]\n[adv: After,] [s: he] [v: left] [o: a small card] [pt: under that chair.\"]\n[s: Leo] [v: writes] [o: notes] [pt: in his notebook.]"
            },
            {
                "speaker": "mia",
                "en": "Mia walks to the green wooden chair. Under the chair, in the grass, Mia finds a small card. It is a blue keycard with the word Harbor on it. Mia is happy. This is good evidence. \"Look, Leo! A keycard to the old Harbor building!\" Mia says with big eyes.",
                "ru": "Миа подходит к зелёному деревянному стулу. Под стулом, в траве, Миа находит маленькую карточку. Это синяя ключ-карта с надписью «Harbor». Миа рада. Это отличная улика. «Смотри, Лео! Ключ-карта от старого здания в гавани!» — говорит Миа с широко раскрытыми глазами.",
                "chunkedEn": "[s: Mia] [v: walks] [pt: to the green wooden chair.]\n[pt: Under the chair, in the grass,] [s: Mia] [v: finds] [o: a small card.]\n[s: It] [v: is] [o: a blue keycard with the word Harbor on it.]\n[s: Mia] [v: is] [pt: happy.]\n[s: This] [v: is] [o: good evidence.]\n[o: \"Look, Leo! A keycard] [pt: to the old Harbor building!\"] [s: Mia] [v: says] [pt: with big eyes.]"
            },
            {
                "speaker": "leo",
                "en": "Leo looks at Sam and smiles. \"Thank you, Sam. That is great information.\" Leo looks at Toby and Mia. \"Our thief went to the Harbor. Come, we go now!\"",
                "ru": "Лео смотрит на Сэма и улыбается. «Спасибо, Сэм. Это отличная информация». Лео смотрит на Тоби и Мию. «Наш вор направился в Гавань. Идём, мы отправляемся прямо сейчас!»",
                "chunkedEn": "[s: Leo] [v: looks] [pt: at Sam] [c: and] [v: smiles.]\n[o: \"Thank you, Sam.] [s: That] [v: is] [o: great information.\"]\n[s: Leo] [v: looks] [pt: at Toby and Mia.]\n[s: \"Our thief] [v: went] [pt: to the Harbor.]\n[v: Come,] [s: we] [v: go] [adv: now!\"]"
            }
        ],
        "quiz": {
            "question": "What did Mia find under the chair in the park?",
            "options": [
                "A blue keycard to the Harbor building",
                "A gold pocket watch with a note",
                "A yellow bicycle"
            ],
            "correctIndex": 0,
            "rewardXp": 494
        },
        "backgroundImg": "images/backgrounds/bg_forest.jpg",
        "locationEn": "Elm Street Park",
        "locationRu": "Парк на Элм-стрит"
    },
    {
        "id": "det-ch-4",
        "campaignId": "detective",
        "number": 4,
        "actId": 101,
        "titleEn": "The Old Harbor Warehouse",
        "titleRu": "Старый склад в гавани",
        "rewardXp": 549,
        "audioDir": "det_ch_4",
        "involvedHeroes": [
            "leo",
            "mia",
            "toby",
            "gordon"
        ],
        "paragraphs": [
            {
                "speaker": "leo",
                "en": "Leo, Mia, Toby, and the dog Barnaby go towards New Haven Harbor. The sky is grey. The wind is cold. It comes from the sea. Soon they see the water, big white ships, and tall towers. Big grey buildings stand near the water. Toby rides his red bicycle next to Leo. Barnaby smells the fresh sea air. Toby stops his bicycle near the building. He looks at the tall ships on the water. Mia carries a small notebook and a pen.",
                "ru": "Лео, Миа, Тоби и пёс Барнаби направляются к гавани Нью-Хейвена. Небо серое. Ветер холодный. Он дует с моря. Вскоре они видят воду, большие белые корабли и высокие башни. Большие серые здания стоят у воды. Тоби едет на своём красном велосипеде рядом с Лео. Барнаби вдыхает свежий морской воздух. Тоби останавливает велосипед возле здания. Он смотрит на высокие корабли на воде. Миа несёт маленький блокнот и ручку.",
                "chunkedEn": "[s: Leo, Mia, Toby, and the dog Barnaby] [v: go] [pt: towards New Haven Harbor.]\n[s: The sky] [v: is] [pt: grey.]\n[s: The wind] [v: is] [pt: cold.]\n[s: It] [v: comes] [pt: from the sea.]\n[adv: Soon] [s: they] [v: see] [o: the water, big white ships, and tall towers.]\n[s: Big grey buildings] [v: stand] [pt: near the water.]\n[s: Toby] [v: rides] [o: his red bicycle] [pt: next to Leo.]\n[s: Barnaby] [v: smells] [o: the fresh sea air.]\n[s: Toby] [v: stops] [o: his bicycle] [pt: near the building.]\n[s: He] [v: looks] [pt: at the tall ships on the water.]\n[s: Mia] [v: carries] [o: a small notebook and a pen.]"
            },
            {
                "speaker": "mia",
                "en": "\"Here is Building Number Ten,\" Mia says. They stand in front of a big grey building near the harbor. There is a heavy metal door with a small lock. Mia takes the blue keycard from her pocket. She touches the keycard to the door. The green light is on, and the door opens. Leo has the flashlight in his hand. The team walks into the building slowly.",
                "ru": "«Вот здание номер десять», — говорит Миа. Они стоят перед большим серым зданием возле гавани. Здесь тяжёлая металлическая дверь с маленьким замком. Миа достаёт синюю ключ-карту из кармана. Она прикладывает ключ-карту к двери. Загорается зелёный свет, и дверь открывается. У Лео в руке фонарик. Команда медленно входит в здание.",
                "chunkedEn": "[o: \"Here is Building Number Ten,\"] [s: Mia] [v: says.]\n[s: They] [v: stand] [pt: in front of a big grey building near the harbor.]\n[w: There] [v: is] [o: a heavy metal door] [pt: with a small lock.]\n[s: Mia] [v: takes] [o: the blue keycard] [pt: from her pocket.]\n[s: She] [v: touches] [o: the keycard] [pt: to the door.]\n[s: The green light] [v: is] [pt: on,] [c: and] [s: the door] [v: opens.]\n[s: Leo] [v: has] [o: the flashlight] [pt: in his hand.]\n[s: The team] [v: walks] [pt: into the building slowly.]"
            },
            {
                "speaker": "toby",
                "en": "\"Be quiet, everyone,\" Leo says quietly. Leo takes his bright flashlight. They walk into the building. The air inside is cold. It smells of wood, salt, and old metal. Tall boxes of wood stand in groups. The boxes are big and heavy. The boxes are old and new. Barnaby walks slowly next to Leo. He is quiet. Toby helps Leo. He looks at the boxes.",
                "ru": "«Тише, все», — тихо говорит Лео. Лео берёт свой яркий фонарик. Они входят в здание. Воздух внутри холодный. Он пахнет деревом, солью и старым металлом. Высокие деревянные ящики стоят группами. Ящики большие и тяжёлые. Ящики старые и новые. Барнаби медленно идёт рядом с Лео. Он ведёт себя тихо. Тоби помогает Лео. Он осматривает ящики.",
                "chunkedEn": "[o: \"Be quiet, everyone,\"] [s: Leo] [v: says] [adv: quietly.]\n[s: Leo] [v: takes] [o: his bright flashlight.]\n[s: They] [v: walk] [pt: into the building.]\n[s: The air inside] [v: is] [pt: cold.]\n[s: It] [v: smells] [pt: of wood, salt, and old metal.]\n[s: Tall boxes of wood] [v: stand] [pt: in groups.]\n[s: The boxes] [v: are] [pt: big and heavy.]\n[s: The boxes] [v: are] [pt: old and new.]\n[s: Barnaby] [v: walks slowly] [pt: next to Leo.]\n[s: He] [v: is] [pt: quiet.]\n[s: Toby] [v: helps] [o: Leo.]\n[s: He] [v: looks] [pt: at the boxes.]"
            },
            {
                "speaker": "mia",
                "en": "Mia looks at the ground with her phone light. \"Leo, look at these marks!\" Mia says quietly. On the floor, there are marks from a motorcycle. The marks go into the dark building. The team follows the marks past the tall boxes of wood. Mia writes the marks in her notebook. She takes a photograph of the marks with her phone.",
                "ru": "Миа смотрит на землю, освещая её телефоном. «Лео, посмотри на эти следы!» — тихо говорит Миа. На полу видны следы от мотоцикла. Следы ведут в глубь тёмного здания. Команда идёт по следам мимо высоких деревянных ящиков. Миа записывает информацию о следах в блокнот. Она делает фотографию следов на свой телефон.",
                "chunkedEn": "[s: Mia] [v: looks] [pt: at the ground with her phone light.]\n[o: \"Leo, look at these marks!\"] [s: Mia] [v: says] [adv: quietly.]\n[pt: On the floor,] [w: there] [v: are] [o: marks from a motorcycle.]\n[s: The marks] [v: go] [pt: into the dark building.]\n[s: The team] [v: follows] [o: the marks] [pt: past the tall boxes of wood.]\n[s: Mia] [v: writes] [o: the marks] [pt: in her notebook.]\n[s: She] [v: takes] [o: a photograph of the marks] [pt: with her phone.]"
            },
            {
                "speaker": "leo",
                "en": "In the corner of the room, behind three big boxes, Barnaby stops. Leo uses his flashlight in the dark corner. A black motorcycle is there! Next to the motorcycle, on a small table, there is a dark raincoat and a cup of cold coffee. \"The thief was here a short time ago,\" Leo says. Toby looks at the raincoat. Mia looks at the cup of coffee. The coffee is cold now.",
                "ru": "В углу комнаты, за тремя большими ящиками, Барнаби останавливается. Лео светит фонариком в тёмный угол. Там стоит чёрный мотоцикл! Рядом с мотоциклом, на маленьком столике, лежит тёмный плащ и стоит чашка холодного кофе. «Вор был здесь совсем недавно», — говорит Лео. Тоби смотрит на плащ. Миа смотрит на чашку кофе. Кофе сейчас холодный.",
                "chunkedEn": "[pt: In the corner of the room, behind three big boxes,] [s: Barnaby] [v: stops.]\n[s: Leo] [v: uses] [o: his flashlight] [pt: in the dark corner.]\n[s: A black motorcycle] [v: is] [pt: there!]\n[pt: Next to the motorcycle, on a small table,] [w: there] [v: is] [o: a dark raincoat and a cup of cold coffee.]\n[s: \"The thief] [v: was] [pt: here a short time ago,\"] [s: Leo] [v: says.]\n[s: Toby] [v: looks] [pt: at the raincoat.]\n[s: Mia] [v: looks] [pt: at the cup of coffee.]\n[s: The coffee] [v: is] [pt: cold now.]"
            },
            {
                "speaker": "mia",
                "en": "Mia has white gloves on her hands. She looks at the small table. Under the cup, there is a small note. It is a ticket for the two o'clock train to Oakridge City! \"The thief wants to leave New Haven on the train,\" Mia explains happily. \"He has the music box with him!\" Mia takes a photograph of the note and the ticket. Leo also looks at the ticket.",
                "ru": "У Мии на руках белые перчатки. Она осматривает маленький столик. Под чашкой лежит небольшая записка. Это билет на двухчасовой поезд в Окридж-Сити! «Вор хочет уехать из Нью-Хейвена на поезде», — радостно объясняет Миа. «Музыкальная шкатулка с ним!» Миа фотографирует записку и билет. Лео тоже смотрит на билет.",
                "chunkedEn": "[s: Mia] [v: has] [o: white gloves] [pt: on her hands.]\n[s: She] [v: looks] [pt: at the small table.]\n[pt: Under the cup,] [w: there] [v: is] [o: a small note.]\n[s: It] [v: is] [o: a ticket for the two o'clock train to Oakridge City!]\n[s: \"The thief] [v: wants to leave] [o: New Haven] [pt: on the train,\"] [s: Mia] [v: explains] [adv: happily.]\n[s: \"He] [v: has] [o: the music box] [pt: with him!\"]\n[s: Mia] [v: takes] [o: a photograph of the note and the ticket.]\n[s: Leo] [adv: also] [v: looks] [pt: at the ticket.]"
            },
            {
                "speaker": "gordon",
                "en": "Someone comes into the building. An old man with a grey cap and a warm coat walks in. It is Captain Gordon, a worker at the harbor. Captain Gordon is a tall man. He is nice. \"Who is here?\" Captain Gordon says in a big voice. Leo shows his detective card. Leo explains everything.",
                "ru": "Кто-то входит в здание. Заходит пожилой мужчина в серой кепке и тёплом пальто. Это капитан Гордон, рабочий в гавани. Капитан Гордон — высокий мужчина. Он доброжелательный. «Кто здесь?» — громким голосом спрашивает капитан Гордон. Лео показывает своё удостоверение детектива. Лео всё объясняет.",
                "chunkedEn": "[s: Someone] [v: comes] [pt: into the building.]\n[s: An old man with a grey cap and a warm coat] [v: walks in.]\n[s: It] [v: is] [o: Captain Gordon, a worker at the harbor.]\n[s: Captain Gordon] [v: is] [o: a tall man.]\n[s: He] [v: is] [pt: nice.]\n[o: \"Who is here?\"] [s: Captain Gordon] [v: says] [pt: in a big voice.]\n[s: Leo] [v: shows] [o: his detective card.]\n[s: Leo] [v: explains] [o: everything.]"
            },
            {
                "speaker": "leo",
                "en": "Captain Gordon looks at Leo. \"Ah, detectives! Ten minutes ago, a young man with a black backpack took a taxi from the harbor. He said: 'To Central Train Station, please!' You can find him at the station!\" Leo listens. Mia writes the information in her notebook. \"Thank you, Captain Gordon!\" Leo says. Leo looks at his watch. \"It is half past one. We have a little time. To Central Train Station!\" The team is ready. They walk fast to the taxi.",
                "ru": "Капитан Гордон смотрит на Лео. «А, детективы! Десять минут назад молодой человек с чёрным рюкзаком взял такси от гавани. Он сказал: \"На Центральный вокзал, пожалуйста!\" Вы можете найти его на вокзале!» Лео слушает. Миа записывает информацию в свой блокнот. «Спасибо, капитан Гордон!» — говорит Лео. Лео смотрит на часы. «Сейчас половина второго. У нас немного времени. На Центральный вокзал!» Команда готова. Они быстро идут к такси.",
                "chunkedEn": "[s: Captain Gordon] [v: looks] [pt: at Leo.]\n[o: \"Ah, detectives! Ten minutes ago, a young man with a black backpack] [v: took] [o: a taxi] [pt: from the harbor.]\n[s: He] [v: said]: [o: 'To Central Train Station, please!']\n[s: You] [v: can find] [o: him] [pt: at the station!\"]\n[s: Leo] [v: listens.]\n[s: Mia] [v: writes] [o: the information] [pt: in her notebook.]\n[o: \"Thank you, Captain Gordon!\"] [s: Leo] [v: says.]\n[s: Leo] [v: looks] [pt: at his watch.]\n[s: \"It] [v: is] [pt: half past one.]\n[s: We] [v: have] [o: a little time.]\n[pt: To Central Train Station!\"]\n[s: The team] [v: is] [pt: ready.]\n[s: They] [v: walk fast] [pt: to the taxi.]"
            }
        ],
        "quiz": {
            "question": "Where is the thief going with the stolen music box?",
            "options": [
                "To the Central Train Station to take the two o'clock train",
                "To the bakery to buy bread from Grandma Martha",
                "To the antique shop to return the key"
            ],
            "correctIndex": 0,
            "rewardXp": 549
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "New Haven Harbor Warehouse",
        "locationRu": "Склад в гавани Нью-Хейвена"
    }
,
    {
        "id": "det-ch-5",
        "campaignId": "detective",
        "number": 5,
        "actId": 101,
        "titleEn": "The Rush to Central Station",
        "titleRu": "Погоня на Центральный вокзал",
        "rewardXp": 432,
        "audioDir": "det_ch_5",
        "involvedHeroes": [
            "leo",
            "harris",
            "mia",
            "toby"
        ],
        "paragraphs": [
            {
                "speaker": "leo",
                "en": "The yellow taxi stops in front of Central Train Station. It is quarter to two. The sky is grey and the wind is cold. The station is a big and old stone building. It has a big clock on top. Hundreds of people walk near the doors. They have heavy suitcases and bags. People talk. Leo, Mia, Toby, and Barnaby quickly leave the taxi.",
                "ru": "Жёлтое такси останавливается перед Центральным вокзалом. Сейчас без четверти два. Вокзал — это большое и старое каменное здание. Наверху у него большие часы. Сотни людей идут возле дверей. У них тяжёлые чемоданы и сумки. Люди разговаривают. Лео, Миа, Тоби и Барнаби быстро выходят из такси.",
                "chunkedEn": "[s: The yellow taxi] [v: stops] [pt: in front of Central Train Station.]\n[s: It] [v: is] [pt: quarter to two.]\n[s: The sky] [v: is] [pt: grey] [c: and] [s: the wind] [v: is] [pt: cold.]\n[s: The station] [v: is] [o: a big and old stone building.]\n[s: It] [v: has] [o: a big clock] [pt: on top.]\n[s: Hundreds of people] [v: walk] [pt: near the doors.]\n[s: They] [v: have] [o: heavy suitcases and bags.]\n[s: People] [v: talk.]\n[s: Leo, Mia, Toby, and Barnaby] [adv: quickly] [v: leave] [o: the taxi.]"
            },
            {
                "speaker": "harris",
                "en": "At the main door of the station, Police Officer Harris waits for them. He has his blue police uniform. He has a phone in his hand. \"Good afternoon, detectives!\" Officer Harris says in a strong voice. \"Captain Gordon called the police station. I am here to help you find the thief! What is the plan?\"",
                "ru": "У главных дверей вокзала их ждёт офицер полиции Харрис. На нём синяя полицейская форма. В руке у него телефон. «Добрый день, детективы!» — говорит офицер Харрис громким голосом. «Капитан Гордон позвонил в полицейский участок. Я здесь, чтобы помочь вам найти вора! Какой план?»",
                "chunkedEn": "[pt: At the main door of the station,] [s: Police Officer Harris] [v: waits] [pt: for them.]\n[s: He] [v: has] [o: his blue police uniform.]\n[s: He] [v: has] [o: a phone] [pt: in his hand.]\n[o: \"Good afternoon, detectives!\"] [s: Officer Harris] [v: says] [pt: in a strong voice.]\n[s: \"Captain Gordon] [v: called] [o: the police station.]\n[s: I] [v: am] [pt: here to help you find the thief!]\n[o: What] [v: is] [s: the plan?\"]"
            },
            {
                "speaker": "mia",
                "en": "Mia looks at her watch, then at the station clock. \"The train to Oakridge City leaves at two o'clock from Platform Four,\" Mia says quickly. \"The train leaves soon!\" Leo agrees quickly. \"Everyone, let's go to Platform Four! Look now!\" Toby smiles.",
                "ru": "Миа смотрит на свои часы, затем на вокзальные часы. «Поезд в Окридж-Сити отправляется в два часа с четвёртой платформы», — быстро говорит Миа. «Поезд скоро уходит!» Лео быстро соглашается. «Все, идём на четвёртую платформу! Смотрите внимательно прямо сейчас!» Тоби улыбается.",
                "chunkedEn": "[s: Mia] [v: looks] [pt: at her watch,] [adv: then] [pt: at the station clock.]\n[s: \"The train to Oakridge City] [v: leaves] [pt: at two o'clock] [pt: from Platform Four,\"] [s: Mia] [v: says] [adv: quickly.]\n[s: \"The train] [v: leaves] [adv: soon!\"] [s: Leo] [v: agrees] [adv: quickly.]\n[s: \"Everyone,] [v: let's go] [pt: to Platform Four!]\n[v: Look] [adv: now!\"] [s: Toby] [v: smiles.]"
            },
            {
                "speaker": "toby",
                "en": "They run inside the big hall. Barnaby the dog runs in front. His nose is down on the clean floor. Near the door, Barnaby stops. He smells a newspaper on the ground. He is happy and runs to the stairs for Platform Four. Toby runs next to his dog. \"Good boy, Barnaby! He finds the way!\" Toby says with a big smile. Mia and Leo run after them.",
                "ru": "Они вбегают в большой зал. Пёс Барнаби бежит впереди. Его нос опущен к чистому полу. Возле двери Барнаби останавливается. Он нюхает газету на полу. Он радуется и бежит к лестнице на четвёртую платформу. Тоби бежит рядом со своей собакой. «Хороший мальчик, Барнаби! Он находит дорогу!» — говорит Тоби с широкой улыбкой. Миа и Лео бегут за ними.",
                "chunkedEn": "[s: They] [v: run] [pt: inside the big hall.]\n[s: Barnaby the dog] [v: runs] [pt: in front.]\n[s: His nose] [v: is] [adv: down] [pt: on the clean floor.]\n[pt: Near the door,] [s: Barnaby] [v: stops.]\n[s: He] [v: smells] [o: a newspaper] [pt: on the ground.]\n[s: He] [v: is] [pt: happy] [c: and] [v: runs] [pt: to the stairs for Platform Four.]\n[s: Toby] [v: runs] [pt: next to his dog.]\n[o: \"Good boy, Barnaby!] [s: He] [v: finds] [o: the way!\"] [s: Toby] [v: says] [pt: with a big smile.]\n[s: Mia and Leo] [v: run] [pt: after them.]"
            },
            {
                "speaker": "leo",
                "en": "The team climbs the stone stairs to Platform Four. A long silver train stands there. The air around it is cold. Passengers put their bags into the train. A ticket worker in a blue hat checks tickets near the first door. The big station clock shows five minutes to two. Leo looks at Mia. Mia looks at Toby. Everyone is ready.",
                "ru": "Команда поднимается по каменным ступенькам на четвёртую платформу. Там стоит длинный серебристый поезд. Воздух вокруг холодный. Пассажиры заносят свои сумки в поезд. Контролёр в синей фуражке проверяет билеты возле первой двери. Большие вокзальные часы показывают без пяти два. Лео смотрит на Мию. Миа смотрит на Тоби. Все готовы.",
                "chunkedEn": "[s: The team] [v: climbs] [o: the stone stairs] [pt: to Platform Four.]\n[s: A long silver train] [v: stands] [pt: there.]\n[s: The air around it] [v: is] [pt: cold.]\n[s: Passengers] [v: put] [o: their bags] [pt: into the train.]\n[s: A ticket worker in a blue hat] [v: checks] [o: tickets] [pt: near the first door.]\n[s: The big station clock] [v: shows] [o: five minutes to two.]\n[s: Leo] [v: looks] [pt: at Mia.]\n[s: Mia] [v: looks] [pt: at Toby.]\n[s: Everyone] [v: is] [pt: ready.]"
            },
            {
                "speaker": "toby",
                "en": "Leo walks fast along the platform. He looks at every passenger. Near the last door of the train, Toby shows with his finger into the crowd. \"Uncle Leo, look there!\" Toby says with a big voice. \"Near the blue door! A young man with a black backpack and blue jeans!\"",
                "ru": "Лео быстро идёт по платформе. Он смотрит на каждого пассажира. Возле последней двери поезда Тоби указывает пальцем в толпу. «Дядя Лео, посмотри туда!» — громко говорит Тоби. «Возле синей двери! Молодой человек с чёрным рюкзаком и в синих джинсах!»",
                "chunkedEn": "[s: Leo] [v: walks] [adv: fast] [pt: along the platform.]\n[s: He] [v: looks] [pt: at every passenger.]\n[pt: Near the last door of the train,] [s: Toby] [v: shows] [pt: with his finger into the crowd.]\n[o: \"Uncle Leo, look there!\"] [s: Toby] [v: says] [pt: with a big voice.]\n[pt: \"Near the blue door!] [s: A young man with a black backpack and blue jeans!\"]"
            },
            {
                "speaker": "mia",
                "en": "The man turns around for a second. He looks afraid. In his right hand, he holds a heavy bag. The bag has the brown wood corner of the antique music box! Mia takes a photo with her smartphone. \"That is our suspect! He has Arthur's music box!\" Mia says. Toby holds Barnaby close.",
                "ru": "Мужчина оборачивается на секунду. Он выглядит испуганным. В правой руке он держит тяжёлую сумку. Из сумки виден коричневый деревянный угол старинной музыкальной шкатулки! Миа делает снимок на свой смартфон. «Это наш подозреваемый! У него музыкальная шкатулка Артура!» — говорит Миа. Тоби держит Барнаби рядом.",
                "chunkedEn": "[s: The man] [v: turns around] [pt: for a second.]\n[s: He] [v: looks] [pt: afraid.]\n[pt: In his right hand,] [s: he] [v: holds] [o: a heavy bag.]\n[s: The bag] [v: has] [o: the brown wood corner of the antique music box!]\n[s: Mia] [v: takes] [o: a photo] [pt: with her smartphone.]\n[s: \"That] [v: is] [o: our suspect!]\n[s: He] [v: has] [o: Arthur's music box!\"] [s: Mia] [v: says.]\n[s: Toby] [v: holds] [o: Barnaby] [adv: close.]"
            },
            {
                "speaker": "harris",
                "en": "The train goes: Choo-choo! The train worker closes the doors. Officer Harris shows his police card. \"Stay where you are!\" Harris calls. Leo and Harris run to the suspect. Toby and Mia also run. Everyone starts to run fast!",
                "ru": "Поезд гудит: Чух-чух! Проводник закрывает двери. Офицер Харрис показывает своё полицейское удостоверение. «Оставайтесь на месте!» — кричит Харрис. Лео и Харрис бегут к подозреваемому. Тоби и Миа тоже бегут. Все начинают быстро бежать!",
                "chunkedEn": "[s: The train] [v: goes]: [o: Choo-choo!]\n[s: The train worker] [v: closes] [o: the doors.]\n[s: Officer Harris] [v: shows] [o: his police card.]\n[v: \"Stay] [pt: where you are!\"] [s: Harris] [v: calls.]\n[s: Leo and Harris] [v: run] [pt: to the suspect.]\n[s: Toby and Mia] [adv: also] [v: run.]\n[s: Everyone] [v: starts to run] [adv: fast!]"
            }
        ],
        "quiz": {
            "question": "What did Toby see near the blue door of the train?",
            "options": [
                "A young man with a black backpack holding the stolen music box",
                "A policeman drinking hot tea near the stairs",
                "A white ship with big flags in the harbor"
            ],
            "correctIndex": 0,
            "rewardXp": 432
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "Central Train Station",
        "locationRu": "Центральный вокзал"
    }
,
    {
        "id": "det-ch-6",
        "campaignId": "detective",
        "number": 6,
        "actId": 101,
        "titleEn": "The Music Box Mystery Solved",
        "titleRu": "Тайна шкатулки раскрыта",
        "rewardXp": 532,
        "audioDir": "det_ch_6",
        "involvedHeroes": [
            "harris",
            "leo",
            "arthur",
            "martha",
            "toby"
        ],
        "paragraphs": [
            {
                "speaker": "harris",
                "en": "Officer Harris stands in front of the young man. \"Police! Stop!\" Harris says. Leo and Mia stand next to him. The young man has a black backpack. He is afraid. \"I am sorry! Please do not take me to the police station!\" the young man says. His name is Victor. \"I took the box from the antique shop. I thought there were gold coins inside. But the box is locked. I could not open it!\"",
                "ru": "Офицер Харрис встаёт перед молодым человеком. «Полиция! Стоять!» — говорит Харрис. Лео и Миа стоят рядом с ним. У молодого человека чёрный рюкзак. Он испуган. «Простите! Пожалуйста, не забирайте меня в полицейский участок!» — говорит молодой человек. Его зовут Виктор. «Я взял шкатулку из антикварной лавки. Я думал, что внутри золотые монеты. Но шкатулка заперта. Я не смог её открыть!»",
                "chunkedEn": "[s: Officer Harris] [v: stands] [pt: in front of the young man.]\n[o: \"Police! Stop!\"] [s: Harris] [v: says.]\n[s: Leo and Mia] [v: stand] [pt: next to him.]\n[s: The young man] [v: has] [o: a black backpack.]\n[s: He] [v: is] [pt: afraid.]\n[o: \"I am sorry! Please do not take me to the police station!\"] [s: the young man] [v: says.]\n[s: His name] [v: is] [o: Victor.]\n[s: \"I] [v: took] [o: the box] [pt: from the antique shop.]\n[s: I] [v: thought] [pt: there were gold coins inside.]\n[c: But] [s: the box] [v: is locked.]\n[s: I] [v: could not open] [o: it!\"]"
            },
            {
                "speaker": "leo",
                "en": "Leo takes the bag. He opens it and looks inside. The music box is there! It is safe. The brown wood and the silver bird shine in the light. Officer Harris takes Victor's arm. \"You are coming with me to the police station, Victor,\" Harris says. Leo, Mia, Toby, and Barnaby say \"Thank you\" to Officer Harris. Then they go back to Elm Street.",
                "ru": "Лео берёт сумку. Он открывает её и заглядывает внутрь. Музыкальная шкатулка там! Она в целости и сохранности. Коричневое дерево и серебряная птица сияют на свету. Офицер Харрис берёт Виктора за руку. «Ты идёшь со мной в полицейский участок, Виктор», — говорит Харрис. Лео, Миа, Тоби и Барнаби говорят «Спасибо» офицеру Харрису. Затем они возвращаются на Элм-стрит.",
                "chunkedEn": "[s: Leo] [v: takes] [o: the bag.]\n[s: He] [v: opens] [o: it] [c: and] [v: looks] [pt: inside.]\n[s: The music box] [v: is] [pt: there!]\n[s: It] [v: is] [pt: safe.]\n[s: The brown wood and the silver bird] [v: shine] [pt: in the light.]\n[s: Officer Harris] [v: takes] [o: Victor's arm.]\n[s: \"You] [v: are coming] [pt: with me to the police station, Victor,\"] [s: Harris] [v: says.]\n[s: Leo, Mia, Toby, and Barnaby] [v: say] [o: \"Thank you\"] [pt: to Officer Harris.]\n[adv: Then] [s: they] [v: go back] [pt: to Elm Street.]"
            },
            {
                "speaker": "arthur",
                "en": "Ten minutes later, the team comes to Grandfather Arthur's antique shop. The bell on the door rings. Grandfather Arthur is near the window. He is sad. When he sees Leo with the music box, he is very happy. His eyes are full of tears. \"My music box! You found it!\" Arthur says. He hugs Leo and Mia. Toby smiles and pets Barnaby.",
                "ru": "Десять минут спустя команда приходит в антикварную лавку дедушки Артура. Колокольчик на двери звенит. Дедушка Артур сидит у окна. Он грустит. Когда он видит Лео с музыкальной шкатулкой, он очень счастлив. Его глаза полны слёз. «Моя музыкальная шкатулка! Вы нашли её!» — говорит Артур. Он обнимает Лео и Мию. Тоби улыбается и гладит Барнаби.",
                "chunkedEn": "[adv: Ten minutes later,] [s: the team] [v: comes] [pt: to Grandfather Arthur's antique shop.]\n[s: The bell on the door] [v: rings.]\n[s: Grandfather Arthur] [v: is] [pt: near the window.]\n[s: He] [v: is] [pt: sad.]\n[pt: When he sees Leo with the music box,] [s: he] [v: is] [adv: very] [pt: happy.]\n[s: His eyes] [v: are full] [pt: of tears.]\n[o: \"My music box! You found it!\"] [s: Arthur] [v: says.]\n[s: He] [v: hugs] [o: Leo and Mia.]\n[s: Toby] [v: smiles] [c: and] [v: pets] [o: Barnaby.]"
            },
            {
                "speaker": "leo",
                "en": "\"There is one more thing, Grandfather Arthur,\" Leo says with a smile. Leo has the small silver key. Toby and Barnaby found this key under the tree in the park. Arthur looks at the key. His eyes are big. \"The silver key! My grandfather made this key fifty years ago,\" Arthur says quietly. \"It opens the secret box under the music box!\"",
                "ru": "«Есть ещё кое-что, дедушка Артур», — с улыбкой говорит Лео. У Лео маленький серебряный ключ. Тоби и Барнаби нашли этот ключ под деревом в парке. Артур смотрит на ключ. Его глаза широко раскрыты. «Серебряный ключ! Мой дедушка сделал этот ключ пятьдесят лет назад», — тихо говорит Артур. «Он открывает потайной тайник под музыкальной шкатулкой!»",
                "chunkedEn": "[o: \"There is one more thing, Grandfather Arthur,\"] [s: Leo] [v: says] [pt: with a smile.]\n[s: Leo] [v: has] [o: the small silver key.]\n[s: Toby and Barnaby] [v: found] [o: this key] [pt: under the tree in the park.]\n[s: Arthur] [v: looks] [pt: at the key.]\n[s: His eyes] [v: are] [pt: big.]\n[o: \"The silver key! My grandfather made this key fifty years ago,\"] [s: Arthur] [v: says] [adv: quietly.]\n[s: \"It] [v: opens] [o: the secret box] [pt: under the music box!\"]"
            },
            {
                "speaker": "arthur",
                "en": "Arthur puts the silver key into the small lock. Click! The secret wood box opens. Inside, there is an old black-and-white photograph of Arthur's family. There is also a letter from his grandfather. Arthur reads the letter. His heart is happy. \"This letter is my family's best treasure,\" Arthur says softly.",
                "ru": "Артур вставляет серебряный ключ в маленький замок. Щёлк! Потайная деревянная коробочка открывается. Внутри лежит старая чёрно-белая фотография семьи Артура. Там также есть письмо от его дедушки. Артур читает письмо. Его сердце радуется. «Это письмо — величайшее сокровище моей семьи», — тихо говорит Артур.",
                "chunkedEn": "[s: Arthur] [v: puts] [o: the silver key] [pt: into the small lock.]\n[o: Click!]\n[s: The secret wood box] [v: opens.]\n[pt: Inside,] [w: there] [v: is] [o: an old black-and-white photograph of Arthur's family.]\n[w: There] [v: is] [adv: also] [o: a letter from his grandfather.]\n[s: Arthur] [v: reads] [o: the letter.]\n[s: His heart] [v: is] [pt: happy.]\n[s: \"This letter] [v: is] [o: my family's best treasure,\"] [s: Arthur] [v: says] [adv: softly.]"
            },
            {
                "speaker": "martha",
                "en": "Then the door opens again. Grandma Martha comes into the shop. She carries a big basket with a red cloth on top. The basket smells sweet, like hot bread and cherry pie. \"I saw you from my bakery window!\" Martha says happily. \"A great day for our town needs a warm party!\"",
                "ru": "Затем дверь снова открывается. Бабушка Марта заходит в лавку. Она несёт большую корзину, накрытую красной тканью. Из корзины доносится сладкий аромат горячего хлеба и вишнёвого пирога. «Я увидела вас из окна своей пекарни!» — радостно говорит Марта. «Такой прекрасный день для нашего городка заслуживает тёплого праздника!»",
                "chunkedEn": "[adv: Then] [s: the door] [v: opens] [adv: again.]\n[s: Grandma Martha] [v: comes] [pt: into the shop.]\n[s: She] [v: carries] [o: a big basket] [pt: with a red cloth on top.]\n[s: The basket] [v: smells] [pt: sweet, like hot bread and cherry pie.]\n[s: \"I] [v: saw] [o: you] [pt: from my bakery window!\"] [s: Martha] [v: says] [adv: happily.]\n[s: \"A great day for our town] [v: needs] [o: a warm party!\"]"
            },
            {
                "speaker": "toby",
                "en": "Everyone comes to the big table in the antique shop. Arthur winds the silver bird on the music box. A soft, sweet song begins to play. The old clocks and books listen too. They drink hot tea and eat sweet food. Toby gives a piece of sweet biscuit to Barnaby. Barnaby is happy. He wags his tail.",
                "ru": "Все собираются вокруг большого стола в антикварной лавке. Артур заводит серебряную птицу на музыкальной шкатулке. Начинает играть нежная, приятная мелодия. Старинные часы и книги словно тоже слушают её. Они пьют горячий чай и едят сладости. Тоби даёт кусочек сладкого печенья Барнаби. Барнаби счастлив. Он виляет хвостом.",
                "chunkedEn": "[s: Everyone] [v: comes] [pt: to the big table in the antique shop.]\n[s: Arthur] [v: winds] [o: the silver bird] [pt: on the music box.]\n[s: A soft, sweet song] [v: begins to play.]\n[s: The old clocks and books] [v: listen] [adv: too.]\n[s: They] [v: drink] [o: hot tea] [c: and] [v: eat] [o: sweet food.]\n[s: Toby] [v: gives] [o: a piece of sweet biscuit] [pt: to Barnaby.]\n[s: Barnaby] [v: is] [pt: happy.]\n[s: He] [v: wags] [o: his tail.]"
            },
            {
                "speaker": "leo",
                "en": "\"We are a great team,\" Mia says. She holds her cup of tea. \"Leo's smart mind, my photographs, Toby's good eyes, and Barnaby's good nose!\" Leo smiles. He looks at his happy friends. \"New Haven is safe today,\" Leo says. \"When our town needs help, the New Haven Detective Agency is always ready!\" Grandfather Arthur puts the photograph and the letter back into the secret box. He closes it carefully. \"Thank you, my friends,\" he says. \"You are very brave.\" Leo, Mia, Toby, and Barnaby say goodbye and walk home. The sun is warm. The street is quiet. It was a good day for the New Haven Detective Agency.",
                "ru": "«Мы отличная команда», — говорит Миа. Она держит свою чашку чая. «Острый ум Лео, мои фотографии, зоркие глаза Тоби и отличный нюх Барнаби!» Лео улыбается. Он смотрит на своих счастливых друзей. «Нью-Хейвен сегодня в безопасности», — говорит Лео. «Когда нашему городу нужна помощь, детективное агентство Нью-Хейвена всегда готово!» Дедушка Артур убирает фотографию и письмо обратно в потайную коробочку. Он аккуратно закрывает её. «Спасибо вам, друзья мои», — говорит он. «Вы очень смелые». Лео, Миа, Тоби и Барнаби прощаются и идут домой. Солнце тёплое. Улица тихая. Это был прекрасный день для детективного агентства Нью-Хейвена.",
                "chunkedEn": "[o: \"We are a great team,\"] [s: Mia] [v: says.]\n[s: She] [v: holds] [o: her cup of tea.]\n[o: \"Leo's smart mind, my photographs, Toby's good eyes, and Barnaby's good nose!\"]\n[s: Leo] [v: smiles.]\n[s: He] [v: looks] [pt: at his happy friends.]\n[s: \"New Haven] [v: is] [pt: safe today,\"] [s: Leo] [v: says.]\n[pt: \"When our town needs help,] [s: the New Haven Detective Agency] [v: is] [adv: always] [pt: ready!\"]\n[s: Grandfather Arthur] [v: puts] [o: the photograph and the letter back] [pt: into the secret box.]\n[s: He] [v: closes] [o: it] [adv: carefully.]\n[o: \"Thank you, my friends,\"] [s: he] [v: says.]\n[s: \"You] [v: are] [adv: very] [pt: brave.\"]\n[s: Leo, Mia, Toby, and Barnaby] [v: say] [o: goodbye] [c: and] [v: walk] [pt: home.]\n[s: The sun] [v: is] [pt: warm.]\n[s: The street] [v: is] [pt: quiet.]\n[s: It] [v: was] [o: a good day] [pt: for the New Haven Detective Agency.]"
            }
        ],
        "quiz": {
            "question": "What was hidden inside the secret box under the music box?",
            "options": [
                "An old family photograph and a letter from Arthur's grandfather",
                "A bag of gold coins and silver watches",
                "A keycard to the harbor warehouse"
            ],
            "correctIndex": 0,
            "rewardXp": 532
        },
        "backgroundImg": "images/backgrounds/bg_magic_library.jpg",
        "locationEn": "Arthur's Antique Shop",
        "locationRu": "Антикварная лавка Артура"
    }
];

const HERO_ORIGINAL_PORTRAITS = {
    "valerius": "images/characters_orig/valerius_orig.jpg",
    "astraea": "images/characters_orig/astraea_orig.jpg",
    "zephyr": "images/characters_orig/zephyr_orig.png",
    "ignis": "images/characters_orig/ignis_orig.jpg",
    "frostina": "images/characters_orig/frostina_orig.jpg",
    "thorin": "images/characters_orig/thorin_orig.png",
    "selene": "images/characters_orig/selene_orig.png",
    "oberon": "images/characters_orig/oberon_orig.jpg",
    "freya": "images/characters_orig/freya_orig.jpg",
    "eldrin": "images/characters_orig/eldrin_orig.jpg",
    "leo": "images/valerius_face.png",
    "mia": "images/characters_orig/lyra_orig.jpg",
    "arthur": "images/characters_orig/oberon_orig.jpg",
    "toby": "images/characters_orig/zephyr_orig.png",
    "martha": "images/characters_orig/freya_orig.jpg",
    "harris": "images/characters_orig/thorin_orig.png",
    "sam": "images/characters_orig/eldrin_orig.jpg",
    "gordon": "images/characters_orig/valerius_orig.jpg"
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STORY_CAMPAIGNS, STORY_ACTS, STORY_CHAPTERS, HERO_ORIGINAL_PORTRAITS };
}
