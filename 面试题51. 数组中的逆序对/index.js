/* 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
示例 1:
输入: [7,5,6,4]
输出: 5
限制：
0 <= 数组长度 <= 50000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let len = nums.length
  // [1], [] 没有逆序对
  if (len < 2) return 0
  // 归并排序 + 分治
  let copy = [] // 不修改原函数 复制数组
  nums.forEach((item, index) => {
    copy[index] = item
  })
  let temp = [] // => 用于归并两个有序数组
  return mergeSortWithReversePairs(copy, 0, len - 1, temp)
};

const mergeSortWithReversePairs = (nums, left, right, temp) => {
  // 当元素只有一个时，没有逆序对数
  if (left === right) return 0
  // [0, 1] 取 mid = 0 , 下面写法 避免当left, right数值过大时出现的bug
  let mid = Math.floor(left + (right - left) / 2)
  let leftPairs = mergeSortWithReversePairs(nums, left, mid, temp)
  let rightPairs = mergeSortWithReversePairs(nums, mid + 1, right, temp)
  // 在归并前进行判断， 如果两边加起来已经是有序的那么就不用继续归并组合了
  if (nums[mid] <= nums[mid + 1]) return leftPairs + rightPairs
  let crossPairs = mergeAndCount(nums, left, mid, right, temp)
  return leftPairs + rightPairs + crossPairs
}
const mergeAndCount = (nums, left, mid, right, temp) => {
  // nums[left, mid] 有序 且 nums[mid + 1, right] 有序
  for (let i = left; i <= right; i++) {
    temp[i] = nums[i]
  }
  let i = left,
    j = mid + 1
  let count = 0
  for (let k = left; k <= right; k++) {
    if (i === mid + 1) { // 左边归并完了
      nums[k] = temp[j]
      j++
    } else if (j === right + 1) { // 右边归并完了
      nums[k] = temp[i]
      i++
    } else if (temp[i] <= temp[j]) {
      nums[k] = temp[i]
      i++
    } else {
      nums[k] = temp[j]
      count += (mid - i + 1)
      j++
    }
  }
  return count
}