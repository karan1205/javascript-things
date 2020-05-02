const obj = {
    key1: 1,
    key2: 2,
    key3: 3,
};

Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
	writable: false,
	configurable: true,
    value: function() {
            const ref = this;
            console.log(ref.length);
            const keys = Object.keys(ref);
            let count = 0;
            return {
                next: function() {
                    return {
                        value: ref[keys[count++]],
                        done: (count > keys.length -1)
                    }
                }
            }
    }
})

const it = obj[Symbol.iterator]();
it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: true}
it.next(); // {value: undefined, done: true}

for(let item of obj) {
    console.log(item);
}