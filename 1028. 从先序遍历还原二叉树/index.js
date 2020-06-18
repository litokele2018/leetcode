/* 
输入："1-2--3--4-5--6--7"
输出：[1,2,5,3,4,6,7]

输入："1-2--3---4-5--6---7"
输出：[1,2,5,3,null,6,null,4,null,7]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(s) {
  if (s.length < 1) return null
  let val = parseInt(s)
  let root = new TreeNode(val)
  handler(root, 1, s.substring(val.length))
  return root
};

function handler(pre, level, s) {
  if (!s.length) return

  let len = s.length,
    count = 0
  let index = []
  // 找到当前层的两个数字，left 和 right 的索引
  for (let i = 0; i < len; i++) {
    if (s[i] === '-') {
      count++
    } else {
      if (count === level) {
        index.push(i)
      }
      count = 0
    }
  }

  let index1 = index[0],
    index2 = index[1]

  if (index1) {
    // 这里是计算值的大小， 并不止只是一位， 123 1 215 543
    let val = '' + parseInt(s.substring(index1))
    let len = val.length
    pre.left = new TreeNode(val)
    index2 ? handler(pre.left, level + 1, s.substring(index1 + len, index2 - level)) :
      handler(pre.left, level + 1, s.substring(index1 + len))
  }

  if (index2) {
    let val = '' + parseInt(s.substring(index2))
    let len = val.length
    pre.right = new TreeNode(val)
    handler(pre.right, level + 1, s.substring(index2 + len))
  }
}