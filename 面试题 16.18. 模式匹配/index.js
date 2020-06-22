/* 
你有两个字符串，即pattern和value。 
pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。
例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。
但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。
示例 1：
输入： pattern = "abba", value = "dogcatcatdog"
输出： true
示例 2：
输入： pattern = "abba", value = "dogcatcatfish"
输出： false
示例 3：
输入： pattern = "aaaa", value = "dogcatcatdog"
输出： false
示例 4：
输入： pattern = "abba", value = "dogdogdogdog"
输出： true
解释： "a"="dogdog",b=""，反之也符合规则
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pattern-matching-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function(pattern, value) {
  let count_a = 0,
    count_b = 0;
  for (const i of pattern) {
    if (i === 'a') {
      count_a++;
    } else {
      count_b++;
    }
  }
  if (count_a < count_b) {
    // 这一步保证a的数量大于b
    [count_a, count_b] = [count_b, count_a];
    const array = pattern.split('');
    // 将a和b替换
    for (let i = 0, len = array.length; i < len; i++) {
      array[i] = array[i] === 'a' ? 'b' : 'a';
    }
    pattern = array.join('');
  }
  // 因为有b必有a， 当value的长度为0时，要么没有ab 要么只有a
  if (!value.length) return count_b === 0
  if (!pattern.length) return false;

  for (let len_a = 0; count_a * len_a <= value.length; len_a++) {
    // 剩余的长度 分配给b
    const rest = value.length - count_a * len_a;
    // 1.剩余长度为0且b的个数为0  
    // 2.b的个数不为零，剩余长度刚好时b的整数倍
    if ((count_b === 0 && rest === 0) || (count_b !== 0 && rest % count_b === 0)) {
      const len_b = (count_b === 0 ? 0 : rest / count_b);
      let pos = 0,
        correct = true,
        value_a = '',
        value_b = '';
      for (const item of pattern) {
        // 如果遇到的是 a , 通过上面 定义的 a的长度, 计算出a的值
        if (item === 'a') {
          const sub = value.substring(pos, pos + len_a);
          // 初始化
          if (value_a.length === 0) {
            value_a = sub;
          } else if (value_a !== sub) {
            // 如果下一次遇到 a , 并且通过a的长度计算的值 不等于第一次获得的值
            correct = false;
            break;
          }
          pos += len_a;
        } else {
          // 如果遇到的是b
          const sub = value.substring(pos, pos + len_b);
          if (value_b.length === 0) {
            value_b = sub;
          } else if (value_b !== sub) {
            correct = false;
            break;
          }
          pos += len_b;
        }
      }
      // 有题目要求 a !== b
      if (correct && value_a !== value_b) {
        return true;
      }
    }
  }
  return false;
};