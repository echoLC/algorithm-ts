// 合并两个有序的列表 -- 迭代
function mergeTwoList(list1: ListNode | null, list2: ListNode | null) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  const dummyHead = new ListNode();
  let cur = dummyHead;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }

    cur = cur.next;
  }

  cur.next = list1 == null ? list2 : list1;

  return dummyHead.next;
}

// 合并两个有序的列表 -- 递归
function mergeTwoList1(list1: ListNode | null, list2: ListNode | null) {
  if (list1 == null) {
    return list2;
  } else if (list2 == null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoList1(list1.next, list2);

    return list1;
  } else {
    list2.next = mergeTwoList1(list1, list2.next);

    return list2;
  }
}
