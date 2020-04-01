var removeDuplicates = function(nums) {
  let set = new Set(nums)
  let result = []
  for (let item of set) {
      result.push(item)
  }
  nums = result
  return nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))