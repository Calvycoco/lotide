const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", " ", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map

assertArraysEqual(map(words, word => word[0]), ['g', 'c', ' ', 'm', 't']);
assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', ' ', 'r', 'm']);
