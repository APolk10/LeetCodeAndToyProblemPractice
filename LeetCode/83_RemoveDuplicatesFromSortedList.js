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
var deleteDuplicates = function(head) {
  var current = head;

  while (current) {
      if (current.next && current.val === current.next.val) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }

  return head;
};


/* NOTES:
  This one reminded me the importance of object lookups. If a property is undefined/not present, you cannot rely on a nested property within it. An error will be thrown. You must always check from the most outer layer of an object before trying to access within it.

  Secondly, as I continue to rebuild my knowledge of trees/linked lists, I am reminded of the importance of the pointers pointing to actual nodes and not just nested values. Each node within a linked list houses mirrored properties and this is a foundation concept of OOP.

*/