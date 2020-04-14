/* 
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
你可以假设除了数字 0 之外，这两个数字都不会以零开头。

进阶：
如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
示例：
输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7
通过次数25,434提交次数44,898

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers-ii
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Val = []
  let l2Val = []
  let cur1 = l1
  let cur2 = l2
  let carry = 0
  let ans = 0
  while (cur1) {
    l1Val.push(1 * l1.val)
    cur1 = cur1.next
  }
  while (cur2) {
    l2Val.push(1 * l2.val)
    cur2 = cur2.next
  }
  while (l1Val.length || l2Val.length) {
    let v1 = l1Val.length ? l1Val.pop() : 0
    let v2 = l2Val.length ? l2Val.pop() : 0
    let x = v1 + v2 + carry
    if (x >= 10) {
      x = x % 10
      ans.push(x)
      carry = 1
    } else {
      carry = 0
    }
  }
  if (carry !== 0) {
    ans.push(carry)
  }
  let root = new NodeList(ans.pop())
  let cur = root
  while (ans.length) {
    let temp = ans.pop()
    cur.next = new NodeList(temp)
    cur = cur.next
  }
  return root
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}