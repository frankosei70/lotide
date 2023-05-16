const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
describe("#head", () => {
  it(" returns the key using the value", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"
    );
  });
  it(" returns the key using the value", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    
  });
  
});
