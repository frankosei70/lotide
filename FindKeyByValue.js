
const findKeyByValue = function(obj, value) {
  const key = Object.keys(obj).find(key => obj[key] === value);
  return key !== undefined ? key : undefined;
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
module.exports = {
  findKeyByValue,
  bestTVShowsByGenre
};