const insertionSort = require('./insertionSort');

describe('Tests if the provided insertion sort implementation is properly working', () => {
  let arr1 = [8,4,23,42,16,15];
  let arr2 = [20,18,12,8,5,-2];
  let arr3 = [5,12,7,5,5,7];
  let arr4 = [2,3,5,7,13,11];
  let arr5 = [10];
  let arr6 = [];

  it('can work properly with an array of unsorted values', () => {
    insertionSort(arr1);
    expect(arr1).toEqual([4,8,15,16,23,42]);
  });
  it('can work properly with an array that is in a reverse sorted order', () => {
    insertionSort(arr2);
    expect(arr2).toEqual([-2,5,8,12,18,20]);
  });
  it('can work properly with an array that has few uniques ', () => {
    insertionSort(arr3);
    expect(arr3).toEqual([5,5,5,7,7,12]);
  });
  it('can work properly with an array that is nearly sorted', () => {
    insertionSort(arr4);
    expect(arr4).toEqual([2,3,5,7,11,13]);
  });
  it('can work properly with an array that has one element', () => {
    insertionSort(arr5);
    expect(arr5).toEqual([10]);
  });
  it('can work properly with an array that is empty', () => {
    insertionSort(arr6);
    expect(arr6).toEqual([]);
  });
});
