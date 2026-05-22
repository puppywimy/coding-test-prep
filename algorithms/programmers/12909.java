import java.util.ArrayDeque;

class Solution {
    boolean solution(String s) {
        ArrayDeque<String> stack = new ArrayDeque<>();
        for (String bracket : s.split("")) {
            if (bracket.equals("("))
                stack.push(bracket);
            else {
                String peek = stack.peek();
                if (peek == null)
                    return false;
                if (peek.equals(")"))
                    return false;
                stack.pop();
            }

        }
        return stack.isEmpty();
    }
}