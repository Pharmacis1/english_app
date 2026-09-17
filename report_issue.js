/**
 * EnglishPulse RPG - Issue Reporting System (Bug & Feedback Reporter)
 * Captures optimized screenshot of current view, attaches metadata, and saves to /reports directory
 */
(function() {
    'use strict';

    // 1. Console Log & Error Interceptor
    const recentLogs = [];
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    console.error = function(...args) {
        try {
            recentLogs.push({
                type: 'error',
                time: new Date().toLocaleTimeString('ru-RU'),
                msg: args.map(a => {
                    try {
                        return typeof a === 'object' ? JSON.stringify(a) : String(a);
                    } catch(e) {
                        return String(a);
                    }
                }).join(' ')
            });
            if (recentLogs.length > 25) recentLogs.shift();
        } catch(e) {}
        originalConsoleError.apply(console, args);
    };

    console.warn = function(...args) {
        try {
            recentLogs.push({
                type: 'warn',
                time: new Date().toLocaleTimeString('ru-RU'),
                msg: args.map(a => {
                    try {
                        return typeof a === 'object' ? JSON.stringify(a) : String(a);
                    } catch(e) {
                        return String(a);
                    }
                }).join(' ')
            });
            if (recentLogs.length > 25) recentLogs.shift();
        } catch(e) {}
        originalConsoleWarn.apply(console, args);
    };

    window.addEventListener('error', function(event) {
        try {
            recentLogs.push({
                type: 'uncaught_error',
                time: new Date().toLocaleTimeString('ru-RU'),
                msg: `${event.message || 'Error'} at ${event.filename || 'unknown'}:${event.lineno || 0}:${event.colno || 0}`
            });
            if (recentLogs.length > 25) recentLogs.shift();
        } catch(e) {}
    });

    // 2. Active Mode & Context Detector
    function detectActiveAppMode() {
        const modals = [
            { id: 'modal-hero-chat', name: '💬 Чат с Героем' },
            { id: 'modal-hero-live', name: '🎙️ Speaking / Голос' },
            { id: 'modal-hero-speech-drills', name: '🔥 Speech Drills' },
            { id: 'modal-hero-drills', name: '⚡ Pattern Drills' },
            { id: 'modal-hero-words', name: '📚 Vocab & Flashcards' },
            { id: 'modal-hero-grammar', name: '📜 Grammar & Rules' },
            { id: 'modal-all-cards', name: '🗂️ Все карточки' },
            { id: 'modal-hero-story', name: '⚔️ Сюжетная Кампания' },
            { id: 'modal-eldrin-audiobook', name: '🎧 Аудиокнига' },
            { id: 'modal-audiobook-quiz', name: '❓ Quiz' },
            { id: 'modal-settings', name: '⚙️ Настройки' },
            { id: 'modal-hero-daily-quest', name: '💕 Daily Quest' },
            { id: 'modal-daily-streak-hub', name: '🔥 Daily Streak Hub' },
            { id: 'modal-srs-forecast', name: '📈 SRS Forecast' }
        ];

        for (const m of modals) {
            const el = document.getElementById(m.id);
            if (el && !el.classList.contains('hidden') && el.style.display !== 'none') {
                return m.name;
            }
        }
        return '🏰 Главный экран (Hero Showcase Hub)';
    }

    function getDetailedContext() {
        const heroName = document.getElementById('hero-display-name')?.innerText?.trim() || 'Unknown';
        const heroLevel = document.getElementById('hero-display-level')?.innerText?.trim() || '';
        const scenarioTitle = document.getElementById('active-scenario-title')?.innerText?.trim() || '';
        const storyTitle = document.getElementById('story-modal-title')?.innerText?.trim() || '';
        const speechDrillTitle = document.getElementById('speech-drills-category-title')?.innerText?.trim() || '';
        const drillTemplate = document.getElementById('drill-pattern-desc')?.innerText?.trim() || '';

        const subParts = [];
        if (scenarioTitle) subParts.push(`Сценарий: ${scenarioTitle}`);
        if (storyTitle) subParts.push(`Сюжет: ${storyTitle}`);
        if (speechDrillTitle) subParts.push(`Разминка: ${speechDrillTitle}`);
        if (drillTemplate) subParts.push(`Дрилл: ${drillTemplate}`);

        return {
            hero: `${heroName} ${heroLevel}`.trim(),
            subContext: subParts.join(' | ')
        };
    }

    // State
    let currentCapturedDataUrl = null;
    let selectedCategory = '🐛 Баг / Ошибка';
    let isCapturing = false;

    // Helper: Resize & compress canvas to JPEG for lightweight fast network transfer
    function getOptimizedDataUrl(sourceCanvas) {
        if (!sourceCanvas) return null;
        const maxDimension = 1200;
        let width = sourceCanvas.width;
        let height = sourceCanvas.height;

        if (width > maxDimension || height > maxDimension) {
            if (width > height) {
                height = Math.round((height * maxDimension) / width);
                width = maxDimension;
            } else {
                width = Math.round((width * maxDimension) / height);
                height = maxDimension;
            }
        }

        const scaledCanvas = document.createElement('canvas');
        scaledCanvas.width = width;
        scaledCanvas.height = height;
        const ctx = scaledCanvas.getContext('2d');
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(sourceCanvas, 0, 0, width, height);

        // JPEG 0.82 delivers crisp quality with ~120-200KB size (vs 5MB PNG)
        return scaledCanvas.toDataURL('image/jpeg', 0.82);
    }

    // 3. Screenshot & Modal Trigger
    async function startReportIssueFlow() {
        if (isCapturing) return;
        isCapturing = true;

        const floatingBtn = document.getElementById('report-issue-floating-btn');
        const toastEl = document.getElementById('report-issue-capture-toast');

        // Visual feedback during capture
        if (floatingBtn) {
            floatingBtn.classList.add('capturing');
            const span = floatingBtn.querySelector('span');
            if (span) span.innerText = 'Снимок...';
        }
        if (toastEl) {
            toastEl.classList.remove('hidden');
        }

        try {
            // Hide report UI elements temporarily from screenshot
            if (floatingBtn) floatingBtn.style.visibility = 'hidden';
            if (toastEl) toastEl.style.visibility = 'hidden';

            // Wait 60ms for DOM repaint
            await new Promise(resolve => setTimeout(resolve, 60));

            let canvas = null;
            if (typeof html2canvas === 'function') {
                canvas = await html2canvas(document.body, {
                    useCORS: true,
                    allowTaint: true,
                    scale: Math.min(window.devicePixelRatio || 1, 1.25),
                    logging: false,
                    ignoreElements: function(elem) {
                        return elem.id === 'report-issue-floating-btn' ||
                               elem.id === 'modal-report-issue' ||
                               elem.id === 'report-issue-capture-toast' ||
                               elem.classList.contains('report-issue-ignore');
                    }
                });
            }

            if (canvas) {
                currentCapturedDataUrl = getOptimizedDataUrl(canvas);
            } else {
                const fallbackCanvas = document.createElement('canvas');
                fallbackCanvas.width = 800;
                fallbackCanvas.height = 450;
                const ctx = fallbackCanvas.getContext('2d');
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(0, 0, 800, 450);
                ctx.fillStyle = '#6366f1';
                ctx.font = '24px sans-serif';
                ctx.fillText('EnglishPulse Screenshot', 40, 200);
                currentCapturedDataUrl = fallbackCanvas.toDataURL('image/jpeg', 0.8);
            }

            // Restore floating button
            if (floatingBtn) {
                floatingBtn.style.visibility = 'visible';
                floatingBtn.classList.remove('capturing');
                const span = floatingBtn.querySelector('span');
                if (span) span.innerText = 'Сообщить о проблеме';
            }
            if (toastEl) {
                toastEl.classList.add('hidden');
                toastEl.style.visibility = 'visible';
            }

            // Open Modal
            openReportModal();
        } catch (err) {
            console.error('[Bug Report Capture Error]', err);
            if (floatingBtn) {
                floatingBtn.style.visibility = 'visible';
                floatingBtn.classList.remove('capturing');
                const span = floatingBtn.querySelector('span');
                if (span) span.innerText = 'Сообщить о проблеме';
            }
            if (toastEl) {
                toastEl.classList.add('hidden');
                toastEl.style.visibility = 'visible';
            }
            openReportModal();
        } finally {
            isCapturing = false;
        }
    }

    // 4. Open Modal & Populate Data
    function openReportModal() {
        const modal = document.getElementById('modal-report-issue');
        if (!modal) return;

        const activeMode = detectActiveAppMode();
        const { hero, subContext } = getDetailedContext();

        // Populate preview
        const imgPreview = document.getElementById('report-issue-preview-img');
        if (imgPreview && currentCapturedDataUrl) {
            imgPreview.src = currentCapturedDataUrl;
        }

        // Populate badges
        const modeBadge = document.getElementById('report-issue-mode-badge');
        if (modeBadge) modeBadge.innerText = activeMode;

        const heroBadge = document.getElementById('report-issue-hero-badge');
        if (heroBadge) heroBadge.innerText = hero || 'Valerius';

        const timeBadge = document.getElementById('report-issue-time-badge');
        if (timeBadge) timeBadge.innerText = new Date().toLocaleTimeString('ru-RU');

        // Reset inputs
        const textarea = document.getElementById('report-issue-description');
        if (textarea) {
            textarea.value = '';
            setTimeout(() => textarea.focus(), 150);
        }

        // Reset category pills
        document.querySelectorAll('.report-cat-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === selectedCategory);
        });

        // Show modal
        modal.classList.remove('hidden');
    }

    function closeReportModal() {
        const modal = document.getElementById('modal-report-issue');
        if (modal) modal.classList.add('hidden');
    }

    // 5. Submit Report
    async function submitReport() {
        const submitBtn = document.getElementById('btn-submit-report-issue');
        const textarea = document.getElementById('report-issue-description');
        const description = textarea ? textarea.value : '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Сохранение отчёта...';
        }

        const activeMode = detectActiveAppMode();
        const { hero, subContext } = getDetailedContext();

        const payload = {
            screenshot: currentCapturedDataUrl || '',
            description: description,
            category: selectedCategory,
            metadata: {
                localTime: new Date().toLocaleString('ru-RU'),
                activeMode: activeMode,
                activeHero: hero,
                subContext: subContext,
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                url: window.location.href,
                userAgent: navigator.userAgent,
                recentLogs: recentLogs.slice(-15)
            }
        };

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 20000);

            const resp = await fetch('/api/reports', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!resp.ok) {
                const errorText = await resp.text().catch(() => '');
                throw new Error(`HTTP ${resp.status}: ${errorText || resp.statusText}`);
            }

            const result = await resp.json();

            if (result.success) {
                closeReportModal();
                showSuccessNotification(result.folder || 'reports/');
            } else {
                alert('Не удалось сохранить отчёт: ' + (result.error || 'Ошибка сервера'));
            }
        } catch (err) {
            console.error('[Submit Report Error]', err);
            alert(`Ошибка при отправке отчёта (${err.message || 'Ошибка сети'}). Убедитесь, что сервер запущен и попробуйте снова.`);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Отправить отчёт';
            }
        }
    }

    function showSuccessNotification(folderName) {
        const toast = document.createElement('div');
        toast.className = 'report-success-toast';
        toast.innerHTML = `
            <div class="report-success-toast-content">
                <i class="fa-solid fa-circle-check" style="font-size:24px; color:#10b981;"></i>
                <div>
                    <div style="font-weight:700; font-size:15px; color:#f8fafc;">Отчёт успешно сохранён!</div>
                    <div style="font-size:12px; color:#94a3b8; margin-top:2px;">Скриншот и данные записаны в <code style="color:#38bdf8; background:rgba(0,0,0,0.3); padding:2px 5px; border-radius:4px;">${folderName}</code></div>
                </div>
            </div>
        `;
        document.body.appendChild(toast);

        try {
            const audio = new Audio('audio/positive.mp3');
            audio.volume = 0.3;
            audio.play().catch(() => {});
        } catch(e) {}

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 400);
        }, 4500);
    }

    // 6. Make Floating Button Touch & Mouse Draggable
    function setupDraggableFloatingBtn(btn) {
        if (!btn) return;

        let isDragging = false;
        let startX = 0, startY = 0;
        let initialLeft = 0, initialTop = 0;
        let hasMoved = false;

        // Restore saved position if valid
        try {
            const savedPos = JSON.parse(localStorage.getItem('ep_report_btn_pos') || 'null');
            if (savedPos && typeof savedPos.left === 'number' && typeof savedPos.top === 'number') {
                const maxLeft = window.innerWidth - 60;
                const maxTop = window.innerHeight - 60;
                const left = Math.max(10, Math.min(savedPos.left, maxLeft));
                const top = Math.max(10, Math.min(savedPos.top, maxTop));
                btn.style.left = left + 'px';
                btn.style.top = top + 'px';
                btn.style.right = 'auto';
                btn.style.bottom = 'auto';
            }
        } catch(e) {}

        function onPointerDown(clientX, clientY) {
            isDragging = true;
            hasMoved = false;
            startX = clientX;
            startY = clientY;
            const rect = btn.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
            btn.style.transition = 'none';
        }

        function onPointerMove(clientX, clientY) {
            if (!isDragging) return;
            const dx = clientX - startX;
            const dy = clientY - startY;

            if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
                hasMoved = true;
            }

            if (hasMoved) {
                let newLeft = initialLeft + dx;
                let newTop = initialTop + dy;

                const maxLeft = window.innerWidth - btn.offsetWidth - 10;
                const maxTop = window.innerHeight - btn.offsetHeight - 10;
                newLeft = Math.max(10, Math.min(newLeft, maxLeft));
                newTop = Math.max(10, Math.min(newTop, maxTop));

                btn.style.left = newLeft + 'px';
                btn.style.top = newTop + 'px';
                btn.style.right = 'auto';
                btn.style.bottom = 'auto';
            }
        }

        function onPointerUp() {
            if (!isDragging) return;
            isDragging = false;
            btn.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';

            if (hasMoved) {
                const rect = btn.getBoundingClientRect();
                try {
                    localStorage.setItem('ep_report_btn_pos', JSON.stringify({
                        left: Math.round(rect.left),
                        top: Math.round(rect.top)
                    }));
                } catch(e) {}
            }
        }

        // Touch events
        btn.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches.length === 1) {
                onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            onPointerUp();
        });

        // Mouse events
        btn.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                onPointerDown(e.clientX, e.clientY);
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                onPointerMove(e.clientX, e.clientY);
            }
        });

        window.addEventListener('mouseup', () => {
            onPointerUp();
        });

        // Click handler: Only trigger report if it was a click/tap (not a drag)
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (hasMoved) {
                hasMoved = false;
                return;
            }
            startReportIssueFlow();
        });
    }

    // 7. Setup Event Listeners
    function initListeners() {
        const floatingBtn = document.getElementById('report-issue-floating-btn');
        if (floatingBtn) {
            setupDraggableFloatingBtn(floatingBtn);
        }

        // Top Header button
        const headerBtn = document.getElementById('report-issue-header-btn');
        if (headerBtn) {
            headerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                startReportIssueFlow();
            });
        }

        // Close modal buttons
        const closeBtns = document.querySelectorAll('#modal-report-issue .modal-close-btn, #btn-cancel-report-issue');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeReportModal();
            });
        });

        // Close on backdrop click
        const modalOverlay = document.getElementById('modal-report-issue');
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeReportModal();
                }
            });
        }

        // Category pills
        const catBtns = document.querySelectorAll('.report-cat-btn');
        catBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                catBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedCategory = btn.dataset.category || btn.innerText.trim();
            });
        });

        // Submit button
        const submitBtn = document.getElementById('btn-submit-report-issue');
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                submitReport();
            });
        }

        // Fullscreen zoom on preview image click
        const previewImg = document.getElementById('report-issue-preview-img');
        if (previewImg) {
            previewImg.addEventListener('click', () => {
                if (currentCapturedDataUrl) {
                    const win = window.open('', '_blank');
                    if (win) {
                        win.document.write(`<title>Screenshot Preview</title><body style="margin:0; background:#0b0f19; display:flex; align-items:center; justify-content:center; min-height:100vh;"><img src="${currentCapturedDataUrl}" style="max-width:100%; max-height:100vh; object-fit:contain; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,0.8);"></body>`);
                    }
                }
            });
        }

        // Keyboard Shortcut: F8 or Ctrl+Shift+B
        window.addEventListener('keydown', (e) => {
            if (e.key === 'F8' || (e.ctrlKey && e.shiftKey && (e.key === 'B' || e.key === 'b' || e.key === 'И' || e.key === 'и'))) {
                e.preventDefault();
                startReportIssueFlow();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initListeners);
    } else {
        initListeners();
    }

    // Expose globally
    window.EnglishPulseReporter = {
        report: startReportIssueFlow,
        detectMode: detectActiveAppMode,
        getLogs: () => recentLogs
    };
})();
