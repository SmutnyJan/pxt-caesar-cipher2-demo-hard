input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (Zasifruj("microbit", 5)))
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (Desifruj(receivedString, 5)))
})
function Zasifruj(text: string, posun: number) {
    for (let i = 0; i <= text.length - 1; i++) {
        konecnyText = "" + konecnyText + cipher.encryptCharacter(text.charAt(i), posun)
    }
    return konecnyText
}
function Desifruj(text: string, posun: number) {
    for (let j = 0; j <= text.length - 1; j++) {
        konecnyText = "" + konecnyText + cipher.decryptCharacter(text.charAt(j), posun)
    }
    return konecnyText
}
let konecnyText = ""
radio.setGroup(1)
