### 문제 및 풀이 날짜

- https://leetcode.com/problems/find-bottom-left-tree-value
- 2026-11-20

### 문제 분석 요약

높이를 기억하며 트리 순회하는 문제?

### 제한 사항

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-2^31 <= Node.val <= 2^31 - 1`

### 알고리즘 설계

높이를 기억하며 트리를 순회해야 해서 지난번 BFS로 구현한 것처럼 빠르게 구현해보자 하고 구현 방식을 정함. 지난번처럼 BFS로 구현하면 left 노드를 먼저 순회하고 큐에 넣기 때문에(코드 참고) 새 높이에서 순회할 때 가장 먼저 순회하는 노드가 같은 높이의 leftmost value가 됨.

### 코드

```kt
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
```

### 시간 복잡도

$$O(n)$$

시간 복잡도 계산하는 걸 까먹었었는데, BFS기 때문에 O(n)이고 제한 사항 내 풀 수 있는 풀이임.

### 느낀점 or 기억할 정보

- 확실히 시간 복잡도를 먼저 계산하고 풀이에 확신을 가지고 풀어야 겠다. 처음에는 Map이 불필요하다고 생각했는데 Map을 사용해도 제한 사항 내 풀 수 있고, 사용하는 게 훨씬 직관적이다. 중간에 풀이를 바꾸느라 시간을 너무 많이 사용했다.
- Map에 getOrPut()이라는 메서드가 있었다..
