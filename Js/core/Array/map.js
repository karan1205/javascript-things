/** Polyfill for Array.prototype.map()
 * let new_array = arr.map(function callback( currentValue[, index[, array]]) { 
 *      return element for new_array
 * }[, thisArg])
 * */

if(!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
        if(this === null) {
            throw new TypeError('this is null or not defined');
        }
        if(typeof callback !== 'function') {
            throw new TypeError('callback is not a function');
        }
        var result = [];
        for(var i = 0; i < this.length; i++) {
            result.push(callback.call(thisArg, this[i], i, this));
        }
        return result;
    }
}