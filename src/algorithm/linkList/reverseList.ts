// 反转单链表
const reverseList = (head: ListNode | null) => {
  if (head == null || head.next == null) return head;

  let pre: ListNode | null = head;
  let cur: ListNode | null = null;

  while (pre != null) {
    const next = pre.next;

    pre.next = cur;
    cur = pre;
    pre = next;
  }

  return cur;
};
