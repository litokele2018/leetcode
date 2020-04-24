/* 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
示例1:
 输入: n = 5
 输出：2
 解释: 有两种方式可以凑成总金额:
5=5
5=1+1+1+1+1
示例2:
 输入: n = 10
 输出：4
 解释: 有四种方式可以凑成总金额:
10=10
10=5+5
10=5+1+1+1+1+1
10=1+1+1+1+1+1+1+1+1+1
说明：
注意:
你可以假设：
0 <= n (总金额) <= 1000000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number} n
 * @return {number}
 */
let waysToChange = (n) => {
  let dp = new Array(n + 1).fill(1)
  let coins = [1, 5, 10, 25]
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j <= n; j++) {
      if (j - coins[i] >= 0) {
        dp[j] = (dp[j] + dp[j - coins[i]]) % (1e9 + 7)
      }
    }
  }
  return dp[n]
};

let x = waysToChange(15)
console.log(x)
/* # dp[i][j] 使用前i种硬币计算j分的表示法种数 令coins=[25, 10, 5, 1]
# dp[i][j] = dp[i-1][j] + dp[i-1][j-coins[i]] + dp[i-1][j-2*coins[i]] + ... dp[i-1][j-k*coins[i]]
# j >= k*coins[i]
# dp[i][j-coins[i]] = dp[i-1][j-coins[i]] + dp[i-1][j-2*coins[i]] + ... dp[i-1][j-k*coins[i]]
# dp[i][j] - dp[i][j-coins[i]] = dp[i-1][j]
# dp[i][j] = dp[i][j-coins[i]] + dp[i-1][j] */