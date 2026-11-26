"""Generate Moroccan Darija voice-over with HADRA / Habibi-TTS."""
from __future__ import annotations

import argparse
from pathlib import Path

import soundfile as sf
import torch
from huggingface_hub import hf_hub_download
from f5_tts.infer.utils_infer import infer_process, load_model, load_vocoder, preprocess_ref_audio_text
from f5_tts.model import DiT

REPO_ID = "Jip7e/habibi-tts-doda-darija"
MODEL_CONFIG = {"dim": 1024, "depth": 22, "heads": 16, "ff_mult": 2, "text_dim": 512, "conv_layers": 4}


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Moroccan Darija speech")
    parser.add_argument("--text", required=True, help="Target Darija text")
    parser.add_argument("--reference-audio", required=True, help="3.5-6 second WAV reference")
    parser.add_argument("--reference-text", required=True, help="Exact words spoken in reference audio")
    parser.add_argument("--output", default="output_darija.wav", help="Output WAV path")
    parser.add_argument("--steps", type=int, default=16, help="NFE steps: 16 fast, 32 studio")
    parser.add_argument("--speed", type=float, default=0.95)
    args = parser.parse_args()

    if not Path(args.reference_audio).is_file():
        raise FileNotFoundError(f"Reference audio not found: {args.reference_audio}")

    checkpoint = hf_hub_download(repo_id=REPO_ID, filename="model_ema.safetensors")
    vocab = hf_hub_download(repo_id=REPO_ID, filename="vocab.txt")
    model = load_model(DiT, MODEL_CONFIG, checkpoint, vocab_file=vocab)
    vocoder = load_vocoder("vocos")
    ref_audio, ref_text = preprocess_ref_audio_text(args.reference_audio, args.reference_text)
    device = "cuda" if torch.cuda.is_available() else "cpu"
    dtype = torch.float16 if device == "cuda" else torch.bfloat16
    with torch.autocast(device_type=device, dtype=dtype):
        wav, sample_rate, _ = infer_process(ref_audio, ref_text, args.text, model, vocoder, speed=args.speed, nfe_step=args.steps, cfg_strength=2.0, sway_sampling_coef=-1.0)
    sf.write(args.output, wav, sample_rate)
    print(f"Saved {args.output} ({sample_rate} Hz)")


if __name__ == "__main__":
    main()
