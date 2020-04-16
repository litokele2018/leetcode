/* 108. 将有序数组转换为二叉搜索树
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
示例:
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
      0
     / \
   -3   9
   /   /
   -10  5
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  return helper(nums)
}

function helper(arr) {
  if (!arr.length) {
    return
  }
  let midIndex = Math.floor(arr.length / 2)
  let root = new TreeNode(arr[midIndex])
  let left = arr.slice(0, midIndex)
  let right = arr.slice(midIndex + 1)
  if (left.length > 1) {
    root.left = helper(left)
  } else if (left.length === 1) {
    root.left = new TreeNode(left[0])
  }
  if (right.length > 1) {
    root.right = helper(right)
  } else if (right.length === 1) {
    root.right = new TreeNode(right[0])
  }
  return root
}


function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

nums = [-10, -3, 0, 5, 9]
sortedArrayToBST(nums)
debugger