const num = parseInt(document.getElementById("num").value);

let msg = '';

if (num < 0)
    msg = "not positive number";
else if (cmp % 2 == 0)
    msg = "Even number";
else 
    msg = "Odd number";

function Display(){
    document.getElementById("show").innerHTML = num;
    document.getElementById("msg").innerHTML = msg;
}
