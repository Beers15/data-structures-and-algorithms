function deepestLeavesSum(root) {
  let vals = new Map();
  let maxHeight = 0;

  function helper(curr, height = 0) {
    if(!curr.left && !curr.right) {
      maxHeight = Math.max(height, maxHeight);
    }

    vals.has(height)
      ? vals.get(height).push(curr.val)
      : vals.set(height, [curr.val]);

    if(curr.left) {
      helper(curr.left, ++height);
      height--;
    }
    if(curr.right) helper(curr.right, ++height);
  }

  helper(root, 0);

  return vals.get(maxHeight).reduce((sum, value) => sum + value, 0);
}

module.exports = deepestLeavesSum;

