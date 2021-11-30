'use strict';

const quickSort = require('./quickSort');

describe('Test the functionality of quickSort', () => {
  let arr1 = [8,4,23,42,16,15];
  let arr2 = [20,18,12,8,5,-2];
  let arr3 = [5,12,7,5,5,7];
  let arr4 = [2,3,5,7,13,11];
  let arr5 = [1];
  let arr6 = [];

  it('can properly sort an array', () => {
    quickSort(arr1);
    expect(arr1).toEqual([4,8,15,16,23,42]);
  });
  it('can properly sort a reverse-sorted array', () => {
    quickSort(arr2);
    expect(arr2).toEqual([-2,5,8,12,18,20]);
  });
  it('can properly sort an array with a few uniques', () => {
    quickSort(arr3);
    expect(arr3).toEqual([5,5,5,7,7,12]);
  });
  it('can properly sort a nearly sorted array', () => {
    quickSort(arr4);
    expect(arr4).toEqual([2,3,5,7,11,13]);
  });
  it('can work properly with an array of size 1', () => {
    quickSort(arr5);
    expect(arr5).toEqual([1]);
  });
  it('can work properly with an empty array', () => {
    quickSort(arr6);
    expect(arr6).toEqual([]);
  });
});
