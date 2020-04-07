/* 
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/same-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  } else if (!p || !q) {
    return false
  }

  if (p.val !== q.val) {
    return false
  }
  let r1 = []
  let r2 = []
  searchTree(p, r1)
  searchTree(q, r2)
  return r1.join('') === r2.join('')
};

function searchTree(cur, r) {
  if (!cur) {
    return r.push('n')
  }
  r.push(cur.val ? cur.val : 1)
  searchTree(cur.left, r)
  searchTree(cur.right, r)
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let p = new TreeNode(1)
p.left = new TreeNode(2)
p.right = null

let q = new TreeNode(1)
q.left = null
q.right = new TreeNode(2)

isSameTree(p, q)