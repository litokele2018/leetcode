var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let len = s.length
  let max = 0
  let count = 0

  for (let i = 0; i < len; i++) {
    debugger
    if (!map.get(s[i])) {
      map.set(s[i], i)
      count++
      max = Math.max(count, max)
    } else {
      let j = map.get(s[i])
      map.clear()
      count = 0
      i = j
      continue
    }
  }
  return max
};

let s = "abcabcbbc"
lengthOfLongestSubstring(s)