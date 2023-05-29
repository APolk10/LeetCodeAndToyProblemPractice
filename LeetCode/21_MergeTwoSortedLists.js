/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

  let newList = new ListNode();
  let newHead;

  //edge cases
  if (!list1 && !list2) {
      return null;
  }
  if (!list1 || !list2) {
      return list1 || list2;
  }

  // comparisons for starting point
  if (list1.val < list2.val) {
      newHead = list1;
      list1 = list1.next;
  } else if (list1.val > list2.val) {
      newHead = list2;
      list2 = list2.next;
  } else if (list1.val === list2.val) {
      newHead = list1;
      list1 = list1.next;
  }

  // allows for easy access to head of the list we will iterate through
  newList.next = newHead;


  while (list1 || list2) {
      // checks for one list but not the other to resolve loop
      if (list1 && !list2) {
          newHead.next = list1;
          break;
      }
      if (!list1 && list2) {
          newHead.next = list2;
          break;
      }

      // compares values if both lists are present and allows for continued iteration
      if (list1.val > list2.val) {
          newHead.next = list2;
          list2 = list2.next
      } else if (list1.val < list2.val) {
          newHead.next = list1;
          list1 = list1.next;
      } else if (list1.val === list2.val) {
          newHead.next = list1;
          list1 = list1.next;
      }

      // continues the iteration through the new list
      newHead = newHead.next;
  }

  return newList.next;

};


/* NOTES:

This problem was one I returned to from a past attempt. I had gotten close but the real issue was maintaining access to the whole list while iterating through. The while loop is iterating through two of the three lists at a time so this means that I needed to iterate through newHead to continue that construction while also traversing either list1 or list2 depending on the value of the node. If one list is ever finished the remainder is easy to attach.

Note to self: I don't have to cram all the computation into one tightly coupled function. Later on I could split these tasks up to multiple functions.


*/