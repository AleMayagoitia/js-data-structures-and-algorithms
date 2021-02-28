/**
 * Implement a method to perform basic string comparission using the counts of repeated characters
 * For example, the string aabccccca would became a2b1c2a3
 * If the compressed string would not become smaller than the original,
 * your method should return the original string
 * 
 * You can assume the string has only uppercase and lowercase characters
 */

 function compressString(string) {
     let map = new Map();
     for(let i = 0; i < string.length; i++) {
         const currentChar = string.charAt(i);
         if(map.get(currentChar)) {
             map.set(currentChar, map.get(currentChar) + 1 );
         } else {
            map.set(currentChar, 1 );
         }
     }
     if ( string.length < map.size * 2) {
         return string;
     }
     let compressedString = '';
     map.forEach((value, key) => {
         compressedString += `${key}${value}`
     });
     return compressedString;
 }
 console.log(compressString('aabccccca'));// a3b1c5
 console.log(compressString('abcdefghi'));// abcdefghi