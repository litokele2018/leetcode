// 35. 搜索插入位置
var searchInsert = function(nums, target) {

  let length = nums.length 
  let left = 0
  let right = length - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  } 
  return left

};


let nums = [1,3,5,6], target = 7

searchInsert(nums, target)
debugger