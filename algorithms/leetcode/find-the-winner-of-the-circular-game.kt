class Solution {
    fun findTheWinner(n: Int, k: Int): Int {
        val circle = (1..n).toMutableList()
        var cursor = 0
        val dead = mutableListOf<Int>()
        while (dead.size < n) {
            var count = 1
            while (count < k) {
                cursor = (cursor + 1) % n
                while (circle[cursor] == -1) {
                    cursor = (cursor + 1) % n
                }
                
                count++
            }
            dead.add(circle[cursor])
            if (dead.size == n) break
            circle[cursor] = -1

            cursor = (cursor + 1) % n
            while (circle[cursor] == -1) {
                cursor = (cursor + 1) % n
            }
        }
        return dead[dead.size - 1]
    }
}