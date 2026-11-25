### 문제 및 풀이 날짜

- https://leetcode.com/problems/minimum-cost-to-acquire-required-items
- 2026-11-25

### 문제 분석 요약

간단 수학 + 그리디

### 제한 사항

- `1 <= cost1, cost2, costBoth <= 10^6`
- `0 <= need1, need2 <= 10^9`

### 알고리즘 설계

알고리즘을 이용하는 방법이 바로 안 떠올랐는데, 일단 cost1이나 cost2보다 costBoth를 택하는 게 더 저렴한 경우가 있는지가 궁금했음.

type 1과 2를 둘 다 살 수 있을 때는 cost1 + cost2 가격보다 costBoth가 더 싸면 costBoth 비용을 지불하는 게 나았음.

그리고 나머지 type 1 혹은 2를 추가 구매할 때는 해당 가격과 costBoth 중 저렴한 가격으로 사면 됨.

이렇게 놓고 보니 알고리즘을 이용하기보다 조건문과 수식을 이용해서 단순하게 풀 수 있을 것 같았음.

(추가) 내가 푼 방식이 그리디였다..!

### 코드

```kt
class Solution {
    fun minimumCost(cost1: Int, cost2: Int, costBoth: Int, need1: Int, need2: Int): Long {
        if (costBoth < cost1 + cost2) {
            if (need1 > need2) return need2.toLong() * costBoth + (need1 - need2).toLong() * minOf(costBoth, cost1)
            else return need1.toLong() * costBoth + (need2 - need1).toLong() * minOf(costBoth, cost2)
        }
        else return need1.toLong() * minOf(costBoth, cost1) + need2.toLong() * minOf(costBoth, cost2)
    }
}
```

### 시간 복잡도

$$O(1)$$
