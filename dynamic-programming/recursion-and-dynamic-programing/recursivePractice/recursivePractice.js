// Go through an array and print out all of the elements
function print(arr) {
    if (arr.length === 0) return;
    console.log(arr.shift()); // use pop if trying to print it backwards
    print(arr);
}
print([1,2,3,4,5,6]);

// Determine wether or not a string is a palindrome
// madam
function palindrome(str) {
    let palindromeHelper = function (leftIndex, rightIndex) {
        if (leftIndex > (str.length / 2) || rightIndex < (str.length / 2)) return true;
        if (str.charAt(leftIndex) !== str.charAt(rightIndex)) return false;
        return palindromeHelper(leftIndex + 1, rightIndex - 1 )
    }
    console.log(palindromeHelper(0 , str.length - 1))

}
palindrome('madam') // true
palindrome('anna') // true
palindrome('repaper') // true
palindrome('redrumsirismurder') // true
palindrome('alejandra') // false

// calculate a raised to the power of b

function power(a,b, result = 0) {
    if (b === 1) return a;
    return power(a, b - 1, result) * a;
}
console.log(power(2,3))
console.log(power(12,3))