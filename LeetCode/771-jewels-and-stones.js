/**
 * 771. Jewels and Stones
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const map = Array.prototype.reduce.call(stones, (acc, item) => {
        acc[item] = !!acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {});
    return Array.prototype.reduce.call(jewels, (acc, item) => {
        acc += map[item] || 0;
        return acc;
    }, 0);
};