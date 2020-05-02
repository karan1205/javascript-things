/**
 * Currying
 * Currying is a transformation of functions that translates a
 * function from callable as f(a, b, c) into callable as f(a)(b)(c).
 */

function curry(f) {
    const args = [];
    return function curried(...args2) {
        const context = this;
        args.push(...args2);
        if(args.length >= f.length) {
            return f.apply(context, args);
        } else {
            return curried;
        }
    }
}