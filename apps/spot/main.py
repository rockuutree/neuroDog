import os
import time
from neurosity import NeurositySDK
from elevenlabs_actions import listen, speak
from openai_actions import get_audio_transcript, request_action
from spot_actions import bow, sit, stand_up
from spot_controller import SpotController

from dotenv import load_dotenv

load_dotenv()

ROBOT_IP = "10.0.0.3"  # os.environ['ROBOT_IP']
SPOT_USERNAME = "admin"  # os.environ['SPOT_USERNAME']
SPOT_PASSWORD = "2zqa8dgw7lor"  # os.environ['SPOT_PASSWORD']

# Neurosity SDK
last_time = 0
is_forward = False
is_sitting = False
neurosity = NeurositySDK(
    {
        "device_id": os.environ["NEUROSITY_DEVICE_ID"],
    }
)
neurosity.login(
    {
        "email": os.environ["NEUROSITY_EMAIL"],
        "password": os.environ["NEUROSITY_PASSWORD"],
    }
)

controller = SpotController(
    username=SPOT_USERNAME, password=SPOT_PASSWORD, robot_ip=ROBOT_IP
)


def main():
    with controller as spot:
        time.sleep(2)

        # Move head to specified positions with intermediate time.sleep
        spot.move_head_in_points(
            yaws=[0.2, 0], pitches=[0.3, 0], rolls=[0.4, 0], sleep_after_point_reached=1
        )
        time.sleep(3)

        action_count = 0
        listening = True
        while listening:
            speak("I'm listening, talk now...")
            listen()

            # Get the transcription
            print("Getting audio transcript")
            user_prompt = get_audio_transcript()
            action_count += 1
            print(user_prompt)

            if action_count > 5:
                speak("I'm tired of listening to you, goodbye!")
                print("Stopping")
                listening = False
                break

            if "stop" in user_prompt.lower():
                speak("Goodbye!")
                print("Stopping")
                listening = False
                break

            if user_prompt == "":
                continue
            else:
                actionRequest = request_action(user_prompt)
                print(f"Action Request: {actionRequest}")

                command = actionRequest["action"]

                if command == "sit":
                    sit(spot)
                    continue
                elif command == "stand-up":
                    stand_up(spot)
                    continue
                elif command == "listen-to-brain":
                    speak("Listening to your brain...")

                    print("logged in")
                    info = neurosity.get_info()

                    def callback(data):
                        global last_time
                        global is_forward
                        global is_sitting

                        if (time.time() - last_time) > 3:
                            print(data)

                            if is_sitting:
                                speak("Grr!")
                                spot.move_by_velocity_control(
                                    v_x=-0.3, v_y=0, v_rot=0, cmd_duration=2
                                )
                                is_forward = False
                                is_sitting = False
                            elif is_forward:
                                speak("Woof!")
                                spot.bow(20)
                                spot.move_head_in_points(
                                    yaws=[1], pitches=[-20], rolls=[0]
                                )
                                spot.move_head_in_points(
                                    yaws=[0], pitches=[-20], rolls=[0]
                                )
                                is_sitting = True
                            else:
                                speak("Bark!")
                                spot.move_to_goal(goal_x=0.5, goal_y=0)
                                is_forward = True

                        last_time = time.time()

                    try:
                        unsubscribe = neurosity.kinesis("tongue", callback)
                        time.sleep(30)
                    finally:
                        unsubscribe()

                    print("done with neurosity")
                    speak("I'm done listening to your brain!")
                elif command == "bow":
                    bow(spot)
                    continue
                elif command == "stop":
                    speak("Goodbye!")
                    print("Stopping")
                    listening = False
                    break
                else:
                    speak("I don't know that command! Try again.")
                    print("dont recognize this command")
                    continue


if __name__ == "__main__":
    main()
