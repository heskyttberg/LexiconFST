
function Display(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let num1Value = parseInt(num1.value);
    let num2Value = parseInt(num2.value);

    let msg='';

    if(num1Value+1==num2Value)
        msg = "Result: Consecutive";
    else
        msg = "Result: Not consecutive";

    document.getElementById("show").innerHTML = msg;
}