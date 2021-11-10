const Node = require('./node');

const fizzBuzzTree = require('./fizzBuzzTree.js');

describe('Checks treeMax method', () => {
  it('works properly if the value is divisible by 3: replaces the value with “Fizz”', () => {
    const KNaryTree = {root: null}; //A mocked K-Nary tree to test the method
    KNaryTree.root = new Node(10);
    KNaryTree.root.children.push(new Node(9));
    KNaryTree.root.children.push(new Node(3));
    KNaryTree.root.children.push(new Node(45));
    KNaryTree.root.children[0].children.push(new Node(5));
    KNaryTree.root.children[0].children.push(new Node(30));
    KNaryTree.root.children[1].children.push(new Node(12));
    KNaryTree.root.children[1].children.push(new Node(18));
    KNaryTree.root.children[2].children.push(new Node(99));
    KNaryTree.root.children[2].children.push(new Node(150));
    KNaryTree.root.children[2].children.push(new Node(22));

    fizzBuzzTree(KNaryTree);

    expect(KNaryTree.root.value).not.toBe('Fizz');
    expect(KNaryTree.root.children[0].children[0].value).not.toBe('Fizz');

    expect(KNaryTree.root.children[2].children[0].value).toBe('Fizz');
    expect(KNaryTree.root.children[1].children[1].value).toBe('Fizz');
  });

  it('works properly if the value is divisible by 5: replaces the value with “Buzz”', () => {
    const KNaryTree = {root: null}; //A mocked K-Nary tree to test the method
    KNaryTree.root = new Node(10);
    KNaryTree.root.children.push(new Node(9));
    KNaryTree.root.children.push(new Node(3));
    KNaryTree.root.children.push(new Node(45));
    KNaryTree.root.children[0].children.push(new Node(5));
    KNaryTree.root.children[0].children.push(new Node(30));
    KNaryTree.root.children[1].children.push(new Node(12));
    KNaryTree.root.children[1].children.push(new Node(18));
    KNaryTree.root.children[2].children.push(new Node(99));
    KNaryTree.root.children[2].children.push(new Node(150));
    KNaryTree.root.children[2].children.push(new Node(22));

    fizzBuzzTree(KNaryTree);

    expect(KNaryTree.root.value).toBe('Buzz');
    expect(KNaryTree.root.children[0].children[0].value).toBe('Buzz');

    expect(KNaryTree.root.children[1].children[0].value).not.toBe('Buzz');
    expect(KNaryTree.root.children[1].children[1].value).not.toBe('Buzz');
  });

  it('works properly if the value is divisible by 3 and 5: replaces the value with “FizzBuzz”', () => {
    const KNaryTree = {root: null}; //A mocked K-Nary tree to test the method
    KNaryTree.root = new Node(10);
    KNaryTree.root.children.push(new Node(9));
    KNaryTree.root.children.push(new Node(3));
    KNaryTree.root.children.push(new Node(45));
    KNaryTree.root.children[0].children.push(new Node(5));
    KNaryTree.root.children[0].children.push(new Node(30));
    KNaryTree.root.children[1].children.push(new Node(12));
    KNaryTree.root.children[1].children.push(new Node(18));
    KNaryTree.root.children[2].children.push(new Node(99));
    KNaryTree.root.children[2].children.push(new Node(150));
    KNaryTree.root.children[2].children.push(new Node(22));

    fizzBuzzTree(KNaryTree);

    expect(KNaryTree.root.children[2].children[1].value).toBe('FizzBuzz');
    expect(KNaryTree.root.children[0].children[1].value).toBe('FizzBuzz');

    expect(KNaryTree.root.children[1].children[0].value).not.toBe('FizzBuzz');
    expect(KNaryTree.root.children[1].children[1].value).not.toBe('FizzBuzz');
  });

  it('works properly if the value is not divisible by 3 or 5: simply turns the number into a String.', () => {
    const KNaryTree = {root: null}; //A mocked K-Nary tree to test the method
    KNaryTree.root = new Node(10);
    KNaryTree.root.children.push(new Node(9));
    KNaryTree.root.children.push(new Node(3));
    KNaryTree.root.children.push(new Node(45));
    KNaryTree.root.children[0].children.push(new Node(5));
    KNaryTree.root.children[0].children.push(new Node(30));
    KNaryTree.root.children[0].children.push(new Node(7));
    KNaryTree.root.children[1].children.push(new Node(12));
    KNaryTree.root.children[1].children.push(new Node(18));
    KNaryTree.root.children[2].children.push(new Node(99));
    KNaryTree.root.children[2].children.push(new Node(150));
    KNaryTree.root.children[2].children.push(new Node(22));

    fizzBuzzTree(KNaryTree);

    expect(KNaryTree.root.children[0].children[2].value).toBe('7');
    expect(KNaryTree.root.children[2].children[2].value).toBe('22');

    expect(KNaryTree.root.children[1].children[0].value).not.toBe('12');
    expect(KNaryTree.root.children[2].children[0].value).not.toBe('99');
  });

  it('can handle an empty tree', () => {
    const KNaryTree = {root: null};

    fizzBuzzTree(KNaryTree);

    expect(KNaryTree.root).toBeNull();
  });
});
