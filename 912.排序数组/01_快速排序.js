function findPivot(nums) {
  return Math.floor(nums.length / 2)
}
function swap(i, j, nums) {
  if (i === j) {
    return 
  }
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
function repeactFunc(nums, from, length) {
  if (length === 1 || length === 0) {
    return
  }
  let pivot = from + findPivot(nums.slice(from, from + length))

  let i = from - 1,
    j = from
  let pivotValue = nums[pivot]
  swap(pivot, from + length - 1, nums)

  while (j <= from +length - 2) {
    if (nums[j] > pivotValue) {
      j++
    } else {
      i++
      swap(i, j, nums)
      j++
    }
  }
  swap(i + 1, from + length - 1, nums)
  // 分割 数组
  repeactFunc(nums, from, i + 1 - from)
  // i + 1 前面有 0-i 共 i + 1 个元素 如果from不是0  就只有 from到i 共 i-from+ 1个元素 还要排除 那个已经找好位置的元素 -1
  repeactFunc(nums, i + 2, length - i - 2 + from)  
}

function quickSort(nums) {
  repeactFunc(nums, 0, nums.length)
  // debugger;
}

let nums = [2, 3, 1, 6, 7, 5, 10]
// let nums = [2, 3, 1, 5]
// let nums = [5, 3, 2]
// let nums = [1, 0, -1]
quickSort(nums)