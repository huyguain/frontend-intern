let myMap = new Map();

let keyString = 'a string',
    keyObj = {},
    keyFunc = function () { };

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');
myMap.set(keyString, 'huy');

myMap.size; // 3

console.log(myMap);