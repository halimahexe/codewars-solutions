// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {
  const binaryNum = arr.join('');
  return parseInt(binaryNum, 2);
};
