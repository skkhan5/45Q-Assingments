"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist1 = void 0;
let guestlist1 = ["Sir Zia Khan", "Sajid Khan", "Osama Khan"];
exports.guestlist1 = guestlist1;
let guestHowCantMakeIt = "Osama Khan";
console.log(`${guestHowCantMakeIt}, Cant Make It To Dinner.`);
let newGuest = "Ali Shakhani";
let indexOfCantMakeIt = guestlist1.indexOf(guestHowCantMakeIt);
if (indexOfCantMakeIt !== -1) {
    guestlist1[indexOfCantMakeIt] = newGuest;
}
console.log("Second Set Of Invitation massage.");
guestlist1.forEach((guest) => {
    console.log(`Dear ${guest}, your are invited to Dinner.`);
});
