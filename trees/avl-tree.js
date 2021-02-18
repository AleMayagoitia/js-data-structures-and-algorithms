// AVL Trees
// An AVL tree is a search tree that balances itself
// it keeps the BinarySearchTree height to a minimum and ensures O(log2(n))
// for search, insertion and deletion


// AVL tree only has a AVLTree class (we dont have a node class here)
// which represents the node of the AVL tree
class AVLTree {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.depth = 1;
    }
    // the height of a AVL tree is based on the height of the children
    // and can be calculated using the following code block:
    setDepthBasedOnChildren() {
        if (this.left != null) {
            this.depth = this.left.depth + 1;
        }
        if (this.right != null && this.depth <= this.right.depth) {
            this.depth = this.right.depth + 1;
        }
    }

    // ALV trees rotate their children to maintain balance after insertion

    // Rotate Left
    rotateLeft() {
        let valueBefore = this.value;
        let rightBefore = this.right;
        this.value = this.left.value;

        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;

        this.right.getDepthFromChildren();
        this.getDepthFromChildren();
    }

    // Rotate right
    rotateRight() {
        // the right side is too long => rotate from the right
        let valueBefore = this.value;
        let leftBefore = this.left;
        this.value = this.right.value;

        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;

        this.left.updateInNewLocation();
        this.updateInNewLocation()
    }

    // Double rotation
    // If the AVL tree is still unbalanced after one rotation, it has to rotate twice to balance

    // Rotate Right then Left
    // Rotate Left then Right
    balance() {
        let ldepth = this.left === null ? 0 : this.left.depth;
        let rdepth = this.right === null ? 0 : this.right.depth;
        
        if (ldepth > rdepth + 1) {
            // LR or LL rotation
            let lldepth = this.left.left === null ? 0 : this.left.left.depth;
            let lrdepth = this.left.right === null ? 0 : this.left.right.depth;

            if (lldepth < lrdepth) {
                // LR rotation consists of a right rotation of the left child
                this.left.rotateRight();
                // plus a left rotation of this node, which happens anyway
            }
            this.left.rotateLeft();
        } else if (ldepth + 1 < rdepth) {
            // RR or RL rotation
            let rrdepth = this.right.right === null ? 0 : this.right.right.depth;
            let rldepth = this.right.left === null ? 0 : this.right.left.depth;

            if (rrdepth < rldepth) {
                // RR rotation consists of a LL rotation of the child
                this.right.rotateLeft();
                // plus a RR rotation of this node, which happens anyway
            }
            this.right.rotateRight()
        }
    }

    // O(nlog2(n))
    insert(value) {
        let childInserted = false;
        if (value === this.value) {
            return false; // should all be unique
        }
        if (value < this.value) {
            if (!this.left) {
                this.left = new AVLTree(value);
                childInserted = true;
            } else {
                childInserted = this.left.insert(value);
                childInserted && this.balance;
            }
        } else if (value > this.value) {
            if (!this.right) {
                this.right = new AVLTree(value);
                childInserted = true;
            } else {
                childInserted = this.right.insert(value);
                childInserted && this.balance;
            }
        }
        if (childInserted) {
            this.setDepthBasedOnChildren();
        }
        return childInserted;
    }

    // Deletion
    remove(value) {
        const findMin = function(currentNode) {
            while(currentNode.left) currentNode = currentNode.left;
            return currentNode;
        }
        const removeHelper = function(currentNode, value) {
            if (!currentNode) {
                return null
            }
            if (value < currentNode.value) {
                currentNode.left = removeHelper(currentNode.left, value)
            } else if (value > currentNode.value) {
                currentNode.right = removeHelper(currentNode.right, value)
            } else {
                // this is the node to delete
                if (!currentNode.left && !currentNode.right) {
                    return null; // Case 1 - no child
                } else if (!currentNode.left) {
                    currentNode = currentNode.right; // Case 2 - one child
                } else if (!currentNode.right) {
                    currentNode = currentNode.left; // Case 2 - one child
                } else {
                    // Case 3 - two children
                    let temp = findMin(currentNode.right);
                    currentNode.value = temp.value;
                    currentNode.right = removeHelper(currentNode.right, temp.value);
                    return currentNode;
                }
            }
            currentNode.updateInNewLocation();
            return currentNode;

        }
        return removeHelper(this, value);
    }
}


