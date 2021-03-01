/**
 * Implement a function to check if a binary tree is balanced. 
 * 
 * For the purposes of this question, a balanced tree is defined to be a tree such 
 * that the heights of the two subtrees of any node
 * never differ by more than one
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        let addHelper = function (currentNode) {
            if (value < currentNode.value) {
                // go to the left
                if (!currentNode.left) {
                   currentNode.left = new Node(value);
                } else {
                   addHelper(currentNode.left);
                }
            }
            if(value > currentNode.value) {
                // go to the right
                if (!currentNode.right) {
                   currentNode.right = new Node(value);
                } else {
                   addHelper(currentNode.right);
                }
            }
        }
        addHelper(this.root);
    }
    findMaxHeight(node = this.root) {
        if (!node) return -1;
        const left = this.findMaxHeight(node.left);
        const right = this.findMaxHeight(node.right);
        return Math.max(left, right) + 1;
    }
    findMinHeight(node = this.root) {
        if (!node) return -1;
        const left = this.findMinHeight(node.left);
        const right = this.findMinHeight(node.right);
        return Math.min(left, right) + 1;
    }
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }
}

let bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

/***
 *           4
 *      2        6
 *    1   3     5  7
 */

console.log(bst.isBalanced()); // true
bst.add(8);
bst.add(9);

/***
 *           4
 *      2        6
 *    1   3     5  7
 *                   8
 *                     9
 */
console.log(bst.isBalanced()); // false
