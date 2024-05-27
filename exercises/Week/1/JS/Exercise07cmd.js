const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a positive number 1:"));
if (num < 0)
    console.log("not positive number");
else if (num % 2 == 0)
    console.log("Even number");
else 
    console.log("Odd number");
