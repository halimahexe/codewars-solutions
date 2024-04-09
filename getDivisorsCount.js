// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
  let count = 0;
  let sqrt = Math.sqrt(n);
  
  for (let i = 1; i <= sqrt; i++) {
    if (n % i == 0) {
      if (n / i !== i) {
        count += 2;
      } else count += 1;
    }
  }
  
  return count;
}
