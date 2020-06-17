/**
 * 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
返回一对观光景点能取得的最高分。
示例：
输入：[8,1,5,2,6]
输出：11
解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
提示：
2 <= A.length <= 50000
1 <= A[i] <= 1000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-sightseeing-pair
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 首先写个暴力过不了

// 然后优化 A[i] + A[j] + i - j = (A[i] + i) + (A[j] - j)
/**
 * 注意到 A[j] - j 对于数组中的固定位置是确定的
 * 对于每一位来说， 只需要判断前面A[i] + i 最大值即可
 * 这样只需要遍历一次
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  // 记录下标为i的 前 0 - (i - 1)的A[j] + j最大值
  let arr = []
  arr[0] = 0
  arr[1] = A[0] + 0
  let len = A.length, max = -Infinity
  for (let i = 1; i < len; i++) {
    arr[i] = Math.max(arr[i - 1], A[i - 1] + i - 1)
    max = Math.max(arr[i] + A[i] - i, max)
  }
  return max
};