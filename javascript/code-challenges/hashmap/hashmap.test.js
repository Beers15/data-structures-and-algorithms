'use strict';

const hashMap = require('./hashMap');

describe('Test the functionality of the Hash Table Implementation', () => {
  let map1 = new hashMap(1024);
  it('Adding a key/value to your hashMap results in the value being in the data structure', () => {
    map1.add('foo', 123);

    expect(map1.contains('foo')).toBe(true);
    expect(map1.contains('notfoo')).toBe(false);
  });
  it('Retrieving based on a key returns the value stored', () => {

    map1.add('bar', 456);

    expect(map1.get('bar')).toBe(456);
  });
  it('Successfully returns null for a key that does not exist in the hashMap', () => {
    expect(map1.get('qwerty')).toBeNull();
  });
  it('Successfully handle a collision within the hashMap', () => {
    map1.add('ab', 123);
    map1.add('ba', 321);

    expect(map1.get('ab')).toBe(123);
    expect(map1.get('ba')).toBe(321);
  });
  it('Successfully retrieve a value from a bucket within the hashMap that has a collision', () => {
    //can be tested in same way as above..
    map1.add('ac', 123);
    map1.add('ca', 321);

    expect(map1.get('ac')).toBe(123);
    expect(map1.get('ca')).toBe(321);
  });
  it('Successfully hash a key to an in-range value', () => {
    let map2 = new hashMap(10000);
    map2.add('A', 123);
    //ascii code sum = 65, times 100 = 6500, in range of size 10000 array
    expect(map2.contains('A')).toBe(true);
  });
});
