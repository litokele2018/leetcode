/* 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subtree-of-another-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let val = t.val
  let cur = []
  handler(s, val, cur)
  let len = cur.length
  if (!len) return false
  let flag = false
  for (let i = 0; i < len; i++) {
    flag = flag || helper(cur[i], t)
  }
  return flag
};

function handler(node, val, cur) {
  if (!node) return
  if (node.val === val) {
    cur.push(node)
  }
  handler(node.left, val, cur)
  handler(node.right, val, cur)
}

function helper(node1, node2) {
  if (!node1 && !node2) {
    return true
  } else if (!node1 || !node2) {
    return false
  }
  if (node1.val === node2.val) {
    return helper(node1.left, node2.left) && helper(node1.right, node2.right)
  }
  return false
}