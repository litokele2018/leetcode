/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k === 1) return head;
  let len = 0; // 总长度
  let curLen = 0; // 用于判断是否达到k个
  let tailRestLen;  // 不用处理的尾巴数量
  let restCount = 0; // 用于判断是否越过了尾巴
  let firstNode; // 记录每一次开始的结点
  const handler = (pre, node) => {
    if (!node) {
      tailRestLen = len % k;
      return;
    }
    len++;
    handler(node, node.next);
    restCount++;
    //  1 -> 2 -> 3 交换需要两次 3 个 -> 2 次
    if (curLen + 1 === k && curLen !== 0) {
      if (pre !== null) {
        pre.next = firstNode;
      }
      curLen = 0;
      return;
    }
    if (restCount > tailRestLen && pre !== null) {
      if (curLen === 0) {
        firstNode = node;
      }
      let temp = node.next;
      node.next = pre;
      pre.next = temp;
      curLen++;
    }
  }
  handler(null, head)
  return firstNode;
};