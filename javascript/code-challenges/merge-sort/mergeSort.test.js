'use strict';

const mergeSort = require('./mergeSort');

describe('Test the functionality of mergeSort', () => {
  let arr1 = [8,4,23,42,16,15];
  let arr2 = [20,18,12,8,5,-2];
  let arr3 = [5,12,7,5,5,7];
  let arr4 = [2,3,5,7,13,11];
  let arr5 = [1];
  let arr6 = [];

  it('can properly sort an array', () => {
    mergeSort(arr1);
    expect(arr1).toEqual([4,8,15,16,23,42]);
  });
  it('can properly sort a reverse-sorted array', () => {
    mergeSort(arr2);
    expect(arr2).toEqual([-2,5,8,12,18,20]);
  });
  it('can properly sort an array with a few uniques', () => {
    mergeSort(arr3);
    expect(arr3).toEqual([5,5,5,7,7,12]);
  });
  it('can properly sort a nearly sorted array', () => {
    mergeSort(arr4);
    expect(arr4).toEqual([2,3,5,7,11,13]);
  });
  it('can work properly with an array of size 1', () => {
    mergeSort(arr5);
    expect(arr5).toEqual([1]);
  });
  it('can work properly with an empty array', () => {
    mergeSort(arr6);
    expect(arr6).toEqual([]);
  });
});
