/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

  var flag = false;

  const traverseTreeByPath = function(node, currentTotal) {
      var subTotal = node.val + currentTotal;
      // flag to retain a true path
      if (flag === true) {
          return true;
      }
      // marks the end of a path and evaluates the total with current node value included
      if (!node.left && !node.right) {
          if (subTotal === targetSum) {
              flag = true;
              return;
          }
      }

      if (node.left) {
          traverseTreeByPath(node.left, subTotal)
      }
      if (node.right) {
          traverseTreeByPath(node.right, subTotal)
      }

  }

  if (root) {
      if (root.left) {
          traverseTreeByPath(root.left, root.val);
      }
      if (root.right) {
          traverseTreeByPath(root.right, root.val);
      }
      if (!root.left && !root.right) {
          return (root.val === targetSum)
      }
  }

  return flag;
};


/* NOTES:

Straightforward approach that checks for the running total only at the point where a node has no left or right child. The flag system will allow the function to stop or continue as needed in this recursive process.

*/