
function init(){
    //const submit = document.querySelector('.submit');
    //const global = document.querySelector('.global');
    //const myForm = document.getElementsById('.form');

    // We get our div element where we want to put our HTML
    const myForm = document.getElementById("form");
    const myChange = document.getElementById("change");

    // We kreate a key => value arrya for information, I really can't see the point of using sets ever
    // Tried to use a set to loop through key => value array but that does not work.
    let inv = {
        Orange : [1000, 15, 0],
        Apple  : [1000,  8, 0],
        Banana : [1000, 12, 0],
        Grapes : [1000, 10, 0],
        Mango  : [1000, 30, 0],
        Melon :  [1000,  9, 0]
    };
    
/*
    for (const fruit in inv){
    
        msg = fruit + " " + inv[fruit][0] + "    " + inv[fruit][1];
        console.log(msg);
    }
  */  

    // Set the tittle for our page
    myForm.innerHTML +="<h2>Fruits</h2>\n";
    // Iterator number, not sure we going to need it now
    //let i=0
    // Create the table and table head
    let newHTML =  "<table class=\"fruitTable\" id=\"fruitTable\">" + "\n";
    // New line variable
    const nl = "\n";
    // Add table headers to our table
    newHTML += "<thead>" + nl;
    newHTML += "   <th>Fruit name</th>" + nl;
    newHTML += "   <th>Buy</th>" + nl;
    newHTML += "   <th>Quantity</th>" + nl;
    newHTML += "   <th>Price</th>" + nl;
    newHTML += "   <th>Cost</th>" + nl;
    newHTML += "</thead>" + nl;

    let trStart = "<tr><td>\n";
    let trStop = "</td></tr>\n";
    let trMid = "</td>\n<td>" + nl;


    for (const fruit in inv){
        newHTML +=  trStart;
        newHTML += "      <label for =\"" + fruit + "\">" + fruit + "</label>" + nl;
        newHTML +=  trMid;
        newHTML += "      <input type\"number\" id=\"" + fruit + "\" class=\"fruit\">" + nl;
        newHTML +=  trMid;
        newHTML += "      " + inv[fruit][0] + nl;
        newHTML +=  trMid;
        newHTML += "      " + inv[fruit][1] + nl;
        newHTML += trStop;
    }

    newHTML += "</table>";
    myForm.innerHTML = newHTML;

    let myFruit;

    for (const fruit in inv){
        myFruit = document.getElementById(".fruit").addEventListener('change', invUpdate(fruit, document.getElementById(fruit).value));
    }

    let changeArr = [
        [1000, 0],
        [ 500, 0],
        [ 200, 0],
        [ 100, 0],
        [  50, 0],
        [  10, 0],
        [   5, 0],
        [   1, 0]
    ];


    
    newHTML =  "<table class=\"fruitTable\" id=\"fruitTable\">" + "\n";
    newHTML += "<thead>" + nl;
    newHTML += "   <th>Fruit name</th>" + nl;
    newHTML += "   <th>Buy</th>" + nl;
    newHTML += "   <th>Quantity</th>" + nl;
    newHTML += "   <th>Price</th>" + nl;
    newHTML += "   <th>Cost</th>" + nl;
    newHTML += "</thead>" + nl;

    myChange.innerHTML = newHTML;
}


function invUpdate (fruit, amount){
    inv[fruit][0] -= parseInt(amount);
    inv[fruit][2] += parseInt(amount)*inv[fruit][1];

    eId = fruit + "Qty"
    const cElem = document.querySelector(eId);
    cElem.textContent = inv[0];
}

document.addEventListener("DOMContentLoaded", function() {
    init();
  });

//submit.addEventListener("click", check)




