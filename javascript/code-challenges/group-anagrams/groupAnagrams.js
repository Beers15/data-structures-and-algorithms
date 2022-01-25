function groupAnagrams(words) {
  if(words.length === 0) return [];

  let result = [];
  let map = new Map();

  for(let word of words) {
    let sortedWord = word.split('').sort().join('');
    if(map.has(sortedWord)) {
      map.get(sortedWord).push(word);
    } else {
      map.set(sortedWord, [word]);
    }
  }

  map.forEach((value) => {
    result.push(value);
  });

  return result;
}

module.exports = groupAnagrams;
