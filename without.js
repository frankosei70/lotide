const assertArraysEqual = function (arr1, arr2){
  if (arr1.length !== arr2.length) {
    console.log("Arrays are not equal");
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("Arrays are not equal");
      return false;
    }
  }
  console.log("Arrays are equal");
  return true;
}
const without = function(source, itemsToRemove){
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
}