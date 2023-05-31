// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
  const dummy = new ListNode(-1);
  let current = dummy;

  let carry = 0;

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    const nodeVal = sum % 10;
    carry = parseInt(`${sum / 10}`);

    const node = new ListNode(nodeVal);
    current.next = node;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }

    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}
