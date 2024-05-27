const prompt = require("prompt-sync")();

let fName = '';
let lName = '';
let msg = '';

// Exercise 1
function exercise01(fname, lName){
    msg = 'Hello ' + fName + ' ' + lName + '! I’m glad to inform you that you are the test subject of my very first assignment!';
    console.log(msg);
}

fName = prompt("Please enter your first name:");
lName = prompt("PLease enter your last name:");

exercise01(fName, lName)

