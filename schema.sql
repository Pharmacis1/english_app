-- PostgreSQL DDL Migration Schema for EnglishPulse AI RPG

CREATE TABLE IF NOT EXISTS heroes_progress (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    level INT NOT NULL DEFAULT 1,
    xp INT NOT NULL DEFAULT 0,
    max_xp INT NOT NULL DEFAULT 100,
    affinity_level INT NOT NULL DEFAULT 0,
    unlocked BOOLEAN NOT NULL DEFAULT false,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS campaign_stages (
    stage_id VARCHAR(50) PRIMARY KEY,
    chapter_id INT NOT NULL,
    unlocked BOOLEAN NOT NULL DEFAULT false,
    cleared BOOLEAN NOT NULL DEFAULT false,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS srs_cards (
    id SERIAL PRIMARY KEY,
    hero_id VARCHAR(50),
    category VARCHAR(100) NOT NULL,
    word VARCHAR(100) NOT NULL,
    phonetic VARCHAR(100),
    translation VARCHAR(255),
    definition TEXT,
    example TEXT,
    studied BOOLEAN NOT NULL DEFAULT false,
    repetitions INT NOT NULL DEFAULT 0,
    interval_days INT NOT NULL DEFAULT 1,
    ease_factor NUMERIC(5,2) NOT NULL DEFAULT 2.50,
    next_review_date BIGINT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_word_cat UNIQUE (category, word)
);

CREATE TABLE IF NOT EXISTS user_settings (
    setting_key VARCHAR(100) PRIMARY KEY,
    setting_value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
