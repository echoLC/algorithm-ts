// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 
function isPalindrome (head: ListNode | null) {
  const reverse = (head: ListNode | null) => {
    let cur = head
    let pre: ListNode | null = null

    while (cur) {
      const next = cur.next
      cur.next = pre
      pre = cur

      cur = next
    }

    return pre
  }

  const getMid = (head: ListNode | null) => {
    let dummy1 = new ListNode()
    let dummy2 = new ListNode()

    dummy1.next = head
    dummy2.next = head

    let fast: ListNode | null = dummy1
    let slow: ListNode | null = dummy2

    while(fast && fast.next) {
      fast = fast.next.next
      slow = slow?.next ?? null
    }

    return slow
  }  

  const mid = getMid(head)
  const next = mid?.next ?? null

  const newStart = reverse(next)

  for (let p = head, newP = newStart; p != null && newP != null; p = p.next, newP = newP.next) {
    if (p.val !== newP.val) return false
  }

  return true
}