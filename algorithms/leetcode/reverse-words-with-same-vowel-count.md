### 문제 및 풀이 날짜

- https://leetcode.com/problems/reverse-words-with-same-vowel-count
- 2026-10-27

### 문제 분석 요약

문자열 처리 관련 구현 문제

### 제한 사항

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters and spaces.
- Words in `s` are separated by a **single** space.
- `s` does **not** contain leading or trailing spaces.

### 알고리즘 설계

처음 풀이를 생각했을 때, s를 split(O(n)) -> 첫 단어 split -> 모음 개수 세고 -> 나머지 문자들에 대해 각각 모음 개수 세어서 -> reverse 하는 흐름이라고 생각했다. 그러면 시간 복잡도는 O(n)으로 s의 최대 길이가 10^5일 때 충분히 통과할 수 있겠다 생각했다.

실제로 그런 흐름으로 작성했으나 문자열 관련 함수 숙련도 이슈 발생

### 코드

```kt
class Solution {
    fun reverseWords(s: String): String {
        val words = s.split(" ")

        var targetCount = 0
        words[0].split("").forEach {
            when (it) {
                "a", "e", "i", "o", "u" -> targetCount++
            }
        }

        val newWords = mutableListOf(words[0])
        for (i in 1 until words.size) {
            val word = words[i]

            var count = 0
            word.split("").forEach {
                when (it) {
                    "a", "e", "i", "o", "u" -> count++
                }
            }

            if (count == targetCount) newWords.add(word.reversed())
            else newWords.add(word)
        }

        return newWords.joinToString(" ")
    }
}
```

### 시간 복잡도

$$O(n)$$

### 느낀점 or 기억할 정보

- 문자열 뒤집기 -> `String.reversed()`
- 문자열 join -> `Iterable<String>.joinToString(separator)`
