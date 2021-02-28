// Heaps
// When elements are added to a heap, the structure should remain
// This requires elements to swap and bubble up to the top of the heap
// Precolation takes O(log2(n))

// to implement the bubbling up of precolation, we swap until
// the max-heap structure is formed with the maximum element on the top
// for bubbling down, swap the top element with one of its children if the child is greater
// for bubbling up, swap the new element with its parent if the parent is smaller than the new element

class MaxHeap {
    constructor() {
        this.items = [];
    }
    swap(index1, index2) {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }
    parentIndex(index) {
        // (N-1) / 2
        return Math.floor((index - 1) / 2);
    }
    leftChildIndex(index) {
        // (N*2) + 1
        return (index * 2) + 1;
    }
    rightChildIndex(index) {
        // (N*2) + 2
        return (index * 2) + 2;
    }
    parent(index) {
        return this.items[this.parentIndex(index)]
    }
    leftChild(index) {
        return this.items[this.leftChildIndex(index)]

    }
    rightChild(index) {
        return this.items[this.rightChildIndex(index)]

    }
    peek() {
        return this.items[0]
    }
    size() {
        return this.items.length;
    }
    // for bubbling down, swap the top element with one of its children if the child is greater
    bubbleDown() {
        let index = 0;
        while(this.leftChild(index) && (this.leftChild(index) > this.items[index]) || this.rightChild(index) > this.items[index]) {
            let biggerIndex = this.leftChildIndex(index);
            if (this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]) {
                // if right is smaller, right swaps
                biggerIndex = this.rightChildIndex(index);
            }
            this.swap(biggerIndex, index);
            index = biggerIndex;
        }
    }
    // for bubbling up, swap the new element with its parent if the parent is smaller than the new element
    bubbleUp() {
        let index = this.items.length - 1;
        while(this.parent(index) && this.parent(index) < this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index)
        }
    }
    add(item) {
        this.items[this.items.length] = item;
        this.bubbleUp();
    }
    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
    }
}

let mh1 = new MaxHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);

// Heap sort descending
console.log(mh1.poll())
console.log(mh1.poll())
console.log(mh1.poll())
console.log(mh1.poll())
console.log(mh1.poll())