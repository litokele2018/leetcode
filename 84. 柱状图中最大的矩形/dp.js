/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let dp = []
  let arr = []
  let len = heights.length
  if (!len) return 0
  // 记录最大
  dp[0] = heights[0]
  arr[0] = heights[0]

  const handler = function(i, heights) {
    let minHeight = heights[i]
    let width = 1
    let max = minHeight

    for (let j = i - 1; j >= 0; j--) {
      minHeight = Math.min(minHeight, heights[j])
      width++
      let sum = minHeight * width
      if (sum > max) {
        max = sum
      }
    }
    return max
  }

  for (let i = 1; i < len; i++) {
    // 包含自己 和 不包含自己
    dp[i] = Math.max(dp[i - 1], handler(i, heights))
  }
  return dp[len - 1]
};