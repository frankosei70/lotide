
const eqObjects = function(obj1, obj2) {
  // Check if the objects have the same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Iterate through the keys of one object
  for (const key in obj1) {
    // Check if the other object has the same key
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    // Check if the values of the key are equal
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areEqual = (typeof val1 === "object" && typeof val2 === "object") ?
      eqObjects(val1, val2) :
      val1 === val2;
    if (!areEqual) {
      return false;
    }
  }

  // The objects are equal if all keys and values match
  return true;
};
function assertObjectsEqual(actual, expected) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  
  if (actualStr === expectedStr) {
    console.log(`Assertion passed: ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`Assertion failed: ${actualStr} !== ${expectedStr}`);
  }
}
