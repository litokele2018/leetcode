/* 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:

输入: "aba"
输出: True
示例 2:

输入: "abca"
输出: True
解释: 你可以删除c字符。
注意:

字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(str) {
  let l = 0,
    r = str.length - 1; // 创建双指针
  while (l < r) {
    if (str[l] !== str[r]) { // 转为判断删掉左右指针字符之一的字串，是否是回文串
      return isPali(str, l + 1, r) || isPali(str, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};

function isPali(str, l, r) { // 辅助函数
  while (l < r) { // 指针相遇 结束循环
    if (str[l] !== str[r]) { // 一票否决
      return false;
    }
    l++; // 指针挪动，相互逼近
    r--;
  }
  return true; // 没有遇到不同，返回true
}