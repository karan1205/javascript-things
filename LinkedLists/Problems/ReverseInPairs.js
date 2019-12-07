/**
 *  Reverse the linked list in pairs. If you have a linked list that holds 1 -> 2 -> 3 -> 4 -> X,
 *  after the function has been called the linked list would hold 2 -> 1 -> 4 -> 3 -> X.
 */

const { SinglyLinkedList } = require("../SinglyLinkedList");

function reverseInPairs(list) {
    let current = list.head;
    while(current && current.next) {
        const nextData = current.next.data;
        current.next.data = current.data;
        current.data = nextData;
        current = current.next.next;
    }
    return list.head;
}

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
list.insertNode(5);
console.log(JSON.stringify(reverseInPairs(list)));