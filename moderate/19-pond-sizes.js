/**
 * You have an integer matrix representing a plot of land, where the value at that location represents the height above the sea level
 * A value of zero indicates water
 * A pond is a region of water connected vertically, horizontally or diagonally. 
 * The size of the pond is the total number of connected water cells
 * 
 * Write a method to compute the sizes of all ponds in the matrix
 * 
 * i.e.
 * 
 *  0 2 1 0
 *  0 1 0 1 
 *  1 1 0 1
 *  0 1 0 1
 * 
 * output: 2, 4, 1
 */
 let matrix = [
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
];
console.log(getPondSizes(matrix)) // [ 2, 4, 1 ]


function getPondSizes(matrix) {
    let pondValues = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                let count = countPondSize(i, j, matrix);
                pondValues.push(count)
            }
        }
    }
    return pondValues;
}


function countPondSize(i, j, matrix) {
    if (i > matrix.length || j > matrix[0].length || matrix[i] === undefined || matrix[i][j] == undefined || matrix[i][j] !== 0) {
        return 0;
    }
    matrix[i][j] = null;
    let up = countPondSize(i - 1,j, matrix);
    let down = countPondSize(i + 1, j, matrix);
    let left = countPondSize(i,j - 1, matrix);
    let right = countPondSize(i, j + 1, matrix);

    let diagRightUp = countPondSize(i - 1, j + 1, matrix);
    let diagRightDown = countPondSize(i - 1, j - 1, matrix);
    let diagLeftUp = countPondSize(i + 1, j - 1, matrix);
    let diagLeftDown = countPondSize(i + 1, j + 1, matrix);
    return 1 + up + down + left + right + diagRightUp + diagRightDown + diagLeftUp + diagLeftDown;
}