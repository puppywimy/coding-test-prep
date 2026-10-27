### 문제 및 풀이 날짜

- https://leetcode.com/problems/process-string-with-special-operations-i
- 2026-10-27

### 문제 분석 요약

문자열 처리 구현 문제

### 제한 사항

- `1 <= s.length <= 20`
- `s` consists of only lowercase English letters and special characters `*`, `#`, and `%`.

### 알고리즘 설계

각각의 연산 시간 복잡도가 최대 O(n)이고, s의 최대 길이가 20이라 최대 400 정도의 연산량이라 생각했다. 간단한 구현 문제라 바로 구현을 시작했다.

문제는 각각의 연산자에 해당하는 문자열 관련 메서드가 구현되어 있을 것 같은데 아직 잘 몰라서 List를 이용해 구현했다.

### 코드

```kt
class Solution {
    fun processStr(s: String): String {
        val result = mutableListOf<String>()
        val commands = s.split("")
        for (i in 1 until commands.size - 1) {
            val command = commands[i]
            when (command) {
                "*" -> {
                    val temp = mutableListOf<String>()
                    for (i in 0 until result.size - 1) {
                        temp.add(result[i])
                    }
                    result.clear()
                    temp.forEach { result.add(it) }
                }
                "#" -> {
                    val temp = mutableListOf<String>()
                    for (i in 0 until result.size) {
                        temp.add(result[i])
                    }
                    temp.forEach { result.add(it) }
                }
                "%" -> {
                    val temp = result.reversed()
                    result.clear()
                    temp.forEach { result.add(it) }
                }
                else -> result.add(command)
            }
        }
        return result.joinToString("")
    }
}
```

### 시간 복잡도

$$O(n^2)$$

각 문자마다 최대 O(n)의 연산을 진행하기 때문

### 느낀점 or 기억할 정보

- s.split("")을 하면 앞뒤에 빈 칸(?)이 들어가는데 인지하고도 문제가 없을 것 같아 `s.split("").forEach { when }`으로 짰었다. 아마 마지막 문자를 지우는 커맨드가 오작동해 for문으로 다시 짰다.
- 애초에 메서드를 잘 알고 있었다면 시간을 단축할 수 있었을 것
  - `String.dropLast(1)`
  - `String.repeat(2)`
- (수정) 문자열 길이를 두 배로 늘리는 연산자가 있어 실제 시간 복잡도는 O(2^n)이다. (그래도 안정권)
