// 前缀和
// 数组A [4,5,0,-2,-3,1], K = 5
/**
 * preSum[i] 表示 A[0] + ... + A[i]
 * preSum[j] 表示 A[0] + ... + A[j]
 * 
 * 那么 A[i] = preSum[i] - preSum[i - 1]
 * A[j] = preSum[j] - preSum[j - 1]
 * 
 * 那么 A[i] + ... + A[j] = preSum[j] - preSum[i - 1]
 * 由于 i = 0 时 i - 1 = -1 溢出
 * 
 * A[0] + ... + A[j] = preSum[j] - preSum[-1]
 * 和上面preSum[j]对比得出 -> preSum[-1] = 0
 * 
 * 即在下面使用map时， 提前表示preSum[-1]已经被考虑过了
 * preSum[-1] % K = 0   ->   map = {0: 1}
 * 下次从0开始即可
 */


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let count = 0
  let map = {
    0: 1
  }
  let len = A.length
  let preSum = 0
  for (let i = 0; i < len; i++) {
    preSum = (preSum + A[i]) % K
    // 如果 preSum 小于 0 取余以后仍为负数，对于加K并不会影响取余的结果 
    if (preSum < 0) preSum += K
    if (map[preSum]) {
      count += map[preSum]
      map[preSum] += 1
    } else {
      map[preSum] = 1
    }
  }
  return count
};