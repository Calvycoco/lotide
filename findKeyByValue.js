const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);