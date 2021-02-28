// Write code to partition a linked list around a value x
// such that all nodes less than x come before all nodes greater than or equal x
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
function partition(linkedList, x) {
    let singleListLeft = new SinglyLinkedList();
    let singleListRight = new SinglyLinkedList();

    let current = linkedList.head;
    while(current) {
        if (current.value < x) {
            singleListLeft.add(current.value);
        } else {
            singleListRight.add(current.value);
        }
        current = current.next;
    }
    return {singleListLeft, singleListRight};


}


let linkedList = new SinglyLinkedList();

linkedList.add(3);
linkedList.add(5);
linkedList.add(8);
linkedList.add(5);
linkedList.add(10);
linkedList.add(2);

console.log(partition(linkedList, 5))