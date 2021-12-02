const treeIntersection = require('./tree-intersection');
const Node = require('./node');

describe('', () => {
  let bst1 = new Node(25);
  bst1.left = new Node(13);
  bst1.left.left = new Node(11);
  bst1.left.right = new Node(14);
  bst1.right = new Node(34);

  let bst2 = new Node(24);
  bst2.left = new Node(10);
  bst2.right = new Node(30);
  bst2.right.left = new Node(25);
  bst2.right.right = new Node(34);

  let bst3 = new Node(25);
  bst3.left = new Node(13);
  bst3.left.left = new Node(11);
  bst3.left.right = new Node(14);
  bst3.right = new Node(34);

  let bst4 = new Node(24);
  bst4.left = new Node(9);
  bst4.right = new Node(30);
  bst4.right.left = new Node(26);
  bst4.right.right = new Node(36);

  let bst7 = new Node(25);
  bst7.left = new Node(13);
  bst7.left.left = new Node(11);
  bst7.left.right = new Node(14);
  bst7.right = new Node(34);

  let bst8 = new Node(24);
  bst8.left = new Node(10);
  bst8.left.left = new Node(10);
  bst8.left.right = new Node(10);
  bst8.right = new Node(30);
  bst8.right.left = new Node(25);
  bst8.right.right = new Node(34);
  bst8.right.right.left = new Node(34);


  it('can successfully return a set of values found in both binary search trees', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bst1, bst2));

    expect(duplicates).toEqual([25,34]);
  });

  it('can handle 1 empty binary search tree', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bst1, null));

    expect(duplicates).toEqual([]);
  });

  it('can handle 2 empty binary search trees', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(null, null));

    expect(duplicates).toEqual([]);
  });

  it('can handle 2 binary search trees with zero similar values', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bst3, bst4));

    expect(duplicates).toEqual([]);
  });

  it('can handle 1 or both of the trees having just a single value', () => {
    let bst5 = new Node(5);
    let bst6 = new Node(6);
    //convert Set to array for testing
    let duplicates1 = Array.from(treeIntersection(bst5, bst6));
    let duplicates2 = Array.from(treeIntersection(bst6, bst4));

    expect(duplicates1).toEqual([]);
    expect(duplicates2).toEqual([]);
  });

  it('can handle duplicate values in the same tree. I.e., the algorithm won\'t think that such duplicates came from the other binary search tree', () => {
    //convert Set to array for testing
    let duplicates = Array.from(treeIntersection(bst7, bst8));

    expect(duplicates).toEqual([25,34]);
  });

});
