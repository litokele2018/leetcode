/* 
38. 外观数列
    1.     1
    2.     11
    3.     21
    4.     1211
    5.     111221
*/

var countAndSay = function (n) {
  let temp = '1'
  for (let i = 1; i < n; i++) {
    let newTemp = ''
    for (let j = 0; j < temp.length; j++) {
      if (j + 1 < temp.length && temp[j] === temp[j + 1]) {
        let count = 0
        while (j + count + 1 < temp.length && temp[j + count + 1] === temp[j]) {
          count++
        }
        newTemp += `${count >= 1 ? count + 1: ''}${temp[j]}`
        j += count
      } else {
        newTemp += `1${temp[j]}`
      }
    }
    temp = newTemp
  }
  return temp
};
countAndSay(6)
debugger