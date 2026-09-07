/**
 * EnglishPulse - Story Campaign Google Cloud TTS Audio Pre-Recorder
 * Pre-renders studio quality 24kHz WAV audio files for every chapter paragraph
 * with full character-specific voice acting.
 *
 * Usage:
 *   node scripts/generate_story_campaign_audio.js --chapter 1
 *   node scripts/generate_story_campaign_audio.js --act 1
 *   node scripts/generate_story_campaign_audio.js
 */

const fs = require('fs');
const path = require('path');
const textToSpeech = require('@google-cloud/text-to-speech');

const { STORY_CHAPTERS, STORY_ACTS } = require('../story_campaign.js');
let STORY_ACT1_EXPANDED = [];
let STORY_ACT2_EXPANDED = [];
try {
    const act1 = require('../story_campaign_act1_expanded.js');
    STORY_ACT1_EXPANDED = act1.STORY_ACT1_EXPANDED || [];
} catch(e) {}
try {
    const act2 = require('../story_campaign_act2_expanded.js');
    STORY_ACT2_EXPANDED = act2.STORY_ACT2_EXPANDED || [];
} catch(e) {}

const keyPath = path.join(__dirname, '..', 'google_cloud_credentials.json');
if (!fs.existsSync(keyPath)) {
    console.error('❌ ERROR: google_cloud_credentials.json not found!');
    process.exit(1);
}

const client = new textToSpeech.TextToSpeechClient({
    keyFilename: keyPath
});

const HERO_VOICES = {
    narrator: { voice: 'en-US-Neural2-D', pitch: '-1st', rate: '0.92' },
    valerius: { voice: 'en-US-Neural2-D', pitch: '-1.5st', rate: '0.92' },
    astraea:  { voice: 'en-US-Neural2-F', pitch: '+1.5st', rate: '0.92' },
    zephyr:   { voice: 'en-US-Neural2-A', pitch: '+1.5st', rate: '0.98' },
    ignis:    { voice: 'en-US-Neural2-J', pitch: '-2st', rate: '0.96' },
    lyra:     { voice: 'en-US-Neural2-F', pitch: '+2.5st', rate: '0.96' },
    torin:    { voice: 'en-US-Neural2-D', pitch: '-4st', rate: '0.88' },
    nyx:      { voice: 'en-US-Neural2-F', pitch: '-0.5st', rate: '0.92' },
    solas:    { voice: 'en-US-Neural2-I', pitch: '0st', rate: '0.92' },
    selene:   { voice: 'en-US-Neural2-F', pitch: '+1st', rate: '0.90' },
    eldrin:   { voice: 'en-US-Neural2-J', pitch: '-3.5st', rate: '0.88' }
};

function formatSSML(text, speaker) {
    const config = HERO_VOICES[speaker] || HERO_VOICES.narrator;
    let safe = text.trim();
    safe = safe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    safe = safe.replace(/([.?!])\s+/g, '$1 <break time="280ms"/> ');
    return `<speak><prosody rate="${config.rate}" pitch="${config.pitch}">${safe}</prosody></speak>`;
}

async function synthesizeParagraph(text, speaker) {
    const config = HERO_VOICES[speaker] || HERO_VOICES.narrator;
    const ssml = formatSSML(text, speaker);

    const request = {
        input: { ssml: ssml },
        voice: {
            languageCode: 'en-US',
            name: config.voice
        },
        audioConfig: {
            audioEncoding: 'LINEAR16',
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

    console.log('==================================================');
    console.log('🎙️ EnglishPulse - Story Campaign Audio Generator');
    console.log('==================================================');

    let allChapters = STORY_CHAPTERS.map(ch => {
        const exp1 = STORY_ACT1_EXPANDED.find(e => e.number === ch.number);
        if (exp1) return exp1;
        const exp2 = STORY_ACT2_EXPANDED.find(e => e.number === ch.number);
        if (exp2) return exp2;
        return ch;
    });

    if (targetChapter) {
        allChapters = allChapters.filter(c => c.number === targetChapter);
    } else if (targetAct) {
        allChapters = allChapters.filter(c => c.actId === targetAct);
    }

    let totalFiles = 0;
    let totalChars = 0;

    for (const ch of allChapters) {
        const chDir = path.join(__dirname, '..', 'audio', 'story_campaign', `ch_${ch.number}`);
        if (!fs.existsSync(chDir)) {
            fs.mkdirSync(chDir, { recursive: true });
        }

        console.log(`\n📖 Voicing Chapter ${ch.number}: "${ch.titleEn}" (${ch.paragraphs ? ch.paragraphs.length : 0} paragraphs)...`);
        if (!ch.paragraphs) continue;

        for (let idx = 0; idx < ch.paragraphs.length; idx++) {
            const p = ch.paragraphs[idx];
            const speaker = (ch.involvedHeroes && ch.involvedHeroes[idx % ch.involvedHeroes.length]) || 'valerius';
            const outPath = path.join(chDir, `p_${idx + 1}.wav`);
            totalChars += p.en.length;

            if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
                console.log(`  [#${idx + 1}/${ch.paragraphs.length}] (${speaker}) already exists, skipping.`);
                continue;
            }

            process.stdout.write(`  [#${idx + 1}/${ch.paragraphs.length}] (${speaker}): "${p.en.substring(0, 45)}..." `);

            try {
                const audioBuffer = await synthesizeParagraph(p.en, speaker);
                fs.writeFileSync(outPath, audioBuffer, 'binary');
                totalFiles++;
                process.stdout.write(`✅ saved (${(audioBuffer.length / 1024).toFixed(1)} KB)\n`);
            } catch (err) {
                process.stdout.write(`❌ ERROR: ${err.message}\n`);
            }

            await sleep(150);
        }
    }

    console.log('\n==================================================');
    console.log(`🎉 COMPLETED! Generated ${totalFiles} audio files. Total characters: ~${totalChars.toLocaleString()}`);
    console.log('==================================================');
}

run().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
