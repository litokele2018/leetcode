var reverseKGroup = function(head, k) {
  let len = 0; // 总长度
  let curLen = 0;
  let tailRestLen;
  let restCount = 0;
  let firstNode;
  const handler = (pre, node) => {
    if (!node) {
      tailRestLen = len % k;
      return;
    }
    len++;
    handler(node, node.next);
    debugger
    restCount++;
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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

reverseKGroup(head, 1)