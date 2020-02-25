/**
 * Find the middle of the linked list
 */

const { SinglyLinkedList } = require("../");

function midNode(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast.next) {
        return {first: slow, second: slow.next};
    }
    return slow;

}

const list1 = new SinglyLinkedList();
list1.insertNode(1);
list1.insertNode(2);
list1.insertNode(3);
list1.insertNode(4);
list1.insertNode(5);
list1.insertNode(6);
const mid = midNode(list1);
console.log(mid);
