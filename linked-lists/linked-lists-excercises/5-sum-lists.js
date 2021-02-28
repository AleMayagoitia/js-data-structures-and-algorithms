/**
 * You have two numbers represented by a linked lisk, where
 * each node contains a single digit. The digits are stored in reverse order
 * 
 * such that the 1's digit is at the head of the list 
 * 
 * Write a function that adds the two numbers and return the sum as a linked list
 * 
 * you are not allowed to cheat and just convert the linked list into an integer
 * 
 * i.e.
 * 7->1->6 + 5->9->2  617 + 295 = 912
 * 
 * 7 + 5 + 0 = 1(2)
 * 1 + 9 + 1 = 1(1)
 * 6 + 2 + 1 = 0(9)
 * 
 */

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

let linkedListA = new SinglyLinkedList();

linkedListA.add(7);
linkedListA.add(1);
linkedListA.add(6);

let linkedListB = new SinglyLinkedList();

linkedListB.add(5);
linkedListB.add(9);
linkedListB.add(2);

function sumLinkedLists(linkedListA, linkedListB) {

    let currentNodeA = linkedListA.head;
    let currentNodeB = linkedListB.head;

    let sumLinkedList = new SinglyLinkedList();
    let result = [];

    let offset = 0;
    while(currentNodeA || currentNodeB || offset > 0) {
        const currentNodeAValue = currentNodeA ? currentNodeA.value : 0;
        const currentNodeBValue = currentNodeB ? currentNodeB.value : 0;
        let sum = `${currentNodeAValue + currentNodeBValue + offset}`; // if sum is greater than 10, we need to pass the first digit to the next sum and take it into account
        // get the last digit of sum
        let lastDigit = sum.charAt(sum.length - 1);
        result.push(lastDigit);
        sumLinkedList.add(lastDigit);
        // pass the other digits to the next sum
        offset = +sum.slice(0, sum.length - 1) || 0;
        currentNodeA = currentNodeA ? currentNodeA.next : undefined;
        currentNodeB = currentNodeB ? currentNodeB.next : undefined;

    }
    console.log(result,offset)
    return sumLinkedList;
}

sumLinkedLists(linkedListA, linkedListB); // [ '2', '1', '9' ]

let linkedListOne = new SinglyLinkedList();
linkedListOne.add(7);
linkedListOne.add(1);
linkedListOne.add(6);
linkedListOne.add(1);
linkedListOne.add(2);

let linkedListTwo = new SinglyLinkedList();
linkedListTwo.add(5);
linkedListTwo.add(9);
linkedListTwo.add(2);

sumLinkedLists(linkedListOne, linkedListTwo); // [ '2', '1', '9', '1', '2' ]

// Follow up, suppose the digits are stored in forward order. Repeat the above problem
// i.e. 6 -> 1 -> 7 + 2 -> 9 -> 5

let linkedListForwardA = new SinglyLinkedList();
linkedListForwardA.add(6);
linkedListForwardA.add(1);
linkedListForwardA.add(7);

let linkedListForwardB = new SinglyLinkedList();

linkedListForwardB.add(2);
linkedListForwardB.add(9);
linkedListForwardB.add(5);

function sumLinkedListsForward(linkedListA, linkedListB) { 
    let result = [];
    let offset = 0;
    let sumLinkedList = new SinglyLinkedList();
    const sumHelper = function(currentNodeA, currentNodeB) {
        if (currentNodeA.next && currentNodeB.next) {
            currentNodeA.next && sumHelper(currentNodeA.next, currentNodeB.next);
        } else if (currentNodeA.next) {
            currentNodeA.next && sumHelper(currentNodeA.next, currentNodeB);
        } else if (currentNodeB.next) {
            currentNodeB.next && sumHelper(currentNodeA, currentNodeB.next);
        }

        let sum = `${currentNodeA.value + currentNodeB.value + offset}`;
        let lastDigit = sum.charAt(sum.length - 1);
        // add to the head of the linked list
        result.unshift(lastDigit);
        if (!sumLinkedList.head) {
            sumLinkedList.head = new LinkedListNode(lastDigit);
        } else {
            let node = new LinkedListNode(lastDigit);
            node.next = sumLinkedList.head;
            sumLinkedList.head = node;

        }
        offset = +sum.slice(0, sum.length - 1) || 0;
    }
    sumHelper(linkedListA.head, linkedListB.head);
    return sumLinkedList;

}

sumLinkedListsForward(linkedListForwardA, linkedListForwardB); // ['9', '1', '2' ]
