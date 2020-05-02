/**
 * Find Minimum Element in Binary Search Tree
 */

const { BinarySearchTree } = require('../');

function findMinElement(node) {
    if(!node) {
        return null;
    }
    if(node.left) {
        return findMinElement(node.left);
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

const minElement = findMinElement(tree.head);
console.log(minElement); // 7