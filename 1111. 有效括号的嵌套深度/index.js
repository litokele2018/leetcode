// 方法一
// 为了让总的深度最小, 让奇数层的括号给A 偶数层的括号给B
/* 
括号序列   ( ( ) ( ( ) ) ( ) )
下标编号   0 1 2 3 4 5 6 7 8 9
嵌套深度   1 2 2 2 3 3 2 2 2 1 
*/
var maxDepthAfterSplit = function(seq) {
  let dep = 0;
  return seq.split("").map((value, index) => {
      if (value === '(') {
          ++dep;
          return dep % 2;
      } else {
          let ans = dep % 2;
          --dep;
          return ans;
      }
  });
};

// 方法二
var maxDepthAfterSplit = function(seq) {
  // 判断奇偶性
  return seq.split("").map((value, index) => index & 1 ^ (value === '('));  // 2 & 1 : 0  , 3 & 1 : 1
};
/* 

括号序列   ( ( ) ( ( ) ) ( ) )
下标编号   0 1 2 3 4 5 6 7 8 9
嵌套深度   1 2 - 2 3 - - 2 - -
嵌套深度   - - 2 - - 3 2 - 2 1 
左括号 ( 的下标编号与嵌套深度的奇偶性相反，也就是说：
    下标编号为奇数的 (，其嵌套深度为偶数，分配给 B；
    下标编号为偶数的 (，其嵌套深度为奇数，分配给 A。
右括号 ) 的下标编号与嵌套深度的奇偶性相同，也就是说：
    下标编号为奇数的 )，其嵌套深度为奇数，分配给 A；
    下标编号为偶数的 )，其嵌套深度为偶数，分配给 B。
*/

let seq = "()(())()"
maxDepthAfterSplit(seq)
