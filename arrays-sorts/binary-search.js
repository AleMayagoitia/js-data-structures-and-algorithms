
// Binary search
// Used just for sorted data
// less time complexity than linear search

// check the middle value 
// check if the desired element is greater or smaller and discard the half whete the element won't appear
// O(log n)
function binarySearch(arr, n) {

    // check the middle value
    let lowIndex = 0;
    let highIndex = arr.length -1;

    while(highIndex -lowIndex > 1) {
        let middleIndex = Math.floor((highIndex + lowIndex) /2);
        if (arr[middleIndex] === n) {
            return true;
        }else if (n> arr[middleIndex]) {
            lowIndex = middleIndex;
        } else {
            highIndex = middleIndex;
        }
    }
    return false;
}
console.log(binarySearch([0,1,2,3,4,5,6,7,8], 3)) // true
console.log(binarySearch([0,1,2,3,4,5,6,7,8], 10)) // false
console.log(binarySearch([0,1,2,3,4,5,6,7,8], 7)) // true

// Recursive
function recursiveBinarySearch(arr, n) {
    const helperFunction = function(firstIndex, lastIndex, n) {
        const middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        if (arr[middleIndex] === n) {
            return true;
        }
        // if there is no more items to look for
        if (!(lastIndex - firstIndex > 1)) {
            return false;
        }
        if (n > arr[middleIndex]) {
            // use the greater half
            return helperFunction(middleIndex, lastIndex, n);

        } else if ((n < arr[middleIndex])){
            return helperFunction(firstIndex, middleIndex, n);
        }
    }
    return helperFunction(0, arr.length, n);
}
console.log(recursiveBinarySearch([0,1,2,3,4,5,6,7,8], 3)) // true
console.log(recursiveBinarySearch([0,1,2,3,4,5,6,7,8], 10)) // false
console.log(recursiveBinarySearch([0,1,2,3,4,5,6,7,8], 8)) // true
