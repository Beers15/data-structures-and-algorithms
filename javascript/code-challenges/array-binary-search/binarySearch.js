const arrayBinarySearch = (arr, key) => {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let mid = Math.floor((right + left) / 2);
    if(arr[mid] === key) {
      return mid;
    } else if(arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  //result not found
  return -1;
};

console.log(arrayBinarySearch([4, 8, 15, 16, 23, 42], 15));

console.log(arrayBinarySearch([-131, -82, 0, 27, 42, 68, 179], 42));

console.log(arrayBinarySearch([11, 22, 33, 44, 55, 66, 77], 90));

console.log(arrayBinarySearch([1, 2, 3, 5, 6, 7], 4));
