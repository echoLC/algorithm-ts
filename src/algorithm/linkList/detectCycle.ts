// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。-- 通过 Set 的唯一性
function detectCycle(head: ListNode | null) {
  const set = new Set();

  while (head) {
    set.add(head);

    head = head.next;

    if (set.has(head)) return head;
  }

  return null;
}

// 快慢指针
function detectCycle1(head: ListNode | null) {
  let fast = head;
  let slow = head;

  while (true) {
    if (fast == null || fast.next == null) return null;

    fast = fast.next.next;
    slow = slow?.next ?? null;

    if (fast === slow) break;
  }

  fast = head;

  while (fast !== slow) {
    fast = fast?.next ?? null;
    slow = slow?.next ?? null;
  }

  return fast;
}
