/**
 * Linear Search
 * Given an array arr[] of n elements, write a function to search a given element val in arr[].
 */

function linearSearch(arr, val) {
    for(let i =0; i<arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// const result = linearSearch([1,2,4,7,3], 7);
// const result = linearSearch([1,2,4,7,3], 5);
// console.log(result);
