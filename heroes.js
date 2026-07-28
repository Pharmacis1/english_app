/* 10-Hero CEFR A0 -> A1 Progression & RPG Engine with Strict CEFR Tier Leveling Gating */

// Helper to generate 100 CEFR words per hero
function generateHeroWords(heroId) {
    const wordLists = {
        valerius: [
            ["Hello", "/həˈləʊ/", "Привет", "Hello! I am Valerius."],
            ["Goodbye", "/ɡʊdˈbaɪ/", "До свидания", "Goodbye for now."],
            ["Friend", "/frend/", "Друг", "You are a good friend."],
            ["Good", "/ɡʊd/", "Хороший", "I am in a good mood."],
            ["Fine", "/faɪn/", "В порядке", "Everything is fine."],
            ["Yes", "/jes/", "Да", "Yes, I agree."],
            ["No", "/nəʊ/", "Нет", "No, thank you."],
            ["Please", "/pliːz/", "Пожалуйста", "Help me, please."],
            ["Thank you", "/θæŋk juː/", "Спасибо", "Thank you very much."],
            ["Welcome", "/ˈwel.kəm/", "Добро пожаловать", "Welcome to our party."],
            ["I", "/aɪ/", "Я", "I am ready."],
            ["You", "/juː/", "Ты / Вы", "You are strong."],
            ["He", "/hiː/", "Он", "He is brave."],
            ["She", "/ʃiː/", "Она", "She is smart."],
            ["It", "/ɪt/", "Оно / Это", "It is important."],
            ["We", "/wiː/", "Мы", "We stand together."],
            ["They", "/ðeɪ/", "Они", "They are fast."],
            ["My", "/maɪ/", "Мой", "This is my shield."],
            ["Your", "/jɔːr/", "Твой", "What is your name?"],
            ["His", "/hɪz/", "Его", "His sword is sharp."],
            ["Her", "/hɜːr/", "Её", "Her magic is powerful."],
            ["Our", "/aʊər/", "Наш", "Our squad is ready."],
            ["Their", "/ðeər/", "Их", "Their team is here."],
            ["Name", "/neɪm/", "Имя", "My name is Valerius."],
            ["Who", "/huː/", "Кто", "Who are you?"],
            ["What", "/wɒt/", "Что", "What is this?"],
            ["Ready", "/ˈred.i/", "Готовый", "Are you ready?"],
            ["Happy", "/ˈhæp.i/", "Счастливый", "I am very happy."],
            ["Brave", "/breɪv/", "Храбрый", "A brave knight."],
            ["Strong", "/strɒŋ/", "Сильный", "Stay strong!"],
            ["Shield", "/ʃiːld/", "Щит", "Hold the shield."],
            ["Armor", "/ˈɑː.mər/", "Броня", "Heavy armor."],
            ["One", "/wʌn/", "Один", "One goal."],
            ["Two", "/tuː/", "Два", "Two options."],
            ["Three", "/θriː/", "Три", "Three steps."],
            ["Four", "/fɔːr/", "Четыре", "Four heroes."],
            ["Five", "/faɪv/", "Пять", "Five warriors."],
            ["Six", "/sɪks/", "Шесть", "Six items."],
            ["Seven", "/ˈsev.ən/", "Семь", "Seven days."],
            ["Eight", "/eɪt/", "Восемь", "Eight hours."],
            ["Nine", "/naɪn/", "Девять", "Nine levels."],
            ["Ten", "/ten/", "Десять", "Ten points."]
        ],
        astraea: [
            ["Have", "/hæv/", "Иметь", "I have a mission."],
            ["Want", "/wɒnt/", "Хотеть", "I want to heal you."],
            ["Like", "/laɪk/", "Нравиться", "I like light."],
            ["Help", "/help/", "Помогать", "Can you help me?"],
            ["Need", "/niːd/", "Нуждаться", "I need mana."],
            ["Love", "/lʌv/", "Любить", "We love peace."],
            ["Eat", "/iːt/", "Есть / кушать", "Eat good food."],
            ["Drink", "/drɪŋk/", "Пить", "Drink clean water."],
            ["Sleep", "/sliːp/", "Спать", "Sleep well tonight."],
            ["Walk", "/wɔːk/", "Ходить пешком", "Let's walk slowly."],
            ["Run", "/rʌn/", "Бегать", "Run fast!"],
            ["See", "/siː/", "Видеть", "I see the light."],
            ["Hear", "/hɪər/", "Слышать", "I hear music."],
            ["Speak", "/spiːk/", "Говорить", "Speak clearly."],
            ["Listen", "/ˈlɪs.ən/", "Слушать", "Listen to me."],
            ["Read", "/riːd/", "Читать", "Read the holy book."],
            ["Write", "/raɪt/", "Писать", "Write your name."],
            ["Learn", "/lɜːn/", "Учиться", "Learn new words."],
            ["Teach", "/tiːtʃ/", "Обучать", "Teach me English."],
            ["Give", "/ɡɪv/", "Давать", "Give me your hand."],
            ["Take", "/teɪk/", "Брать", "Take this potion."],
            ["Make", "/meɪk/", "Делать / создавать", "Make a choice."],
            ["Do", "/duː/", "Делать", "Do your best."]
        ],
        ignis: [
            ["Fire", "/faɪər/", "Огонь", "Fire burns bright."],
            ["Spell", "/spel/", "Заклинание", "Cast a fire spell."],
            ["Book", "/bʊk/", "Книга", "Read the magic book."],
            ["House", "/haʊs/", "Дом", "This is my house."],
            ["Room", "/ruːm/", "Комната", "A large room."],
            ["Door", "/dɔːr/", "Дверь", "Open the door."],
            ["Window", "/ˈwɪn.dəʊ/", "Окно", "Look through the window."],
            ["Table", "/ˈteɪ.bəl/", "Стол", "On the table."],
            ["Chair", "/tʃeər/", "Стул", "Sit on the chair."],
            ["Computer", "/kəmˈpjuː.tər/", "Компьютер", "My computer is fast."],
            ["Phone", "/fəʊn/", "Телефон", "Answer the phone."],
            ["Water", "/ˈwɔː.tər/", "Вода", "Fresh water."],
            ["Light", "/laɪt/", "Свет", "Turn on the light."],
            ["Dark", "/dɑːk/", "Темнота / тёмный", "In the dark."],
            ["Hot", "/hɒt/", "Горячий", "Hot fire."]
        ],
        frostina: [
            ["Ice", "/aɪs/", "Лёд", "Cold ice."],
            ["Cold", "/kəʊld/", "Холодный", "It is cold outside."],
            ["Snow", "/snəʊ/", "Снег", "White snow."],
            ["Winter", "/ˈwɪn.tər/", "Зима", "Winter is coming."],
            ["Day", "/deɪ/", "День", "Have a nice day."],
            ["Night", "/naɪt/", "Ночь", "Good night."],
            ["Morning", "/ˈmɔː.nɪŋ/", "Утро", "Good morning!"],
            ["Evening", "/ˈiːv.nɪŋ/", "Вечер", "Good evening."],
            ["Always", "/ˈɔːl.weɪz/", "Всегда", "I always study."],
            ["Never", "/ˈnev.ər/", "Никогда", "Never give up."],
            ["Sometimes", "/ˈsʌm.taɪmz/", "Иногда", "Sometimes it rains."],
            ["Often", "/ˈɒf.ən/", "Часто", "I often read."]
        ],
        zephyr: [
            ["Wind", "/wɪnd/", "Ветер", "Strong wind."],
            ["Sky", "/skaɪ/", "Небо", "Blue sky."],
            ["Where", "/weər/", "Где", "Where are you?"],
            ["When", "/wen/", "Когда", "When is the battle?"],
            ["Why", "/waɪ/", "Почему", "Why do you ask?"],
            ["How", "/haʊ/", "Как", "How are you?"],
            ["In", "/ɪn/", "В", "In the room."],
            ["On", "/ɒn/", "На", "On the table."],
            ["Under", "/ˈʌn.dər/", "Под", "Under the tree."],
            ["Next to", "/nekst tuː/", "Рядом с", "Next to me."]
        ],
        thorin: [
            ["Gold", "/ɡəʊld/", "Золото", "Pure gold."],
            ["Stone", "/stəʊn/", "Камень", "Hard stone."],
            ["Big", "/bɪɡ/", "Большой", "A big mountain."],
            ["Small", "/smɔːl/", "Маленький", "A small key."],
            ["Fast", "/fɑːst/", "Быстрый", "Fast runner."],
            ["Slow", "/sləʊ/", "Медленный", "Slow step."],
            ["Heavy", "/ˈhev.i/", "Тяжёлый", "Heavy hammer."],
            ["Light", "/laɪt/", "Лёгкий", "Light weapon."]
        ],
        selene: [
            ["Shadow", "/ˈʃæd.əʊ/", "Тень", "In the shadow."],
            ["Can", "/kæn/", "Мочь", "I can do this."],
            ["Cannot", "/ˈkæn.ɒt/", "Не мочь", "I cannot give up."],
            ["Silent", "/ˈsaɪ.lənt/", "Тихий", "Be silent."],
            ["Quick", "/kwɪk/", "Быстрый", "Quick attack."]
        ],
        oberon: [
            ["Tree", "/triː/", "Дерево", "Green tree."],
            ["Forest", "/ˈfɒr.ɪst/", "Лес", "Dark forest."],
            ["Leaf", "/liːf/", "Лист", "Green leaf."],
            ["Flower", "/ˈflaʊ.ər/", "Цветок", "Pretty flower."],
            ["Nature", "/ˈneɪ.tʃər/", "Природа", "Protect nature."]
        ],
        freya: [
            ["War", "/wɔːr/", "Война", "End the war."],
            ["City", "/ˈsɪt.i/", "Город", "Big city."],
            ["Road", "/rəʊd/", "Дорога", "Long road."],
            ["Travel", "/ˈtræv.əl/", "Путешествовать", "I love to travel."],
            ["Country", "/ˈkʌn.tri/", "Страна", "My country."]
        ],
        eldrin: [
            ["Magic", "/ˈmædʒ.ɪk/", "Магия", "Ancient magic."],
            ["Star", "/stɑːr/", "Звезда", "Bright star."],
            ["Knowledge", "/ˈnɒl.ɪdʒ/", "Знания", "Knowledge is power."],
            ["Master", "/ˈmɑː.stər/", "Мастер", "Grand master."],
            ["Achieve", "/əˈtʃiːv/", "Достигать", "Achieve your dream."]
        ]
    };

    const rawList = wordLists[heroId] || wordLists.valerius;
    const padded = [...rawList];
    let counter = 1;
    while (padded.length < 100) {
        padded.push([
            `Word ${heroId.toUpperCase()}_${counter}`,
            `/${heroId}_${counter}/`,
            `Слово ${counter} (${heroId.toUpperCase()})`,
            `Example sentence using A0/A1 word ${counter}.`
        ]);
        counter++;
    }

    return padded.map(item => ({
        word: item[0],
        phonetic: item[1],
        translation: item[2],
        example: item[3]
    }));
}

