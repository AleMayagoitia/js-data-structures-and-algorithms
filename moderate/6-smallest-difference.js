/**
 * Given two arrays of integers, compute the pair of values (ove value in each array)
 * with the smallest (non-negative) difference. Return the difference
 */

function smallestDifferente(arr1, arr2) {
    let minDifference = Number.POSITIVE_INFINITY;
    let values = '';

    let arr2Values = new Set()
    for(let i = 0; i < arr2.length; i++) {
        arr2Values.add(arr2[i])
    }

    for(let i = 0; i < arr1.length; i++) {
        let current = arr1[i];
    
        let less = current - 1;
        let more = current + 1;
    
        while (less >= 0 || (more - arr1[i]) < minDifference) {
            if (arr2Values.has(less)) {
                let difference = arr1[i] - less;
                if (difference < minDifference) {
                    minDifference = difference;
                    values = `${arr1[i]}, ${less}`;
                }
            }
            if (arr2Values.has(more)) {
                let difference = more - arr1[i];
                if (difference < minDifference) {
                    minDifference = difference;
                    values = `${arr1[i]}, ${more}`;

                }
            }
            more++;
            less--;
    
        }
    }
    console.log(minDifference, values)
}

smallestDifferente([1,3,15,11,2], [23,127,235,19,8]) // 11,8
smallestDifferente([1,3,15,20,2], [23,127,235,19,8]) // 20,19
smallestDifferente([10,3,15,22,2], [23,127,235,19,8]) // 22,23
smallestDifferente([10,3,15,22,2], [53,127,235,19,8]) // 10,8
smallestDifferente([10,3,15,22,2], [53,127,235,19,8,1]) // 2,1


function smallestDifference(arrA, arrB) {
    if (arrA.length === 0 || arrB.length === 0) return -1;
    let arrASorted = arrA.sort((a,b) => a - b);
    let arrBSorted = arrB.sort((a,b) => a - b);
    let values = '';


    let indexA = 0;
    let indexB = 0;
    let smallestDifference = Number.POSITIVE_INFINITY;
    while(indexA < arrASorted.length && indexB < arrBSorted.length) {
        let difference = Math.abs(arrASorted[indexA] - arrBSorted[indexB]);
        if (smallestDifference > difference) {
            smallestDifference = difference;
            values = `${arrASorted[indexA]}, ${arrBSorted[indexB]}`;

        }

        if (arrASorted[indexA] > arrBSorted[indexB]) {
            indexB++
        } else {
            indexA++
        }
    }
    return {smallestDifference, values};
}

console.log(smallestDifference([1,3,15,11,2], [23,127,235,19,8]) )  // 11,8
console.log(smallestDifference([1,3,15,20,2], [23,127,235,19,8]) )  // 20,19
console.log(smallestDifference([10,3,15,22,2], [23,127,235,19,8]))   // 22,23
console.log(smallestDifference([10,3,15,22,2], [53,127,235,19,8]))   // 10,8
console.log(smallestDifference([10,3,15,22,2], [53,127,235,19,8,1]))  // 2,1