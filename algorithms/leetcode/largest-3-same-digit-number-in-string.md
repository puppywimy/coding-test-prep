### 문제 및 풀이 날짜

- https://leetcode.com/problems/largest-3-same-digit-number-in-string
- 2026-11-03

### 문제 분석 요약

단순 문자열 처리 구현

### 제한 사항

- `3 <= num.length <= 1000`
- `num` only consists of digits.

### 알고리즘 설계

뭔가 문자열에서 substring을 검색하는 메서드가 있을 것 같아서 000 ~ 999 검색해서 단순하게 풀어 볼까 했는데 어차피 메서드를 몰라서 다른 방법을 생각함.

구조가 간단한 편이라 바로 구현을 시작했고 Char를 하나씩 읽으며 같은 Char의 개수를 세는 구조로 구현함.

### 코드

```kt
class Solution {
    fun largestGoodInteger(num: String): String {
        val cSet = mutableSetOf<Char>()
        var last = 'x'
        var count = -1
        for (c in num) {
            if (last == c) {
                count++
                if (count >= 3) cSet.add(c)
            } else {
                count = 1
            }
            last = c
        }
        if (cSet.size == 0) return ""
        val str = cSet.sortedDescending()[0].toString()
        return str + str + str
    }
}
```

### 시간 복잡도

$$O(n)$$

sortedDescending 때문에 nlogn인가 했는데 cSet을 구성하는 최악의 시나리오는 0~9밖에 없기 때문에 상수로써 무시했다.

### 느낀점 or 기억할 정보

- Char를 `''`로 초기화하면 "Empty character literal." 오류가 난다.
- 토스 모범 답안은 크기가 3인 윈도우를 이동하며 3개의 Char가 같은지 비교하는 방식이다.
- `String.repeat(n)`으로 문자열을 반복해서 만들 수 있다.
