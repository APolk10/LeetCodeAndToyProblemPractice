/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  // create counter for 1st iteration
  let counter = 0;
  // create counter for second iteration
  let target = 1;
  // create halfway variable
  let half = 0;
  // create copy so that we don't modify original list
  let current = head;
  // iterate through list counting nodes
  while (current) {
      counter++;
      current = current.next;
  }
  // determine the node to return
  if (counter % 2 === 0) {
      half = counter / 2;
      // increment to second "middle" node
      half++;
  } else {
      half = Math.ceil(counter / 2)
  }
  // iterate a second time
  while (head) {
      // if the counter has hit the target, return current node
      if (target === half) {
          return head;
      }
      target++;
      head = head.next;
  }
  // edge case to return empty head
  return head;
};


/*

  NOTES:

  The time complexity for this one is not good in comparison to other solutions. I believe I understand the fundamental structure and traversal of the linked list. One good thing to note is that we don't want to modify the original list until necessary and much like .map, we should make copies of the input data so as not to modulate it.


*?