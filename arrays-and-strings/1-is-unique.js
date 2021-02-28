// Implement an algorithm to determine if a string has all unique characters.
function isUnique(string) {
    let occurences = {};
    for(let i = 0; i< string.length; i++) {
        const currentChar = string.charAt(i);
        if (occurences[currentChar]) {
            return false;
        }
        occurences[currentChar] = 1;
    }
    return true;
}

console.log(isUnique('abcdefghijkla')); // false
console.log(isUnique('abcdefghijkl')); // true
console.log(isUnique('abcdefghijklmnopqrstuvwxyz123456456789')); // true