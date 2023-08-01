const assert = require('chai').assert;
const mid = require('../middle');

describe('mid', () => {
  it('should return [2, 3] for input [1, 2, 3, 4]', () => {
    const result = mid([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });
  it('should return [3, 4] for input [1, 2, 3, 4, 5, 6]', () => {
    const result = mid([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(result, [3, 4]);
  });
  it('should return [2] for input [1, 2, 3]', () => {
    const result = mid([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });
  it('should return [2] for input [1, 2, 3, 4, 5]', () => {
    const result = mid([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });
  it('should return [] for input []', () => {
    const result = mid([]);
    assert.deepEqual(result, []);
  });
});