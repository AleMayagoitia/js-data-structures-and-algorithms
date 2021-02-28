/**
 * Implement a function to check if a linked list is a palindrome
 * 
 * aman a panama
 * 
 */
function isPalindrome(linkedList) {
    // create a reversed version of the linked List
    // clone so that the original doesnt get affected
    let reversedLinkedList = JSON.parse(JSON.stringify(linkedList));
    reversedLinkedList = reverse(reversedLinkedList);
    
    // iterate and compare values of both lists
    let currentNode = linkedList.head;
    let currentNodeRev = reversedLinkedList;
    while(currentNode) {
        if (currentNode.value !== currentNodeRev.value) {
            return false;
        }
        currentNode = currentNode.next;
        currentNodeRev = currentNodeRev.next;
    }
    return true;
}

function reverse(linkedList) {
    let currentNode = linkedList.head;
    let prev = null;
    let temp = null;

    while(currentNode) {
        // save next before we overrride node.next
        temp = currentNode.next;

        // reverse pointer
        currentNode.next = prev;

        // step forward in the list
        prev = currentNode;
        currentNode = temp
    }
    return prev;
}


class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
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

let linkedListPalindrome = new SinglyLinkedList();
// aman a panama
linkedListPalindrome.add('a');
linkedListPalindrome.add('m');
linkedListPalindrome.add('a');
linkedListPalindrome.add('n');
linkedListPalindrome.add('a');
linkedListPalindrome.add('p');
linkedListPalindrome.add('a');
linkedListPalindrome.add('n');
linkedListPalindrome.add('a');
linkedListPalindrome.add('m');
linkedListPalindrome.add('a');

console.log(isPalindrome(linkedListPalindrome)); // true

let linkedListNOPalindrome = new SinglyLinkedList();
// aman k panama
linkedListNOPalindrome.add('a');
linkedListNOPalindrome.add('m');
linkedListNOPalindrome.add('a');
linkedListNOPalindrome.add('n');
linkedListNOPalindrome.add('k');
linkedListNOPalindrome.add('p');
linkedListNOPalindrome.add('a');
linkedListNOPalindrome.add('n');
linkedListNOPalindrome.add('a');
linkedListNOPalindrome.add('m');
linkedListNOPalindrome.add('a');

console.log(isPalindrome(linkedListNOPalindrome)); // false