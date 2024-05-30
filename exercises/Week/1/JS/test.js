const { Console } = require("console");

let fruits = new set();
fruits.add("Orange");
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Grapes");
fruits.add("Mango (yellow)");
fruits.add("Melon (water)");
fruits.add("Melon (honey)");

for (const fruit of fruits)
    Console.log(fruit);
