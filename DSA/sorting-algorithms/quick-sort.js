/**
 * Quick Sort
 */

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivot(arr, start=0, end=arr.length-1) {
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

// const result = quickSort([4,8,2,1,5,7,6,3]);
// const result = quickSort([1]);
// console.log(result);
