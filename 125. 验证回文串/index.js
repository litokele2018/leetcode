/* 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。
示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:
输入: "race a car"
输出: false
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) return true
  s = s.toLowerCase()
  let reg = new RegExp(/\w/g)
  let ans = s.match(reg)
  if (!ans) return true 
  return ans.join('') === ans.reverse().join('')
};
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))