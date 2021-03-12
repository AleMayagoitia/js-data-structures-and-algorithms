/**
 * Given an array of integers, write a method to find indices m and n such that if you sorted elements m through n, the entire array would be sorted.
 * 
 * Minimize n - m (that is, find the smallest such sequence)
 * i.e.
 * 
 * input: 1,2,4,7,10,11,7,12,6,7,16,18,19
 * 
 * output: (3,9)
 */
console.log(getSubSort([1,2,4,7,10,11,7,12,6,7,16,18,19])) // { initialIndex: 3, lastIndex: 9 }
function getSubSort(arr) {
    let initialIndex = null;
    let lastIndex = null;

    let sorted = [...arr].sort((a,b) => a-b);

    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let sortedItem = sorted[i];
        if (current !== sortedItem && !initialIndex) {
            initialIndex= i;

        } else if (initialIndex && current !== sortedItem) {
            lastIndex = i;
        }
    }
    return {initialIndex, lastIndex};
}