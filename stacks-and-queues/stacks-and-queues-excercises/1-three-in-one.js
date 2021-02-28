/**
 * Describe how you could use a single array to implement three stacks
 * 
 * Stacks have methods,
 * peek, push and pop
 */

 class ArrayStack {
     constructor(numberOfStacks = 0) {
         this.values = Array(numberOfStacks).fill().map(() => []);
     }
     push(stackIndex, value) {
         if (!this.values[stackIndex]) {
             return 'This stack index does not exist in the current array of stacks'
         }
         this.values[stackIndex].push(value);
     }
     pop(stackIndex) {
        if (!this.values[stackIndex]) {
            return 'This stack index does not exist in the current array of stacks'
        }
        return this.values[stackIndex].pop()
     }
     peek(stackIndex) {
        if (!this.values[stackIndex]) {
            return 'This stack index does not exist in the current array of stacks'
        }
        let length = this.values[stackIndex].length
        return this.values[stackIndex][length - 1];
     }
 }
 let arrayStack = new ArrayStack(3);
 console.log(arrayStack.values);

 arrayStack.push(0 , 'First Value stack 0 ');
 arrayStack.push(1 , 'First Value stack 1 ');
 arrayStack.push(2 , 'First Value stack 2 ');
 arrayStack.push(0 , 'Last Value stack 0 ');
 arrayStack.push(1 , 'Last Value stack 1 ');
 arrayStack.push(2 , 'Last Value stack 2 ');

 console.log(arrayStack.peek(0)); // Last Value stack 0 
 console.log(arrayStack.peek(1)); // Last Value stack 1 
 console.log(arrayStack.peek(2)); // Last Value stack 2
 
 arrayStack.pop(0);
 arrayStack.pop(1);
 arrayStack.pop(2);

 console.log(arrayStack.peek(0)); // First Value stack 0 
 console.log(arrayStack.peek(1)); // First Value stack 1 
 console.log(arrayStack.peek(2)); // First Value stack 2
 