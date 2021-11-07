const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-search-tree');
const Node = require('./node');

describe('Test Binary Tree and Binary Search Tree functionality', () => {
  it('can successfully return a collection from a inorder traversal', () => {
    let bt = new BinaryTree();
    bt.root = new Node('10');
    bt.root.left = new Node('8');
    bt.root.left.left = new Node('6');
    bt.root.left.right = new Node('9');
    bt.root.right = new Node('12');
    bt.root.right.left = new Node('11');
    bt.root.right.right = new Node('50');

    expect(bt.getInOrder()).toEqual(['6', '8', '9', '10', '11', '12', '50']);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    let bt = new BinaryTree();
    bt.root = new Node('10');
    bt.root.left = new Node('8');
    bt.root.left.left = new Node('6');
    bt.root.left.right = new Node('9');
    bt.root.right = new Node('12');
    bt.root.right.left = new Node('11');
    bt.root.right.right = new Node('50');

    expect(bt.getPreOrder()).toEqual(['10', '8', '6', '9', '12', '11', '50']);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    let bt = new BinaryTree();
    bt.root = new Node('10');
    bt.root.left = new Node('8');
    bt.root.left.left = new Node('6');
    bt.root.left.right = new Node('9');
    bt.root.right = new Node('12');
    bt.root.right.left = new Node('11');
    bt.root.right.right = new Node('50');

    expect(bt.getPostOrder()).toEqual(['6', '9', '8', '11', '50', '12', '10']);
  });

  it('can successfully instantiate an empty tree', () => {
    let bt = new BinaryTree();
    let bst = new BinarySearchTree();

    expect(bt.root).toBeNull();
    expect(bst.root).toBeNull();
  });

  it('can successfully instantiate a tree with a single root node', () => {
    let bt = new BinaryTree();
    bt.root = new Node(10);

    let bst = new BinarySearchTree();
    bst.add(3);

    expect(bt.root.value).toBe(10);
    expect(bst.root.value).toBe(3);
  });

  it('can successfully add a left child and right child to a single root node', () => {
    let bt = new BinaryTree();
    bt.root = new Node(10);
    bt.root.left = new Node(8);
    bt.root.right = new Node(12);

    let bst = new BinarySearchTree();
    bst.add(10);
    bst.add(8);
    bst.add(12);

    expect(bt.root.left.value).toBe(8);
    expect(bt.root.right.value).toBe(12);

    expect(bst.root.left.value).toBe(8);
    expect(bst.root.right.value).toBe(12);
  });

  it('can successfully add elements to a binary search tree in the correct spot', () => {
    let bst = new BinarySearchTree();
    bst.add(10);
    bst.add(8);
    bst.add(12);
    bst.add(6);
    bst.add(5);
    bst.add(31);
    bst.add(30);

    expect(bst.root.left.left.value).toBe(6);
    expect(bst.root.right.right.value).toBe(31);
    expect(bst.root.right.right.left.value).toBe(30);
  });

  it('can successfully check if a given element is in the binary search tree', () => {
    let bst = new BinarySearchTree();
    bst.add(10);
    bst.add(8);
    bst.add(12);
    bst.add(6);
    bst.add(5);
    bst.add(31);
    bst.add(30);

    expect(bst.contains(31)).toBeTruthy();
    expect(bst.contains(5)).toBeTruthy();
    expect(bst.contains(40)).toBeFalsy();
  });
});
