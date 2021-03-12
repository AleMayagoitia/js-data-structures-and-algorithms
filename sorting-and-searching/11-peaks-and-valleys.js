/**
 * In an array of integers, a 'peak' is an element which is grater than or equal
 * to the adjacent integers and a 'valley' is an element which is less than or equal to the adjacent integers
 * 
 * i.e.
 * in the array [5,8,6,2,3,4,6]
 * [8,6] are peaks
 * [5,2] are valleys
 * 
 * Given an array of integers, sort the array into an alternating sequence of peaks and valleys
 * 
 * i.e.
 * [5,3,1,2,3] -> [5,1,3,2,3]
 */

// Do a normal sort and then fix the array
// then swap each pair
function sortValleyPeak(arr) {
    let sorted = arr.sort();
    for(let i = 1; i < sorted.length; i+=2) {
        swap(sorted, i-1, i);
    }
}

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}


// optimal -> dont sort O(n)
// for each element we look to the adjacent elements
function sortValleyPeakBetter(arr) {
    for(let i = 1; i < arr.length; i+=2) {
        let biggestIndex = maxIndex(arr, i - 1, i , i + 1);
        if (i!= biggestIndex) {
            swap(arr, i, biggestIndex);
        }
    }
}

function maxIndex(arr, a, b, c) {
    let len = arr.length;
    let aValue = a >= 0 && a < len ? arr[a] : Number.MIN_VALUE;
    let bValue = b >= 0 && b < len ? arr[b] : Number.MIN_VALUE;
    let cValue = c >= 0 && c < len ? arr[c] : Number.MIN_VALUE;

    let max = Math.max(aValue, Math.max(bValue, cValue));
    if (aValue === max) return a;
    else if (bValue === max) return b;
    else if (cValue === max) return c;
}