/**
 * Write an algorithm to print all ways of arranging eith queens on an 8*8 chess board
 * so that none of them share the same row, column or diagonal
 * 
 * In this case, diagonal means all diagonals, not just that bisect the board
 */

 // each row should have a queen -> count all of those possibilities
 // each colum should have a queen too
let gridSize = 8;
 function placeQueens(row, columns, results) {
     if (row === gridSize) {results.add(Object.assign({}, columns))}
     else {
         for(let col = 0; col < gridSize; col++) {
             if (checkValid(columns, row, col)) {
                 columns[row] = col; // place queen
                 placeQueens(row+1, columns, results);
             }
         }
     }
 }
// check if (row, col) is a valid spot  for a queen by checking if there is a queen in the same column or diagonal
// We don't need to check it for queens in the row because the calling placeQueen only attempts to place one queen at a time
// We know the row is empty
 function checkValid(columns, row1, column1) {
     for(let row2 = 0; row2 < row1; row2++) {
         let column2 = columns[row2];
         // check if rows have queen in the same column
         if (column1 === column2) {
             return false;
         }

         // check diagonals, if the distance between the columns equals the distance between the rows, then they're in the same diagonal
         let columnDistance = Math.abs(column2 - column1);

         // row1 > row2, so no need for abs
         let rowDistance = row1 - row2;
         if (columnDistance === rowDistance) {
             return false;
         }
     }
     return true;

 }
 // Observe that since each row only have one wueen, we don't need to store our board as a full 8x8 matrix
 // we only need a single array where column[r] = c indicates that row r has a queen at column c