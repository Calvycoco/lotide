const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

countLetters('lighthouse in the house');