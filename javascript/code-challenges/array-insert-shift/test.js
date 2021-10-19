function arrayInsertShift(arr, val) {
  let tempArr = [];

  if(arr.length === 0) return [val];

  let mid = Math.ceil(arr.length / 2);

  for(let i = 0; i < mid; i++) {
    if(arr[mid + i]) tempArr.push(arr[mid + i]);
  }
  arr[mid] = val;


  for(let j = 0, i = mid + 1; j < tempArr.length; i++, j++) {
    if(tempArr[j]) arr[i] = tempArr[j];
  }

  return arr;
}

console.log(arrayInsertShift([2,4,6,-8], 5));
console.log(arrayInsertShift([42,8,15,23,42], 16));
console.log(arrayInsertShift([42], 16));


