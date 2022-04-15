/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for(let i=0; i<nums.length; i++) {
        if(typeof map[nums[i]] !== 'undefined') {
            return [map[nums[i]], i];
        }
        if(typeof map[target - nums[i]] === 'undefined') {
            map[target - nums[i]] = i;
        }
    }
    return [];
};