### 문제 및 풀이 날짜

- https://leetcode.com/problems/different-ways-to-add-parentheses
- 2026-10-27

### 문제 분석 요약

트리, 백트래킹?

### 제한 사항

- `1 <= expression.length <= 20`
- `expression` consists of digits and the operator `'+'`, `'-'`, and `'*'`.
- All the integer values in the input expression are in the range `[0, 99]`.
- The integer values in the input expression do not have a leading `'-'` or `'+'` denoting the sign.

### 알고리즘 설계

처음에 이진 트리를 만드는 경우의 수를 떠올렸는데 뭔가 스택을 이용해서 풀면 되나? 싶어서 그쪽으로 구현하게 됨. 하지만 바로 15분 초과..

Opus 5.5한테 접근 방법 힌트를 달라고 해서 "이 트리에서 루트는 식에서 어떤 의미일까요?"를 얻음.
이때 각 연산자를 루트 노드로 놓고 양쪽의 서브트리를 다시 재귀적으로 탐색하는 방법으로 풀어야 한다는 것을 알게 됨.

recursive라는 재귀함수를 정의해서 연산한 값 하나를 반환하게 했는데, 서브트리가 반환하는 경우의 수가 여러개일 수 밖에 없다는 것을 알고 `List<Int>` 타입으로 통일함.

Base Condition은 expression에 연산자가 없는 순수 숫자인 경우(answer.size == 0)로 배열에 해당 숫자 하나만 담아서 반환함.

최종적으로 recursive를 따로 정의할 필요 없이 diffWaysToCompute를 재귀 함수로 작성했음.

### 코드

```kt
class Solution {
    fun diffWaysToCompute(expression: String): List<Int> {
        val answer = mutableListOf<Int>()
        for (i in 0 until expression.length) {
            when (expression[i]) {
                '+' -> {
                    val lefts = diffWaysToCompute(expression.substring(0, i))
                    val rights = diffWaysToCompute(expression.substring(i + 1))
                    for (left in lefts) {
                        for (right in rights) {
                            answer.add(left + right)
                        }
                    }
                }
                '-' -> {
                    val lefts = diffWaysToCompute(expression.substring(0, i))
                    val rights = diffWaysToCompute(expression.substring(i + 1))
                    for (left in lefts) {
                        for (right in rights) {
                            answer.add(left - right)
                        }
                    }
                }
                '*' -> {
                    val lefts = diffWaysToCompute(expression.substring(0, i))
                    val rights = diffWaysToCompute(expression.substring(i + 1))
                    for (left in lefts) {
                        for (right in rights) {
                            answer.add(left * right)
                        }
                    }
                }
            }
        }
        if (answer.size == 0) return listOf(Integer.parseInt(expression))
        return answer;
    }
}
```

### 시간 복잡도

$$O(C_n)$$

이진 트리를 만드는 경우의 수로 카탈란 수라고 함.<br>
여기서 n은 연산자의 수로 이 문제에서는 최대 9개임.<br>
풀어서 계산하면,
$$O(\frac{(2n)!}{(n+1)!n!})$$
로 약 5000 정도가 됨.

### 느낀점 or 기억할 정보

- 접근 방법을 생각해내기 어려웠던 문제..
- substring 사용법
