/* 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶 */

/**
 * @param {number} n
 * @return {number}
 */

/* 
 方法一：暴力法
算法

在暴力法中，我们将会把所有可能爬的阶数进行组合，也就是 1 和 2 。
而在每一步中我们都会继续调用 climbStairsclimbStairs 这个函数模拟爬 11 阶和 22 阶的情形，并返回两个函数的返回值之和。

climbStairs(i,n)= climbStairs(i + 1, n) + climbStairs(i + 2, n)

其中 ii 定义了当前阶数，而 nn 定义了目标阶数。
作者：LeetCode
链接：https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode/
来源：力扣（LeetCode）
 */ 
/* 时间复杂度：O(2^n)，树形递归的大小为 2^n2 
  */
var climbStairs = function (n) {
  function climbStair(i, n) {
    if (i > n) {
      return 0
    }
    if (i === n) {
      return 1
    }
    return climbStair(i + 1, n) + climbStair(i + 2, n)
  }
  return climbStair(0, n)
};
let n = 44
climbStairs(n) //1134903170 超时 
debugger