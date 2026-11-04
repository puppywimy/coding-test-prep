class Solution {
    private var count: Int = 0
    
    fun solution(numbers: IntArray, target: Int): Int {
        recursive(numbers, target, 0, 0)
        return count
    }
    
    fun recursive(numbers: IntArray, target: Int, i: Int, n: Int) {
        if (i > numbers.size - 1) {
            if (n == target) count++
            return
        }
        
        recursive(numbers, target, i + 1, n + numbers[i])
        recursive(numbers, target, i + 1, n - numbers[i])
    }
}