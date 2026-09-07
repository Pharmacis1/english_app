/**
 * EnglishPulse - Google Cloud TTS Audiobook Generator
 * Voices the young Eldrin mystery novel using Google Cloud Neural2 voices with rich SSML markup.
 * Uses the monthly free 1,000,000 characters tier.
 *
 * Usage:
 *   node scripts/generate_audiobook_gcloud.js --chapter 1
 *   node scripts/generate_audiobook_gcloud.js
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
        rate: '0.92'
    },
    eldrin: {
        voice: 'en-US-Neural2-A', // Young, clear apprentice
        pitch: '+2.5st',
        rate: '0.96'
    },
    leo: {
        voice: 'en-US-Neural2-I', // Friendly, warm roommate
        pitch: '-1st',
        rate: '0.92'
    },
    kira: {
        voice: 'en-US-Neural2-F', // Energetic, spirited girl runner
        pitch: '+2st',
        rate: '0.98'
    },
    corvinus: {
        voice: 'en-US-Neural2-J', // Deep, wise elder archivist
        pitch: '-4st',
        rate: '0.86'
    },
    barnaby: {
        voice: 'en-US-Neural2-D', // Cheerful old cart driver
        pitch: '-2st',
        rate: '0.90'
    },
    guard: {
        voice: 'en-US-Neural2-D', // Firm gatekeeper
        pitch: '-3st',
        rate: '0.90'
    },
    baker: {
        voice: 'en-US-Neural2-I', // Warm friendly baker
        pitch: '-0.5st',
        rate: '0.94'
    },
    selma: {
        voice: 'en-US-Neural2-F', // Lively spice merchant
        pitch: '+1st',
        rate: '0.95'
    },
    smith: {
        voice: 'en-US-Neural2-J', // Strong hearty blacksmith
        pitch: '-4.5st',
        rate: '0.88'
    },
    otho: {
        voice: 'en-US-Neural2-J', // Gentle old bookseller
        pitch: '-3st',
        rate: '0.88'
    }
};

function formatSSML(text, speaker) {
    const config = CAST[speaker] || CAST.narrator;
    let safe = text.trim();
    safe = safe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    safe = safe.replace(/([.?!])\s+/g, '$1 <break time="300ms"/> ');
    return `<speak><prosody rate="${config.rate}" pitch="${config.pitch}">${safe}</prosody></speak>`;
}

async function synthesizeChunk(block) {
    const speaker = block.speaker || 'narrator';
    const config = CAST[speaker] || CAST.narrator;
    const ssml = block.ssml || formatSSML(block.en, speaker);

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
    let targetAct = null;
    const actIdx = args.indexOf('--act');
    if (actIdx !== -1 && args[actIdx + 1]) {
        targetAct = parseInt(args[actIdx + 1], 10);
    }

    console.log("==================================================");
    console.log("🎙️ EnglishPulse - Google Cloud TTS Serial Generator");
    console.log("==================================================");
    console.log("💎 Free 1,000,000 characters monthly tier");
    console.log("🎭 Cast: Narrator (Neural2-D), Eldrin (Neural2-A), Leo (Neural2-I), Kira (Neural2-F), Corvinus (Neural2-J)");

    let chapters = ELDRIN_AUDIOBOOK.chapters;
    if (targetChapter) {
        chapters = chapters.filter(c => c.number === targetChapter);
    } else if (targetAct) {
        chapters = chapters.filter(c => c.act === targetAct);
    }

    let totalFiles = 0;
    let totalChars = 0;

    for (const ch of chapters) {
        const chDir = path.join(__dirname, '..', 'audio', 'audiobook', `ch_${ch.number}`);
        if (!fs.existsSync(chDir)) {
            fs.mkdirSync(chDir, { recursive: true });
        }

        console.log(`\n📖 Voicing Episode ${ch.number}: "${ch.titleEn}" (${ch.sentences.length} lines, ~${ch.wordCount} words)...`);

        for (let idx = 0; idx < ch.sentences.length; idx++) {
            const block = ch.sentences[idx];
            const outPath = path.join(chDir, `sent_${idx + 1}.wav`);
            totalChars += block.en.length;

            process.stdout.write(`  [#${idx + 1}/${ch.sentences.length}] (${block.speaker}): "${block.en.substring(0, 45)}..." `);

            try {
                const audioBuffer = await synthesizeChunk(block);
                fs.writeFileSync(outPath, audioBuffer, 'binary');
                totalFiles++;
                process.stdout.write(`✅ saved (${(audioBuffer.length / 1024).toFixed(1)} KB)\n`);
            } catch (err) {
                process.stdout.write(`❌ ERROR: ${err.message}\n`);
            }

            await sleep(250);
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
