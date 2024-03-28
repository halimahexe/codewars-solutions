// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

public class Kata {

  public static String solution(String str) {
    String reverse = "";
    
    for (int i = 0; i < str.length(); i++) {
      reverse = str.charAt(i) + reverse;
    }
    return reverse;
  }

}
