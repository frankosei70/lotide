const middle = require('../middle');
const assert = require('chai').assert;
describe("#head", () => {
  it("returns [2, 3,] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['b'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b'] ); 
  });
    it("returns [] for []", () => {
    assert.deepEqual(middle([]), []); 
    });
  
});