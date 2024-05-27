
function Display(){
    let num1 = document.getElementById("num1");

    let num1Value = parseInt(num1.value);

    let msg='';

    if(num1Value<0)
        msg = "Not positive number"
    else if(num1Value%2==0)
        msg = "Even number";
    else
        msg = "Odd Number";

    document.getElementById("show").innerHTML = msg;
}