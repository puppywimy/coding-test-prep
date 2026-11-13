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
class CTreeNode(
    val t: TreeNode,
    var h: Int
)

class Solution {
    fun kthLargestLevelSum(root: TreeNode?, k: Int): Long {
        if (root == null) return -1
        val m = mutableMapOf<Int, Long>()

        val q = mutableListOf<CTreeNode>(CTreeNode(root, 0))
        var c = 0
        m.put(q[c].h, q[c].t.`val`.toLong())
        while (c < q.size) {
            val x = q[c++]
            if (x.t.left != null) {
                val ct = CTreeNode(x.t.left, x.h + 1)
                q.add(ct)
                if (ct.h in m) m.put(ct.h, (m.get(ct.h) ?: 0) + ct.t.`val`)
                else m.put(ct.h, ct.t.`val`.toLong())
            }
            if (x.t.right != null) {
                val ct = CTreeNode(x.t.right, x.h + 1)
                q.add(ct)
                if (ct.h in m) m.put(ct.h, (m.get(ct.h) ?: 0) + ct.t.`val`)
                else m.put(ct.h, ct.t.`val`.toLong())
            }
        }
        
        val l = m.values.sortedDescending()
        if (k - 1 > l.size - 1) return -1L
        return l[k - 1]
    }
}