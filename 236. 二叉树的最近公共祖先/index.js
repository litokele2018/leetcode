/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let arr = []
  // 先遍历把这两个结点找出来
  handler(root, null, arr, p, q)
  let cur1 = arr[0]
  let set1 = new Set()
  while (cur1) {
    set1.add(cur1.val)
    cur1 = cur1.pre
  }
  let cur2 = arr[1]
  let set2 = new Set()
  while (cur2) {
    set2.add(cur2.val)
    cur2 = cur2.pre
  }
  for (let i of set1) {
    if (set2.has(i)) {
      return new TreeNode(i)
    }
  }
  return -1
};

function handler(node, pre, arr, p, q) {
  if (!node) return
  node.pre = pre
  if (node.val === p.val) {
    arr.push(node)
  } else if (node.val === q.val) {
    arr.push(node)
  }
  handler(node.left, node, arr, p, q)
  handler(node.right, node, arr, p, q)
}