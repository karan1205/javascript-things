/**
 * Given an array, check whether thc array is in sorted order.
 */

function isSorted(arr, index = arr.length) {
    if(index === 1 || index === 0) {
        return true;
    }
    if(arr[index-1] > arr[index-2]) {
        return isSorted(arr, index-1);
    }
    return false;
}