// Given two strings, write a method to decide if one is a permutation of the other
// example of permutation -> dog and god (same characters form the same word)

// option 1
function isPermutation(stringA, stringB) {
    let sortedA = stringA.split('').sort().join('');
    let sortedB = stringB.split('').sort().join('');
    return sortedA === sortedB;
}

console.log(isPermutation('dog','god')) // true
console.log(isPermutation('dodeg','god')) // false

// option 2
function isPermutationA(stringA, stringB) {
    // if they don't have the same size, don't bother checking forward
    if (stringA.length !== stringB.length) return false;

    // get occurences of each string
    let mapA = createMap(stringA);
    let mapB = createMap(stringB);
    let isPremutation = true;
    // compare maps
    mapA.forEach((val, key) => {
        if (!mapB.get(key) || mapB.get(key) !== val) {
            isPremutation = false;
            return;
        }
    });

    return isPremutation;

}
function createMap(string, map = new Map()) {
    for(let i =0; i < string.length; i++) {
        const currentChar = string.charAt(i);
        if (map.get(currentChar)) {
            map.set(currentChar, map.get(currentChar) + 1)
        } else {
            map.set(currentChar, 1)
        }
    }
    return map;
}

console.log(isPermutationA('dog','god')) // true
console.log(isPermutationA('dodeg','god')) // false
console.log(isPermutationA('dod','god')) // false