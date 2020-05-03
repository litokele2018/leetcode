/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let len = mountainArr.length()
  let left = 0
  let right = len - 1
  // 获取峰顶
  let peakIndex = getPeakIndex(left, right, mountainArr)
  if (mountainArr.get(peakIndex) === target) return peakIndex
  // 先二分查找 左边
  let res = findSortedArray(target, left, peakIndex, mountainArr)
  // 判断是否找到
  if (res !== -1) {
    return res
  } else {
    // 没找到 就找右边
    return findReverseArray(target, peakIndex + 1, right, mountainArr)
  }
};

function getPeakIndex(left, right, mountainArr) {
  // 向下取整
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) { // 爬坡
      left = mid + 1
    } else { // 下坡
      right = mid
    }
  }
  return left
}

function findSortedArray(target, left, right, mountainArr) {
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    let x = mountainArr.get(mid)
    if (x === target) return mid
    if (x < target) { // 爬坡
      left = mid + 1
    } else { // 下坡
      right = mid
    }
  }
  return mountainArr.get(left) === target ? left : -1
}

function findReverseArray(target, left, right, mountainArr) {
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2) + 1
    let x = mountainArr.get(mid)
    if (x === target) return mid
    if (x < target) { // 爬坡
      right = mid - 1
    } else { // 下坡
      left = mid
    }
  }
  return mountainArr.get(left) === target ? left : -1
}