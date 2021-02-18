// Trees

// A general tree data structure is composed of nodes which have children nodes
// The first/top node is called root node
/**
 *              Root Node
 *         /       |        \
 * ChildNode    ChildNode      ChildNode
 *                 |            /      \
 *              ChildNode   ChildNode  ChildNode
 * 
 * 
 */
// This is how a TreeNode looks like when it can have any amount of children:
 class TreeNode {
     constructor(value) {
         this.value = value;
         this.children = [];
     }
 }

 // Binary Trees
 // Is a type of tree that has only two children nodes: left and right
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
 }

 // Binary Search Trees
 // also have two children: left and right
 // left children needs to be smaller than the parent
 // right children needs to be greater than the parent
// This enables for searching, inserting, and removing specific values with O(log2(n))

 // The height of a perfect balanced tree is log2(n), while an unbalanced tree can be n in the worst case
class BinarySearchTree{
    constructor() {
        this.root = null;
    }
}