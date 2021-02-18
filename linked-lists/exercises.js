class SinglyLinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() { return this.size === 0}
    insert(data) {
        if (!this.head) {
            this.head = new SinglyLinkedNode(data);
            this.size++;
            return;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new SinglyLinkedNode(data);
        this.size++;
    }
    remove(element) {
        if (!this.head) {
            return;
        }
        // it's deleting the head
        if (element === this.head.data) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        // it's deleting any other value
        let currentNode = this.head
        let previous = null;
        while(currentNode) {
            if (currentNode.data === element) {
                // remove element
                previous.next = currentNode.next;
                this.size--;
                break;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
    }

}

let singleLinkedList = new SinglyLinkedList();
singleLinkedList.insert(1);
singleLinkedList.insert(2);
singleLinkedList.insert(3);

/******************* 1 ******************/
// Reverse a Singly Linked List

function reverseSingledLinkedList(singleLinkedList) {
    let currentNode = singleLinkedList.head;
    let prev = null;

    while(currentNode) {
        let temp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        if (!temp) {
            break;
        }
        currentNode = temp;
    }
    return currentNode;
}
// console.log('\n reverse list: ',reverseSingledLinkedList(singleLinkedList));

/******************* 2 ******************/
// Remove duplicates of a single linked list
singleLinkedList.insert(3);

function removeDuplicates(singleLinkedList) {
    let set = new Set();
    let currentNode = singleLinkedList.head;

    while(currentNode) {
        if (set.has(currentNode.data)) {
            // remove it
            singleLinkedList.remove(currentNode.data)
        } else {
            set.add(currentNode.data)
        }
        currentNode = currentNode.next;
    }

    
}
console.log('\n before removing',singleLinkedList); // size 4
removeDuplicates(singleLinkedList);
console.log('\n after removing',singleLinkedList); // size 3

