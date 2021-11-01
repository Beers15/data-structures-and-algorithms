const PseudoQueue = require('./pseudoQueue');

describe('Test Pseudo Queue Functionality', () => {
  it('can successfully enqueue the pseudo queue, empty or not', () => {
    let pq = new PseudoQueue();
    pq.enqueue(1);
    expect(pq.dequeue()).toBe(1);
  });
  it('can successfully enqueue multiple values onto the pseudo queue', () => {
    common_en_dequeuing();
  });
  it('can successfully dequeue the pseudo queue', () => {
    common_en_dequeuing();
  });
  it('can successfully empty a pseudo queue after multiple dequeues', () => {
    common_en_dequeuing();
  });
  it('can successfully instantiate an empty pseudo queue', () => {
    let error = null;
    try {
      let pq = new PseudoQueue();
    } catch(err) {
      error = err;
    }
    expect(error).toBe(null);
  });
  it('will ensure that calling dequeue on empty pseudo queue raises exception', () => {
    let pq = new PseudoQueue();
    let error = null;

    try {
      pq.dequeue();
    } catch(err) {
      error = err;
    }
    expect(error.message).toBe('Cannot pop an item off of an empty stack');
  });
  it('can successfully mix enqueues and dequeues without any unexpected behaviors occurring', () => {
    let pq = new PseudoQueue();
    pq.enqueue(1);
    pq.enqueue(2);
    pq.dequeue();
    pq.enqueue(2);
    pq.dequeue();
    pq.dequeue();
    pq.enqueue(7);
    pq.enqueue(11);
    pq.enqueue(8);
    pq.dequeue();
    expect(pq.dequeue()).toBe(11);
  });
});

const common_en_dequeuing = () => {
  let pq = new PseudoQueue();
  pq.enqueue(1);
  pq.enqueue(2);
  pq.enqueue(3);
  expect(pq.dequeue()).toBe(1);
  expect(pq.dequeue()).toBe(2);
  expect(pq.dequeue()).toBe(3);
};
