/**
 * Write a function canSum(targetSum, numbers) that
 * takes in a targetSum and an array of numbers as arguments
 * 
 * The function should return a boolean indicating whether or not it
 * is possible to generate the targetSum using numbers from the array
 * 
 * You may use an element of the array as many times as needed
 * 
 * You may assume that all inputs numbers are positive numbers
 */

 // O(m*n) time
 // O(m) space
 function canSum(targetSum, numbers) {
     // as I need to return a boolean, I will initialize with a boolean
     let array = new Array(targetSum + 1 ).fill(false);
     // zero can be generated without any number, so by default it is true
     array[0] = true;

     for(let i =0; i <= array.length; i++) {
         for(let j = 0; j <= numbers.length; j++) {
            if(array[i] && array[i + numbers[j]] !== undefined) {
                array[i + numbers[j]] = true;
            }
         }
     }
     console.log(array, array[targetSum])
     return array[targetSum];
 }
 canSum(7, [5,3,4]);