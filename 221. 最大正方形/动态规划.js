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

  let arr = new Array(len1 + 1)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(len2 + 1).fill(0)
  }

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (matrix[i][j] === '1') {
        arr[i + 1][j + 1] = Math.min(arr[i][j], arr[i + 1][j], arr[i][j + 1]) + 1
        maxWidth = Math.max(arr[i + 1][j + 1], maxWidth)
      }
    }
  }

  return maxWidth ** 2
};