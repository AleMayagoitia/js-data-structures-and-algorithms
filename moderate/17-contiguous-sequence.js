/**
 * maximum subarray problem
 * 
 * You are given an array of integers (both positive and negative).
 * 
 * Find the contiguous sequence with the largest sum
 * 
 * Return the sum
 * i.e.
 * Input: -8,3,-2,4,-10
 * Output: 3,-2,4
 */
console.log(getContiguousSequence([-8,3,-2,4,-10])) // [ 3, -2, 4 ]
console.log(getContiguousSequence([5,-9,6,-2,3])) // [ 6, -2, 3 ]
console.log(getContiguousSequence([2,3,-8,-1,2,4,-2,3])) // [ 2, 4, -2, 3 ]
function getContiguousSequence(arr) {
    let maxSum = 0;
    let currentSum = []
    let sumsBeforeZero = new Map()
    for(let i = 0; i < arr.length; i++) {
        if (maxSum + arr[i] > 0) {
            maxSum = maxSum + arr[i];
            currentSum.push(arr[i])
            sumsBeforeZero.set(maxSum, currentSum)

        } else {
            // this broke our sequence.. so we need to reset
             maxSum = 0;
             currentSum = []
        }

    }
    maxSum = 0;
    currentSum = [];
    for(let [key, value] of sumsBeforeZero.entries()) {
        if (key > maxSum) {
            currentSum = value;
        }

    }
    return currentSum;
}

function getMaxSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (maxSum < sum) {
            maxSum = sum
        } else if (sum < 0) {
            sum = 0
        }
    }
    return maxSum;
}