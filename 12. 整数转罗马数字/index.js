/* 示例 1:

输入: 3
输出: "III"
示例 2:

输入: 4
输出: "IV"
示例 3:

输入: 9
输出: "IX"
示例 4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/integer-to-roman
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // const obj = {
  //     1: 'I',
  //     5: 'V',
  //     4: 'IV',
  //     9: 'IX',
  //     10: 'X',
  //     40: 'XL',
  //     50: 'L',
  //     90: 'XC',
  //     100: 'C',
  //     400: 'CD',
  //     500: 'D',
  //     900: 'CM',
  //     1000: 'M',
  // }
  let numsOfThousand = Math.floor(num / 1000)
  let nunmsOfHundred = Math.floor((num - numsOfThousand * 1000) / 100)
  let numsOfTen = Math.floor((num - numsOfThousand * 1000 - nunmsOfHundred * 100) / 10)
  let numsOfOne = num % 10
  let ans = ''
  if (numsOfThousand) {
    for (let i = 0; i < numsOfThousand; i++) {
      ans += 'M'
    }
  }
  if (nunmsOfHundred) {
    if (nunmsOfHundred === 9) {
      ans += 'CM'
    } else if (nunmsOfHundred >= 5) {
      nunmsOfHundred -= 5
      ans += 'D'
      for (let i = 0; i < nunmsOfHundred; i++) {
        ans += 'C'
      }
    } else if (nunmsOfHundred >= 4) {
      nunmsOfHundred -= 4
      ans += 'CD'
      for (let i = 0; i < nunmsOfHundred; i++) {
        ans += 'C'
      }
    } else {
      for (let i = 0; i < nunmsOfHundred; i++) {
        ans += 'C'
      }
    }
  }
  if (numsOfTen) {
    if (numsOfTen === 9) {
      ans += 'XC'
    } else if (numsOfTen >= 5) {
      numsOfTen -= 5
      ans += 'L'
      for (let i = 0; i < numsOfTen; i++) {
        ans += 'X'
      }
    } else if (numsOfTen >= 4) {
      numsOfTen -= 4
      ans += 'XL'
      for (let i = 0; i < numsOfTen; i++) {
        ans += 'X'
      }
    } else {
      for (let i = 0; i < numsOfTen; i++) {
        ans += 'X'
      }
    }
  }
  if (numsOfOne) {
    if (numsOfOne === 9) {
      ans += 'IX'
    } else if (numsOfOne >= 5) {
      numsOfOne -= 5
      ans += 'V'
      for (let i = 0; i < numsOfOne; i++) {
        ans += 'I'
      }
    } else if (numsOfOne >= 4) {
      numsOfOne -= 4
      ans += 'IV'
      for (let i = 0; i < numsOfOne; i++) {
        ans += 'I'
      }
    } else {
      for (let i = 0; i < numsOfOne; i++) {
        ans += 'I'
      }
    }
  }
  return ans
};