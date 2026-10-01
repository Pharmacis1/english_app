/* EnglishPulse AI — New Words Multi-Stage Learning Engine (4 Stages, 5-Word Batches) */

const NEW_WORDS_DATABASE = [
    {
        id: "detective",
        word: "detective",
        phonetic: "/dɪˈtek.tɪv/",
        translation: "детектив",
        exampleEn: "The detective carefully examined the room.",
        exampleRu: "Детектив внимательно осмотрел комнату."
    },
    {
        id: "crime",
        word: "crime",
        phonetic: "/kraɪm/",
        translation: "преступление",
        exampleEn: "The police solved a dangerous crime.",
        exampleRu: "Полиция раскрыла опасное преступление."
    },
    {
        id: "investigate",
        word: "investigate",
        phonetic: "/ɪnˈves.tɪ.ɡeɪt/",
        translation: "расследовать",
        exampleEn: "We need to investigate every clue.",
        exampleRu: "Нам нужно расследовать каждую зацепку."
    },
    {
        id: "evidence",
        word: "evidence",
        phonetic: "/ˈev.ɪ.dəns/",
        translation: "доказательство / улики",
        exampleEn: "The detective found fresh evidence.",
        exampleRu: "Детектив нашёл свежие улики."
    },
    {
        id: "footprint",
        word: "footprint",
        phonetic: "/ˈfʊt.prɪnt/",
        translation: "след ноги",
        exampleEn: "There was a muddy footprint near the window.",
        exampleRu: "Возле окна был грязный след ноги."
    },
    {
        id: "fingerprint",
        word: "fingerprint",
        phonetic: "/ˈfɪŋ.ɡə.prɪnt/",
        translation: "отпечаток пальца",
        exampleEn: "They lifted a fingerprint from the glass.",
        exampleRu: "Они сняли отпечаток пальца со стакана."
    },
    {
        id: "alibi",
        word: "alibi",
        phonetic: "/ˈæl.ɪ.baɪ/",
        translation: "алиби",
        exampleEn: "The suspect had a solid alibi for that evening.",
        exampleRu: "У подозреваемого было надёжное алиби на тот вечер."
    },
    {
        id: "witness",
        word: "witness",
        phonetic: "/ˈwɪt.nəs/",
        translation: "свидетель",
        exampleEn: "A key witness saw the thief in the park.",
        exampleRu: "Ключевой свидетель видел вора в парке."
    },
    {
        id: "suspect",
        word: "suspect",
        phonetic: "/ˈsʌs.pekt/",
        translation: "подозреваемый",
        exampleEn: "The officer questioned the main suspect.",
        exampleRu: "Офицер допросил главного подозреваемого."
    },
    {
        id: "thief",
        word: "thief",
        phonetic: "/θiːf/",
        translation: "вор",
        exampleEn: "The quick thief vanished in the shadows.",
        exampleRu: "Быстрый вор скрылся в тенях."
    },
    {
        id: "lie",
        word: "lie",
        phonetic: "/laɪ/",
        translation: "ложь / лгать",
        exampleEn: "He could tell when someone told a lie.",
        exampleRu: "Он понимал, когда кто-то говорил ложь."
    },
    {
        id: "note",
        word: "note",
        phonetic: "/nəʊt/",
        translation: "записка",
        exampleEn: "She found a handwritten note on the table.",
        exampleRu: "Она нашла рукописную записку на столе."
    },
    {
        id: "report",
        word: "report",
        phonetic: "/rɪˈpɔːt/",
        translation: "отчет / рапорт",
        exampleEn: "The detective filed an official report.",
        exampleRu: "Детектив подал официальный рапорт."
    },
    {
        id: "information",
        word: "information",
        phonetic: "/ˌɪn.fəˈmeɪ.ʃən/",
        translation: "информация",
        exampleEn: "We need accurate information about the event.",
        exampleRu: "Нам нужна точная информация о событии."
    },
    {
        id: "explain",
        word: "explain",
        phonetic: "/ɪkˈspleɪn/",
        translation: "объяснять",
        exampleEn: "Can you explain what you saw last night?",
        exampleRu: "Ты можешь объяснить, что ты видел прошлой ночью?"
    },
    {
        id: "guess",
        word: "guess",
        phonetic: "/ɡes/",
        translation: "догадываться / предполагать",
        exampleEn: "Try to guess where the key was hidden.",
        exampleRu: "Попробуй догадаться, где был спрятан ключ."
    },
    {
        id: "police_policeman",
        word: "police / policeman",
        validAnswers: ["police", "policeman", "police / policeman"],
        phonetic: "/pəˈliːs / pəˈliːs.mən/",
        translation: "полиция / полицейский",
        exampleEn: "A brave policeman arrived on time.",
        exampleRu: "Храбрый полицейский прибыл вовремя."
    },
    {
        id: "neighbour",
        word: "neighbour",
        phonetic: "/ˈneɪ.bər/",
        translation: "сосед",
        exampleEn: "Our kind neighbour called the station.",
        exampleRu: "Наш добрый сосед позвонил в участок."
    },
    {
        id: "visitor",
        word: "visitor",
        phonetic: "/ˈvɪz.ɪ.tər/",
        translation: "посетитель / гость",
        exampleEn: "A late visitor knocked on the door.",
        exampleRu: "Поздний посетитель постучал в дверь."
    },
    {
        id: "owner",
        word: "owner",
        phonetic: "/ˈəʊ.nər/",
        translation: "владелец",
        exampleEn: "The owner unlocked the antique cabinet.",
        exampleRu: "Владелец отпер старинный шкаф."
    },
    {
        id: "waiter",
        word: "waiter",
        phonetic: "/ˈweɪ.tər/",
        translation: "официант",
        exampleEn: "The polite waiter poured fresh tea.",
        exampleRu: "Вежливый официант налил свежий чай."
    },
    {
        id: "watchmaker",
        word: "watchmaker",
        phonetic: "/ˈwɒtʃˌmeɪ.kər/",
        translation: "часовщик",
        exampleEn: "The skilled watchmaker fixed the tiny gears.",
        exampleRu: "Искусный часовщик починил крошечные шестерёнки."
    },
    {
        id: "grandparents",
        word: "grandparents",
        phonetic: "/ˈɡræn.peə.rənts/",
        translation: "бабушка и дедушка",
        exampleEn: "I often visit my grandparents on weekends.",
        exampleRu: "Я часто навещаю бабушку и дедушку по выходным."
    },
    {
        id: "teenager",
        word: "teenager",
        phonetic: "/ˈtiːnˌeɪ.dʒər/",
        translation: "подросток",
        exampleEn: "The smart teenager found the lost phone.",
        exampleRu: "Умный подросток нашёл потерянный телефон."
    },
    {
        id: "kid",
        word: "kid",
        phonetic: "/kɪd/",
        translation: "ребенок / малыш",
        exampleEn: "A curious kid asked many questions.",
        exampleRu: "Любопытный малыш задал много вопросов."
    },
    {
        id: "police_station",
        word: "police station",
        phonetic: "/pəˈliːs ˈsteɪ.ʃən/",
        translation: "полицейский участок",
        exampleEn: "They walked together to the police station.",
        exampleRu: "Они пошли вместе в полицейский участок."
    },
    {
        id: "antique_shop",
        word: "antique shop",
        phonetic: "/ænˈtiːk ʃɒp/",
        translation: "антикварная лавка",
        exampleEn: "The antique shop was filled with rare clocks.",
        exampleRu: "Антикварная лавка была полна редких часов."
    },
    {
        id: "bakery",
        word: "bakery",
        phonetic: "/ˈbeɪ.kər.i/",
        translation: "пекарня",
        exampleEn: "The morning bakery baked warm pastries.",
        exampleRu: "Утренняя пекарня испекла тёплую выпечку."
    },
    {
        id: "downstairs",
        word: "downstairs",
        phonetic: "/ˌdaʊnˈsteəz/",
        translation: "внизу / на нижнем этаже",
        exampleEn: "He heard footsteps downstairs at midnight.",
        exampleRu: "Он услышал шаги внизу в полночь."
    },
    {
        id: "flashlight",
        word: "flashlight",
        phonetic: "/ˈflæʃ.laɪt/",
        translation: "фонарик",
        exampleEn: "She shone the bright flashlight into the corner.",
        exampleRu: "Она посветила ярким фонариком в угол."
    },
    {
        id: "keycard",
        word: "keycard",
        phonetic: "/ˈkiː.kɑːd/",
        translation: "электронный ключ-карта",
        exampleEn: "Swipe your keycard to open the office door.",
        exampleRu: "Приложите ключ-карту, чтобы открыть дверь офиса."
    },
    {
        id: "music_box",
        word: "music box",
        phonetic: "/ˈmjuː.zɪk bɒks/",
        translation: "музыкальная шкатулка",
        exampleEn: "The delicate music box played a sweet tune.",
        exampleRu: "Изящная музыкальная шкатулка играла нежную мелодию."
    },
    {
        id: "pocket_watch",
        word: "pocket watch",
        phonetic: "/ˈpɒk.ɪt wɒtʃ/",
        translation: "карманные часы",
        exampleEn: "His grandfather gave him a golden pocket watch.",
        exampleRu: "Дедушка подарил ему золотые карманные часы."
    },
    {
        id: "raincoat",
        word: "raincoat",
        phonetic: "/ˈreɪn.kəʊt/",
        translation: "плащ / дождевик",
        exampleEn: "Put on your yellow raincoat before heading out.",
        exampleRu: "Надень свой жёлтый дождевик перед выходом."
    },
    {
        id: "smartphone",
        word: "smartphone",
        phonetic: "/ˈsmɑːt.fəʊn/",
        translation: "смартфон",
        exampleEn: "Check the photo on your smartphone.",
        exampleRu: "Посмотри фотографию на своём смартфоне."
    },
    {
        id: "photograph",
        word: "photograph",
        phonetic: "/ˈfəʊ.tə.ɡrɑːf/",
        translation: "фотография",
        exampleEn: "The vintage photograph showed the old town.",
        exampleRu: "Старинная фотография показывала старый город."
    },
    {
        id: "painting",
        word: "painting",
        phonetic: "/ˈpeɪn.tɪŋ/",
        translation: "картина",
        exampleEn: "A magnificent oil painting hung above the fireplace.",
        exampleRu: "Великолепная картина маслом висела над камином."
    },
    {
        id: "statue",
        word: "statue",
        phonetic: "/ˈstætʃ.uː/",
        translation: "статуэтка / статуя",
        exampleEn: "A marble statue guarded the grand entrance.",
        exampleRu: "Мраморная статуя охраняла парадный вход."
    },
    {
        id: "safe",
        word: "safe",
        phonetic: "/seɪf/",
        translation: "сейф",
        exampleEn: "The jewel was inside the locked safe.",
        exampleRu: "Драгоценность была внутри запертого сейфа."
    },
    {
        id: "search",
        word: "search",
        phonetic: "/sɜːtʃ/",
        translation: "поиск / искать",
        exampleEn: "The search for the blue stone begins now.",
        exampleRu: "Поиск синего камня начинается прямо сейчас."
    },
    {
        id: "officer",
        word: "officer",
        phonetic: "/ˈɒf.ɪ.sər/",
        translation: "офицер / полицейский",
        exampleEn: "Officer Harris called the detective agency.",
        exampleRu: "Офицер Харрис позвонил в детективное агентство."
    },
    {
        id: "case",
        word: "case",
        phonetic: "/keɪs/",
        translation: "дело / расследование",
        exampleEn: "We have an important case to solve today.",
        exampleRu: "Сегодня у нас важное дело, которое нужно раскрыть."
    },
    {
        id: "missing",
        word: "missing",
        phonetic: "/ˈmɪs.ɪŋ/",
        translation: "пропавший / отсутствующий",
        exampleEn: "The famous blue stone is missing from the room.",
        exampleRu: "Знаменитый синий камень пропал из комнаты."
    },
    {
        id: "expensive",
        word: "expensive",
        phonetic: "/ɪkˈspen.sɪv/",
        translation: "дорогой (по цене)",
        exampleEn: "That rare sapphire is very expensive.",
        exampleRu: "Тот редкий сапфир очень дорогой."
    },
    {
        id: "famous",
        word: "famous",
        phonetic: "/ˈfeɪ.məs/",
        translation: "знаменитый / известный",
        exampleEn: "The Midnight Sapphire is a famous jewel.",
        exampleRu: "Полуночный Сапфир — знаменитая драгоценность."
    },
    {
        id: "job",
        word: "job",
        phonetic: "/dʒɒb/",
        translation: "работа / задание",
        exampleEn: "We have a new detective job this morning.",
        exampleRu: "Этим утром у нас новая детективная работа."
    },
    {
        id: "office",
        word: "office",
        phonetic: "/ˈɒf.ɪs/",
        translation: "офис / кабинет",
        exampleEn: "Leo and Mia work in the office on Elm Street.",
        exampleRu: "Лео и Миа работают в офисе на Элм-стрит."
    },
    {
        id: "telephone",
        word: "telephone",
        phonetic: "/ˈtel.ɪ.fəʊn/",
        translation: "телефон",
        exampleEn: "The black office telephone rings loudly.",
        exampleRu: "Черный офисный телефон громко звонит."
    },
    {
        id: "laptop",
        word: "laptop",
        phonetic: "/ˈlæp.tɒp/",
        translation: "ноутбук",
        exampleEn: "Mia opens her silver laptop on the desk.",
        exampleRu: "Миа открывает свой серебристый ноутбук на столе."
    },
    {
        id: "wooden",
        word: "wooden",
        phonetic: "/ˈwʊd.ən/",
        translation: "деревянный",
        exampleEn: "Leo sits at a big wooden desk.",
        exampleRu: "Лео сидит за большим деревянным столом."
    },
    {
        id: "clue",
        word: "clue",
        phonetic: "/kluː/",
        translation: "зацепка / улика",
        exampleEn: "This muddy footprint is our first clue.",
        exampleRu: "Этот грязный след — наша первая зацепка."
    },
    {
        id: "secret",
        word: "secret",
        phonetic: "/ˈsiː.krət/",
        translation: "секрет / секретный",
        exampleEn: "The thief knew the secret code to the safe.",
        exampleRu: "Вор знал секретный код от сейфа."
    },
    {
        id: "code",
        word: "code",
        phonetic: "/kəʊd/",
        translation: "код / шифр",
        exampleEn: "Enter the four numbers of the code.",
        exampleRu: "Введите четыре цифры кода."
    },
    {
        id: "stairs",
        word: "stairs",
        phonetic: "/steəz/",
        translation: "лестница / ступени",
        exampleEn: "They walked up the stairs to the second floor.",
        exampleRu: "Они поднялись по лестнице на второй этаж."
    },
    {
        id: "lock",
        word: "lock",
        phonetic: "/lɒk/",
        translation: "замок / запирать",
        exampleEn: "Lord Blackwood turns the silver key in the lock.",
        exampleRu: "Лорд Блэквуд поворачивает серебряный ключ в замке."
    }
];

