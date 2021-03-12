/**
 * You are given an array-like data structure Listy which lacks a size method.
 * It does, however, have an elementAt(i) method that return the element at index i in O(1) time
 * 
 * If i is beyond the bounds of the data structure, it returns -1
 * (For this reason, the data structure only supports positive integers)
 * 
 * Given a Listy which contains sorted, positive integers, find the index at which an element x occurs.
 * If x occurs multiple times, you may return any index.
 */

 // if the array is not sorted or rotated
 function findIndex(listy, n) {
    let index = 0;
    while (listy.elementAt(index)) {
        if (listy.elementAt(index) === n) {
            return index;
        }
        index++;

    }
    return -1;
}

class Listy {
    constructor(items) {
        this.items = items
    }
    elementAt(i) {
        return this.items[i]
    }
}

let listy = new Listy([5,87,4,6,1,3,4,6,9,4,63,6,0]);
console.log(findIndex(listy, 87)) // 1
console.log(findIndex(listy, 9)) // 8
console.log(findIndex(listy, 4)) // 2
console.log(findIndex(listy, 102)) // 2

// Figure out the length and then do a binary search
// only works on sorted
function search(list, value) {
    let index = 1;
    while(list.elementAt(index) && list.elementAt(index) < value) {
        index *=2;
    }
    return binarySearch(list, value, index/2, index)
}
function binarySearch(list, value, low, high) {
    let mid;
    while(low <= high) {
        mid = Math.floor((low + high) / 2);
        let middle = list.elementAt(mid);
        if (middle > value || !middle) {
            high = mid - 1;
        } else if (middle < value) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
let listy2 = new Listy([0,1,2,3,4,5,6,7,8,9,87]);

console.log(search(listy2, 87)) // 10
console.log(search(listy2, 9)) // 9
console.log(search(listy2, 4)) // 4
console.log(search(listy2, 102)) // -1