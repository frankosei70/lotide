
const tail = function (arr) {
  if (arr.length === 0) {
    return [];
  } else {
    return arr.slice(1);
  }
};
module.exports = tail;
