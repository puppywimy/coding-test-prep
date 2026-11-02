import java.util.ArrayList;

class Solution {
    public int[] solution(int n) {
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) numbers.add(i);
        }
        return numbers.stream().mapToInt(element -> element).toArray();
    }
}