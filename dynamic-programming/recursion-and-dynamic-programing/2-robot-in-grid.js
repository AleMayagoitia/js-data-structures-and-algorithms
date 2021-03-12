/**
 * Imagine a robot sitting on the upper left corner of grid with rows r and columns c
 * The robot can only move into two directions, right and down, but certain cells are "off limits"
 * such that the robot cannot step on them 
 * 
 * Design an algorithm to find a path for the robot from the top to the left bottom right
 */

 // Do we care if it's the shortest path?
 // Right : r + 1, c
 // Down  : r    , c + 1

 // start on the goal position and work it up
 // O(rc)
function getPath(maze) {
    if (maze === null || maze.length == 0) return null;
    let path = [];
   let getPathHelper = function(maze, row, col, path, failedPoints = new Set()) {
       // If out of bounds or not available, return
       if (col < 0 || row < 0 || maze[row][col] !== 0) {
           return false;
       }
       if (failedPoints.has([row,col])) {
           return false;
       }
       let isAtOrigin = row === 0 && col === 0;

       // If there's a path from the start to here, add my location
       if (isAtOrigin || getPathHelper(maze, row, col - 1, path) || getPathHelper(maze, row - 1, col, path)) {
           path.push([row,col]);
           return true;

       }
       failedPoints.add([row,col]);
       return false;
   }
   getPathHelper(maze, maze.length - 1, maze[0].length - 1, path);
   return path;
}
console.log(getPath([
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]))

/**Path returned:
 * [ [ 0, 0 ],
     [ 1, 0 ],
     [ 2, 0 ],
     [ 3, 0 ],
     [ 3, 1 ],
     [ 3, 2 ],
     [ 3, 3 ] ]
 */