/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */




let personName:string = "abdul samad khan";

console.log(personName.toUpperCase())


let myname = "abdul samad khan";

console.log(myname.toLowerCase());

let alphabets:string[] = personName.split(" ");
let tittlecaseName:string = "";
for(let i=0 ; i<alphabets.length ; i++){
tittlecaseName += alphabets[i].charAt(0).toUpperCase()+alphabets[i].slice(1).toLowerCase()+" ";
}
console.log(tittlecaseName)
