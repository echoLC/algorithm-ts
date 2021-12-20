// 删除链表倒数最后一个元素
const removeNthFromEnd = function (head: ListNode | null, n: number) {
  if (head == null || head.next == null) return null
  // 双指针的思想
  // 定义一个快指针,定义一个慢指针
  let fast: ListNode | null = head
  let slow: ListNode | null = head
  // 先让快指针走n步
  while (n !== 0) {
    n--
    fast = fast ? fast.next : null
  }
  // 如果快指针走到了最后说明删除的是第一个节点,就返回 head.next 就好
  if (fast == null) {
    return head.next
  }
  // 使得 slow 每次都是在待删除的前一个节点, 所以要先让fast先走一步
  fast = fast.next
  while (fast) {
    fast = fast.next
    slow = slow ? slow.next : null
  }
  // 因为已经保证了是待删除节点的前一个节点, 直接删除即可
  slow!.next = slow && slow.next ? slow.next.next : null
  return head
}
