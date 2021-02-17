// Selection sort

// works ny scanning the elements for the smallest element
// and inserting it into the current position of the array
function swap(array,indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

// O(n^2)
function selectionSort(arr) {
    let min;
    let length = arr.length;
    for(let i = 0; i<length; i++) {
        // set minimum to current position
        min = i;
        // looks for the smallest
       for(let j = i+1; j<length; j++) {
           if(arr[j] < arr[min]) {
               min = j;
           }
       }

       // if the min isn't in the position, swap it 
       if (i !== min) {
           swap(arr, i, min)
       }
    }
    return arr;
}
console.log(selectionSort([5,4,2,4,3,6,9,7]));