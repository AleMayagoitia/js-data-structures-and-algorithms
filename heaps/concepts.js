// Heaps
// Is a data structure that return the highest or lowest element in O(1)

// A heap is a type of tree-like data structure in which the parent is: 
// - bigger than its children (if max-heap) 
// - smaller than its children (if min-heap)
// this property makes heap  useful for sorting

// Heaps use an array to store data instead of having pointers to their children
// A heap node's positions (indices) in the array can be calculated easily

// Since a heap uses an array to store the data, the indices
// of the array define the order/height of each element

// Binary Heaps
// A binary heap can be built by placing the first array element as the root and then filling each left and right element in order

// There are two types of binary heaps
// - max heap : the root node is the highest value and each node's value is greater than its children
// - min heap : the root node is the lowest value and each node's value is lower than its children

// Heaps can store any values of type: strings, integers and even classes

// **** Binary Heap Array Index Structure
// For a binary heap, an array is used to represent the heap
// by using the following indices where N is the index of the node:

/**
 *  Node       |   Index
 * ------------|--------------
 * (itself)    |     N
 * parent      |    (N-1) / 2
 * left-child  |    (N*2) + 1
 * right-child |    (N*2) + 2
 * 
 */

 // Heap Sort
// To get a sorted array, simply call .pop()
// on the heap until it's empty and store the popped objects
// time complexity of heap sort is O(nlog2(n)) (like merge sort and quick sort)

// Heaps
// When elements are added to a heap, the structure should remain
// This requires elements to swap and bubble up to the top of the heap
// Precolation takes O(log2(n))

// to implement the bubbling up of precolation, we swap until
// the min-heap structure is formed with the minimum element on the top
// for bubbling down, swap the top element with one of its children if the child is smaller
// for bubbling up, swap the new element with its parent if the parent is greater than the new element
