class Solution {
    fun maxScore(grid: Array<IntArray>): Int {
        var max = -100000
        for (row in grid) {
            val prefix = mutableListOf(0);
            for (num in row) {
                val lastPrefix = prefix[prefix.size - 1]
                prefix.add(lastPrefix + num)
            }

            var prefixMin = prefix[0]
            for (j in 2 until prefix.size) {
                if (prefixMin > prefix[j - 2]) prefixMin = prefix[j - 2]
                val cur = prefix[j] - prefixMin
                if (max < cur) max = cur
            }
        }
        for (x in 0 until grid[0].size) {
            val prefix = mutableListOf(0);
            for (y in 0 until grid.size) {
                val num = grid[y][x]
                
                val lastPrefix = prefix[prefix.size - 1]
                prefix.add(lastPrefix + num)
            }

            var prefixMin = prefix[0]
            for (j in 2 until prefix.size) {
                if (prefixMin > prefix[j - 2]) prefixMin = prefix[j - 2]
                val cur = prefix[j] - prefixMin
                if (max < cur) max = cur
            }
        }
        for (x in 1 until grid.size - 1) {
            for (y in 1 until grid[0].size - 1) {
                if (max < grid[x][y]) max = grid[x][y]
            }
        }
        return max
    }
}