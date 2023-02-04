declare class ListNode<T = any> {
  constructor(val?: T, next?: ListNode);
  val: T;
  next: ListNode | null;
}
