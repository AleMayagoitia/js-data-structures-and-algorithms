/**
 * Given an image represented by an N x N matrix, where each pixel in the image is 
 * represented by an integer, white a method to rotate the image by 90 degrees.
 * Can you do this in place?
 * 
 */

 /**
  * Before
  * [
  *     [1,0,1],
  *     [1,1,1],
  *     [0,0,0]
  * ]
  * After
  * * [
  *     [1,1,0],
  *     [0,1,0],
  *     [1,1,0]
  * ]
  * 
  */
 // Option 1
 // O(m*n) -  time
  function rotateMatrix90DegreesToLeft(matrix) {
      let N = matrix.length;

      // consider all squares one by one
      for(let x = 0; x < N / 2; x++) {
          // consider elements in group of 4 in current square
          for(let y = x; y < N-x-1; y++) {
              // store current cell in temp variable
              let temp = matrix[x][y];

              // move values from right to top
              matrix[x][y] = matrix[y][N-1-x];

              // move values from bottom to right
              matrix[y][N-1-x] = matrix[N-1-x][N-1-y]

              // move values from left to bottom
              matrix[N-1-x][N-1-y] = matrix[N-1-y][x]

              matrix[N-1-y][x] = temp;
          }
      }
  }
let matrix = [[1,0,1],[1,1,1],[0,0,0]];
rotateMatrix90DegreesToLeft(matrix);

console.log(matrix);// [ [ 1, 1, 0 ], [ 0, 1, 0 ], [ 1, 1, 0 ] ]

function rotateMatrix90DegreesToRight(matrix) {
    let n = matrix.length;
    // move the top edge to the right edge
    // move the right edge to the bottom edge
    // move the bottom edge to the left edge
    // mode the left edge to the top edge

    for(let layer=0; layer < n / 2; layer++) {
        let first =  layer;
        let last = n - 1 - layer;
        for(let i = first; i < last;i++) {
            let offset = i - first;
            let top = matrix[first][i]; // save top

            // left -> top
            matrix[first][i] = matrix[last - offset][first];

            // botton -> left
            matrix[last - offset][first] = matrix[last][last - offset];

            // right -> bottom
            matrix[last][last - offset] = matrix[i][last];

            // top -> right
            matrix[i][last] = top;
        }
    }

}

rotateMatrix90DegreesToRight(matrix); // [ [ 1, 1, 0 ], [ 0, 1, 0 ], [ 1, 1, 0 ] ]

console.log(matrix);// [ [ 1, 0, 1 ], [ 1, 1, 1 ], [ 0, 0, 0 ] ]