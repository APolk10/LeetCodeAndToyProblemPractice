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

var reverseList = function(head) {
  // create a pointer that will serve as the next node
  let newNextNode = null;
  // create a copy of the head to iterate through
  let list = head;

  // iterate through all nodes that are provided in the head using the copy
  while (list) {

    // create a new node with the value head provides
    let node = new ListNode(list.val);

    // link this new node to the next node(the list)
    node.next = newNextNode;

    // update the next node pointer to this new list head
    newNextNode = node;

    // continue iterating
    list = list.next;
  }

    return newNextNode;
};


/* NOTES:
  There are more efficient ways to do this but traversing the list is much easier now. Keeping a pointer to help rebuild a list any way you would like is a straightforward approach.


*/