/** Polyfill for Array.prototype.filter()
 * let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
 * */

if(!Array.prototype.filter) {
    Array.prototype.filter = function(callback, thisArg) {
        if(this === null) {
            throw new TypeError('this is null or not defined');
        }
        if(typeof callback !== 'function') {
            throw new TypeError('callback is not a function');
        }
        var result = [];
        for(var i = 0; i < this.length; i++) {
            if(callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    }
}