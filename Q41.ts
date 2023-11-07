/**Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
const magicionName:string[]=
["Herry Poter","David","Hermion","Alnus dumbledore","Ron Weasly"];

function showMagicions(magicions:string[]):void{
    for(const magicion of magicions){ 
        console.log(magicion);
    }
}


showMagicions(magicionName)






