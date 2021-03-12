/*
    You are given two arrays A and B. Where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order.
*/
// Approach 1: Use a heap
// works for unsorted and sorted arrays :)
class MinHeap {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items[this.items.length] = item; // O(1)
        this.bubbleUp(); // O(n)
    }
    // for bubbling up, swap the new element with its parent if the parent is greater than the new element
    bubbleUp() {
        let index = this.items.length - 1;
        while(this.parent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index)
        }
    }
    parent(index) {
        return this.items[this.parentIndex(index)]
    }
    parentIndex(index) {
        // (N-1) / 2
        return Math.floor((index - 1) / 2);
    }
    swap(index1, index2) {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }
    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.bubbleDown();
        return item;
    }
    bubbleDown() {
        let index = 0;
        while(this.leftChild(index) && (this.leftChild(index) < this.items[index]) || this.rightChild(index) < this.items[index]) {
            let smallerIndex = this.leftChildIndex(index);
            if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
                // if right is smaller, right swaps
                smallerIndex = this.rightChildIndex(index);
            }
            this.swap(smallerIndex, index);
            index = smallerIndex;
        }
    }
    leftChild(index) {
        return this.items[this.leftChildIndex(index)]

    }
    rightChild(index) {
        return this.items[this.rightChildIndex(index)]

    }
    leftChildIndex(index) {
        // (N*2) + 1
        return (index * 2) + 1;
    }
    rightChildIndex(index) {
        // (N*2) + 2
        return (index * 2) + 2;
    }
}
function mergeArrays(A, B) {
    let minHeap = new MinHeap();
    let mergedArray = [];
    for(let i = 0; i < A.length; i ++) {
        minHeap.add(A[i]) // O(log2(A))
    }
    // O(B)
    for(let i = 0; i < B.length; i ++) {
        minHeap.add(B[i]) // O(log2(A))
    }

    // O(nlog2(n))
    while(minHeap.items.length) {
        mergedArray.push(minHeap.poll())
    }
    return mergedArray;
}
console.log(mergeArrays([8,2,7,6,1,65,0,3], [4,65,3,64,66,56,5])) // [ 0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 56, 64, 65, 65, 66 ]

// Approach 2
// just works if arrays were already sorted..
function merge(a, b, countA, countB) {
    let indexedMerged = countB + countA - 1; // last location of merged array
    let indexA = countA - 1;
    let indexB = countB - 1;
    // merge a and b, starting from the last element in each
    while(indexB >= 0) {
        if (indexA >= 0 && a[indexA] > b[indexB]) {
            a[indexedMerged] = a[indexA]; // copy alement
            indexA--;
        } else {
            a[indexedMerged] = b[indexB]; // copy element
            indexB--;
        }
        indexedMerged--; // move indices
    }
    return a;
}
console.log(merge([1,5,6,7,8,11], [2,3,4,9,10], 6, 5)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
