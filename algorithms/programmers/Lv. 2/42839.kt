class Solution {
    private val allcases = mutableSetOf<Int>()
    
    private var length = 0
    private var numbers = ""
    
    fun solution(numbers: String): Int {
        length = numbers.length
        this.numbers = numbers
        
        val used = mutableListOf<Boolean>()
        for (c in numbers) {
            used.add(false)
        }
        
        recursive(used, mutableListOf<String>())
        
        var count = 0
        allcases.forEach {
            if (it == 1) return@forEach
            for (i in 2..10000) {
                if (it == i) break
                if (it % i == 0) return@forEach
            }
            count++
        }
        
        return count
    }
    
    fun recursive(used: MutableList<Boolean>, strlist: MutableList<String>) {
        if (strlist.size > 0) allcases.add(strlist.joinToString("").toInt())
        if (strlist.size == length) return
        
        for (i in 0 until used.size) {
            if (!used[i]) {
                used[i] = true
                strlist.add(numbers[i].toString())
                recursive(used, strlist)
                used[i] = false
                strlist.removeLast()
            }
        }
    }
}