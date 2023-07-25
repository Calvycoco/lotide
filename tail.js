const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

const oneArr = [];
const result = tail(oneArr);
console.log(assertEqual(result[0], undefined));
console.log(assertEqual(oneArr.length, 0));
