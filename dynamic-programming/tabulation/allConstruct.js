/**
 * Write a function allConstruct(target, wordBank) hat accepts a target string 
 * and an array of strings
 * 
 * The function should return a 2D array containing all of the ways that the target can be 
 * constructed by concatenating elements of the wordBank array
 * 
 * Each element of the 2D array should represent one combination that constructs the target
 * 
 * You may reuse elements of wordBanck as many times as needed 
 */

function allConstruct(target, wordBank) {
    let array = new Array(target.length).fill(null);
    array[0] = [];
    
    for (let i = 0; i < target.length; i++) {
        if (array[i] !== null) {
            for(let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    // add this to the array
                    array[i + word.length] = [...array[i], word];
                }
            }
        }
    }
    return array[target.length];

}

// console.log('1 ',allConstruct('abcdef', ['ab','abc', 'cd', 'def', 'abcd'])); // [ 'abc', 'def' ]
// console.log('2 ',allConstruct('purple', ['purp','p', 'ur', 'le', 'purpl'])); // [ 'p', 'ur', 'p', 'le' ]
// console.log('3 ',allConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boa'])); // [ 'sk', 'ate', 'boa', 'rd' ]


function allConstructBetter(target, wordBank) {
    let array = new Array(target.length + 1).fill().map(() => []);
    array[0] = [[]];
    
    for (let i = 0; i < target.length; i++) {
        if (array[i] !== null) {
            for(let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    // add this to the array
                    const newCombinations = array[i].map(subArray => [...subArray, word]);
                    array[i + word.length].push(...newCombinations);
                }
            }
        }
    }
    return array[target.length];

}

console.log('1 ',allConstructBetter('abcdef', ['ab','abc', 'cd', 'def', 'abcd'])); // [[ 'abc', 'def' ]]
console.log('2 ',allConstructBetter('purple', ['purp','p', 'ur', 'le', 'purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log('3 ',allConstructBetter('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boa'])); // [ [ 'sk', 'ate', 'boa', 'rd' ] ]