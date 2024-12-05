const array = [-4,-1,0,3,10];
const k = 3;

function maxSum(arr, k) {
  //debugger
  let initialWindow = arr.slice(0, k);
  
  let initialSum = initialWindow.reduce((acc, value) => acc + value)
  let maxSum = initialSum;

  for ( let i = k; i < arr.length; i++) {
    initialSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, initialSum);
  }
  
  return maxSum;
}

console.log(maxSum(array, k))