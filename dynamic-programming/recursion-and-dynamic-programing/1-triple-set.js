/**
 *  A child is running up a staircase with n steps and can hop either 1 step, 2 steps or 3 steps
 * at the time. Implement a method to count how manu possible ways the child can run up the stairs
 * 
 */

 // Brute force
/**
 * Going (n-1)st step and hopping 1 step
 * Going (n-2)st step and hopping 2 steps
 * Going (n-3)st step and hopping 3 steps
 * 
 * countWays(n-1) + countWays(n-2) + countWays(n-3)
 */

 // exponential runtime O(3^n)
 function countWaysBruteForce(n) {
     if (n < 0) {return 0}
     else if (n === 0) {
         return 1;
     } else {
         return countWaysBruteForce(n-1) + countWaysBruteForce(n-2) + countWaysBruteForce(n-3)
     }
 }
 console.log(countWaysBruteForce(4));
//  console.log(countWaysBruteForce(40)); would not finish anytime soon...

 // memoizing

 function countWaysMemo(n, memo = new Map()) {
    if (n < 0) {return 0}
    else if (n === 0) {
        return 1;
    } else {
        if (memo.get(n)) {
            return memo.get(n);
        } else { 
            memo.set(n, countWaysMemo(n-1, memo) + countWaysMemo(n-2, memo) + countWaysMemo(n-3, memo));
            return  memo.get(n);
        }
    }
}
console.log(countWaysMemo(4));
console.log(countWaysMemo(40));

