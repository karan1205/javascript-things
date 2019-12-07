/**
 * Reverse a singly linked list.
 */

const { SinglyLinkedList } = require("../SinglyLinkedList");

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);

list.reverseList = function() {
    let current = this.head;
    let prev = null;

    while(current) {
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
};

const reversed = list.reverseList();
console.log(reversed);