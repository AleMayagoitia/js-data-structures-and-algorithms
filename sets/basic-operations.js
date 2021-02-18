// A set is a group of unordered unique elements

// declaration
let set = new Set();

// insertion
set.add(1); // {1}
set.add(1); // set is still {1}
set.add(2); // {1,2}

// deletion
set.delete(2) // {2}

console.log(set.has(5)); // false
console.log(set.has(1)); // true

// all of these operations have a time complexity of O(1) constant time.

// intersection
// common elements between two sets
function intersectionOfSets(setA, setB) {
    var intersection = new Set();
    for(let element of setB) {
        if (setA.has(element)) {
            intersection.add(element);
        }
    }
    return intersection;
}
let setA = new Set([0,1,2,3,4,5,6]);
let setB = new Set([3,5,6,8,7,4]);
console.log(intersectionOfSets(setA, setB)) // {3,5,6,4}

// is super set
// A set is a superSet of another set if it contains all the elements of the other set
function isSuperSet(setD, subset) {
    let isSuperSetBool = true;
    for(let element of subset) {
        if (!setD.has(element)) {
            isSuperSetBool = false;
            break;
        }

    }
    return isSuperSetBool;

}
let setD = new Set([1,2,3,4,5,6]);
let subset = new Set([3,4,5]);

console.log(isSuperSet(setD, subset)) // true
console.log(isSuperSet(setD, new Set([3,4,5,7]))) // false


// Union
// combines the elements of two sets
function combineSets(setOne, setTwo) {
    const newSet = setOne;
    for(let element of setTwo) {
        if (!newSet.has(element)) {
            newSet.add(element);
        }

    }
    return newSet;

}
let setOne = new Set([1,2,3]);
let setTwo = new Set([3,4,5,6]);
console.log(combineSets(setOne, setTwo)) // {1,2,3,4,5,6}

// Difference
function differenceOfSets(setOne, setTwo) {
    const newSet = setOne;
    for(let element of setTwo) {
        if (newSet.has(element)) {
            newSet.delete(element);
        } else  {
            newSet.add(element)
        }

    }
    return newSet;

}
let setFirst = new Set([1,2,3,8,9]);
let setSecond = new Set([3,4,5,6,11]);
console.log(differenceOfSets(setFirst, setSecond)) // { 1, 2, 8, 9, 4, 5, 6, 11 }