const Stack = require('./stack');
const Queue = require('./queue');

describe('Test Stack Functionality', () => {
  it('can successfully push onto a stack', () => {
    let stk = new Stack();

    stk.push(3);
    expect(stk.peek()).toBe(3);
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stk = new Stack();

    stk.push(3);
    stk.push(2);
    stk.push(1);
    expect(stk.peek()).toBe(1);
    stk.pop();
    stk.pop();
    expect(stk.peek()).toBe(3);
  });
  it('can successfully pop off the stack', () => {
    let stk = new Stack();
    stk.push(3);
    stk.pop();

    expect(stk.isEmpty()).toBe(true);
  });
  it('can successfully empty a stack after multiple pops', () => {
    let stk = new Stack();

    stk.push(3);
    stk.push(2);
    stk.push(1);
    stk.pop(); stk.pop(); stk.pop();
    expect(stk.isEmpty()).toBe(true);
  });
  it('can successfully peek the next item on the stack', () => {
    let stk = new Stack();

    stk.push(3);
    stk.push(2);
    stk.push(1);

    expect(stk.peek()).toBe(1);
  });
  it('can successfully instantiate an empty stack', () => {
    let stk = new Stack();
    expect(stk.isEmpty()).toBe(true);
  });
  it('calling pop or peek on empty stack raises exception', () => {
    let stk = new Stack();
    let error;
    try {
      stk.pop();
    } catch(err) {
      error = err.message;
    }
    expect(error).toBe('Cannot pop an item off of an empty stack');
  });
});


describe('Test Queue Functionality', () => {
  it('can successfully enqueue into a queue', () => {
    let q = new Queue();
    q.enqueue(1);
    expect(q.dequeue()).toBe(1);
  });
  it('can successfully enqueue multiple values into a queue', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue(); q.dequeue();
    expect(q.peek()).toBe(3);
  });
  it('can successfully dequeue out of a queue the expected value', () => {
    let q = new Queue();
    q.enqueue(1);
    expect(q.dequeue()).toBe(1);
  });
  it('can successfully peek into a queue, seeing the expected value', () => {
    let q = new Queue();
    q.enqueue(1);
    expect(q.peek()).toBe(1);
  });
  it('can successfully empty a queue after multiple dequeues', () => {
    let q = new Queue();

    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue(); q.dequeue(); q.dequeue();
    expect(q.isEmpty()).toBe(true);
  });
  it('can successfully instantiate an empty queue', () => {
    let q = new Queue();
    expect(q.isEmpty()).toBe(true);
  });
  it('calling dequeue or peek on empty queue raises exception', () => {
    let q = new Queue();
    let error;
    try {
      q.dequeue();
    } catch(err) {
      error = err.message;
    }
    expect(error).toBe('Cannot pop an item off of an empty stack');
  });
});
