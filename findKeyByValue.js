
const findKeyByValue = function(obj, value) {
  const key = Object.keys(obj).find(key => obj[key] === value);
  return key !== undefined ? key : undefined;
}

module.exports = findKeyByValue;
  
