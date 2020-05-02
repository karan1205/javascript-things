/** Polyfill for Function.prototype.call()
 * func.call([thisArg[, arg1, arg2, ...argN]])
 * */

if(!Function.prototype.call) {
    Function.prototype.call = function() {
        var context = arguments[0];
        var args = [];
        for(var i = 1; arguments.length; i++) {
            args.push(arguments[i]);
        }
        if(context !== null && typeof context === 'object') {
            context.F = this;
            const result = context.F(args);
            delete context.F;
            return result;
        }
        return this(args);
    }
}