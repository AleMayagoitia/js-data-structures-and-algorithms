// Find the lowest common ancestor of two nodes in a given binary tree
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
// O(log2(n))
function getLowestCommonAncestor(currentNode, n1, n2) {
    const lowestAncestorHelper = function(currentNode, n1, n2) {
        if (!currentNode) return;
        if (Math.max(n1,n2) < currentNode.value) {
            // go left
            return lowestAncestorHelper(currentNode.left, n1, n2)
        }
        if (Math.min(n1,n2) > currentNode.value) {
            // go right
            return lowestAncestorHelper(currentNode.right, n1, n2)
        }
        return currentNode.value;
    }
    return lowestAncestorHelper(currentNode, n1, n2);
    
}
console.log(getLowestCommonAncestor(bst.root, 5,203)) // 123
console.log(getLowestCommonAncestor(bst.root, 1,222)) // 4