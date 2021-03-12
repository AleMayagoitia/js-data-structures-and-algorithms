/**
 * Write a method that returns all subsets of a set
 */

 // Recursion
// O(n 2^n)
 function getSubsets(set, index) {
     let allSubsets;
     if (set.size === index) { // Base case - add empty set
        allSubsets = [];
        allSubsets.push([]); // empty set
     } else {
         allSubsets = getSubsets(set, index + 1);
         let item = set.get(index);
         let moreSubsets = [];
         for(let subset of allSubsets) {
             let newSubset =  [...subset, item];
             moreSubsets.push(newSubset);
         }
         allSubsets = [...allSubsets, ...moreSubsets];
     }
     return allSubsets;
 }

let set = new Map();
set.set(0, 'a');
set.set(1, 'b');
set.set(2, 'c');

console.log(getSubsets(set, 0));
/**
 * [ [],
  [ 'c' ],
  [ 'b' ],
  [ 'c', 'b' ],
  [ 'a' ],
  [ 'c', 'a' ],
  [ 'b', 'a' ],
  [ 'c', 'b', 'a' ] ]
 */

 function gerSubset2(set) {
     let allSubsets = [];
     let max = 1 << set.size; // convert to binary
     for(let i = 0; i < max; i++) {
         let subset = convertIntToSet(i, set);
         allSubsets.push(subset)
     }
     return allSubsets;
 }

 function convertIntToSet(x, set) {
     let subset = [];
     let index = 0;

     for(let k = x; k > 0; k >>=1) {
         if ((k & 1) === 1) {
             subset.push(set.get(index))
         }
         index++;
     }
     return subset;
 }

console.log(gerSubset2(set));
/**
 * [ [],
  [ 'a' ],
  [ 'b' ],
  [ 'a', 'b' ],
  [ 'c' ],
  [ 'a', 'c' ],
  [ 'b', 'c' ],
  [ 'a', 'b', 'c' ] ]
 */
