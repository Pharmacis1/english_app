/* =========================================================================
   VISUAL FLUENCY & SPEED READING ENGINE (CEFR A1 -> C1)
   1..100 Levels • 1,000,000 XP Progression • 4 Fading Levels • Visual Pacer
   ========================================================================= */

class VisualFluencyEngine {
    constructor() {
        this.TOTAL_MAX_XP = 1000000;
        this.MAX_LEVEL = 100;
        
        // Ranks definition
        this.RANKS = [
            { minLvl: 1, maxLvl: 10, title: 'Novice Gazer', icon: '🌱', color: '#60a5fa', desc: 'Привыкание к L1 цветам и базовым смысловым блокам' },
            { minLvl: 11, maxLvl: 25, title: 'Chunk Scout', icon: '🏹', color: '#34d399', desc: 'Уверенное освоение блочного зрения A1' },
            { minLvl: 26, maxLvl: 45, title: 'Syntactic Seeker', icon: '🔮', color: '#a78bfa', desc: 'Уровень A2: легкий переход на мягкие контуры (L2-L3)' },
            { minLvl: 46, maxLvl: 70, title: 'Flow Striker', icon: '⚡', color: '#f59e0b', desc: 'Уровень B1: чтение блоками без внутренней субвокализации' },
            { minLvl: 71, maxLvl: 90, title: 'Velocity Adept', icon: '⚔️', color: '#ec4899', desc: 'Уровень B2: беглое сканирование сложных текстов (250+ WPM)' },
            { minLvl: 91, maxLvl: 100, title: 'Grand Archon of Speed', icon: '👑', color: '#fbbf24', desc: 'Свободное чтение с листа (C1+)' }
        ];

        // State
        this.xp = 0;
        this.level = 1;
        this.fadingLevel = 1; // 1: Bright, 2: Soft, 3: Blocks, 4: Pure Text
        this.pacerSpeedWpm = 150;
        this.isPacerRunning = false;
        this.pacerTimer = null;
        this.activeChunkIndex = -1;
        this.completedChapterIds = [];

        this.loadState();
    }

    loadState() {
        try {
            this.xp = parseInt(localStorage.getItem('visual_fluency_xp') || '0', 10);
            this.fadingLevel = parseInt(localStorage.getItem('visual_fluency_fading_lvl') || '1', 10);
            this.pacerSpeedWpm = parseInt(localStorage.getItem('visual_fluency_pacer_wpm') || '150', 10);
            this.completedChapterIds = JSON.parse(localStorage.getItem('visual_fluency_completed_chapters') || '[]');
            this.level = this.calculateLevelFromXp(this.xp);
        } catch (e) {
            console.error('Error loading Visual Fluency state:', e);
            this.xp = 0;
            this.level = 1;
            this.fadingLevel = 1;
            this.pacerSpeedWpm = 150;
            this.completedChapterIds = [];
        }
    }

    saveState() {
        try {
            localStorage.setItem('visual_fluency_xp', this.xp.toString());
            localStorage.setItem('visual_fluency_fading_lvl', this.fadingLevel.toString());
            localStorage.setItem('visual_fluency_pacer_wpm', this.pacerSpeedWpm.toString());
            localStorage.setItem('visual_fluency_completed_chapters', JSON.stringify(this.completedChapterIds));
        } catch (e) {
            console.error('Error saving Visual Fluency state:', e);
        }
    }

    calculateLevelFromXp(xp) {
        if (xp <= 0) return 1;
        if (xp >= this.TOTAL_MAX_XP) return this.MAX_LEVEL;
        const ratio = Math.min(1, xp / this.TOTAL_MAX_XP);
        const lvl = Math.floor(1 + 99 * Math.pow(ratio, 0.65));
        return Math.max(1, Math.min(this.MAX_LEVEL, lvl));
    }

    getXpForLevel(lvl) {
        if (lvl <= 1) return 0;
        if (lvl >= this.MAX_LEVEL) return this.TOTAL_MAX_XP;
        const ratio = (lvl - 1) / 99;
        return Math.floor(this.TOTAL_MAX_XP * Math.pow(ratio, 1 / 0.65));
    }

    getRank(lvl) {
        const found = this.RANKS.find(r => lvl >= r.minLvl && lvl <= r.maxLvl);
        return found || this.RANKS[0];
    }

