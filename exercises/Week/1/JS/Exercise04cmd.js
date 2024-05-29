let date = new Date();

console.log(date.toString())
// Thu Nov 09 2000 05:30:00 GMT+0530 (India Standard Time)
console.log(date.toDateString())
// Thu Nov 09 2000
console.log(date.toLocaleString())
// 11/9/2000, 5:30:00 AM
console.log(date.toLocaleDateString())
// 11/9/2000
console.log(date.toLocaleTimeString())
// 5:30:00 AM
console.log(date.toGMTString())
// Thu, 09 Nov 2000 00:00:00 GMT
console.log(date.toISOString())
// 2000-11-09T00:00:00.000Z
console.log(date.toUTCString())
// Thu, 09 Nov 2000 00:00:00 GMT
console.log(date.toTimeString())
// 05:30:00 GMT+0530 (India Standard Time)
console.log(date.getTime())
// 973728000000

let d = new Date();

console.log(d);

for (i=0; i<7;i++){
    d.setDate(date.getDate() + 1);
    console.log(d.toDateString());
}


