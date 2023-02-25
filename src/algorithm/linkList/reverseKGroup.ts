// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表
function reverseKGroup (head: ListNode | null, k: number) {
  if (head == null) return null

  const reverse = (head1: ListNode | null, head2: ListNode | null) => {
    if (head1 == null) return 

    let cur: ListNode | null = head1
    let pre: ListNode | null = null

    while(cur && cur !== head2) {
      const next = cur.next
      cur.next = pre
      pre = cur

      cur = next
    }

    return pre
  }

  let head1: ListNode | null = head
  let head2: ListNode | null = head

  for (let i = 0; i < k; i++) {
    if (head2 == null) return head

    head2 = head2.next
  }

  // 翻转 head1 到 head2 之间的节点
  const newHead = reverse(head1, head2) as ListNode
  head1.next = reverseKGroup(head2, k)

  return newHead
}

function reverseKGroup1(head: ListNode | null, k: number) {
  if (head == null) return null

  let pre: ListNode | null = null
  let cur: ListNode | null = head

  let p: ListNode | null = head

  for (let i = 0; i < k; i++) {
    if (p == null) return head

    p = p.next
  }

  while (cur && cur !== p) {
    const next = cur?.next
    cur.next = pre
    pre = cur

    cur = next
  }
  
  head.next = reverseKGroup(cur, k)

  return pre
}