    getProgressData() {
        const currentLvl = this.level;
        const currentLvlXp = this.getXpForLevel(currentLvl);
        const nextLvlXp = this.getXpForLevel(currentLvl + 1);
        const rank = this.getRank(currentLvl);

        const xpInLevel = this.xp - currentLvlXp;
        const levelTotalReq = Math.max(1, nextLvlXp - currentLvlXp);
        const percent = currentLvl >= this.MAX_LEVEL ? 100 : Math.min(100, Math.max(0, Math.floor((xpInLevel / levelTotalReq) * 100)));

        return {
            level: currentLvl,
            xp: this.xp,
            currentLvlXp,
            nextLvlXp,
            xpInLevel,
            levelTotalReq,
            percent,
            rank,
            totalMaxXp: this.TOTAL_MAX_XP
        };
    }

    addChapterWordXp(chapterId, wordCount) {
        if (!chapterId || !wordCount || wordCount <= 0) return null;
        if (this.completedChapterIds.includes(chapterId)) {
            return { awarded: false, reason: 'already_completed', xpGained: 0, totalXp: this.xp, level: this.level, rank: this.getRank(this.level) };
        }

        const oldLevel = this.level;
        this.completedChapterIds.push(chapterId);
        this.xp = Math.min(this.TOTAL_MAX_XP, this.xp + wordCount);
        this.level = this.calculateLevelFromXp(this.xp);
        this.saveState();

        const leveledUp = this.level > oldLevel;
        return {
            awarded: true,
            xpGained: wordCount,
            totalXp: this.xp,
            oldLevel,
            newLevel: this.level,
            leveledUp,
            rank: this.getRank(this.level)
        };
    }

