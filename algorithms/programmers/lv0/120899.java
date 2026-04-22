class Solution {
    public int[] solution(int[] array) {
        int[] max = {0, 0};
        for (int i = 0; i < array.length; i++) {
            int currentNumber = array[i];
            if (max[0] < currentNumber) {
                max[0] = currentNumber;
                max[1] = i;
            }
        }
        return max;
    }
}