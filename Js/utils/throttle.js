/**
 * Throttle
 * The main difference between this and debouncing is that
 * throttle guarantees the execution of the function regularly,
 * at least every X milliseconds.
 * 
 * The first call to our function will execute and sets the limit period.
 * We can call our function during this period but it will not fire until the throttle period has passed.
 * Once it has passed, the next invocation will fire and the process repeats.
 */

function throttle(f, timer) {
    let inThrottle = false;
    return function(...args) {
        const context = this;
        if(!inThrottle) {
            f.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, timer);
        }
    }
}

function throttle(f, timer) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if(!lastRan) {
            f.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                func.apply(context, args);
                lastRan = Date.now();
            }, timer - (Date.now() - lastRan))
        }
    }
}