// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
  const sorted = arr.sort((a,b) => a-b);
  const length = sorted.length;
  return [sorted[0],sorted[length-1]];
}
