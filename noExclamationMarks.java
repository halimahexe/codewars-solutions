// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/java

class Solution {
    static String removeExclamationMarks(String s) {
      String noEx = "";
      for (int i = 0; i < s.length(); i++) {
        if (s.charAt(i) == '!') {
          continue;
        } else noEx = noEx + s.charAt(i);
      }  
      
      return noEx;
    }
}
