const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Success!: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Failed!: ${arr1} !== ${arr2}`);
  }
};

//Wanted to attempt return statements for more legibility and less cluster, SUCCESS!
function eqArrays(arr1, arr2) {
  let test = true; //If true then outcome will be true
  if (arr1.length !== arr2.length) { //This statement is to check if the two arrays has different lengths.
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { // Loop through the arrays.
    if (arr1[i] !== arr2[i]) { // To see if the contents within the arrays has the same lengths.
      test = false;
      return test;
    }
  }
  return test; //Check to see if there are differences.
}

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

// Testing
assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["2", "1", "3"], [1, 2, "3"]), ["2", "1",]);
assertArraysEqual(without(["2", "3", "1"], [1, 2, 3]), ["2", "3", "1"]);
