/**
 * Design an algorithm and write code to find common ancestor
 * of two nodes in a binary tree.
 * 
 * Avoid sorting additional nodes in a data structure
 * 
 * Note: this is not necessarily a binary search tree
 */


let tree = {
    "value": 4,
    "left": {
      "value": 2,
      "left": {
        "value": 1,
        "left": null,
        "right": null
      },
      "right": {
        "value": 3,
        "left": null,
        "right": null
      }
    },
    "right": {
      "value": 6,
      "left": {
        "value": 5,
        "left": null,
        "right": null
      },
      "right": {
        "value": 7,
        "left": null,
        "right": null
      }
    }
  };

/***
 *           4
 *      2        6
 *    1   3     5  7
 */

 // start from the root, search for both nodes
 // identify if both nodes are on the same side, if they are not, the current root is the first common ancestor

 function firstCommonAncestor(root, nodeA, nodeB) {
     let queue = [root];

     while(queue.length) {
         let currentNode = queue.shift();
         if (isNodePresent(currentNode.right, nodeA) && isNodePresent(currentNode.right, nodeB)) {
            queue.push(currentNode.right);
         } else if (isNodePresent(currentNode.left, nodeA) && isNodePresent(currentNode.left, nodeB)) {
            queue.push(currentNode.left);
         } else {
             // we are the first common ancestor
             return currentNode.value;
         }

     }
 }
 function isNodePresent(root, nodeToFind) {
     let queue = [root];
     while(queue.length) {
        let currentNode = queue.shift();
        if (currentNode.value === nodeToFind) {
            return true
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

 console.log(firstCommonAncestor(tree, 5,7)) // 6
 console.log(firstCommonAncestor(tree, 1,7)) // 4
 console.log(firstCommonAncestor(tree, 1,3)) // 2
 