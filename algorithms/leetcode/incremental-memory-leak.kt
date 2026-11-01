class Solution {
    fun memLeak(memory1: Int, memory2: Int): IntArray {
        var time = 0
        var mem1 = memory1.toLong()
        var mem2 = memory2.toLong()
        while (true) {
            time++
            if (mem1 == mem2 || mem1 > mem2) {
                if (mem1 >= time) {
                    mem1 -= time
                } else {
                    return intArrayOf(time, mem1.toInt(), mem2.toInt())
                }
            } else {
                if (mem2 >= time) {
                    mem2 -= time
                } else {
                    return intArrayOf(time, mem1.toInt(), mem2.toInt())
                }
            }
        }
    }
}