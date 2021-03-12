/**
 * Design a method to find the frequency of occurences of any given word in a book. what if we were running this algorithm multiple times?
 */

// use a map, add the occurrency frequency

let map = new Map();
// O(n)
function getFrequency(arr, targetWord) {
    for(let word of arr) {
        if (map.get(word)) {
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1)
        }
    }
    return map.get(targetWord);
}