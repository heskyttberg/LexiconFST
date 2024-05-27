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

// There is only 11 possible ways to set precedence
// and none will give 60 as result.
console.log("No parentheses: A+B+C+D");
console.log(x+y*z/m);
console.log("A+B group: (A+B)+C+D");
console.log((x+y)*z/m);
console.log("B+C group: A+(B+C)+D");
console.log(x+(y*z)/m);
console.log("C+D group: A+B+(C+D)");
console.log(x+y*(z/m));
console.log("A+B and C+D groups: (A+B)+(C+D)");
console.log((x+y)*(z/m));
console.log("A+B+C group: (A+B+C)+D");
console.log((x+y*z)/m);
console.log("B+C+D group: A+(B+C+D)");
console.log(x+(y*z/m));
console.log("A+B group + C: ((A+B)+C)+D");
console.log(((x+y)*z)/m);
console.log("A + group B+C: (A+(B+C))+D");
console.log((x+(y*z))/m);
console.log("B+C group + D: A+((B+C)+D)");
console.log(x+((y*z)/m));
console.log("B + group C+D: A+(B+(C+D))");
console.log(x+(y*(z/m)));

