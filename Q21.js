"use strict";
/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */
Object.defineProperty(exports, "__esModule", { value: true });
const bouquet = {
    name: "flowers",
    price: 300,
    description: "beautiful arragement of spring flowers",
};
let bouquets = [];
bouquets.push(bouquet);
bouquets.push({
    name: "summer bliss",
    price: 200,
    description: "beutifuly arrangment of summer flowers"
});
let bouquets3 = {
    name: "red rose",
    price: 350,
    description: "beautiful arragement of red rose",
};
bouquets.push(bouquets3);
console.log(bouquets);
function displaybouquets(bouquets) {
    for (let i of bouquets) {
        console.log(bouquets);
    }
}
displaybouquets(bouquets);
