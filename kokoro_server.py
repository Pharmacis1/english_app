import io
import os
import numpy as np
import soundfile as sf
from fastapi import FastAPI, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Set eSpeak NG DLL path before importing phonemizer
espeak_dll = r"C:\Program Files\eSpeak NG\libespeak-ng.dll"
if os.path.exists(espeak_dll):
    os.environ["PHONEMIZER_ESPEAK_LIBRARY"] = espeak_dll

from phonemizer.backend.espeak.wrapper import EspeakWrapper
if os.path.exists(espeak_dll):
    EspeakWrapper.set_library(espeak_dll)

from phonemizer.backend import EspeakBackend
from kokoro_onnx import Kokoro
import uvicorn

app = FastAPI(title="Local Kokoro TTS Server")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

kokoro = None
espeak_backend = None

class SpeechRequest(BaseModel):
    model: str = "kokoro"
    input: str
    voice: str = "af_bella"
    speed: float = 1.0
    response_format: str = "mp3"

@app.on_event("startup")
def load_kokoro():
    global kokoro, espeak_backend
    print("[INFO] Initializing eSpeak NG IPA phonemizer and Kokoro ONNX model...")
    
    espeak_backend = EspeakBackend('en-us', preserve_punctuation=True, with_stress=True)
    kokoro = Kokoro("kokoro-v0_19.onnx", "voices.bin")

    # Real IPA Phonemizer override for crystal clear, natural neural speech
    def real_ipa_phonemize(text, lang="en-us", **kwargs):
        try:
            res = espeak_backend.phonemize([text])
            return res[0] if res else text
        except Exception as err:
            print(f"[WARN] IPA Phonemize error: {err}")
            return text

    kokoro.tokenizer.phonemize = real_ipa_phonemize
    voices_list = kokoro.get_voices()
    print(f"[SUCCESS] Kokoro TTS Model loaded on port 8880 with Real IPA Phonemes! Voices: {voices_list}")

@app.post("/v1/audio/speech")
async def generate_speech(req: SpeechRequest):
    if not kokoro:
        raise HTTPException(status_code=503, detail="Kokoro model not loaded")

    try:
        available_voices = kokoro.get_voices()
        voice_name = req.voice
        if voice_name not in available_voices:
            if voice_name.startswith('am_') or voice_name.startswith('bm_'):
                voice_name = 'am_adam' if 'am_adam' in available_voices else available_voices[0]
            else:
                voice_name = 'af_bella' if 'af_bella' in available_voices else available_voices[0]

        target_speed = max(0.2, min(2.0, float(req.speed or 1.0)))
        samples, sample_rate = kokoro.create(req.input, voice=voice_name, speed=target_speed, lang="en-us")
        
        # Add 250ms silence padding at start and 150ms at end to prevent browser DAC/audio driver initial swallowing
        pad_start = int(sample_rate * 0.25)
        pad_end = int(sample_rate * 0.15)
        samples = np.pad(samples, (pad_start, pad_end), mode='constant')

        buffer = io.BytesIO()
        sf.write(buffer, samples, sample_rate, format='WAV')
        buffer.seek(0)
        
        return Response(content=buffer.read(), media_type="audio/wav")
    except Exception as e:
        print(f"[ERROR] Kokoro TTS failed: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8880)
