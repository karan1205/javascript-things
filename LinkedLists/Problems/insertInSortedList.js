/**
 * Insert a node in a sorted linked list.
 */

const { SinglyLinkedList, Node } = require("../");

const list = new SinglyLinkedList();
list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(5);

list.insertInSortedList = function (data) {
    const node = new Node(data);
    let current = this.head;
    let temp = current;
    while(current) {
        if(current.data < data) {
            temp = current;
            current = current.next;
            continue;
        }
        break;
    }

    if(!temp) {
        this.head = node;
        return this.head;
    }

    node.next = temp.next;
    temp.next = node;
    return this.head;
};

list.insertInSortedList(4);
list.traverse();