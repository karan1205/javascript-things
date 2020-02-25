/**
 * Check whether the given Linked List length is even or odd
 */

const { SinglyLinkedList } = require("../");

function isLinkedListLengthEven(list) {
    let fast = list.head;
    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next;
    }
    return !!fast.next;
}

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
list.insertNode(5);
list.insertNode(6);
console.log(isLinkedListLengthEven(list));