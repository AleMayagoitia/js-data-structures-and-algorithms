// Sets exercises
 
//******************* 1 **************************/
// Using sets to check for duplicates in an array
const arr = [2,2,6,4,8,5];
const arr2 = [1,2];

// O(n)
function hasDuplicates (arr) {
    if (!arr.length) {
        return false;
    }

    const mySet = new Set();
    for(let element of arr) {
        if (mySet.has(element)) {
            console.log('Oh, thats a duplicate..');
            return true;
        }
        mySet.add(element)

    }
    return false;
}
console.log(hasDuplicates(arr)) // true

console.log(hasDuplicates(arr2)) // false
// O(n)

function hasDuplicatesButBetter(arr) {
    const mySet = new Set(arr);
    return mySet.size !== arr.length;
}
console.log(hasDuplicatesButBetter(arr)) // true

console.log(hasDuplicatesButBetter(arr2)) // false

//******************* 2 **************************/
// return all unique values from separate arrays
const arrOne = [2,8,4,6];
const arrTwo = [2,8,9,5];

function mergeArrays(arrOne, arrTwo) {
    const newSet = new Set(arrOne);
    for(let element of arrTwo) {
        if (!newSet.has(element)) {
            newSet.add(element);
        }
    }
    return Array.from(newSet);
}
console.log(mergeArrays(arrOne, arrTwo)); // [2,8,4,6,9,5]