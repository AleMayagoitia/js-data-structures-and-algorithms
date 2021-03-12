/**
 * An ant is sitting on an infinite grid of white and black squares. Initially, the grid is all white and the ant faces right
 * At each step, it does the following:
 * 1) At a white square, flip the color of the square, turn 90 degreed right (clockwise), and move forward one unit
 * 2) At a black square, flip the color of the square, tirn 90 degrees left (counter-clockwise) and mode forward one unit
 * 
 * Write a program to simulate the first K moves that the ant makes and print the final board as a grid.
 * Note that you are not provided with the data structure to represent the grid.
 * This is something you must design yourself.
 * The only input to your method is K. You should print the final grid and return nothing.
 * The method signature might be something like void printMoves(k)
 */
let rotate90Right = {
    left: 'up',
    right: 'down',
    up: 'right',
    down: 'left'
}

let rotate90Left = {
    left: 'down',
    right: 'up',
    up: 'left',
    down: 'right'
}
printMoves(4)

function printMoves(k) {
    let currentRow = k;
    let currentColumn = k;
    let facing = 'right';
    let positionsTouched = [`${k},${k}`];

    let maxRows = 0;
    let maxColumns = 0;

    let blackSquaresPositions = new Set();
    for(let i = 0; i < k; i++) {
        if (blackSquaresPositions.has(`${currentRow},${currentColumn}`)) {
            // black square
            blackSquaresPositions.delete(`${currentRow},${currentColumn}`);
            facing = rotate90Left[facing];
        } else {
            // white square
            blackSquaresPositions.add(`${currentRow},${currentColumn}`);
            facing = rotate90Right[facing];
        }
        // move position
        let newPosition = changePosition(currentRow, currentColumn, facing);
        currentRow = newPosition.currentRow;
        currentColumn = newPosition.currentColumn;
        if (currentRow > maxRows) {
            maxRows = currentRow
        }
        if (currentColumn > maxColumns) {
            maxColumns = currentColumn
        }
        positionsTouched.push(`${currentRow},${currentColumn}`)

    }
    let matrix =  buildGrid(maxRows, maxColumns, 'W');
    fillGrid(new Set(positionsTouched), blackSquaresPositions, matrix);
    console.log(matrix, facing)

}

function changePosition(currentRow, currentColumn, facing) {
    switch(facing) {
        case 'right': 
        currentColumn += 2;
        break;
        case 'left': 
        currentColumn -= 2;
        break;
        case 'up': 
        currentRow -= 2;
        break;
        case 'down': 
        currentRow += 2
        break;
    }
    return {currentRow, currentColumn};
    
}
function buildGrid(maxRows, maxColumns, defaultValue) {
    return new Array(maxRows + 1).fill().map(() => new Array(maxColumns + 1).fill(defaultValue))
}

function fillGrid(setOfPoints, blackSquaresPositions, matrix) {
    for(let position of setOfPoints.values()) {
        if (blackSquaresPositions.has(position)) {
            let [row, column] = position.split(',');
            matrix[row][column] = 'B'
        }
    }
}