function findAllPairs(arr, k) {
    const pairs = [];
    let i = 0;
    let j = arr.length - 1;

    while (i < j) { 
        const sum = arr[i] + arr[j];

        if (sum === k) {
            pairs.push([i, j]);  
            
            i++;
            j--;

           
        } else if (sum < k) {
            i++;
        } else {
            j--;
        }
    }
    
    return pairs;
}


const arr = [1, 3, 4, 5, 6, 8, 9];
const k = 9;
console.log(findAllPairs(arr, k)); 
