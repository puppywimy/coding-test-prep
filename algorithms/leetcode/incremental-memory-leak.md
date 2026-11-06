### 문제 및 풀이 날짜

- https://leetcode.com/problems/incremental-memory-leak
- 2026-11-06

### 문제 분석 요약

구현

### 제한 사항

- `0 <= memory1, memory2 <= 2^31 - 1`

### 알고리즘 설계

문제를 읽고 제한 사항을 보니 Int의 경계라 오버플로우를 유의하면서 풀어야겠다는 생각을 했음.

일단 구현 자체는 간단할 것 같아서 바로 구현을 시작함.

구현을 하고 나니 mem의 감소량이 등차수열을 이루게 되고, 그에 따라 순회 복잡도는 루트 n임을 확인함. 이 구조에서 오버플로우가 발생할 일도 없다는 것을 확인함. (추가: `mem >= time`을 확인하고 빼서 음수가 될 일도, 증가할 일도 없음.)

### 코드

```kt
class Solution {
    fun memLeak(memory1: Int, memory2: Int): IntArray {
        var time = 1
        var mem1 = memory1
        var mem2 = memory2
        while (true) {
            if (mem1 >= mem2) {
                if (mem1 >= time) mem1 -= time
                else break
            } else {
                if (mem2 >= time) mem2 -= time
                else break
            }
            time++
        }
        return intArrayOf(time, mem1, mem2)
    }
}
```

### 시간 복잡도

$$O(\sqrt{n})$$
