"use strict";
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "\t   samad khan \n";
console.log("name with whitespace", name1);
let stripedName = name1.trim();
console.log("striped name!", stripedName);