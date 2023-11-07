"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
const magicionName = ["Herry Poter", "David", "Hermion", "Alnus dumbledore", "Ron Weasly"];
function showMagicions(magicions) {
    for (const magicion of magicions) {
        console.log(magicion);
    }
}
showMagicions(magicionName);
