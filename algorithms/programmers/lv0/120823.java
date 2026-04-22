import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        for (int i = 1; i <= n; i++) {
            String row = "";
            for (int j = 0; j < i; j++) {
                row += "*";
            }
            System.out.println(row);
        }
    }
}