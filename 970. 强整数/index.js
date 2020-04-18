/* 给定两个正整数 x 和 y，如果某一整数等于 x^i + y^j，其中整数 i >= 0 且 j >= 0，那么我们认为该整数是一个强整数。
返回值小于或等于 bound 的所有强整数组成的列表。
你可以按任何顺序返回答案。在你的回答中，每个值最多出现一次。
示例 1：
输入：x = 2, y = 3, bound = 10
输出：[2,3,4,5,7,9,10]
解释： 
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2
示例 2：
输入：x = 3, y = 5, bound = 15
输出：[2,4,6,8,10,14]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/powerful-integers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let arr = []
  let set = new Set()
  handler(x, y, arr, bound, 0, 0, set)
  arr.sort((a, b) => a - b)
  return arr
};
function handler(x, y, arr, bound, i, j, set) {
  let val = Math.pow(x, i) + Math.pow(y, j)
  if (val > bound || ((x === 1 && i > 0) || (y === 1 && j > 0))) return
  if (!set.has(val)) {
      set.add(val)
      arr.push(val)
  }
  handler(x, y, arr, bound, i, j + 1, set)
  handler(x, y, arr, bound, i + 1, j, set)
  handler(x, y, arr, bound, i + 1, j + 1, set)
}
powerfulIntegers(2, 1, 10)
