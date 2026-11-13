### 문제 및 풀이 날짜

- https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree
- 2026-11-13

### 문제 분석 요약

이진 트리 BFS?

### 제한 사항

- The number of nodes in the tree is `n`.
- `2 <= n <= 10^5`
- `1 <= Node.val <= 10^6`
- `1 <= k <= n`

### 알고리즘 설계

결국 각 레벨의 합을 줄 세워야 해서 트리를 전부 순회해야 하고, 트리 순회는 DFS든 BFS든 O(n)의 시간 복잡도를 가지므로 제한 사항 내 풀 수 있을 것이라 생각했다.

근데 레벨 별로 합을 구해야 해서 root 노드와의 거리를 구해야 하는데, 거리를 매번 재귀함수로 넘겨주는 방식보다 큐로 순회하는 방식이 더 자연스럽다고 생각했다.

로직을 left 또는 right를 탐색하는 단방향 방식으로 짜면 별도 방문 표시를 하지 않아도 되었다.

다만 노드를 탐색할 때 어떤 레벨에 있는지 기록할 수 있어야 계속해서 레벨을 증가시켜나갈 수 있었는데, TreeNode로 distance Map을 만들기보다 어떤 TreeNode가 몇 번째 레벨(`h`)에 있는지 나타내는 클래스 CTreeNode를 만들어 사용하는 방식을 택했다.

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
```

### 시간 복잡도

$$O(n\log{n})$$

탐색은 O(n)이지만 마지막 sortedDescending으로 인해 O(nlogn)이다.

### 느낀점 or 기억할 정보

- Kotlin에서는 ArrayDeque를 큐로 사용할 수 있다. (`removeFirst`, `addLast`)
  - Java에서는 큐 추상 자료형을 나타내는 Queue 인터페이스를, 구현체로는 ArrayDeque를 사용할 수 있다. (`poll`, `offer`)
