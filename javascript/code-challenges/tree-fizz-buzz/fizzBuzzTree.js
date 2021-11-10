function fizzBuzzTree(kNaryTree) {
  if(!kNaryTree.root) return;

  let stk = [];
  stk.push(kNaryTree.root);

  while(stk.length > 0) {
    let parent = stk.pop();
    parent.value = calculateFBValue(parent.value);

    for(let i = parent.children.length - 1; i >= 0; i--) {
      stk.push(parent.children[i]);
    }
  }
}

function calculateFBValue(val) {
  if(val % 15 === 0) {
    return 'FizzBuzz';
  }
  else if(val % 3 === 0) {
    return 'Fizz';
  }
  else if(val % 5 === 0) {
    return 'Buzz';
  }

  return val.toString();
}

module.exports = fizzBuzzTree;
