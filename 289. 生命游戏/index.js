/* 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。
每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。
下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
示例：
输入： 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
输出：
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]

进阶：

你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？
 */
var gameOfLife = function (board) {
  let length1 = board.length
  let length2 = board[0].length
  // 创建二维数组
  let temp = new Array(length1).fill(undefined)
  for (let i in temp) {
    temp[i] = new Array(length2).fill(undefined)
  }
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      let countOfLive = 0
      if (i + 1 < length1 && board[i + 1][j] === 1) {
        countOfLive++
      }
      if (i - 1 >= 0 && board[i - 1][j] === 1) {
        countOfLive++
      }
      if (j + 1 < length2 && board[i][j + 1] === 1) {
        countOfLive++
      }
      if (j - 1 >= 0 && board[i][j - 1] === 1) {
        countOfLive++
      }
      if (i + 1 < length1 && j + 1 < length2 && board[i + 1][j + 1] === 1) { //对角线
        countOfLive++
      }
      if (i + 1 < length1 && j - 1 >= 0 && board[i + 1][j - 1] === 1) { //对角线
        countOfLive++
      }
      if (i - 1 >= 0 && j - 1 >= 0 && board[i - 1][j - 1] === 1) { //对角线
        countOfLive++
      }
      if (i - 1 >= 0 && j + 1 < length2 && board[i - 1][j + 1] === 1) {
        countOfLive++
      }

      if (board[i][j] === 0) {
        if (countOfLive === 3) {
          temp[i][j] = 1
        } else {
          temp[i][j] = 0
        }
        continue
      }
      if (board[i][j] === 1) {
        if (countOfLive < 2 || countOfLive > 3) {
          temp[i][j] = 0
        } else {
          temp[i][j] = 1
        }
      }
    }
  }
  for (let i in board) {
    for (let j in board[i]) {
      board[i][j] = temp[i][j]
    }
  }
};
let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]
gameOfLife(board)