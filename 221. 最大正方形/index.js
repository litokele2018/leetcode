/* 
在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
示例:
输入: 
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
输出: 4
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let maxWidth = 0
  let len1 = matrix.length
  if (len1 === 0) {
    return 0
  }
  let len2 = matrix[0].length
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[i][j] === '1') {
        while (true) {
          if (i + maxWidth + 1 > len1 || j + maxWidth + 1 > len2) {
            break
          }
          let flag = true
          for (let h = i; h < i + maxWidth + 1; h++) {
            for (let g = j; g < j + maxWidth + 1; g++) {
              if (matrix[h][g] === '0') {
                flag = false
                break
              }
            }
            if (!flag) {
              break
            }
          }
          if (flag) {
            maxWidth++
          } else {
            break
          }
        }
      }
    }
  }
  return maxWidth ** 2
};
let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]
maximalSquare(matrix)