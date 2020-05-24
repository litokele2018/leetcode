/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let sLen = s.length,
    tLen = t.length;
  if (sLen === 0 || tLen === 0 || tLen > sLen) return "";
  let sMap = new Map()
  let tMap = new Map()
  t.split('').forEach(item => {
    if (!tMap.has(item)) {
      tMap.set(item, 1)
    } else {
      tMap.set(item, tMap.get(item) + 1)
    }
  })
  let minLen = Infinity
  let begin = Infinity
  // 左闭右开区间 [left, right) => len = right - left
  let left = 0,
    right = 0;
  // 滑动窗口
  // 记录总的数量
  let distance = 0;
  while (right < sLen) {
    if (!tMap.get(s[right])) {
      right++
      continue
    }
    if ((sMap.get(s[right]) ? sMap.get(s[right]) : 0) < tMap.get(s[right])) {
      distance++
    }
    sMap.set(s[right], (sMap.get(s[right]) ? sMap.get(s[right]) : 0) + 1)
    right++

    // 当满足条件时
    while (distance === tLen) {
      if (minLen > right - left) {
        begin = left
        minLen = right - left
      }
      // 如果删除left无影响
      if (!tMap.has(s[left])) {
        left++
        continue
      }
      if (tMap.has(s[left]) && sMap.get(s[left]) === tMap.get(s[left])) {
        distance--
      }
      sMap.set(s[left], sMap.get(s[left]) - 1)
      left++
    }
  }
  return s.substr(begin, minLen)
};

let S = "ADOBECODEBANC",
  T = "ABC"

minWindow(S, T)