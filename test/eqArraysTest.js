const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#head", () => {
  it("returns true ", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true);
  });
  it("returns false", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "4"]) , false);
  });
});


