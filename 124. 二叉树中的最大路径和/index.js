/* 
给定一个非空二叉树，返回其最大路径和。
本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。
该路径至少包含一个节点，且不一定经过根节点。
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
 * @return {number}
 */
var maxPathSum = function(root) {
  let res = [-Infinity]
  handler(root, res)
  return res[0]
};

function handler(node, res) {
  if (!node) return 0
  // 负值直接pass
  let left = Math.max(handler(node.left, res), 0)
  let right = Math.max(handler(node.right, res), 0)
  // 每个节点都求了一次sum， 这样就可以从任意节点出发 比较出最大值
  let sum = node.val + left + right
  // 需要用一个全局的变量 存储最大值
  res[0] = Math.max(sum, res[0])
  // 因为可以不选择根节点， 返回值并不是最终结果
  // 返回值只是往父节点传递 后面走哪条路径最大
  return node.val + Math.max(left, right)
}