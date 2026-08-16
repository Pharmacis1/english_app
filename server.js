/* EnglishPulse AI Node.js Express REST API Server */
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
require('dotenv').config();

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
            const apiKey = req.body.apiKey || process.env.GEMINI_API_KEY || '';
            if (!apiKey) throw new Error("Gemini API Key missing. Please provide API Key in Local AI Settings.");

            let primaryModel = model || 'gemini-3.5-flash-lite';
            if (!primaryModel || primaryModel.includes(':') || primaryModel.includes('qwen') || primaryModel.includes('llama') || primaryModel.includes('mistral') || !primaryModel.startsWith('gemini') || primaryModel.includes('1.5')) {
                primaryModel = 'gemini-3.5-flash-lite';
            }
            const modelCascade = Array.from(new Set([
                primaryModel, 
                'gemini-3.5-flash-lite', 
                'gemini-3.7-flash', 
                'gemini-3.5-flash', 
                'gemini-2.5-flash-lite', 
                'gemini-2.5-flash', 
                'gemini-2.0-flash-lite',
                'gemini-2.0-flash',
                'gemini-2.5-pro'
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
    const { text, voice, endpoint: rawEndpoint } = req.body;
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

// Start Express Server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 EnglishPulse AI Server running on http://localhost:${PORT}`);
    console.log(`==================================================`);
});
