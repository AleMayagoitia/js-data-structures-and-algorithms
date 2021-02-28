/**
 * Say that you are a traveler on a 2D grid. You begin in the top-left corner
 * and your goal is to travel to the bottom -right corner.
 * Yoy may only move down or right
 * 
 * In how many ways can you travel to the goal on a grid with dimations m * n?
 */

 function gridTraveler(m , n) {
     let grid = new Array(m + 1).fill().map(() => Array(n + 1).fill(0));
     grid[1][1] = 1;
     // for each element in the grid, add itself to the right and bottom neighbor
     for(let i = 0; i <= m; i++) {
         for(let j =0; j <= n; j++) {
             // bottom 
             if (grid[i + 1] !== undefined && grid[i + 1][j] !== undefined) {
                grid[i + 1][j] +=  grid[i][j];
             }
             // right
             if (grid[i] !== undefined && grid[i][j+ 1] !== undefined) {
                grid[i][j + 1] +=  grid[i][j];
             }
         }
     }
     console.log(grid);
     console.log(grid[m][n])
     return grid[m][n];
 }

 gridTraveler(3,3)

 // Tabulation recipe
 /**
  * visualize the problem as a table
  * size the table based on inputs
  * initialize the table with default values (that make sense)
  * seed the trival answer into the table
  * 
  * fill further positions based on the current position
  * 
  * 
  */