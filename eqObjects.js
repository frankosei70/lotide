const eqObjects = function(obj1, obj2) {
  // Check if the objects have the same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    //console.log(false);
    return false;
  }

  // Iterate through the keys of one object
  for (const key in obj1) {
    // Check if the other object has the same key
    if (!obj2.hasOwnProperty(key)) {
      //console.log(false);
      return false;
    }

    // Check if the values of the key are equal
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (typeof val1 === "object" && typeof val2 === "object") {
      // Use recursion to compare nested objects
      eqObjects(val1, val2);
    } else if (val1 !== val2) {
      return false;
    }
  } 
  return true;
};


module.exports =  eqObjects;
  