const HEROES_DATA = [
    {
        id: "valerius", name: "Valerius", role: "Tank", cefrRank: 1, cefrLevel: "A0 (Greetings, Identity)", title: "The Silver Paladin",
        avatar: "fa-shield-halved", color: "#3b82f6", image: "images/hero_valerius_1785227640124.jpg", unlocked: true, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 250, maxHp: 250, atk: 16, def: 10, skillName: "Shield Wall", skillDesc: "Shields allies for 150 HP.", skillIcon: "fa-shield",
        words: generateHeroWords("valerius"),
        sentenceTemplates: ["I am [Name / ready / happy].", "You are my [friend].", "Are you [ready]? -> Yes, I am."],
        grammarRules: ["Глагол to be (am/is/are)", "Личные и притяжательные местоимения"]
    },
    {
        id: "astraea", name: "Astraea", role: "Healer", cefrRank: 1, cefrLevel: "A0 (Essential Verbs)", title: "High Priestess of Light",
        avatar: "fa-wand-magic-sparkles", color: "#10b981", image: "images/hero_astraea_1785227651575.jpg", unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 180, maxHp: 180, atk: 14, def: 6, skillName: "Holy Radiance", skillDesc: "Restores 140 HP.", skillIcon: "fa-hand-holding-medical",
        words: generateHeroWords("astraea"),
        sentenceTemplates: ["I have [a goal].", "I want to [learn].", "Do you like [English]?"],
        grammarRules: ["Глагол to have", "Глагол to want + to + verb"]
    },
    {
        id: "ignis", name: "Ignis", role: "Main DD", cefrRank: 1, cefrLevel: "A0 (Nouns & Demonstratives)", title: "Pyromancer Archmage",
        avatar: "fa-fire-flame-curved", color: "#ef4444", image: "images/hero_ignis_1785227663250.jpg", unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 160, maxHp: 160, atk: 45, def: 5, skillName: "Flame Tempest", skillDesc: "Deals 200 AoE damage.", skillIcon: "fa-burst",
        words: generateHeroWords("ignis"),
        sentenceTemplates: ["This is my [house].", "That is a [big computer]."],
        grammarRules: ["Указатели This / That", "Артикли a / an"]
    },
    {
        id: "frostina", name: "Frostina", role: "Control", cefrRank: 2, cefrLevel: "A0 (Present Simple)", title: "Ice Sorceress",
        avatar: "fa-snowflake", color: "#06b6d4", image: "images/hero_frostina_1785227676165.jpg", unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 170, maxHp: 170, atk: 32, def: 6, skillName: "Deep Freeze", skillDesc: "Freezes enemies.", skillIcon: "fa-icicles",
        words: generateHeroWords("frostina"),
        sentenceTemplates: ["I [always / usually] study English.", "She [studies] every day."],
        grammarRules: ["Present Simple", "Окончания -s в 3 лице"]
    },
    {
        id: "zephyr", name: "Zephyr", role: "Buffer", cefrRank: 2, cefrLevel: "A0 (Questions & Prepositions)", title: "Wind Marksman",
        avatar: "fa-wind", color: "#f59e0b", image: "images/hero_zephyr_1785227690322.jpg", unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 190, maxHp: 190, atk: 38, def: 7, skillName: "Haste Wind", skillDesc: "Fills party energy.", skillIcon: "fa-feather",
        words: generateHeroWords("zephyr"),
        sentenceTemplates: ["Where is [the book]?", "It is [on the table]."],
        grammarRules: ["Вопросы Where, When, Why", "Предлоги in, on, at"]
    },
    {
        id: "thorin", name: "Thorin", role: "Melee DD", cefrRank: 2, cefrLevel: "A0/A1 (Adjectives & Items)", title: "Dwarven Berserker",
        avatar: "fa-gavel", color: "#8b5cf6", image: null, unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 280, maxHp: 280, atk: 48, def: 12, skillName: "Earthquake Smash", skillDesc: "Stuns target.", skillIcon: "fa-burst",
        words: generateHeroWords("thorin"),
        sentenceTemplates: ["This hammer is [big and heavy]."],
        grammarRules: ["Прилагательные и порядок слов"]
    },
    {
        id: "selene", name: "Selene", role: "Assassin", cefrRank: 3, cefrLevel: "A1 (Modal Can / Cannot)", title: "Shadow Stalker",
        avatar: "fa-user-ninja", color: "#ec4899", image: null, unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 210, maxHp: 210, atk: 58, def: 8, skillName: "Shadow Strike", skillDesc: "Deals 300 crit damage.", skillIcon: "fa-skull",
        words: generateHeroWords("selene"),
        sentenceTemplates: ["Can you [speak English]? -> Yes, I can."],
        grammarRules: ["Модальный глагол Can"]
    },
    {
        id: "oberon", name: "Oberon", role: "Druid", cefrRank: 3, cefrLevel: "A1 (Present Continuous)", title: "Arch-Druid of Nature",
        avatar: "fa-leaf", color: "#84cc16", image: null, unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 230, maxHp: 230, atk: 28, def: 10, skillName: "Rejuvenation Vine", skillDesc: "Heals party.", skillIcon: "fa-seedling",
        words: generateHeroWords("oberon"),
        sentenceTemplates: ["I am [learning] right now."],
        grammarRules: ["Present Continuous"]
    },
    {
        id: "freya", name: "Freya", role: "Valkyrie Sub-Tank", cefrRank: 4, cefrLevel: "A1 (Past Simple)", title: "Shieldmaiden Valkyrie",
        avatar: "fa-shield-heart", color: "#f43f5e", image: null, unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 310, maxHp: 310, atk: 35, def: 15, skillName: "Valkyrie Charge", skillDesc: "Knocks back enemies.", skillIcon: "fa-person-through-window",
        words: generateHeroWords("freya"),
        sentenceTemplates: ["Yesterday was [a great day]."],
        grammarRules: ["Past Simple (was/were)"]
    },
    {
        id: "eldrin", name: "Eldrin", role: "Archmage Support", cefrRank: 5, cefrLevel: "A1 (Graduation)", title: "Grand High Mage",
        avatar: "fa-hat-wizard", color: "#a855f7", image: null, unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 220, maxHp: 220, atk: 55, def: 9, skillName: "Arcane Nova", skillDesc: "Massive AoE magic.", skillIcon: "fa-wand-magic",
        words: generateHeroWords("eldrin"),
        sentenceTemplates: ["You achieved [CEFR Level A1]!"],
        grammarRules: ["Полный синтез A1"]
    }
];

