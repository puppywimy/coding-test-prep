### 문제 및 풀이 날짜

- https://leetcode.com/problems/watering-plants-ii
- 2026-10-30

### 문제 분석 요약

단순 구현

### 제한 사항

- `n == plants.length`
- `1 <= n <= 10^5`
- `1 <= plants[i] <= 10^6`
- `max(plants[i]) <= capacityA, capacityB <= 10^9`

### 알고리즘 설계

문제를 읽고 Alice와 Bob이 만나는 시점에서 남아있는 물의 양을 비교해야 해서 결국 물을 주는 과정을 구현해야 하는 문제라 생각했고, `plants.size`의 절반만큼 순회(`n/2`번)하며 양쪽에서 물을 주는 방식으로 구현하면 `O(n)`의 복잡도로 풀 수 있을 것이라 생각했음.

`plants.size`의 절반(내림)만큼 순회하며 물을 주고, 마지막에 `plants.size`가 홀수였다면 Alice와 Bob이 만나므로 그에 대한 처리를 했음.

### 코드

```kt
class Solution {
    fun minimumRefill(plants: IntArray, capacityA: Int, capacityB: Int): Int {
        var refillCount = 0
        var canA = capacityA
        var canB = capacityB
        for (i in 0 until plants.size / 2) {
            if (plants[i] > canA) {
                refillCount++
                canA = capacityA - plants[i]
            } else {
                canA -= plants[i]
            }

            if (plants[plants.size - 1 - i] > canB) {
                refillCount++
                canB = capacityB - plants[plants.size - 1 - i]
            } else {
                canB -= plants[plants.size - 1 - i]
            }
        }
        if (
            plants.size % 2 != 0 &&
            plants[plants.size / 2] > maxOf(canA, canB)
        ) refillCount++
        return refillCount
    }
}
```

### 시간 복잡도

$$O(n)$$
