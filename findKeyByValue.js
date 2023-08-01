const assertEqual = require('./assertEqual')

function findKeyByValue(bestTVShowsByGenre, target) {
  let genre = Object.keys(bestTVShowsByGenre);
  let tvShows = Object.values(bestTVShowsByGenre);
  for (let i = 0; i < tvShows.length; i++) {
    if (target === tvShows[i]) {
      return genre[i];
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
//Object.keys(bestTVShowsByGenre) -> ["sci_fi","comedy","drama"]
//Object.values(bestTVShowsByGenre) -> ["The Expanse","Brooklyn Nine-Nine","The Wire"]

module.exports = findKeyByValue

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);