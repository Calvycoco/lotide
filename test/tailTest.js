const assert = require('chai').assert;
const tail = require('../tail')


describe("tail", () => {
  it('should return ["Lighthouse", "Labs"] for input ["Hello", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    const result = tail(inputArray)
    assert.deepEqual(result,["Lighthouse", "Labs"]);
  });
  it('should return [] for empty array', () => {
    const inputArray = [];
    const result = tail(inputArray)
    assert.deepEqual(result,[]);
  });
  it('should return ["one"] for input ["one"]', () => {
    const result = tail(["one"])
    assert.deepEqual(result,[]);
  });
  it('should not change the elements in array', () => {
    const inputArray = [1, 2, 3];
    assert.deepEqual(tail(inputArray), [2, 3])
    assert.deepEqual(inputArray,[1, 2, 3]);
  });
});