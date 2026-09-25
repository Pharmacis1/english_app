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
    thorin:   { voice: 'en-US-Neural2-D', pitch: '-4st', rate: '0.88' },
    nyx:      { voice: 'en-US-Neural2-F', pitch: '-0.5st', rate: '0.92' },
    solas:    { voice: 'en-US-Neural2-I', pitch: '0st', rate: '0.92' },
    selene:   { voice: 'en-US-Neural2-F', pitch: '+1st', rate: '0.90' },
    freya:    { voice: 'en-US-Neural2-F', pitch: '+0.5st', rate: '0.94' },
    frostina: { voice: 'en-US-Neural2-C', pitch: '+2.0st', rate: '0.92' },
    oberon:   { voice: 'en-US-Neural2-A', pitch: '-2.5st', rate: '0.88' },
    eldrin:   { voice: 'en-US-Neural2-J', pitch: '-3.5st', rate: '0.88' },
    leo:      { voice: 'en-US-Neural2-D', pitch: '-1.0st', rate: '0.92' },
    mia:      { voice: 'en-US-Neural2-F', pitch: '+1.5st', rate: '0.94' },
    arthur:   { voice: 'en-US-Neural2-J', pitch: '-3.0st', rate: '0.88' },
    toby:     { voice: 'en-US-Neural2-A', pitch: '+3.5st', rate: '0.96' },
    martha:   { voice: 'en-US-Neural2-C', pitch: '+1.0st', rate: '0.90' },
    harris:   { voice: 'en-US-Neural2-I', pitch: '-2.0st', rate: '0.92' },
    sam:      { voice: 'en-US-Neural2-J', pitch: '+0.5st', rate: '0.94' },
    gordon:   { voice: 'en-US-Neural2-D', pitch: '-3.0st', rate: '0.88' },
    emma:     { voice: 'en-US-Neural2-C', pitch: '+1.5st', rate: '0.94' },
    edward:   { voice: 'en-US-Neural2-J', pitch: '-2.0st', rate: '0.90' },
    vincent:  { voice: 'en-US-Neural2-J', pitch: '+1.0st', rate: '0.94' },
    robert:   { voice: 'en-US-Neural2-D', pitch: '-2.5st', rate: '0.90' },
    higgins:  { voice: 'en-US-Neural2-J', pitch: '-1.5st', rate: '0.90' },
    simon:    { voice: 'en-US-Neural2-J', pitch: '-2.5st', rate: '0.92' },
    sterling: { voice: 'en-US-Neural2-D', pitch: '-3.0st', rate: '0.90' }
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
        if (!ch.campaignId || ch.campaignId === 'fantasy') {
            const exp1 = STORY_ACT1_EXPANDED.find(e => e.number === ch.number && (!e.campaignId || e.campaignId === 'fantasy'));
            if (exp1) return { ...exp1, campaignId: 'fantasy' };
            const exp2 = STORY_ACT2_EXPANDED.find(e => e.number === ch.number && (!e.campaignId || e.campaignId === 'fantasy'));
            if (exp2) return { ...exp2, campaignId: 'fantasy' };
        }
        return ch;
    });

    let targetCampaign = null;
    const campIdx = args.indexOf('--campaign');
    if (campIdx !== -1 && args[campIdx + 1]) {
        targetCampaign = args[campIdx + 1];
    }
    let targetId = null;
    const idIdx = args.indexOf('--id');
    if (idIdx !== -1 && args[idIdx + 1]) {
        targetId = args[idIdx + 1];
    }

    if (targetId) {
        allChapters = allChapters.filter(c => String(c.id) === String(targetId));
    } else {
        if (targetCampaign) {
            allChapters = allChapters.filter(c => (c.campaignId || 'fantasy') === targetCampaign);
        }
        if (targetChapter) {
            allChapters = allChapters.filter(c => c.number === targetChapter);
        } else if (targetAct) {
            allChapters = allChapters.filter(c => c.actId === targetAct);
        }
    }

    let totalFiles = 0;
    let totalChars = 0;

    for (const ch of allChapters) {
        const dirName = ch.audioDir || (ch.campaignId === 'detective' ? (`det_ch_${ch.number}`) : (`ch_${ch.number}`));
        const chDir = path.join(__dirname, '..', 'audio', 'story_campaign', dirName);
        if (!fs.existsSync(chDir)) {
            fs.mkdirSync(chDir, { recursive: true });
        }

        console.log(`\n📖 Voicing Chapter ${ch.number}: "${ch.titleEn}" (${ch.paragraphs ? ch.paragraphs.length : 0} paragraphs)...`);
        if (!ch.paragraphs) continue;

        const forceRebuild = args.includes('--force');

        for (let idx = 0; idx < ch.paragraphs.length; idx++) {
            const p = ch.paragraphs[idx];
            const speaker = p.speaker || (ch.involvedHeroes && ch.involvedHeroes[idx % ch.involvedHeroes.length]) || 'valerius';
            const outPath = path.join(chDir, `p_${idx + 1}.wav`);
            totalChars += p.en.length;

            if (!forceRebuild && fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
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
