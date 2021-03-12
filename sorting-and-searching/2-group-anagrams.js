/**
 * Write a method to sort an array of strings so that all the anagrams are next to each other.
 * 
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase
 */

 function sortAnagrams(arr) {
     let anagramsMap = new Map();
     for (let item of arr) {
         let sortedString = item.toUpperCase().split('').sort().join('');
         if (anagramsMap.get(sortedString)) {
            anagramsMap.get(sortedString).push(item);
         } else {
            anagramsMap.set(sortedString, [item])
         }
     }
     // create a new array out of it
     let sortedArr = [];
     for(let [, value] of anagramsMap.entries()) {
        sortedArr = [...sortedArr, ...value];
     }
     return sortedArr;
 }

 console.log(sortAnagrams(['heart','listen','part', 'earth','race','silent', 'care', 'trap']))
 /**
  * [ 'heart',
      'earth',
      'listen',
      'silent',
      'part',
      'trap',
      'race',
      'care' ]
  */
