/**
 * Publist/Subscribe Pattern
 */

function pubSub() {
    const subscribers = {};

    function subscribe(event, callback) {
        if(!subscribers[event]) {
            subscribers[event] = [];
        }
        subscribers[event].push(callback);
    }

    function publish(event, data){
        if(!subscribers[event]) {
            return;
        }
        subscribers[event].forEach(callback => 
            callback(data));
    }

    return {
        subscribe,
        publish
    };
    
}

