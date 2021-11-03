const Stack = require('./stack');

module.exports = function(str) {
  let rightMulBrackets = new Stack();

  let matcher = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for(let char of str) {
    if(char === '{' || char === '[' || char === '(') {
      rightMulBrackets.push(char);
    }
    else if(char === '}' || char === ']' || char === ')') {
      if(rightMulBrackets.isEmpty()) return false;
      if(rightMulBrackets.pop() !== matcher[char])
        return false;
    }
  }
  if(!rightMulBrackets.isEmpty()) return false;

  return true;
};
