const numbers = [1,24,5,67,89,6,5,4,3,2];
const min = numbers.reduce((min, val) => val < min ? val : min, numbers[0]);
console.log(min); 
