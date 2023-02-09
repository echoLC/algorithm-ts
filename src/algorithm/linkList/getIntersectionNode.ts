// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null
function getIntersectionNode(headA, headB) {
  if (headA == null || headB == null) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA == null ? headB : pA.next;
    pB = pB == null ? headA : pB.next;
  }

  return pA;
}

function getIntersectionNode1(headA, headB) {
  if (headA == null || headB == null) return null;

  const set = new Set();

  while (headA) {
    set.add(headA);

    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) return headB;

    headB = headB.next;
  }

  return null;
}
