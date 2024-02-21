import json
import os
from openai import OpenAI
from tenacity import retry, stop_after_attempt, wait_random_exponential

from constants import TEMP_AUDIO_FILE_NAME, TOOLS

GPT_MODEL = "gpt-3.5-turbo-0613"
client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])


@retry(wait=wait_random_exponential(multiplier=1, max=40), stop=stop_after_attempt(1))
def chat_completion_request(messages, tools=None, tool_choice=None, model=GPT_MODEL):
    try:
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            tools=tools,
            tool_choice=tool_choice,
        )
        return response
    except Exception as e:
        print("Unable to generate ChatCompletion response")
        print(f"Exception: {e}")
        return e


def request_action(transcription: str):
    try:
        messages = []
        messages.append(
            {
                "role": "system",
                "content": "The user is currently using a frontend application and wants to do an action. It is speaking to you through the backend and wants you to understand the action it wants to take. If you don't understand, return a tool call with the argument unknown",
            }
        )
        messages.append({"role": "user", "content": transcription})
        chat_response = chat_completion_request(
            messages,
            tools=TOOLS,
            tool_choice={"type": "function", "function": {"name": "get_user_action"}},
        )
        assistant_message = (
            chat_response.choices[0].message.tool_calls[0].function.arguments
        )
        return json.loads(assistant_message)
    except Exception as e:
        return {"action": "unknown"}


def get_audio_transcript():
    audio_file = open(TEMP_AUDIO_FILE_NAME, "rb")

    print("Transcribing:")
    transcript = client.audio.translations.create(model="whisper-1", file=audio_file)

    user_prompt = transcript.text
    audio_file.close()

    print(user_prompt)

    return user_prompt
