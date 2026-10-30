/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun tree2str(root: TreeNode?): String {
        if (root == null) return ""
        return "" + root.`val` +
            if (root.left != null && root.right == null) {
                "(${tree2str(root.left)})"
            } else if (root.left == null && root.right != null) {
                "()(${tree2str(root.right)})"
            } else if (root.left != null && root.right != null) {
                "(${tree2str(root.left)})(${tree2str(root.right)})"
            } else ""
    }
}