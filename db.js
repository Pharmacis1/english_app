/* Database Adapter for PostgreSQL with Auto-Migrations & File Fallback */
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dbConnectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

let pool = null;
let usePostgres = false;
const fallbackDbPath = path.join(__dirname, 'db_fallback.json');

// Initialize Fallback JSON DB if needed
function getFallbackDb() {
    if (!fs.existsSync(fallbackDbPath)) {
        fs.writeFileSync(fallbackDbPath, JSON.stringify({
            heroes: {},
            stages: {},
            cards: {},
            settings: {}
        }, null, 2));
    }
    try {
        return JSON.parse(fs.readFileSync(fallbackDbPath, 'utf8'));
    } catch(e) {
        return { heroes: {}, stages: {}, cards: {}, settings: {} };
    }
}

function saveFallbackDb(data) {
    fs.writeFileSync(fallbackDbPath, JSON.stringify(data, null, 2));
}

async function initDatabase() {
    if (dbConnectionString) {
        try {
            pool = new Pool({
                connectionString: dbConnectionString,
                ssl: dbConnectionString.includes('localhost') ? false : { rejectUnauthorized: false }
            });
            
            // Run automatic DDL schema migrations
            const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
            await pool.query(schemaSql);
            usePostgres = true;
            console.log('✅ PostgreSQL Database connected and tables migrated!');
            return;
        } catch (err) {
            console.warn('⚠️ PostgreSQL connection failed, operating with File DB Fallback:', err.message);
        }
    } else {
        console.log('ℹ️ No DATABASE_URL specified in environment. Operating in JSON File DB Fallback mode.');
    }
    
    getFallbackDb();
}

async function query(sql, params = []) {
    if (usePostgres && pool) {
        return await pool.query(sql, params);
    }
    return null; // Handle fallback operations in routes
}

module.exports = {
    initDatabase,
    query,
    getFallbackDb,
    saveFallbackDb,
    isPostgresActive: () => usePostgres
};
