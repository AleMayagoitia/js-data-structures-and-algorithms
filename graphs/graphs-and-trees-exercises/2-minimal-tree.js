/**
 * Given a sorted (increasing order) array with unique integer elements
 * write an algorithm to create a binary search tree with minimal height
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

 let arr = [1,2,3,4,5,6,7];

function findMiddleIndex(arr) {
    return Math.floor(arr.length / 2);
}
let bst = new BST();
// approach A, find the middle number of the array, add it into the tree and then
// split half the arrayleft and right
// repeat this until we run out of numbers
function buildTree(arr, bst) {
    if (!arr.length) return;
    let middleIndex = findMiddleIndex(arr);

    let rightSide = arr.slice(0, middleIndex);
    let leftSide = arr.slice(middleIndex + 1); // so that it excludes the current middle number

    bst.add(arr[middleIndex]);
    console.log(rightSide, leftSide, arr[middleIndex]);
    if (rightSide.length >= 1) {
        buildTree(rightSide, bst);
    }
    if (leftSide.length >= 1) {
        buildTree(leftSide, bst);
    }

}
buildTree(arr, bst)
/***
 *           4
 *      2        6
 *    1   3     5  7
 */
console.log(findMiddleIndex([]))
console.log(JSON.stringify(bst.root))

// Approach B
/**
 * Do the insertion of the node in the same function so that
 * we don't need to traverse the tree each time
 */
function createMinimalBST(arr) {
    let createMinimalBSTHelper = function(arr, start, end) {
        if (end < start) return null;

        let midIndex = Math.floor((start + end) / 2);
        let node = new Node(arr[midIndex]);
        node.left = createMinimalBSTHelper(arr, start, mid - 1);
        node.right = createMinimalBSTHelper(arr, start + 1, end);
        return node;
    }
    createMinimalBST(arr, 0, arr.length - 1);
}