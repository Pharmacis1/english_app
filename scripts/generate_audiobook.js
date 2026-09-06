/**
 * EnglishPulse - Offline Batch Audiobook Audio Generator
 * Uses Google Gemini Live Audio (gemini-2.5-flash-preview-tts)
 * Generates and caches 24kHz WAV files locally for 0.0s latency playback on PC and mobile.
 *
 * Usage:
 *   node scripts/generate_audiobook.js              (generates missing audio for all chapters)
 *   node scripts/generate_audiobook.js --chapter 1  (generates only chapter 1)
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { ELDRIN_AUDIOBOOK } = require('../eldrin_story.js');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
if (!GEMINI_API_KEY) {
    console.error("❌ ERROR: GEMINI_API_KEY is not set in .env! Please add it first.");
    process.exit(1);
}

// Voice map for the novel's characters
const VOICE_CAST = {
    eldrin: 'Puck',     // Young, expressive apprentice boy
    kira: 'Aoede',      // Agile, swift, spirited runner girl
    corvinus: 'Charon', // Wise, deep, calm elder archivist
    malakor: 'Fenrir',  // Deep, authoritative, chilling High Prelate
    vane: 'Fenrir',     // Stern, metallic, iron sentinel commander
    orion: 'Kore',      // Pure, resonant ancient guardian automaton
    narrator: 'Charon'  // Deep storyteller
};

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

async function generateSentenceAudio(text, voiceName, maxRetries = 5) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-tts-preview:generateContent?key=${GEMINI_API_KEY}`;
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
                if (errText.includes("per day") || errText.includes("per_day")) {
                    throw new Error("DAILY_QUOTA_EXHAUSTED: Daily limit reached.");
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
            console.warn(`⚠️ Attempt ${attempt} failed: ${err.message}`);
            if (attempt < maxRetries) {
                await sleep(4000);
            } else {
                throw err;
            }
        }
    }
    throw new Error("Failed to generate audio after maximum retries");
}

async function run() {
    const args = process.argv.slice(2);
    let targetChapterNum = null;
    const chIdx = args.indexOf('--chapter');
    if (chIdx !== -1 && args[chIdx + 1]) {
        targetChapterNum = parseInt(args[chIdx + 1], 10);
    }

    console.log("==================================================");
    console.log("🎙️ EnglishPulse - Batch Audiobook Audio Generator");
    console.log("==================================================");

    const chapters = targetChapterNum 
        ? ELDRIN_AUDIOBOOK.chapters.filter(c => c.number === targetChapterNum)
        : ELDRIN_AUDIOBOOK.chapters;

    if (chapters.length === 0) {
        console.error(`❌ Chapter ${targetChapterNum} not found!`);
        process.exit(1);
    }

    let totalGenerated = 0;
    let totalSkipped = 0;

    for (const ch of chapters) {
        const chDir = path.join(__dirname, '..', 'audio', 'audiobook', `ch_${ch.number}`);
        if (!fs.existsSync(chDir)) {
            fs.mkdirSync(chDir, { recursive: true });
        }

        console.log(`\n📖 Processing Chapter ${ch.number}: "${ch.titleEn}" (${ch.sentences.length} sentences)...`);

        for (let idx = 0; idx < ch.sentences.length; idx++) {
            const sent = ch.sentences[idx];
            const outPath = path.join(chDir, `sent_${idx + 1}.wav`);

            if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
                totalSkipped++;
                process.stdout.write(`⏭️ [#${idx + 1} cached] `);
                continue;
            }

            const voice = VOICE_CAST[sent.speaker] || sent.voice || 'Charon';
            process.stdout.write(`\n🎙️ Generating #${idx + 1} (${sent.speaker} -> ${voice}): "${sent.en.substring(0, 40)}..." `);

            try {
                const wavBuffer = await generateSentenceAudio(sent.en, voice);
                fs.writeFileSync(outPath, wavBuffer);
                totalGenerated++;
                process.stdout.write(`✅ saved (${(wavBuffer.length / 1024).toFixed(1)} KB)`);
                // Polite pause between requests to prevent hitting Gemini RPM limits
                await sleep(4000);
            } catch (err) {
                process.stdout.write(`❌ ERROR: ${err.message}\n`);
            }
        }
    }

    console.log("\n==================================================");
    console.log(`🎉 Finished! Generated: ${totalGenerated} files | Skipped (already cached): ${totalSkipped} files.`);
    console.log("==================================================");
}

run().catch(err => {
    console.error("Fatal Error:", err);
    process.exit(1);
});
