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
            if (typeof localStorage !== 'undefined') {
                this.xp = parseInt(localStorage.getItem('visual_fluency_xp') || '0', 10);
                this.fadingLevel = parseInt(localStorage.getItem('visual_fluency_fading_lvl') || '1', 10);
                this.pacerSpeedWpm = parseInt(localStorage.getItem('visual_fluency_pacer_wpm') || '150', 10);
                this.completedChapterIds = JSON.parse(localStorage.getItem('visual_fluency_completed_chapters') || '[]');
            }
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
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('visual_fluency_xp', this.xp.toString());
                localStorage.setItem('visual_fluency_fading_lvl', this.fadingLevel.toString());
                localStorage.setItem('visual_fluency_pacer_wpm', this.pacerSpeedWpm.toString());
                localStorage.setItem('visual_fluency_completed_chapters', JSON.stringify(this.completedChapterIds));
            }
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

        if (typeof window !== 'undefined' && window.syncPlayerStateToServer) {
            window.syncPlayerStateToServer();
        }

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

    parseTextIntoChunks(text) {
        if (!text) return [];
        const rawSentences = text.match(/[^.!?\n]+[.!?]*/g) || [text];
        const result = [];
        for (const raw of rawSentences) {
            const trimmed = raw.trim();
            if (trimmed.length > 0) {
                const chunks = this.parseSentence(trimmed);
                if (chunks && chunks.length > 0) {
                    result.push(chunks);
                }
            }
        }
        return result.length > 0 ? result : [this.parseSentence(text)];
    }

    parseSentence(sentence) {
        if (!sentence) return [];

        const PREPOSITIONS = new Set(['in', 'on', 'at', 'to', 'for', 'with', 'under', 'behind', 'near', 'from', 'through', 'into', 'onto', 'over', 'before', 'after', 'about', 'across', 'around', 'of', 'by', 'above', 'along', 'beside', 'between', 'against', 'beneath', 'below', 'without', 'toward', 'towards', 'alongside', 'outside', 'inside', 'upon']);
        const ARTICLES = new Set(['a', 'an', 'the']);
        const DETERMINERS = new Set(['a', 'an', 'the', 'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'all', 'every', 'each', 'some', 'any', 'no', 'both', 'many', 'much', 'few', 'several', 'another', 'other', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'fifty', 'hundred', 'hundreds', 'dozen', 'dozens']);
        const PRONOUNS = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'someone', 'everyone', 'anyone', 'no one', 'nobody', 'nothing', 'everything', 'something', 'who', 'whom', 'which', 'what']);
        const MODALS = new Set(['can', 'cannot', 'could', 'must', 'should', 'will', 'would', 'may', 'might', 'shall', "can't", "won't", "couldn't", "shouldn't", "wouldn't", "mustn't"]);
        const AUX_VERBS = new Set(['do', 'does', 'did', 'is', 'are', 'am', 'was', 'were', 'have', 'has', 'had', 'be', 'been', 'being', "don't", "doesn't", "didn't", "isn't", "aren't", "wasn't", "weren't", "haven't", "hasn't", "hadn't"]);
        const LINKING_VERBS = new Set(['is', 'are', 'am', 'was', 'were', 'be', 'been', 'became', 'become', 'felt', 'feel', 'seemed', 'seem', 'sounded', 'sound', 'smelled', 'smell', 'tasted', 'taste', 'remained', 'remain', 'stayed', 'stay', 'went', 'shone', 'grew', 'looked']);
        const DEGREE_ADVERBS = new Set(['very', 'so', 'too', 'quite', 'completely', 'still', 'always', 'almost', 'extremely', 'really', 'rather', 'fairly', 'totally', 'perfectly', 'also']);
        const CONJUNCTIONS = new Set(['and', 'or', 'but', 'so', 'yet', 'nor']);
        const CLAUSE_CONNECTORS = new Set(['because', 'although', 'while', 'when', 'if', 'since', 'where', 'as', 'though', 'unless', 'until']);

        const VERB_LEXICON = new Set([
            'arrived', 'attacked', 'knelt', 'stood', 'walked', 'held', 'picked', 'looked', 'shouted', 'ran', 'saw', 'smiled', 
            'moved', 'cut', 'shook', 'opened', 'closed', 'flew', 'fell', 'sat', 'got', 'put', 'spoke', 'gave', 'took', 'came', 
            'went', 'heard', 'felt', 'knew', 'thought', 'found', 'called', 'whispered', 'swung', 'broke', 'burned', 'flowed', 
            'turned', 'wore', 'carried', 'asked', 'answered', 'roared', 'crouched', 'slammed', 'gasped', 'smelled', 'touched',
            'jumped', 'pulled', 'showed', 'pointed', 'sizzled', 'lowered', 'stepped', 'danced', 'placed', 'nodded', 'gripped',
            'covered', 'listened', 'brought', 'recognized', 'squinted', 'warned', 'grunted', 'scratched', 'smashed', 'leapt',
            'tumbled', 'sealed', 'defeated', 'recovered', 'frown', 'frowned', 'waved', 'leaped', 'echoed', 'poured', 'unleashed',
            'melted', 'summoned', 'cast', 'restored', 'shot', 'froze', 'eliminated', 'retreated', 'wiped', 'uncovered',
            'saved', 'unite', 'find', 'complete', 'arrive', 'attack', 'kneel', 'stand', 'walk', 'hold', 'pick', 'look',
            'shout', 'run', 'see', 'smile', 'move', 'fly', 'fall', 'sit', 'get', 'speak', 'give', 'take', 'come', 'go',
            'hear', 'feel', 'know', 'think', 'call', 'whisper', 'swing', 'break', 'burn', 'flow', 'turn', 'wear', 'carry',
            'ask', 'answer', 'roar', 'slam', 'gasp', 'smell', 'touch', 'jump', 'pull', 'show', 'point', 'sizzle', 'lower',
            'step', 'dance', 'place', 'nod', 'grip', 'cover', 'listen', 'bring', 'recognize', 'squint', 'warn', 'grunt',
            'scratch', 'smash', 'leap', 'tumble', 'seal', 'defeat', 'recover', 'frown', 'wave', 'echo', 'pour', 'unleash',
            'melt', 'summon', 'restore', 'shoot', 'freeze', 'eliminate', 'retreat', 'wipe', 'uncover', 'save', 'wait',
            'cross', 'drink', 'protect', 'gather', 'fled', 'flee', 'stayed', 'stay', 'lived', 'live', 'wanted', 'want',
            'liked', 'like', 'needed', 'need', 'used', 'use', 'helped', 'help', 'started', 'start', 'began', 'begin',
            'worked', 'work', 'played', 'play', 'hit', 'tried', 'try', 'stopped', 'stop', 'tested', 'test', 'rose', 'rise',
            'lay', 'lie', 'laid', 'shone', 'shine', 'smashed', 'smashes', 'attacks', 'arrives', 'kneels', 'stands', 'walks',
            'holds', 'picks', 'looks', 'shouts', 'runs', 'sees', 'smiles', 'moves', 'flies', 'falls', 'sits', 'speaks',
            'gives', 'takes', 'comes', 'goes', 'hears', 'feels', 'knows', 'thinks', 'calls', 'whispers', 'swings', 'breaks',
            'burns', 'flows', 'turns', 'wears', 'carries', 'asks', 'answers', 'roars', 'slams', 'gasps', 'smells', 'touches',
            'jumps', 'pulls', 'shows', 'points', 'sizzles', 'lowers', 'steps', 'dances', 'places', 'nods', 'grips', 'covers',
            'listens', 'brings', 'recognizes', 'squints', 'warns', 'grunts', 'scratches', 'leaps', 'tumbles', 'seals',
            'defeats', 'recovers', 'frowns', 'waves', 'echoes', 'pours', 'unleashes', 'melts', 'summons', 'restores',
            'shoots', 'freezes', 'eliminates', 'retreats', 'wipes', 'uncovers', 'saves', 'waits', 'crosses', 'drinks',
            'protects', 'gathers', 'flees', 'stays', 'lives', 'wants', 'likes', 'needs', 'uses', 'helps', 'starts', 'begins',
            'works', 'plays', 'hits', 'tries', 'stops', 'tests', 'rises', 'lies', 'shines',
            'sang', 'sing', 'sings', 'snapped', 'snap', 'snaps', 'whispers', 'whispered', 'laughed', 'laugh', 'belongs',
            'belong', 'belonged', 'shines', 'shone'
        ]);

        const PARTICIPLE_ADJECTIVES = new Set([
            'burning', 'glowing', 'broken', 'frozen', 'sunken', 'shining', 'overturned', 'flying', 
            'living', 'braided', 'floating', 'falling', 'smoking', 'sparkling', 'poaching', 'rushing',
            'chafing', 'piercing', 'blinding', 'roaring', 'gleaming', 'crackling', 'frightened',
            'crouched', 'curved', 'trapped', 'poisoned', 'stolen', 'forgotten', 'united', 'shared',
            'sacred', 'ancient', 'polished', 'cushioned', 'fled', 'restless', 'safe', 'silent', 'bright',
            'warm', 'cold', 'loud', 'fast', 'slow', 'gentle', 'calm', 'sweet', 'fresh', 'sharp', 'heavy'
        ]);

        const isVerb = (w) => {
            if (!w) return false;
            const cleanWord = w.toLowerCase().replace(/[^a-z']/g, '');
            if (PARTICIPLE_ADJECTIVES.has(cleanWord)) return false;
            if (VERB_LEXICON.has(cleanWord) || AUX_VERBS.has(cleanWord) || MODALS.has(cleanWord)) return true;
            if (cleanWord.endsWith('ed') && cleanWord.length > 4 && !PARTICIPLE_ADJECTIVES.has(cleanWord)) return true;
            return false;
        };

        const rawTokens = sentence.match(/\S+/g) || [];
        const chunks = [];
        let i = 0;

        while (i < rawTokens.length) {
            let token = rawTokens[i];
            let clean = token.toLowerCase().replace(/[^a-z']/g, '');

            // Skip standalone punctuation or attach to previous chunk
            if (!clean) {
                if (chunks.length > 0) {
                    chunks[chunks.length - 1].text += ' ' + token;
                }
                i++;
                continue;
            }

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

            // 1. PREPOSITIONAL PHRASE (PP) -> [Preposition] + [Determiner/Modifiers/Noun]
            if (PREPOSITIONS.has(clean)) {
                let j = i + 1;
                while (j < rawTokens.length) {
                    let nextClean = rawTokens[j].toLowerCase().replace(/[^a-z']/g, '');
                    if (!nextClean) {
                        j++;
                        continue;
                    }
                    if (CONJUNCTIONS.has(nextClean) || CLAUSE_CONNECTORS.has(nextClean) || PREPOSITIONS.has(nextClean)) break;
                    if (isVerb(nextClean)) break;
                    j++;
                    if (/[.,;!?]$/.test(rawTokens[j - 1])) break;
                }
                
                const ppSlice = rawTokens.slice(i, j);
                chunks.push({
                    type: 'place-time',
                    role: 'Обстоятельство (Где? Куда? Когда?)',
                    text: ppSlice.join(' ')
                });
                i = j;
                continue;
            }

            // 2. VERB PHRASE (VP) / LINKING VERB + PREDICATE ADJECTIVES
            if (isVerb(clean) || clean === 'not' || clean === 'never') {
                let j = i + 1;
                let isNeg = clean === 'not' || clean === 'never' || clean.includes("'t") || clean === 'cannot';
                let isLinking = LINKING_VERBS.has(clean);

                while (j < rawTokens.length) {
                    let nextClean = rawTokens[j].toLowerCase().replace(/[^a-z']/g, '');
                    if (!nextClean) {
                        j++;
                        continue;
                    }
                    if (nextClean === 'not' || nextClean === 'never') {
                        isNeg = true;
                        j++;
                        continue;
                    }

                    // If next word is a preposition that starts a prepositional phrase, do NOT absorb!
                    if (PREPOSITIONS.has(nextClean)) {
                        if (j + 1 < rawTokens.length) {
                            let afterPrepClean = rawTokens[j + 1].toLowerCase().replace(/[^a-z']/g, '');
                            if (DETERMINERS.has(afterPrepClean) || ARTICLES.has(afterPrepClean) || PRONOUNS.has(afterPrepClean)) {
                                break; // leave preposition for PP rule!
                            }
                        }
                    }

                    // If linking verb, absorb degree adverbs and predicate adjectives (e.g. "was bright and warm", "was very fast and loud", "went completely silent")
                    if (isLinking) {
                        if (DEGREE_ADVERBS.has(nextClean) || PARTICIPLE_ADJECTIVES.has(nextClean) || ['bright', 'warm', 'cold', 'fast', 'slow', 'loud', 'quiet', 'safe', 'restless', 'silent', 'gentle', 'calm', 'sweet', 'fresh', 'sharp', 'heavy', 'great', 'wide', 'tall', 'dark', 'small', 'big', 'ready', 'open', 'closed', 'good', 'bad', 'happy', 'afraid', 'alive', 'dead', 'awake', 'asleep', 'peaceful', 'kind', 'restless'].includes(nextClean)) {
                            j++;
                            if (/[.,;!?]$/.test(rawTokens[j - 1])) break;
                            // Check if followed by "and" + another adjective
                            if (j < rawTokens.length && (rawTokens[j].toLowerCase() === 'and' || rawTokens[j].toLowerCase() === 'or')) {
                                if (j + 1 < rawTokens.length) {
                                    let afterConjClean = rawTokens[j + 1].toLowerCase().replace(/[^a-z']/g, '');
                                    if (PARTICIPLE_ADJECTIVES.has(afterConjClean) || ['bright', 'warm', 'cold', 'fast', 'slow', 'loud', 'quiet', 'safe', 'restless', 'silent', 'gentle', 'calm', 'sweet', 'fresh', 'sharp', 'heavy', 'great', 'wide', 'tall', 'dark', 'small', 'big', 'ready', 'open', 'closed', 'good', 'bad', 'happy', 'afraid', 'alive', 'dead', 'awake', 'asleep', 'peaceful', 'kind', 'restless'].includes(afterConjClean) || DEGREE_ADVERBS.has(afterConjClean)) {
                                        j += 2; // absorb "and [adj]"
                                        if (/[.,;!?]$/.test(rawTokens[j - 1])) break;
                                        continue;
                                    }
                                }
                            }
                            continue;
                        }
                    }

                    if (isVerb(nextClean) || ['up', 'down', 'out', 'back', 'forward', 'away', 'off', 'together', 'first', 'slowly', 'quietly', 'loudly', 'softly', 'firmly', 'closely'].includes(nextClean)) {
                        j++;
                        if (/[.,;!?]$/.test(rawTokens[j - 1])) break;
                        continue;
                    }
                    break;
                }

                const vpSlice = rawTokens.slice(i, j);
                chunks.push({
                    type: 'verb',
                    role: 'Сказуемое / Действие',
                    text: vpSlice.join(' '),
                    isNegative: isNeg
                });
                i = j;
                continue;
            }

            // 3. NOUN PHRASE (NP) / COORDINATE OBJECT
            let j = i;
            let isSubject = false;
            
            // Determine subject vs object
            if (chunks.length === 0 || chunks[chunks.length - 1].isClauseBreak) {
                isSubject = true;
            } else if (chunks[chunks.length - 1].isConjunction) {
                const conjText = chunks[chunks.length - 1].text.toLowerCase();
                if (['but', 'so', 'yet'].includes(conjText)) {
                    isSubject = true;
                } else {
                    let hasSubsequentVerb = false;
                    for (let k = i + 1; k < rawTokens.length; k++) {
                        let kClean = rawTokens[k].toLowerCase().replace(/[^a-z']/g, '');
                        if (isVerb(kClean)) {
                            hasSubsequentVerb = true;
                            break;
                        }
                        if (CONJUNCTIONS.has(kClean) || CLAUSE_CONNECTORS.has(kClean)) break;
                    }
                    isSubject = hasSubsequentVerb;
                }
            } else if (chunks[chunks.length - 1].type === 'place-time') {
                const hasVerb = chunks.some(c => c.type === 'verb');
                isSubject = !hasVerb;
            }
            
            while (j < rawTokens.length) {
                let nextClean = rawTokens[j].toLowerCase().replace(/[^a-z']/g, '');
                if (!nextClean) {
                    j++;
                    continue;
                }
                if (CONJUNCTIONS.has(nextClean) || CLAUSE_CONNECTORS.has(nextClean) || PREPOSITIONS.has(nextClean)) break;
                if (isVerb(nextClean)) break;
                j++;
                if (PRONOUNS.has(nextClean)) {
                    break;
                }
                if (/[.,;!?]$/.test(rawTokens[j - 1])) break;
            }

            if (j === i) j = i + 1;

            const npSlice = rawTokens.slice(i, j);
            chunks.push({
                type: isSubject ? 'subject' : 'object',
                role: isSubject ? 'Подлежащее (Кто?)' : 'Объект / Дополнение',
                text: npSlice.join(' ')
            });
            i = j;
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
        return '<span class="vf-chunk ' + lvlClass + '" data-chunk-idx="' + globalChunkIdx + '" title="' + (chunk.role || '') + '">' + chunk.text + '</span>';
    }
}

if (typeof window !== 'undefined') {
    window.visualFluency = new VisualFluencyEngine();
    window.VisualFluency = window.visualFluency;
}
if (typeof module !== 'undefined') {
    module.exports = { VisualFluencyEngine };
}
