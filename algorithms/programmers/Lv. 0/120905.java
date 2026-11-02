import java.util.Arrays;

class Solution {
    public int[] solution(int n, int[] numlist) {
        return Arrays.stream(numlist).filter(element -> element % n == 0).toArray();
    }
}