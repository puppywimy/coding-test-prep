class Solution {
    fun solution(n: Int, edge: Array<IntArray>): Int {
        val a2b = mutableMapOf<Int, MutableList<Int>>()
        for ((a, b) in edge) {
            if (a in a2b) {
                (a2b.get(a) ?: mutableListOf<Int>()).add(b)
            } else {
                a2b.put(a, mutableListOf<Int>(b))
            }
            if (b in a2b) {
                (a2b.get(b) ?: mutableListOf<Int>()).add(a)
            } else {
                a2b.put(b, mutableListOf<Int>(a))
            }
        }
        
        var q = mutableListOf<Int>(1)
        var c = 0
        var d = mutableListOf<Int>(-1, 0)
        for (i in 2..n) {
            d.add(-1)
        }
        
        while (c < q.size) {
            val x = q[c++]
            a2b.get(x)?.forEach {
                if (d[it] > -1) return@forEach
                q.add(it)
                d[it] = d[x] + 1
            }
        }
        
        val sorted = d.sortedDescending()
        
        return sorted.filter { it == sorted[0] }.size
    }
}