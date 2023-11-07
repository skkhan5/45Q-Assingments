/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. */





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