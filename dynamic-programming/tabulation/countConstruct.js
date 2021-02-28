/** 
 * Write a function countConstruct(target, wordBank) that accepts a target string 
 * and an array of strings
 * 
 * The function should return the number of ways that the 'target' can be 
 * constructed by concatenating elements of the 'wordbank' array
 * 
 * You may reuse elements of wordBanck as many times as needed 
 */

function countConstruct(target, wordBank) {
    let array = new Array(target.length + 1).fill(0);
    array[0] = 1;

    for(let i = 0; i <= target.length; i++) {
            for(let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    array[i + word.length] += array[i];
                }
            }
    }
    return array[target.length];
}

console.log('1 ',countConstruct('abcdef', ['ab','abc', 'cd', 'def', 'abcd'])); // 1
console.log('2 ',countConstruct('purple', ['purp','p', 'ur', 'le', 'purpl'])); // 2
console.log('3 ',countConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boa'])); // 1