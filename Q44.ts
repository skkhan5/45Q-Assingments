/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */

function makeSandwich(...items:string[]):void{
    console.log("sandwich summary")
if(items.length===0){
    console.log(" your odar is empty sandwich. please add the some item.")
}else(
    items.forEach((item,i)=>{console.log(`${i + 1}.${item}`)})
)
}

console.log("\n")

makeSandwich("White Bread","Turkay","Paist Chiken","Cheese","Ice barq","Chiken slice",)
makeSandwich("White Bread","Turkay","Salad","Cocumber","Cheese","Chiken",)
makeSandwich("Brown Bread","Turkay","Beef","Cocumber","Cheese","Ice barq",)
makeSandwich()












