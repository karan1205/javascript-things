/**
 *  Display a linked list from the end
 */

const { SinglyLinkedList } = require("../SinglyLinkedList");

function displayFromEnd(node) {
    if(!node) {
        return;
    }
    const current = node;
    const next = node.next;
    displayFromEnd(next);
    console.log(current.data)
}

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
displayFromEnd(list.head);