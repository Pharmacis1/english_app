const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const apiKey = process.env.GEMINI_API_KEY || '';
if (!apiKey) {
    console.error("❌ ERROR: No GEMINI_API_KEY found in .env!");
    process.exit(1);
}

// Load speaking_engine.js to get warmupPatterns
const engineCode = fs.readFileSync(path.join(__dirname, '..', 'speaking_engine.js'), 'utf8');
const patternsMatch = engineCode.match(/this\.warmupPatterns\s*=\s*(\[[\s\S]*?\]);\s*\}/);

if (!patternsMatch) {
    console.error("❌ ERROR: Could not find this.warmupPatterns in speaking_engine.js!");
    process.exit(1);
}

let patterns;
try {
    patterns = eval(patternsMatch[1]);
} catch (e) {
    console.error("❌ Failed to eval warmupPatterns:", e.message);
    process.exit(1);
}

const outDir = path.join(__dirname, '..', 'audio', 'warmup');
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function cleanFilename(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function generateAudio(text, voiceName = 'Aoede', maxRetries = 3) {
    const models = [
        'gemini-2.5-flash-preview-tts',
        'gemini-3.1-flash-tts-preview',
        'gemini-2.0-flash',
        'gemini-2.5-pro-preview-tts'
    ];

    for (const model of models) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
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
                    console.warn(`⏳ [Rate Limit 429 on ${model}] Waiting 10s...`);
                    await sleep(10000);
                    continue;
                }

                if (resp.ok) {
                    const data = await resp.json();
                    const part = data.candidates?.[0]?.content?.parts?.[0];
                    if (part?.inlineData?.data) {
                        const rawPcm = Buffer.from(part.inlineData.data, 'base64');
                        return pcmToWav(rawPcm, 24000, 1, 16);
                    }
                } else {
                    const err = await resp.text();
                    break;
                }
            } catch (err) {
                console.warn(`Error connecting for ${model}:`, err.message);
                await sleep(2000);
            }
        }
    }
    return null;
}

async function main() {
    console.log(`🎙️ Found ${patterns.length} warm-up patterns to process...`);
    let totalPhrases = 0;
    let skipped = 0;
    let generated = 0;

    const allPhrases = [];
    for (const pattern of patterns) {
        for (const slot of pattern.slots) {
            const phrase = slot.full || `${pattern.prefix}${slot.word}${pattern.suffix}`;
            const key = cleanFilename(phrase);
            allPhrases.push({ phrase, key, patternId: pattern.id });
        }
    }

    console.log(`Total unique phrases to verify: ${allPhrases.length}`);

    for (let i = 0; i < allPhrases.length; i++) {
        const item = allPhrases[i];
        const filePath = path.join(outDir, `${item.key}.wav`);

        if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
            skipped++;
            continue;
        }

        console.log(`[${i + 1}/${allPhrases.length}] Generating (${item.patternId}): "${item.phrase}"`);
        const voices = ['Aoede', 'Fenrir', 'Kore', 'Puck', 'Charon'];
        const voiceName = voices[i % voices.length];

        const wav = await generateAudio(item.phrase, voiceName);
        if (wav) {
            fs.writeFileSync(filePath, wav);
            generated++;
            console.log(`   ✅ Saved: ${item.key}.wav (${wav.length} bytes)`);
        } else {
            console.error(`   ❌ Failed to generate audio for "${item.phrase}"`);
        }

        await sleep(600);
    }

    console.log(`\n🎉 DONE! Generated: ${generated}, Already existing: ${skipped}, Total: ${allPhrases.length}`);
}

main().catch(err => {
    console.error("Fatal error:", err);
});
