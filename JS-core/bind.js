/** Polyfill for Function.prototype.bind()
 * let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])
 * */

if(!Function.prototype.bind) {
    Function.prototype.bind = function(...args) {
        const ref = this;
        const context = args[0];
        const params = args.slice(1);
        return function(...args2) {
            ref.apply(context, [...params, ...args2]);
        }
    }
}