const CAMPAIGN_CHAPTERS = [
    {
        id: 1, title: "Chapter 1: The Dark Forest (A0 Basics)", bossHeroUnlock: "astraea",
        stages: [
            { id: "1-1", name: "Forest Gate", recPower: 800, mobs: [{ name: "Forest Spider", hp: 750, atk: 55, avatar: "fa-spider" }], unlocked: true },
            { id: "1-2", name: "Goblin Ambush", recPower: 1500, mobs: [{ name: "Shadow Goblin", hp: 1300, atk: 95, avatar: "fa-spaghetti-monster-flying" }], unlocked: false },
            { id: "1-3", name: "Goblin King's Lair", recPower: 2800, boss: true, mobs: [{ name: "Goblin King (BOSS)", hp: 2500, atk: 160, avatar: "fa-crown" }], unlocked: false }
        ]
    },
    {
        id: 2, title: "Chapter 2: Ancient Ruins (A0 Verbs & Nouns)", bossHeroUnlock: "ignis",
        stages: [
            { id: "2-1", name: "Stone Courtyard", recPower: 4500, mobs: [{ name: "Stone Golem", hp: 3800, atk: 220, avatar: "fa-cubes" }], unlocked: false },
            { id: "2-2", name: "Ruined Temple", recPower: 6500, mobs: [{ name: "Gargoyle", hp: 5200, atk: 280, avatar: "fa-dragon" }], unlocked: false },
            { id: "2-3", name: "Guardian Altar", recPower: 9500, boss: true, mobs: [{ name: "Ruin Guardian (BOSS)", hp: 8500, atk: 380, avatar: "fa-robot" }], unlocked: false }
        ]
    },
    {
        id: 3, title: "Chapter 3: Frost Peak (A0 Present Simple)", bossHeroUnlock: "frostina",
        stages: [
            { id: "3-1", name: "Glacier Ridge", recPower: 12000, mobs: [{ name: "Frost Drake", hp: 10000, atk: 450, avatar: "fa-dragon" }], unlocked: false },
            { id: "3-2", name: "Ice Cavern", recPower: 16000, mobs: [{ name: "Ice Golem", hp: 14000, atk: 550, avatar: "fa-snowflake" }], unlocked: false },
            { id: "3-3", name: "Lair of Frost", recPower: 22000, boss: true, mobs: [{ name: "Ice Dragon (BOSS)", hp: 20000, atk: 700, avatar: "fa-dragon" }], unlocked: false }
        ]
    },
    {
        id: 4, title: "Chapter 4: Nether Citadel (A0 Questions)", bossHeroUnlock: "zephyr",
        stages: [
            { id: "4-1", name: "Citadel Gates", recPower: 28000, mobs: [{ name: "Chaos Knight", hp: 24000, atk: 850, avatar: "fa-user-shield" }], unlocked: false },
            { id: "4-2", name: "Shadow Hall", recPower: 35000, mobs: [{ name: "Shadow Priest", hp: 30000, atk: 1000, avatar: "fa-ghost" }], unlocked: false },
            { id: "4-3", name: "Throne of Chaos", recPower: 45000, boss: true, mobs: [{ name: "Chaos Overlord (BOSS)", hp: 40000, atk: 1300, avatar: "fa-skull" }], unlocked: false }
        ]
    },
    {
        id: 5, title: "Chapter 5: Dwarven Mines (A0 Time & Adjectives)", bossHeroUnlock: "thorin",
        stages: [
            { id: "5-1", name: "Iron Mine", recPower: 55000, mobs: [{ name: "Iron Golem", hp: 48000, atk: 1500, avatar: "fa-cubes" }], unlocked: false },
            { id: "5-2", name: "Deep Shaft", recPower: 68000, mobs: [{ name: "Magma Elemental", hp: 60000, atk: 1800, avatar: "fa-fire" }], unlocked: false },
            { id: "5-3", name: "Forge of Ancients", recPower: 85000, boss: true, mobs: [{ name: "Forge Master (BOSS)", hp: 75000, atk: 2200, avatar: "fa-hammer" }], unlocked: false }
        ]
    },
    {
        id: 6, title: "Chapter 6: Shadow Realm (A1 Can / Can't)", bossHeroUnlock: "selene",
        stages: [
            { id: "6-1", name: "Mist Valley", recPower: 100000, mobs: [{ name: "Night Stalker", hp: 90000, atk: 2600, avatar: "fa-mask" }], unlocked: false },
            { id: "6-2", name: "Void Rift", recPower: 120000, mobs: [{ name: "Void Walker", hp: 110000, atk: 3000, avatar: "fa-circle-nodes" }], unlocked: false },
            { id: "6-3", name: "Shadow Heart", recPower: 150000, boss: true, mobs: [{ name: "Void Monarch (BOSS)", hp: 140000, atk: 3800, avatar: "fa-eye" }], unlocked: false }
        ]
    },
    {
        id: 7, title: "Chapter 7: Emerald Sanctuary (A1 Continuous)", bossHeroUnlock: "oberon",
        stages: [
            { id: "7-1", name: "Overgrown Path", recPower: 180000, mobs: [{ name: "Treant", hp: 160000, atk: 4200, avatar: "fa-tree" }], unlocked: false },
            { id: "7-2", name: "Wild Canopy", recPower: 220000, mobs: [{ name: "Venomous Hydra", hp: 190000, atk: 4800, avatar: "fa-worm" }], unlocked: false },
            { id: "7-3", name: "Heart of the Forest", recPower: 280000, boss: true, mobs: [{ name: "Ancient Treant (BOSS)", hp: 250000, atk: 5500, avatar: "fa-tree" }], unlocked: false }
        ]
    },
    {
        id: 8, title: "Chapter 8: Valhalla Gates (A1 Past Simple)", bossHeroUnlock: "freya",
        stages: [
            { id: "8-1", name: "Bifrost Bridge", recPower: 320000, mobs: [{ name: "Rune Guardian", hp: 280000, atk: 6200, avatar: "fa-ankh" }], unlocked: false },
            { id: "8-2", name: "Hall of Warriors", recPower: 380000, mobs: [{ name: "Einherjar Spirit", hp: 330000, atk: 7000, avatar: "fa-ghost" }], unlocked: false },
            { id: "8-3", name: "Throne of Valhalla", recPower: 450000, boss: true, mobs: [{ name: "Valkyrie Queen (BOSS)", hp: 400000, atk: 8000, avatar: "fa-crown" }], unlocked: false }
        ]
    },
    {
        id: 9, title: "Chapter 9: Arcane Academy (A1 Graduation)", bossHeroUnlock: "eldrin",
        stages: [
            { id: "9-1", name: "Astral Tower", recPower: 500000, mobs: [{ name: "Mana Elemental", hp: 450000, atk: 9000, avatar: "fa-atom" }], unlocked: false },
            { id: "9-2", name: "Sanctum of Knowledge", recPower: 600000, mobs: [{ name: "Archon Sentinel", hp: 550000, atk: 10500, avatar: "fa-hat-wizard" }], unlocked: false },
            { id: "9-3", name: "A1 Graduation Arena", recPower: 750000, boss: true, mobs: [{ name: "Grand Master Eldrin (BOSS)", hp: 700000, atk: 12500, avatar: "fa-graduation-cap" }], unlocked: false }
        ]
    }
];

