/* 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let arr = [
    [nums[0]]
  ]
  let len = nums.length
  let i = 1
  while (i < len) {
    let arr2 = []
    let cur = nums[i]
    arr.forEach(item => {
      let l2 = item.length + 1
      for (let j = 0; j < l2; j++) {
        let a = []
        item.forEach(x => {
          a.push(x)
        })
        a.splice(j, 0, cur)
        arr2.push(a)
      }
    })
    i++
    arr = arr2
  }
  return arr
};
permute([5,4,6,2])