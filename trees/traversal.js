// Tree Traversal
class BinaryTreeNode{
    constructor(value, left= null, right= null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree{
    constructor() {
        this.root = null;
    }
    add(data) {
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
}
 // Pre-order traversal
 // visits nodes in the following order: root, left, right.
 function traversePreOrder(binaryTree) {
    const result = [];
    const preOrderHelper = function(currentNode) {
       result.push(currentNode.value);
       currentNode.left && preOrderHelper(currentNode.left);
       currentNode.right && preOrderHelper(currentNode.right);
    }
    preOrderHelper(binaryTree.root);
    return result;
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

console.log(traversePreOrder(binaryTree)) // [ 7, 2, 1, 5, 3, 8, 9 ]

// In order
// visits nodes in the following order: left, root, right

function traverseInOrder(binarytree) {
   const result = [];
   const inOrderHelper = function (currentNode) {
       currentNode.left && inOrderHelper(currentNode.left);
       result.push(currentNode.value);
       currentNode.right && inOrderHelper(currentNode.right);
       
   }
   inOrderHelper(binarytree.root);
   return result;
}
console.log(traverseInOrder(binaryTree)) // [ 1, 2, 3, 5, 7, 8, 9 ]

// Post order
// visits nodes in the following order: left, right, root
function traversePostOrder(binaryTree) {
   const result = [];
   const postOrderHelper = function(currentNode) {
       currentNode.left && postOrderHelper(currentNode.left);
       currentNode.right && postOrderHelper(currentNode.right);
       result.push(currentNode.value);
   }
   postOrderHelper(binaryTree.root);
   return result;
}
console.log(traversePostOrder(binaryTree)) // [ 1, 3, 5, 2, 9, 8, 7 ]

// Level order
// also known as the Breadth First Search (BFS)
function levelOrder(binaryTree) {
   const queue = [binaryTree.root];
   const result = [];

   while(queue.length) {
       const currentNode = queue.shift()
       result.push(currentNode.value);
       currentNode.left && queue.push(currentNode.left);
       currentNode.right && queue.push(currentNode.right);
   }
   return result;
}
console.log(levelOrder(binaryTree)) //[ 7, 2, 8, 1, 5, 9, 3 ]



