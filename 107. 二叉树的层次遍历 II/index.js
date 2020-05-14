/* 
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
通过次数51,896提交次数79,982

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = []
  let map = new Map()
  helper(root, 1, map)
  let level = map.size
  for (let i = level; i >= 1; i--) {
    result.push(map.get(i))
  }
  return result
};

function helper(node, level, map) {
  if (!node) return
  let arr = []
  if (!map.get(level)) {
    arr.push(node.val)
    map.set(level, arr)
  } else {
    map.get(level).push(node.val)
  }
  helper(node.left, level + 1, map)
  helper(node.right, level + 1, map)
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

levelOrderBottom(root)