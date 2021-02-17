// Bubble sort

// Is the simplest sorting algorithm
// It iterates over the entire array and swaps elements if one is bigger than the other

function swap(array,indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

// O(n^2)
// worst type of sort due to it's time complexity
function bubbleSort(arr) {
    for(let i = 0, arrayLength = arr.length; i<arrayLength; i++) {
        for (let j = 0; j<= i; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5,4,2,4,3,6,9,7]));