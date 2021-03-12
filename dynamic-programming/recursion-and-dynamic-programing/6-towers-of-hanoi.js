/**
 * In the classic problem of towers of Hanoi, you have 3 towers and N disks of different sizes
 * which can slide into any tower. The puzzle starts with disks sorted in ascending order of size 
 * from the top to bottom (each disks sits on top of an even larger one)
 * 
 * You have the following contraints:
 * 
 * 1 - only one disk can be moved at a time
 * 2 - a disk is slid off the top of one tower onto another tower
 * 3 - A disk cannot be placed on top of a smaller disk
 * 
 * Write a program to move the disks from the first tower to the last using stacks
 */

 class Stack {
     constructor() {
         this.values = [];
     }
     // last in first out
     pop() {
        return this.values.pop()
     }
     push(value) {
        this.values.push(value)
     }
     peek() {
         return this.values[this.values.length - 1]
     }
 }

 // thus approach assumes the original numbers will always be in order
 function towersOfHanoi(mainStack) {
     let auxStack = new Stack();
     let secondAuxStack = new Stack();
     let lastPushedStack = null;

     let towerOfHanoiHelper = function(value) {
         if (!value) return;
         if (auxStack.values.length === 0) {
            auxStack.push(value);
            lastPushedStack = 0;
         } 
         if (secondAuxStack.values.length === 0 && auxStack.values.length > 1) {
            secondAuxStack.push(value);
            lastPushedStack = 1;
         }
         // no empty stacks... shift them
        if (lastPushedStack === 0) {
             // push all auxStack into secondAuxStack
             let current = auxStack.pop();
             while(current) {
                secondAuxStack.push(current);
                current = auxStack.pop();
             }

         } else {
             // push all secondAuxStack into auxStack
             let current = secondAuxStack.pop();
             while(current) {
                auxStack.push(current);
                current = secondAuxStack.pop();
             }

         }
         towerOfHanoiHelper(mainStack.pop())
    }
    towerOfHanoiHelper(mainStack.pop());
    return secondAuxStack.values.length ? secondAuxStack.values : auxStack.values;

 }

 let mainStack = new Stack();
 mainStack.push(5);
 mainStack.push(4);
 mainStack.push(3);
 mainStack.push(2);
 mainStack.push(1);
 console.log('before ', mainStack.values);    // [ 5, 4, 3, 2, 1 ]
console.log('after ',towersOfHanoi(mainStack)); //  [ 1, 2, 3, 4, 5 ]


let mainStack2 = new Stack();
mainStack2.push(55);
mainStack2.push(56);
mainStack2.push(54);
mainStack2.push(55);
mainStack2.push(53);
mainStack2.push(45);
mainStack2.push(35);
mainStack2.push(25);
mainStack2.push(15);
mainStack2.push(10);
mainStack2.push(11);
mainStack2.push(5);
mainStack2.push(5);
mainStack2.push(4);
mainStack2.push(3);
mainStack2.push(2);
mainStack2.push(1);

console.log('before ', mainStack2.values);    //  [ 55, 56, 54, 55, 53, 45, 35, 25, 15, 10, 11, 5, 5, 4, 3, 2, 1 ]
console.log('after ',towersOfHanoi(mainStack2)); //  [ 1, 2, 3, 4, 5, 5, 11, 10, 15, 25, 35, 45, 53, 55, 54, 56, 55 ]


class Tower {
    constructor() {
        disks = new Stack();
    }
    add(d) {
        if (disks.values.length !== 0 && disks.peek() <= d) {
            console.log('Error placing disk ', d);
        } else {
            disks.push();
        }
    }
    moveTopTo(t) {
        let top = disks.pop();
        t.add(top);
    }
    moveDisks(quantity, destination, buffer) {
        if (quantity <= 0) return;

        this.moveDisks(quantity -1, buffer, destination);
        this.moveTopTo(destination);
        buffer.moveDisks(quantity - 1, destination, this)
    }
}