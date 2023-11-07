"use strict";
/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist2 = ["Sir Zia Khan", "Sajid Khan", "Osama Khan"];
// step 1
for (let guest of guestlist2) {
    console.log(`Hello ${guest}, we are found a Bigger Dinner Table.`);
}
//  step 2
let newGuest1 = "zeeshan usmani";
guestlist2.unshift(newGuest1);
// console.log(guestlist2)
// step 3
let newGuestInMiddle = "Irfan Malik";
let MiddleIndex = Math.floor(guestlist2.length / 2);
guestlist2.splice(MiddleIndex, 0, newGuestInMiddle);
// console.log(guestlist2)
// step 4
let newGuestInEndlist = "Saqib Azhar";
guestlist2.push(newGuestInEndlist);
// console.log(guestlist2)
// step 5
console.log("New Set Of Invatation Message.");
for (let guest of guestlist2) {
    console.log(`Dear ${guest} You are Invated To Dinner.`);
}
