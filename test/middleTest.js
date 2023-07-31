const assertArraysEqual = require('../assertArraysEqual');
const mid = require('../middle')

console.log("Test Case 1");
console.log(assertArraysEqual(mid([1, 2, 3, 4]),[2, 3])) //Expected true

console.log("Test Case 2");
console.log(assertArraysEqual(mid([1, 2, 3, 4, 5, 6]),[3, 4])) //Expected true

console.log("Test Case 3");
console.log(assertArraysEqual(mid([1, 2, 3]), [2])) //Expected true

console.log("Test Case 4");
console.log(assertArraysEqual(mid([1, 2, 3, 4, 5]), [3])) //Expected true

console.log("Test Case 5");
console.log(assertArraysEqual(mid([]), [])) //Expected true
