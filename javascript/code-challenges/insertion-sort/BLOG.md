
# Insertion Sort

Insertion sort creates a sorted array one item at a time. During each pass, an element in the array is taken and inserted into the place where it belongs. This is done by backtracking from the position of the selected element until the proper place to insert said element is found. This allows the sort to slowly build up a sorted sub-array which eventually will be equal in length to the original array.

## Psuedocode

```
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

--------------

Code of this implementation can be found [here](./insertionSort.js)

Tests verifying this approach can be found [here](./insertionSort.test.js)

--------------

## Trace

![Insertion Sort](./insertionSort.png)

### Complexity

  Time: O(n^2)

  On average the time complexity rounds out to about O(n^2). In the best case scenario, i.e. a sorted array is given, the time complexity is O(n)

  Space: O(1)

  A few extra variables for both keeping track of indexes and setting a temp var are being created.
