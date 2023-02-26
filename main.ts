input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    basic.pause(5000)
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    basic.pause(5000)
    SuperBit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorStopAll()
})
