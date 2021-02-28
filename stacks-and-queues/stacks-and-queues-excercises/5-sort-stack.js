/**
 * Write a program to sort a stack such that the smallest items are on the top
 * 
 * You can use an additional temporary stack, but you may not copy the elements into any other
 * data structure 
 * 
 * The stack supports the following operations: push, pop, peek, and isEmpty
 */
class Stack {
    constructor() {
        this.values = [];
    }
    pop() {
        // O(1)
        return this.values.pop();
    }
    push(item) {
        this.values.push(item);
    }
    peek() {
        return this.values[this.values.length - 1];
    }
    isEmpty() {
        return this.values.length === 0;
    }
    getLength() {
        return this.values.length;
    }
    
}

class SortedStack {
    constructor() {
        this.values = [];
    }
    pop() {
        // O(1)
        return this.values.pop();
    }
    push(item) {
        
        if (this.getLength() === 0 || item > this.peek()) {
            this.values.push(item);
            return;
        }

        let tempStack = new Stack();
        let val = this.values.pop();
        tempStack.push(val);

        
        while (val > item) {
            val = this.values.pop();
            if (val) {
                tempStack.push(val);
            }
        }
        // here val is less or equal to the new item
        this.values.push(item);

        // get back all the values we saved into the temp stack
        while(!tempStack.isEmpty()) {
            this.values.push(tempStack.pop()); 
        }

    }
    peek() {
        return this.values[this.values.length - 1];
    }
    isEmpty() {
        return this.values.length === 0;
    }
    getLength() {
        return this.values.length;
    }
    
}
let stack = new SortedStack();
stack.push(5);
stack.push(6);
stack.push(2);
stack.push(9);
stack.push(1);

console.log(stack.values); // [ 1, 2, 5, 6, 9 ]