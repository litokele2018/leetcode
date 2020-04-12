var isSymmetric = function (root) {
  // 左右遍历结果相同 -> 对称
  // 从左
  let cur = root
  let left = []
  helper1(left, cur)
  let right = []
  helper2(right, cur)
  return left.join('') === right.join('')
};

function helper1(left, cur) {
  if (!cur) {
    left.push('x')
    return
  }
  left.push(cur.val)
  helper1(left, cur.left)
  helper1(left, cur.right)
}

function helper2(right, cur) {
  if (!cur) {
    right.push('x')
    return
  }
  right.push(cur.val)
  helper2(right, cur.right)
  helper2(right, cur.left)
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let t1 = new TreeNode(1)
t1.left = new TreeNode(2)
t1.right = new TreeNode(2)
t1.left.right = new TreeNode(3)
t1.right.right = new TreeNode(3)

isSymmetric(t1)