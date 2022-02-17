var reg = /harry/gi;
// console.log(reg.source); --> It will return the regular expression
let s = "harry hArrY is a good harry teacher";

// 1. exec() function --> It will return an array for match

let res = reg.exec(s);
console.log(res);
res = reg.exec(s);
console.log(res);
res = reg.exec(s);
console.log(res);


