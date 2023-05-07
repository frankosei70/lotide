const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#head", () => {
  it("returns { h: 1, e: 1, l: 2, o: 1 } for hello ", () => {
    assert.deepEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });
  });
  it("returns { '1': 1, '2': 1, '3': 1 } for 123 ", () => {
    assert.deepEqual(countLetters("123"), { '1': 1, '2': 1, '3': 1 });
  });
});