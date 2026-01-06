function findSingle(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2 === 1) mid--;
    
    if (arr[mid] === arr[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }
  return arr[left];
}

console.log(findSingle([1,1,2,2,3,4,4,5,5]));
