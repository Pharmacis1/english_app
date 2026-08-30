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
    let heroActionAnimationTimer = null;
    let isHeroActionPlaying = false;

    function getHeroStageTargetElements() {
        return [
            document.getElementById("hero-stage-art"),
            document.getElementById("hero-stage-video"),
            document.getElementById("hero-stage-action-video"),
            document.getElementById("hero-stage-chroma-canvas")
        ].filter(Boolean);
    }

    function playHeroActionAnimation(hero) {
        const idleVideo = document.getElementById("hero-stage-video");
        const actionVideo = document.getElementById("hero-stage-action-video");
        if (!hero || isHeroActionPlaying) return;

        const actionSrc = hero.videoActionAlpha || hero.videoAction;
        if (!actionSrc) return;

        if (!actionVideo) {
            if (idleVideo) {
                isHeroActionPlaying = true;
                idleVideo.loop = false;
                idleVideo.src = actionSrc;
                idleVideo.play().catch(e => {});
                idleVideo.onended = () => {
                    isHeroActionPlaying = false;
                    idleVideo.loop = true;
                    idleVideo.src = hero.videoIdleAlpha || hero.videoIdle;
                    idleVideo.play().catch(e => {});
                };
            }
            return;
        }

        isHeroActionPlaying = true;
        applyHeroStageTransform();

        actionVideo.src = actionSrc;
        actionVideo.currentTime = 0;

        let frameRevealed = false;
        const revealActionVideo = () => {
            if (frameRevealed) return;
            frameRevealed = true;
            actionVideo.classList.remove("hidden");
            actionVideo.style.display = "block";
            if (idleVideo) idleVideo.style.opacity = "0";
        };

        actionVideo.addEventListener("playing", revealActionVideo, { once: true });
        actionVideo.addEventListener("timeupdate", revealActionVideo, { once: true });

        actionVideo.play().then(() => {
            applyHeroStageTransform();
        }).catch(e => {
            isHeroActionPlaying = false;
            actionVideo.classList.add("hidden");
            actionVideo.style.display = "none";
            if (idleVideo) idleVideo.style.opacity = "1";
        });

        actionVideo.onended = () => {
            isHeroActionPlaying = false;
            actionVideo.classList.add("hidden");
            actionVideo.style.display = "none";
            if (idleVideo) {
                idleVideo.style.opacity = "1";
                idleVideo.play().catch(e => {});
            }
        };
    }

    function startPeriodicHeroActionAnimation(hero) {
        if (heroActionAnimationTimer) {
            clearInterval(heroActionAnimationTimer);
            heroActionAnimationTimer = null;
        }
        if (!hero || (!hero.videoAction && !hero.videoActionAlpha)) return;

        // Automatically trigger Thorin's hammer action animation once every ~50 seconds
        heroActionAnimationTimer = setInterval(() => {
            playHeroActionAnimation(hero);
        }, 50000);
    }

    // --- HERO STAGE CUSTOMIZATION & GIFTS SYSTEM ---
    function getHeroStageCustomization(heroId) {
        if (!heroId) return { bgId: "default", skinId: "default", heroTransform: { scale: 65, x: 0, y: 0 }, bgTransform: { scale: 100, x: 0, y: 0 } };
        try {
            const saved = localStorage.getItem(`english_pulse_stage_custom_${heroId}`);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (!parsed.heroTransform) parsed.heroTransform = { scale: 65, x: 0, y: 0 };
                if (!parsed.bgTransform) parsed.bgTransform = { scale: 100, x: 0, y: 0 };
                if (!parsed.bgId) parsed.bgId = "default";
                if (!parsed.skinId) parsed.skinId = "default";
                return parsed;
            }
        } catch (e) {}
        return { bgId: "default", skinId: "default", heroTransform: { scale: 65, x: 0, y: 0 }, bgTransform: { scale: 100, x: 0, y: 0 } };
    }

    function saveHeroStageCustomization(heroId, config) {
        if (!heroId) return;
        localStorage.setItem(`english_pulse_stage_custom_${heroId}`, JSON.stringify(config));
        applyHeroStageCustomization(heroId);
    }

    function getUnlockedStageGifts() {
        try {
            const list = JSON.parse(localStorage.getItem("english_pulse_unlocked_stage_gifts") || "[]");
            // Auto-unlock Selena's daily quest reward
            if (!list.includes("skin_anim_selena")) {
                list.push("skin_anim_selena");
                localStorage.setItem("english_pulse_unlocked_stage_gifts", JSON.stringify(list));
            }
            return list;
        } catch (e) {
            return ["skin_anim_selena"];
        }
    }

    function unlockStageGift(giftId) {
        const list = getUnlockedStageGifts();
        if (!list.includes(giftId)) {
            list.push(giftId);
            localStorage.setItem("english_pulse_unlocked_stage_gifts", JSON.stringify(list));
        }
    }

    function applyHeroStageCustomization(heroId) {
        if (!heroId) heroId = activeShowcaseHeroId;
        const hero = rpgEngine.heroes.find(h => h.id === heroId) || rpgEngine.heroes[0];
        const custom = getHeroStageCustomization(hero.id);

        const bgLayer = document.getElementById("hero-stage-bg-layer");
        const heroWrapper = document.getElementById("hero-image-wrapper");
        const stageArt = document.getElementById("hero-stage-art");
        const stageVideo = document.getElementById("hero-stage-video");
        const iconFallback = document.getElementById("hero-stage-icon-fallback");

        // 1. Apply Background & Transform
        if (bgLayer) {
            const bgVideo = document.getElementById("hero-stage-bg-video");
            if (custom.bgId && custom.bgId !== "default") {
                const bgItem = (window.STAGE_GIFTS_CATALOG || []).find(g => g.id === custom.bgId);
                if (bgItem && bgItem.video) {
                    bgLayer.style.backgroundImage = "none";
                    if (bgVideo) {
                        bgVideo.classList.remove("hidden");
                        bgVideo.style.display = "block";
                        if (!bgVideo.src.endsWith(bgItem.video)) {
                            bgVideo.src = bgItem.video;
                        }
                        bgVideo.play().catch(e => {});
                    }
                } else if (bgItem && bgItem.image) {
                    if (bgVideo) {
                        bgVideo.pause();
                        bgVideo.classList.add("hidden");
                        bgVideo.style.display = "none";
                    }
                    bgLayer.style.backgroundImage = `url('${bgItem.image}')`;
                } else {
                    if (bgVideo) {
                        bgVideo.pause();
                        bgVideo.classList.add("hidden");
                        bgVideo.style.display = "none";
                    }
                    bgLayer.style.backgroundImage = "url('images/castle_hall_bg.jpg')";
                }
            } else {
                if (bgVideo) {
                    bgVideo.pause();
                    bgVideo.classList.add("hidden");
                    bgVideo.style.display = "none";
                }
                bgLayer.style.backgroundImage = "url('images/castle_hall_bg.jpg')";
            }

            const bgT = custom.bgTransform || { scale: 100, x: 0, y: 0 };
            const bgScaleRatio = (bgT.scale || 100) / 100;
            bgLayer.style.transform = `translate(${bgT.x || 0}px, ${bgT.y || 0}px) scale(${bgScaleRatio})`;
        }

        // 2. Apply Custom Skin / Animation if selected
        if (custom.skinId && custom.skinId !== "default") {
            const skinItem = (window.STAGE_GIFTS_CATALOG || []).find(g => g.id === custom.skinId);
            if (skinItem) {
                if (skinItem.videoAlpha && stageVideo) {
                    if (heroActionAnimationTimer) {
                        clearInterval(heroActionAnimationTimer);
                        heroActionAnimationTimer = null;
                    }
                    stageVideo.loop = true;
                    stageVideo.onended = null;
                    stageVideo.src = skinItem.videoAlpha;
                    stageVideo.classList.remove("hidden");
                    stageVideo.style.display = "";
                    stageVideo.style.opacity = "1";
                    stageVideo.play().catch(e => {});
                    if (stageArt) stageArt.style.display = "none";
                    if (iconFallback) iconFallback.style.display = "none";
                } else if (skinItem.image && stageArt) {
                    if (stageVideo) {
                        stageVideo.pause();
                        stageVideo.classList.add("hidden");
                    }
                    stageArt.src = skinItem.image;
                    stageArt.style.display = "";
                    if (iconFallback) iconFallback.style.display = "none";
                }
            }
        }

        // 3. Apply Hero Figure Transform
        if (heroWrapper) {
            const hT = custom.heroTransform || { scale: 65, x: 0, y: 0 };
            const heroScaleRatio = (hT.scale || 65) / 100;
            heroWrapper.style.transform = `translate(${hT.x || 0}px, ${hT.y || 0}px) scale(${heroScaleRatio})`;
            
            const floorShadow = document.getElementById("hero-stage-floor-shadow");
            if (floorShadow) {
                floorShadow.style.transform = `scale(${heroScaleRatio * 1.1})`;
            }
        }
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
        const stageVideo = document.getElementById("hero-stage-video");
        const stageChromaCanvas = document.getElementById("hero-stage-chroma-canvas");
        const stageQuote = document.getElementById("hero-stage-quote");
        const iconFallback = document.getElementById("hero-stage-icon-fallback");
        const iconFa = document.getElementById("hero-stage-icon-fa");

        if (heroActionAnimationTimer) {
            clearInterval(heroActionAnimationTimer);
            heroActionAnimationTimer = null;
        }

        if (stageVideo) {
            stageVideo.pause();
            stageVideo.classList.add("hidden");
            stageVideo.style.display = "none";
        }

        if (hero.videoPlaylistAlpha || hero.videoPlaylist) {
            const playlist = hero.videoPlaylistAlpha || hero.videoPlaylist;
            const fallbackPlaylist = hero.videoPlaylist || hero.videoPlaylistAlpha;

            if (stageVideo) {
                stageVideo.classList.remove("hidden");
                stageVideo.style.display = "";
                stageVideo.style.opacity = "1";

                let currentPlaylistIdx = 0;
                const playNextTrack = () => {
                    if (currentPlaylistIdx >= playlist.length) currentPlaylistIdx = 0;
                    const src = playlist[currentPlaylistIdx] || fallbackPlaylist[currentPlaylistIdx];
                    if (!src) return;

                    stageVideo.loop = false;
                    stageVideo.src = src;
                    stageVideo.play().catch(e => {
                        if (fallbackPlaylist && fallbackPlaylist[currentPlaylistIdx]) {
                            stageVideo.src = fallbackPlaylist[currentPlaylistIdx];
                            stageVideo.play().catch(err => {});
                        }
                    });
                };

                stageVideo.onended = () => {
                    currentPlaylistIdx = (currentPlaylistIdx + 1) % playlist.length;
                    playNextTrack();
                };

                playNextTrack();
            }
        } else if (hero.videoIdleAlpha || hero.videoIdle || hero.videoAlpha || hero.video) {
            if (stageVideo) {
                stageVideo.loop = true;
                stageVideo.onended = null;
                stageVideo.src = hero.videoIdleAlpha || hero.videoAlpha || hero.videoIdle || hero.video;
                stageVideo.classList.remove("hidden");
                stageVideo.style.display = "";
                stageVideo.style.opacity = "1";
                stageVideo.play().catch(e => {});
            }
            if (stageArt) stageArt.style.display = "none";
            if (iconFallback) iconFallback.style.display = "none";
            startPeriodicHeroActionAnimation(hero);
        } else if (stageArt) {
            if (hero.image) {
                stageArt.src = hero.image;
                stageArt.style.display = "";
                if (iconFallback) iconFallback.style.display = "none";
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

        // 4.5 Apply Stage Customization (Background, Skin, Transforms)
        applyHeroStageCustomization(hero.id);

        // 5. Update header stats & Global A0 -> A1 Progress Bar (1000 Hero Levels = 100%)
        const squadPowerEl = document.getElementById("rpg-squad-power");
        if (squadPowerEl) squadPowerEl.textContent = rpgEngine.getPartyPower();
        const headerXpEl = document.getElementById("rpg-header-xp");
        if (headerXpEl) headerXpEl.textContent = xpPoints;

        updateGlobalA1SkillsProgress();
        checkAndUpdateDailyStreak();

        // Player total dictionary words count across unlocked heroes & decks
        const headerWordsEl = document.getElementById("rpg-header-words");
        if (headerWordsEl) {
            headerWordsEl.textContent = getPlayerTotalDictionaryWordsCount();
        }

        // 6. Highlight bottom carousel card
        renderBottomHeroCarousel();

        // 7. If Customizer panel is currently open, refresh galleries & sliders for the new hero
        const customizerModal = document.getElementById("stage-customizer-modal");
        if (customizerModal && !customizerModal.classList.contains("hidden")) {
            if (typeof syncActiveCustomizerHero === 'function') {
                syncActiveCustomizerHero(hero);
            }
        }

        // 8. Update floating story grimoire visibility on stage
        if (typeof updateFloatingGrimoireVisibility === 'function') {
            updateFloatingGrimoireVisibility();
        }
    }

    let cachedTotalDictionaryWords = null;
    function getPlayerTotalDictionaryWordsCount() {
        if (cachedTotalDictionaryWords !== null) return cachedTotalDictionaryWords;
        let totalWords = 0;
        if (typeof rpgEngine !== 'undefined' && rpgEngine.heroes) {
            rpgEngine.heroes.forEach(h => {
                if (h.unlocked && h.words) {
                    totalWords += h.words.length;
                }
            });
        }
        if (typeof flashcardEngine !== 'undefined' && flashcardEngine.decks) {
            const heroWordSet = new Set();
            if (rpgEngine && rpgEngine.heroes) {
                rpgEngine.heroes.forEach(h => {
                    if (h.words) {
                        h.words.forEach(w => {
                            const wordStr = typeof w === 'string' ? w : (Array.isArray(w) ? w[0] : (w.word || ""));
                            if (wordStr) heroWordSet.add(wordStr.toLowerCase());
                        });
                    }
                });
            }
            Object.values(flashcardEngine.decks).forEach(deck => {
                if (Array.isArray(deck)) {
                    deck.forEach(card => {
                        if (card && card.word && !heroWordSet.has(card.word.toLowerCase())) {
                            totalWords += 1;
                        }
                    });
                }
            });
        }
        cachedTotalDictionaryWords = totalWords || 100;
        return cachedTotalDictionaryWords;
    }

    function renderBottomHeroCarousel() {
        const track = document.getElementById("hero-carousel-track");
        if (!track) return;

        const totalCompletedQuests = getTotalCompletedDailyQuests();
        const existingChips = track.querySelectorAll(".hero-card-chip");

        // Lightning-fast DOM update if chips already exist!
        if (existingChips.length === rpgEngine.heroes.length) {
            rpgEngine.heroes.forEach((h, idx) => {
                const chip = existingChips[idx];
                const isActive = h.id === activeShowcaseHeroId;
                if (isActive) chip.classList.add("active");
                else chip.classList.remove("active");

                const lvlEl = chip.querySelector(".chip-lvl");
                if (lvlEl) {
                    const reqQuests = HERO_UNLOCK_QUEST_THRESHOLDS[idx] !== undefined ? HERO_UNLOCK_QUEST_THRESHOLDS[idx] : (idx * 8);
                    const remainingQuests = Math.max(0, reqQuests - totalCompletedQuests);
                    const statusLabel = h.unlocked ? `Lvl ${h.level || 1}` : `🔒 Ещё ${remainingQuests} кв.`;
                    lvlEl.textContent = statusLabel;
                }
            });
            return;
        }

        track.innerHTML = "";
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
    const btnStory = document.getElementById("btn-hero-story");
    const btnHeaderStory = document.getElementById("header-story-btn");

    if (btnWordStats) {
        btnWordStats.addEventListener("click", () => {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            openHeroWordStatsModal(hero);
        });
    }

    if (btnStory) {
        btnStory.addEventListener("click", () => {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            openHeroStoryModal(hero);
        });
    }

    if (btnHeaderStory) {
        btnHeaderStory.addEventListener("click", () => {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            openHeroStoryModal(hero);
        });
    }

    const floatingGrimoire = document.getElementById("floating-story-grimoire");
    if (floatingGrimoire) {
        floatingGrimoire.addEventListener("click", () => {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            openHeroStoryModal(hero);
        });
    }

    // --- STAGE CUSTOMIZER CONTROLLER ---
    function initStageCustomizerController() {
        const btnOpenModal = document.getElementById("btn-open-stage-customizer");
        const modalEl = document.getElementById("stage-customizer-modal");
        const btnCloseModal = document.getElementById("close-stage-customizer-btn");
        const btnSaveClose = document.getElementById("btn-save-stage-customizer");
        const btnResetAll = document.getElementById("btn-reset-all-stage-customs");

        const tabBtns = document.querySelectorAll(".stage-tab-btn");
        const tabContents = document.querySelectorAll(".stage-tab-content");

        // Sliders
        const sliderHeroScale = document.getElementById("slider-hero-scale");
        const valHeroScale = document.getElementById("val-hero-scale");
        const sliderHeroPosX = document.getElementById("slider-hero-pos-x");
        const valHeroPosX = document.getElementById("val-hero-pos-x");
        const sliderHeroPosY = document.getElementById("slider-hero-pos-y");
        const valHeroPosY = document.getElementById("val-hero-pos-y");

        const sliderBgScale = document.getElementById("slider-bg-scale");
        const valBgScale = document.getElementById("val-bg-scale");
        const sliderBgPosX = document.getElementById("slider-bg-pos-x");
        const valBgPosX = document.getElementById("val-bg-pos-x");
        const sliderBgPosY = document.getElementById("slider-bg-pos-y");
        const valBgPosY = document.getElementById("val-bg-pos-y");

        // Reset section buttons
        const btnResetHeroTransform = document.getElementById("btn-reset-hero-transform");
        const btnResetBgTransform = document.getElementById("btn-reset-bg-transform");
        const btnResetHeroBg = document.getElementById("btn-reset-hero-bg");
        const btnResetHeroSkin = document.getElementById("btn-reset-hero-skin");

        // Tab Switching
        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const targetTab = btn.getAttribute("data-tab");
                tabBtns.forEach(b => b.classList.remove("active"));
                tabContents.forEach(c => c.classList.remove("active"));
                btn.classList.add("active");
                const activeContent = document.getElementById(`stage-tab-${targetTab}`);
                if (activeContent) activeContent.classList.add("active");
            });
        });

        window.syncActiveCustomizerHero = function(hero) {
            const titleEl = document.getElementById("stage-customizer-hero-title");
            if (titleEl) titleEl.textContent = `Кастомизация Сцены: ${hero.name}`;
            renderBackgroundsGallery(hero);
            renderSkinsGallery(hero);
            syncTransformSliders(hero);
        };

        function openModal() {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            window.syncActiveCustomizerHero(hero);
            if (modalEl) modalEl.classList.remove("hidden");
        }

        function closeModal() {
            if (modalEl) modalEl.classList.add("hidden");
        }

        if (btnOpenModal) btnOpenModal.addEventListener("click", openModal);
        if (btnCloseModal) btnCloseModal.addEventListener("click", closeModal);
        if (btnSaveClose) {
            btnSaveClose.addEventListener("click", () => {
                closeModal();
                showToast("💾 Настройки сцены успешно сохранены!", "linear-gradient(135deg, #10b981, #059669)", "#10b981");
            });
        }
        if (modalEl) {
            modalEl.addEventListener("click", (e) => {
                if (e.target === modalEl) closeModal();
            });
        }

        function renderBackgroundsGallery(hero) {
            const grid = document.getElementById("stage-bg-gallery-grid");
            if (!grid) return;
            grid.innerHTML = "";

            const custom = getHeroStageCustomization(hero.id);
            const unlocked = getUnlockedStageGifts();

            // Default Background Card
            const defaultCard = document.createElement("div");
            defaultCard.className = `stage-gallery-card ${custom.bgId === 'default' ? 'active' : ''}`;
            defaultCard.innerHTML = `
                <img src="images/castle_hall_bg.jpg" alt="Default Background" class="stage-gallery-thumb">
                ${custom.bgId === 'default' ? '<div class="stage-badge-equipped">Выбрано</div>' : ''}
                <div class="stage-gallery-info">
                    <div class="stage-gallery-title">Зал Паладинов (По умолч.)</div>
                    <div class="stage-gallery-desc">Оригинальный фон сцены героя</div>
                </div>
            `;
            defaultCard.addEventListener("click", () => {
                custom.bgId = "default";
                saveHeroStageCustomization(hero.id, custom);
                renderBackgroundsGallery(hero);
            });
            grid.appendChild(defaultCard);

            // Catalog Backgrounds
            const backgrounds = (window.STAGE_GIFTS_CATALOG || []).filter(g => g.type === "background");
            backgrounds.forEach(bg => {
                const isUnlocked = unlocked.includes(bg.id);
                const isEquipped = custom.bgId === bg.id;

                const card = document.createElement("div");
                card.className = `stage-gallery-card ${isEquipped ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`;
                card.innerHTML = `
                    <img src="${bg.previewImage || bg.image}" alt="${bg.name}" class="stage-gallery-thumb">
                    ${isEquipped ? '<div class="stage-badge-equipped">Выбрано</div>' : ''}
                    ${!isUnlocked ? '<div class="stage-card-lock-overlay"><i class="fa-solid fa-lock"></i><span style="font-size:9px; font-weight:700;">КВЕСТ ДНЯ</span></div>' : ''}
                    <div class="stage-gallery-info">
                        <div class="stage-gallery-title">${bg.name}</div>
                        <div class="stage-gallery-desc">${isUnlocked ? bg.description : '🔒 Открывается за завершение квеста дня'}</div>
                    </div>
                `;

                if (isUnlocked) {
                    card.addEventListener("click", () => {
                        custom.bgId = bg.id;
                        saveHeroStageCustomization(hero.id, custom);
                        renderBackgroundsGallery(hero);
                    });
                } else {
                    card.title = "Этот фон можно открыть случайным образом за выполнение Квеста Дня любого героя!";
                }

                grid.appendChild(card);
            });
        }

        function renderSkinsGallery(hero) {
            const grid = document.getElementById("stage-skin-gallery-grid");
            if (!grid) return;
            grid.innerHTML = "";

            const custom = getHeroStageCustomization(hero.id);
            const unlocked = getUnlockedStageGifts();

            // Default Original Appearance Card
            const defaultCard = document.createElement("div");
            defaultCard.className = `stage-gallery-card ${custom.skinId === 'default' ? 'active' : ''}`;
            const defaultThumb = hero.image || (hero.avatar ? `images/${hero.id}_face.png` : 'images/valerius_face.png');
            defaultCard.innerHTML = `
                <img src="${defaultThumb}" alt="Default Skin" class="stage-gallery-thumb" style="object-position:top center;">
                ${custom.skinId === 'default' ? '<div class="stage-badge-equipped">Выбрано</div>' : ''}
                <div class="stage-gallery-info">
                    <div class="stage-gallery-title">Оригинальный образ</div>
                    <div class="stage-gallery-desc">Стандартный вид персонажа</div>
                </div>
            `;
            defaultCard.addEventListener("click", () => {
                custom.skinId = "default";
                saveHeroStageCustomization(hero.id, custom);
                renderHeroShowcase(hero.id);
                renderSkinsGallery(hero);
            });
            grid.appendChild(defaultCard);

            // Catalog Skins for this Hero
            const skins = (window.STAGE_GIFTS_CATALOG || []).filter(g => g.type === "skin" && g.heroId === hero.id);
            if (skins.length === 0) {
                const emptyNotice = document.createElement("div");
                emptyNotice.style.gridColumn = "1 / -1";
                emptyNotice.style.padding = "20px";
                emptyNotice.style.textAlign = "center";
                emptyNotice.style.color = "var(--text-muted)";
                emptyNotice.style.fontSize = "12px";
                emptyNotice.innerHTML = "✨ Для этого героя скоро появятся новые образы в подарках квестов дня!";
                grid.appendChild(emptyNotice);
                return;
            }

            skins.forEach(sk => {
                const isUnlocked = unlocked.includes(sk.id);
                const isEquipped = custom.skinId === sk.id;

                const card = document.createElement("div");
                card.className = `stage-gallery-card ${isEquipped ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`;
                card.innerHTML = `
                    <img src="${sk.previewImage || sk.image}" alt="${sk.name}" class="stage-gallery-thumb" style="object-position:top center;">
                    ${isEquipped ? '<div class="stage-badge-equipped">Выбрано</div>' : ''}
                    ${!isUnlocked ? '<div class="stage-card-lock-overlay"><i class="fa-solid fa-lock"></i><span style="font-size:9px; font-weight:700;">КВЕСТ ДНЯ</span></div>' : ''}
                    <div class="stage-gallery-info">
                        <div class="stage-gallery-title">${sk.name}</div>
                        <div class="stage-gallery-desc">${isUnlocked ? (sk.videoAlpha ? '🎬 Живая анимация' : '🖼️ Новый арт') : '🔒 Открывается за квест дня'}</div>
                    </div>
                `;

                if (isUnlocked) {
                    card.addEventListener("click", () => {
                        custom.skinId = sk.id;
                        saveHeroStageCustomization(hero.id, custom);
                        renderHeroShowcase(hero.id);
                        renderSkinsGallery(hero);
                    });
                } else {
                    card.title = "Этот образ можно открыть случайным образом за выполнение Квеста Дня любого героя!";
                }

                grid.appendChild(card);
            });
        }

        function syncTransformSliders(hero) {
            const custom = getHeroStageCustomization(hero.id);
            const hT = custom.heroTransform || { scale: 65, x: 0, y: 0 };
            const bT = custom.bgTransform || { scale: 100, x: 0, y: 0 };

            if (sliderHeroScale) { sliderHeroScale.value = hT.scale; if (valHeroScale) valHeroScale.textContent = `${hT.scale}%`; }
            if (sliderHeroPosX) { sliderHeroPosX.value = hT.x; if (valHeroPosX) valHeroPosX.textContent = `${hT.x}px`; }
            if (sliderHeroPosY) { sliderHeroPosY.value = hT.y; if (valHeroPosY) valHeroPosY.textContent = `${hT.y}px`; }

            if (sliderBgScale) { sliderBgScale.value = bT.scale; if (valBgScale) valBgScale.textContent = `${bT.scale}%`; }
            if (sliderBgPosX) { sliderBgPosX.value = bT.x; if (valBgPosX) valBgPosX.textContent = `${bT.x}px`; }
            if (sliderBgPosY) { sliderBgPosY.value = bT.y; if (valBgPosY) valBgPosY.textContent = `${bT.y}px`; }
        }

        function onHeroTransformSliderChange() {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            const custom = getHeroStageCustomization(hero.id);
            custom.heroTransform = {
                scale: parseInt(sliderHeroScale ? sliderHeroScale.value : 65, 10),
                x: parseInt(sliderHeroPosX ? sliderHeroPosX.value : 0, 10),
                y: parseInt(sliderHeroPosY ? sliderHeroPosY.value : 0, 10)
            };
            if (valHeroScale) valHeroScale.textContent = `${custom.heroTransform.scale}%`;
            if (valHeroPosX) valHeroPosX.textContent = `${custom.heroTransform.x}px`;
            if (valHeroPosY) valHeroPosY.textContent = `${custom.heroTransform.y}px`;
            saveHeroStageCustomization(hero.id, custom);
        }

        function onBgTransformSliderChange() {
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            const custom = getHeroStageCustomization(hero.id);
            custom.bgTransform = {
                scale: parseInt(sliderBgScale ? sliderBgScale.value : 100, 10),
                x: parseInt(sliderBgPosX ? sliderBgPosX.value : 0, 10),
                y: parseInt(sliderBgPosY ? sliderBgPosY.value : 0, 10)
            };
            if (valBgScale) valBgScale.textContent = `${custom.bgTransform.scale}%`;
            if (valBgPosX) valBgPosX.textContent = `${custom.bgTransform.x}px`;
            if (valBgPosY) valBgPosY.textContent = `${custom.bgTransform.y}px`;
            saveHeroStageCustomization(hero.id, custom);
        }

        if (sliderHeroScale) sliderHeroScale.addEventListener("input", onHeroTransformSliderChange);
        if (sliderHeroPosX) sliderHeroPosX.addEventListener("input", onHeroTransformSliderChange);
        if (sliderHeroPosY) sliderHeroPosY.addEventListener("input", onHeroTransformSliderChange);

        if (sliderBgScale) sliderBgScale.addEventListener("input", onBgTransformSliderChange);
        if (sliderBgPosX) sliderBgPosX.addEventListener("input", onBgTransformSliderChange);
        if (sliderBgPosY) sliderBgPosY.addEventListener("input", onBgTransformSliderChange);

        if (btnResetHeroTransform) {
            btnResetHeroTransform.addEventListener("click", () => {
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
                const custom = getHeroStageCustomization(hero.id);
                custom.heroTransform = { scale: 65, x: 0, y: 0 };
                saveHeroStageCustomization(hero.id, custom);
                syncTransformSliders(hero);
            });
        }

        if (btnResetBgTransform) {
            btnResetBgTransform.addEventListener("click", () => {
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
                const custom = getHeroStageCustomization(hero.id);
                custom.bgTransform = { scale: 100, x: 0, y: 0 };
                saveHeroStageCustomization(hero.id, custom);
                syncTransformSliders(hero);
            });
        }

        if (btnResetHeroBg) {
            btnResetHeroBg.addEventListener("click", () => {
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
                const custom = getHeroStageCustomization(hero.id);
                custom.bgId = "default";
                saveHeroStageCustomization(hero.id, custom);
                renderBackgroundsGallery(hero);
            });
        }

        if (btnResetHeroSkin) {
            btnResetHeroSkin.addEventListener("click", () => {
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
                const custom = getHeroStageCustomization(hero.id);
                custom.skinId = "default";
                saveHeroStageCustomization(hero.id, custom);
                renderHeroShowcase(hero.id);
                renderSkinsGallery(hero);
            });
        }

        if (btnResetAll) {
            btnResetAll.addEventListener("click", () => {
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
                localStorage.removeItem(`english_pulse_stage_custom_${hero.id}`);
                applyHeroStageCustomization(hero.id);
                renderHeroShowcase(hero.id);
                renderBackgroundsGallery(hero);
                renderSkinsGallery(hero);
                syncTransformSliders(hero);
                showToast("🔄 Все настройки сцены для этого героя сброшены!", "rgba(107,114,128,0.8)", "#9ca3af");
            });
        }

        // 1. Make Stage Customizer Panel Draggable by its Header
        const dragHeader = document.getElementById("stage-customizer-header");
        const customizerCard = modalEl ? modalEl.querySelector(".stage-customizer-card") : null;
        if (dragHeader && customizerCard) {
            let isPanelDragging = false;
            let startMouseX = 0, startMouseY = 0;
            let initialCardLeft = 0, initialCardTop = 0;

            dragHeader.addEventListener("mousedown", (e) => {
                if (e.target.closest("button") || e.target.closest("input")) return;
                isPanelDragging = true;
                dragHeader.style.cursor = "grabbing";
                startMouseX = e.clientX;
                startMouseY = e.clientY;
                const rect = customizerCard.getBoundingClientRect();
                initialCardLeft = rect.left;
                initialCardTop = rect.top;
                e.preventDefault();
            });

            window.addEventListener("mousemove", (e) => {
                if (!isPanelDragging) return;
                const dx = e.clientX - startMouseX;
                const dy = e.clientY - startMouseY;
                customizerCard.style.position = "fixed";
                customizerCard.style.left = `${Math.max(10, Math.min(window.innerWidth - customizerCard.offsetWidth - 10, initialCardLeft + dx))}px`;
                customizerCard.style.top = `${Math.max(10, Math.min(window.innerHeight - customizerCard.offsetHeight - 10, initialCardTop + dy))}px`;
                customizerCard.style.margin = "0";
            });

            window.addEventListener("mouseup", () => {
                if (isPanelDragging) {
                    isPanelDragging = false;
                    dragHeader.style.cursor = "grab";
                }
            });
        }

        // 2. Live Canvas Drag on Hero Figure
        const btnToggleCanvasDrag = document.getElementById("btn-toggle-hero-canvas-drag");
        const lblCanvasDrag = document.getElementById("lbl-hero-canvas-drag");
        let isHeroCanvasDragActive = false;

        if (btnToggleCanvasDrag) {
            btnToggleCanvasDrag.addEventListener("click", () => {
                isHeroCanvasDragActive = !isHeroCanvasDragActive;
                const heroTarget = document.getElementById("hero-image-wrapper");
                if (isHeroCanvasDragActive) {
                    btnToggleCanvasDrag.classList.add("btn-primary");
                    btnToggleCanvasDrag.classList.remove("btn-outline");
                    if (lblCanvasDrag) lblCanvasDrag.innerHTML = "✋ <b>Режим активен:</b> тяните героя мышкой по сцене";
                    if (heroTarget) heroTarget.style.cursor = "move";
                    showToast("✋ Зажмите мышь на герое и двигайте в нужное место на сцене!", "linear-gradient(135deg, #6366f1, #a855f7)", "#a855f7");
                } else {
                    btnToggleCanvasDrag.classList.remove("btn-primary");
                    btnToggleCanvasDrag.classList.add("btn-outline");
                    if (lblCanvasDrag) lblCanvasDrag.textContent = "✋ Передвигать героя мышкой по сцене";
                    if (heroTarget) heroTarget.style.cursor = "";
                }
            });
        }

        // Live Hero Stage Drag Listener
        const heroWrapper = document.getElementById("hero-image-wrapper");
        if (heroWrapper) {
            let isDraggingHero = false;
            let dragHeroStartX = 0, dragHeroStartY = 0;
            let initialHeroX = 0, initialHeroY = 0;

            function startHeroDrag(e) {
                if (!isHeroCanvasDragActive) return;
                isDraggingHero = true;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                dragHeroStartX = clientX;
                dragHeroStartY = clientY;
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
                const custom = getHeroStageCustomization(hero.id);
                initialHeroX = custom.heroTransform ? (custom.heroTransform.x || 0) : 0;
                initialHeroY = custom.heroTransform ? (custom.heroTransform.y || 0) : 0;
                e.preventDefault();
            }

            function doHeroDrag(e) {
                if (!isDraggingHero) return;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                const dx = clientX - dragHeroStartX;
                const dy = clientY - dragHeroStartY;
                const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
                const custom = getHeroStageCustomization(hero.id);
                if (!custom.heroTransform) custom.heroTransform = { scale: 65, x: 0, y: 0 };
                custom.heroTransform.x = Math.max(-250, Math.min(250, Math.round(initialHeroX + dx)));
                custom.heroTransform.y = Math.max(-200, Math.min(200, Math.round(initialHeroY + dy)));
                saveHeroStageCustomization(hero.id, custom);
                syncTransformSliders(hero);
            }

            function stopHeroDrag() {
                if (isDraggingHero) {
                    isDraggingHero = false;
                }
            }

            heroWrapper.addEventListener("mousedown", startHeroDrag);
            heroWrapper.addEventListener("touchstart", startHeroDrag, { passive: false });
            window.addEventListener("mousemove", doHeroDrag);
            window.addEventListener("touchmove", doHeroDrag, { passive: false });
            window.addEventListener("mouseup", stopHeroDrag);
            window.addEventListener("touchend", stopHeroDrag);
        }
    }

    initStageCustomizerController();

    // --- DAILY QUEST PRIZE UNLOCK CELEBRATION ---
    function openPrizeCelebrationModal(prizeItem, hero) {
        const modalEl = document.getElementById("stage-prize-modal");
        const typeBadge = document.getElementById("prize-type-badge");
        const imgEl = document.getElementById("prize-preview-img");
        const titleEl = document.getElementById("prize-title");
        const descEl = document.getElementById("prize-desc");
        const btnClaimClose = document.getElementById("btn-claim-prize-close");
        const btnEquipNow = document.getElementById("btn-equip-prize-now");

        if (typeBadge) {
            typeBadge.textContent = prizeItem.type === 'background' ? '🖼️ НОВЫЙ ФОН СЦЕНЫ' : `👤 НОВЫЙ ОБРАЗ: ${prizeItem.category}`;
        }
        if (imgEl) imgEl.src = prizeItem.previewImage || prizeItem.image;
        if (titleEl) titleEl.textContent = prizeItem.name;
        if (descEl) descEl.textContent = prizeItem.description;

        if (btnClaimClose) {
            btnClaimClose.onclick = () => {
                if (modalEl) modalEl.classList.add("hidden");
            };
        }

        if (btnEquipNow) {
            btnEquipNow.onclick = () => {
                if (modalEl) modalEl.classList.add("hidden");
                const targetHero = (prizeItem.type === 'skin' && prizeItem.heroId) 
                    ? (rpgEngine.heroes.find(h => h.id === prizeItem.heroId) || hero)
                    : hero;
                
                const custom = getHeroStageCustomization(targetHero.id);
                if (prizeItem.type === 'background') {
                    custom.bgId = prizeItem.id;
                } else if (prizeItem.type === 'skin') {
                    custom.skinId = prizeItem.id;
                }
                saveHeroStageCustomization(targetHero.id, custom);
                renderHeroShowcase(targetHero.id);
                showToast(`✨ <b>${prizeItem.name}</b> успешно применён!`, "linear-gradient(135deg, #f59e0b, #ec4899)", "#fbbf24");
            };
        }

        if (modalEl) modalEl.classList.remove("hidden");
    }

    function triggerDailyQuestGiftUnlock(hero) {
        if (!hero) hero = rpgEngine.heroes[0];
        const unlockedList = getUnlockedStageGifts();
        const lockedGifts = (window.STAGE_GIFTS_CATALOG || []).filter(g => !unlockedList.includes(g.id));

        if (lockedGifts.length > 0) {
            const randomPrize = lockedGifts[Math.floor(Math.random() * lockedGifts.length)];
            unlockStageGift(randomPrize.id);
            openPrizeCelebrationModal(randomPrize, hero);
        }
    }

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
            const hero = rpgEngine.heroes.find(h => h.id === activeShowcaseHeroId) || rpgEngine.heroes[0];
            if (hero) {
                const cefrLabel = hero.cefrLevel.split(' ')[0];
                const deckName = `${hero.name}'s Pack (${cefrLabel})`;
                flashcardEngine.currentCategory = deckName;
                flashcardEngine.batchIndex = 0;
                flashcardEngine.currentIndex = 0;
            }
            renderFlashcardsUI();
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
        updateHeroDailyBonusTracker();
        
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
    const inMemoryAudioStates = new Map();

    function getTodayHeroAudioState(heroId) {
        if (!heroId) return { micCount: 0, typedCount: 0, listenedMsgs: [], repeatedMsgs: [], comboMsgs: [], questClaimed: false };
        const d = new Date();
        const dateKey = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        const storageKey = `english_pulse_audio_rewards_${dateKey}_${heroId}`;
        if (inMemoryAudioStates.has(storageKey)) {
            return inMemoryAudioStates.get(storageKey);
        }
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.questClaimed === undefined) parsed.questClaimed = false;
                inMemoryAudioStates.set(storageKey, parsed);
                return parsed;
            }
        } catch(e) {}
        const defaultState = { micCount: 0, typedCount: 0, listenedMsgs: [], repeatedMsgs: [], comboMsgs: [], questClaimed: false };
        inMemoryAudioStates.set(storageKey, defaultState);
        return defaultState;
    }

    function saveTodayHeroAudioState(heroId, state) {
        if (!heroId) return;
        const d = new Date();
        const dateKey = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        const storageKey = `english_pulse_audio_rewards_${dateKey}_${heroId}`;
        inMemoryAudioStates.set(storageKey, state);
        try {
            localStorage.setItem(storageKey, JSON.stringify(state));
        } catch (e) {}
    }

    function updateHeroDailyBonusTracker() {
        const activeHeroId = (activeScenario && activeScenario.heroId) 
            ? activeScenario.heroId 
            : (activeShowcaseHeroId || (rpgEngine.heroes[0] && rpgEngine.heroes[0].id));
        
        const trackerBar = document.getElementById("hero-daily-bonus-tracker");
        if (!trackerBar) return;

        if (!activeHeroId) {
            trackerBar.style.display = "none";
            return;
        }
        trackerBar.style.display = "flex";

        const hero = rpgEngine.heroes.find(h => h.id === activeHeroId);
        const state = getTodayHeroAudioState(activeHeroId);

        const textXpNext = state.typedCount < 10 ? "+60" : (state.typedCount < 30 ? "+40" : "+10");
        const listenCount = state.listenedMsgs ? state.listenedMsgs.length : 0;
        const repeatCount = state.repeatedMsgs ? state.repeatedMsgs.length : 0;

        const heroNameEl = document.getElementById("tracker-hero-name");
        const textCountEl = document.getElementById("tracker-text-count");
        const listenCountEl = document.getElementById("tracker-listen-count");
        const repeatCountEl = document.getElementById("tracker-repeat-count");

        let wordsUsedCount = 0;
        let wordsTotalCount = 0;
        if (hero && hero.words) {
            const dailyFocus = getHeroAntiRatingFocusWords(hero, 20);
            wordsTotalCount = dailyFocus.length;
            wordsUsedCount = dailyFocus.filter(wObj => getWordUsageCount(hero.id, getWordProps(wObj).word) >= 1).length;
        }
        const allHeroWordsUsed = wordsTotalCount > 0 && wordsUsedCount >= Math.min(20, wordsTotalCount);

        const taskTextDone = state.typedCount >= 10;
        const taskListenDone = listenCount >= 10;
        const taskRepeatDone = repeatCount >= 10;
        const taskWordsDone = allHeroWordsUsed;

        const completedTasksCount = 
            (taskTextDone ? 1 : 0) + 
            (taskListenDone ? 1 : 0) + 
            (taskRepeatDone ? 1 : 0) + 
            (taskWordsDone ? 1 : 0);

        const maxLvlCap = (typeof HERO_MAX_LEVEL !== 'undefined') ? HERO_MAX_LEVEL : 100;
        if (heroNameEl) {
            if (hero && hero.level >= maxLvlCap) {
                heroNameEl.innerHTML = `🛡️ Active Hero: <strong>${hero.name}</strong> <span style="color:#ef4444; font-weight:800;">[MAX LEVEL ${maxLvlCap}]</span>`;
            } else {
                heroNameEl.innerHTML = `🛡️ Active Hero: <strong>${hero ? hero.name : activeHeroId}</strong>`;
            }
        }

        if (textCountEl) textCountEl.innerHTML = `⌨️ Text: <strong>${state.typedCount}/10</strong> (${textXpNext} XP)`;
        if (listenCountEl) listenCountEl.innerHTML = `🔊 Listen: <strong>${listenCount}/10</strong> (+40 XP)`;
        if (repeatCountEl) repeatCountEl.innerHTML = `🎯 Repeat: <strong>${repeatCount}/10</strong> (+40 XP)`;

        let questTagEl = document.getElementById("tracker-daily-quest-tag");
        if (!questTagEl) {
            questTagEl = document.createElement("span");
            questTagEl.id = "tracker-daily-quest-tag";
            const trackerRight = trackerBar.querySelector("div");
            if (trackerRight) trackerRight.appendChild(questTagEl);
        }

        if (hero && hero.level >= maxLvlCap) {
            questTagEl.innerHTML = `🏆 Daily Quest: <strong style="color:#ef4444;">Max Level ${maxLvlCap} Reached (No Quest) 🔒</strong>`;
            questTagEl.style.cursor = "default";
            questTagEl.title = `Hero ${hero.name} has reached Max Level ${maxLvlCap}! Daily quests and XP bonuses are disabled for max-level heroes.`;
            return;
        }

        if (state.questClaimed) {
            questTagEl.innerHTML = `🏆 Daily Quest: <strong style="color:#34d399;">Claimed (+1000 XP) ✅</strong>`;
            questTagEl.title = `Daily Hero Quest (+1000 XP Completed!): All 4 tasks completed today!`;
        } else {
            const colorStr = completedTasksCount === 4 ? "#fbbf24" : (completedTasksCount >= 2 ? "#60a5fa" : "#c084fc");
            questTagEl.innerHTML = `🏆 Quest: <strong style="color:${colorStr};">${completedTasksCount}/4 Tasks</strong> (+1000 XP)`;
            questTagEl.style.cursor = "pointer";
            questTagEl.title = `Daily Hero Quest Bonus (+1000 XP):\n` +
                `${taskTextDone ? '✅' : '❌'} 10 Text Messages (${state.typedCount}/10)\n` +
                `${taskListenDone ? '✅' : '❌'} 10 Message Listens (${listenCount}/10)\n` +
                `${taskRepeatDone ? '✅' : '❌'} 10 Message Repeats (${repeatCount}/10)\n` +
                `${taskWordsDone ? '✅' : '❌'} 20 Focus Words Used (${wordsUsedCount}/${wordsTotalCount})`;
        }

        if (completedTasksCount === 4 && !state.questClaimed && hero && hero.level < maxLvlCap) {
            state.questClaimed = true;
            saveTodayHeroAudioState(activeHeroId, state);

            let totalQuests = getTotalCompletedDailyQuests();
            totalQuests += 1;
            localStorage.setItem("total_completed_daily_quests", totalQuests);

            addXP(1000);
            triggerRPGReward("daily_quest", activeHeroId, activeHeroId, 1000);

            const newlyUnlocked = checkAndUpdateHeroUnlocks(rpgEngine);
            let unlockToastMsg = "";
            if (newlyUnlocked && newlyUnlocked.length > 0) {
                unlockToastMsg = `<br>🔓 <b>NEW HERO UNLOCKED: ${newlyUnlocked.join(", ")}!</b>`;
            }

            showToast(`🏆 <b>HERO DAILY QUEST COMPLETED!</b> +1000 XP Awarded!${unlockToastMsg}`, "linear-gradient(135deg, #f59e0b, #ec4899)", "#fbbf24");
            
            renderHeroShowcase();
            renderBottomHeroCarousel();
            checkAndUpdateDailyStreak();
            triggerDailyQuestGiftUnlock(hero);
        }

        try { 
            updateWritingUI(); 
            updateListeningUI(); 
        } catch(e) {}
    }

    // --- NEW STREAMLINED STREAK ENGINE (УДАРНЫЙ РЕЖИМ) ---
    // Condition:
    // 1. 1 message to any non-100 lvl hero (text or voice)
    // 2. 3 focus words of any non-100 lvl hero used today
    // 3. Listen to AND repeat a message of any non-100 lvl hero
    function getDailyStreakProgress() {
        const maxLvlCap = (typeof HERO_MAX_LEVEL !== 'undefined') ? HERO_MAX_LEVEL : 100;
        const nonMaxHeroes = (rpgEngine && rpgEngine.heroes) 
            ? rpgEngine.heroes.filter(h => (h.level || 1) < maxLvlCap)
            : [];

        let totalMsgsSent = 0;
        let totalListened = 0;
        let totalRepeated = 0;
        let totalFocusWordsUsed = 0;

        nonMaxHeroes.forEach(h => {
            const st = getTodayHeroAudioState(h.id);
            totalMsgsSent += (st.micCount || 0) + (st.typedCount || 0);
            totalListened += (st.listenedMsgs ? st.listenedMsgs.length : 0);
            totalRepeated += (st.repeatedMsgs ? st.repeatedMsgs.length : 0);

            if (h.words) {
                const focus = getHeroAntiRatingFocusWords(h, 20);
                const used = focus.filter(wObj => getWordUsageCount(h.id, getWordProps(wObj).word) >= 1).length;
                totalFocusWordsUsed += used;
            }
        });

        const isMsgDone = totalMsgsSent >= 1;
        const isWordsDone = totalFocusWordsUsed >= 3;
        const isListenRepeatDone = totalListened >= 1 && totalRepeated >= 1;
        const isCompleted = isMsgDone && isWordsDone && isListenRepeatDone;

        return {
            totalMsgsSent,
            totalFocusWordsUsed,
            totalListened,
            totalRepeated,
            isMsgDone,
            isWordsDone,
            isListenRepeatDone,
            isCompleted
        };
    }

    function checkAndUpdateDailyStreak() {
        const progress = getDailyStreakProgress();
        const todayStr = new Date().toISOString().split('T')[0];
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterdayStr = yesterdayDate.toISOString().split('T')[0];

        const lastStreakDate = localStorage.getItem("english_pulse_last_streak_date") || localStorage.getItem("english_pulse_last_quest_date");
        let currentStreak = parseInt(localStorage.getItem("english_pulse_streak") || "0", 10);
        let freezeCount = parseInt(localStorage.getItem("english_pulse_freeze_count") || "1", 10);
        let usedFreezeThisTime = false;

        // Check if user missed days without freeze
        if (lastStreakDate && lastStreakDate !== todayStr && lastStreakDate !== yesterdayStr && currentStreak > 0) {
            const lastDateObj = new Date(lastStreakDate);
            const todayDateObj = new Date(todayStr);
            const diffDays = Math.floor((todayDateObj - lastDateObj) / (1000 * 60 * 60 * 24));
            if (diffDays > 1) {
                if (freezeCount > 0) {
                    freezeCount -= 1;
                    localStorage.setItem("english_pulse_freeze_count", freezeCount);
                    usedFreezeThisTime = true;
                } else {
                    currentStreak = 0;
                    localStorage.setItem("english_pulse_streak", 0);
                }
            }
        }

        if (progress.isCompleted && lastStreakDate !== todayStr) {
            if (lastStreakDate === yesterdayStr || !lastStreakDate || currentStreak === 0) {
                currentStreak += 1;
            } else if (freezeCount > 0) {
                freezeCount -= 1;
                currentStreak += 1;
                usedFreezeThisTime = true;
                localStorage.setItem("english_pulse_freeze_count", freezeCount);
            } else {
                currentStreak = 1;
            }
            localStorage.setItem("english_pulse_last_streak_date", todayStr);
            localStorage.setItem("english_pulse_last_quest_date", todayStr);
            localStorage.setItem("english_pulse_streak", currentStreak);

            const freezeNotice = usedFreezeThisTime ? `<br>❄️ <b>ЗАМОРОЗКА СЕРИИ СПАСЛА ОГОНЕК!</b> Пропущенный день заморожен!` : "";
            showToast(`🔥 <b>УДАРНЫЙ РЕЖИМ ПРОДЛЕН (${currentStreak} дн.)!</b><br>🎯 <b>Все 3 условия дня выполнены!</b>${freezeNotice}`, "linear-gradient(135deg, #f59e0b, #ec4899)", "#fbbf24");
        }

        const headerStreakEl = document.getElementById("rpg-header-streak");
        if (headerStreakEl) headerStreakEl.textContent = currentStreak;

        const streakPill = document.getElementById("rpg-header-streak-pill");
        if (streakPill) {
            const isDoneToday = (lastStreakDate === todayStr || progress.isCompleted);
            streakPill.style.border = isDoneToday ? "1px solid #fbbf24" : "1px solid rgba(255,255,255,0.15)";
            streakPill.title = `Ударный режим (Streak 🔥: ${currentStreak} дн.):\n` +
                `${progress.isMsgDone ? '✅' : '❌'} 1 сообщение герою <100 lvl (${progress.totalMsgsSent}/1)\n` +
                `${progress.isWordsDone ? '✅' : '❌'} 3 фокусных слова (${progress.totalFocusWordsUsed}/3)\n` +
                `${progress.isListenRepeatDone ? '✅' : '❌'} 1 прослушивание и повторение (🎧 ${progress.totalListened}/1, 🗣️ ${progress.totalRepeated}/1)`;
        }
    }

    // --- WRITING SKILL ENGINE (LEVEL 1 -> 100, 50,000 TOTAL WORDS) ---
    function generateWritingThresholds() {
        const thresholds = [0];
        for (let lvl = 2; lvl <= 100; lvl++) {
            const thresh = Math.round(50000 * Math.pow((lvl - 1) / 99.0, 1.4));
            thresholds.push(thresh);
        }
        thresholds[99] = 50000;
        return thresholds;
    }

    const WRITING_THRESHOLDS = generateWritingThresholds();

    function getWritingStats() {
        const totalWords = parseInt(localStorage.getItem("english_pulse_writing_words") || "0", 10);
        let level = 1;
        for (let i = 0; i < WRITING_THRESHOLDS.length; i++) {
            if (totalWords >= WRITING_THRESHOLDS[i]) {
                level = i + 1;
            } else {
                break;
            }
        }
        level = Math.min(100, Math.max(1, level));

        const currentLevelThreshold = WRITING_THRESHOLDS[level - 1] || 0;
        const nextLevelThreshold = level < 100 ? (WRITING_THRESHOLDS[level] || 50000) : 50000;
        const wordsInCurrentLevel = totalWords - currentLevelThreshold;
        const wordsNeededForNextLevel = nextLevelThreshold - currentLevelThreshold;
        const progressPercent = level >= 100 ? 100 : Math.min(100, Math.max(0, (wordsInCurrentLevel / wordsNeededForNextLevel) * 100));

        return {
            totalWords,
            level,
            currentLevelThreshold,
            nextLevelThreshold,
            wordsInCurrentLevel,
            wordsNeededForNextLevel,
            progressPercent: parseFloat(progressPercent.toFixed(1))
        };
    }

    function addWritingWords(wordsGained) {
        if (wordsGained <= 0) return;
        const prevStats = getWritingStats();
        if (prevStats.level >= 100) return;

        const newTotal = Math.min(50000, prevStats.totalWords + wordsGained);
        localStorage.setItem("english_pulse_writing_words", newTotal);
        const newStats = getWritingStats();

        updateWritingUI();

        if (newStats.level > prevStats.level) {
            showToast(`✍️ <b>WRITING LEVEL UP!</b> Level <b>${newStats.level}</b> reached! (${newTotal.toLocaleString()} / 50,000 words)`, "linear-gradient(135deg, #6366f1, #a855f7)", "#818cf8");
        }
    }

    function updateWritingUI() {
        const stats = getWritingStats();
        const headerLvlEl = document.getElementById("rpg-header-writing-lvl");
        const headerPillEl = document.getElementById("rpg-header-writing-pill");
        if (headerLvlEl) {
            headerLvlEl.textContent = `Lv. ${stats.level}`;
        }
        if (headerPillEl) {
            headerPillEl.title = `Навык письма (Writing Level ${stats.level}/100):\n` +
                `Слов набрано: ${stats.totalWords.toLocaleString()} / 50 000\n` +
                (stats.level < 100 ? `До уровня ${stats.level + 1}: ${stats.wordsInCurrentLevel}/${stats.wordsNeededForNextLevel} слов (${stats.progressPercent}%)` : `МАКСИМАЛЬНЫЙ УРОВЕНЬ 100 ДОСТИГНУТ! 🏆`);
        }

        const trackerWritingEl = document.getElementById("tracker-writing-tag");
        if (trackerWritingEl) {
            trackerWritingEl.innerHTML = `✍️ Writing: <strong>Lv. ${stats.level}</strong> (${stats.totalWords.toLocaleString()} / 50 000)`;
            trackerWritingEl.title = `Навык письма: наберите 50 000 слов с героями <100 lvl (1 слово = 1 XP). Прогресс уровня: ${stats.wordsInCurrentLevel}/${stats.wordsNeededForNextLevel} слов (${stats.progressPercent}%)`;
        }
        try { updateGlobalA1SkillsProgress(); } catch(e) {}
    }

    // --- LISTENING SKILL ENGINE (LEVEL 1 -> 100, 800,000 TOTAL WORDS) ---
    function generateListeningThresholds() {
        const thresholds = [0];
        for (let lvl = 2; lvl <= 100; lvl++) {
            const thresh = Math.round(800000 * Math.pow((lvl - 1) / 99.0, 1.4));
            thresholds.push(thresh);
        }
        thresholds[99] = 800000;
        return thresholds;
    }

    const LISTENING_THRESHOLDS = generateListeningThresholds();

    function getListeningStats() {
        const totalWords = parseInt(localStorage.getItem("english_pulse_listening_words") || "0", 10);
        let level = 1;
        for (let i = 0; i < LISTENING_THRESHOLDS.length; i++) {
            if (totalWords >= LISTENING_THRESHOLDS[i]) {
                level = i + 1;
            } else {
                break;
            }
        }
        level = Math.min(100, Math.max(1, level));

        const currentLevelThreshold = LISTENING_THRESHOLDS[level - 1] || 0;
        const nextLevelThreshold = level < 100 ? (LISTENING_THRESHOLDS[level] || 800000) : 800000;
        const wordsInCurrentLevel = totalWords - currentLevelThreshold;
        const wordsNeededForNextLevel = nextLevelThreshold - currentLevelThreshold;
        const progressPercent = level >= 100 ? 100 : Math.min(100, Math.max(0, (wordsInCurrentLevel / wordsNeededForNextLevel) * 100));

        return {
            totalWords,
            level,
            currentLevelThreshold,
            nextLevelThreshold,
            wordsInCurrentLevel,
            wordsNeededForNextLevel,
            progressPercent: parseFloat(progressPercent.toFixed(1))
        };
    }

    function addListeningWords(wordsGained) {
        if (wordsGained <= 0) return;
        const prevStats = getListeningStats();
        if (prevStats.level >= 100) return;

        const newTotal = Math.min(800000, prevStats.totalWords + wordsGained);
        localStorage.setItem("english_pulse_listening_words", newTotal);
        const newStats = getListeningStats();

        updateListeningUI();

        if (newStats.level > prevStats.level) {
            showToast(`🎧 <b>LISTENING LEVEL UP!</b> Level <b>${newStats.level}</b> reached! (${newTotal.toLocaleString()} / 800,000 words)`, "linear-gradient(135deg, #0284c7, #38bdf8)", "#38bdf8");
        }
    }

    function updateListeningUI() {
        const stats = getListeningStats();
        const headerLvlEl = document.getElementById("rpg-header-listening-lvl");
        const headerPillEl = document.getElementById("rpg-header-listening-pill");
        if (headerLvlEl) {
            headerLvlEl.textContent = `Lv. ${stats.level}`;
        }
        if (headerPillEl) {
            headerPillEl.title = `Навык восприятия (Listening Level ${stats.level}/100):\n` +
                `Слов прослушано: ${stats.totalWords.toLocaleString()} / 800 000\n` +
                (stats.level < 100 ? `До уровня ${stats.level + 1}: ${stats.wordsInCurrentLevel}/${stats.wordsNeededForNextLevel} слов (${stats.progressPercent}%)` : `МАКСИМАЛЬНЫЙ УРОВЕНЬ 100 ДОСТИГНУТ! 🏆`);
        }

        const trackerListeningEl = document.getElementById("tracker-listening-tag");
        if (trackerListeningEl) {
            trackerListeningEl.innerHTML = `🎧 Listening: <strong>Lv. ${stats.level}</strong> (${stats.totalWords.toLocaleString()} / 800 000)`;
            trackerListeningEl.title = `Навык восприятия: прослушайте 800 000 слов в диалогах (1 слово = 1 XP). Прогресс уровня: ${stats.wordsInCurrentLevel}/${stats.wordsNeededForNextLevel} слов (${stats.progressPercent}%)`;
        }
        try { updateGlobalA1SkillsProgress(); } catch(e) {}
    }

    // --- VOCABULARY SKILL ENGINE (LEVEL 1 -> 100, 5,000 WORDS IN LONG-TERM MEMORY: INTERVAL >= 21 DAYS) ---
    function generateVocabThresholds() {
        const thresholds = [0];
        for (let lvl = 2; lvl <= 100; lvl++) {
            const thresh = Math.round(5000 * Math.pow((lvl - 1) / 99.0, 1.4));
            thresholds.push(thresh);
        }
        thresholds[99] = 5000;
        return thresholds;
    }

    const VOCAB_THRESHOLDS = generateVocabThresholds();

    function getPlayerLongTermMemoryWordsCount() {
        if (typeof flashcardEngine === 'undefined') return 0;
        const decks = flashcardEngine.decks || (typeof flashcardEngine.loadDecks === 'function' ? flashcardEngine.loadDecks() : {}) || {};
        const masteredWordsSet = new Set();

        Object.values(decks).forEach(deck => {
            if (Array.isArray(deck)) {
                deck.forEach(card => {
                    if (card && card.studied && (card.interval || 0) >= 21) {
                        if (card.word) masteredWordsSet.add(card.word.toLowerCase().trim());
                    }
                });
            }
        });

        return masteredWordsSet.size;
    }

    function getVocabStats() {
        const totalWords = getPlayerLongTermMemoryWordsCount();
        let level = 1;
        for (let i = 0; i < VOCAB_THRESHOLDS.length; i++) {
            if (totalWords >= VOCAB_THRESHOLDS[i]) {
                level = i + 1;
            } else {
                break;
            }
        }
        level = Math.min(100, Math.max(1, level));

        const currentLevelThreshold = VOCAB_THRESHOLDS[level - 1] || 0;
        const nextLevelThreshold = level < 100 ? (VOCAB_THRESHOLDS[level] || 5000) : 5000;
        const wordsInCurrentLevel = totalWords - currentLevelThreshold;
        const wordsNeededForNextLevel = nextLevelThreshold - currentLevelThreshold;
        const progressPercent = level >= 100 ? 100 : Math.min(100, Math.max(0, (wordsInCurrentLevel / wordsNeededForNextLevel) * 100));

        return {
            totalWords,
            level,
            currentLevelThreshold,
            nextLevelThreshold,
            wordsInCurrentLevel,
            wordsNeededForNextLevel,
            progressPercent: parseFloat(progressPercent.toFixed(1))
        };
    }

    let lastKnownVocabLevel = null;
    function checkAndUpdateVocabLevel() {
        const stats = getVocabStats();
        if (lastKnownVocabLevel === null) {
            lastKnownVocabLevel = parseInt(localStorage.getItem("english_pulse_last_vocab_lvl") || `${stats.level}`, 10);
        }

        if (stats.level > lastKnownVocabLevel) {
            showToast(`📚 <b>VOCABULARY LEVEL UP!</b> Level <b>${stats.level}</b> reached! (${stats.totalWords.toLocaleString()} / 5,000 words in long-term memory)`, "linear-gradient(135deg, #06b6d4, #0284c7)", "#22d3ee");
            lastKnownVocabLevel = stats.level;
            localStorage.setItem("english_pulse_last_vocab_lvl", stats.level);
        }

        updateVocabUI();
    }

    function updateVocabUI() {
        const stats = getVocabStats();
        const headerLvlEl = document.getElementById("rpg-header-vocab-lvl");
        const headerPillEl = document.getElementById("rpg-header-vocab-pill");
        if (headerLvlEl) {
            headerLvlEl.textContent = `Lv. ${stats.level}`;
        }
        if (headerPillEl) {
            headerPillEl.title = `Навык словарного запаса (Vocabulary Level ${stats.level}/100):\n` +
                `Слов в долгосрочной памяти (интервал ≥21 дн.): ${stats.totalWords.toLocaleString()} / 5 000\n` +
                (stats.level < 100 ? `До уровня ${stats.level + 1}: ${stats.wordsInCurrentLevel}/${stats.wordsNeededForNextLevel} слов (${stats.progressPercent}%)` : `МАКСИМАЛЬНЫЙ УРОВЕНЬ 100 ДОСТИГНУТ! 🏆`);
        }

        const srsMasteredKpi = document.getElementById("srs-kpi-mastered");
        if (srsMasteredKpi) {
            srsMasteredKpi.textContent = stats.totalWords;
        }
        try { updateGlobalA1SkillsProgress(); } catch(e) {}
    }

    function updateReadingUI() {
        if (!window.visualFluency) return;
        const progress = window.visualFluency.getProgressData();
        const headerLvlEl = document.getElementById("rpg-header-reading-lvl");
        const headerPillEl = document.getElementById("rpg-header-reading-pill");
        if (headerLvlEl) {
            headerLvlEl.textContent = `Lv. ${progress.level}`;
        }
        if (headerPillEl) {
            headerPillEl.title = `Навык чтения (Reading / Visual Fluency Lv. ${progress.level}/100):\n` +
                `Ранг: ${progress.rank.icon} ${progress.rank.title}\n` +
                `Слов прочитано: ${progress.xp.toLocaleString()} / 1 000 000\n` +
                (progress.level < 100 ? `До уровня ${progress.level + 1}: ${progress.xpInLevel}/${progress.levelTotalReq} XP (${progress.percent}%)` : `МАКСИМАЛЬНЫЙ УРОВЕНЬ 100 ДОСТИГНУТ! 🏆`);
        }
        try { updateGlobalA1SkillsProgress(); } catch(e) {}
    }

    function updateDrillsUI() {
        if (!window.patternDrills) return;
        const stats = window.patternDrills.getStats();
        const headerLvlEl = document.getElementById("rpg-header-drills-lvl");
        const headerPillEl = document.getElementById("rpg-header-drills-pill");
        const modalBadge = document.getElementById("drills-header-progress-badge");

        if (headerLvlEl) {
            headerLvlEl.textContent = `Lv. ${stats.level}`;
        }
        if (headerPillEl) {
            headerPillEl.title = `Навык дриллов (Drills Level ${stats.level}/100):\n` +
                `Пройдено трансформаций: ${stats.totalCards.toLocaleString()} / 10 000\n` +
                (stats.level < 100 ? `До уровня ${stats.level + 1}: ${stats.inLevel}/${stats.needed} карточек (${stats.percent}%)` : `МАКСИМАЛЬНЫЙ УРОВЕНЬ 100 ДОСТИГНУТ! 🏆`);
        }
        if (modalBadge) {
            modalBadge.textContent = `Card: ${stats.totalCards.toLocaleString()} / 10,000 • Lv. ${stats.level}`;
        }
        try { updateGlobalA1SkillsProgress(); } catch(e) {}
    }

    function updateSpeakingUI() {
        if (!window.speakingEngine) return;
        const stats = window.speakingEngine.getStats();
        const headerLvlEl = document.getElementById("rpg-header-speaking-lvl");
        const headerPillEl = document.getElementById("rpg-header-speaking-pill");
        const modalBadge = document.getElementById("speaking-header-badge");

        if (headerLvlEl) {
            headerLvlEl.textContent = `Lv. ${stats.level}`;
        }
        if (headerPillEl) {
            headerPillEl.title = `Навык говорения (Speaking Level ${stats.level}/100):\n` +
                `Наговорено слов: ${stats.totalWords.toLocaleString()} / 300 000\n` +
                (stats.level < 100 ? `До уровня ${stats.level + 1}: ${stats.inLevel}/${stats.needed} слов (${stats.percent}%)` : `МАКСИМАЛЬНЫЙ УРОВЕНЬ 100 ДОСТИГНУТ! 🏆`);
        }
        if (modalBadge) {
            modalBadge.textContent = `Words: ${stats.totalWords.toLocaleString()} / 300,000 • Lv. ${stats.level}`;
        }
        try { updateGlobalA1SkillsProgress(); } catch(e) {}
    }

    function updateGlobalA1SkillsProgress() {
        const readingLvl = window.visualFluency ? window.visualFluency.level : 1;
        const listeningStats = window.getListeningStats ? window.getListeningStats() : { level: 1, totalWords: 0 };
        const writingStats = window.getWritingStats ? window.getWritingStats() : { level: 1, totalWords: 0 };
        const drillsStats = window.patternDrills ? window.patternDrills.getStats() : { level: 1, totalCards: 0 };
        const speakingStats = window.speakingEngine ? window.speakingEngine.getStats() : { level: 1, totalWords: 0 };
        const vocabStats = window.getVocabStats ? window.getVocabStats() : { level: 1, totalWords: 0 };

        const A1_TARGETS = {
            reading: { targetLvl: 11, desc: "30 000 XP" },
            listening: { targetLvl: 10, desc: "25 000 слов" },
            writing: { targetLvl: 11, desc: "2 000 слов" },
            drills: { targetLvl: 23, desc: "1 200 карточек" },
            speaking: { targetLvl: 7, desc: "5 000 слов" },
            vocab: { targetLvl: 35, desc: "1 100 слов в SRS" }
        };

        const totalTargetLevels = Object.values(A1_TARGETS).reduce((sum, item) => sum + item.targetLvl, 0); // 97

        const readingContrib = Math.min(readingLvl, A1_TARGETS.reading.targetLvl);
        const listeningContrib = Math.min(listeningStats.level, A1_TARGETS.listening.targetLvl);
        const writingContrib = Math.min(writingStats.level, A1_TARGETS.writing.targetLvl);
        const drillsContrib = Math.min(drillsStats.level, A1_TARGETS.drills.targetLvl);
        const speakingContrib = Math.min(speakingStats.level, A1_TARGETS.speaking.targetLvl);
        const vocabContrib = Math.min(vocabStats.level, A1_TARGETS.vocab.targetLvl);

        const currentSkillLevelsSum = readingContrib + listeningContrib + writingContrib + drillsContrib + speakingContrib + vocabContrib;
        const progressPct = Math.min(100, Math.max(0, (currentSkillLevelsSum / totalTargetLevels) * 100)).toFixed(1);

        const globalTitleEl = document.getElementById("global-progress-title-text");
        if (globalTitleEl) {
            globalTitleEl.textContent = `A1 Skills: ${currentSkillLevelsSum} / ${totalTargetLevels} (${progressPct}%)`;
        }

        const globalFillEl = document.getElementById("global-progress-bar-fill");
        if (globalFillEl) {
            globalFillEl.style.width = `${progressPct}%`;
        }

        const containerEl = document.getElementById("global-a0-a1-container") || document.querySelector(".global-a0-a1-progress-container");
        if (containerEl) {
            containerEl.title = `🎯 Прогресс достижения ранга A1 (Сумма уровней навыков):\n` +
                `📖 Reading: Lv. ${readingLvl} / ${A1_TARGETS.reading.targetLvl} ${readingLvl >= A1_TARGETS.reading.targetLvl ? '✅' : `(порог: ${A1_TARGETS.reading.desc})`}\n` +
                `🎧 Listening: Lv. ${listeningStats.level} / ${A1_TARGETS.listening.targetLvl} ${listeningStats.level >= A1_TARGETS.listening.targetLvl ? '✅' : `(порог: ${A1_TARGETS.listening.desc})`}\n` +
                `✍️ Writing: Lv. ${writingStats.level} / ${A1_TARGETS.writing.targetLvl} ${writingStats.level >= A1_TARGETS.writing.targetLvl ? '✅' : `(порог: ${A1_TARGETS.writing.desc})`}\n` +
                `⚡ Drills: Lv. ${drillsStats.level} / ${A1_TARGETS.drills.targetLvl} ${drillsStats.level >= A1_TARGETS.drills.targetLvl ? '✅' : `(порог: ${A1_TARGETS.drills.desc})`}\n` +
                `🎙️ Speaking: Lv. ${speakingStats.level} / ${A1_TARGETS.speaking.targetLvl} ${speakingStats.level >= A1_TARGETS.speaking.targetLvl ? '✅' : `(порог: ${A1_TARGETS.speaking.desc})`}\n` +
                `📚 Vocab: Lv. ${vocabStats.level} / ${A1_TARGETS.vocab.targetLvl} ${vocabStats.level >= A1_TARGETS.vocab.targetLvl ? '✅' : `(порог: ${A1_TARGETS.vocab.desc})`}\n\n` +
                `Общий прогресс: ${currentSkillLevelsSum} / ${totalTargetLevels} уровней (${progressPct}%)`;
        }
    }

    function renderRPGHeader() {
        const powerEl = document.getElementById("rpg-power-display");
        if (powerEl) powerEl.textContent = rpgEngine.getPartyPower();
        const squadEl = document.getElementById("rpg-squad-power");
        if (squadEl) squadEl.textContent = rpgEngine.getPartyPower();
        updateReadingUI();
        updateListeningUI();
        updateWritingUI();
        updateDrillsUI();
        updateSpeakingUI();
        updateVocabUI();
        updateGlobalA1SkillsProgress();
    }

    // --- AUTOMATIC MULTI-DEVICE SYNC (PC <-> MOBILE) ---
    let syncTimeout = null;

    function getFullPlayerStateObject() {
        return {
            heroes: rpgEngine.heroes,
            cards: (typeof flashcardEngine !== 'undefined' && flashcardEngine.decks) ? flashcardEngine.decks : (JSON.parse(localStorage.getItem("english_rpg_flashcard_decks") || "{}")),
            streak: parseInt(localStorage.getItem("english_rpg_streak_days") || "0", 10),
            writing_words: parseInt(localStorage.getItem("english_pulse_writing_words") || "0", 10),
            listening_words: parseInt(localStorage.getItem("english_pulse_listening_words") || "0", 10),
            speaking_words: parseInt(localStorage.getItem("english_pulse_speaking_words") || "0", 10),
            drills_cards: parseInt(localStorage.getItem("english_pulse_drills_cards") || "0", 10),
            visual_fluency_xp: parseInt(localStorage.getItem("visual_fluency_xp") || "0", 10),
            visual_fluency_completed: JSON.parse(localStorage.getItem("visual_fluency_completed_chapters") || "[]"),
            completed_story_chapters: JSON.parse(localStorage.getItem("english_rpg_completed_story_chapters") || "[]")
        };
    }

    async function syncPlayerStateToServer() {
        clearTimeout(syncTimeout);
        syncTimeout = setTimeout(async () => {
            try {
                const payload = getFullPlayerStateObject();
                await fetch("/api/player/sync", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });
            } catch(e) {
                // Offline fallback
            }
        }, 1500);
    }

    async function loadPlayerStateFromServer() {
        try {
            const resp = await fetch("/api/player/sync");
            if (!resp.ok) return;
            const data = await resp.json();
            if (data.success && data.state) {
                const s = data.state;
                if (s.heroes && Array.isArray(s.heroes) && s.heroes.length > 0) {
                    s.heroes.forEach(remoteHero => {
                        const local = rpgEngine.heroes.find(h => h.id === remoteHero.id);
                        if (local && (remoteHero.level > (local.level || 1) || remoteHero.xp > (local.xp || 0))) {
                            local.level = remoteHero.level;
                            local.xp = remoteHero.xp;
                            local.maxXp = remoteHero.maxXp || local.maxXp;
                            local.unlocked = remoteHero.unlocked !== undefined ? remoteHero.unlocked : local.unlocked;
                        }
                    });
                    rpgEngine.saveHeroes();
                }
                if (s.writing_words && s.writing_words > parseInt(localStorage.getItem("english_pulse_writing_words") || "0", 10)) {
                    localStorage.setItem("english_pulse_writing_words", s.writing_words.toString());
                }
                if (s.listening_words && s.listening_words > parseInt(localStorage.getItem("english_pulse_listening_words") || "0", 10)) {
                    localStorage.setItem("english_pulse_listening_words", s.listening_words.toString());
                }
                if (s.speaking_words && s.speaking_words > parseInt(localStorage.getItem("english_pulse_speaking_words") || "0", 10)) {
                    localStorage.setItem("english_pulse_speaking_words", s.speaking_words.toString());
                    if (window.speakingEngine) window.speakingEngine.totalWords = s.speaking_words;
                }
                if (s.drills_cards && s.drills_cards > parseInt(localStorage.getItem("english_pulse_drills_cards") || "0", 10)) {
                    localStorage.setItem("english_pulse_drills_cards", s.drills_cards.toString());
                    if (window.patternDrills) window.patternDrills.totalCards = s.drills_cards;
                }
                if (s.visual_fluency_xp && s.visual_fluency_xp > parseInt(localStorage.getItem("visual_fluency_xp") || "0", 10)) {
                    localStorage.setItem("visual_fluency_xp", s.visual_fluency_xp.toString());
                    if (window.visualFluency) window.visualFluency.xp = s.visual_fluency_xp;
                }
                if (s.cards && Object.keys(s.cards).length > 0) {
                    const localDecks = JSON.parse(localStorage.getItem("english_rpg_flashcard_decks") || "{}");
                    if (Object.keys(localDecks).length === 0) {
                        localStorage.setItem("english_rpg_flashcard_decks", JSON.stringify(s.cards));
                        if (typeof flashcardEngine !== 'undefined') flashcardEngine.decks = s.cards;
                    }
                }
                renderRPGHeader();
                renderHeroShowcase(rpgEngine.heroes[0]);
            }
        } catch(e) {
            // Offline fallback
        }
    }

    window.getWritingStats = getWritingStats;
    window.addWritingWords = addWritingWords;
    window.updateWritingUI = updateWritingUI;
    window.getListeningStats = getListeningStats;
    window.addListeningWords = addListeningWords;
    window.updateListeningUI = updateListeningUI;
    window.getPlayerLongTermMemoryWordsCount = getPlayerLongTermMemoryWordsCount;
    window.getVocabStats = getVocabStats;
    window.checkAndUpdateVocabLevel = checkAndUpdateVocabLevel;
    window.updateVocabUI = updateVocabUI;
    window.updateReadingUI = updateReadingUI;
    window.updateDrillsUI = updateDrillsUI;
    window.updateSpeakingUI = updateSpeakingUI;
    window.updateGlobalA1SkillsProgress = updateGlobalA1SkillsProgress;
    window.syncPlayerStateToServer = syncPlayerStateToServer;
    window.loadPlayerStateFromServer = loadPlayerStateFromServer;

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

    // --- DAILY HERO WORD USAGE TRACKER (RESETS DAILY WITH IN-MEMORY CACHE) ---
    let inMemoryDailyWordUsageMap = null;
    let inMemoryDailyWordUsageDate = null;
    let inMemoryAllTimeWordUsageMap = null;

    function loadWordUsageMap() {
        const todayStr = new Date().toISOString().split('T')[0];
        if (inMemoryDailyWordUsageMap && inMemoryDailyWordUsageDate === todayStr) {
            return inMemoryDailyWordUsageMap;
        }
        const savedDate = localStorage.getItem("hero_word_usage_date");
        if (savedDate !== todayStr) {
            inMemoryDailyWordUsageMap = {};
            inMemoryDailyWordUsageDate = todayStr;
            try {
                localStorage.setItem("hero_word_usage_v2", "{}");
                localStorage.setItem("hero_word_usage_date", todayStr);
            } catch (e) {}
            return inMemoryDailyWordUsageMap;
        }
        try {
            inMemoryDailyWordUsageMap = JSON.parse(localStorage.getItem("hero_word_usage_v2") || "{}");
        } catch (e) {
            inMemoryDailyWordUsageMap = {};
        }
        inMemoryDailyWordUsageDate = todayStr;
        return inMemoryDailyWordUsageMap;
    }

    function saveWordUsageMap(map) {
        const todayStr = new Date().toISOString().split('T')[0];
        inMemoryDailyWordUsageMap = map;
        inMemoryDailyWordUsageDate = todayStr;
        try {
            localStorage.setItem("hero_word_usage_v2", JSON.stringify(map));
            localStorage.setItem("hero_word_usage_date", todayStr);
        } catch (e) {}
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

    // --- ALL-TIME HERO WORD USAGE TRACKER (LIFETIME STATS WITH IN-MEMORY CACHE) ---
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
        if (inMemoryAllTimeWordUsageMap) return inMemoryAllTimeWordUsageMap;
        try {
            inMemoryAllTimeWordUsageMap = JSON.parse(localStorage.getItem("hero_word_usage_alltime") || "{}");
        } catch (e) {
            inMemoryAllTimeWordUsageMap = {};
        }
        return inMemoryAllTimeWordUsageMap;
    }

    function saveAllTimeWordUsageMap(map) {
        inMemoryAllTimeWordUsageMap = map;
        try {
            localStorage.setItem("hero_word_usage_alltime", JSON.stringify(map));
        } catch (e) {}
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

    function getHeroAntiRatingFocusWords(hero, targetCount = 20) {
        if (!hero || !hero.words || hero.words.length === 0) return [];
        
        const wordsList = [...hero.words];
        const dateSeedStr = new Date().toISOString().split('T')[0];
        
        function getWordDateHash(wordStr) {
            let hash = 0;
            const str = `${hero.id}_${wordStr.toLowerCase()}_${dateSeedStr}`;
            for (let i = 0; i < str.length; i++) {
                hash = (hash << 5) - hash + str.charCodeAt(i);
                hash |= 0;
            }
            return Math.abs(hash);
        }
        
        wordsList.sort((a, b) => {
            const pA = getWordProps(a);
            const pB = getWordProps(b);
            
            const allTimeA = getAllTimeWordUsageCount(hero.id, pA.word);
            const todayA = getWordUsageCount(hero.id, pA.word);
            const priorA = Math.max(0, allTimeA - todayA);

            const allTimeB = getAllTimeWordUsageCount(hero.id, pB.word);
            const todayB = getWordUsageCount(hero.id, pB.word);
            const priorB = Math.max(0, allTimeB - todayB);
            
            if (priorA !== priorB) {
                return priorA - priorB;
            }
            
            return getWordDateHash(pA.word) - getWordDateHash(pB.word);
        });
        
        return wordsList.slice(0, Math.min(targetCount, wordsList.length));
    }

    window.getWordUsageCount = getWordUsageCount;
    window.getAllTimeWordUsageCount = getAllTimeWordUsageCount;
    window.getHeroAntiRatingFocusWords = getHeroAntiRatingFocusWords;

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
        const cleanText = " " + lowerText.replace(/[^\w\s'-]/g, " ").replace(/\s+/g, " ") + " ";
        const wordsInText = cleanText.trim().split(/\s+/).map(w => w.replace(/^'+|'+$/g, ''));
        const userWordsSet = new Set(wordsInText);
        
        // Precompute clean unhyphenated & stems for O(1) matching
        const userStemsSet = new Set();
        wordsInText.forEach(userW => {
            const clean = userW.replace(/-/g, "");
            userStemsSet.add(clean);
            if (userW.endsWith("s")) userStemsSet.add(userW.slice(0, -1));
            if (userW.endsWith("es")) userStemsSet.add(userW.slice(0, -2));
            if (userW.endsWith("ies")) userStemsSet.add(userW.slice(0, -3) + "y");
            if (userW.endsWith("ing")) {
                userStemsSet.add(userW.slice(0, -3));
                userStemsSet.add(userW.slice(0, -3) + "e");
            }
            if (userW.endsWith("ed")) {
                userStemsSet.add(userW.slice(0, -2));
                userStemsSet.add(userW.slice(0, -1));
            }
        });

        let totalXP = 0;
        const matchedWordsInfo = [];

        hero.words.forEach(wObj => {
            const w = getWordProps(wObj);
            if (!w.word) return;
            const wordLower = w.word.toLowerCase().trim();
            const unhyphenatedWord = wordLower.replace(/-/g, "");
            const variants = getWordVariants(wordLower);

            let isMatched = false;
            for (const v of variants) {
                if (userWordsSet.has(v) || cleanText.includes(` ${v} `)) {
                    isMatched = true;
                    break;
                }
            }

            if (!isMatched) {
                if (userStemsSet.has(wordLower) || userStemsSet.has(unhyphenatedWord) || cleanText.includes(` ${wordLower} `)) {
                    isMatched = true;
                }
            }

            if (isMatched) {
                const currentUsage = getWordUsageCount(hero.id, w.word);
                let bonusXp = 2;
                let tierText = "Mastered (+2 XP)";

                if (currentUsage === 0) {
                    bonusXp = 40;
                    tierText = "1st Use (+40 XP)";
                } else if (currentUsage === 1) {
                    bonusXp = 20;
                    tierText = "2nd Use (+20 XP)";
                } else if (currentUsage === 2) {
                    bonusXp = 10;
                    tierText = "3rd Use (+10 XP)";
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
            try { checkAndUpdateDailyStreak(); } catch (e) {}
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

        if (!scenario || !scenario.isHeroScenario) {
            scenario = activeScenario;
        }

        // Show cheatsheet EXCLUSIVELY in dedicated Hero Roleplay Dialogues!
        if (!scenario || !scenario.isHeroScenario || !scenario.heroId) {
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
        const focusWords = getHeroAntiRatingFocusWords(targetHero, 20);
        const usedFocusCount = focusWords.filter(wObj => getWordUsageCount(targetHero.id, getWordProps(wObj).word) >= 1).length;

        const modeTitleEl = document.getElementById("vocab-deck-mode-title");
        if (modeTitleEl) {
            if (activeVocabViewMode === "focus") {
                modeTitleEl.innerHTML = `🎯 Focus Words (${usedFocusCount}/20)`;
                modeTitleEl.style.color = "#60a5fa";
                modeTitleEl.title = "Showing 20 least-used Focus Words for today's Daily Quest (Click to show All 110 words)";
            } else {
                modeTitleEl.innerHTML = `📚 All Words (${targetHero.words ? targetHero.words.length : 110})`;
                modeTitleEl.style.color = "#fbbf24";
                modeTitleEl.title = "Showing All Hero Words (Click to show 20 Focus Words)";
            }
        }

        const wordsToDisplay = activeVocabViewMode === "focus" ? focusWords : targetHero.words;
        const categorized = categorizeHeroWords(wordsToDisplay);
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

    let activeVocabViewMode = "focus"; // "focus" (50 words) or "all" (110 words)

    const prevHeroVocabModeBtn = document.getElementById("prev-hero-vocab-mode-btn");
    const nextHeroVocabModeBtn = document.getElementById("next-hero-vocab-mode-btn");
    const vocabDeckModeTitle = document.getElementById("vocab-deck-mode-title");

    function toggleVocabDeckMode() {
        activeVocabViewMode = activeVocabViewMode === "focus" ? "all" : "focus";
        renderHeroWordHelperPanel(activeScenario);
    }

    if (prevHeroVocabModeBtn) prevHeroVocabModeBtn.addEventListener("click", toggleVocabDeckMode);
    if (nextHeroVocabModeBtn) nextHeroVocabModeBtn.addEventListener("click", toggleVocabDeckMode);
    if (vocabDeckModeTitle) vocabDeckModeTitle.addEventListener("click", toggleVocabDeckMode);

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

    // Hero Chat Speech Speed Controls (0.25x, 0.5x, 0.75x, 1.0x)
    function initHeroChatSpeedControls() {
        const container = document.getElementById("hero-chat-speed-controls");
        if (!container) return;

        const currentSpeed = (typeof voiceService !== 'undefined' && typeof voiceService.getSpeechSpeed === 'function') 
            ? voiceService.getSpeechSpeed() 
            : (parseFloat(localStorage.getItem("hero_chat_voice_speed")) || 1.0);

        const updateActiveSpeedBtn = (spd) => {
            const buttons = container.querySelectorAll(".chat-speed-btn");
            buttons.forEach(btn => {
                const btnSpeed = parseFloat(btn.getAttribute("data-speed"));
                if (Math.abs(btnSpeed - spd) < 0.01) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });
        };

        updateActiveSpeedBtn(currentSpeed);

        container.addEventListener("click", (e) => {
            const btn = e.target.closest(".chat-speed-btn");
            if (!btn) return;
            const newSpeed = parseFloat(btn.getAttribute("data-speed")) || 1.0;
            if (typeof voiceService !== 'undefined' && typeof voiceService.setSpeechSpeed === 'function') {
                voiceService.setSpeechSpeed(newSpeed);
            }
            updateActiveSpeedBtn(newSpeed);
            showToast(`🔊 Скорость озвучки: ${newSpeed}x`, "rgba(99, 102, 241, 0.9)");
        });
    }

    initHeroChatSpeedControls();

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

    window.evaluateUserGrammarClientSide = evaluateUserGrammarClientSide;

    function translateA0TextToRussian(text) {
        if (!text) return "";
        let ru = text;

        const phraseDict = {
            "I am glad to hear that!": "Рад это слышать!",
            "I'm glad to hear that!": "Рад это слышать!",
            "Nice to meet you!": "Приятно познакомиться!",
            "My name is": "Меня зовут",
            "I'm a noble Silver Paladin tank": "Я благородный Паладин-танк",
            "I am a noble Silver Paladin tank": "Я благородный Паладин-танк",
            "Are you happy or brave today?": "Ты сегодня счастливый или храбрый?",
            "That's right!": "Всё верно!",
            "That is right!": "Всё верно!",
            "It's not a": "Это не",
            "It is not a": "Это не",
            "Follow me": "Следуй за мной",
            "and we will find": "и мы найдём",
            "our park soon": "наш парк совсем скоро",
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
            "Welcome to the Emerald Grove!": "Добро пожаловать в Изумрудную Рощу!",
            "Do you like": "Тебе нравится",
            "Do you want": "Ты хочешь",
            "Do you have": "У тебя есть",
            "Are you": "Ты",
            "when you are": "когда ты",
            "on your pizza": "на твоей пицце",
            "for breakfast": "на завтрак",
            "for lunch": "на обед",
            "for dinner": "на ужин"
        };

        Object.keys(phraseDict).forEach(key => {
            const reg = new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
            ru = ru.replace(reg, phraseDict[key]);
        });

        if (typeof rpgEngine !== 'undefined' && rpgEngine.heroes) {
            rpgEngine.heroes.forEach(hero => {
                if (hero.words && Array.isArray(hero.words)) {
                    hero.words.forEach(wObj => {
                        const en = Array.isArray(wObj) ? wObj[0] : (wObj.word || "");
                        const tr = Array.isArray(wObj) ? wObj[2] : (wObj.translation || "");
                        if (en && tr && en.length > 2) {
                            const reg = new RegExp(`\\b${en}\\b`, 'gi');
                            ru = ru.replace(reg, tr);
                        }
                    });
                }
            });
        }

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

    function renderPronunciationBadge(bubble, accuracy, msgContent, heroId, spokenTranscript = "") {
        let badgeClass = "perfect";
        let badgeText = `🟢 ${accuracy}% Accuracy (Perfect!)`;
        if (accuracy < 60) {
            badgeClass = "retry";
            badgeText = `🔴 ${accuracy}% Accuracy (Try Again!)`;
        } else if (accuracy < 85) {
            badgeClass = "good";
            badgeText = `🟡 ${accuracy}% Accuracy (Good Job!)`;
        }

        let badgeWrapper = bubble.querySelector(".pronunciation-badge-wrapper");
        if (!badgeWrapper) {
            badgeWrapper = document.createElement("div");
            badgeWrapper.className = "pronunciation-badge-wrapper";
            bubble.querySelector(".message-content").appendChild(badgeWrapper);
        }

        // Clean target and spoken words for matching
        const cleanTargetWords = msgContent.toLowerCase().replace(/\[correction:[\s\S]*?\]/gi, '').replace(/[^a-z0-9\s]/gi, '').split(/\s+/).filter(Boolean);
        const cleanSpokenWords = spokenTranscript ? spokenTranscript.toLowerCase().replace(/[^a-z0-9\s]/gi, '').split(/\s+/).filter(Boolean) : [];

        // Word-by-word markup of the original phrase
        const originalWordsArr = msgContent.split(/\s+/).filter(Boolean);
        const highlightedOriginalHtml = originalWordsArr.map(origWord => {
            const normalized = origWord.toLowerCase().replace(/[^a-z0-9]/gi, '');
            if (!normalized) return origWord;
            const isMatched = cleanSpokenWords.includes(normalized);
            return `<span class="pronunciation-word ${isMatched ? 'correct' : 'wrong'}">${origWord}</span>`;
        }).join(" ");

        const missedWords = cleanTargetWords.filter(w => !cleanSpokenWords.includes(w));
        const missedWordsHtml = missedWords.length > 0
            ? `<div style="margin-top:4px; font-size:11px; color:#fca5a5;">⚠️ Не распознано / искажено: <strong>${missedWords.join(", ")}</strong></div>`
            : `<div style="margin-top:4px; font-size:11px; color:#6ee7b7;">✨ Все слова произнесены чётко!</div>`;

        badgeWrapper.innerHTML = `
            <div style="display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin-top:6px;">
                <span class="pronunciation-badge ${badgeClass}">${badgeText}</span>
                <button type="button" class="transcript-toggle-btn">
                    <i class="fa-solid fa-align-left"></i> <span>Анализ слов</span>
                </button>
            </div>
            <div class="pronunciation-transcript-box hidden">
                <div style="font-weight:700; color:#cbd5e1; margin-bottom:4px;">
                    🎯 Эталон: ${highlightedOriginalHtml}
                </div>
                <div style="color:#94a3b8; font-style:italic; margin-bottom:4px;">
                    🎙️ Нейросеть услышала: <span style="color:#f1f5f9;">"${spokenTranscript || '(тишина / не распознано)'}"</span>
                </div>
                ${missedWordsHtml}
            </div>
        `;

        const toggleBtn = badgeWrapper.querySelector(".transcript-toggle-btn");
        const transcriptBox = badgeWrapper.querySelector(".pronunciation-transcript-box");
        if (toggleBtn && transcriptBox) {
            toggleBtn.addEventListener("click", () => {
                transcriptBox.classList.toggle("hidden");
                const isHidden = transcriptBox.classList.contains("hidden");
                toggleBtn.querySelector("span").textContent = isHidden ? "Анализ слов" : "Скрыть анализ";
            });
        }

        const repeatBtn = bubble.querySelector(".repeat-sentence-btn");
        if (repeatBtn) {
            repeatBtn.classList.remove("unrepeated-highlight");
            repeatBtn.classList.add("repeated");
        }

        const targetHeroId = heroId || (activeScenario && activeScenario.heroId) || activeShowcaseHeroId || (rpgEngine.heroes[0] && rpgEngine.heroes[0].id);
        if (accuracy >= 60 && targetHeroId) {
            const msgId = msgContent.trim().toLowerCase();
            const state = getTodayHeroAudioState(targetHeroId);
            if (!state.repeatedMsgs.includes(msgId)) {
                state.repeatedMsgs.push(msgId);
                saveTodayHeroAudioState(targetHeroId, state);

                // Award spoken words to Speaking Skill!
                const spokenWordCount = msgContent.trim().split(/\s+/).filter(w => /[a-zA-Z]/.test(w)).length;
                if (spokenWordCount > 0 && window.speakingEngine) {
                    const addRes = window.speakingEngine.addWords(spokenWordCount);
                    updateSpeakingUI();
                    if (addRes && addRes.leveledUp) {
                        showToast(`🎙️ <b>SPEAKING LEVEL UP!</b> Level <b>${addRes.newLevel}</b> reached! (${addRes.totalWords.toLocaleString()} / 300,000 words spoken)`, "linear-gradient(135deg, #ec4899, #8b5cf6)", "#f472b6");
                    }
                }

                triggerRPGReward("repeat", targetHeroId, targetHeroId, 40, `🎯 +40 XP Pronunciation Repeat Bonus!`, "linear-gradient(135deg, #10b981, #059669)");
                addXP(40);
            }
        }
    }

    function checkAndAwardListeningBonus(text, heroId) {
        const targetHeroId = heroId || (activeScenario && activeScenario.heroId) || activeShowcaseHeroId || (rpgEngine.heroes[0] && rpgEngine.heroes[0].id);
        if (!targetHeroId) return;
        const msgId = text.trim().toLowerCase();
        const state = getTodayHeroAudioState(targetHeroId);
        if (!state.listenedMsgs.includes(msgId)) {
            state.listenedMsgs.push(msgId);
            saveTodayHeroAudioState(targetHeroId, state);

            triggerRPGReward("listen", targetHeroId, targetHeroId, 40, `🔊 +40 XP AI Listening Bonus!`, "linear-gradient(135deg, #3b82f6, #1d4ed8)");
            addXP(40);

            // LISTENING SKILL PROGRESSION (Level 1 -> 100, 800,000 words total, 1 word = 1 XP)
            // Each unique listened dialogue message counts once
            const englishWords = text.trim().split(/\s+/).filter(w => /[a-zA-Z]/.test(w));
            if (englishWords.length > 0) {
                addListeningWords(englishWords.length);
            }
        }
    }

    function appendMessage(role, text, customTranslation = null, focusInfo = null) {
        // Strip markdown asterisks / bold artifacts so chat text & speech are always 100% clean
        const cleanText = text
            ? text.replace(/\*\*+([^*]+?)\*\*+/g, '$1')
                  .replace(/\*+([^*]+?)\*+/g, '$1')
                  .replace(/__+([^_]+?)__+/g, '$1')
                  .replace(/_+([^_]+?)_+/g, '$1')
                  .replace(/[*_`#]/g, '')
                  .trim()
            : text;

        chatHistory.push({ role, content: cleanText });
        const bubble = document.createElement("div");
        bubble.className = `message-bubble ${role}`;
        
        const activeHeroId = (activeScenario && activeScenario.heroId) ? activeScenario.heroId : (activeShowcaseHeroId || (rpgEngine.heroes[0] && rpgEngine.heroes[0].id));
        const heroObj = activeHeroId ? rpgEngine.heroes.find(h => h.id === activeHeroId) : null;
        const heroAvatarSrc = heroObj ? (heroObj.faceImage || heroObj.image) : null;
        
        let avatar = `<div class="message-avatar"><i class="fa-solid fa-user"></i></div>`;
        if (role === 'assistant') {
            if (heroAvatarSrc) {
                avatar = `<div class="message-avatar" style="overflow:hidden;"><img src="${heroAvatarSrc}" style="width:100%; height:100%; object-fit:cover; object-position:top center; border-radius:50%;"></div>`;
            } else {
                avatar = `<div class="message-avatar"><i class="fa-solid ${activeScenario ? activeScenario.icon : 'fa-robot'}"></i></div>`;
            }
        }
        
        const msgId = cleanText.trim().toLowerCase();
        const heroState = activeHeroId ? getTodayHeroAudioState(activeHeroId) : null;
        const isListened = heroState && heroState.listenedMsgs && heroState.listenedMsgs.includes(msgId);
        const isRepeated = heroState && heroState.repeatedMsgs && heroState.repeatedMsgs.includes(msgId);

        let focusBtnHtml = '';
        if (role === 'assistant') {
            const currentFocusInfo = focusInfo || (typeof aiService !== 'undefined' && typeof aiService.getLastFocusInfo === 'function' ? aiService.getLastFocusInfo() : null);
            if (currentFocusInfo && currentFocusInfo.primary) {
                const pWord = currentFocusInfo.primary;
                const fWords = currentFocusInfo.fiveWords || [];
                const unused = currentFocusInfo.unusedCount !== undefined ? currentFocusInfo.unusedCount : 20;
                const meaning = currentFocusInfo.meaning ? `("${currentFocusInfo.meaning}")` : '';

                focusBtnHtml = `
                    <button class="focus-msg-btn btn btn-sm" style="font-size:10px; margin-left:8px; padding:1px 6px; border-radius:4px; background:rgba(147, 51, 234, 0.2); border:1px solid rgba(168, 85, 247, 0.4); color:#e9d5ff; font-weight:600; cursor:pointer;" title="Посмотреть фокусные слова AI на этот ход">
                        <i class="fa-solid fa-bullseye" style="color:#c084fc;"></i> 🎯 Target: <span style="text-transform:capitalize; color:#f0abfc;">${pWord}</span>
                    </button>
                    <div class="msg-focus-box hidden" style="font-size:11px; color:#e2e8f0; margin-top:8px; padding:8px 12px; background:linear-gradient(135deg, rgba(88, 28, 135, 0.45) 0%, rgba(59, 7, 100, 0.55) 100%); border-radius:8px; border:1px solid rgba(168, 85, 247, 0.4); box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
                        <div style="font-weight:700; color:#f0abfc; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
                            <i class="fa-solid fa-bullseye" style="color:#c084fc;"></i> 🎯 Фокусные слова AI на этот ход:
                        </div>
                        <div style="margin-bottom:4px;">
                            <span style="color:#cbd5e1;">Главная цель хода:</span> 
                            <strong style="background:#9333ea; color:#ffffff; padding:2px 7px; border-radius:4px; letter-spacing:0.5px; text-transform:capitalize;">${pWord}</strong> 
                            ${meaning ? `<span style="color:#c084fc; font-style:italic;">${meaning}</span>` : ''}
                        </div>
                        <div style="margin-bottom:4px; display:flex; flex-wrap:wrap; align-items:center; gap:4px;">
                            <span style="color:#cbd5e1;">5 фокусных слов для AI:</span> 
                            ${fWords.map(w => `<span style="background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.2); padding:1px 6px; border-radius:4px; color:#f3e8ff; font-weight:500;">${w}</span>`).join(' ')}
                        </div>
                        <div style="color:#a855f7; font-size:10px; margin-top:4px;">
                            <i class="fa-solid fa-clock-rotate-left"></i> Осталось неиспользованных слов сегодня: <b>${unused}</b> из 20
                        </div>
                    </div>
                `;
            }
        }

        const messageBodyHtml = role === 'assistant'
            ? `<div class="bot-msg-text-wrapper">
                   <div class="bot-msg-text bot-text-hidden" title="Нажмите, чтобы открыть текст">${cleanText}</div>
                   <button type="button" class="reveal-text-btn" title="Показать или скрыть английский текст"><i class="fa-solid fa-eye"></i> <span>Показать текст</span></button>
               </div>`
            : `<div>${cleanText}</div>`;

        const translateBtnHtml = role === 'assistant' 
            ? `<button class="audio-play-link ${isListened ? 'listened' : 'unheard-highlight'}"><i class="fa-solid fa-volume-high"></i> Listen</button>
               <button class="repeat-sentence-btn ${isRepeated ? 'repeated' : 'unrepeated-highlight'}"><i class="fa-solid fa-microphone-lines"></i> Repeat & Rate</button>
               <button class="translate-msg-btn btn btn-sm btn-outline" style="font-size:10px; margin-left:8px; padding:1px 6px; border-radius:4px;"><i class="fa-solid fa-language"></i> 🇷🇺 Translate / Перевод</button>
               ${focusBtnHtml}
               <div class="msg-translation-box hidden" style="font-size:11px; color:#cbd5e1; margin-top:6px; padding:6px 10px; background:rgba(255,255,255,0.06); border-radius:6px; border-left:3px solid var(--primary);"></div>` 
            : '';

        bubble.innerHTML = `
            ${avatar}
            <div class="message-content">
                ${messageBodyHtml}
                ${translateBtnHtml}
            </div>
        `;

        if (role === 'assistant') {
            const botTextEl = bubble.querySelector(".bot-msg-text");
            const revealBtn = bubble.querySelector(".reveal-text-btn");

            const toggleBotText = () => {
                if (!botTextEl) return;
                botTextEl.classList.toggle("bot-text-hidden");
                const isHidden = botTextEl.classList.contains("bot-text-hidden");
                if (revealBtn) {
                    revealBtn.innerHTML = isHidden 
                        ? `<i class="fa-solid fa-eye"></i> <span>Показать текст</span>` 
                        : `<i class="fa-solid fa-eye-slash"></i> <span>Скрыть текст</span>`;
                }
            };

            if (revealBtn) revealBtn.addEventListener("click", toggleBotText);
            if (botTextEl) botTextEl.addEventListener("click", () => {
                if (botTextEl.classList.contains("bot-text-hidden")) toggleBotText();
            });

            const audioBtn = bubble.querySelector(".audio-play-link");
            if (audioBtn) {
                audioBtn.addEventListener("click", () => {
                    checkAndAwardListeningBonus(cleanText, activeHeroId);
                    audioBtn.classList.remove("unheard-highlight");
                    audioBtn.classList.add("listened");
                    audioBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Speaking...`;
                    voiceService.speak(
                        cleanText,
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
                            const accuracy = calculatePronunciationAccuracy(cleanText, spokenTranscript);
                            renderPronunciationBadge(bubble, accuracy, cleanText, activeHeroId, spokenTranscript);
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

            const focusBtn = bubble.querySelector(".focus-msg-btn");
            const focusBox = bubble.querySelector(".msg-focus-box");
            if (focusBtn && focusBox) {
                focusBtn.addEventListener("click", () => {
                    focusBox.classList.toggle("hidden");
                });
            }
        }

        chatMessagesBox.appendChild(bubble);
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
    }

    async function handleUserSendMessage() {
        const text = userChatInput.value.trim();
        if (!text) return;

        // Get last hero message for contextual grammar check
        const lastHeroMsgObj = [...chatHistory].reverse().find(m => m.role === 'assistant');
        const lastHeroMessageText = lastHeroMsgObj ? lastHeroMsgObj.content : "";

        userChatInput.disabled = false;
        if (sendChatBtn) sendChatBtn.disabled = false;
        if (feedbackBanner) feedbackBanner.classList.add("hidden");

        // ALWAYS SEND MESSAGE TO CHAT IN ALL CASES!
        userChatInput.style.borderColor = "";
        userChatInput.value = "";
        appendMessage("user", text);

        // ALL UNLOCKED HEROES WORD XP EVALUATION & LEVELING
        processAllUnlockedHeroesWordXP(text);

        // Real-time sidebar update for chip colors and daily quest counters (e.g. 43/50 -> 50/50)!
        try { renderHeroWordsSidebar(); } catch(e) {}

        // PER-HERO AUDIO & TYPING REWARDS (Rule 1, Rule 3, Rule 5)
        const activeHeroId = (activeScenario && activeScenario.isHeroScenario && activeScenario.heroId) ? activeScenario.heroId : null;

        if (activeHeroId) {
            const state = getTodayHeroAudioState(activeHeroId);
            let xpGain = 0;

            if (usedMicInCurrentDraft) {
                // Award spoken words to Speaking Skill!
                const spokenWordCount = text.trim().split(/\s+/).filter(w => /[a-zA-Z]/.test(w)).length;
                if (spokenWordCount > 0 && window.speakingEngine) {
                    const addRes = window.speakingEngine.addWords(spokenWordCount);
                    updateSpeakingUI();
                    if (addRes && addRes.leveledUp) {
                        showToast(`🎙️ <b>SPEAKING LEVEL UP!</b> Level <b>${addRes.newLevel}</b> reached! (${addRes.totalWords.toLocaleString()} / 300,000 words spoken)`, "linear-gradient(135deg, #ec4899, #8b5cf6)", "#f472b6");
                    }
                }

                // Rule 1: Mic Input
                state.micCount++;
                xpGain = state.micCount <= 10 ? 100 : (state.micCount <= 30 ? 60 : 20);
                triggerRPGReward("mic", activeHeroId, activeHeroId, xpGain, `🎙️ +${xpGain} XP Hero Mic Bonus! (Use ${state.micCount}/10)`, "linear-gradient(135deg, #ec4899, #be185d)");
            } else {
                // Rule 3: Typed Input
                state.typedCount++;
                xpGain = state.typedCount <= 10 ? 60 : (state.typedCount <= 30 ? 40 : 10);
                triggerRPGReward("text", activeHeroId, activeHeroId, xpGain, `⌨️ +${xpGain} XP Hero Typing Bonus! (Use ${state.typedCount}/10)`, "linear-gradient(135deg, #8b5cf6, #6d28d9)");
            }

            // Rule 5: Full Cycle Combo Check (If last AI message was Listened + Repeated + current message used Mic)
            if (usedMicInCurrentDraft && lastAiMessageContent) {
                const lastMsgId = lastAiMessageContent.trim().toLowerCase();
                if (state.listenedMsgs.includes(lastMsgId) && state.repeatedMsgs.includes(lastMsgId) && !state.comboMsgs.includes(lastMsgId)) {
                    state.comboMsgs.push(lastMsgId);
                    triggerRPGReward("combo", activeHeroId, activeHeroId, 60, `🔥 +60 XP FULL CYCLE COMBO BONUS! (Listen + Repeat + Respond)`, "linear-gradient(135deg, #f59e0b, #d97706)");
                }
            }

            saveTodayHeroAudioState(activeHeroId, state);
            updateHeroDailyBonusTracker();
        }
        usedMicInCurrentDraft = false; // Reset flag for next draft!

        // WRITING SKILL PROGRESSION (Level 1 -> 100, 50 000 words total, 1 word = 1 XP)
        // Earned when typing and sending messages to any hero below Level 100
        const activeHeroObj = activeHeroId ? rpgEngine.heroes.find(h => h.id === activeHeroId) : null;
        if (activeHeroObj && (activeHeroObj.level || 1) < 100) {
            const englishWords = text.trim().split(/\s+/).filter(w => /[a-zA-Z]/.test(w));
            if (englishWords.length > 0) {
                addWritingWords(englishWords.length);
            }
        }

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

            const activeHeroId = (activeScenario && activeScenario.heroId) ? activeScenario.heroId : (activeShowcaseHeroId || (rpgEngine.heroes[0] && rpgEngine.heroes[0].id));
            appendMessage("assistant", aiResponse.text, aiResponse.translation);

            const autoSpeakToggle = document.getElementById("auto-speak-toggle");
            if (autoSpeakToggle && autoSpeakToggle.checked) {
                checkAndAwardListeningBonus(aiResponse.text, activeHeroId);
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
            const isActive = cat === flashcardEngine.currentCategory;

            let hero = null;
            if (typeof rpgEngine !== 'undefined' && rpgEngine.heroes) {
                hero = rpgEngine.heroes.find(h => cat.toLowerCase().includes(h.name.toLowerCase()));
            }

            let heroName = cat;
            let avatarContent = `<i class="fa-solid fa-layer-group"></i>`;
            let accentColor = "#6366f1";

            if (hero) {
                heroName = hero.name;
                accentColor = hero.color || "#6366f1";
                const avatarSrc = hero.faceImage || hero.image;
                if (avatarSrc) {
                    avatarContent = `<img src="${avatarSrc}" class="tab-avatar-img" alt="${hero.name}">`;
                } else {
                    avatarContent = `<i class="fa-solid ${hero.avatar || 'fa-user'}"></i>`;
                }
            } else if (isSrsTab) {
                heroName = "SRS Review";
                accentColor = "#ec4899";
                avatarContent = `<i class="fa-solid fa-brain" style="color:#ec4899;"></i>`;
            } else if (cat.includes("IT")) {
                heroName = "IT & Tech";
                accentColor = "#06b6d4";
                avatarContent = `<i class="fa-solid fa-laptop-code" style="color:#06b6d4;"></i>`;
            }

            btn.className = `hero-avatar-tab-chip ${isActive ? 'active' : ''} ${isSrsTab ? 'srs-tab' : ''}`;
            btn.style.setProperty("--hero-color", accentColor);
            btn.title = cat;
            btn.innerHTML = `
                <div class="avatar-circle-wrapper">
                    ${avatarContent}
                    <span class="badge-count" style="background:${isSrsTab ? '#ec4899' : accentColor};">${badgeCount}</span>
                </div>
                <span class="tab-hero-name">${heroName}</span>
            `;

            btn.addEventListener("click", () => {
                flashcardEngine.currentCategory = cat;
                if (isSrsTab) {
                    flashcardEngine.refreshDueCards();
                } else {
                    flashcardEngine.autoAdvanceBatch();
                }
                flashcardEngine.currentIndex = 0;
                
                const wasFlipped = flashcardEl.classList.contains("flipped");
                const cardBack = flashcardEl.querySelector(".card-back");

                if (wasFlipped) {
                    if (cardBack) cardBack.style.opacity = "0";
                    flashcardEl.classList.remove("flipped");
                    setTimeout(() => {
                        renderFlashcardsUI();
                        if (cardBack) cardBack.style.opacity = "1";
                    }, 350);
                } else {
                    renderFlashcardsUI();
                }
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
                const wasFlipped = flashcardEl.classList.contains("flipped");
                const cardBack = flashcardEl.querySelector(".card-back");

                if (wasFlipped) {
                    if (cardBack) cardBack.style.opacity = "0";
                    flashcardEl.classList.remove("flipped");
                    setTimeout(() => {
                        renderFlashcardsUI();
                        if (cardBack) cardBack.style.opacity = "1";
                    }, 350);
                } else {
                    renderFlashcardsUI();
                }
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
            else if (curReps + 1 === 2) easyDays = 10;
            else easyDays = Math.max(goodDays + 2, Math.round(curInterval * (curEase + 0.15) * 1.3));

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

            const wasFlipped = flashcardEl.classList.contains("flipped");
            const cardBack = flashcardEl.querySelector(".card-back");

            if (wasFlipped) {
                if (cardBack) cardBack.style.opacity = "0";
                flashcardEl.classList.remove("flipped");
                setTimeout(() => {
                    renderFlashcardsUI();
                    if (cardBack) cardBack.style.opacity = "1";
                }, 350);
            } else {
                renderFlashcardsUI();
            }

            let cardXp = 0;
            if (rating === 'hard') cardXp = 4;
            else if (rating === 'good') cardXp = 8;
            else if (rating === 'easy') cardXp = 16;

            if (cardXp > 0) {
                addXP(cardXp);
                triggerRPGReward("card", targetHeroId, targetHeroId, cardXp);
            }
            try { checkAndUpdateVocabLevel(); } catch(e) {}
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
                quizFeedbackBox.innerHTML = `<strong>✅ Correct! (+12 Hero XP)</strong> ${explanation}`;
                addXP(20);
                triggerRPGReward("quiz", currentGrammarTopic ? currentGrammarTopic.heroId : null, currentGrammarTopic ? currentGrammarTopic.heroId : null, 12);
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
            if (rating === 'hard') cardXp = 4;
            else if (rating === 'good') cardXp = 8;
            else if (rating === 'easy') cardXp = 16;

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
                liveSessionTimer.innerHTML = `${mins}:${secs} <small style="font-size:11px; opacity:0.8; font-weight:normal;">(+60 XP / min &bull; ${statusTag})</small>`;
            }

            // Award +60 XP ONLY if user actually spoke during this 60-second window!
            if (liveSessionSeconds > 0 && liveSessionSeconds % 60 === 0) {
                if (hasUserSpokenThisMinute) {
                    hasUserSpokenThisMinute = false; // Reset active flag for next minute
                    const activeHero = rpgEngine.heroes.find(h => h.id === activeLiveHeroId);
                    const heroName = activeHero ? activeHero.name : "Hero";
                    triggerRPGReward("live_voice", activeLiveHeroId, activeLiveHeroId, 60, `🎙️ +60 XP Live Voice Reward! (${heroName} Lvl Up!)`, "linear-gradient(135deg, #ec4899, #8b5cf6)");
                } else {
                    addLiveTranscriptMsg("system", "💡 Silence detected: Speak in English to earn your +60 XP for the minute!");
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

                            // Award spoken words to Speaking Skill!
                            const spokenWordCount = transcriptText.trim().split(/\s+/).filter(w => /[a-zA-Z]/.test(w)).length;
                            if (spokenWordCount > 0 && window.speakingEngine) {
                                const addRes = window.speakingEngine.addWords(spokenWordCount);
                                updateSpeakingUI();
                                if (addRes && addRes.leveledUp) {
                                    showToast(`🎙️ <b>SPEAKING LEVEL UP!</b> Level <b>${addRes.newLevel}</b> reached! (${addRes.totalWords.toLocaleString()} / 300,000 words spoken)`, "linear-gradient(135deg, #ec4899, #8b5cf6)", "#f472b6");
                                }
                            }

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

    // --- SRS REPETITION SCHEDULE & FORECAST MODAL CONTROLLER 📈 ---
    let currentSrsForecastHorizon = 7;
    let currentSrsForecastCategory = "all";
    let selectedSrsForecastDayOffset = null;

    function openSRSForecastModal(defaultCategory = "all") {
        const modal = document.getElementById("modal-srs-forecast");
        if (!modal) return;

        currentSrsForecastCategory = defaultCategory || "all";
        selectedSrsForecastDayOffset = null;

        // Populate deck select dropdown
        const deckSelect = document.getElementById("srs-forecast-deck-select");
        if (deckSelect && typeof flashcardEngine !== 'undefined') {
            deckSelect.innerHTML = '<option value="all">📚 Все колоды и герои</option>';
            const decks = flashcardEngine.decks || {};
            Object.keys(decks).forEach(cat => {
                if (cat === "🧠 Due for SRS Review") return;
                const opt = document.createElement("option");
                opt.value = cat;
                opt.textContent = cat;
                if (cat === currentSrsForecastCategory) opt.selected = true;
                deckSelect.appendChild(opt);
            });
        }

        renderSRSForecastModal(currentSrsForecastHorizon, currentSrsForecastCategory, selectedSrsForecastDayOffset);
        modal.classList.remove("hidden");
    }

    function renderSRSForecastModal(horizon = 7, category = "all", selectedDayOffset = null) {
        if (typeof flashcardEngine === 'undefined') return;
        const forecast = flashcardEngine.getSRSForecast(horizon, category);
        if (!forecast) return;

        // 1. Update KPI Tiles
        const kpiToday = document.getElementById("srs-kpi-due-today");
        const kpiTomorrow = document.getElementById("srs-kpi-due-tomorrow");
        const kpiWeek = document.getElementById("srs-kpi-due-week");
        const kpiMastered = document.getElementById("srs-kpi-mastered");

        if (kpiToday) kpiToday.textContent = forecast.dueNowCount;
        if (kpiTomorrow) kpiTomorrow.textContent = forecast.dueTomorrowCount;
        if (kpiWeek) kpiWeek.textContent = forecast.dueNext7Days;
        if (kpiMastered) kpiMastered.textContent = forecast.masteredCount;

        // 2. Horizon switch buttons
        const horizonButtons = document.querySelectorAll("#srs-horizon-buttons .srs-horizon-btn");
        horizonButtons.forEach(btn => {
            const hVal = parseInt(btn.getAttribute("data-horizon") || "7");
            btn.classList.toggle("active", hVal === horizon);
        });

        // 3. Render Visual Bar Chart
        const chartContainer = document.getElementById("srs-bar-chart-container");
        const chartInfo = document.getElementById("srs-chart-selected-info");

        if (chartContainer) {
            chartContainer.innerHTML = "";
            const maxVal = forecast.maxCountInDay;

            forecast.days.forEach(day => {
                const col = document.createElement("div");
                col.className = `srs-chart-col ${selectedDayOffset === day.dayOffset ? 'selected' : ''}`;
                col.title = `${day.dayName} (${day.formattedDate}): ${day.count} ${day.count === 1 ? 'слово' : 'слов'}`;

                const heightPct = day.count === 0 ? 3 : Math.max(8, Math.round((day.count / maxVal) * 100));

                let barClass = "bar-future";
                if (day.dayOffset === 0) barClass = "bar-today";
                else if (day.dayOffset === 1) barClass = "bar-tomorrow";

                col.innerHTML = `
                    <span class="srs-chart-bar-count ${day.count === 0 ? 'zero' : ''}">${day.count}</span>
                    <div class="srs-chart-bar-track">
                        <div class="srs-chart-bar ${barClass}" style="height: ${heightPct}%;"></div>
                    </div>
                    <div class="srs-chart-label">
                        <span class="srs-chart-day-name ${day.dayOffset === 0 ? 'today-label' : ''}">${day.dayName}</span>
                        <span class="srs-chart-day-date">${day.formattedDate}</span>
                    </div>
                `;

                col.addEventListener("click", () => {
                    if (selectedSrsForecastDayOffset === day.dayOffset) {
                        selectedSrsForecastDayOffset = null;
                    } else {
                        selectedSrsForecastDayOffset = day.dayOffset;
                    }
                    renderSRSForecastModal(currentSrsForecastHorizon, currentSrsForecastCategory, selectedSrsForecastDayOffset);
                });

                chartContainer.appendChild(col);
            });
        }

        if (chartInfo) {
            if (selectedDayOffset !== null) {
                const selDay = forecast.days.find(d => d.dayOffset === selectedDayOffset);
                chartInfo.innerHTML = `Выбран день: <b>${selDay?.dayName} (${selDay?.formattedDate})</b> &bull; ${selDay?.count || 0} слов. <span style="color:var(--accent); cursor:pointer; text-decoration:underline; margin-left:6px;" id="srs-clear-selection-btn">Показать все дни</span>`;
                const clearBtn = document.getElementById("srs-clear-selection-btn");
                if (clearBtn) {
                    clearBtn.addEventListener("click", () => {
                        selectedSrsForecastDayOffset = null;
                        renderSRSForecastModal(currentSrsForecastHorizon, currentSrsForecastCategory, null);
                    });
                }
            } else {
                chartInfo.textContent = "Нажмите на столбец, чтобы увидеть слова конкретного дня";
            }
        }

        // 4. Render Day-by-Day Word Breakdown Accordion
        const accordionContainer = document.getElementById("srs-day-accordion-container");
        if (accordionContainer) {
            accordionContainer.innerHTML = "";

            const daysToRender = selectedDayOffset !== null 
                ? forecast.days.filter(d => d.dayOffset === selectedDayOffset)
                : forecast.days;

            const daysWithCards = daysToRender.filter(d => d.count > 0);

            if (daysWithCards.length === 0) {
                accordionContainer.innerHTML = `
                    <div style="text-align:center; padding:30px 10px; color:var(--text-muted); font-size:13px;">
                        <i class="fa-regular fa-calendar-xmark" style="font-size:28px; margin-bottom:8px; display:block; color:rgba(255,255,255,0.2);"></i>
                        На выбранный период нет запланированных слов к повторению.
                    </div>
                `;
            } else {
                daysWithCards.forEach(day => {
                    const dayCard = document.createElement("div");
                    dayCard.className = `srs-day-card ${selectedDayOffset === day.dayOffset ? 'highlighted' : ''}`;

                    const isToday = day.dayOffset === 0;
                    const isTomorrow = day.dayOffset === 1;

                    let badgeBg = "rgba(6, 182, 212, 0.2)";
                    let badgeColor = "#06b6d4";
                    if (isToday) { badgeBg = "rgba(244, 63, 94, 0.25)"; badgeColor = "#f43f5e"; }
                    else if (isTomorrow) { badgeBg = "rgba(245, 158, 11, 0.25)"; badgeColor = "#f59e0b"; }

                    const headerHtml = `
                        <div class="srs-day-header">
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span style="background:${badgeBg}; color:${badgeColor}; font-weight:800; font-size:11px; padding:2px 8px; border-radius:6px;">
                                    ${day.dayName}
                                </span>
                                <span style="font-size:12px; font-weight:700; color:#fff;">${day.formattedDate}</span>
                            </div>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span style="font-size:12px; color:var(--text-muted);">${day.count} ${day.count === 1 ? 'слово' : 'слов'}</span>
                                <i class="fa-solid fa-chevron-down" style="font-size:10px; color:var(--text-muted);"></i>
                            </div>
                        </div>
                    `;

                    const chipsHtml = `
                        <div class="srs-day-chips-grid">
                            ${day.cards.map(c => {
                                const heroObj = typeof rpgEngine !== 'undefined' && rpgEngine.heroes ? rpgEngine.heroes.find(h => h.id === c.heroId || (c.deckName && c.deckName.includes(h.name))) : null;
                                const heroTag = heroObj ? heroObj.name : (c.deckName ? c.deckName.split(' ')[0] : 'Hero');
                                const heroColor = heroObj ? (heroObj.color || '#6366f1') : '#6366f1';
                                return `
                                    <div class="srs-word-chip" data-word="${c.word.replace(/"/g, '&quot;')}">
                                        <button class="srs-chip-audio-btn" data-word="${c.word.replace(/"/g, '&quot;')}" title="Прослушать произношение">
                                            <i class="fa-solid fa-volume-high"></i>
                                        </button>
                                        <span class="srs-chip-word">${c.word}</span>
                                        <span class="srs-chip-trans">${c.translation || ''}</span>
                                        <span class="srs-chip-meta" style="border-left: 2px solid ${heroColor};">${heroTag} • ${c.interval || 1}дн</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;

                    dayCard.innerHTML = headerHtml + chipsHtml;

                    const headerEl = dayCard.querySelector('.srs-day-header');
                    const chipsEl = dayCard.querySelector('.srs-day-chips-grid');
                    const iconEl = dayCard.querySelector('.fa-chevron-down');
                    if (headerEl && chipsEl && iconEl) {
                        headerEl.addEventListener('click', () => {
                            const isHidden = chipsEl.style.display === 'none';
                            chipsEl.style.display = isHidden ? 'flex' : 'none';
                            iconEl.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(-90deg)';
                        });
                    }

                    dayCard.querySelectorAll('.srs-chip-audio-btn').forEach(btn => {
                        btn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const wordToSpeak = btn.getAttribute('data-word');
                            if (wordToSpeak && typeof flashcardEngine !== 'undefined') {
                                flashcardEngine.speak(wordToSpeak);
                            }
                        });
                    });

                    accordionContainer.appendChild(dayCard);
                });
            }
        }
    }

    // Connect SRS Forecast Event Listeners
    const btnOpenSrsForecastFc = document.getElementById("btn-open-srs-forecast-fc");
    if (btnOpenSrsForecastFc) {
        btnOpenSrsForecastFc.addEventListener("click", () => {
            const defaultDeck = (flashcardEngine && flashcardEngine.currentCategory !== "🧠 Due for SRS Review") 
                ? flashcardEngine.currentCategory 
                : "all";
            openSRSForecastModal(defaultDeck);
        });
    }

    const btnSwitchToSrsForecast = document.getElementById("btn-switch-to-srs-forecast");
    if (btnSwitchToSrsForecast) {
        btnSwitchToSrsForecast.addEventListener("click", () => {
            document.getElementById("hero-word-stats-modal")?.classList.add("hidden");
            openSRSForecastModal("all");
        });
    }

    const closeSrsForecastBtn = document.getElementById("close-srs-forecast-modal-btn");
    if (closeSrsForecastBtn) {
        closeSrsForecastBtn.addEventListener("click", () => {
            document.getElementById("modal-srs-forecast")?.classList.add("hidden");
        });
    }

    const srsHorizonButtons = document.querySelectorAll("#srs-horizon-buttons .srs-horizon-btn");
    srsHorizonButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            currentSrsForecastHorizon = parseInt(btn.getAttribute("data-horizon") || "7");
            renderSRSForecastModal(currentSrsForecastHorizon, currentSrsForecastCategory, selectedSrsForecastDayOffset);
        });
    });

    const srsDeckSelect = document.getElementById("srs-forecast-deck-select");
    if (srsDeckSelect) {
        srsDeckSelect.addEventListener("change", (e) => {
            currentSrsForecastCategory = e.target.value;
            renderSRSForecastModal(currentSrsForecastHorizon, currentSrsForecastCategory, selectedSrsForecastDayOffset);
        });
    }

    const srsBtnStartReviewToday = document.getElementById("srs-btn-start-review-today");
    if (srsBtnStartReviewToday) {
        srsBtnStartReviewToday.addEventListener("click", () => {
            document.getElementById("modal-srs-forecast")?.classList.add("hidden");
            const wordsModal = document.getElementById("modal-hero-words");
            if (wordsModal && flashcardEngine) {
                flashcardEngine.currentCategory = "🧠 Due for SRS Review";
                flashcardEngine.batchIndex = 0;
                flashcardEngine.currentIndex = 0;
                flashcardEngine.refreshDueCards();
                renderFlashcardsUI();
                wordsModal.classList.remove("hidden");
            }
        });
    }

    // =========================================================================
    // --- CEFR A1 STORY CAMPAIGN CONTROLLER: THE OATH OF SEVEN WINDS 📜 ---
    // =========================================================================
    let activeStoryActId = 1;
    let activeStoryChapterId = null;
    let areStoryTranslationsVisible = false;
    let completedStoryChapters = [];

    try {
        completedStoryChapters = JSON.parse(localStorage.getItem('english_rpg_completed_story_chapters') || '[]');
    } catch (e) {
        completedStoryChapters = [];
    }

    function saveCompletedStoryChapters() {
        try {
            localStorage.setItem('english_rpg_completed_story_chapters', JSON.stringify(completedStoryChapters));
        } catch (e) {
            console.error("Failed to save completed story chapters", e);
        }
    }

    // Check if player has unlocked the final 10th hero (Eldrin)
    function checkStoryUnlockEligibility() {
        const totalHeroes = (rpgEngine && rpgEngine.heroes) ? rpgEngine.heroes : [];
        const eldrin = totalHeroes.find(h => h.id === 'eldrin');
        const isEldrinUnlocked = !!(eldrin && eldrin.unlocked);

        const unlockedHeroes = totalHeroes.filter(h => h.unlocked);
        const unlockedCount = unlockedHeroes.length;
        const totalCount = totalHeroes.length || 10;

        return {
            eligible: isEldrinUnlocked,
            isEldrinUnlocked,
            unlockedCount,
            totalCount
        };
    }

    // Update Floating Grimoire visibility on the stage
    function updateFloatingGrimoireVisibility() {
        const grimoireEl = document.getElementById("floating-story-grimoire");
        if (!grimoireEl) return;
        const status = checkStoryUnlockEligibility();
        if (status.eligible) {
            grimoireEl.classList.remove("hidden");
        } else {
            grimoireEl.classList.add("hidden");
        }
    }

    // Fullscreen Chroma Key Book Opening Cutscene Controller 📜🎬
    let isBookCutscenePlaying = false;
    let bookChromaAnimationReq = null;

    function playBookOpeningCutscene(onCompleteCallback) {
        const overlay = document.getElementById("book-opening-cutscene-overlay");
        const video = document.getElementById("book-cutscene-video");
        const canvas = document.getElementById("book-chroma-canvas");
        const flare = document.getElementById("book-cutscene-flare");
        const skipBtn = document.getElementById("skip-book-cutscene-btn");

        if (!overlay || !video || !canvas) {
            if (typeof onCompleteCallback === "function") onCompleteCallback();
            return;
        }

        if (isBookCutscenePlaying) return;
        isBookCutscenePlaying = true;

        overlay.classList.remove("hidden", "fade-out");
        canvas.classList.remove("dissolving");
        if (flare) flare.classList.remove("active");

        const ctx = canvas.getContext("2d", { willReadFrequently: true });

        let hasCompleted = false;
        const finishCutscene = () => {
            if (hasCompleted) return;
            hasCompleted = true;
            isBookCutscenePlaying = false;

            if (bookChromaAnimationReq) {
                cancelAnimationFrame(bookChromaAnimationReq);
                bookChromaAnimationReq = null;
            }

            // Dissolve & Flash Flare
            if (flare) flare.classList.add("active");
            canvas.classList.add("dissolving");

            setTimeout(() => {
                overlay.classList.add("fade-out");
                video.pause();
                setTimeout(() => {
                    overlay.classList.add("hidden");
                    overlay.classList.remove("fade-out");
                    if (typeof onCompleteCallback === "function") {
                        onCompleteCallback();
                    }
                }, 500);
            }, 600);
        };

        if (skipBtn) {
            skipBtn.onclick = finishCutscene;
        }

        video.currentTime = 0;
        video.play().then(() => {
            canvas.width = video.videoWidth || 960;
            canvas.height = video.videoHeight || 540;

            function processChromaFrame() {
                if (video.paused || video.ended || hasCompleted) {
                    if (video.ended) finishCutscene();
                    return;
                }

                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = frame.data;
                const len = data.length / 4;

                for (let i = 0; i < len; i++) {
                    const r = data[i * 4 + 0];
                    const g = data[i * 4 + 1];
                    const b = data[i * 4 + 2];

                    // Chroma key: Remove green screen background with smooth alpha blending
                    if (g > 85 && g > r * 1.25 && g > b * 1.25) {
                        data[i * 4 + 3] = 0; // Fully transparent
                    } else if (g > 70 && g > r * 1.15 && g > b * 1.15) {
                        const alpha = Math.max(0, 255 - (g - 70) * 12);
                        data[i * 4 + 3] = Math.min(data[i * 4 + 3], alpha);
                    }
                }

                ctx.putImageData(frame, 0, 0);
                bookChromaAnimationReq = requestAnimationFrame(processChromaFrame);
            }

            bookChromaAnimationReq = requestAnimationFrame(processChromaFrame);
        }).catch(err => {
            console.warn("Book cutscene video playback failed, proceeding directly", err);
            finishCutscene();
        });

        video.onended = finishCutscene;
    }

    // Check if specific chapter requirements are satisfied
    function checkChapterUnlockEligibility(chapter) {
        if (!chapter) return { eligible: false, reasons: ["Chapter not found"] };

        const globalStatus = checkStoryUnlockEligibility();
        const reasons = [];

        if (!globalStatus.eligible) {
            reasons.push(`Требуется разблокировать 10-го героя: Архимага Эльдрина! (Открыто: ${globalStatus.unlockedCount}/${globalStatus.totalCount})`);
        }

        if (chapter.reqHeroLevels && rpgEngine && rpgEngine.heroes) {
            for (const [heroId, reqLvl] of Object.entries(chapter.reqHeroLevels)) {
                const hero = rpgEngine.heroes.find(h => h.id === heroId);
                const curLvl = hero ? (hero.level || 1) : 0;
                const isHeroUnlocked = hero && hero.unlocked;

                if (!isHeroUnlocked) {
                    reasons.push(`${hero ? hero.name : heroId} не разблокирован`);
                } else if (curLvl < reqLvl) {
                    reasons.push(`${hero.name} ур. ${curLvl}/${reqLvl}`);
                }
            }
        }

        return {
            eligible: reasons.length === 0,
            reasons
        };
    }

    function openHeroStoryModal(initialHero, skipAnimation = false) {
        const modal = document.getElementById("modal-hero-story");
        if (!modal) return;

        const openModalCore = () => {
            showStoryHubView();
            modal.classList.remove("hidden");
        };

        if (!skipAnimation) {
            playBookOpeningCutscene(openModalCore);
        } else {
            openModalCore();
        }
    }

    function showStoryHubView() {
        const hubView = document.getElementById("story-view-hub");
        const readerView = document.getElementById("story-view-reader");
        if (hubView) hubView.classList.remove("hidden");
        if (readerView) readerView.classList.add("hidden");

        renderStoryHub();
    }

    function renderStoryHub() {
        const acts = (typeof STORY_ACTS !== 'undefined') ? STORY_ACTS : [];
        const chapters = (typeof STORY_CHAPTERS !== 'undefined') ? STORY_CHAPTERS : [];
        const globalStatus = checkStoryUnlockEligibility();

        // Update Global Completion Pill
        const pill = document.getElementById("story-global-completion-pill");
        if (pill) {
            const completedCount = completedStoryChapters.length;
            const totalChapters = chapters.length || 40;
            pill.innerHTML = `⭐ ${completedCount} / ${totalChapters} Пройдено`;
        }

        // Global Unlock Requirement Banner
        const banner = document.getElementById("story-unlock-requirement-banner");
        const statusText = document.getElementById("story-unlock-heroes-status-text");
        const badgesContainer = document.getElementById("story-unlock-progress-badges");

        if (banner) {
            if (!globalStatus.eligible) {
                banner.style.display = "block";
                if (statusText) {
                    statusText.innerHTML = `Сюжетная кампания открывается после разблокировки 10-го героя — <b>Архимага Эльдрина</b>!<br><span style="color:#f87171; font-weight:700;">Открыто героев: ${globalStatus.unlockedCount}/${globalStatus.totalCount} • Эльдрин: ${globalStatus.isEldrinUnlocked ? '✅ Открыт' : '🔒 Заблокирован'}</span>`;
                }
                if (badgesContainer && rpgEngine && rpgEngine.heroes) {
                    badgesContainer.innerHTML = rpgEngine.heroes.map(h => {
                        return `<span class="badge" style="font-size:10px; background:${h.unlocked ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}; color:${h.unlocked ? '#6ee7b7' : '#fca5a5'}; border:1px solid ${h.unlocked ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)'};">
                            ${h.name}: ${h.unlocked ? '✅' : '🔒'}
                        </span>`;
                    }).join("");
                }
            } else {
                banner.style.display = "none";
            }
        }

        // Render Act Tabs
        const tabsContainer = document.getElementById("story-acts-nav-bar");
        if (tabsContainer && acts.length > 0) {
            tabsContainer.innerHTML = acts.map(act => {
                const isActive = act.id === activeStoryActId;
                const actChapters = chapters.filter(c => c.actId === act.id);
                const completedInAct = actChapters.filter(c => completedStoryChapters.includes(c.id)).length;
                return `
                    <button class="story-act-tab-btn ${isActive ? 'active' : ''}" data-act-id="${act.id}">
                        <i class="fa-solid ${act.icon}" style="color:${act.color};"></i>
                        <span>${act.title.split(':')[0]}</span>
                        <span class="badge" style="font-size:10px; padding:2px 6px; background:rgba(0,0,0,0.3);">${completedInAct}/${actChapters.length}</span>
                    </button>
                `;
            }).join("");

            tabsContainer.querySelectorAll(".story-act-tab-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    activeStoryActId = parseInt(btn.getAttribute("data-act-id"), 10);
                    renderStoryHub();
                });
            });
        }

        // Render Chapters for current Act
        const chaptersContainer = document.getElementById("story-chapters-grid-container");
        if (chaptersContainer && chapters.length > 0) {
            const currentActChapters = chapters.filter(c => c.actId === activeStoryActId);

            chaptersContainer.innerHTML = currentActChapters.map(ch => {
                const isCompleted = completedStoryChapters.includes(ch.id);
                const check = checkChapterUnlockEligibility(ch);
                const isLocked = !check.eligible;

                // Hero Badges
                const heroBadges = (ch.involvedHeroes || []).map(heroId => {
                    const hero = (rpgEngine && rpgEngine.heroes) ? rpgEngine.heroes.find(h => h.id === heroId) : null;
                    const reqLvl = (ch.reqHeroLevels && ch.reqHeroLevels[heroId]) ? ch.reqHeroLevels[heroId] : 20;
                    const curLvl = hero ? (hero.level || 1) : 0;
                    const isOk = hero && hero.unlocked && curLvl >= reqLvl;

                    return `
                        <div class="story-hero-pill ${isOk ? 'req-ok' : 'req-fail'}" title="${hero ? hero.name : heroId}: Lv.${curLvl}/${reqLvl}">
                            <i class="fa-solid ${hero ? hero.avatar : 'fa-user'}"></i>
                            <span>${hero ? hero.name : heroId}</span>
                            <span class="font-mono">Lv.${reqLvl}</span>
                        </div>
                    `;
                }).join("");

                return `
                    <div class="story-chapter-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}" data-chapter-id="${ch.id}">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                                <span class="badge" style="background:rgba(245,158,11,0.15); color:#fbbf24; border:1px solid rgba(245,158,11,0.3); font-size:11px; font-weight:800;">
                                    ГЛАВА ${ch.number}
                                </span>
                                ${isLocked ? '<i class="fa-solid fa-lock" style="color:#ef4444;" title="Заблокировано"></i>' : ''}
                            </div>
                            <h4 style="margin:0 0 4px 0; font-size:16px; font-weight:800; color:#f8fafc;">
                                ${ch.titleEn}
                            </h4>
                            <div style="font-size:12px; color:#94a3b8; font-style:italic; margin-bottom:12px;">
                                ${ch.titleRu}
                            </div>
                            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px;">
                                ${heroBadges}
                            </div>
                        </div>

                        <div>
                            ${isLocked ? `
                                <div style="font-size:11px; color:#fca5a5; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.2); border-radius:8px; padding:6px 8px; margin-bottom:10px;">
                                    🔒 ${check.reasons.join(", ")}
                                </div>
                            ` : ''}
                            <button class="btn btn-sm ${isCompleted ? 'btn-outline' : 'btn-primary'} btn-open-chapter-reader" style="width:100%; justify-content:center;" data-chapter-id="${ch.id}">
                                <i class="fa-solid ${isCompleted ? 'fa-book-open' : 'fa-play'}"></i>
                                ${isCompleted ? 'Перечитать' : (isLocked ? 'Требования' : 'Читать главу')}
                            </button>
                        </div>
                    </div>
                `;
            }).join("");

            chaptersContainer.querySelectorAll(".btn-open-chapter-reader").forEach(btn => {
                btn.addEventListener("click", () => {
                    const chId = btn.getAttribute("data-chapter-id");
                    const chapter = chapters.find(c => c.id === chId);
                    if (chapter) {
                        openStoryChapterReader(chapter);
                    }
                });
            });
        }
    }

    function openStoryChapterReader(rawChapter) {
        if (!rawChapter) return;
        
        // Resolve expanded chapter if available
        let chapter = rawChapter;
        if (typeof STORY_ACT1_EXPANDED !== 'undefined' && Array.isArray(STORY_ACT1_EXPANDED)) {
            const exp = STORY_ACT1_EXPANDED.find(e => e.id === rawChapter.id || e.number === rawChapter.number);
            if (exp) chapter = exp;
        }

        activeStoryChapterId = chapter.id;

        const hubView = document.getElementById("story-view-hub");
        const readerView = document.getElementById("story-view-reader");
        if (hubView) hubView.classList.add("hidden");
        if (readerView) readerView.classList.remove("hidden");

        const titleEl = document.getElementById("reader-chapter-badge-title");
        if (titleEl) {
            titleEl.textContent = `Chapter ${chapter.number}: ${chapter.titleEn} (${chapter.titleRu})`;
        }

        // Calculate Chapter Word Count
        let chapterWordCount = 0;
        if (chapter.paragraphs) {
            chapter.paragraphs.forEach(p => {
                const words = (p.en || '').match(/[a-zA-Z0-9'’-]+/g);
                if (words) chapterWordCount += words.length;
            });
        }

        // Update Visual Fluency Panel UI
        function updateVisualFluencyUi() {
            if (!window.visualFluency) return;
            const progress = window.visualFluency.getProgressData();
            
            const rankBadge = document.getElementById("vf-player-rank-badge");
            const xpText = document.getElementById("vf-player-xp-text");
            const rewardText = document.getElementById("vf-chapter-reward-text");
            const progressBar = document.getElementById("vf-xp-progress-bar");

            if (rankBadge) {
                rankBadge.textContent = `Lv. ${progress.level} • ${progress.rank.icon} ${progress.rank.title}`;
                rankBadge.style.color = progress.rank.color;
                rankBadge.style.borderColor = progress.rank.color;
            }
            if (xpText) {
                xpText.textContent = `${progress.xp.toLocaleString()} / ${progress.totalMaxXp.toLocaleString()} XP (${progress.percent}%)`;
            }
            if (rewardText) {
                const isAlreadyDone = (completedStoryChapters.includes(chapter.id) || (window.visualFluency.completedChapterIds && window.visualFluency.completedChapterIds.includes(chapter.id)));
                if (isAlreadyDone) {
                    rewardText.innerHTML = `<span style="color:#64748b;">✅ Пройдено (${chapterWordCount} слов)</span>`;
                } else {
                    rewardText.innerHTML = `<span style="color:#34d399; font-weight:700;">+${chapterWordCount} XP за 1-е прочтение</span>`;
                }
            }
            if (progressBar) {
                progressBar.style.width = `${progress.percent}%`;
            }

            // Sync fading buttons
            document.querySelectorAll(".vf-fading-btn").forEach(btn => {
                const lvl = parseInt(btn.getAttribute("data-lvl"), 10);
                if (lvl === window.visualFluency.fadingLevel) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });
        }
        updateVisualFluencyUi();

        // Render Hero Avatars
        const heroesStrip = document.getElementById("reader-involved-heroes-strip");
        if (heroesStrip && chapter.involvedHeroes && rpgEngine && rpgEngine.heroes) {
            heroesStrip.innerHTML = chapter.involvedHeroes.map(heroId => {
                const hero = rpgEngine.heroes.find(h => h.id === heroId);
                if (!hero) return '';
                return `
                    <div style="width:28px; height:28px; border-radius:50%; overflow:hidden; border:1.5px solid ${hero.color || 'var(--primary)'}; background:#0f172a; display:flex; align-items:center; justify-content:center;" title="${hero.name}">
                        ${(hero.faceImage || hero.image) ? `<img src="${hero.faceImage || hero.image}" alt="${hero.name}" style="width:100%; height:100%; object-fit:cover;">` : `<i class="fa-solid ${hero.avatar}" style="font-size:12px; color:${hero.color};"></i>`}
                    </div>
                `;
            }).join("");
        }

        // Render Scene Composition & Location Illustration Banner
        const illustrationBanner = document.getElementById("story-reader-illustration-banner");
        if (illustrationBanner) {
            const bgImg = chapter.backgroundImg || 'images/backgrounds/bg_forest.jpg';
            const locEn = chapter.locationEn || 'The Ancient Valley';
            const locRu = chapter.locationRu || 'Древняя Долина';

            const originalPortraitsMap = (typeof HERO_ORIGINAL_PORTRAITS !== 'undefined') ? HERO_ORIGINAL_PORTRAITS : {};

            const charactersStageHtml = (chapter.involvedHeroes || []).map(heroId => {
                const hero = (rpgEngine && rpgEngine.heroes) ? rpgEngine.heroes.find(h => h.id === heroId) : null;
                const heroName = hero ? hero.name : heroId;
                const originalArt = originalPortraitsMap[heroId] || (hero ? (hero.faceImage || hero.image) : 'images/valerius_face.png');
                const heroColor = hero ? (hero.color || '#f59e0b') : '#f59e0b';

                return `
                    <div class="story-stage-char-card" title="${heroName}">
                        <img src="${originalArt}" alt="${heroName}" class="story-stage-char-portrait" style="border-color:${heroColor};" onerror="this.src='${hero ? (hero.faceImage || hero.image) : 'images/valerius_face.png'}';">
                        <span class="story-stage-char-name" style="border-color:${heroColor};">
                            <i class="fa-solid ${hero ? hero.avatar : 'fa-user'}" style="color:${heroColor}; margin-right:4px;"></i>${heroName}
                        </span>
                    </div>
                `;
            }).join("");

            if (chapter.sceneIllustrationImg) {
                illustrationBanner.style.backgroundImage = `url('${chapter.sceneIllustrationImg}')`;
                illustrationBanner.style.minHeight = '320px';
                illustrationBanner.innerHTML = `
                    <div class="story-scene-bg-overlay" style="background: linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.05) 50%, rgba(15,23,42,0.95) 100%);"></div>
                    <div class="story-scene-header-info">
                        <div class="story-location-badge">
                            <i class="fa-solid fa-compass" style="color:#fbbf24;"></i>
                            <span>📍 ${locEn} <span style="opacity:0.75; font-weight:500;">(${locRu})</span></span>
                        </div>
                        <span class="badge" style="background:rgba(0,0,0,0.65); color:#fbbf24; font-size:11px; border:1px solid rgba(245,158,11,0.4); backdrop-filter:blur(8px);">
                            🎨 Иллюстрация сцены • Акт ${chapter.actId || 1}
                        </span>
                    </div>
                    <div class="story-scene-characters-stage" style="justify-content: flex-end; gap: 8px;">
                        ${(chapter.involvedHeroes || []).map(heroId => {
                            const hero = (rpgEngine && rpgEngine.heroes) ? rpgEngine.heroes.find(h => h.id === heroId) : null;
                            const heroName = hero ? hero.name : heroId;
                            const heroColor = hero ? (hero.color || '#f59e0b') : '#f59e0b';
                            const origArt = originalPortraitsMap[heroId] || (hero ? (hero.faceImage || hero.image) : '');
                            return `
                                <div style="display:flex; align-items:center; gap:6px; background:rgba(15,23,42,0.85); backdrop-filter:blur(10px); border:1px solid ${heroColor}; padding:3px 8px; border-radius:14px; box-shadow:0 4px 15px rgba(0,0,0,0.6);">
                                    <img src="${origArt}" alt="${heroName}" style="width:24px; height:24px; border-radius:50%; object-fit:cover;">
                                    <span style="font-size:11px; font-weight:700; color:#fff;">${heroName}</span>
                                </div>
                            `;
                        }).join("")}
                    </div>
                `;
            } else {
                illustrationBanner.style.backgroundImage = `url('${bgImg}')`;
                illustrationBanner.style.minHeight = '240px';
                illustrationBanner.innerHTML = `
                    <div class="story-scene-bg-overlay"></div>
                    <div class="story-scene-header-info">
                        <div class="story-location-badge">
                            <i class="fa-solid fa-compass" style="color:#fbbf24;"></i>
                            <span>📍 ${locEn} <span style="opacity:0.75; font-weight:500;">(${locRu})</span></span>
                        </div>
                        <span class="badge" style="background:rgba(0,0,0,0.6); color:#f8fafc; font-size:11px; border:1px solid rgba(255,255,255,0.2); backdrop-filter:blur(8px);">
                            Акт ${chapter.actId || 1} • Глава ${chapter.number}
                        </span>
                    </div>
                    <div class="story-scene-characters-stage">
                        ${charactersStageHtml}
                    </div>
                `;
            }
        }

        // Render Paragraphs with Visual Fluency Chunking
        function renderParagraphsContent() {
            const paragraphsList = document.getElementById("story-reader-paragraphs-list");
            if (!paragraphsList || !chapter.paragraphs) return;

            const fadingLvl = window.visualFluency ? window.visualFluency.fadingLevel : 1;
            let globalChunkCounter = 0;

            paragraphsList.innerHTML = chapter.paragraphs.map((p, idx) => {
                const speakerHeroId = (chapter.involvedHeroes && chapter.involvedHeroes[idx % chapter.involvedHeroes.length]) || 'valerius';
                
                let chunkedEnHtml = '';
                if (window.visualFluency) {
                    const sentenceChunks = window.visualFluency.parseTextIntoChunks(p.en);
                    chunkedEnHtml = sentenceChunks.map(chunks => {
                        return chunks.map(c => {
                            const html = window.visualFluency.renderChunkHtml(c, fadingLvl, globalChunkCounter);
                            if (!c.isConjunction && !c.isClauseBreak) globalChunkCounter++;
                            return html;
                        }).join(" ");
                    }).join("<br>");
                } else {
                    chunkedEnHtml = p.en;
                }

                return `
                    <div class="story-paragraph-card" data-paragraph-idx="${idx}">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                            <div class="story-paragraph-en story-paragraph-en-chunked">
                                <span style="color:var(--warning); font-weight:800; margin-right:6px; user-select:none;">#${idx + 1}</span> ${chunkedEnHtml}
                            </div>
                            <button class="btn btn-sm btn-outline story-listen-p-btn" style="padding:4px 10px; font-size:11px; flex-shrink:0;" data-text="${p.en.replace(/"/g, '&quot;')}" data-speaker="${speakerHeroId}">
                                <i class="fa-solid fa-volume-high"></i> Listen
                            </button>
                        </div>
                        <div class="story-paragraph-ru ${areStoryTranslationsVisible ? '' : 'hidden'}">
                            💡 ${p.ru}
                        </div>
                    </div>
                `;
            }).join("");

            // Bind Listen buttons
            paragraphsList.querySelectorAll(".story-listen-p-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const textToRead = btn.getAttribute("data-text");
                    const speaker = btn.getAttribute("data-speaker") || 'valerius';
                    if (textToRead && typeof playTextKokoroAudio === "function") {
                        playTextKokoroAudio(textToRead, speaker);
                    }
                });
            });
        }
        renderParagraphsContent();

        // Bind Fading Level Buttons
        document.querySelectorAll(".vf-fading-btn").forEach(btn => {
            btn.onclick = () => {
                const lvl = parseInt(btn.getAttribute("data-lvl"), 10);
                if (window.visualFluency) {
                    window.visualFluency.fadingLevel = lvl;
                    window.visualFluency.saveState();
                }
                updateVisualFluencyUi();
                renderParagraphsContent();
            };
        });

        // Setup Visual Pacer Engine
        let pacerIntervalTimer = null;
        let currentPacerChunkIdx = 0;
        const pacerToggleBtn = document.getElementById("vf-pacer-toggle-btn");
        const pacerIcon = document.getElementById("vf-pacer-icon");
        const pacerBtnText = document.getElementById("vf-pacer-btn-text");
        const wpmSelect = document.getElementById("vf-pacer-wpm-select");

        function stopPacer() {
            if (pacerIntervalTimer) clearInterval(pacerIntervalTimer);
            pacerIntervalTimer = null;
            if (pacerIcon) pacerIcon.textContent = "▶";
            if (pacerBtnText) pacerBtnText.textContent = "Ритм-тренер";
            document.querySelectorAll(".vf-chunk").forEach(c => c.classList.remove("vf-active-pacer"));
        }

        function startPacer() {
            const allChunks = Array.from(document.querySelectorAll(".vf-chunk"));
            if (!allChunks.length) return;

            currentPacerChunkIdx = 0;
            if (pacerIcon) pacerIcon.textContent = "⏸";
            if (pacerBtnText) pacerBtnText.textContent = "Пауза";

            const wpm = parseInt(wpmSelect ? wpmSelect.value : "150", 10);
            // Rough ms per chunk: (60,000 / wpm) * avg words per chunk (~2.2)
            const msInterval = Math.max(250, Math.floor((60000 / wpm) * 2.0));

            function pacerStep() {
                allChunks.forEach(c => c.classList.remove("vf-active-pacer"));
                if (currentPacerChunkIdx >= allChunks.length) {
                    stopPacer();
                    return;
                }
                const activeChunk = allChunks[currentPacerChunkIdx];
                if (activeChunk) {
                    activeChunk.classList.add("vf-active-pacer");
                    activeChunk.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                }
                currentPacerChunkIdx++;
            }

            pacerStep();
            pacerIntervalTimer = setInterval(pacerStep, msInterval);
        }

        if (pacerToggleBtn) {
            pacerToggleBtn.onclick = () => {
                if (pacerIntervalTimer) {
                    stopPacer();
                } else {
                    startPacer();
                }
            };
        }

        // Render Comprehension Quiz
        renderStoryComprehensionQuiz(chapter);

        // Next Chapter button setup
        const chapters = (typeof STORY_CHAPTERS !== 'undefined') ? STORY_CHAPTERS : [];
        const nextChapter = chapters.find(c => c.number === chapter.number + 1);
        const nextBtn = document.getElementById("btn-story-next-chapter");
        if (nextBtn) {
            if (nextChapter && completedStoryChapters.includes(chapter.id)) {
                nextBtn.classList.remove("hidden");
                nextBtn.onclick = () => openStoryChapterReader(nextChapter);
            } else {
                nextBtn.classList.add("hidden");
            }
        }

        // Scroll to top
        const scrollBody = document.getElementById("story-reader-scrollable-body");
        if (scrollBody) scrollBody.scrollTop = 0;
    }

    function renderStoryComprehensionQuiz(chapter) {
        const quiz = chapter.quiz || {
            question: "Did the heroes work together in this chapter?",
            options: ["Yes, they worked together", "No, they did nothing", "They went away"],
            correctIndex: 0,
            rewardXp: 100
        };

        const questionEl = document.getElementById("story-quiz-question-text");
        const rewardBadge = document.getElementById("story-quiz-reward-badge");
        const optionsContainer = document.getElementById("story-quiz-options-container");
        const feedbackBox = document.getElementById("story-quiz-feedback-box");

        if (questionEl) questionEl.textContent = quiz.question;
        if (rewardBadge) rewardBadge.textContent = `⭐ +${quiz.rewardXp || 100} XP`;
        if (feedbackBox) feedbackBox.style.display = "none";

        const isAlreadyCompleted = completedStoryChapters.includes(chapter.id);

        if (optionsContainer && quiz.options) {
            optionsContainer.innerHTML = quiz.options.map((opt, idx) => {
                return `
                    <button class="story-quiz-opt-btn" data-opt-idx="${idx}">
                        <span style="width:24px; height:24px; border-radius:50%; background:rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800;">
                            ${String.fromCharCode(65 + idx)}
                        </span>
                        <span>${opt}</span>
                    </button>
                `;
            }).join("");

            optionsContainer.querySelectorAll(".story-quiz-opt-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const chosenIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
                    handleStoryQuizSubmission(chapter, quiz, chosenIdx, optionsContainer, feedbackBox);
                });
            });
        }
    }

    function handleStoryQuizSubmission(chapter, quiz, chosenIdx, optionsContainer, feedbackBox) {
        const isCorrect = chosenIdx === quiz.correctIndex;
        const buttons = optionsContainer.querySelectorAll(".story-quiz-opt-btn");

        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === quiz.correctIndex) {
                btn.classList.add("correct");
            } else if (idx === chosenIdx && !isCorrect) {
                btn.classList.add("wrong");
            }
        });

        if (feedbackBox) {
            feedbackBox.style.display = "block";
            if (isCorrect) {
                feedbackBox.style.background = "rgba(16,185,129,0.2)";
                // Calculate chapter word count for Visual Fluency
                let chWordCount = 0;
                if (chapter.paragraphs) {
                    chapter.paragraphs.forEach(p => {
                        const words = (p.en || '').match(/[a-zA-Z0-9'’-]+/g);
                        if (words) chWordCount += words.length;
                    });
                }

                let vfMsg = '';
                if (window.visualFluency) {
                    const vfResult = window.visualFluency.addChapterWordXp(chapter.id, chWordCount);
                    if (vfResult && vfResult.awarded) {
                        vfMsg = `<br><span style="color:#60a5fa; font-weight:700;">⚡ Visual Fluency: +${vfResult.xpGained} XP!</span> (Всего: ${vfResult.totalXp.toLocaleString()} XP)`;
                        if (vfResult.leveledUp) {
                            vfMsg += ` 🎉 <b>LEVEL UP! Уровень ${vfResult.newLevel} [${vfResult.rank.icon} ${vfResult.rank.title}]!</b>`;
                        }
                    }
                    try { updateReadingUI(); } catch(e) {}
                }

                feedbackBox.innerHTML = `🎉 <b>Верно!</b> Глава успешно пройдена! Получено +${quiz.rewardXp} XP для участников отряда.${vfMsg}`;

                if (!completedStoryChapters.includes(chapter.id)) {
                    completedStoryChapters.push(chapter.id);
                    saveCompletedStoryChapters();

                    // Award XP to involved heroes
                    if (chapter.involvedHeroes && rpgEngine && rpgEngine.heroes) {
                        chapter.involvedHeroes.forEach(hId => {
                            const hero = rpgEngine.heroes.find(h => h.id === hId);
                            if (hero && typeof rpgEngine.gainHeroXp === "function") {
                                rpgEngine.gainHeroXp(hero, quiz.rewardXp || 100);
                            }
                        });
                    }

                    // Save overall game state
                    if (typeof rpgEngine !== 'undefined' && typeof rpgEngine.saveToStorage === 'function') {
                        rpgEngine.saveToStorage();
                    }
                    if (typeof updateHeroUI === 'function') {
                        updateHeroUI();
                    }
                }

                // Show Next Chapter button if available
                const chapters = (typeof STORY_CHAPTERS !== 'undefined') ? STORY_CHAPTERS : [];
                const nextChapter = chapters.find(c => c.number === chapter.number + 1);
                const nextBtn = document.getElementById("btn-story-next-chapter");
                if (nextBtn && nextChapter) {
                    nextBtn.classList.remove("hidden");
                    nextBtn.onclick = () => openStoryChapterReader(nextChapter);
                }

            } else {
                feedbackBox.style.background = "rgba(239,68,68,0.2)";
                feedbackBox.style.border = "1px solid #ef4444";
                feedbackBox.style.color = "#fca5a5";
                feedbackBox.innerHTML = `❌ <b>Не совсем так.</b> Попробуйте перечитать абзацы выше и проверить ответ снова!`;
                
                // Allow retry
                setTimeout(() => {
                    buttons.forEach(btn => {
                        btn.disabled = false;
                        btn.classList.remove("wrong", "correct");
                    });
                }, 1800);
            }
        }
    }

    // Story Campaign Listeners
    const btnBackToHub = document.getElementById("btn-back-to-story-hub");
    if (btnBackToHub) {
        btnBackToHub.addEventListener("click", showStoryHubView);
    }

    const closeStoryModalBtn = document.getElementById("close-hero-story-modal-btn");
    if (closeStoryModalBtn) {
        closeStoryModalBtn.addEventListener("click", () => {
            const modal = document.getElementById("modal-hero-story");
            if (modal) modal.classList.add("hidden");
        });
    }

    const toggleStoryTransBtn = document.getElementById("toggle-all-story-translations-btn");
    if (toggleStoryTransBtn) {
        toggleStoryTransBtn.addEventListener("click", () => {
            areStoryTranslationsVisible = !areStoryTranslationsVisible;
            const container = document.getElementById("story-reader-paragraphs-list");
            const toggleTransText = document.getElementById("toggle-story-trans-text");
            if (container) {
                container.querySelectorAll(".story-paragraph-ru").forEach(el => {
                    if (areStoryTranslationsVisible) {
                        el.classList.remove("hidden");
                    } else {
                        el.classList.add("hidden");
                    }
                });
            }
            if (toggleTransText) {
                toggleTransText.textContent = areStoryTranslationsVisible ? "Скрыть перевод" : "Показать перевод";
            }
        });
    }

    const readFullStoryBtn = document.getElementById("read-full-story-audio-btn");
    if (readFullStoryBtn) {
        readFullStoryBtn.addEventListener("click", () => {
            const chapters = (typeof STORY_CHAPTERS !== 'undefined') ? STORY_CHAPTERS : [];
            const chapter = chapters.find(c => c.id === activeStoryChapterId);
            if (chapter && chapter.paragraphs) {
                const fullText = chapter.paragraphs.map(p => p.en).join(" ");
                const speaker = (chapter.involvedHeroes && chapter.involvedHeroes[0]) || 'valerius';
                if (typeof playTextKokoroAudio === "function") {
                    playTextKokoroAudio(fullText, speaker);
                }
            }
        });
    }


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

            const maxLvlCap = (typeof HERO_MAX_LEVEL !== 'undefined') ? HERO_MAX_LEVEL : 100;
            const unlockMsg = hero.unlocked 
                ? (hero.level >= maxLvlCap 
                    ? `<span style="color:#ef4444; font-weight:700;"><i class="fa-solid fa-crown"></i> Max Level ${maxLvlCap} Reached (XP Cap)</span>` 
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
                            <h4>${hero.name} <small class="font-mono" style="color:var(--primary); font-weight:700;">Lvl ${hero.level} / ${maxLvlCap}</small></h4>
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
            const maxLvlCap = (typeof HERO_MAX_LEVEL !== 'undefined') ? HERO_MAX_LEVEL : 100;
            affinityModeBadge.textContent = `✍️ Written Text Mode (Level 1–${maxLvlCap})`;
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

    if (aiProviderSelect) {
        aiProviderSelect.value = aiService.provider;
        aiProviderSelect.addEventListener("change", () => {
            if (aiProviderSelect.value === "gemini") {
                if (modelNameInput && (modelNameInput.value.includes(":") || modelNameInput.value.includes("qwen") || modelNameInput.value.includes("llama") || modelNameInput.value.includes("1.5") || modelNameInput.value.includes("3.7"))) {
                    modelNameInput.value = "gemini-3.5-flash-lite";
                }
            }
        });
    }
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

    // =========================================================================
    // PATTERN DRILLS & SPEED TRANSFORMATION UI ENGINE
    // =========================================================================
    function initPatternDrillsUI() {
        const btnDrills = document.getElementById("btn-hero-drills");
        const drillsModal = document.getElementById("modal-hero-drills");
        const originalTextEl = document.getElementById("drills-card-original");
        const modifierEl = document.getElementById("drills-card-modifier");
        const timerFillEl = document.getElementById("drills-timer-fill");
        const optionsGrid = document.getElementById("drills-options-grid");
        const resultFeedback = document.getElementById("drills-result-feedback");
        const comboBadge = document.getElementById("drills-combo-badge");
        const sprintStepText = document.getElementById("drills-sprint-step-text");
        const nextCardBtn = document.getElementById("drills-next-card-btn");
        const micBtn = document.getElementById("drills-mic-btn");
        const spokenFeedback = document.getElementById("drills-spoken-feedback");

        let currentCardIndexInSprint = 0;
        const SPRINT_TOTAL = 10;
        let timerSeconds = 5;
        let timerRemainingMs = 5000;
        let timerInterval = null;
        let currentCard = null;
        let isCardAnswered = false;
        let speechRecognitionInstance = null;

        // Speed buttons
        document.querySelectorAll(".drills-speed-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".drills-speed-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                timerSeconds = parseInt(btn.getAttribute("data-sec") || "5", 10);
            });
        });

        function updateComboUI() {
            if (!comboBadge) return;
            const combo = window.patternDrills ? window.patternDrills.currentCombo : 0;
            comboBadge.innerHTML = `<i class="fa-solid fa-fire"></i> Combo x${combo}`;
            if (combo >= 10) {
                comboBadge.style.background = "linear-gradient(135deg, #ec4899, #8b5cf6)";
                comboBadge.style.boxShadow = "0 0 25px rgba(236,72,153,0.8)";
            } else if (combo >= 5) {
                comboBadge.style.background = "linear-gradient(135deg, #f59e0b, #ef4444)";
                comboBadge.style.boxShadow = "0 0 20px rgba(245,158,11,0.7)";
            } else {
                comboBadge.style.background = "linear-gradient(135deg, #ef4444, #f97316)";
                comboBadge.style.boxShadow = "0 0 15px rgba(239,68,68,0.5)";
            }
        }

        function stopTimer() {
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = null;
        }

        function startTimer() {
            stopTimer();
            timerRemainingMs = timerSeconds * 1000;
            const stepMs = 50;
            timerInterval = setInterval(() => {
                timerRemainingMs -= stepMs;
                const ratio = Math.max(0, timerRemainingMs / (timerSeconds * 1000));
                if (timerFillEl) {
                    timerFillEl.style.width = `${ratio * 100}%`;
                    if (ratio < 0.3) {
                        timerFillEl.style.background = "#ef4444";
                    } else if (ratio < 0.6) {
                        timerFillEl.style.background = "#f59e0b";
                    } else {
                        timerFillEl.style.background = "linear-gradient(90deg, #10b981, #f59e0b, #ef4444)";
                    }
                }

                if (timerRemainingMs <= 0) {
                    stopTimer();
                    handleTimeOut();
                }
            }, stepMs);
        }

        function handleTimeOut() {
            if (isCardAnswered) return;
            isCardAnswered = true;
            if (window.patternDrills) window.patternDrills.currentCombo = 0;
            updateComboUI();

            if (resultFeedback) {
                resultFeedback.style.display = "block";
                resultFeedback.style.background = "rgba(239, 68, 68, 0.25)";
                resultFeedback.style.border = "1px solid rgba(239, 68, 68, 0.5)";
                resultFeedback.style.color = "#fca5a5";
                resultFeedback.innerHTML = `⏰ <b>Время вышло!</b> Правильный ответ: <b>"${currentCard ? currentCard.target : ''}"</b>`;
            }

            if (optionsGrid && currentCard) {
                const buttons = optionsGrid.querySelectorAll(".drills-opt-btn");
                buttons.forEach(b => {
                    b.disabled = true;
                    if (b.textContent.trim().includes(currentCard.target)) {
                        b.classList.add("correct");
                    }
                });
            }
        }

        function renderNextCard() {
            if (!window.patternDrills) return;
            isCardAnswered = false;
            stopTimer();
            if (resultFeedback) resultFeedback.style.display = "none";
            if (spokenFeedback) spokenFeedback.innerHTML = 'Или выберите правильный вариант ниже на скорость:';

            currentCardIndexInSprint = (currentCardIndexInSprint % SPRINT_TOTAL) + 1;
            if (sprintStepText) sprintStepText.textContent = `КАРТОЧКА ${currentCardIndexInSprint} ИЗ ${SPRINT_TOTAL}`;

            currentCard = window.patternDrills.getRandomCard();
            if (originalTextEl && currentCard) {
                originalTextEl.innerHTML = `<span>${currentCard.original}</span>` +
                    `<button class="btn btn-sm btn-outline" id="drills-listen-original-btn" title="Прослушать" style="padding:2px 8px; font-size:12px;"><i class="fa-solid fa-volume-high"></i></button>`;
                const lBtn = document.getElementById("drills-listen-original-btn");
                if (lBtn) {
                    lBtn.addEventListener("click", () => {
                        if (typeof playTextKokoroAudio === "function") {
                            playTextKokoroAudio(currentCard.original, activeShowcaseHeroId || 'valerius');
                        }
                    });
                }
            }

            if (modifierEl && currentCard) {
                modifierEl.textContent = currentCard.modifier;
            }

            if (optionsGrid && currentCard) {
                optionsGrid.innerHTML = currentCard.options.map((opt, idx) => {
                    return `
                        <button class="drills-opt-btn" data-opt-idx="${idx}">
                            <span style="width:26px; height:26px; border-radius:50%; background:rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; color:#fbbf24;">
                                ${String.fromCharCode(65 + idx)}
                            </span>
                            <span>${opt}</span>
                        </button>
                    `;
                }).join("");

                optionsGrid.querySelectorAll(".drills-opt-btn").forEach(b => {
                    b.addEventListener("click", () => {
                        const optIdx = parseInt(b.getAttribute("data-opt-idx"), 10);
                        const chosenText = currentCard.options[optIdx];
                        handleCardAnswer(chosenText === currentCard.target, b);
                    });
                });
            }

            startTimer();
        }

        function handleCardAnswer(isCorrect, clickedBtn = null) {
            if (isCardAnswered) return;
            isCardAnswered = true;
            stopTimer();

            if (optionsGrid && currentCard) {
                const buttons = optionsGrid.querySelectorAll(".drills-opt-btn");
                buttons.forEach(b => {
                    b.disabled = true;
                    if (b.textContent.trim().includes(currentCard.target)) {
                        b.classList.add("correct");
                    } else if (clickedBtn && b === clickedBtn && !isCorrect) {
                        b.classList.add("wrong");
                    }
                });
            }

            if (isCorrect) {
                if (window.patternDrills) {
                    window.patternDrills.currentCombo++;
                    if (window.patternDrills.currentCombo > window.patternDrills.maxCombo) {
                        window.patternDrills.maxCombo = window.patternDrills.currentCombo;
                    }
                }
                updateComboUI();

                // Award card to Drills skill
                const addRes = window.patternDrills ? window.patternDrills.addCard() : null;
                updateDrillsUI();

                // Combo XP reward to active hero
                const hero = rpgEngine.heroes.find(h => h.id === (activeShowcaseHeroId || 'valerius'));
                const comboCount = window.patternDrills ? window.patternDrills.currentCombo : 1;
                let bonusHeroXp = 10;
                if (comboCount >= 10) bonusHeroXp = 30;
                else if (comboCount >= 5) bonusHeroXp = 20;

                if (hero && typeof rpgEngine.gainHeroXp === "function") {
                    rpgEngine.gainHeroXp(hero, bonusHeroXp);
                }

                if (resultFeedback) {
                    resultFeedback.style.display = "block";
                    resultFeedback.style.background = "rgba(16, 185, 129, 0.25)";
                    resultFeedback.style.border = "1px solid rgba(16, 185, 129, 0.5)";
                    resultFeedback.style.color = "#6ee7b7";
                    resultFeedback.innerHTML = `🎉 <b>Верно!</b> +1 карточка в Drills! (+${bonusHeroXp} Hero XP 🔥)`;
                }

                if (addRes && addRes.leveledUp) {
                    showToast(`⚡ <b>DRILLS LEVEL UP!</b> Level <b>${addRes.newLevel}</b> reached! (${addRes.totalCards.toLocaleString()} / 10,000 transformations completed)`, "linear-gradient(135deg, #f59e0b, #d97706)", "#fbbf24");
                }

                setTimeout(() => {
                    renderNextCard();
                }, 750);
            } else {
                if (window.patternDrills) window.patternDrills.currentCombo = 0;
                updateComboUI();

                if (resultFeedback && currentCard) {
                    resultFeedback.style.display = "block";
                    resultFeedback.style.background = "rgba(239, 68, 68, 0.25)";
                    resultFeedback.style.border = "1px solid rgba(239, 68, 68, 0.5)";
                    resultFeedback.style.color = "#fca5a5";
                    resultFeedback.innerHTML = `❌ <b>Неверно.</b> Правильный ответ: <b>"${currentCard.target}"</b>`;
                }
            }
        }

        // Voice input with STT
        if (micBtn) {
            micBtn.addEventListener("click", () => {
                if (isCardAnswered) return;
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (!SpeechRecognition) {
                    alert("Распознавание речи не поддерживается браузером. Используйте кнопки вариантов.");
                    return;
                }

                if (speechRecognitionInstance) {
                    try { speechRecognitionInstance.stop(); } catch(e) {}
                }

                speechRecognitionInstance = new SpeechRecognition();
                speechRecognitionInstance.lang = "en-US";
                speechRecognitionInstance.continuous = false;
                speechRecognitionInstance.interimResults = false;

                micBtn.classList.add("recording");
                if (spokenFeedback) spokenFeedback.innerHTML = '<span style="color:#fbbf24;">🎙️ Слушаю ваш ответ... Говорите!</span>';

                speechRecognitionInstance.onresult = (evt) => {
                    const spoken = evt.results[0][0].transcript;
                    micBtn.classList.remove("recording");
                    if (spokenFeedback) spokenFeedback.innerHTML = `Распознано: <b>"${spoken}"</b>`;
                    const isOk = window.patternDrills.checkSpokenAnswer(spoken, currentCard.target);
                    handleCardAnswer(isOk);
                };

                speechRecognitionInstance.onerror = () => {
                    micBtn.classList.remove("recording");
                    if (spokenFeedback) spokenFeedback.innerHTML = '<span style="color:#f87171;">Не удалось распознать. Попробуйте еще раз или выберите вариант.</span>';
                };

                speechRecognitionInstance.onend = () => {
                    micBtn.classList.remove("recording");
                };

                speechRecognitionInstance.start();
            });
        }

        if (nextCardBtn) {
            nextCardBtn.addEventListener("click", () => {
                renderNextCard();
            });
        }

        if (btnDrills) {
            btnDrills.addEventListener("click", () => {
                if (drillsModal) {
                    drillsModal.classList.remove("hidden");
                    currentCardIndexInSprint = 0;
                    if (window.patternDrills) window.patternDrills.currentCombo = 0;
                    updateComboUI();
                    updateDrillsUI();
                    renderNextCard();
                }
            });
        }
    }

    // =========================================================================
    // SPEAKING & FLUENCY STUDIO UI ENGINE (4/3/2 SPRINT & BLITZ Q&A)
    // =========================================================================
    function initSpeakingStudioUI() {
        const tab432 = document.getElementById("tab-speaking-432");
        const tabBlitz = document.getElementById("tab-speaking-blitz");
        const tabFree = document.getElementById("tab-speaking-free");

        const view432 = document.getElementById("speaking-view-432");
        const viewBlitz = document.getElementById("speaking-view-blitz");
        const viewFree = document.getElementById("speaking-view-free");

        function switchTab(viewName) {
            [tab432, tabBlitz, tabFree].forEach(t => t && t.classList.remove("active"));
            [view432, viewBlitz, viewFree].forEach(v => v && (v.style.display = "none"));

            if (viewName === "432") {
                if (tab432) tab432.classList.add("active");
                if (view432) view432.style.display = "block";
                setup432Sprint();
            } else if (viewName === "blitz") {
                if (tabBlitz) tabBlitz.classList.add("active");
                if (viewBlitz) viewBlitz.style.display = "block";
                setupBlitz();
            } else {
                if (tabFree) tabFree.classList.add("active");
                if (viewFree) viewFree.style.display = "block";
                renderLiveHeroPicker();
            }
        }

        if (tab432) tab432.onclick = () => switchTab("432");
        if (tabBlitz) tabBlitz.onclick = () => switchTab("blitz");
        if (tabFree) tabFree.onclick = () => switchTab("free");

        // === 4/3/2 SPRINT LOGIC ===
        let currentTopic = null;
        let currentRound = 1;
        let sprintTimer = null;
        let sprintSecondsLeft = 60;
        let isSprintRecording = false;
        let sprintRoundWords = [0, 0, 0];
        let sprintRecognition = null;
        let currentRoundTranscript = "";

        const topicTitle = document.getElementById("sprint-topic-title");
        const topicPrompt = document.getElementById("sprint-topic-prompt");
        const topicHints = document.getElementById("sprint-topic-hints");
        const newTopicBtn = document.getElementById("sprint-new-topic-btn");
        const roundBadge = document.getElementById("sprint-round-badge");
        const timerDisplay = document.getElementById("sprint-timer-display");
        const toggleRecBtn = document.getElementById("sprint-toggle-rec-btn");
        const liveTranscript = document.getElementById("sprint-live-transcript");
        const liveWordCount = document.getElementById("sprint-live-word-count");

        function loadNewTopic() {
            if (!window.speakingEngine) return;
            currentTopic = window.speakingEngine.getRandomTopic();
            if (topicTitle) topicTitle.textContent = currentTopic.title;
            if (topicPrompt) topicPrompt.textContent = currentTopic.prompt;
            if (topicHints) {
                topicHints.innerHTML = currentTopic.hints.map(h => `<span class="badge" style="background:rgba(255,255,255,0.08); font-size:11px; padding:2px 8px; color:#cbd5e1;">${h}</span>`).join("");
            }
        }

        if (newTopicBtn) newTopicBtn.onclick = loadNewTopic;

        function setup432Sprint() {
            if (!currentTopic) loadNewTopic();
            currentRound = 1;
            sprintRoundWords = [0, 0, 0];
            updateRoundIndicators();
            resetRoundTimer();
        }

        function updateRoundIndicators() {
            for (let r = 1; r <= 3; r++) {
                const el = document.getElementById(`sprint-step-${r}`);
                const wpmEl = document.getElementById(`sprint-step-${r}-wpm`);
                if (el) {
                    el.classList.remove("active", "completed");
                    if (r < currentRound) el.classList.add("completed");
                    else if (r === currentRound) el.classList.add("active");
                }
                if (wpmEl && sprintRoundWords[r - 1] > 0) {
                    const dur = [60, 45, 30][r - 1];
                    const wpm = Math.round((sprintRoundWords[r - 1] / dur) * 60);
                    wpmEl.textContent = `${sprintRoundWords[r - 1]} слов • ${wpm} WPM`;
                }
            }
            if (roundBadge) roundBadge.textContent = `РАУНД ${currentRound} ИЗ 3 (${[60, 45, 30][currentRound - 1]} СЕК)`;
        }

        function resetRoundTimer() {
            if (sprintTimer) clearInterval(sprintTimer);
            sprintTimer = null;
            sprintSecondsLeft = [60, 45, 30][currentRound - 1] || 60;
            if (timerDisplay) timerDisplay.textContent = `${sprintSecondsLeft}s`;
            if (toggleRecBtn) {
                toggleRecBtn.classList.remove("btn-danger");
                toggleRecBtn.classList.add("btn-record");
                toggleRecBtn.innerHTML = `<i class="fa-solid fa-microphone"></i> <span>Начать Раунд ${currentRound} (Говорить ${sprintSecondsLeft} сек)</span>`;
            }
        }

        function startSprintRound() {
            isSprintRecording = true;
            currentRoundTranscript = "";
            if (liveTranscript) liveTranscript.innerHTML = '<em>Слушаю вас... Говорите непрерывно!</em>';
            if (liveWordCount) liveWordCount.textContent = 'Слов в этом раунде: 0';

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                sprintRecognition = new SpeechRecognition();
                sprintRecognition.lang = "en-US";
                sprintRecognition.continuous = true;
                sprintRecognition.interimResults = true;

                sprintRecognition.onresult = (evt) => {
                    let interim = '';
                    let final = '';
                    for (let i = evt.resultIndex; i < evt.results.length; ++i) {
                        if (evt.results[i].isFinal) {
                            final += evt.results[i][0].transcript + ' ';
                        } else {
                            interim += evt.results[i][0].transcript;
                        }
                    }
                    currentRoundTranscript += final;
                    const fullText = (currentRoundTranscript + ' ' + interim).trim();
                    if (liveTranscript) liveTranscript.textContent = fullText;
                    const wCount = window.speakingEngine ? window.speakingEngine.countEnglishWords(fullText) : 0;
                    if (liveWordCount) liveWordCount.textContent = `Слов в этом раунде: ${wCount}`;
                };

                sprintRecognition.onerror = () => {};
                try { sprintRecognition.start(); } catch(e) {}
            }

            if (toggleRecBtn) {
                toggleRecBtn.classList.remove("btn-record");
                toggleRecBtn.classList.add("btn-danger");
                toggleRecBtn.innerHTML = `<i class="fa-solid fa-stop"></i> <span>Идет запись... Говорите! (Остановить)</span>`;
            }

            sprintTimer = setInterval(() => {
                sprintSecondsLeft--;
                if (timerDisplay) timerDisplay.textContent = `${sprintSecondsLeft}s`;
                if (sprintSecondsLeft <= 0) {
                    finishSprintRound();
                }
            }, 1000);
        }

        function finishSprintRound() {
            if (sprintTimer) clearInterval(sprintTimer);
            sprintTimer = null;
            isSprintRecording = false;

            if (sprintRecognition) {
                try { sprintRecognition.stop(); } catch(e) {}
            }

            const roundWords = window.speakingEngine ? window.speakingEngine.countEnglishWords(currentRoundTranscript) : 0;
            sprintRoundWords[currentRound - 1] = roundWords;

            // Award words into Speaking skill
            if (roundWords > 0 && window.speakingEngine) {
                const addRes = window.speakingEngine.addWords(roundWords);
                updateSpeakingUI();

                // Award Hero XP
                const hero = rpgEngine.heroes.find(h => h.id === (activeShowcaseHeroId || 'valerius'));
                if (hero && typeof rpgEngine.gainHeroXp === "function") {
                    rpgEngine.gainHeroXp(hero, roundWords * 2);
                }

                if (addRes && addRes.leveledUp) {
                    showToast(`🎙️ <b>SPEAKING LEVEL UP!</b> Level <b>${addRes.newLevel}</b> reached! (${addRes.totalWords.toLocaleString()} / 300,000 words spoken)`, "linear-gradient(135deg, #ec4899, #8b5cf6)", "#f472b6");
                }
            }

            updateRoundIndicators();

            if (currentRound < 3) {
                currentRound++;
                updateRoundIndicators();
                resetRoundTimer();
                if (liveTranscript) {
                    liveTranscript.innerHTML = `<span style="color:#10b981;">🎉 Раунд ${currentRound - 1} завершен: наговорено <b>${roundWords} слов</b>!</span><br>Приготовьтесь к Раунду ${currentRound} (${[60, 45, 30][currentRound - 1]} сек). Повторите ту же историю быстрее!`;
                }
            } else {
                // All 3 rounds done!
                const totalSprintWords = sprintRoundWords[0] + sprintRoundWords[1] + sprintRoundWords[2];
                if (roundBadge) roundBadge.textContent = "🏆 СПРИНТ 4/3/2 ПОЛНОСТЬЮ ЗАВЕРШЕН!";
                if (toggleRecBtn) {
                    toggleRecBtn.classList.remove("btn-danger");
                    toggleRecBtn.classList.add("btn-record");
                    toggleRecBtn.innerHTML = `<i class="fa-solid fa-rotate-right"></i> <span>Пройти новый 4/3/2 спринт</span>`;
                }
                if (liveTranscript) {
                    liveTranscript.innerHTML = `
                        <div style="color:#fbbf24; font-size:15px; font-weight:800; margin-bottom:6px;">🎉 ПОТРЯСАЮЩЕ! СПРИНТ УСПЕШНО ЗАВЕРШЕН!</div>
                        <div>Всего наговорено за сессию: <b style="color:#34d399; font-size:16px;">+${totalSprintWords} слов</b> в навык Speaking!</div>
                        <div style="font-size:12px; margin-top:6px; color:#cbd5e1;">
                            Р1: ${sprintRoundWords[0]} слов &bull; Р2: ${sprintRoundWords[1]} слов &bull; Р3: ${sprintRoundWords[2]} слов
                        </div>
                    `;
                }
                currentRound = 1;
            }
        }

        if (toggleRecBtn) {
            toggleRecBtn.onclick = () => {
                if (!isSprintRecording) {
                    startSprintRound();
                } else {
                    finishSprintRound();
                }
            };
        }

        // === BLITZ Q&A LOGIC ===
        let blitzQuestions = [];
        let blitzIdx = 0;
        let blitzTimer = null;
        let blitzSecLeft = 5;

        const blitzBadge = document.getElementById("blitz-question-badge");
        const blitzTimerDisplay = document.getElementById("blitz-timer-display");
        const blitzQuestionText = document.getElementById("blitz-question-text");
        const blitzMicBtn = document.getElementById("blitz-mic-btn");
        const blitzTranscript = document.getElementById("blitz-live-transcript");

        function setupBlitz() {
            if (!window.speakingEngine) return;
            blitzQuestions = window.speakingEngine.getBlitzSet(5);
            blitzIdx = 0;
            renderBlitzQuestion();
        }

        function renderBlitzQuestion() {
            if (blitzIdx >= blitzQuestions.length) {
                if (blitzBadge) blitzBadge.textContent = "🏆 БЛИЦ ЗАВЕРШЕН!";
                if (blitzQuestionText) blitzQuestionText.innerHTML = `<span style="color:#10b981;">Отличная реакция! Все вопросы пройдены!</span>`;
                if (blitzTranscript) blitzTranscript.innerHTML = `Нажмите кнопку ниже, чтобы начать новый блиц-опрос.`;
                if (blitzMicBtn) {
                    blitzMicBtn.innerHTML = `<i class="fa-solid fa-rotate-right"></i> <span>Новый Блиц</span>`;
                    blitzMicBtn.onclick = setupBlitz;
                }
                return;
            }

            const q = blitzQuestions[blitzIdx];
            if (blitzBadge) blitzBadge.textContent = `ВОПРОС ${blitzIdx + 1} ИЗ ${blitzQuestions.length}`;
            if (blitzQuestionText) blitzQuestionText.textContent = q.question;
            if (blitzTranscript) blitzTranscript.innerHTML = `<em>Ответьте быстро в микрофон...</em>`;

            // Auto-voice the question
            if (typeof playTextKokoroAudio === "function") {
                playTextKokoroAudio(q.question, activeShowcaseHeroId || 'valerius');
            }

            blitzSecLeft = 5;
            if (blitzTimerDisplay) blitzTimerDisplay.textContent = `${blitzSecLeft}s`;
            if (blitzTimer) clearInterval(blitzTimer);
            blitzTimer = setInterval(() => {
                blitzSecLeft--;
                if (blitzTimerDisplay) blitzTimerDisplay.textContent = `${blitzSecLeft}s`;
                if (blitzSecLeft <= 0) {
                    clearInterval(blitzTimer);
                }
            }, 1000);

            if (blitzMicBtn) {
                blitzMicBtn.innerHTML = `<i class="fa-solid fa-microphone"></i> <span>Сказать ответ (Вопрос ${blitzIdx + 1})</span>`;
                blitzMicBtn.onclick = startBlitzAnswer;
            }
        }

        function startBlitzAnswer() {
            if (blitzTimer) clearInterval(blitzTimer);
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                alert("Распознавание речи не поддерживается браузером.");
                blitzIdx++;
                renderBlitzQuestion();
                return;
            }

            const rec = new SpeechRecognition();
            rec.lang = "en-US";
            rec.continuous = false;
            rec.interimResults = false;

            if (blitzTranscript) blitzTranscript.innerHTML = `<span style="color:#fbbf24;">🎙️ Слушаю ответ...</span>`;

            rec.onresult = (evt) => {
                const spoken = evt.results[0][0].transcript;
                const wordsCount = window.speakingEngine ? window.speakingEngine.countEnglishWords(spoken) : 0;
                if (blitzTranscript) {
                    blitzTranscript.innerHTML = `Ответ: <b>"${spoken}"</b> (+${wordsCount} слов в Speaking)`;
                }

                if (wordsCount > 0 && window.speakingEngine) {
                    const addRes = window.speakingEngine.addWords(wordsCount);
                    updateSpeakingUI();
                    if (addRes && addRes.leveledUp) {
                        showToast(`🎙️ <b>SPEAKING LEVEL UP!</b> Level <b>${addRes.newLevel}</b> reached! (${addRes.totalWords.toLocaleString()} / 300,000 words spoken)`, "linear-gradient(135deg, #ec4899, #8b5cf6)", "#f472b6");
                    }
                }

                setTimeout(() => {
                    blitzIdx++;
                    renderBlitzQuestion();
                }, 1500);
            };

            rec.onerror = () => {
                blitzIdx++;
                renderBlitzQuestion();
            };

            rec.start();
        }
    }

    try { renderScenarios(); } catch (e) {}
    try { selectScenario(SCENARIOS[0]); } catch (e) {}
    try { renderTutorHeroTargetChips(); } catch (e) {}
    try { renderSpeakingHeroTargetChips(); } catch (e) {}
    try { renderFlashcardsUI(); } catch (e) {}
    try { renderGrammarUI(); } catch (e) {}
    try { initPatternDrillsUI(); } catch (e) { console.error("Drills init error:", e); }
    try { initSpeakingStudioUI(); } catch (e) { console.error("Speaking init error:", e); }
    try { renderRPGHeader(); } catch (e) {}
    try { renderHeroShowcase(rpgEngine.heroes[0].id); } catch (e) { console.error("Hero Showcase Render Error:", e); }
    try { loadPlayerStateFromServer(); } catch (e) {}
});
