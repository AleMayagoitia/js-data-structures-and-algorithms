// Queues

// A queue is a FIFO (first in, first out) data structure, meaning you can only remove the first added element
// Queues should only be used over arrays when you need to work with data in the FIFO form where the algorithm
// only needs to access the first added element

class Queue {
    constructor(array = []) {
        this.array = array;
    }
    getBuffer() {
        return this.array.slice();
    }
    isEmpty() {
        return this.array.length === 0;
    }
    peek() {
        return this.array[0];
    }
    enqueue(element) {
        this.array.push(element);
    }
    // O(n)
    dequeue() {
        return this.array.shift();
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Access
// O(n)
function queueAccessNthTopNode(queue, n) {
    let bufferArray = queue.getBuffer();
    if (n <= 0) throw 'error'
    let bufferQueue = new Queue(bufferArray);

    while(--n !== 0) {
        bufferQueue.dequeue();
    }
    return bufferQueue.dequeue();
}
console.log(queueAccessNthTopNode(queue, 2)) // 2
console.log(queueAccessNthTopNode(queue, 5)) // undefined

// Search
// O(n)
function queueSearch(queue, n) {
    let bufferArray = queue.getBuffer();
    let bufferQueue = new Queue(bufferArray);

    while(!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() === n) {
            return true
        }
    }
    return false;
}

console.log(queueSearch(queue, 1)) // true
console.log(queueSearch(queue, 5)) // false