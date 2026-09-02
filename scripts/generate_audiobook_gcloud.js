/**
 * EnglishPulse - Google Cloud TTS Audiobook Generator
 * Voices the young Eldrin mystery novel using Google Cloud Neural2 voices with rich SSML markup.
 * Uses the monthly free 1,000,000 characters tier.
 *
 * Usage:
 *   node scripts/generate_audiobook_gcloud.js --chapter 1
 *   node scripts/generate_audiobook_gcloud.js --act 1
 */

const fs = require('fs');
const path = require('path');
const textToSpeech = require('@google-cloud/text-to-speech');
const { ELDRIN_AUDIOBOOK } = require('../eldrin_story.js');

const keyPath = path.join(__dirname, '..', 'google_cloud_credentials.json');
if (!fs.existsSync(keyPath)) {
    console.error("❌ ERROR: google_cloud_credentials.json not found!");
    process.exit(1);
}

const client = new textToSpeech.TextToSpeechClient({
    keyFilename: keyPath
});

// Voice casting using Google Cloud Neural2 high-clarity voices:
const CAST = {
    narrator: {
        voice: 'en-US-Neural2-D', // Deep, measured, clear narrator
        pitch: '-1st',
        rate: '0.94'
    },
    eldrin: {
        voice: 'en-US-Neural2-A', // Young, clear apprentice
        pitch: '+3st',
        rate: '0.96'
    },
    kira: {
        voice: 'en-US-Neural2-F', // Energetic, spirited girl runner
        pitch: '+2st',
        rate: '0.98'
    },
    corvinus: {
        voice: 'en-US-Neural2-J', // Deep, wise elder archivist
        pitch: '-4st',
        rate: '0.88'
    },
    vane: {
        voice: 'en-US-Neural2-D', // Stern, heavy iron commander
        pitch: '-3st',
        rate: '0.92'
    },
    malakor: {
        voice: 'en-US-Neural2-J', // Chilling high prelate
        pitch: '-5st',
        rate: '0.86'
    }
};

function formatSSML(text, speaker) {
    const config = CAST[speaker] || CAST.narrator;
    let safe = text.trim();
    // Escape XML special characters
    safe = safe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Natural pauses between sentences inside a paragraph
    safe = safe.replace(/([.?!])\s+/g, '$1 <break time="350ms"/> ');

    return `<speak><prosody rate="${config.rate}" pitch="${config.pitch}">${safe}</prosody></speak>`;
}

async function synthesizeChunk(text, speaker) {
    const config = CAST[speaker] || CAST.narrator;
    const ssml = formatSSML(text, speaker);

    const request = {
        input: { ssml: ssml },
        voice: {
            languageCode: 'en-US',
            name: config.voice
        },
        audioConfig: {
            audioEncoding: 'LINEAR16', // Studio-quality uncompressed 24kHz WAV
            sampleRateHertz: 24000
        }
    };

    const [response] = await client.synthesizeSpeech(request);
    return response.audioContent;
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    const args = process.argv.slice(2);
    let targetChapter = null;
    const chIdx = args.indexOf('--chapter');
    if (chIdx !== -1 && args[chIdx + 1]) {
        targetChapter = parseInt(args[chIdx + 1], 10);
    }

    console.log("==================================================");
    console.log("🎙️ EnglishPulse - Google Cloud TTS Audiobook Generator");
    console.log("==================================================");
    console.log("💎 Free 1,000,000 characters monthly tier");
    console.log("🎭 Cast: Narrator (Neural2-D), Eldrin (Neural2-A), Kira (Neural2-F), Corvinus (Neural2-J)");

    const chapters = targetChapter 
        ? ELDRIN_AUDIOBOOK.chapters.filter(c => c.number === targetChapter)
        : ELDRIN_AUDIOBOOK.chapters;

    let totalFiles = 0;
    let totalChars = 0;

    for (const ch of chapters) {
        const chDir = path.join(__dirname, '..', 'audio', 'audiobook', `ch_${ch.number}`);
        if (!fs.existsSync(chDir)) {
            fs.mkdirSync(chDir, { recursive: true });
        }

        console.log(`\n📖 Voicing Chapter ${ch.number}: "${ch.titleEn}" (${ch.sentences.length} speaker blocks, ${ch.wordCount} words)...`);

        for (let idx = 0; idx < ch.sentences.length; idx++) {
            const block = ch.sentences[idx];
            const outPath = path.join(chDir, `sent_${idx + 1}.wav`);
            totalChars += block.en.length;

            process.stdout.write(`  [#${idx + 1}/${ch.sentences.length}] (${block.speaker}): "${block.en.substring(0, 45)}..." `);

            try {
                const audioBuffer = await synthesizeChunk(block.en, block.speaker);
                fs.writeFileSync(outPath, audioBuffer, 'binary');
                totalFiles++;
                process.stdout.write(`✅ saved (${(audioBuffer.length / 1024).toFixed(1)} KB)\n`);
            } catch (err) {
                process.stdout.write(`❌ ERROR: ${err.message}\n`);
            }

            await sleep(300); // Polite pace
        }
    }

    console.log("\n==================================================");
    console.log(`🎉 COMPLETED! Generated ${totalFiles} audio files. Total characters: ~${totalChars.toLocaleString()}`);
    console.log("==================================================");
}

run().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
