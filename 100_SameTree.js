/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// set a flag that triggers when trees do not match



const isSameTree = function(p, q) {

  let flag = true;

  // no inputs - technically same
  if (!p && !q) {
      return true;
  }

  // mismatched inputs - false
  if ((p && !q) || (!p && q)) {
      return false;
  }

  // helper function to traverse tree
  const traverseTree = (a, b) => {

      if (a.val !== b.val) {
          flag = false;
      }

      // LEFT
      if (a.left && b.left) {
          traverseTree(a.left, b.left);
      }

      if ((a.left && !b.left) || (!a.left && b.left)) {
          flag = false;
      }

      // RIGHT
      if (a.right && b.right) {
          traverseTree(a.right, b.right);
      }

      if ((a.right && !b.right) || (!a.right && b.right)) {
          flag = false;
      }
  }

  traverseTree(p, q);

  // return final result
  return flag;

  };



  /* NOTES:

  The logic behind this problem is quite simple, getting the control flow/logic to work recursively without any mishaps was a bit frustrating at first. There are some wildly short solutions, I think returning an expression i.e.

  ... return traverseTree(p.left, q.left) && traverseTree(p.right, q.right); ...

  is a method I want to use in the future, I don't normally return expressions but it very much simplifies the code.


  */