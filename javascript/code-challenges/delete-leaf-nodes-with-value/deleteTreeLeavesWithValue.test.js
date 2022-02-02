const deleteTreeLeavesWithValue = require('./deleteTreeLeavesWithValue');

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

describe('Tests if the delete delete leaves with value function is properly functioning', () => {
  it('Should successfully delete all the leaves with target value', () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(2);
    root.right.left = new TreeNode(4);

    let res = deleteTreeLeavesWithValue(root, 2);

    expect(getValues(res)).toEqual([1,3,4]);
  });

  it('Should successfully delete all the leaves with target value when a path has multiple nodes with said value', () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(2);
    root.right.left = new TreeNode(2);

    let res = deleteTreeLeavesWithValue(root, 2);

    expect(getValues(res)).toEqual([1,3]);
  });

  it('Should not delete nodes with the target value that are not leaves', () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.right = new TreeNode(4);
    root.right.left = new TreeNode(2);

    let res = deleteTreeLeavesWithValue(root, 2);

    expect(getValues(res)).toEqual([2,2,3,4]);
  });

  it('Should successfully handle a tree that contains only the target value', () => {
    let root = new TreeNode(2);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(2);

    let res = deleteTreeLeavesWithValue(root, 2);

    expect(getValues(res)).toEqual([]);
  });
});

function getValues(root) {
  let result = [];
  function helper(node) {
    if(!node) return;
    result.push(node.val);
    if(node.left) helper(node.left);
    if(node.right) helper(node.right);
  }

  helper(root);
  return result;
}
