/**
 * Object.is()
 */
if (!Object.is) {
    Object.is = function(value1, value2) {
        // Check -0
        if(value1 === 0 && value2 === 0) {
            return 1/value1 === 1/value2;
        }
        // Check NaN
        if(value1 !== value1) {
            return value2 !== value2;
        }
        return value1 === value2;
    }
}
