
const assert = require('chai').assert;
const { countOnly, firstNames } = require('../CountOnly');

describe("#head", () => {
  it("should return { Fang: 2, Jason: 1 }", () => {
    assert.deepStrictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });
});
