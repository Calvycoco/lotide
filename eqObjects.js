const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let keysForObject1 = Object.keys(object1);
  keysForObject1.sort();

  let valuesForObject1 = Object.values(object1);
  valuesForObject1.sort();

  let keysForObject2 =  Object.keys(object2);
  keysForObject2.sort();

  let valuesForObject2 = Object.values(object2);
  valuesForObject2.sort();

  let areKeysEqual = eqArrays(keysForObject1, keysForObject2);
  let areValuesEqual = eqArrays(valuesForObject1, valuesForObject2);

  return areKeysEqual && areValuesEqual;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);