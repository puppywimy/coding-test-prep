import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

class Solution {
    public int solution(int N, int number) {
        if (N == number)
            return 1;

        List<Set<Integer>> table = new ArrayList<>(
                Arrays.asList(
                        null,
                        new HashSet<Integer>(Set.of(N))));
        for (int i = 2; i <= 8; i++) {
            Set<Integer> set = new HashSet<>();
            for (int k = 1; k < i; k++) {
                for (Integer a : table.get(k)) {
                    for (Integer b : table.get(i - k)) {
                        if (a + b == number)
                            return i;
                        set.add(a + b);

                        if (a - b == number)
                            return i;
                        set.add(a - b);

                        if (b - a == number)
                            return i;
                        set.add(b - a);

                        if (a * b == number)
                            return i;
                        set.add(a * b);

                        if (b != 0) {
                            if (a / b == number)
                                return i;
                            set.add(a / b);
                        }

                        if (a != 0) {
                            if (b / a == number)
                                return i;
                            set.add(b / a);
                        }

                        int total = 0;
                        for (int j = 0; j < i; j++) {
                            total = total * 10 + N;
                        }
                        if (total == number)
                            return i;
                        set.add(total);
                    }
                }
            }
            table.add(set);
        }

        return -1;
    }
}