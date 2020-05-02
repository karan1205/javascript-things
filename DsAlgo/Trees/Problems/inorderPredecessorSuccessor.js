/**
 * Find Inorder Predecessor and Successor in Binary Search Tree
 */

const { BinarySearchTree } = require('..');

function findInorderPredecessor(node) {
    if(node.left) {
        let temp = node.left;
        while(temp.right) {
            temp = temp.right;
        }
        return temp;
    }
    return null;
};

function findInorderSuccessor(node) {
    if(node.right) {
        let temp = node.right;
        while(temp.left) {
            temp = temp.left;
        }
        return temp;
    }
    return null;
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

const inorderPredecessor = findInorderPredecessor(tree.head);
const inorderSuccessor = findInorderSuccessor(tree.head);
console.log(inorderPredecessor, 'inorderPredecessor'); 
console.log(inorderSuccessor, 'inorderSuccessor');