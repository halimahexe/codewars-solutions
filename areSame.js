// Check whether two arrays are similar
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(a1, a2){
  if (!a1 || !a2) return false; // If either of the arrays does not exist, the answer is false

  // Sort both arrays in ascending order, to easily compare elements at the same index as they should match
  // And assign to new sorted array variables
  const s1 = a1.sort((a,b) => a-b);
  const s2 = a2.sort((a,b) => a-b);

  // Loop through the length of s1 (this should match s2.length) and check whether the element at index i of s1 squares to the value of index i of s2.
  for (let i = 0; i < s1.length; i++) {
    if (s1[i]*s1[i] == s2[i]) continue
    else return false;  
  }
  
  return true;
}
