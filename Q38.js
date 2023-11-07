"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country. */
function descript_city(city, country = "unknown country") {
    console.log(`${city}, is in ${country}.`);
}
descript_city("Karachi", "Pakistan");
descript_city("New York"); // using default country values
descript_city("Berlin", "Germany");
