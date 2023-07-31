const assertArraysEqual = require('../assertArraysEqual');

console.log("Test Case 1:");
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // Expect true

console.log("Test Case 2:");
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // Expect false

console.log("Test Case 3");
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])) // Expect true

console.log("Test Case 4");
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) // Expect false
