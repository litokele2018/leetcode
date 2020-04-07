/* 
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
不占用额外内存空间能否做到？

示例 1:
给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

示例 2:
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-matrix-lcci
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let length1 = matrix.length
  let length2 = matrix[0].length

  for (let i = 0; i <= Math.floor((matrix.length - 1) / 2); i++) {
    let j = 0

    while (j < length2 - 1 - 2 * i) {
      let temp = matrix[length1 - 1 - i][j + i]
      matrix[length1 - 1 - i][j + i] = matrix[length1 - 1 - i - j][length2 - 1 - i]
      matrix[length1 - 1 - i - j][length2 - 1 - i] = matrix[i][length2 - 1 - j - i]
      matrix[i][length2 - 1 - j - i] = matrix[j + i][i]
      matrix[j + i][i] = temp
      j++
    }
  }
};

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
] 
rotate(matrix)