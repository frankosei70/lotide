const assertArraysEqual = require('./assertArraysEqual');
const middle = function (array) {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};
 //assertArraysEqual(middle([1, 2, 3, 4, 5 ]), [1, 3]);
 //assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [4, 2]);

module.exports = middle;