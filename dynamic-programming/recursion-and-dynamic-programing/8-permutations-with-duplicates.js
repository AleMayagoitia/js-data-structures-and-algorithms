/**
 * Write a method to compute all permutations of a string whose characters are not necessarily unique
 * This list of permutations should not have duplicates.
 */

 function printPerms(s) {
     let result = [];
     let map = new Map();
     // build frequency table
     for(let char of s.split('')) {
         if (map.get(char)) {
             map.set(char, map.get(char) + 1)
         } else {
            map.set(char, 1)
         }

     }
     let printPermsHelper = function (map, prefix, remaining, result) {
         // base case: permutation has been completed
         if (remaining === 0) {
             result.push(prefix);
             return;
         }

         // Try remaining letters for next char, add generate remaining permutations
         for( let [key, value] of map.entries()) {
             if (value > 0) {
                 map.set(key, value - 1 );
                 printPermsHelper(map, prefix + key, remaining - 1, result);
                 map.set(key, value);
             }

         }

     }
     printPermsHelper(map, '', s.length, result);
     return result;
 }

console.log(printPerms('ABC')) // [ 'ABC', 'BAC', 'BCA', 'ACB', 'CAB', 'CBA' ]
console.log(printPerms('ABCD')) /**
[ 'ABCD',
  'ABDC',
  'ACBD',
  'ACDB',
  'ADBC',
  'ADCB',
  'BACD',
  'BADC',
  'BCAD',
  'BCDA',
  'BDAC',
  'BDCA',
  'CABD',
  'CADB',
  'CBAD',
  'CBDA',
  'CDAB',
  'CDBA',
  'DABC',
  'DACB',
  'DBAC',
  'DBCA',
  'DCAB',
  'DCBA' ]
   */
console.log(printPerms('AAB')) // [ 'AAB', 'ABA', 'BAA' ]
