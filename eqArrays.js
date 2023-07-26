const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

//Wanted to attempt return statements for more legibility and less cluster, SUCCESS!
function eqArrays(arr1, arr2) {
  let test = true; //If true then outcome will be true
  if (arr1.length !== arr2.length) { //This statement is to check if the two arrays has different lengths.
    return test; 
  }

  for (let i = 0; i < arr1.length; i++) { // Loop through the arrays.
    if (arr1[i] !== arr2[i]) { // To see if the contents within the arrays has the same lengths.
      test = false;
      return;
    }
  }
  return test //Check to see if there are differences.
}

// Testing

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [2, 1, 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [2, 3, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true) // => true

