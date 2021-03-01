/**
 * Implement a function to check a binaty tree is a binary search tree
 */

 let bst = {
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

let notBst = {
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
        "value": 9,
        "left": null,
        "right": null
      },
      "right": {
        "value": 7,
        "left": null,
        "right": null
      }
    }
  }
  
/***
 *           4
 *      2        6
 *    1   3     9  7
 */

 function validateBST(root) {
     let queue = [root];
     while(queue.length) {
         let currentNode = queue.shift();
         if ((!currentNode.left || (currentNode.left.value < currentNode.value)) && (!currentNode.right || (currentNode.right.value > currentNode.value))) {
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
         } else {
             return false;
         }
         
     }
     return true;

 }
 console.log(validateBST(bst)); // true
 console.log(validateBST(notBst)); // false

 // previous solution won't work on a tree like this
 /**
  *      20
  *   10    30
  *     25
  */

  // So, we should also check that everything on the left side is less than the current node
  // and everything on the right is greater

  function checkBST(root) {
      let checkBSTHelper = function(currentNode, min, max) {
          if (!currentNode) return true; // base case

          if ((min != null && currentNode.value <= min) || (max != null && currentNode.value > max)) {
              return false;
          }
          if (!checkBST(currentNode.left, min, currentNode.value) || !checkBST(currentNode.right, currentNode.value, max)) {
              return false;
          }
          return true;

      }
      return checkBSTHelper(root, null, null);
  }

  console.log(checkBST(bst)); // true
  console.log(checkBST(notBst)); // false