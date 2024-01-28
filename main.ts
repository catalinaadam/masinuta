input.onButtonPressed(Button.A, function () {
    RingbitCar.turnright()
    basic.pause(500)
    RingbitCar.brake()
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 2)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    RingbitCar.turnleft()
    RingbitCar.brake()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showIcon(IconNames.Happy)
