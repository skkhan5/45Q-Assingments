"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
Object.defineProperty(exports, "__esModule", { value: true });
const magicianName = ["Herry Poter", "David", "Hermion", "Alnus dumbledore", "Ron Weasly"];
function show_Magicions(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
;
function make_great(magicians) {
    const greatMagicions = magicians.map(magician => `The Great ${magician}`);
    return greatMagicions;
}
const greatMagicianName = make_great(magicianName);
console.log("Orignal magician:");
show_Magicions(magicianName);
console.log("\nGreat magicions:");
show_Magicions(greatMagicianName);
