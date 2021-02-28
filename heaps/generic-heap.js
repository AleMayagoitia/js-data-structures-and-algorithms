// Generic Heap structure

class Heap {
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
}