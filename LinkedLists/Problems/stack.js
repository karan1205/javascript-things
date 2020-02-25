/**
 * Implement Stack using Linked List.
 */

const { SinglyLinkedList } = require("../");

function Stack() {
    this.list = new SinglyLinkedList();

    this.push = function (data) {
        this.list.insertNode(data, 0);
    };

    this.pop = function() {
        this.list.deleteNode(0);
    };

    this.size = function() {
        return this.list.size;
    };

    this.traverse = function() {
        this.list.traverse();
    };

}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
s.pop();
s.traverse();
