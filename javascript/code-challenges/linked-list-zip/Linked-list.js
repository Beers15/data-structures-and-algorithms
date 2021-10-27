class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.length = 0;
  }
}

class LinkedList {
  constructor() {
    this.HEAD = null;
    this.TAIL = null;
  }

  zipLists(list1, list2) {
    //edge case, first list is empty
    if(list1.HEAD === null) {
      list1.HEAD = list2.HEAD;
      list1.TAIL = list2.TAIL;
      list1.length = list2.length;
      return;
    }
    let curr1 = list1.HEAD;
    let curr2 = list2.HEAD;

    while(curr1 && curr2) {
      let temp = curr1.next;
      curr1.next = curr2;

      curr1 = curr1.next;
      curr2 = temp;
    }
    return list1.HEAD;
  }

  kthFromEnd(k) {
    //edge case, negative k
    let n = this.length;
    if(k < 0) {
      throw new Error('k must be positive');
    }

    let current = this.HEAD;

    //edge case, k too large
    if(n - k - 1 < 0) {
      throw new Error('k is to large for this list');
    }

    current = this.HEAD;
    let count = 0;
    while(current) {
      if(n - k - 1 === count) {
        return current.value;
      }
      current = current.next;
      count++;
    }
  }

  append(val) {
    //edge case, empty list
    if(!this.HEAD) {
      let newNode = new Node(val);
      this.length++;
      this.HEAD = newNode;
      this.TAIL = newNode;
    } else {
      let newNode = new Node(val);
      this.length++;
      newNode.next = null;
      let temp = this.TAIL;

      temp.next = newNode;
      this.TAIL = newNode;
    }
  }

  insertAfter(val, newVal) {
    //edge case, empty list
    if(!this.HEAD) {
      throw new Error('List is Empty, no value to insert after');
    }

    let current = this.HEAD;
    let found = false;
    while(current) {
      if(current.value === val) {
        found = true;
        let temp = current.next;
        let newNode = new Node(newVal);
        this.length++;
        current.next = newNode;
        newNode.next = temp;
      }
      if(!current.next) {
        this.TAIL = current;
      }

      current = current.next;
    }

    if(!found) throw new Error('Value does not exist');
  }

  insertBefore(val, newVal) {
    //edge case, empty list
    if(!this.HEAD) {
      throw new Error('List is Empty, no value to insert before');
    }
    //edge case, only 1 node in list
    if(!this.HEAD.next && this.HEAD && this.HEAD.value === val) {
      let newNode = new Node(newVal);
      this.length++;
      let temp = this.HEAD;
      this.HEAD = newNode;
      newNode.next = temp;
      return;
    }

    let current = this.HEAD.next;
    let previous = this.HEAD;

    let found = false;
    while(current) {
      if(current.value === val) {
        found = true;
        let temp = current;
        let newNode = new Node(newVal);
        this.length++;
        previous.next = newNode;
        newNode.next = temp;
      }
      previous = current;
      current = current.next;
    }

    if(!found) throw new Error('Value does not exist');
  }

  delete(val) {
    let current = this.HEAD;
    let found = false;

    while(current && current.next) {
      if(current.next.value === val) {
        found = true;
        current.next = current.next.next;
        this.length--;
      }
      current = current.next;
    }

    if(!found) throw new Error('Value does not exist');
  }

  insert(val) {
    let newNode = new Node(val);
    this.length++;

    if(this.HEAD !== null) {
      newNode.next = this.HEAD;
      this.HEAD = newNode;
      this.TAIL = newNode;
    } else {
      this.HEAD = newNode;
      if(this.HEAD.next === null) {
        this.TAIL = newNode;
      }
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
    return str;
  }
}

module.exports = LinkedList;
