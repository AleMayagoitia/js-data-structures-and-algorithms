/**
 * 
 * Write a JavaScript program to calculate the factorial of a number. Go to the editor
 * In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 x 1  = 120
 */

 function factorial(n) {
     if (n === 0) return 1;

     return n * factorial(n -1);

 }
//  console.log(factorial(5)) // 120

 // Binary search -> [0,2,3,6,7,10,11,12,45,62]

 function binarySearch(arr, target) {
     let result = null;

     let binarySearchHelper = function(arr, target) {
         if(arr.length === 0) return;
         if (arr.length === 1) {
             result = arr[0] === target;
             return;
         }

        let middleIndex = Math.floor(arr.length / 2);
        let middleNumber = arr[middleIndex];

        if (target === middleNumber) {
            result = true;
        } else if (target < middleNumber) {
            // go left
            binarySearchHelper(arr.slice(0, middleIndex),target);
        } else if (target > middleNumber) {
            // go right
            binarySearchHelper(arr.slice(middleIndex),target);
        }
     }
     binarySearchHelper(arr, target);
     return !result ? 'Number was not found' : result;
     
 }
 let arr = [1, 2, 4, 7, 8, 9, 11, 12, 15, 19, 20, 22, 24, 27, 33, 35, 39, 42, 44, 48, 50, 51, 53, 57, 63, 67, 69, 70, 74, 77, 78, 80, 85, 92, 94, 97, 100];
 console.log(binarySearch(arr, 33)) 
 console.log(binarySearch(arr, 100)) 
 console.log(binarySearch(arr, 5)) 
