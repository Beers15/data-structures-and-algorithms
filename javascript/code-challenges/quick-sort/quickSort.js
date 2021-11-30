function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;

  for(let i = left; i < right; i++) {
    if(arr[i] <= pivot) {
      low++;
      //using es2015 destructure swap
      [arr[i], arr[low]] = [arr[low], arr[i]];
    }
  }
  //using es2015 destructure swap
  [arr[right], arr[low + 1]] = [arr[low + 1], arr[right]];

  return low + 1;
}

module.exports = quickSort;
