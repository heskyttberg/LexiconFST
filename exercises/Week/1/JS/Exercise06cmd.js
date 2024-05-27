let x = 40;
let y = 20;
let z = 25;
let m = 15;

let msg = '';

let e = (x+y)*z/m;
msg = 'e=' + e;
console.log(msg);

let g = parseInt(x+y*z/m);
msg = 'g=' + g;
console.log(msg);

let h = parseInt((x+y*z)/m);
msg = 'h=' + h
console.log(msg);

console.log(((x+y)*z)/m);
