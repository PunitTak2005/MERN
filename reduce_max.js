const numbers = [1,24,5,67,89,6,5,4,3,2];
const max = numbers.reduce((max, val) => val > max ? val : max, numbers[0]);
console.log(max); 
