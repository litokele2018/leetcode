var isSymmetric = function (root) {
  return isMirror(root, root)
}

function isMirror(node1, node2) {
  if (node1 === null && node2 === null) {
    return true
  } else if (node1 === null || node1 === null) {
    return false
  } else {
    return isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node1.left) &&
      node1.val === node2.val
  }
}