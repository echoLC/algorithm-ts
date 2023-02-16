// 找出单向链表中倒数第 k 个节点，返回该节点的值-- 快慢节点
function kThToLast(head: ListNode | null, k: number) {
  let fast = head;
  let slow = head;

  while (k !== 0) {
    fast = fast?.next ?? null;
    k--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow?.next ?? null;
  }

  return slow?.val;
}

// 找出单向链表中倒数第 k 个节点，返回该节点的值-- 迭代
function kThToLast1(head: ListNode | null, k: number) {
  const getLen = (head: ListNode | null) => {
    let len = 0;
    while (head) {
      head = head.next;
      len++;
    }
    return len;
  };

  const len = getLen(head);

  for (let i = 0; i < len - k; i++) {
    head = head?.next ?? null;
  }

  return head?.val;
}
