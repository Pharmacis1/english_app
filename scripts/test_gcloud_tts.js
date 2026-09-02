const textToSpeech = require('@google-cloud/text-to-speech');
const path = require('path');
const fs = require('fs');

const keyPath = path.join(__dirname, '..', 'google_cloud_credentials.json');

const client = new textToSpeech.TextToSpeechClient({
    keyFilename: keyPath
});

async function test() {
    console.log('Testing Google Cloud Text-to-Speech API with Service Account...');
    const ssml = `<speak>
        <prosody rate="0.95" pitch="+2st">
            She <emphasis level="strong">doesn't</emphasis> work in an office!
        </prosody>
    </speak>`;

    const request = {
        input: { ssml: ssml },
        voice: {
            languageCode: 'en-US',
            name: 'en-US-Neural2-F'
        },
        audioConfig: {
            audioEncoding: 'LINEAR16', // WAV format
            sampleRateHertz: 24000
        }
    };

    try {
        const [response] = await client.synthesizeSpeech(request);
        const outPath = path.join(__dirname, 'test_ssml.wav');
        fs.writeFileSync(outPath, response.audioContent, 'binary');
        console.log(`✅ SUCCESS! Generated ${response.audioContent.length} bytes of audio using Google Cloud TTS!`);
        console.log(`Saved to ${outPath}`);
    } catch (err) {
        console.error('❌ Google Cloud TTS Error:', err.message);
        if (err.message.includes('API has not been used') || err.message.includes('not enabled')) {
            console.log('👉 Note: You may need to enable Cloud Text-to-Speech API in Google Cloud Console.');
        }
    }
}

test();
