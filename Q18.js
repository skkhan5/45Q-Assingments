"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
Object.defineProperty(exports, "__esModule", { value: true });
// step 1
let destination = ["madina munawar", "makkah", "turkey", "canada", "dubia"];
// step 2
console.log(`orignal order`);
console.log(destination);
// step 3
console.log("\n Alphabetical order without modiflying the actual list");
console.log([...destination].sort());
// step 4
console.log("\nshowing arry is still in its orignal order");
console.log(destination);
// step 5
console.log("\n Reverse Alphabetical order without modiflying the actual list");
console.log([...destination].sort().reverse());
// step 6
console.log("\nshowing arry is still in its orignal order");
console.log(destination);
// step 7
console.log("\nRevers Odar");
destination.reverse();
console.log(destination);
// step 8
console.log("\nback to orignal");
destination.reverse();
console.log(destination);
// step 9
console.log("\n Change to Alphabetical order");
destination.sort();
console.log(destination);
// step 10
console.log("\n Change to Reverce Alphabetical order");
destination.sort().reverse();
console.log(destination);
