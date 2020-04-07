/* 
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-array
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.splice(0, 0, nums.pop())
  }
};
let nums = [1,2,3,4,5,6,7], k = 3
rotate(nums, k)
/* var rotate = function (nums, k) {
  let i = 0
  let first
  while (i < k) {
    for (let j = nums.length - 1; j > 0; j--) {
      if (j === nums.length - 1) {
        first = nums[0]
        nums[0] = nums[j]
      }
      if (j === 1) {
        nums[j] = first
        continue
      }
      nums[j] = nums[j - 1]
    }
    i++
  }
};
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3
rotate(nums, k) */