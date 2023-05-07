const tail = require('../tail');
const assert = require('chai').assert;
describe("#head", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns ['b', 'c'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c'] ); 
  });
});
