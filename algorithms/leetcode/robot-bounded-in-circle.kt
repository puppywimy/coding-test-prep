class Solution {
    fun isRobotBounded(instructions: String): Boolean {
        val dx = listOf(0, 1, 0, -1)
        val dy = listOf(1, 0, -1, 0)
        var di = 0;
        val xy = mutableListOf(0, 0)
        for (ins in instructions) {
            when (ins) {
                'L' -> di = (di + 1) % 4
                'R' -> di = (di + 3) % 4
                'G' -> {
                    xy[0] += dx[di]
                    xy[1] += dy[di]
                }
            }
        }
        return di != 0 || (xy[0] == 0 && xy[1] == 0)
    }
}