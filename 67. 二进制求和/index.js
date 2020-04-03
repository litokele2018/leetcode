/* 
给定两个二进制字符串，返回他们的和（用二进制表示）。
输入为非空字符串且只包含数字 1 和 0。

示例 1:
输入: a = "11", b = "1"
输出: "100"
示例 2:
输入: a = "1010", b = "1011"
输出: "10101"
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = []
  let carry = 0
  while (a.length !== b.length) {
    if (a.length < b.length) {
      for (let i = 0; i < b.length - a.length; i++) {
        a = '0' + a
      }
    } else {
      for (let i = 0; i < a.length - b.length; i++) {
        b = '0' + b
      }
    }
  }
  for (let i = a.length - 1; i >= 0; i--) {
    ans[i] = (a[i] * 1 + b[i] * 1 + carry) % 2
    if (a[i] * 1 + b[i] * 1 + carry > 1) {
      carry = 1
    } else if (a[i] * 1 + b[i] * 1 + carry <= 1) {
      carry = 0
    }
    if (i === 0 && carry !== 0) {
      ans.unshift(carry % 2)
    }
  }
};
var addBinary = function (a, b) {
  let ans = "";
  let ca = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = ca;
    // 如果某个短的已经遍历完了 直接排除它
    sum += i >= 0 ? parseInt(a[i]) : 0;
    sum += j >= 0 ? parseInt(b[j]) : 0;
    ans += sum % 2;           // 当前位
    ca = Math.floor(sum / 2); // 进位
  }
  ans += ca == 1 ? ca : "";
  return ans.split('').reverse().join('');
};
let a = "1011"
let b = "1010" // 10101
addBinary(a, b)