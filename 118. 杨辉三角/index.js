// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

/* 在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return []
  let arr = [[1]]
  if (numRows === 1) return arr
  handler(arr[0], numRows - 1, arr)
  return arr
};

function handler(arr, n, result) {
  if (n === 0) return
  let arrLength = arr.length
  let temp = new Array(arrLength + 1)
  for (let i = 0; i < arrLength + 1; i++) {
      if (i === 0) {
          temp[i] = 1
      } else if (i === arrLength) {
          temp[i] = 1
      } else {
          if (i - 1 >= 0 && i < arrLength) {
              temp[i] = arr[i - 1] + arr[i]
          }
      }
  }
  result.push(temp)
  n--
  handler(temp, n, result)
}