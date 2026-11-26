### 문제 및 풀이 날짜

- https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros
- 2026-11-26

### 문제 분석 요약

백트래킹

### 제한 사항

- `1 <= n <= 18`

### 알고리즘 설계

문제를 읽고 String을 앞에서부터 만들어 나가면 되겠다고 생각했다. 앞선 숫자가 0인 경우만 1로 강제해주도록 백트래킹을 구현하면 되겠다 생각했고, 제한 사항을 확인해보니 n이 최대 18이라 2^18 정도의 연산량이면 충분히 풀 수 있을 것이라 생각했다.

재귀가 분기하는 경우는 0과 1 두 가지 밖에 없어 조건문으로 처리했다.

1. **함수 정의**

   ```kt
   x: IntArray            // 조합용 배열
   i: Int                 // 현재 인덱스
   n: Int                 // 문자열 길이
   s: MutableList<String> // 정답 배열

   fun recursive(x, i, n, s)
   ```

2. **Base Condition**

   조합용 배열을 완성하면(`i`가 `n`이 되면) 문자열로 만들어 정답 배열에 넣는다. (재귀식에서 정답 문자열만 만들도록 한다.)

3. **재귀 식**

   ```kt
   fun recursive(<인자>) {
       // 1. Base Condition

       // 2. i가 0보다 크고(이전 숫자랑 비교할 수 있어야 하므로), 이전 숫자가 0인 경우만 1을 넣는다. 그 외는 0이나 1을 넣어도 상관 없다.
   }
   ```

### 코드

```kt
class Solution {
    fun validStrings(n: Int): List<String> {
        val x = (1..n).map { -1 }.toIntArray()
        val s = mutableListOf<String>()
        recursive(x, 0, n, s)
        return s
    }

    fun recursive(x: IntArray, i: Int, n: Int, s: MutableList<String>) {
        if (i == n) {
            s.add(x.map { "" + it }.joinToString(""))
            return
        }

        if (i > 0 && x[i - 1] == 0) {
            x[i] = 1
            recursive(x, i + 1, n, s)
        }
        else {
            x[i] = 0
            recursive(x, i + 1, n, s)
            x[i] = 1
            recursive(x, i + 1, n, s)
        }
    }
}
```

### 시간 복잡도

$$O(2^n)$$

### 느낀점 or 기억할 정보

- Kotlin도 Local Function(함수를 똑같이 내부에 선언하면 된다.)을 쓰면 JS나 Python처럼 바깥 변수를 클로저로 참조할 수 있다. 매번 인자로 넘길 필요가 없었다.
- `i`가 `n - 1`일 때도 재귀 식을 실행해야 하므로 Base Condition을 조심한다.
