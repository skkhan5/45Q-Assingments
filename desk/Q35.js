"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
let animals = ["Cat", "Goat", "Dog"];
console.log("List Of Animal");
for (const animal of animals) {
    console.log(animal);
}
console.log("\nSteatement about each Animal.");
for (const animal of animals) {
    if (animal === "Dog") {
        console.log(`A ${animal} Is a Very Good Pet.`);
    }
    else if (animal === "Cat") {
        console.log(`A ${animal} Would Be a Good Companion at Home.`);
    }
    else if (animal === "Goat") {
        console.log(`A ${animal} Is an Aroble Pet That also Give us Milk.`);
    }
}
console.log("\nWhat These animal have in common.");
console.log("Any of These aminal Would Make a Great Pet!");
