const LinkedList = require('./Linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let sum = 0;

    for(let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return (sum * 100) % this.size;
  }

  add(key, value) {
    let index = this.hash(key);

    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    if(bucket) {
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  get(key) {
    let index = this.hash(key);

    if(this.map[index]) {
      let current = this.map[index].HEAD;
      while(current !== null) {
        let currentKey = Object.keys(current.value)[0];

        if(currentKey === key) {
          return current.value[currentKey];
        }
        current = current.next;
      }
    }
    return null;
  }

  contains(key) {
    for(let bucket of this.map) {
      if(bucket) {
        let current = bucket.HEAD;
        while(current !== null) {
          if(Object.keys(current.value)[0].toString() === key) return true;
          current = current.next;
        }
      }
    }
    return false;
  }
}

module.exports = HashTable;
