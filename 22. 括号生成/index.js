/* 
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
示例：
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
*/

var generateParenthesis = function (n) {
  let res = [];
  // 使用递归
  function h(ps, left, right) {
    if (left == n && right == n) {
      res.push(ps)
      return
    }
    if (left < n) {
      h(ps + '(', left + 1, right)
    }
    if (left > right) {
      h(ps + ')', left, right + 1)
    }
  }
  h('', 0, 0)
  return res
};
let n = 3
generateParenthesis(n)
debugger