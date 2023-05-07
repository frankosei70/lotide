const assert = require('chai').assert;
const { findKeyByValue, bestTVShowsByGenre } = require('../FindKeyByValue');

describe("#head", () => {
  it(" returns the key using the value", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"
    );
  });
  it(" returns the key using the value", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    
  });
  
});
