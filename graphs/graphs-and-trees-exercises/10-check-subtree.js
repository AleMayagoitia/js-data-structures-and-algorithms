/**
 * T1 and T2 are two very large binary trees
 * with T1 much bigger than T2. Create an algorithm
 * to determine if T2 is a subtree of T1
 * 
 * A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2
 * 
 * That is, if you cut off the tree at node n, the two trees would be identical
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

let bst2 = new BST();
bst2.add(14);
bst2.add(12);
bst2.add(19);
bst2.add(8);
bst2.add(89);
bst2.add(18);
bst2.add(16);
bst2.add(4);
bst2.add(2);
bst2.add(6);
bst2.add(1);
bst2.add(3);
bst2.add(5);
bst2.add(7);

/***                           14
 *                       12          19
 *                 8              18   89
 *           4                  16
 *      2        6
 *    1   3     5  7
 */

 function isSubtree(mainTree, tree) {
     // find node in the main tree with value as the root of the second tree
     let queue = [mainTree.root];
     while(queue.length) {
        let currentNode = queue.shift();
        if (currentNode.value === tree.root.value) {
            return areIdenticalTrees(currentNode, tree.root);
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

 function areIdenticalTrees(t1, t2) {
     let queueT1 = [t1];
     let queueT2 = [t2];

     while(queueT1.length && queueT2.length) {
         let currentNodeT1 = queueT1.shift();
         let currentNodeT2 = queueT2.shift();
         if (currentNodeT1.value !== currentNodeT2.value) {
             return false;
         }
         if (currentNodeT1.left && currentNodeT2.left) {
            queueT1.push(currentNodeT1.left);
            queueT2.push(currentNodeT2.left);
         } else if (currentNodeT1.left || currentNodeT2.left){
             // one of them doesnt have a left
             return false;
         }
         if (currentNodeT1.right && currentNodeT2.right) {
            queueT1.push(currentNodeT1.right);
            queueT2.push(currentNodeT2.right);
         }  else if (currentNodeT1.right || currentNodeT2.right){
             // one of them doesnt have a right
             return false;
         }
     }
     return queueT1.length === queueT2.length;
 }

 console.log(isSubtree(bst2, bst)) // true

let bst3 = new BST();
bst3.add(14);
bst3.add(12);
bst3.add(19);
bst3.add(8);
bst3.add(89);
bst3.add(18);
bst3.add(16);
bst3.add(4);
bst3.add(2);
bst3.add(6);
bst3.add(1);
bst3.add(3);
bst3.add(5);
// bst3.add(7);
/***                           14
 *                       12          19
 *                 8              18   89
 *           4                  16
 *      2        6
 *    1   3     5  
 */

console.log(isSubtree(bst3, bst)) // false
