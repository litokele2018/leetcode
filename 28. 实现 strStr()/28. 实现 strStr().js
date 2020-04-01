/* 
给定一个 haystack 字符串和一个 needle 字符串，
在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
如果不存在，则返回  -1。
*/
/* 
输入: haystack = "hello", needle = "ll"
输出: 2
*/
// KMP算法

var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) {
    return -1
  }
  if (haystack === needle || needle === '') {
    return 0
  }
  // 1.计算子串的前缀数组
  let prefix = new Array(needle.length).fill(0)
  let i = 0, j = 1
  while (j < needle.length) {
    if (needle[i] !== needle[j] && i === 0) {
      j ++
    } else if (needle[i] === needle[j]) {
      prefix[j] = i + 1
      i ++ 
      j ++
    } else {
      while (i > 0) {
        i = prefix[i-1]
        if (needle[i] === needle[j]) {
          prefix[j] = i + 1
          break
        }
      }
    }
  }
  i = 0, j = 0
  let count = 0
  while (i < haystack.length) {
    if (needle[j] === haystack[i]) {
      i ++ 
      j ++
      count ++
    } else {
      count = 0
      if (j > 0) {
        j = prefix[j-1]
        if (needle[j] === haystack[i]) {
          count = j + 1
          i ++
          j ++
        }
        continue
      }
      i ++
    }
    if (count === needle.length) {
      return i - needle.length
    }
  }

  return -1
};

let haystack = "mississippi", needle = "pi"
strStr(haystack, needle)
debugger


/*  方法2

var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) {
    return -1
  }
  if (haystack === needle || needle === '') {
    return 0
  }

  for (let i = 0; i < haystack.length; i ++) {
    let temp = haystack.substr(i, needle.length)
    if (temp === needle) {
        return i
    }
  }
  return -1
};

*/