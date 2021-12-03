const treeIntersection = require('./tree-intersection');
const Node = require('./node');

describe('', () => {
  let bt1 = new Node(25);
  bt1.left = new Node(13);
  bt1.left.left = new Node(11);
  bt1.left.right = new Node(14);
  bt1.right = new Node(34);

  let bt2 = new Node(24);
  bt2.left = new Node(10);
  bt2.right = new Node(30);
  bt2.right.left = new Node(25);
  bt2.right.right = new Node(34);

  let bt3 = new Node(25);
  bt3.left = new Node(13);
  bt3.left.left = new Node(11);
  bt3.left.right = new Node(14);
  bt3.right = new Node(34);

  let bt4 = new Node(24);
  bt4.left = new Node(9);
  bt4.right = new Node(30);
  bt4.right.left = new Node(26);
  bt4.right.right = new Node(36);

  let bt7 = new Node(25);
  bt7.left = new Node(13);
  bt7.left.left = new Node(11);
  bt7.left.right = new Node(14);
  bt7.right = new Node(34);

  let bt8 = new Node(24);
  bt8.left = new Node(10);
  bt8.left.left = new Node(10);
  bt8.left.right = new Node(10);
  bt8.right = new Node(30);
  bt8.right.left = new Node(25);
  bt8.right.right = new Node(34);
  bt8.right.right.left = new Node(34);


  it('can successfully return a set of values found in both binary trees', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bt1, bt2));

    expect(duplicates).toEqual([25,34]);
  });

  it('can handle 1 empty binary tree', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bt1, null));

    expect(duplicates).toEqual([]);
  });

  it('can handle 2 empty binary trees', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(null, null));

    expect(duplicates).toEqual([]);
  });

  it('can handle 2 binary trees with zero similar values', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bt3, bt4));

    expect(duplicates).toEqual([]);
  });

  it('can handle 1 or both of the trees having just a single value', () => {
    let bt5 = new Node(5);
    let bt6 = new Node(6);
    //convert Set to array for testing
    let duplicates1 = Array.from(treeIntersection(bt5, bt6));
    let duplicates2 = Array.from(treeIntersection(bt6, bt4));

    expect(duplicates1).toEqual([]);
    expect(duplicates2).toEqual([]);
  });

  it('can handle duplicate values in the same tree. I.e., the algorithm won\'t think that such duplicates came from the other binary tree', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bt7, bt8));

    expect(duplicates).toEqual([25,34]);
  });

});
