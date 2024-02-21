TEMP_AUDIO_FILE_NAME = "audio_temp.mp3"

TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_user_action",
            "description": "A user will pass in a transcription of an action they want to do on the dog. This function will return the action that the user wants to do. Pass in the action it wants to do. If the user changes their mind, it is an unknown action.",
            "parameters": {
                "type": "object",
                "properties": {
                    "action": {
                        "type": "string",
                        "enum": [
                            "sit",
                            "stop",
                            "stand-up",
                            "bow",
                            "unknown",
                            "listen-to-brain",
                        ],
                    },
                },
                "required": ["action"],
            },
        },
    },
]
