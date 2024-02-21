from elevenlabs_actions import speak
from spot_controller import SpotController


def sit(controller: SpotController):
    speak("I'm sitting down!")
    controller.move_head_in_points(yaws=[1], pitches=[-20], rolls=[0])
    controller.move_head_in_points(yaws=[0], pitches=[-20], rolls=[0])
    return


def stand_up(controller: SpotController):
    speak("I'm standing up!")
    controller.stand_up()
    return


def bow(controller: SpotController):
    speak("Bow, bow, bow...")
    controller.bow(20)
    return
