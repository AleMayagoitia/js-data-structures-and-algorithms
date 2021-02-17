// Count sort

// Can be done in O(k+n)
// It works only for numbers and given a certain range

// Works by counting occurences of each element in the array
// Once occurences of each element are counted, the new array can be created by using those occurrences
// this sorts the data without having to swap elements.

// Use count sort when sorting integers with a limited range
// this will be the fastest sort for this case

function countSort(arr) {
    let hash = {};
    let countArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1
        } else {
            hash[arr[i]]++;
        }
    }
    for (let key in hash) {
        // for any numbers
        for(let i =0; i<hash[key]; i++) {
            countArr.push(+key)
        }
    }
    return countArr;
}

console.log(countSort([6,5,7,5,1,3,7,5,9,0])); // [ 0, 1, 3, 5, 5, 5, 6, 7, 7, 9 ]