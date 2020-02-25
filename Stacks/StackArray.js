 /**
  * Type declaration for Stack using Array
  * @constructor
  */
 function StackArray() {
     this.items = [];

     this.push = function(data) {
         this.items.push(data);
         return {
             message: 'Insertd successfully',
             stack: this.items
         }
     }

     this.pop = function() {
         this.items.pop();
         return {
            message: 'Removed successfully',
            stack: this.items
        }
     }

     this.isEmptyStack = function() {
         return this.items.length === 0;
     }

     this.top = function() {
         if(this.isEmptyStack()) {
             return {
                message: 'Empty Stack',
                value: null,
             }
         }
         return {
             value: this.items[this.items.length - 1]
         }
     }

     this.size = function() {
         return this.items.length;
     }

 }

module.exports = {
    StackArray
};