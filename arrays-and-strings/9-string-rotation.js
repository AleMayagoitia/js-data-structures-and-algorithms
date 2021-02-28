/**
 * Assume you have a method isSubstring which checks if one word is a substring of another
 * 
 * Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
 * using only one call to isSubstring
 * 
 * i.e. waterbottle is a rotation of erbottlewat
 */

 function isRotation(stringA, stringB) {
     let length = stringA.length;
     if (length === stringB.length && length > 0) {
         // erbottlewaterbottlewat
         let stringABuff = stringA + stringA;
         return isSubstring(stringABuff, stringB)
     }
     return false;


 }
 function isSubstring(s1,s2) {
     return s1.includes(s2);
 }
console.log( isRotation('erbottlewat', 'waterbottle')); // true
console.log( isRotation('erbottlewa', 'waterbottl')); // false