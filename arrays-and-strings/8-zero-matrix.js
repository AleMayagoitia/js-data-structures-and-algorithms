// Write an algorithm such that if an element in an M * N matrix
// is 0, its entire row and column are set to 0

function zeromatrix(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const arrayRows = Array(m).fill(false);
    const arrayColumns = Array(m).fill(false);

    // find the cells that contain 0
    for(let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                arrayRows[i] = true;
                arrayColumns[j] = true;
            }
        }
    }

    // nullify rows
    for(let j = 0; j < arrayRows.length; j++) {
        if(arrayRows[j]) {
            nullifyRow(matrix, j)
        }
    }

    // nullify columns
    for(let i = 0; i < arrayColumns.length; i++) {
        if (arrayColumns[i]) {
            nullifyColumn(matrix, i)
        }
    }
}
function nullifyRow(matrix, row) {
    for(let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
    }
}
function nullifyColumn(matrix, column) {
    for(let i = 0; i < matrix.length; i++) {
        matrix[i][column] = 0;
    }
}
let matrix = [[1,0,1],[1,1,1],[0,0,1]];
zeromatrix(matrix);

console.log(matrix) // [ [ 0, 0, 0 ], [ 0, 0, 1 ], [ 0, 0, 0 ] ]