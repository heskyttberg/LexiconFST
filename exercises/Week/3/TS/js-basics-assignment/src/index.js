"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// *** Ignore the following lines ***
var chalk_1 = require("chalk");
var prompt_sync_1 = require("prompt-sync");
// *** Ignore the above lines ***
// Use the following function to read input from the user:
var readLine = (0, prompt_sync_1.default)({ sigint: true });
// ############### SUPPORT FUNCTIONS #############################
// Exercise 1
function exercise01(fName, lName) {
    var msg = 'Hello ' + fName + ' ' + lName + '! I’m glad to inform you that you are the test subject of my very first assignment!';
    console.log(msg);
}
// Exercise 2
function exercise02(fName, lName) {
    var msg = 'Hello ' + fName + ' ' + lName + '! Have a nice day';
    console.log(msg);
}
// CAlculate area of a circle
function circleArea(radius) {
    return (Math.PI * Math.pow(radius, 2));
}
// Calculate area of a sphere
function sphereArea(radius) {
    return (4 * Math.PI * Math.pow(radius, 2));
}
// Completely reverse a string
function reverseString(s) {
    return s.split("").reverse().join("");
}
// Removce all white spaces from a string
function removeWhitespace(s) {
    return s.replace(/\s/g, "");
}
// Remove any characters that are not a letter or blank
function removeNonLetters(s) {
    return s.replace(/[^a-zA-Z0-9 ]+/g, "");
}
// Only keeep letters
function removeAll(s) {
    return s.replace(/[^a-zA-Z0-9]+/g, "");
}
// we only check if raw string is a palindrome or not
function exercise09A(paliStr) {
    return (paliStr == reverseString(paliStr));
}
// we check if string with letters and blanks is palindrome
function exercise09B(paliStr) {
    return (removeNonLetters(paliStr) == removeNonLetters(reverseString(paliStr)));
}
// we check if string with only letters is a palindrome
function exercise09C(paliStr) {
    return (removeAll(paliStr) == removeAll(reverseString(paliStr)));
}
// Capitalize first letter of a string
function capitalizeFirstLetter(s) {
    return s[0].toUpperCase() + s.slice(1);
}
// ################## END SUPPORT FUNCTIONS ###########################
// ################## Excersise solutions ##########################
function runExerciseOne() {
    var fName = 'Donald';
    var lName = 'Duck';
    var msg = exercise01(fName, lName);
}
function runExerciseTwo() {
    var prompt = require("prompt-sync")();
    var fName = prompt("Please enter your first name:");
    var lName = prompt("PLease enter your last name:");
    exercise02(fName, lName);
}
// I do not know what store resule in a double means, since there is no double datatype in
// typescript or javascript. There is only two types that is number = decimal numbers and bigint
function runExerciseThree() {
    // Our numbers for both solution A and B
    var num1 = 40;
    var num2 = 13;
    // Soulution A: sum of two numbers
    var sum = num1 + num2;
    var msg = num1 + " + " + num2 + " = " + sum;
    console.log(msg);
    // Solution B: divide even number by odd number
    sum = num1 / num2;
    msg = num1 + " / " + num2 + " = " + sum;
    console.log(msg);
}
function runExerciseFour() {
    var prompt = require("prompt-sync")();
    var r = 0.0;
    console.log("Calculate area of circle and volume of a sphere:");
    r = prompt("Enter radius:");
    var msg = "Area of a circle with radius " + r + " equals " + circleArea(r);
    console.log(msg);
    msg = "Area of a sphere with radius " + r + " equals " + sphereArea(r);
    console.log(msg);
}
function runExerciseFive() {
    var prompt = require("prompt-sync")();
    var num1 = 0;
    var num2 = 0;
    console.log("Enter two consecutive numbers:");
    num1 = parseInt(prompt("Enter number 1:"));
    num2 = parseInt(prompt("Enter number 2:"));
    if (num1 + 1 == num2)
        console.log("Result: Consecutive");
    else
        console.log("Result: Not consecutive");
}
function runExerciseSix() {
    var prompt = require("prompt-sync")();
    var num = parseInt(prompt("Enter a positive number:"));
    if (num < 0)
        console.log("not positive number");
    else if (num % 2 == 0)
        console.log("Even number");
    else
        console.log("Odd number");
}
// This excersise is not as easy as it is made out to be
// if you have a fever or not depends on your baseline temp.
function runExerciseSeven() {
    var prompt = require("prompt-sync")();
    var temp = 0.0;
    temp = prompt("Inpout your temperature in Celsius Ex. (37.3):");
    if (temp > 37.3)
        console.log("You have a fever!");
    else
        console.log("You do not have a fever!");
}
function runExerciseEight() {
    var prompt = require("prompt-sync")();
    var grade = "";
    grade = prompt("Inpout your grade (A,B,C,D,E):");
    switch (grade) {
        case "A":
            console.log("Perfect score");
            break;
        case "B":
            console.log("Good job");
            break;
        case "C":
            console.log("You passed");
            break;
        case "D":
            console.log("Do better next time");
            break;
        case "E":
            console.log("No more partying! YOU NEED TO STUDY!");
            break;
        default: console.log("You failed!");
    }
}
// This answer is according to what I think was missing in excercise parameters
// Removing all whitespaces and non letter characters
// We also ignore case
function runExerciseNine() {
    var prompt = require("prompt-sync")();
    var paliStr = "";
    paliStr = prompt("Input any text: ");
    if (exercise09C(paliStr))
        console.log(paliStr + "is a palindrome.");
    else
        console.log(paliStr + " is not a plaindrome.");
}
function runExerciseTen() {
    var prompt = require("prompt-sync")();
    // Solution for A
    var myStr = "The quick fox Jumped Over the DOG";
    myStr = myStr.toLowerCase();
    myStr = capitalizeFirstLetter(myStr);
    myStr = myStr.replace("quick", "brown");
    myStr = myStr.replace("dog", "lazy dog");
    console.log(myStr);
    // ###################################################
    // Solution for B
    console.log("\nInput two words:");
    var str01 = prompt("Enter word one:");
    var str02 = prompt("Enter word two:");
    if (str01.toLowerCase() == str02.toLowerCase())
        console.log("The words are same");
    else
        console.log("The words are not the same");
    // #####################################################
    // Solution for C
    str01 = "Donkey";
    var str01Chars = __spreadArray([], str01, true);
    str01Chars[0] = "M";
    str01 = str01Chars.join("");
    console.log(str01);
    // #######################################################
    // Solution for D
    str01 = "I am going to visit Kolmarden zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.";
    str01 = str01.replaceAll("I", "We");
    str01 = str01.replaceAll("am", "are");
    console.log(str01);
    // ######################################################
    // Solution for E
    //"She is the popular singer." and the expected string is "She is the most popular singer."
    str01 = "She is the popular singer.";
    str01 = str01.replace("popular", "most popular");
    console.log(str01);
    // ######################################################
    // Solution for F
    //F) Actual string is "A friend is the asset of your life." and the expected string is "A true friend is the greatest asset of your life"
    str01 = "A friend is the asset of your life.";
    str01 = str01.replace("friend", "true friend");
    str01 = str01.replace("asset", "greatest asset");
    console.log(str01);
    // ######################################################
    // Solution for G
    // G) Actual string is "My name is Sebastian Vallin." Expected string: "Sebastian Vallin"
    str01 = "My name is Sebastian Vallin.";
    str01 = str01.slice(str01.indexOf("Sebastian"));
    str01 = str01.replace(".", "");
    console.log(str01);
    // ######################################################
    // Solution for H
    //H) Actual string is "Arrays are very common in programming, they look something like: [1,2,3,4,5]" Expected string: "[1,4,5,6,7,8]"
    str01 = "Arrays are very common in programming, they look something like: [1,2,3,4,5]";
    str01 = str01.slice(str01.indexOf("["));
    str01 = str01.replace("5", "7,8");
    str01 = str01.replace("4", "6");
    str01 = str01.replace("3", "5");
    str01 = str01.replace("2", "4");
    console.log(str01);
    // #########################################################
}
function runExerciseEleven() {
    var prompt = require("prompt-sync")();
    var op = "";
    op = prompt("Wich operand should be used (+,-,/,*):");
    var num1 = parseInt(prompt("Number 1:"));
    var num2 = parseInt(prompt("Number 2:"));
    var msg = "";
    var res = 0;
    switch (op) {
        case "+":
            res = num1 + num2;
            msg = num1 + " " + op + " " + num2 + " = " + res;
            break;
        case "-":
            res = num1 - num2;
            msg = num1 + " " + op + " " + num2 + " = " + res;
            break;
        case "/":
            res = num1 / num2;
            msg = num1 + " " + op + " " + num2 + " = " + res;
            break;
        case "*":
            res = num1 * num2;
            msg = num1 + " " + op + " " + num2 + " = " + res;
            break;
        default: console.log("operator not found");
    }
    console.log(msg);
}
function runExercise12() {
    var prompt = require("prompt-sync")();
    var num = parseInt(prompt("Input a number lower then 100:"));
    var i = 0;
    // Ascending for
    for (i = 1; i <= num; i++)
        console.log(i);
    // Descending for
    for (i = num; i > 0; i--)
        console.log(i);
    // Ascending do
    i = 0;
    do {
        i++;
        console.log(i);
    } while (i < num);
    // Descending do
    i = num;
    do {
        console.log(i);
        i--;
    } while (i > 0);
    // Ascending while
    i = 0;
    while (i < num) {
        i++;
        console.log(i);
    }
    // Descending while
    i = num;
    while (i > 0) {
        console.log(i);
        i--;
    }
}
function runExercise13() {
    var prompt = require("prompt-sync")();
    var maxNum = 10;
    var randomNumber = Math.floor(Math.random() * maxNum) + 1;
    var guess = 0;
    var cont = "Y";
    do {
        guess = parseInt(prompt("Guess a number 1-10: "));
        if (guess == randomNumber)
            console.log("CONGRATULATIONS CORRECT!");
        else
            cont = prompt("wrong, quit with Q: ");
    } while (guess != randomNumber && cont != "Q");
}
function runExercise14() {
    var msg = "";
    for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++)
            if (i * j < 10)
                msg += " " + i * j + " ";
            else
                msg += i * j + " ";
        console.log(msg);
        msg = "";
    }
}
// You can't get chars centered like that in console
function runExercise15() {
    var msg = "";
    var blanks = "";
    var i = 0;
    var j = 9;
    var max = 9;
    do {
        for (i = j; i > 0; i--)
            msg += "*";
        for (i = 0; i < (max - j) / 2; i++)
            blanks += " ";
        console.log(blanks + msg);
        msg = "";
        blanks = "";
        j--;
        j--;
    } while (j > 0);
}
function runExercise16() {
    var prompt = require("prompt-sync")();
    var sum = 0;
    var avg = 0;
    var num = 0;
    var numArr = [];
    var myNum;
    do {
        num = parseInt(prompt("Enter a number, quit with 0: "));
        if (num != 0)
            numArr.push(num);
        else
            break;
    } while (num != 0);
    numArr.forEach(function (item) { return sum += item; });
    avg = sum / numArr.length;
    console.log("Sum: " + sum);
    console.log("Avg: " + avg);
}
// Fibonacci recursive function
function fibonacci(fNum) {
    if (fNum < 2)
        return fNum;
    else
        return fibonacci(fNum - 1) + fibonacci(fNum - 2);
}

