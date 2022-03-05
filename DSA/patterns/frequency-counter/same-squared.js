/**
 * Write a function called sameSquared, which accepts two arrays.
 * The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same;
 */

function createFrequencyCounter(arr) {
    return arr.reduce((acc, item) => {
        if(!acc[item]) {
            acc[item] = 1;
        } else {
            acc[item] += 1;
        }
        return acc;
    }, {});
}

function sameSquared(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    const frequencyCounter1 = createFrequencyCounter(arr1);
    const frequencyCounter2 = createFrequencyCounter(arr2);
    for(let key in frequencyCounter1) {
        if(!frequencyCounter2[key**2] || frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

// const result = sameSquared([1,2,3,2], [9,1,4,4]);
// const result = sameSquared([1,2,3,2,9], [9,1,4,4,11]);
// console.log(result);