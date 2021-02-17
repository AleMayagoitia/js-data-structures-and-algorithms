// Linear search
// Can be used with both sorted and unsorted data
// Higher time complexity than binary search

// works by going through all the items of the array
// O(n)
function linearSearch(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true;
        }
    }
    return false;
}
console.log(linearSearch([0,5,1,65,56,5,5,7,3], 3)) // true
console.log(linearSearch([0,5,1,65,56,5,5,7,3], 13)) // false