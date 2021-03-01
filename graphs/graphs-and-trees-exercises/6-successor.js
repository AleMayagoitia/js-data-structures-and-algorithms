/**
 * Write an algorithm to find the "next" node (i.e. in-order successor)
 * of a given node in a binary search tree.
 * 
 * You can assume that each node has a link to its parent
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

         let addHelper = function(currentNode) {
             if (value < currentNode.value) {
                 // go left
                 if (!currentNode.left) {
                     currentNode.left = new Node(value)
                 } else {
                     addHelper(currentNode.left);
                 }
             }
             if (value > currentNode.value) {
                 // go right
                 if (!currentNode.right) {
                    currentNode.right = new Node(value)
                } else {
                    addHelper(currentNode.right);
                }
             }
         }
         addHelper(this.root);
     }
     inOrder() {
         let result = [];
         let inOrderHelper = function(currentNode) {
            currentNode.left && inOrderHelper(currentNode.left);
            result.push(currentNode.value);
            currentNode.right && inOrderHelper(currentNode.right);
         }
         inOrderHelper(this.root)
         return result;
     }
     inOrderSuccesor(node) {
         if (node ==null) {
             return null;
         }

         // Found right children -> return left most node of right subtree
         if (node.right != null) {
             return leftMostChild(node.right);
         } else {
             let q = node;
             let x = q.parent;
             // Go up until we're on left instead of right
             while(x != null && x.left != q) {
                 q = x;
                 x = x.parent;
             }
             return x;
         }
     }
     leftMostChild(node) {
         if (node === null) {
             return null;
         }
         while(node.left !== null) {
             node = node.left;
         }
         return n;
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
console.log(bst.inOrder())
console.log(bst.inOrderSuccesor(4))