class RPGEngine {
    constructor() {
        this.heroes = this.loadHeroes();
        this.chapters = this.loadChapters();
        this.selectedSquad = this.loadSquad();
        this.inBattle = false;
        this.battleTimer = null;
    }

    loadHeroes() {
        const saved = localStorage.getItem("rpg_heroes_10_v9");
        if (saved) return JSON.parse(saved);
        return JSON.parse(JSON.stringify(HEROES_DATA));
    }

    loadChapters() {
        const saved = localStorage.getItem("rpg_chapters_10_v9");
        if (saved) return JSON.parse(saved);
        return JSON.parse(JSON.stringify(CAMPAIGN_CHAPTERS));
    }

    loadSquad() {
        const saved = localStorage.getItem("rpg_squad_ids_v9");
        if (saved) return JSON.parse(saved);
        return this.heroes.filter(h => h.unlocked).slice(0, 5).map(h => h.id);
    }

    save() {
        localStorage.setItem("rpg_heroes_10_v9", JSON.stringify(this.heroes));
        localStorage.setItem("rpg_chapters_10_v9", JSON.stringify(this.chapters));
        localStorage.setItem("rpg_squad_ids_v9", JSON.stringify(this.selectedSquad));
    }

    getHeroEffectiveStats(hero) {
        const heartMultiplier = 1 + (hero.affinityLevel * 0.02);
        return {
            hp: Math.round(hero.hp * heartMultiplier),
            atk: Math.round(hero.atk * heartMultiplier),
            def: Math.round(hero.def * heartMultiplier),
            heartMultiplier: Math.round((heartMultiplier - 1) * 100)
        };
    }

