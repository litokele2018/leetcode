/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let set = new Set()
  let cur = head
  let pre = null
  while (cur) {
    if (!set.has(cur.val)) {
      set.add(cur.val)
      pre = cur
    } else {
      pre.next = cur.next
    }
    cur = cur.next
  }
  return head
};