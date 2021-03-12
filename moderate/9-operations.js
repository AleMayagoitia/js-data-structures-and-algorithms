/**
 * Write methods to implement the multiply, substract and divide operations for integers
 * The result of all of these are integers. You can use the add operator, but not minus, times or divide.
 */

function multiply(n, m) {
    let result = 0;
    for(let i = 1; i <= m; i++) {
        result += n;
    }
    return result;
}

console.log(multiply(2,4)) // 8

function substract(n,m) {
    let max = Math.max(n,m)
    let min = Math.min(n,m)
    let result = 0;
    for(let i = min; i < max; i++) {
        result += 1;
    }
    return result;
}
console.log(substract(4,2)) // 2
console.log(substract(46235623,452)) // 46235171

function divide(n, m) {
    let max = Math.max(n,m)
    let min = Math.min(n,m)
    let result = 0;
    let current = min;
    while(current <= max) {
        result += 1;
        current += min;
    }
    return result;
}
console.log(divide(4,2)) // 2
console.log(divide(16,2)) // 8
console.log(divide(46235623,452)) // 102291