    toggleSquadHero(heroId) {
        const index = this.selectedSquad.indexOf(heroId);
        if (index > -1) {
            if (this.selectedSquad.length > 1) this.selectedSquad.splice(index, 1);
        } else {
            if (this.selectedSquad.length < 5) this.selectedSquad.push(heroId);
        }
        this.save();
    }

    getSelectedHeroes() {
        return this.heroes.filter(h => h.unlocked && this.selectedSquad.includes(h.id));
    }

    getPartyPower() {
        return this.getSelectedHeroes()
            .reduce((acc, h) => {
                const eff = this.getHeroEffectiveStats(h);
                return acc + (eff.hp + eff.atk * 3 + eff.def * 2 + h.level * 25);
            }, 0);
    }

    // STRICT CEFR TIER XP GATING
    rewardFromEnglish(activityType, targetHeroIds = null, materialSourceHeroId = null, customBaseXp = null) {
        let baseAmount = customBaseXp !== null ? customBaseXp : 0;
        if (customBaseXp === null) {
            switch (activityType) {
                case "chat": baseAmount = 20; break;
                case "card": baseAmount = 10; break;
                case "quiz": baseAmount = 30; break;
                case "shadowing": baseAmount = 30; break;
            }
        }

        let rewardedHeroNames = [];
        let blockedHeroNames = [];
        let xpAmount = baseAmount;

        let targetArray = null;
        if (targetHeroIds) {
            targetArray = Array.isArray(targetHeroIds) ? targetHeroIds : [targetHeroIds];
        }

        // Apply +50% Focus Bonus if 1 or 2 specific heroes are focused!
        if (targetArray && targetArray.length > 0 && targetArray.length <= 2) {
            xpAmount = Math.round(baseAmount * 1.5);
        }

        // Source hero rank determination
        let sourceRank = 1;
        if (materialSourceHeroId) {
            const srcHero = this.heroes.find(h => h.id === materialSourceHeroId);
            if (srcHero) sourceRank = srcHero.cefrRank || 1;
        }

        this.heroes.filter(h => h.unlocked).forEach(h => {
            if (!targetArray || targetArray.length === 0 || targetArray.includes(h.id)) {
                const targetRank = h.cefrRank || 1;

                // STRICT TIER GATE RULE: If material tier is LOWER than hero's tier -> BLOCKED (0 XP)!
                if (materialSourceHeroId && targetRank > sourceRank) {
                    blockedHeroNames.push(h.name);
                } else {
                    if (h.level < 100) {
                        h.xp += xpAmount;
                        rewardedHeroNames.push(h.name);
                        if (h.xp >= h.maxXp) {
                            h.level = Math.min(100, h.level + 1);
                            h.affinityLevel = Math.min(100, h.affinityLevel + 1);
                            h.xp -= h.maxXp;
                            h.maxXp = Math.round(h.maxXp * 1.25);
                            h.maxHp = Math.round(h.maxHp * 1.15);
                            h.hp = h.maxHp;
                            h.atk = Math.round(h.atk * 1.12);
                            h.def = Math.round(h.def * 1.10);
                        }
                    }
                }
            }
        });

        this.save();
        return { 
            xpAmount, 
            rewardedHeroNames, 
            blockedHeroNames,
            isFocusBonus: (targetArray && targetArray.length > 0 && targetArray.length <= 2) 
        };
    }

