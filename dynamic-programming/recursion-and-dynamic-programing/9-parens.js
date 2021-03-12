/**
 * Implement an algorithm to print all valid (eg. properly opened and closed) combinations of n pairs of parentheses
 * 
 * input: 3
 * output: ((())), (()()), (())(), ()(()), ()()()
 */

 // base cases 
 // if number is 1 we just return ()
 // if the number is 0 we return ''
 // my solution... 
 function getAllParens(n) {
     let getAllParensHelper = function(n, res = [], set = new Set()) {
         if (n === 0) return [''];
         if (n === 1) return ['()'];

        let prevParens = getAllParensHelper(n-1, res, set);
        let generateAllCombos = function(prev) {
            let result = []
            // add to the front
            let front = `()${prev}`
       
            // add to the end
            let end = `${prev}()`
       
            // hug each
            let indexOfStartingParen = prev.indexOf('(')
            let sHug = prev.slice(0, indexOfStartingParen + 1) + '()' + prev.slice(indexOfStartingParen + 1)
            // hug last starting parenthesis
            let indexOfLsstStartingParen = prev.lastIndexOf('(')
            let sHugLast = prev.slice(0, indexOfLsstStartingParen + 1) + '()' + prev.slice(indexOfLsstStartingParen + 1)

            if (!set.has(front)) {
                set.add(front);
                result.push(front);
            }
            if (!set.has(end)) {
                set.add(end);
                result.push(end);
            }
            if (!set.has(sHug)) {
                set.add(sHug);
                result.push(sHug);
            }
            if (!set.has(sHugLast)) {
                set.add(sHugLast);
                result.push(sHugLast);
            }
            return result;
        };
        for(let prev of prevParens) {
            const allCombosForThisPrev = generateAllCombos(prev);
            res = [...res, ...allCombosForThisPrev]
        }
        return res;
     }
     return getAllParensHelper(n)
 }
// console.log( getAllParens(1)) // [ '()' ]
// console.log( getAllParens(2)) // [ '()()', '(())' ]
// console.log( getAllParens(3)) // [ '()()()', '(())()', '()(())', '(()())', '((()))' ]
// console.log( getAllParens(4)) //
/**
 *[ '()()()()',
  '(())()()',
  '()()(())',
  '()(())()',
  '(()())()',
  '(())(())',
  '()((()))',
  '()(()())',
  '(()()())',
  '(()(()))',
  '((()))()',
  '(((())))' ]
 */

 function generateParens(remaining) {
     let set = new Set();
     if (remaining == 0) {
         set.add('');
     } else {
         let prev = generateParens(remaining - 1);
         for(let str of prev) {
            for(let i = 0; i < str.length; i++) {
                if (str.charAt(i) === '(') {
                    let s = insertInside(str, i);
                    // add s to set if it's not already there
                    set.add(s)
                }
            }
            set.add('()' + str)
         }
     }
     return set;
 }
 function insertInside(str, leftIndex) {
     let left = str.slice(0, leftIndex + 1);
     let right = str.slice(leftIndex + 1);
     return left + '()' + right;
 }

 console.log( generateParens(3)); // Set { '(()())', '((()))', '()(())', '(())()', '()()()' }