function runExercise17() {
    var prompt = require("prompt-sync")();
    var fLen = 0;
    fLen = parseInt(prompt("Enter a positive number as length of fibonacci series: "));
    if (fLen > 20)
        fLen = 20;
    for (var i = 0; i < fLen; i++)
        console.log(fibonacci(i));
}

// #################################### scrabbleWordScore #################

// To get the value for a single letter
function scoreLetter(c: any): number{
    let scoreTable = {
        A : 1,
        E : 1,
        I : 1,
        O : 1,
        U : 1,
        L : 1,
        N : 1,
        R : 1,
        S : 1,
        T : 1,
        D : 2, 
        G : 2,
        B : 3,
        C : 3,
        M : 3,
        P : 3,
        F : 4,
        H : 4,
        V : 4,
        W : 4,
        Y : 4,
        K : 5,
        J : 6,
        X : 6,
        Q : 7, 
        Z : 7
    };

    // We need to ignore this line because getting this correct is almost impossible and too much work
    // very complicated to get TS to accept this statement, key, value arrays is basically useless in TS
    // @ts-ignore
    return scoreTable[c];
}

// Looping through our word and sum up total score
function scoreWord (str: string){

    let sum = 0;
    let i = 0;

    for(i=0;i<str.length; i++)
        sum += scoreLetter(str[i]);

    return sum;
}

