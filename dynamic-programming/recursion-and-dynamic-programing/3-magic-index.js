/**
 * A magic index in an array A[0...n-1] is defined to be the index such as A[i] = i.
 * 
 * Given a sorted array of distinct integers, write a method to find a magic index,
 * if one exists, in array A
 * 
 */
// Brute force
 function getMagicIndex(arr) {
     for(let i = 0; i < arr.length; i++) {
         if (arr[i] === i) {
             return i
         }
     }
     return undefined;
 }
 console.log(getMagicIndex([1,2,3,3.1,4,5]));

 function getMagicIndexFast(arr) {
     let magicIndexHelper = function(arr, start, end) {
         if (end < start) return -1;
         let mid = Math.floor((start + end) / 2);
         if (arr[mid] === mid) {
             return mid;
         } else if (arr[mid] < mid) {
             // go left
             return magicIndexHelper(arr, start, mid - 1);
         } else {
             // go right
            return magicIndexHelper(arr, mid + 1, end);
         }
     }
     return magicIndexHelper(arr, 0 , arr.length - 1);
 }
 console.log(getMagicIndexFast([1,2,3,3.1,4,5]));

 // follow up: What if the elements are not distinct ? 

 