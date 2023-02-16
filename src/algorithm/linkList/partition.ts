// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前
function partition (head: ListNode | null, x: number) {
  if (head == null || head.next == null) return head

  const dummy1 = new ListNode(-1)
  const dummy2 = new ListNode(-1)

  let left = dummy1
  let right = dummy2

  while(head) {
    if (head.val >= x) {
      right.next = head
      right = right.next
    } else {
      left.next = head
      left = left.next
    }

    const next = head.next
    head.next = null
    head = next
  }

  left.next = dummy2.next

  return dummy1.next
}