/**
 * Debounce
 * Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
 * that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
 * 
 * The general idea for debouncing is:
 * 1. Start with 0 timeout
 * 2. If the debounced function is called again, reset the timer to the specified delay
 * 3. In case of timeout, call the debounced function
 * Thus every call to a debounce function, resets the timer and delays the call.
 */

 function debounce(f, timer) {
     let timerId = null;
     return function(...args) {
         const context = this;
         clearTimeout(timerId);
         timerId = setTimeout(function() {
             f.apply(context, args);
         }, timer);
     }
 }