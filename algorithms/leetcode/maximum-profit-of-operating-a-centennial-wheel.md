### 문제 및 풀이 날짜

- https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel
- 2026-10-28

### 문제 분석 요약

문제를 잘 읽고 구현하는 문제

### 제한 사항

- `n == customers.length`
- `1 <= n <= 10^5`
- `0 <= customers[i] <= 50`
- `1 <= boardingCost, runningCost <= 100`

### 알고리즘 설계

지문 읽다가 5분 남았을 때 코드 작성 시작..

customers가 어느 순간부터 0으로 나오게 되는 경우도 고려해야 하는지 궁금증이 생겨서 시간 초과 후 Claude한테 물어봤는데 이익 최댓값(`maxProfit`)과 그 시점의 회전 수(`maxProfitRotation`)를 기록하는 방법을 사용하면 별도로 그런 케이스를 신경 쓰지 않아도 된다는 것을 알게 됨. 왜냐하면 customers 인덱스가 증가하면서 계속 회전하게 될 것이고, 이익은 감소하게 될 것이기 때문임.

이후 문제 없이 구현

### 코드

```kt
class Solution {
    fun minOperationsMaxProfit(customers: IntArray, boardingCost: Int, runningCost: Int): Int {
        var maxProfit = 0
        var maxProfitRotation = 0

        var index = 0
        var waiting = 0

        var totalProfit = 0
        var rotation = 0

        while (index < customers.size || waiting > 0) {
            if (index < customers.size) {
                waiting += customers[index++]
            }
            if (waiting > 4) {
                totalProfit += 4 * boardingCost
                waiting -= 4
            } else {
                totalProfit += waiting * boardingCost
                waiting = 0
            }
            totalProfit -= runningCost
            rotation++

            if (totalProfit > maxProfit) {
                maxProfit = totalProfit
                maxProfitRotation = rotation
            }
        }

        return if (maxProfitRotation == 0) -1 else maxProfitRotation
    }
}
```

### 시간 복잡도

$$O(n)$$

연산량을 계산하면 최대 총 고객 수는 500만(10^5 \* 50) 명으로 이를 4(곤돌라 수용량)로 나눈 125만 정도가 됨. 이정도 규모에서 크게 벗어나지 않음.

### 느낀점 or 기억할 정보

- 아 지문 읽는 게 어려웠음..
