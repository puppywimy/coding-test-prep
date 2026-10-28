### 문제 및 풀이 날짜

- https://leetcode.com/problems/robot-bounded-in-circle
- 2026-10-28

### 문제 분석 요약

단순 구현 문제, 분기를 어떻게 해야 할지 잘 생각해봐야 하는 문제?

### 제한 사항

- `1 <= instructions.length <= 100`
- `instructions[i]` is `'G'`, `'L'` or, `'R'`.

### 알고리즘 설계

가장 단순한 방법부터 떠올려 보자 해서 "instruction을 원점으로 돌아올 때까지 반복"하는 방식을 생각했음. 문제는 탈출 조건이 없다는 것임.

일단 반복할 때는 시작 점, 시작 방향, 도착 점, 도착 방향만 알아도 충분하다고 생각했음. 위 네 가지 정보가 있을 때 탈출 조건을 찾기 위해 주석으로 그림을 몇 가지 그려봄.

```kt
// ^ (도착 점, 도착 방향)
// . (이동 경로 생략)
// ^ (시작 점, 시작 방향)

// <
//  ...
//     ^

//     ^ (시작 점)
//  ...
// ^     (도착 점)
```

그러고나서 알아낸 정보는 도착 방향이 같은 방향만 아니면 된다는 것임..!

```kt
var count = 0
for (ins in instructions) {
    when (ins) {
        'L' -> count = (count + 1) % 4
        'R' -> count = (count - 1) % 4
    }
}

return count != 0
```

그렇게 첫 코드를 이렇게 짰으나 틀렸음. 왜냐하면 도착 방향이 같은 방향이어도 되는 경우가 한 가지 있었음. 바로 원점으로 돌아오는 경우임.

원점으로 돌아오는 경우를 구하려면 도착 점 위치도 알아야 하므로 로봇이 이동하도록 다시 작성함.

### 코드

```kt
class Solution {
    fun isRobotBounded(instructions: String): Boolean {
        val dx = listOf(0, 1, 0, -1)
        val dy = listOf(1, 0, -1, 0)
        var di = 0;
        val xy = mutableListOf(0, 0)
        for (ins in instructions) {
            when (ins) {
                'L' -> di = (di + 1) % 4
                'R' -> di = (di + 3) % 4
                'G' -> {
                    xy[0] += dx[di]
                    xy[1] += dy[di]
                }
            }
        }
        return di != 0 || (xy[0] == 0 && xy[1] == 0)
    }
}
```

### 시간 복잡도

$$O(n)$$

도착 방향과 도착점을 계산하기 위해 instructions를 한 번만 순회함.

### 느낀점 or 기억할 정보

- 첫 번째 방법으로 제출을 하고 틀렸다는 것을 알았음. 만약 틀렸다는 결과가 안 나왔더라면 그대로 틀렸을 것임. 일단 문제를 많이 풀어보면서 엣지 케이스를 발견하는 감을 늘려야 할 것 같음.
- for..in으로 문자열의 각 Char를 순회할 수 있음. 이때 Char 타입이 담긴다는 것을 주의
