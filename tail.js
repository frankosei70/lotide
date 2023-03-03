function tail(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    return arr.slice(1);
  }
}
const myArray = [1, 2, 3, 4, 5];
const tailArray = tail(myArray);
console.log(tailArray); 