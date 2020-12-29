let Hand = 0
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("Winner!!!")
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("E D G F B A C5 B ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Oliver is the best")
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Loser wahhh")
})
