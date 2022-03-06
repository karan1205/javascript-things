/**
 * Singly Linked List
 */

class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertNode(data, index) {
        if(index > this.size) {
            return {
                success: false,
                message: 'Error in inserting Node',
                head: this.head
            };
        }
        const node = new Node(data);
        if(index === 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
            return {
                success: true,
                message: 'Node inserted successfully',
                head: this.head
            };
        }
        let start = 0;
        let current = this.head;
        while(current) {
            if(start === index-1) {
                break;
            }
            current = current.next;
            start++;
        }
        node.next = current.next;
        current.next = node;
        this.size++;
        return {
            success: true,
            message: 'Node inserted successfully',
            head: this.head
        };
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current);
            current = current.next;
        }
    }

    deleteNode(index = this.size-1) {
        if(index > this.size) {
            return {
                success: false,
                message: 'Error in deleting Node',
                head: this.head
            };
        }

        if(index === 0) {
            this.head = this.head.next;
            this.size--;
            return {
                success: true,
                message: 'Node deleted successfully',
                head: this.head
            };
        }

        let current = this.head;
        let start = 0;
        while(current) {
            if(start === index-1) {
                break;
            }
            current = current.next;
            start++;
        }
        current.next = current.next.next;
        this.size--;
        return {
            success: true,
            message: 'Node deleted successfully',
            head: this.head
        };
    }

    getNode(index) {
        if(index >= this.size) {
            return null;
        }
        let current = this.head;
        let start = 0;
        while(current) {
            if(start === index-1) {
                return current;
            }
            current = current.next;
            start++;
        }
    }

    deleteList() {
        this.head = null;
        return {
            success: true,
            message: 'list deleted successfully',
            head: this.head,
        }
    }

    getSize() {
        return this.size;
    }

}