"use strict";
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
Object.defineProperty(exports, "__esModule", { value: true });
let favoritetransport = [];
favoritetransport.push(["Car", "Rangrover"]);
favoritetransport.push(["Bike", "Yamaha"]);
favoritetransport.push(["Truck", "Mercedes-Benz"]);
favoritetransport.forEach(([transport, brands]) => {
    console.log(`I Would Like To Own ${brands} ${transport}.`);
});
