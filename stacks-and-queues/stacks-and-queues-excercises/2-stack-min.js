/**
 * How would you design a stack which, in addition to push and pop, 
 * has a function min which return the minimum element?
 * 
 * push, pop and min should operate in O(1) time
 */

 class Stack {
     constructor() {
         this.values = [];
         this.min = null;
     }
     pop() {
         // O(1)
         let deletedValue = this.values.pop();
         if (deletedValue === this.min) {
             this.min = Math.min.apply(null, this.values)
         }

         return deletedValue;
     }
     push(item) {
         if (!this.min || item < this.min ) {
             this.min = item;
         }
         this.values.push(item);
     }
     peek() {
         return this.values[this.values.length - 1];
     }
     isEmpty() {
         return this.values.length === 0;
     }
     getMin() {
         return this.min;
     }
     
 }

 let stack = new Stack();
 stack.push(5);
 stack.push(6);
 stack.push(2);
 stack.push(3);
 stack.push(1);


 console.log(stack.peek()); // 1
 console.log(stack.getMin()); // 1
 stack.pop();
 console.log(stack.peek()); // 3
 console.log(stack.getMin()); // 2
