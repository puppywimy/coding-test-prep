class Solution {
    fun mergeAdjacent(nums: IntArray): List<Long> {
        val stack = mutableListOf<Long>()
        for (i in 1..100000) {
            stack.add(0)
        }
        var top = -1

        for (num in nums) {
            var tnum = num.toLong()
            if (top >= 0) {
                while (top >= 0 && stack[top] == tnum) {
                    tnum += stack[top--]
                }
            }
            stack[++top] = tnum
        }

        val answerList = mutableListOf<Long>()
        for (i in 0..top) {
            val el = stack[i]
            if (el == 0L) continue
            answerList.add(el)
        }

        return answerList
    }
}