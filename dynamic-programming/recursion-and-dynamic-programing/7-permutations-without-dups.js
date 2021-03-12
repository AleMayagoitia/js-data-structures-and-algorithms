/**
 * Write a method to compute all permutatuons of a string of unique characters
 * 
 * ABC  ACB BAC BCA CBA CAB
*/
// trying to do it
function getComboOfPair(s) {
    let charOne = s.charAt(0);
    let charTwo = s.charAt(1);
    return [[charOne, charTwo], [charTwo, charOne]]
}

function mergeCombos(arr1, arr2) {
    let added = new Set();
    let anotherOne = [];
    for(let firstArrItem of arr1) {
        for(let secondArrItem of arr2) {
            // enter firstArrItem into all arr2 combos
            for(let i = 0; i < secondArrItem.length + 1; i++) {
                // add firstArrItems into i position and then fill 
                let k1 = (firstArrItem.slice(0,i) + secondArrItem.slice(0, i) + firstArrItem.slice(i) + secondArrItem.slice(i)).replace(/[ ]*,[ ]*|[ ]+/g, '');
                let k2 = (secondArrItem.slice(0, i) + firstArrItem + secondArrItem.slice(i)).replace(/[ ]*,[ ]*|[ ]+/g, '');
                if (!added.has(k1)) {
                    added.add(k1);
                    anotherOne.push(k1)
                }
                if (!added.has(k2)) {
                    added.add(k2);
                    anotherOne.push(k2)
                }


            }
        }
    }
    return anotherOne;

}

function getAllPermutations(string) {
    // all strings bring it down to 
    let permutationsHelper = function(s) {
        if (s.length === 0) return;
        if (s.length === 2) {
            return getComboOfPair(s);
        } else if (s.length === 1) {
            return [[s]];

            
        }
        let medium = s.length >> 1;
        let combos1 = permutationsHelper(s.slice(0, medium));
        let combos2 = permutationsHelper(s.slice(medium));
        return mergeCombos(combos1,combos2);
    }
    let kk = permutationsHelper(string);
    console.log(kk)


}
// getAllPermutations('ABC') //  [ 'ABC', 'BAC', 'BCA', 'ACB', 'CAB', 'CBA' ]

// Correct approach
function getPerms(str) {
    if (str === null) return null;
    let permutations = [];

    if (str.length === 0) { // base case
        permutations.push('');
        return permutations;
    }

    let first = str.charAt(0); // get the first char on string
    let remainder = str.slice(1);
    let words = getPerms(remainder);

    for(let word of words) {
        for(let j = 0; j <= word.length; j++) {
            let s = insertCharAt(word, first, j);
            permutations.push(s);
        }
    }
    return permutations;
}
function insertCharAt(word, char, i) {
    let start = word.slice(0, i);
    let end = word.slice(i);
    return start + char + end;

}
console.log(getPerms('ABC')) // [ 'ABC', 'BAC', 'BCA', 'ACB', 'CAB', 'CBA' ]
// console.log(getPerms('ABCD'))
/**
 * [ 'ABCD',
  'BACD',
  'BCAD',
  'BCDA',
  'ACBD',
  'CABD',
  'CBAD',
  'CBDA',
  'ACDB',
  'CADB',
  'CDAB',
  'CDBA',
  'ABDC',
  'BADC',
  'BDAC',
  'BDCA',
  'ADBC',
  'DABC',
  'DBAC',
  'DBCA',
  'ADCB',
  'DACB',
  'DCAB',
  'DCBA' ]
 */
