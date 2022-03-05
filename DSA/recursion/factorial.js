/**
 * Factorial of a number
 */

function factorial(num) {
    if(num < 0) {
        return null;
    }
    if(num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num-1);
}

// const result = factorial(2); // 2
// const result = factorial(1); // 1
// const result = factorial(0); // 1
// const result = factorial(5); // 120
// console.log(result);