function fibonacci(fNum){
    if (fNum<2)
      return fNum;
    else 
      return fibonacci(fNum-1) + fibonacci(fNum-2);
}


const prompt = require("prompt-sync")();

let fLen = 0;
fLen = parseInt(prompt("Enter a positive number as length of fibonacci series: "));

for(i=0; i<fLen;i++)
    console.log(fibonacci(i));
