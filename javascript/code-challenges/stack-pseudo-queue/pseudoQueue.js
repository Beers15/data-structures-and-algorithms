const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(val) {
    this.s1.push(val);
  }

  dequeue() {
    //s2.isEmpty() not allowed, hence the strange code
    try {
      this.s2.peek();
    } catch(err) {
      //if s2 empty, flip the stack and pop the 'first' value
      while(true) {
        try {
          this.s1.peek();
        } catch(err) {
          break;
        }
        this.s2.push(this.s1.pop());
      }
      return this.s2.pop();
    }


    return this.s2.pop();
  }
}

module.exports = PseudoQueue;
