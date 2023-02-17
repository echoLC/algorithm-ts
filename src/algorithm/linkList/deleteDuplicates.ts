
// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
function deleteDuplicates(head: ListNode | null) {
  if (head == null) return head

  let fast = head
  let slow = head

  while(fast) {
    if (fast.val !== slow.val) {
      slow.next = fast
      slow = slow.next
    }

    fast = fast.next as ListNode
  }

  // 断开与后面重复元素的连接
  slow.next = null

  return head
}