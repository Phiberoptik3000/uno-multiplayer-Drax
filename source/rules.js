"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 0 => invaild move
 * 1 => normal value on value move
 * 2 => +2  - ok
 * 3 => skip - ok
 * 4 => reverse - ok
 * 5 => wild mystery color    - is this "wunschkarte"?
 * 6 => +4  - is "Wunschkarte" included?
 * ***Special-Cards***
 * 7 => King-Eagle:exchange complete hand with other player  (not implemented) 
 * 8 => Ice-Eagle: Player chosses color which all others have to play till he is back his turn  (not implemented) 
 * 9 => Fake-Eagle: All players have to draw a card. Next player has to play the current color  (not implemented) 
 * 10 => Helmet-Eagle: A card can only be played if its your last one, or if a special or action-card is active  (not implemented) 
 * 11 => Beer-Eagle: The next player has to drink. (not implemented) 
 * 12 => Schnapps-Eagle: All players have to drink. (not implemented) 
 */
class Rules {
    constructor(card1, card2, currentColor) {
        this.card1 = card1;
        this.card2 = card2;
        this.currentColor = currentColor;
    }
    getRule() {
        if (this.card1.isSpecial == false && this.card2.isSpecial == false) {
            if (this.card1.color != this.card2.color && this.card1.value != this.card2.value)
                return 0;
            else
                return 1;
        }
        else if (this.card1.isSpecial == true && this.card2.isSpecial == false) {
            if (this.currentColor != this.card2.color)
                return 0;
            else
                return 1;
        }
        else if (this.card1.isSpecial == false && this.card2.isSpecial == true) {
            if (this.card2.color == "black") {
                if (this.card2.value == 1)
                    return 6;
                else
                    return 5;
            }
            else {
                if (this.card1.color != this.card2.color)
                    return 0;
                else {
                    if (this.card2.value == 1)
                        return 3;
                    else if (this.card2.value == 2)
                        return 2;
                    else
                        return 4;
                }
            }
        }
        else {
            if (this.card2.color != "black" && this.currentColor != this.card2.color && this.card1.value != this.card2.value)
                return 0;
            if (this.card2.color == "black") {
                if (this.card2.value == 1)
                    return 6;
                else
                    return 5;
            }
            else {
                if (this.card2.color == this.currentColor || (this.card1.value == this.card2.value && this.card1.color != "black")) {
                    if (this.card2.value == 1)
                        return 3;
                    else if (this.card2.value == 2)
                        return 2;
                    else
                        return 4;
                }
                else {
                    return 0;
                }
            }
        }
    }
}
exports.default = Rules;
