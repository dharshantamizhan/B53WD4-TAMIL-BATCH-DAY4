function reverseArray(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  
  function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
    reverseArray(arr, 0, n - 1); 
    reverseArray(arr, 0, k - 1); 
    reverseArray(arr, k, n - 1); 
  
    return arr;
  }
  
  const array = [1, 2, 3, 4, 5];
  const k = 4; 
  
  const rotatedArray = rotateArray(array, k);
  console.log(rotatedArray); 
  