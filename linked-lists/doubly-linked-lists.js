// Doubly Linked Lists

// A double linked list is a bidirectional singly list
// Each node in the doubly linked list has both next and prev pointers

class DoublyLikedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    addAtFront(element) {
        if (this.isEmpty()) {
            this.head = new DoublyLikedListNode(element);
            this.size++;
            this.tail = this.head;
            return;
        }
        let temp = new DoublyLikedListNode(element);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
        this.size++
    }

    addAtEnd(element) {
        if (this.isEmpty()) {
            this.head = new DoublyLikedListNode(element);
            this.size++;
            this.tail = this.head;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        let newNode = new DoublyLikedListNode(element);
        newNode.prev = currentNode;
        currentNode.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    deleteAtHead() {
        if (this.isEmpty()) {
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    deleteAtTail() {
        if (this.isEmpty()) {
            return;
        }
        let currentNode = this.head;
        let previousNode = null;
        while(currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = previousNode;
        previousNode.next = null;
        this.size--;

    }

    find(element) {
        if (this.isEmpty()) {
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

let doubleLinkedList = new DoublyLinkedList();
doubleLinkedList.addAtFront(10);
doubleLinkedList.addAtFront(12);
doubleLinkedList.addAtEnd(11);
console.log(doubleLinkedList)
doubleLinkedList.deleteAtTail()
console.log(doubleLinkedList)
doubleLinkedList.deleteAtHead()
console.log(doubleLinkedList)
console.log(doubleLinkedList.find(10)) // { index: 0, element: 10 }
console.log(doubleLinkedList.find(11)) // not found

