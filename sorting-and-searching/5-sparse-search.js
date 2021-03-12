/**
 * Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string
 * 
 * i.e.
 * ['at', '','','','ball','','',''car','','','dad','','']
 * expected = 4
 */

// This will only return the word found, not the location
// also doesn't work when the word is not there..
function search(arr, target) {
    if (!arr.length) return;
    let middle = findNextRealWord(arr, Math.floor(arr.length / 2));

    if (arr[middle] === target) return arr[middle];
    if(middle === -1 ) return;
    
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    if (target > arr[middle]) {
        // go right
        return search(right, target)
    } else {
        // go left
        return search(left, target)
    }
}
function findNextRealWord(arr, middleIndex) {
    if (arr[middleIndex]) return middleIndex;
    let currentIndexLeft = middleIndex - 1;
    let currentIndexRight = middleIndex + 1;
    while (currentIndexLeft >= 0 || currentIndexRight <= arr.length) {
        if (arr[currentIndexLeft]) {
            return currentIndexLeft;
        } else if (arr[currentIndexRight]) {
            return currentIndexRight;
        }

        currentIndexLeft -= 1;
        currentIndexRight += 1;
    }
    return -1;


}

// console.log(search(['at', '','','','ball','','','car','','','dad','',''], 'dad'));
// console.log(search(['at', '','','','ball','','','car','','','dad','',''], 'ball'));
// console.log(search(['at', '','','','ball','','','car','','','dad','',''], 'car'));
// console.log(search(['at', '','','','ball','','','car','','','dad','',''], 'at'));

function searchTwo(arr, str, first, last) {
    if (first > last) return -1;
    //move mid to the middle
    let mid = Math.floor((last + first) / 2);

    // If mid is empty, find the closest non-empty string
    if (arr[mid] === '') {
        let left = mid - 1;
        let right = mid + 1;

        while(true) {
            if (left < first && right > last) {
                return -1
            } else if (right <= last && !arr[right] !== '') {
                mid = right;
                break;
            } else if (left >= first && !arr[left] !== '') {
                mid = left;
                break;
            }
            right++;
            left++;
        }
    }
    
    // check for string and recurse if necessary
    if (str === arr[mid]) {
        // Found it,
        return mid;
    } else if (str.localeCompare(arr[mid]) < 0) {
        // Search left
        return searchTwo(arr, str, first, mid - 1);
    } else {
        // Search right
        return searchTwo(arr, str, mid + 1, last);
    }
}
let arr = ['at', '','','','ball','','','car','','','dad','',''];
console.log(searchTwo(arr, 'dad', 0, arr.length - 1)); // 10
console.log(searchTwo(arr, 'ball', 0, arr.length - 1)); // 4
console.log(searchTwo(arr, 'car', 0, arr.length - 1)); // 7
// console.log(searchTwo(arr, 'at', 0, arr.length - 1)); // it doesn't work when it's at index 0
