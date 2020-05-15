/* 
  前缀加哈希表优化
  pre[i] 表示前i项和
  那么 pre[i] = pre[i - 1] + nums[i]
  [j ... i]  子数组和 可以表示为 pre[i] - pre[j - 1]
  那么 符合条件的子数组 就需要满足  pre[i] - pre[j - 1] === k
  就只需要寻找 有多少个满足条件的 j 即可
  再移一下项: pre[j - 1] === k - pre[i]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let count = 0,
    pre = 0;
  for (const x of nums) {
    pre += x;
    if (map.has(pre - k)) count += map.get(pre - k);
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return count;
};