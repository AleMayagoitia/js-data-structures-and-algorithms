/**
 * Implement a Queue class which implements a queue with two stacks
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

 class TwoStackQueue {
     constructor() {
        this.inbox = new Stack();
        this.outbox = new Stack();
     }
     enqueue(item) {
         this.inbox.push(item)
     }
     dequeue() {
         if (this.outbox.isEmpty()) {
             while(!this.inbox.isEmpty()) {
                 this.outbox.push(this.inbox.pop())
             }
         }
         return this.outbox.pop();
     }
 }

 let queue = new TwoStackQueue();
 queue.enqueue(1);
 queue.enqueue(2);
 queue.enqueue(3);
 console.log(queue.dequeue()); // 1
 console.log(queue.dequeue()); // 2
 console.log(queue.dequeue()); // 3