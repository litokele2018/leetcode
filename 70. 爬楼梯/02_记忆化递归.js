// 因为暴力递归的时候会出现冗余

var climbStairs = function (n) {  // 时间复杂度 O(n)
  let memo = []
  function climbStair(i, n) {
    if (i > n) {
      return 0
    }
    if (i === n) {
      return 1
    }
    if (memo[i]) {
      return memo[i]
    }
    memo[i] = climbStair(i + 1, n) + climbStair(i + 2, n)
    return memo[i]
  }
  return climbStair(0, n)
};
let n = 44
climbStairs(n) //1134903170 超时 
debugger