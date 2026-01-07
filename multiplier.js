function Multiplier(a) {
    return function(b) {
        return a * b;
    }
}


const triple = Multiplier(3);    
const tenTimes = Multiplier(10); 
const double = Multiplier(2); 


console.log(triple(5));   
console.log(tenTimes(5));   
console.log(double(5));   
