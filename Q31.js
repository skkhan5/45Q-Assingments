"use strict";
/**No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
Object.defineProperty(exports, "__esModule", { value: true });
let userName1 = ["admin", "muhammad ifran malik", "zeeshan usmani", " ali", "ali khan"];
function greetusers1(userName1) {
    if (userName1.length == 0) {
        console.log("we need tu find some users!");
        return;
    }
    for (let userName of userName1) {
        if (userName.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a stutus reports.");
        }
        else {
            console.log(`Hello ${userName},thank you for loggin again.`);
        }
    }
}
console.log(`for non empty users:\n`);
greetusers1(userName1);
userName1 = [];
console.log(`\n\n for empty usersname:\n`);
greetusers1(userName1);
