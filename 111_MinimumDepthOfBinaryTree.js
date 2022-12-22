**
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
var minDepth = function(root) {

    if (!root) {
        return 0;
    }

    var minLevel = Infinity;

    var depthTracker = function(node, depth) {

        if (!node.left && !node.right) {
            if (depth < minLevel) {
                minLevel = depth;
                return;
            }
        }
        if (node.left) {
            depthTracker(node.left, depth + 1);
        }
        if (node.right) {
            depthTracker(node.right, depth + 1);
        }
    }

    depthTracker(root, 1);

    return minLevel;


};

/* NOTES:

  I was able to refactor my approach with the MaximumDepth problem only comparing to infinity. I see many solutions for this problem but I feel that this code is the most human readable even if it isn't as minimalist as other solutions.

*/