# Standalone OpenAI-compatible Whisper STT REST API server
import os
import tempfile
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from faster_whisper import WhisperModel
import uvicorn

app = FastAPI(title="Local Whisper STT Server")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = None

@app.on_event("startup")
def load_model():
    global model
    print("[INFO] Loading Whisper STT model ('base.en') on CPU (int8)...")
    # Using CPU int8 + beam_size=1 guarantees 100% stability without requiring CUDA cublas DLLs
    model = WhisperModel("base.en", device="cpu", compute_type="int8")
    print("[SUCCESS] Whisper STT Model loaded on port 8000!")

@app.post("/v1/audio/transcriptions")
async def transcribe_audio(file: UploadFile = File(...)):
    if not model:
        raise HTTPException(status_code=503, detail="Whisper model not initialized")

    temp_dir = tempfile.gettempdir()
    temp_path = os.path.join(temp_dir, f"stt_input_{os.urandom(4).hex()}.wav")

    try:
        content = await file.read()
        with open(temp_path, "wb") as f:
            f.write(content)

        # beam_size=1 + vad_filter=True makes transcription fast (~0.2s) and robust
        segments, info = model.transcribe(
            temp_path, 
            beam_size=1, 
            language="en", 
            vad_filter=True,
            vad_parameters=dict(min_silence_duration_ms=300)
        )
        transcribed_text = " ".join([segment.text for segment in segments]).strip()

        return {"text": transcribed_text}
    except Exception as e:
        print(f"[ERROR] STT transcription failed: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except Exception:
                pass

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
