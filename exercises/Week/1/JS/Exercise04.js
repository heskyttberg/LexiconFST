let date = new Date();

document.getElementById("d1").innerHTML = date.toString();
// Thu Nov 09 2000 05:30:00 GMT+0530 (India Standard Time)
document.getElementById("d2").innerHTML = date.toDateString();
// Thu Nov 09 2000
document.getElementById("d3").innerHTML = date.toLocaleString();
// 11/9/2000, 5:30:00 AM
document.getElementById("d4").innerHTML = date.toLocaleDateString();
// 11/9/2000
document.getElementById("d5").innerHTML = date.toGMTString();
// Thu, 09 Nov 2000 00:00:00 GM

// Date today
document.getElementById("d6").innerHTML = date.toLocaleDateString();
// Date yesterday
let d = date.getDate() - 1;
date.setDate(d);
document.getElementById("d7").innerHTML = date.toLocaleDateString();
// Date tomorrow
d = date.getDate() + 2;
date.setDate(d);
document.getElementById("d8").innerHTML = date.toLocaleDateString();


