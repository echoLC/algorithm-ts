// 删除链表倒数最后一个元素
const removeNthFromEnd = function (head: ListNode | null, n: number) {
  if (head == null || head.next == null) return null;

  const getLen = (head: ListNode | null) => {
    let len = 0;

    while (head != null) {
      len++;

      head = head.next;
    }

    return len;
  };

  const dummyHead = new ListNode(0, head);
  const len = getLen(head);
  let cur = dummyHead;

  for (let i = 0; i < len - n; i++) {
    cur = cur.next as ListNode;
  }

  cur.next = cur.next?.next ?? null;

  return dummyHead.next;
};
