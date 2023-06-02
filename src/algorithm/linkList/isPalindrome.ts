// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false
export function isPalindrome(head: ListNode | null) {
  const values: number[] = [];

  while (head) {
    values.push(head.val);

    head = head.next;
  }

  for (let i = 0, j = values.length - 1; i < j; i++, j--) {
    if (values[i] !== values[j]) return false;
  }

  return true;
}
