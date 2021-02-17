// Merge Sort

// Works by dividing the array into subarrays unitl each array has one element
// Then, each subarray is concatenated into the sorted order

// The merge function should add all the elements from both arrays in sorted order in a result array
// The index of each array can be created to keep track of the elements already compared 

// Use merge sort when a stable sort is needed
// merge sort is guaranteed to be O(nlog2(n))
// but it uses O(n) space.

function merge(leftA, rightA) {
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftA.length && rightIndex < rightA.length) {
        if (leftA[leftIndex] < rightA[rightIndex]) {
            results.push(leftA[leftIndex++])
        } else {
            results.push(rightA[rightIndex++]);
        }
    }
    let leftRemains = leftA.slice(leftIndex);
    let rightRemains = rightA.slice(rightIndex);
    
    // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}

// O(nlog2(n))
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr; // Base case: array is now sorted since it's just one element
    }
    let midpoint = Math.floor(arr.length/2);
    let leftArray = arr.slice(0, midpoint);
    let rightArray = arr.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([6,5,1,3,7,9,0]));