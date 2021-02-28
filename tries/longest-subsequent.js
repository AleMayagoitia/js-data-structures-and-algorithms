// // Trie data structure
// let Node = function(){
//     this.keys = new Map();
//     this.end = false;
//     this.setEnd = function() {
//         this.end = true;
//     }
//     this.isEnd = function() {
//         return this.end;
//     }
// }
// Given two strings text1 and text2, return the length of their longest common subsequence.  
function longestCommonSubsequence (a, b) {
    let len = b.length, originalLen = b.length;
    do {
        for ( let i = 0; i <= originalLen - len; i++ ) {
            let needle = b.substr( i, len );
            if ( a.indexOf( needle ) !== -1 ) return needle;
        }
    } while ( len-- > 0 );
    return false;
}
console.log(longestCommonSubsequence('ajdidrabbd', 'abbdkfrfr'))
console.log(longestCommonSubsequence('ajvfvfvfvdidrabbd', 'abbdkfrvfvfvfvfr'))



// To parse a list of items and display a "page" of items based on the search parameters they gave you.  
// a hash map was given with 'item' name as key and two parameters as its value. I had to sort the list of items according to the input- sort based on key/ parameter1/ parameter2 and in ascending/ descending order. Then, given the number of items per page, I had to return the items displayed on a given page number.  
// Maximum square of 1's in a matrix of 1's and 0's  
// Given an array of words write an algorithm to return an. inputted word  