// Insertion sort

// O(n^2)
function insertionSort(arr) {
    let length = arr.length; // number of elements
    let value;              // the value currently being compared
    let i;                 // Index into unsorted section
    let j;                // index into sorted section

    for(i=0; i < length; i++) {
        // store the current value because it may shift later
        value = arr[i];
        
        // Whenever the value in the sorted section is greater than the value
        // in the unsorted section, shift all items into the sorted section
        // over by one, This creates space in which to insert the value
        for(j=i-1; j> -1 && arr[j] > value; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = value;
    }
    return arr;

}
console.log(insertionSort([5,4,2,4,3,6,9,7]));