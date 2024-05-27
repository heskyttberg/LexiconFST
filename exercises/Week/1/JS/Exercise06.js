let x = 40;
let y = 20;
let z = 25;
let m = 15;


let msg = '';

let e = (x+y)*z/m;
msg = 'e=' + e;
document.getElementById("p1").innerHTML = msg;

let g = parseInt(x+y*z/m);
msg = 'g=' + g;
document.getElementById("p2").innerHTML = msg;

let h = parseInt((x+y*z)/m);
msg = 'h=' + h
document.getElementById("p3").innerHTML = msg;

