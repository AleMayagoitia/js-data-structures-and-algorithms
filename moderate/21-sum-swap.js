/**
 * Given two arrays of integers, find a pair of values (one value from each array)
 * that you can swap to give the two arrays the same sum
 * 
 * i.e.
 * 
 * [4,2,1,1,2] [3,6,3,3]
 * 
 * expected: 1,3
 */
 console.log(getSwapNumbers([4,1,2,1,1,2] ,[3,6,3,3])) // { numberA: 1, numberB: 3 }
 console.log(getSwapIndexes([4,1,2,1,1,2] ,[3,6,3,3])) // { indexA: 1, indexB: 0 }
 
 function getSwapNumbers(arrA, arrB) {
    // get sum of both
    let sumA = getSum(arrA);
    let sumB = getSum(arrB);

    let setB = new Set(arrB);

    let difference = Math.abs(sumA - sumB);
    
    for (let i = 0; i < arrA.length; i++) {
        let currentDiff = Math.abs(arrA[i] - difference);
        if (setB.has(currentDiff)) {
           return {numberA: arrA[i], numberB:currentDiff}
        }
    }
    return 'No combination found to balance both arrays';

}
 // returns indexes to swap:
function getSwapIndexes(arrA, arrB) {
    // get sum of both
    let sumA = getSum(arrA);
    let sumB = getSum(arrB);

    let setB = new Set(arrB);

    let difference = Math.abs(sumA - sumB);
    let numberToLookForB = null;

    let indexA, indexB;
    
    for (let i = 0; i < arrA.length; i++) {
        let currentDiff = Math.abs(arrA[i] - difference);
        if (setB.has(currentDiff)) {
            numberToLookForB = currentDiff;
            indexA = i;
            break;
        }
    }
    if (numberToLookForB === null) return 'No combination found to balance both arrays';
    for (let i = 0; i < arrB.length; i++) {
        if (arrB[i] === numberToLookForB) {
            indexB = i;
            break;
        }
    }
    return {indexA, indexB}
}

function getSum(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result;
}