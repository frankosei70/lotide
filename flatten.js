const flatten = function (arr){
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flatten(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
};

//console.log(flatten([1, [2, 3], 4, [5, [6, 7], 8], 9]));
module.exports = flatten;
