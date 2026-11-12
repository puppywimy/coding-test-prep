class Solution {
    fun maxConsecutiveAnswers(answerKey: String, k: Int): Int {
        var l = 0
        var r = 0
        var countF = 0
        var maxT = 0
        while (r < answerKey.length) {
            if (answerKey[r++] == 'F') {
                countF++
                while (countF > k && l < r) {
                    if (answerKey[l++] == 'F') countF--
                }
            }

            var rangeSize = r - l
            if (maxT < rangeSize) maxT = rangeSize
        }

        l = 0
        r = 0
        var countT = 0
        var maxF = 0
        while (r < answerKey.length) {
            if (answerKey[r++] == 'T') {
                countT++
                while (countT > k && l < r) {
                    if (answerKey[l++] == 'T') countT--
                }
            }

            var rangeSize = r - l
            if (maxF < rangeSize) maxF = rangeSize
        }

        return maxOf(maxT, maxF)
    }
}