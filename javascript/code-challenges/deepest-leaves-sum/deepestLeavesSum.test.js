const deepestLeavesSum = require('./deepestLeavesSum');

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

describe('Tests if the deepest leaves sum function is properly functioning', () => {
  it('Should successfully get the sum of values of the deepest leaves while not including values from other levels', () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(4);

    let result = deepestLeavesSum(root);

    expect(result).toBe(8);
  });

  it('Should successfully get the sum of values for an incomplete tree', () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.left.right = new TreeNode(41);

    let result = deepestLeavesSum(root);

    expect(result).toBe(41);
  });

  it('Should successfully handle a tree with a single node', () => {
    let root = new TreeNode(1);

    let result = deepestLeavesSum(root);

    expect(result).toBe(1);
  });

  it('Should successfully handle an empty tree', () => {
    let result = deepestLeavesSum(new TreeNode());

    expect(result).toBe(0);
  });
});
