/**
 * You are implementing a binary search tree class from scratch which,
 * in addition to insert, find and delete, has a method getRandomNode()
 * which returns a random node from the tree
 * 
 * All nodes should be equally likely to be chosen. Design and implement an algorithm 
 * for getRandomNode and explain how you would implement the rest of the methods
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
         this.allValues = [];
     }
     add(value) {
        if (!this.root) {
            this.root = new Node(value);
            this.allValues.push(value);
            return;
        }
        let addHelper = function(currentNode) {
            if (value < currentNode.value) {
                // go left
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                    this.allValues.push(value);
                } else {
                    addHelper(currentNode.left);
                }

            }else if (value > currentNode.value) {
                // go right
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                    this.allValues.push(value);
                } else {
                    addHelper(currentNode.right);
                }

            }
        }
        addHelper(this.root);
     }
     find(value) {
         if (!this.root) return undefined;
         let findHelper = function(currentNode) {
             if (value === currentNode.value) {
                 return currentNode;
             } else if (value < currentNode.value) {
                 return findHelper(currentNode.left);

             } else if (value > currentNode.value) {
                return findHelper(currentNode.right);

             }
         }
         return findHelper(this.root);
     }
     getRandomNode() {
         let randomNumber = Math.floor(Math.random * this.allValues.length);
         return this.find(this.allValues[randomNumber]);
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

console.log(bst.getRandomNode());