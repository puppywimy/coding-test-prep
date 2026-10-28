### 문제 및 풀이 날짜

- https://leetcode.com/problems/maximum-path-intersection-sum-in-a-grid
- 2026-10-28

### 문제 분석 요약

누적합 + 구현 + DP..?

### 제한 사항

- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 1000`
- `4 <= m * n <= 5 * 10^5`
- `-100 <= grid[i][j] <= 100`

### 알고리즘 설계

각 줄(가로/세로)의 부분합의 최댓값을 구하면 되겠다는 생각이 들었음. 제한 사항을 확인하니 O(N^3)은 간당간당할 것 같아서 부분합의 최댓값을 구하는 복잡도가 O(N)으로 끝나야 할 것 같다고 생각했음. 문제는 부분합의 최댓값을 구하는 방법이 O(N^2)(누적합 테이블을 만들어서 i, j 전체 순회) 밖에 떠오르지가 않았음.

풀이 시간 초과 후 Claude한테 부분합의 최댓값을 구하는 방법을 물어봤고 다음과 같이 구현하면 O(N)으로 구할 수 있었음.

**부분합의 최댓값**

부분합은 `prefix[j] - prefix[i] (j > i)`임. j가 고정된다고 가정하면 `prefix[i]` 자리가 작을수록 부분합이 커짐. (j가 고정된다고 가정한 이유는 다음에 나옴.)

만약 j로 순회하게 된다면 `prefix[i]`의 최솟값 후보는 한 개씩 늘어남.

```
j=1 -> 후보: prefix[0]
j=2 -> 후보: prefix[0], prefix[1]
j=3 -> 후보: prefix[0], prefix[1], prefix[2]
```

그래서 이전 최솟값과 새로운 최솟값만 비교하면 됨..! (`O(1)`)

그래서 처음 생각했던 것처럼 누적합 테이블을 만들어서 i, j를 순회하되, j가 증가할 때마다 `prefix[i]` 최솟값을 한 번만 비교하면 되므로 `O(N)`으로 부분합의 최댓값을 구할 수 있음.

**엣지 케이스(?)**

다 푼 줄 알았는데 함정이 있었음. 변에서는 겹치는 부분을 한 칸으로 만들 수가 없었음. 그래서 부분합의 최댓값을 두 칸으로 만드는 경우에 대해서만 구하고, 변을 제외한 [1, 1] ~ [m-1, n-1] 각 한 칸과 최댓값을 한 번 더 비교함.

### 코드

```kt
class Solution {
    fun maxScore(grid: Array<IntArray>): Int {
        var max = -100000
        for (row in grid) {
            val prefix = mutableListOf(0);
            for (num in row) {
                val lastPrefix = prefix[prefix.size - 1]
                prefix.add(lastPrefix + num)
            }

            var prefixMin = prefix[0]
            for (j in 2 until prefix.size) {
                if (prefixMin > prefix[j - 2]) prefixMin = prefix[j - 2]
                val cur = prefix[j] - prefixMin
                if (max < cur) max = cur
            }
        }
        for (x in 0 until grid[0].size) {
            val prefix = mutableListOf(0);
            for (y in 0 until grid.size) {
                val num = grid[y][x]

                val lastPrefix = prefix[prefix.size - 1]
                prefix.add(lastPrefix + num)
            }

            var prefixMin = prefix[0]
            for (j in 2 until prefix.size) {
                if (prefixMin > prefix[j - 2]) prefixMin = prefix[j - 2]
                val cur = prefix[j] - prefixMin
                if (max < cur) max = cur
            }
        }
        for (x in 1 until grid.size - 1) {
            for (y in 1 until grid[0].size - 1) {
                if (max < grid[x][y]) max = grid[x][y]
            }
        }
        return max
    }
}
```

### 시간 복잡도

$$O(n^2)$$

### 느낀점 or 기억할 정보

- 이런 건 외워야 하나....
