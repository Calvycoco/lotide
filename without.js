const assertArraysEqual = require('./assertArraysEqual')

const without = function(source, numsToRemove) {
  let result = source;
  for (let i = 0; i < numsToRemove.length; i++) {
    let numToRemove = numsToRemove[i]; // Identify what we want to remove
    let placeToRemove = result.indexOf(numToRemove); // Find location of thing to remove
    if (placeToRemove >= 0) { // Check if item exists, < 0 means it doesn't
      result.splice(placeToRemove, 1); // Cut element out of array by location
    }
  }
  return result;
};

module.exports = without;

// Testing
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["2", "1", "3"], [1, 2, "3"]), ["2", "1",]);
assertArraysEqual(without(["2", "3", "1"], [1, 2, 3]), ["2", "3", "1"]);
