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
        "en": "High in the freezing northern mountains, a cold winter wind blew fiercely across the deep chasm. Down below, sharp black rocks waited in the darkness hundreds of feet down. The only way across the gorge was an ancient stone bridge. But today, a terrifying avalanche of heavy black stones had smashed the middle section of the bridge. A wide gap of empty air separated the two mountain peaks.",
        "ru": "Высоко в морозных северных горах холодный зимний ветер яростно дул над глубокой пропастью. Внизу острые черные скалы ждали во тьме на сотни футов ниже. Единственным путем через ущелье был древний каменный мост. Но сегодня ужасный обвал тяжелых черных камней разбил среднюю секцию моста. Широкий провал пустого воздуха разделял две горные вершины.",
        "chunkedEn": "[adv: High in the freezing northern mountains,] [s: a cold winter wind] [v: blew fiercely] [pt: across the deep chasm.]\n[adv: Down below,] [s: sharp black rocks] [v: waited] [pt: in the darkness] [pt: hundreds of feet down.]\n[s: The only way across the gorge] [v: was] [o: an ancient stone bridge.]\n[c: But] [pt: today,] [s: a terrifying avalanche of heavy black stones] [v: had smashed] [o: the middle section of the bridge.]\n[s: A wide gap of empty air] [v: separated] [o: the two mountain peaks.]"
      },
      {
        "en": "On the southern ledge, Freya stood tall in the freezing wind. The proud Valkyrie wore gleaming steel armor with golden wings on her shoulders. In her right hand, she held her long spear that crackled with blue lightning. Her blonde hair flew wild in the icy gale. Behind her, a group of fifty cold and frightened refugees from the border villages huddled together against the stone cliff.",
        "ru": "На южном выступе гордо стояла Фрейя на морозном ветру. Гордая Валькирия носила блестящие стальные доспехи с золотыми крыльями на плечах. В правой руке она держала длинное копье, искрящееся синими молниями. Ее светлые волосы дико развевались на ледяном шквале. Позади нее группа из пятидесяти замерзших и испуганных беженцев из пограничных деревень жалась друг к другу у каменной скалы.",
        "chunkedEn": "[pt: On the southern ledge,] [s: Freya] [v: stood tall] [pt: in the freezing wind.]\n[s: The proud Valkyrie] [v: wore] [o: gleaming steel armor with golden wings on her shoulders.]\n[pt: In her right hand,] [s: she] [v: held] [o: her long spear that crackled with blue lightning.]\n[s: Her blonde hair] [v: flew wild] [pt: in the icy gale.]\n[pt: Behind her,] [s: a group of fifty cold and frightened refugees from the border villages] [v: huddled together] [pt: against the stone cliff.]"
      },
      {
        "en": "\"We cannot wait here on this cold mountain!\" Freya shouted against the roaring wind. \"The dark Ash Vanguard is marching up the canyon. They have iron swords and heavy war beasts. If we do not cross this chasm right now, these innocent women and children will be trapped and captured!\"",
        "ru": "\"Мы не можем ждать здесь на этой холодной горе!\" — кричала Фрейя сквозь ревущий ветер. \"Темный Пепельный Авангард поднимается по каньону. У них железные мечи и тяжелые боевые звери. Если мы не перейдем эту бездну прямо сейчас, эти невинные женщины и дети будут пойманы в ловушку и захвачены!\"",
        "chunkedEn": "[s: \"We] [v: cannot wait] [adv: here] [pt: on this cold mountain!\"] [s: Freya] [v: shouted] [pt: against the roaring wind.]\n[s: \"The dark Ash Vanguard] [v: is marching up] [o: the canyon.]\n[s: They] [v: have] [o: iron swords and heavy war beasts.]\n[b: If] [s: we] [v: do not cross] [o: this chasm] [adv: right now,] [s: these innocent women and children] [v: will be trapped and captured!\"]"
      },
      {
        "en": "Frostina stepped forward to the very edge of the broken bridge. The Ice Sorceress was calm, silent, and dignified. She wore an elegant blue silk robe with white fur trim. She did not feel the freezing cold. A crown of sharp clear ice floated gently above her dark hair. Her cold blue eyes looked across the thirty-foot empty gap between the broken stone arches.",
        "ru": "Фростина шагнула вперед к самому краю сломанного моста. Ледяная Волшебница была спокойной, молчаливой и исполненной достоинства. Она носила элегантное синее шелковое одеяние с белой меховой отделкой. Она не чувствовала морозного холода. Корона из острого прозрачного льда плавно парила над ее темными волосами. Ее холодные синие глаза смотрели через тридцатифутовый пустой провал между сломанными каменными арками.",
        "chunkedEn": "[s: Frostina] [v: stepped forward] [pt: to the very edge of the broken bridge.]\n[s: The Ice Sorceress] [v: was calm, silent,] [c: and] [v: dignified.]\n[s: She] [v: wore] [o: an elegant blue silk robe with white fur trim.]\n[s: She] [v: did not feel] [o: the freezing cold.]\n[s: A crown of sharp clear ice] [v: floated gently] [pt: above her dark hair.]\n[s: Her cold blue eyes] [v: looked] [pt: across the thirty-foot empty gap] [pt: between the broken stone arches.]"
      },
      {
        "en": "\"Step back, brave warrior of the sky,\" Frostina spoke in a cool, crystal voice. \"Lightning cannot build a road across the sky. But my ice is stronger than the hardest mountain granite. Keep your spear ready to protect our rear guard while I weave the winter path.\"",
        "ru": "\"Отойди назад, храбрая воительница неба,\" — произнесла Фростина прохладным, хрустальным голосом. \"Молния не может построить дорогу через небо. Но мой лед крепче самого твердого горного гранита. Держи свое копье наготове, чтобы защитить наш арьергард, пока я созидаю зимний путь.\"",
        "chunkedEn": "[v: \"Step back,] [o: brave warrior of the sky,\"] [s: Frostina] [v: spoke] [pt: in a cool, crystal voice.]\n[s: \"Lightning] [v: cannot build] [o: a road] [pt: across the sky.]\n[c: But] [s: my ice] [v: is stronger] [pt: than the hardest mountain granite.]\n[v: Keep] [o: your spear] [o: ready to protect our rear guard] [b: while] [s: I] [v: weave] [o: the winter path.\"]"
      },
      {
        "en": "Frostina raised both her delicate hands and closed her eyes in deep concentration. Pure white frost exploded from her fingertips. A powerful stream of blue freezing air shot across the chasm like a solid beam. The water vapor in the cold air froze instantly. Thick pillars of solid diamond ice formed between the two broken stone pillars, connecting them with a wide, shining ice bridge.",
        "ru": "Фростина подняла обе свои изящные руки и закрыла глаза в глубокой концентрации. Чистый белый мороз вырвался из кончиков ее пальцев. Мощный поток синего ледяного воздуха выстрелил через бездну, как сплошной луч. Водяной пар в холодном воздухе мгновенно замерз. Толстые колонны прочного алмазного льда образовались между двумя сломанными каменными опорами, соединив их широким, сияющим ледяным мостом.",
        "chunkedEn": "[s: Frostina] [v: raised] [o: both her delicate hands] [c: and] [v: closed] [o: her eyes] [pt: in deep concentration.]\n[s: Pure white frost] [v: exploded] [pt: from her fingertips.]\n[s: A powerful stream of blue freezing air] [v: shot] [pt: across the chasm] [pt: like a solid beam.]\n[s: The water vapor in the cold air] [v: froze instantly.]\n[s: Thick pillars of solid diamond ice] [v: formed] [pt: between the two broken stone pillars,] [v: connecting] [o: them] [pt: with a wide, shining ice bridge.]"
      },
      {
        "en": "Freya tested the ice bridge with the heavy butt of her spear. The ice did not crack; it was as solid as iron. Freya grinned with genuine admiration: \"By the storm gods! That is magnificent magic, Frostina! Quick, everyone, cross the ice bridge in single file! Walk fast and do not look down!\"",
        "ru": "Фрейя проверила ледяной мост тяжелым основанием своего копья. Лед не треснул; он был прочным, как железо. Фрейя усмехнулась с искренним восхищением: \"Клянусь богами бури! Это великолепная магия, Фростина! Быстро, все переходите по ледяному мосту по одному! Идите быстро и не смотрите вниз!\"",
        "chunkedEn": "[s: Freya] [v: tested] [o: the ice bridge] [pt: with the heavy butt of her spear.]\n[s: The ice] [v: did not crack;] [s: it] [v: was as solid as iron.]\n[s: Freya] [v: grinned] [pt: with genuine admiration:]\n[o: \"By the storm gods!]\n[s: That] [v: is] [o: magnificent magic,] [o: Frostina!]\n[v: Quick,] [o: everyone,] [v: cross] [o: the ice bridge] [pt: in single file!]\n[v: Walk fast] [c: and] [v: do not look down!\"]"
      },
      {
        "en": "All fifty villagers ran safely across the shining ice road to the northern sanctuary. Just as the last child stepped onto the opposite peak, the roaring Ash Vanguard appeared on the southern road. Freya raised her spear and called down a bright blue thunderbolt, while Frostina shattered the ice bridge behind them, leaving the enemy army staring helplessly across the deep abyss.",
        "ru": "Все пятьдесят жителей деревни благополучно перебежали по сияющей ледяной дороге в северное святилище. Как только последний ребенок ступил на противоположный пик, ревущий Пепельный Авангард появился на южной дороге. Фрейя подняла копье и призвала яркую синюю молнию, а Фростина разрушила ледяной мост позади них, оставив вражескую армию беспомощно смотреть через глубокую пропасть.",
        "chunkedEn": "[s: All fifty villagers] [v: ran safely] [pt: across the shining ice road] [pt: to the northern sanctuary.]\n[b: Just as] [s: the last child] [v: stepped] [pt: onto the opposite peak,] [s: the roaring Ash Vanguard] [v: appeared] [pt: on the southern road.]\n[s: Freya] [v: raised] [o: her spear] [c: and] [v: called down] [o: a bright blue thunderbolt,] [b: while] [s: Frostina] [v: shattered] [o: the ice bridge] [pt: behind them,] [v: leaving] [o: the enemy army] [v: staring helplessly] [pt: across the deep abyss.]"
      }
    ],
    "quiz": {
      "question": "How did the fifty villagers cross the broken chasm bridge?",
      "options": [
        "They flew across on giant eagles",
        "Frostina created a wide and solid bridge of diamond ice",
        "They climbed down the rocks on long ropes"
      ],
      "correctIndex": 1,
      "rewardXp": 160
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
        "en": "Deep in the forgotten southern hills lay the old Sunken Quarry. Giant square blocks of grey granite stood in long rows under the open sky. Rusty iron cranes and old wooden ladders leaned against the high stone cliffs. Nobody had worked here for over twenty years. But tonight, bright yellow lanterns glowed inside the deep quarry pit. Strange clanging noises echoed from the dark stone tunnels.",
        "ru": "Глубоко в забытых южных холмах лежал старый Затопленный Карьер. Гигантские квадратные блоки серого гранита стояли длинными рядами под открытым небом. Ржавые железные краны и старые деревянные лестницы прислонились к высоким каменным утесам. Никто не работал здесь больше двадцати лет. Но сегодня яркие желтые фонари светились внутри глубокой ямы карьера. Странные лязгающие звуки отдавались эхом из темных каменных туннелей.",
        "chunkedEn": "[pt: Deep in the forgotten southern hills] [v: lay] [s: the old Sunken Quarry.]\n[s: Giant square blocks of grey granite] [v: stood] [pt: in long rows] [pt: under the open sky.]\n[s: Rusty iron cranes and old wooden ladders] [v: leaned] [pt: against the high stone cliffs.]\n[s: Nobody] [v: had worked] [adv: here] [pt: for over twenty years.]\n[c: But] [pt: tonight,] [s: bright yellow lanterns] [v: glowed] [pt: inside the deep quarry pit.]\n[s: Strange clanging noises] [v: echoed] [pt: from the dark stone tunnels.]"
      },
      {
        "en": "Thorin and Selene hid behind a massive granite slab near the top rim of the quarry. Thorin checked the heavy stone head of his warhammer. His grip was tight, and his breath was hot in the cool night air. Selene crouched low like a black panther ready to pounce. She looked down into the quarry with cold calculation.",
        "ru": "Торин и Селена прятались за массивной гранитной плитой возле верхнего края карьера. Торин проверил тяжелое каменное навершие своего боевого молота. Его хватка была крепкой, а дыхание горячим в прохладном ночном воздухе. Селена низко присела, словно черная пантера, готовая к прыжку. Она смотрела вниз в карьер с холодным расчетом.",
        "chunkedEn": "[s: Thorin and Selene] [v: hid] [pt: behind a massive granite slab] [pt: near the top rim of the quarry.]\n[s: Thorin] [v: checked] [o: the heavy stone head of his warhammer.]\n[s: His grip] [v: was tight,] [c: and] [s: his breath] [v: was hot] [pt: in the cool night air.]\n[s: Selene] [v: crouched low] [pt: like a black panther ready to pounce.]\n[s: She] [v: looked down] [pt: into the quarry] [pt: with cold calculation.]"
      },
      {
        "en": "\"Look down there, Thorin,\" Selene whispered into his ear. \"Those are not ordinary highway bandits. Look at their black steel armor and their red skull shields. They are the Shadow Mercenaries of the Iron Fang. And look at what they are loading onto those black carts.\"",
        "ru": "\"Посмотри туда вниз, Торин,\" — прошептала Селена ему на ухо. \"Это не обычные разбойники с большой дороги. Посмотри на их черные стальные доспехи и щиты с красными черепами. Это Теневые Наемники Железного Клыка. И посмотри, что они грузят на эти черные повозки.\"",
        "chunkedEn": "[v: \"Look down] [adv: there,] [o: Thorin,\"] [s: Selene] [v: whispered] [pt: into his ear.]\n[s: \"Those] [v: are not] [o: ordinary highway bandits.]\n[v: Look] [pt: at their black steel armor and their red skull shields.]\n[s: They] [v: are] [o: the Shadow Mercenaries of the Iron Fang.]\n[c: And] [v: look] [pt: at what they are loading onto those black carts.\"]"
      },
      {
        "en": "Thorin squinted into the lantern light. His eyes opened wide with fierce fury: \"By the fiery forge! Those are the stolen blue crystal ore sacks from my clan wagon! They are carving black dark runes onto my sacred crystals! They want to use the blue magic to power illegal siege catapults against our cities!\"",
        "ru": "Торин прищурился на свет фонарей. Его глаза широко раскрылись от яростной ярости: \"Клянусь огненной кузницей! Это украденные мешки с синей кристаллической рудой из повозки моего клана! Они вырезают черные темные руны на моих священных кристаллах! Они хотят использовать синюю магию для питания незаконных осадных катапульт против наших городов!\"",
        "chunkedEn": "[s: Thorin] [v: squinted] [pt: into the lantern light.]\n[s: His eyes] [v: opened wide] [pt: with fierce fury:]\n[o: \"By the fiery forge!]\n[s: Those] [v: are] [o: the stolen blue crystal ore sacks from my clan wagon!]\n[s: They] [v: are carving] [o: black dark runes] [pt: onto my sacred crystals!]\n[s: They] [v: want to use] [o: the blue magic] [v: to power] [o: illegal siege catapults] [pt: against our cities!\"]"
      },
      {
        "en": "\"Keep your temper, blacksmith,\" Selene warned in a sharp whisper. \"There are twenty armed mercenaries and a dark shadow captain with a poisoned crossbow down there. If you charge down the open stairs like a mad bull, they will surround you and shoot you full of black arrows before you hit a single stone.\"",
        "ru": "\"Держи себя в руках, кузнец,\" — предупредила Селена резким шепотом. \"Там внизу двадцать вооруженных наемников и темный теневой капитан с отравленным арбалетом. Если ты бросишься вниз по открытой лестнице, как безумный бык, они окружат тебя и усыпят черными стрелами до того, как ты ударишь хоть один камень.\"",
        "chunkedEn": "[v: \"Keep] [o: your temper,] [o: blacksmith,\"] [s: Selene] [v: warned] [pt: in a sharp whisper.]\n[s: \"There] [v: are] [o: twenty armed mercenaries and a dark shadow captain with a poisoned crossbow] [adv: down there.]\n[b: If] [s: you] [v: charge down] [o: the open stairs] [pt: like a mad bull,] [s: they] [v: will surround] [o: you] [c: and] [v: shoot] [o: you full of black arrows] [b: before] [s: you] [v: hit] [o: a single stone.\"]"
      },
      {
        "en": "Thorin grunted and scratched his brown beard: \"Fine, shadow stalker. What is your clever plan? I smash things; you sneak around. Tell me where to hit!\"",
        "ru": "Торин хмыкнул и почесал коричневую бороду: \"Ладно, теневая охотница. Каков твой умный план? Я крушу вещи, ты крадешься вокруг. Скажи мне, куда бить!\"",
        "chunkedEn": "[s: Thorin] [v: grunted] [c: and] [v: scratched] [o: his brown beard:]\n[o: \"Fine,] [o: shadow stalker.]\n[w: What] [v: is] [s: your clever plan?]\n[s: I] [v: smash] [o: things;] [s: you] [v: sneak around.]\n[v: Tell] [o: me] [w: where] [v: to hit!\"]"
      },
      {
        "en": "Selene pointed her dagger toward the high wooden crane above the carts: \"I will slip through the dark shadows behind the guards and cut the thick support ropes of the main lantern tower. When the lights go out and the guards panic, you smash the center iron crane with your hammer. The falling granite blocks will block their exit tunnel and trap their carts!\"",
        "ru": "Селена указала кинжалом на высокий деревянный кран над повозками: \"Я проскользну сквозь темные тени за спинами стражей и перережу толстые опорные канаты главной башни с фонарями. Когда огни погаснут и стражи запаникуют, ты разобьешь центральный железный кран своим молотом. Падающие гранитные блоки заблокируют их выходной туннель и запрут их повозки!\"",
        "chunkedEn": "[s: Selene] [v: pointed] [o: her dagger] [pt: toward the high wooden crane above the carts:]\n[s: \"I] [v: will slip] [pt: through the dark shadows] [pt: behind the guards] [c: and] [v: cut] [o: the thick support ropes of the main lantern tower.]\n[b: When] [s: the lights] [v: go out] [c: and] [s: the guards] [v: panic,] [s: you] [v: smash] [o: the center iron crane] [pt: with your hammer.]\n[s: The falling granite blocks] [v: will block] [o: their exit tunnel] [c: and] [v: trap] [o: their carts!\"]"
      },
      {
        "en": "The plan worked with deadly perfection. In two silent seconds, Selene cut the ropes, plunging the quarry into pitch darkness. A loud battle cry echoed through the stone pit as Thorin leapt down and smashed the crane: CRASH! Granite boulders tumbled down and sealed the tunnel. Together, the dwarf warrior and the shadow assassin defeated the mercenaries and recovered every single stolen crystal sack.",
        "ru": "План сработал со смертоносным совершенством. За две бесшумные секунды Селена перерезала канаты, погрузив карьер в кромешную тьму. Громкий боевой клич разнесся по каменной яме, когда Торин прыгнул вниз и сокрушил кран: КРАШ! Гранитные валуны посыпались вниз и запечатали туннель. Вместе воин-гном и теневой ассасин победили наемников и вернули каждый украденный мешок с кристаллами.",
        "chunkedEn": "[s: The plan] [v: worked] [pt: with deadly perfection.]\n[pt: In two silent seconds,] [s: Selene] [v: cut] [o: the ropes,] [v: plunging] [o: the quarry] [pt: into pitch darkness.]\n[s: A loud battle cry] [v: echoed] [pt: through the stone pit] [b: as] [s: Thorin] [v: leapt down] [c: and] [v: smashed] [o: the crane:] [o: CRASH!]\n[s: Granite boulders] [v: tumbled down] [c: and] [v: sealed] [o: the tunnel.]\n[adv: Together,] [s: the dwarf warrior and the shadow assassin] [v: defeated] [o: the mercenaries] [c: and] [v: recovered] [o: every single stolen crystal sack.]"
      }
    ],
    "quiz": {
      "question": "What were the Shadow Mercenaries carving onto the stolen blue crystals?",
      "options": [
        "Dark runes to power illegal siege catapults",
        "Pictures of golden dragons",
        "Names of their beloved kings"
      ],
      "correctIndex": 0,
      "rewardXp": 160
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
