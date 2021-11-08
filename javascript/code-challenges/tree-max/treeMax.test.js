const BinaryTree = require('./binary-tree');
const Node = require('./node');

describe('Checks treeMax method', () => {
  it('can return the correct maximum value within the binary tree', () => {
    let bt = new BinaryTree();
    bt.root = new Node(10);
    bt.root.left = new Node(8);
    bt.root.left.left = new Node(6);
    bt.root.left.left.left = new Node(45);
    bt.root.left.left.right = new Node(66);
    bt.root.left.right = new Node(9);
    bt.root.left.right.left = new Node(77);
    bt.root.left.right.right = new Node(9);
    bt.root.right = new Node(12);
    bt.root.right.left = new Node(11);
    bt.root.right.right = new Node(50);

    expect(bt.treeMax()).toBe(77);
  });

  it('can thrown an error if the tree is empty', () => {
    let bt = new BinaryTree();
    let error = null;
    try {
      bt.treeMax();
    } catch(err) {
      error = err;
    }
    expect(error).toBeTruthy();
  });

  it('can work with non full binary trees (some parent nodes have 1 child instead of 2)', () => {
    let bt = new BinaryTree();
    bt.root = new Node(10);
    bt.root.left = new Node(8);
    bt.root.left.left = new Node(6);
    bt.root.left.left.left = new Node(45);
    bt.root.left.right = new Node(9);
    bt.root.left.right.right = new Node(9);
    bt.root.right = new Node(12);
    bt.root.right.left = new Node(11);

    expect(bt.treeMax()).toEqual(45);
  });
});
