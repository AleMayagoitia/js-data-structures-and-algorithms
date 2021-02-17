/******************* 1 ******************/
// USE THE IMPLEMENT ROOT FUNCTION FOR AN INTEGER
// WITHOUT USING ANY MATH LIBRARIES

// The binary search can be applied to this problem
// partition the rande into upper half and lower half between 1 and the given number
// O(log2(n))
function sqrtInt(number) {
    if (number === 0 || number === 1) {
        return number;
    }

    let start = 1;
    let end = number;
    let ans;

    while(start <= end) {
        let mid = Math.floor((start + end)/2)
        if (mid * mid === number) {
            return mid;
        }

        if (mid*mid < number) {
            start = mid+1;
            ans = mid;
        } else {
            end = mid-1;
        }
    }
    return ans;
}

console.log(`sqrt of 9 is ${sqrtInt(9)}`); // 3
console.log(`sqrt of 1562 is ${sqrtInt(1562)}`); // 39
console.log(`sqrt of 4 is ${sqrtInt(4)}`); // 2

/******************* 2 ******************/
// FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER
// O(n)
function findAddUps(arr, n) {
    let set = new Set();
    const setsThatSum = [];
    for (let i = 0; i < arr.length; i++) {
        let pending = arr[i] > n ? arr[i] - n : n - arr[i];
        if (set.has(pending)) {
            setsThatSum.push([arr[i], pending]);
        } else {
            set.add(arr[i]);
        }
    }
    return setsThatSum;
}

console.log(`Sets found ${[1,5,6,7,8,2,3,4,5,6]} in that sum 8`, findAddUps([1,5,6,7,8,2,3,4,5,6],8))

/******************* 3 ******************/
// FIND AN ELEMENT WITHIN AN ARRAY THAT APPEARS ONLY ONCE
// O(n + m) ?
function findOccurrence(arr, n){
    let map = new Map();
    let numbersWithOccurence = [];
    for(let i =0, length = arr.length; i < length; i++) {
        if (!map.get(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }

    for (let [key, value] of map.entries()) {
        if (value === n) {
            numbersWithOccurence.push(key)
        }
    }
    return numbersWithOccurence;
}

console.log('Here are the numbers of this array that appear 2 times: ', findOccurrence([1,1,5,6,7,8,9,4,5,4,6,6],2))
console.log('Here are the numbers of this array that appear 3 times: ', findOccurrence([1,1,5,6,7,8,9,4,5,4,6,6],3))

/******************* 4 ******************/
// CREATE A JS SORT COMPARATOR FUNCTION THAT WOULD SORT STRING BY LENGTH
console.log(['this is a length', 'first', 'this is the last one hehe', 'another', 'another one'].sort((a,b) => a.length - b.length));

/******************* 5 ******************/
// IMPLEMENT A WORD COUNTER LIST
// create a function that generates an object of words as keys with the number of times it's present on a sentence
// O(n)
function getCounterObj(str) {
    const words = str.split(' ');
    const map = {};
    for (let word of words) {
        if (!word) {
            continue;
        }
        const upperCaseWords = word.toUpperCase().replace('.', '');
        if (!map[upperCaseWords]) {
            map[upperCaseWords] = 1;
        } else {
            map[upperCaseWords] += 1
        }
    }
    // sorted response by occurence 
    // return Object.entries(map).sort((a,b) => b[1] - a[1])
    return map;
}
console.log(getCounterObj(' Practice makes perfect. get perfect by practice. Just Practice'))