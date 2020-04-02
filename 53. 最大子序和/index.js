/* 
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
示例:
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:
如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//  O(n)
var maxSubArray = function (nums) {
  let ans = nums[0]; // 总的最大值
  let sum = 0;  // 上一次的
  nums.forEach(item => {
    if (sum > 0) { // 如果上一次的值小于 0 则对本次没有任何帮助 直接去掉
      sum += item
    } else {
      sum = item
    }
    ans = Math.max(ans, sum) // 每次都将这次的值和最大值进行比较 
  })
  return ans
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(nums)