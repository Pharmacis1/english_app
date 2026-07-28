/* Main EnglishPulse AI + 10-Hero CEFR A0->A1 Application Controller */
document.addEventListener("DOMContentLoaded", () => {
    // Instantiate Core Services
    const aiService = new AIService();
    const flashcardEngine = new FlashcardEngine();
    const rpgEngine = new RPGEngine();

    // App State
    let activeScenario = SCENARIOS[0];
    let chatHistory = [];
    let currentGrammarTopic = GRAMMAR_TOPICS[0];
    let currentQuizIndex = 0;
    let quizScore = 0;
    let xpPoints = parseInt(localStorage.getItem("english_pulse_xp") || "120");

    // Practice Target Heroes State
    let selectedTutorHeroIds = rpgEngine.heroes.filter(h => h.unlocked).map(h => h.id);
    let selectedSpeakingHeroIds = rpgEngine.heroes.filter(h => h.unlocked).map(h => h.id);

    // RPG State
    let selectedStage = rpgEngine.chapters[0].stages[0];
    let activeQuest = null;

    // DOM Elements
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll(".tab-content");
    const pageHeading = document.getElementById("page-heading");
    const pageSubheading = document.getElementById("page-subheading");
    const themeToggleBtn = document.getElementById("theme-toggle");

    // UI Navigation Router
    function switchTab(targetTab) {
        navItems.forEach(i => i.classList.remove("active"));
        tabContents.forEach(t => t.classList.remove("active"));

        const navBtn = Array.from(navItems).find(b => b.getAttribute("data-tab") === targetTab);
        if (navBtn) navBtn.classList.add("active");
        document.getElementById(`tab-${targetTab}`).classList.add("active");

        switch(targetTab) {
            case "tutor":
                pageHeading.textContent = "AI Tutor & Target Hero Scenarios";
                pageSubheading.textContent = "Practice conversations featuring target heroes' vocabulary & grammar rules!";
                renderTutorHeroTargetChips();
                break;
            case "flashcards":
                pageHeading.textContent = "Vocabulary & Batched SRS (10 Words Per Dose)";
                pageSubheading.textContent = "Master 1,000 words in 10-card daily batches with SuperMemo SM-2 algorithm";
                flashcardEngine.decks = flashcardEngine.loadDecks();
                renderFlashcardsUI();
                break;
            case "grammar":
                pageHeading.textContent = "Grammar Lab";
                pageSubheading.textContent = "Master English rules through concise theory and interactive quizzes";
                renderGrammarUI();
                break;
            case "speaking":
                pageHeading.textContent = "Voice Shadowing & Accent Trainer";
                pageSubheading.textContent = "Train pronunciation using target heroes' vocabulary and sentences";
                renderSpeakingHeroTargetChips();
                break;
            case "rpg":
                pageHeading.textContent = "Hero RPG & CEFR A0 → A1 Campaign";
                pageSubheading.textContent = "Study English to level up your 10 heroes (1-100) and unlock Campaign Chapters!";
                renderRPGHeader();
                renderHeroesRoster();
                renderCampaignMap();
                renderSquadPicker();
                break;
            case "settings":
                pageHeading.textContent = "Local AI Settings";
                pageSubheading.textContent = "Configure LM Studio, Ollama, or fallback offline model";
                break;
        }
    }

    navItems.forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
    });

    // Theme Toggle
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });

    function triggerRPGReward(activity, targetHeroIds = null, materialSourceHeroId = null) {
        const reward = rpgEngine.rewardFromEnglish(activity, targetHeroIds, materialSourceHeroId);
        renderRPGHeader();
        
        const toast = document.createElement("div");
        toast.className = "feedback-banner";
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.zIndex = "1000";
        toast.style.background = reward.isFocusBonus ? "linear-gradient(135deg, #ec4899, #8b5cf6)" : "rgba(236, 72, 153, 0.9)";
        toast.style.color = "white";
        toast.style.fontWeight = "bold";

        const heroNamesStr = reward.rewardedHeroNames.length > 0 ? reward.rewardedHeroNames.join(", ") : "None";
        const bonusTag = reward.isFocusBonus ? " 🔥 (+50% Focus Bonus!)" : "";
        
        let blockedMsg = "";
        if (reward.blockedHeroNames && reward.blockedHeroNames.length > 0) {
            blockedMsg = `<br><small style="color:#fcd34d">🚫 Material too simple for: ${reward.blockedHeroNames.join(", ")} (0 XP earned)</small>`;
        }

        toast.innerHTML = `<i class="fa-solid fa-bolt"></i> ${heroNamesStr} Gained +${reward.xpAmount} XP!${bonusTag}${blockedMsg}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3200);
    }

    function renderRPGHeader() {
        document.getElementById("rpg-power-display").textContent = rpgEngine.getPartyPower();
    }

    function getHeroIdFromCategory(catName) {
        if (!catName || catName === "🧠 Due for SRS Review") return null;
        const matchedHero = rpgEngine.heroes.find(h => catName.includes(h.name));
        return matchedHero ? matchedHero.id : null;
    }

    // --- TARGET HERO CHIPS RENDERERS ---
    function renderTutorHeroTargetChips() {
        const container = document.getElementById("tutor-hero-target-chips");
        if (!container) return;
        container.innerHTML = "";

        const unlockedHeroes = rpgEngine.heroes.filter(h => h.unlocked);
        unlockedHeroes.forEach(hero => {
            const isSelected = selectedTutorHeroIds.includes(hero.id);
            const chip = document.createElement("button");
            chip.className = `btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`;
            chip.style.padding = "2px 8px";
            chip.style.fontSize = "11px";
            chip.style.borderRadius = "12px";

            const iconHtml = hero.image 
                ? `<img src="${hero.image}" style="width:14px; height:14px; border-radius:50%; margin-right:4px;">` 
                : `<i class="fa-solid ${hero.avatar}"></i>`;

            chip.innerHTML = `${iconHtml} ${hero.name}`;
            chip.addEventListener("click", () => {
                const idx = selectedTutorHeroIds.indexOf(hero.id);
                if (idx > -1) {
                    if (selectedTutorHeroIds.length > 1) selectedTutorHeroIds.splice(idx, 1);
                } else {
                    selectedTutorHeroIds.push(hero.id);
                }
                renderTutorHeroTargetChips();
            });

            container.appendChild(chip);
        });
    }

    function renderSpeakingHeroTargetChips() {
        const container = document.getElementById("speaking-hero-target-chips");
        if (!container) return;
        container.innerHTML = "";

        const unlockedHeroes = rpgEngine.heroes.filter(h => h.unlocked);
        unlockedHeroes.forEach(hero => {
            const isSelected = selectedSpeakingHeroIds.includes(hero.id);
            const chip = document.createElement("button");
            chip.className = `btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`;
            chip.style.padding = "2px 8px";
            chip.style.fontSize = "11px";
            chip.style.borderRadius = "12px";

            const iconHtml = hero.image 
                ? `<img src="${hero.image}" style="width:14px; height:14px; border-radius:50%; margin-right:4px;">` 
                : `<i class="fa-solid ${hero.avatar}"></i>`;

            chip.innerHTML = `${iconHtml} ${hero.name}`;
            chip.addEventListener("click", () => {
                const idx = selectedSpeakingHeroIds.indexOf(hero.id);
                if (idx > -1) {
                    if (selectedSpeakingHeroIds.length > 1) selectedSpeakingHeroIds.splice(idx, 1);
                } else {
                    selectedSpeakingHeroIds.push(hero.id);
                }
                renderSpeakingHeroTargetChips();
            });

            container.appendChild(chip);
        });
    }

    // --- TAB 1: AI TUTOR ---
    const scenariosListContainer = document.getElementById("scenarios-list");
    const activeScenarioTitle = document.getElementById("active-scenario-title");
    const activeScenarioRole = document.getElementById("active-scenario-role");
    const scenarioIcon = document.getElementById("scenario-icon");
    const chatMessagesBox = document.getElementById("chat-messages");
    const userChatInput = document.getElementById("user-chat-input");
    const sendChatBtn = document.getElementById("send-chat-btn");
    const clearChatBtn = document.getElementById("clear-chat-btn");
    const feedbackBanner = document.getElementById("grammar-feedback-banner");
    const feedbackText = document.getElementById("grammar-feedback-text");
    const closeFeedbackBtn = document.getElementById("close-feedback-btn");

    function renderScenarios() {
        scenariosListContainer.innerHTML = "";
        SCENARIOS.forEach(sc => {
            const item = document.createElement("div");
            item.className = `scenario-item ${sc.id === activeScenario.id ? 'active' : ''}`;
            item.innerHTML = `
                <div class="scenario-icon"><i class="fa-solid ${sc.icon}"></i></div>
                <div>
                    <div class="scenario-title">${sc.title}</div>
                    <div class="scenario-level">${sc.level}</div>
                </div>
            `;
            item.addEventListener("click", () => selectScenario(sc));
            scenariosListContainer.appendChild(item);
        });
    }

    function selectScenario(scenario) {
        activeScenario = scenario;
        renderScenarios();
        activeScenarioTitle.textContent = scenario.title;
        activeScenarioRole.textContent = scenario.role;
        scenarioIcon.innerHTML = `<i class="fa-solid ${scenario.icon}"></i>`;
        resetChat();
    }

    function resetChat() {
        chatHistory = [];
        chatMessagesBox.innerHTML = "";
        feedbackBanner.classList.add("hidden");
        appendMessage("assistant", activeScenario.greeting);
    }

    function appendMessage(role, text) {
        chatHistory.push({ role, content: text });
        const bubble = document.createElement("div");
        bubble.className = `message-bubble ${role}`;
        
        const avatar = role === 'assistant' 
            ? `<div class="message-avatar"><i class="fa-solid ${activeScenario.icon}"></i></div>` 
            : `<div class="message-avatar"><i class="fa-solid fa-user"></i></div>`;
        
        bubble.innerHTML = `
            ${avatar}
            <div class="message-content">
                <div>${text}</div>
                ${role === 'assistant' ? `<button class="audio-play-link"><i class="fa-solid fa-volume-high"></i> Listen</button>` : ''}
            </div>
        `;

        if (role === 'assistant') {
            const audioBtn = bubble.querySelector(".audio-play-link");
            if (audioBtn) audioBtn.addEventListener("click", () => flashcardEngine.speak(text));
        }

        chatMessagesBox.appendChild(bubble);
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
    }

    async function handleUserSendMessage() {
        const text = userChatInput.value.trim();
        if (!text) return;

        userChatInput.value = "";
        appendMessage("user", text);

        const typingBubble = document.createElement("div");
        typingBubble.className = "message-bubble assistant typing";
        typingBubble.innerHTML = `<div class="message-avatar"><i class="fa-solid ${activeScenario.icon}"></i></div><div class="message-content"><em>AI is typing...</em></div>`;
        chatMessagesBox.appendChild(typingBubble);
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;

        const targetHeroObjects = rpgEngine.heroes.filter(h => h.unlocked && selectedTutorHeroIds.includes(h.id));
        const aiResponse = await aiService.generateResponse(chatHistory, activeScenario, targetHeroObjects);

        chatMessagesBox.removeChild(typingBubble);
        appendMessage("assistant", aiResponse.text);

        if (aiResponse.correction) {
            feedbackText.innerHTML = aiResponse.correction;
            feedbackBanner.classList.remove("hidden");
        }

        addXP(10);
        triggerRPGReward("chat", selectedTutorHeroIds, null);
    }

    sendChatBtn.addEventListener("click", handleUserSendMessage);
    userChatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleUserSendMessage();
        }
    });

    clearChatBtn.addEventListener("click", resetChat);
    closeFeedbackBtn.addEventListener("click", () => feedbackBanner.classList.add("hidden"));

    // --- TAB 2: FLASHCARDS (ANKI SM-2 SRS & STRICT CEFR GATING) ---
    const deckTabsContainer = document.getElementById("deck-tabs-container");
    const flashcardEl = document.getElementById("flashcard");
    const cardTag = document.getElementById("card-tag");
    const cardWord = document.getElementById("card-word");
    const cardPhonetic = document.getElementById("card-phonetic");
    const cardSpeakBtn = document.getElementById("card-speak-btn");
    const cardTranslation = document.getElementById("card-translation");
    const cardDefinition = document.getElementById("card-definition");
    const cardExample = document.getElementById("card-example");
    const rateBtns = document.querySelectorAll(".rate-btn");

    function renderFlashcardsUI() {
        deckTabsContainer.innerHTML = "";
        flashcardEngine.decks = flashcardEngine.loadDecks();

        const dueCount = flashcardEngine.getDueCardsCount();

        Object.keys(flashcardEngine.decks).forEach(cat => {
            const btn = document.createElement("button");
            const isSrsTab = cat === "🧠 Due for SRS Review";
            const badgeCount = isSrsTab ? dueCount : flashcardEngine.decks[cat].length;
            
            btn.className = `deck-tab-btn ${cat === flashcardEngine.currentCategory ? 'active' : ''} ${isSrsTab ? 'srs-tab' : ''}`;
            btn.innerHTML = `${cat} <span class="badge" style="background:${isSrsTab ? '#ec4899' : 'rgba(255,255,255,0.1)'}; padding:2px 6px; border-radius:10px; font-size:11px;">${badgeCount}</span>`;
            
            btn.addEventListener("click", () => {
                flashcardEngine.currentCategory = cat;
                flashcardEngine.batchIndex = 0;
                flashcardEngine.currentIndex = 0;
                flashcardEl.classList.remove("flipped");
                renderFlashcardsUI();
            });
            deckTabsContainer.appendChild(btn);
        });

        if (flashcardEngine.currentCategory !== "🧠 Due for SRS Review") {
            const batchBtn = document.createElement("button");
            batchBtn.className = "btn btn-sm btn-outline";
            batchBtn.style.marginLeft = "auto";
            batchBtn.innerHTML = `<i class="fa-solid fa-forward"></i> Batch ${flashcardEngine.batchIndex + 1} (10 Words) ▶️`;
            batchBtn.addEventListener("click", () => {
                flashcardEngine.nextBatch();
                renderFlashcardsUI();
            });
            deckTabsContainer.appendChild(batchBtn);
        }

        const currentCard = flashcardEngine.getCurrentCard();
        if (currentCard) {
            const intervalDays = currentCard.interval || 1;
            const easeFactor = (currentCard.easeFactor || 2.5).toFixed(2);
            const batchLabel = flashcardEngine.currentCategory === "🧠 Due for SRS Review" ? "SRS Queue" : `Batch ${flashcardEngine.batchIndex + 1} (Portion: 10 Words)`;

            cardTag.innerHTML = `${flashcardEngine.currentCategory} &bull; <small class="font-mono" style="color:var(--heart)">${batchLabel} | SRS: ${intervalDays}d</small>`;
            cardWord.textContent = currentCard.word;
            cardPhonetic.textContent = currentCard.phonetic;
            cardTranslation.textContent = currentCard.translation;
            cardDefinition.textContent = currentCard.definition;
            cardExample.textContent = `"${currentCard.example}"`;
        } else {
            cardTag.textContent = flashcardEngine.currentCategory;
            cardWord.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" ? "🎉 No SRS Reviews Due!" : "🎉 Batch Complete!";
            cardPhonetic.textContent = "/done/";
            cardTranslation.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" ? "Нет карточек для повторения прямо сейчас." : "Порция из 10 слов изучена!";
            cardDefinition.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" 
                ? "Cards you study in hero decks will appear here automatically when their review date arrives!"
                : "Great job! SuperMemo SM-2 algorithm scheduled these 10 words into your review loop.";
            cardExample.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" ? "Select a hero deck to learn new words!" : "Click 'Batch ▶️' above to learn the next 10 words!";
        }

        document.getElementById("stats-words-count").textContent = 
            Object.values(flashcardEngine.decks).reduce((acc, curr) => acc + curr.length, 0);
    }

    flashcardEl.addEventListener("click", (e) => {
        if (e.target.closest("#card-speak-btn")) return;
        flashcardEl.classList.toggle("flipped");
    });

    cardSpeakBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = flashcardEngine.getCurrentCard();
        if (card) flashcardEngine.speak(card.word);
    });

    rateBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const rating = btn.getAttribute("data-rating");
            const targetHeroId = getHeroIdFromCategory(flashcardEngine.currentCategory);
            
            const rateResult = flashcardEngine.rateCard(rating);
            if (!rateResult.success) {
                alert(rateResult.message);
                if (rateResult.reason === "review_required") {
                    flashcardEngine.currentCategory = "🧠 Due for SRS Review";
                    flashcardEngine.batchIndex = 0;
                    flashcardEngine.currentIndex = 0;
                    renderFlashcardsUI();
                }
                return;
            }

            flashcardEl.classList.remove("flipped");
            setTimeout(() => renderFlashcardsUI(), 200);
            addXP(5);
            
            triggerRPGReward("card", targetHeroId, targetHeroId);
        });
    });

    // --- TAB 3: GRAMMAR LAB (STRICT CEFR GATING) ---
    const grammarTopicsNav = document.getElementById("grammar-topics-nav");
    const grammarTheoryCard = document.getElementById("grammar-theory-card");
    const quizQuestionText = document.getElementById("quiz-question-text");
    const quizOptionsContainer = document.getElementById("quiz-options-container");
    const quizFeedbackBox = document.getElementById("quiz-feedback-box");
    const nextQuizBtn = document.getElementById("next-quiz-btn");
    const quizProgressText = document.getElementById("quiz-progress-text");

    function getUnlockedGrammarTopics() {
        const unlockedHeroIds = rpgEngine.heroes.filter(h => h.unlocked).map(h => h.id);
        return GRAMMAR_TOPICS.filter(t => unlockedHeroIds.includes(t.heroId));
    }

    function renderGrammarUI() {
        grammarTopicsNav.innerHTML = "";
        const availableTopics = getUnlockedGrammarTopics();

        if (availableTopics.length === 0 || !availableTopics.find(t => t.id === currentGrammarTopic.id)) {
            currentGrammarTopic = availableTopics[0] || GRAMMAR_TOPICS[0];
        }

        availableTopics.forEach(topic => {
            const btn = document.createElement("button");
            btn.className = `topic-pill ${topic.id === currentGrammarTopic.id ? 'active' : ''}`;
            btn.textContent = topic.title;
            btn.addEventListener("click", () => {
                currentGrammarTopic = topic;
                currentQuizIndex = 0;
                quizScore = 0;
                renderGrammarUI();
            });
            grammarTopicsNav.appendChild(btn);
        });

        grammarTheoryCard.innerHTML = currentGrammarTopic.theory;
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        const qList = currentGrammarTopic.questions;
        if (currentQuizIndex >= qList.length) {
            quizQuestionText.textContent = `🎉 Topic Quiz Complete! Your Score: ${quizScore} / ${qList.length}`;
            quizOptionsContainer.innerHTML = "";
            quizFeedbackBox.className = "quiz-feedback hidden";
            nextQuizBtn.style.display = "none";
            return;
        }

        const q = qList[currentQuizIndex];
        quizProgressText.textContent = `Question ${currentQuizIndex + 1} of ${qList.length}`;
        quizQuestionText.textContent = q.text;
        quizOptionsContainer.innerHTML = "";
        quizFeedbackBox.className = "quiz-feedback hidden";
        nextQuizBtn.style.display = "none";

        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "quiz-opt-btn";
            btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
            btn.addEventListener("click", () => selectQuizOption(idx, q.correct, q.explanation));
            quizOptionsContainer.appendChild(btn);
        });
    }

    function selectQuizOption(selectedIdx, correctIdx, explanation) {
        const buttons = quizOptionsContainer.querySelectorAll(".quiz-opt-btn");
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === correctIdx) btn.classList.add("correct");
            if (idx === selectedIdx && idx !== correctIdx) btn.classList.add("wrong");
        });

        if (selectedIdx === correctIdx) {
            quizScore++;
            quizFeedbackBox.style.background = "rgba(16, 185, 129, 0.15)";
            quizFeedbackBox.style.border = "1px solid var(--success)";
            quizFeedbackBox.innerHTML = `<strong>✅ Correct!</strong> ${explanation}`;
            addXP(20);

            triggerRPGReward("quiz", currentGrammarTopic.heroId, currentGrammarTopic.heroId);
        } else {
            quizFeedbackBox.style.background = "rgba(239, 68, 68, 0.15)";
            quizFeedbackBox.style.border = "1px solid var(--danger)";
            quizFeedbackBox.innerHTML = `<strong>❌ Not quite.</strong> ${explanation}`;
        }

        quizFeedbackBox.classList.remove("hidden");
        nextQuizBtn.style.display = "inline-flex";
    }

    nextQuizBtn.addEventListener("click", () => {
        currentQuizIndex++;
        renderQuizQuestion();
    });

    // --- TAB 4: VOICE SHADOWING ---
    const playShadowAudioBtn = document.getElementById("play-shadow-audio");
    const startRecBtn = document.getElementById("start-rec-btn");
    if (startRecBtn) {
        startRecBtn.addEventListener("click", () => {
            addXP(30);
            triggerRPGReward("shadowing", selectedSpeakingHeroIds, null);
        });
    }
    if (playShadowAudioBtn) {
        playShadowAudioBtn.addEventListener("click", () => {
            const sentenceText = document.getElementById("shadow-text") ? document.getElementById("shadow-text").textContent : "Hello";
            flashcardEngine.speak(sentenceText);
        });
    }

    // --- TAB 5: HERO RPG CONTROLLER WITH AI PORTRAITS ---
    const rpgSubnavBtns = document.querySelectorAll(".rpg-subnav-btn");
    const rpgSubviews = document.querySelectorAll(".rpg-subview");
    const heroesGridContainer = document.getElementById("heroes-grid-container");
    const chaptersAccordion = document.getElementById("chapters-accordion");
    const activeStageTitle = document.getElementById("active-stage-title");
    const activeStageDesc = document.getElementById("active-stage-desc");
    const startBattleBtn = document.getElementById("start-battle-btn");
    const squadChipsContainer = document.getElementById("squad-chips-container");
    const squadCountText = document.getElementById("squad-count-text");
    const battleHeroesSide = document.getElementById("battle-heroes-side");
    const battleMobsSide = document.getElementById("battle-mobs-side");
    const ultimatesBar = document.getElementById("ultimates-bar");
    const battleLogBox = document.getElementById("battle-log-box");

    const affinityModal = document.getElementById("affinity-quest-modal");
    const closeAffinityModalBtn = document.getElementById("close-affinity-modal-btn");
    const affinityModalTitle = document.getElementById("affinity-modal-title");
    const affinityModeBadge = document.getElementById("affinity-mode-badge");
    const affinityDialoguePrompt = document.getElementById("affinity-dialogue-prompt");
    const audioListeningControls = document.getElementById("audio-listening-controls");
    const affinityAudioListenBtn = document.getElementById("affinity-audio-listen-btn");
    const affinityAnswerInput = document.getElementById("affinity-answer-input");
    const affinityMicBtn = document.getElementById("affinity-mic-btn");
    const submitAffinityQuestBtn = document.getElementById("submit-affinity-quest-btn");

    rpgSubnavBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetView = btn.getAttribute("data-rpgview");
            rpgSubnavBtns.forEach(b => b.classList.remove("active"));
            rpgSubviews.forEach(v => v.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(`rpgview-${targetView}`).classList.add("active");
        });
    });

    function renderHeroesRoster() {
        heroesGridContainer.innerHTML = "";
        rpgEngine.heroes.forEach(hero => {
            const eff = rpgEngine.getHeroEffectiveStats(hero);
            const card = document.createElement("div");
            card.className = `hero-card ${hero.unlocked ? '' : 'locked'}`;

            const unlockMsg = hero.unlocked 
                ? `<span style="color:var(--success); font-weight:600;"><i class="fa-solid fa-check"></i> Unlocked Hero (Packs Unlocked)</span>` 
                : `<span style="color:var(--warning); font-size:11px;"><i class="fa-solid fa-lock"></i> Defeat Boss to Unlock Hero & Packs</span>`;

            const avatarHtml = hero.image 
                ? `<img src="${hero.image}" alt="${hero.name}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">` 
                : `<i class="fa-solid ${hero.avatar}"></i>`;

            card.innerHTML = `
                <div class="hero-header-row">
                    <div class="hero-avatar-box" style="background:${hero.color}; overflow:hidden;">
                        ${avatarHtml}
                    </div>
                    <div class="hero-title-group">
                        <h4>${hero.name} <small class="font-mono">Lvl ${hero.level}/100</small></h4>
                        <div class="hero-cefr-tag">${hero.cefrLevel} (100 Words)</div>
                    </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div class="hero-heart-badge" title="Heart Stat Bonus (+${eff.heartMultiplier}% to all stats)"><i class="fa-solid fa-heart"></i> ${hero.affinityLevel}/100 💕 (+${eff.heartMultiplier}%)</div>
                    ${hero.unlocked ? `<button class="btn btn-sm btn-outline affinity-btn" data-heroid="${hero.id}"><i class="fa-solid fa-heart"></i> Quest 💕</button>` : ''}
                </div>

                ${hero.unlocked ? `
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-sm btn-secondary train-words-btn" style="flex:1;"><i class="fa-solid fa-layer-group"></i> Train Words (${hero.words.length})</button>
                    <button class="btn btn-sm btn-secondary train-grammar-btn" style="flex:1;"><i class="fa-solid fa-graduation-cap"></i> Train Grammar</button>
                </div>
                ` : ''}

                <div class="hero-stats-list font-mono">
                    <div>HP: <strong>${eff.hp}</strong></div>
                    <div>ATK: <strong>${eff.atk}</strong></div>
                    <div>DEF: <strong>${eff.def}</strong></div>
                    <div>Role: <strong>${hero.role}</strong></div>
                </div>

                <div>
                    <div style="display:flex; justify-content:space-between; font-size:11px;" class="font-mono">
                        <span>XP (Earned by studying)</span>
                        <span>${hero.xp} / ${hero.maxXp}</span>
                    </div>
                    <div class="hero-xp-bar-box">
                        <div class="hero-xp-fill" style="width: ${(hero.xp / hero.maxXp) * 100}%"></div>
                    </div>
                </div>

                <div style="margin-top:auto;">${unlockMsg}</div>
            `;

            if (hero.unlocked) {
                card.querySelector(".affinity-btn").addEventListener("click", () => openAffinityQuestModal(hero));
                card.querySelector(".train-words-btn").addEventListener("click", () => {
                    const deckName = `${hero.name}'s Pack (${hero.cefrLevel.split(' ')[0]})`;
                    flashcardEngine.currentCategory = deckName;
                    flashcardEngine.batchIndex = 0;
                    flashcardEngine.currentIndex = 0;
                    flashcardEl.classList.remove("flipped");
                    switchTab("flashcards");
                });
                card.querySelector(".train-grammar-btn").addEventListener("click", () => {
                    const gTopic = GRAMMAR_TOPICS.find(t => t.heroId === hero.id) || GRAMMAR_TOPICS[0];
                    currentGrammarTopic = gTopic;
                    currentQuizIndex = 0;
                    switchTab("grammar");
                });
            }

            heroesGridContainer.appendChild(card);
        });
    }

    function renderSquadPicker() {
        squadChipsContainer.innerHTML = "";
        const unlockedHeroes = rpgEngine.heroes.filter(h => h.unlocked);
        squadCountText.textContent = rpgEngine.selectedSquad.length;

        unlockedHeroes.forEach(hero => {
            const isSelected = rpgEngine.selectedSquad.includes(hero.id);
            const chip = document.createElement("button");
            chip.className = `squad-chip ${isSelected ? 'selected' : ''}`;
            const avatarHtml = hero.image 
                ? `<img src="${hero.image}" style="width:20px; height:20px; border-radius:50%; margin-right:4px;">` 
                : `<i class="fa-solid ${hero.avatar}"></i>`;

            chip.innerHTML = `${avatarHtml} ${hero.name} (${hero.role})`;
            
            chip.addEventListener("click", () => {
                rpgEngine.toggleSquadHero(hero.id);
                renderSquadPicker();
                renderRPGHeader();
            });

            squadChipsContainer.appendChild(chip);
        });
    }

    function openAffinityQuestModal(hero) {
        activeQuest = rpgEngine.generateAffinityQuest(hero, hero.affinityLevel + 1);
        
        affinityModalTitle.textContent = `💕 ${activeQuest.heroName} Affinity Quest (Lvl ${activeQuest.level})`;
        affinityDialoguePrompt.textContent = activeQuest.dialogueText;
        affinityAnswerInput.value = "";

        if (activeQuest.isAudioMode) {
            affinityModeBadge.textContent = "🎧 Listening & Speaking Mode (Level 51–100)";
            audioListeningControls.classList.remove("hidden");
            affinityMicBtn.classList.remove("hidden");
        } else {
            affinityModeBadge.textContent = "✍️ Written Text Mode (Level 1–50)";
            audioListeningControls.classList.add("hidden");
            affinityMicBtn.classList.add("hidden");
        }

        affinityModal.classList.remove("hidden");
    }

    closeAffinityModalBtn.addEventListener("click", () => affinityModal.classList.add("hidden"));

    affinityAudioListenBtn.addEventListener("click", () => {
        if (activeQuest) flashcardEngine.speak(activeQuest.dialogueText);
    });

    submitAffinityQuestBtn.addEventListener("click", () => {
        if (!activeQuest) return;
        const answer = affinityAnswerInput.value.trim().toLowerCase();
        const target = activeQuest.targetWord.toLowerCase();

        if (answer.includes(target)) {
            alert(`🎉 Correct! You bonded with ${activeQuest.heroName}! Heart 💕 increased to Level ${activeQuest.level} (+${activeQuest.level * 2}% All Stats Bonus)!`);
            const heroObj = rpgEngine.heroes.find(h => h.id === activeQuest.heroId);
            if (heroObj) heroObj.affinityLevel = Math.min(100, heroObj.affinityLevel + 1);
            rpgEngine.save();
            affinityModal.classList.add("hidden");
            renderHeroesRoster();
            renderRPGHeader();
        } else {
            alert(`❌ Not quite! Target word was "${activeQuest.targetWord}". Example: ${activeQuest.hintExample}`);
        }
    });

    function renderCampaignMap() {
        chaptersAccordion.innerHTML = "";
        rpgEngine.chapters.forEach(chap => {
            const chapBox = document.createElement("div");
            chapBox.className = "chapter-box";
            chapBox.innerHTML = `<h5>${chap.title}</h5>`;
            
            const stagesList = document.createElement("div");
            stagesList.style.display = "flex";
            stagesList.style.flexDirection = "column";
            stagesList.style.gap = "8px";

            chap.stages.forEach(stg => {
                const item = document.createElement("div");
                item.className = `stage-item ${stg.unlocked ? '' : 'locked'} ${selectedStage && selectedStage.id === stg.id ? 'active' : ''}`;
                
                const lockStatus = stg.unlocked 
                    ? `<i class="fa-solid fa-play" style="color:var(--success)"></i>` 
                    : `<i class="fa-solid fa-lock" style="color:var(--text-muted)"></i>`;

                item.innerHTML = `
                    <div>
                        <strong>${stg.id}: ${stg.name}</strong>
                        <div style="font-size:11px; color:var(--text-muted)">Rec Power: ${stg.recPower}</div>
                    </div>
                    <div>${stg.boss ? '<span style="color:#ef4444; font-weight:bold;">BOSS</span> ' : ''}${lockStatus}</div>
                `;

                if (stg.unlocked) {
                    item.addEventListener("click", () => {
                        selectedStage = stg;
                        renderCampaignMap();
                    });
                }

                stagesList.appendChild(item);
            });

            chapBox.appendChild(stagesList);
            chaptersAccordion.appendChild(chapBox);
        });

        if (selectedStage && selectedStage.unlocked) {
            const currentSquadPower = rpgEngine.getPartyPower();
            const isPowerDeficit = currentSquadPower < selectedStage.recPower;
            const powerWarningMsg = isPowerDeficit ? ` | ⚠️ Recommended Power: ${selectedStage.recPower} (Your Squad: ${currentSquadPower}). Practice English to level up!` : '';

            activeStageTitle.textContent = `${selectedStage.id}: ${selectedStage.name}`;
            activeStageDesc.textContent = `Recommended Power: ${selectedStage.recPower}${powerWarningMsg}`;
            startBattleBtn.disabled = false;
        } else {
            startBattleBtn.disabled = true;
        }
    }

    startBattleBtn.addEventListener("click", () => {
        if (!selectedStage || !selectedStage.unlocked) return;
        startBattleSimulation(selectedStage);
    });

    function startBattleSimulation(stage) {
        if (rpgEngine.inBattle) return;
        rpgEngine.inBattle = true;
        startBattleBtn.disabled = true;

        const battleHeroes = rpgEngine.getSelectedHeroes().map(h => {
            const eff = rpgEngine.getHeroEffectiveStats(h);
            return { ...h, currentHp: eff.hp, maxHp: eff.hp, atk: eff.atk, def: eff.def, currentMp: 0, maxMp: 100 };
        });
        const battleMobs = stage.mobs.map(m => ({ ...m, currentHp: m.hp, maxHp: m.hp }));

        logBattle(`⚔️ Battle Started on Stage ${stage.id} with Squad Power: ${rpgEngine.getPartyPower()}!`);

        function renderArenaState() {
            battleHeroesSide.innerHTML = "";
            battleHeroes.forEach(h => {
                const c = document.createElement("div");
                c.className = "combatant-card";
                const avatarHtml = h.image 
                    ? `<img src="${h.image}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">` 
                    : `<i class="fa-solid ${h.avatar}"></i>`;

                c.innerHTML = `
                    <div class="combatant-avatar" style="background:${h.color}; overflow:hidden;">
                        ${avatarHtml}
                    </div>
                    <div class="combatant-name">${h.name}</div>
                    <div class="bar-wrap"><div class="hp-fill" style="width:${Math.max(0, (h.currentHp/h.maxHp)*100)}%"></div></div>
                    <div class="bar-wrap"><div class="mp-fill" style="width:${Math.max(0, (h.currentMp/h.maxHp)*100)}%"></div></div>
                `;
                battleHeroesSide.appendChild(c);
            });

            battleMobsSide.innerHTML = "";
            battleMobs.forEach(m => {
                const c = document.createElement("div");
                c.className = "combatant-card";
                c.innerHTML = `
                    <div class="combatant-avatar" style="background:#ef4444">
                        <i class="fa-solid ${m.avatar}"></i>
                    </div>
                    <div class="combatant-name">${m.name}</div>
                    <div class="bar-wrap"><div class="hp-fill" style="width:${Math.max(0, (m.currentHp/m.maxHp)*100)}%"></div></div>
                `;
                battleMobsSide.appendChild(c);
            });

            ultimatesBar.innerHTML = "";
            battleHeroes.forEach(h => {
                const isReady = h.currentMp >= h.maxMp && h.currentHp > 0;
                const ultBtn = document.createElement("button");
                ultBtn.className = `ult-btn ${isReady ? 'ready' : ''}`;
                ultBtn.disabled = !isReady;
                ultBtn.innerHTML = `<i class="fa-solid ${h.skillIcon}"></i> ${h.name}: ${h.skillName}`;
                ultBtn.addEventListener("click", () => {
                    h.currentMp = 0;
                    logBattle(`💥 ${h.name} cast ${h.skillName}!`);
                    battleMobs.forEach(m => m.currentHp = Math.max(0, m.currentHp - 150));
                    renderArenaState();
                });
                ultimatesBar.appendChild(ultBtn);
            });
        }

        renderArenaState();

        rpgEngine.battleTimer = setInterval(() => {
            const aliveHeroes = battleHeroes.filter(h => h.currentHp > 0);
            const aliveMobs = battleMobs.filter(m => m.currentHp > 0);

            if (aliveMobs.length === 0) {
                clearInterval(rpgEngine.battleTimer);
                rpgEngine.inBattle = false;
                startBattleBtn.disabled = false;
                logBattle(`🎉 VICTORY! Stage ${stage.id} Cleared! Next stage unlocked!`);
                rpgEngine.completeStage(stage.id);
                renderCampaignMap();
                renderHeroesRoster();
                renderSquadPicker();
                return;
            }

            if (aliveHeroes.length === 0) {
                clearInterval(rpgEngine.battleTimer);
                rpgEngine.inBattle = false;
                startBattleBtn.disabled = false;
                logBattle(`💀 DEFEAT! Recommended Power was ${stage.recPower}. Study English in AI Tutor or Flashcards to level up your heroes!`);
                return;
            }

            aliveHeroes.forEach(h => {
                const target = aliveMobs[Math.floor(Math.random() * aliveMobs.length)];
                if (target) {
                    const dmg = Math.max(5, h.atk - 5);
                    target.currentHp = Math.max(0, target.currentHp - dmg);
                    h.currentMp = Math.min(h.maxMp, h.currentMp + 25);
                }
            });

            aliveMobs.forEach(m => {
                const target = aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];
                if (target) {
                    const dmg = Math.max(5, m.atk - target.def);
                    target.currentHp = Math.max(0, target.currentHp - dmg);
                    target.currentMp = Math.min(target.currentMp + 15);
                }
            });

            renderArenaState();
        }, 1200);
    }

    function logBattle(msg) {
        const line = document.createElement("div");
        line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        battleLogBox.appendChild(line);
        battleLogBox.scrollTop = battleLogBox.scrollHeight;
    }

    function addXP(amount) {
        xpPoints += amount;
        localStorage.setItem("english_pulse_xp", xpPoints);
        document.getElementById("stats-xp-count").textContent = xpPoints;
    }

    // --- BACKUP EXPORT & IMPORT HANDLERS ---
    const exportBackupBtn = document.getElementById("export-backup-btn");
    const importBackupTriggerBtn = document.getElementById("import-backup-trigger-btn");
    const importBackupFileInput = document.getElementById("import-backup-file-input");

    if (exportBackupBtn) {
        exportBackupBtn.addEventListener("click", () => {
            window.location.href = "/api/backup/export";
        });
    }

    if (importBackupTriggerBtn && importBackupFileInput) {
        importBackupTriggerBtn.addEventListener("click", () => importBackupFileInput.click());
        importBackupFileInput.addEventListener("change", async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            try {
                const text = await file.text();
                const json = JSON.parse(text);

                const res = await fetch("/api/backup/import", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(json)
                });

                const data = await res.json();
                if (data.success) {
                    alert("🎉 Backup successfully imported! Reloading app...");
                    window.location.reload();
                } else {
                    alert("❌ Failed to import backup: " + data.error);
                }
            } catch (err) {
                alert("❌ Invalid JSON backup file: " + err.message);
            }
        });
    }

    renderScenarios();
    selectScenario(SCENARIOS[0]);
    renderTutorHeroTargetChips();
    renderSpeakingHeroTargetChips();
    renderFlashcardsUI();
    renderGrammarUI();
    renderRPGHeader();
});
