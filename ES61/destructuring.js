//Array
// var [a, b] = [1, 2];
// console.log(a, b);
var c = 1, d = 2;
[c, d] = [d, c];
console.log(c, d);

//Obj
var o = { p: 42, q: true };
var {p, q} = o;
console.log(p, q);