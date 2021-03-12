/**
 * Given a boolean expression consisting of symbols 0(false), 1(true), & (AND), |(OR), ^(XOR)
 * and a desired boolean result value result, implement a function to count number of ways of parenthesizing
 * the expression such that it evaluates to result.
 * 
 * The expression should be fully parenthesized; i.e. (0)^(1)
 *  but not extraneously; i.e. (((0)^(1)))
 * 
 * examples
 * countEval("1^0|0|1", false) -> 2
 * countEval("0&0&0&1^1|0", true) -> 10
 */

 function countEval(s, result) {
     if(s.length === 0) return 0;
     if(s.length === 1) return (s === '1') === result ? 1 : 0;

     let ways = 0;
     for(let i = 1; i < s.length; i += 2) {
         let char = s.charAt(i);
         let left = s.slice(0,i);
         let right = s.slice(i + 1);

         // evaluate each side for each result
         let leftTrue = countEval(left, true);
         let leftFalse = countEval(left, false);
         let rightTrue = countEval(right, true);
         let rightFalse = countEval(right, false);

         let total = (leftTrue + leftFalse) * (rightTrue + rightFalse);

         let totalTrue = 0;
         if (char === '^') {
            totalTrue =  leftTrue * rightFalse + leftFalse * rightTrue;
         } else if (char === '&') {
             totalTrue = leftTrue * rightTrue;
         } else if (char === '|') {
             totalTrue = leftTrue * rightTrue + leftFalse * rightTrue + leftTrue * rightFalse;
         }
         let subWays = result ? totalTrue : total - totalTrue;
         ways += subWays;
     }
     return ways;
 }