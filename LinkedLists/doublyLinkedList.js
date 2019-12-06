/**
 * The advantage of a doubly linked list (also called two - way linked list) is that given a node in the list,
 * we can navigate in both directions. A node in a singly linked list cannot be removed unless we have the pointer to its
 * predecessor. But in a doubly linked list, we can delete a node even if we don't have the previous node's address
 * (since each node has a left pointer  pointing to the previous node and can move backward).
 */

/**
 * Type declaration for node of doubly linked list
 * @param data
 * @param next
 * @param prev
 * @constructor
 */
function Node(data = null, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev
}

/**
 * Type declaration for Doubly Linked List
 * @constructor
 */
function DoublyLinkedList() {
    this.head = null;
    this.size = 0;

    /**
     * Insert a node at beginning
     * @param data
     * @return {{head: *, success: boolean, message: string}}
     */
    this.insertFirst = function(data) {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
            this.size++;
            return {
                success: true,
                message: 'Node inserted successfully',
                head: this.head,
            }
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
    };

    /**
     * Traverse list
     */
    this.traverse = function () {
        let node = this.head;
        while(node) {
            console.log(node.data);
            node = node.next
        }
    };

    /**
     * Insert a node at given position
     * @param data
     * @param index
     * @return {{head: *, success: boolean, message: string}}
     */
    this.insertNode = function(data, index = this.size) {
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
            this.head = node;
            this.size++;
            return {
                success: true,
                message: 'Node inserted successfully',
                head: this.head,
            }
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
        // last node check
        if(current.next && current.next.prev) {
            current.next.prev = node;
        }
        node.prev = current;
        node.next = current.next;
        current.next = node;

        this.size++;
        return {
            success: true,
            message: 'Node inserted successfully',
            head: this.head,
        }
    };

    /**
     * Delete a node at given position
     * @param index
     * @return {{head: *, success: boolean, message: string}}
     */
    this.deleteNode = function(index = this.size-1) {
        if(index > this.size) {
            return {
                success: false,
                message: 'Error in deleting Node',
                head: this.head
            };
        }

        if(index === 0) {
            this.head = this.head.next;
            // check for last node
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
    };

    /**
     * Delete list
     * @return {{head: *, success: boolean, message: string}}
     */
    this.deleteList = function() {
        this.head = null;
        return {
            success: true,
            message: 'list deleted successfully',
            head: this.head,
        }
    };

    /**
     * Get size of list
     * @return {number}
     */
    this.getSize = function() {
        return this.size;
    }
}
