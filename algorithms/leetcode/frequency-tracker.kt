class FrequencyTracker() {
    private val countMap = mutableMapOf<Int, Int>()
    private val frequencyMap = mutableMapOf<Int, Int>()

    fun add(number: Int) {
        val freq = countMap.get(number)
        if (freq == null) {
            countMap.put(number, 1)
            frequencyMap.put(1, (frequencyMap.get(1) ?: 0) + 1)
        } else {
            countMap.put(number, freq + 1)
            frequencyMap.put(freq, (frequencyMap.get(freq) ?: 0) - 1)
            frequencyMap.put(freq + 1, (frequencyMap.get(freq + 1) ?: 0) + 1)
        }
    }

    fun deleteOne(number: Int) {
        val freq = countMap.get(number)
        if (freq == null || freq < 1) return
        countMap.put(number, freq - 1)
        frequencyMap.put(freq, (frequencyMap.get(freq) ?: 0) - 1)
        frequencyMap.put(freq - 1, (frequencyMap.get(freq - 1) ?: 0) + 1)
    }

    fun hasFrequency(frequency: Int) = (frequencyMap.get(frequency) ?: 0) > 0

}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */