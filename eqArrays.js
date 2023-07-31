function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Arrays have different lengths, they cannot be equal
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Elements at the same index are different, arrays are not equal
    }
  }

  return true; // All elements are the same, arrays are equal
}

module.exports = eqArrays;
