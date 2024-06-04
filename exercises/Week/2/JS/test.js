function init(){
    let inv = {
        Orange : [1000, 15, 0],
        Apple  : [1000,  8, 0],
    };

    fruitForm(inv);
}

function fruitForm(inv){
    const myForm = document.getElementById("form");

    myForm.innerHTML +="<h2>Fruits</h2>\n";

    let newHTML =  "<table class=\"fruitTable\" id=\"fruitTable\">" + "\n";

    const nl = "\n";

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
        newHTML += "<div id=\"" + fruit + "Qty\">";
        newHTML += "      " + inv[fruit][0] + nl;
        newHTML += "</div>";
        newHTML +=  trMid;
        newHTML += "      " + inv[fruit][1] + nl;
        newHTML += trMid;
        newHTML += "      " + inv[fruit][2] + nl;
        newHTML += trStop;
    }

    newHTML += "</table>";
    myForm.innerHTML = newHTML;

    return inv;
}

function invUpdate(fruit, qty, inv){
    inv[fruit][0] -= parseInt(qty.value);
    fruitForm(inv);
}

document.addEventListener("DOMContentLoaded", function() {
    let inv = init();

    let elem;
    let i = 0;
    
    for(const fruit in inv){
        myF = fruit.toString();
        elem = document.getElementById(myF);

        elem.addEventListener('change', invUpdate(fruit, elem, inv));
    }

  });
