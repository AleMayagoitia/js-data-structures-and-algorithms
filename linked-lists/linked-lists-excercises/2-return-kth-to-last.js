// Implement an algorithm to find the kth to last element of a singly linked list.
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
            return;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new LinkedListNode(value);
    }
}

let linkedList = new SinglyLinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
// recursive
// O(1) space
function kthToLast(linkedList, k) {
    let kVal;
    const toLastHelper = function(currentNode) {
        // we are at the end
        if (!currentNode) return 0;
        let count = toLastHelper(currentNode.next) + 1;
        if (count === k) {
            kVal = currentNode.value;
        }
        return count;

    }
    toLastHelper(linkedList.head);
    return kVal;
}
console.log('kthToLast ',kthToLast(linkedList, 2)); // 4
console.log('kthToLast ',kthToLast(linkedList, 5)); // 1
console.log('kthToLast ',kthToLast(linkedList, 3)); // 3

// iterative
// using two pointers, place them k nodes apart and if one
// point reaches the end, the other one is the value to return
// O(n) time 
// O(1) space
function kthToLastIterative(linkedList, k) {
    let p1 = linkedList.head;;
    let p2 = linkedList.head;
    for(let i = 0; i < k; i++) {
        p1 = p1.next;
    }

    while(p1) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2.value;
}

console.log(kthToLastIterative(linkedList, 2)); // 4
console.log(kthToLastIterative(linkedList, 5)); // 1
console.log(kthToLastIterative(linkedList, 3)); // 3
