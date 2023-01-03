/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

  // create a new List to build
  const newHead = new ListNode(null, head);

  // extablish pointer and reference
  let node = head;
  let previousNode = newHead;

  while (node) {
      if (node.val === val) {
          // skips the current node and updates previous
          previousNode.next = node.next;
          node = node.next;
      } else {
          // no target value found so the pointer and current node are reasigned
          previousNode = node;
          node = node.next;
      }
  }
  // skips the first created node to allow for correct copy returned
  return newHead.next;
};


/* NOTES:

  Fairly straightforward solution that eluded me until I realized that, similar to how you should work with trees, that we wanted to build a new linked list while referencing the old one.

*/