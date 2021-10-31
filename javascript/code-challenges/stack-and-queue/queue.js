const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    let currentBack = this.back;

    if(currentBack) {
      currentBack.next = newNode;
    }
    this.back = newNode;

    if(!this.front) {
      this.front = newNode;
    }
  }

  dequeue() {
    if(!this.front) {
      throw new Error('Cannot pop an item off of an empty stack');
    }
    let nodeToRemove = this.front;
    this.front = nodeToRemove.next;

    if(this.back === nodeToRemove) {
      this.back = nodeToRemove.next;
    }

    return nodeToRemove.value;
  }

  peek() {
    if(this.front) return this.front.value;

    throw new Error('Queue is empty, there\'s nothing to peek at');
  }

  isEmpty() {
    return this.front ? false : true;
  }
}

module.exports = Queue;
