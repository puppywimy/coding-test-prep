### 문제 및 풀이 날짜

- https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk
- 2026-10-27

### 문제 분석 요약

단순 구현 문제

### 제한 사항

- `chalk.length == n`
- `1 <= n <= 10^5`
- `1 <= chalk[i] <= 10^5`
- `1 <= k <= 10^9`

### 알고리즘 설계

이거 그냥 chalk를 계속 순회하면서 k에서 차감/검사해도 괜찮을지를 먼저 생각했고, 이 경우 시간 복잡도는 k의 최댓값에 달려있음. 10^9은 백준에서는 시간 초과가 간당간당했었던 숫자로 기억하는데 구현이 간단해서 우선 구현해보기로 함.

이 방식으로도 통과가 되었음.

### 코드

```kt
class Solution {
    fun chalkReplacer(chalk: IntArray, k: Int): Int {
        var chalks = k
        while (true) {
            for (i in 0 until chalk.size) {
                if (chalks < chalk[i]) return i
                chalks -= chalk[i]
            }
        }
        return -1
    }
}
```

### 시간 복잡도

$$O(k)$$

### 느낀점 or 기억할 정보

- 매개 변수는 val이다.
