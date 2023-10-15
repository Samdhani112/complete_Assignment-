package com.ShuffleRomanPangram;
import java.util.Scanner;
public class PangramCheck {
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        boolean isPangram = isPangram(sentence);
        System.out.println("Is Pangram: " + isPangram);
    }

    public static boolean isPangram(String s) {
        s = s.toLowerCase();
        for (char c = 'a'; c <= 'z'; c++) {
            if (!s.contains(String.valueOf(c))) {
                return false;
            }
        }
        return true;
    }

}
