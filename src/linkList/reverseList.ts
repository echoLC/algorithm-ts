// 反转单链表
interface ListNode<T = any> {
  data: T
  next: ListNode | null
}

const reverseList = (head: ListNode | null) => {
  if (head == null || head.next == null) return head

  let pre: ListNode | null = null
  let cur: ListNode | null = head
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
}
