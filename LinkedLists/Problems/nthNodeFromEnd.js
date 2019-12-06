/**
 * Find n'th node from the end of a Linked List.
 */

const SinglyLinkedList = require("../SinglyLinkedList");

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);

list.getNodeFromEnd = function(index) {
    let fast = this.head;
    let slow = this.head;
    let count = 0;

    while(fast) {
        fast = fast.next;
        if(count >= index) {
            slow = slow.next;
        }
        count++;
    }
    if(count < index) {
        return null;
    }
    return slow;
};
