/** Polyfill for Function.prototype.apply()
 * func.apply(thisArg, [ argsArray])
 * */

if(Function.prototype.apply) {
    Function.prototype.apply = function() {
        var context = arguments[0];
        var args = arguments[1] || [];
        if(context !== null && typeof context === 'object') {
            context.F = this;
            const result = context.F(...args);
            delete context.F;
            return result;
        }
        return this(...args);
    }
}