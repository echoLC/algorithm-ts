// 寻找链表的中间节点
function middleNode(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head
  let fast: ListNode | null = head
  let slow: ListNode | null = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow ? slow.next : null
  }
  return slow
}
