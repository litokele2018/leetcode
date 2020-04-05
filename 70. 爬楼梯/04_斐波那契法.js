/* 
在上述方法中，我们使用 dpdp 数组，其中 dp[i]=dp[i-1]+dp[i-2]。可以很容易通过分析得出 dp[i] 其实就是第 i 个斐波那契数。
Fib(n)=Fib(n-1)+Fib(n-2)
现在我们必须找出以 1 和 2 作为第一项和第二项的斐波那契数列中的第 n 个数，也就是说 Fib(1)=1 且 Fib(2)=2。
 */
function climbStairs(n) {
  let first = 1
  if (n === 1) {
    return first
  }
  let second = 2
  let third
  for (let i = 3; i < n + 1; i++) {
    third = first + second
    first = second
    second = third
  }
  return second
}
let n = 15
climbStairs(n)
debugger;