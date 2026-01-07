function findLocalMaxima(arr) {
  const n = arr.length;
  if (n < 3) return [];  // No internal maxima possible
  
  const maxima = [];
  
  // Edge: start
  if (arr[0] > arr[1]) maxima.push(0);
  
  // Internal
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
      maxima.push(i);
    }
  }
  
  // Edge: end
  if (arr[n-1] > arr[n-2]) maxima.push(n-1);
  
  return maxima;
}
