/**
 * This problem was asked by Google. 
 * A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
 * Given the root to a binary tree, count the number of unival subtrees.
 * For example, the following tree has 5 unival subtrees:
 *    0
 *   / \
 *  1   0
 *     / \
 *    1   0
 *   / \
 *  1   1
*/


function checkUnival(root, data) {
	if(!root) return true;
	if(data !== root.data) return false;
	return checkUnival(root.left, data) && checkUnival(root.right, data);
}

function countUnivalTrees(root) {
	let count = 0;

	function traverse(root) {
		if(!root.left && !root.right) {
			return ++count;
		}
		if(root.left) {
			traverse(root.left);
		}
		if(root.right) {
			traverse(root.right);
		}
		if(checkUnival(root, root.data)) {
			count++;
		}
		return count;
	}

	return root ? traverse(root) : count;
}

const tree = {
	data: 0,
	left: {
		data: 1,
		left: null,
		right: null,
	},
	right: {
		data: 0,
		left: {
			data: 1,
			left: {
				data: 1,
				left: null,
				right: null,
			},
			right: {
				data: 1,
				left: null,
				right: null,
			}
		},
		right: {
			data: 0,
			left: null,
			right: null,
		}
	}
}

const result = countUnivalTrees(tree);
console.log(result);



   
