# Moroccan Darija Voice-over

This folder generates voice-over audio with [HADRA / Habibi-TTS Doda Darija](https://huggingface.co/Jip7e/habibi-tts-doda-darija).

The model is not copied into GitHub. The script downloads the recommended `model_ema.safetensors` (about 1.3 GB) from Hugging Face on first run.

## Requirements

- Python 3.10+
- Recommended: NVIDIA GPU with CUDA and at least 8 GB VRAM
- CPU works but is significantly slower
- A clean 3.5–6 second WAV reference recording
- Permission to use the reference speaker's voice

## Setup

```bash
cd voiceover
python -m venv .venv
# Windows PowerShell
.\\.venv\\Scripts\\Activate.ps1
# macOS/Linux
source .venv/bin/activate
pip install -r requirements.txt
```

If Hugging Face asks for authentication, run `huggingface-cli login` with a read-only token. The model is Apache-2.0; use the reference voice only with permission.

## Generate audio

The reference text must match exactly what is spoken in the WAV file:

```bash
python generate_darija.py `
  --text "السلام عليكم، مرحبا بكم فـ Dropseller. عروض رقمية بأثمنة مناسبة وتوصيل سريع." `
  --reference-audio .\\reference.wav `
  --reference-text "هوما مخبيين شي حاجة انا متيقن" `
  --output .\\dropseller-intro.wav `
  --steps 16
```

Use `--steps 32` for a higher-quality final voice-over. Put the resulting WAV in `public/audio/` if you want to play it in the React website.

This is local generation, not a browser API. Never put a Hugging Face token in React or commit it to GitHub.
