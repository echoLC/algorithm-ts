// 合并两个有序的列表
function mergeTwoList(list1: ListNode | null, list2: ListNode | null) {
  if (list1 == null) return list2
  if (list2 == null) return list1

  let dummyHead = new ListNode()
  let cur = dummyHead
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1
      cur = cur.next
      list1 = list1.next
    } else {
      cur.next = list2
      cur = cur.next
      list2 = list2.next
    }
  }
  if (list1 == null) {
    cur.next = list2
  } else {
    cur.next = list1
  }
  return dummyHead.next
}
