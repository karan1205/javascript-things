/**
 * This problem was recently asked by Google.
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 * Bonus: Can you do this in one pass?
*/

function sumExists(list, k) {
    const set = new Set();
    for(let num of list) {
        if(set.has(k- num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

 const result = sumExists([10, 15, 3, 7], 17);
 console.log(result);