/**
 * You have a stack of n boxes, with widths w, heights h, and depths d
 * The boxes cannot be rotated and can only be stacked on top of one another if each box in the stacks is 
 * strictly larger than the box above it in width, height and depth.
 * 
 * Implement a method to compute the height of the tallest possible stack.
 * The height of a stack is the sum of the heights of each box
 * 
 * []
 * 
 */

 /**
  * Constraints:
  *     - array boxes: width, height, depth
  *  Rules
  *     - no rotation allowed
  *     - a box can only be stacked over a larger box 
  *     - the stack height is the sum of all boxes heights inside the stack.
  * 
  */

  function createStack(boxes) {
      // sort in decending order by height
      let sortedBoxes = boxes.sort(a,b => a.height - b.height);
      let stackMap = new Map();
      let maxHeight = 0;

      for (let i; i < sortedBoxes.length; i++) {
          let height = createStackHelper(boxes,i, stackMap);
          maxHeight = Math.max(height, maxHeight);
      }
      return maxHeight;
  }

  function createStackHelper(boxes, bottomIndex, stackMap) {
      if(stackMap.get(bottomIndex)) return stackMap.get(bottomIndex);
      let bottom = boxes[bottomIndex];
      let maxHeight = 0;
      for(let i = bottomIndex + 1; i < boxes.length; i++) {
          if (boxes[i].height < bottom.height) {
              let height = createStackHelper(boxes, i,stackMap);
              maxHeight = Math.max(height, maxHeight);
          }
      }
      maxHeight += bottom.height;
      stackMap.set(bottomIndex, maxHeight);
      return maxHeight;
  }