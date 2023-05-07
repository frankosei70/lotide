const assert = require('chai').assert;
const { eqObjects, shirtObject, anotherShirtObject, longSleeveShirtObject } = require('../eqObjects');

describe("#head", () => {
  it("returns true for matching objects", () => {
    assert.deepStrictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  
  it("returns false for non-matching objects", () => {
    assert.deepStrictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
});
