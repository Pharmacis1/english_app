/* EnglishPulse AI Node.js Express REST API Server */
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const db = require('./db');
require('dotenv').config();

// Global crash prevention handlers
process.on('uncaughtException', (err) => {
    console.error('[CRITICAL] Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('[CRITICAL] Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname))); // Serve static web application

// Initialize Database Connection
db.initDatabase();

// --- REST API ENDPOINTS ---

// 1. GET /api/heroes — Get all heroes state
app.get('/api/heroes', async (req, res) => {
    try {
        if (db.isPostgresActive()) {
            const result = await db.query('SELECT * FROM heroes_progress ORDER BY id ASC');
            return res.json({ success: true, heroes: result.rows });
        } else {
            const localData = db.getFallbackDb();
            return res.json({ success: true, heroes: localData.heroes || {} });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 2. POST /api/heroes/save — Save/Sync heroes state
app.post('/api/heroes/save', async (req, res) => {
    try {
        const { heroes } = req.body; // Array of hero objects
        if (!Array.isArray(heroes)) return res.status(400).json({ success: false, error: "Invalid heroes array" });

        if (db.isPostgresActive()) {
            for (const h of heroes) {
                await db.query(`
                    INSERT INTO heroes_progress (id, name, level, xp, max_xp, affinity_level, unlocked, updated_at)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
                    ON CONFLICT (id) DO UPDATE SET
                        level = EXCLUDED.level,
                        xp = EXCLUDED.xp,
                        max_xp = EXCLUDED.max_xp,
                        affinity_level = EXCLUDED.affinity_level,
                        unlocked = EXCLUDED.unlocked,
                        updated_at = NOW()
                `, [h.id, h.name, h.level, h.xp, h.maxXp, h.affinityLevel, h.unlocked]);
            }
        } else {
            const localData = db.getFallbackDb();
            localData.heroes = heroes;
            db.saveFallbackDb(localData);
        }
        res.json({ success: true, message: "Heroes progress synced!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 3. GET /api/flashcards — Get SRS deck card states
app.get('/api/flashcards', async (req, res) => {
    try {
        if (db.isPostgresActive()) {
            const result = await db.query('SELECT * FROM srs_cards ORDER BY id ASC');
            return res.json({ success: true, cards: result.rows });
        } else {
            const localData = db.getFallbackDb();
            return res.json({ success: true, cards: localData.cards || {} });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 4. POST /api/flashcards/sync — Sync SRS decks state
app.post('/api/flashcards/sync', async (req, res) => {
    try {
        const { decks } = req.body;
        if (!decks) return res.status(400).json({ success: false, error: "Decks payload missing" });

        if (db.isPostgresActive()) {
            for (const catName of Object.keys(decks)) {
                if (catName === "🧠 Due for SRS Review") continue;
                for (const card of decks[catName]) {
                    await db.query(`
                        INSERT INTO srs_cards (hero_id, category, word, phonetic, translation, definition, example, studied, repetitions, interval_days, ease_factor, next_review_date, updated_at)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW())
                        ON CONFLICT (category, word) DO UPDATE SET
                            studied = EXCLUDED.studied,
                            repetitions = EXCLUDED.repetitions,
                            interval_days = EXCLUDED.interval_days,
                            ease_factor = EXCLUDED.ease_factor,
                            next_review_date = EXCLUDED.next_review_date,
                            updated_at = NOW()
                    `, [
                        card.heroId || null, catName, card.word, card.phonetic, card.translation,
                        card.definition, card.example, card.studied || false, card.repetitions || 0,
                        card.interval || 1, card.easeFactor || 2.5, card.nextReviewDate || 0
                    ]);
                }
            }
        } else {
            const localData = db.getFallbackDb();
            localData.cards = decks;
            db.saveFallbackDb(localData);
        }
        res.json({ success: true, message: "SRS Decks synced!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 5. GET /api/backup/export — Export Full JSON Save File
app.get('/api/backup/export', async (req, res) => {
    try {
        let exportData = {};
        if (db.isPostgresActive()) {
            const heroes = (await db.query('SELECT * FROM heroes_progress')).rows;
            const stages = (await db.query('SELECT * FROM campaign_stages')).rows;
            const cards = (await db.query('SELECT * FROM srs_cards')).rows;
            const settings = (await db.query('SELECT * FROM user_settings')).rows;
            exportData = { exportedAt: new Date().toISOString(), heroes, stages, cards, settings };
        } else {
            exportData = db.getFallbackDb();
            exportData.exportedAt = new Date().toISOString();
        }

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename="english_pulse_backup.json"');
        res.send(JSON.stringify(exportData, null, 2));
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 6. POST /api/backup/import — Import Full JSON Save File
app.post('/api/backup/import', async (req, res) => {
    try {
        const importData = req.body;
        if (!importData) return res.status(400).json({ success: false, error: "Empty import file" });

        if (!db.isPostgresActive()) {
            db.saveFallbackDb(importData);
        }
        res.json({ success: true, message: "Save data successfully imported!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 6.1 GET /api/player/sync — Full state fetch for multi-device sync (PC <-> Mobile)
app.get('/api/player/sync', async (req, res) => {
    try {
        const fs = require('fs');
        const syncFile = path.join(__dirname, 'player_sync_data.json');
        if (fs.existsSync(syncFile)) {
            const raw = fs.readFileSync(syncFile, 'utf8');
            const data = JSON.parse(raw);
            return res.json({ success: true, state: data });
        } else {
            const fallback = db.getFallbackDb();
            return res.json({ success: true, state: fallback || {} });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 6.2 POST /api/player/sync — Full state save & merge across devices
app.post('/api/player/sync', async (req, res) => {
    try {
        const fs = require('fs');
        const statePayload = req.body;
        if (!statePayload || typeof statePayload !== 'object') {
            return res.status(400).json({ success: false, error: "Invalid state payload" });
        }
        const syncFile = path.join(__dirname, 'player_sync_data.json');
        let existing = {};
        if (fs.existsSync(syncFile)) {
            try { existing = JSON.parse(fs.readFileSync(syncFile, 'utf8')); } catch(e) {}
        }

        const safeStreak = Math.max(
            existing.streak || 0,
            existing.streak_days || 0,
            statePayload.streak || 0,
            statePayload.streak_days || 0
        );

        const safeLastStreakDate = (statePayload.last_streak_date && statePayload.last_streak_date >= (existing.last_streak_date || ''))
            ? statePayload.last_streak_date
            : (existing.last_streak_date || statePayload.last_streak_date || '');

        let mergedHeroes = existing.heroes;
        if (Array.isArray(statePayload.heroes) && statePayload.heroes.length > 0) {
            const existingHeroes = Array.isArray(existing.heroes) ? existing.heroes : [];
            mergedHeroes = statePayload.heroes.map((sh, idx) => {
                const eh = existingHeroes.find(h => h.id === sh.id);
                const bestLvl = Math.max(sh.level || 1, eh ? (eh.level || 1) : 1);
                const bestXp = Math.max(sh.xp || 0, eh ? (eh.xp || 0) : 0);
                const isUnlocked = Boolean(idx <= 1 || sh.unlocked || (eh && eh.unlocked) || bestLvl > 1 || bestXp > 0);
                return {
                    ...(eh || {}),
                    ...sh,
                    level: bestLvl,
                    xp: bestXp,
                    unlocked: isUnlocked
                };
            });
        }

        const merged = {
            ...existing,
            ...statePayload,
            heroes: mergedHeroes || statePayload.heroes || existing.heroes,
            streak: safeStreak,
            streak_days: safeStreak,
            last_streak_date: safeLastStreakDate,
            writing_words: Math.max(existing.writing_words || 0, statePayload.writing_words || 0),
            listening_words: Math.max(existing.listening_words || 0, statePayload.listening_words || 0),
            speaking_words: Math.max(existing.speaking_words || 0, statePayload.speaking_words || 0),
            drills_cards: Math.max(existing.drills_cards || 0, statePayload.drills_cards || 0),
            visual_fluency_xp: Math.max(existing.visual_fluency_xp || 0, statePayload.visual_fluency_xp || 0),
            lastSyncedAt: new Date().toISOString()
        };
        fs.writeFileSync(syncFile, JSON.stringify(merged, null, 2), 'utf8');

        // Also sync heroes to fallback db if provided
        if (mergedHeroes && !db.isPostgresActive()) {
            const fallback = db.getFallbackDb();
            fallback.heroes = mergedHeroes;
            if (statePayload.cards) fallback.cards = statePayload.cards;
            db.saveFallbackDb(fallback);
        }

        return res.json({ success: true, message: "Player state synced successfully!", lastSyncedAt: merged.lastSyncedAt });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 6.1 GET /api/translate — Fast server-side proxy for chunk & text translation
const translationCache = new Map();
app.get('/api/translate', async (req, res) => {
    try {
        const text = (req.query.text || '').trim();
        const sl = req.query.from || 'en';
        const tl = req.query.to || 'ru';
        if (!text) return res.json({ success: true, translation: '' });

        const cacheKey = `${sl}:${tl}:${text.toLowerCase()}`;
        if (translationCache.has(cacheKey)) {
            return res.json({ success: true, translation: translationCache.get(cacheKey), cached: true });
        }

        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(sl)}&tl=${encodeURIComponent(tl)}&dt=t&q=${encodeURIComponent(text)}`;
        const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!r.ok) throw new Error(`Translate status ${r.status}`);
        const data = await r.json();
        let translated = '';
        if (Array.isArray(data) && Array.isArray(data[0])) {
            translated = data[0].map(item => (item && item[0]) ? item[0] : '').join('');
        }
        if (translated) {
            translationCache.set(cacheKey, translated);
            if (translationCache.size > 2000) {
                const firstKey = translationCache.keys().next().value;
                translationCache.delete(firstKey);
            }
        }
        res.json({ success: true, translation: translated || text });
    } catch (err) {
        console.error('Translation proxy error:', err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 7. GET /api/ai/models — Proxy fetch installed models from Ollama / LM Studio (bypasses CORS)
app.get('/api/ai/models', async (req, res) => {
    const provider = req.query.provider || 'ollama';
    const rawEndpoint = req.query.endpoint || 'http://127.0.0.1:11434';
    const endpoint = rawEndpoint.replace(/\/$/, '').replace('localhost', '127.0.0.1');

    try {
        if (provider === 'ollama') {
            const resp = await fetch(`${endpoint}/api/tags`);
            if (resp.ok) {
                const data = await resp.json();
                const modelNames = (data.models || []).map(m => m.name);
                return res.json({ success: true, provider: 'ollama', models: modelNames });
            }
        } else if (provider === 'lmstudio') {
            const resp = await fetch(`${endpoint}/v1/models`);
            if (resp.ok) {
                const data = await resp.json();
                const modelNames = (data.data || []).map(m => m.id);
                return res.json({ success: true, provider: 'lmstudio', models: modelNames });
            }
        }
        return res.json({ success: false, models: [], message: `Server at ${endpoint} returned status ${resp ? resp.status : 'error'}` });
    } catch (err) {
        return res.json({ success: false, models: [], message: `Could not connect to ${provider} at ${endpoint}: ${err.message}` });
    }
});

// 8. POST /api/ai/chat — Proxy chat completion request to bypass CORS
app.post('/api/ai/chat', async (req, res) => {
    const { provider, endpoint: rawEndpoint, model, messages, num_ctx } = req.body;
    const endpoint = (rawEndpoint || 'http://127.0.0.1:11434').replace(/\/$/, '').replace('localhost', '127.0.0.1');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 90000); // 90 sec timeout for heavy models

    try {
        if (provider === 'ollama') {
            const resp = await fetch(`${endpoint}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    model, 
                    messages, 
                    stream: false,
                    options: { num_ctx: num_ctx || 4096 }
                }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!resp.ok) throw new Error(`Ollama HTTP Error ${resp.status}`);
            const data = await resp.json();
            return res.json({ success: true, content: data.message.content });
        } else if (provider === 'lmstudio') {
            const resp = await fetch(`${endpoint}/v1/chat/completions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ model, messages, temperature: 0.7, max_tokens: 300 }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (!resp.ok) throw new Error(`LM Studio HTTP Error ${resp.status}`);
            const data = await resp.json();
            return res.json({ success: true, content: data.choices[0].message.content });
        } else if (provider === 'gemini') {
            const apiKey = process.env.GEMINI_API_KEY || req.body.apiKey || '';
            if (!apiKey) throw new Error("Gemini API Key missing. Please provide API Key in Local AI Settings.");

            let primaryModel = model || 'gemini-3.5-flash-lite';
            if (!primaryModel || primaryModel.includes('3.7') || primaryModel.includes('2.5') || primaryModel.includes('2.0') || primaryModel.includes('1.5') || primaryModel.includes(':') || primaryModel.includes('qwen') || primaryModel.includes('llama') || primaryModel.includes('mistral') || !primaryModel.startsWith('gemini')) {
                primaryModel = 'gemini-3.5-flash-lite';
            }
            const modelCascade = Array.from(new Set([
                primaryModel, 
                'gemini-3.5-flash-lite', 
                'gemini-3.5-flash'
            ]));

            async function callGeminiApi(targetModel) {
                const contents = [];
                let systemInstruction = null;

                messages.forEach(msg => {
                    if (msg.role === 'system') {
                        systemInstruction = { parts: [{ text: msg.content }] };
                    } else {
                        const role = msg.role === 'assistant' ? 'model' : 'user';
                        contents.push({ role, parts: [{ text: msg.content }] });
                    }
                });

                const payload = { contents };
                if (systemInstruction) payload.systemInstruction = systemInstruction;

                const url = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;
                const singleController = new AbortController();
                const singleTimer = setTimeout(() => singleController.abort(), 12000);
                try {
                    const fetchRes = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload),
                        signal: singleController.signal
                    });
                    clearTimeout(singleTimer);
                    return fetchRes;
                } catch(e) {
                    clearTimeout(singleTimer);
                    return null;
                }
            }

            let resp = null;
            let lastErrorMsg = "";

            for (const targetM of modelCascade) {
                resp = await callGeminiApi(targetM);
                if (resp && resp.ok) {
                    req.actualGeminiModel = targetM;
                    break;
                } else if (resp) {
                    const errData = await resp.json().catch(() => ({}));
                    lastErrorMsg = errData.error?.message || `Gemini API Error ${resp.status}`;
                    console.warn(`[Gemini Proxy] Model '${targetM}' returned ${resp.status}: ${lastErrorMsg}. Trying next in cascade...`);
                }
            }

            clearTimeout(timeoutId);
            if (!resp || !resp.ok) {
                throw new Error(lastErrorMsg || "All Gemini API models failed");
            }

            const data = await resp.json();
            const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            return res.json({ success: true, content: textContent, activeModel: req.actualGeminiModel });
        }
        clearTimeout(timeoutId);
        return res.status(400).json({ success: false, error: "Unsupported provider" });
    } catch (err) {
        clearTimeout(timeoutId);
        const isTimeout = err.name === 'AbortError';
        const errorMsg = isTimeout 
            ? `Timeout: Model '${model}' took too long. Please check your network or API Key.`
            : err.message;
        return res.status(500).json({ success: false, error: errorMsg });
    }
});

// 9. POST /api/ai/tts — Proxy request to local Kokoro/Piper TTS FastAPI server (OpenAI-compatible)
app.post('/api/ai/tts', async (req, res) => {
    const { text, voice, speed, endpoint: rawEndpoint } = req.body;
    if (!text) return res.status(400).json({ success: false, error: "Text payload missing" });

    const endpoint = (rawEndpoint || 'http://127.0.0.1:8880').replace(/\/$/, '').replace('localhost', '127.0.0.1');

    try {
        const resp = await fetch(`${endpoint}/v1/audio/speech`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'kokoro',
                input: text,
                voice: voice || 'af_heart',
                speed: parseFloat(speed) || 1.0,
                response_format: 'mp3'
            })
        });

        if (resp.ok) {
            const buffer = await resp.arrayBuffer();
            res.setHeader('Content-Type', 'audio/mpeg');
            return res.send(Buffer.from(buffer));
        }
        return res.status(200).json({ fallback: true, error: `Local Kokoro TTS returned ${resp.status}` });
    } catch (err) {
        return res.status(200).json({ fallback: true, error: `Kokoro TTS connection offline` });
    }
});

// 10. POST /api/ai/stt — Proxy request to local Whisper STT server (OpenAI-compatible)
app.post('/api/ai/stt', async (req, res) => {
    const { audioBase64, endpoint: rawEndpoint } = req.body;
    if (!audioBase64) return res.status(400).json({ success: false, error: "Audio data missing" });

    const endpoint = (rawEndpoint || 'http://127.0.0.1:8000').replace(/\/$/, '').replace('localhost', '127.0.0.1');

    try {
        const audioBuffer = Buffer.from(audioBase64.replace(/^data:audio\/\w+;base64,/, ''), 'base64');
        const formData = new FormData();
        const blob = new Blob([audioBuffer], { type: 'audio/wav' });
        formData.append('file', blob, 'speech.wav');
        formData.append('model', 'whisper-1');
        formData.append('language', 'en');

        const resp = await fetch(`${endpoint}/v1/audio/transcriptions`, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const data = await resp.json();
            return res.json({ success: true, text: data.text });
        }
        return res.status(502).json({ success: false, fallback: true, error: `Local Whisper STT returned ${resp.status}` });
    } catch (err) {
        return res.status(502).json({ success: false, fallback: true, error: `Whisper STT connection failed at ${endpoint}: ${err.message}` });
    }
});

// 11. POST /api/ai/stt-groq — Proxy request to Groq Cloud Whisper Large v3 (ultra-fast transcription)
app.post('/api/ai/stt-groq', async (req, res) => {
    try {
        const { audioBase64, apiKey: clientApiKey, prompt } = req.body;
        if (!audioBase64) return res.status(400).json({ success: false, error: "Audio data missing" });

        const apiKey = clientApiKey || process.env.GROQ_API_KEY || '';
        if (!apiKey) return res.status(401).json({ success: false, error: "Groq API Key is not set. Add it in Settings or .env file." });
        const commaIdx = audioBase64.indexOf(',');
        const rawBase64 = commaIdx !== -1 ? audioBase64.substring(commaIdx + 1) : audioBase64;
        const audioBuffer = Buffer.from(rawBase64, 'base64');
        const formData = new FormData();
        const blob = new Blob([audioBuffer], { type: 'audio/webm' });
        formData.append('file', blob, 'speech.webm');
        formData.append('model', 'whisper-large-v3');
        formData.append('language', 'en');
        formData.append('response_format', 'json');
        formData.append('temperature', '0.0');
        
        const rpgPrompt = prompt || 'Fantasy RPG dialogue: paladin, knight, rogue, guild, stealth, warrior, spell, potion, castle, sword, armor, oath, shield, quest.';
        formData.append('prompt', rpgPrompt);

        const resp = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            body: formData
        });

        if (resp.ok) {
            const data = await resp.json();
            return res.json({ success: true, text: data.text });
        }
        const errText = await resp.text();
        return res.status(resp.status).json({ success: false, fallback: true, error: `Groq Whisper returned ${resp.status}: ${errText}` });
    } catch (err) {
        return res.status(500).json({ success: false, fallback: true, error: `Groq Whisper connection failed: ${err.message}` });
    }
});

// 11.5 GET /api/audio-manifest — In-memory cached index of pre-recorded audio files
let cachedAudioManifest = null;
app.get('/api/audio-manifest', (req, res) => {
    try {
        if (!cachedAudioManifest) {
            const getKeys = (dir) => {
                const fullPath = path.join(__dirname, 'audio', dir);
                if (!fs.existsSync(fullPath)) return [];
                return fs.readdirSync(fullPath)
                    .filter(f => f.endsWith('.wav'))
                    .map(f => f.slice(0, -4).toLowerCase());
            };
            cachedAudioManifest = {
                words: getKeys('words'),
                drills: getKeys('drills'),
                warmup: getKeys('warmup')
            };
        }
        res.setHeader('Cache-Control', 'public, max-age=3600');
        return res.json(cachedAudioManifest);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Helper: Convert PCM 16-bit 24kHz mono buffer to standard WAV
function pcmToWav(pcmBuffer, sampleRate = 24000, numChannels = 1, bitsPerSample = 16) {
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);
    const wavHeader = Buffer.alloc(44);

    wavHeader.write('RIFF', 0);
    wavHeader.writeUInt32LE(36 + pcmBuffer.length, 4);
    wavHeader.write('WAVE', 8);
    wavHeader.write('fmt ', 12);
    wavHeader.writeUInt32LE(16, 16);
    wavHeader.writeUInt16LE(1, 20);
    wavHeader.writeUInt16LE(numChannels, 22);
    wavHeader.writeUInt32LE(sampleRate, 24);
    wavHeader.writeUInt32LE(byteRate, 28);
    wavHeader.writeUInt16LE(blockAlign, 32);
    wavHeader.writeUInt16LE(bitsPerSample, 34);
    wavHeader.write('data', 36);
    wavHeader.writeUInt32LE(pcmBuffer.length, 40);

    return Buffer.concat([wavHeader, pcmBuffer]);
}

// 12. POST /api/ai/gemini-tts — Native Google Gemini TTS with rich emotional intonations & Disk Caching
app.post('/api/ai/gemini-tts', async (req, res) => {
    try {
        const { text, voiceName: clientVoice, apiKey: clientApiKey } = req.body;
        if (!text) return res.status(400).json({ success: false, error: "Text payload missing" });

        const voiceName = clientVoice || 'Fenrir'; // Kore, Puck, Charon, Fenrir, Aoede
        const cleanKey = text.replace(/[*_#`]/g, '').trim().toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');

        // 1. Instant Disk Cache / Pre-recorded check (0.0s latency!)
        const localCandidates = [
            path.join(__dirname, 'audio', 'words', `${cleanKey}.wav`),
            path.join(__dirname, 'audio', 'cache', `${voiceName}_${cleanKey}.wav`),
            path.join(__dirname, 'audio', 'drills', `${cleanKey}.wav`),
            path.join(__dirname, 'audio', 'warmup', `${cleanKey}.wav`)
        ];
        for (const candidatePath of localCandidates) {
            if (fs.existsSync(candidatePath)) {
                res.setHeader('Content-Type', 'audio/wav');
                return res.sendFile(candidatePath);
            }
        }

        const apiKey = process.env.GEMINI_API_KEY || clientApiKey || '';
        if (!apiKey) return res.status(401).json({ success: false, error: "Gemini API Key missing. Please provide API Key in Settings." });

        const models = [
            'gemini-2.5-flash-preview-tts',
            'gemini-3.1-flash-tts-preview',
            'gemini-2.5-pro-preview-tts',
            'gemini-2.0-flash',
            'gemini-2.0-flash-exp'
        ];

        for (const model of models) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{
                    role: 'user',
                    parts: [{ text: text }]
                }],
                generationConfig: {
                    responseModalities: ['AUDIO'],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: {
                                voiceName: voiceName
                            }
                        }
                    }
                }
            };

            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 10000);
            try {
                const resp = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    signal: controller.signal
                });
                clearTimeout(timer);

                if (resp.ok) {
                    const data = await resp.json();
                    const part = data.candidates?.[0]?.content?.parts?.[0];
                    if (part?.inlineData?.data) {
                        const rawPcm = Buffer.from(part.inlineData.data, 'base64');
                        const wavBuffer = pcmToWav(rawPcm, 24000, 1, 16);

                        // Asynchronously persist to cache on disk for instant 0ms future playback
                        try {
                            const cacheDir = path.join(__dirname, 'audio', 'cache');
                            if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });
                            const cacheFilePath = path.join(cacheDir, `${voiceName}_${cleanKey}.wav`);
                            fs.writeFile(cacheFilePath, wavBuffer, () => {});
                        } catch (cacheErr) {}

                        res.setHeader('Content-Type', 'audio/wav');
                        return res.send(wavBuffer);
                    }
                }
            } catch (fetchErr) {
                clearTimeout(timer);
                console.warn(`[Gemini TTS] Model ${model} failed:`, fetchErr.message);
            }
        }

        return res.status(502).json({ success: false, fallback: true, error: "All Gemini TTS models failed" });
    } catch (err) {
        return res.status(500).json({ success: false, fallback: true, error: `Gemini TTS server error: ${err.message}` });
    }
});

// 13. POST /api/reports — Save issue report with screenshot and metadata into reports/ directory
app.post('/api/reports', (req, res) => {
    try {
        const { screenshot, description, category, metadata } = req.body;
        if (!screenshot) {
            return res.status(400).json({ success: false, error: 'Screenshot data is required' });
        }

        const reportsDir = path.join(__dirname, 'reports');
        if (!fs.existsSync(reportsDir)) {
            fs.mkdirSync(reportsDir, { recursive: true });
        }

        const now = new Date();
        const pad = (n) => String(n).padStart(2, '0');
        const dateTag = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
        const rawMode = (metadata && metadata.activeMode) ? metadata.activeMode : 'general';
        const modeTag = rawMode.replace(/[^a-zA-Z0-9а-яА-ЯёЁ_-]/g, '_').substring(0, 30);
        const folderName = `report_${dateTag}_${modeTag}`;
        const reportFolder = path.join(reportsDir, folderName);

        fs.mkdirSync(reportFolder, { recursive: true });

        // Save screenshot
        const isJpeg = screenshot.startsWith('data:image/jpeg') || screenshot.startsWith('data:image/jpg');
        const ext = isJpeg ? 'jpg' : 'png';
        const screenshotFileName = `screenshot.${ext}`;
        const base64Data = screenshot.replace(/^data:image\/\w+;base64,/, '');
        const imgBuffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(path.join(reportFolder, screenshotFileName), imgBuffer);

        // Save report.json
        const localTimeStr = (metadata && metadata.localTime) ? metadata.localTime : now.toLocaleString('ru-RU');
        const reportData = {
            id: folderName,
            timestamp: now.toISOString(),
            localTime: localTimeStr,
            category: category || 'Баг / Ошибка',
            description: (description && description.trim()) ? description.trim() : '(Без текста описания)',
            mode: (metadata && metadata.activeMode) || 'Unknown',
            hero: (metadata && metadata.activeHero) || 'Unknown',
            subContext: (metadata && metadata.subContext) || '',
            viewport: (metadata && metadata.viewport) || {},
            url: (metadata && metadata.url) || '',
            userAgent: (metadata && metadata.userAgent) || '',
            logs: (metadata && metadata.recentLogs) || [],
            screenshotFile: screenshotFileName
        };
        fs.writeFileSync(path.join(reportFolder, 'report.json'), JSON.stringify(reportData, null, 2), 'utf-8');

        // Save report.md
        const logsFormatted = reportData.logs && reportData.logs.length > 0
            ? '```json\n' + JSON.stringify(reportData.logs, null, 2) + '\n```'
            : '_Логов ошибок консоли нет_';

        const reportMd = `# 🐞 Отчёт о проблеме: ${folderName}

- **📅 Дата и время:** ${reportData.localTime}
- **🕹️ Режим / Экран:** ${reportData.mode}
- **👤 Активный герой:** ${reportData.hero}
- **🏷️ Категория:** ${reportData.category}
- **📐 Разрешение экрана:** ${reportData.viewport.width || '?'}x${reportData.viewport.height || '?'}

---

## 📝 Описание пользователя
> ${reportData.description.replace(/\n/g, '\n> ')}

---

## 📸 Скриншот экрана
![Скриншот проблемы](./${screenshotFileName})

---

## 🛠️ Дополнительная информация
- **URL:** \`${reportData.url}\`
- **Контекст:** ${reportData.subContext || '—'}
- **User Agent:** \`${reportData.userAgent}\`

### 📋 Последние логи / ошибки браузера:
${logsFormatted}
`;
        fs.writeFileSync(path.join(reportFolder, 'report.md'), reportMd, 'utf-8');

        // Append to REPORTS_INDEX.md
        const indexFile = path.join(reportsDir, 'REPORTS_INDEX.md');
        let indexHeader = '';
        if (!fs.existsSync(indexFile)) {
            indexHeader = `# 📋 Журнал сообщений о проблемах (Bug & Feedback Reports)\n\n| Дата | Режим | Категория | Описание | Ссылка |\n|---|---|---|---|---|\n`;
        }
        const shortDesc = reportData.description.replace(/[\r\n]+/g, ' ').substring(0, 80);
        const indexRow = `| ${reportData.localTime} | ${reportData.mode} | ${reportData.category} | ${shortDesc} | [Открыть отчёт](./${folderName}/report.md) |\n`;

        if (!fs.existsSync(indexFile)) {
            fs.writeFileSync(indexFile, indexHeader + indexRow, 'utf-8');
        } else {
            fs.appendFileSync(indexFile, indexRow, 'utf-8');
        }

        console.log(`[Bug Report] New report saved: ${folderName}`);
        return res.json({
            success: true,
            reportId: folderName,
            folder: `reports/${folderName}`,
            message: 'Отчёт успешно сохранён!'
        });
    } catch (err) {
        console.error('[Bug Report Error]', err);
        return res.status(500).json({ success: false, error: err.message });
    }
});

// 14. GET /api/reports — Get list of all saved reports
app.get('/api/reports', (req, res) => {
    try {
        const reportsDir = path.join(__dirname, 'reports');
        if (!fs.existsSync(reportsDir)) {
            return res.json({ success: true, reports: [] });
        }
        const items = fs.readdirSync(reportsDir, { withFileTypes: true });
        const reports = [];
        for (const item of items) {
            if (item.isDirectory() && item.name.startsWith('report_')) {
                const jsonPath = path.join(reportsDir, item.name, 'report.json');
                if (fs.existsSync(jsonPath)) {
                    try {
                        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
                        reports.push(data);
                    } catch (e) {}
                }
            }
        }
        reports.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        res.json({ success: true, reports });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Shutdown Endpoint
app.post('/api/admin/shutdown', (req, res) => {
    res.json({ success: true, message: "Server shutting down..." });
    setTimeout(() => {
        try {
            const { exec } = require('child_process');
            exec('powershell -Command "Get-Process -Name node, zrok -ErrorAction SilentlyContinue | Stop-Process -Force"');
        } catch(e) {}
        process.exit(0);
    }, 500);
});

// Global Express error handler (catches JSON parse errors and unhandled route exceptions)
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.warn(`[Express JSON Parse Error] ${req.method} ${req.url}: Malformed JSON in request`);
        return res.status(400).json({ success: false, error: 'Invalid JSON payload' });
    }
    console.error('[Express Unhandled Error]', err);
    if (!res.headersSent) {
        return res.status(err.status || 500).json({ success: false, error: err.message || 'Internal Server Error' });
    }
    next(err);
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 EnglishPulse AI Server running on http://localhost:${PORT}`);
    console.log(`==================================================`);
});
