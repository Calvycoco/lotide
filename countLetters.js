const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

function countLetters(sentence) {
  let result = {};
  for (const abcs of sentence) {
    if (abcs.toUpperCase() !== abcs.toLowerCase()) { //checks for letters
      let letter = abcs.toLowerCase();
      if (result[letter] === undefined) {
        result[letter] = 1; //first encounter
      } else {
        result[letter] = result[letter] + 1; // If there are multiple letters then +1
      }
    }
  }
  return result;
}

assertEqual(countLetters("Lighthouse in the House"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});

assertEqual(countLetters("How are you"), {
  h: 1,
  o: 2,
  w: 1,
  a: 1,
  r: 1,
  e: 1,
  y: 1,
  u: 1
});
