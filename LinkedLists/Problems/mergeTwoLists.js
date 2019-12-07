/**
 * Given two sorted Linked Lists, merge them into the third list in sorted order.
 */

const { SinglyLinkedList, Node } = require("../SinglyLinkedList");

function merge(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;

    const newList = new SinglyLinkedList();
    let temp = null;

    while (current1 || current2) {
        let node = new Node();

        if(!current1) {
            let temp = current2;
            while(temp) {
                node.data = temp.data;
                temp = temp.next;
            }
            break;
        }

        if(!current2) {
            let temp = current1;
            while(temp) {
                node.data = temp.data;
                temp = temp.next;
            }
            break;
        }

        if(current1.data < current2.data) {
            node.data = current1.data;
            current1 = current1.next;
        } else {
            node.data = current2.data;
            current2 = current2.next;
        }
        if(!temp) {
            newList.head = node;
            temp = newList.head;
        } else {
            temp.next = node;
            temp = temp.next;
        }
    }
    return newList;
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
list1.insertNode(1);
list1.insertNode(5);
list1.insertNode(6);
list1.insertNode(8);
list1.insertNode(10);
list2.insertNode(2);
list2.insertNode(3);
list2.insertNode(7);
list2.insertNode(9);
list2.insertNode(11);
list2.insertNode(12);

const list3 = merge(list1, list2);
console.log(JSON.stringify(list3));