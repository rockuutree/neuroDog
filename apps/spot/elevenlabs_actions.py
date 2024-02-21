import os
import elevenlabs

from constants import TEMP_AUDIO_FILE_NAME

elevenlabs.set_api_key(os.environ["XI_KEY"])

voice = elevenlabs.Voice(
    voice_id="1EZvZzsbWXl8xbUVG18t",
    settings=elevenlabs.VoiceSettings(stability=0, style=1, similarity_boost=1),
)


def speak(content):
    print("Playing spoken response", content)
    stream = elevenlabs.generate(
        text=content,
        voice=voice,
        # stream=True
    )

    elevenlabs.play(stream)


def listen():
    # Listen to the user for an action
    print("Listening for audio")
    cmd = f'arecord -vv --format=cd --device={os.environ["AUDIO_INPUT_DEVICE"]} -r 48000 --duration=3 -c 1 {TEMP_AUDIO_FILE_NAME}'
    print("Capturing audio")
    os.system(cmd)
