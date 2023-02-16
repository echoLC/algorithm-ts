// 删除链表倒数第 N 个元素
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


// 双指针
function removeNthFromEnd1(head: ListNode | null, n: number) {
  let fast = head

  for (let i = 0; i < n; i++) {
    fast = fast?.next ?? null
  }

  let dummy = new ListNode(-1)
  dummy.next = head

  let slow: ListNode | null = dummy

  while(fast) {
    fast = fast.next
    slow = slow?.next ?? null
  }

  if (slow) {
    slow.next = slow?.next?.next ?? null
  }

  return dummy.next
}