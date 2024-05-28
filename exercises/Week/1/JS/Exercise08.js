
function Display(){
  

    let correctNum = Math.floor((Math.random() * 10) + 1);

    let msg='';

    let num = 0;
    do {
        num = parseInt(document.getElementById("num1"))

        if(num < correctNum)
            msg = 'Number too small';
        else
            msg = 'Number too big';

        document.getElementById("show").innerHTML = msg;
    } while (num != correctNum);

    msg = 'CORRECT NUMBER!';
    document.getElementById("show").innerHTML = msg;
}