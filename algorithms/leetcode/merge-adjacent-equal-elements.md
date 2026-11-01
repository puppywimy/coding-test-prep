### 문제 및 풀이 날짜

- https://leetcode.com/problems/merge-adjacent-equal-elements
- 2026-11-01

### 문제 분석 요약

스택, 구현

### 제한 사항

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5​​​​​​​`

### 알고리즘 설계

가장 단순한 방법을 먼저 생각해봤을 때, nums를 순회하며 같은 원소가 인접해 있다면 병합(배열 복사), 병합 후 다시 순회하는 방법이 있었음.

시간 복잡도를 계산해보니, <del>`nums = [2^n, 2^(n - 1), 2^(n - 1), ... , 2, 1, 1] (2^n은 10^5보다 작지만 가장 가까운 수)` 이런 경우가 최악의 경우일 것이며,</del> (`[1, 1, 1, ..., 1] 10^5개`가 최악의 경우였다..) O(n^2)으로 더 빠른 풀이를 생각해봐야 함.

갑자기 스택이 떠올랐는데, 삽입·삭제가 O(1)이라 복잡도를 낮출 수 있을 거라 생각했음. (실제로 O(n) 수준으로 낮춤.)

nums 크기가 10^5이고 모든 값이 10^5 같은 경우는 Int 오버플로우가 발생할 수 있으므로 Long을 사용함.

### 코드

```kt
class Solution {
    fun mergeAdjacent(nums: IntArray): List<Long> {
        val stack = mutableListOf<Long>()
        for (i in 1..100000) {
            stack.add(0)
        }
        var top = -1

        for (num in nums) {
            var tnum = num.toLong()
            if (top >= 0) {
                while (top >= 0 && stack[top] == tnum) {
                    tnum += stack[top--]
                }
            }
            stack[++top] = tnum
        }

        val answerList = mutableListOf<Long>()
        for (i in 0..top) {
            val el = stack[i]
            if (el == 0L) continue
            answerList.add(el)
        }

        return answerList
    }
}
```

### 시간 복잡도

$$O(n)$$

### 느낀점 or 기억할 정보

- 풀이를 떠올리며 시간 복잡도나 오버플로우를 계산할 때 최악의 시나리오가 무엇일지 먼저 생각해봐야겠다.
- 마지막에 스택 전체 순회할 때 스택의 쓰레기 값(pop할 때 초기화 안 하고 top만 내리는 방식)을 고려 안 해서 통과를 못 했었다. 다음부터 조심..
