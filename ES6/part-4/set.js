let mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('1');
mySet.add('some text'); // Set { 1, 5, 'some text' }
var o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });

console.log(mySet);
console.log('size', mySet.size);

mySet.delete('1');
console.log(mySet);

