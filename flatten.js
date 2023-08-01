const assertArraysEqual = require('./assertArraysEqual')

function flatten(arr) {
  if (!Array.isArray(arr)) {
    return [arr]; // Guard clause to handle non array input
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const flattenedItems = flatten(arr[i]);
    for (let j = 0; j < flattenedItems.length; j++) {
      result.push(flattenedItems[j]); // Push each element individually
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
