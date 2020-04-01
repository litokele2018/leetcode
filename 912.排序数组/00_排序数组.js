

/*  快速排序 超出时间限制？
var sortArray = function(nums) {
  let swap = function (i, j) { //交换两位置
    if (i === j) {
      return
    }
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  // findMedian 寻找中位数
  let findMedian = function (left, right, center) {
    if (nums[left] > nums[center]) {
      swap(left, center)
    }
    if(nums[center] > nums[right]) {
      swap(center, right)
    }
    if (nums[left] > nums[center]) {
      swap(left, center)
    }
    return nums[center]
  }
  // quickUtil
  let quickUtil = function (left, right) {
    if (left >= right) {
      return
    }
    let center = Math.floor((left + right) / 2)
    let median = findMedian(left, right, center) //找到中值
    // 现在 center处就是中值 交换到 right的前一个
    swap(center, right) // 如果相邻也没问题
  
    let i = left
    let j = right - 1
    
    while (true) {
      while (nums[i] < median) {
        i ++
      }
      while (nums[j] > median && j > i) {
        j --
      }
      // 两个都找到了 如果指向同一位置 则 替换
      if (i === j) {
        swap(i, right)
        break
      } else {
        // 如果两个的指向不同
        swap(i, j)
      }
    }
  
    // 找到正确的位置 i 和 j 的指向都为 median
    quickUtil(left, i - 1)   //left       
    quickUtil(i + 1, right)  //right       
  }
  let length = nums.length
  let left = 0
  let right = length - 1
  quickUtil(left, right)
  return nums
}; */

var sortArray = function(nums) {
  let length = nums.length
  let gap = Math.floor(length / 2) // 间隔
  while (gap >= 1) { // 最后一次进行 间隔为1的插入排序
    //进行插入排序
    for (let i = gap; i < length; i ++) {
      let j = i - gap // 前一个
      let outValue = nums[i] // 取出来的值
      while (outValue < nums[j] && j >= 0) {
        nums[j + gap] = nums[j] // 把大的往后移
        j -= gap
      }
      nums[j + gap] = outValue
    }
    gap = Math.floor(gap / 2) // 希尔间隔 n/2 .....
  }
  return nums
};


console.log(sortArray([5,1,1,2,0,0]))