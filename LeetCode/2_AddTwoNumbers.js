/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let num1 = '';
  let num2 = '';
  let total = 0;

  while (l1 || l2) {
      if (l1) {
          num1 = num1.concat(l1.val);
          l1 = l1.next;
      }
      if (l2) {
          num2 = num2.concat(l2.val);
          l2 = l2.next;
      }
  }

  num1 = num1.split('').reverse().join('');
  num2 = num2.split('').reverse().join('');

  let number1 = BigInt(num1);
  let number2 = BigInt(num2);

  total = number1 + number2;

  total = total.toString();

  let newList = new ListNode(parseInt(total[total.length-1]))
  let head = newList;

  for (var i = total.length - 2; i >= 0; i--) {
      let node = new ListNode(parseInt(total[i]))
      newList.next = node;
      newList = newList.next;
  }

  return head;
};



/* NOTES:

This was a very brute force solution and fell into the lower tiers of time/space complexity. I would need to optimize this greatly and ran into the issue of the integer limit. Had to use BigInt to work around it

*/