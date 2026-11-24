### 문제 및 풀이 날짜

- https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i
- 2026-11-24

### 문제 분석 요약

BFS 거리?

### 제한 사항

- `3 <= n <= 500`
- `1 <= queries.length <= 500`
- `queries[i].length == 2`
- `0 <= queries[i][0] < queries[i][1] < n`
- `1 < queries[i][1] - queries[i][0]`
- There are no repeated roads among the queries.

### 알고리즘 설계

최단 거리를 구하는 문제로 BFS가 떠올랐다. BFS를 매 단계마다 수행해도 되는지 제한 사항을 확인해보니 최대 연산량이 500(BFS는 O(n)) \* 500(각 단계는 쿼리 수) = 250000 정도라 괜찮은 풀이라고 생각했다.

### 코드

```kt
class Solution {
    fun shortestDistanceAfterQueries(n: Int, queries: Array<IntArray>): IntArray {
        val conn = mutableMapOf<Int, MutableList<Int>>()

        for (i in 0..n-2) {
            conn.put(i, mutableListOf(i + 1))
        }

        val ans = mutableListOf<Int>()

        for (uv in queries) {
            (conn.get(uv[0]) ?: mutableListOf<Int>()).add(uv[1])

            val q = ArrayDeque<Int>()
            q.addLast(0)
            val d = (0..n-1).map { -1 }.toMutableList()
            d[0] = 0

            while (q.size > 0) {
                val c = q.removeFirst()
                val cconn = conn.get(c) ?: mutableListOf<Int>()
                for (x in cconn) {
                    if (x == n-1) {
                        ans.add(d[c] + 1)
                        q.clear()
                        break
                    }
                    if (d[x] > -1) continue
                    q.addLast(x)
                    d[x] = d[c] + 1
                }
            }
        }

        return ans.toIntArray()
    }
}
```

### 시간 복잡도

$$O(n^2)$$

### 느낀점 or 기억할 정보

- `ArrayDeque`를 처음에 `arrayDequeOf`(이런 건 없다.)처럼 `ArrayDeque(0)`으로 초기화해서 썼다.. `ArrayDeque<Int>()`로 초기화하고 대입해야 한다.
- `removeFront`가 아니라 `removeFirst`다..
- `conn.get(c)`는 다음 노드가 아니라 다음 노드 리스트다..
