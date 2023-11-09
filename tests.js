const isReachableAtTime = require('./solution');
const assert = require('assert');

describe('Tests', function () {
  it('should return true for (1, 1) -> (9, 9) with t=8', function () {
    assert.equal(isReachableAtTime(1, 1, 9, 9, 8), true);
  });
  
  it('should return false for (1, 1) -> (9, 9) with t=6', function () {
    assert.equal(isReachableAtTime(1, 1, 9, 9, 6), false);
  });
  
  it('should return true for (1, 2) -> (9, 10) with t=8', function () {
    assert.equal(isReachableAtTime(1, 2, 9, 10, 8), true);
  });
  
  it('should return false for (1, 2) -> (9, 10) with t=7', function () {
    assert.equal(isReachableAtTime(1, 2, 9, 10, 7), false);
  });
  
  it('should return true for (1, 11) -> (1, 11) with t=0', function () {
    assert.equal(isReachableAtTime(1, 11, 1, 11, 0), true);
  });
  
  it('should return false for (1, 11) -> (1, 11) with t=1', function () {
    assert.equal(isReachableAtTime(1, 11, 1, 11, 1), false);
  });
});
