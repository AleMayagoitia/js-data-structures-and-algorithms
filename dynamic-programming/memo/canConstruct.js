function canConstruct(goal, arr) {
    if (goal === '') return true;
    if (arr.find(p => p === goal)) return true; 

    const prefixes = arr.filter(p => isPrefix(goal, p));
    if (!prefixes.length) {
        return false;
    }
    return prefixes.some(p =>canConstruct(goal.replace(p, ''), arr));
}

function isPrefix(baseString, prefixToCheck) {
    return baseString.startsWith(prefixToCheck);
}
console.log(canConstruct('abcdef', ['ab','abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boar']));

// O(n^m * m) time
// O(m^2)  space
function canConstructBetter(goal, arr) {
    if (goal === '') return true;
    for (let word of arr) {
        if (goal.indexOf(word) === 0) {
            const suffix = goal.slice(word.length);
            if (canConstructBetter(suffix, arr)) {
                return true;
            }
        }
    }
    return false;
}
console.log(canConstructBetter('abcdef', ['ab','abc', 'cd', 'def', 'abcd']));
console.log(canConstructBetter('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boar']));

// O(n * m^2) time
// O(m^2)  space
function canConstructBest(goal, arr, memo = {}) {
    if (goal in memo) return memo[goal];
    if (goal === '') return true;
    for (let word of arr) {
        if (goal.indexOf(word) === 0) {
            const suffix = goal.slice(word.length);
            if (canConstructBest(suffix, arr, memo)) {
                memo[goal] = true;
                return true;
            }
        }
    }
    memo[goal] = false;
    return false;
}

console.log('best',canConstructBest('abcdef', ['ab','abc', 'cd', 'def', 'abcd']));
console.log('best',canConstructBest('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log('best',canConstructBest('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eeeee', 'eeeeeeeeee', 'eeeeeeeeeee', 'eeeeeeeeeeeeeee']));


function canConstructPossibilities(goal, arr, memo = {}) {
    if(goal in memo) return memo[goal];
    if (goal === '') return 1;
    let totalCount = 0;
    for (let word of arr) {
        if (goal.indexOf(word) === 0) {
            const suffix = goal.slice(word.length);
            const numWays = canConstructPossibilities(suffix, arr, memo);
            totalCount += numWays;
           
        }
    }
    memo[goal] = totalCount;
    return totalCount;
}
console.log('num',canConstructPossibilities('abcdef', ['ab','abc', 'cd', 'def', 'abcd']));
console.log('num',canConstructPossibilities('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eeeee', 'eeeeeeeeee', 'eeeeeeeeeee', 'eeeeeeeeeeeeeee']));


function howConstruct(goal, arr, memo = {}) {
    if(goal in memo) return memo[goal];
    if (goal === '') return [[]];
    let overallResult = [];
    for (let word of arr) {
        if (goal.indexOf(word) === 0) {
            const suffix = goal.slice(word.length);
            const suffixWays = howConstruct(suffix, arr, memo);
            const goalWays = suffixWays.map(way => [word, ...way]);
            overallResult.push(...goalWays)
           
        }
    }
    memo[goal] = overallResult;
    return memo[goal];
}

console.log('how',howConstruct('abcdef', ['ab','abc', 'cd', 'def', 'abcd']));
console.log('best',howConstruct('skateboard', ['bo','rd', 'ate', 't', 'ska', 'sk', 'boa']));

