### 문제 및 풀이 날짜

- https://leetcode.com/problems/find-the-winner-of-the-circular-game
- 2026-10-28

### 문제 분석 요약

원형 순환 구현 문제

### 제한 사항

- `1 <= k <= n <= 500`

### 알고리즘 설계

원형 리스트에서 원소가 하나씩 빠지면서 순환하는 구조라 링크드리스트를 사용해서 풀면 편하겠다는 생각을 했지만... 링크드리스트 메서드를 찾아볼 수 없어서 리스트로 구현함.

순회를 직접 구현해도 삭제된 원소 자리에 -1을 표시하는 방식으로 하면 최대 O(n^2)의 시간 복잡도로 풀 수 있을 것 같아서 제한 사항 내로 충분히 풀 수 있다고 생각했음.

문제는 설계 없이 무작정 구현을 시작해서 코드가 너무 복잡해졌고, 버그가 많이 생겨 풀이 시간 초과.. 이후 코드를 다시 살펴보며 올바르게 작성함.

### 코드

```kt
class Solution {
    fun findTheWinner(n: Int, k: Int): Int {
        val circle = (1..n).toMutableList()
        var cursor = 0
        val dead = mutableListOf<Int>()
        while (dead.size < n) {
            var count = 1
            while (count < k) {
                cursor = (cursor + 1) % n
                while (circle[cursor] == -1) {
                    cursor = (cursor + 1) % n
                }

                count++
            }
            dead.add(circle[cursor])
            if (dead.size == n) break
            circle[cursor] = -1

            cursor = (cursor + 1) % n
            while (circle[cursor] == -1) {
                cursor = (cursor + 1) % n
            }
        }
        return dead[dead.size - 1]
    }
}
```

### 시간 복잡도

$$O(n^2\log{n})$$

내 풀이는 알고보니 O(n^2)이 아니었음. 최악의 경우는 k가 n인 경우로, 원소를 삭제할 때마다 점점 더 많이 순회하게 됨.

예를 들어 `n = k = 500`이면

| 남은 사람 | 500번 세려면                          |
| --------- | ------------------------------------- |
| 499명     | 1바퀴 + 조금                          |
| 250명     | 모든 사람을 2번씩 세야 함 → **2바퀴** |
| 100명     | 5번씩 → **5바퀴**                     |
| 2명       | 250번씩 → **250바퀴**                 |

그래서 O(n^2logn)에 근사한다고 함.

### 느낀점 or 기억할 정보

- 1부터 n까지 숫자가 담긴 리스트는 (1..n).toList()로 쉽게 만들 수 있음. 1..n은 1.rangeTo(n)를 연산자로 쓴 것으로 IntRange 자료형을 반환함.
- `dead.add(circle[cursor])` 다음에 탈출 조건 검사를 해야지 다음 루프에서 무한 루프에 빠지지 않음.
