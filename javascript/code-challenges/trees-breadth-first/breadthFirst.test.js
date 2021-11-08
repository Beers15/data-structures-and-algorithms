const BinaryTree = require('../trees/binary-tree');
const Node = require('../trees/node');
const breadthFirst = require('./breadthFirst');

describe('Checks breadthFirst function', () => {
  it('can return a list of all values in the tree, with a breadth first ordering', () => {
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

    expect(breadthFirst(bt)).toEqual([10, 8, 12, 6, 9, 11, 50, 45, 66, 77, 9]);
  });

  it('can handle an empty tree as input', () => {
    let bt = new BinaryTree();

    expect(breadthFirst(bt)).toEqual([]);
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

    expect(breadthFirst(bt)).toEqual([10, 8, 12, 6, 9, 11, 45, 9]);
  });
});
