/**
 * You are given two string, pattern and value.
 * 
 * The pattern string consists of just letters a and b, describing a pattern within a string
 * 
 * i.e.
 * 
 * the string catcatgocatcatgo matched the pattern aabab (where cat is a and b is go). 
 * It also matches the patterns like a, ab and b
 * 
 * Write a method to determine if a value matches the pattern
 */
 console.log(matchesPattern('aabaab', 'catcatgocatcatgo')) // true
 console.log(matchesPattern('aabab', 'catcatgocatcatgo')) // false
 console.log(matchesPattern('aba', 'catgocat')) // true
 console.log(matchesPattern('aa', 'catcat')) // true
 console.log(matchesPattern('abab', 'catgocatga')) // false

function matchesPattern(pattern, value) { // O(nlog2n + wf + p)
    let startPattern = value.charAt(0);
    // split the string by that char
    let reg = new RegExp(`(?=${startPattern})`)
    let words = value.split(reg).sort((a,b) => a.length - b.length); // O(nlog2n)

    let wordsFound = new Set();
    wordsFound.add(words[0])
    // get the other words found
    for (let word of words) { // O(n)
        if (!wordsFound.has(word)) {
            // replace any word that the set has
            let wordToAdd = word;
            for(let knownValue of wordsFound.values()) {
                wordToAdd = wordToAdd.replace(knownValue, '')
            }
            if (wordToAdd) {
                wordsFound.add(wordToAdd)
            }

        }
    }
    let patternUniqueValues = makeUnique(pattern).split('');
    let map = new Map();

    for(let word of wordsFound.values()) { // O(wF)
        let matchingInPattern = patternUniqueValues.shift();
        if (!matchingInPattern) return false;
        map.set(matchingInPattern, word);
    }
    
    let stringGenByPattern = '';
    for(let i = 0; i < pattern.length; i++) { // O(p)
        let char = pattern.charAt(i);
        if (!map.get(char)) return false;
        stringGenByPattern+=map.get(char);

    }
    return stringGenByPattern === value;
}

function makeUnique(str) {
    return String.prototype.concat(...new Set(str))
  }