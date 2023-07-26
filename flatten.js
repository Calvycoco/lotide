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
  return test //Check to see if there are differences.
};

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
