/**
 * Write a method to replace all spaced in a string with '%20'
 * You may assume that the string has sufficient space at the end to 
 * hold the additional characters, and that you are given the "true"
 * length of the string
 */

 // option 1
 // O(n)
 function urilify(string) {
     return string.replace(/ +/g, '%20');
 }
 console.log(urilify('Mr John    Smith')); // Mr%20John%20Smith

 // option 2
 // O(n)
 function urilify2(string) {
    let newString = '';
    for(let i =0; i < string.length; i++) {
        const currentChar = string.charAt(i);
        if(currentChar === ' ') {
            const lastThree = newString.slice(- 3);
            if (lastThree !== '%20') { 
                newString = newString.concat('%20');
            }
            continue;
        }

        newString = newString.concat(currentChar);
    }
    return newString;

 }
 console.log(urilify2('Mr John    Smith')); // Mr%20John%20Smith
