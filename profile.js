/* ==========================================================================
   EnglishPulse RPG — Profile Page Controller
   Full-page profile with auth, photos, posts, and skill progress
   ========================================================================== */

(function () {
    const AUTH_STORAGE_KEY = 'english_pulse_auth_token';
    const USER_CACHE_KEY = 'english_pulse_auth_user';

    let currentUser = null;
    let currentToken = localStorage.getItem(AUTH_STORAGE_KEY) || null;

    // ── English Skill Progress (reads live from DOM header bar) ──
    function getEnglishMasteryStats() {
        try {
            const titleEl = document.getElementById("global-progress-title-text");
            if (titleEl && titleEl.textContent) {
                const m = titleEl.textContent.match(/(\d+)\s*\/\s*(\d+)\s*\(([\d.]+)%\)/);
                if (m) {
                    const sum = parseInt(m[1], 10);
                    const total = parseInt(m[2], 10);
                    const pct = m[3];
                    const n = parseFloat(pct);
                    let rank = "A0 → A1";
                    if (n >= 100) rank = "A1 ✓";
                    else if (n >= 50) rank = `A1 (${pct}%)`;
                    return { rank, percentage: pct, sumLevels: sum, totalTargetLevels: total, rawPercentage: n };
                }
            }
            return { rank: "A0 → A1", percentage: "0.0", sumLevels: 0, totalTargetLevels: 97, rawPercentage: 0 };
        } catch (e) {
            return { rank: "A0 → A1", percentage: "0.0", sumLevels: 0, totalTargetLevels: 97, rawPercentage: 0 };
        }
    }

    // ── API helpers ──
    async function apiLogin(username, password) {
        const r = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const d = await r.json();
        if (!r.ok || !d.success) throw new Error(d.error || 'Ошибка входа');
        currentToken = d.token;
        currentUser = d.user;
        localStorage.setItem(AUTH_STORAGE_KEY, currentToken);
        localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser));
        return d;
    }

    async function fetchUserProfile() {
        if (!currentToken) return null;
        try {
            const r = await fetch('/api/user/profile', { headers: { 'Authorization': 'Bearer ' + currentToken } });
            const d = await r.json();
            if (d.success && d.user) {
                currentUser = d.user;
                localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser));
                return currentUser;
            }
            logout();
            return null;
        } catch (e) { return null; }
    }

    async function apiUpdateProfile(updates) {
        const r = await fetch('/api/user/profile/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentToken },
            body: JSON.stringify(updates)
        });
        const d = await r.json();
        if (!r.ok || !d.success) throw new Error(d.error || 'Ошибка');
        currentUser = d.user;
        localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser));
        return currentUser;
    }

    async function apiUploadPhoto(photoData, caption) {
        const r = await fetch('/api/user/photos/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentToken },
            body: JSON.stringify({ photoData, caption })
        });
        const d = await r.json();
        if (!r.ok || !d.success) throw new Error(d.error || 'Ошибка');
        if (currentUser) { currentUser.photos = d.photos; localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser)); }
        return d;
    }

    async function apiDeletePhoto(photoId) {
        const r = await fetch(`/api/user/photos/${encodeURIComponent(photoId)}`, {
            method: 'DELETE', headers: { 'Authorization': 'Bearer ' + currentToken }
        });
        const d = await r.json();
        if (!r.ok || !d.success) throw new Error(d.error || 'Ошибка');
        if (currentUser) { currentUser.photos = d.photos; localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser)); }
        return d;
    }

    async function apiCreatePost(content, imageUrl) {
        const r = await fetch('/api/user/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentToken },
            body: JSON.stringify({ content, imageUrl })
        });
        const d = await r.json();
        if (!r.ok || !d.success) throw new Error(d.error || 'Ошибка');
        if (currentUser) { currentUser.posts = d.posts; localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser)); }
        return d;
    }

    async function apiDeletePost(postId) {
        const r = await fetch(`/api/user/posts/${encodeURIComponent(postId)}`, {
            method: 'DELETE', headers: { 'Authorization': 'Bearer ' + currentToken }
        });
        const d = await r.json();
        if (!r.ok || !d.success) throw new Error(d.error || 'Ошибка');
        if (currentUser) { currentUser.posts = d.posts; localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser)); }
        return d;
    }

    async function apiLikePost(postId) {
        const r = await fetch(`/api/user/posts/${encodeURIComponent(postId)}/like`, {
            method: 'POST', headers: { 'Authorization': 'Bearer ' + currentToken }
        });
        const d = await r.json();
        if (!r.ok || !d.success) throw new Error(d.error || 'Ошибка');
        return d;
    }

    function logout() {
        currentToken = null;
        currentUser = null;
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(USER_CACHE_KEY);
        updateHeaderUI();
        closeProfilePage();
    }

    // ── UI: Time formatting ──
    function timeAgo(iso) {
        if (!iso) return 'только что';
        const d = new Date(iso);
        if (isNaN(d.getTime())) return 'только что';
        const ms = Date.now() - d.getTime();
        const mins = Math.floor(ms / 60000);
        const hrs = Math.floor(ms / 3600000);
        const days = Math.floor(ms / 86400000);
        if (mins < 1) return 'только что';
        if (mins < 60) return `${mins} мин.`;
        if (hrs < 24) return `${hrs} ч.`;
        if (days === 1) return 'вчера';
        if (days < 30) return `${days} дн.`;
        return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    }

    function esc(str) {
        if (!str) return '';
        return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    // ── Header avatar button ──
    function updateHeaderUI() {
        const img = document.getElementById('header-user-avatar-img');
        const name = document.getElementById('header-user-name');
        if (currentUser && currentToken) {
            if (img) img.src = currentUser.avatar || 'images/valerius_face.png';
            if (name) name.textContent = currentUser.displayName || currentUser.username;
        } else {
            if (img) img.src = 'images/valerius_face.png';
            if (name) name.textContent = 'Войти';
        }
    }

    // ── Full-page profile show / hide ──
    function openProfilePage() {
        if (!currentUser || !currentToken) { showLoginModal(); return; }
        const page = document.getElementById('profile-page');
        const viewport = document.querySelector('.rpg-app-viewport');
        if (page) {
            page.classList.remove('hidden');
            renderProfilePage();
        }
        if (viewport) viewport.style.display = 'none';
    }

    function closeProfilePage() {
        const page = document.getElementById('profile-page');
        const viewport = document.querySelector('.rpg-app-viewport');
        if (page) page.classList.add('hidden');
        if (viewport) viewport.style.display = '';
    }

    // ── Login modal ──
    function showLoginModal() {
        const m = document.getElementById('modal-auth-login');
        if (m) { m.classList.remove('hidden'); }
    }

    function closeLoginModal() {
        const m = document.getElementById('modal-auth-login');
        if (m) m.classList.add('hidden');
    }

    // ── Render entire profile page ──
    function renderProfilePage() {
        if (!currentUser) return;

        // Topbar
        const topName = document.getElementById('profile-topbar-name');
        if (topName) topName.textContent = currentUser.displayName || currentUser.username;

        // Identity
        const avatarEl = document.getElementById('profile-user-avatar');
        const nameEl = document.getElementById('profile-display-name');
        const handleEl = document.getElementById('profile-handle');
        const bioEl = document.getElementById('profile-bio-text');
        const statusEl = document.getElementById('profile-status-badge');

        if (avatarEl) avatarEl.src = currentUser.avatar || 'images/valerius_face.png';
        if (nameEl) nameEl.textContent = currentUser.displayName || currentUser.username;
        if (handleEl) handleEl.textContent = `@${currentUser.username}`;
        if (bioEl) bioEl.textContent = currentUser.bio || '';
        if (statusEl) statusEl.textContent = currentUser.status || '🚀 Прокачиваю навыки';

        // Stats row
        const photosCount = document.getElementById('profile-photos-count');
        const postsCount = document.getElementById('profile-posts-count');
        const streakCount = document.getElementById('profile-streak-count');
        if (photosCount) photosCount.textContent = (currentUser.photos || []).length;
        if (postsCount) postsCount.textContent = (currentUser.posts || []).length;
        // streak from header
        const streakEl = document.getElementById('rpg-header-streak');
        if (streakCount) streakCount.textContent = streakEl ? streakEl.textContent : '0';

        // English Skill
        refreshEnglishProgress();

        // Gallery + Posts
        renderGallery();
        renderPosts();
    }

    function refreshEnglishProgress() {
        const stats = getEnglishMasteryStats();
        const pctEl = document.getElementById('profile-english-pct-text');
        const fillEl = document.getElementById('profile-english-bar-fill');
        const detailEl = document.getElementById('profile-english-subtext');
        if (pctEl) pctEl.textContent = `${stats.percentage}%`;
        if (fillEl) fillEl.style.width = `${stats.percentage}%`;
        if (detailEl) detailEl.textContent = `A1: ${stats.sumLevels} / ${stats.totalTargetLevels}`;
    }

    // ── Gallery ──
    function renderGallery() {
        const grid = document.getElementById('profile-gallery-grid');
        const countEl = document.getElementById('profile-photos-count');
        if (!grid) return;
        const photos = currentUser.photos || [];
        if (countEl) countEl.textContent = photos.length;

        if (!photos.length) {
            grid.innerHTML = `<div class="profile-empty-gallery-msg" style="grid-column:1/-1;">
                <i class="fa-solid fa-camera-retro"></i><p>Нет фотографий</p></div>`;
            return;
        }
        grid.innerHTML = photos.map(p => `
            <div class="profile-photo-card" data-id="${p.id}">
                <img src="${p.url}" alt="" class="profile-photo-thumb"
                     onclick="window.profileApp.openLightbox('${p.url}','${esc(p.caption || '')}')">
                <div class="profile-photo-actions">
                    <button class="btn-photo-action" onclick="window.profileApp.setPhotoAsAvatar('${p.url}')">
                        <i class="fa-solid fa-user-circle"></i>
                    </button>
                    <button class="btn-photo-action btn-photo-del" onclick="window.profileApp.deletePhoto('${p.id}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>`).join('');
    }

    // ── Posts ──
    function renderPosts() {
        const feed = document.getElementById('profile-posts-feed');
        const countEl = document.getElementById('profile-posts-count');
        if (!feed) return;
        const posts = currentUser.posts || [];
        if (countEl) countEl.textContent = posts.length;

        if (!posts.length) {
            feed.innerHTML = `<div class="profile-empty-posts-msg">
                <i class="fa-solid fa-feather-pointed"></i><p>Нет записей</p></div>`;
            return;
        }
        feed.innerHTML = posts.map(p => `
            <div class="profile-post-card" data-id="${p.id}">
                <div class="profile-post-header">
                    <img src="${p.avatar || currentUser.avatar || 'images/valerius_face.png'}" class="profile-post-avatar" alt="">
                    <div class="profile-post-author-meta">
                        <div class="profile-post-author-name">${esc(p.displayName || p.author)}</div>
                        <div class="profile-post-time">${timeAgo(p.createdAt)}</div>
                    </div>
                    <button class="profile-post-del-btn" onclick="window.profileApp.deletePost('${p.id}')">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                </div>
                ${p.content ? `<div class="profile-post-content">${esc(p.content)}</div>` : ''}
                ${p.imageUrl ? `<img src="${p.imageUrl}" class="profile-post-img" alt=""
                    onclick="window.profileApp.openLightbox('${p.imageUrl}','')">` : ''}
                <div class="profile-post-footer">
                    <button class="profile-post-like-btn ${p.liked ? 'liked' : ''}"
                            onclick="window.profileApp.likePost('${p.id}')">
                        <i class="fa-${p.liked ? 'solid' : 'regular'} fa-heart"></i>
                        <span>${p.likes || 0}</span>
                    </button>
                </div>
            </div>`).join('');
    }

    // ── Lightbox ──
    function openLightbox(url, caption) {
        const lb = document.getElementById('profile-lightbox-modal');
        const img = document.getElementById('profile-lightbox-img');
        const cap = document.getElementById('profile-lightbox-caption');
        if (lb && img) { img.src = url; if (cap) cap.textContent = caption || ''; lb.classList.remove('hidden'); }
    }
    function closeLightbox() {
        const lb = document.getElementById('profile-lightbox-modal');
        if (lb) lb.classList.add('hidden');
    }

    // ── Init all event listeners ──
    function init() {
        // Header profile button → open profile page
        const headerBtn = document.getElementById('profile-header-btn');
        if (headerBtn) headerBtn.addEventListener('click', () => {
            if (currentUser && currentToken) openProfilePage();
            else showLoginModal();
        });

        // Back button → close profile
        const backBtn = document.getElementById('profile-back-btn');
        if (backBtn) backBtn.addEventListener('click', closeProfilePage);

        // Logout
        const logoutBtn = document.getElementById('profile-logout-btn');
        if (logoutBtn) logoutBtn.addEventListener('click', logout);

        // Jump to English stage
        const jumpBtn = document.getElementById('btn-jump-to-english-stage');
        if (jumpBtn) jumpBtn.addEventListener('click', closeProfilePage);

        // ── Login form ──
        const loginClose = document.getElementById('auth-login-close');
        if (loginClose) loginClose.addEventListener('click', closeLoginModal);

        const loginForm = document.getElementById('auth-login-form');
        const loginErr = document.getElementById('auth-login-error');
        if (loginForm) loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const u = document.getElementById('auth-login-username')?.value.trim();
            const p = document.getElementById('auth-login-password')?.value;
            if (!u || !p) { if (loginErr) { loginErr.textContent = 'Введите логин и пароль'; loginErr.classList.remove('hidden'); } return; }
            const btn = document.getElementById('auth-login-submit-btn');
            try {
                if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Вход...'; }
                if (loginErr) loginErr.classList.add('hidden');
                await apiLogin(u, p);
                closeLoginModal();
                updateHeaderUI();
                openProfilePage();
            } catch (err) {
                if (loginErr) { loginErr.textContent = err.message; loginErr.classList.remove('hidden'); }
            } finally {
                if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Войти в профиль'; }
            }
        });

        // ── Tabs ──
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                const target = tab.getAttribute('data-tab');
                const content = document.getElementById(`profile-tab-content-${target}`);
                if (content) content.classList.add('active');
            });
        });

        // ── Edit Profile ──
        const btnEdit = document.getElementById('btn-open-edit-profile');
        const editModal = document.getElementById('modal-edit-profile');
        const editClose = document.getElementById('edit-profile-close');
        const editForm = document.getElementById('edit-profile-form');

        if (btnEdit) btnEdit.addEventListener('click', () => {
            if (!currentUser) return;
            const ni = document.getElementById('edit-display-name');
            const bi = document.getElementById('edit-bio');
            const si = document.getElementById('edit-status');
            const ai = document.getElementById('edit-avatar-url');
            if (ni) ni.value = currentUser.displayName || '';
            if (bi) bi.value = currentUser.bio || '';
            if (si) si.value = currentUser.status || '';
            if (ai) ai.value = currentUser.avatar || '';
            if (editModal) editModal.classList.remove('hidden');
        });
        if (editClose && editModal) editClose.addEventListener('click', () => editModal.classList.add('hidden'));
        if (editForm) editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                await apiUpdateProfile({
                    displayName: document.getElementById('edit-display-name')?.value,
                    bio: document.getElementById('edit-bio')?.value,
                    status: document.getElementById('edit-status')?.value,
                    avatar: document.getElementById('edit-avatar-url')?.value,
                });
                if (editModal) editModal.classList.add('hidden');
                updateHeaderUI();
                renderProfilePage();
            } catch (err) { alert('Ошибка: ' + err.message); }
        });

        // ── Avatar file upload ──
        const avatarFile = document.getElementById('profile-avatar-file-input');
        const btnAvatar = document.getElementById('btn-change-avatar');
        if (btnAvatar && avatarFile) {
            btnAvatar.addEventListener('click', () => avatarFile.click());
            avatarFile.addEventListener('change', (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                const r = new FileReader();
                r.onload = async (ev) => {
                    try { await apiUpdateProfile({ avatar: ev.target.result }); updateHeaderUI(); renderProfilePage(); }
                    catch (err) { alert('Ошибка: ' + err.message); }
                };
                r.readAsDataURL(f);
            });
        }

        // ── Add Photo ──
        const btnAddPhoto = document.getElementById('btn-profile-add-photo');
        const photoModal = document.getElementById('modal-add-photo');
        const photoClose = document.getElementById('add-photo-close');
        const photoForm = document.getElementById('add-photo-form');
        const photoFile = document.getElementById('add-photo-file');
        const photoUrl = document.getElementById('add-photo-url');
        const photoPreview = document.getElementById('add-photo-preview');
        const photoPreviewImg = document.getElementById('add-photo-preview-img');
        let selectedPhotoData = null;

        if (btnAddPhoto && photoModal) btnAddPhoto.addEventListener('click', () => {
            selectedPhotoData = null;
            if (photoForm) photoForm.reset();
            if (photoPreview) photoPreview.classList.add('hidden');
            photoModal.classList.remove('hidden');
        });
        if (photoClose && photoModal) photoClose.addEventListener('click', () => photoModal.classList.add('hidden'));
        if (photoFile) photoFile.addEventListener('change', (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            const r = new FileReader();
            r.onload = (ev) => {
                selectedPhotoData = ev.target.result;
                if (photoPreview && photoPreviewImg) { photoPreviewImg.src = selectedPhotoData; photoPreview.classList.remove('hidden'); }
            };
            r.readAsDataURL(f);
        });
        if (photoUrl) photoUrl.addEventListener('input', (e) => {
            const v = e.target.value.trim();
            if (v && v.startsWith('http')) {
                selectedPhotoData = v;
                if (photoPreview && photoPreviewImg) { photoPreviewImg.src = v; photoPreview.classList.remove('hidden'); }
            }
        });
        if (photoForm) photoForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const caption = document.getElementById('add-photo-caption')?.value.trim() || '';
            const finalPhoto = selectedPhotoData || (photoUrl ? photoUrl.value.trim() : '');
            if (!finalPhoto) { alert('Выберите фото или ссылку'); return; }
            try {
                await apiUploadPhoto(finalPhoto, caption);
                if (photoModal) photoModal.classList.add('hidden');
                renderGallery();
            } catch (err) { alert('Ошибка: ' + err.message); }
        });

        // ── Create Post ──
        const postForm = document.getElementById('profile-create-post-form');
        const postText = document.getElementById('profile-post-input-text');
        const postFileInput = document.getElementById('profile-post-file-input');
        const postPreviewWrap = document.getElementById('profile-post-preview-wrap');
        const postPreviewImg = document.getElementById('profile-post-preview-img');
        const btnAttachImg = document.getElementById('btn-attach-post-image');
        const btnRemoveImg = document.getElementById('btn-remove-post-image');
        let postAttachedImg = null;

        if (btnAttachImg && postFileInput) {
            btnAttachImg.addEventListener('click', () => postFileInput.click());
            postFileInput.addEventListener('change', (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                const r = new FileReader();
                r.onload = (ev) => {
                    postAttachedImg = ev.target.result;
                    if (postPreviewWrap && postPreviewImg) { postPreviewImg.src = postAttachedImg; postPreviewWrap.classList.remove('hidden'); }
                };
                r.readAsDataURL(f);
            });
        }
        if (btnRemoveImg) btnRemoveImg.addEventListener('click', () => {
            postAttachedImg = null;
            if (postFileInput) postFileInput.value = '';
            if (postPreviewWrap) postPreviewWrap.classList.add('hidden');
        });
        if (postForm) postForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const content = postText?.value.trim() || '';
            if (!content && !postAttachedImg) { alert('Напишите текст или прикрепите фото'); return; }
            try {
                await apiCreatePost(content, postAttachedImg);
                if (postText) postText.value = '';
                postAttachedImg = null;
                if (postFileInput) postFileInput.value = '';
                if (postPreviewWrap) postPreviewWrap.classList.add('hidden');
                renderPosts();
            } catch (err) { alert('Ошибка: ' + err.message); }
        });

        // ── Lightbox ──
        const lbClose = document.getElementById('profile-lightbox-close');
        const lbModal = document.getElementById('profile-lightbox-modal');
        if (lbClose) lbClose.addEventListener('click', closeLightbox);
        if (lbModal) lbModal.addEventListener('click', (e) => { if (e.target === lbModal) closeLightbox(); });

        // ── Auto-login ──
        if (currentToken) {
            fetchUserProfile().then(() => updateHeaderUI());
        } else {
            apiLogin('pharmacis', 'Lola1234').then(() => updateHeaderUI()).catch(() => updateHeaderUI());
        }
    }

    // ── Expose public methods ──
    window.profileApp = {
        openProfilePage,
        closeProfilePage,
        showLoginModal,
        closeLoginModal,
        openLightbox,
        closeLightbox,
        refreshEnglishProgress,
        async setPhotoAsAvatar(url) {
            try { await apiUpdateProfile({ avatar: url }); updateHeaderUI(); renderProfilePage(); }
            catch (err) { alert('Ошибка: ' + err.message); }
        },
        async deletePhoto(id) {
            if (!confirm('Удалить фото?')) return;
            try { await apiDeletePhoto(id); renderGallery(); }
            catch (err) { alert('Ошибка: ' + err.message); }
        },
        async deletePost(id) {
            if (!confirm('Удалить запись?')) return;
            try { await apiDeletePost(id); renderPosts(); }
            catch (err) { alert('Ошибка: ' + err.message); }
        },
        async likePost(id) {
            try {
                const res = await apiLikePost(id);
                if (currentUser?.posts) {
                    const p = currentUser.posts.find(x => x.id === id);
                    if (p) { p.liked = res.liked; p.likes = res.likes; localStorage.setItem(USER_CACHE_KEY, JSON.stringify(currentUser)); renderPosts(); }
                }
            } catch (err) { console.error(err); }
        }
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
