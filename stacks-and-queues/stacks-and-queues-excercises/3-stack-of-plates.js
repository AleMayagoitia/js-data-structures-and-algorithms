/**
 * Imagine a literal stack of plates. If the stack gets too high,
 * it might topple. Therefore, in the real life, we would likely start a new stack
 * when the previous stack exceeds some threshold.
 * 
 * Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of
 * several stacks and should create a new stack once the previous one exceeds capacity
 * 
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack 
 * (that is, pop() should return the same values as it would if there were just a single stack)
 */

 // follow up -  implement a pop At with the index of a specific subStack

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

class SetOfStacks {
    constructor(capacity = 5) {
        this.setOfStacks = new Map();
        this.setOfStacks.set(1, new Stack());
        /*** {
            1: new Stack(),
            2: new Stack(),
            3: new Stack(),
         } **/
        this.currentStack = 1;
        this.capacity = capacity;

    }
    pop() {
        if(this.setOfStacks.get(this.currentStack).isEmpty() && this.currentStack === 1) {
            return 'there are no values to be removed.'
        } else if (this.setOfStacks.get(this.currentStack).isEmpty()) {
            this.currentStack--;
            this.pop();
            return;
        }
        let deleted = this.setOfStacks.get(this.currentStack).pop();
        //  check if current stack got empty after removal
        // if so, delete stack IF it's not the first stack added
        if (this.setOfStacks.get(this.currentStack).isEmpty() && this.currentStack > 1) {
            this.setOfStacks.delete(this.currentStack);
            this.currentStack--;

        }
        return deleted;

    }
    push(item) {
        if (this.setOfStacks.get(this.currentStack).getLength() === this.capacity) {
            // we need to create a new stack.
            this.currentStack++;
            this.setOfStacks.set(this.currentStack, new Stack());
        }
        this.setOfStacks.get(this.currentStack).push(item);
    }

    popAt(index) {
        if(!!this.setOfStacks.get(index) || !this.setOfStacks.get(index).getLength()) {
            return 'requested stack doesnt exist or is empty'; 
        }

        this.setOfStacks.get(index).pop();
    }
}

let setOfStacks = new SetOfStacks(3);
setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);

// console.log(setOfStacks.setOfStacks);
/**
 * Map {
  1 => Stack { values: [ 1, 2, 3 ] },
  2 => Stack { values: [ 1, 2, 3 ] },
  3 => Stack { values: [ 1, 2, 3 ] } }
 */

setOfStacks.pop();
// console.log(setOfStacks.setOfStacks);
/**
 * Map {
  1 => Stack { values: [ 1, 2, 3 ] },
  2 => Stack { values: [ 1, 2, 3 ] },
  3 => Stack { values: [ 1, 2 ] } }
 */

setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
// console.log(setOfStacks.setOfStacks);
/**
 * 1 => Stack { values: [ 1, 2, 3 ] },
  2 => Stack { values: [ 1, 2 ] } }
 */

// setOfStacks.pop();
// setOfStacks.pop();
// setOfStacks.pop();
// setOfStacks.pop();
// console.log(setOfStacks.setOfStacks);

// // Map { 1 => Stack { values: [ 1 ] } }
// setOfStacks.pop();
// console.log(setOfStacks.setOfStacks);
// // Map { 1 => Stack { values: [] } }
