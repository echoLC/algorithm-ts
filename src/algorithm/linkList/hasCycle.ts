// 检测链表是否是环，利用 Set 的唯一性
function hasCycle1(head: ListNode | null) {
  if (head == null || head.next == null) return false;

  const set = new Set<ListNode>();
  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
}

// 利用快慢指针
function hasCycle2(head: ListNode | null) {
  if (head == null) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow?.next ?? null;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}
