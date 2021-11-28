'use strict';

const HashTable = require('./hashTable');

describe('Test the functionality of the Hash Table Implementation', () => {
  let table1 = new HashTable(1024);
  it('Adding a key/value to your HashTable results in the value being in the data structure', () => {
    table1.add('foo', 123);

    expect(table1.contains('foo')).toBe(true);
    expect(table1.contains('notfoo')).toBe(false);
  });
  it('Retrieving based on a key returns the value stored', () => {

    table1.add('bar', 456);

    expect(table1.get('bar')).toBe(456);
  });
  it('Successfully returns null for a key that does not exist in the HashTable', () => {
    expect(table1.get('qwerty')).toBeNull();
  });
  it('Successfully handle a collision within the HashTable', () => {
    table1.add('ab', 123);
    table1.add('ba', 321);

    expect(table1.get('ab')).toBe(123);
    expect(table1.get('ba')).toBe(321);
  });
  it('Successfully retrieve a value from a bucket within the HashTable that has a collision', () => {
    //can be tested in same way as above..
    table1.add('ac', 123);
    table1.add('ca', 321);

    expect(table1.get('ac')).toBe(123);
    expect(table1.get('ca')).toBe(321);
  });
  it('Successfully hash a key to an in-range value', () => {
    let table2 = new HashTable(10000);
    table2.add('A', 123);
    //ascii code sum = 65, times 100 = 6500, in range of size 10000 array
    expect(table2.contains('A')).toBe(true);
  });
});
