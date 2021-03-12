/**
 * You are building a diving board by placing a bunch of planks of wood end-to-end
 * 
 * There are two types of planks, one of lenght shorter and one of lenght longer
 * 
 * You must use exactly K planks of wood. Write a method to generate all possible lengths for the diving board.
 */

//  function cartesian(...args) {
//     var r = [], max = args.length-1;
//     function helper(arr, i) {
//         for (var j=0, l=args[i].length; j<l; j++) {
//             var a = arr.slice(0); // clone arr
//             a.push(args[i][j]);
//             if (i==max)
//                 r.push(a);
//             else
//                 helper(a, i+1);
//         }
//     }
//     helper([], 0);
//     return r;
// }
// console.log(cartesian([0,1], [0,1,2,3], [0,1,2]))

function getAllCombos2(k, total, shorter, longer, lengths) {
    if (k === 0) {
        lengths.add(total);
        return;
    }
    getAllCombos2(k-1, total + shorter, shorter, longer, lengths);
    getAllCombos2(k-1, total + longer, shorter, longer, lengths);

}
function allLengths(k, shorter, longer) {
    let lengths = new Set();
    getAllCombos2(k, 0, shorter, longer, lengths);
    return lengths;
}

// there are only k + 1 ways to arrange the planks
// 1 of shorter, 2 of shorter, 3 of shorter...
function allLengthsOptimal(k, shorter, longer) {
    let lengths = new Set();
    for(let nShorter = 0; nShorter <= k; nShorter++) {
        let nLonger = k - nShorter;
        let length = (shorter * nShorter) + (longer * nLonger);
        lengths.add(length)
    }
    return lengths
}

console.log(allLengths(3,1,2)) // Set { 3, 4, 5, 6 }
console.log(allLengthsOptimal(3,1,2)) // Set { 6, 5, 4, 3 }