"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
Object.defineProperty(exports, "__esModule", { value: true });
const current_user = ["Ali khan", "Babar Azam", "Muhammad Haris", "Shaheen Afridi", "Fakhar Zaman", "Iftikhar Chacha"];
const new_user = ["Muhammad Haris", "Shadab khan", "Haris Rauf", "Fakhar Zaman", "wasim JR"];
function checkuserName(current_user, new_user) {
    const lowercasedCurrrent_user = current_user.map(user => user.toLowerCase());
    for (const newuser of new_user) {
        const lowercaseTonewuser = newuser.toLowerCase();
        if (lowercasedCurrrent_user.includes(lowercaseTonewuser)) {
            console.log(`username "${newuser}"its alredy teken please enter a new username`);
        }
        else
            [
                console.log(`username "${newuser}" its avalible.`)
            ];
    }
}
checkuserName(current_user, new_user);
