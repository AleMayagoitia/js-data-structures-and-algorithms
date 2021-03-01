/**
 * Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (i.e if you have a tree with depth D, you'll have D linked lists)
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

function createLinkedList (root){
    let createLinkedListHelper =function (root, lists, level) {
    if (root === null) return; // base case

    let list = null;
    if (lists.size === level) {
        // Level not contained in list
        list = new LinkedList();
        /**
         * Levels are always traversed in order. So, if this is the first time
         * we've visited level i, we must have seen levels 0 through i - 1.
         * We can therefor safely add the level at the end
         */
        lists.set(level, list);
    } else {
        list = lists.get(level);
    }
    list.add(root.value);
    createLinkedListHelper(root.left, lists, level + 1);
    createLinkedListHelper(root.right, lists, level + 1);
    }
    let lists = new Map();
    createLinkedListHelper(root, lists, 0);
    return lists;
}
console.log(createLinkedList(bst.root));
