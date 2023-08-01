const assertEqual = require('./assertEqual')

const findKey = function(names, hollerBack) {
  for (const key in names) {
    if (hollerBack(names[key])) {
      return key;
    }
  }
  return undefined;
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "noma");

module.expots = findKey