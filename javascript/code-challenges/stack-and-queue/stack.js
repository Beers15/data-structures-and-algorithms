const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let prevTop = this.top;
    let newNode = new Node(val);
    newNode.next = prevTop;
    this.top = newNode;
  }

  pop() {
    if(!this.top) {
      throw new Error('Cannot pop an item off of an empty stack');
    }
    let temp = this.top;
    this.top = temp.next;
    return temp.value;
  }

  peek() {
    if(this.top) return this.top.value;

    throw new Error('Stack is empty, there\'s nothing to peek at');
  }

  isEmpty() {
    return this.top ? false : true;
  }
}

module.exports = Stack;
