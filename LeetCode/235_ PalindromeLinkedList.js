/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // traverse the list, populating an array with the values
  let copy = head;
  let number = '';
  let reversedNumber = '';

  while (copy) {
      number += copy.val;
      // JS coerces the types to a string
      reversedNumber = copy.val + reversedNumber;
      copy = copy.next;
  }

  return number === reversedNumber;
};

/* NOTES:

I learned that reversing an array will count as deeply equal to the original array because the reverse keeps a pointer to the original value (first array); Odd little quirk I wasn't aware of so I swapped to a string comparison instead.

*/