//let str = "cabbage";
//let msg = scoreWord(str.toUpperCase());
function scrabbleScore(){
    let str = "";
    str = readLine("Write your word: ");

    let score = scoreWord(str);
    
    let msg = "Your word \"" + str + "\" is worth " + score + " points."
    console.log(msg);
}

// ########################################################################
/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */
var keepAlive = true;
console.clear();
while (keepAlive) {
    try {
        var assignmentChoice = parseInt(readLine("Enter assignment number (ctrl + C or -1 to exit): "));
        console.log();
        switch (assignmentChoice) {
            case 1:
                runExerciseOne();
                break;
            case 2:
                runExerciseTwo();
                break;
            case 3:
                runExerciseThree();
                break;
            case 4:
                runExerciseFour();
                break;
            case 5:
                runExerciseFive();
                break;
            case 6:
                runExerciseSix();
                break;
            case 7:
                runExerciseSeven();
                break;
            case 8:
                runExerciseEight();
                break;
            case 9:
                runExerciseNine();
                break;
            case 10:
                runExerciseTen();
                break;
            case 11:
                runExerciseEleven();
                break;
            case 12:
                runExercise12();
                break;
            case 13:
                runExercise13();
                break;
            case 14:
                runExercise14();
                break;
            case 15:
                runExercise15();
                break;
            case 16:
                runExercise16();
                break;
            case 17:
                runExercise17();
                break;
            case 100:
                scrabbleScore();
                break;
            /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
            case -1:
                keepAlive = false;
                break;
            default:
                console.log(chalk_1.default.red("That is not a valid assignment number!"));
                break;
        }
        if (assignmentChoice !== -1) {
            console.log();
            readLine(chalk_1.default.dim("Press enter to continue..."));
            console.clear();
        }
        else {
            console.log(chalk_1.default.green("Exiting..."));
        }
    }
    catch (err) {
        console.log(chalk_1.default.red(err));
    }
}
