/* 
不难发现，这个问题可以被分解为一些包含最优子结构的子问题，即它的最优解可以从其子问题的最优解来有效地构建，我们可以使用动态规划来解决这一问题。

第 i 阶可以由以下两种方法得到：
  在第 (i-1) 阶后向上爬一阶。
  在第 (i-2) 阶后向上爬 2 阶。
所以到达第 i 阶的方法总数就是到第 (i−1) 阶和第(i−2) 阶的方法数之和。
令 dp[i] 表示能到达第 i 阶的方法总数：
dp[i] = dp[i-1] + dp[i-2]
*/
/* 时间复杂度：O(n)，单循环到 n 。
空间复杂度：O(n)，dp 数组用了 n 的空间。 */
function climbStairs(n) {
  let dp = new Array(n + 1)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] 
  }
  return dp[n]
}
let n = 15
climbStairs(n)
debugger;