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

class HTN (
    val h: Int,
    val t: TreeNode
)

class Solution {
    fun findBottomLeftValue(root: TreeNode?): Int {
        if (root == null) return -1

        val levels = mutableMapOf<Int, MutableList<Int>>()

        val q = ArrayDeque<HTN>()
        q.addFirst(HTN(0, root))
        if (0 in levels) (levels.get(0) ?: mutableListOf<Int>()).add(root.`val`)
        else levels.put(0, mutableListOf(root.`val`))

        while (q.size > 0) {
            val htn = q.removeLast()
            val ch = htn.h + 1
            val ct = htn.t

            if (ct.left != null) {
                val cv = ct.left.`val`
                q.addFirst(HTN(ch, ct.left))
                if (ch in levels) (levels.get(ch) ?: mutableListOf<Int>()).add(cv)
                else levels.put(ch, mutableListOf(cv))
            }

            if (ct.right != null) {
                val cv = ct.right.`val`
                q.addFirst(HTN(ch, ct.right))
                if (ch in levels) (levels.get(ch) ?: mutableListOf<Int>()).add(cv)
                else levels.put(ch, mutableListOf(cv))
            }
        }

        return (levels[levels.size - 1] ?: listOf(-1))[0]
    }
}