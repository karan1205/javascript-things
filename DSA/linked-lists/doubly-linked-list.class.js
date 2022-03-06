/**
 * Doubly Linked List
 */

class Node {
    constructor(data = null, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertNodeIfListIsEmpty(node) {
        this.head = node;
        this.size++;
        return {
            success: true,
            message: 'Node inserted successfully',
            head: this.head,
        }
    }

    insertFirst(data) {
        const node = new Node(data);
        if(!this.head) {
            this.insertNodeIfListIsEmpty(node)
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.size++;
        return {
            success: true,
            message: 'Node inserted successfully',
            head: this.head,
        }
    }

    insertNode(data, index=this.size) {
        if(index > this.size) {
            return {
                success: false,
                message: 'Error in inserting Node',
                head: this.head
            };
        }
        if(index === 0) {
            return this.insertFirst(data);
        }
        const node = new Node(data);
        if(!this.head) {
            this.insertNodeIfListIsEmpty(node)
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
        node.next = current.next;
        node.prev = current;
        current.next = node;
        if(current.next && current.next.prev) {
            current.next.prev = node;
        }
        this.size++;
        return {
            success: true,
            message: 'Node inserted successfully',
            head: this.head,
        }
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
            if(this.head && this.head.prev) {
                this.head.prev = null;
            }
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
            if(start === index) {
                break;
            }
            current = current.next;
            start++;
        }
        current.prev.next = current.next;
        if(current.next && current.next.prev) {
            current.next.prev = current.prev;
        }
        this.size--;
        return {
            success: true,
            message: 'Node deleted successfully',
            head: this.head
        };
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