class NewWordsStudyEngine {
    constructor() {
        this.batchSize = 5;
        this.database = NEW_WORDS_DATABASE;
        this.state = this.loadState();

        // Active session state
        this.currentBatchIdx = 0;
        this.currentStage = 1; // 1: Intro, 2: Choice, 3: Audio, 4: Spelling
        this.stageQueue = []; // Array of words in current stage
        this.currentWord = null;
        this.isWaitingNext = false;
        this.stageCompletedWords = []; // Words successfully completed in current stage

        this.initBatches();
    }

    // Split words into batches of 5
    initBatches() {
        this.batches = [];
        for (let i = 0; i < this.database.length; i += this.batchSize) {
            this.batches.push(this.database.slice(i, i + this.batchSize));
        }
    }

    loadState() {
        const raw = localStorage.getItem("english_pulse_new_words_study_v1");
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                return {
                    completedBatches: Array.isArray(parsed.completedBatches) ? parsed.completedBatches : [],
                    masteredWordIds: Array.isArray(parsed.masteredWordIds) ? parsed.masteredWordIds : [],
                    lastBatchIdx: parsed.lastBatchIdx || 0
                };
            } catch(e) {}
        }
        return {
            completedBatches: [],
            masteredWordIds: [],
            lastBatchIdx: 0
        };
    }

    saveState() {
        try {
            localStorage.setItem("english_pulse_new_words_study_v1", JSON.stringify(this.state));
        } catch(e) {}

        if (typeof window !== 'undefined' && typeof window.syncPlayerStateToServer === 'function') {
            window.syncPlayerStateToServer();
        }
    }

    shuffle(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    // Preload audio for current batch words to enable instant, zero-delay playback
    preloadBatchAudios(batchIdx) {
        if (!window.voiceService || typeof window.voiceService.preloadWordAudios !== 'function') return;
        const batch = this.batches[batchIdx] || [];
        const words = batch.map(w => w.word);
        window.voiceService.preloadWordAudios(words);
    }

    // Audio synthesizer helper
    speak(text, onStart = null, onEnd = null) {
        if (!text) return;
        const cleanToSpeak = text.includes('/') ? text.split('/')[0].trim() : text;
        if (window.voiceService && typeof window.voiceService.speak === 'function') {
            window.voiceService.speak(cleanToSpeak, onStart, onEnd, { kokoroVoice: "am_michael", geminiVoice: "Charon", rate: 0.95 });
            return;
        }
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(cleanToSpeak);
            u.lang = 'en-US';
            u.rate = 0.88;
            if (onStart) u.onstart = onStart;
            if (onEnd) { u.onend = onEnd; u.onerror = onEnd; }
            window.speechSynthesis.speak(u);
        }
    }

    // Sound effect chimes
    playChime(isCorrect) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            if (isCorrect) {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
                osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08); // A5
                gain.gain.setValueAtTime(0.18, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);
                osc.start();
                osc.stop(ctx.currentTime + 0.32);
            } else {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, ctx.currentTime);
                osc.frequency.setValueAtTime(155, ctx.currentTime + 0.12);
                gain.gain.setValueAtTime(0.18, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
                osc.start();
                osc.stop(ctx.currentTime + 0.3);
            }
        } catch(e) {}
    }

    // Start learning a specific batch
    startBatch(batchIdx) {
        this.currentBatchIdx = batchIdx;
        this.currentStage = 1;
        this.preloadBatchAudios(batchIdx);
        this.startStage(1);
    }

    // Start a stage (1..4)
    startStage(stageNum) {
        this.currentStage = stageNum;
        const batchWords = this.batches[this.currentBatchIdx] || [];
        // Every stage starts in a random order
        this.stageQueue = this.shuffle(batchWords);
        this.stageCompletedWords = [];
        this.isWaitingNext = false;
        this.nextCard();
    }

    nextCard() {
        if (this.stageQueue.length === 0) {
            // Stage completed!
            this.handleStageComplete();
            return;
        }

        this.currentWord = this.stageQueue[0];
        this.isWaitingNext = false;
        this.renderStage();
    }

    handleStageComplete() {
        if (this.currentStage < 4) {
            const nextStage = this.currentStage + 1;
            const stageNames = ["", "Знакомство", "Выбор перевода", "Аудирование (на слух)", "Правописание"];
            this.renderStageTransition(stageNames[nextStage], () => {
                this.startStage(nextStage);
            });
        } else {
            // All 4 stages completed for this batch!
            this.handleBatchComplete();
        }
    }

    handleBatchComplete() {
        const batch = this.batches[this.currentBatchIdx] || [];
        const batchIdx = this.currentBatchIdx;

        if (!this.state.completedBatches.includes(batchIdx)) {
            this.state.completedBatches.push(batchIdx);
        }

        // Add newly learned words into mastered list
        batch.forEach(w => {
            if (!this.state.masteredWordIds.includes(w.id)) {
                this.state.masteredWordIds.push(w.id);
            }
        });

        this.saveState();

        // Transfer newly mastered words directly into Flashcard SRS Deck!
        this.transferToSRS(batch);

        this.renderBatchCelebration();
    }

    // Transfer completed words to Flashcard SRS engine
    transferToSRS(batchWords) {
        if (typeof window.flashcardEngine === 'undefined') return;

        const fe = window.flashcardEngine;
        const deckName = "🔍 Новые слова (Детектив)";
        if (!fe.decks[deckName]) {
            fe.decks[deckName] = [];
        }

        const deck = fe.decks[deckName];
        let addedCount = 0;

        batchWords.forEach(w => {
            const existing = deck.find(c => c.word && c.word.toLowerCase() === w.word.toLowerCase());
            if (!existing) {
                deck.push({
                    word: w.word,
                    phonetic: w.phonetic,
                    translation: w.translation,
                    definition: "Новые слова • Детективные расследования A1",
                    example: w.exampleEn,
                    heroId: "detective",
                    rating: 3,
                    interval: 1,
                    easeFactor: 2.5,
                    repetitions: 1,
                    nextReviewDate: Date.now() + 24 * 3600 * 1000, // Due in 1 day for SRS review
                    studied: true,
                    learningInSession: false
                });
                addedCount++;
            } else {
                existing.studied = true;
            }
        });

        fe.saveDecks();
        fe.refreshDueCards();

        // Increment daily vocab progress if tracker exists
        if (typeof window.updateVocabUI === 'function') {
            window.updateVocabUI();
        }
    }

    // RENDER: Main Router
    renderStage() {
        const container = document.getElementById("new-words-card-stage");
        if (!container) return;

        this.updateHeaderProgress();

        switch(this.currentStage) {
            case 1:
                this.renderStage1Intro(container);
                break;
            case 2:
                this.renderStage2ReadingChoice(container);
                break;
            case 3:
                this.renderStage3AudioChoice(container);
                break;
            case 4:
                this.renderStage4Spelling(container);
                break;
        }
    }

    updateHeaderProgress() {
        const stagePills = document.querySelectorAll(".new-words-step-pill");
        stagePills.forEach((pill, idx) => {
            const stepNum = idx + 1;
            pill.classList.remove("active", "completed");
            if (stepNum < this.currentStage) {
                pill.classList.add("completed");
            } else if (stepNum === this.currentStage) {
                pill.classList.add("active");
            }
        });

        const totalInBatch = (this.batches[this.currentBatchIdx] || []).length;
        const remaining = this.stageQueue.length;
        const done = totalInBatch - remaining + (this.stageCompletedWords.length > (totalInBatch - remaining) ? 1 : 0);

        const countBadge = document.getElementById("new-words-stage-counter");
        if (countBadge) {
            countBadge.innerHTML = `<i class="fa-solid fa-layer-group"></i> Осталось в раунде: <b style="color:#fbbf24;">${remaining}</b> из ${totalInBatch}`;
        }
    }

    // --- STAGE 1: ПЕРВОЕ ЗНАКОМСТВО ---
    renderStage1Intro(container) {
        const w = this.currentWord;
        container.innerHTML = `
            <div class="nw-card nw-intro-card animate-fade-in">
                <div class="nw-card-badge"><i class="fa-solid fa-eye"></i> Этап 1: Знакомство со словом</div>
                
                <div class="nw-word-title">${w.word}</div>
                <div class="nw-word-phonetic">${w.phonetic}</div>

                <button type="button" class="nw-audio-big-btn" id="nw-btn-play-audio" title="Прослушать произношение">
                    <i class="fa-solid fa-volume-high"></i>
                </button>

                <div class="nw-translation-box">
                    <div class="nw-trans-label">Перевод:</div>
                    <div class="nw-trans-text">${w.translation}</div>
                </div>

                <div class="nw-example-box">
                    <div class="nw-example-en">"${w.exampleEn}"</div>
                    <div class="nw-example-ru">${w.exampleRu}</div>
                </div>

                <button type="button" class="btn btn-primary nw-next-btn" id="nw-btn-intro-next">
                    <span>Понятно, дальше</span> <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;

        const playBtn = document.getElementById("nw-btn-play-audio");
        if (playBtn) {
            playBtn.onclick = () => {
                this.speak(w.word, () => playBtn.classList.add("pulse"), () => playBtn.classList.remove("pulse"));
            };
        }

        // Auto-play audio on intro card display
        setTimeout(() => {
            this.speak(w.word);
        }, 200);

        const nextBtn = document.getElementById("nw-btn-intro-next");
        if (nextBtn) {
            nextBtn.onclick = () => {
                // Card viewed successfully, remove from queue
                this.stageQueue.shift();
                this.nextCard();
            };
        }
    }

    // --- STAGE 2: ВЫБРАТЬ ПРАВИЛЬНЫЙ ПЕРЕВОД (ТЕКСТ) ---
    renderStage2ReadingChoice(container) {
        const w = this.currentWord;
        const options = this.generateOptions(w);

        container.innerHTML = `
            <div class="nw-card nw-quiz-card animate-fade-in">
                <div class="nw-card-badge"><i class="fa-solid fa-list-check"></i> Этап 2: Выберите верный перевод</div>

                <div class="nw-word-title" style="margin-top:12px;">${w.word}</div>
                <div class="nw-word-phonetic">${w.phonetic}</div>

                <button type="button" class="nw-audio-pill-btn" id="nw-btn-play-audio" style="margin-bottom:18px;">
                    <i class="fa-solid fa-volume-high"></i> Послушать
                </button>

                <div class="nw-options-grid" id="nw-options-grid">
                    ${options.map((opt, i) => `
                        <button type="button" class="nw-option-btn" data-idx="${i}" data-correct="${opt === w.translation}">
                            <span class="nw-opt-num">${i + 1}</span>
                            <span class="nw-opt-text">${opt}</span>
                        </button>
                    `).join('')}
                </div>

                <div id="nw-feedback-box" class="nw-feedback-box hidden"></div>
            </div>
        `;

        const playBtn = document.getElementById("nw-btn-play-audio");
        if (playBtn) {
            playBtn.onclick = () => this.speak(w.word);
        }

        this.bindOptionListeners(container, w);
    }

    // --- STAGE 3: ВЫБРАТЬ ПРАВИЛЬНЫЙ ПЕРЕВОД НА СЛУХ ---
    renderStage3AudioChoice(container) {
        const w = this.currentWord;
        const options = this.generateOptions(w);

        container.innerHTML = `
            <div class="nw-card nw-quiz-card animate-fade-in">
                <div class="nw-card-badge"><i class="fa-solid fa-headphones"></i> Этап 3: Восприятие на слух</div>

                <div class="nw-audio-stage-box" style="margin: 20px 0 16px;">
                    <button type="button" class="nw-audio-giant-btn pulse" id="nw-btn-play-audio" title="Нажмите, чтобы прослушать слово">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                    <div class="nw-audio-stage-hint">Слушайте внимательно и выберите перевод</div>
                    <div id="nw-hidden-word-reveal" class="nw-revealed-word hidden">${w.word} <span style="font-size:14px; opacity:0.7;">${w.phonetic}</span></div>
                </div>

                <div class="nw-options-grid" id="nw-options-grid">
                    ${options.map((opt, i) => `
                        <button type="button" class="nw-option-btn" data-idx="${i}" data-correct="${opt === w.translation}">
                            <span class="nw-opt-num">${i + 1}</span>
                            <span class="nw-opt-text">${opt}</span>
                        </button>
                    `).join('')}
                </div>

                <div id="nw-feedback-box" class="nw-feedback-box hidden"></div>
            </div>
        `;

        const playBtn = document.getElementById("nw-btn-play-audio");
        if (playBtn) {
            playBtn.onclick = () => {
                this.speak(w.word, () => playBtn.classList.add("pulse"), () => playBtn.classList.remove("pulse"));
            };
        }

        // Auto-play audio on entering stage 3
        setTimeout(() => {
            this.speak(w.word);
        }, 250);

        this.bindOptionListeners(container, w, true);
    }

    // Helper for choice buttons handling (used in Stage 2 and 3)
    bindOptionListeners(container, currentWord, isAudioOnly = false) {
        const optionBtns = container.querySelectorAll(".nw-option-btn");
        const feedbackBox = document.getElementById("nw-feedback-box");
        let answered = false;

        optionBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if (answered) return;
                answered = true;

                const isCorrect = btn.getAttribute("data-correct") === "true";
                optionBtns.forEach(b => b.disabled = true);

                if (isAudioOnly) {
                    const revealEl = document.getElementById("nw-hidden-word-reveal");
                    if (revealEl) revealEl.classList.remove("hidden");
                }

                if (isCorrect) {
                    btn.classList.add("correct");
                    this.playChime(true);

                    // Successful answer: remove from queue!
                    this.stageQueue.shift();

                    setTimeout(() => {
                        this.nextCard();
                    }, 850);
                } else {
                    btn.classList.add("wrong");
                    this.playChime(false);

                    // Highlight the correct answer
                    optionBtns.forEach(b => {
                        if (b.getAttribute("data-correct") === "true") {
                            b.classList.add("highlight-correct");
                        }
                    });

                    // Incorrect: Word goes to the END of the deck!
                    const failedWord = this.stageQueue.shift();
                    this.stageQueue.push(failedWord);

                    if (feedbackBox) {
                        feedbackBox.className = "nw-feedback-box nw-feedback-error animate-fade-in";
                        feedbackBox.innerHTML = `
                            <div class="nw-feedback-msg">
                                <i class="fa-solid fa-circle-xmark"></i> <b>Неверно!</b> Верный перевод: <u>${currentWord.translation}</u>
                                <div style="font-size:11px; margin-top:2px; opacity:0.85;">Карточка отправлена в конец колоды для повторения</div>
                            </div>
                            <button type="button" class="btn btn-sm btn-primary nw-retry-btn" id="nw-btn-continue-retry">
                                Понятно, далее <i class="fa-solid fa-arrow-rotate-right"></i>
                            </button>
                        `;
                        feedbackBox.classList.remove("hidden");

                        const retryBtn = document.getElementById("nw-btn-continue-retry");
                        if (retryBtn) {
                            retryBtn.onclick = () => {
                                this.nextCard();
                            };
                        }
                    }
                }
            });
        });
    }

    // --- STAGE 4: СЛОВО НА РУССКОМ, НАПИСАТЬ НА АНГЛИЙСКОМ ---
    renderStage4Spelling(container) {
        const w = this.currentWord;

        container.innerHTML = `
            <div class="nw-card nw-spelling-card animate-fade-in">
                <div class="nw-card-badge"><i class="fa-solid fa-keyboard"></i> Этап 4: Напишите слово на английском</div>

                <div class="nw-spelling-prompt-box">
                    <div class="nw-trans-label">Слово на русском:</div>
                    <div class="nw-spelling-ru-word">${w.translation}</div>
                    <div class="nw-spelling-hint">Вспомните и напишите перевод на английском:</div>
                </div>

                <form id="nw-spelling-form" class="nw-spelling-form" autocomplete="off">
                    <div class="nw-input-wrap">
                        <input type="text" id="nw-spelling-input" class="nw-spelling-input" placeholder="Введите на английском..." autofocus autocorrect="off" autocapitalize="off" spellcheck="false" />
                        <button type="button" class="nw-input-clear-btn" id="nw-input-clear" style="display:none;">&times;</button>
                    </div>

                    <button type="submit" class="btn btn-primary nw-check-btn" id="nw-btn-check-spelling">
                        <span>Проверить</span> <i class="fa-solid fa-check"></i>
                    </button>
                </form>

                <div id="nw-feedback-box" class="nw-feedback-box hidden"></div>
            </div>
        `;

        const form = document.getElementById("nw-spelling-form");
        const input = document.getElementById("nw-spelling-input");
        const clearBtn = document.getElementById("nw-input-clear");
        const feedbackBox = document.getElementById("nw-feedback-box");
        let answered = false;

        if (input) {
            setTimeout(() => input.focus(), 150);
            input.oninput = () => {
                if (clearBtn) clearBtn.style.display = input.value ? 'block' : 'none';
            };
        }
        if (clearBtn) {
            clearBtn.onclick = () => {
                input.value = '';
                clearBtn.style.display = 'none';
                input.focus();
            };
        }

        form.onsubmit = (e) => {
            e.preventDefault();
            if (answered) return;

            const typed = (input.value || "").trim().toLowerCase();
            if (!typed) {
                input.focus();
                return;
            }

            answered = true;
            input.disabled = true;

            const isCorrect = this.checkSpellingAnswer(typed, w);

            if (isCorrect) {
                input.classList.add("input-correct");
                this.playChime(true);
                this.speak(w.word);

                // Successfully spelled: remove from queue!
                this.stageQueue.shift();

                if (feedbackBox) {
                    feedbackBox.className = "nw-feedback-box nw-feedback-success animate-fade-in";
                    feedbackBox.innerHTML = `
                        <div class="nw-feedback-msg">
                            <i class="fa-solid fa-circle-check"></i> <b>Отлично! Абсолютно верно!</b>
                            <div style="font-size:12px; margin-top:2px;"><b>${w.word}</b> ${w.phonetic}</div>
                        </div>
                    `;
                    feedbackBox.classList.remove("hidden");
                }

                setTimeout(() => {
                    this.nextCard();
                }, 900);
            } else {
                input.classList.add("input-wrong");
                this.playChime(false);
                this.speak(w.word);

                // Word goes to end of queue!
                const failedWord = this.stageQueue.shift();
                this.stageQueue.push(failedWord);

                if (feedbackBox) {
                    feedbackBox.className = "nw-feedback-box nw-feedback-error animate-fade-in";
                    feedbackBox.innerHTML = `
                        <div class="nw-feedback-msg">
                            <i class="fa-solid fa-circle-xmark"></i> <b>Ошибка!</b>
                            <div style="margin-top:4px; font-size:14px;">
                                Правильный ответ: <b style="color:#38bdf8; font-size:17px;">${w.word}</b> 
                                <span style="font-size:13px; opacity:0.8;">${w.phonetic}</span>
                            </div>
                            <div style="font-size:11px; margin-top:4px; opacity:0.85;">Карточка отправлена в конец колоды для повторения</div>
                        </div>
                        <button type="button" class="btn btn-sm btn-primary nw-retry-btn" id="nw-btn-continue-retry">
                            Понятно, дальше <i class="fa-solid fa-arrow-rotate-right"></i>
                        </button>
                    `;
                    feedbackBox.classList.remove("hidden");

                    const retryBtn = document.getElementById("nw-btn-continue-retry");
                    if (retryBtn) {
                        retryBtn.onclick = () => {
                            this.nextCard();
                        };
                    }
                }
            }
        };
    }

    checkSpellingAnswer(typed, wordObj) {
        const cleanTyped = typed.toLowerCase().trim().replace(/['"`]/g, "'");
        const cleanTarget = wordObj.word.toLowerCase().trim().replace(/['"`]/g, "'");

        if (cleanTyped === cleanTarget) return true;

        // Check if word has valid alternative answers (e.g. police / policeman)
        if (Array.isArray(wordObj.validAnswers)) {
            return wordObj.validAnswers.some(ans => ans.toLowerCase().trim() === cleanTyped);
        }

        // Support slash separation like "police / policeman"
        if (cleanTarget.includes("/")) {
            const parts = cleanTarget.split("/").map(p => p.trim());
            return parts.includes(cleanTyped);
        }

        return false;
    }

    // Generate 4 options (1 correct, 3 distinct distractors)
    generateOptions(correctWord) {
        const allTranslations = this.database
            .map(w => w.translation)
            .filter(t => t !== correctWord.translation);

        const shuffledDistractors = this.shuffle(Array.from(new Set(allTranslations))).slice(0, 3);
        const options = this.shuffle([correctWord.translation, ...shuffledDistractors]);
        return options;
    }

    // Stage Transition Banner
    renderStageTransition(nextStageName, onContinue) {
        const container = document.getElementById("new-words-card-stage");
        if (!container) return;

        this.playChime(true);

        container.innerHTML = `
            <div class="nw-card nw-transition-card animate-fade-in">
                <div class="nw-trans-icon"><i class="fa-solid fa-medal"></i></div>
                <h3 style="color:#f8fafc; font-size:22px; font-weight:800; margin:10px 0 4px;">Раунд успешно пройден!</h3>
                <p style="color:#94a3b8; font-size:14px; margin-bottom:20px;">
                    Все 5 слов освоены. Переходим к следующему шагу: <br>
                    <b style="color:#38bdf8; font-size:16px;">${nextStageName}</b>
                </p>

                <button type="button" class="btn btn-primary nw-next-btn" id="nw-btn-start-next-stage" style="padding:14px 28px; font-size:15px;">
                    Продолжить <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;

        const btn = document.getElementById("nw-btn-start-next-stage");
        if (btn) {
            btn.onclick = onContinue;
        }
    }

    // Batch Celebration Banner
    renderBatchCelebration() {
        const container = document.getElementById("new-words-card-stage");
        if (!container) return;

        this.playChime(true);
        const batchNum = this.currentBatchIdx + 1;
        const batchWords = this.batches[this.currentBatchIdx] || [];

        container.innerHTML = `
            <div class="nw-card nw-celebration-card animate-fade-in">
                <div class="nw-celeb-trophy"><i class="fa-solid fa-trophy"></i></div>
                <h2 style="color:#f8fafc; font-size:24px; font-weight:800; margin:8px 0 4px;">Партия №${batchNum} полностью освоена! 🎉</h2>
                <p style="color:#94a3b8; font-size:13.5px; margin-bottom:16px;">
                    Вы успешно прошли все 4 этапа! Все ${batchWords.length} слов переведены в <b>интервальное повторение (SRS)</b>.
                </p>

                <div class="nw-mastered-words-grid">
                    ${batchWords.map(w => `
                        <div class="nw-mastered-chip">
                            <i class="fa-solid fa-check" style="color:#10b981;"></i>
                            <b>${w.word}</b> — ${w.translation}
                        </div>
                    `).join('')}
                </div>

                <div style="display:flex; gap:10px; margin-top:22px; width:100%;">
                    <button type="button" class="btn btn-secondary" id="nw-btn-to-hub" style="flex:1;">
                        <i class="fa-solid fa-layer-group"></i> К списку партий
                    </button>
                    ${(this.currentBatchIdx + 1 < this.batches.length) ? `
                        <button type="button" class="btn btn-primary" id="nw-btn-next-batch" style="flex:1; background:linear-gradient(135deg, #f59e0b, #ec4899); border:none;">
                            Следующая партия <i class="fa-solid fa-forward"></i>
                        </button>
                    ` : ''}
                </div>
            </div>
        `;

        const toHubBtn = document.getElementById("nw-btn-to-hub");
        if (toHubBtn) {
            toHubBtn.onclick = () => this.showHub();
        }

        const nextBatchBtn = document.getElementById("nw-btn-next-batch");
        if (nextBatchBtn) {
            nextBatchBtn.onclick = () => {
                this.startBatch(this.currentBatchIdx + 1);
            };
        }
    }

    // Hub View (List of batches)
    renderHub() {
        const hubList = document.getElementById("new-words-batches-list");
        const totalMasteredEl = document.getElementById("new-words-total-mastered-stat");
        const totalWordsEl = document.getElementById("new-words-total-words-stat");
        const totalBatchesEl = document.getElementById("new-words-total-batches-stat");

        if (totalMasteredEl) totalMasteredEl.textContent = this.state.masteredWordIds.length;
        if (totalWordsEl) totalWordsEl.textContent = this.database.length;
        if (totalBatchesEl) totalBatchesEl.textContent = `${this.state.completedBatches.length}/${this.batches.length}`;

        if (!hubList) return;

        hubList.innerHTML = this.batches.map((batch, idx) => {
            const batchNum = idx + 1;
            const isCompleted = this.state.completedBatches.includes(idx);
            const isCurrent = idx === 0 || this.state.completedBatches.includes(idx - 1);
            const wordsPreview = batch.map(w => w.word).join(', ');

            let statusBadge = '';
            let btnLabel = '';
            let btnClass = 'btn-outline';

            if (isCompleted) {
                statusBadge = `<span class="badge nw-status-done"><i class="fa-solid fa-circle-check"></i> Изучено (в SRS)</span>`;
                btnLabel = `<i class="fa-solid fa-arrow-rotate-right"></i> Повторить 4 этапа`;
                btnClass = 'btn-outline';
            } else if (isCurrent) {
                statusBadge = `<span class="badge nw-status-active"><i class="fa-solid fa-play"></i> Доступно</span>`;
                btnLabel = `<i class="fa-solid fa-play"></i> Начать изучение`;
                btnClass = 'btn-primary';
            } else {
                statusBadge = `<span class="badge nw-status-locked"><i class="fa-solid fa-lock"></i> Откроется позже</span>`;
                btnLabel = `<i class="fa-solid fa-lock"></i> Закрыто`;
                btnClass = 'btn-secondary';
            }

            return `
                <div class="nw-batch-card ${isCompleted ? 'completed' : (isCurrent ? 'active' : 'locked')}">
                    <div class="nw-batch-card-header">
                        <div class="nw-batch-num-badge">Партия ${batchNum}</div>
                        ${statusBadge}
                    </div>
                    <div class="nw-batch-words-preview" title="${wordsPreview}">
                        ${batch.map(w => `<span class="nw-mini-word-pill ${this.state.masteredWordIds.includes(w.id) ? 'mastered' : ''}">${w.word}</span>`).join('')}
                    </div>
                    <div class="nw-batch-card-footer">
                        <span class="nw-batch-count-info">${batch.length} слов</span>
                        <button type="button" class="btn btn-sm ${btnClass} nw-batch-start-btn" data-batch-idx="${idx}" ${(!isCurrent && !isCompleted) ? 'disabled' : ''}>
                            ${btnLabel}
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        hubList.querySelectorAll(".nw-batch-start-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-batch-idx"), 10);
                this.showStudyView();
                this.startBatch(idx);
            });
        });
    }

    showHub() {
        const hubView = document.getElementById("new-words-hub-view");
        const studyView = document.getElementById("new-words-study-view");
        const backHubBtn = document.getElementById("btn-new-words-back-hub");

        if (hubView) hubView.classList.remove("hidden");
        if (studyView) studyView.classList.add("hidden");
        if (backHubBtn) backHubBtn.classList.add("hidden");

        this.renderHub();
    }

    showStudyView() {
        const hubView = document.getElementById("new-words-hub-view");
        const studyView = document.getElementById("new-words-study-view");
        const backHubBtn = document.getElementById("btn-new-words-back-hub");

        if (hubView) hubView.classList.add("hidden");
        if (studyView) studyView.classList.remove("hidden");
        if (backHubBtn) backHubBtn.classList.remove("hidden");
    }

    initModalEvents() {
        if (this._eventsInitialized) return;
        this._eventsInitialized = true;
        const closeBtn = document.getElementById("new-words-close-btn");
        if (closeBtn) {
            closeBtn.onclick = () => this.closeModal();
        }
        const backHubBtn = document.getElementById("btn-new-words-back-hub");
        if (backHubBtn) {
            backHubBtn.onclick = () => this.showHub();
        }
        const modal = document.getElementById("modal-new-words-study");
        if (modal) {
            modal.addEventListener("click", (e) => {
                if (e.target === modal) this.closeModal();
            });
        }
    }

    openModal() {
        const modal = document.getElementById("modal-new-words-study");
        if (!modal) return;
        this.initModalEvents();
        this.showHub();
        if (window.voiceService && typeof window.voiceService.preloadWordAudios === 'function') {
            const currentBatchWords = (this.batches[this.currentBatchIdx || 0] || []).map(w => w.word);
            window.voiceService.preloadWordAudios(currentBatchWords);
        }
        modal.classList.remove("hidden");
    }

    closeModal() {
        const modal = document.getElementById("modal-new-words-study");
        if (modal) modal.classList.add("hidden");
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }
}

// Global initialization
window.newWordsStudyEngine = new NewWordsStudyEngine();

window.openNewWordsStudyModal = function() {
    if (window.newWordsStudyEngine) {
        window.newWordsStudyEngine.openModal();
    }
};