    parseSentence(sentence) {
        if (!sentence) return [];
        const tokens = sentence.split(/\s+/).filter(t => t.length > 0);
        const chunks = [];
        let i = 0;

        const ARTICLES = new Set(['a', 'an', 'the']);
        const PREPOSITIONS = new Set(['in', 'on', 'at', 'to', 'for', 'with', 'under', 'behind', 'near', 'from', 'through', 'into', 'onto', 'over', 'before', 'after', 'about', 'across', 'around', 'of', 'by']);
        const PRONOUNS = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'this', 'that', 'these', 'those', 'my', 'his', 'her', 'our', 'their', 'someone', 'everyone', 'nothing', 'everything']);
        const MODALS = new Set(['can', 'cannot', "can't", 'must', 'should', 'will', "won't", 'would', 'may', 'could']);
        const AUX_VERBS = new Set(['do', 'does', 'did', "don't", "doesn't", "didn't", 'is', 'are', 'am', 'was', 'were', 'have', 'has', 'had']);
        const CONJUNCTIONS = new Set(['and', 'or', 'but', 'so', 'yet']);
        const CLAUSE_CONNECTORS = new Set(['because', 'although', 'while', 'when', 'if', 'since', 'where', 'as']);

        while (i < tokens.length) {
            let token = tokens[i];
            let clean = token.toLowerCase().replace(/[^a-z']/g, '');

            if (CLAUSE_CONNECTORS.has(clean)) {
                chunks.push({ isClauseBreak: true, text: '↳ ' + token });
                i++;
                continue;
            }

            if (CONJUNCTIONS.has(clean)) {
                chunks.push({ isConjunction: true, text: token });
                i++;
                continue;
            }

            if (PREPOSITIONS.has(clean)) {
                let particles = [token];
                let modifiers = [];
                let j = i + 1;

                while (j < tokens.length) {
                    let nextClean = tokens[j].toLowerCase().replace(/[^a-z']/g, '');
                    if (ARTICLES.has(nextClean) || ['every', 'all', 'some', 'any', 'each', 'my', 'his', 'her', 'their', 'our'].includes(nextClean)) {
                        particles.push(tokens[j]);
                        j++;
                    } else if (['big', 'small', 'tall', 'deep', 'high', 'dark', 'bright', 'ancient', 'cold', 'warm', 'green', 'silver', 'red', 'blue', 'old', 'new', 'young', 'soft', 'wide', 'heavy', 'fast', 'slow', 'quiet', 'loud', 'great', 'wooden', 'stone', 'emerald', 'black', 'white', 'golden'].includes(nextClean)) {
                        modifiers.push(tokens[j]);
                        j++;
                    } else {
                        break;
                    }
                }

                if (j < tokens.length) {
                    chunks.push({
                        type: 'place-time',
                        role: 'Обстоятельство (Где? Куда? Когда?)',
                        text: tokens.slice(i, j + 1).join(' '),
                        particles: particles,
                        modifiers: modifiers,
                        core: tokens[j]
                    });
                    i = j + 1;
                    continue;
                }
            }

            if (MODALS.has(clean) || AUX_VERBS.has(clean) || clean.includes("'t") || clean === 'cannot') {
                let particles = [];
                let modifiers = [token];
                let isNeg = clean.includes("'t") || clean === 'cannot';
                let j = i + 1;

                if (j < tokens.length && (tokens[j].toLowerCase() === 'not' || tokens[j].toLowerCase() === 'never')) {
                    modifiers.push(tokens[j]);
                    isNeg = true;
                    j++;
                }

                if (j < tokens.length && (tokens[j].toLowerCase() === 'to' || tokens[j].toLowerCase() === 'be')) {
                    particles.push(tokens[j]);
                    j++;
                }

                if (j < tokens.length) {
                    chunks.push({
                        type: 'verb',
                        role: 'Сказуемое / Действие',
                        text: tokens.slice(i, j + 1).join(' '),
                        particles: particles,
                        modifiers: modifiers,
                        core: tokens[j],
                        isNegative: isNeg
                    });
                    i = j + 1;
                    continue;
                }
            }

            if (ARTICLES.has(clean) || PRONOUNS.has(clean)) {
                let particles = [token];
                let modifiers = [];
                let j = i + 1;

                while (j < tokens.length) {
                    let nextClean = tokens[j].toLowerCase().replace(/[^a-z']/g, '');
                    if (['rare', 'ancient', 'powerful', 'magic', 'nice', 'big', 'small', 'tall', 'deep', 'high', 'dark', 'bright', 'cold', 'warm', 'green', 'silver', 'red', 'blue', 'old', 'new', 'young', 'soft', 'wide', 'heavy', 'fast', 'slow', 'quiet', 'loud', 'great', 'wooden', 'stone', 'emerald', 'black', 'white', 'golden'].includes(nextClean)) {
                        modifiers.push(tokens[j]);
                        j++;
                    } else {
                        break;
                    }
                }

                if (j < tokens.length) {
                    chunks.push({
                        type: chunks.length === 0 ? 'subject' : 'object',
                        role: chunks.length === 0 ? 'Подлежащее (Кто?)' : 'Объект / Дополнение',
                        text: tokens.slice(i, j + 1).join(' '),
                        particles: particles,
                        modifiers: modifiers,
                        core: tokens[j]
                    });
                    i = j + 1;
                    continue;
                }
            }

            chunks.push({
                type: chunks.length === 0 ? 'subject' : 'object',
                role: 'Смысловой блок',
                text: token,
                particles: [],
                modifiers: [],
                core: token
            });
            i++;
        }

        return chunks;
    }

    renderChunkHtml(chunk, fadingLevel, globalChunkIdx) {
        if (chunk.isConjunction) {
            return '<span class="vf-connector">' + chunk.text + '</span>';
        }

        if (chunk.isClauseBreak) {
            return '<div class="vf-clause-break"><span class="vf-clause-pill">' + chunk.text + '</span><span class="vf-clause-line"></span></div>';
        }

        const lvlClass = 'vf-l' + fadingLevel + '-' + (chunk.type || 'object');
        let innerHtml = '';

        if (chunk.isNegative && fadingLevel <= 2) {
            innerHtml += '<span class="vf-neg-pill">NOT</span>';
        }

        if (chunk.particles && chunk.particles.length > 0) {
            chunk.particles.forEach(p => {
                innerHtml += '<span class="vf-particle">' + p + '</span>';
            });
        }

        if (chunk.modifiers && chunk.modifiers.length > 0) {
            chunk.modifiers.forEach(m => {
                innerHtml += '<span class="vf-modifier">' + m + '</span>';
            });
        }

        innerHtml += '<span class="vf-core">' + (chunk.core || chunk.text) + '</span>';

        return '<span class="vf-chunk ' + lvlClass + '" data-chunk-idx="' + globalChunkIdx + '" title="' + (chunk.role || '') + '">' + innerHtml + '</span>';
    }
}

if (typeof window !== 'undefined') {
    window.visualFluency = new VisualFluencyEngine();
}
if (typeof module !== 'undefined') {
    module.exports = { VisualFluencyEngine };
}
