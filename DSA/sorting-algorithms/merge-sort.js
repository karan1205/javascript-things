/**
 * Merge Sort
 */

function merge(arr1, arr2) {
    let ptr1 = 0;
    let ptr2 = 0;
    const result = [];
    while(ptr1 < arr1.length && ptr2 < arr2.length) {
        if(arr1[ptr1] < arr2[ptr2]) {
            result.push(arr1[ptr1]);
            ptr1++;
        } else{
            result.push(arr2[ptr2]);
            ptr2++;
        }
    }
    while(ptr1 < arr1.length) {
        result.push(arr1[ptr1]);
        ptr1++;
    }
    while(ptr2 < arr2.length) {
        result.push(arr2[ptr2]);
        ptr2++;
    }
    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left  = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const result = mergeSort([1,3,4,6,7,3,-1]);
console.log(result);