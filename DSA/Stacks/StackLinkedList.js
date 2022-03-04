 const { SinglyLinkedList } = require('../LinkedLists');
 
 /**
  * Type declaration for Stack using Linked List
  * @constructor
  */
 function StackLinkedList() {
    this.items = new SinglyLinkedList();

    this.push = function(data) {
        this.items.insertNode(data, 0);
        return {
            message: 'Insertd successfully',
            stack: this.items
        }
    }

    this.pop = function() {
        this.items.deleteNode(0);
        return {
           message: 'Removed successfully',
           stack: this.items
       }
    }

    this.isEmptyStack = function() {
        return this.items.size === 0;
    }

    this.top = function() {
        if(this.isEmptyStack()) {
            return {
               message: 'Empty Stack',
               value: null,
            }
        }
        return {
            value: this.items.getNode(0)
        }
    }

    this.size = function() {
        return this.items.size;
    }

}

module.exports = {
    StackLinkedList
};