// Exercise 1
function exercise01(fName, lName){
    msg = 'Hello ' + fName + ' ' + lName + '! I\'m glad to inform you that you are the test subject of my very first assignment!';
    return msg;
}

const fName = document.getElementById("fName");
const lName = document.getElementById("lName");


function Display(){
    //let msg = fName.value + ' ' + lName.value;
    let msg = exercise01(fName.value, lName.value);
    document.getElementById("show").innerHTML = msg;
}

