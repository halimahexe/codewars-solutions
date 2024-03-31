// https://www.codewars.com/kata/56efc695740d30f963000557/train/java

public class AlternatingCase {
  public static String toAlternativeString(String string) {
    String alternativeCase = "";
    for (int i = 0; i < string.length(); i++) {
      char ch = string.charAt(i);
      if (Character.isLowerCase(ch)) {
        alternativeCase += Character.toUpperCase(ch);
      } else if (Character.isUpperCase(ch)) {
        alternativeCase += Character.toLowerCase(ch);
      } else alternativeCase += ch;
    }
    return alternativeCase;
  }
}
