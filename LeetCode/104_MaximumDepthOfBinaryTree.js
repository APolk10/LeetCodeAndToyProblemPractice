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
 * @return {number}
 */

var maxDepth = function(root) {
  if (root === null) {
      return 0;
  }
  var level = 1;
  // check left and right of each node of tree
  var traverseTree = function(node, depth) {
      if (node.left) {
          traverseTree(node.left, depth + 1)
      }
      if (node.right) {
          traverseTree(node.right, depth + 1)
      }

      level = Math.max(level, depth);
  }

  traverseTree(root, 1);

  return level;
};

/*
This problem stumped me at first. I was unsure how to keep separate trackers/counters with multiple callstacks in a recursive loop. The solution utilizes a comparison to the level variable outside of the recursive loop that is compared with the depth argument being passed within each recursion scenario.

*/