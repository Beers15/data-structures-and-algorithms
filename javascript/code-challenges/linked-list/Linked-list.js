class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.HEAD = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if(this.HEAD !== null) {
      newNode.next = this.HEAD;
      this.HEAD = newNode;
    } else {
      this.HEAD = newNode;
    }
  }

  includes(val) {
    let current = this.HEAD;
    while(current !== null) {
      if(current.value === val) return true;
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.HEAD;
    let str = '';
    while(current !== null) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += 'NULL';

    console.log(str);
  }
}

module.exports = LinkedList;
