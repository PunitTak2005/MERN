function reverseByHalf(arr) {
  const n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    [arr[i], arr[n - 1 - i]] = [arr[n - 1 - i], arr[i]]; 
  }
  return arr;
}

const example = [1, 2, 3, 4, 5];
console.log(reverseByHalf(example));  
