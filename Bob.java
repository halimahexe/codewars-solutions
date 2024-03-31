// Checking for enough space
// https://www.codewars.com/kata/5875b200d520904a04000003/train/java

public class Bob {
  public static int enough(int cap, int on, int wait){
    int result = (wait - (cap - on));
    return result > 0 ? result : 0;
  }
}
