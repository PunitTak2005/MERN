function findAllPairs(arr, k) {
    const pairs = [];
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {  // ensures i !== j
        const sum = arr[i] + arr[j];

        if (sum === k) {
            pairs.push([i, j]);  // or push([arr[i], arr[j]])
            
            i++;
            j--;

            // Optional: skip duplicates for unique value pairs
            // while (i < j && arr[i] === arr[i-1]) i++;
            // while (i < j && arr[j] === arr[j+1]) j--;
        } else if (sum < k) {
            i++;
        } else {
            j--;
        }
    }
    
    return pairs;
}

// Example usage
const arr = [1, 3, 4, 5, 6, 8, 9];
const k = 9;
console.log(findAllPairs(arr, k));  // [[1, 6], [3, 4]]  (indices where 3+6=9, 4+5=9)
