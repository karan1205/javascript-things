/**
 * Find Maximum Element in Binary Search Tree
 */

const { BinarySearchTree } = require('../');

function findMaxElement(node) {
    if(!node) {
        return null;
    }
    if(node.right) {
        return findMaxElement(node.right);
    } else {
        return node;
    }
};


const tree = new BinarySearchTree();
tree.insertNode(100);
tree.insertNode(80);
tree.insertNode(170);
tree.insertNode(85);
tree.insertNode(150);
tree.insertNode(35);
tree.insertNode(7);
tree.insertNode(110);

const maxElement = findMaxElement(tree.head);
console.log(maxElement); // 170






