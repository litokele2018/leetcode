/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  return helper(nums, 0, nums.length - 1)
};

function helper(nums, left, right) {
  if (left === right) return nums[left]
  let mid = left + Math.floor((right - left) / 2)
  let leftSum = helper(nums, left, mid)
  let rightSum = helper(nums, mid + 1, right)
  let cross = crossSum(nums, left, right, mid)
  return Math.max(leftSum, rightSum, cross)
}
// 用来计算最大子串穿过中心值的情况 所以是从mid的左-- 右++ 开始
function crossSum(nums, left, right, mid) {
  if (left === right) return nums[left]
  // 保存mid左边的最大值 （包含mid）
  let leftMax = -Infinity
  let currSum = 0
  for (let i = mid; i >= left; i--) {
    currSum += nums[i]
    leftMax = Math.max(leftMax, currSum)
  }
  // 保存mid右边的最大值 （不包含mid）
  let rightMax = -Infinity
  currSum = 0
  for (let i = mid + 1; i <= right; i++) {
    currSum += nums[i]
    rightMax = Math.max(rightMax, currSum)
  }
  return rightMax + leftMax
}