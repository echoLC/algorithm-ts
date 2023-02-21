// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字

function addTwoNumbers (l1: ListNode | null, l2: ListNode | null) {
  const dummy = new ListNode(-1)
  let current = dummy
  let carry = 0

  while (l1 != null || l2 != null) {
    const value1 = l1 == null ? 0 : l1.val
    const value2 = l2 == null ? 0 : l2.val

    let sum = value1 + value2 + carry
    carry = parseInt(`${sum / 10}`)
    sum = sum % 10

    const node = new ListNode(sum)
    current.next = node

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }
  }

  if (carry === 1) {
    current.next = new ListNode(carry)
  }

  return dummy.next
}