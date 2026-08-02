/* Main EnglishPulse AI + 10-Hero CEFR A0->A1 Application Controller */
document.addEventListener("DOMContentLoaded", () => {
    // Instantiate Core Services
    const aiService = new AIService();
    const flashcardEngine = new FlashcardEngine();
    const rpgEngine = new RPGEngine();
    const voiceService = new VoiceService();
    window.voiceService = voiceService;

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

    // Active Showcase Hero State
    let activeShowcaseHeroId = rpgEngine.heroes[0].id; // "valerius"

    // HERO STAGE DRAG & SCALE POSITIONING CONTROLLER
    function loadHeroStagePositions() {
        try {
            return JSON.parse(localStorage.getItem("hero_stage_positions_v1") || "{}");
        } catch (e) {
            return {};
        }
    }

    function saveHeroStagePositions(map) {
        localStorage.setItem("hero_stage_positions_v1", JSON.stringify(map));
    }

    function getHeroStagePos(heroId) {
        const map = loadHeroStagePositions();
        return map[heroId] || { x: 0, y: 0, scale: 65 };
    }

    let currentHeroPosState = { x: 0, y: 0, scale: 65 };
    let isHeroDragEnabled = false;

    function applyHeroStageTransform() {
        const stageArt = document.getElementById("hero-stage-art");
        const scaleValEl = document.getElementById("hero-scale-val");
        const scaleSlider = document.getElementById("hero-scale-slider");
        if (!stageArt) return;

        const scale = currentHeroPosState.scale || 65;
        const x = currentHeroPosState.x || 0;
        const y = currentHeroPosState.y || 0;

        stageArt.style.transform = `translate(${x}px, ${y}px) scale(${scale / 100})`;
        if (scaleValEl) scaleValEl.textContent = `${scale}%`;
        if (scaleSlider && parseInt(scaleSlider.value) !== scale) scaleSlider.value = scale;
    }

    function renderHeroShowcase(heroId) {
        if (!heroId) heroId = activeShowcaseHeroId;
        const hero = rpgEngine.heroes.find(h => h.id === heroId) || rpgEngine.heroes[0];
        activeShowcaseHeroId = hero.id;

        // 1. Update Left Panel Info
        const roleBadge = document.getElementById("hero-role-badge");
        const displayName = document.getElementById("hero-display-name");
        const displayTitle = document.getElementById("hero-display-title");
        const displayLevel = document.getElementById("hero-display-level");
        const displayPower = document.getElementById("hero-display-power");
        const displayAffection = document.getElementById("hero-display-affection");
        const displayVocab = document.getElementById("hero-display-vocab-count");

        const effStats = rpgEngine.getHeroEffectiveStats(hero);
        const heroPower = rpgEngine.getHeroPower(hero);

        if (roleBadge) roleBadge.textContent = hero.role || "Hero";
        if (displayName) displayName.textContent = hero.name;
        if (displayTitle) displayTitle.textContent = `${hero.title} (${hero.cefrLevel})`;
        if (displayLevel) displayLevel.textContent = `Lvl ${hero.level || 1}`;
        if (displayPower) displayPower.textContent = heroPower;
        if (displayAffection) displayAffection.textContent = `Lv. ${hero.affinityLevel || 0}`;
        
        const masteredCount = hero.words ? hero.words.filter(w => {
            const wordStr = Array.isArray(w) ? w[0] : (typeof w === 'string' ? w : w.word);
            return getWordUsageCount(hero.id, wordStr) >= 3;
        }).length : 0;
        if (displayVocab) displayVocab.textContent = `${masteredCount}/50`;

        // 1.5 Update Hero XP Progress Bar
        const xpText = document.getElementById("hero-display-xp-text");
        const xpFill = document.getElementById("hero-display-xp-fill");
        if (xpText) xpText.textContent = `${hero.xp || 0} / ${hero.maxXp || 150}`;
        if (xpFill) xpFill.style.width = `${Math.min(100, ((hero.xp || 0) / (hero.maxXp || 150)) * 100)}%`;

        // 2. Update Combat Stats (ATK, DEF, HP)
        const atkFill = document.getElementById("attr-atk-fill");
        const defFill = document.getElementById("attr-def-fill");
        const hpFill = document.getElementById("attr-hp-fill");
        const atkVal = document.getElementById("attr-atk-val");
        const defVal = document.getElementById("attr-def-val");
        const hpVal = document.getElementById("attr-hp-val");

        // Max possible stat for bar scaling (rough estimate for level 100)
        const maxAtkRef = 300;
        const maxDefRef = 200;
        const maxHpRef = 5000;

        if (atkFill) atkFill.style.width = `${Math.min(100, (effStats.atk / maxAtkRef) * 100)}%`;
        if (defFill) defFill.style.width = `${Math.min(100, (effStats.def / maxDefRef) * 100)}%`;
        if (hpFill) hpFill.style.width = `${Math.min(100, (effStats.hp / maxHpRef) * 100)}%`;
        if (atkVal) atkVal.textContent = effStats.atk;
        if (defVal) defVal.textContent = effStats.def;
        if (hpVal) hpVal.textContent = effStats.hp;

        // 3. Update Skills / Grammar Rules Chips
        const skillsList = document.getElementById("hero-skills-list");
        if (skillsList && hero.grammarRules) {
            skillsList.innerHTML = hero.grammarRules.map(r => `<span class="skill-chip"><i class="fa-solid fa-sparkles"></i> ${r}</span>`).join("");
        }

        // 4. Update Stage Artwork & Quote
        const stageArt = document.getElementById("hero-stage-art");
        const stageQuote = document.getElementById("hero-stage-quote");
        const iconFallback = document.getElementById("hero-stage-icon-fallback");
        const iconFa = document.getElementById("hero-stage-icon-fa");
        if (stageArt) {
            if (hero.image) {
                stageArt.src = hero.image;
                stageArt.style.display = "";
                if (iconFallback) iconFallback.style.display = "none";
                // Reset onerror for new image load
                stageArt.onerror = function() {
                    this.style.display = "none";
                    if (iconFallback) iconFallback.style.display = "flex";
                };
            } else {
                stageArt.style.display = "none";
                if (iconFallback) iconFallback.style.display = "flex";
            }
        }
        if (iconFa) {
            iconFa.className = `fa-solid ${hero.avatar || 'fa-shield-halved'}`;
            iconFa.style.color = hero.color || "rgba(255,255,255,0.7)";
        }
        if (stageQuote) stageQuote.textContent = `"${hero.quote || 'I am ready to shield our realm!'}"`;

        // 4.5 Apply saved stage position & scale
        currentHeroPosState = getHeroStagePos(hero.id);
        applyHeroStageTransform();

        // 5. Update header stats
        const squadPowerEl = document.getElementById("rpg-squad-power");
        if (squadPowerEl) squadPowerEl.textContent = rpgEngine.getPartyPower();
        const headerXpEl = document.getElementById("rpg-header-xp");
        if (headerXpEl) headerXpEl.textContent = xpPoints;
        const headerStreakEl = document.getElementById("rpg-header-streak");
        if (headerStreakEl) headerStreakEl.textContent = parseInt(localStorage.getItem("english_pulse_streak") || "0");

        // 6. Highlight bottom carousel card
        renderBottomHeroCarousel();
    }

    function renderBottomHeroCarousel() {
        const track = document.getElementById("hero-carousel-track");
        if (!track) return;
        track.innerHTML = "";

        const totalCompletedQuests = getTotalCompletedDailyQuests();

        rpgEngine.heroes.forEach((h, idx) => {
            const isActive = h.id === activeShowcaseHeroId;
            const chip = document.createElement("div");
            chip.className = `hero-card-chip ${isActive ? 'active' : ''}`;
            const chipImgSrc = h.faceImage || h.image;
            const avatarHtml = chipImgSrc
                ? `<img src="${chipImgSrc}" class="chip-avatar" alt="${h.name}" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">
                   <div class="chip-avatar" style="display:none; align-items:center; justify-content:center; background:${h.color || 'var(--primary)'}; color:#fff; font-size:14px;"><i class="fa-solid ${h.avatar || 'fa-shield-halved'}"></i></div>`
                : `<div class="chip-avatar" style="display:flex; align-items:center; justify-content:center; background:${h.color || 'var(--primary)'}; color:#fff; font-size:14px;"><i class="fa-solid ${h.avatar || 'fa-shield-halved'}"></i></div>`;
            
            const reqQuests = HERO_UNLOCK_QUEST_THRESHOLDS[idx] !== undefined ? HERO_UNLOCK_QUEST_THRESHOLDS[idx] : (idx * 8);
            const remainingQuests = Math.max(0, reqQuests - totalCompletedQuests);
            const statusLabel = h.unlocked ? `Lvl ${h.level || 1}` : `🔒 Ещё ${remainingQuests} кв.`;

            chip.title = h.unlocked ? `${h.name} (Lvl ${h.level || 1})` : `🔒 ${h.name}: Завершите ещё ${remainingQuests} квестов дня (+500 XP), чтобы открыть!`;

            chip.innerHTML = `
                ${avatarHtml}
                <div class="chip-info">
                    <span class="chip-name">${h.name}</span>
                    <span class="chip-lvl font-mono" style="${h.unlocked ? '' : 'color:#fbbf24; font-size:10px; font-weight:700;'}">${statusLabel}</span>
                </div>
            `;
            chip.addEventListener("click", () => {
                if (h.unlocked) {
                    renderHeroShowcase(h.id);
                } else {
                    showToast(`🔒 <b>${h.name} заблокирован!</b><br>Завершите ещё <b>${remainingQuests}</b> квестов дня (+500 XP), чтобы открыть героиню/героя!`, "linear-gradient(135deg, #f59e0b, #ec4899)", "#fbbf24");
                }
            });
            track.appendChild(chip);
        });
    }

    // Wire Action Buttons
    const btnWords = document.getElementById("btn-hero-words");
    const btnRules = document.getElementById("btn-hero-rules");
    const btnChat = document.getElementById("btn-hero-chat");
    const btnCall = document.getElementById("btn-hero-call");
    const btnReviewAll = document.getElementById("btn-review-all-cards");
    const btnSettings = document.getElementById("settings-toggle-btn");
    const btnAffinity = document.getElementById("btn-hero-affinity");
    const toggleScenariosBtn = document.getElementById("toggle-scenarios-btn");
    const btnWordStats = document.getElementById("btn-hero-word-stats");

    if (btnWordStats) {
        btnWordStats.addEventListener("click", () => {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            openHeroWordStatsModal(hero);
        });
    }

    function initHeroPositioningController() {
        const stageArt = document.getElementById("hero-stage-art");
        const btnTogglePosMenu = document.getElementById("btn-toggle-pos-menu");
        const posControls = document.getElementById("hero-pos-controls");
        const btnToggleDrag = document.getElementById("btn-toggle-hero-drag");
        const lblDrag = document.getElementById("lbl-hero-drag");
        const scaleSlider = document.getElementById("hero-scale-slider");
        const btnReset = document.getElementById("btn-reset-hero-pos");
        const btnSave = document.getElementById("btn-save-hero-pos");

        if (btnTogglePosMenu && posControls) {
            btnTogglePosMenu.addEventListener("click", () => {
                posControls.classList.toggle("hidden");
            });
        }

        if (btnToggleDrag) {
            btnToggleDrag.addEventListener("click", () => {
                isHeroDragEnabled = !isHeroDragEnabled;
                if (stageArt) {
                    if (isHeroDragEnabled) {
                        stageArt.classList.add("draggable-active");
                        if (lblDrag) lblDrag.textContent = "✋ Зажмите и тяните";
                        btnToggleDrag.classList.add("btn-primary");
                        showToast("✋ Зажмите мышь на герое и передвиньте в нужную точку!", "rgba(99,102,241,0.9)", "#6366f1");
                    } else {
                        stageArt.classList.remove("draggable-active");
                        if (lblDrag) lblDrag.textContent = "✋ Передвинуть";
                        btnToggleDrag.classList.remove("btn-primary");
                    }
                }
            });
        }

        if (scaleSlider) {
            scaleSlider.addEventListener("input", (e) => {
                currentHeroPosState.scale = parseInt(e.target.value, 10);
                applyHeroStageTransform();
            });
        }

        if (btnReset) {
            btnReset.addEventListener("click", () => {
                currentHeroPosState = { x: 0, y: 0, scale: 65 };
                applyHeroStageTransform();
                const map = loadHeroStagePositions();
                delete map[activeShowcaseHeroId];
                saveHeroStagePositions(map);
                showToast("🔄 Позиция и размер сброшены", "rgba(107,114,128,0.8)", "#9ca3af");
            });
        }

        if (btnSave) {
            btnSave.addEventListener("click", () => {
                const map = loadHeroStagePositions();
                map[activeShowcaseHeroId] = currentHeroPosState;
                saveHeroStagePositions(map);
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId);
                showToast(`💾 Позиция ${hero ? hero.name : 'героя'} успешно сохранена!`, "linear-gradient(135deg, #10b981, #059669)", "#10b981");
            });
        }

        let isDragging = false;
        let startX = 0, startY = 0;
        let initialX = 0, initialY = 0;

        function startDrag(e) {
            if (!isHeroDragEnabled || !stageArt) return;
            isDragging = true;
            stageArt.classList.add("dragging");
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            startX = clientX;
            startY = clientY;
            initialX = currentHeroPosState.x || 0;
            initialY = currentHeroPosState.y || 0;

            e.preventDefault();
        }

        function doDrag(e) {
            if (!isDragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const dx = clientX - startX;
            const dy = clientY - startY;

            currentHeroPosState.x = initialX + dx;
            currentHeroPosState.y = initialY + dy;
            applyHeroStageTransform();
        }

        function stopDrag() {
            if (isDragging && stageArt) {
                isDragging = false;
                stageArt.classList.remove("dragging");
            }
        }

        if (stageArt) {
            stageArt.addEventListener("mousedown", startDrag);
            stageArt.addEventListener("touchstart", startDrag, { passive: false });
            window.addEventListener("mousemove", doDrag);
            window.addEventListener("touchmove", doDrag, { passive: false });
            window.addEventListener("mouseup", stopDrag);
            window.addEventListener("touchend", stopDrag);
        }
    }

    initHeroPositioningController();

    // 6. DUAL-LAYER ATMOSPHERIC MAGICAL DUST & EMBERS (BACKGROUND + FOREGROUND DEPTH)
    function initHeroDustEffect() {
        const bgCanvas = document.getElementById("hero-dust-bg-canvas");
        const fgCanvas = document.getElementById("hero-dust-fg-canvas");
        const container = document.getElementById("hero-artwork-container");
        if (!container) return;

        const bgCtx = bgCanvas ? bgCanvas.getContext("2d") : null;
        const fgCtx = fgCanvas ? fgCanvas.getContext("2d") : null;

        let width = 0, height = 0;
        let bgParticles = [];
        let fgParticles = [];

        const colors = [
            "rgba(251, 191, 36, ",   // Warm Torch Ember Gold
            "rgba(56, 189, 248, ",   // Cyan Mana Sparkle
            "rgba(192, 132, 252, ",  // Arcane Purple Mote
            "rgba(255, 255, 255, "   // Floating Castle Dust Mote
        ];

        function resize() {
            width = container.clientWidth;
            height = container.clientHeight;
            if (bgCanvas) { bgCanvas.width = width; bgCanvas.height = height; }
            if (fgCanvas) { fgCanvas.width = width; fgCanvas.height = height; }
        }

        function createParticle(isForeground) {
            return {
                x: Math.random() * (width || 800),
                y: Math.random() * (height || 600),
                radius: isForeground ? (Math.random() * 2.8 + 1.2) : (Math.random() * 1.8 + 0.6),
                colorPrefix: colors[Math.floor(Math.random() * colors.length)],
                baseAlpha: isForeground ? (Math.random() * 0.7 + 0.3) : (Math.random() * 0.45 + 0.15),
                alphaPhase: Math.random() * Math.PI * 2,
                alphaSpeed: Math.random() * 0.02 + 0.005,
                vy: -(Math.random() * (isForeground ? 0.6 : 0.35) + 0.15),
                vxSwing: Math.random() * 0.4 + 0.1,
                swingPhase: Math.random() * Math.PI * 2
            };
        }

        function initParticles() {
            resize();
            bgParticles = [];
            fgParticles = [];
            for (let i = 0; i < 35; i++) bgParticles.push(createParticle(false));
            for (let i = 0; i < 25; i++) fgParticles.push(createParticle(true));
        }

        window.addEventListener("resize", resize);
        initParticles();

        function renderLayer(ctx, particles) {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            const now = Date.now() * 0.001;

            particles.forEach(p => {
                p.y += p.vy;
                p.x += Math.sin(now + p.swingPhase) * p.vxSwing * 0.5;
                p.alphaPhase += p.alphaSpeed;

                const currentAlpha = Math.max(0.05, p.baseAlpha + Math.sin(p.alphaPhase) * 0.25);

                if (p.y < -10 || p.x < -10 || p.x > width + 10) {
                    p.y = height + Math.random() * 20;
                    p.x = Math.random() * width;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${p.colorPrefix}${currentAlpha.toFixed(2)})`;
                ctx.shadowBlur = 6;
                ctx.shadowColor = `${p.colorPrefix}0.8)`;
                ctx.fill();
            });
        }

        function loop() {
            if (!width || !height) resize();
            renderLayer(bgCtx, bgParticles);
            renderLayer(fgCtx, fgParticles);
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);
    }

    initHeroDustEffect();

    if (btnAffinity) {
        btnAffinity.addEventListener("click", () => {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            openAffinityQuestModal(hero);
        });
    }

    if (toggleScenariosBtn) {
        toggleScenariosBtn.addEventListener("click", () => {
            const scListContainer = document.getElementById("scenarios-list");
            if (scListContainer) scListContainer.classList.toggle("hidden");
        });
    }

    if (btnChat) {
        btnChat.addEventListener("click", () => {
            currentScenarioCategory = 'heroes';
            const heroScenario = SCENARIOS.find(sc => sc.isHeroScenario && sc.heroId === activeShowcaseHeroId) || SCENARIOS.find(sc => sc.isHeroScenario);
            if (heroScenario) {
                selectScenario(heroScenario);
            }
            const scListContainer = document.getElementById("scenarios-list");
            if (scListContainer) scListContainer.classList.add("hidden");

            const chatModal = document.getElementById("modal-hero-chat");
            if (chatModal) chatModal.classList.remove("hidden");
        });
    }

    if (btnCall) {
        btnCall.addEventListener("click", () => {
            activeLiveHeroId = activeShowcaseHeroId;
            renderLiveHeroPicker();
            const liveModal = document.getElementById("modal-hero-live");
            if (liveModal) liveModal.classList.remove("hidden");
        });
    }

    if (btnWords) {
        btnWords.addEventListener("click", () => {
            const wordsModal = document.getElementById("modal-hero-words");
            if (wordsModal) wordsModal.classList.remove("hidden");
        });
    }

    if (btnRules) {
        btnRules.addEventListener("click", () => {
            const grammarModal = document.getElementById("modal-hero-grammar");
            if (grammarModal) grammarModal.classList.remove("hidden");
        });
    }

    if (btnReviewAll) {
        btnReviewAll.addEventListener("click", () => {
            const allModal = document.getElementById("modal-all-cards");
            if (allModal) allModal.classList.remove("hidden");
        });
    }

    if (btnSettings) {
        btnSettings.addEventListener("click", () => {
            const settingsModal = document.getElementById("modal-settings");
            if (settingsModal) settingsModal.classList.remove("hidden");
        });
    }

    // Modal Close Buttons
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".rpg-modal-overlay").classList.add("hidden");
        });
    });

    // Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            const isLight = document.body.classList.contains("light-theme");
            themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        });
    }

    function showToast(msg, bg = "linear-gradient(135deg, #1e1b4b, #312e81)", borderColor = "#818cf8") {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            document.body.appendChild(container);
        }

        const toast = document.createElement("div");
        toast.className = "toast-notification";
        toast.style.background = bg;
        toast.style.border = `1.5px solid ${borderColor}`;
        toast.style.color = "white";
        toast.style.padding = "12px 18px";
        toast.style.borderRadius = "12px";
        toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
        toast.style.fontSize = "13px";
        toast.style.fontWeight = "600";
        toast.style.lineHeight = "1.4";
        toast.style.pointerEvents = "auto";
        toast.innerHTML = msg;

        container.appendChild(toast);

        while (container.children.length > 4) {
            container.removeChild(container.firstChild);
        }

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(100%)";
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    function triggerRPGReward(activity, targetHeroIds = null, materialSourceHeroId = null, customBaseXp = null, customToastMsg = null, customBg = null) {
        const reward = rpgEngine.rewardFromEnglish(activity, targetHeroIds, materialSourceHeroId, customBaseXp);
        renderRPGHeader();
        
        const heroNamesStr = reward.rewardedHeroNames.length > 0 ? reward.rewardedHeroNames.join(", ") : "None";
        const bonusTag = reward.isFocusBonus ? " 🔥 (+50% Focus Bonus!)" : "";
        
        let blockedMsg = "";
        if (reward.blockedHeroNames && reward.blockedHeroNames.length > 0) {
            blockedMsg = `<br><small style="color:#fcd34d">🚫 Material too simple for: ${reward.blockedHeroNames.join(", ")} (0 XP earned)</small>`;
        }

        const bg = customBg || (reward.isFocusBonus ? "linear-gradient(135deg, #ec4899, #8b5cf6)" : "rgba(236, 72, 153, 0.9)");
        const toastMsg = customToastMsg || `<i class="fa-solid fa-bolt"></i> ${heroNamesStr} Gained +${reward.xpAmount} XP!${bonusTag}${blockedMsg}`;

        showToast(toastMsg, bg);

        if (reward.leveledUpHeroes && reward.leveledUpHeroes.length > 0) {
            showHeroLevelUpModal(reward.leveledUpHeroes);
        }
    }

    let levelUpQueue = [];
    let pendingLiveLevelUps = [];

    function showHeroLevelUpModal(leveledUpList) {
        if (!leveledUpList || leveledUpList.length === 0) return;

        // If Live Realtime Audio Call is active, defer Level Up modal & audio until call ends!
        if (typeof isLiveCallActive !== 'undefined' && isLiveCallActive) {
            pendingLiveLevelUps.push(...leveledUpList);
            return;
        }

        const lvlupModal = document.getElementById("hero-level-up-modal");
        if (!lvlupModal) return;

        levelUpQueue.push(...leveledUpList);
        displayNextLevelUpInQueue();
    }

    function displayNextLevelUpInQueue() {
        const lvlupModal = document.getElementById("hero-level-up-modal");
        if (!lvlupModal) return;

        if (!levelUpQueue || levelUpQueue.length === 0) {
            lvlupModal.classList.add("hidden");
            lvlupModal.style.setProperty("display", "none", "important");
            return;
        }

        const data = levelUpQueue[0];
        if (!data || !data.hero) {
            levelUpQueue.shift();
            displayNextLevelUpInQueue();
            return;
        }

        const hero = data.hero;

        const titleEl = document.getElementById("lvlup-title");
        const nameEl = document.getElementById("lvlup-hero-name");
        if (titleEl) titleEl.textContent = `LEVEL UP! LEVEL ${data.newLevel} 🎉`;
        if (nameEl) nameEl.textContent = `${hero.name} Reached Level ${data.newLevel}!`;
        
        const avatarBox = document.getElementById("lvlup-hero-avatar-box");
        if (avatarBox) {
            const avatarSrc = hero.faceImage || hero.image;
            if (avatarSrc) {
                avatarBox.innerHTML = `<img src="${avatarSrc}" style="width:100%; height:100%; object-fit:cover; object-position:top center; border-radius:50%;">`;
            } else {
                avatarBox.innerHTML = `<i class="fa-solid ${hero.avatar || 'fa-shield-halved'}" style="font-size:42px; color:${hero.color || '#3b82f6'};"></i>`;
            }
        }

        const hpEl = document.getElementById("lvlup-hp-gain");
        const atkEl = document.getElementById("lvlup-atk-gain");
        const defEl = document.getElementById("lvlup-def-gain");
        if (hpEl) hpEl.textContent = `+${data.hpGain} HP`;
        if (atkEl) atkEl.textContent = `+${data.atkGain} ATK`;
        if (defEl) defEl.textContent = `+${data.defGain} DEF`;

        lvlupModal.classList.remove("hidden");
        lvlupModal.style.setProperty("display", "flex", "important");

        if (window.voiceService) {
            voiceService.speak(`${hero.name} reached Level ${data.newLevel}!`, null, null, hero.voiceConfig || null);
        }
    }

    const closeLvlUpBtn = document.getElementById("close-lvlup-modal-btn");
    const lvlupModalEl = document.getElementById("hero-level-up-modal");

    if (closeLvlUpBtn) {
        closeLvlUpBtn.addEventListener("click", () => {
            if (levelUpQueue.length > 0) {
                levelUpQueue.shift();
            }
            displayNextLevelUpInQueue();
        });
    }

    if (lvlupModalEl) {
        lvlupModalEl.addEventListener("click", (e) => {
            if (e.target === lvlupModalEl) {
                if (levelUpQueue.length > 0) {
                    levelUpQueue.shift();
                }
                displayNextLevelUpInQueue();
            }
        });
    }

    // --- PER-HERO AUDIO REWARD ENGINE ---
    let usedMicInCurrentDraft = false;
    let lastAiMessageContent = "";

    function getTodayHeroAudioState(heroId) {
        if (!heroId) return { micCount: 0, typedCount: 0, listenedMsgs: [], repeatedMsgs: [], comboMsgs: [], questClaimed: false };
        const d = new Date();
        const dateKey = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        const storageKey = `english_pulse_audio_rewards_${dateKey}_${heroId}`;
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.questClaimed === undefined) parsed.questClaimed = false;
                return parsed;
            }
        } catch(e) {}
        return { micCount: 0, typedCount: 0, listenedMsgs: [], repeatedMsgs: [], comboMsgs: [], questClaimed: false };
    }

    function saveTodayHeroAudioState(heroId, state) {
        if (!heroId) return;
        const d = new Date();
        const dateKey = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        const storageKey = `english_pulse_audio_rewards_${dateKey}_${heroId}`;
        localStorage.setItem(storageKey, JSON.stringify(state));
        updateHeroDailyBonusTracker();
    }

    function updateHeroDailyBonusTracker() {
        const activeHeroId = (activeScenario && activeScenario.isHeroScenario && activeScenario.heroId) 
            ? activeScenario.heroId 
            : null;
        
        const trackerBar = document.getElementById("hero-daily-bonus-tracker");
        if (!trackerBar) return;

        if (!activeHeroId) {
            trackerBar.style.display = "none";
            return;
        }
        trackerBar.style.display = "flex";

        const hero = rpgEngine.heroes.find(h => h.id === activeHeroId);
        const state = getTodayHeroAudioState(activeHeroId);

        const micXpNext = state.micCount < 10 ? "+50" : (state.micCount < 30 ? "+30" : "+10");
        const textXpNext = state.typedCount < 10 ? "+30" : (state.typedCount < 30 ? "+20" : "+5");

        const heroNameEl = document.getElementById("tracker-hero-name");
        const micCountEl = document.getElementById("tracker-mic-count");
        const textCountEl = document.getElementById("tracker-text-count");

        let wordsUsedCount = 0;
        let wordsTotalCount = 0;
        if (hero && hero.words) {
            wordsTotalCount = hero.words.length;
            wordsUsedCount = hero.words.filter(wObj => getWordUsageCount(hero.id, wObj.word) >= 1).length;
        }
        const allHeroWordsUsed = wordsTotalCount > 0 && wordsUsedCount === wordsTotalCount;

        const taskMicDone = state.micCount >= 10;
        const taskTextDone = state.typedCount >= 10;
        const taskListenDone = state.listenedMsgs.length >= 20;
        const taskRepeatDone = state.repeatedMsgs.length >= 20;
        const taskWordsDone = allHeroWordsUsed;

        const completedTasksCount = 
            (taskMicDone ? 1 : 0) + 
            (taskTextDone ? 1 : 0) + 
            (taskListenDone ? 1 : 0) + 
            (taskRepeatDone ? 1 : 0) + 
            (taskWordsDone ? 1 : 0);

        if (heroNameEl) {
            if (hero && hero.level >= 50) {
                heroNameEl.innerHTML = `🛡️ Active Hero: <strong>${hero.name}</strong> <span style="color:#ef4444; font-weight:800;">[MAX LEVEL 50]</span>`;
            } else {
                heroNameEl.innerHTML = `🛡️ Active Hero: <strong>${hero ? hero.name : activeHeroId}</strong>`;
            }
        }

        if (micCountEl) micCountEl.innerHTML = `🎙️ Mic: <strong>${state.micCount}/10</strong> (${micXpNext} XP)`;
        if (textCountEl) textCountEl.innerHTML = `⌨️ Text: <strong>${state.typedCount}/10</strong> (${textXpNext} XP)`;

        let questTagEl = document.getElementById("tracker-daily-quest-tag");
        if (!questTagEl) {
            questTagEl = document.createElement("span");
            questTagEl.id = "tracker-daily-quest-tag";
            const trackerRight = trackerBar.querySelector("div");
            if (trackerRight) trackerRight.appendChild(questTagEl);
        }

        if (hero && hero.level >= 50) {
            questTagEl.innerHTML = `🏆 Daily Quest: <strong style="color:#ef4444;">Max Level 50 Reached (No Quest) 🔒</strong>`;
            questTagEl.style.cursor = "default";
            questTagEl.title = `Hero ${hero.name} has reached Max Level 50! Daily quests and XP bonuses are disabled for max-level heroes.`;
            return;
        }

        if (state.questClaimed) {
            questTagEl.innerHTML = `🏆 Daily Quest: <strong style="color:#34d399;">Claimed (+500 XP) ✅</strong>`;
            questTagEl.title = `Daily Hero Quest (+500 XP Completed!): All 5 tasks completed today!`;
        } else {
            const colorStr = completedTasksCount === 5 ? "#fbbf24" : (completedTasksCount >= 3 ? "#60a5fa" : "#c084fc");
            questTagEl.innerHTML = `🏆 Quest: <strong style="color:${colorStr};">${completedTasksCount}/5 Tasks</strong> (+500 XP)`;
            questTagEl.style.cursor = "pointer";
            questTagEl.title = `Daily Hero Quest Bonus (+500 XP):\n` +
                `${taskMicDone ? '✅' : '❌'} 10 Voice Messages (${state.micCount}/10)\n` +
                `${taskTextDone ? '✅' : '❌'} 10 Text Messages (${state.typedCount}/10)\n` +
                `${taskListenDone ? '✅' : '❌'} 20 Message Listens (${state.listenedMsgs.length}/20)\n` +
                `${taskRepeatDone ? '✅' : '❌'} 20 Message Repeats (${state.repeatedMsgs.length}/20)\n` +
                `${taskWordsDone ? '✅' : '❌'} All Hero Words Used (${wordsUsedCount}/${wordsTotalCount})`;
        }

        if (completedTasksCount === 5 && !state.questClaimed && hero && hero.level < 50) {
            state.questClaimed = true;
            saveTodayHeroAudioState(activeHeroId, state);

            let totalQuests = getTotalCompletedDailyQuests();
            totalQuests += 1;
            localStorage.setItem("total_completed_daily_quests", totalQuests);

            addXP(500);
            triggerRPGReward("daily_quest", activeHeroId, activeHeroId, 500);

            const newlyUnlocked = checkAndUpdateHeroUnlocks(rpgEngine);
            let unlockToastMsg = "";
            if (newlyUnlocked && newlyUnlocked.length > 0) {
                unlockToastMsg = `<br>🔓 <b>NEW HERO UNLOCKED: ${newlyUnlocked.join(", ")}!</b>`;
            }

            showToast(`🏆 <b>DAILY HERO QUEST COMPLETED!</b><br>+500 XP Bonus Awarded! (Total Quests: ${totalQuests})${unlockToastMsg}`, "linear-gradient(135deg, #f59e0b, #ec4899)", "#fbbf24");
            
            renderHeroShowcase();
            renderBottomHeroCarousel();
        }
    }

    function renderRPGHeader() {
        const powerEl = document.getElementById("rpg-power-display");
        if (powerEl) powerEl.textContent = rpgEngine.getPartyPower();
        const squadEl = document.getElementById("rpg-squad-power");
        if (squadEl) squadEl.textContent = rpgEngine.getPartyPower();
    }

    function getHeroIdFromCategory(catName) {
        if (!catName || catName === "🧠 Due for SRS Review") return null;
        const matchedHero = rpgEngine.heroes.find(h => catName.includes(h.name));
        return matchedHero ? matchedHero.id : null;
    }

    function getHeroIdForCard(card) {
        if (!card) return null;
        if (card.heroId) return card.heroId;
        if (typeof HEROES_DATA !== 'undefined' && Array.isArray(HEROES_DATA)) {
            const hero = HEROES_DATA.find(h => h.words && h.words.some(w => w[0] === card.word || w.word === card.word));
            if (hero) return hero.id;
        }
        return null;
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

            const iconHtml = (hero.faceImage || hero.image) 
                ? `<img src="${hero.faceImage || hero.image}" style="width:14px; height:14px; border-radius:50%; margin-right:4px; object-fit:cover;">` 
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
                renderHeroWordHelperPanel(activeScenario);
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

            const iconHtml = (hero.faceImage || hero.image) 
                ? `<img src="${hero.faceImage || hero.image}" style="width:14px; height:14px; border-radius:50%; margin-right:4px; object-fit:cover;">` 
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

    let currentScenarioCategory = 'reallife'; // 'reallife' or 'heroes'

    const scenariosTypeReallifeBtn = document.getElementById("scenarios-type-reallife-btn");
    const scenariosTypeHeroesBtn = document.getElementById("scenarios-type-heroes-btn");
    const heroWordHelperBox = document.getElementById("hero-word-helper-box");
    const heroGrammarRuleHint = document.getElementById("hero-grammar-rule-hint");
    const heroWordsCategoriesContainer = document.getElementById("hero-words-categories-container");

    if (scenariosTypeReallifeBtn && scenariosTypeHeroesBtn) {
        scenariosTypeReallifeBtn.addEventListener("click", () => {
            currentScenarioCategory = 'reallife';
            scenariosTypeReallifeBtn.className = "btn btn-sm btn-primary";
            scenariosTypeHeroesBtn.className = "btn btn-sm btn-outline";
            renderScenarios();
        });

        scenariosTypeHeroesBtn.addEventListener("click", () => {
            currentScenarioCategory = 'heroes';
            scenariosTypeHeroesBtn.className = "btn btn-sm btn-primary";
            scenariosTypeReallifeBtn.className = "btn btn-sm btn-outline";
            renderScenarios();
        });
    }

    function renderScenarios() {
        if (!scenariosListContainer) return;
        scenariosListContainer.innerHTML = "";

        let filteredList = [];
        if (currentScenarioCategory === 'reallife') {
            filteredList = SCENARIOS.filter(sc => !sc.isHeroScenario);
        } else {
            const unlockedHeroIds = rpgEngine.heroes.filter(h => h.unlocked).map(h => h.id);
            filteredList = SCENARIOS.filter(sc => sc.isHeroScenario && unlockedHeroIds.includes(sc.heroId));
        }

        if (filteredList.length === 0 && currentScenarioCategory === 'heroes') {
            scenariosListContainer.innerHTML = `<div style="font-size:12px; color:var(--text-muted); padding:10px; text-align:center;">Unlock heroes in Hero RPG to start dedicated hero dialogues!</div>`;
            return;
        }

        filteredList.forEach(sc => {
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
        
        const targetHero = (scenario.isHeroScenario && scenario.heroId) ? rpgEngine.heroes.find(h => h.id === scenario.heroId) : null;
        const avatarSrc = targetHero ? (targetHero.faceImage || targetHero.image) : null;
        if (avatarSrc) {
            scenarioIcon.innerHTML = `<img src="${avatarSrc}" style="width:100%; height:100%; object-fit:cover; object-position:top center; border-radius:50%;">`;
        } else {
            scenarioIcon.innerHTML = `<i class="fa-solid ${scenario.icon}"></i>`;
        }

        renderHeroWordHelperPanel(scenario);
        updateHeroDailyBonusTracker();
        resetChat();
    }

    // --- DAILY HERO WORD USAGE TRACKER (RESETS DAILY) ---
    function loadWordUsageMap() {
        const todayStr = new Date().toISOString().split('T')[0];
        const savedDate = localStorage.getItem("hero_word_usage_date");

        if (savedDate !== todayStr) {
            localStorage.setItem("hero_word_usage_v2", "{}");
            localStorage.setItem("hero_word_usage_date", todayStr);
            return {};
        }

        try {
            return JSON.parse(localStorage.getItem("hero_word_usage_v2") || "{}");
        } catch (e) {
            return {};
        }
    }

    function saveWordUsageMap(map) {
        const todayStr = new Date().toISOString().split('T')[0];
        localStorage.setItem("hero_word_usage_v2", JSON.stringify(map));
        localStorage.setItem("hero_word_usage_date", todayStr);
    }

    function getWordUsageCount(heroId, word) {
        const map = loadWordUsageMap();
        const key = `${heroId}_${word.toLowerCase()}`;
        return map[key] || 0;
    }

    function incrementWordUsageCount(heroId, word) {
        const map = loadWordUsageMap();
        const key = `${heroId}_${word.toLowerCase()}`;
        const current = map[key] || 0;
        map[key] = current + 1;
        saveWordUsageMap(map);
        return map[key];
    }

    // --- ALL-TIME HERO WORD USAGE TRACKER (LIFETIME STATS) ---
    function getWordProps(wObj) {
        if (!wObj) return { word: "", phonetic: "", translation: "", example: "" };
        if (Array.isArray(wObj)) {
            return {
                word: wObj[0] || "",
                phonetic: wObj[1] || "",
                translation: wObj[2] || "",
                example: wObj[3] || ""
            };
        }
        return {
            word: wObj.word || "",
            phonetic: wObj.phonetic || "",
            translation: wObj.translation || "",
            example: wObj.example || ""
        };
    }

    function loadAllTimeWordUsageMap() {
        try {
            return JSON.parse(localStorage.getItem("hero_word_usage_alltime") || "{}");
        } catch (e) {
            return {};
        }
    }

    function saveAllTimeWordUsageMap(map) {
        localStorage.setItem("hero_word_usage_alltime", JSON.stringify(map));
    }

    function getAllTimeWordUsageCount(heroId, word) {
        const map = loadAllTimeWordUsageMap();
        const key = `${heroId}_${word.toLowerCase()}`;
        return map[key] || 0;
    }

    function incrementAllTimeWordUsageCount(heroId, word) {
        const map = loadAllTimeWordUsageMap();
        const key = `${heroId}_${word.toLowerCase()}`;
        const current = map[key] || 0;
        map[key] = current + 1;
        saveAllTimeWordUsageMap(map);
        return map[key];
    }

    function getHeroTotalAllTimeWordsCount(heroId, heroWordsList) {
        if (!heroWordsList || heroWordsList.length === 0) return 0;
        const map = loadAllTimeWordUsageMap();
        return heroWordsList.reduce((acc, wObj) => {
            const w = getWordProps(wObj);
            if (!w.word) return acc;
            const key = `${heroId}_${w.word.toLowerCase()}`;
            return acc + (map[key] || 0);
        }, 0);
    }

    function getWordAllTimeStats(heroId, word, heroWordsList) {
        const count = getAllTimeWordUsageCount(heroId, word);
        const total = getHeroTotalAllTimeWordsCount(heroId, heroWordsList);
        const percentage = total > 0 ? parseFloat(((count / total) * 100).toFixed(1)) : 0.0;
        return { count, percentage, total };
    }

    function getWordVariants(baseWord) {
        if (!baseWord) return new Set();
        const lower = baseWord.toLowerCase().trim();
        const set = new Set([lower]);

        // Standard plural and verb inflections
        set.add(lower + "s");
        set.add(lower + "es");
        set.add(lower + "ed");
        set.add(lower + "ing");
        if (lower.endsWith("e")) {
            set.add(lower + "d");
            set.add(lower.slice(0, -1) + "ing");
        }
        if (lower.endsWith("y")) {
            set.add(lower.slice(0, -1) + "ies");
            set.add(lower.slice(0, -1) + "ied");
        }

        // Irregular plurals & common forms
        const IRREGULARS = {
            "man": ["men"],
            "woman": ["women"],
            "child": ["children"],
            "person": ["people", "persons"],
            "foot": ["feet"],
            "tooth": ["teeth"],
            "mouse": ["mice"],
            "goose": ["geese"],
            "leaf": ["leaves"],
            "knife": ["knives"],
            "life": ["lives"],
            "half": ["halves"],
            "shelf": ["shelves"],
            "wolf": ["wolves"],
            "city": ["cities"],
            "hero": ["heroes"],
            "country": ["countries"],
            "family": ["families"],
            "story": ["stories"],
            "activity": ["activities"],
            "party": ["parties"],
            "body": ["bodies"],
            "baby": ["babies"]
        };

        if (IRREGULARS[lower]) {
            IRREGULARS[lower].forEach(v => set.add(v));
        }

        return set;
    }

    function evaluateHeroDialogueXP(hero, text) {
        if (!hero || !hero.words || !text) return { totalXP: 0, matchedWordsInfo: [] };

        const lowerText = text.toLowerCase().trim();
        const cleanText = lowerText.replace(/[^\w\s']/g, " ").replace(/\s+/g, " ");
        const wordsInText = cleanText.split(/\s+/).map(w => w.replace(/^'+|'+$/g, ''));
        let totalXP = 0;
        const matchedWordsInfo = [];

        hero.words.forEach(wObj => {
            const w = getWordProps(wObj);
            if (!w.word) return;
            const wordLower = w.word.toLowerCase().trim();
            const variants = getWordVariants(wordLower);

            let isMatched = false;
            for (const v of variants) {
                if (wordsInText.includes(v) || cleanText.includes(` ${v} `) || cleanText.startsWith(`${v} `) || cleanText.endsWith(` ${v}`)) {
                    isMatched = true;
                    break;
                }
            }

            // Stemming fallback: check if any word in user text stems to target wordLower
            if (!isMatched) {
                isMatched = wordsInText.some(userW => {
                    if (userW === wordLower) return true;
                    if (userW.endsWith("s") && userW.slice(0, -1) === wordLower) return true;
                    if (userW.endsWith("es") && userW.slice(0, -2) === wordLower) return true;
                    if (userW.endsWith("ies") && userW.slice(0, -3) + "y" === wordLower) return true;
                    if (userW.endsWith("ing") && (userW.slice(0, -3) === wordLower || userW.slice(0, -3) + "e" === wordLower)) return true;
                    if (userW.endsWith("ed") && (userW.slice(0, -2) === wordLower || userW.slice(0, -1) === wordLower)) return true;
                    return false;
                });
            }

            if (isMatched) {
                const currentUsage = getWordUsageCount(hero.id, w.word);
                let bonusXp = 1;
                let tierText = "Mastered (+1 XP)";

                if (currentUsage === 0) {
                    bonusXp = 20;
                    tierText = "1st Use (+20 XP)";
                } else if (currentUsage === 1) {
                    bonusXp = 10;
                    tierText = "2nd Use (+10 XP)";
                } else if (currentUsage === 2) {
                    bonusXp = 5;
                    tierText = "3rd Use (+5 XP)";
                }

                incrementWordUsageCount(hero.id, w.word);
                incrementAllTimeWordUsageCount(hero.id, w.word);
                totalXP += bonusXp;
                matchedWordsInfo.push({ word: w.word, bonusXp, tierText });
            }
        });

        return { totalXP, matchedWordsInfo };
    }

    function processAllUnlockedHeroesWordXP(text) {
        if (!text) return [];
        const unlockedHeroes = rpgEngine.heroes.filter(h => h.unlocked);
        const results = [];

        unlockedHeroes.forEach(heroObj => {
            const evalResult = evaluateHeroDialogueXP(heroObj, text);
            if (evalResult.totalXP > 0) {
                triggerRPGReward("chat", heroObj.id, heroObj.id, evalResult.totalXP);
                addXP(evalResult.totalXP);

                const wordsDetailHtml = evalResult.matchedWordsInfo.map(m => 
                    `<span style="display:inline-block; margin:2px; padding:1px 6px; background:rgba(255,255,255,0.1); border-radius:4px; font-size:10px;">${m.word} (${m.tierText})</span>`
                ).join("");

                showToast(`
                    <div style="display:flex; flex-direction:column; gap:4px;">
                        <div style="font-size:15px; font-weight:800; color:#fbbf24; display:flex; align-items:center; gap:6px;">
                            <i class="fa-solid fa-bolt" style="color:#f59e0b;"></i> +${evalResult.totalXP} XP WORD BONUS!
                        </div>
                        <div style="font-size:12px; font-weight:600; color:#e2e8f0;">
                            ⚔️ Hero <strong>${heroObj.name}</strong> Gained +${evalResult.totalXP} XP
                        </div>
                        <div style="font-size:11px; margin-top:4px; border-top:1px solid rgba(255,255,255,0.1); padding-top:4px;">
                            ${wordsDetailHtml}
                        </div>
                    </div>
                `, "linear-gradient(135deg, #1e1b4b, #312e81)", "#818cf8");

                results.push({ hero: heroObj, evalResult });
            }
        });

        if (results.length > 0) {
            try { renderLiveHeroPicker(); } catch (e) {}
        }

        return results;
    }

    let activeVocabHeroId = null;

    function renderLeftChatHeroSidebar() {
        const leftSidebar = document.getElementById("chat-left-hero-sidebar");
        if (!leftSidebar) return;

        const unlockedHeroes = rpgEngine.heroes.filter(h => h.unlocked);
        leftSidebar.innerHTML = "";

        unlockedHeroes.forEach(hero => {
            const avatarSrc = hero.faceImage || hero.image;
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `chat-hero-avatar-btn ${activeScenario && activeScenario.heroId === hero.id ? 'active' : ''}`;
            btn.title = `Chat with ${hero.name} (${hero.title || hero.role})`;
            
            if (avatarSrc) {
                btn.innerHTML = `<img src="${avatarSrc}" alt="${hero.name}">`;
            } else {
                btn.innerHTML = `<i class="fa-solid fa-user-shield" style="font-size:18px; color:var(--primary);"></i>`;
            }

            btn.addEventListener("click", () => {
                const heroScenario = SCENARIOS.find(sc => sc.isHeroScenario && sc.heroId === hero.id);
                if (heroScenario) {
                    activeVocabHeroId = hero.id;
                    selectScenario(heroScenario);
                }
            });

            leftSidebar.appendChild(btn);
        });
    }

    function renderHeroWordHelperPanel(scenario) {
        if (!heroWordHelperBox) return;

        renderLeftChatHeroSidebar();

        // Show cheatsheet EXCLUSIVELY in dedicated Hero Roleplay Dialogues!
        if (!scenario.isHeroScenario || !scenario.heroId) {
            heroWordHelperBox.classList.add("hidden");
            const headerVocabBtn = document.getElementById("header-toggle-vocab-btn");
            if (headerVocabBtn) headerVocabBtn.style.display = "none";
            return;
        }

        if (!activeVocabHeroId) {
            activeVocabHeroId = scenario.heroId;
        }

        const targetHero = rpgEngine.heroes.find(h => h.id === activeVocabHeroId) || rpgEngine.heroes.find(h => h.id === scenario.heroId);
        if (!targetHero) {
            heroWordHelperBox.classList.add("hidden");
            const headerVocabBtn = document.getElementById("header-toggle-vocab-btn");
            if (headerVocabBtn) headerVocabBtn.style.display = "none";
            return;
        }

        heroWordHelperBox.classList.remove("hidden");
        const headerVocabBtn = document.getElementById("header-toggle-vocab-btn");
        if (headerVocabBtn) {
            headerVocabBtn.style.display = "inline-flex";
            headerVocabBtn.innerHTML = `<i class="fa-solid fa-book-bookmark"></i> Words (${targetHero.words ? targetHero.words.length : 50})`;
        }

        const deckNameEl = document.getElementById("vocab-deck-hero-name");
        if (deckNameEl) {
            deckNameEl.textContent = `${targetHero.name}'s Deck`;
        }

        // Grammar rule hint
        const ruleText = targetHero.grammarRules ? targetHero.grammarRules.join(" | ") : "Grammar Practice";
        heroGrammarRuleHint.innerHTML = `<i class="fa-solid fa-lightbulb"></i> <strong>Grammar Focus:</strong> ${ruleText}`;

        // Categorize words into Nouns, Verbs, Adjectives, Expressions
        const categorized = categorizeHeroWords(targetHero.words);
        heroWordsCategoriesContainer.innerHTML = "";

        const sections = [
            { title: "🟦 Nouns (Существительные)", words: categorized.nouns, color: "var(--primary)" },
            { title: "🟩 Verbs (Глаголы)", words: categorized.verbs, color: "var(--success)" },
            { title: "🟨 Adjectives (Прилагательные)", words: categorized.adjectives, color: "var(--warning)" },
            { title: "🟪 Expressions & Time (Выражения)", words: categorized.expressions, color: "var(--heart)" }
        ];

        sections.forEach(sec => {
            if (!sec.words || sec.words.length === 0) return;

            const row = document.createElement("div");
            row.className = "sidebar-vocab-section";
            row.style.fontSize = "11px";
            row.style.display = "flex";
            row.style.flexDirection = "column";
            row.style.gap = "4px";

            const rowHeader = document.createElement("div");
            rowHeader.style.fontWeight = "700";
            rowHeader.style.color = sec.color;
            rowHeader.textContent = `${sec.title} (${sec.words.length})`;

            const chipsWrap = document.createElement("div");
            chipsWrap.style.display = "flex";
            chipsWrap.style.flexWrap = "wrap";
            chipsWrap.style.gap = "4px";

            sec.words.forEach(wObj => {
                const w = getWordProps(wObj);
                const currentUsage = getWordUsageCount(targetHero.id, w.word);
                const allTimeStats = getWordAllTimeStats(targetHero.id, w.word, targetHero.words);
                
                let tierClass = "tier-mastered";
                let tierTooltip = "⚪ Mastered (+1 XP)";

                if (currentUsage === 0) {
                    tierClass = "tier-1st";
                    tierTooltip = "🟡 1st Use Today Bonus: +20 XP!";
                } else if (currentUsage === 1) {
                    tierClass = "tier-2nd";
                    tierTooltip = "🟣 2nd Use Today Bonus: +10 XP!";
                } else if (currentUsage === 2) {
                    tierClass = "tier-3rd";
                    tierTooltip = "🔵 3rd Use Today Bonus: +5 XP!";
                }

                const chip = document.createElement("button");
                chip.type = "button";
                chip.className = `btn btn-sm word-chip-item ${tierClass}`;
                chip.dataset.word = w.word.toLowerCase();
                chip.dataset.translation = (w.translation || '').toLowerCase();
                chip.title = `${w.word} ${w.phonetic || ''} — ${w.translation || ''} | ${tierTooltip} | Lifetime: ${allTimeStats.count} times (${allTimeStats.percentage}%) (Click to listen 🔊)`;
                chip.innerHTML = `<strong>${w.word}</strong>`;

                chip.addEventListener("click", () => {
                    if (window.voiceService) {
                        voiceService.speak(w.word, null, null, targetHero.voiceConfig || null);
                    } else {
                        const uttr = new SpeechSynthesisUtterance(w.word);
                        uttr.lang = "en-US";
                        window.speechSynthesis.speak(uttr);
                    }
                    showToast(`🔊 <b>Pronounced:</b> ${w.word} (${w.translation || ''})`, "linear-gradient(135deg, #3b82f6, #1d4ed8)", "#60a5fa");
                });

                chipsWrap.appendChild(chip);
            });

            row.appendChild(rowHeader);
            row.appendChild(chipsWrap);
            heroWordsCategoriesContainer.appendChild(row);
        });
    }

    // Vocabulary Sidebar Toggle, Search & Deck Switcher Listeners
    const toggleWordSidebarBtn = document.getElementById("toggle-word-sidebar-btn");
    const headerToggleVocabBtn = document.getElementById("header-toggle-vocab-btn");
    const heroVocabSearch = document.getElementById("hero-vocab-search");
    const prevHeroVocabBtn = document.getElementById("prev-hero-vocab-btn");
    const nextHeroVocabBtn = document.getElementById("next-hero-vocab-btn");

    function cycleVocabDeck(direction) {
        const unlockedHeroes = rpgEngine.heroes.filter(h => h.unlocked);
        if (unlockedHeroes.length === 0) return;

        let currentIndex = unlockedHeroes.findIndex(h => h.id === activeVocabHeroId);
        if (currentIndex === -1) currentIndex = 0;

        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = unlockedHeroes.length - 1;
        if (newIndex >= unlockedHeroes.length) newIndex = 0;

        activeVocabHeroId = unlockedHeroes[newIndex].id;
        renderHeroWordHelperPanel(activeScenario);
    }

    if (prevHeroVocabBtn) prevHeroVocabBtn.addEventListener("click", () => cycleVocabDeck(-1));
    if (nextHeroVocabBtn) nextHeroVocabBtn.addEventListener("click", () => cycleVocabDeck(1));

    function toggleHeroWordSidebar() {
        if (!heroWordHelperBox) return;
        heroWordHelperBox.classList.toggle("collapsed");
        const isCollapsed = heroWordHelperBox.classList.contains("collapsed");
        if (toggleWordSidebarBtn) {
            toggleWordSidebarBtn.innerHTML = isCollapsed ? `<i class="fa-solid fa-angles-left"></i> Show` : `<i class="fa-solid fa-angles-right"></i> Hide`;
        }
    }

    if (toggleWordSidebarBtn) toggleWordSidebarBtn.addEventListener("click", toggleHeroWordSidebar);
    if (headerToggleVocabBtn) headerToggleVocabBtn.addEventListener("click", toggleHeroWordSidebar);

    // Modal Maximize / Restore Handler
    const maximizeChatBtn = document.getElementById("maximize-chat-modal-btn");
    if (maximizeChatBtn) {
        maximizeChatBtn.addEventListener("click", () => {
            const chatModalContent = document.querySelector("#modal-hero-chat .rpg-modal-content") || document.querySelector("#modal-hero-chat .modal-content");
            if (!chatModalContent) return;
            chatModalContent.classList.toggle("maximized");
            const isMax = chatModalContent.classList.contains("maximized");
            maximizeChatBtn.innerHTML = isMax ? `<i class="fa-solid fa-compress"></i>` : `<i class="fa-solid fa-expand"></i>`;
            maximizeChatBtn.title = isMax ? "Restore Window Size" : "Maximize Window";
        });
    }

    if (heroVocabSearch) {
        heroVocabSearch.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const chips = heroWordsCategoriesContainer.querySelectorAll(".word-chip-item");
            chips.forEach(chip => {
                const w = chip.dataset.word || "";
                const tr = chip.dataset.translation || "";
                if (!query || w.includes(query) || tr.includes(query)) {
                    chip.style.display = "inline-block";
                } else {
                    chip.style.display = "none";
                }
            });
        });
    }

    function resetChat() {
        chatHistory = [];
        if (chatMessagesBox) chatMessagesBox.innerHTML = "";
        if (feedbackBanner) feedbackBanner.classList.add("hidden");

        // For Hero Scenarios, let the user initiate the conversation first!
        if (activeScenario && !activeScenario.isHeroScenario && activeScenario.greeting) {
            appendMessage("assistant", activeScenario.greeting);
        }
    }

    function evaluateUserGrammarClientSide(text) {
        const lower = text.toLowerCase().trim();
        
        // 1. Detect Cyrillic / Russian words inserted in English text (e.g. "my father is умер")
        const cyrillicMatch = text.match(/[а-яА-ЯёЁ]+/g);
        if (cyrillicMatch) {
            const ruWords = cyrillicMatch.join(", ");
            return `💡 В сообщении обнаружено русское слово "${ruWords}". На английском следует использовать "dead" / "passed away" или английский аналог.`;
        }

        // 2. Detect incorrect short responses (e.g. "Not", "Not am")
        if (/^(not|not am|no am)$/i.test(lower)) {
            return `💡 Ответ "${text}" грамматически некорректен. Следует говорить "No, I am not" или просто "No".`;
        }

        // 3. Detect missing articles before nouns/roles (e.g. "have sister", "you knight", "you paladin")
        const missingRoleArticleMatch = lower.match(/\b(are\s+you|is\s+he|is\s+she|i\s+am|you\s+are|he\s+is|she\s+is)\s+(knight|paladin|warrior|leader|hero|king|queen|boy|girl|man|woman)\b/i);
        if (missingRoleArticleMatch) {
            const role = missingRoleArticleMatch[2];
            return `💡 В фразе "${missingRoleArticleMatch[0]}" пропущен артикль "a". Существительные в единственном числе требуют артикль: "... a ${role}".`;
        }

        const missingArticleMatch = lower.match(/\bhave\s+(sister|brother|mother|father|son|daughter|child|friend|sword|shield)\b/i);
        if (missingArticleMatch) {
            const noun = missingArticleMatch[1];
            return `💡 В фразе "have ${noun}" пропущен артикль. Следует писать: "have a ${noun}".`;
        }

        // 4. Detect missing 'to be' verb before adjectives/nouns (e.g. "I happy", "Today I happy", "I fine", "I brave")
        // Exclude questions that ALREADY have am/is/are/was/were before the subject!
        const hasToBeVerb = /\b(am|is|are|was|were|be|do|does|did)\b/i.test(lower);
        if (!hasToBeVerb) {
            const toBeMatch = lower.match(/\b(i|you|he|she|it|we|they)\s+(happy|fine|brave|strong|ready|good|paladin|knight)\b/i);
            if (toBeMatch) {
                const subject = toBeMatch[1];
                const word = toBeMatch[2];
                let verb = "am";
                if (["you", "we", "they"].includes(subject)) verb = "are";
                if (["he", "she", "it"].includes(subject)) verb = "is";

                return `💡 В предложении "${toBeMatch[0]}" пропущен глагол 'to be' (${verb}). Правильно: "${subject} ${verb} ${word}".`;
            }
        }

        // 5. Typos
        if (lower.includes("happi")) {
            return `💡 В слове "happi" опечатка, должно быть "happy".`;
        }
        if (lower.includes("fihe")) {
            return `💡 В слове "fihe" опечатка, должно быть "fine".`;
        }

        return null;
    }

    function translateA0TextToRussian(text) {
        if (!text) return "";
        let ru = text;

        const phraseDict = {
            "Nice to meet you!": "Приятно познакомиться!",
            "My name is": "Меня зовут",
            "I'm a noble Silver Paladin tank": "Я благородный Паладин-танк",
            "I am a noble Silver Paladin tank": "Я благородный Паладин-танк",
            "Are you happy or brave today?": "Ты сегодня счастливый или храбрый?",
            "That's great to hear!": "Отлично это слышать!",
            "I am happy too": "Я тоже счастлив",
            "when I'm protecting my friends": "когда защищаю своих друзей",
            "on the battlefield!": "на поле боя!",
            "Do you have a brother or sister?": "У тебя есть брат или сестра?",
            "Do you have a brother or a sister?": "У тебя есть брат или сестра?",
            "Do you have a sword or a shield?": "У тебя есть меч или щит?",
            "Who is the most important person in your family?": "Кто самый главный человек в твоей семье?",
            "Is your father a leader?": "Твой отец — лидер?",
            "Stay warm, my friend!": "Держись в тепле, мой друг!",
            "The wind whispers of adventure!": "Ветер шепчет о приключениях!",
            "Hail, warrior!": "Приветствую, воин!",
            "Shh... walk quietly in the shadows.": "Тшш... ходи тихо в тенях.",
            "Welcome to the Emerald Grove!": "Добро пожаловать в Изумрудную Рощу!"
        };

        Object.keys(phraseDict).forEach(key => {
            const reg = new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
            ru = ru.replace(reg, phraseDict[key]);
        });

        return ru;
    }

    function getActiveHeroVoiceConfig(customHeroId = null) {
        const targetId = customHeroId || (activeScenario && activeScenario.isHeroScenario ? activeScenario.heroId : null);
        if (targetId) {
            const hero = rpgEngine.heroes.find(h => h.id === targetId);
            if (hero && hero.voiceConfig) return hero.voiceConfig;
        }
        return null;
    }

    function calculatePronunciationAccuracy(targetText, spokenText) {
        if (!targetText || !spokenText) return 0;
        const cleanTarget = targetText.toLowerCase().replace(/\[correction:[\s\S]*?\]/gi, '').replace(/[^a-z0-9\s]/gi, '').split(/\s+/).filter(Boolean);
        const cleanSpoken = spokenText.toLowerCase().replace(/[^a-z0-9\s]/gi, '').split(/\s+/).filter(Boolean);
        if (cleanTarget.length === 0) return 100;

        let matchedCount = 0;
        cleanTarget.forEach(w => {
            if (cleanSpoken.includes(w)) matchedCount++;
        });

        const accuracy = Math.round((matchedCount / cleanTarget.length) * 100);
        return Math.min(100, Math.max(0, accuracy));
    }

    function renderPronunciationBadge(bubble, accuracy, msgContent, heroId) {
        let badgeClass = "perfect";
        let badgeText = `🟢 ${accuracy}% Accuracy (Perfect!)`;
        if (accuracy < 60) {
            badgeClass = "retry";
            badgeText = `🔴 ${accuracy}% Accuracy (Try Again!)`;
        } else if (accuracy < 85) {
            badgeClass = "good";
            badgeText = `🟡 ${accuracy}% Accuracy (Good Job!)`;
        }

        let badgeEl = bubble.querySelector(".pronunciation-badge");
        if (!badgeEl) {
            badgeEl = document.createElement("div");
            bubble.querySelector(".message-content").appendChild(badgeEl);
        }
        badgeEl.className = `pronunciation-badge ${badgeClass}`;
        badgeEl.textContent = badgeText;

        const repeatBtn = bubble.querySelector(".repeat-sentence-btn");
        if (repeatBtn) {
            repeatBtn.classList.remove("unrepeated-highlight");
            repeatBtn.classList.add("repeated");
        }

        if (accuracy >= 60 && heroId) {
            const msgId = msgContent.slice(0, 30);
            const state = getTodayHeroAudioState(heroId);
            if (!state.repeatedMsgs.includes(msgId)) {
                state.repeatedMsgs.push(msgId);
                saveTodayHeroAudioState(heroId, state);

                triggerRPGReward("repeat", heroId, heroId, 20, `🎯 +20 XP Pronunciation Repeat Bonus!`, "linear-gradient(135deg, #10b981, #059669)");
            }
        }
    }

    function checkAndAwardListeningBonus(text, heroId) {
        if (!heroId) return;
        const msgId = text.slice(0, 30);
        const state = getTodayHeroAudioState(heroId);
        if (!state.listenedMsgs.includes(msgId)) {
            state.listenedMsgs.push(msgId);
            saveTodayHeroAudioState(heroId, state);

            triggerRPGReward("listen", heroId, heroId, 20, `🔊 +20 XP AI Listening Bonus!`, "linear-gradient(135deg, #3b82f6, #1d4ed8)");
        }
    }

    function appendMessage(role, text, customTranslation = null) {
        chatHistory.push({ role, content: text });
        const bubble = document.createElement("div");
        bubble.className = `message-bubble ${role}`;
        
        const heroObj = (activeScenario && activeScenario.isHeroScenario && activeScenario.heroId) 
            ? rpgEngine.heroes.find(h => h.id === activeScenario.heroId) 
            : null;
        const heroAvatarSrc = heroObj ? (heroObj.faceImage || heroObj.image) : null;
        
        let avatar = `<div class="message-avatar"><i class="fa-solid fa-user"></i></div>`;
        if (role === 'assistant') {
            if (heroAvatarSrc) {
                avatar = `<div class="message-avatar" style="overflow:hidden;"><img src="${heroAvatarSrc}" style="width:100%; height:100%; object-fit:cover; object-position:top center; border-radius:50%;"></div>`;
            } else {
                avatar = `<div class="message-avatar"><i class="fa-solid ${activeScenario.icon}"></i></div>`;
            }
        }
        
        const activeHeroId = (activeScenario && activeScenario.isHeroScenario && activeScenario.heroId) ? activeScenario.heroId : null;
        const msgId = text.slice(0, 30);
        const heroState = activeHeroId ? getTodayHeroAudioState(activeHeroId) : null;
        const isListened = heroState && heroState.listenedMsgs && heroState.listenedMsgs.includes(msgId);
        const isRepeated = heroState && heroState.repeatedMsgs && heroState.repeatedMsgs.includes(msgId);

        const translateBtnHtml = role === 'assistant' 
            ? `<button class="audio-play-link ${isListened ? 'listened' : 'unheard-highlight'}"><i class="fa-solid fa-volume-high"></i> Listen</button>
               <button class="repeat-sentence-btn ${isRepeated ? 'repeated' : 'unrepeated-highlight'}"><i class="fa-solid fa-microphone-lines"></i> Repeat & Rate</button>
               <button class="translate-msg-btn btn btn-sm btn-outline" style="font-size:10px; margin-left:8px; padding:1px 6px; border-radius:4px;"><i class="fa-solid fa-language"></i> 🇷🇺 Translate / Перевод</button>
               <div class="msg-translation-box hidden" style="font-size:11px; color:#cbd5e1; margin-top:6px; padding:6px 10px; background:rgba(255,255,255,0.06); border-radius:6px; border-left:3px solid var(--primary);"></div>` 
            : '';

        bubble.innerHTML = `
            ${avatar}
            <div class="message-content">
                <div>${text}</div>
                ${translateBtnHtml}
            </div>
        `;

        if (role === 'assistant') {
            const audioBtn = bubble.querySelector(".audio-play-link");
            if (audioBtn) {
                audioBtn.addEventListener("click", () => {
                    checkAndAwardListeningBonus(text, activeHeroId);
                    audioBtn.classList.remove("unheard-highlight");
                    audioBtn.classList.add("listened");
                    audioBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Speaking...`;
                    voiceService.speak(
                        text,
                        () => { audioBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Speaking...`; },
                        () => { audioBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Listen`; },
                        getActiveHeroVoiceConfig()
                    );
                });
            }

            const repeatBtn = bubble.querySelector(".repeat-sentence-btn");
            if (repeatBtn) {
                repeatBtn.addEventListener("click", () => {
                    if (voiceService.isRecording) {
                        voiceService.stopListening();
                        repeatBtn.classList.remove("listening");
                        return;
                    }

                    voiceService.startListening(
                        (spokenTranscript) => {
                            const accuracy = calculatePronunciationAccuracy(text, spokenTranscript);
                            renderPronunciationBadge(bubble, accuracy, text, activeHeroId);
                        },
                        (isListening, msg) => {
                            if (isListening) repeatBtn.classList.add("listening");
                            else repeatBtn.classList.remove("listening");
                        },
                        (err) => {
                            repeatBtn.classList.remove("listening");
                            showToast(`⚠️ ${err}`, "rgba(239, 68, 68, 0.9)");
                        }
                    );
                });
            }

            const translateBtn = bubble.querySelector(".translate-msg-btn");
            const translationBox = bubble.querySelector(".msg-translation-box");
            if (translateBtn && translationBox) {
                translateBtn.addEventListener("click", async () => {
                    if (translationBox.classList.contains("hidden")) {
                        if (!translationBox.innerHTML) {
                            translationBox.innerHTML = `<em><i class="fa-solid fa-spinner fa-spin"></i> Перевожу...</em>`;
                            translationBox.classList.remove("hidden");
                            const ruText = await aiService.translateText(text);
                            translationBox.innerHTML = `<strong>🇷🇺</strong> ${ruText}`;
                        } else {
                            translationBox.classList.remove("hidden");
                        }
                    } else {
                        translationBox.classList.add("hidden");
                    }
                });
            }
        }

        chatMessagesBox.appendChild(bubble);
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
    }

    async function handleUserSendMessage() {
        const text = userChatInput.value.trim();
        if (!text) return;

        userChatInput.value = "";
        appendMessage("user", text);

        // ALL UNLOCKED HEROES WORD XP EVALUATION & LEVELING
        processAllUnlockedHeroesWordXP(text);

        // PER-HERO AUDIO & TYPING REWARDS (Rule 1, Rule 3, Rule 5)
        const activeHeroId = (activeScenario && activeScenario.isHeroScenario && activeScenario.heroId) ? activeScenario.heroId : null;

        if (activeHeroId) {
            const state = getTodayHeroAudioState(activeHeroId);
            let xpGain = 0;

            if (usedMicInCurrentDraft) {
                // Rule 1: Mic Input
                state.micCount++;
                xpGain = state.micCount <= 10 ? 50 : (state.micCount <= 30 ? 30 : 10);
                triggerRPGReward("mic", activeHeroId, activeHeroId, xpGain, `🎙️ +${xpGain} XP Hero Mic Bonus! (Use ${state.micCount}/10)`, "linear-gradient(135deg, #ec4899, #be185d)");
            } else {
                // Rule 3: Typed Input
                state.typedCount++;
                xpGain = state.typedCount <= 10 ? 30 : (state.typedCount <= 30 ? 20 : 5);
                triggerRPGReward("text", activeHeroId, activeHeroId, xpGain, `⌨️ +${xpGain} XP Hero Typing Bonus! (Use ${state.typedCount}/10)`, "linear-gradient(135deg, #8b5cf6, #6d28d9)");
            }

            // Rule 5: Full Cycle Combo Check (If last AI message was Listened + Repeated + current message used Mic)
            if (usedMicInCurrentDraft && lastAiMessageContent) {
                const lastMsgId = lastAiMessageContent.slice(0, 30);
                if (state.listenedMsgs.includes(lastMsgId) && state.repeatedMsgs.includes(lastMsgId) && !state.comboMsgs.includes(lastMsgId)) {
                    state.comboMsgs.push(lastMsgId);
                    triggerRPGReward("combo", activeHeroId, activeHeroId, 30, `🔥 +30 XP FULL CYCLE COMBO BONUS! (Listen + Repeat + Respond)`, "linear-gradient(135deg, #f59e0b, #d97706)");
                }
            }

            saveTodayHeroAudioState(activeHeroId, state);
            updateHeroDailyBonusTracker();
        }
        usedMicInCurrentDraft = false; // Reset flag for next draft!

        // Re-render hero word cheatsheet to update chip colors & tooltips live!
        renderHeroWordHelperPanel(activeScenario);

        const heroObj = (activeScenario && activeScenario.isHeroScenario && activeScenario.heroId)
            ? rpgEngine.heroes.find(h => h.id === activeScenario.heroId)
            : null;
        const heroName = heroObj ? heroObj.name : (activeScenario ? activeScenario.title : "AI");
        const avatarSrc = heroObj ? (heroObj.faceImage || heroObj.image) : null;
        const avatarHtml = avatarSrc 
            ? `<img src="${avatarSrc}" style="width:100%; height:100%; object-fit:cover; object-position:top center; border-radius:50%;">`
            : `<i class="fa-solid ${activeScenario.icon}"></i>`;

        const typingBubble = document.createElement("div");
        typingBubble.className = "message-bubble assistant typing";
        typingBubble.innerHTML = `<div class="message-avatar">${avatarHtml}</div><div class="message-content"><em>${heroName} is typing...</em></div>`;
        chatMessagesBox.appendChild(typingBubble);
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;

        try {
            const targetHeroObjects = heroObj ? [heroObj] : [];
            const aiResponse = await aiService.generateResponse(chatHistory, activeScenario, targetHeroObjects);
            lastAiMessageContent = aiResponse.text; // Store last AI response for combo tracking

            const autoSpeakToggle = document.getElementById("auto-speak-toggle");
            if (autoSpeakToggle && autoSpeakToggle.checked) {
                checkAndAwardListeningBonus(aiResponse.text, activeHeroId);
            }

            appendMessage("assistant", aiResponse.text, aiResponse.translation);

            if (autoSpeakToggle && autoSpeakToggle.checked) {
                voiceService.speak(aiResponse.text, null, null, getActiveHeroVoiceConfig());
            }

            const clientEval = evaluateUserGrammarClientSide(text);
            let aiCorr = (aiResponse.correction && !aiResponse.correction.includes("✅"))
                ? aiResponse.correction.replace(/^💡\s*Ошибка\/опечатка:\s*/gi, '').replace(/^Ошибка\/опечатка:\s*/gi, '').trim()
                : null;

            if (aiCorr && !aiCorr.startsWith('💡')) {
                aiCorr = '💡 ' + aiCorr;
            }

            if (clientEval && aiCorr) {
                feedbackText.innerHTML = `${clientEval}<div style="margin-top:4px; padding-top:4px; border-top:1px solid rgba(255,255,255,0.15);">${aiCorr}</div>`;
            } else if (clientEval) {
                feedbackText.innerHTML = clientEval;
            } else if (aiCorr) {
                feedbackText.innerHTML = aiCorr;
            } else if (aiResponse.correction && aiResponse.correction.includes("✅")) {
                feedbackText.innerHTML = aiResponse.correction;
            } else {
                feedbackText.innerHTML = "✅ Отлично! Предложение написано полностью грамматически правильно!";
            }
            feedbackBanner.classList.remove("hidden");
        } finally {
            if (typingBubble.parentNode === chatMessagesBox) {
                chatMessagesBox.removeChild(typingBubble);
            }
        }
    }

    if (sendChatBtn) sendChatBtn.addEventListener("click", handleUserSendMessage);
    if (userChatInput) {
        userChatInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleUserSendMessage();
            }
        });
    }

    if (clearChatBtn) clearChatBtn.addEventListener("click", resetChat);
    if (closeFeedbackBtn) closeFeedbackBtn.addEventListener("click", () => feedbackBanner?.classList.add("hidden"));

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

    function formatTimeUntilReview(nextReviewDate, studied) {
        if (!studied || !nextReviewDate) return "✨ New Word";
        const diffMs = nextReviewDate - Date.now();
        if (diffMs <= 0) return "🔥 Due Now!";
        
        const diffMins = Math.round(diffMs / (60 * 1000));
        if (diffMins < 60) return `⏳ in ${Math.max(1, diffMins)}m`;
        
        const diffHours = Math.round(diffMs / (60 * 60 * 1000));
        if (diffHours < 24) return `⏳ in ${diffHours}h`;
        
        const diffDays = Math.round(diffMs / (24 * 60 * 60 * 1000));
        if (diffDays < 30) return `⏳ in ${diffDays}d`;
        
        const diffMonths = Math.round(diffDays / 30);
        return `⏳ in ${diffMonths}mo`;
    }

    function renderFlashcardsUI() {
        if (!deckTabsContainer) return;
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
                flashcardEngine.autoAdvanceBatch();
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

        const cardControls = document.querySelector(".card-controls");
        let batchActionBox = document.getElementById("batch-action-box");
        if (!batchActionBox && cardControls) {
            batchActionBox = document.createElement("div");
            batchActionBox.id = "batch-action-box";
            batchActionBox.style.marginTop = "16px";
            batchActionBox.style.textAlign = "center";
            cardControls.parentNode.insertBefore(batchActionBox, cardControls.nextSibling);
        }

        const currentCard = flashcardEngine.getCurrentCard();
        if (currentCard) {
            if (cardControls) cardControls.style.display = "flex";
            if (batchActionBox) batchActionBox.style.display = "none";

            const intervalDays = currentCard.interval || 1;
            const easeFactor = (currentCard.easeFactor || 2.5).toFixed(2);
            const batchLabel = flashcardEngine.currentCategory === "🧠 Due for SRS Review" ? "SRS Queue" : `Batch ${flashcardEngine.batchIndex + 1}`;

            const cardHeroId = getHeroIdForCard(currentCard);
            const cardHeroObj = cardHeroId ? rpgEngine.heroes.find(h => h.id === cardHeroId) : null;
            const categoryDisplay = cardHeroObj ? `🛡️ ${cardHeroObj.name}'s Word` : flashcardEngine.currentCategory;
            const nextReviewStr = formatTimeUntilReview(currentCard.nextReviewDate, currentCard.studied);

            cardTag.innerHTML = `
                ${categoryDisplay} &bull; <small class="font-mono" style="color:var(--heart)">${batchLabel}</small>
                &nbsp;&bull;&nbsp; 
                <span style="background:rgba(99,102,241,0.2); color:#818cf8; border:1px solid rgba(99,102,241,0.4); padding:2px 8px; border-radius:10px; font-size:11px; font-weight:700;" class="font-mono" title="Next SRS Review Date">
                    <i class="fa-solid fa-clock"></i> ${nextReviewStr}
                </span>
            `;

            // Dynamic SRS interval preview on rating buttons (Again, Hard, Good, Easy)
            const againBtn = document.querySelector(".rate-btn.btn-again");
            const hardBtn = document.querySelector(".rate-btn.btn-hard");
            const goodBtn = document.querySelector(".rate-btn.btn-good");
            const easyBtn = document.querySelector(".rate-btn.btn-easy");

            const curInterval = currentCard.interval || 1;
            const curEase = currentCard.easeFactor || 2.5;
            const curReps = currentCard.repetitions || 0;

            const hardDays = Math.max(1, Math.round(curInterval * 1.2));
            
            let goodDays = 1;
            if (curReps + 1 === 1) goodDays = 1;
            else if (curReps + 1 === 2) goodDays = 6;
            else goodDays = Math.round(curInterval * curEase);

            let easyDays = 4;
            if (curReps + 1 === 1) easyDays = 4;
            else easyDays = Math.round(curInterval * (curEase + 0.15) * 1.3);

            if (againBtn) againBtn.innerHTML = `<i class="fa-solid fa-xmark"></i> Again <small class="font-mono" style="opacity:0.85; font-size:10px;">(&lt;10m)</small>`;
            if (hardBtn) hardBtn.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Hard <small class="font-mono" style="opacity:0.85; font-size:10px;">(${hardDays}d)</small>`;
            if (goodBtn) goodBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Good <small class="font-mono" style="opacity:0.85; font-size:10px;">(${goodDays}d)</small>`;
            if (easyBtn) easyBtn.innerHTML = `<i class="fa-solid fa-star"></i> Easy <small class="font-mono" style="opacity:0.85; font-size:10px;">(${easyDays}d)</small>`;

            cardWord.textContent = currentCard.word;
            cardPhonetic.textContent = currentCard.phonetic;
            cardTranslation.textContent = currentCard.translation;
            cardDefinition.textContent = currentCard.definition;
            cardExample.textContent = `"${currentCard.example}"`;
        } else {
            if (cardControls) cardControls.style.display = "none";
            if (batchActionBox) {
                batchActionBox.style.display = "block";
                const isSrsQueue = flashcardEngine.currentCategory === "🧠 Due for SRS Review";
                const nextBatchNum = flashcardEngine.batchIndex + 2;

                if (isSrsQueue) {
                    batchActionBox.innerHTML = `
                        <button class="btn btn-primary btn-lg" style="padding:14px 28px; font-size:16px;">
                            <i class="fa-solid fa-layer-group"></i> Return to Hero Decks
                        </button>
                    `;
                    batchActionBox.querySelector("button").addEventListener("click", () => {
                        const firstHeroDeck = Object.keys(flashcardEngine.decks).find(k => k !== "🧠 Due for SRS Review");
                        flashcardEngine.currentCategory = firstHeroDeck || "Valerius's Pack (A0)";
                        flashcardEngine.batchIndex = 0;
                        flashcardEngine.currentIndex = 0;
                        renderFlashcardsUI();
                    });
                } else {
                    batchActionBox.innerHTML = `
                        <button class="btn btn-primary btn-lg" style="padding:14px 28px; font-size:16px; box-shadow:0 0 20px rgba(236,72,153,0.4);">
                            <i class="fa-solid fa-forward"></i> Learn Next 10 Words (Batch ${nextBatchNum}) ▶️
                        </button>
                    `;
                    batchActionBox.querySelector("button").addEventListener("click", () => {
                        flashcardEngine.nextBatch();
                        renderFlashcardsUI();
                    });
                }
            }

            cardTag.textContent = flashcardEngine.currentCategory;
            cardWord.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" ? "🎉 No SRS Reviews Due!" : `🎉 Batch ${flashcardEngine.batchIndex + 1} Complete!`;
            cardPhonetic.textContent = "/done/";
            cardTranslation.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" 
                ? "Все накопленные карточки повторены!" 
                : `Отлично! Все 10 слов Порции ${flashcardEngine.batchIndex + 1} изучены и отложены на будущее.`;
            cardDefinition.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" 
                ? "Cards you study in hero decks will appear here automatically when their review date arrives!"
                : "Great job! SuperMemo SM-2 algorithm scheduled these 10 words into your review loop.";
            cardExample.textContent = flashcardEngine.currentCategory === "🧠 Due for SRS Review" 
                ? "Select a hero deck to learn new words!" 
                : `Click the button below to start Batch ${flashcardEngine.batchIndex + 2}!`;
        }

        const statsWordsEl = document.getElementById("stats-words-count");
        if (statsWordsEl) {
            statsWordsEl.textContent = Object.values(flashcardEngine.decks).reduce((acc, curr) => acc + curr.length, 0);
        }
    }

    flashcardEl.addEventListener("click", (e) => {
        if (e.target.closest("#card-speak-btn")) return;
        flashcardEl.classList.toggle("flipped");
    });

    cardSpeakBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = flashcardEngine.getCurrentCard();
        if (card) {
            const cardHeroId = getHeroIdForCard(card) || getHeroIdFromCategory(flashcardEngine.currentCategory);
            const heroObj = cardHeroId ? rpgEngine.heroes.find(h => h.id === cardHeroId) : null;
            const heroVoiceConfig = heroObj?.voiceConfig || null;

            cardSpeakBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
            flashcardEngine.speak(
                card.word,
                () => { cardSpeakBtn.innerHTML = `<i class="fa-solid fa-wave-square fa-beat"></i>`; },
                () => { cardSpeakBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`; },
                heroVoiceConfig
            );
        }
    });

    rateBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const rating = btn.getAttribute("data-rating");
            const currentCard = flashcardEngine.getCurrentCard();
            const targetHeroId = getHeroIdForCard(currentCard) || getHeroIdFromCategory(flashcardEngine.currentCategory);
            
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

            let cardXp = 0;
            if (rating === 'hard') cardXp = 2;
            else if (rating === 'good') cardXp = 4;
            else if (rating === 'easy') cardXp = 8;

            if (cardXp > 0) {
                addXP(cardXp);
                triggerRPGReward("card", targetHeroId, targetHeroId, cardXp);
            }
        });
    });

    // --- TAB 3: GRAMMAR LAB (STRICT CEFR GATING & SM-2 SRS REVIEWS) ---
    const grammarSrsEngine = new GrammarSRSEngine();
    let grammarLabMode = "study"; // "study" or "review"
    let currentReviewQueue = [];
    let currentReviewIndex = 0;
    let activeReviewQuestion = null;

    const grammarTopicsNav = document.getElementById("grammar-topics-nav");
    const grammarTheoryCard = document.getElementById("grammar-theory-card");
    const quizQuestionText = document.getElementById("quiz-question-text");
    const quizOptionsContainer = document.getElementById("quiz-options-container");
    const quizFeedbackBox = document.getElementById("quiz-feedback-box");
    const nextQuizBtn = document.getElementById("next-quiz-btn");
    const quizProgressText = document.getElementById("quiz-progress-text");
    const grammarDueBadge = document.getElementById("grammar-due-badge");
    const grammarStudyModeBtn = document.getElementById("grammar-study-mode-btn");
    const grammarReviewModeBtn = document.getElementById("grammar-review-mode-btn");
    const grammarCollapsibleRuleBar = document.getElementById("grammar-collapsible-rule-bar");
    const toggleGrammarRuleBtn = document.getElementById("toggle-grammar-rule-btn");
    const collapsibleRuleContent = document.getElementById("collapsible-rule-content");
    const ruleChevronIcon = document.getElementById("rule-chevron-icon");
    const grammarSrsRatingContainer = document.getElementById("grammar-srs-rating-container");
    const grammarExerciseHeading = document.getElementById("grammar-exercise-heading");

    function updateGrammarDueBadge() {
        if (grammarDueBadge) grammarDueBadge.textContent = grammarSrsEngine.getDueCount();
    }

    if (toggleGrammarRuleBtn) {
        toggleGrammarRuleBtn.addEventListener("click", () => {
            const isHidden = collapsibleRuleContent.classList.contains("hidden");
            if (isHidden) {
                collapsibleRuleContent.classList.remove("hidden");
                ruleChevronIcon.className = "fa-solid fa-chevron-up";
            } else {
                collapsibleRuleContent.classList.add("hidden");
                ruleChevronIcon.className = "fa-solid fa-chevron-down";
            }
        });
    }

    if (grammarStudyModeBtn && grammarReviewModeBtn) {
        grammarStudyModeBtn.addEventListener("click", () => {
            grammarLabMode = "study";
            grammarStudyModeBtn.className = "btn btn-sm btn-primary grammar-mode-btn active";
            grammarReviewModeBtn.className = "btn btn-sm btn-secondary grammar-mode-btn";
            renderGrammarUI();
        });

        grammarReviewModeBtn.addEventListener("click", () => {
            grammarLabMode = "review";
            grammarReviewModeBtn.className = "btn btn-sm btn-primary grammar-mode-btn active";
            grammarStudyModeBtn.className = "btn btn-sm btn-secondary grammar-mode-btn";
            currentReviewIndex = 0;
            renderGrammarUI();
        });
    }

    function getUnlockedGrammarTopics() {
        const unlockedHeroIds = rpgEngine.heroes.filter(h => h.unlocked).map(h => h.id);
        return GRAMMAR_TOPICS.filter(t => unlockedHeroIds.includes(t.heroId));
    }

    function renderGrammarUI() {
        updateGrammarDueBadge();
        grammarTopicsNav.innerHTML = "";
        const availableTopics = getUnlockedGrammarTopics();

        if (availableTopics.length === 0 || !availableTopics.find(t => t.id === currentGrammarTopic.id)) {
            currentGrammarTopic = availableTopics[0] || GRAMMAR_TOPICS[0];
        }

        if (grammarLabMode === "study") {
            grammarTopicsNav.style.display = "flex";
            grammarTheoryCard.style.display = "block";
            grammarCollapsibleRuleBar.classList.add("hidden");
            grammarSrsRatingContainer.classList.add("hidden");
            if (grammarExerciseHeading) grammarExerciseHeading.textContent = "Practice Exercise (10 Questions)";

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
        } else {
            // SRS REVIEW QUEUE MODE
            grammarTopicsNav.style.display = "none";
            grammarTheoryCard.style.display = "none";
            grammarCollapsibleRuleBar.classList.remove("hidden");
            collapsibleRuleContent.classList.add("hidden");
            ruleChevronIcon.className = "fa-solid fa-chevron-down";
            if (grammarExerciseHeading) grammarExerciseHeading.textContent = "Grammar Spaced Repetition (SRS Review)";

            currentReviewQueue = grammarSrsEngine.getDueQuestions();
            renderGrammarReviewQuestion();
        }
    }

    function getShuffledQuestionOptions(q) {
        const items = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correct }));
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        return {
            shuffledOptions: items.map(item => item.text),
            correctIdx: items.findIndex(item => item.isCorrect)
        };
    }

    function renderQuizQuestion() {
        const qList = currentGrammarTopic.questions;
        if (currentQuizIndex >= qList.length) {
            quizQuestionText.textContent = `🎉 Topic Quiz Complete! Your Score: ${quizScore} / ${qList.length}`;
            quizOptionsContainer.innerHTML = "";
            quizFeedbackBox.className = "quiz-feedback hidden";
            nextQuizBtn.style.display = "none";
            grammarSrsRatingContainer.classList.add("hidden");
            return;
        }

        const q = qList[currentQuizIndex];
        const { shuffledOptions, correctIdx } = getShuffledQuestionOptions(q);

        quizProgressText.textContent = `Question ${currentQuizIndex + 1} of ${qList.length}`;
        quizQuestionText.textContent = q.text;
        quizOptionsContainer.innerHTML = "";
        quizFeedbackBox.className = "quiz-feedback hidden";
        nextQuizBtn.style.display = "none";
        grammarSrsRatingContainer.classList.add("hidden");

        shuffledOptions.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "quiz-opt-btn";
            btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
            btn.addEventListener("click", () => selectQuizOption(idx, correctIdx, q.explanation));
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

            const todayStr = new Date().toISOString().split('T')[0];
            const topicId = currentGrammarTopic ? currentGrammarTopic.id : 'general';
            const questionKey = `quiz_xp_done_${todayStr}_${topicId}_q${currentQuizIndex}`;
            const alreadyEarnedToday = localStorage.getItem(questionKey) === "true";

            if (!alreadyEarnedToday) {
                localStorage.setItem(questionKey, "true");
                quizFeedbackBox.innerHTML = `<strong>✅ Correct! (+6 Hero XP)</strong> ${explanation}`;
                addXP(10);
                triggerRPGReward("quiz", currentGrammarTopic ? currentGrammarTopic.heroId : null, currentGrammarTopic ? currentGrammarTopic.heroId : null, 6);
            } else {
                quizFeedbackBox.innerHTML = `<strong>✅ Correct! (Practice mode — 0 XP, daily question completed)</strong> ${explanation}`;
            }
        } else {
            quizFeedbackBox.style.background = "rgba(239, 68, 68, 0.15)";
            quizFeedbackBox.style.border = "1px solid var(--danger)";
            quizFeedbackBox.innerHTML = `<strong>❌ Not quite.</strong> ${explanation}`;
        }

        quizFeedbackBox.classList.remove("hidden");
        nextQuizBtn.style.display = "inline-flex";
    }

    function renderGrammarReviewQuestion() {
        if (currentReviewQueue.length === 0) {
            quizQuestionText.textContent = "🎉 All due grammar reviews complete! Excellent job mastering your English rules.";
            quizProgressText.textContent = "Review Queue Empty";
            quizOptionsContainer.innerHTML = "";
            quizFeedbackBox.className = "quiz-feedback hidden";
            nextQuizBtn.style.display = "none";
            grammarSrsRatingContainer.classList.add("hidden");
            collapsibleRuleContent.innerHTML = "No active rule to display.";
            updateGrammarDueBadge();
            return;
        }

        if (currentReviewIndex >= currentReviewQueue.length) {
            currentReviewIndex = 0;
        }

        const q = currentReviewQueue[currentReviewIndex];
        activeReviewQuestion = q;
        collapsibleRuleContent.innerHTML = q.theory;

        const { shuffledOptions, correctIdx } = getShuffledQuestionOptions(q);

        quizProgressText.textContent = `Due Review ${currentReviewIndex + 1} of ${currentReviewQueue.length} (${q.heroId.toUpperCase()})`;
        quizQuestionText.textContent = q.text;
        quizOptionsContainer.innerHTML = "";
        quizFeedbackBox.className = "quiz-feedback hidden";
        nextQuizBtn.style.display = "none";
        grammarSrsRatingContainer.classList.add("hidden");

        shuffledOptions.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "quiz-opt-btn";
            btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
            btn.addEventListener("click", () => selectReviewQuizOption(idx, correctIdx, q.explanation));
            quizOptionsContainer.appendChild(btn);
        });
    }

    function selectReviewQuizOption(selectedIdx, correctIdx, explanation) {
        const buttons = quizOptionsContainer.querySelectorAll(".quiz-opt-btn");
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === correctIdx) btn.classList.add("correct");
            if (idx === selectedIdx && idx !== correctIdx) btn.classList.add("wrong");
        });

        if (selectedIdx === correctIdx) {
            quizFeedbackBox.style.background = "rgba(16, 185, 129, 0.15)";
            quizFeedbackBox.style.border = "1px solid var(--success)";
            quizFeedbackBox.innerHTML = `<strong>✅ Correct!</strong> ${explanation}`;
        } else {
            quizFeedbackBox.style.background = "rgba(239, 68, 68, 0.15)";
            quizFeedbackBox.style.border = "1px solid var(--danger)";
            quizFeedbackBox.innerHTML = `<strong>❌ Not quite.</strong> ${explanation}`;
        }

        quizFeedbackBox.classList.remove("hidden");
        grammarSrsRatingContainer.classList.remove("hidden");
    }

    // Attach SRS Rating Button Event Listeners
    document.querySelectorAll(".grammar-rate-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const rating = e.target.getAttribute("data-rating");
            if (!activeReviewQuestion) return;

            let cardXp = 0;
            if (rating === 'hard') cardXp = 2;
            else if (rating === 'good') cardXp = 4;
            else if (rating === 'easy') cardXp = 8;

            if (cardXp > 0) {
                addXP(cardXp);
                triggerRPGReward("quiz", activeReviewQuestion.heroId, activeReviewQuestion.heroId, cardXp);
            }

            grammarSrsEngine.rateQuestion(activeReviewQuestion.id, rating);
            updateGrammarDueBadge();

            currentReviewQueue = grammarSrsEngine.getDueQuestions();
            if (rating !== 'again') {
                currentReviewIndex++;
            }
            renderGrammarReviewQuestion();
        });
    });

    nextQuizBtn.addEventListener("click", () => {
        currentQuizIndex++;
        renderQuizQuestion();
    });

    // --- TAB 4: GEMINI LIVE REALTIME AUDIO STUDIO (VOICE PRACTICE WITH HEROES) ---
    const GEMINI_HERO_VOICES = {
        valerius: { voice: "Fenrir", label: "Fenrir (Knightly Male)" },
        astraea:  { voice: "Kore",   label: "Kore (Gentle Female)" },
        ignis:    { voice: "Puck",   label: "Puck (Archmage Male)" },
        frostina: { voice: "Kore",   label: "Kore (Sorceress Female)" },
        zephyr:   { voice: "Puck",   label: "Puck (Marksman Male)" },
        thorin:   { voice: "Fenrir", label: "Fenrir (Berserker Male)" },
        selene:   { voice: "Aoede",  label: "Aoede (Assassin Female)" },
        oberon:   { voice: "Charon", label: "Charon (Druid Male)" },
        freya:    { voice: "Aoede",  label: "Aoede (Valkyrie Female)" },
        eldrin:   { voice: "Charon", label: "Charon (Archmage Male)" }
    };

    let activeLiveHeroId = "valerius";
    let liveTimerInterval = null;
    let liveSessionSeconds = 0;
    let isLiveCallActive = false;
    let liveRecognition = null;

    const liveHeroPickerContainer = document.getElementById("live-hero-picker-container");
    const liveHeroVoiceNameTag = document.getElementById("live-hero-voice-name-tag");
    const liveHeroBannerTitle = document.getElementById("live-hero-banner-title");
    const liveHeroBannerVocab = document.getElementById("live-hero-banner-vocab");
    const startLiveVoiceBtn = document.getElementById("start-live-voice-btn");
    const stopLiveVoiceBtn = document.getElementById("stop-live-voice-btn");
    const liveSessionStatusBadge = document.getElementById("live-session-status-badge");
    const liveStatusDot = document.getElementById("live-status-dot");
    const liveStatusText = document.getElementById("live-status-text");
    const liveSessionTimer = document.getElementById("live-session-timer");
    const liveSoundWave = document.getElementById("live-sound-wave");
    const liveAudioSubtitle = document.getElementById("live-audio-subtitle");
    const liveTranscriptLog = document.getElementById("live-transcript-log");

    function renderLiveHeroPicker() {
        if (!liveHeroPickerContainer) return;
        liveHeroPickerContainer.innerHTML = "";

        const unlockedHeroes = rpgEngine.heroes.filter(h => h.unlocked);
        if (unlockedHeroes.length === 0) return;

        // Ensure activeLiveHeroId points to an unlocked hero
        if (!unlockedHeroes.find(h => h.id === activeLiveHeroId)) {
            activeLiveHeroId = unlockedHeroes[0].id;
        }

        const activeHero = unlockedHeroes.find(h => h.id === activeLiveHeroId) || unlockedHeroes[0];
        const voiceInfo = GEMINI_HERO_VOICES[activeHero.id] || { voice: "Fenrir", label: "Fenrir (Male)" };

        if (liveHeroVoiceNameTag) liveHeroVoiceNameTag.textContent = `Voice: ${voiceInfo.label}`;
        if (liveHeroBannerTitle) liveHeroBannerTitle.innerHTML = `${activeHero.image ? `<img src="${activeHero.image}" style="width:20px; height:20px; border-radius:50%; vertical-align:middle; margin-right:6px;">` : `<i class="fa-solid ${activeHero.avatar}"></i>`} ${activeHero.name} &bull; ${activeHero.title} (${activeHero.cefrLevel})`;

        if (liveHeroBannerVocab && activeHero.words) {
            liveHeroBannerVocab.innerHTML = "";
            activeHero.words.forEach(wObj => {
                const p = getWordProps(wObj);
                const currentUsage = getWordUsageCount(activeHero.id, p.word);

                let chipStyle = "background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:#cbd5e1;";
                if (currentUsage === 0) {
                    chipStyle = "background:rgba(245,158,11,0.15); border:1px solid #f59e0b; color:#fbbf24;";
                } else if (currentUsage === 1) {
                    chipStyle = "background:rgba(168,85,247,0.15); border:1px solid #a855f7; color:#c084fc;";
                } else if (currentUsage === 2) {
                    chipStyle = "background:rgba(59,130,246,0.15); border:1px solid #3b82f6; color:#60a5fa;";
                }

                const chip = document.createElement("span");
                chip.style.cssText = `padding:2px 8px; border-radius:10px; font-size:11px; display:inline-block; ${chipStyle}`;
                chip.title = `${p.word} — ${p.translation} (Today: ${currentUsage} uses)`;
                chip.textContent = `${p.word} (${p.translation})`;
                liveHeroBannerVocab.appendChild(chip);
            });
        }

        unlockedHeroes.forEach(hero => {
            const isSelected = hero.id === activeLiveHeroId;
            const chip = document.createElement("button");
            chip.className = `btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`;
            chip.style.padding = "4px 10px";
            chip.style.fontSize = "12px";
            chip.style.borderRadius = "14px";

            const iconHtml = (hero.faceImage || hero.image) 
                ? `<img src="${hero.faceImage || hero.image}" style="width:14px; height:14px; border-radius:50%; margin-right:4px; object-fit:cover;">` 
                : `<i class="fa-solid ${hero.avatar}"></i>`;

            chip.innerHTML = `${iconHtml} ${hero.name}`;
            chip.addEventListener("click", () => {
                activeLiveHeroId = hero.id;
                renderLiveHeroPicker();
            });

            liveHeroPickerContainer.appendChild(chip);
        });
    }

    function addLiveTranscriptMsg(sender, text) {
        if (!liveTranscriptLog) return;
        const msgDiv = document.createElement("div");
        msgDiv.style.margin = "4px 0";

        if (sender === "user") {
            msgDiv.innerHTML = `<strong style="color:#60a5fa;">You:</strong> ${text}`;
        } else if (sender === "system") {
            msgDiv.innerHTML = `<em style="color:#9ca3af;">${text}</em>`;
        } else {
            const activeHero = rpgEngine.heroes.find(h => h.id === activeLiveHeroId);
            const heroName = activeHero ? activeHero.name : "Hero";
            const msgId = "live_tr_" + Math.random().toString(36).slice(2, 8);

            msgDiv.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; width:100%;">
                    <div style="flex:1;">
                        <strong style="color:#f472b6;">${heroName}:</strong> ${text}
                        <div id="${msgId}_trans" class="hidden" style="font-size:11px; color:#cbd5e1; margin-top:4px; padding:4px 8px; background:rgba(255,255,255,0.06); border-radius:6px; border-left:3px solid var(--primary);"></div>
                    </div>
                    <button class="btn btn-sm btn-outline live-translate-btn" style="font-size:10px; padding:1px 6px; border-radius:4px; white-space:nowrap; flex-shrink:0;">
                        <i class="fa-solid fa-language"></i> 🇷🇺 Translate
                    </button>
                </div>
            `;

            const translateBtn = msgDiv.querySelector(".live-translate-btn");
            const transBox = msgDiv.querySelector(`#${msgId}_trans`);
            if (translateBtn && transBox) {
                translateBtn.addEventListener("click", async () => {
                    if (transBox.classList.contains("hidden")) {
                        if (!transBox.innerHTML) {
                            transBox.innerHTML = `<em><i class="fa-solid fa-spinner fa-spin"></i> Перевожу...</em>`;
                            transBox.classList.remove("hidden");
                            const ruText = await aiService.translateText(text);
                            transBox.innerHTML = `<strong>🇷🇺</strong> ${ruText}`;
                        } else {
                            transBox.classList.remove("hidden");
                        }
                    } else {
                        transBox.classList.add("hidden");
                    }
                });
            }
        }

        liveTranscriptLog.appendChild(msgDiv);
        liveTranscriptLog.scrollTop = liveTranscriptLog.scrollHeight;
    }

    let hasUserSpokenThisMinute = false;

    function startLiveTimer() {
        liveSessionSeconds = 0;
        hasUserSpokenThisMinute = false;
        clearInterval(liveTimerInterval);
        liveTimerInterval = setInterval(() => {
            liveSessionSeconds++;
            const mins = String(Math.floor(liveSessionSeconds / 60)).padStart(2, '0');
            const secs = String(liveSessionSeconds % 60).padStart(2, '0');

            const statusTag = hasUserSpokenThisMinute ? "🗣️ Active" : "🤐 Speak for XP!";
            if (liveSessionTimer) {
                liveSessionTimer.innerHTML = `${mins}:${secs} <small style="font-size:11px; opacity:0.8; font-weight:normal;">(+30 XP / min &bull; ${statusTag})</small>`;
            }

            // Award +30 XP ONLY if user actually spoke during this 60-second window!
            if (liveSessionSeconds > 0 && liveSessionSeconds % 60 === 0) {
                if (hasUserSpokenThisMinute) {
                    hasUserSpokenThisMinute = false; // Reset active flag for next minute
                    const activeHero = rpgEngine.heroes.find(h => h.id === activeLiveHeroId);
                    const heroName = activeHero ? activeHero.name : "Hero";
                    triggerRPGReward("live_voice", activeLiveHeroId, activeLiveHeroId, 30, `🎙️ +30 XP Live Voice Reward! (${heroName} Lvl Up!)`, "linear-gradient(135deg, #ec4899, #8b5cf6)");
                } else {
                    addLiveTranscriptMsg("system", "💡 Silence detected: Speak in English to earn your +30 XP for the minute!");
                }
            }
        }, 1000);
    }

    function stopLiveTimer() {
        clearInterval(liveTimerInterval);
        hasUserSpokenThisMinute = false;
    }

    let liveChatHistory = [];

    if (startLiveVoiceBtn && stopLiveVoiceBtn) {
        startLiveVoiceBtn.addEventListener("click", () => {
            const activeHero = rpgEngine.heroes.find(h => h.id === activeLiveHeroId);
            if (!activeHero) return;

            isLiveCallActive = true;
            hasUserSpokenThisMinute = false;
            liveChatHistory = []; // Reset conversation context for new call!
            startLiveVoiceBtn.classList.add("hidden");
            stopLiveVoiceBtn.classList.remove("hidden");

            if (liveStatusDot) liveStatusDot.style.background = "#10b981";
            if (liveStatusText) liveStatusText.textContent = `Connected Live with ${activeHero.name}`;
            if (liveSoundWave) liveSoundWave.classList.add("recording");
            if (liveAudioSubtitle) liveAudioSubtitle.textContent = `Listening... Speak in English to ${activeHero.name}! (+30 XP/min)`;

            startLiveTimer();
            addLiveTranscriptMsg("system", `Connected to Live Realtime Session with ${activeHero.name}!`);

            // Start continuous Web Speech recognition loop for interactive speech practice
            const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRec) {
                liveRecognition = new SpeechRec();
                liveRecognition.continuous = true;
                liveRecognition.interimResults = false;
                liveRecognition.lang = 'en-US';

                liveRecognition.onresult = async (event) => {
                    const lastResult = event.results[event.results.length - 1];
                    if (lastResult && lastResult.isFinal) {
                        const transcriptText = lastResult[0].transcript.trim();
                        if (transcriptText.length > 0) {
                            hasUserSpokenThisMinute = true; // Registered active user speech!
                            addLiveTranscriptMsg("user", transcriptText);

                            // Add user message to Live Chat History!
                            liveChatHistory.push({ role: 'user', content: transcriptText });
                            if (liveChatHistory.length > 10) liveChatHistory = liveChatHistory.slice(-8);

                            // Evaluate word XP for ALL unlocked heroes based on spoken transcript!
                            processAllUnlockedHeroesWordXP(transcriptText);

                            if (liveAudioSubtitle) liveAudioSubtitle.textContent = `${activeHero.name} is thinking...`;

                            // Fetch AI response in character for the active live hero with CONVERSATION HISTORY!
                            const heroScenario = {
                                title: activeHero.name,
                                heroId: activeHero.id,
                                isHeroScenario: true,
                                systemPrompt: `You are ${activeHero.name} (${activeHero.title}, ${activeHero.role}). CEFR Level: ${activeHero.cefrLevel}. Speak in clear, complete English. Actively use your target vocabulary words in conversation. Do NOT repeat greetings ("Hello", "I am Valerius") after the first message.`
                            };

                            const aiResp = await aiService.generateResponse(liveChatHistory, heroScenario, [activeHero]);
                            liveChatHistory.push({ role: 'assistant', content: aiResp.text });

                            addLiveTranscriptMsg("hero", aiResp.text);

                            // Speak response using voice engine
                            voiceService.speak(
                                aiResp.text,
                                () => { if (liveAudioSubtitle) liveAudioSubtitle.textContent = `${activeHero.name} is speaking...`; },
                                () => { if (liveAudioSubtitle) liveAudioSubtitle.textContent = `Listening... Speak to ${activeHero.name}! (+30 XP/min)`; },
                                getActiveHeroVoiceConfig(activeLiveHeroId)
                            );
                        }
                    }
                };

                liveRecognition.onerror = (e) => console.warn("Live speech error:", e);
                liveRecognition.onend = () => {
                    if (isLiveCallActive) {
                        try { liveRecognition.start(); } catch (err) {}
                    }
                };

                try { liveRecognition.start(); } catch (e) {}
            }
        });

        stopLiveVoiceBtn.addEventListener("click", () => {
            isLiveCallActive = false;
            stopLiveVoiceBtn.classList.add("hidden");
            startLiveVoiceBtn.classList.remove("hidden");

            if (liveStatusDot) liveStatusDot.style.background = "#9ca3af";
            if (liveStatusText) liveStatusText.textContent = "Session Ended";
            if (liveSoundWave) liveSoundWave.classList.remove("recording");
            if (liveAudioSubtitle) liveAudioSubtitle.textContent = "Click 'Start Gemini Live Realtime Call' to talk directly with your hero!";

            stopLiveTimer();
            if (liveRecognition) {
                try { liveRecognition.stop(); } catch (e) {}
            }
            voiceService.stop();

            // Display any pending Level Up modals now that the live audio call has cleanly ended!
            if (pendingLiveLevelUps.length > 0) {
                const deferredList = [...pendingLiveLevelUps];
                pendingLiveLevelUps = [];
                showHeroLevelUpModal(deferredList);
            }
        });
    }

    renderLiveHeroPicker();

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

    // --- HERO LIFETIME WORD STATS MODAL CONTROLLER 📊 ---
    function openHeroWordStatsModal(hero) {
        const modal = document.getElementById("hero-word-stats-modal");
        if (!modal || !hero) return;

        const titleEl = document.getElementById("word-stats-modal-title");
        const summaryEl = document.getElementById("word-stats-hero-summary");
        const listEl = document.getElementById("word-stats-list-container");

        if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-chart-pie"></i> ${hero.name}'s Lifetime Word Usage`;

        const totalHeroWordsUsed = getHeroTotalAllTimeWordsCount(hero.id, hero.words);

        if (summaryEl) {
            summaryEl.innerHTML = `
                <span><i class="fa-solid fa-book"></i> Vocabulary: <strong>${hero.words ? hero.words.length : 0} Words</strong></span>
                <span><i class="fa-solid fa-fire"></i> Lifetime Uses: <strong style="color:#fbbf24;">${totalHeroWordsUsed} times</strong></span>
            `;
        }

        if (listEl && hero.words) {
            listEl.innerHTML = "";
            
            const wordStatsList = hero.words.map(wObj => {
                const w = getWordProps(wObj);
                const stats = getWordAllTimeStats(hero.id, w.word, hero.words);
                return { ...w, count: stats.count, percentage: stats.percentage };
            });

            // Sort cold/rarely used words first (0-1 uses) so user can see what to practice!
            wordStatsList.sort((a, b) => a.count - b.count);

            const allDeckCards = Object.values(flashcardEngine.decks).flat();

            wordStatsList.forEach(item => {
                const card = document.createElement("div");
                card.style.cssText = "background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px 14px; display:flex; flex-direction:column; gap:6px;";
                
                const isCold = item.count <= 1;
                const badgeColor = isCold ? "rgba(59,130,246,0.15)" : "rgba(245,158,11,0.15)";
                const badgeBorder = isCold ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(245,158,11,0.4)";
                const textColor = isCold ? "#60a5fa" : "#fbbf24";
                const statusTag = isCold ? "❄️ Rarely Used / Cold" : "🔥 Active Word";

                const srsCard = allDeckCards.find(c => c.word && c.word.toLowerCase() === item.word.toLowerCase());
                const nextReviewTimerStr = srsCard ? formatTimeUntilReview(srsCard.nextReviewDate, srsCard.studied) : "✨ New Word";

                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button class="btn btn-sm btn-outline play-word-audio-btn" style="padding:4px 8px; font-size:12px; border-radius:6px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); color:#60a5fa; cursor:pointer;" title="Listen word pronunciation with ${hero.name}'s voice">
                                <i class="fa-solid fa-volume-high"></i>
                            </button>
                            <div>
                                <strong style="font-size:14px; color:var(--text-main);">${item.word}</strong>
                                <span class="font-mono" style="font-size:11px; color:var(--text-muted); margin-left:6px;">${item.phonetic || ''}</span>
                                <span style="font-size:12px; color:#cbd5e1; margin-left:10px;">— ${item.translation || ''}</span>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:6px;">
                            <span class="font-mono" style="font-size:10px; background:rgba(99,102,241,0.15); border:1px solid rgba(99,102,241,0.3); color:#a5b4fc; padding:2px 6px; border-radius:8px; font-weight:600;" title="SuperMemo SRS Review Schedule">
                                <i class="fa-solid fa-clock"></i> ${nextReviewTimerStr}
                            </span>
                            <div style="background:${badgeColor}; border:${badgeBorder}; color:${textColor}; padding:2px 8px; border-radius:10px; font-size:11px; font-weight:700;" class="font-mono">
                                ${item.count}x (${item.percentage}%)
                            </div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="flex:1; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                            <div style="height:100%; width:${Math.min(100, Math.max(item.percentage, item.count > 0 ? 5 : 0))}%; background:${isCold ? '#3b82f6' : '#f59e0b'}; border-radius:3px;"></div>
                        </div>
                        <span style="font-size:10px; color:${textColor}; font-weight:600;">${statusTag}</span>
                    </div>
                `;

                const audioBtn = card.querySelector(".play-word-audio-btn");
                if (audioBtn) {
                    audioBtn.addEventListener("click", () => {
                        audioBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
                        flashcardEngine.speak(
                            item.word,
                            () => { audioBtn.innerHTML = `<i class="fa-solid fa-wave-square fa-beat"></i>`; },
                            () => { audioBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`; },
                            hero.voiceConfig || null
                        );
                    });
                }

                listEl.appendChild(card);
            });
        }

        modal.classList.remove("hidden");
    }

    const closeWordStatsBtn = document.getElementById("close-word-stats-btn");
    const closeWordStatsModalBtn = document.getElementById("close-word-stats-modal-btn");

    if (closeWordStatsBtn) closeWordStatsBtn.addEventListener("click", () => document.getElementById("hero-word-stats-modal")?.classList.add("hidden"));
    if (closeWordStatsModalBtn) closeWordStatsModalBtn.addEventListener("click", () => document.getElementById("hero-word-stats-modal")?.classList.add("hidden"));

    function renderHeroesRoster() {
        if (!heroesGridContainer) return;
        heroesGridContainer.innerHTML = "";
        rpgEngine.heroes.forEach((hero, idx) => {
            const eff = rpgEngine.getHeroEffectiveStats(hero);
            const heroPower = rpgEngine.getHeroPower(hero);
            const card = document.createElement("div");
            card.className = `hero-card ${hero.unlocked ? '' : 'locked'}`;

            const reqQuests = (HERO_UNLOCK_QUEST_THRESHOLDS[idx] !== undefined) ? HERO_UNLOCK_QUEST_THRESHOLDS[idx] : 0;
            const totalQuests = getTotalCompletedDailyQuests();

            const unlockMsg = hero.unlocked 
                ? (hero.level >= 50 
                    ? `<span style="color:#ef4444; font-weight:700;"><i class="fa-solid fa-crown"></i> Max Level 50 Reached (XP Cap)</span>` 
                    : `<span style="color:var(--success); font-weight:600;"><i class="fa-solid fa-check"></i> Unlocked Hero</span>`) 
                : `<span style="color:var(--warning); font-size:11px; font-weight:700;"><i class="fa-solid fa-lock"></i> Requires ${reqQuests} Daily Quests (${totalQuests}/${reqQuests})</span>`;

            const avatarHtml = (hero.faceImage || hero.image) 
                ? `<img src="${hero.faceImage || hero.image}" alt="${hero.name}" style="width:100%; height:100%; object-fit:cover; object-position:top center; border-radius:50%;">` 
                : `<i class="fa-solid ${hero.avatar}"></i>`;

            card.innerHTML = `
                <div class="hero-header-row" style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div class="hero-avatar-box" style="background:${hero.color}; overflow:hidden;">
                            ${avatarHtml}
                        </div>
                        <div class="hero-title-group">
                            <h4>${hero.name} <small class="font-mono" style="color:var(--primary); font-weight:700;">Lvl ${hero.level} / 50</small></h4>
                            <div class="hero-cefr-tag">${hero.cefrLevel} (100 Words)</div>
                        </div>
                    </div>
                    <div class="hero-power-tag" style="background:rgba(245,158,11,0.18); border:1px solid rgba(245,158,11,0.4); color:#fbbf24; padding:3px 8px; border-radius:10px; font-weight:800; font-size:12px; display:inline-flex; align-items:center; gap:4px;" title="Hero Individual Power Rating">
                        <i class="fa-solid fa-khanda" style="font-size:11px;"></i> ${heroPower} PWR
                    </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                    <div class="hero-heart-badge" title="Heart Stat Bonus (+${eff.heartMultiplier}% to all stats)"><i class="fa-solid fa-heart"></i> ${hero.affinityLevel}/100 💕 (+${eff.heartMultiplier}%)</div>
                    ${hero.unlocked ? (hero.affinityLevel >= hero.level 
                        ? `<button class="btn btn-sm btn-outline affinity-btn" style="opacity:0.65;" data-heroid="${hero.id}"><i class="fa-solid fa-lock"></i> Lvl ${hero.affinityLevel + 1} Needed</button>`
                        : `<button class="btn btn-sm btn-outline affinity-btn" data-heroid="${hero.id}"><i class="fa-solid fa-heart"></i> Quest 💕</button>`) : ''}
                </div>

                ${hero.unlocked ? `
                <div style="display:flex; gap:8px; margin-top:8px;">
                    <button class="btn btn-sm btn-secondary train-words-btn" style="flex:1;"><i class="fa-solid fa-layer-group"></i> Train Words (${hero.words.length})</button>
                    <button class="btn btn-sm btn-secondary train-grammar-btn" style="flex:1;"><i class="fa-solid fa-graduation-cap"></i> Train Grammar</button>
                </div>
                <button class="btn btn-sm btn-outline word-stats-btn" style="width:100%; margin-top:6px; font-size:11px;"><i class="fa-solid fa-chart-pie"></i> Lifetime Word Stats (${hero.words ? hero.words.length : 0} Words)</button>
                ` : ''}

                <div class="hero-stats-list font-mono" style="margin-top:8px;">
                    <div>HP: <strong>${eff.hp}</strong></div>
                    <div>ATK: <strong>${eff.atk}</strong></div>
                    <div>DEF: <strong>${eff.def}</strong></div>
                    <div>Role: <strong>${hero.role}</strong></div>
                </div>

                <div style="margin-top:8px;">
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
                const affinityBtn = card.querySelector(".affinity-btn");
                if (affinityBtn) affinityBtn.addEventListener("click", () => openAffinityQuestModal(hero));

                const statsBtn = card.querySelector(".word-stats-btn");
                const trainWordsBtn = card.querySelector(".train-words-btn");
                if (trainWordsBtn) {
                    trainWordsBtn.addEventListener("click", () => {
                        const deckName = `${hero.name}'s Pack (${hero.cefrLevel.split(' ')[0]})`;
                        flashcardEngine.currentCategory = deckName;
                        flashcardEngine.batchIndex = 0;
                        flashcardEngine.currentIndex = 0;
                        if (flashcardEl) flashcardEl.classList.remove("flipped");
                        renderHeroShowcase(hero.id);
                        const modalWords = document.getElementById("modal-hero-words");
                        if (modalWords) modalWords.classList.remove("hidden");
                    });
                }
                const trainGrammarBtn = card.querySelector(".train-grammar-btn");
                if (trainGrammarBtn) {
                    trainGrammarBtn.addEventListener("click", () => {
                        renderHeroShowcase(hero.id);
                        const modalGrammar = document.getElementById("modal-hero-grammar");
                        if (modalGrammar) modalGrammar.classList.remove("hidden");
                    });
                }
            }

            heroesGridContainer.appendChild(card);
        });
    }

    function renderSquadPicker() {
        squadChipsContainer.innerHTML = "";
        squadCountText.textContent = `(${rpgEngine.selectedSquad.length}/5 Selected)`;

        rpgEngine.heroes.filter(h => h.unlocked).forEach(hero => {
            const isSelected = rpgEngine.selectedSquad.includes(hero.id);
            const heroPower = rpgEngine.getHeroPower(hero);
            const chip = document.createElement("div");
            chip.className = `squad-chip ${isSelected ? 'active' : ''}`;
            
            const avatarHtml = (hero.faceImage || hero.image) 
                ? `<img src="${hero.faceImage || hero.image}" style="width:20px; height:20px; border-radius:50%; margin-right:4px; object-fit:cover;">` 
                : `<i class="fa-solid ${hero.avatar}"></i>`;

            chip.innerHTML = `${avatarHtml} ${hero.name} <small style="color:#fbbf24; font-weight:700; margin-left:3px;">(⚡${heroPower})</small>`;
            
            chip.addEventListener("click", () => {
                rpgEngine.toggleSquadHero(hero.id);
                renderSquadPicker();
                renderRPGHeader();
            });

            squadChipsContainer.appendChild(chip);
        });
    }

    function openAffinityQuestModal(hero) {
        if (hero.affinityLevel >= hero.level) {
            alert(`🔒 Level Up Required!\n\n${hero.name} is currently Level ${hero.level}.\nStudy English to level up ${hero.name} to Level ${hero.affinityLevel + 1} to unlock the next Affinity Quest 💕!`);
            return;
        }

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

    if (closeAffinityModalBtn) closeAffinityModalBtn.addEventListener("click", () => affinityModal?.classList.add("hidden"));

    if (affinityAudioListenBtn) {
        affinityAudioListenBtn.addEventListener("click", () => {
            if (activeQuest) {
                const heroObj = rpgEngine.heroes.find(h => h.id === activeQuest.heroId);
                affinityAudioListenBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
                flashcardEngine.speak(
                    activeQuest.dialogueText,
                    () => { affinityAudioListenBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Speaking...`; },
                    () => { affinityAudioListenBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Listen Hero Voice`; },
                    heroObj?.voiceConfig || null
                );
            }
        });
    }

    if (submitAffinityQuestBtn) {
        submitAffinityQuestBtn.addEventListener("click", () => {
            if (!activeQuest) return;
            const answer = affinityAnswerInput.value.trim().toLowerCase();
            const target = activeQuest.targetWord.toLowerCase();

            if (answer.includes(target)) {
                const heroObj = rpgEngine.heroes.find(h => h.id === activeQuest.heroId);
                if (heroObj) heroObj.affinityLevel = Math.min(heroObj.level, heroObj.affinityLevel + 1);
                rpgEngine.save();
                alert(`🎉 Correct! You bonded with ${activeQuest.heroName}! Heart 💕 increased to Level ${heroObj.affinityLevel} (+${heroObj.affinityLevel * 2}% All Stats Bonus)!`);
                affinityModal?.classList.add("hidden");
                renderHeroesRoster();
                renderRPGHeader();
            } else {
                alert(`❌ Not quite! Target word was "${activeQuest.targetWord}". Example: ${activeQuest.hintExample}`);
            }
        });
    }

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

    if (startBattleBtn) {
        startBattleBtn.addEventListener("click", () => {
            if (!selectedStage || !selectedStage.unlocked) return;
            startBattleSimulation(selectedStage);
        });
    }

    function startBattleSimulation(stage) {
        if (rpgEngine.inBattle) return;
        rpgEngine.inBattle = true;
        if (startBattleBtn) startBattleBtn.disabled = true;

        const battleHeroes = rpgEngine.getSelectedHeroes().map(h => {
            const eff = rpgEngine.getHeroEffectiveStats(h);
            return { ...h, currentHp: eff.hp, maxHp: eff.hp, atk: eff.atk, def: eff.def, currentMp: 0, maxMp: 100 };
        });
        const battleMobs = stage.mobs.map(m => ({ ...m, currentHp: m.hp, maxHp: m.hp }));

        logBattle(`⚔️ Battle Started on Stage ${stage.id} with Squad Power: ${rpgEngine.getPartyPower()}!`);

        function renderArenaState() {
            if (battleHeroesSide) {
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
            }

            if (battleMobsSide) {
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
            }

            if (ultimatesBar) {
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
        }

        renderArenaState();

        rpgEngine.battleTimer = setInterval(() => {
            const aliveHeroes = battleHeroes.filter(h => h.currentHp > 0);
            const aliveMobs = battleMobs.filter(m => m.currentHp > 0);

            if (aliveMobs.length === 0) {
                clearInterval(rpgEngine.battleTimer);
                rpgEngine.inBattle = false;
                if (startBattleBtn) startBattleBtn.disabled = false;
                const unlockedHeroName = rpgEngine.completeStage(stage.id);
                let msg = `🎉 VICTORY! Stage ${stage.id} Cleared!`;
                if (unlockedHeroName) {
                    msg += ` 👑 NEW HERO UNLOCKED: ${unlockedHeroName}! (Packs & Quests Available!)`;
                    alert(`👑 CONGRATULATIONS!\n\nYou defeated the Boss of Stage ${stage.id}!\nNEW HERO UNLOCKED: ${unlockedHeroName}! 💕\n\nCheck the Hero Guild to train words & start Affinity Quests with ${unlockedHeroName}!`);
                }
                logBattle(msg);
                renderCampaignMap();
                renderHeroesRoster();
                renderSquadPicker();
                return;
            }

            if (aliveHeroes.length === 0) {
                clearInterval(rpgEngine.battleTimer);
                rpgEngine.inBattle = false;
                if (startBattleBtn) startBattleBtn.disabled = false;
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
        if (!battleLogBox) return;
        const line = document.createElement("div");
        line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        battleLogBox.appendChild(line);
        battleLogBox.scrollTop = battleLogBox.scrollHeight;
    }

    function addXP(amount) {
        xpPoints += amount;
        localStorage.setItem("english_pulse_xp", xpPoints);
        const statsXp = document.getElementById("stats-xp-count");
        if (statsXp) statsXp.textContent = xpPoints;
        const headerXp = document.getElementById("rpg-header-xp");
        if (headerXp) headerXp.textContent = xpPoints;
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

    const settingsForm = document.getElementById("settings-form");
    const aiProviderSelect = document.getElementById("ai-provider");
    const apiEndpointInput = document.getElementById("api-endpoint");
    const modelNameInput = document.getElementById("model-name");
    const geminiApiKeyInput = document.getElementById("gemini-api-key");
    const modelSelectDropdown = document.getElementById("model-select-dropdown");
    const autoDetectModelsBtn = document.getElementById("auto-detect-models-btn");
    const systemPromptInput = document.getElementById("system-prompt");
    const testConnectionBtn = document.getElementById("test-connection-btn");

    if (aiProviderSelect) aiProviderSelect.value = aiService.provider;
    if (apiEndpointInput) apiEndpointInput.value = aiService.endpoint;
    if (modelNameInput) modelNameInput.value = aiService.modelName;
    if (geminiApiKeyInput) geminiApiKeyInput.value = aiService.geminiApiKey || "";
    if (systemPromptInput) systemPromptInput.value = aiService.systemPrompt;

    if (autoDetectModelsBtn) {
        autoDetectModelsBtn.addEventListener("click", async () => {
            autoDetectModelsBtn.disabled = true;
            autoDetectModelsBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Detecting...`;

            if (aiProviderSelect) aiService.provider = aiProviderSelect.value;
            if (apiEndpointInput) aiService.endpoint = apiEndpointInput.value;

            const models = await aiService.fetchInstalledModels();
            autoDetectModelsBtn.disabled = false;
            autoDetectModelsBtn.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Auto-Detect Installed Models`;

            if (models && models.length > 0) {
                modelSelectDropdown.innerHTML = "";
                models.forEach(m => {
                    const opt = document.createElement("option");
                    opt.value = m;
                    opt.textContent = m;
                    if (m === aiService.modelName || m.includes(aiService.modelName)) opt.selected = true;
                    modelSelectDropdown.appendChild(opt);
                });

                modelSelectDropdown.classList.remove("hidden");
                modelNameInput.value = modelSelectDropdown.value;

                modelSelectDropdown.addEventListener("change", () => {
                    modelNameInput.value = modelSelectDropdown.value;
                });

                alert(`🟢 Detected ${models.length} model(s) installed in ${aiService.provider.toUpperCase()}:\n\n` + models.join("\n"));
            } else {
                alert(`⚠️ Could not auto-detect models at ${aiService.endpoint}.\n\nMake sure ${aiService.provider.toUpperCase()} is running in background/tray.`);
            }
        });
    }

    if (testConnectionBtn) {
        testConnectionBtn.addEventListener("click", async () => {
            testConnectionBtn.disabled = true;
            testConnectionBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Testing...`;

            if (aiProviderSelect) aiService.provider = aiProviderSelect.value;
            if (apiEndpointInput) aiService.endpoint = apiEndpointInput.value;
            if (modelNameInput) aiService.modelName = modelNameInput.value;

            const res = await aiService.testConnection();
            testConnectionBtn.disabled = false;
            testConnectionBtn.innerHTML = `<i class="fa-solid fa-plug"></i> Test Connection Now`;

            if (res.success) {
                alert(`✅ ${res.message}`);
                const statusDot = document.getElementById("ai-status-dot");
                const statusText = document.getElementById("ai-status-text");
                if (statusDot) statusDot.style.background = "var(--success)";
                if (statusText) statusText.textContent = `${aiService.provider.toUpperCase()}: ${aiService.modelName}`;
            } else {
                alert(`❌ Connection Failed:\n\n${res.message}`);
            }
        });
    }

    const ttsEngineSelect = document.getElementById("tts-engine-select");
    const ttsEndpointInput = document.getElementById("tts-endpoint-input");
    const sttEngineSelect = document.getElementById("stt-engine-select");
    const sttEndpointInput = document.getElementById("stt-endpoint-input");

    if (ttsEngineSelect) ttsEngineSelect.value = voiceService.ttsEngine;
    if (ttsEndpointInput) ttsEndpointInput.value = voiceService.ttsEndpoint;
    if (sttEngineSelect) sttEngineSelect.value = voiceService.sttEngine;
    if (sttEndpointInput) sttEndpointInput.value = voiceService.sttEndpoint;

    const voiceInputBtn = document.getElementById("voice-input-btn");
    const speechStatus = document.getElementById("speech-status");

    if (voiceInputBtn) {
        voiceInputBtn.addEventListener("click", () => {
            if (voiceService.isRecording) {
                voiceService.stopListening();
                voiceInputBtn.classList.remove("recording");
            } else {
                voiceService.startListening(
                    (transcript) => {
                        if (userChatInput) {
                            userChatInput.value = transcript;
                            usedMicInCurrentDraft = true;
                        }
                    },
                    (isListening, statusMsg) => {
                        if (isListening) {
                            voiceInputBtn.classList.add("recording");
                        } else {
                            voiceInputBtn.classList.remove("recording");
                        }
                        if (speechStatus) speechStatus.textContent = statusMsg;
                    },
                    (errorMsg) => {
                        voiceInputBtn.classList.remove("recording");
                        showToast(`⚠️ ${errorMsg}`, "rgba(239, 68, 68, 0.9)");
                    }
                );
            }
        });
    }

    if (settingsForm) {
        settingsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            aiService.saveSettings(
                aiProviderSelect.value,
                apiEndpointInput.value,
                modelNameInput.value,
                systemPromptInput.value,
                geminiApiKeyInput ? geminiApiKeyInput.value.trim() : ""
            );
            if (ttsEngineSelect && ttsEndpointInput && sttEngineSelect && sttEndpointInput) {
                voiceService.saveVoiceSettings(
                    ttsEngineSelect.value,
                    ttsEndpointInput.value,
                    sttEngineSelect.value,
                    sttEndpointInput.value
                );
            }
            alert("💾 Local AI & Voice Settings Saved Successfully!");
        });
    }

    try { renderScenarios(); } catch (e) {}
    try { selectScenario(SCENARIOS[0]); } catch (e) {}
    try { renderTutorHeroTargetChips(); } catch (e) {}
    try { renderSpeakingHeroTargetChips(); } catch (e) {}
    try { renderFlashcardsUI(); } catch (e) {}
    try { renderGrammarUI(); } catch (e) {}
    try { renderRPGHeader(); } catch (e) {}
    try { renderHeroShowcase(rpgEngine.heroes[0].id); } catch (e) { console.error("Hero Showcase Render Error:", e); }
});
