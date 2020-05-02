/**
 * Polyfill for Object.create()
 * Object.create(proto, [propertiesObject])
 */

if(typeof Object.create !== 'function') {
    Object.create = function(obj) {
        if(obj && typeof obj !== 'object') {
            throw new TypeError('Object prototype may only be an Object');
        } else if(!obj) {
            throw new Error('Object prototype cannot be falsy');
        }
        function F() {};
        F.prototype = obj;
        return new F();
    }
}