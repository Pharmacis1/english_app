const HEROES_DATA = [
    {
        id: "valerius", name: "Valerius", role: "Main Tank", cefrRank: 1, cefrLevel: "A0 (Greetings & Identity)", title: "The Silver Paladin",
        avatar: "fa-shield-halved", color: "#3b82f6", image: "images/hero_valerius_1785227640124.jpg", unlocked: true, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 250, maxHp: 250, atk: 22, def: 18, skillName: "Aegis Shield", skillDesc: "Taunts all enemies & increases DEF.", skillIcon: "fa-shield",
        words: generateHeroWords("valerius"),
        sentenceTemplates: ["Hello, I am [Valerius].", "My name is [a hero].", "I am [happy / ready]."],
        grammarRules: ["Глагол 'to be' (am, is, are)", "Личные местоимения (I, You, He, She, It)"]
    },
    {
        id: "astraea", name: "Astraea", role: "Healer", cefrRank: 1, cefrLevel: "A0 (Verbs & Actions)", title: "High Priestess of Light",
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
        id: "eldrin", name: "Eldrin", role: "Grand Archmage", cefrRank: 5, cefrLevel: "A1 (A1 Graduation)", title: "Grand Archmage",
        avatar: "fa-hat-wizard", color: "#a855f7", image: null, unlocked: false, level: 1, xp: 0, maxXp: 100, affinityLevel: 0,
        hp: 260, maxHp: 260, atk: 65, def: 14, skillName: "Arcane Nova", skillDesc: "Deals 500 massive damage.", skillIcon: "fa-meteor",
        words: generateHeroWords("eldrin"),
        sentenceTemplates: ["I have [achieved A1 mastery]."],
        grammarRules: ["Комплексное повторение всей грамматики A1"]
    }
];

