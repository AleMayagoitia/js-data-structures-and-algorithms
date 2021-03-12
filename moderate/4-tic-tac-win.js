/**
 * Design an algorithm to figure out if someone has won a game of tictac toe
 * 
 * // rows
 * // columns
 * // diagonals
 * 
 * 
 */

function checkWin(grid) {
    for(let i  = 0; i < grid.length; i++) {
        // check if there's a row win
        let rowCounter = 0;
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                rowCounter++;
            }
            if (rowCounter === grid.length) {
                return true;
            }
        }
        let columnCounter = 0;
        for(let j = 0; j < grid.length; j++) {
            if (grid[j][i] === 1) {
                columnCounter++;
            }
            if (columnCounter === grid.length) {
                return true;
            }
        }
    }
    // check diagonals
    let diagOnecounter = 0;
    for(let i = 0; i < grid.length; i++) {
        if (grid[i][i] === 1) {
            diagOnecounter++
        }
        if (diagOnecounter === grid.length) {
            return true;
        }
    }
    // other diagonal
    let j = grid.length - 1;
    let diagTwocounter = 0;

    for(let i = 0; i < grid.length; i++) {
        if (grid[i][j] === 1) {
            diagTwocounter++
        }
        if (diagTwocounter === grid.length) {
            return true;
        }
        j--;
    }
    return false;
}

console.log(checkWin([
    [ 0, 0, 0],
    [ 1, 1, 1],
    [ 0, 0, 0],
])) // true

console.log(checkWin([
    [ 1, 0, 0],
    [ 1, 0, 0],
    [ 1, 0, 0],
])) // true

console.log(checkWin([
    [ 1, 0, 0],
    [ 0, 1, 0],
    [ 0, 0, 1],
])) // true

console.log(checkWin([
    [ 0, 0, 1],
    [ 0, 1, 0],
    [ 1, 0, 0],
])) // true

console.log(checkWin([
    [ 1, 0, 1],
    [ 0, 1, 0],
    [ 0, 0, 0],
])) // false

console.log(checkWin([
    [ 0, 0, 0],
    [ 0, 0, 0],
    [ 0, 0, 0],
])) // false