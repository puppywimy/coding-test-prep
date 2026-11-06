class Solution {
    fun memLeak(memory1: Int, memory2: Int): IntArray {
        var time = 1
        var mem1 = memory1
        var mem2 = memory2
        while (true) {
            if (mem1 >= mem2) {
                if (mem1 >= time) mem1 -= time
                else break
            } else {
                if (mem2 >= time) mem2 -= time
                else break
            }
            time++
        }
        return intArrayOf(time, mem1, mem2)
    }
}