
function init(){
    //const submit = document.querySelector('.submit');
    //const global = document.querySelector('.global');
    //const myForm = document.getElementsById('.form');

    // We get our div element where we want to put our HTML
    const myForm = document.getElementById("form");

    // We kreate a key => value arrya for information, I really can't see the point of using sets ever
    // Tried to use a set to loop through key => value array but that does not work.
    let inv = {
        Orange : [1000, 15],
        Apple  : [1000, 8],
        Banana : [1000, 12],
        Graoes : [1000, 10],
        Mango  : [1000, 30],
        Melkon : [1000, 9]
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
    // Add table headers to our table
    newHTML += "<thead>" + "\n";
    newHTML += "   <th>Fruit name</th>" + "\n";
    newHTML += "   <th>Buy</th>" + "\n";
    newHTML += "   <th>Quantity</th>" + "\n";
    newHTML += "   <th>Price</th>" + "\n";
    newHTML += "</thead>" + "\n";
    myForm.innerHTML += newHTML;

    for (const fruit of fruits){
        newHTML =  "<label for =\"" + fruit + "\">" + fruit + "</label>" + "\n";
        newHTML += "<input type\"number\" required id=\"" + fruit + "\" class=\"" + fruit + "\">" + "\n";
        newHTML += "<"

        newHTML += "<br>";
        myForm.innerHTML += newHTML;
    }

    
/*
      <label for="guess">Number: </label>
      <input type="number" min="1" max="100" required id="guess" class="guess">
*/

    //submit.addEventListener("click", check);
    //window['pinFromJS'] = 'test';
    //global.textContent=pinFromJS;
}

document.addEventListener("DOMContentLoaded", function() {
    init();
  });

//submit.addEventListener("click", check)




