// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
function mergeKList(lists: ListNode[]) {
  if (!lists.length) return null

  const dummy = new ListNode(-1)

  let p = dummy
  let tempArr: ListNode[] = []

  lists.forEach(item => {
    if (item) {
      tempArr.push(item)
    }
  })

  tempArr.sort((a, b) => a.val - b.val)

  while(tempArr.length) {
    const node = tempArr.shift() ?? null

    p.next = node

    if (node?.next) {
      tempArr.push(node.next)

      // 每次更新 tempArr，重新排序
      tempArr.sort((a, b) => a.val - b.val)
    }

    p = p.next as ListNode
  }

  return dummy.next
}