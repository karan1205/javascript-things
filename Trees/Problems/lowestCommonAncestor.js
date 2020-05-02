/**
 * Given two nodes in a binary search tree, find lowest common ancestor
 */
const { BinarySearchTree } = require('../');

function findLCA(node, a, b) {
    if(!node) {
        return null;
    }
    if(node.data > a && node.data > b) {
        return findLCA(node.left, a, b);
    }
    if(node.data < a && node.data < b) {
        return findLCA(node.right, a, b); 
    }
    return node;
}

const tree = new BinarySearchTree();
tree.insertNode(100);
tree.insertNode(80);
tree.insertNode(170);
tree.insertNode(85);
tree.insertNode(150);
tree.insertNode(35);
tree.insertNode(7);
tree.insertNode(110);


console.log(findLCA(tree.head, 100, 80));