const CAMPAIGN_CHAPTERS = [
    {
        id: 1, title: "Chapter 1: The Silver Outpost (Valerius & Astraea)",
        stages: [
            { id: "1-1", name: "Outpost Gate", recPower: 100, mobs: [{ name: "Goblin Scout", hp: 120, atk: 15, avatar: "fa-skull" }], boss: false, unlocked: true },
            { id: "1-2", name: "Ruined Watchtower", recPower: 180, mobs: [{ name: "Shadow Wolf", hp: 200, atk: 22, avatar: "fa-ghost" }], boss: false, unlocked: false },
            { id: "1-3", name: "High Priestess Altar", recPower: 260, mobs: [{ name: "Corrupted Sentinel", hp: 450, atk: 35, avatar: "fa-dragon" }], boss: true, unlockHeroId: "astraea", unlocked: false }
        ]
    },
    {
        id: 2, title: "Chapter 2: Fiery Volcanic Spire (Ignis)",
        stages: [
            { id: "2-1", name: "Ashen Path", recPower: 350, mobs: [{ name: "Fire Imp", hp: 280, atk: 30, avatar: "fa-fire" }], boss: false, unlocked: false },
            { id: "2-2", name: "Magma Chamber", recPower: 450, mobs: [{ name: "Lava Elemental", hp: 380, atk: 40, avatar: "fa-volcano" }], boss: false, unlocked: false },
            { id: "2-3", name: "Pyromancer Throne", recPower: 600, mobs: [{ name: "Ignis Fire Drake", hp: 750, atk: 55, avatar: "fa-dragon" }], boss: true, unlockHeroId: "ignis", unlocked: false }
        ]
    },
    {
        id: 3, title: "Chapter 3: Frostbite Caverns (Frostina & Zephyr)",
        stages: [
            { id: "3-1", name: "Glacier Entrance", recPower: 750, mobs: [{ name: "Ice Spider", hp: 450, atk: 45, avatar: "fa-spider" }], boss: false, unlocked: false },
            { id: "3-2", name: "Whispering Winds", recPower: 900, mobs: [{ name: "Frost Golem", hp: 580, atk: 50, avatar: "fa-snowflake" }], boss: false, unlocked: false },
            { id: "3-3", name: "Sorceress Ice Keep", recPower: 1150, mobs: [{ name: "Frostina Ice Queen", hp: 1100, atk: 70, avatar: "fa-icicles" }], boss: true, unlockHeroId: "frostina", unlocked: false }
        ]
    },
    {
        id: 4, title: "Chapter 4: Dwarven Iron Mines (Thorin & Zephyr)",
        stages: [
            { id: "4-1", name: "Stone Shaft", recPower: 1350, mobs: [{ name: "Cave Bear", hp: 700, atk: 60, avatar: "fa-paw" }], boss: false, unlocked: false },
            { id: "4-2", name: "Forge of Ancestors", recPower: 1600, mobs: [{ name: "Iron Automaton", hp: 900, atk: 75, avatar: "fa-robot" }], boss: false, unlocked: false },
            { id: "4-3", name: "Berserker Arena", recPower: 1900, mobs: [{ name: "Thorin Berserker Chief", hp: 1500, atk: 95, avatar: "fa-burst" }], boss: true, unlockHeroId: "thorin", unlocked: false }
        ]
    },
    {
        id: 5, title: "Chapter 5: Shadow Veil Catacombs (Selene)",
        stages: [
            { id: "5-1", name: "Silent Alley", recPower: 2200, mobs: [{ name: "Shadow Assassin", hp: 1000, atk: 90, avatar: "fa-user-ninja" }], boss: false, unlocked: false },
            { id: "5-2", name: "Moonlit Vault", recPower: 2500, mobs: [{ name: "Phantom Spectre", hp: 1200, atk: 110, avatar: "fa-ghost" }], boss: false, unlocked: false },
            { id: "5-3", name: "Shadow Stalker Lair", recPower: 2900, mobs: [{ name: "Selene Shadow Queen", hp: 2000, atk: 130, avatar: "fa-skull" }], boss: true, unlockHeroId: "selene", unlocked: false }
        ]
    },
    {
        id: 6, title: "Chapter 6: Emerald Druid Grove (Oberon)",
        stages: [
            { id: "6-1", name: "Mossy Glade", recPower: 3300, mobs: [{ name: "Corrupted Ent", hp: 1500, atk: 120, avatar: "fa-tree" }], boss: false, unlocked: false },
            { id: "6-2", name: "Rejuvenation Spring", recPower: 3800, mobs: [{ name: "Wild Treant", hp: 1800, atk: 140, avatar: "fa-leaf" }], boss: false, unlocked: false },
            { id: "6-3", name: "Arch-Druid Sanctuary", recPower: 4400, mobs: [{ name: "Oberon Nature Avatar", hp: 2800, atk: 165, avatar: "fa-seedling" }], boss: true, unlockHeroId: "oberon", unlocked: false }
        ]
    },
    {
        id: 7, title: "Chapter 7: Valkyrie Sky Fortress (Freya)",
        stages: [
            { id: "7-1", name: "Cloud Gate", recPower: 5000, mobs: [{ name: "Storm Rider", hp: 2200, atk: 160, avatar: "fa-wind" }], boss: false, unlocked: false },
            { id: "7-2", name: "Thunder Citadel", recPower: 5800, mobs: [{ name: "Valkyrie Guard", hp: 2600, atk: 185, avatar: "fa-shield-halved" }], boss: false, unlocked: false },
            { id: "7-3", name: "Hall of Valhalla", recPower: 6700, mobs: [{ name: "Freya Shieldmaiden Queen", hp: 4000, atk: 220, avatar: "fa-person-through-window" }], boss: true, unlockHeroId: "freya", unlocked: false }
        ]
    },
    {
        id: 8, title: "Chapter 8: Arcane Spire & Grand Archmage (Eldrin)",
        stages: [
            { id: "8-1", name: "Astral Library", recPower: 7500, mobs: [{ name: "Arcane Golem", hp: 3200, atk: 210, avatar: "fa-book" }], boss: false, unlocked: false },
            { id: "8-2", name: "Dimension Portal", recPower: 8500, mobs: [{ name: "Cosmic Phoenix", hp: 3800, atk: 245, avatar: "fa-meteor" }], boss: false, unlocked: false },
            { id: "8-3", name: "Grand Master Throne", recPower: 10000, mobs: [{ name: "Eldrin Grand Archmage", hp: 6000, atk: 300, avatar: "fa-hat-wizard" }], boss: true, unlockHeroId: "eldrin", unlocked: false }
        ]
    },
    {
        id: 9, title: "Chapter 9: Final A1 Graduation Trial (Master All 10 Heroes)",
        stages: [
            { id: "9-1", name: "Trial of Wisdom", recPower: 12000, mobs: [{ name: "Grand Examiner", hp: 7000, atk: 320, avatar: "fa-graduation-cap" }], boss: false, unlocked: false },
            { id: "9-2", name: "Trial of Valhalla", recPower: 14500, mobs: [{ name: "Ancient Dragon King", hp: 9000, atk: 380, avatar: "fa-dragon" }], boss: false, unlocked: false },
            { id: "9-3", name: "Supreme Graduation Summit", recPower: 18000, mobs: [{ name: "CEFR A1 Master Titan", hp: 14000, atk: 450, avatar: "fa-trophy" }], boss: true, unlocked: false }
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
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return HEROES_DATA.map(defaultHero => {
                    const savedHero = parsed.find(h => h.id === defaultHero.id);
                    if (savedHero) {
                        return {
                            ...defaultHero,
                            level: savedHero.level || defaultHero.level,
                            xp: savedHero.xp || defaultHero.xp,
                            maxXp: savedHero.maxXp || defaultHero.maxXp,
                            affinityLevel: savedHero.affinityLevel || defaultHero.affinityLevel,
                            unlocked: savedHero.unlocked !== undefined ? savedHero.unlocked : defaultHero.unlocked,
                            words: generateHeroWords(defaultHero.id) // Ensure 100 real words loaded!
                        };
                    }
                    return defaultHero;
                });
            } catch (e) {}
        }
        return HEROES_DATA;
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

        // Apply +50% Focus Bonus if 1 or 2 specific heroes are focused in general practice (chat / shadowing)!
        if (activityType !== "card" && targetArray && targetArray.length > 0 && targetArray.length <= 2) {
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
            rewardedHeroNames, 
            blockedHeroNames, 
            xpAmount,
            isFocusBonus: activityType !== "card" && targetArray && targetArray.length > 0 && targetArray.length <= 2
        };
    }

    completeStage(stageId) {
        let stageFound = false;
        for (let c of this.chapters) {
            for (let i = 0; i < c.stages.length; i++) {
                if (c.stages[i].id === stageId) {
                    c.stages[i].cleared = true;
                    if (c.stages[i].boss && c.stages[i].unlockHeroId) {
                        const heroToUnlock = this.heroes.find(h => h.id === c.stages[i].unlockHeroId);
                        if (heroToUnlock) heroToUnlock.unlocked = true;
                    }
                    if (i + 1 < c.stages.length) {
                        c.stages[i + 1].unlocked = true;
                    } else {
                        const nextChap = this.chapters.find(ch => ch.id === c.id + 1);
                        if (nextChap && nextChap.stages.length > 0) {
                            nextChap.stages[0].unlocked = true;
                        }
                    }
                    stageFound = true;
                    break;
                }
            }
            if (stageFound) break;
        }
        this.save();
    }

    generateAffinityQuest(hero, questLevel) {
        const wordPool = hero.words;
        const targetObj = wordPool[Math.floor(Math.random() * wordPool.length)] || wordPool[0];
        
        const isAudioMode = questLevel > 50;
        
        const dialogueText = isAudioMode 
            ? `[Audio Dialogue]: "${hero.name} whispers: Listen carefully and say the word '${targetObj.word}' (${targetObj.translation}) out loud to unlock 💕 Heart Level ${questLevel}!"`
            : `[Text Quest]: "${hero.name} asks: What is the English word for '${targetObj.translation}'? (Hint: ${targetObj.example})"`;

        return {
            heroId: hero.id,
            heroName: hero.name,
            level: questLevel,
            dialogueText,
            targetWord: targetObj.word,
            hintExample: targetObj.example,
            isAudioMode
        };
    }
}
