// Quick sort
// works by obtaning a pivot and partitionating the array around it
// bigger elements on one side and smallet elements on the other side
// until everything is sorted.

// the ideal pivot is the median of the array

// This is a recursive solution, uses the divide and conquer methodology

// Use a quick sort algorithm when the average performance should be optimal

// O(nlog2(n))  worst: O(n^2)
function quickSort(arr) {
    const quickSortHelper = function(arr, left, right) {
        let index;
        if (arr.length > 1) {
            index = partition(arr, left, right);
            if(left < index -1) {
                quickSortHelper(arr, left, index - 1)
            }
            if (index < right) {
                quickSortHelper(arr, index, right)
            }
        }

    }
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;
}
function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)]; // middle element
    while(left <= right) {
        while(arr[left] < pivot) {
            left++;
        }
        while(arr[right] > pivot) {
            right--;
        }
        if(left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}


console.log(quickSort([5,4,2,4,3,6,9,7]));