/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */





function makeshart(size:string= "Medium", message:string="I Love TypeStrip"):void{
    console.log(`Size:${size} message:${message}`);
}

makeshart()

makeshart("large")

makeshart("small","Typestrip is a Good compailer")