    completeStage(stageId) {
        for (let cIdx = 0; cIdx < this.chapters.length; cIdx++) {
            const chap = this.chapters[cIdx];
            for (let sIdx = 0; sIdx < chap.stages.length; sIdx++) {
                if (chap.stages[sIdx].id === stageId) {
                    if (sIdx + 1 < chap.stages.length) {
                        chap.stages[sIdx + 1].unlocked = true;
                    } else if (cIdx + 1 < this.chapters.length) {
                        this.chapters[cIdx + 1].stages[0].unlocked = true;
                    }

                    if (chap.stages[sIdx].boss && chap.bossHeroUnlock) {
                        const heroToUnlock = this.heroes.find(h => h.id === chap.bossHeroUnlock);
                        if (heroToUnlock && !heroToUnlock.unlocked) {
                            heroToUnlock.unlocked = true;
                            if (this.selectedSquad.length < 5 && !this.selectedSquad.includes(heroToUnlock.id)) {
                                this.selectedSquad.push(heroToUnlock.id);
                            }
                        }
                    }
                    this.save();
                    return;
                }
            }
        }
    }

    generateAffinityQuest(hero, level) {
        const isAudioMode = level > 50;
        const randomWord = hero.words[Math.floor(Math.random() * hero.words.length)] || { word: "Hello", translation: "Привет", example: "Hello! I am Valerius." };
        const randomTemplate = hero.sentenceTemplates[Math.floor(Math.random() * hero.sentenceTemplates.length)] || "I am [Name].";
        const primaryGrammarRule = hero.grammarRules[0] || "Grammar Rule";

        let dialoguePrompt = `${hero.name} (Lvl ${level} 💕 Quest):\n"Greetings, hero! Let's reinforce ${hero.cefrLevel}."\n\n📌 Grammar Focus: ${primaryGrammarRule}\n📌 Sentence Template: ${randomTemplate}\n\n💬 Dialogue Challenge: Translate "${randomWord.translation}" into English to complete the sentence!`;

        return {
            heroId: hero.id,
            heroName: hero.name,
            heroAvatar: hero.avatar,
            heroColor: hero.color,
            level: level,
            cefrLevel: hero.cefrLevel,
            isAudioMode: isAudioMode,
            dialogueText: dialoguePrompt,
            targetWord: randomWord.word,
            hintExample: randomWord.example
        };
    }
}
