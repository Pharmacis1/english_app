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
        "locationRu": "Северное Ледяное Ущелье и Мост над Бездной"
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
        "locationRu": "Затопленный Гранитный Карьер и Заброшенный Аванпост"
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
        "locationRu": "Зал Совета Королевской Цитадели"
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
        "locationRu": "Пограничная Цитадель и Великие Врата"
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
        "locationRu": "Речная Дозорная Застава"
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
        "locationRu": "Разрушенная Часовня Света"
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
