// PRINT NODES AT NTH DISTANCE FROM THE ROOT
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        const addHelper = function(currentNode, value) {
            if (value < currentNode.value) {
                // go to the left
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                } else {
                    addHelper(currentNode.left, value);
                }
            } else if (value > currentNode.value) {
                // go right
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                } else {
                    addHelper(currentNode.right, value);
                }
            }
        }
        addHelper(this.root, value);
    }
}

let bst = new BinarySearchTree();
bst.add(4);
bst.add(2);
bst.add(1);
bst.add(123);
bst.add(5);
bst.add(203);
bst.add(222);
/**          4
 *       2      123
 *    1       5     203
 *                      222
 */

 function getAtNth(bst, n) {
     // We will add the node and the current height into the queue
     let queue = [[bst.root,0]];
     let arrKth = [];
     while(queue.length) {
         let tuple = queue.shift();
         let temp = tuple[0];
         let height = tuple[1];

         if (height === n) {
            arrKth.push(temp.value)
         }
         if (temp.left) {
            queue.push([temp.left, height + 1])
         }
         if (temp.right) {
            queue.push([temp.right, height + 1])
         }

     }
     return arrKth;

 }
 console.log(getAtNth(bst, 2)) // [ 1, 5, 203 ]