class Solution {
    fun solution(progresses: IntArray, speeds: IntArray): IntArray {
        val ans = mutableListOf<Int>()
        var cursor = 0
        for (i in 1..100) {
            for (j in 0 until progresses.size) {
                progresses[j] += speeds[j]
            }
            var deploy = 0
            while (cursor < progresses.size) {
                if (progresses[cursor] >= 100) {
                    cursor++
                    deploy++
                }
                else break
            }
            if (deploy > 0) ans.add(deploy)
        }
        return ans.toIntArray()
    }
}