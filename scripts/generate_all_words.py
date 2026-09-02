import os
import sys
import json
import time

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

import soundfile as sf
from kokoro_onnx import Kokoro
from phonemizer.backend import EspeakBackend

def main():
    print("==================================================")
    print("🎙️ EnglishPulse - 1,100 Vocabulary Audio Pre-Recorder")
    print("==================================================")

    # 1. Check paths
    json_path = os.path.join(os.path.dirname(__file__), "vocab_words.json")
    if not os.path.exists(json_path):
        print("❌ ERROR: scripts/vocab_words.json not found! Run export first.")
        sys.exit(1)

    with open(json_path, "r", encoding="utf-8") as f:
        words = json.load(f)

    out_dir = os.path.join(os.path.dirname(__file__), "..", "audio", "words")
    os.makedirs(out_dir, exist_ok=True)

    # 2. Init eSpeak NG and Kokoro
    espeak_dll = r"C:\Program Files\eSpeak NG\libespeak-ng.dll"
    if os.path.exists(espeak_dll):
        os.environ["PHONEMIZER_ESPEAK_LIBRARY"] = espeak_dll

    print("🚀 Initializing Kokoro ONNX neural synthesizer...")
    espeak_backend = EspeakBackend('en-us', preserve_punctuation=True, with_stress=True)
    kokoro = Kokoro('kokoro-v0_19.onnx', 'voices.bin')

    def real_ipa(text, lang='en-us', **kwargs):
        res = espeak_backend.phonemize([text])
        return res[0] if res else text

    kokoro.tokenizer.phonemize = real_ipa

    total_words = len(words)
    print(f"📖 Loaded {total_words} vocabulary words. Starting pre-recording...")

    # Hero voice mapping (male/female neural voices for natural pronunciation)
    # af_bella, af_nicole, af_sarah (female) | am_adam, am_michael (male)
    hero_voices = {
        "eldrin": "am_adam",
        "thorin": "am_michael",
        "oberon": "am_adam",
        "selene": "af_bella",
        "astraea": "af_sarah",
        "freya": "af_nicole",
        "ignis": "am_michael",
        "lyra": "af_bella",
        "zephyr": "am_adam",
        "kael": "am_michael"
    }

    start_time = time.time()
    generated_count = 0
    skipped_count = 0

    for idx, item in enumerate(words):
        word_text = item["word"]
        clean_key = item["key"]
        hero_id = item.get("hero", "eldrin")
        voice_name = hero_voices.get(hero_id, "af_bella")

        out_path = os.path.join(out_dir, f"{clean_key}.wav")

        if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
            skipped_count += 1
            continue

        try:
            samples, sample_rate = kokoro.create(word_text, voice=voice_name, speed=1.0)
            sf.write(out_path, samples, sample_rate)
            generated_count += 1

            if generated_count % 50 == 0 or idx == total_words - 1:
                elapsed = time.time() - start_time
                percent = ((idx + 1) / total_words) * 100
                print(f"[{percent:5.1f}%] {idx + 1}/{total_words} words processed | Generated: {generated_count} | Cached: {skipped_count} | Time: {elapsed:.1f}s")
        except Exception as err:
            print(f"⚠️ Error on '{word_text}': {err}")

    total_elapsed = time.time() - start_time
    print("==================================================")
    print(f"🎉 COMPLETED in {total_elapsed:.1f}s!")
    print(f"✅ Newly generated: {generated_count} files")
    print(f"⏭️ Already cached:  {skipped_count} files")
    print(f"📁 Output directory: {os.path.abspath(out_dir)}")
    print("==================================================")

if __name__ == "__main__":
    main()
