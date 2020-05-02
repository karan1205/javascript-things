/**
 * Module Pattern
 */

 const basketModule = (function() {

    // Privates
    const basket = []; 
    const doSomethingPrivate = function() {};

    // Return an object exposed to the public
    return {
        
        addItem: function(item) {
            basket.push(item);
        },

        getItemCount: function() {
            return basket.length;
        },

        doSomething: doSomethingPrivate

    }

 })();
 basketModule.addItem({
     item: 'sugar',
     price: 100
    });
 
 console.log(basketModule.getItemCount(), 'count');