/**
 * Check whether the given linked list is either NULL-terminated or ends in a cycle (cyclic).
 */

const { SinglyLinkedList } = require("../SinglyLinkedList");

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
list.insertNode(5);
// list.head.next.next.next.next.next = list.head.next.next; // For cycle

list.checkLoop = function() {
    let slow = this.head;
    let fast = this.head;

    function findNode(slow, fast) {
        while(slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return {
            message: 'loop exists',
            node: slow,
        }
    }

    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) {
            slow = this.head;
            return findNode(slow, fast);
        }
    }
    return {
        message: 'NULL-terminated list',
    }
};

list.length = function() {
    let slow = this.head;
    let fast = this.head;
    let size = 0;
    let met=0;

    while(slow) {
        if(fast && fast.next && fast.next.next) {
            fast = fast.next.next;
        }
        slow = slow.next;
        if(slow === fast) {
            met++;
        }
        if(met === 2) break;
        size++;
    }
    return size;
};

console.log(list.length());