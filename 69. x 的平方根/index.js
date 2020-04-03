/* 
实现 int sqrt(int x) 函数。
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:
输入: 4
输出: 2

示例 2:
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
*/

var mySqrt = function (x) {
  let root = Math.floor(x / 2) + 1
  let left = 0
  let right = 0
  while (root ** 2 !== x) {
    if (root ** 2 > x) {
      right = root
      if ((root - 1) ** 2 < x) {
        return root - 1
      }
    } else if (root ** 2 < x) {
      left = root
      if ((root + 1) ** 2 > x) {
        return root
      }
    } else {
      return root
    }
    root = Math.floor(left + (right - left) / 2)
  }
  return root
};
let xxx = 120
mySqrt(xxx)
debugger