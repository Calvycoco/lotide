const eqArrays = require('./eqArrays');

function assertArraysEqual(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) { // Use eqArrays to compare the arrays for equality
    return false;
  }
  return true; // If eqArrays returns true, the arrays are equal
}

// Testing
module.exports = assertArraysEqual;
