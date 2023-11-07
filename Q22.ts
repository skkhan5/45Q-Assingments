/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */




function createfruits(name: string ,colour:string,taste:string)
{
    return{
        name,
        colour,
        taste,
        
    }
}
const fruits = [
    createfruits("Apple", "Red","Sweet"),
    createfruits("Banana","Yellow","Sweet"),
    createfruits("Mango","Yellow", "Sweet"),
    createfruits("Orange","Orange","Sweet"),
    createfruits("Grapes","Green","Sweeet"),
]

const invalidIndex = 10;
console.log(`Fruits Index ${invalidIndex}:`,fruits [invalidIndex])

fruits.forEach((fruit)=>{
    console.log(`Name: ${fruit.name}, Color:${fruit.colour}, Taste:${fruit.taste}`)});
export{}








