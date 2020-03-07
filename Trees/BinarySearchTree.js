function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinaryeSearchTree() {
    this.head = null;

    this.insertNode = function(data) {
        let newNode = data;
        if(!(data instanceof Node)) {
            newNode = new Node(data);
        }
        function traverse(node) {
            if(node.data > data) {
                if(!node.left) {
                    node.left = newNode;
                    return;
                } else {
                    traverse(node.left);
                }
            } else {
                if(!node.right) {
                    node.right = newNode;
                    return;
                } else {
                    traverse(node.right);
                }
            }
        }
        if(!this.head) {
            this.head = newNode;
        } else {
            traverse(this.head);
        }
    }

    this.findNode = function(data) {
        if(!this.head) { 
            return null;
        }
        function traverse(node) {
            if(!node) {
                return null;
            }
            if(node.data === data) {
                return node;
            } else if(node.data > data) {
                return traverse(node.left);
            } else {
                return traverse(node.right);
            }
        }
        return traverse(this.head);
    }


}

module.exports = {
    Node,
    BinaryeSearchTree
}