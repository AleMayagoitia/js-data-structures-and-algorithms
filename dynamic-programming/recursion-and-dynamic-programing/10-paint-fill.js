/**
 * Implement the paint fill function that one might see on many image editing programs
 * that is, given a screen (represented by two-dimensional array of colors) a point and a new color
 * fill the durranding area until the color changes from the original color
 */
// depth search first on a graph
// at each pixel we are searching outwards to each surronding pixel
// we stop once we've fully traversed all the surrounding pixels of this color.
 function paintFill(screen, r, c, ncolor) {
     if (screen[r][c] === ncolor) return false;
     // r - row
     // c - column
     let paintFillHelper = function(screen, r, c, ocolor, ncolor) {
         if (r < 0 || r >= screen.length || c < 0 || c >= screen[0].length) return false;
         if (screen[r][c] === ocolor) {
            screen[r][c] = ncolor;
            paintFillHelper(screen, r - 1, c, ocolor, ncolor); //up
            paintFillHelper(screen, r + 1, c, ocolor, ncolor); //down
            paintFillHelper(screen, r, c - 1, ocolor, ncolor); //left
            paintFillHelper(screen, r, c + 1, ocolor, ncolor); //right
         }
         return true;
     }
     return paintFillHelper(screen, r, c, screen[r][c], ncolor);
 }