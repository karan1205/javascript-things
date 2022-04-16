/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a-b);
    const map = sorted.reduce((acc, item, index) => {
        if(typeof acc[item] === 'undefined') {
            acc[item] = index;
        }
        return acc;
    }, {});
    return nums.map(item => {
        return map[item];
    });
};
