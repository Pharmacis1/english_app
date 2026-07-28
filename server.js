/* EnglishPulse AI Node.js Express REST API Server */
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
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

// Start Express Server
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 EnglishPulse AI Server running on http://localhost:${PORT}`);
    console.log(`==================================================`);
});
