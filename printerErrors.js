// Find the number of printer errors as a fraction over the length of a string
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
  const denominator = s.length;
  const regex = /[a-m]+/gi;
  const correctMatch = s.match(regex).join('').length;
  let numerator = denominator - correctMatch;
  return `${numerator}/${denominator}`;
}
