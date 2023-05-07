const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected){
    if (eqArrays(actual, expected)) {
      console.log(`✅Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑Assertion Failed: [${actual}] !== [${actual}]`);
    }

};
//assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
//assertArraysEqual([1, 2, 3, 4], [1, 2, 2, 4]);

module.exports = assertArraysEqual;
