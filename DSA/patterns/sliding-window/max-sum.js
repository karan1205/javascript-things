/**
 * Write a function called maxSybArraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

function maxSubArraySum(arr, n) {
   if(n > arr.length) {
      return null;
   }
   let maxSum = 0;
   // compute the sum of first window
   for(let i = 0; i < n; i++) {
      maxSum += arr[i];
   }

   // Compute sums of remaining windows by removing first element of previous window and adding last element of current window.
   let windowSum = maxSum;
   for(let i = n; i < arr.length; i++) {
      windowSum = windowSum + arr[i] - arr[i-n];
      maxSum = Math.max(maxSum, windowSum);
   }

   return maxSum;
}
// const result = maxSubArraySum([1,2,5,2,8,1,5],2); //10
// const result = maxSubArraySum([1,2,5,2,8,1,5],4); //17
// const result = maxSubArraySum([4,2,1,6],1); // 6
// const result = maxSubArraySum([4,2,1,6,2],4); // 13
// const result = maxSubArraySum([],4); // null
// console.log(result);