package com.ShuffleRomanPangram;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class ShuffleRomanPangram{
    public static void main(String[] args) {
        List<Integer> originalArray = new ArrayList<>();
        Collections.addAll(originalArray, 1, 2, 3, 4, 5, 6, 7);
        Collections.shuffle(originalArray);
        System.out.println("Shuffled Array: " + originalArray);
    }
}

