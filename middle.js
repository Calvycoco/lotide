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
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Success!: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Failed!: ${arr1} !== ${arr2}`);
  }
}

function mid(arr) { // Executes middle array
  if (arr.length <= 2) {
    return arr;
  }
  if (arr.length % 2 !== 0) { // If it's odd then return 1 middle number
    let mid1 = Math.floor(arr.length / 2);
    return [arr[mid1]];
  }
  if (arr.length % 2 === 0) { // if it's even then return 2 middle numbers
    let mid2 = arr.length / 2;
    let mid1 = mid2 - 1;
    return [arr[mid1], arr[mid2]];
  }
  return arr;
}

assertArraysEqual(mid([1, 2, 3, 4]),[2, 3]); // => [2, 3]
assertArraysEqual(mid([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]
assertArraysEqual(mid([1, 2, 3]), [2]) // => [2]
assertArraysEqual(mid([1, 2, 3, 4, 5]), [3]) // => [3]
