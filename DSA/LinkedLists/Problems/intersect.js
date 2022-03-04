/**
 * Find the intersection point of two Linked Lists
 */

const { SinglyLinkedList } = require("../");

function lengthOfList(list) {
    let length = 0;
    let current = list.head;
    while(current) {
        length++;
         current = current.next;
    }
    return length;
}

function traverseLongerList(list, index) {
    let count = 0;
    let current = list.head;
    while(current) {
        if(count === index) break;
        count++;
        current = current.next;
    }
    return current;
}

function getIntersectionPoint(list1, list2) {
    let length1 = lengthOfList(list1);
    let length2 = lengthOfList(list2);

    let head1 = list1.head;
    let head2 = list2.head;

    if(length1 > length2) {
        head1 = traverseLongerList(list1, (length1-length2));
    }
    if(length2 > length1) {
        head2 = traverseLongerList(list2, (length2-length1));
    }

    while(head1 !== head2) {
        head1 = head1.next;
        head2 = head2.next;
    }
    return head1;
}

// const list1 = new SinglyLinkedList();
// const list2 = new SinglyLinkedList();
// list1.insertNode(1);
// list1.insertNode(2);
// list1.insertNode(3);
// list1.insertNode(4);
// list1.insertNode(5);
// list1.insertNode(6);
// list2.insertNode('a');
// list2.insertNode('b');
// list2.insertNode('c');
// list2.insertNode('d');
// list2.head.next.next.next.next = list1.head.next.next;

// const pt = getIntersectionPoint(list1, list2);
// console.log(pt);

module.exports = getIntersectionPoint;