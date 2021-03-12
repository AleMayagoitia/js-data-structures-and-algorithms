/**
 * Desing an algorithm to find all pair of integers within an array which sum to a specific value
 */

function allPairSum(arr, target) {
    let valueSet = new Set(arr);
    let result = new Set()

    for(let i = 0; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - target);
        if (valueSet.has(diff)) {
            result.add(`${arr[i]}, ${diff}`);
        }
    }
    return {allPairs: result, count: result.size};
}

console.log(allPairSum([6,14,8,2,8,10], 16))