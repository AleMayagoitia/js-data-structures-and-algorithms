/**
 * Given an infinite number of quarters (25 cents), dimes (10 cents) , nickles (5 cents) and pennies (1 cent)
 * Write code to calculate the number of ways of representing n cents
 */

 
function getCoinsCombination(target, coinBank) {
    let getCombinationHelper = function(n, index) {
        if (n < 0) return null;
        if (n === 0) return [];
        let result = getCombinationHelper(n - coinBank[index], index);
        result.push(coinBank[index])
        return result

    }
    getCombinationHelper(target , 0)
    console.log(getCombinationHelper(target , 0))
    console.log(getCombinationHelper(target , 1))

}

// getCoinsCombination(100, [25, 10])

function makeChange(amount, denoms) {
    let makeChangeHelper = function(total, denoms, index) {
        let coin = denoms[index];
        if (index == denoms.length - 1) { // One denom left, either you can do it or not
            let remaining = total % coin;
            return remaining === 0 ? 1 : 0;
        }

        let ways = 0;
        // Try 1 coin, 2 coins... recursing each time
        for(let amount = 0; amount <= total; amount +=coin) {
            console.log(total-amount, index, index + 1)
            ways += makeChangeHelper(total - amount, denoms, index + 1);
        }
        return ways;
    }
    return makeChangeHelper(amount, denoms, 0);
}

console.log(makeChange(100, [25, 10, 5, 1]))
