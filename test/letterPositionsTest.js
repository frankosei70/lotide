const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#head", () => {
  it(" return the indices for hello world", () => {
    assert.deepEqual(letterPositions('hello world'), {
       h: [ 0 ],
      e: [ 1 ],
      l: [ 2, 3, 9 ],
      o: [ 4, 7 ],
      w: [ 6 ],
      r: [ 8 ],
      d: [ 10 ] }
    );
  });
  
});
