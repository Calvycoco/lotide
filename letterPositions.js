const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    let ourChar = sentence[i];
    if (ourChar.toUpperCase() !== ourChar.toLowerCase()) { //checks for letters
      let letter = ourChar.toLowerCase();
      if (result[letter] === undefined) {
        result[letter] = [i]; //first encounter
      } else {
        result[letter].push(i); // If there are multiple letters then +1
      }
    }
  }
  return result;
};

module.exports = letterPositions;

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions('hello').l, [2, 3]);

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);



