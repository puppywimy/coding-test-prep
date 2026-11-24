class Solution {
    fun shortestDistanceAfterQueries(n: Int, queries: Array<IntArray>): IntArray {
        val conn = mutableMapOf<Int, MutableList<Int>>()

        for (i in 0..n-2) {
            conn.put(i, mutableListOf(i + 1))
        }

        val ans = mutableListOf<Int>()

        for (uv in queries) {
            (conn.get(uv[0]) ?: mutableListOf<Int>()).add(uv[1])

            val q = ArrayDeque<Int>()
            q.addLast(0)
            val d = (0..n-1).map { -1 }.toMutableList()
            d[0] = 0

            while (q.size > 0) {
                val c = q.removeFirst()
                val cconn = conn.get(c) ?: mutableListOf<Int>()
                for (x in cconn) {
                    if (x == n-1) {
                        ans.add(d[c] + 1)
                        q.clear()
                        break
                    }
                    if (d[x] > -1) continue
                    q.addLast(x)
                    d[x] = d[c] + 1
                }
            }
        }
        
        return ans.toIntArray()
    }
}