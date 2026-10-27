class Solution {
    fun processStr(s: String): String {
        val result = mutableListOf<String>()
        val commands = s.split("")
        for (i in 1 until commands.size - 1) {
            val command = commands[i]
            when (command) {
                "*" -> {
                    val temp = mutableListOf<String>()
                    for (i in 0 until result.size - 1) {
                        temp.add(result[i])
                    }
                    result.clear()
                    temp.forEach { result.add(it) }
                }
                "#" -> {
                    val temp = mutableListOf<String>()
                    for (i in 0 until result.size) {
                        temp.add(result[i])
                    }
                    temp.forEach { result.add(it) }
                }
                "%" -> {
                    val temp = result.reversed()
                    result.clear()
                    temp.forEach { result.add(it) }
                }
                else -> result.add(command)
            }
        }
        return result.joinToString("")
    }
}