function swap(tree, i, j) {
  if (i === j) {
    return
  }
  let temp = tree[i]
  tree[i] = tree[j]
  tree[j] = temp
}

function heapify(tree, i, n) { // i: 从那个结点开始, n: 节点个数
  if (i > n - 1) {
    return 
  }
  let maxIndex = i // 记当前的这个就是最大值 然后往下找 是否还存在 最大值
  let child1 = 2 * i + 1
  let child2 = 2 * i + 2
  
  if (child1 < n && tree[child1] > tree[maxIndex]) {
    maxIndex = child1
  }
  if (child2 < n && tree[child2] > tree[maxIndex]) {
    maxIndex = child2
  }

  if (maxIndex !== i) { // 表示他自己本身不是最大值 才进行交换
    swap(tree, i, maxIndex) // 由于发生了交换 就要确定 交换后的位置是否影响结构 进一步递归
    heapify(tree, maxIndex, n)
  }

}

// 堆排序
function heapSort(tree) {
  // 第一步 生成一个堆 
  let last_node = tree.length - 1
  for (let i = Math.floor((last_node - 1) / 2); i >= 0; i--) { // 从最后一个结点倒推 到其父节点 生成 一个堆 
    heapify(tree, i, tree.length)
  }
  // 在从生成的堆中 将最大值 放到0的位置
  for (let j = tree.length - 1; j >= 0; j--) {
    swap(tree, 0, j)
    heapify(tree, 0, j)
  }
}

let tree = [3, 7, 6, 7, 6, 2, 8, 3, 0]
heapSort(tree)

debugger;