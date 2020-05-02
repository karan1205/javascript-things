/**
 * Observer Pattern
 */

 // The Observer List
function ObserverList() {
    this.observerList = [];  
}

ObserverList.prototype.add = function(obj) {
    this.observerList.push(obj);
};

ObserverList.prototype.count = function(obj) {
    return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
    if(index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.indexOf = function(obj) {
    for(let i = 0; i < this.observerList.length; i++) {
        if(obj === this.obj[i]) {
            return i;
        }
    }
    return -1;
};

ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
};

// The Subject
function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
};

Subject.prototype.notify = function(context) {
    const count = this.observers.count();
    for(let i = 0; i < count; i++) {
        this.observers.get(i).update(context);
    }
}

// The Observer
function Observer() {
    this.update = function() {
        // ...
    }
}

