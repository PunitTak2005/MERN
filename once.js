function findSingle(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i]; }
  }
  return arr[arr.length - 1]; 
}

console.log(findSingle([1,1,2,2,3,4,4,5,5])); 
