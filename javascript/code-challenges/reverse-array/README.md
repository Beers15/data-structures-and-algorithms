# Reverse an Array

Implements a function that when given an array argument, returns an array with the elements of the array in reverse order.

## Inputs / Outputs

Input -> [1, 2, 3, 4], etc

Output -> [4, 3, 2, 1], etc

## Algorithm

reverseArray function, takes original array as argument

keep track of the first and last index using 2 pointers

loop through away, swap the value at the index of each of the 2 pointers each iteration

increment the value keeping track of start index, decrement the one for end index each iteration

break out of loop after half as many iterations as the size of the array

upon loop termination, array will be reversed

### Big O

Space: O(1)
Time: O(N)

### Edge Cases

array of size 0 or 1, both handled with approach here

## Psuedo

function reverseArray(arr)

leftPtr = 0, rightPtr = arr.length - 1

while(leftPtr <= rightPtr)

swap(arr[leftPtr], arr[rightPtr])

leftPtr++, rightPtr--

end loop

return array

## Code

```
function reverseArray(arr) {
  let left = 0; let right = arr.length - 1;

  while(left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++; right--;
  }
  return arr;
}
```

### Another approach using recursion

```
function reverseArray(arr) {
  swapFirstAndLast(arr, 0, arr.length - 1);
  return arr;
}

function swapFirstAndLast(arr, left, right) {
  if(left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    swapFirstAndLast(arr, left + 1, right - 1);
  }
}
```

## Visual

![Array reversal](./reverse-array.png)