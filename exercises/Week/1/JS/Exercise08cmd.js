const prompt = require("prompt-sync")();

let correctNum = Math.floor((Math.random() * 10) + 1);
let msg='';
let num = 0;


console.log("Guess a number between 1-10");

do{
    num = parseInt(prompt("Guess:"));

    if(num < correctNum)
        msg = 'Number too small';
    else
        msg = 'Number too big';

    console.log(msg);
} while (num != correctNum);

console.log("CORRECT NUMBER!");
