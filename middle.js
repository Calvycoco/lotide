const mid = function(arr) { // Executes middle array
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
};
// Exports middle.js to test
module.exports = mid;
