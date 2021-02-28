// Write code to remove duplicated from an unsorted linked list
let set = new Set();
function removeDuplicates(linkedList) {
    let currentNode = linkedList.head;
    let prev = null;
    while(currentNode) {
        if (set.has(currentNode.value)) {
            // remove it
            prev.next = currentNode.next;
        } else {
            set.add(currentNode.value);
            prev = currentNode;
        }
        currentNode = currentNode.next;
        

    }


}
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
linkedList.add(1);
linkedList.add(1);
linkedList.add(3);
linkedList.add(2);

removeDuplicates(linkedList);
console.log(linkedList)


// How would you solve this problem if a temporary buffer is not allowed?
function removeDuplicatesWithoutBuffer(linkedList) {
    let current = linkedList.head;

    while(current) {
        // Remove all future nodes that have the same value
        let runner = current;
        while(runner.next) {
            if (runner.next.value === current.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
}

let linkedList2 = new SinglyLinkedList();

linkedList2.add(1);
linkedList2.add(1);
linkedList2.add(1);
linkedList2.add(3);
linkedList2.add(2);

removeDuplicatesWithoutBuffer(linkedList2);
console.log(linkedList2)