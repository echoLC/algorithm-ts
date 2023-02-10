class MyLinkedList {
  size: number;
  head: LinkNode | null;

  constructor() {
    this.size = 0;
    this.head = new ListNode(0);
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index: number) {
    if (index < 0 || index > this.size) return -1;

    let current = this.head;
    while (index >= 0) {
      current = current?.next ?? null;
      index--;
    }

    return current?.val ?? -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: number) {
    this.addAtIndex(0, val);
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: number) {
    this.addAtIndex(this.size, val);
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: number) {
    if (index > this.size || index < 0) return;

    this.size++;

    let current: ListNode | null = this.head;

    while (index > 0) {
      current = current?.next ?? null;
      index--;
    }
    const node = new LinkNode(val);
    const next = current?.next ?? null;
    node.next = next;

    if (current) {
      current.next = node;
    }
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number) {
    if (index >= this.size || index < 0) return;

    this.size--;

    let current: ListNode | null = this.head;
    while (index > 0) {
      current = current?.next ?? null;
      index--;
    }

    if (current && current.next) {
      current.next = current.next.next;
    }
  }
}

class LinkNode {
  val: number;
  next: LinkNode | null;

  constructor(val?: number, next?: LinkNode) {
    this.val = val ?? 0;
    this.next = next ? next : null;
  }
}
