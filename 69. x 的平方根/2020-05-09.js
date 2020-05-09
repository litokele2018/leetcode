/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x
  let arr = []
  handler(left, right, arr, x)
  return arr[0]
};

function handler(left, right, arr, x) {
  if (arr.length) return
  if (left === right) return arr[0] = left
  let mid = left + Math.floor((right - left) / 2)
  let cur = mid ** 2
  if (cur === x) {
    return arr[0] = mid
  } else if (cur < x) {
    if ((mid + 1) ** 2 > x) return arr[0] = mid
    handler(mid + 1, right, arr, x)
  } else {
    handler(left, mid, arr, x)
  }
}