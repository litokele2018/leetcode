/* 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
示例 1：
输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
示例 2：
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
限制：
2 <= nums <= 10000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let len = nums.length
  let sum = 0
  // 所有异或 取得两个不相同的异或和
  for (let i = 0; i < len; i++) {
    sum ^= nums[i]
  }
  // 找到异或和中的最低为为1的位
  // 因为为1表明它们俩在这位上不同 就可以拿来区别他们进行分组
  let mask = 1
  while ((mask & sum) === 0) {
    mask <<= 1 // 左移一位
  }
  // 找到了mask 通过该位进行分组
  let a = 0
  let b = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] & mask) {
      a ^= nums[i]
    } else {
      b ^= nums[i]
    }
  }
  return [a, b]
};