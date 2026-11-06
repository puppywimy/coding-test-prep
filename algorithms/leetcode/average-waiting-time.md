### 문제 및 풀이 날짜

- https://leetcode.com/problems/average-waiting-time
- 2026-11-06

### 문제 분석 요약

배열, 구현

### 제한 사항

- `1 <= customers.length <= 10^5`
- `1 <= arrival_i, time_i <= 10^4`
- `arrival_i <= arrival_(i+1)`

### 알고리즘 설계

구해야 하는 걸 생각해 봤을 때, 평균을 구해야 하니 이미 주어진 손님 수를 제외하고, 각 손님의 대기 시간의 합을 구해야 한다고 생각했음.

그래서 각 손님에 대해 순회하는 방법을 먼저 생각했을 때, 대기 시간을 구하려면 현재 시간에서 arrival_i를 빼야 하고, 현재 시간은 반복문 밖에 두어 time_i을 이용한 어떤 값과 누적되도록 하면 손님을 순회하며 각각의 대기 시간을 구할 수 있을 거라 생각함.

제한 사항을 확인했을 때 시간 복잡도는 문제 없었고, 구현 후 혹시 Int 오버플로우가 생기나 봤는데, 최악의 경우는 arrival_i와 time_i가 모두 10^4으로 나오는 경우로 currtime에 10^4 \* 10^5 + 10^4가 들어가서 간당간당하지만 통과할 거라고 생각했음.

하지만 오버플로우로 실패해 Long 타입으로 변경함.

(수정) 오버플로우는 total에서 발생함. arrival_i가 모두 1이고 time_i가 모두 10^4이면 total은 등차수열의 합이 됨.

### 코드

```kt
class Solution {
    fun averageWaitingTime(customers: Array<IntArray>): Double {
        val times = mutableListOf<Long>()

        var currtime = 0L
        for ((a, t) in customers) {
            currtime = maxOf(currtime, a.toLong()) + t
            times.add(currtime - a)
        }

        var total = 0L
        for (t in times) {
            total += t
        }

        return total.toDouble() / times.size
    }
}
```

### 시간 복잡도

$$O(n)$$

### 느낀점 or 기억할 정보

- Int의 크기는 `2^32`으로 범위는 `-2^31` ~ `2^31 - 1`이다.
