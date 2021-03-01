/**
 * A binary search tree was created by raversing through an array from left
 * to right and inserting each element
 * 
 * Given a binary search tree with distinct elements,
 * print all possible arrays that could have led to this tree
 * 
 * i.e.
 *       2
 *     1   3
 * 
 * output: [2,1,3] [2,3,1]
 */

 // using level order...
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
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
 class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
            return
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = new LinkedListNode(value);
    }
 }
 function getPossibleArrayCombos(node) {
     let result = [];
     if (node === null) {
         result.add(new LinkedList());
         return result;
     }
     let prefix = new LinkedList();
     prefix.add(node.value);
     // Recurse on left and right subtrees
     let leftSeq = getPossibleArrayCombos(node.left);
     let rightSeq = getPossibleArrayCombos(node.right);
     // Weave together list from the left and right sides
     for(let left of leftSeq) {
         for(let right of rightSeq) {
             let weaved = [];
             weaveLists(left, right, weaved, prefix);
             result.addAll(weaved);
         }
     }
     return result;
 }
/**
 * 
 * Weave lists together in all possible ways. This algorithm works by removing
 * the head from one list, recursing and then doing the same thing with the other list
 */
 function weaveLists(first, second, results, prefix) {
     // One list is empty. Add remainder to [a cloned] prefix and store result
     if (first.size() === 0 || second.size() === 0) {
         let result = prefix.clone()
         result.addAll(first);
         result.addAll(second);
         results.add(result);
         return;
     }
     // Recurse with head of first added to the prefix
     // Removing the head will damage first, so we'll need to put it back where we found it afterwards
     let headFirst = first.removeFirst();
     prefix.addLast(headFirst);
     weaveLists(first, second, results, prefix);
     prefix.removeLast();
     first.addFirst(headFirst);

     // Do the same thing with second, damaging and then restoring the list
     let headSecond = second.removeFirst();
     prefix.addLast(headSecond);
     weaveLists(first, second, results, prefix);
     prefix.removeLast();
     second.addFirst(headSecond);

 }