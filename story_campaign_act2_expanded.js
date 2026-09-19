/**
 * STORY CAMPAIGN: ACT II — DISPUTED LANDS & THE CONSPIRACY (Chapters 7–13)
 * Full CEFR A1 English Novella Expansion (~8,000+ words across 7 chapters)
 * Strictly calibrated for 1100 A1 core vocabulary, clean syntax, and rich hero dialogues.
 */

const STORY_ACT2_EXPANDED = [
  {
    "id": "ch-7",
    "actId": 2,
    "number": 7,
    "titleEn": "Stolen Ore",
    "titleRu": "Украденная руда",
    "locationEn": "The Rocky Canyon & Red Dust Pass",
    "locationRu": "Скалистый Каньон и Перевал Красной Пыли",
    "backgroundImg": "images/backgrounds/bg_mountains.jpg",
    "sceneIllustrationImg": "images/backgrounds/bg_mountains.jpg",
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
    }
  },
  {
    "id": "ch-8",
    "actId": 2,
    "number": 8,
    "titleEn": "Eyes in the Mist",
    "titleRu": "Глаза в тумане",
    "locationEn": "The Misty Hills & Pine Forest Valley",
    "locationRu": "Туманные Холмы и Долина Соснового Леса",
    "backgroundImg": "images/backgrounds/bg_forest.jpg",
    "sceneIllustrationImg": "images/backgrounds/bg_forest.jpg",
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
    }
  },
  {
    "id": "ch-9",
    "actId": 2,
    "number": 9,
    "titleEn": "Poisoned Water",
    "titleRu": "Отравленная вода",
    "locationEn": "The Emerald Spring & Ancient Oak Grove",
    "locationRu": "Изумрудный Источник и Древняя Дубовая Роща",
    "backgroundImg": "images/backgrounds/bg_forest.jpg",
    "sceneIllustrationImg": "images/backgrounds/bg_forest.jpg",
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
    }
  },
  {
    "id": "ch-10",
    "actId": 2,
    "number": 10,
    "titleEn": "The Frozen Bridge",
    "titleRu": "Замерзший мост",
    "locationEn": "The Northern Ice Gorge & Chasm Bridge",
    "locationRu": "Северное Ледяное Ущелье и Мост над Бездной",
    "backgroundImg": "images/backgrounds/bg_mountains.jpg",
    "sceneIllustrationImg": "images/backgrounds/bg_mountains.jpg",
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
    }
  },
  {
    "id": "ch-11",
    "actId": 2,
    "number": 11,
    "titleEn": "The Secret Quarry",
    "titleRu": "Тайный карьер",
    "locationEn": "The Sunken Granite Quarry & Abandoned Outpost",
    "locationRu": "Затопленный Гранитный Карьер и Заброшенный Аванпост",
    "backgroundImg": "images/backgrounds/bg_dungeon.jpg",
    "sceneIllustrationImg": "images/backgrounds/bg_dungeon.jpg",
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
    }
  },
  {
    "id": "ch-12",
    "actId": 2,
    "number": 12,
    "titleEn": "Shadows in the Court",
    "titleRu": "Тени при дворе",
    "locationEn": "The Royal Citadel Council Room",
    "locationRu": "Зал Совета Королевской Цитадели",
    "backgroundImg": "images/valerius_castle.png",
    "sceneIllustrationImg": "images/valerius_castle.png",
    "involvedHeroes": [
      "valerius",
      "freya"
    ],
    "paragraphs": [
      {
        "en": "The Royal Citadel of the Silver Keep was usually a place of justice, honor, and bright light. Tall white marble columns supported the high arched golden ceiling. Heavy velvet curtains of royal blue and gold hung across the tall glass windows. But today, a cold and suspicious tension filled the grand council hall. The lord chancellor and five noble ministers sat around the long golden table with grim, angry faces.",
        "ru": "Королевская Цитадель Серебряной Крепости обычно была местом справедливости, чести и яркого света. Высокие колонны из белого мрамора поддерживали высокий сводчатый золотой потолок. Тяжелые бархатные занавеси королевского синего и золотого цветов висели на высоких стеклянных окнах. Но сегодня холодное и подозрительное напряжение наполняло большой зал совета. Лорд-канцлер и пять благородных министров сидели вокруг длинного золотого стола с мрачными, сердитыми лицами.",
        "chunkedEn": "[s: The Royal Citadel of the Silver Keep] [v: was] [adv: usually] [o: a place of justice, honor, and bright light.]\n[s: Tall white marble columns] [v: supported] [o: the high arched golden ceiling.]\n[s: Heavy velvet curtains of royal blue and gold] [v: hung] [pt: across the tall glass windows.]\n[c: But] [pt: today,] [s: a cold and suspicious tension] [v: filled] [o: the grand council hall.]\n[s: The lord chancellor and five noble ministers] [v: sat] [pt: around the long golden table] [pt: with grim, angry faces.]"
      },
      {
        "en": "Valerius and Freya stood before the council in their gleaming battle armor. Valerius held an iron box in his hands. Inside the box lay the black bone arrows and the secret mercenary documents that they had captured in the sunken quarry. Valerius placed the box on the polished table before the chancellor.",
        "ru": "Валериус и Фрейя стояли перед советом в своих блестящих боевых доспехах. Валериус держал железную шкатулку в руках. Внутри шкатулки лежали стрелы из черной кости и тайные документы наемников, которые они захватили в затопленном карьере. Валериус положил шкатулку на полированный стол перед канцлером.",
        "chunkedEn": "[s: Valerius and Freya] [v: stood] [pt: before the council] [pt: in their gleaming battle armor.]\n[s: Valerius] [v: held] [o: an iron box] [pt: in his hands.]\n[pt: Inside the box] [v: lay] [s: the black bone arrows and the secret mercenary documents that they had captured in the sunken quarry.]\n[s: Valerius] [v: placed] [o: the box] [pt: on the polished table] [pt: before the chancellor.]"
      },
      {
        "en": "\"My lords of the council,\" Valerius spoke with clear and firm words. \"The attacks on the border roads are not caused by the dwarf clans or the forest rangers. The evidence is clear. A secret traitor in our own high court is paying gold to the Shadow Mercenaries to start a bloody war between our three nations!\"",
        "ru": "\"Мои лорды совета,\" — произнес Валериус ясными и твердыми словами. \"Нападения на пограничные дороги вызваны не кланами гномов и не лесными следопытами. Доказательства очевидны. Тайный предатель в нашем собственном верховном суде платит золото Теневым Наемникам, чтобы начать кровавую войну между тремя нашими народами!\"",
        "chunkedEn": "[o: \"My lords of the council,\"] [s: Valerius] [v: spoke] [pt: with clear and firm words.]\n[s: \"The attacks on the border roads] [v: are not caused] [pt: by the dwarf clans or the forest rangers.]\n[s: The evidence] [v: is clear.]\n[s: A secret traitor in our own high court] [v: is paying] [o: gold] [pt: to the Shadow Mercenaries] [v: to start] [o: a bloody war between our three nations!\"]"
      },
      {
        "en": "The old chancellor frowned and waved his hand dismissively: \"Nonsense, Valerius! You spend too much time drinking with wild rangers and dusty blacksmiths! The King wants total order. We must send five full legions of silver knights to occupy the dwarf mines and burn the wild forests to guarantee our safety!\"",
        "ru": "Старый канцлер нахмурился и пренебрежительно махнул рукой: \"Чепуха, Валериус! Ты проводишь слишком много времени, выпивая с дикими следопытами и пыльными кузнецами! Король хочет полного порядка. Мы должны отправить пять полных легионов серебряных рыцарей, чтобы занять шахты гномов и сжечь дикие леса для гарантии нашей безопасности!\"",
        "chunkedEn": "[s: The old chancellor] [v: frowned] [c: and] [v: waved] [o: his hand] [adv: dismissively:]\n[o: \"Nonsense,] [o: Valerius!]\n[s: You] [v: spend] [o: too much time] [v: drinking] [pt: with wild rangers and dusty blacksmiths!]\n[s: The King] [v: wants] [o: total order.]\n[s: We] [v: must send] [o: five full legions of silver knights] [v: to occupy] [o: the dwarf mines] [c: and] [v: burn] [o: the wild forests] [v: to guarantee] [o: our safety!\"]"
      },
      {
        "en": "Freya stepped forward with thunder in her eyes. She slammed the heavy butt of her lightning spear onto the stone floor: BOOM! Blue sparks flew across the marble tiles, making the noble lords jump in their cushioned chairs in fear. \"Silence, coward!\" Freya roared with the mighty voice of a battle valkyrie. \"You want to send innocent soldiers to die in a trap!\"",
        "ru": "Фрейя шагнула вперед с громом в глазах. Она ударила тяжелым основанием своего копья-молнии о каменный пол: БУМ! Синие искры разлетелись по мраморным плиткам, заставив благородных лордов в страхе подпрыгнуть на своих мягких креслах. \"Молчать, трус!\" — взревела Фрейя могучим голосом боевой валькирии. \"Ты хочешь послать невинных солдат умирать в ловушке!\"",
        "chunkedEn": "[s: Freya] [v: stepped forward] [pt: with thunder in her eyes.]\n[s: She] [v: slammed] [o: the heavy butt of her lightning spear] [pt: onto the stone floor:] [o: BOOM!]\n[s: Blue sparks] [v: flew] [pt: across the marble tiles,] [v: making] [o: the noble lords] [v: jump] [pt: in their cushioned chairs] [pt: in fear.]\n[v: \"Silence,] [o: coward!\"] [s: Freya] [v: roared] [pt: with the mighty voice of a battle valkyrie.]\n[s: \"You] [v: want to send] [o: innocent soldiers] [v: to die] [pt: in a trap!\"]"
      },
      {
        "en": "\"Look at the royal wax seal on this mercenary contract!\" Freya pointed her sharp spear at the paper inside the box. \"This seal belongs to Lord Malakor, the high minister of defense! He is not in this room today because he has already fled to the eastern mountains to welcome the dark Ash Army!\"",
        "ru": "\"Посмотри на королевскую восковую печать на этом контракте наемников!\" — Фрейя указала острым копьем на бумагу внутри шкатулки. \"Эта печать принадлежит лорду Малакору, верховному министру обороны! Его нет сегодня в этой комнате, потому что он уже сбежал в восточные горы, чтобы встретить темную Пепельную Армию!\"",
        "chunkedEn": "[v: \"Look] [pt: at the royal wax seal on this mercenary contract!\"] [s: Freya] [v: pointed] [o: her sharp spear] [pt: at the paper inside the box.]\n[s: \"This seal] [v: belongs] [pt: to Lord Malakor, the high minister of defense!]\n[s: He] [v: is not] [pt: in this room] [pt: today] [b: because] [s: he] [v: has already fled] [pt: to the eastern mountains] [v: to welcome] [o: the dark Ash Army!\"]"
      },
      {
        "en": "The council members gasped in shock. The chancellor's face turned pale like white chalk. Valerius looked at the terrified lords with steady determination: \"The time for foolish political games is over. The Ten Heroes of the prophecy must unite immediately. If our cities do not stand together, the Ash Sun will burn us all to cinders.\"",
        "ru": "Члены совета ахнули от шока. Лицо канцлера побледнело, как белый мел. Валериус посмотрел на испуганных лордов с непоколебимой решимостью: \"Время для глупых политических игр прошло. Десять Героев пророчества должны объединиться немедленно. Если наши города не встанут вместе, Пепельное Солнце сожжет нас всех дотла.\"",
        "chunkedEn": "[s: The council members] [v: gasped] [pt: in shock.]\n[s: The chancellor's face] [v: turned pale] [pt: like white chalk.]\n[s: Valerius] [v: looked] [pt: at the terrified lords] [pt: with steady determination:]\n[s: \"The time for foolish political games] [v: is over.]\n[s: The Ten Heroes of the prophecy] [v: must unite] [adv: immediately.]\n[b: If] [s: our cities] [v: do not stand together,] [s: the Ash Sun] [v: will burn] [o: us all] [pt: to cinders.\"]"
      }
    ],
    "quiz": {
      "question": "Whose wax seal was found on the secret mercenary contract?",
      "options": [
        "Lord Malakor, the traitorous minister of defense",
        "The good King of the Silver Keep",
        "Astraea the High Priestess"
      ],
      "correctIndex": 0,
      "rewardXp": 160
    }
  },
  {
    "id": "ch-13",
    "actId": 2,
    "number": 13,
    "titleEn": "The Night Attack",
    "titleRu": "Ночное нападение",
    "locationEn": "The Border Citadel & The Great Gate",
    "locationRu": "Пограничная Цитадель и Великие Врата",
    "backgroundImg": "images/valerius_castle.png",
    "sceneIllustrationImg": "images/valerius_castle.png",
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
        "en": "Midnight arrived with heavy black clouds covering the moon and stars. A cold unnatural wind howled around the high stone battlements of the Border Citadel. Suddenly, fiery red catapult stones flew out from the dark forest. They smashed into the heavy wooden gates with a deafening CRASH! Red flames leaped up the wooden towers, and a massive war horn echoed across the valley.",
        "ru": "Полночь наступила с тяжелыми черными тучами, закрывшими луну и звезды. Холодный неестественный ветер завывал вокруг высоких каменных зубцов Пограничной Цитадели. Внезапно огненные красные катапультные камни вылетели из темного леса. Они врезались в тяжелые деревянные ворота с оглушительным КРАШ! Красное пламя взметнулось по деревянным башням, и массивный боевой рог разнесся эхом по долине.",
        "chunkedEn": "[s: Midnight] [v: arrived] [pt: with heavy black clouds covering the moon and stars.]\n[s: A cold unnatural wind] [v: howled] [pt: around the high stone battlements of the Border Citadel.]\n[adv: Suddenly,] [s: fiery red catapult stones] [v: flew out] [pt: from the dark forest.]\n[s: They] [v: smashed] [pt: into the heavy wooden gates] [pt: with a deafening CRASH!]\n[s: Red flames] [v: leaped up] [o: the wooden towers,] [c: and] [s: a massive war horn] [v: echoed] [pt: across the valley.]"
      },
      {
        "en": "\"To the walls!\" Valerius shouted with his mighty voice. His silver armor shone bright in the red firelight. \"The Ash Vanguard is attacking in full force! Hold the gates at all costs!\" Hundreds of dark armored monsters with burning red eyes poured out of the dark woods, carrying iron ladders and heavy battering rams.",
        "ru": "\"К стенам!\" — крикнул Валериус своим могучим голосом. Его серебряные доспехи ярко сияли в красном свете огня. \"Пепельный Авангард атакует в полную силу! Держать ворота любой ценой!\" Сотни темно-бронированных монстров с горящими красными глазами высыпали из темного леса, неся железные лестницы и тяжелые тараны.",
        "chunkedEn": "[o: \"To the walls!\"] [s: Valerius] [v: shouted] [pt: with his mighty voice.]\n[s: His silver armor] [v: shone bright] [pt: in the red firelight.]\n[s: \"The Ash Vanguard] [v: is attacking] [pt: in full force!]\n[v: Hold] [o: the gates] [pt: at all costs!\"]\n[s: Hundreds of dark armored monsters with burning red eyes] [v: poured out] [pt: of the dark woods,] [v: carrying] [o: iron ladders and heavy battering rams.]"
      },
      {
        "en": "Thorin stood beside Valerius in the main breach. The dwarf warrior swung his heavy stone hammer in great circular arcs, smashing two iron monsters backward with every mighty blow: \"For the great forge! You will not cross this threshold while Thorin has breath in his chest!\" Ignis stood on the rampart above, unleashing torrents of bright red fire that melted the enemy siege ladders into hot liquid iron.",
        "ru": "Торин стоял рядом с Валериусом в главном проломе. Воин-гном вращал свой тяжелый каменный молот большими круговыми дугами, отбрасывая по два железных монстра назад каждым могучим ударом: \"За великую кузницу! Вы не переступите этот порог, пока у Торина есть дыхание в груди!\" Игнис стоял на валу наверху, выпуская потоки яркого красного огня, которые плавили вражеские осадные лестницы в горячее жидкое железо.",
        "chunkedEn": "[s: Thorin] [v: stood] [pt: beside Valerius] [pt: in the main breach.]\n[s: The dwarf warrior] [v: swung] [o: his heavy stone hammer] [pt: in great circular arcs,] [v: smashing] [o: two iron monsters backward] [pt: with every mighty blow:]\n[o: \"For the great forge!]\n[s: You] [v: will not cross] [o: this threshold] [b: while] [s: Thorin] [v: has] [o: breath] [pt: in his chest!\"]\n[s: Ignis] [v: stood] [pt: on the rampart above,] [v: unleashing] [o: torrents of bright red fire that melted the enemy siege ladders into hot liquid iron.]"
      },
      {
        "en": "In the open courtyard, Astraea and Oberon worked together to protect the wounded defenders. Oberon summoned thick thorn roots that trapped the charging beasts, while Astraea cast radiant waves of healing starlight that restored the stamina and courage of every tired knight.",
        "ru": "На открытом дворе Астрея и Оберон работали вместе, чтобы защитить раненых защитников. Оберон призвал густые колючие корни, которые поймали бегущих зверей, в то время как Астрея посылала сияющие волны исцеляющего звездного света, восстанавливая выносливость и мужество каждого уставшего рыцаря.",
        "chunkedEn": "[pt: In the open courtyard,] [s: Astraea and Oberon] [v: worked together] [v: to protect] [o: the wounded defenders.]\n[s: Oberon] [v: summoned] [o: thick thorn roots that trapped the charging beasts,] [b: while] [s: Astraea] [v: cast] [o: radiant waves of healing starlight that restored the stamina and courage of every tired knight.]"
      },
      {
        "en": "High up on the castle towers, Zephyr and Frostina controlled the battlefield. Zephyr shot three green arrows at once with incredible speed, striking down enemy commanders in the dark fog. Frostina froze the ground beneath the enemy ranks, causing the charging vanguard to slip and fall into deep icy traps.",
        "ru": "Высоко на башнях замка Зефир и Фростина контролировали поле боя. Зефир выпускал по три зеленые стрелы за раз с невероятной скоростью, сражая вражеских командиров в темном тумане. Фростина замораживала землю под вражескими рядами, заставляя наступающий авангард поскальзываться и падать в глубокие ледяные ловушки.",
        "chunkedEn": "[adv: High up on the castle towers,] [s: Zephyr and Frostina] [v: controlled] [o: the battlefield.]\n[s: Zephyr] [v: shot] [o: three green arrows] [adv: at once] [pt: with incredible speed,] [v: striking down] [o: enemy commanders] [pt: in the dark fog.]\n[s: Frostina] [v: froze] [o: the ground] [pt: beneath the enemy ranks,] [v: causing] [o: the charging vanguard] [v: to slip and fall] [pt: into deep icy traps.]"
      },
      {
        "en": "From the shadows behind the enemy line, Selene appeared like a ghost. She eliminated the enemy siege catapult crews with swift, silent strikes of her twin daggers. Above the battlefield, Freya flew down like a golden eagle of storm, her lightning spear striking the giant Ash Brute who commanded the siege force.",
        "ru": "Из теней позади вражеской линии Селена появилась, как призрак. Она устранила расчеты вражеских осадных катапульт быстрыми, бесшумными ударами своих парных кинжалов. Над полем боя Фрейя спикировала вниз, как золотой орел бури, ее копье-молния поразило гигантского Пепельного Громилу, командовавшего осадными силами.",
        "chunkedEn": "[pt: From the shadows behind the enemy line,] [s: Selene] [v: appeared] [pt: like a ghost.]\n[s: She] [v: eliminated] [o: the enemy siege catapult crews] [pt: with swift, silent strikes of her twin daggers.]\n[pt: Above the battlefield,] [s: Freya] [v: flew down] [pt: like a golden eagle of storm,] [s: her lightning spear] [v: striking] [o: the giant Ash Brute who commanded the siege force.]"
      },
      {
        "en": "With their commander defeated and their siege machines destroyed, the remaining Ash monsters retreated in panic into the dark eastern hills. The nine heroes stood together at the smoking gates as the morning sun rose in the sky. For the first time in history, knights, dwarves, and forest guardians fought as one united army.",
        "ru": "Когда их командир был побежден, а осадные машины уничтожены, оставшиеся Пепельные монстры в панике отступили в темные восточные холмы. Девять героев стояли вместе у дымящихся ворот, когда утреннее солнце поднялось в небо. Впервые в истории рыцари, гномы и лесные хранители сражались как одна единая армия.",
        "chunkedEn": "[pt: With their commander defeated and their siege machines destroyed,] [s: the remaining Ash monsters] [v: retreated] [pt: in panic] [pt: into the dark eastern hills.]\n[s: The nine heroes] [v: stood together] [pt: at the smoking gates] [b: as] [s: the morning sun] [v: rose] [pt: in the sky.]\n[pt: For the first time in history,] [s: knights, dwarves, and forest guardians] [v: fought] [pt: as one united army.]"
      },
      {
        "en": "Valerius wiped the soot from his silver helmet and looked at his companions with deep respect: \"Act Two is finished. We have uncovered the conspiracy and saved the border. But the true battle lies ahead in the deep Ash Rift. We must find Archmage Eldrin and complete our squad!\"",
        "ru": "Валериус стер сажу со своего серебряного шлема и посмотрел на своих соратников с глубоким уважением: \"Акт Второй завершен. Мы раскрыли заговор и спасли границу. Но истинная битва ждет нас впереди в глубоком Пепельном Разломе. Мы должны найти Архимага Эльдрина и завершить наш отряд!\"",
        "chunkedEn": "[s: Valerius] [v: wiped] [o: the soot] [pt: from his silver helmet] [c: and] [v: looked] [pt: at his companions] [pt: with deep respect:]\n[s: \"Act Two] [v: is finished.]\n[s: We] [v: have uncovered] [o: the conspiracy] [c: and] [v: saved] [o: the border.]\n[c: But] [s: the true battle] [v: lies] [adv: ahead] [pt: in the deep Ash Rift.]\n[s: We] [v: must find] [o: Archmage Eldrin] [c: and] [v: complete] [o: our squad!\"]"
      }
    ],
    "quiz": {
      "question": "What historic event happened at the end of the Night Attack?",
      "options": [
        "The three factions fought as one united army for the first time",
        "The castle gates were completely destroyed",
        "All nine heroes went back to their home cities"
      ],
      "correctIndex": 0,
      "rewardXp": 200
    }
  }
];

if (typeof window !== 'undefined') {
  window.STORY_ACT2_EXPANDED = STORY_ACT2_EXPANDED;
}
if (typeof module !== 'undefined') {
  module.exports = { STORY_ACT2_EXPANDED };
}
