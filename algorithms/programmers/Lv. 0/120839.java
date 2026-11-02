class Solution {
    public String solution(String rsp) {
        String answer = "";
        for (int i = 0; i < rsp.length(); i++) {
            int currentValue = rsp.charAt(i) - 48;
            answer += currentValue == 2 ? 0 : currentValue == 0 ? 5 : 2;
        }
        return answer;
    }
}