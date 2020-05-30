/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let len = heights.length;
  let left = [];
  let right = [];
  let stack = new Stack()

  for (let i = 0; i < len; i++) {
    let h = heights[i]
    while (stack.size() && heights[stack.peak()] >= h) {
      stack.pop()
    }
    left[i] = stack.size() === 0 ? -1 : stack.peak()
    stack.push(i)
  }

  stack.clear()

  for (let i = len - 1; i >= 0; i--) {
    let h = heights[i]
    while (stack.size() && heights[stack.peak()] >= h) {
      stack.pop()
    }
    right[i] = stack.size() === 0 ? len : stack.peak()
    stack.push(i)
  }

  let res = 0
  for (let i = 0; i < len; i++) {
    res = Math.max(res, (right[i] - left[i] - 1) * heights[i])
  }
  return res
}

// util
class Stack {
  constructor() {
    this.arr = []
  }

  size() {
    return this.arr.length
  }

  peak() {
    let len = this.arr.length
    return len > 0 ? this.arr[len - 1] : null
  }

  pop() {
    return this.arr.pop()
  }

  push(item) {
    return this.arr.push(item)
  }

  clear() {
    this.arr = []
  }
}