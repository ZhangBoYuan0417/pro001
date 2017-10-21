
var m = new Map();
m.set("a", 1);
m.set("b", 2);
m.set("c", 3);
m.set(1, 1);
m.set("1", 1);
m.set(true, 1);
m.set(undefined, 1);
m.set(NaN, 1);
console.log(m);