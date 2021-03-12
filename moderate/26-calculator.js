/**
 * Given an aritmetic equation consisting of positive integers (+,-,*,/) with no parentheses
 * compute the result
 * 
 * i.e
 * 2*3+5/6*3+15
 * 
 * 23.5
 */

console.log( 'result 1 ',calculateResult('2*3+5/6*3+15')); // 23.5
 console.log('result 2 ',calculateResult2('2*3+5/6*3+15')); // 23.49

function calculateResult(equation) {
    return eval(equation);
}

function calculateResult2(equation) {
    let set = new Set(['/', '*', '+', '-'])

    for(let operation of set.values() ){
        equation = solveFor(equation, operation)
    }
    return equation;

}

function solveFor(equation, operation) {
    while(equation.indexOf(operation) !== -1) {
        
        let indexOfOperation = equation.indexOf(operation);

        // find number left
        let left = findIndexOfNextEquation(true, indexOfOperation,equation, indexOfOperation);
        // find number right 
        let right = findIndexOfNextEquation(false, indexOfOperation, equation, indexOfOperation);
        let result  = Number(eval(equation.slice(left + 1, right))).toFixed(2);

        equation = `${equation.substring(0, left + 1)}${result}${equation.substring(right)}`;
    }
    return equation;
}


function findIndexOfNextEquation(left, index, equation, indexOfOperation) {
    let set = new Set(['*', '/', '+', '-'])
    while(index > 0 &&  index <= equation.length) {
        if (index === equation.length) {
            return equation.length;
        }
        if (set.has(equation.charAt(index)) && index !== indexOfOperation) {
            return index;
        }
        if (left) {
            index--
        } else {
            index++
        }
    }
    return -1
    
}