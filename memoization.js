const powerfunction = (number) => {
    return Math.pow(number, 10);  
}

function Memoization(fn) {
    const cache = {};
    
    return function(key) {
        if (cache[key]) {
            console.log("memoization");  
            return cache[key];          
            cache[key]
        } else {
            const result = fn(key);      
            cache[key] = result;         
            return result;              
        }
    }
}


const memo = Memoization(powerfunction);  
console.log(memo(4));     
console.log(memo(5));     
console.log(memo(6));     
console.log(memo(5));     
