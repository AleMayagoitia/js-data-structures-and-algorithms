/**
 *  Write a function canConstruct(target, wordBank) that accepts a target string and array of strings
 * 
 *  The function should return a boolean indicating wheter or not the target can be constructed by concatenating
 *  elements of the wordBank array
 * 
 *  You may reuse as many elements from the word bank as you need
 */

function canConstruct(target, wordBank) {
    let array = new Array(target.length + 1).fill(false);
    array[0] = true;
    for(let i =0; i <= target.length; i++) {
        if (array[i] === true) {
            for (let word of wordBank) {
                // if the word matches the character starting at position i
                if (target.slice(i, i + word.length) === word) {
                    array[i + word.length] = true;
                }
                
            }
        }

    }
    return array[target.length];
}

console.log('1 ',canConstruct('abcdef', ['ab','abc', 'cd', 'def', 'abcd']));
// console.log('2 ',canConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boa']));