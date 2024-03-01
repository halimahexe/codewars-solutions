// Find the Duplicated Number in a Consecutive Unsorted List
// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript

function findDup(arr){
    const sorted = arr.sort((a,b) => a-b);
    const uniqueSet = new Set();
    let duplicateValue;
    for (let i = 0; i < sorted.length; i++) {
      if (uniqueSet.has(sorted[i])) {
        duplicateValue = sorted[i];
      } else uniqueSet.add(sorted[i]);
    }
    return duplicateValue;
  }