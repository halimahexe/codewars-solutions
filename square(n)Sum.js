// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){
  return numbers.reduce((a, b) => a + b**2, 0); 
}
