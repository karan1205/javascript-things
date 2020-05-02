/** Polyfill for Array.prototype.reduce()
 * arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
 * */

if(!Array.prototype.reduce1) {
    Array.prototype.reduce1 = function(callback, initialValue) {
        if(this === null) {
            throw new TypeError('this is null or not defined');
        }
        if(typeof callback !== 'function') {
            throw new TypeError('callback is not a function');
        }
        if(this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        var result = this[0];
        var start = 1;
        if(arguments.length >= 2) {
            result = arguments[1]; //initialValue
            start = 0;
        }
        for(var i = start; i < this.length; i++) {
            result = callback(result, this[i], i, this);
        }
        return result;
    }
}