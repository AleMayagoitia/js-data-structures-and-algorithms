// Singly Linked Lists

// This is a data structure where each node has a reference to the next node
// A node in a singly linked list has te following properties
// - data : value of the node
// - next : pointer to the next node

class SinglyLinkedListNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// the start of a linked list is the head.
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    // O(n)
    insertAtEnd(element) {
        if (!this.head) {
            this.head = new SinglyLinkedListNode(element);
            return;
        }
        let currentNode = this.head
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new SinglyLinkedListNode(element);
        this.size++;
    }
    // O(1)
    insertAtFront(element) {
        if (!this.head) {
            this.head = new SinglyLinkedListNode(element);
            return;
        }
        let temp = this.head;
        this.head =  new SinglyLinkedListNode(element);;
        this.head.next = temp;
        this.size++;
    }
    
    // O(n)
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

    // O(n)
    find(element) {
        if (!this.head) {
            return;
        }
        let index = 0;
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.data === element) {
                return {index, element};
            }
            currentNode = currentNode.next;
            index++;
        }
        return 'not found';
    }
}

let singleLinkedList = new SinglyLinkedList();
singleLinkedList.insertAtEnd(1);
singleLinkedList.insertAtEnd(3);
singleLinkedList.insertAtEnd(2);

console.log(singleLinkedList)

singleLinkedList.insertAtFront(0);
console.log(singleLinkedList)
singleLinkedList.remove(3);
console.log(singleLinkedList)

console.log(singleLinkedList.find(3)) // not found
console.log(singleLinkedList.find(2)) // { index: 2, element: 2 }

