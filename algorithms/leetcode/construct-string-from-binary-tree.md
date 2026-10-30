### 문제 및 풀이 날짜

- https://leetcode.com/problems/construct-string-from-binary-tree
- 2026-10-30

### 문제 분석 요약

트리 순회

### 제한 사항

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-1000 <= Node.val <= 1000`

### 알고리즘 설계

문제만 읽고는 이해가 잘 안 돼서 예제로 이해함. 설계 없이 바로 구현함.

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
```

### 시간 복잡도

$$O(n^2)$$

이 방식으로는 새 문자열이 트리 깊이만큼 복사되어 `O(nh)`(최악: 한쪽으로 치우친 트리 `O(n^2)`) 복잡도를 갖는다고 함. StringBuilder를 넘겨 append하는 방식으로 `O(n)`으로 줄일 수 있음.
