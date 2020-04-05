var trap = function (height) {
  let left = 0
  let right = height.length - 1
  let ans = 0
  let left_max = 0  // 用于记录当前的水平面 
  let right_max = 0 // 用于记录当前的水平面
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left]
      } else {
        ans += left_max - height[left]
      }
      left++
    } else {
      if (height[right] >= right_max) {
        right_max = height[right]
      } else {
        ans += right_max - height[right]
      }
      right--
    }
  }
  return ans
}
let height = [2, 0, 2]
trap(height)
debugger