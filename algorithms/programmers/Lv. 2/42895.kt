class Solution {
    fun solution(N: Int, number: Int): Int {
        val table = mutableListOf<Set<Int>>()
        table.add(setOf<Int>())
        table.add(setOf(N))
        
        if (N == number) return 1
        
        for (i in 2..8) {
            val newSet = mutableSetOf<Int>()
            
            var w = 1
            var total = 0
            for (j in 1..i) {
                total += N * w
                w *= 10
            }
            newSet.add(total)
            
            for (j in 1..i - 1) {
                val k = i - j
                table[j].forEach { je ->
                    table[k].forEach { ke ->
                        newSet.add(je + ke)
                        newSet.add(je - ke)
                        newSet.add(je * ke)
                        if (ke != 0) newSet.add(je / ke)
                    }
                }
            }
            
            if (number in newSet) return i
            
            table.add(newSet)
        }
        
        return -1
    }
}