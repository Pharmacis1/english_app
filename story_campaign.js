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
        "locationRu": "Туманные Холмы и Долина Соснового Леса"
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
        "locationRu": "Изумрудный Источник и Древняя Дубовая Роща"
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
