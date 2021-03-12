/**
 * Given a sorted array of n integers that has been rotated an unknown number of times
 * write code to find an element in the array. You may assume that the array was orinally sorted in increasing order
 */
console.log(searchRotates([15,16,19,20,25,1,3,4,5,7,10,14], 10)); // 10
console.log(searchRotates([15,16,19,20,25,1,3,4,5,7,10,14], 15)); // 0
console.log(searchRotates([15,16,19,20,25,1,3,4,5,7,10,14], 7)); // 9

 function searchRotates(arr, target) {
     let searchHelper = function(arr, left, right, target) {
         if (right < left) return -1; // Not found
         let middle = Math.floor((left + right) / 2);
         if (target === arr[middle]) return middle;

         if (arr[left] < arr[middle]) { // Left is normally ordered
            if (arr[left] <= target && target < arr[middle]) { // target is within left range
                return searchHelper(arr, left, middle - 1, target);
            } else {
                return searchHelper(arr, middle +1, right, target); // search right
            }
         } else if (arr[middle] < arr[right]) { // Right is normally ordered
            if (arr[middle] < target && target <= arr[right]) { // right is in right range

                return searchHelper(arr, middle + 1, right, target);
            } else {
                return searchHelper(arr, left, middle - 1, target); // seach left

            }

         } else {
             let location = -1;
             if (arr[left] === arr[middle]) {
                 location = searchHelper(arr, middle + 1, right, target); // search right
             }
         }
         if (location == -1 && arr[middle] === arr[right]) {
             location  = searchHelper(arr, left, middle - 1, target); // search left
         }
         return location;
     }
     return searchHelper(arr, 0, arr.length - 1, target);
 }
