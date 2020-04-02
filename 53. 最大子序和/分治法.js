var maxSubArray = function (nums) {
  function crossSum(nums, left, right, p) { // 用来 计算 当最大子串 穿过中心值的情况 所以是从 p的左-- 右++ 开始
      if (left === right) return nums[left]
      let leftMax = -Infinity
      let currSum = 0
      for (let i = p; i >= left; i--) {
          currSum += nums[i]
          leftMax = Math.max(leftMax, currSum)
      }
      let rightMax = -Infinity
      currSum = 0
      for (let i = p + 1; i <= right; i++) {
          currSum += nums[i]
          rightMax = Math.max(rightMax, currSum)
      }
      return rightMax + leftMax
  }
  function helper(nums, left, right) {
      if (left === right) return nums[left]
      let p = Math.floor((left + right) / 2)
      let leftSum = helper(nums, left, p)
      let rightSum = helper(nums, p + 1, right)
      let cross = crossSum(nums, left, right, p)
      return Math.max(leftSum, rightSum, cross)
  }
  return helper(nums, 0, nums.length - 1)
};
