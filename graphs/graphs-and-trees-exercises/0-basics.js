class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    addNode(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let addHelper = function(currentNode, value) {
            if (value < currentNode.value) {
                // go to the left
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                } else {
                    addHelper(currentNode.left, value);
                }
            }
            if (value > currentNode.value) {
                // go to the right
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                } else {
                    addHelper(currentNode.right, value);
                }
            }
        }
        addHelper(this.root, value);
    }
    // visit the left branch, then the current node and finally the right one
    inOrder() {
        let result = [];
        let inOrderHelper = function(currentNode) {
            currentNode.left && inOrderHelper(currentNode.left);
            result.push(currentNode.value);
            currentNode.right && inOrderHelper(currentNode.right);
        }
        inOrderHelper(this.root);
        return result;
    }
    // visit the current node first and then its child nodes
    preOrder() {
        let result = [];
        let preOrderHelper = function(currentNode) {
            result.push(currentNode.value);
            currentNode.left && preOrderHelper(currentNode.left);
            currentNode.right && preOrderHelper(currentNode.right);
        }
        preOrderHelper(this.root);
        return result;
    }
    // visit the current node after its child nodes
    postOrder() {
        let result = [];
        let postOrderHelper = function(currentNode) {
            currentNode.left && postOrderHelper(currentNode.left);
            currentNode.right && postOrderHelper(currentNode.right);
            result.push(currentNode.value);
        }
        postOrderHelper(this.root);
        return result;
    }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.addNode(10);
binarySearchTree.addNode(5);
binarySearchTree.addNode(20);
binarySearchTree.addNode(9);
binarySearchTree.addNode(18);
binarySearchTree.addNode(3);
binarySearchTree.addNode(7);
console.log(binarySearchTree.inOrder()); // [ 3, 5, 7, 9, 10, 18, 20 ]
console.log(binarySearchTree.preOrder()); // [ 10, 5, 3, 9, 7, 20, 18 ]
console.log(binarySearchTree.postOrder()); // [ 3, 7, 9, 5, 18, 20, 10 ]
