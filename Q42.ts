/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
const magicianName:any=
["Herry Poter","David","Hermion","Alnus dumbledore","Ron Weasly"];

function show_Magicions(magicians:string):void{
    for(const magician of magicians){ 
        console.log(magician);
    }
};
function make_great(magicians:string[]):any{
    const greatMagicions:string[]=
     magicians.map(magician => `The Great ${magician}`);
     return greatMagicions
}



const greatMagicianName = make_great(magicianName)


console.log("Orignal magician:");
show_Magicions(magicianName)

console.log("\nGreat magicions:")
show_Magicions(greatMagicianName)