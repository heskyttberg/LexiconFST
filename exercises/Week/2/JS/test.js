const { Console } = require("console");

let fruits = new Set();
fruits.add("Orange");
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Grapes");
fruits.add("Mango (yellow)");
fruits.add("Melon (water)");
fruits.add("Melon (honey)");

for (const fruit of fruits)
    console.log(fruit);


let inv = {
    Orange : [1000, 15],
    Apple  : [1000, 8],
    Banana : [1000, 12],
    Graoes : [1000, 10],
    Mango  : [1000, 30],
    Melkon : [1000, 9]
};

let msg="";

for (const fruit in inv){

    msg = fruit + " " + inv[fruit][0] + "    " + inv[fruit][1];
    console.log(msg);
}