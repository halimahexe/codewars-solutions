// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/java

public class CenturyFromYear {
  public static int century(int number) {
    int century = number / 100;
    if (number % 100 > 0) {
      century += 1;
    }
    return century; 
  }
}
