input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    on_off = !(on_off)
    if (on_off) {
        pins.servoWritePin(AnalogPin.P0, speed)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, speed)
    pos = (pos + richtg) % 2
    pins.servoWritePin(AnalogPin.P1, wlist[pos])
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, speed)
    pins.servoWritePin(AnalogPin.P1, wlist[3])
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, speed)
    pos = 3
    pins.servoWritePin(AnalogPin.P1, pos)
})
let wlist: number[] = []
let richtg = 0
let speed = 0
let on_off = false
let pos = 0
pos = 0
let winkel = 0
on_off = true
speed = 120
richtg = 1
wlist = [
0,
90,
180,
135
]
let lauf = 1
pins.servoWritePin(AnalogPin.P0, 100)
pins.servoWritePin(AnalogPin.P1, wlist[pos])
