groveKeypad12ch.config(SerialPin.P0, SerialPin.P1)

basic.forever(function () {
    const k = groveKeypad12ch.lireClavier()
    if (k >= 0) {
        serial.writeLine("" + k)
        basic.pause(200)
        groveKeypad12ch.clear()
    }
    basic.pause(20)
})
