/**
 * EnglishPulse - Batch Pattern Drills Audio Generator
 * Uses Google Gemini Live Audio (gemini-2.5-flash-preview-tts)
 * Generates natural expressive speech with male & female voice variety.
 *
 * Usage:
 *   node scripts/generate_drills_audio.js
 *   node scripts/generate_drills_audio.js --key YOUR_API_KEY
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const args = process.argv.slice(2);
let apiKey = process.env.GEMINI_API_KEY || '';
const keyIdx = args.indexOf('--key');
if (keyIdx !== -1 && args[keyIdx + 1]) {
    apiKey = args[keyIdx + 1].trim();
}

if (!apiKey) {
    console.error("❌ ERROR: No Gemini API Key provided! Set GEMINI_API_KEY in .env or pass --key <YOUR_KEY>");
    process.exit(1);
}

const jsonPath = path.join(__dirname, 'drill_phrases.json');
if (!fs.existsSync(jsonPath)) {
    console.error("❌ ERROR: scripts/drill_phrases.json not found! Run inspect_drills.js first.");
    process.exit(1);
}

const drills = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const outDir = path.join(__dirname, '..', 'audio', 'drills');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

function pcmToWav(pcmData, sampleRate = 24000, numChannels = 1, bitsPerSample = 16) {
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);
    const dataSize = pcmData.length;
    const buffer = Buffer.alloc(44 + dataSize);

    buffer.write('RIFF', 0);
    buffer.writeUInt32LE(36 + dataSize, 4);
    buffer.write('WAVE', 8);
    buffer.write('fmt ', 12);
    buffer.writeUInt32LE(16, 16);
    buffer.writeUInt16LE(1, 20);
    buffer.writeUInt16LE(numChannels, 22);
    buffer.writeUInt32LE(sampleRate, 24);
    buffer.writeUInt32LE(byteRate, 28);
    buffer.writeUInt16LE(blockAlign, 32);
    buffer.writeUInt16LE(bitsPerSample, 34);
    buffer.write('data', 36);
    buffer.writeUInt32LE(dataSize, 40);
    pcmData.copy(buffer, 44);

    return buffer;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateAudio(text, voiceName, maxRetries = 3) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
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

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (resp.status === 429) {
                const errText = await resp.text();
                if (errText.includes("RESOURCE_EXHAUSTED") || errText.includes("current quota")) {
                    throw new Error("QUOTA_EXHAUSTED: Daily quota exceeded for this API key.");
                }
                console.warn(`⏳ [Rate Limit 429] Waiting 20 seconds before retry ${attempt}/${maxRetries}...`);
                await sleep(20000);
                continue;
            }

            if (!resp.ok) {
                const errText = await resp.text();
                throw new Error(`HTTP ${resp.status}: ${errText.substring(0, 120)}`);
            }

            const data = await resp.json();
            const part = data.candidates?.[0]?.content?.parts?.[0];
            if (part?.inlineData?.data) {
                const rawPcm = Buffer.from(part.inlineData.data, 'base64');
                return pcmToWav(rawPcm, 24000, 1, 16);
            } else {
                throw new Error("Missing inlineData in Gemini response");
            }
        } catch (err) {
            if (err.message.includes("QUOTA_EXHAUSTED")) {
                throw err;
            }
            console.warn(`⚠️ Attempt ${attempt} failed: ${err.message}`);
            if (attempt < maxRetries) {
                await sleep(4000);
            } else {
                throw err;
            }
        }
    }
    throw new Error("Failed after maximum retries");
}

function cleanFilename(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 50);
}

async function run() {
    console.log("==================================================");
    console.log("🎙️ EnglishPulse - Google Gemini Drills Pre-Recorder");
    console.log("==================================================");
    console.log(`📋 Total Drill Patterns: ${drills.length} (216 audio files)`);

    // Voice assignment:
    // Even drills: Female voices (Aoede & Kore)
    // Odd drills: Male voices (Puck & Fenrir)
    const femaleVoices = ['Aoede', 'Kore'];
    const maleVoices = ['Puck', 'Fenrir'];

    let totalGenerated = 0;
    let totalSkipped = 0;

    for (let i = 0; i < drills.length; i++) {
        const item = drills[i];
        const isFemale = (i % 2 === 0);
        const origVoice = isFemale ? femaleVoices[0] : maleVoices[0];
        const targetVoice = isFemale ? femaleVoices[1] : maleVoices[1];

        const origFile = path.join(outDir, `orig_${cleanFilename(item.original)}.wav`);
        const targetFile = path.join(outDir, `target_${cleanFilename(item.target)}.wav`);

        console.log(`\n[${i + 1}/${drills.length}] Drill: "${item.original}" -> "${item.target}" (${isFemale ? '👩 Female' : '👨 Male'})`);

        // 1. Original Phrase
        if (fs.existsSync(origFile) && fs.statSync(origFile).size > 1000) {
            totalSkipped++;
            process.stdout.write(`  [Original cached] `);
        } else {
            try {
                process.stdout.write(`  Generating Original (${origVoice}): "${item.original}"... `);
                const wavBuf = await generateAudio(item.original, origVoice);
                fs.writeFileSync(origFile, wavBuf);
                totalGenerated++;
                process.stdout.write(`✅ saved (${(wavBuf.length / 1024).toFixed(1)} KB)\n`);
                await sleep(3500);
            } catch (err) {
                process.stdout.write(`❌ ERROR: ${err.message}\n`);
                if (err.message.includes("QUOTA_EXHAUSTED")) {
                    console.error("\n🛑 Daily quota reached! Resume anytime by running the script again.");
                    break;
                }
            }
        }

        // 2. Target Phrase
        if (fs.existsSync(targetFile) && fs.statSync(targetFile).size > 1000) {
            totalSkipped++;
            process.stdout.write(`  [Target cached]\n`);
        } else {
            try {
                process.stdout.write(`  Generating Target (${targetVoice}): "${item.target}"... `);
                const wavBuf = await generateAudio(item.target, targetVoice);
                fs.writeFileSync(targetFile, wavBuf);
                totalGenerated++;
                process.stdout.write(`✅ saved (${(wavBuf.length / 1024).toFixed(1)} KB)\n`);
                await sleep(3500);
            } catch (err) {
                process.stdout.write(`❌ ERROR: ${err.message}\n`);
                if (err.message.includes("QUOTA_EXHAUSTED")) {
                    console.error("\n🛑 Daily quota reached! Resume anytime by running the script again.");
                    break;
                }
            }
        }
    }

    console.log("\n==================================================");
    console.log(`🎉 Finished! Newly Generated: ${totalGenerated} | Cached: ${totalSkipped}`);
    console.log("==================================================");
}

run().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
