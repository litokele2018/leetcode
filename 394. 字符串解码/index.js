/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = []
  let len = s.length
  let res = ''
  let multi = 0
  for (let i = 0; i < len; i++) {
    if (!Number.isNaN(s[i] * 1)) {
      // 如果是数字
      multi = multi * 10 + s[i] * 1
    } else if (s[i] === '[') {
      stack.push([multi, res])
      multi = 0
      res = ''
    } else if (s[i] === ']') {
      let [m, str] = stack.pop()
      for (let i = 0; i < m; i++) {
        str += res
      }
      res = str
    } else {
      // 字符
      res += s[i]
    }
  }
  return res;
};

let s = "3[a]2[bc]"

decodeString(s)