/**
 * EnglishPulse - Google Cloud Studio Voice Pre-recorder for Speech Drills (A1)
 * Generates pristine studio audio for all 166 A1 speech practice phrases.
 *
 * Uses:
 *   Google Cloud Text-to-Speech (en-US-Studio-O / Studio-Q)
 *
 * Usage:
 *   node scripts/generate_speech_drills_studio.js
 *   node scripts/generate_speech_drills_studio.js --force
 */

const fs = require('fs');
const path = require('path');
const textToSpeech = require('@google-cloud/text-to-speech');

const keyPath = path.join(__dirname, '..', 'google_cloud_credentials.json');
if (!fs.existsSync(keyPath)) {
    console.error("❌ ERROR: google_cloud_credentials.json not found!");
    process.exit(1);
}

const client = new textToSpeech.TextToSpeechClient({
    keyFilename: keyPath
});

// Load speech_drills.js to get all items
const enginePath = path.join(__dirname, '..', 'speech_drills.js');
const engineCode = fs.readFileSync(enginePath, 'utf8');

global.window = global;
global.localStorage = { getItem: () => null, setItem: () => {} };
eval(engineCode);

const engine = window.speechDrillsEngine;
if (!engine || !engine.allItems || engine.allItems.length === 0) {
    console.error("❌ ERROR: Could not load items from speech_drills.js!");
    process.exit(1);
}

const outDir = path.join(__dirname, '..', 'audio', 'speech_drills');
const warmupDir = path.join(__dirname, '..', 'audio', 'warmup');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(warmupDir)) fs.mkdirSync(warmupDir, { recursive: true });

const force = process.argv.includes('--force');

function cleanFilename(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateStudioAudio(item, index, total) {
    const cleanKey = cleanFilename(item.en);
    const targetFile1 = path.join(outDir, `${item.id}.wav`);
    const targetFile2 = path.join(outDir, `${cleanKey}.wav`);
    const targetFile3 = path.join(warmupDir, `${cleanKey}.wav`);

    if (!force && fs.existsSync(targetFile1) && fs.statSync(targetFile1).size > 1000) {
        console.log(`[${index + 1}/${total}] ⏩ Already exists: ${item.id} ("${item.en}")`);
        // Ensure copies exist
        if (!fs.existsSync(targetFile2)) fs.copyFileSync(targetFile1, targetFile2);
        if (!fs.existsSync(targetFile3)) fs.copyFileSync(targetFile1, targetFile3);
        return true;
    }

    console.log(`[${index + 1}/${total}] 🎙️ Synthesizing via Google Studio Voice: "${item.en}"...`);

    const request = {
        input: { text: item.en },
        voice: {
            languageCode: 'en-US',
            name: 'en-US-Studio-O' // Google Studio high-clarity voice
        },
        audioConfig: {
            audioEncoding: 'LINEAR16',
            sampleRateHertz: 24000,
            speakingRate: 0.95
        }
    };

    try {
        const [response] = await client.synthesizeSpeech(request);
        if (response.audioContent && response.audioContent.length > 0) {
            fs.writeFileSync(targetFile1, response.audioContent, 'binary');
            fs.writeFileSync(targetFile2, response.audioContent, 'binary');
            fs.writeFileSync(targetFile3, response.audioContent, 'binary');
            console.log(`[${index + 1}/${total}] ✅ Saved (${response.audioContent.length} bytes): ${item.id}.wav`);
            return true;
        } else {
            console.warn(`[${index + 1}/${total}] ⚠️ Empty audio content returned for "${item.en}"`);
            return false;
        }
    } catch (err) {
        console.error(`[${index + 1}/${total}] ❌ Google Studio TTS Error for "${item.en}":`, err.message);
        return false;
    }
}

async function run() {
    console.log(`=======================================================`);
    console.log(`🔥 Starting Google Studio Speech Generation for ${engine.allItems.length} Phrases`);
    console.log(`📁 Target Directories: ${outDir} & ${warmupDir}`);
    console.log(`🎙️ Voice Model: en-US-Studio-O (Google Cloud Studio Voice)`);
    console.log(`=======================================================\n`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < engine.allItems.length; i++) {
        const item = engine.allItems[i];
        const ok = await generateStudioAudio(item, i, engine.allItems.length);
        if (ok) {
            successCount++;
        } else {
            failCount++;
        }
        // Polite pacing between requests
        await sleep(150);
    }

    console.log(`\n=======================================================`);
    console.log(`🎉 COMPLETED GOOGLE STUDIO AUDIO PRE-GENERATION!`);
    console.log(`✅ Successfully generated: ${successCount} / ${engine.allItems.length}`);
    if (failCount > 0) {
        console.log(`❌ Failed items: ${failCount}`);
    }
    console.log(`=======================================================`);
}

run();
