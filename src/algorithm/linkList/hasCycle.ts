// 检测链表是否是环，利用 Set 的唯一性
function hasCycle1(head: ListNode | null) {
  if (head == null || head.next == null) return false

  const set = new Set<ListNode>()
  while (head) {
    if (set.has(head)) return true
    set.add(head)
    head = head.next
  }
  return false
}

// 利用快慢指针
function hasCycle2(head: ListNode | null) {
  let slow: ListNode | null = new ListNode()
  let fast: ListNode | null = new ListNode()
  slow.next = head
  fast.next = head
  if (fast.next == null || fast.next.next == null) return false

  while (fast && fast.next) {
    slow = slow?.next ?? null
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
