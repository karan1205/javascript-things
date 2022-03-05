/**
 * Given an array, check whether thc array is in sorted order.
 */

function isSorted(arr) {
    function helper(n) {
        if(n === 1 || n === 0) {
            return true;
        }
        if(arr[n-1] > arr[n-2]) {
            return helper(n-1);
        } else {
            return false;
        }
    }
    return helper(arr.length);
}

// const result = isSorted([1,2,3,4,5,6]); // true
// const result = isSorted([]); // true
// const result = isSorted([1]); // true
// const result = isSorted([1,4,0]); // false
// console.log(result);
