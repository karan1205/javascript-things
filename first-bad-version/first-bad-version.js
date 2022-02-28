/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        
        while(left <= right) {
            const mid = Math.ceil((left + right) / 2);
            const val = isBadVersion(mid);
            const prevVal = isBadVersion(mid - 1);
            const nextVal = isBadVersion(mid + 1);
            if(val && !prevVal) {
                return mid;
            } else if(!val && nextVal) {
                return mid+1;
            } else if(val) {
                right = mid-1;
            } else {
                left = mid + 1;
            }
        }
        return 0;
    };
};