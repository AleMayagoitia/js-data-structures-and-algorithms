/***
 * There are three types of edits that can be performed on strings:
 * insert a character
 * remove a character 
 * replace a character
 * 
 * Given two strings, write a function to check if they are one edit (or zero edits) away
 * 
 * pale  -> ple  : true
 * pales -> pale : true
 * pale  -> bale : true
 * pale  -> bake : false

*/

function countDifferencesBetweenStrings(stringA, stringB) {
    if (stringA === stringB) return true;
    if (Math.abs(stringA.length - stringB.length) > 1) return false;
    let mapA = new Map();
    let mapB = new Map();

    let changesRequired = 0;
    // insert all string a chars into map
    for(let i = 0; i < stringA.length; i++) {
        let currentChar = stringA.charAt(i);
        if (mapA.get(currentChar)) {
            mapA.set(currentChar, mapA.get(currentChar + 1));
        } else {
            mapA.set(currentChar, 1);
        }
    }
    for(let i = 0; i < stringB.length; i++) {
        let currentChar = stringB.charAt(i);
        if (!mapA.get(currentChar)) {
            changesRequired++;
        }
        if (changesRequired > 1) {
            return false;
        }
        if (mapB.get(currentChar)) {
            mapB.set(currentChar, mapB.get(currentChar + 1));
        } else {
            mapB.set(currentChar, 1);
        }
    }
    changesRequired = 0;
    mapA.forEach((val, key) => {
        if (!mapB.get(key)) {
            changesRequired++;
        } else if (mapB.get(key) !== val) {
            changesRequired += mapB.get(key) - val;
        }
        mapB.delete(key);
        if (changesRequired > 1) {
            return false;
        }
       
    });
    return changesRequired <= 1;

}

console.log(countDifferencesBetweenStrings('pale', 'ple')) // true
console.log(countDifferencesBetweenStrings('pales', 'pale')) // true
console.log(countDifferencesBetweenStrings('pale', 'bale')) // true
console.log(countDifferencesBetweenStrings('pale', 'bake')) // false
console.log(countDifferencesBetweenStrings('palffrfe', 'bake')) // false