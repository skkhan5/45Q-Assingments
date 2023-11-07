"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
Object.defineProperty(exports, "__esModule", { value: true });
let srt1 = "Hello world";
let srt2 = "hello world";
console.log(srt1 === srt2); //false
console.log(srt1 !== srt2); //ture
let text = "HELLO WORLD";
let text2 = "hello world";
console.log(text.toLowerCase() === text2); //ture
let num1 = 33;
let num2 = 23;
console.log(num1 !== num2); //ture
console.log(num1 <= num2); //false
console.log(num1 >= num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 === num2); //false
const x = 33;
const y = 55;
const z = 78;
console.log(x < y || y >= z); //true
console.log(x > y && y <= z); //false /true
console.log(x < y || y > z); //true
console.log(x > y && y >= z); //true /false
const fruits = ["apple", "banana", "grapes", "orange"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("red graps"));
const colour = ["red", "green", "yellow", "purple", "white"];
console.log(!colour.includes("green"));
console.log(colour.includes("yellow"));
