// Quick select

// is a selection algorithm to find the kth smallest element in an unordered list
// uses the same approach as quicksort 

// a pivot is chosen, and the array is partitioned 
// instead of recursing both sides, it recurses only the side for the element

function quickSelectInPlace(arr,l,h,k) {
    let pivot = partition(arr,l,h);
    if (pivot == (k - 1)) {
        return arr[pivot]
    } else if (pivot > (k - 1)) {
        return quickSelectInPlace(arr, l, p - 1, k)
    } else {
        return quickSelectInPlace(arr, p+1, h, k);
    }

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

function medianQuickSelect(arr) {
    return quickSelectInPlace(arr, 0, arr.length - 1, Math.floor(arr.length/2))
}
console.log(medianQuickSelect([1,3,3,-2,3,14,5,7,8,2]))