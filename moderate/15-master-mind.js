/**
 * The game of master mind is played as follow:
 * 
 * The computer has four slots, and each slot will contain a ball that is red (R), yellow (Y), green(G) or Blue(B)
 * For example, the computer might have RGGB (Slot #1 is red, slot#2 is green and so on)
 * 
 * You, the user, are trying to guess the solution.. You might, guess YRGB
 * 
 * When you guess the correct color for the correct slot, you get a 'hit'
 * If you guess a color that exists but is in the wrong slot, you get a 'pseudo-hit'
 * 
 * Note that a slot that is a hit can never count as a pseudo-hint
 * 
 * For example, if the actual solution is RGBY and you guess GGRR, you have one hit and one pseudohit
 * 
 * Write a method that, given a guess and solution, returns the number of hits and pseudohits
 */
console.log(masterMind('RGBY', 'GGRR')) // { hits: 1, pseudohits: 1, win: false }
console.log(masterMind('RGGB', 'YRGB')) // { hits: 2, pseudohits: 1, win: false }
console.log(masterMind('RGGB', 'RGGB')) // { hits: 4, pseudohits: 0, win: true }
console.log(masterMind('RGRGGGB', 'RGGB')) // Please enter a guess with the same length as the solution: 7
console.log(masterMind('RGRGGGB', 'RGYYYGB')) //{ hits: 4, pseudohits: 0, win: false }
console.log(masterMind('RGRYGGB', 'RGYRYGB')) //{ hits: 4, pseudohits: 1, win: false }

function masterMind(solution, guess) {
    if (solution.length !== guess.length) {
        return 'Please enter a guess with the same length as the solution: ' + solution.length;
    }
    let map = new Map();
     for(let i = 0; i < guess.length; i++) {
        let guessChar = guess.charAt(i);
        let solutionChar = solution.charAt(i)

        if (guessChar === solutionChar) {
            if (map.get(guessChar) && map.get(guessChar).exact) map.set(guessChar, {exact: map.get(guessChar).exact + 1});
            else map.set(guessChar, {exact: 1});

        } else if (!map.get(guessChar) || !map.get(guessChar).exact) {
            if (solution.indexOf(guessChar) !== -1)  map.set(guessChar, {found: true});
        }

    }
    let hits = 0;
    let pseudohits = 0;
    for(let [, value] of map.entries()) {
        if (value.found) {
            pseudohits++;
        } else if (value.exact) {
            hits += value.exact;
        }
    }

    let win = hits === solution.length;
    return {hits, pseudohits, win}
}