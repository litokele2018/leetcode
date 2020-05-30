/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let len = heights.length;
  let left = [];
  let right = [];

  let stack = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    left[i] = (stack.length === 0 ? -1 : stack[stack.length - 1]);
    stack.push(i);
  }

  stack = [];
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    right[i] = (stack.length === 0 ? len : stack[stack.length - 1]);
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < len; i++) {
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
}