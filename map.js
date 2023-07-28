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

const words = ["ground", "control", " ", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


assertArraysEqual(map(words, word => word[0]), ['g', 'c', ' ', 'm', 't']);
assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', ' ', 'r', 'm']);
