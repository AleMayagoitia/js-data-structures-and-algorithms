/**
 * Write a function bestSum(targetSum, numbers) that takes in a target Sum and an array of numbers
 * 
 * The function should return an array containing the shortest combination
 * of numbers that add up to exactlu targetSum
 * 
 * If there is a tie for ht shortest combination, you may return any of those.
 * 
 */

function bestSum(targetSum, numbers) {
    let table = new Array(targetSum + 1).fill(null);
    table[0] = [];
    for(let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for(let number of numbers) {
                if (i + number <= targetSum) {
                    const combination = [...table[i], number];
                    // if there is no value or the new combination is better
                    if (!table[i + number] || table[i + number].length > combination.length) {
                        table[i + number] = combination;
                    }
                }
            }
        }
    }
    return table[targetSum];
}

console.log(bestSum(7, [5,3,4,2,1,6])); // [ 1, 6 ]
console.log(bestSum(7, [5,3,4])); // [ 3, 4 ]
console.log(bestSum(100, [25,1])); // [ 25, 25, 25, 25 ]