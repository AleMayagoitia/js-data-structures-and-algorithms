/**
 * Given an M x N matrix in which each row and colum is sorted in ascending order, write a method to find an element
 */


/**
 * Two ways to approach this:
 * 
 * - take advantage of just one sorted part
 * - take advantage of both sorted parts
 */

// solution 1
// binary search on every row to find the element
// This algorithm will be O(m log n) since there are M rows and log N is the time it takes to search on each one
function findElement(matrix, elem) {
    let row = 0;
    let col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0) {
        if (matrix[row][col] === elem) {
            return true
        } else if (matrix[row][col] > elem) {
            col--
        } else {
            row++;
        }
    }
    return false;
}

