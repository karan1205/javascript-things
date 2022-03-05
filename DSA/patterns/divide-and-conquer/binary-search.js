/**
 * Given a sorted array if integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1;
 */

function search(arr, n) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] === n) {
            return mid;
        }
        if(arr[mid] < n) {
            left = mid+1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// const result = search([1,2,3,4,5,6], 4); // 3
// const result = search([1,2,3,4,5,6], 6); // 5
// const result = search([1,2,3,4,5,6], 11); // -1
// console.log(result);