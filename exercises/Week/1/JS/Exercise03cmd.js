const prompt = require("prompt-sync")();

let num1 = 0;
let num2 = 0;

console.log("Enter two consecutive numbers:");
num1 = parseInt(prompt("Enter number 1:"));
num2 = parseInt(prompt("Enter number 2:"));



if (num1+1==num2)
    console.log("Result: Consecutive");
else
    console.log("Result: Not consecutive")