module.exports = function deleteTreeLeavesWithValue(root, target) {
  function helper(node) {
    if(node.left) node.left = helper(node.left);
    if(node.right) node.right = helper(node.right);

    if((!node.left && !node.right) && node.val === target) {
      return null;
    }
    return node;
  }
  return helper(root);
};
