/**
 * Singly Linked list consists of a number of nodes in which each node has
 * a next pointer to the following element. The link of the last node in the
 * list is NULL, which indicates the end of the list.
 */

/**
 * Type declaration for node of singly linked list
 * @param data
 * @param next
 * @constructor
 */
function Node(data = null, next = null) {
    this.data = data;
    this.next = next;
}

/**
 * Type declaration for Singly Linked List
 * @constructor
 */
function SinglyLinkedList() {
    this.head = null;
    this.size = 0;

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
    };

    /**
     * Traverse list
     */
    this.traverse = function() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
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
    };

    /**
     * Get node at given position
     * @param index
     * @return {null|Node|*|null}
     */
    this.getNode = function(index) {
        if(index >= this.size) {
            return null;
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
        return current;
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

module.exports = {
    SinglyLinkedList,
    Node
};