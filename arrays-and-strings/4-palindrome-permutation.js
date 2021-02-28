/**
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards
 * A premutation is a rearrengement of letters
 * 
 * The palindrome does not need to be limited to just dictionaty words.
 * 
 * Ignore casing and non-letter characters
 */

 // a palindrome needs to have all letters to be multiple of 2 except for the one in the middle
 // taco cat -> t:2, a:2, c:2, o:1

 // check if all characters are multiple of 2 and if one of them is not, it should be 1
 // O(2n) -> O(n)
 function checkPalindrome(string) {
     let isPalindrome = true;
     const cleanString = string.replace(/ +/g, '');
     let occurenceMap = new Map();

     for (let i = 0; i < cleanString.length; i++) {
         const currentChar = cleanString.charAt(i);
        occurenceMap.set(currentChar,(occurenceMap.get(currentChar) || 0) + 1);
     }
     let alreadyHasOneVal = false;
     occurenceMap.forEach(val => {
         if (val % 2 !== 0 && val === 1 && !alreadyHasOneVal) {
            alreadyHasOneVal = true;
         } else if (alreadyHasOneVal) {
             // is not a palindrome
             isPalindrome = false;
         }

     });
     console.log(occurenceMap)
     return isPalindrome;
 }
 console.log(checkPalindrome('taco cat'))
 console.log(checkPalindrome('taco rcat'))