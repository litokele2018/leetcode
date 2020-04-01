// 35. 搜索插入位置
var searchInsert = function(nums, target) {
  for (let i = 0, length = nums.length; i < length; i ++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return nums.length
};


let nums = [1,3,5,6], target = 1

// 6
searchInsert(nums, target)
debugger