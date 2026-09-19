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
    }
  }
];

if (typeof window !== 'undefined') {
  window.STORY_ACT2_EXPANDED = STORY_ACT2_EXPANDED;
}
if (typeof module !== 'undefined') {
  module.exports = { STORY_ACT2_EXPANDED };
}
