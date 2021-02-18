// CHECK WETHER A BINARY TREE IS A SUBTREE OF ANOTHER TREE

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        const addHelper = function(currentNode, value) {
            if (value < currentNode.value) {
                // go to the left
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                } else {
                    addHelper(currentNode.left, value);
                }
            } else if (value > currentNode.value) {
                // go right
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                } else {
                    addHelper(currentNode.right, value);
                }
            }
        }
        addHelper(this.root, value);
    }
}
let bst = new BinarySearchTree();
bst.add(4);
bst.add(2);
bst.add(1);
bst.add(123);
bst.add(5);
bst.add(203);
bst.add(222);
/**          4
 *       2      123
 *    1       5     203
 *                      222
 */
let bst2 = new BinarySearchTree();
bst2.add(123);
bst2.add(5);
bst2.add(203);
bst2.add(222);

/**
 *    123
 *  5     203
 *            222
 */

 function isSameTree(root1, root2) {
     if (!root1 && !root2) return true;

     if (!root1 || !root2) return false;
     return root1.value === root2.value && isSameTree(root1.left, root2.left) &&  isSameTree(root1.right, root2.right);
 }
 // Do any type of traverse search and while on it, check if the currentNode is the root node of subtree
 function levelOrder(bst, subtree) {
     if (!bst.root) return;

     let queue = [bst.root];
     while (queue.length) {
        const currentNode = queue.shift();
        if (currentNode.value === subtree.value && isSameTree(currentNode, subtree)) {
            return true;
        }
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
     }
     return false;
 }

 console.log(levelOrder(bst, bst2.root)); // true