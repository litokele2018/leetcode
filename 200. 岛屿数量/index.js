/* 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。

示例 1:
输入:
11110
11010
11000
00000
输出: 1
示例 2:
输入:
11000
11000
00100
00011
输出: 3
解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islandCount = 0
  // 找过的1变为0
  for (let i = 0, length1 = grid.length; i < length1; i++) {
      for (let j = 0, length2 = grid[0].length; j < length2; j++) {
          if (grid[i][j] === '1') {
              islandCount++
              handler(grid, i, j)
          }
      }
  }
  return islandCount
};
function handler(grid, i, j) {
  if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0) return
  if (grid[i][j] === '1') {
      grid[i][j] = 0
  } else {
      return
  }
  handler(grid, i + 1, j)
  handler(grid, i, j + 1)
  handler(grid, i - 1, j)
  handler(grid, i, j - 1)
}