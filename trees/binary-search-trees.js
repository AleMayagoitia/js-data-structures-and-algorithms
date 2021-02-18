class BinaryTreeNode{
    constructor(value, left= null, right= null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
// Search operations are faster than linked lists, arrays, stacks and queues
// However, the insertion and deletion operation are slower
class BinaryTree{
    constructor() {
        this.root = null;
    }
    // insertion
    add(data) {
        // If the root is empty, assume this is the new root
        if (!this.root) {
            this.root = new BinaryTreeNode(data);
            return;
        }
       const addHelper = function(currentNode) {
           if (data < currentNode.value) {
               // go left
               if (!currentNode.left) {
                   currentNode.left = new BinaryTreeNode(data);
                   return;
               } else {
                   addHelper(currentNode.left);
               }
           } else if (data > currentNode.value) {
               // go right
               if (!currentNode.right) {
                   currentNode.right = new BinaryTreeNode(data);
                   return;
               } else {
                   addHelper(currentNode.right);
               }
           }

       }
       addHelper(this.root);

    }

    levelOrder() {
        const queue = [this.root];
        const result = [];
     
        while(queue.length) {
            const currentNode = queue.shift()
            result.push(currentNode.value);
            currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right);
        }
        return result;
     }

    // deletion
    // O(log2(n)) for balanced trees - because at most that's the height that will need to be traversed to find and delete the desired node
    // O(n) for unbalanced trees
    remove(data) {
        if (!this.root) {
            return;
        }
        const findMin = function(root) {
            while(root.left) {
                root = root.left;
            }
            return root;
        }
        // First traverse down the tree looking for the node to remove, 
        // when the node is found we have three possible cases:
        // 1 - The node has no children  : just remove the node
        // 2 - The node has one children : the child replaces the parent
        // 3 - The node has tro children : Either find the maximum of the left subtree or find the minimum of the right subtree to replace the parent
        const deleteNodeHelper = function(root, value) {
            if (!root) {
                return null;
            }
            // Look for the node
            if (value < root.value) {
                root.left = deleteNodeHelper(root.left, value);
            } else if (value > root.value) {
                root.right = deleteNodeHelper(root.right, value)
            } else {
                // Node found

                // Case 1 - no child
                if (!root.left && !root.right) {
                    return null;
                } else if(!root.left) {
                    // Case 2 - just one child
                    root = root.right;
                    return root;
                } else if (!root.right) {
                    // Case 2 - just one child
                    root = root.left;
                    return root;
                } else {
                    // Case 3 - both children
                    let temp = findMin(root.right);
                    root.value = temp.value;
                    root.right = deleteNodeHelper(root.right, temp.value);
                    return root;
                }
            }
            return root;
        }

        return deleteNodeHelper(this.root, data);
    }

    // search
    // O(log2(n))
    search(data) {
        let currentNode = this.root;
        let found = false;
        while(currentNode) {
            if (data < currentNode.value) {
                currentNode = currentNode.left;
            } else if (data > currentNode.value) {
                currentNode = currentNode.right;
            } else  {
                found = true;
                break;
            }
        }

        return found;
    }
    
}

let binaryTree = new BinaryTree();
binaryTree.add(7);
binaryTree.add(2);
binaryTree.add(5);
binaryTree.add(8);
binaryTree.add(1);
binaryTree.add(3);
binaryTree.add(9);
/**
*            7
*     2         8
*   1   5         9
*      3           
* 
*/

binaryTree.remove(5);
console.log(binaryTree.levelOrder()); // [ 7, 2, 8, 1, 3, 9 ]
console.log(binaryTree.search(3)) // true
console.log(binaryTree.search(4)) // false
console.log(binaryTree.search(5)) // false