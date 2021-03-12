/**
 * On old cell phones, user typed on a numeric keypad and the phone would provide a list of words that matched 
 * these numbers. Each digit mapped to a set of 0 - 4 letters
 * 
 * Implement an algorithm to return list of matching words, given a sequence of digits.
 * You are provided a list of valid words (provided in whatever data structure you'd like)
 * The mapping is shown in the diagram:
 * 
 * 1 
 * 2 - abc
 * 3 - def
 * 4 - ghi
 * 5 - jkl 
 * 6 - mno
 * 7 - pqrs
 * 8 - tuv
 * 9 - wxyz
 * 0
 * 
 */

let map = new Map();
function addRelation(key, letters = '') {
    let letArr = letters.split('');
    map.set(key, new Set (letArr));
}

addRelation(1)
addRelation(2,'abc');
addRelation(3,'def');
addRelation(4,'ghi');
addRelation(5,'jkl');
addRelation(6,'mno');
addRelation(7,'pqrs');
addRelation(8,'tuv');
addRelation(9,'wxyz');
addRelation(0);
let words = ['hola', 'gokc', 'development', 'tree', 'used', 'hacker'];

console.log(getMatchingWords(words, 4652)) // Set { 'hola', 'gokc' }
console.log(getMatchingWords(words, 8733)) // Set { 'tree', 'used' }
console.log(getMatchingWords(words, 33835676368)) // Set { 'development' }


function getMatchingWords(words, input) {
    let wordsCopy = new Set(words);
    let inputString = `${input}`;

    for(let i = 0; i < inputString.length; i++) {
        let num =  inputString.charAt(i);
        let valuesForNum = map.get(+num);

        for(let word of wordsCopy.values()) {
            let char = word.charAt(i);
            if (!valuesForNum.has(char)) {
                wordsCopy.delete(word)
            }
        }
    }
    return wordsCopy;

}