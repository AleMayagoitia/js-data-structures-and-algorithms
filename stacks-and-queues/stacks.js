// Stacks

// A Stack is a data structure in which only the last inserted element can be removed
// Last In, First Out LIFO

// Stacks are fast, lookup, deletion and insertion happens at O(1)
// Stacks should be used over arrays when you need to work with in the LIFO
// where the algorithm needs to access only the last-added element

// Stacks limitation is that they can't access the non-last added element directly like arrays
// and accessing deeper elements requires to remove the elements from the stack
class Stack {
    constructor(array = []) {
        this.array = array;
    }
    getBuffer() {
        return this.array.slice();
    }
    isEmpty() {
        return this.array.length === 0;
    }
    // Peek returns the last added element without removinf it 
    peek() {
        if (this.isEmpty()) return;
        return this.array[this.array.length - 1];
    }
    // Add
    push(element) {
        this.array.push(element);
    }
    // Delete
    pop(){
        if (this.isEmpty()) return;
        return this.array.pop();
    }
    
}

let stack = new Stack();
console.log(stack.peek()); // undefined
stack.push(10);
console.log(stack.peek()); // 10
stack.push(5);
console.log(stack.peek()); // 5
stack.pop();
console.log(stack.peek()); // 10

// Access specific element in the stack, but it will need to pop a couple of times
function stackAccessNthTopNode(stack, n) {
    let bufferArray = stack.getBuffer();
    if (n <= 0) throw 'error'

    let bufferStack = new Stack(bufferArray);

    while(--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}

let stackTwo = new Stack([1,2,3]);
console.log(stackAccessNthTopNode(stackTwo, 2)) // 2

// Search
function stackSearch(stack, element) {
    let bufferArray = stack.getBuffer();
    let bufferStack = new Stack(bufferArray);

    while(!bufferStack.isEmpty()) {
        if (bufferStack.pop() === element) {
            return true;
        }
    }
    return false;
}

console.log(stackSearch(stackTwo, 2)) // true
console.log(stackSearch(stackTwo, 5)) // false

