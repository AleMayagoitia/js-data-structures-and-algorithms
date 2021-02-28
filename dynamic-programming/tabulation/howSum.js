/**
 * Write a function howSum(targetSum, numbers) that take in a
 * targetSum and an array of numbers as arguments
 * 
 * The function should return an array containing any combination of
 * elements that add upp to exactly the targetSum
 * 
 * If there is no combination that adds up to the targetSum, then return null.
 * 
 * It there are multiple combinations possible, you may run any single one
 */

function howSum(targetSum, numbers) {
    // as I need to return a boolean, I will initialize with a boolean
    let array = new Array(targetSum + 1 ).fill(null);
    // zero can be generated without any number, so by default it is true
    array[0] = [];

    for(let i =0; i <= targetSum; i++) {
        for(let j = 0; j <= numbers.length; j++) {
           if(array[i] && array[i + numbers[j]] === null) {
            array[i + numbers[j]] = [[i, numbers[j]]];
           } else
            if (array[i] && Array.isArray(array[i + numbers[j]])) {
               array[i + numbers[j]].push([i, numbers[j]]);
               
               // return the first sum we find that makes the targetSum
               if (i + numbers[j] === targetSum) {
                   return [i, numbers[j]];
               }
           }
        }
    }
    return array[targetSum];
}
console.log(howSum(7, [5,3,4])); // [ 3, 4 ]

const howSumBetter = (targetSum, numbers) => {
    // as I need to return a boolean, I will initialize with a boolean
    let array = new Array(targetSum + 1 ).fill(null);
    // zero can be generated without any number, so by default it is true
    array[0] = [];
    for(let i =0; i <= targetSum; i++) {
        if (array[i] !== null) {
            for(let num of numbers) {
                array[i + num] = [...array[i], num];

             }
        }
    }
    return array[targetSum]
}

console.log(howSumBetter(7, [5,3,4])); // [ 3, 4 ]