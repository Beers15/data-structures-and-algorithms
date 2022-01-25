const groupAnagrams = require('./groupAnagrams');

describe('Tests if the group anagrams function is properly functioning', () => {
  it('Should successfully group anagrams given an array of strings and return them', () => {
    let words = ['cat', 'pin', 'nip', 'orange', 'tac'];
    expect(groupAnagrams(words)).toEqual([['cat', 'tac'],['pin','nip'],['orange']]);
  });

  it('Should successfully handle an empty array as input', () => {
    expect(groupAnagrams([])).toEqual([]);
    expect(groupAnagrams([''])).toEqual([['']]);
  });

  it('Should successfully handle an input array containing words that are already sorted (e.g. abc, act...)', () => {
    let words = ['act', 'pin', 'nip', 'orange', 'tac', 'abc', 'cba'];
    expect(groupAnagrams(words)).toEqual([['act', 'tac'],['pin','nip'],['orange'],['abc', 'cba']]);
  });

  it('Should successfully handle duplicates (including duplicates in result)', () => {
    let words = ['foo', 'foo', 'oof', 'bar', 'bar'];
    expect(groupAnagrams(words)).toEqual([['foo', 'foo', 'oof'], ['bar', 'bar']]);
  });
});
