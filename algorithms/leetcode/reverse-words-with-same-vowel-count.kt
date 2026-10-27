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