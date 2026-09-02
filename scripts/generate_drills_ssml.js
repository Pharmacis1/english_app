/**
 * EnglishPulse - Google Cloud TTS SSML Drills Generator
 * Uses official Google Cloud Text-to-Speech API (Neural2 voices)
 * Rich SSML intonation markup: questions pitch-up, negative contractions stressed, modals emphasized.
 * Free under Google Cloud's 1,000,000 characters/month free tier.
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

const jsonPath = path.join(__dirname, 'drill_phrases.json');
if (!fs.existsSync(jsonPath)) {
    console.error("❌ ERROR: scripts/drill_phrases.json not found!");
    process.exit(1);
}

const drills = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const outDir = path.join(__dirname, '..', 'audio', 'drills');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

function toSSML(text) {
    let clean = text.trim();

    // 1. Emphasize negative contractions with strong acoustic stress
    clean = clean.replace(/\b(doesn't|don't|didn't|isn't|aren't|wasn't|weren't|cannot|can't)\b/gi, '<emphasis level="strong">$1</emphasis>');

    // 2. Emphasize modal verbs
    clean = clean.replace(/\b(must|should)\b/gi, '<emphasis level="moderate">$1</emphasis>');

    // 3. Questions with natural rising terminal pitch
    if (clean.endsWith('?')) {
        return `<speak><prosody rate="0.95" pitch="+3st">${clean}</prosody></speak>`;
    }

    // 4. Default natural statement
    return `<speak><prosody rate="0.95">${clean}</prosody></speak>`;
}

function cleanFilename(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 50);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function synthesizeSSML(ssml, voiceName) {
    const request = {
        input: { ssml: ssml },
        voice: {
            languageCode: 'en-US',
            name: voiceName
        },
        audioConfig: {
            audioEncoding: 'LINEAR16', // Studio-quality uncompressed WAV
            sampleRateHertz: 24000
        }
    };

    const [response] = await client.synthesizeSpeech(request);
    return response.audioContent;
}

async function run() {
    console.log("==================================================");
    console.log("🎙️ EnglishPulse - Google Cloud TTS SSML Drills Generator");
    console.log("==================================================");
    console.log(`📋 Total Drill Patterns: ${drills.length} (${drills.length * 2} audio files)`);
    console.log("🎭 Voices: Female (en-US-Neural2-F) & Male (en-US-Neural2-D)");
    console.log("🎛️ Markup: Dynamic SSML with pitch-up questions & negative stress");

    let totalGenerated = 0;
    let totalSkipped = 0;

    for (let i = 0; i < drills.length; i++) {
        const item = drills[i];
        const isFemale = (i % 2 === 0);
        const voiceName = isFemale ? 'en-US-Neural2-F' : 'en-US-Neural2-D';
        const genderLabel = isFemale ? '👩 Female (Neural2-F)' : '👨 Male (Neural2-D)';

        const origFile = path.join(outDir, `orig_${cleanFilename(item.original)}.wav`);
        const targetFile = path.join(outDir, `target_${cleanFilename(item.target)}.wav`);

        console.log(`\n[${i + 1}/${drills.length}] ${genderLabel}:`);
        console.log(`  Orig:   "${item.original}"`);
        console.log(`  Target: "${item.target}"`);

        // 1. Original Phrase
        try {
            const ssml = toSSML(item.original);
            const audioBuffer = await synthesizeSSML(ssml, voiceName);
            fs.writeFileSync(origFile, audioBuffer, 'binary');
            totalGenerated++;
            process.stdout.write(`    ✅ Original saved (${(audioBuffer.length / 1024).toFixed(1)} KB) `);
        } catch (err) {
            process.stdout.write(`    ❌ Original Error: ${err.message} `);
        }

        await sleep(250);

        // 2. Target Phrase
        try {
            const ssml = toSSML(item.target);
            const audioBuffer = await synthesizeSSML(ssml, voiceName);
            fs.writeFileSync(targetFile, audioBuffer, 'binary');
            totalGenerated++;
            process.stdout.write(`| ✅ Target saved (${(audioBuffer.length / 1024).toFixed(1)} KB)\n`);
        } catch (err) {
            process.stdout.write(`| ❌ Target Error: ${err.message}\n`);
        }

        await sleep(250);
    }

    console.log("\n==================================================");
    console.log(`🎉 COMPLETED! Generated ${totalGenerated} audio files in audio/drills/`);
    console.log("==================================================");
}

run().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
