const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

describe("#head", () => {
  it("returns true for matching objects", () => {
    assert.deepStrictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  
  it("returns false for non-matching objects", () => {
    assert.deepStrictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
});
