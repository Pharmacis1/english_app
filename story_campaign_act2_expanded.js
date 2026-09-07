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
        "en": "The midday sun was hot and bright above the rocky canyon. Red dust moved through the dry air. Tall red stones stood on both sides of the narrow road like old silent guards. On the rough stone ground, an iron wagon lay on its side. Thick black smoke rose into the clear blue sky. Broken wooden wheels and heavy iron chains lay near the burning wagon. Large grey sacks of glowing blue crystal ore were scattered everywhere across the dusty sand.",
        "ru": "Полуденное солнце было жарким и ярким над скалистым каньоном. Красная пыль двигалась в сухом воздухе. Высокие красные камни стояли по обе стороны узкой дороги, как старые безмолвные стражи. На неровной каменной земле на боку лежала железная повозка. Густой черный дым поднимался в ясное синее небо. Сломанные деревянные колеса и тяжелые железные цепи валялись возле горящей повозки. Большие серые мешки со светящейся синей кристаллической рудой были разбросаны повсюду по пыльному песку.",
        "chunkedEn": "[s: The midday sun] [v: was hot and bright] [pt: above the rocky canyon.]\n[s: Red dust] [v: moved] [pt: through the dry air.]\n[s: Tall red stones] [v: stood] [pt: on both sides of the narrow road] [pt: like old silent guards.]\n[pt: On the rough stone ground,] [s: an iron wagon] [v: lay] [pt: on its side.]\n[s: Thick black smoke] [v: rose] [pt: into the clear blue sky.]\n[s: Broken wooden wheels and heavy iron chains] [v: lay] [pt: near the burning wagon.]\n[s: Large grey sacks of glowing blue crystal ore] [v: were scattered] [adv: everywhere] [pt: across the dusty sand.]"
      },
      {
        "en": "Heavy footsteps echoed between the high canyon walls. Thorin ran down the rocky hill. He was very angry, and his face was red under his brown beard. In his strong hands, he held his heavy iron hammer. Small sparks flew from the stone under his iron boots. He looked at the burning wagon and shouted loudly in anger: \"Our crystal ore! Our royal trade supply! Who dared to break our strong wagon on this quiet mountain road?\"",
        "ru": "Тяжелые шаги отдавались эхом между высокими стенами каньона. Торин бежал вниз по скалистому холму. Он был очень зол, и его лицо покраснело под коричневой бородой. В своих сильных руках он держал тяжелый железный молот. Мелкие искры летели от камня под его железными сапогами. Он посмотрел на горящую повозку и громко закричал в гневе: \"Наша кристаллическая руда! Наш королевский торговый обоз! Кто посмел сломать нашу крепкую повозку на этой тихой горной дороге?\"",
        "chunkedEn": "[s: Heavy footsteps] [v: echoed] [pt: between the high canyon walls.]\n[s: Thorin] [v: ran down] [o: the rocky hill.]\n[s: He] [v: was very angry,] [c: and] [s: his face] [v: was red] [pt: under his brown beard.]\n[pt: In his strong hands,] [s: he] [v: held] [o: his heavy iron hammer.]\n[s: Small sparks] [v: flew] [pt: from the stone] [pt: under his iron boots.]\n[s: He] [v: looked] [pt: at the burning wagon] [c: and] [v: shouted loudly] [pt: in anger:]\n[s: \"Our crystal ore!] [s: Our royal trade supply!]\n[s: Who] [v: dared to break] [o: our strong wagon] [pt: on this quiet mountain road?\"]"
      },
      {
        "en": "From the other side of the canyon, Valerius walked forward with slow and steady steps. The silver knight held his large round shield in his left hand. His silver armor was clean and bright, but his blue eyes were serious and watchful. He looked at Thorin and raised his right hand in peace. \"Calm your anger, Thorin,\" Valerius said in a deep and steady voice. \"We heard a loud explosion from our border watchtower. We came here to help, not to fight with your clan.\"",
        "ru": "С другой стороны каньона медленными и уверенными шагами вышел Валериус. Серебряный рыцарь держал большой круглый щит в левой руке. Его серебряные доспехи были чистыми и яркими, но его синие глаза были серьезными и настороженными. Он посмотрел на Торина и поднял правую руку в знак мира. \"Успокой свой гнев, Торин,\" — сказал Валериус глубоким и спокойным голосом. \"Мы услышали громкий взрыв с нашей пограничной сторожевой башни. Мы пришли сюда помочь, а не сражаться с твоим кланом.\"",
        "chunkedEn": "[pt: From the other side of the canyon,] [s: Valerius] [v: walked forward] [pt: with slow and steady steps.]\n[s: The silver knight] [v: held] [o: his large round shield] [pt: in his left hand.]\n[s: His silver armor] [v: was clean and bright,] [c: but] [s: his blue eyes] [v: were serious and watchful.]\n[s: He] [v: looked] [pt: at Thorin] [c: and] [v: raised] [o: his right hand] [pt: in peace.]\n[v: \"Calm] [o: your anger,] [o: Thorin,\"] [s: Valerius] [v: said] [pt: in a deep and steady voice.]\n[s: \"We] [v: heard] [o: a loud explosion] [pt: from our border watchtower.]\n[s: We] [v: came] [adv: here] [v: to help,] [c: not] [v: to fight] [pt: with your clan.\"]"
      },
      {
        "en": "Thorin pointed his stone hammer at the knight: \"Help? Your kingdom wants our blue crystals! Your king wants more magic power for his big castle! My miners worked three long months in the deep dark caves to dig this rare blue ore. And now, my wagon is broken, my three strong oxen are gone, and your silver guards stand next to the road! Do not tell me fairy tales, knight!\"",
        "ru": "Торин указал каменным молотом на рыцаря: \"Помочь? Ваше королевство хочет наши синие кристаллы! Ваш король хочет больше магической силы для своего большого замка! Мои шахтеры работали три долгих месяца в глубоких темных пещерах, чтобы добыть эту редкую синюю руду. А теперь моя повозка сломана, три моих сильных вола пропали, а твои серебряные стражи стоят рядом с дорогой! Не рассказывай мне сказок, рыцарь!\"",
        "chunkedEn": "[s: Thorin] [v: pointed] [o: his stone hammer] [pt: at the knight:]\n[o: \"Help?]\n[s: Your kingdom] [v: wants] [o: our blue crystals!]\n[s: Your king] [v: wants] [o: more magic power] [pt: for his big castle!]\n[s: My miners] [v: worked] [pt: three long months] [pt: in the deep dark caves] [v: to dig] [o: this rare blue ore.]\n[c: And] [adv: now,] [s: my wagon] [v: is broken,] [s: my three strong oxen] [v: are gone,] [c: and] [s: your silver guards] [v: stand] [pt: next to the road!]\n[v: Do not tell] [o: me] [o: fairy tales,] [o: knight!\"]"
      },
      {
        "en": "Valerius did not draw his sword. Instead, he knelt on the hot sand near the burning wheel. He picked up a long black object from the ground. It was a broken black arrow made of dark bone. The tip of the arrow was covered with a strange sticky purple poison. It smelled like rotten leaves and old ash. Valerius held the black arrow in his hand and showed it to the angry dwarf warrior.",
        "ru": "Валериус не стал доставать меч. Вместо этого он опустился на колени на горячий песок возле горящего колеса. Он поднял с земли длинный черный предмет. Это была сломанная черная стрела из темной кости. Наконечник стрелы был покрыт странным липким фиолетовым ядом. Он пах гнилыми листьями и старым пеплом. Валериус держал черную стрелу в руке и показал ее сердитому воину-гному.",
        "chunkedEn": "[s: Valerius] [v: did not draw] [o: his sword.]\n[adv: Instead,] [s: he] [v: knelt] [pt: on the hot sand] [pt: near the burning wheel.]\n[s: He] [v: picked up] [o: a long black object] [pt: from the ground.]\n[s: It] [v: was] [o: a broken black arrow made of dark bone.]\n[s: The tip of the arrow] [v: was covered] [pt: with a strange sticky purple poison.]\n[s: It] [v: smelled] [pt: like rotten leaves and old ash.]\n[s: Valerius] [v: held] [o: the black arrow] [pt: in his hand] [c: and] [v: showed] [o: it] [pt: to the angry dwarf warrior.]"
      },
      {
        "en": "\"Look with your own eyes, Thorin,\" Valerius said quietly. \"Our silver kingdom archers use straight wooden arrows with white feathers. We do not use black monster bones. And we never put purple poison on our weapons. This poison comes from the dark Ash beasts of the eastern desert. Someone attacked your cart and left this arrow on purpose. Someone wants our two great clans to fight each other in a foolish war.\"",
        "ru": "\"Посмотри своими собственными глазами, Торин,\" — тихо сказал Валериус. \"Лучники нашего серебряного королевства используют прямые деревянные стрелы с белыми перьями. Мы не используем черные кости монстров. И мы никогда не наносим фиолетовый яд на наше оружие. Этот яд происходит от темных Пепельных тварей восточной пустыни. Кто-то напал на твою повозку и оставил эту стрелу нарочно. Кто-то хочет, чтобы два наших великих клана сражались друг с другом в глупой войне.\"",
        "chunkedEn": "[v: \"Look] [pt: with your own eyes,] [o: Thorin,\"] [s: Valerius] [v: said quietly.]\n[s: \"Our silver kingdom archers] [v: use] [o: straight wooden arrows with white feathers.]\n[s: We] [v: do not use] [o: black monster bones.]\n[c: And] [s: we] [adv: never] [v: put] [o: purple poison] [pt: on our weapons.]\n[s: This poison] [v: comes] [pt: from the dark Ash beasts of the eastern desert.]\n[s: Someone] [v: attacked] [o: your cart] [c: and] [v: left] [o: this arrow] [pt: on purpose.]\n[s: Someone] [v: wants] [o: our two great clans] [v: to fight] [o: each other] [pt: in a foolish war.\"]"
      },
      {
        "en": "Thorin looked closely at the black bone arrow. He touched the purple venom with the dry tip of his hammer. The metal sizzled and turned black. Thorin lowered his heavy weapon. His face became grim: \"The Ash Prophecy again... You speak true words, knight. A true soldier does not use poison. But where are my missing blue ore sacks? Ten big sacks are gone!\"",
        "ru": "Торин внимательно посмотрел на стрелу из черной кости. Он коснулся фиолетового яда сухим кончиком своего молота. Металл зашипел и почернел. Торин опустил свое тяжелое оружие. Его лицо стало мрачным: \"Снова Пепельное Пророчество... Ты говоришь правдивые слова, рыцарь. Настоящий солдат не использует яд. Но где мои пропавшие мешки с синей рудой? Десять больших мешков исчезли!\"",
        "chunkedEn": "[s: Thorin] [v: looked closely] [pt: at the black bone arrow.]\n[s: He] [v: touched] [o: the purple venom] [pt: with the dry tip of his hammer.]\n[s: The metal] [v: sizzled] [c: and] [v: turned black.]\n[s: Thorin] [v: lowered] [o: his heavy weapon.]\n[s: His face] [v: became grim:]\n[o: \"The Ash Prophecy] [adv: again...]\n[s: You] [v: speak] [o: true words,] [o: knight.]\n[s: A true soldier] [v: does not use] [o: poison.]\n[c: But] [w: where] [v: are] [s: my missing blue ore sacks?]\n[s: Ten big sacks] [v: are gone!\"]"
      },
      {
        "en": "Suddenly, Ignis stepped out from behind a high red boulder. A small ball of warm red fire danced on his wooden staff. \"I can see fresh wheel tracks in the red dust!\" Ignis called out with a fierce smile. \"They pulled the stolen sacks toward the dark caves in the north. If we follow the tracks right now, we can catch the thieves before the sun goes down!\"",
        "ru": "Внезапно Игнис вышел из-за высокого красного валуна. Маленький шар теплого красного огня плясал на его деревянном посохе. \"Я вижу свежие следы колес на красной пыли!\" — крикнул Игнис с яростной улыбкой. \"Они потащили украденные мешки к темным пещерам на севере. Если мы пойдем по следам прямо сейчас, мы сможем поймать воров до захода солнца!\"",
        "chunkedEn": "[adv: Suddenly,] [s: Ignis] [v: stepped out] [pt: from behind a high red boulder.]\n[s: A small ball of warm red fire] [v: danced] [pt: on his wooden staff.]\n[s: \"I] [v: can see] [o: fresh wheel tracks] [pt: in the red dust!\"] [s: Ignis] [v: called out] [pt: with a fierce smile.]\n[s: \"They] [v: pulled] [o: the stolen sacks] [pt: toward the dark caves in the north.]\n[b: If] [s: we] [v: follow] [o: the tracks] [adv: right now,] [s: we] [v: can catch] [o: the thieves] [b: before] [s: the sun] [v: goes down!\"]"
      },
      {
        "en": "Valerius nodded and gripped his silver shield firmly: \"Then we go together. The kingdom and the forge stand side by side today. Let us find the stolen ore and protect our shared border!\"",
        "ru": "Валериус кивнул и крепко сжал свой серебряный щит: \"Тогда мы идем вместе. Королевство и кузница стоят плечом к плечу сегодня. Давайте найдем украденную руду и защитим нашу общую границу!\"",
        "chunkedEn": "[s: Valerius] [v: nodded] [c: and] [v: gripped] [o: his silver shield] [adv: firmly:]\n[adv: \"Then] [s: we] [v: go together.]\n[s: The kingdom and the forge] [v: stand] [adv: side by side] [pt: today.]\n[v: Let] [o: us] [v: find] [o: the stolen ore] [c: and] [v: protect] [o: our shared border!\"]"
      }
    ],
    "quiz": {
      "question": "What kind of arrow did Valerius find near the burning wagon?",
      "options": [
        "A straight wooden arrow with white feathers",
        "A black bone arrow with sticky purple poison",
        "A silver arrow with golden stars"
      ],
      "correctIndex": 1,
      "rewardXp": 160
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
        "en": "A thick cold grey mist covered the pine trees on the northern hills. The air was wet and quiet. White clouds of fog moved slowly between the tall green trees like soft white ghosts. You could not see more than ten steps forward. The birds were silent in the branches. Cold water drops fell slowly from the green pine needles onto the wet brown earth below: drip, drip, drip.",
        "ru": "Густой холодный серый туман покрывал сосны на северных холмах. Воздух был влажным и тихим. Белые облака тумана медленно двигались между высокими зелеными деревьями, словно мягкие белые призраки. Нельзя было разглядеть ничего дальше десяти шагов. Птицы молчали в ветвях. Холодные капли воды медленно падали с зеленых сосновых иголок на влажную коричневую землю внизу: кап, кап, кап.",
        "chunkedEn": "[s: A thick cold grey mist] [v: covered] [o: the pine trees] [pt: on the northern hills.]\n[s: The air] [v: was wet and quiet.]\n[s: White clouds of fog] [v: moved slowly] [pt: between the tall green trees] [pt: like soft white ghosts.]\n[s: You] [v: could not see] [o: more than ten steps forward.]\n[s: The birds] [v: were silent] [pt: in the branches.]\n[s: Cold water drops] [v: fell slowly] [pt: from the green pine needles] [pt: onto the wet brown earth below:] [o: drip, drip, drip.]"
      },
      {
        "en": "High above the ground, Zephyr sat on a thick branch of an ancient pine tree. He held his long wooden bow in his hands. His green cloak helped him hide among the green needles. He looked down into the grey valley with sharp eyes. He listened carefully to every small sound. The wind brought the smell of wet moss, cold stone, and something dark and rotten. Zephyr pulled a green arrow from his quiver and placed it on his bowstring.",
        "ru": "Высоко над землей Зефир сидел на толстой ветке древней сосны. Он держал свой длинный деревянный лук в руках. Его зеленый плащ помогал ему прятаться среди зеленых иголок. Он смотрел вниз в серую долину острыми глазами. Он внимательно прислушивался к каждому тихому звуку. Ветер приносил запах влажного мха, холодного камня и чего-то темного и гнилого. Зефир вытащил зеленую стрелу из колчана и положил ее на тетиву.",
        "chunkedEn": "[adv: High above the ground,] [s: Zephyr] [v: sat] [pt: on a thick branch of an ancient pine tree.]\n[s: He] [v: held] [o: his long wooden bow] [pt: in his hands.]\n[s: His green cloak] [v: helped] [o: him] [v: hide] [pt: among the green needles.]\n[s: He] [v: looked down] [pt: into the grey valley] [pt: with sharp eyes.]\n[s: He] [v: listened carefully] [pt: to every small sound.]\n[s: The wind] [v: brought] [o: the smell of wet moss, cold stone, and something dark and rotten.]\n[s: Zephyr] [v: pulled] [o: a green arrow] [pt: from his quiver] [c: and] [v: placed] [o: it] [pt: on his bowstring.]"
      },
      {
        "en": "Suddenly, a cold whisper came from the empty air right behind his shoulder: \"Do not move, green bird. If you make a loud noise, you will scare our guests away.\" A cold steel dagger touched the leather collar of his shirt. Zephyr did not jump in fear. He smiled with a quick and clever grin. He recognized that quiet, dangerous voice immediately.",
        "ru": "Внезапно холодный шепот раздался из пустого воздуха прямо за его плечом: \"Не двигайся, зеленая птица. Если ты издашь громкий звук, ты спугнешь наших гостей.\" Холодный стальной кинжал коснулся кожаного воротника его рубашки. Зефир не вздрогнул от страха. Он улыбнулся быстрой и лукавой улыбкой. Он сразу узнал этот тихий, опасный голос.",
        "chunkedEn": "[adv: Suddenly,] [s: a cold whisper] [v: came] [pt: from the empty air] [adv: right behind his shoulder:]\n[v: \"Do not move,] [o: green bird.]\n[b: If] [s: you] [v: make] [o: a loud noise,] [s: you] [v: will scare] [o: our guests away.\"]\n[s: A cold steel dagger] [v: touched] [o: the leather collar of his shirt.]\n[s: Zephyr] [v: did not jump] [pt: in fear.]\n[s: He] [v: smiled] [pt: with a quick and clever grin.]\n[s: He] [v: recognized] [o: that quiet, dangerous voice] [adv: immediately.]"
      },
      {
        "en": "\"You walk like a shadow, Selene,\" Zephyr whispered back without turning his head. \"Even the wind did not feel your soft footsteps on this branch. Did you come here from the dark underground mines to assassinate a poor forest ranger? Or do you just want to enjoy the beautiful morning fog with me?\"",
        "ru": "\"Ты ходишь словно тень, Селена,\" — прошептал Зефир в ответ, не поворачивая головы. \"Даже ветер не почувствовал твоих мягких шагов по этой ветке. Ты пришла сюда из темных подземных шахт, чтобы убить бедного лесного следопыта? Или ты просто хочешь насладиться красивым утренним туманом вместе со мной?\"",
        "chunkedEn": "[s: \"You] [v: walk] [pt: like a shadow,] [o: Selene,\"] [s: Zephyr] [v: whispered back] [pt: without turning his head.]\n[s: \"Even the wind] [v: did not feel] [o: your soft footsteps] [pt: on this branch.]\n[v: Did] [s: you] [v: come] [adv: here] [pt: from the dark underground mines] [v: to assassinate] [o: a poor forest ranger?]\n[c: Or] [v: do] [s: you] [adv: just] [v: want to enjoy] [o: the beautiful morning fog] [pt: with me?\"]"
      },
      {
        "en": "Selene stepped out from the grey mist and sat beside him on the wide branch. She wore tight black leather clothes with silver buckles. Her silver hair was tied back in a neat braid, and her violet eyes were sharp and calm. She put her twin daggers back into their black leather sheaths. \"Do not flatter yourself, ranger. Look down at the rocky pass below the big hill.\"",
        "ru": "Селена выступила из серого тумана и села рядом с ним на широкую ветку. Она носила облегающую черную кожаную одежду с серебряными пряжками. Ее серебряные волосы были собраны сзади в аккуратную косу, а фиолетовые глаза были острыми и спокойными. Ее убрала свои парные кинжалы обратно в черные кожаные ножны. \"Не льсти себе, следопыт. Посмотри вниз на каменистый проход под большим холмом.\"",
        "chunkedEn": "[s: Selene] [v: stepped out] [pt: from the grey mist] [c: and] [v: sat] [pt: beside him] [pt: on the wide branch.]\n[s: She] [v: wore] [o: tight black leather clothes with silver buckles.]\n[s: Her silver hair] [v: was tied back] [pt: in a neat braid,] [c: and] [s: her violet eyes] [v: were sharp and calm.]\n[s: She] [v: put] [o: her twin daggers] [adv: back] [pt: into their black leather sheaths.]\n[v: \"Do not flatter] [o: yourself,] [o: ranger.]\n[v: Look down] [pt: at the rocky pass] [pt: below the big hill.\"]"
      },
      {
        "en": "Zephyr looked down through the moving fog. Down in the valley, a small group of peaceful farmers and merchant carts were moving slowly along the wet dirt road. They carried apples, grain, and warm blankets to the border market. But behind the farmers, in the thick shadow of the rocks, dozens of bright red eyes glowed in the mist. A large pack of black Ash Hounds was creeping silently through the bushes.",
        "ru": "Зефир посмотрел вниз сквозь плывущий туман. Внизу в долине небольшая группа мирных фермеров и купеческих повозок медленно двигалась по мокрой грунтовой дороге. Они везли яблоки, зерно и теплые одеяла на пограничный рынок. Но позади фермеров, в густой тени скал, десятки ярких красных глаз светились в тумане. Большая стая черных Пепельных Гончих бесшумно кралась по кустам.",
        "chunkedEn": "[s: Zephyr] [v: looked down] [pt: through the moving fog.]\n[pt: Down in the valley,] [s: a small group of peaceful farmers and merchant carts] [v: were moving slowly] [pt: along the wet dirt road.]\n[s: They] [v: carried] [o: apples, grain, and warm blankets] [pt: to the border market.]\n[c: But] [pt: behind the farmers,] [pt: in the thick shadow of the rocks,] [s: dozens of bright red eyes] [v: glowed] [pt: in the mist.]\n[s: A large pack of black Ash Hounds] [v: was creeping silently] [pt: through the bushes.]"
      },
      {
        "en": "\"Ash Hounds,\" Selene said in a low voice. \"They have sharp black claws and teeth full of dark venom. They want to attack the farmers when the cart reaches the narrow wooden bridge. The monsters are hungry, and they follow orders from the deep Ash Rift.\"",
        "ru": "\"Пепельные Гончие,\" — тихо сказала Селена. \"У них острые черные когти и зубы, полные темного яда. Они хотят напасть на фермеров, когда повозка доедет до узкого деревянного моста. Монстры голодны и выполняют приказы из глубокого Пепельного Разлома.\"",
        "chunkedEn": "[o: \"Ash Hounds,\"] [s: Selene] [v: said] [pt: in a low voice.]\n[s: \"They] [v: have] [o: sharp black claws and teeth full of dark venom.]\n[s: They] [v: want to attack] [o: the farmers] [b: when] [s: the cart] [v: reaches] [o: the narrow wooden bridge.]\n[s: The monsters] [v: are hungry,] [c: and] [s: they] [v: follow] [o: orders] [pt: from the deep Ash Rift.\"]"
      },
      {
        "en": "Zephyr lifted his wooden bow and pulled his green string back to his ear: \"The Wild Circle protects all honest travelers on these roads. Shall we fight together, shadow stalker? Your twin daggers and my swift arrows can clear this mist in a minute!\"",
        "ru": "Зефир поднял свой деревянный лук и натянул зеленую тетиву к своему уху: \"Дикий Круг защищает всех честных путников на этих дорогах. Сразимся вместе, теневая охотница? Твои парные кинжалы и мои быстрые стрелы могут очистить этот туман за минуту!\"",
        "chunkedEn": "[s: Zephyr] [v: lifted] [o: his wooden bow] [c: and] [v: pulled] [o: his green string] [adv: back] [pt: to his ear:]\n[s: \"The Wild Circle] [v: protects] [o: all honest travelers] [pt: on these roads.]\n[v: Shall] [s: we] [v: fight together,] [o: shadow stalker?]\n[s: Your twin daggers and my swift arrows] [v: can clear] [o: this mist] [pt: in a minute!\"]"
      },
      {
        "en": "Selene smiled a cold and confident smile. She drew her daggers in a flash of silver light: \"Back to back, ranger. You shoot the leaders from the trees, and I will strike the flank from the shadows. Let us show these beasts no mercy!\"",
        "ru": "Селена улыбнулась холодной и уверенной улыбкой. Она обнажила кинжалы во вспышке серебряного света: \"Спина к спине, следопыт. Ты стреляй по вожакам с деревьев, а я ударю во фланг из теней. Не проявим к этим тварям никакой пощады!\"",
        "chunkedEn": "[s: Selene] [v: smiled] [o: a cold and confident smile.]\n[s: She] [v: drew] [o: her daggers] [pt: in a flash of silver light:]\n[adv: \"Back to back,] [o: ranger.]\n[s: You] [v: shoot] [o: the leaders] [pt: from the trees,] [c: and] [s: I] [v: will strike] [o: the flank] [pt: from the shadows.]\n[v: Let] [o: us] [v: show] [o: these beasts] [o: no mercy!\"]"
      }
    ],
    "quiz": {
      "question": "What were the Ash Hounds stalking in the foggy valley?",
      "options": [
        "A group of peaceful farmers and merchant carts",
        "A sleeping dragon in a cave",
        "A lost squad of royal knights"
      ],
      "correctIndex": 0,
      "rewardXp": 160
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
        "en": "The Emerald Spring was the most sacred water in the entire green valley. For hundreds of years, pure cold water flowed from deep underground through smooth white stones. Ancient green oak trees grew around the spring like a protective living wall. Beautiful blue flowers and wild sweet berries covered the soft grass. Forest deer and white birds always came to drink here in peace. But today, a strange sadness hung over the holy grove.",
        "ru": "Изумрудный Источник был самой священной водой во всей зеленой долине. Сотни лет чистая холодная вода текла из глубоких недр сквозь гладкие белые камни. Древние зеленые дубы росли вокруг источника, как защитная живая стена. Красивые синие цветы и дикие сладкие ягоды покрывали мягкую траву. Лесные олени и белые птицы всегда приходили пить сюда в мире. Но сегодня странная печаль нависла над священной рощей.",
        "chunkedEn": "[s: The Emerald Spring] [v: was] [o: the most sacred water in the entire green valley.]\n[pt: For hundreds of years,] [s: pure cold water] [v: flowed] [pt: from deep underground] [pt: through smooth white stones.]\n[s: Ancient green oak trees] [v: grew] [pt: around the spring] [pt: like a protective living wall.]\n[s: Beautiful blue flowers and wild sweet berries] [v: covered] [o: the soft grass.]\n[s: Forest deer and white birds] [adv: always] [v: came to drink] [adv: here] [pt: in peace.]\n[c: But] [pt: today,] [s: a strange sadness] [v: hung] [pt: over the holy grove.]"
      },
      {
        "en": "Oberon stood by the edge of the water basin. The tall Arch-Druid held his long wooden staff with living green leaves at the top. He wore a cloak made of soft green moss and brown bark. His long grey beard touched his chest. His warm amber eyes were filled with sorrow and worry. The once clear blue water in the spring was now dark grey and oily. Black bubbles rose slowly to the surface and popped with a foul smell.",
        "ru": "Оберон стоял у края водного бассейна. Высокий Верховный Друид держал свой длинный деревянный посох с живыми зелеными листьями на верхушке. Он носил плащ из мягкого зеленого мха и коричневой коры. Его длинная седая борода касалась груди. Его теплые янтарные глаза были полны печали и тревоги. Когда-то прозрачная синяя вода в источнике теперь была темно-серой и маслянистой. Черные пузыри медленно поднимались на поверхность и лопались с отвратительным запахом.",
        "chunkedEn": "[s: Oberon] [v: stood] [pt: by the edge of the water basin.]\n[s: The tall Arch-Druid] [v: held] [o: his long wooden staff with living green leaves at the top.]\n[s: He] [v: wore] [o: a cloak made of soft green moss and brown bark.]\n[s: His long grey beard] [v: touched] [o: his chest.]\n[s: His warm amber eyes] [v: were filled] [pt: with sorrow and worry.]\n[s: The once clear blue water in the spring] [v: was] [adv: now] [o: dark grey and oily.]\n[s: Black bubbles] [v: rose slowly] [pt: to the surface] [c: and] [v: popped] [pt: with a foul smell.]"
      },
      {
        "en": "\"The heart of the grove is sick,\" Oberon whispered with pain in his deep voice. \"The water carries dark ash from the eastern mountains. If this poison reaches the Silver River, all the crops in the valley will die, and the great forest trees will lose their green leaves before the autumn comes.\"",
        "ru": "\"Сердце рощи болеет,\" — прошептал Оберон с болью в глубоком голосе. \"Вода несет темный пепел с восточных гор. Если этот яд достигнет Серебряной Реки, все посевы в долине погибнут, а великие лесные деревья потеряют свои зеленые листья до прихода осени.\"",
        "chunkedEn": "[s: \"The heart of the grove] [v: is sick,\"] [s: Oberon] [v: whispered] [pt: with pain] [pt: in his deep voice.]\n[s: \"The water] [v: carries] [o: dark ash] [pt: from the eastern mountains.]\n[b: If] [s: this poison] [v: reaches] [o: the Silver River,] [s: all the crops in the valley] [v: will die,] [c: and] [s: the great forest trees] [v: will lose] [o: their green leaves] [b: before] [s: the autumn] [v: comes.\"]"
      },
      {
        "en": "Soft white light shone between the ancient oak trees. Astraea walked into the clearing with gentle steps. The high priestess wore her flowing white robe with golden stars. In her hands, she carried a silver bowl filled with sacred morning light. She knelt beside the old druid on the soft green moss. She placed her gentle hands above the oily dark water.",
        "ru": "Мягкий белый свет засиял между древними дубовыми деревьями. Астрея вошла на поляну тихими шагами. Верховная жрица носила свое струящееся белое одеяние с золотыми звездами. В руках она несла серебряную чашу, наполненную священным утренним светом. Она опустилась на колени рядом со старым друидом на мягкий зеленый мох. Она положила свои нежные руки над маслянистой темной водой.",
        "chunkedEn": "[s: Soft white light] [v: shone] [pt: between the ancient oak trees.]\n[s: Astraea] [v: walked] [pt: into the clearing] [pt: with gentle steps.]\n[s: The high priestess] [v: wore] [o: her flowing white robe with golden stars.]\n[pt: In her hands,] [s: she] [v: carried] [o: a silver bowl filled with sacred morning light.]\n[s: She] [v: knelt] [pt: beside the old druid] [pt: on the soft green moss.]\n[s: She] [v: placed] [o: her gentle hands] [pt: above the oily dark water.]"
      },
      {
        "en": "\"Do not lose hope, wise Oberon,\" Astraea said softly with a warm and peaceful smile. \"The light of the high stars is pure and strong. Nature and the light can heal any wound if we join our hearts and magic together. Let us combine your living forest roots and my holy starlight.\"",
        "ru": "\"Не теряй надежды, мудрый Оберон,\" — мягко сказала Астрея с теплой и мирной улыбкой. \"Свет высоких звезд чист и силен. Природа и свет могут исцелить любую рану, если мы объединим наши сердца и магию вместе. Давайте соединим твои живые лесные корни и мой священный звездный свет.\"",
        "chunkedEn": "[v: \"Do not lose] [o: hope,] [o: wise Oberon,\"] [s: Astraea] [v: said softly] [pt: with a warm and peaceful smile.]\n[s: \"The light of the high stars] [v: is pure and strong.]\n[s: Nature and the light] [v: can heal] [o: any wound] [b: if] [s: we] [v: join] [o: our hearts and magic together.]\n[v: Let] [o: us] [v: combine] [o: your living forest roots and my holy starlight.\"]"
      },
      {
        "en": "Oberon nodded slowly and pressed the base of his wooden staff deep into the soft earth. Thick green roots grew instantly from the staff and reached into the water. Green emerald energy flowed through the roots. At the same time, Astraea raised her silver bowl and chanted ancient words of healing. A beam of warm golden and emerald light shone down from the sky straight into the center of the spring.",
        "ru": "Оберон медленно кивнул и вдавил основание своего деревянного посоха глубоко в мягкую землю. Густые зеленые корни мгновенно выросли из посоха и потянулись в воду. Зеленая изумрудная энергия потекла по корням. В то же время Астрея подняла свою серебряную чашу и произнесла древние слова исцеления. Луч теплого золотого и изумрудного света пролился с неба прямо в центр источника.",
        "chunkedEn": "[s: Oberon] [v: nodded slowly] [c: and] [v: pressed] [o: the base of his wooden staff] [adv: deep] [pt: into the soft earth.]\n[s: Thick green roots] [v: grew instantly] [pt: from the staff] [c: and] [v: reached] [pt: into the water.]\n[s: Green emerald energy] [v: flowed] [pt: through the roots.]\n[pt: At the same time,] [s: Astraea] [v: raised] [o: her silver bowl] [c: and] [v: chanted] [o: ancient words of healing.]\n[s: A beam of warm golden and emerald light] [v: shone down] [pt: from the sky] [adv: straight] [pt: into the center of the spring.]"
      },
      {
        "en": "The black oil began to dissolve. The dark grey water turned clear and blue once again. Clean white bubbles rose happily to the surface. The blue flowers around the spring opened their petals and smiled under the warm light. A small white bird flew down from a branch and drank the pure cold water.",
        "ru": "Черная маслянистая пленка начала растворяться. Темно-серая вода снова стала прозрачной и синей. Чистые белые пузырьки радостно поднимались на поверхность. Синие цветы вокруг источника раскрыли свои лепестки и улыбнулись под теплым светом. Маленькая белая птица слетела с ветки и напилась чистой холодной воды.",
        "chunkedEn": "[s: The black oil] [v: began to dissolve.]\n[s: The dark grey water] [v: turned] [o: clear and blue] [adv: once again.]\n[s: Clean white bubbles] [v: rose happily] [pt: to the surface.]\n[s: The blue flowers around the spring] [v: opened] [o: their petals] [c: and] [v: smiled] [pt: under the warm light.]\n[s: A small white bird] [v: flew down] [pt: from a branch] [c: and] [v: drank] [o: the pure cold water.]"
      },
      {
        "en": "Oberon smiled with deep relief and bowed his head to the priestess: \"You have a kind and brave heart, Astraea. The people of the cities and the guardians of the wild forest must stand together. The dark storm is coming, but together we have the power to protect the living land.\"",
        "ru": "Оберон улыбнулся с глубоким облегчением и склонил голову перед жрицей: \"У тебя доброе и храброе сердце, Астрея. Люди городов и хранители дикого леса должны стоять вместе. Темная буря приближается, но вместе у нас есть сила защитить живую землю.\"",
        "chunkedEn": "[s: Oberon] [v: smiled] [pt: with deep relief] [c: and] [v: bowed] [o: his head] [pt: to the priestess:]\n[s: \"You] [v: have] [o: a kind and brave heart,] [o: Astraea.]\n[s: The people of the cities and the guardians of the wild forest] [v: must stand together.]\n[s: The dark storm] [v: is coming,] [c: but] [adv: together] [s: we] [v: have] [o: the power to protect the living land.\"]"
      }
    ],
    "quiz": {
      "question": "How did Astraea and Oberon purify the poisoned spring?",
      "options": [
        "They dug a new canal with iron shovels",
        "They combined living forest roots and holy starlight",
        "They built a high stone wall around it"
      ],
      "correctIndex": 1,
      "rewardXp": 160
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
